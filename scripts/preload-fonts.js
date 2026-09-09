// Injecte dans dist/index.html un <link rel="preload"> pour les polices
// Archivo du premier écran, juste après `vite build` et AVANT
// scripts/prerender.js — qui propage ensuite ces balises dans les 323 pages
// puisqu'il rend chaque route à partir de ce même index.html.
//
// POURQUOI ces polices précisément, et pas les autres :
// le passage aux polices auto-hébergées (08/09/2026) a fait apparaître un
// CLS de 0,024 sur mobile, là où il était à 0. PageSpeed l'a attribué
// nommément à `archivo-*.woff2` : sur 4G lente émulée, Archivo arrive
// après le premier rendu, et le `font-display: swap` remplace alors la
// police de repli sous le bloc de boutons du héros (« DEMANDE DE DEVIS
// GRATUIT » / le numéro de téléphone), qui se décale. Inter, mesurée dans
// le même rapport, contribuait pour 0,000 — elle n'est donc pas préchargée
// ici : un préchargement inutile est du débit pris à ce qui en a besoin.
//
// Deux graisses, celles qu'utilise le héros de toutes les pages :
//   — 900 : le H1 (`font-display font-black`)
//   — 700 : les boutons (`.btn-azure` / `.btn-outline-gold`, `font-display
//     font-bold` — voir src/index.css)
//
// `crossorigin` est obligatoire même en same-origin : une police est
// toujours récupérée en mode CORS anonyme, et sans cet attribut le
// navigateur télécharge le fichier une seconde fois au lieu d'utiliser le
// préchargement.
//
// Si l'ensemble des graisses importées dans src/main.jsx change, revoir
// cette liste : un preload qui ne correspond à aucune police réellement
// utilisée est signalé en avertissement par Chrome, et gaspille du débit
// sur le chemin critique.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')

const WANTED = [/^archivo-latin-900-normal-/, /^archivo-latin-700-normal-/]

const assets = readdirSync(join(distDir, 'assets'))
const fonts = WANTED.map((pattern) => assets.find((f) => pattern.test(f) && f.endsWith('.woff2')))

const missing = WANTED.filter((_, i) => !fonts[i])
if (missing.length > 0) {
  console.error(
    `❌ preload-fonts.js : ${missing.length} police(s) attendue(s) introuvable(s) dans dist/assets/ — motifs : ${missing.map(String).join(', ')}`
  )
  console.error(
    "Les imports de src/main.jsx ont-ils changé ? Sans preload, le CLS mobile remonte (voir l'en-tête de ce fichier)."
  )
  process.exit(1)
}

const tags = fonts
  .map((f) => `    <link rel="preload" as="font" type="font/woff2" href="/assets/${f}" crossorigin>`)
  .join('\n')

const indexPath = join(distDir, 'index.html')
const html = readFileSync(indexPath, 'utf8')

if (html.includes('rel="preload" as="font"')) {
  console.log('preload-fonts.js : balises déjà présentes, rien à faire.')
} else {
  writeFileSync(indexPath, html.replace('</head>', `${tags}\n  </head>`))
  console.log(`preload-fonts.js : ${fonts.length} police(s) préchargée(s) — ${fonts.join(', ')}`)
}
