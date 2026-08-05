import ServicePage from '../components/ServicePage.jsx'
import Seo from '../components/Seo.jsx'
import { ThreeColumns, TvaBanner } from '../components/Blocks.jsx'
import { services } from '../data/site.js'

/**
 * Variante piscine : le bloc deux colonnes est remplacé par trois colonnes
 * de conseils, suivies d'un bandeau TVA pleine largeur.
 */
export default function Piscine() {
  const service = services.piscine

  return (
    <>
      <Seo title={service.title} description={service.metaDescription} path="/piscine" />
      <ServicePage service={service}>
        <ThreeColumns
          columns={service.columns}
          title="Trois leviers pour une piscine simple à vivre"
          lead="Traitement, filtration, pilotage : ce sont les trois postes sur lesquels nous intervenons le plus, et ceux qui changent radicalement le quotidien d'un bassin dans le Var."
        />
        <TvaBanner />
      </ServicePage>
    </>
  )
}
