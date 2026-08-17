import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { CtaBand, Faq } from '../components/Blocks.jsx'
import Icon from '../components/Icon.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

/** Grille des 3 types de VMC confirmés par le client — aucun autre produit
 *  n'est affiché. Aucune photo disponible : icône plutôt qu'un repli en
 *  attente, même parti pris que Traitement de l'eau. */
function SolutionsGrid({ items }) {
  return (
    <section className="section bg-white">
      <div className="container-pce">
        <h2 className="text-center text-title font-display font-black uppercase tracking-[.03em] text-navy-800">
          Nos VMC
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((s) => (
            <div key={s.key} className="flex h-full flex-col rounded-xl bg-white p-6 shadow-card ring-1 ring-navy-100 sm:p-7">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-navy-50 text-mint-600 ring-1 ring-navy-100">
                <Icon name={s.icon} className="h-5.5 w-5.5" strokeWidth={1.6} />
              </span>

              <h3 className="mt-4 min-h-[3.4em] text-title font-display font-black uppercase leading-snug text-navy-800">
                {s.title}
              </h3>

              <ul className="mt-2 flex-1 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-mint-600" strokeWidth={3} />
                    <span className="text-body-sm leading-[1.6] text-navy-600">{b}</span>
                  </li>
                ))}
              </ul>

              <Link to={s.ctaTo} className="btn-navy btn-sm mt-6 w-full justify-center whitespace-normal text-center">
                {s.ctaLabel}
                <Icon name="arrowRight" className="h-3.5 w-3.5 shrink-0" strokeWidth={2.4} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Bloc 2 colonnes : neuf vs rénovation — deux logiques commerciales
 *  distinctes, demandées explicitement par le client. */
function Markets({ markets }) {
  return (
    <section className="section bg-navy-50">
      <div className="container-pce grid gap-6 lg:grid-cols-2">
        <div className="min-w-0 rounded-xl bg-navy-900 p-8 text-white sm:p-10">
          <h2 className="text-title font-display font-black uppercase leading-snug">{markets.neuf.title}</h2>
          <p className="mt-4 text-body leading-[1.8] text-white/70">{markets.neuf.text}</p>
        </div>

        <div className="min-w-0 rounded-xl bg-white p-8 ring-1 ring-navy-100 sm:p-10">
          <h2 className="text-title font-display font-black uppercase leading-snug text-navy-800">{markets.renovation.title}</h2>
          <p className="mt-4 text-body leading-[1.8] text-navy-600">{markets.renovation.text}</p>
          {markets.renovation.link && (
            <Link
              to={markets.renovation.link.to}
              className="group mt-5 inline-flex items-center gap-2 text-label font-bold uppercase text-mint-600"
            >
              {markets.renovation.link.label}
              <Icon
                name="arrowRight"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.4}
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

/** Section entretien — prestation récurrente confirmée par le client,
 *  traitée à part plutôt que noyée dans les prestations. */
function Entretien({ entretien }) {
  return (
    <section className="section bg-white">
      <div className="container-pce">
        <h2 className="text-center text-title font-display font-black uppercase tracking-[.03em] text-navy-800">
          {entretien.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-body text-navy-500">{entretien.lead}</p>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {entretien.items.map((it) => (
            <div key={it.title} className="flex flex-col items-center text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-navy-200 text-mint-600">
                <Icon name={it.icon} className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="mt-4 text-label font-bold uppercase text-navy-800">{it.title}</span>
              <span className="mt-1.5 text-body-sm leading-snug text-navy-500">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function VMC() {
  const service = services.vmc

  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/vmc"
        jsonLd={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: '/vmc' }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/vmc' },
          ]),
          offerSchema({ name: service.title, path: '/vmc' }),
        ]}
      />

      <PageHero
        breadcrumb={service.title}
        icon="fan"
        iconClass="text-mint-300"
        haloClass="from-mint-300/[.18]"
        title="VMC"
        subtitle={service.tagline}
        intro={service.intro}
        /* Pas de `photo` : le client n'a fourni aucun visuel de VMC (recherché
           le 17/08/2026 par nom et par date de modification dans photos/,
           rien trouvé). Repli sur fond marine uni, même parti pris que
           Traitement de l'eau. */
      />

      <SolutionsGrid items={service.solutions} />

      <Markets markets={service.markets} />

      <Entretien entretien={service.entretien} />

      <Faq items={service.faq} title="Questions fréquentes sur la VMC" />

      <CtaBand />
    </>
  )
}
