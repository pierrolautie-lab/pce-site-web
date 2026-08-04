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
import APropos from './pages/APropos.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

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
        <Route path="a-propos" element={<APropos />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
