import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Photo from '../components/Photo.jsx'
import Icon from '../components/Icon.jsx'
import { CtaBand, Process } from '../components/Blocks.jsx'
import { ServiceTwoColumn, ServiceFeatureCards } from '../components/ServiceBlocks.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

const HERO_HIGHLIGHTS = [
  { icon: 'tank', title: 'Adoucisseur', label: 'Pentair Foleo' },
  { icon: 'filter', title: 'Filtration', label: 'Fine & forage' },
  { icon: 'sparkles', title: 'Traitement UV', label: 'Sans produit chimique' },
  { icon: 'search', title: 'Analyse', label: "Étude de votre eau" },
]

const SERVICES_CHECKLIST = [
  "Adoucisseur d'eau Pentair Foleo",
  "Filtration fine (eau de boisson)",
  'Filtration de forage (sable, boue, rouille)',
  'Charbon actif (chlore, pesticides, odeurs)',
  'Traitement UV (désinfection sans produit chimique)',
  "Analyse de la dureté et de la qualité de l'eau",
  'Installation en tête de réseau',
  'Entretien annuel et suivi',
]

const ADOUCISSEUR_CARD = {
  title: 'Adoucisseur Pentair Foleo',
  kicker: 'Garantie 10 ans sur la cuve',
  text: "L'appareil que nous installons le plus : réglage précis de la dureté, régénération économe en sel, et une eau protégée au quotidien.",
  checklist: [
    'Réglage de dureté adapté à votre eau',
    'Régénération intelligente, sel optimisé',
    'Installation compacte, mode vacances',
    'Garantie 10 ans sur la cuve',
  ],
  ctaLabel: "En savoir plus sur l'adoucisseur",
  ctaTo: '/traitement-de-l-eau/adoucisseur',
}

const CARACTERISTIQUES = [
  'Réglage précis de la dureté, adapté à votre consommation réelle',
  'Consommation de sel optimisée par régénération intelligente',
  'Détection de fuites intégrée',
  'Application connectée pour un suivi à distance',
  'Installation compacte, discrète en local technique',
  'Mode vacances pour suspendre la régénération en votre absence',
  'Garantie 10 ans sur la cuve',
]

const BENEFICES = [
  'Protection des canalisations contre le calcaire',
  'Protection du chauffe-eau et de la chaudière',
  'Moins de calcaire sur la robinetterie',
  'Une peau plus douce au quotidien',
  'Un linge plus souple, sans traces de calcaire',
  "Moins de produits ménagers et d'adoucissant nécessaires",
  'Durée de vie prolongée de vos équipements',
  "Des économies d'énergie sur la production d'eau chaude",
]

const INSTALLATION_STEPS = [
  { title: "Étude de l'installation", text: "Relevé du local technique, du débit et de la configuration de votre arrivée d'eau." },
  { title: 'Réglage de la dureté', text: 'Mesure de la dureté réelle de votre eau, propre à votre commune, pour un calibrage précis.' },
  { title: 'Pose complète', text: "Installation en tête de réseau, by-pass et raccordement à l'évacuation." },
  { title: 'Mise en service', text: "Paramétrage de la régénération et contrôle de la dureté en sortie d'appareil." },
  { title: "Conseils d'utilisation", text: 'Explication du fonctionnement, du dosage du sel et du point d’eau non adoucie.' },
  { title: 'Entretien annuel', text: 'Contrôle des performances, du sel et de l’état de la cuve et des joints.' },
]

const FEATURE_CARDS = [
  {
    icon: 'tank',
    title: 'Adoucisseur Pentair Foleo',
    text: 'Notre solution de référence contre le calcaire, garantie 10 ans sur la cuve.',
    bullets: ['Réglage précis de la dureté', 'Régénération économe en sel', 'Application connectée'],
  },
  {
    icon: 'filter',
    title: 'Filtration fine',
    text: 'Pour une eau de boisson meilleure au goût, sans chlore ni particules.',
    bullets: ["Sous évier ou en tête d'installation", 'Cartouche à changer 1x/an', "Compatible avec l'adoucisseur"],
  },
  {
    icon: 'droplet',
    title: 'Filtration de forage',
    text: 'Sable, boue, rouille : une eau de forage traitée avant tout usage domestique.',
    bullets: ['Analyse préalable systématique', 'Filtre à particules', 'Traitement du fer si besoin'],
  },
  {
    icon: 'sparkles',
    title: 'Traitement UV',
    text: 'Désinfection sans produit chimique, pour une eau sécurisée sur le plan bactériologique.',
    bullets: ['Sans impact sur le goût', 'Lampe à remplacer 1x/an', "Idéal en complément d'un forage"],
  },
]

/** Section principale, mise en avant du produit phare (adoucisseur Pentair Foleo). */
function AdoucisseurSpotlight() {
  const product = services.traitementEau.product

  return (
    <section className="section bg-white">
      <div className="container-pce">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <Photo
              {...product.photo}
              alt="Adoucisseur Pentair Foleo installé par PCE"
              className="aspect-[4/3] w-full shadow-photo"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>

          <div className="min-w-0 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded bg-navy-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-navy-600 ring-1 ring-navy-100">
              <Icon name="tank" className="h-3.5 w-3.5" strokeWidth={2.2} />
              Notre produit phare
            </span>
            <h2 className="mt-4 text-[22px] font-black uppercase leading-tight tracking-[-.01em] text-navy-800 sm:text-[28px]">
              Adoucisseur d'eau Pentair Foleo
            </h2>
            <p className="mt-4 max-w-2xl text-[14.5px] leading-[1.8] text-navy-500">
              Dans le Var, l'eau dépasse fréquemment 30°f de dureté — un niveau où le calcaire
              n'est plus un désagrément esthétique : il entartre les canalisations, le chauffe-eau,
              la chaudière et la robinetterie, et réduit leur durée de vie. L'adoucisseur Pentair
              Foleo, que nous installons le plus, protège durablement votre installation.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="min-w-0 rounded-xl bg-navy-50 p-8 ring-1 ring-navy-100 sm:p-9">
            <h3 className="text-[14px] font-bold uppercase tracking-[.06em] text-azure-500">
              Caractéristiques du Foleo
            </h3>
            <ul className="mt-5 space-y-3.5">
              {CARACTERISTIQUES.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-azure-500" strokeWidth={3.2} />
                  <span className="text-[13.5px] leading-[1.6] text-navy-600">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 rounded-xl bg-navy-50 p-8 ring-1 ring-navy-100 sm:p-9">
            <h3 className="text-[14px] font-bold uppercase tracking-[.06em] text-azure-500">
              Ce que ça change pour vous
            </h3>
            <ul className="mt-5 space-y-3.5">
              {BENEFICES.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-azure-500" strokeWidth={3.2} />
                  <span className="text-[13.5px] leading-[1.6] text-navy-600">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/traitement-de-l-eau/adoucisseur" className="btn-azure w-full whitespace-normal text-center sm:w-auto sm:whitespace-nowrap">
            En savoir plus sur les adoucisseurs
            <Icon name="arrowRight" className="h-4 w-4 shrink-0" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  )
}

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
        subtitle="Adoucisseur, filtration et traitement de votre eau"
        intro="L'eau du Var compte parmi les plus calcaires de France. PCE installe des solutions complètes pour la traiter : adoucisseur, filtration fine, charbon actif et traitement UV, dimensionnées après une analyse réelle de votre eau."
        photo={{ ...service.hero, alt: 'Adoucisseur Pentair Foleo installé par PCE' }}
        highlights={HERO_HIGHLIGHTS}
      />

      <ServiceTwoColumn
        checklistTitle="Nos services traitement de l'eau"
        checklist={SERVICES_CHECKLIST}
        card={ADOUCISSEUR_CARD}
      />

      <AdoucisseurSpotlight />

      <Process
        steps={INSTALLATION_STEPS}
        title="Installation par PCE"
        lead="Chaque adoucisseur est réglé sur la dureté réelle de votre commune, pas sur une valeur moyenne approximative."
      />

      <ServiceFeatureCards items={FEATURE_CARDS} />

      <CtaBand />
    </>
  )
}
