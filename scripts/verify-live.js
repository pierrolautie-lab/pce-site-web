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
// Usage : node scripts/verify-live.js [base_url]
//   base_url par défaut : https://pcevar.fr
import { allRoutes } from './routes.js'

const baseUrl = (process.argv[2] || 'https://pcevar.fr').replace(/\/$/, '')
const CONCURRENCY = 8

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
  console.log(`Vérification de ${allRoutes.length} routes sur ${baseUrl}…`)
  const results = []
  let cursor = 0

  async function worker() {
    while (cursor < allRoutes.length) {
      const route = allRoutes[cursor++]
      results.push(await checkRoute(route))
      if (results.length % 40 === 0) console.log(`  ${results.length}/${allRoutes.length}…`)
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
