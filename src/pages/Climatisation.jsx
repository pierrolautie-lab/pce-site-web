import ServicePage from '../components/ServicePage.jsx'
import Seo, { serviceSchema, breadcrumbSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

export default function Climatisation() {
  const service = services.climatisation
  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/climatisation"
        jsonLd={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: '/climatisation' }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/climatisation' },
          ]),
        ]}
      />
      <ServicePage service={service} />
    </>
  )
}
