// Ajoute un paramètre ?v=<timestamp> aux balises <script>/<link> pointant
// vers les assets JS/CSS générés par Vite. Les noms de fichiers Vite
// contiennent déjà un hash de contenu (cache-busting standard), mais un
// incident de cache pleine-page côté hébergeur a montré que ce n'est pas
// toujours suffisant : ce paramètre supplémentaire donne une garantie
// de plus, à la demande explicite, sans coût de performance.
//
// Balaie tous les index.html de dist/ (racine + un par route prérendue par
// prerender.js, qui s'exécute avant ce script), pas seulement celui de la
// racine : chacun référence les mêmes assets et doit recevoir le même ?v=.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')
const v = Date.now()

const htmlFiles = readdirSync(distDir, { recursive: true })
  .filter((entry) => entry.endsWith('index.html'))
  .map((entry) => join(distDir, entry))

for (const filePath of htmlFiles) {
  let html = readFileSync(filePath, 'utf8')
  html = html.replace(
    /(src|href)="(\/assets\/[^"]+\.(?:js|css))"/g,
    (_match, attr, url) => `${attr}="${url}?v=${v}"`
  )
  writeFileSync(filePath, html)
}
console.log(`cache-bust.js : ?v=${v} ajouté aux assets JS/CSS de ${htmlFiles.length} fichier(s) HTML`)
