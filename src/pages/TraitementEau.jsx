import ServicePage from '../components/ServicePage.jsx'
import Seo, { serviceSchema, breadcrumbSchema } from '../components/Seo.jsx'
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
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/traitement-de-l-eau"
        jsonLd={[
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            path: '/traitement-de-l-eau',
          }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/traitement-de-l-eau' },
          ]),
        ]}
      />
      <ServicePage
        service={service}
        before={<ProductSpotlight product={service.product} />}
      />
    </>
  )
}
