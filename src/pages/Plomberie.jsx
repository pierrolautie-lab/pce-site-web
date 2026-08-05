import ServicePage from '../components/ServicePage.jsx'
import Seo from '../components/Seo.jsx'
import { services } from '../data/site.js'

export default function Plomberie() {
  const service = services.plomberie
  return (
    <>
      <Seo title={service.title} description={service.metaDescription} path="/plomberie" />
      <ServicePage service={service} />
    </>
  )
}
