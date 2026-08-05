import ServicePage from '../components/ServicePage.jsx'
import Seo, { serviceSchema, breadcrumbSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

export default function Electricite() {
  const service = services.electricite
  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/electricite"
        jsonLd={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: '/electricite' }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/electricite' },
          ]),
        ]}
      />
      <ServicePage service={service} />
    </>
  )
}
