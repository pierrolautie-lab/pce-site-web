import PageHero from '../components/PageHero.jsx'
import { CtaBand } from '../components/Blocks.jsx'
import { ServiceTwoColumn, ServiceFeatureCards, ServiceBrandsRow } from '../components/ServiceBlocks.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

const HERO_HIGHLIGHTS = [
  { icon: 'snowflake', title: 'Monosplit', label: 'Une pièce' },
  { icon: 'layers', title: 'Multisplit', label: 'Plusieurs pièces' },
  { icon: 'wind', title: 'Gainable', label: 'Diffusion invisible' },
  { icon: 'settings', title: 'Entretien', label: 'Contrôle annuel' },
]

const SERVICES_CHECKLIST = [
  'Climatisation mono-split',
  'Climatisation multi-split',
  'Climatisation gainable',
  'Étude acoustique et dimensionnement',
  "Entretien et contrôle d'étanchéité réglementaire",
  'Dépannage toutes marques',
  'Pose de liaisons frigorifiques encastrées',
  'Régulation et pilotage à distance',
]

const GAINABLE_CARD = {
  title: 'Climatisation gainable',
  kicker: 'Le confort sans rien voir',
  text: 'Le système gainable dissimule l’ensemble du réseau dans les combles ou un faux plafond : seules des grilles de diffusion restent visibles, pour un résultat discret sur mesure.',
  checklist: [
    'Diffusion invisible, grilles linéaires seulement',
    'Un seul caisson pour toute la maison',
    'Idéal en rénovation comme en neuf',
    'Silencieux : caisson déporté en combles',
  ],
  ctaLabel: 'En savoir plus sur la climatisation réversible',
  ctaTo: '/installation-climatisation-reversible-var',
}

const BRANDS = [
  {
    name: 'Daikin',
    color: 'text-[#0090D4]',
    text: 'Leader mondial de la climatisation, reconnu pour la fiabilité et la performance énergétique de ses appareils.',
  },
  {
    name: 'Mitsubishi',
    suffix: 'Electric',
    color: 'text-navy-900',
    swatch: 'bg-[#E60012]',
    text: 'Une gamme réputée pour sa robustesse et son fonctionnement silencieux, en mono comme en multi-split.',
  },
  {
    name: 'Midea',
    color: 'text-[#0080C6]',
    text: 'Un excellent rapport qualité-prix, pour des installations performantes sans compromis sur la fiabilité.',
  },
]

const FEATURE_CARDS = [
  {
    icon: 'snowflake',
    title: 'Confort',
    text: 'Une température idéale été comme hiver, dans chaque pièce de votre logement.',
    bullets: ["Rafraîchissement l'été", 'Chauffage d’appoint en mi-saison', 'Réglage pièce par pièce'],
  },
  {
    icon: 'leaf',
    title: 'Économie',
    text: 'Un matériel performant, qui consomme trois à quatre fois moins qu’un chauffage électrique direct.',
    bullets: ['Classe énergétique élevée', 'Régulation intelligente', 'Dimensionnement au juste besoin'],
  },
  {
    icon: 'settings',
    title: 'Silence',
    text: 'Des appareils discrets, posés avec soin pour ne jamais perturber vos nuits.',
    bullets: ['Unités basse décibel', 'Groupe extérieur bien positionné', 'Isolation des liaisons'],
  },
  {
    icon: 'shieldCheck',
    title: 'Fiabilité',
    text: 'Du matériel de qualité, installé par des professionnels certifiés fluides frigorigènes.',
    bullets: ['Attestation de capacité', 'Mise sous vide systématique', "Contrôle d'étanchéité"],
  },
]

export default function Climatisation() {
  const service = services.climatisation

  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/climatisation"
        jsonLd={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: '/climatisation' }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/climatisation' },
          ]),
          offerSchema({ name: service.title, path: '/climatisation' }),
        ]}
      />

      <PageHero
        breadcrumb={service.title}
        title="Climatisation"
        subtitle="Confort l'été, performance toute l'année"
        intro="Installation de climatisation mono-split, multi-split et gainable, posée avec soin pour rester discrète et silencieuse. PCE assure aussi l'entretien réglementaire de votre équipement dans tout le Var."
        photo={{ ...service.hero, alt: 'Climatisation gainable installée par PCE' }}
        highlights={HERO_HIGHLIGHTS}
      />

      <ServiceTwoColumn checklistTitle="Nos services climatisation" checklist={SERVICES_CHECKLIST} card={GAINABLE_CARD} />

      <ServiceBrandsRow title="Les marques que nous installons" brands={BRANDS} />

      <ServiceFeatureCards items={FEATURE_CARDS} />

      <CtaBand />
    </>
  )
}
