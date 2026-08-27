import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo, { breadcrumbSchema, faqPageSchema } from '../components/Seo.jsx'
import { GuaranteeBar } from '../components/Blocks.jsx'
import Icon from '../components/Icon.jsx'
import { articles, articleSlugs } from '../data/articles.js'
import { expertisePages } from '../data/expertise.js'
import { categoryFor } from '../data/categories.js'

/**
 * Gabarit des articles de conseils. Mise en page « blog » : sections en
 * blocs alternés (blanc / gris clair) avec icône de catégorie à côté de
 * chaque H2, encart « Le conseil PCE » au milieu, FAQ à bordure colorée
 * par catégorie, CTA en encart ambre, et une colonne latérale « À lire
 * aussi » sur desktop.
 */
export default function ArticlePage({ slug }) {
  const data = articles[slug]
  const path = `/conseils/${slug}`
  const expertise = expertisePages[data.relatedExpertise]
  const category = categoryFor(data.relatedService)

  /* 3 suggestions : d'abord la même catégorie, complétées par d'autres
     articles si la catégorie n'en compte pas assez. */
  const sameCategory = articleSlugs.filter(
    (s) => s !== slug && categoryFor(articles[s].relatedService).key === category.key
  )
  const others = articleSlugs.filter((s) => s !== slug && !sameCategory.includes(s))
  const related = [...sameCategory, ...others].slice(0, 3)

  const midIndex = Math.floor(data.sections.length / 2)
  const retenirText = data.sections[midIndex]?.paragraphs?.[0]

  return (
    <>
      {/* `metaTitle` : version courte pour la balise <title> quand le titre
          rédactionnel dépasse 60 caractères une fois « — PCE » ajouté. Le
          h1 visible garde `title` intact. */}
      <Seo
        title={data.metaTitle || data.title}
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

      <section className="section bg-navy-50">
        <div className="container-pce">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* ==================================================== ARTICLE == */}
            <div className="min-w-0 lg:col-span-8">
              <span className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-label font-bold uppercase ${category.bg} ${category.text}`}>
                <Icon name={category.icon} className="h-3.5 w-3.5" strokeWidth={2.2} />
                {category.label}
              </span>

              {data.intro.slice(1).map((p, i) => (
                <p key={i} className="mt-5 text-body text-navy-600">
                  {p}
                </p>
              ))}

              {data.sections.map((sec, i) => (
                <div key={sec.h2}>
                  <div className={`mt-6 rounded-xl p-6 sm:p-7 ${i % 2 === 0 ? 'bg-white ring-1 ring-navy-100' : 'bg-navy-100/50'}`}>
                    <div className="flex items-center gap-3">
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${category.bg} ${category.text}`}>
                        <Icon name={category.icon} className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <h2 className="text-kicker font-bold uppercase tracking-[.04em] text-navy-800">
                        {sec.h2}
                      </h2>
                    </div>
                    <div className="mt-4 space-y-4">
                      {sec.paragraphs.map((p, j) => (
                        <p key={j} className="text-body text-navy-600">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>

                  {i === midIndex && retenirText && (
                    <div className="mt-6 flex gap-4 rounded-xl border border-gold-300 bg-gold-50 p-6 sm:p-7">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-500 text-navy-800">
                        <Icon name="star" className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <h3 className="text-label font-black uppercase text-gold-700">
                          Le conseil PCE
                        </h3>
                        <p className="mt-2 text-body text-navy-700">{retenirText}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {data.closing && (
                <p className="mt-8 text-body font-semibold text-navy-700">{data.closing}</p>
              )}

              {/* ===================================================== CTA == */}
              <div className="mt-10 rounded-2xl bg-gold-500 p-7 sm:p-9">
                <h3 className="text-title font-black uppercase text-navy-900">
                  Un projet à concrétiser ?
                </h3>
                <p className="mt-3 max-w-xl text-body-sm text-navy-800/80">
                  Décrivez-nous votre besoin : nous vous répondons directement et nous établissons
                  un devis détaillé, gratuit et sans engagement.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 whitespace-normal rounded-lg bg-navy-900 px-6 py-3.5 text-center text-label font-bold uppercase text-white transition-colors hover:bg-navy-800 sm:w-auto sm:whitespace-nowrap"
                  >
                    Demande de devis gratuit
                    <Icon name="arrowRight" className="h-4 w-4 shrink-0" strokeWidth={2.4} />
                  </Link>
                  <Link
                    to={data.relatedService}
                    className="inline-flex w-full items-center justify-center gap-2 whitespace-normal rounded-lg border-2 border-navy-900 px-6 py-3.5 text-center text-label font-bold uppercase text-navy-900 transition-colors hover:bg-navy-900 hover:text-white sm:w-auto sm:whitespace-nowrap"
                  >
                    Voir la page métier
                    <Icon name="arrowRight" className="h-4 w-4 shrink-0" strokeWidth={2.4} />
                  </Link>
                </div>
              </div>

              {expertise && (
                <Link
                  to={`/${data.relatedExpertise}`}
                  className="btn-outline mt-6 w-full whitespace-normal text-center sm:w-auto sm:whitespace-nowrap"
                >
                  Approfondir : {expertise.h1}
                  <Icon name="arrowRight" className="h-4 w-4 shrink-0" strokeWidth={2.4} />
                </Link>
              )}

              {/* ===================================================== FAQ == */}
              <div className="mt-12">
                <h2 className="text-kicker font-bold uppercase tracking-[.05em] text-navy-800">
                  Questions fréquentes
                </h2>
                <div className="mt-6 space-y-3">
                  {data.faq.map((item) => (
                    <details
                      key={item.q}
                      className={`group overflow-hidden rounded-xl border-l-4 bg-white ring-1 ring-navy-100 ${category.border}`}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
                        <h3 className="text-body font-bold text-navy-800">{item.q}</h3>
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-navy-200 text-navy-700 transition-all duration-300 group-open:rotate-45 group-open:border-gold-500 group-open:bg-gold-500 group-open:text-navy-800">
                          <Icon name="close" className="h-3.5 w-3.5 rotate-45" strokeWidth={2.4} />
                        </span>
                      </summary>
                      <p className="px-5 pb-5 text-body-sm text-navy-500 sm:px-6 sm:pb-6">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================== SIDEBAR == */}
            <aside className="min-w-0 lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-navy-100 sm:p-7">
                  <h3 className="text-label font-bold uppercase text-navy-800">À lire aussi</h3>
                  <ul className="mt-5 space-y-4">
                    {related.map((s) => {
                      const rc = categoryFor(articles[s].relatedService)
                      return (
                        <li key={s}>
                          <Link to={`/conseils/${s}`} className="group flex items-start gap-3">
                            <span className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full ${rc.bg} ${rc.text}`}>
                              <Icon name={rc.icon} className="h-3.5 w-3.5" strokeWidth={1.8} />
                            </span>
                            <span className="text-body-sm font-semibold text-navy-700 transition-colors group-hover:text-azure-500">
                              {articles[s].title}
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                  <Link
                    to="/conseils"
                    className="mt-6 inline-flex items-center gap-2 text-label font-bold uppercase text-azure-500"
                  >
                    Tous les articles
                    <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.4} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <GuaranteeBar />
    </>
  )
}
