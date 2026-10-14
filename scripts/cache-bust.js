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
  /* Seuls le point d'entrée JS et la feuille de style reçoivent ?v=. Les
     autres chunks (code splitting, App.jsx) sont importés par le JS à leur
     URL nue : un <link rel="modulepreload"> vers `chunk.js?v=…` — le
     prérendu en capture, posés par Vite — désignerait une autre URL, et le
     navigateur téléchargerait le fichier deux fois. */
  const entry = html.match(/<script type="module"[^>]*src="(\/assets\/[^"?]+\.js)"/)?.[1]
  html = html.replace(
    /(src|href)="(\/assets\/[^"]+\.(?:js|css))"/g,
    (match, attr, url) => (url === entry || url.endsWith('.css') ? `${attr}="${url}?v=${v}"` : match)
  )
  writeFileSync(filePath, html)
}
console.log(`cache-bust.js : ?v=${v} ajouté aux assets JS/CSS de ${htmlFiles.length} fichier(s) HTML`)
