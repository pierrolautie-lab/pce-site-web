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
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')

const LINK = /<link rel="stylesheet"[^>]*href="(\/assets\/[^"?]+\.css)(?:\?[^"]*)?"[^>]*>/

const htmlFiles = readdirSync(distDir, { recursive: true })
  .filter((entry) => entry.endsWith('.html'))
  .map((entry) => join(distDir, entry))

/* Les @font-face d'Inter restent hors de la page, dans une feuille chargée
   sans bloquer le rendu (media="print" basculé en "all" au chargement).
   Intégrées, elles faisaient partir les quatre graisses du premier écran
   (~97 Ko, priorité maximale) dès l'analyse du HTML, en concurrence directe
   avec la photo du héros : mesuré sous réseau réellement ralenti, LCP de
   Contact 2,17 -> 2,56 s et de Réalisations 1,70 -> 2,38 s. Différées, elles
   retrouvent leur place d'avant (après la feuille), et `font-display: swap`
   garde le texte lisible entre-temps. Archivo reste intégrée : ses deux
   graisses du héros sont déjà préchargées (preload-fonts.js) et en
   `optional`. */
const INTER_FACE = /@font-face\{font-family:Inter;[^}]*\}/g

const sheets = new Map()
function split(cssPath) {
  if (!sheets.has(cssPath)) {
    const css = readFileSync(join(distDir, cssPath), 'utf8')
    // `</style` ne peut pas apparaître dans une feuille Tailwind, mais on
    // refuse d'écrire une page cassée si cela arrivait un jour.
    if (/<\/style/i.test(css)) throw new Error(`inline-css.js : « </style » dans ${cssPath}`)
    const faces = css.match(INTER_FACE) || []
    let deferred = null
    if (faces.length) {
      const body = faces.join('')
      const name = `/assets/inter-${createHash('sha256').update(body).digest('hex').slice(0, 8)}.css`
      writeFileSync(join(distDir, name), body)
      deferred = name
    }
    sheets.set(cssPath, { inline: css.replace(INTER_FACE, ''), deferred })
  }
  return sheets.get(cssPath)
}

let count = 0
for (const filePath of htmlFiles) {
  const html = readFileSync(filePath, 'utf8')
  const match = html.match(LINK)
  if (!match) continue
  const { inline, deferred } = split(match[1])
  /* Au chargement de la feuille, la classe `fi` est posée sur <html> dès
     qu'Inter 900 est prête : elle révèle le filigrane des héros (voir
     .hero-watermark dans src/index.css). Sans JS, <noscript> le révèle
     d'emblée. */
  const onload =
    "this.media='all';var d=document.documentElement,f=function(){d.classList.add('fi')};" +
    "document.fonts?document.fonts.load('900 1em Inter').then(f,f):f()"
  const lazySheet = deferred
    ? `<link rel="stylesheet" href="${deferred}" media="print" onload="${onload}">` +
      `<noscript><link rel="stylesheet" href="${deferred}"><style>.hero-watermark{visibility:visible}</style></noscript>`
    : ''
  writeFileSync(filePath, html.replace(match[0], () => `<style>${inline}</style>${lazySheet}`))
  count++
}
console.log(`inline-css.js : feuille intégrée dans ${count} page(s)`)
