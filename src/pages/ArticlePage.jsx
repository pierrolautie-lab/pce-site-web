import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo, { breadcrumbSchema, faqPageSchema } from '../components/Seo.jsx'
import { Faq, GuaranteeBar, CtaSection } from '../components/Blocks.jsx'
import Icon from '../components/Icon.jsx'
import { articles } from '../data/articles.js'
import { expertisePages } from '../data/expertise.js'

/**
 * Gabarit des 5 articles de conseils. Contenu éditorial court (600-800
 * mots), FAQ en accordéon, et liens vers la page métier et la page
 * sous-expertise les plus pertinentes pour approfondir le sujet.
 */
export default function ArticlePage({ slug }) {
  const data = articles[slug]
  const path = `/conseils/${slug}`
  const expertise = expertisePages[data.relatedExpertise]

  return (
    <>
      <Seo
        title={data.title}
        description={data.metaDescription}
        path={path}
        jsonLd={[
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Conseils', path: '/conseils' },
            { name: data.title, path },
          ]),
          faqPageSchema(data.faq),
        ]}
      />

      <PageHero
        breadcrumb={[{ label: 'Conseils', to: '/conseils' }, { label: data.title }]}
        title={data.title}
        subtitle="Le conseil PCE"
        intro={data.intro[0]}
        photo={{ ...data.photo, alt: `${data.title} — PCE` }}
        actions={false}
        showReassurance={false}
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
              </div>
            ))}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to={data.relatedService}
                className="btn-azure w-full whitespace-normal text-center sm:w-auto sm:whitespace-nowrap"
              >
                Voir la page métier concernée
                <Icon name="arrowRight" className="h-4 w-4 shrink-0" strokeWidth={2.4} />
              </Link>
              {expertise && (
                <Link
                  to={`/${data.relatedExpertise}`}
                  className="btn-outline w-full whitespace-normal text-center sm:w-auto sm:whitespace-nowrap"
                >
                  Approfondir : {expertise.h1}
                  <Icon name="arrowRight" className="h-4 w-4 shrink-0" strokeWidth={2.4} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <Faq items={data.faq} title="Questions fréquentes" />

      <GuaranteeBar />

      <CtaSection
        title="Un projet à concrétiser ?"
        text="Décrivez-nous votre besoin : nous vous répondons directement et nous établissons un devis détaillé, gratuit et sans engagement."
      />
    </>
  )
}
