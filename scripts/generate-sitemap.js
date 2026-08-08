// Régénère les sitemaps avant chaque build, à partir des routes statiques
// ci-dessous et des données de src/data/local.js, src/data/expertise.js et
// src/data/articles.js (source unique : ajouter une ville, une page
// sous-expertise ou un article dans ces fichiers suffit à la faire
// apparaître ici automatiquement, sans oubli possible).
//
// Au-delà de 50 URLs, un sitemap unique devient difficile à maintenir et à
// explorer pour les moteurs de recherche : on le scinde donc en 3 fichiers
// thématiques (pages statiques, pages locales, contenu éditorial), listés
// depuis un sitemap-index.xml, conformément au protocole sitemaps.org.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { localPages, localTrades, localPath } from '../src/data/local.js'
import { expertiseSlugs } from '../src/data/expertise.js'
import { articleSlugs } from '../src/data/articles.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE = 'https://pcevar.fr'
const outDir = resolve(__dirname, '../public')
const today = new Date().toISOString().slice(0, 10)

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/plomberie', priority: '0.9', changefreq: 'monthly' },
  { path: '/chauffage', priority: '0.9', changefreq: 'monthly' },
  { path: '/chauffage/chaudiere-condensation', priority: '0.6', changefreq: 'monthly' },
  { path: '/climatisation', priority: '0.9', changefreq: 'monthly' },
  { path: '/electricite', priority: '0.9', changefreq: 'monthly' },
  { path: '/piscine', priority: '0.9', changefreq: 'monthly' },
  { path: '/traitement-de-l-eau', priority: '0.9', changefreq: 'monthly' },
  { path: '/depannage', priority: '0.8', changefreq: 'monthly' },
  { path: '/realisations', priority: '0.7', changefreq: 'weekly' },
  { path: '/conseils', priority: '0.6', changefreq: 'monthly' },
  { path: '/a-propos', priority: '0.5', changefreq: 'yearly' },
  { path: '/contact', priority: '0.7', changefreq: 'yearly' },
  { path: '/mentions-legales', priority: '0.2', changefreq: 'yearly' },
  { path: '/politique-de-confidentialite', priority: '0.2', changefreq: 'yearly' },
  { path: '/conditions-generales', priority: '0.2', changefreq: 'yearly' },
  { path: '/plan-du-site', priority: '0.3', changefreq: 'monthly' },
]

const localRoutes = localPages.map(({ tradeKey, cityKey }) => ({
  path: localPath(tradeKey, cityKey),
  priority: '0.6',
  changefreq: 'monthly',
}))

const articleRoutes = [
  ...expertiseSlugs.map((slug) => ({ path: `/${slug}`, priority: '0.7', changefreq: 'monthly' })),
  ...articleSlugs.map((slug) => ({ path: `/conseils/${slug}`, priority: '0.6', changefreq: 'monthly' })),
]

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
