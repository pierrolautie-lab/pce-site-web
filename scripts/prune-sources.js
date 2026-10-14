// Retire de dist/img/ les photos sources (JPEG/PNG) dont le site ne sert que
// les variantes WebP/AVIF : elles restent dans public/img/ — c'est là que
// scripts/optimize-images.js les relit — mais n'ont rien à faire en ligne.
//
// Une source n'est retirée que si les deux conditions sont réunies :
//   — elle figure dans src/data/imageManifest.js, donc ses variantes existent ;
//   — son nom n'apparaît dans aucun fichier HTML, CSS ou XML du build.
// Le bundle JS est volontairement exclu de la recherche : photos.js y
// embarque les chemins `.jpg` des slots, mais seulement pour en dériver les
// noms des variantes — le navigateur ne demande jamais ces fichiers-là.
// Le logo JPEG (favicon, image de partage, JSON-LD) et le PNG de repli du
// logo sont hors manifeste : ils restent.
import { readFileSync, readdirSync, rmSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve, extname } from 'node:path'
import { imageManifest } from '../src/data/imageManifest.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')

const texts = []
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p)
    else if (['.html', '.css', '.xml'].includes(extname(name))) texts.push(readFileSync(p, 'utf8'))
  }
}
walk(distDir)
const corpus = texts.join('\n')

let removed = 0
let bytes = 0
for (const file of Object.keys(imageManifest)) {
  const p = join(distDir, 'img', file)
  try {
    if (corpus.includes(`/img/${file}`)) continue
    bytes += statSync(p).size
    rmSync(p)
    removed++
  } catch {
    // déjà absent du build : rien à faire
  }
}
console.log(`prune-sources.js : ${removed} source(s) retirée(s) de dist/img (${(bytes / 1024 / 1024).toFixed(1)} Mo)`)
