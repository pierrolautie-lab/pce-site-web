import ServicePage from '../components/ServicePage.jsx'
import { ProductSpotlight } from '../components/Blocks.jsx'
import { services } from '../data/site.js'

/**
 * Variante « Traitement de l'eau » : le gabarit métier standard, enrichi
 * d'un bloc produit consacré à l'adoucisseur Pentair Foleo, inséré entre la
 * rangée de bénéfices et le bloc deux colonnes.
 */
export default function TraitementEau() {
  const service = services.traitementEau

  return (
    <ServicePage
      service={service}
      before={<ProductSpotlight product={service.product} />}
    />
  )
}
