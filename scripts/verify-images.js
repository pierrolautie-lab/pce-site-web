#!/usr/bin/env node
/*
 * Garde-fou de build : vérifie que chaque fichier déclaré dans
 * src/data/photos.js (clientPhotos) existe réellement sur le disque, et
 * que les images sources .jpg/.png ont bien leurs variantes WebP
 * générées par scripts/optimize-images.js et référencées dans
 * src/data/imageManifest.js.
 *
 * Sans ce contrôle, un chemin qui ne correspond plus au fichier réel (un
 * renommage, un dépôt sans relancer optimize-images.js) donne une image
 * cassée ou un slot qui tombe sur le repli — silencieusement, jusqu'à ce
 * qu'un humain le remarque en production. C'est exactement ce qui s'est
 * produit sur Plomberie/Chauffage le 21/08/2026.
 *
 * Fait partie de `npm run build` (premier script exécuté, avant même le
 * sitemap) : un chemin cassé bloque le build plutôt que d'être déployé.
 * `npm run check:images` le relance seul, à la demande.
 */
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, basename, extname } from 'node:path'
import { clientPhotos } from '../src/data/photos.js'
import { imageManifest } from '../src/data/imageManifest.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = resolve(__dirname, '../public')

const errors = []
const webpWarnings = []

for (const [slot, declaredPath] of Object.entries(clientPhotos)) {
  const absPath = resolve(PUBLIC_DIR, '.' + declaredPath)
  if (!existsSync(absPath)) {
    errors.push(`slot ${slot} -> ${declaredPath} : fichier absent de public/img/`)
    continue
  }

  const ext = extname(declaredPath).toLowerCase()
  const filename = basename(declaredPath)

  if (ext === '.webp') {
    // optimize-images.js ne scanne que .jpg/.png en source : un .webp n'a
    // jamais de variantes générées ni d'entrée manifest, par construction
    // (voir son propre commentaire). Ce n'est pas une erreur, mais ça prive
    // la page d'un srcset responsive — signalé, pas bloquant.
    webpWarnings.push(`slot ${slot} -> ${declaredPath} : source .webp, jamais de variantes générées (voir scripts/optimize-images.js)`)
    continue
  }

  if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') continue

  const meta = imageManifest[filename]
  if (!meta) {
    errors.push(`slot ${slot} -> ${declaredPath} : absent de imageManifest.js (relancer node scripts/optimize-images.js)`)
    continue
  }

  const base = declaredPath.replace(/\.(jpe?g|png)$/i, '')
  for (const w of meta.widths) {
    const variantPath = resolve(PUBLIC_DIR, '.' + `${base}-${w}w.webp`)
    if (!existsSync(variantPath)) {
      errors.push(`slot ${slot} -> ${declaredPath} : variante ${w}w déclarée dans imageManifest.js mais absente de public/img/`)
    }
  }
}

console.log(`Vérification de ${Object.keys(clientPhotos).length} photos déclarées dans photos.js…`)

if (webpWarnings.length) {
  console.log(`\n${webpWarnings.length} avertissement(s) (non bloquant) :`)
  for (const w of webpWarnings) console.log(`  ! ${w}`)
}

if (errors.length) {
  console.error(`\n${errors.length} erreur(s) :`)
  for (const e of errors) console.error(`  ✕ ${e}`)
  console.error('\nBuild interrompu — corrige photos.js, dépose le fichier manquant, ou relance optimize-images.js.')
  process.exit(1)
}

console.log('Toutes les photos déclarées existent et ont leurs variantes. OK.')
