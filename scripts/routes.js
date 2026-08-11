// Source unique des routes du site, consommée par generate-sitemap.js (XML)
// et prerender.js (liste de chemins à figer en HTML). Ajouter une ville, une
// page sous-expertise ou un article dans src/data/ suffit à la faire
// apparaître aux deux endroits, sans jamais dupliquer la liste.
import { localPages, localPath } from '../src/data/local.js'
import { expertiseSlugs } from '../src/data/expertise.js'
import { articleSlugs } from '../src/data/articles.js'

export const staticRoutes = [
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

export const localRoutes = localPages.map(({ tradeKey, cityKey }) => ({
  path: localPath(tradeKey, cityKey),
  priority: '0.6',
  changefreq: 'monthly',
}))

export const articleRoutes = [
  ...expertiseSlugs.map((slug) => ({ path: `/${slug}`, priority: '0.7', changefreq: 'monthly' })),
  ...articleSlugs.map((slug) => ({ path: `/conseils/${slug}`, priority: '0.6', changefreq: 'monthly' })),
]

/** Liste à plat de tous les chemins du site, pour le prérendu. */
export const allRoutes = [...staticRoutes, ...localRoutes, ...articleRoutes].map((r) => r.path)
