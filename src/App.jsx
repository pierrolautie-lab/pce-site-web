import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Accueil from './pages/Accueil.jsx'
import Plomberie from './pages/Plomberie.jsx'
import Chauffage from './pages/Chauffage.jsx'
import ChaudiereCondensation from './pages/ChaudiereCondensation.jsx'
import Climatisation from './pages/Climatisation.jsx'
import Electricite from './pages/Electricite.jsx'
import Piscine from './pages/Piscine.jsx'
import TraitementEau from './pages/TraitementEau.jsx'
import Adoucisseur from './pages/Adoucisseur.jsx'
import Depannage from './pages/Depannage.jsx'
import Realisations from './pages/Realisations.jsx'
import Conseils from './pages/Conseils.jsx'
import APropos from './pages/APropos.jsx'
import Contact from './pages/Contact.jsx'
import MentionsLegales from './pages/MentionsLegales.jsx'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite.jsx'
import ConditionsGenerales from './pages/ConditionsGenerales.jsx'
import PlanDuSite from './pages/PlanDuSite.jsx'
import LocalPage from './pages/LocalPage.jsx'
import ExpertisePage from './pages/ExpertisePage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import NotFound from './pages/NotFound.jsx'
import { localPages, localPath } from './data/local.js'
import { expertiseSlugs } from './data/expertise.js'
import { articleSlugs } from './data/articles.js'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Accueil />} />
        <Route path="plomberie" element={<Plomberie />} />
        <Route path="chauffage" element={<Chauffage />} />
        <Route path="chauffage/chaudiere-condensation" element={<ChaudiereCondensation />} />
        <Route path="climatisation" element={<Climatisation />} />
        <Route path="electricite" element={<Electricite />} />
        <Route path="piscine" element={<Piscine />} />
        <Route path="traitement-de-l-eau" element={<TraitementEau />} />
        <Route path="traitement-de-l-eau/adoucisseur" element={<Adoucisseur />} />
        <Route path="depannage" element={<Depannage />} />
        <Route path="realisations" element={<Realisations />} />
        <Route path="conseils" element={<Conseils />} />
        <Route path="a-propos" element={<APropos />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentions-legales" element={<MentionsLegales />} />
        <Route path="politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="conditions-generales" element={<ConditionsGenerales />} />
        <Route path="plan-du-site" element={<PlanDuSite />} />

        {/* Pages locales SEO : un métier × une ville, ex. /plombier-lorgues */}
        {localPages.map(({ tradeKey, cityKey }) => (
          <Route
            key={`${tradeKey}-${cityKey}`}
            path={localPath(tradeKey, cityKey).slice(1)}
            element={<LocalPage tradeKey={tradeKey} cityKey={cityKey} />}
          />
        ))}

        {/* Pages « sous-expertise » longue traîne, ex. /installation-pompe-a-chaleur-var */}
        {expertiseSlugs.map((slug) => (
          <Route key={slug} path={slug} element={<ExpertisePage slug={slug} />} />
        ))}

        {/* Articles de conseils, ex. /conseils/comment-choisir-pompe-a-chaleur */}
        {articleSlugs.map((slug) => (
          <Route key={slug} path={`conseils/${slug}`} element={<ArticlePage slug={slug} />} />
        ))}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
