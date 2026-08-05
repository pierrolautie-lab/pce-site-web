import { Link } from 'react-router-dom'
import ServicePage from '../components/ServicePage.jsx'
import Seo from '../components/Seo.jsx'
import Icon from '../components/Icon.jsx'
import { services } from '../data/site.js'

/** Bandeau reliant vers la sous-page dédiée à la chaudière à condensation. */
function CondensationBanner() {
  return (
    <section className="bg-white pb-14 sm:pb-16 lg:pb-20">
      <div className="container-pce">
        <div className="flex flex-col items-start gap-6 rounded-xl bg-navy-50 p-7 ring-1 ring-navy-100 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-azure-500 ring-1 ring-navy-100">
              <Icon name="flame" className="h-5.5 w-5.5" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="text-[14.5px] font-bold uppercase tracking-[.05em] text-navy-800">
                Chaudière à condensation
              </h3>
              <p className="mt-2 max-w-xl text-[13.5px] leading-[1.7] text-navy-500">
                Gaz, fioul ou bois/granulés : comment cette technologie récupère la chaleur des
                fumées pour réduire votre consommation de combustible.
              </p>
            </div>
          </div>

          <Link to="/chauffage/chaudiere-condensation" className="btn-azure shrink-0">
            En savoir plus sur la chaudière à condensation
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Chauffage() {
  const service = services.chauffage
  return (
    <>
      <Seo title={service.title} description={service.metaDescription} path="/chauffage" />
      <ServicePage service={service} before={<CondensationBanner />} />
    </>
  )
}
