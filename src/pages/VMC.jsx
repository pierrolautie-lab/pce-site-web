import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { CtaBand } from '../components/Blocks.jsx'
import { ServiceBrandsRow } from '../components/ServiceBlocks.jsx'
import Icon from '../components/Icon.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

/* Marques VMC confirmées par le client le 17/08/2026 (Eoliance, Panol) —
   voir le commentaire sur `services.vmc.brands` dans site.js. */
const SHOW_VMC_BRANDS = true

/** Comparaison simple flux / double flux — maquette validée le 17/08/2026. */
function FluxComparison({ flux }) {
  return (
    <section className="section bg-white">
      <div className="container-pce grid gap-6 lg:grid-cols-2">
        {[flux.simple, flux.double].map((f) => (
          <div key={f.title} className="min-w-0 rounded-xl bg-navy-50 p-8 ring-1 ring-navy-100 sm:p-10">
            <h2 className="text-title font-display font-black uppercase leading-snug text-navy-800">
              {f.title}
            </h2>
            <p className="mt-1.5 text-kicker font-bold uppercase text-azure-500">{f.subtitle}</p>
            <p className="mt-5 text-body leading-[1.8] text-navy-600">{f.text}</p>
            <ul className="mt-6 space-y-3">
              {f.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-azure-500" strokeWidth={3} />
                  <span className="text-body-sm text-navy-600">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

/** « Comment fonctionne la VMC ? » — 4 étapes reliées + encart « pourquoi ». */
function HowItWorks({ data }) {
  return (
    <section className="section bg-navy-50">
      <div className="container-pce">
        <h2 className="text-center text-title font-display font-black uppercase tracking-[.03em] text-azure-500">
          {data.heading}
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2">
              {data.steps.map((s, i) => (
                <div key={s.title} className="relative flex flex-col items-center text-center">
                  {i < data.steps.length - 1 && (
                    <Icon
                      name="arrowRight"
                      className="absolute -right-5 top-6 hidden h-5 w-5 text-navy-300 sm:block lg:right-[-22px]"
                      strokeWidth={2}
                    />
                  )}
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-azure-500 shadow-card ring-1 ring-navy-100">
                    <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <span className="mt-4 text-label font-bold uppercase text-navy-800">{s.title}</span>
                  <p className="mt-2 max-w-[22ch] text-body-sm leading-snug text-navy-500">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-xl bg-navy-900 p-8 text-white sm:p-10 lg:col-span-5">
            <h3 className="text-kicker font-bold uppercase tracking-[.05em] text-white">
              {data.why.heading}
            </h3>
            <ul className="mt-6 space-y-3.5">
              {data.why.items.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" strokeWidth={3} />
                  <span className="text-body-sm text-white/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Section à trois blocs : entretien, marques (conditionnel), solutions
 *  adaptées. Bloc entretien + bloc solutions forment une paire à deux
 *  colonnes ; le bloc marques réutilise `ServiceBrandsRow` tel quel, aligné
 *  sur Chauffage et Climatisation. */
function ThreeBlocks({ entretien, solutions, brands }) {
  return (
    <>
      <section className="section bg-white">
        <div className="container-pce grid gap-6 lg:grid-cols-2">
          <div className="min-w-0 rounded-xl bg-navy-900 p-8 text-white sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white">
              <Icon name={entretien.icon} className="h-5.5 w-5.5" strokeWidth={1.5} />
            </span>
            <h2 className="mt-5 text-title font-display font-black uppercase leading-snug">
              {entretien.title}
            </h2>
            <p className="mt-4 text-body leading-[1.8] text-white/70">{entretien.text}</p>
            <ul className="mt-6 space-y-3">
              {entretien.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" strokeWidth={3} />
                  <span className="text-body-sm text-white/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 rounded-xl bg-navy-50 p-8 ring-1 ring-navy-100 sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-azure-500 ring-1 ring-navy-100">
              <Icon name={solutions.icon} className="h-5.5 w-5.5" strokeWidth={1.5} />
            </span>
            <h2 className="mt-5 text-title font-display font-black uppercase leading-snug text-navy-800">
              {solutions.title}
            </h2>
            <ul className="mt-6 space-y-3">
              {solutions.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-azure-500" strokeWidth={3} />
                  <span className="text-body-sm text-navy-600">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {SHOW_VMC_BRANDS && <ServiceBrandsRow title="Les marques que nous installons" brands={brands} />}
    </>
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
        title={
          <>
            VMC
            <span className="mt-2 block text-title-lg font-bold text-white/85">
              Ventilation mécanique contrôlée
            </span>
          </>
        }
        subtitle="Un air sain, un confort durable"
        subtitleClassName="text-azure-400"
        intro="Indispensable pour garantir la qualité de l'air intérieur, la VMC renouvelle l'air de votre logement en continu, élimine l'humidité et les polluants, et préserve votre santé ainsi que votre habitat."
        highlights={service.heroHighlights}
        /* Photo restaurée le 19/08/2026 (slot 521) : caisson double flux en
           combles. */
        photo={{ lock: 521, alt: 'VMC double flux installée par PCE' }}
        fullBleed
      />

      <FluxComparison flux={service.flux} />

      {/* Schémas simple flux / double flux : en attente de validation, voir
          la proposition transmise au client — non dessinés tant qu'elle
          n'est pas approuvée. */}

      <HowItWorks data={service.howItWorks} />

      <ThreeBlocks entretien={service.blocks.entretien} solutions={service.blocks.solutions} brands={service.brands} />

      <CtaBand title="Besoin d'un conseil ou d'un devis ? Appelez-nous !" />
    </>
  )
}
