import PageHero from '../components/PageHero.jsx'
import { CtaBand, Process } from '../components/Blocks.jsx'
import { ServiceTwoColumn, ServiceFeatureCards } from '../components/ServiceBlocks.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

const HERO_HIGHLIGHTS = [
  { icon: 'filter', title: 'Filtration', label: 'Fine & forage' },
  { icon: 'testTube', title: 'Charbon actif', label: 'Chlore, pesticides, odeurs' },
  { icon: 'sparkles', title: 'Traitement UV', label: 'Sans produit chimique' },
  { icon: 'search', title: 'Analyse', label: "Étude de votre eau" },
]

const SERVICES_CHECKLIST = [
  'Filtration fine (eau de boisson)',
  'Filtration de forage (sable, boue, rouille)',
  'Charbon actif (chlore, pesticides, odeurs)',
  'Traitement UV (désinfection sans produit chimique)',
  "Analyse de la qualité de l'eau",
  'Installation en tête de réseau',
  'Entretien annuel et suivi',
]

const ANALYSE_CARD = {
  title: 'Analyse de votre eau',
  kicker: 'La première étape, toujours gratuite',
  text: "Avant de proposer un traitement, nous mesurons le pH et recherchons la présence éventuelle de fer ou de particules dans votre eau, pour ne préconiser que ce qui est réellement utile.",
  checklist: [
    'Mesure du pH sur place',
    'Détection de fer ou de particules',
    'Préconisation adaptée à votre eau réelle',
    'Devis gratuit et sans engagement',
  ],
  ctaLabel: 'Demander une analyse gratuite',
  ctaTo: '/contact',
}

const INSTALLATION_STEPS = [
  { title: "Étude de l'installation", text: "Relevé du local technique, du débit et de la configuration de votre arrivée d'eau." },
  { title: "Analyse de l'eau", text: "Mesure du pH et détection d'éventuelles particules ou de fer avant toute préconisation." },
  { title: 'Choix du traitement', text: 'Filtration, charbon actif ou UV : nous ne proposons que ce qui est réellement utile chez vous.' },
  { title: 'Pose complète', text: 'Installation en tête de réseau, raccordements et protection du réseau existant.' },
  { title: 'Mise en service', text: "Réglages et contrôle du bon fonctionnement de l'équipement posé." },
  { title: 'Entretien annuel', text: 'Contrôle des performances et remplacement des consommables (cartouches, lampe UV).' },
]

const FEATURE_CARDS = [
  {
    icon: 'filter',
    title: 'Filtration fine',
    text: 'Pour une eau de boisson meilleure au goût, sans chlore ni particules.',
    bullets: ["Sous évier ou en tête d'installation", 'Cartouche à changer 1x/an', 'Eau au goût amélioré'],
  },
  {
    icon: 'droplet',
    title: 'Filtration de forage',
    text: 'Sable, boue, rouille : une eau de forage traitée avant tout usage domestique.',
    bullets: ['Analyse préalable systématique', 'Filtre à particules', 'Traitement du fer si besoin'],
  },
  {
    icon: 'testTube',
    title: 'Charbon actif',
    text: 'Réduit le chlore, les pesticides et les mauvais goûts ou odeurs de votre eau.',
    bullets: ['Cartouche à charbon actif', 'Installation sous évier ou en ligne', 'Renouvellement annuel'],
  },
  {
    icon: 'sparkles',
    title: 'Traitement UV',
    text: 'Désinfection sans produit chimique, pour une eau sécurisée sur le plan bactériologique.',
    bullets: ['Sans impact sur le goût', 'Lampe à remplacer 1x/an', "Idéal en complément d'un forage"],
  },
]

export default function TraitementEau() {
  const service = services.traitementEau

  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/traitement-de-l-eau"
        jsonLd={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: '/traitement-de-l-eau' }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/traitement-de-l-eau' },
          ]),
          offerSchema({ name: service.title, path: '/traitement-de-l-eau' }),
        ]}
      />

      <PageHero
        breadcrumb={service.title}
        title="Traitement de l'eau"
        subtitle="Filtration, charbon actif et traitement UV de votre eau"
        intro="L'eau du Var compte parmi les plus calcaires de France. PCE installe des solutions de filtration fine, de filtration de forage, de charbon actif et de traitement UV, dimensionnées après une analyse réelle de votre eau."
        photo={{ ...service.hero, alt: "Traitement de l'eau installé par PCE" }}
        highlights={HERO_HIGHLIGHTS}
      />

      <ServiceTwoColumn
        checklistTitle="Nos services traitement de l'eau"
        checklist={SERVICES_CHECKLIST}
        card={ANALYSE_CARD}
      />

      <Process
        steps={INSTALLATION_STEPS}
        title="Installation par PCE"
        lead="Chaque traitement est choisi et réglé selon l'eau réelle de votre logement, pas selon une solution unique appliquée par défaut."
        columns={3}
      />

      <ServiceFeatureCards items={FEATURE_CARDS} />

      <CtaBand />
    </>
  )
}
