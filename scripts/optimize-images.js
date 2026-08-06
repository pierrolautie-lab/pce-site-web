// Génère, pour chaque photo réelle de public/img/, trois variantes WebP
// (400/800/1200 px de large, qualité 80) destinées au `srcset` du composant
// Photo.jsx — 400 pour les vignettes, 800 pour les cartes, 1200 pour les
// héros. Écrit aussi src/data/imageManifest.js (dimensions + largeurs
// réellement générées) pour que le composant sache quel `srcset` construire
// sans avoir à deviner ce qui existe sur le disque.
//
// À relancer manuellement (`node scripts/optimize-images.js`) chaque fois
// qu'une nouvelle photo est ajoutée à public/img/ — ce n'est pas branché sur
// `npm run build` car c'est un traitement lourd sur des fichiers sources,
// pas une étape de compilation.
import sharp from 'sharp'
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, extname, basename } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imgDir = resolve(__dirname, '../public/img')
const WIDTHS = [400, 800, 1200]
const QUALITY = 80

// Le logo n'est volontairement pas traité ici : il sert aussi de favicon et
// d'image OG/Twitter à des URLs fixes en .jpg, référencées telles quelles
// dans index.html.
const SKIP = new Set(['logo-pce-officiel.jpg'])

const files = readdirSync(imgDir).filter(
  (f) => /\.(jpe?g|png)$/i.test(f) && !SKIP.has(f)
)

const manifest = {}

async function run() {
  let totalBefore = 0
  let totalAfter = 0

  for (const file of files) {
    const srcPath = resolve(imgDir, file)
    const sizeBefore = statSync(srcPath).size
    totalBefore += sizeBefore

    const image = sharp(srcPath)
    const meta = await image.metadata()
    const name = basename(file, extname(file))

    const widths = WIDTHS.filter((w) => w <= meta.width)
    // Une image plus étroite que le plus petit palier (400px) garde quand
    // même une variante à sa taille native, pour ne jamais se retrouver
    // sans aucune entrée de srcset.
    if (widths.length === 0) widths.push(meta.width)

    for (const w of widths) {
      const outPath = resolve(imgDir, `${name}-${w}w.webp`)
      await sharp(srcPath)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outPath)
      totalAfter += statSync(outPath).size
    }

    manifest[file] = {
      width: meta.width,
      height: meta.height,
      widths,
    }

    console.log(`${file} → ${widths.map((w) => `${w}w`).join(', ')}`)
  }

  const manifestPath = resolve(__dirname, '../src/data/imageManifest.js')
  const js = `/* Généré par scripts/optimize-images.js — ne pas éditer à la main.
   Relancer le script après tout ajout/remplacement de photo dans public/img/. */
export const imageManifest = ${JSON.stringify(manifest, null, 2)}
`
  writeFileSync(manifestPath, js)

  console.log(
    `\n${files.length} photos traitées. JPEG source : ${(totalBefore / 1024 / 1024).toFixed(1)} Mo → WebP généré : ${(totalAfter / 1024 / 1024).toFixed(1)} Mo`
  )
  console.log(`Manifest écrit -> ${manifestPath}`)
}

run()
