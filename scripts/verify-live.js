// Vérifie que chaque route du sitemap sert SON PROPRE contenu en production,
// et pas une autre page. Deux incidents distincts ont montré que taille +
// présence d'un </footer> ne suffit pas :
//   - 2026-08-11 (cache) : coquille SPA de ~5,5 Ko sur les 268 pages —
//     détectée par le seuil de taille.
//   - 2026-08-11 (routes non déployées) : une route absente du serveur
//     retombe, via .htaccess, sur l'accueil PRÉRENDUE (64 Ko, un vrai
//     </footer>) — un faux positif total pour le seul contrôle taille+footer.
// Le contrôle fiable : chaque page prérendue porte son propre
// <link rel="canonical" href=".../la-route-elle-meme">. Si le canonical ne
// correspond pas à la route demandée, ce n'est pas la bonne page — quelle
// que soit sa taille.
//
// Usage : node scripts/verify-live.js [base_url] [--sample=N]
//   base_url par défaut : https://pcevar.fr
//   --sample=N : au lieu des 283 routes, tire N pages au hasard dans
//     chacune des 3 familles (pages statiques, pages locales, articles) —
//     pensé pour un déploiement CI où interroger les 283 URL est trop
//     lourd. Sans cette option, vérifie tout.
import { allRoutes, staticRoutes, localRoutes, articleRoutes } from './routes.js'

const args = process.argv.slice(2)
const baseUrl = (args.find((a) => !a.startsWith('--')) || 'https://pcevar.fr').replace(/\/$/, '')
const sampleArg = args.find((a) => a.startsWith('--sample='))
const sampleSize = sampleArg ? Number(sampleArg.split('=')[1]) : null
const CONCURRENCY = 8

function sample(arr, n) {
  const copy = [...arr]
  const picked = []
  for (let i = 0; i < Math.min(n, copy.length); i++) {
    picked.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0])
  }
  return picked
}

const routes = sampleSize
  ? [
      ...sample(staticRoutes.map((r) => r.path), sampleSize),
      ...sample(localRoutes.map((r) => r.path), sampleSize),
      ...sample(articleRoutes.map((r) => r.path), sampleSize),
    ]
  : allRoutes

async function checkRoute(route) {
  const url = `${baseUrl}${route === '/' ? '' : route}?v=${Date.now()}`
  const expectedCanonical = route === '/' ? `${baseUrl}/` : `${baseUrl}${route}`
  try {
    const res = await fetch(url, { headers: { 'Cache-Control': 'no-cache' } })
    const html = await res.text()
    const m = html.match(/<link rel="canonical" href="([^"]+)"/)
    const canonical = m ? m[1] : null
    const healthy = res.status === 200 && canonical === expectedCanonical
    return { route, status: res.status, bytes: html.length, canonical, healthy }
  } catch (err) {
    return { route, status: 0, bytes: 0, canonical: null, healthy: false, error: err.message }
  }
}

async function run() {
  console.log(`Vérification de ${routes.length} routes sur ${baseUrl}…`)
  const results = []
  let cursor = 0

  async function worker() {
    while (cursor < routes.length) {
      const route = routes[cursor++]
      results.push(await checkRoute(route))
      if (results.length % 40 === 0) console.log(`  ${results.length}/${routes.length}…`)
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker))

  const healthy = results.filter((r) => r.healthy)
  const shells = results.filter((r) => !r.healthy)

  console.log('')
  console.log(`Saines  : ${healthy.length}/${results.length}`)
  console.log(`Coquilles / en échec : ${shells.length}/${results.length}`)

  if (shells.length > 0) {
    console.log('')
    console.log('Routes fautives :')
    for (const r of shells) {
      console.log(
        `  ${r.route} — HTTP ${r.status}, canonical: ${r.canonical || '(aucun)'}${r.error ? ` (${r.error})` : ''}`
      )
    }
  }

  process.exitCode = shells.length > 0 ? 1 : 0
}

await run()
