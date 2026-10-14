// Remplace, dans chaque page prérendue, le <link rel="stylesheet"> du bundle
// CSS par son contenu dans une balise <style>. Lancé après cache-bust.js.
//
// POURQUOI la feuille entière et pas un « CSS critique » : elle pèse ~9 Ko
// compressée. Extraire un critique par gabarit, pour 323 pages, coûterait
// un outil de plus pour un gain marginal sur ces 9 Ko, avec un risque de
// FOUC dès qu'une règle manque. Intégrée telle quelle, elle supprime la
// seule requête bloquante du premier rendu, et la chaîne HTML -> CSS ->
// police devient HTML -> police : les @font-face sont lus dès le HTML.
// Mesuré le 15/10/2026 (Lighthouse mobile, accueil) : FCP 2,25 s -> 0,8 s.
//
// Contrepartie assumée : la feuille n'est plus mise en cache d'une page à
// l'autre (+9 Ko compressés par page vue). Le fichier .css reste dans
// dist/assets — rien ne le référence plus, mais un HTML resté en cache
// chez un visiteur pendant le déploiement le trouvera encore.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')

const LINK = /<link rel="stylesheet"[^>]*href="(\/assets\/[^"?]+\.css)(?:\?[^"]*)?"[^>]*>/

const htmlFiles = readdirSync(distDir, { recursive: true })
  .filter((entry) => entry.endsWith('.html'))
  .map((entry) => join(distDir, entry))

let count = 0
for (const filePath of htmlFiles) {
  const html = readFileSync(filePath, 'utf8')
  const match = html.match(LINK)
  if (!match) continue
  // `</style` ne peut pas apparaître dans une feuille Tailwind, mais on
  // refuse d'écrire une page cassée si cela arrivait un jour.
  const css = readFileSync(join(distDir, match[1]), 'utf8')
  if (/<\/style/i.test(css)) throw new Error(`inline-css.js : « </style » dans ${match[1]}`)
  writeFileSync(filePath, html.replace(match[0], () => `<style>${css}</style>`))
  count++
}
console.log(`inline-css.js : feuille intégrée dans ${count} page(s)`)
