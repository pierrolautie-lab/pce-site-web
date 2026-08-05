import ServicePage from '../components/ServicePage.jsx'
import Seo from '../components/Seo.jsx'
import { services } from '../data/site.js'

export default function Electricite() {
  const service = services.electricite
  return (
    <>
      <Seo title={service.title} description={service.metaDescription} path="/electricite" />
      <ServicePage service={service} />
    </>
  )
}
