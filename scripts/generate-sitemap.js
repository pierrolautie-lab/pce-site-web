// Régénère public/sitemap.xml avant chaque build, à partir des routes
// statiques ci-dessous et des pages locales définies dans src/data/local.js
// (source unique : si une ville ou un métier local est ajouté là-bas, il
// apparaît ici automatiquement, sans oubli possible).
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { localPages, localTrades } from '../src/data/local.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE = 'https://pcevar.fr'

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/plomberie', priority: '0.9', changefreq: 'monthly' },
  { path: '/chauffage', priority: '0.9', changefreq: 'monthly' },
  { path: '/chauffage/chaudiere-condensation', priority: '0.6', changefreq: 'monthly' },
  { path: '/climatisation', priority: '0.9', changefreq: 'monthly' },
  { path: '/electricite', priority: '0.9', changefreq: 'monthly' },
  { path: '/piscine', priority: '0.9', changefreq: 'monthly' },
  { path: '/traitement-de-l-eau', priority: '0.9', changefreq: 'monthly' },
  { path: '/traitement-de-l-eau/adoucisseur', priority: '0.6', changefreq: 'monthly' },
  { path: '/depannage', priority: '0.8', changefreq: 'monthly' },
  { path: '/realisations', priority: '0.7', changefreq: 'weekly' },
  { path: '/conseils', priority: '0.6', changefreq: 'monthly' },
  { path: '/a-propos', priority: '0.5', changefreq: 'yearly' },
  { path: '/contact', priority: '0.7', changefreq: 'yearly' },
]

const localRoutes = localPages.map(({ tradeKey, cityKey }) => ({
  path: `/${localTrades[tradeKey].urlSlug}-${cityKey.toLowerCase()}`,
  priority: '0.6',
  changefreq: 'monthly',
}))

const allRoutes = [...staticRoutes, ...localRoutes]
const today = new Date().toISOString().slice(0, 10)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
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

const outPath = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(outPath, xml)
console.log(`sitemap.xml généré (${allRoutes.length} URLs) -> ${outPath}`)
