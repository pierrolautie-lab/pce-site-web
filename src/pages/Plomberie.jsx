import ServicePage from '../components/ServicePage.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

export default function Plomberie() {
  const service = services.plomberie
  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/plomberie"
        jsonLd={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: '/plomberie' }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/plomberie' },
          ]),
          offerSchema({ name: service.title, path: '/plomberie' }),
        ]}
      />
      <ServicePage service={service} />
    </>
  )
}
