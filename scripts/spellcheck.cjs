#!/usr/bin/env node
/*
 * npm run check:spell
 *
 * Passe la prose de site.js / articles.js / local.js (meme perimetre que
 * scripts/typo.cjs, voir scripts/lib/prose-fields.cjs) dans nspell +
 * dictionary-fr (implementation JS de l'algorithme Hunspell, memes
 * dictionnaires .aff/.dic fr_FR que LibreOffice).
 *
 * NE CORRIGE RIEN -- liste les mots absents du dictionnaire, avec
 * fichier/ligne/contexte. Un correcteur generaliste signale a tort le
 * vocabulaire metier (gainable, adoucisseur, redox...) et les noms
 * propres locaux : EXCEPTIONS ci-dessous est le savoir accumule qui rend
 * la sortie de cet outil exploitable -- sans elle, chaque execution
 * remonte les memes ~40 faux positifs. Voir README.md pour la methode
 * a suivre quand un nouveau terme metier ou une nouvelle commune apparait.
 *
 * Limite connue : les mots d'une seule lettre sont ignores (aucun mot
 * francais valide d'une lettre a verifier utilement -- "a"/"as"/"ai" font
 * 2 lettres -- sauf l'article/preposition "a" elidee en apostrophe, deja
 * geree separement). Un "A" isole qui devrait etre "A" ne serait donc
 * pas detecte par cet outil -- verifier ce point separement si besoin
 * (voir scripts/find-caps-accents pattern documente dans le README).
 */
const fs = require('fs');
const path = require('path');
const nspell = require('nspell');
const { ROOT, TARGETS, scanFile } = require('./lib/prose-fields.cjs');

// Vocabulaire metier + noms propres fournis par le client (19-20/08/2026),
// enrichi des termes trouves lors du premier passage. Chaque entree a ete
// verifiee individuellement (pas ajoutee "au cas ou") -- voir README.md.
const EXCEPTIONS = new Set(
  [
    // Vocabulaire metier
    'gainable', 'gainables', 'hygroréglable', 'hygroréglables', 'autoréglable',
    'autoréglables', 'multi-split', 'mono-split', 'redox', 'électrolyseur',
    'électrolyseurs', 'adoucisseur', 'adoucisseurs', 'skimmer', 'skimmers',
    'surpresseur', 'surpresseurs', 'hydrocurage', 'désembouage',
    'thermodynamique', 'thermodynamiques', 'frigorigènes', 'frigorigène',
    'haussmannien', 'haussmannienne', 'bastide', 'bastides',
    'piscinier', 'pisciniste', 'inverter', 'monovitesse', 'bi-énergie',
    'scop', 'orp', 'vdi', "éco-ptz", 'physico-chimique', 'week-end', 'week-ends',
    // Mot rare mais correct (Larousse : "attribuer une valeur superieure
    // a la valeur reelle"), remonte par erreur au premier passage --
    // dictionnaire general incomplet, pas une faute.
    'survaluer',
    // Marques et enseignes
    'Lorgues', 'Dracénie', 'Frisquet', 'elm.leblanc', 'Chappée', 'Daikin',
    'Mitsubishi', 'Midea', 'Pentair', 'Hayward', 'Eoliance', 'Panol', 'Electric',
    "MaPrimeRénov'", 'MaPrimeRénov’',
    // Communes du Var (fournies par le client)
    'Entrecasteaux', 'Villecroze', 'Saint-Aygulf', 'Figanières', 'Ramatuelle',
    // Communes du Var trouvees au premier passage (absentes de la liste
    // initiale, verifiees une a une -- toutes de vrais lieux desservis,
    // voir src/data/local.js)
    'Argens', 'Arcs-sur-Argens', 'Thoronet', 'Muy', 'dracénois', 'Gassin',
    'Croix-Valmer', 'Cavalaire-sur-Mer', 'Garde-Freinet',
    'Rayol-Canadel-sur-Mer', 'Issambres', 'Roquebrune',
    // Sigles et unites hors dictionnaire general
    'PCE', 'NF', 'CEE', 'COP', 'TVA', 'VMC', 'UV', 'pH', 'kW', 'kg', 'mA', 'dB', 'PAC',
    'RC', 'CGI', 'splits',
  ].map((s) => s.toLowerCase())
);

// Autres communes desservies deja couvertes par la liste ci-dessus ou
// dont l'orthographe ne pose pas de probleme (composes standards) --
// gardees separees pour la lisibilite du fichier, meme traitement.
const KNOWN_PLACES = [
  'Lorgues', 'Draguignan', 'Vidauban', 'Flayosc', 'Taradeau', 'Salernes',
  'Trans-en-Provence', 'La Motte', 'Châteaudouble', 'Figanières', 'Le Thoronet',
  'Les Arcs', 'Sainte-Maxime', 'Grimaud', 'Cogolin', 'Le Plan-de-la-Tour',
  'La Garde-Freinet', 'Saint-Tropez', 'Les Issambres', 'Callas', 'Bagnols-en-Forêt',
  'Fréjus', 'Roquebrune-sur-Argens', 'Le Muy', 'Puget-sur-Argens', 'Trans',
  'Saint-Raphaël', 'Seillans', 'Fayence', 'Montauroux', 'Callian', 'Tourrettes',
  'Saint-Antonin-du-Var',
];
for (const p of KNOWN_PLACES) EXCEPTIONS.add(p.toLowerCase());

/* Tokenisation : capture un mot avec ses apostrophes internes ET une
   apostrophe finale eventuelle ("MaPrimeRénov'") en un seul token, puis
   ne separe QUE le prefixe s'il correspond a une particule d'elision
   reconnue (l'/d'/qu'...). Corrige le bug du premier passage, ou
   "MaPrimeRénov'" et "aujourd'hui" etaient coupes sur l'apostrophe et
   remontaient comme faux positifs a chaque execution -- le prefixe
   "aujourd" n'etant pas une particule d'elision reconnue, le mot entier
   reste groupe et n'est plus jamais scinde. */
const WORD_RE = /[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-'’][A-Za-zÀ-ÖØ-öø-ÿ]+)*['’]?/g;
const ELISION_RE = /^(l|d|j|m|t|s|c|n|qu|jusqu|lorsqu|puisqu|quoiqu)['’](.+)$/i;

function tokenize(text) {
  const raw = text.match(WORD_RE) || [];
  const words = [];
  for (const w of raw) {
    const m = w.match(ELISION_RE);
    words.push(m ? m[2] : w);
  }
  return words;
}

async function main() {
  const mod = await import('dictionary-fr');
  const dictionary = mod.default;
  const dict = typeof dictionary === 'function'
    ? await new Promise((resolve, reject) => dictionary((err, d) => (err ? reject(err) : resolve(d))))
    : await dictionary;
  const spell = nspell(dict);

  const suspects = [];
  const seen = new Map();

  for (const rel of TARGETS) {
    const abs = path.join(ROOT, rel);
    let lineOf;
    scanFile(abs, ({ node, govKey, value }) => {
      if (!lineOf) {
        const src = fs.readFileSync(abs, 'utf8');
        lineOf = (index) => src.slice(0, index).split('\n').length;
      }
      const words = tokenize(value);
      for (const word of words) {
        if (word.length < 2) continue;
        if (/^\d+$/.test(word)) continue;
        const lower = word.toLowerCase();
        if (EXCEPTIONS.has(lower)) continue;
        if (spell.correct(word)) continue;
        if (spell.correct(lower)) continue;
        if (spell.correct(word[0].toUpperCase() + word.slice(1).toLowerCase())) continue;
        if (word.includes('-')) {
          const subparts = word.split('-');
          if (subparts.every((p) => p.length < 2 || spell.correct(p) || EXCEPTIONS.has(p.toLowerCase()))) continue;
        }
        const key = lower + '|' + rel;
        if (seen.has(key)) continue;
        seen.set(key, true);
        suspects.push({
          file: rel,
          line: lineOf(node.start),
          key: govKey,
          word,
          context: value.length > 140 ? value.slice(0, 140) + '…' : value,
        });
      }
    });
  }

  if (!suspects.length) {
    console.log('Aucun suspect orthographique.');
    return;
  }

  console.log(`${suspects.length} suspect(s) -- a examiner un par un, rien n'est corrige automatiquement :\n`);
  for (const s of suspects) {
    console.log(`${s.file}:${s.line} [${s.key}] "${s.word}"`);
    console.log(`  ${s.context}\n`);
  }
  console.log('Si un terme est legitime (vocabulaire metier, nom propre), ajoute-le a EXCEPTIONS dans scripts/spellcheck.cjs -- voir README.md pour la methode (verifier le mot avant de l\'ajouter, ne jamais ajouter "au cas ou").');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
