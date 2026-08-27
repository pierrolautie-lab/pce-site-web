import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import Photo from '../components/Photo.jsx'
import Seo from '../components/Seo.jsx'
import { SectionTitle, GuaranteeBar, CtaSection } from '../components/Blocks.jsx'
import { chaudiereCondensation as data } from '../data/site.js'

/**
 * Sous-page du métier Chauffage, consacrée à la chaudière à condensation.
 * Reprend le gabarit visuel du site (héros marine, cartes blanches, bandeau
 * de garanties) sans passer par un gabarit de page métier complet — les
 * pages métier composent chacune leurs sections depuis Blocks.jsx.
 */
export default function ChaudiereCondensation() {
  return (
    <>
      <Seo
        title={data.title}
        description="Chaudière à condensation gaz ou bois/granulés : fonctionnement, économies et bénéfices écologiques. Installation par PCE à Lorgues (83)."
        path="/chauffage/chaudiere-condensation"
      />
      <PageHero
        breadcrumb={[{ label: 'Chauffage', to: '/chauffage' }, { label: data.title }]}
        title={data.title}
        subtitle={data.tagline}
        intro={data.intro}
        photo={{ ...data.hero, alt: 'Chaudière à condensation installée par PCE' }}
      />

      {/* --------------------------------------------- Comment ça fonctionne ? */}
      <section className="section bg-white">
        <div className="container-pce">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="min-w-0 lg:col-span-7">
              <div className="rounded-xl bg-navy-50 p-8 ring-1 ring-navy-100 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-azure-500 text-white">
                    <Icon name="settings" className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500 sm:text-[19px]">
                    {data.fonctionnement.heading}
                  </h2>
                </div>

                <div className="mt-6 space-y-4">
                  {data.fonctionnement.paragraphs.map((p, i) => (
                    <p key={i} className="text-[14px] leading-[1.85] text-navy-600">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <Photo
                tags={data.hero.tags}
                lock={data.hero.lock}
                alt="Détail d'une chaudière à condensation"
                className="aspect-[4/5] w-full shadow-photo"
                rounded="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- Économique / Écologique */}
      <section className="bg-navy-50 pb-14 sm:pb-16 lg:pb-20">
        <div className="container-pce">
          <SectionTitle
            title="Une technologie économique et écologique"
            lead="Deux bénéfices concrets, quelle que soit l'énergie retenue pour votre chaudière."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {[data.economique, data.ecologique].map((bloc) => (
              <div
                key={bloc.heading}
                className="flex flex-col rounded-xl bg-white p-7 shadow-card ring-1 ring-navy-100"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-navy-200 text-azure-500">
                  <Icon name={bloc.icon} className="h-5.5 w-5.5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-[14.5px] font-bold uppercase tracking-[.06em] text-navy-800">
                  {bloc.heading}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {bloc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Icon
                        name="check"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-azure-500"
                        strokeWidth={3.2}
                      />
                      <span className="text-[13.5px] leading-[1.65] text-navy-600">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Un projet de chaudière à condensation ?"
        text="Décrivez-nous votre logement et votre système de chauffage actuel : nous nous déplaçons pour une visite technique et vous remettons un devis détaillé, gratuit et sans engagement."
      />

      <GuaranteeBar />
    </>
  )
}
