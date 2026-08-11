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
    //
    // ⚠️ 2026-08-11 : une piste explorée puis écartée. Après un déploiement
    // qui a mis en ligne des pages de ~5,5 Ko sur les 268 routes, ce délai a
    // été porté à 3000 ms et la concurrence réduite à 3, sur l'hypothèse d'un
    // rendu tronqué sous charge CI. Diagnostic plus poussé (fichiers récupérés
    // en direct sur le serveur par FTP en lecture seule) : dist/ local et les
    // fichiers réellement transférés faisaient tous la bonne taille — le
    // prérendu n'a jamais produit de coquille. La coquille venait d'un cache
    // de plateforme en amont de LiteSpeed (hors de portée du .htaccess),
    // servant un instantané vieux de plusieurs jours malgré des en-têtes
    // no-cache — le même mécanisme que l'incident documenté plus bas dans
    // public/.htaccess. Valeurs remises à leur réglage d'origine.
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

// Un fichier écrit n'est pas forcément un fichier correct : ce contrôle a été
// ajouté le 2026-08-11 après un déploiement qui a mis en ligne des pages de
// ~5,5 Ko (la coquille SPA, pas le contenu rendu). L'enquête a montré que ce
// n'était pas ce script le coupable — dist/ local et les fichiers transférés
// étaient corrects, un cache de plateforme servait un instantané ancien — mais
// le contrôle reste une bonne protection : si `renderRoutes` produisait un
// jour une vraie coquille, rien d'autre dans le pipeline ne le détecterait
// (`renderRoutes` compte les fichiers écrits, pas leur contenu). Deux signaux
// bon marché suffisent à distinguer une page réellement rendue d'une
// coquille : sa taille (une coquille fait ~5,5 Ko, la plus petite page
// réelle du site en fait plus de 20 Ko) et la présence du <footer> de
// Layout.jsx, qui ne peut exister qu'après le rendu React complet.
const MIN_BYTES = 20_000
const emptyShells = []

for (const { route, html } of renderedRoutes) {
  const looksEmpty = html.length < MIN_BYTES || !html.includes('</footer>')
  if (looksEmpty) emptyShells.push({ route, bytes: html.length })

  const outDir = route === '/' ? distDir : join(distDir, route)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
}

// Échec net et immédiat, pas un simple avertissement journalisé : un
// `process.exitCode` sans `process.exit()` laisse le script terminer et
// afficher son message de succès juste en dessous, ce qui a produit une
// sortie contradictoire (erreur puis « terminé ») lors des premiers essais.
if (emptyShells.length > 0) {
  console.error(
    `❌ Prérendu interrompu : ${emptyShells.length} route(s) sur ${allRoutes.length} ressemble(nt) à une coquille vide (pas de contenu réel, pas de </footer>) :`
  )
  for (const { route, bytes } of emptyShells.slice(0, 15)) {
    console.error(`   ${route} — ${bytes} octets`)
  }
  if (emptyShells.length > 15) console.error(`   … et ${emptyShells.length - 15} autre(s).`)
  console.error('Vérifier le rendu (pas la config réseau/CDN : ce script écrit dans dist/, rien de plus).')
  process.exit(1)
}

const elapsedS = Math.round((Date.now() - startedAt) / 100) / 10
console.log(`Prérendu terminé : ${renderedRoutes.length}/${allRoutes.length} routes écrites en ${elapsedS}s.`)

if (renderedRoutes.length !== allRoutes.length) {
  console.error(
    `❌ ${allRoutes.length - renderedRoutes.length} route(s) manquante(s) — voir les erreurs ci-dessus.`
  )
  process.exit(1)
}
