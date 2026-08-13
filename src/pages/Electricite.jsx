import PageHero from '../components/PageHero.jsx'
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
  'VMC, ventilation et gestion des équipements',
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
        title="Électricité"
        subtitle="Sécurité, performance et mise aux normes"
        intro="Installation, rénovation, mise aux normes et dépannage électrique pour les particuliers dans tout le Var. Des solutions fiables, durables et conformes aux normes actuelles pour votre sécurité et votre confort."
        photo={{ ...service.hero, alt: 'Tableau électrique moderne installé par PCE' }}
        highlights={HERO_HIGHLIGHTS}
      />

      <ServiceTwoColumn
        checklistTitle="Nos services électricité"
        checklist={SERVICES_CHECKLIST}
        card={NORMES_CARD}
        tightBottom
      />

      <ServiceBrandsRow title="Les marques que nous installons" brands={BRANDS} />

      <ServiceFeatureCards items={FEATURE_CARDS} />

      <CtaBand />
    </>
  )
}
