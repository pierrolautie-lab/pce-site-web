import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { CtaBand } from '../components/Blocks.jsx'
import Icon from '../components/Icon.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services, company } from '../data/site.js'

const HERO_HIGHLIGHTS = [
  { icon: 'home', title: 'Installation', label: 'Neuf & rénovation' },
  { icon: 'shieldCheck', title: 'Sécurité', label: 'Normes & conformité' },
  { icon: 'gauge', title: 'Performance', label: "Économies d'énergie" },
  { icon: 'wrench', title: 'Dépannage', label: 'Intervention rapide' },
]

const SERVICES_CHECKLIST = [
  'Installation électrique neuve',
  'Rénovation et mise aux normes NF C 15-100',
  'Remplacement de tableaux électriques',
  'Ajout de prises, éclairages, circuits spécialisés',
  'Protection des installations (parafoudre, différentiel…)',
  'VMC, ventilation et gestion des équipements',
  'Domotique et solutions connectées',
  'Dépannage et recherche de pannes',
  'Contrôle et conformité de vos installations',
]

const NORMES_CHECKLIST = [
  'Protection des personnes et des biens',
  "Prévention des risques d'incendie",
  'Conformité indispensable pour votre assurance',
  'Valorisation de votre bien immobilier',
]

const PARTNERS = [
  {
    name: 'Schneider',
    suffix: 'Electric',
    color: 'text-[#3DCD58]',
    text: 'Des solutions innovantes et durables pour une électricité sûre et performante.',
    bullets: ['Tableaux électriques Resi9 & Acti9', "Gestion de l'énergie", 'Solutions connectées'],
  },
  {
    name: 'Legrand',
    suffix: '',
    color: 'text-navy-900',
    swatch: 'bg-[#E2001A]',
    text: 'La référence française en équipements électriques et solutions filaires.',
    bullets: ['Appareillage et tableaux', 'Solutions pour le résidentiel et le tertiaire', 'Qualité, fiabilité et design'],
  },
]

const FEATURE_CARDS = [
  {
    icon: 'panel',
    title: 'Tableaux électriques performants',
    text: 'Des tableaux modernes et évolutifs pour une distribution électrique fiable et sécurisée.',
    bullets: ['Matériel de qualité', 'Circuits protégés', 'Évolutifs et modulables'],
  },
  {
    icon: 'shieldCheck',
    title: 'Protection optimale',
    text: 'Des dispositifs de protection adaptés pour sécuriser votre installation et vos équipements.',
    bullets: ['Interrupteurs différentiels', 'Parafoudre & protection surtension', 'Détection de défauts'],
  },
  {
    icon: 'leaf',
    title: "Économies d'énergie",
    text: 'Optimisez votre consommation électrique grâce à des solutions intelligentes et connectées.',
    bullets: ['Gestion des éclairages', 'Programmation et automatisation', 'Suivi de consommation'],
  },
  {
    icon: 'robot',
    title: 'Domotique & confort',
    text: 'Pilotez votre maison à distance et simplifiez votre quotidien avec nos solutions connectées.',
    bullets: ['Éclairage, volets, chauffage', 'Sécurité & alarme', 'Scénarios personnalisés'],
  },
]

export default function Electricite() {
  const service = services.electricite

  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/electricite"
        jsonLd={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: '/electricite' }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/electricite' },
          ]),
          offerSchema({ name: service.title, path: '/electricite' }),
        ]}
      />

      {/* ====================================================== HERO ====== */}
      <PageHero
        breadcrumb={service.title}
        title="Électricité"
        subtitle="Sécurité, performance et mise aux normes"
        intro="Installation, rénovation, mise aux normes et dépannage électrique pour les particuliers dans tout le Var. Des solutions fiables, durables et conformes aux normes actuelles pour votre sécurité et votre confort."
        photo={{ ...service.hero, alt: 'Tableau électrique moderne installé par PCE' }}
        highlights={HERO_HIGHLIGHTS}
      />

      {/* ==================================== SERVICES + MISE AUX NORMES == */}
      <section className="bg-navy-50 py-14 sm:py-16 lg:py-20">
        <div className="container-pce">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="min-w-0 rounded-xl bg-white p-8 shadow-card ring-1 ring-navy-100 sm:p-10">
              <h2 className="text-[17px] font-bold uppercase leading-snug tracking-[.05em] text-azure-500 sm:text-[19px]">
                Nos services électricité
              </h2>
              <ul className="mt-7 space-y-4">
                {SERVICES_CHECKLIST.map((b) => (
                  <li key={b} className="flex items-start gap-3.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-azure-500" strokeWidth={3} />
                    <span className="text-[14px] leading-[1.65] text-navy-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-w-0 overflow-hidden rounded-xl bg-navy-800 p-8 text-white sm:p-10">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-6 select-none text-[110px] font-black uppercase leading-none tracking-tighter text-white/[.05]"
              >
                {company.name}
              </span>
              <div className="relative">
                <h2 className="text-[17px] font-bold uppercase leading-snug tracking-[.05em] text-white sm:text-[19px]">
                  Mise aux normes de votre tableau électrique
                </h2>
                <p className="signature mt-3 text-[16px]">Votre sécurité avant tout !</p>
                <p className="mt-4 max-w-md text-[14px] leading-[1.75] text-white/70">
                  Un tableau électrique vétuste peut représenter un danger pour votre habitation et
                  votre famille. PCE vous accompagne pour mettre votre installation en conformité
                  avec la norme NF C 15-100.
                </p>
                <ul className="mt-6 space-y-3.5">
                  {NORMES_CHECKLIST.map((b) => (
                    <li key={b} className="flex items-start gap-3.5">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" strokeWidth={3} />
                      <span className="text-[14px] leading-[1.65] text-white/85">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/mise-aux-normes-electriques-var" className="btn-gold mt-7 w-full whitespace-normal text-center sm:w-auto sm:whitespace-nowrap">
                  En savoir plus sur la mise aux normes
                  <Icon name="arrowRight" className="h-4 w-4 shrink-0" strokeWidth={2.4} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================== PARTENAIRES ======= */}
      <section className="section bg-white">
        <div className="container-pce">
          <h2 className="section-title">Nos partenaires de confiance</h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {PARTNERS.map((p) => (
              <div key={p.name} className="rounded-xl bg-navy-50 p-8 ring-1 ring-navy-100 sm:p-9">
                <div className="flex items-center gap-2.5">
                  {p.swatch && <span className={`h-6 w-6 shrink-0 rounded-sm ${p.swatch}`} aria-hidden="true" />}
                  <span className={`text-[26px] font-black leading-none tracking-tight ${p.color}`}>
                    {p.name}
                  </span>
                  {p.suffix && (
                    <span className="text-[13px] font-semibold uppercase tracking-[.1em] text-navy-500">
                      {p.suffix}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-[14px] leading-[1.7] text-navy-600">{p.text}</p>
                <ul className="mt-5 space-y-3">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-azure-500" strokeWidth={3.2} />
                      <span className="text-[13.5px] leading-[1.6] text-navy-600">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================ 4 ATOUTS ======== */}
      <section className="bg-navy-50 py-14 sm:py-16 lg:py-20">
        <div className="container-pce">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURE_CARDS.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl bg-white p-6 shadow-card ring-1 ring-navy-100">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-navy-200 text-azure-500">
                  <Icon name={c.icon} className="h-5.5 w-5.5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-[13.5px] font-bold uppercase leading-snug tracking-[.04em] text-navy-800">
                  {c.title}
                </h3>
                <p className="mt-3 text-[12.5px] leading-[1.6] text-navy-500">{c.text}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <Icon name="check" className="mt-0.5 h-3 w-3 shrink-0 text-azure-500" strokeWidth={3.2} />
                      <span className="text-[12px] leading-[1.5] text-navy-600">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================== BANDEAU D'APPEL == */}
      <CtaBand />
    </>
  )
}
