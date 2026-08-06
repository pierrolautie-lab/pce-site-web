import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import Seo from '../components/Seo.jsx'
import { Expertise, GuaranteeBar, SectionTitle } from '../components/Blocks.jsx'
import { Wordmark } from '../components/Brand.jsx'
import { company, depannage } from '../data/site.js'

export default function Depannage() {
  return (
    <>
      <Seo
        title={depannage.title}
        description="Dépannage 7j/7 à Lorgues (83) : plomberie, chauffage, climatisation, électricité et piscine. Créneau donné dès l'appel, prix annoncé avant intervention."
        path="/depannage"
      />
      {/* -------------------------------------------- Hero sur fond marine */}
      <PageHero
        breadcrumb="Dépannage"
        title={depannage.title}
        subtitle={depannage.tagline}
        intro={depannage.intro}
        photo={{ ...depannage.hero, alt: 'Intervention de dépannage PCE dans le Var' }}
        primaryLabel="Décrire mon urgence"
      />

      {/* -------------------------------- Les 4 engagements de dépannage */}
      <section className="section bg-white">
        <div className="container-pce">
          <SectionTitle
            title="Quatre certitudes dès votre appel"
            lead="Une urgence se gère avec des informations fiables. Voici ce que nous vous garantissons, quelle que soit la nature de la panne."
          />

          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-8">
            {depannage.steps.map((s) => (
              <div key={s.title} className="group flex flex-col items-center text-center">
                <span className="grid h-[72px] w-[72px] place-items-center rounded-full bg-navy-50 text-navy-800 ring-1 ring-navy-100 transition-all duration-300 group-hover:bg-navy-800 group-hover:text-white group-hover:ring-navy-800">
                  <Icon name={s.icon} className="h-8 w-8" strokeWidth={1.4} />
                </span>
                <h3 className="mt-5 text-[13px] font-bold uppercase leading-tight tracking-[.06em] text-navy-800">
                  {s.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-snug text-navy-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------- Les 5 domaines d'intervention */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="container-pce">
          <SectionTitle
            title="Nos domaines d'intervention"
            lead="Parce que nos véhicules embarquent le stock des cinq métiers, la majorité des dépannages se résout en une seule visite."
          />

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {depannage.domains.map((d) => (
              <Link
                key={d.title}
                to={d.to}
                className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center ring-1 ring-navy-100 transition-all duration-300 hover:bg-navy-800 hover:ring-navy-800"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full border border-navy-200 text-navy-800 transition-colors group-hover:border-white/30 group-hover:text-white">
                  <Icon name={d.icon} className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-4 text-[12.5px] font-bold uppercase tracking-[.07em] text-navy-800 transition-colors group-hover:text-white">
                  {d.title}
                </h3>
                <p className="mt-2 text-[11.5px] leading-snug text-navy-500 transition-colors group-hover:text-white/60">
                  {d.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------- Expertise rédactionnelle */}
      <Expertise data={depannage.expertise} />

      {/* --------------------------------- Bandeau marine + gros numéro */}
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 grid select-none place-items-center text-[38vw] font-black uppercase leading-none tracking-[-.05em] text-white/[.04] lg:text-[19rem]"
        >
          {company.name}
        </span>

        <div className="container-pce relative py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-6">
              <Wordmark size="sm" />
              <h2 className="mt-5 text-3xl font-black uppercase leading-[1.04] tracking-[-.02em] sm:text-[2.7rem]">
                Besoin d'une intervention en urgence ?
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-[1.8] text-white/65">
                Un seul numéro pour la plomberie, le chauffage, la climatisation, l'électricité et la
                piscine. Nous vous répondons, nous vous guidons sur les premiers gestes et nous vous
                annonçons un créneau — sept jours sur sept, dans tout le Var.
              </p>

              <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {['Créneau donné dès l’appel', 'Prix annoncé avant travaux', 'Lorgues · Dracénie · Golfe'].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2.5 text-[12px] text-white/70">
                      <Icon name="checkCircle" className="h-4 w-4 text-white/50" strokeWidth={1.8} />
                      {t}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Gros bouton téléphone */}
            <div className="min-w-0 lg:col-span-6 lg:justify-self-end">
              <a
                href={company.phoneHref}
                className="group flex w-full items-center gap-5 rounded-3xl bg-white p-6 text-navy-800 shadow-photo transition-transform duration-300 hover:-translate-y-1 sm:p-8"
              >
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-navy-800 text-white transition-colors group-hover:bg-navy-600 sm:h-[72px] sm:w-[72px]">
                  <Icon name="phone" className="h-7 w-7" strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-[.18em] text-navy-500">
                    Appelez-nous maintenant
                  </span>
                  <span className="mt-1.5 block text-[28px] font-black leading-none tracking-tight sm:text-[38px]">
                    {company.phone}
                  </span>
                  <span className="mt-2 block text-[11.5px] text-navy-500">
                    Urgences 7j/7 — {company.address.city} et tout le Var
                  </span>
                </span>
              </a>

              <Link
                to="/contact"
                className="btn-outline-gold mt-4 w-full justify-center"
              >
                Ou décrire la panne par écrit
                <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GuaranteeBar />
    </>
  )
}
