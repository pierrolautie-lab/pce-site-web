#!/usr/bin/env node
/*
 * Relecture typographique de site.js / articles.js / local.js.
 *
 *   npm run check:typo   -- signale les defauts, n'ecrit rien (par defaut)
 *   npm run fix:typo      -- applique les corrections (--write)
 *
 * Trois transformations, uniquement sur les champs de prose definis dans
 * scripts/lib/prose-fields.cjs (voir ce fichier pour le detail du
 * perimetre -- c'est lui la reference, pas ce commentaire) :
 *   1. "..." -> "..." (point de suspension unique, U+2026)
 *   2. apostrophe droite -> apostrophe typographique (U+2019)
 *   3. espace normale avant ? ! : ; % et le guillemet fermant francais
 *      -> espace insecable :
 *        - U+202F (fine) avant ? ! ;
 *        - U+00A0 (normale) avant : le guillemet fermant et %
 *
 * Methode : parsing AST (Babel) pour reperer la chaine, mais AUCUNE
 * regeneration de code -- remplacement de plage sur le texte source
 * original, pour un diff limite aux seuls caracteres changes (voir
 * README.md pour pourquoi ce choix compte : il rend le diff relisible et
 * l'operation verifiable).
 *
 * Limite connue : `metaClosings` dans local.js (tableau de 4 phrases au
 * niveau racine du module, hors de toute cle d'objet) n'est pas couvert --
 * la resolution de cle gouvernante ne remonte pas jusqu'a un `const`
 * nomme. Verifie manuellement sans caractere concerne a ce jour ; a
 * surveiller si son contenu change.
 */
const fs = require('fs');
const path = require('path');
const { ROOT, TARGETS, scanFile } = require('./lib/prose-fields.cjs');

const FRENCH_CLOSING_GUILLEMET = '»';
const FINE_SPACE = ' '; // avant ? ! ;
const NBSP = ' '; // avant : » %
const SPACE_CHARS = new Set([' ', NBSP, FINE_SPACE]);

function transformText(text) {
  let out = text;
  out = out.split('...').join('…');
  out = out.split("'").join('’');
  const rules = [
    { char: '?', space: FINE_SPACE },
    { char: '!', space: FINE_SPACE },
    { char: ';', space: FINE_SPACE },
    { char: FRENCH_CLOSING_GUILLEMET, space: NBSP },
    { char: '%', space: NBSP },
    { char: ':', space: NBSP, guard: (s, i) => s[i + 1] !== '/' /* evite http:// */ },
  ];
  for (const { char, space, guard } of rules) {
    let result = '';
    for (let i = 0; i < out.length; i++) {
      const c = out[i];
      if (c === char && (!guard || guard(out, i))) {
        const prev = result[result.length - 1];
        if (prev === space) {
          result += c; // deja correct
        } else if (SPACE_CHARS.has(prev)) {
          result = result.slice(0, -1) + space + c; // normalise l'espace existante (meme si deja une insecable du mauvais type)
        } else if (prev === undefined || /\s/.test(prev)) {
          result += c; // debut de chaine ou saut de ligne : ne rien inserer
        } else {
          result += space + c; // insere l'insecable manquante
        }
      } else {
        result += c;
      }
    }
    out = result;
  }
  return out;
}

function processFile(rel, write) {
  const abs = path.join(ROOT, rel);
  const edits = [];
  const changes = [];

  const src = scanFile(abs, ({ kind, node, govKey, value, start, end }) => {
    const after = transformText(value);
    if (after === value) return;
    if (kind === 'string') {
      const raw = fs.readFileSync(abs, 'utf8').slice(start, end);
      const quote = raw[0];
      const escaped = after.replace(/\\/g, '\\\\').split(quote).join('\\' + quote);
      edits.push({ start, end, replacement: quote + escaped + quote });
    } else {
      edits.push({ start, end, replacement: after });
    }
    changes.push({ key: govKey, before: value, after });
  });

  if (!changes.length) {
    console.log(`  ${rel} : rien a signaler`);
    return 0;
  }

  console.log(`  ${rel} : ${changes.length} chaine(s)`);
  for (const c of changes.slice(0, 200)) {
    console.log(`    [${c.key}] ${JSON.stringify(c.before)}\n      -> ${JSON.stringify(c.after)}`);
  }

  if (write) {
    edits.sort((a, b) => b.start - a.start);
    let out = src;
    for (const e of edits) out = out.slice(0, e.start) + e.replacement + out.slice(e.end);
    fs.writeFileSync(abs, out, 'utf8');
    console.log(`    ecrit -> ${rel}`);
  }

  return changes.length;
}

function main() {
  const write = process.argv.includes('--write');
  console.log(write ? 'Application des corrections typographiques...' : 'Controle typographique (apercu, rien n\'est ecrit -- relancer avec fix:typo pour appliquer)...');
  let total = 0;
  for (const rel of TARGETS) total += processFile(rel, write);
  console.log(`\nTotal : ${total} chaine(s) ${write ? 'corrigee(s)' : 'a corriger'}.`);
  if (!write && total > 0) console.log('Aucune ecriture -- relancer avec `npm run fix:typo` pour appliquer.');
}

main();
