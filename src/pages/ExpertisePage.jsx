import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo, { serviceSchema, breadcrumbSchema, faqPageSchema } from '../components/Seo.jsx'
import { Faq, GuaranteeBar, CtaSection, LinkGrid } from '../components/Blocks.jsx'
import Icon from '../components/Icon.jsx'
import { expertisePages } from '../data/expertise.js'
import { localPages, localTrades, localCities, localPath } from '../data/local.js'
import { services } from '../data/site.js'

/**
 * Gabarit des 10 pages « sous-expertise » (longue traîne technique).
 * Contenu unique par page (voir expertise.js), maillage vers la page métier
 * principale et vers les pages locales du métier concerné.
 */
export default function ExpertisePage({ slug }) {
  const data = expertisePages[slug]
  const path = `/${slug}`
  const trade = localTrades[data.tradeKey]
  const service = services[trade.serviceKey]
  const relatedLocal = localPages.filter((p) => p.tradeKey === data.tradeKey)

  return (
    <>
      <Seo
        title={data.h1}
        description={data.metaDescription}
        path={path}
        jsonLd={[
          serviceSchema({ name: data.h1, description: data.metaDescription, path }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: data.servicePath },
            { name: data.h1, path },
          ]),
          faqPageSchema(data.faq),
        ]}
      />

      <PageHero
        breadcrumb={[{ label: service.title, to: data.servicePath }, { label: data.h1 }]}
        title={data.h1}
        subtitle="Devis gratuit, intervention dans tout le Var"
        intro={data.intro[0]}
        photo={{ ...data.photo, alt: `${data.h1} — PCE` }}
      />

      <section className="section bg-white">
        <div className="container-pce">
          <div className="mx-auto max-w-3xl">
            {data.intro.slice(1).map((p, i) => (
              <p key={i} className="text-[14.5px] leading-[1.85] text-navy-600">
                {p}
              </p>
            ))}

            {data.sections.map((sec) => (
              <div key={sec.h2} className="mt-10">
                <h2 className="text-[17px] font-bold uppercase leading-snug tracking-[.05em] text-azure-500 sm:text-[19px]">
                  {sec.h2}
                </h2>
                <div className="mt-4 space-y-4">
                  {sec.paragraphs.map((p, i) => (
                    <p key={i} className="text-[14.5px] leading-[1.85] text-navy-600">
                      {p}
                    </p>
                  ))}
                </div>
                {sec.points && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {sec.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 rounded-lg bg-navy-50 p-4 ring-1 ring-navy-100"
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-azure-500"
                          strokeWidth={3}
                        />
                        <span className="text-[12.5px] font-semibold leading-snug text-navy-700">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <Link to={data.servicePath} className="btn-azure mt-10">
              Voir la page {service.title.toLowerCase()}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
            </Link>
          </div>
        </div>
      </section>

      <Faq items={data.faq} title="Questions fréquentes" />

      <LinkGrid
        title="Où intervenons-nous ?"
        lead={`PCE assure ${trade.verb} dans toutes ces communes du Var, depuis notre atelier de Lorgues.`}
        links={relatedLocal.map(({ tradeKey, cityKey }) => ({
          to: localPath(tradeKey, cityKey),
          label: localCities[cityKey].name,
        }))}
      />

      <GuaranteeBar />

      <CtaSection
        title={`Un projet lié à ${data.h1.charAt(0).toLowerCase() + data.h1.slice(1)} ?`}
        text="Décrivez-nous votre besoin : nous nous déplaçons pour un relevé sur site et nous établissons un devis détaillé, gratuit et sans engagement."
      />
    </>
  )
}
