import PageHero from '../components/PageHero.jsx'
import { CtaBand, Process } from '../components/Blocks.jsx'
import { ServiceTwoColumn, ServiceFeatureCards } from '../components/ServiceBlocks.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

const HERO_HIGHLIGHTS = [
  { icon: 'waves', title: 'Filtration', label: 'Débit variable' },
  { icon: 'salt', title: 'Traitement au sel', label: 'Électrolyse' },
  { icon: 'thermometer', title: 'Chauffage', label: 'Pompe à chaleur dédiée' },
  { icon: 'robot', title: 'Automatisation', label: 'Pilotage à distance' },
]

const SERVICES_CHECKLIST = [
  'Création et rénovation de bassin',
  'Reprise du local technique',
  'Filtration et pompes à débit variable',
  'Traitement au sel (électrolyse)',
  'Chauffage de piscine par pompe à chaleur',
  'Automatisation et régulation du pH',
  'Recherche de fuite sur bassin et canalisations',
  'Hivernage et remise en route saisonnière',
  'Pose d’équipements reconnus (Hayward, Zodiac, Fluidra…) selon vos besoins',
]

const AUTOMATION_CARD = {
  title: 'Automatisation de votre piscine',
  kicker: 'Zéro corvée, eau toujours saine',
  text: 'Régulation automatique du pH et du désinfectant, pilotage à distance depuis votre téléphone : une piscine que vous surveillez sans y penser, même en votre absence.',
  checklist: [
    'Régulation automatique du pH et du chlore',
    'Pilotage à distance depuis votre téléphone',
    'Une eau stable, même en votre absence',
    'Moins de produits chimiques consommés',
  ],
  ctaLabel: "En savoir plus sur l'entretien de piscine",
  ctaTo: '/entretien-piscine-var',
}

const AUTOMATION_STEPS = [
  { title: 'Étude', text: 'Analyse du bassin, du local technique et de vos usages pour définir le niveau d’automatisation utile.' },
  { title: 'Installation', text: 'Pose des sondes, régulateurs et de la cellule d’électrolyse, raccordés au coffret existant.' },
  { title: 'Réglages', text: 'Paramétrage des consignes de pH et de désinfectant selon le volume réel de votre bassin.' },
  { title: 'Suivi', text: 'Contrôle du bon fonctionnement et ajustements fins durant les premières semaines.' },
  { title: 'Vous profitez', text: 'Une eau surveillée en continu, pilotable depuis votre téléphone, où que vous soyez.' },
]

const FEATURE_CARDS = [
  {
    icon: 'salt',
    title: 'Traitement au sel',
    text: 'Une eau douce et agréable, sans odeur de chlore, produite automatiquement.',
    bullets: ['Électrolyse au sel', 'Moins de produits à manipuler', 'Confort peau et yeux'],
  },
  {
    icon: 'gauge',
    title: 'Pompe à vitesse variable',
    text: "Jusqu'à 80 % d'économie d'électricité sur la filtration, pour une eau plus claire.",
    bullets: ['Filtration longue à bas régime', 'Fonctionnement silencieux', 'Durée de vie prolongée'],
  },
  {
    icon: 'thermometer',
    title: 'Chauffage de bassin',
    text: 'Pompe à chaleur dédiée pour prolonger votre saison de baignade.',
    bullets: ['Dimensionnée à votre volume', 'Raccordement après filtration', 'Régulation précise'],
  },
  {
    icon: 'robot',
    title: 'Automatisation',
    text: 'Régulation et pilotage à distance pour une piscine sans contrainte.',
    bullets: ['Régulation pH automatique', 'Application mobile', 'Alertes en temps réel'],
  },
]

export default function Piscine() {
  const service = services.piscine

  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/piscine"
        jsonLd={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: '/piscine' }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/piscine' },
          ]),
          offerSchema({ name: service.title, path: '/piscine' }),
        ]}
      />

      <PageHero
        breadcrumb={service.title}
        title="Piscine"
        subtitle="Une eau claire, sans contrainte"
        intro="Filtration, traitement au sel, chauffage et automatisation de votre bassin dans tout le Var. PCE traite votre piscine comme une installation hydraulique et électrique complète, pas comme un simple point d'entretien."
        photo={{ ...service.hero, alt: 'Bassin provençal entretenu par PCE' }}
        highlights={HERO_HIGHLIGHTS}
      />

      <ServiceTwoColumn checklistTitle="Nos services piscine" checklist={SERVICES_CHECKLIST} card={AUTOMATION_CARD} />

      <Process
        steps={AUTOMATION_STEPS}
        title="Le parcours d'automatisation de votre piscine"
        lead="Cinq étapes, du premier relevé jusqu'à une piscine dont vous profitez sans y penser."
      />

      <ServiceFeatureCards items={FEATURE_CARDS} />

      <CtaBand />
    </>
  )
}
