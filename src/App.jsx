import { lazy } from 'react'
import { Route, Routes, matchRoutes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { localPages, localPath } from './data/local.js'

/* Code splitting par route (15/10/2026). Chaque page est un chunk chargé à
   la demande : le bundle principal ne garde que Layout (en-tête, pied de
   page) et le routeur. articles.js et expertise.js — le texte complet des
   articles et des pages sous-expertise — n'y figurent plus du tout : leurs
   routes lisent le slug dans l'URL (ArticleRoute, ExpertiseRoute) au lieu
   d'importer ici la liste des slugs.

   Aucun écran vide au chargement : boot.jsx attend le chunk de la page
   courante (preloadRoute) AVANT d'hydrater le HTML prérendu. En navigation
   interne, le routeur passe par startTransition (boot.jsx) : l'ancienne
   page reste à l'écran le temps que le chunk suivant arrive. */
const pages = {
  Accueil: () => import('./pages/Accueil.jsx'),
  Plomberie: () => import('./pages/Plomberie.jsx'),
  Chauffage: () => import('./pages/Chauffage.jsx'),
  ChaudiereCondensation: () => import('./pages/ChaudiereCondensation.jsx'),
  Climatisation: () => import('./pages/Climatisation.jsx'),
  Electricite: () => import('./pages/Electricite.jsx'),
  Piscine: () => import('./pages/Piscine.jsx'),
  TraitementEau: () => import('./pages/TraitementEau.jsx'),
  VMC: () => import('./pages/VMC.jsx'),
  Depannage: () => import('./pages/Depannage.jsx'),
  Realisations: () => import('./pages/Realisations.jsx'),
  Conseils: () => import('./pages/Conseils.jsx'),
  APropos: () => import('./pages/APropos.jsx'),
  Contact: () => import('./pages/Contact.jsx'),
  MentionsLegales: () => import('./pages/MentionsLegales.jsx'),
  PolitiqueConfidentialite: () => import('./pages/PolitiqueConfidentialite.jsx'),
  ConditionsGenerales: () => import('./pages/ConditionsGenerales.jsx'),
  PlanDuSite: () => import('./pages/PlanDuSite.jsx'),
  LocalPage: () => import('./pages/LocalPage.jsx'),
  ArticleRoute: () => import('./pages/ArticlePage.jsx').then((m) => ({ default: m.ArticleRoute })),
  ExpertiseRoute: () => import('./pages/ExpertisePage.jsx').then((m) => ({ default: m.ExpertiseRoute })),
}

/* Modules déjà arrivés, par nom de page. React.lazy suspend toujours au
   premier rendu, même quand le chunk est déjà là : sur un nouveau
   <Suspense>, cela peut valoir un affichage du repli (mesuré : <main> vide
   un instant au chargement direct d'une page sous-expertise). Une page déjà
   chargée — la page courante, préchargée par preloadRoute — est donc
   rendue directement, et React.lazy ne sert qu'aux pages pas encore
   arrivées, en navigation interne. */
const loaded = {}
const loadPage = (name) =>
  pages[name]().then((module) => {
    loaded[name] = module
    return module
  })

function routeComponent(name) {
  const Lazy = lazy(() => loadPage(name))
  return function RouteComponent(props) {
    const Page = loaded[name]?.default
    return Page ? <Page {...props} /> : <Lazy {...props} />
  }
}

const L = Object.fromEntries(Object.keys(pages).map((name) => [name, routeComponent(name)]))

/* Table chemin -> chunk, pour preloadRoute. Doit suivre les <Route>
   ci-dessous. */
const routeTable = [
  { path: '/', page: 'Accueil' },
  { path: '/plomberie', page: 'Plomberie' },
  { path: '/chauffage', page: 'Chauffage' },
  { path: '/chauffage/chaudiere-condensation', page: 'ChaudiereCondensation' },
  { path: '/climatisation', page: 'Climatisation' },
  { path: '/electricite', page: 'Electricite' },
  { path: '/piscine', page: 'Piscine' },
  { path: '/traitement-de-l-eau', page: 'TraitementEau' },
  { path: '/vmc', page: 'VMC' },
  { path: '/depannage', page: 'Depannage' },
  { path: '/realisations', page: 'Realisations' },
  { path: '/conseils', page: 'Conseils' },
  { path: '/a-propos', page: 'APropos' },
  { path: '/contact', page: 'Contact' },
  { path: '/mentions-legales', page: 'MentionsLegales' },
  { path: '/politique-de-confidentialite', page: 'PolitiqueConfidentialite' },
  { path: '/conditions-generales', page: 'ConditionsGenerales' },
  { path: '/plan-du-site', page: 'PlanDuSite' },
  ...localPages.map(({ tradeKey, cityKey }) => ({ path: localPath(tradeKey, cityKey), page: 'LocalPage' })),
  { path: '/conseils/:slug', page: 'ArticleRoute' },
  { path: '*', page: 'ExpertiseRoute' },
]

/** Charge le chunk de la page qui correspond à `pathname`. */
export function preloadRoute(pathname) {
  const match = matchRoutes(routeTable, pathname)
  const page = match?.[match.length - 1]?.route.page
  return page ? loadPage(page) : Promise.resolve()
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<L.Accueil />} />
        <Route path="plomberie" element={<L.Plomberie />} />
        <Route path="chauffage" element={<L.Chauffage />} />
        <Route path="chauffage/chaudiere-condensation" element={<L.ChaudiereCondensation />} />
        <Route path="climatisation" element={<L.Climatisation />} />
        <Route path="electricite" element={<L.Electricite />} />
        <Route path="piscine" element={<L.Piscine />} />
        <Route path="traitement-de-l-eau" element={<L.TraitementEau />} />
        <Route path="vmc" element={<L.VMC />} />
        <Route path="depannage" element={<L.Depannage />} />
        <Route path="realisations" element={<L.Realisations />} />
        <Route path="conseils" element={<L.Conseils />} />
        <Route path="a-propos" element={<L.APropos />} />
        <Route path="contact" element={<L.Contact />} />
        <Route path="mentions-legales" element={<L.MentionsLegales />} />
        <Route path="politique-de-confidentialite" element={<L.PolitiqueConfidentialite />} />
        <Route path="conditions-generales" element={<L.ConditionsGenerales />} />
        <Route path="plan-du-site" element={<L.PlanDuSite />} />

        {/* Pages locales SEO : un métier × une ville, ex. /plombier-lorgues */}
        {localPages.map(({ tradeKey, cityKey }) => (
          <Route
            key={`${tradeKey}-${cityKey}`}
            path={localPath(tradeKey, cityKey).slice(1)}
            element={<L.LocalPage tradeKey={tradeKey} cityKey={cityKey} />}
          />
        ))}

        {/* Articles de conseils, ex. /conseils/comment-choisir-pompe-a-chaleur */}
        <Route path="conseils/:slug" element={<L.ArticleRoute />} />

        {/* Pages « sous-expertise » longue traîne, ex. /installation-pompe-a-chaleur-var,
            et 404 pour toute autre adresse — le tri est fait par ExpertiseRoute. */}
        <Route path="*" element={<L.ExpertiseRoute />} />
      </Route>
    </Routes>
  )
}
