import ServicePage from '../components/ServicePage.jsx'
import Seo from '../components/Seo.jsx'
import { services } from '../data/site.js'

export default function Climatisation() {
  const service = services.climatisation
  return (
    <>
      <Seo title={service.title} description={service.metaDescription} path="/climatisation" />
      <ServicePage service={service} />
    </>
  )
}
