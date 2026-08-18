#!/usr/bin/env node
/**
 * Normalise la typographie française dans les fichiers de contenu :
 *   1. espace insécable avant  ? ! : ; »  et avant  %
 *   2. apostrophe droite  '  ->  apostrophe typographique  '
 *   3. trois points  ...  ->  point de suspension unique  …
 *
 * Ne touche QUE les valeurs de chaînes considérées comme de la prose
 * affichée — jamais les clés, les slugs, les chemins, les classes CSS,
 * le code ou les commentaires. Voir DETECTION ci-dessous pour le détail
 * de cette distinction.
 *
 * Par défaut : mode aperçu, aucune écriture. `--write` applique réellement
 * les changements. `--file <chemin>` limite l'exécution à un seul fichier.
 *
 *   node scripts/normalize-typography.js            # aperçu (diff) pour les 3 fichiers
 *   node scripts/normalize-typography.js --file src/data/site.js
 *   node scripts/normalize-typography.js --write    # applique pour de vrai
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as parser from '@babel/parser'
import traverseModule from '@babel/traverse'

const traverse = traverseModule.default
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const TARGET_FILES = [
  'src/data/site.js',
  'src/data/articles.js',
  'src/data/local.js',
]

/* ------------------------------------------------------------------ *
 * DÉTECTION : prose vs. code
 *
 * Une chaîne n'est candidate que si :
 *   (a) elle est la valeur d'une propriété d'objet dont la CLÉ figure
 *       dans PROSE_KEYS ci-dessous (liste blanche, pas liste noire :
 *       on énumère ce qui EST de la prose plutôt que de deviner tout ce
 *       qui ne l'est PAS — plus sûr sur un fichier qu'on ne maîtrise pas
 *       à 100 %), ou
 *   (b) elle est un élément direct d'un tableau (`paragraphs: [...]`,
 *       `bullets: [...]`, `heroChecklist: [...]`...) dont le tableau est
 *       lui-même la valeur d'une clé PROSE_KEYS.
 *
 * ET (garde-fou supplémentaire, même si la clé est dans la liste
 * blanche) la chaîne ne doit PAS ressembler à un chemin, une URL, un
 * slug ou une couleur — voir looksLikeCode().
 * ------------------------------------------------------------------ */
/* Liste établie par audit exhaustif des clés à valeur chaîne réellement
   présentes dans les 3 fichiers cibles (voir commande d'audit dans le
   message de présentation) — pas une supposition a priori. */
const PROSE_KEYS = new Set([
  'title', 'subtitle', 'tagline', 'intro', 'card', 'text', 'label',
  'heading', 'h2', 'paragraphs', 'bullets', 'checklist',
  'heroChecklist', 'metaDescription', 'lead', 'kicker', 'eyebrow',
  'q', 'a', 'ctaLabel', 'primaryLabel', 'signature', 'baseline',
  'baselineShort', 'hoursShort', 'note', 'detail', 'tip', 'value',
  'd', 'closing', 'expertise', 'navLabel',
])

/* Clés qu'on ne veut JAMAIS traiter même si un jour ajoutées par erreur
   à PROSE_KEYS ci-dessus par un futur éditeur — deuxième filet.
   Inclut volontairement les champs légaux (siret, denomination,
   capital...) : ce ne sont pas de la prose éditoriale, et leur exactitude
   registre prime sur l'esthétique typographique — à ouvrir séparément si
   besoin, pas par ce script générique. */
const NEVER_KEYS = new Set([
  'slug', 'to', 'href', 'src', 'path', 'icon', 'tags', 'tag', 'id',
  'key', 'lock', 'w', 'h', 'color', 'ctaTo', 'rel', 'type', 'sizes',
  'className', 'imgClassName', 'rounded', 'format', 'ext', 'zone',
  'page', 'name', 'relatedExpertise', 'relatedService', 'domain',
  'url', 'urlSlug', 'siteLabel', 'socialHub', 'serviceKey', 'trade',
  'year', 'swatch', 'verb', 'denomination', 'nomCommercial', 'capital',
  'siret', 'siren', 'rcs', 'formeJuridique', 'dateImmatriculation',
  'directeurPublication', 'adresse', 'street', 'street2', 'city',
  'region', 'zip', 'email', 'phone', 'phoneHref', 'activites',
  'photo', 'nom', 'site', 'tva',
])

function looksLikeCode(str) {
  if (!str) return true
  const s = str.trim()
  if (s === '') return true
  if (/^\//.test(s)) return true // chemin
  if (/^https?:\/\//.test(s)) return true // URL
  if (/^#[0-9a-fA-F]{3,8}$/.test(s)) return true // couleur hex
  if (/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s) && !s.includes(' ')) return true // slug kebab-case sans espace
  if (/\.(jpe?g|png|webp|svg|pdf|gif)$/i.test(s)) return true // nom de fichier
  return false
}

/* ------------------------------------------------------------------ *
 * TRANSFORMATIONS — appliquées uniquement au contenu jugé prose
 * ------------------------------------------------------------------ */
function applyTypography(str) {
  let out = str

  // 3. Points de suspension
  out = out.replace(/\.{3,}/g, '…')

  // 2. Apostrophe typographique (uniquement l'apostrophe droite ASCII)
  out = out.replace(/'/g, '’')

  // 1. Espace insécable avant ; ! ? (normalise l'espace existante ou
  //    son absence en une unique espace insécable)
  out = out.replace(/([^\s])\s?([;!?])/g, '$1 $2')

  // 1. Espace insécable avant : et »
  out = out.replace(/([^\s])\s?(:|»)/g, '$1 $2')

  // 1. Espace insécable avant % (après un chiffre)
  out = out.replace(/(\d)\s?%/g, '$1 %')

  return out
}

/* ------------------------------------------------------------------ *
 * Collecte des chaînes candidates dans un fichier, avec position exacte
 * dans le texte source (pour une substitution chirurgicale, sans jamais
 * ré-imprimer l'AST en entier : le diff ne montre QUE ce qui change).
 * ------------------------------------------------------------------ */
function collectEdits(source) {
  const ast = parser.parse(source, { sourceType: 'module', plugins: ['jsx'] })
  const edits = []
  const skipped = []

  function fieldKeyFor(stringNode, parentPath) {
    const parent = parentPath.parent
    if (parent.type === 'ObjectProperty' || parent.type === 'ObjectMethod') {
      const k = parent.key
      return k.name || k.value
    }
    if (parent.type === 'ArrayExpression') {
      // Remonte jusqu'à la propriété d'objet englobante (paragraphs: [...])
      let p = parentPath.parentPath
      while (p && p.node.type !== 'ObjectProperty' && p.node.type !== 'Program') {
        p = p.parentPath
      }
      if (p && p.node.type === 'ObjectProperty') {
        const k = p.node.key
        return k.name || k.value
      }
    }
    // Gabarit `intro: (t) => \`...${t.x}...\`` (src/data/local.js) : le
    // littéral de gabarit est le corps d'une fonction fléchée, elle-même
    // valeur d'une propriété d'objet — remonte à travers la fonction.
    if (parent.type === 'ArrowFunctionExpression' || parent.type === 'FunctionExpression') {
      let p = parentPath.parentPath
      while (p && p.node.type !== 'ObjectProperty' && p.node.type !== 'Program') {
        p = p.parentPath
      }
      if (p && p.node.type === 'ObjectProperty') {
        const k = p.node.key
        return k.name || k.value
      }
    }
    return null
  }

  traverse(ast, {
    StringLiteral(p) {
      const key = fieldKeyFor(p.node, p)
      if (!key) return
      if (NEVER_KEYS.has(key)) return
      if (!PROSE_KEYS.has(key)) return
      if (looksLikeCode(p.node.value)) {
        skipped.push({ key, value: p.node.value, reason: 'looksLikeCode' })
        return
      }
      const transformed = applyTypography(p.node.value)
      if (transformed === p.node.value) return

      const quote = source[p.node.start]
      edits.push({
        start: p.node.start,
        end: p.node.end,
        oldRaw: source.slice(p.node.start, p.node.end),
        newRaw: quote + transformed.replace(new RegExp(quote, 'g'), '\\' + quote) + quote,
        key,
        before: p.node.value,
        after: transformed,
      })
    },

    // Portions statiques des gabarits (`intro: (t) => \`Texte ${t.verb} texte\``)
    // — seuls les segments de texte entre les `${...}` sont touchés, jamais
    // les expressions elles-mêmes (on ne descend pas dans `.expressions`).
    TemplateLiteral(p) {
      const key = fieldKeyFor(p.node, p)
      if (!key) return
      if (NEVER_KEYS.has(key)) return
      if (!PROSE_KEYS.has(key)) return

      for (const quasi of p.node.quasis) {
        const raw = quasi.value.raw
        if (looksLikeCode(raw)) {
          skipped.push({ key, value: raw, reason: 'looksLikeCode' })
          continue
        }
        const transformed = applyTypography(raw)
        if (transformed === raw) continue

        edits.push({
          start: quasi.start,
          end: quasi.end,
          oldRaw: source.slice(quasi.start, quasi.end),
          newRaw: transformed,
          key,
          before: raw,
          after: transformed,
        })
      }
    },
  })

  return { edits, skipped }
}

function applyEdits(source, edits) {
  const sorted = [...edits].sort((a, b) => b.start - a.start)
  let out = source
  for (const e of sorted) {
    out = out.slice(0, e.start) + e.newRaw + out.slice(e.end)
  }
  return out
}

function main() {
  const args = process.argv.slice(2)
  const write = args.includes('--write')
  const fileArgIdx = args.indexOf('--file')
  const files = fileArgIdx >= 0 ? [args[fileArgIdx + 1]] : TARGET_FILES

  let totalEdits = 0
  const showSkipped = args.includes('--show-skipped')
  for (const rel of files) {
    const abs = path.join(__dirname, '..', rel)
    const source = fs.readFileSync(abs, 'utf8')
    const { edits, skipped } = collectEdits(source)
    totalEdits += edits.length

    console.log(`\n=== ${rel} — ${edits.length} chaîne(s) modifiée(s) ===`)
    for (const e of edits.slice(0, 500)) {
      console.log(`  [${e.key}] ${JSON.stringify(e.before)}\n    -> ${JSON.stringify(e.after)}`)
    }
    if (showSkipped && skipped.length) {
      console.log(`  --- ${skipped.length} chaîne(s) écartée(s) par looksLikeCode() ---`)
      for (const s of skipped.slice(0, 500)) {
        console.log(`  [${s.key}] écarté : ${JSON.stringify(s.value)}`)
      }
    }

    if (write && edits.length) {
      const next = applyEdits(source, edits)
      fs.writeFileSync(abs, next, 'utf8')
      console.log(`  écrit -> ${rel}`)
    }
  }

  console.log(`\nTotal : ${totalEdits} chaîne(s)${write ? ' écrites' : ' (aperçu — relancer avec --write pour appliquer)'}`)
}

main()
