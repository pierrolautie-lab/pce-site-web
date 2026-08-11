// Prérendu statique du site, exécuté après `vite build` (voir package.json).
//
// Le site est une SPA pure (voir main.jsx / App.jsx) : sans cette étape,
// dist/ ne contient qu'une coquille index.html vide, et aucun moteur de
// recherche ne voit le contenu réel des 268 pages. Cette étape fait crawler
// le build de production par un vrai Chrome headless (Puppeteer), route par
// route, et enregistre le HTML final (après exécution de React, y compris
// le <title>/<meta> posés par Seo.jsx via useEffect) sur le disque.
//
// Choix technique : @prerenderer/prerenderer + @prerenderer/renderer-puppeteer
// (pas vite-react-ssg ni react-snap) — voir l'échange qui a précédé ce script
// pour la comparaison complète. En résumé : c'est la seule des trois options
// qui capture le rendu réel du navigateur sans rien changer au comportement
// client de l'app (Seo.jsx reste un composant à useEffect ordinaire).
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { mkdirSync, writeFileSync } from 'node:fs'
import { allRoutes } from './routes.js'

const require = createRequire(import.meta.url)
const Prerenderer = require('@prerenderer/prerenderer')
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer')

// @prerenderer/renderer-puppeteer attache son propre gestionnaire global
// `uncaughtException` (pour fermer proprement Chrome si le process est tué),
// qui a pour effet de bord d'avaler silencieusement toute erreur imprévue :
// sans ces deux handlers, un problème sur une seule route ferme le
// navigateur et laisse le process sortir en code 0 sans aucun message.
process.on('uncaughtException', (err) => {
  console.error('uncaughtException :', err)
  process.exitCode = 1
})
process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection :', err)
  process.exitCode = 1
})

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')

const prerenderer = new Prerenderer({
  staticDir: distDir,
  renderer: new PuppeteerRenderer({
    maxConcurrentRoutes: 3,
    // ⚠️ `renderAfterElementExists` seul a été essayé en premier (attendre le
    // <footer> de Layout.jsx, monté en un seul rendu synchrone avec le
    // contenu de la page — pas de code-splitting par route dans App.jsx).
    // Mesuré sur les 268 routes réelles : plante silencieusement une fois
    // sur plusieurs dizaines de pages, sans rien écrire ni faire échouer le
    // build (`npm run build` sortait en code 0 après quelques lignes de
    // log). Cause identifiée : avec cette seule option, la librairie fait
    // courir DEUX promesses en interne (page.waitForSelector + un
    // page.evaluate() de secours qui, dans ce mode, ne se résout jamais).
    // Quand la première gagne la course, page.close() coupe la connexion
    // CDP pendant que la seconde est encore en vol -> Puppeteer la rejette
    // avec `ProtocolError: Promise was collected`, une exception non gérée
    // que la librairie elle-même intercepte globalement et qui laisse le
    // process sortir en code 0 sans rien avoir écrit (voir l'échange qui a
    // précédé ce script pour le détail du diagnostic).
    // `renderAfterTime` seul ne crée qu'UNE SEULE promesse interne : pas de
    // course, pas de connexion coupée en vol.
    //
    // ⚠️ 2026-08-11 : 1000 ms (avec 5 routes en parallèle) suffisait en local
    // mais pas sur le runner GitHub Actions — le déploiement a mis en ligne
    // 268 pages de ~5,5 Ko (la coquille vide, capturée avant hydratation React
    // et avant le <title>/<meta> posés par Seo.jsx), sans que le script ne le
    // détecte : `renderRoutes` avait bien écrit un fichier par route, donc
    // « 268/268 écrites » s'est affiché alors que le contenu était vide. La
    // marge de 1000 ms, confortable avec un seul onglet local, ne l'est plus
    // avec 5 onglets Chromium concurrents sur un runner CI partagé et plus
    // lent. On réduit donc la concurrence et on augmente très largement la
    // marge. Insuffisant en soi pour garantir qu'un incident similaire ne se
    // reproduise pas ailleurs (charge CI variable) : voir le contrôle de
    // taille ci-dessous, qui détecte la coquille vide plutôt que de supposer
    // qu'un fichier écrit est un fichier correct.
    renderAfterTime: 3000,
    // Bloque le script GA4 (googletagmanager.com) et toute autre requête
    // externe pendant le crawl : évite à la fois de fausses métriques GA à
    // chaque build et un risque de lenteur/flakiness liée à des requêtes
    // tierces pendant l'attente de rendu.
    skipThirdPartyRequests: true,
  }),
})

const startedAt = Date.now()
console.log(`Prérendu de ${allRoutes.length} routes…`)

await prerenderer.initialize()

let renderedRoutes
try {
  renderedRoutes = await prerenderer.renderRoutes(allRoutes)
} finally {
  await prerenderer.destroy()
}

// Un fichier écrit n'est pas forcément un fichier correct : l'incident du
// 2026-08-11 a mis en ligne 268 coquilles vides de ~5,5 Ko (capturées avant
// hydratation) alors que `renderRoutes` avait rendu 268/268 routes sans
// erreur. Deux signaux bon marché suffisent à distinguer une page réellement
// rendue d'une coquille : sa taille (une coquille vide fait ~5,5 Ko, la plus
// petite page réelle du site en fait plus de 20 Ko) et la présence du
// <footer> de Layout.jsx, qui ne peut exister qu'après le rendu React complet.
const MIN_BYTES = 20_000
const emptyShells = []

for (const { route, html } of renderedRoutes) {
  const looksEmpty = html.length < MIN_BYTES || !html.includes('</footer>')
  if (looksEmpty) emptyShells.push({ route, bytes: html.length })

  const outDir = route === '/' ? distDir : join(distDir, route)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
}

if (emptyShells.length > 0) {
  console.error(
    `⚠️ ${emptyShells.length} route(s) rendue(s) mais dont le HTML ressemble à une coquille vide (pas encore hydratée) :`
  )
  for (const { route, bytes } of emptyShells.slice(0, 10)) {
    console.error(`   ${route} — ${bytes} octets`)
  }
  if (emptyShells.length > 10) console.error(`   … et ${emptyShells.length - 10} autre(s).`)
  console.error('Augmenter `renderAfterTime` ou réduire `maxConcurrentRoutes` dans ce script.')
  process.exitCode = 1
}

const elapsedS = Math.round((Date.now() - startedAt) / 100) / 10
console.log(`Prérendu terminé : ${renderedRoutes.length}/${allRoutes.length} routes écrites en ${elapsedS}s.`)

if (renderedRoutes.length !== allRoutes.length) {
  console.warn(
    `⚠️ ${allRoutes.length - renderedRoutes.length} route(s) manquante(s) — voir les erreurs ci-dessus.`
  )
  process.exitCode = 1
}
