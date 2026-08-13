import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { CtaBand } from '../components/Blocks.jsx'
import Icon from '../components/Icon.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

/** Bandeau bespoke de 5 arguments, propre à cette page (pas `ReassuranceBar`). */
function WaterArgsBar({ items }) {
  return (
    <section className="border-t border-white/10 bg-navy-900 text-white">
      <div className="container-pce">
        <ul className="grid grid-cols-1 divide-white/10 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:py-8">
          {items.map((a) => (
            <li key={a.title} className="flex items-start gap-3 px-0 py-3 lg:px-4 lg:py-1">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 lg:h-10 lg:w-10">
                <Icon name={a.icon} className="h-4 w-4 lg:h-[18px] lg:w-[18px]" strokeWidth={1.4} />
              </span>
              <span className="min-w-0">
                <span className="block text-label font-bold uppercase leading-tight">{a.title}</span>
                <span className="mt-1 block text-body-sm leading-snug text-white/50">{a.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Grille des 6 solutions, hauteur de carte égale, bouton aligné en bas.
 *  Aucune photo (le client n'en fournit pas pour ces sujets) : une icône de
 *  la charte remplace le repli sur cadre, définitivement — pas un
 *  emplacement en attente. */
function SolutionsGrid({ items }) {
  return (
    <section className="section bg-white">
      <div className="container-pce">
        <h2 className="text-center text-title font-display font-black uppercase tracking-[.03em] text-navy-800">
          Nos solutions de traitement de l'eau
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((s) => (
            <div key={s.key} className="flex h-full flex-col rounded-xl bg-white p-6 shadow-card ring-1 ring-navy-100 sm:p-7">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-navy-50 text-azure-500 ring-1 ring-navy-100">
                <Icon name={s.icon} className="h-5.5 w-5.5" strokeWidth={1.6} />
              </span>

              {/* Hauteur minimale fixe : les titres vont d'un à deux mots
                  (« Traitement UV ») à une phrase complète (« Filtration &
                  traitement complet sur mesure ») — sans plancher commun,
                  les listes qui suivent ne s'alignent plus d'une carte à
                  l'autre dans la même rangée. */}
              <h3 className="mt-4 min-h-[3.4em] text-title font-display font-black uppercase leading-snug text-navy-800">
                {s.title}
              </h3>

              <ul className="mt-2 flex-1 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-azure-500" strokeWidth={3} />
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

/** Bloc 2 colonnes : pourquoi traiter son eau / bénéfices d'une eau traitée. */
function WhyTreatBenefits({ whyTreat, benefits }) {
  return (
    <section className="section bg-navy-50">
      <div className="container-pce grid gap-6 lg:grid-cols-12">
        <div className="min-w-0 rounded-xl bg-navy-900 p-8 text-white lg:col-span-5 sm:p-10">
          <h2 className="text-title font-display font-black uppercase leading-snug">{whyTreat.heading}</h2>
          {whyTreat.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-body leading-[1.8] text-white/70">
              {p}
            </p>
          ))}
        </div>

        <div className="min-w-0 rounded-xl bg-white p-8 ring-1 ring-navy-100 lg:col-span-7 sm:p-10">
          <h2 className="text-center text-title font-display font-black uppercase tracking-[.03em] text-azure-500">
            Les bénéfices d'une eau traitée
          </h2>
          <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col items-center text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-navy-200 text-azure-500">
                  <Icon name={b.icon} className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="mt-4 text-label font-bold uppercase text-navy-800">{b.title}</span>
                <span className="mt-1.5 text-body-sm leading-snug text-navy-500">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function TraitementEau() {
  const service = services.traitementEau

  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/traitement-de-l-eau"
        jsonLd={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: '/traitement-de-l-eau' }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/traitement-de-l-eau' },
          ]),
          offerSchema({ name: service.title, path: '/traitement-de-l-eau' }),
        ]}
      />

      <PageHero
        breadcrumb={service.title}
        title="Traitement de l'eau"
        subtitle="Pour un confort sain et durable"
        intro={
          <>
            <span className="block">
              PCE vous propose des solutions complètes pour améliorer la qualité de votre eau au quotidien :
              adoucissement, filtration, purification et désinfection.
            </span>
            <span className="mt-3 block">
              Protégez votre santé, vos équipements et votre habitat avec des systèmes performants et fiables.
            </span>
          </>
        }
        photo={{ ...service.hero, alt: "Matériel de traitement de l'eau installé par PCE" }}
        showReassurance={false}
        photoBadge={
          <div className="grid h-28 w-28 place-items-center rounded-full bg-azure-500 p-4 text-center shadow-lg ring-4 ring-white/10 sm:h-32 sm:w-32">
            <span className="text-label font-black uppercase leading-tight text-white">
              Une eau pure au quotidien
            </span>
          </div>
        }
      />

      <WaterArgsBar items={service.argBar} />

      <SolutionsGrid items={service.solutions} />

      <WhyTreatBenefits whyTreat={service.whyTreat} benefits={service.treatedBenefits} />

      <CtaBand />
    </>
  )
}
