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
    maxConcurrentRoutes: 5,
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
    // course, pas de connexion coupée en vol. Le site n'a aucune donnée
    // asynchrone (tout vient d'objets JS statiques importés) ; 1000 ms est
    // une marge large par rapport aux ~130 ms de rendu complet mesurés
    // localement (chargement + hydratation + <title>/<meta> de Seo.jsx).
    renderAfterTime: 1000,
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

for (const { route, html } of renderedRoutes) {
  const outDir = route === '/' ? distDir : join(distDir, route)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
}

const elapsedS = Math.round((Date.now() - startedAt) / 100) / 10
console.log(`Prérendu terminé : ${renderedRoutes.length}/${allRoutes.length} routes écrites en ${elapsedS}s.`)

if (renderedRoutes.length !== allRoutes.length) {
  console.warn(
    `⚠️ ${allRoutes.length - renderedRoutes.length} route(s) manquante(s) — voir les erreurs ci-dessus.`
  )
  process.exitCode = 1
}
