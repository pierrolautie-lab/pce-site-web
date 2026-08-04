import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import PageHero from '../components/PageHero.jsx'
import { CtaSection, GuaranteeBar, SectionTitle } from '../components/Blocks.jsx'
import { conseils } from '../data/site.js'

/**
 * Page éducative générique sur les cinq métiers PCE, pensée pour répondre
 * aux questions les plus fréquentes avant le premier appel. Renvoie vers
 * les pages métier et vers les deux sous-pages approfondies.
 */
export default function Conseils() {
  return (
    <>
      <PageHero
        breadcrumb="Conseils"
        title="Conseils"
        subtitle="Cinq métiers, un premier repère avant d'appeler"
        intro="Quelques points de vigilance simples, tirés de vingt ans de chantiers à Lorgues et dans la Dracénie. Ils ne remplacent pas un diagnostic sur place, mais permettent souvent de reconnaître un problème avant qu'il ne s'aggrave."
        photo={{ tags: 'tools', lock: 970, alt: 'Outillage PCE' }}
      />

      <section className="section bg-white">
        <div className="container-pce">
          <SectionTitle
            title="Un repère par métier"
            lead="Un point de vigilance concret pour chaque savoir-faire PCE."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conseils.map((c) => (
              <div key={c.title} className="flex flex-col rounded-2xl bg-navy-50 p-7 ring-1 ring-navy-100">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-navy-800 ring-1 ring-navy-100">
                  <Icon name={c.icon} className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-[14px] font-bold uppercase tracking-[.06em] text-navy-800">
                  {c.title}
                </h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-[1.75] text-navy-500">{c.tip}</p>
                <Link
                  to={c.to}
                  className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.1em] text-azure-500 transition-colors hover:text-azure-600"
                >
                  Voir la page {c.title.toLowerCase()}
                  <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.4} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- Deux dossiers complets */}
      <section className="section bg-navy-50">
        <div className="container-pce">
          <SectionTitle
            title="Deux sujets approfondis"
            lead="Pour aller plus loin sur deux équipements que nous posons très régulièrement."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Link
              to="/traitement-de-l-eau/adoucisseur"
              className="group flex flex-col rounded-2xl bg-white p-7 ring-1 ring-navy-100 transition-all duration-300 hover:bg-navy-800 hover:ring-navy-800"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-navy-50 text-navy-800 ring-1 ring-navy-100 transition-colors group-hover:bg-white/12 group-hover:text-white group-hover:ring-white/20">
                <Icon name="filter" className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 text-[14px] font-bold uppercase tracking-[.06em] text-navy-800 transition-colors group-hover:text-white">
                L'adoucisseur d'eau
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.75] text-navy-500 transition-colors group-hover:text-white/70">
                Avantages d'une eau adoucie, installation par PCE et réponses aux questions les plus fréquentes.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.1em] text-azure-500 transition-colors group-hover:text-white">
                Lire le dossier
                <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.4} />
              </span>
            </Link>

            <Link
              to="/chauffage/chaudiere-condensation"
              className="group flex flex-col rounded-2xl bg-white p-7 ring-1 ring-navy-100 transition-all duration-300 hover:bg-navy-800 hover:ring-navy-800"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-navy-50 text-navy-800 ring-1 ring-navy-100 transition-colors group-hover:bg-white/12 group-hover:text-white group-hover:ring-white/20">
                <Icon name="flame" className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 text-[14px] font-bold uppercase tracking-[.06em] text-navy-800 transition-colors group-hover:text-white">
                La chaudière à condensation
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.75] text-navy-500 transition-colors group-hover:text-white/70">
                Fonctionnement, économies réalisées et impact écologique de cette technologie.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.1em] text-azure-500 transition-colors group-hover:text-white">
                Lire le dossier
                <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.4} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GuaranteeBar />

      <CtaSection
        title="Une question plus précise ?"
        text="Décrivez-nous votre situation : nous vous répondons directement, sans intermédiaire, et nous nous déplaçons si besoin pour un diagnostic gratuit."
      />
    </>
  )
}
