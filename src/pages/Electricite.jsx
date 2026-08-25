import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import { CtaBand } from '../components/Blocks.jsx'
import { ServiceTwoColumn, ServiceFeatureCards, ServiceBrandsRow } from '../components/ServiceBlocks.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

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
  'Domotique et solutions connectées',
  'Dépannage et recherche de pannes',
  'Contrôle et conformité de vos installations',
]

const NORMES_CARD = {
  title: 'Mise aux normes de votre tableau électrique',
  kicker: 'Votre sécurité avant tout !',
  text: "Un tableau électrique vétuste peut représenter un danger pour votre habitation et votre famille. PCE vous accompagne pour mettre votre installation en conformité avec la norme NF C 15-100.",
  checklist: [
    'Protection des personnes et des biens',
    "Prévention des risques d'incendie",
    'Conformité indispensable pour votre assurance',
    'Valorisation de votre bien immobilier',
  ],
  ctaLabel: 'En savoir plus sur la mise aux normes',
  ctaTo: '/mise-aux-normes-electriques-var',
}

const BRANDS = [
  {
    name: 'Schneider',
    suffix: 'Electric',
    color: 'text-[#3DCD58]',
    text: 'Des solutions innovantes et durables pour une électricité sûre et performante : tableaux Resi9 & Acti9, gestion de l’énergie, solutions connectées.',
  },
  {
    name: 'Legrand',
    suffix: '',
    color: 'text-navy-900',
    swatch: 'bg-[#E2001A]',
    text: 'La référence française en équipements électriques et solutions filaires : appareillage, tableaux, solutions résidentielles et tertiaires.',
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

      <PageHero
        breadcrumb={service.title}
        icon="bolt"
        iconClass="text-gold-400"
        haloClass="from-gold-400/[.18]"
        title="Électricité"
        subtitle="Sécurité, performance et mise aux normes"
        intro="Installation, rénovation, mise aux normes et dépannage électrique pour les particuliers dans tout le Var. Des solutions fiables, durables et conformes aux normes actuelles pour votre sécurité et votre confort."
        photo={{ ...service.hero, alt: 'Tableau électrique ouvert installé par PCE' }}
        highlights={HERO_HIGHLIGHTS}
        fullBleed
      />

      <ServiceTwoColumn
        checklistTitle="Nos services électricité"
        checklist={SERVICES_CHECKLIST}
        card={NORMES_CARD}
        tightBottom
      />

      {/* La VMC a sa propre page métier depuis le 17/08/2026 (elle a rejoint
          la liste ci-dessus par le passé, ce qui n'a plus de sens
          maintenant) — renvoi plutôt que suppression sèche, pour qu'un
          lecteur qui la cherchait ici soit conduit vers la bonne page. */}
      <section className="bg-navy-50 pb-14 sm:pb-16 lg:pb-20">
        <div className="container-pce">
          <Link
            to="/vmc"
            className="group flex flex-col items-start gap-4 rounded-xl bg-white p-6 shadow-card ring-1 ring-navy-100 transition-all duration-300 hover:bg-navy-800 hover:ring-navy-800 sm:flex-row sm:items-center sm:justify-between sm:p-7"
          >
            <span className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-50 text-mint-600 ring-1 ring-navy-100 transition-colors group-hover:bg-white/12 group-hover:text-white group-hover:ring-white/20">
                <Icon name="fan" className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="text-body-sm text-navy-600 transition-colors group-hover:text-white/85">
                Vous cherchez la ventilation (VMC) ? C'est un métier à part, avec sa propre page.
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 text-label font-bold uppercase text-navy-800 transition-colors group-hover:text-white">
              Voir la page VMC
              <Icon name="arrowRight" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.4} />
            </span>
          </Link>
        </div>
      </section>

      <ServiceBrandsRow title="Les marques que nous installons" brands={BRANDS} />

      <ServiceFeatureCards items={FEATURE_CARDS} />

      <CtaBand />
    </>
  )
}
