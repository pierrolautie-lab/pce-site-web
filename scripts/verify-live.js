// Vérifie que chaque route du sitemap sert son contenu réel en production,
// et pas la coquille SPA (~5,5 Ko) — le symptôme de l'incident de cache du
// 2026-08-11. Ne touche à rien : lecture seule, aucun déploiement.
//
// Usage : node scripts/verify-live.js [base_url]
//   base_url par défaut : https://pcevar.fr
import { allRoutes } from './routes.js'

const baseUrl = (process.argv[2] || 'https://pcevar.fr').replace(/\/$/, '')
const MIN_BYTES = 20_000
const CONCURRENCY = 8

async function checkRoute(route) {
  const url = `${baseUrl}${route === '/' ? '' : route}?v=${Date.now()}`
  try {
    const res = await fetch(url, { headers: { 'Cache-Control': 'no-cache' } })
    const html = await res.text()
    const healthy = res.status === 200 && html.length >= MIN_BYTES && html.includes('</footer>')
    return { route, status: res.status, bytes: html.length, healthy }
  } catch (err) {
    return { route, status: 0, bytes: 0, healthy: false, error: err.message }
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
      console.log(`  ${r.route} — HTTP ${r.status}, ${r.bytes} octets${r.error ? ` (${r.error})` : ''}`)
    }
  }

  process.exitCode = shells.length > 0 ? 1 : 0
}

await run()
