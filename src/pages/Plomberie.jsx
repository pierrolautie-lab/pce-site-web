import PageHero from '../components/PageHero.jsx'
import { CtaBand } from '../components/Blocks.jsx'
import { ServiceTwoColumn, ServiceFeatureCards } from '../components/ServiceBlocks.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

const HERO_HIGHLIGHTS = [
  { icon: 'pipe', title: 'Installation', label: 'Neuf & rénovation' },
  { icon: 'shower', title: 'Rénovation SDB', label: 'Clé en main' },
  { icon: 'search', title: 'Recherche de fuite', label: 'Non destructive' },
  { icon: 'wrench', title: 'Dépannage', label: 'Intervention rapide' },
]

const SERVICES_CHECKLIST = [
  'Installation sanitaire neuve',
  'Rénovation complète de salle de bains',
  'Recherche de fuite non destructive',
  'Remplacement de chauffe-eau (thermodynamique, électrique, gaz)',
  "Installation d'adoucisseurs et filtration d'eau",
  'Réglage du débit et de la pression',
  'Débouchage et réparation de canalisations',
  'Robinetterie et sanitaires',
  'Dépannage et urgences plomberie',
]

const RENOVATION_CARD = {
  title: 'Rénovation de salle de bain',
  kicker: 'Un projet clé en main',
  text: "De la conception à la pose, PCE prend en charge l'ensemble de votre projet de salle de bain : plomberie, douche à l'italienne et robinetterie, sans multiplier les intervenants.",
  checklist: [
    'Étude et conception sur mesure',
    "Douche à l'italienne et accessibilité PMR",
    'Robinetterie et sanitaires de qualité',
    'Un seul interlocuteur du début à la fin',
  ],
  ctaLabel: 'En savoir plus sur la rénovation de salle de bain',
  ctaTo: '/renovation-salle-de-bain-var',
}

const FEATURE_CARDS = [
  {
    icon: 'shower',
    title: 'Salle de bains sur mesure',
    text: 'Rénovation complète, du gros œuvre à la finition, pour un espace fonctionnel et durable.',
    bullets: ["Douche à l'italienne", 'Sanitaires suspendus', 'Accessibilité PMR'],
  },
  {
    icon: 'search',
    title: 'Recherche de fuite',
    text: 'Détection non destructive pour localiser une fuite sans casser inutilement.',
    bullets: ['Caméra thermique', 'Détection acoustique', 'Devis avant travaux'],
  },
  {
    icon: 'flame',
    title: 'Chauffe-eau',
    text: 'Remplacement de chauffe-eau électriques, thermodynamiques ou gaz, adaptés à votre consommation.',
    bullets: ['Ballons thermodynamiques', 'Chauffe-eau instantanés', 'Mise en service incluse'],
  },
  {
    icon: 'filter',
    title: "Traitement de l'eau",
    text: 'Adoucisseurs et filtration installés en complément de vos travaux de plomberie.',
    bullets: ['Adoucisseur Pentair Foleo', 'Filtration fine', "Analyse de l'eau"],
  },
]

export default function Plomberie() {
  const service = services.plomberie

  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/plomberie"
        jsonLd={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: '/plomberie' }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/plomberie' },
          ]),
          offerSchema({ name: service.title, path: '/plomberie' }),
        ]}
      />

      <PageHero
        breadcrumb={service.title}
        title="Plomberie"
        subtitle="Installation, rénovation et dépannage sanitaire"
        intro="Installation sanitaire, rénovation de salle de bains, recherche de fuite et dépannage plomberie pour les particuliers et professionnels dans tout le Var. Des interventions soignées et durables, du premier appel à la mise en service."
        photo={{ ...service.hero, alt: 'Salle de bains rénovée par PCE' }}
        highlights={HERO_HIGHLIGHTS}
      />

      <ServiceTwoColumn checklistTitle="Nos services plomberie" checklist={SERVICES_CHECKLIST} card={RENOVATION_CARD} />

      <ServiceFeatureCards items={FEATURE_CARDS} />

      <CtaBand />
    </>
  )
}
