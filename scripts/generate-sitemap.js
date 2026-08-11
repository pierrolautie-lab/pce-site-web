// Régénère les sitemaps avant chaque build, à partir de routes.js — source
// unique des routes, partagée avec prerender.js pour que les deux listes ne
// puissent jamais diverger (ajouter une ville, une page sous-expertise ou un
// article dans src/data/ suffit à la faire apparaître aux deux endroits).
//
// Au-delà de 50 URLs, un sitemap unique devient difficile à maintenir et à
// explorer pour les moteurs de recherche : on le scinde donc en 3 fichiers
// thématiques (pages statiques, pages locales, contenu éditorial), listés
// depuis un sitemap-index.xml, conformément au protocole sitemaps.org.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { staticRoutes, localRoutes, articleRoutes } from './routes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE = 'https://pcevar.fr'
const outDir = resolve(__dirname, '../public')
const today = new Date().toISOString().slice(0, 10)

function urlsetXml(routes) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
}

const sitemaps = [
  { file: 'sitemap-pages.xml', routes: staticRoutes },
  { file: 'sitemap-local.xml', routes: localRoutes },
  { file: 'sitemap-articles.xml', routes: articleRoutes },
]

sitemaps.forEach(({ file, routes }) => {
  writeFileSync(resolve(outDir, file), urlsetXml(routes))
})

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    ({ file }) => `  <sitemap>
    <loc>${SITE}/${file}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>
`
writeFileSync(resolve(outDir, 'sitemap-index.xml'), indexXml)

const totalUrls = sitemaps.reduce((sum, s) => sum + s.routes.length, 0)
console.log(
  `sitemap-index.xml généré (${totalUrls} URLs réparties sur ${sitemaps.length} sitemaps) -> ${outDir}`
)
