// Ajoute un paramètre ?v=<timestamp> aux balises <script>/<link> pointant
// vers les assets JS/CSS générés par Vite dans dist/index.html. Les noms de
// fichiers Vite contiennent déjà un hash de contenu (cache-busting standard),
// mais un incident de cache pleine-page côté hébergeur a montré que ce n'est
// pas toujours suffisant : ce paramètre supplémentaire donne une garantie
// de plus, à la demande explicite, sans coût de performance.
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const indexPath = resolve(__dirname, '../dist/index.html')
const v = Date.now()

let html = readFileSync(indexPath, 'utf8')
html = html.replace(
  /(src|href)="(\/assets\/[^"]+\.(?:js|css))"/g,
  (_match, attr, url) => `${attr}="${url}?v=${v}"`
)
writeFileSync(indexPath, html)
console.log(`cache-bust.js : ?v=${v} ajouté aux assets JS/CSS de dist/index.html`)
