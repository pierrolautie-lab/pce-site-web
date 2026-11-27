#!/usr/bin/env node
/*
 * Contrôle des <title> et <meta name="description"> sur les pages
 * prérendues (dist/), APRÈS décodage des entités HTML (&nbsp; = 1 caractère).
 *
 *   npm run build && npm run check:meta
 *
 * Vérifie, sur toutes les pages :
 *   - longueur : titre ≤ 60, description ≤ 157 caractères ;
 *   - présence : aucune page sans titre ni description ;
 *   - unicité : aucun titre ni aucune description en double ;
 *   - mots interdits dans le titre et la description (liste FORBIDDEN) ;
 *   - grammaire : « à Le / à Les / de Le / de Les » devant une majuscule,
 *     dans tout le HTML (titres, textes, alt, JSON-LD).
 * Affiche min / max / médiane. Code de sortie 1 si une règle échoue.
 *
 * Commande séparée pour l'instant (27/11/2026) : à brancher sur le build
 * une fois confirmé qu'elle ne produit pas de faux positifs.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, relative, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = resolve(dirname(fileURLToPath(import.meta.url)), '../dist')
if (!existsSync(dist)) {
  console.error('check-meta : dist/ absent — lancer npm run build d’abord.')
  process.exit(1)
}

const TITLE_MAX = 60
const DESC_MAX = 157
/* Recherchés dans le titre et la description uniquement : le corps des
   pages contient légitimement « PCE n'est pas certifié RGE » ou la clause
   « sans garantie de créneau fixe » des CGV. */
const FORBIDDEN = [
  /24\s?h\s?\/\s?24/i, /sous 24\s?h/i, /créneau/i, /contact@pcevar\.fr/i,
  /279 Rue Eugène Pottier/i, /partenaires/i, /\bRGE\b/, /MaPrimeRénov/i,
  /\bCEE\b/, /éco-PTZ/i,
]
/* Pas de \b : sans drapeau u, « à » n’est pas un caractère de mot et \b ne
   s’y accroche jamais (bug constaté le 27/11/2026 : « à Le Muy » passait). */
const GRAMMAR = /(?<![\p{L}\p{N}])(?:à|de)[\s\u00a0\u202f](?:Le|Les|le|les)[\s\u00a0\u202f]\p{Lu}/gu

function decode(s) {
  return s
    .replace(/&nbsp;/gi, '\u00a0')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}

const files = []
;(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (e.name === 'index.html') files.push(p)
  }
})(dist)

const pages = files.map((f) => {
  const html = readFileSync(f, 'utf8')
  const t = html.match(/<title>([\s\S]*?)<\/title>/)?.[1]
  const d = html.match(/<meta name="description" content="([^"]*)"/)?.[1]
  return {
    route: '/' + relative(dist, dirname(f)).split('\\').join('/'),
    title: t === undefined ? null : decode(t).trim(),
    desc: d === undefined ? null : decode(d).trim(),
    html: decode(html),
  }
}).sort((a, b) => a.route.localeCompare(b.route))

const len = (s) => [...s].length
const errors = []
const err = (route, msg) => errors.push(`${route} : ${msg}`)

for (const p of pages) {
  if (!p.title) err(p.route, 'titre absent')
  else if (len(p.title) > TITLE_MAX) err(p.route, `titre ${len(p.title)} > ${TITLE_MAX} « ${p.title} »`)
  if (!p.desc) err(p.route, 'description absente')
  else if (len(p.desc) > DESC_MAX) err(p.route, `description ${len(p.desc)} > ${DESC_MAX} « ${p.desc} »`)
  const meta = `${p.title ?? ''} ${p.desc ?? ''}`
  for (const re of FORBIDDEN) if (re.test(meta)) err(p.route, `interdit ${re} dans titre/description`)
  for (const m of p.html.matchAll(GRAMMAR)) err(p.route, `grammaire « ${m[0]}… »`)
}

for (const key of ['title', 'desc']) {
  const seen = new Map()
  for (const p of pages) if (p[key]) seen.set(p[key], [...(seen.get(p[key]) ?? []), p.route])
  for (const [v, routes] of seen) if (routes.length > 1) err(routes.join(', '), `${key === 'title' ? 'titre' : 'description'} en double « ${v} »`)
}

function stats(values) {
  const a = [...values].sort((x, y) => x - y)
  const mid = a.length % 2 ? a[(a.length - 1) / 2] : (a[a.length / 2 - 1] + a[a.length / 2]) / 2
  return `min ${a[0]} · max ${a[a.length - 1]} · médiane ${mid}`
}
const T = pages.filter((p) => p.title).map((p) => len(p.title))
const D = pages.filter((p) => p.desc).map((p) => len(p.desc))
console.log(`check-meta : ${pages.length} pages`)
console.log(`  titres       ${stats(T)}  (limite ${TITLE_MAX})`)
console.log(`  descriptions ${stats(D)}  (limite ${DESC_MAX})`)

if (errors.length) {
  console.error(`\n${errors.length} problème(s) :`)
  for (const e of errors) console.error('  - ' + e)
  process.exit(1)
}
console.log('  longueurs, présence, unicité, interdits, grammaire : OK')
