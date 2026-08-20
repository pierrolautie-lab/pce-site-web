/*
 * Périmètre partagé par les deux outils de relecture (scripts/typo.cjs et
 * scripts/spellcheck.cjs) : quelles chaînes, dans site.js / articles.js /
 * local.js, sont de la prose affichée — et lesquelles ne le sont jamais.
 *
 * C'est le savoir accumulé lors de l'audit du 19-20/08/2026 (voir
 * README.md, section « Relecture typographique et orthographique »).
 * Toute modification ici doit être justifiée par une vérification directe
 * du contenu réel de la clé (voir méthode dans le README) — ne pas ajouter
 * une clé « parce qu'elle a l'air de contenir du texte ».
 */
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const ROOT = path.join(__dirname, '..', '..');
const TARGETS = ['src/data/site.js', 'src/data/articles.js', 'src/data/local.js'];

// Clés dont la valeur est de la prose destinée à l'affichage. Chacune a
// été vérifiée sur un échantillon réel avant ajout (pas une supposition).
const WHITELIST = new Set([
  'title', 'subtitle', 'intro', 'text', 'label', 'q', 'a', 'kicker', 'tagline',
  'lead', 'detail', 'verb', 'metaDescription', 'ctaLabel', 'primaryLabel',
  'heading', 'card', 'paragraphs', 'bullets', 'points', 'checklist', 'why',
  'signature', 'expertise', 'baseline', 'baselineShort', 'navLabel', 'eyebrow',
  'h1', 'h2', 'heroChecklist', 'items', 'checks', 'solutions', 'closing', 'tip',
  'hoursShort', 'note',
]);

// Clés dont la valeur n'est JAMAIS de la prose, même si le nom pourrait le
// laisser penser — slugs, chemins, noms de fichiers, classes CSS, données
// structurées. Prioritaire sur WHITELIST en cas de conflit.
const BLACKLIST = new Set([
  'slug', 'urlSlug', 'path', 'to', 'href', 'tags', 'icon', 'iconClass',
  'haloClass', 'subtitleClassName', 'titleClassName', 'className', 'class',
  'id', 'key', 'lock', 'photoSlot', 'relatedExpertise', 'serviceKey', 'trade',
  'tone', 'city', 'name', 'fetchpriority', 'rounded', 'sizes', 'bgClassName',
  'imgClassName', 'year', 'rating', 'count', 'stars', 'value', 'swatch',
  'color', 'suffix', 'src', 'alt', 'photo', 'ctaTo', 'zone', 'sujet', 'page',
]);

/* `d` et `h` (tableau `hours` de site.js : { d: 'Lundi — Vendredi', h: '7h30
   – 18h00' }) sont sciemment ABSENTS des deux listes : la valeur est bien
   de la prose à cet endroit précis, mais ce sont des noms de clé à une
   lettre — `d` est aussi l'attribut `d` d'un tracé SVG (voir Icon.jsx).
   Un outil qui tourne indéfiniment sur du contenu futur ne doit pas
   whitelister une clé aussi générique : le risque de corrompre un tracé
   SVG plus tard dépasse le bénéfice sur ces 3 chaînes actuelles. */

function looksLikePathOrSlug(value) {
  if (/^\/img\//.test(value)) return true;
  if (/^https?:\/\//.test(value)) return true;
  if (/^#/.test(value)) return true;
  if (/^[a-z0-9]+(-[a-z0-9]+)*$/.test(value)) return true; // pur slug, sans espace ni majuscule
  return false;
}

function resolveGoverningKey(nodePath) {
  let p = nodePath;
  while (p) {
    const parent = p.parentPath;
    if (!parent) return null;
    const pn = parent.node;
    if (pn.type === 'ObjectProperty' && parent.node.value === p.node) {
      const k = pn.key;
      if (k.type === 'Identifier') return k.name;
      if (k.type === 'StringLiteral') return k.value;
      return null;
    }
    if (
      pn.type === 'ArrayExpression' || pn.type === 'ArrowFunctionExpression' ||
      pn.type === 'FunctionExpression' || pn.type === 'BlockStatement' ||
      pn.type === 'ReturnStatement' || pn.type === 'ConditionalExpression' ||
      pn.type === 'LogicalExpression' || pn.type === 'ParenthesizedExpression'
    ) {
      p = parent;
      continue;
    }
    return null; // structure inattendue -> pas de clé gouvernante identifiée
  }
  return null;
}

function isObjectKey(nodePath) {
  const parent = nodePath.parentPath;
  if (!parent) return false;
  const pn = parent.node;
  return pn.type === 'ObjectProperty' && pn.key === nodePath.node;
}

/**
 * Parcourt un fichier cible et appelle `onCandidate` pour chaque chaîne
 * candidate (StringLiteral ou TemplateElement) qui passe les trois
 * filtres : pas une clé, pas dans la liste noire, dans la liste blanche
 * et pas de forme chemin/slug. `onCandidate` reçoit
 * { kind, node, govKey, value, start, end }. Ne modifie rien — les appelants
 * (typo.cjs, spellcheck.cjs) décident quoi faire du résultat.
 */
function scanFile(absPath, onCandidate) {
  const src = fs.readFileSync(absPath, 'utf8');
  const ast = parser.parse(src, { sourceType: 'module', plugins: [] });

  traverse(ast, {
    StringLiteral(nodePath) {
      if (isObjectKey(nodePath)) return;
      const node = nodePath.node;
      const govKey = resolveGoverningKey(nodePath);
      if (govKey && BLACKLIST.has(govKey)) return;
      if (!govKey || !WHITELIST.has(govKey)) return;
      if (looksLikePathOrSlug(node.value)) return;
      onCandidate({ kind: 'string', node, govKey, value: node.value, start: node.start, end: node.end });
    },
    TemplateElement(nodePath) {
      const node = nodePath.node;
      const govKey = resolveGoverningKey(nodePath.parentPath);
      if (govKey && BLACKLIST.has(govKey)) return;
      if (!govKey || !WHITELIST.has(govKey)) return;
      onCandidate({ kind: 'template', node, govKey, value: node.value.raw, start: node.start, end: node.end });
    },
  });

  return src;
}

module.exports = {
  ROOT,
  TARGETS,
  WHITELIST,
  BLACKLIST,
  looksLikePathOrSlug,
  resolveGoverningKey,
  isObjectKey,
  scanFile,
};
