import { Link } from 'react-router-dom'
import { ReassuranceBar } from '../components/PageHero.jsx'
import { CtaBand, Expertise, InfoBlock } from '../components/Blocks.jsx'
import { ServiceTwoColumn, ServiceFeatureCards } from '../components/ServiceBlocks.jsx'
import Icon from '../components/Icon.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services, company } from '../data/site.js'

/* Héros « fondu / épuré / premium » — banc d'essai demandé sur Plomberie
   uniquement (17-18/08/2026), avant propagation aux 6 autres héros métier.
   Volontairement séparé de `PageHero`/`HeroBackgroundPhoto` : tant que la
   méthode n'est pas validée, on ne touche pas le composant partagé utilisé
   par les 6 autres pages.

   Dégradé à 11 arrêts adoucis (au lieu de 2, qui laissait une bande
   visible), coefficient d'opacité de départ propre à cette page (0,32 —
   c'est la page qui demande le voile le plus faible du lot de 7).
   Un seul accent coloré à l'écran : l'or des CTA — icône, sous-titre et
   signature repassent en blanc pour cet essai (à valider avant propagation,
   ça change la convention couleur-par-métier des icônes de héros). */
const GRADIENT_COEFFICIENT = 0.32
const GRADIENT_STOPS = [
  [0, 1.0],
  [8, 0.793],
  [16, 0.612],
  [24, 0.456],
  [32, 0.325],
  [40, 0.218],
  [48, 0.133],
  [56, 0.071],
  [64, 0.029],
  [72, 0.006],
  [80, 0.0],
]
const HERO_GRADIENT = `linear-gradient(to right, ${GRADIENT_STOPS.map(
  ([pos, op]) => `rgb(1 12 30 / ${(op * GRADIENT_COEFFICIENT).toFixed(4)}) ${pos}%`
).join(', ')})`

/* Voile local (18/08/2026, ajouté après mesure) : le dégradé directionnel
   seul ne protège pas un élément dont la zone sous-jacente est localement
   plus claire — le recadrage `object-cover` déplace ces zones à chaque
   largeur. Couche courte, propre au bloc de texte (58% de la largeur du
   héros, soit 13 points de plus que la colonne de texte à 45% — dépasse
   son bord droit d'au moins 8% comme demandé), qui ne descend jamais sous
   le sujet : le dernier arrêt utile (80% du rayon) retombe déjà à zéro
   bien avant le bord droit du conteneur du voile. Coefficient de crête
   propre, indépendant de celui du dégradé principal — pas touché.
   Remonté à 0,52 (18/08/2026) : le chiffre qui compte est l'assombrissement
   du sujet (resté à 0,7 %, marge large sous le plafond de 5 %), pas la
   crête elle-même — 0,40 n'était qu'une estimation de départ. */
const VEIL_PEAK = 0.52
const LOCAL_VEIL_GRADIENT = `radial-gradient(ellipse 100% 100% at 0% 0%, ${GRADIENT_STOPS.map(
  ([pos, op]) => `rgba(1,12,30,${(op * VEIL_PEAK).toFixed(4)}) ${pos}%`
).join(', ')})`

function PlomberieHero({ service }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="relative min-h-[68vh] sm:min-h-[75vh]">
        <img
          src="/img/hero-plomberie.webp"
          alt="Salle de bains rénovée par PCE"
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 hidden h-full w-full object-cover sm:block"
        />
        {/* Dégradé directionnel à 11 arrêts adoucis, seul mécanisme de
            contraste — pas de voile uniforme superposé, voir le commentaire
            plus haut. */}
        <div className="absolute inset-0 hidden sm:block" style={{ background: HERO_GRADIENT }} />

        {/* `xl:pb-[16vh]` (au lieu de 12vh) : remonte tout le bloc de texte
            de quelques dizaines de pixels à 1280px et plus, pour sortir la
            signature du reflet du miroir sous-jacent — vérifié plus clair
            de 20 à 120px au-dessus de sa position initiale. */}
        <div className="container-pce relative flex min-h-[68vh] flex-col justify-end pb-[10vh] pt-6 sm:min-h-[75vh] sm:pb-[12vh] xl:pb-[16vh]">
          <nav aria-label="Fil d'Ariane" className="absolute top-6 z-10">
            {/* Le fil d'Ariane est un bloc de texte à part entière, hors du
                voile principal (ancré plus bas, sur le bloc de titre) —
                même traitement local, à sa propre échelle. */}
            <div
              className="pointer-events-none absolute -left-6 -top-12 -bottom-12 -z-10 hidden w-[260%] sm:block"
              style={{ background: LOCAL_VEIL_GRADIENT }}
            />
            <ol className="flex flex-wrap items-center gap-2 text-label font-bold uppercase text-white/45">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Accueil
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">›</span>
                <span className="text-white">{service.title}</span>
              </li>
            </ol>
          </nav>

          <div className="relative z-10 max-w-xl sm:max-w-[45%]">
            {/* Voile local : ancré sur le bloc de texte lui-même (pas la
                hauteur du héros — le texte est calé en bas via
                `justify-end`, un voile ancré en haut du héros le
                sous-couvrirait). Dépasse son bord droit de 30 points, soit
                ~13,5 % de la largeur du héros (colonne à 45 %), au-delà des
                8 % minimum demandés — élargi encore à 55 % sur le seul
                palier `md` (768-1023px), où le picto « Dépannage » sortait
                de la portée du voile. Étendu vers le bas (`-bottom-24`)
                pour couvrir la signature à 1440px, sur le reflet du miroir
                — pas de crête supplémentaire pour un seul élément, comme
                demandé. */}
            <div
              className="pointer-events-none absolute -left-6 top-0 -bottom-24 -z-10 hidden w-[140%] sm:block md:w-[155%] lg:w-[140%]"
              style={{ background: LOCAL_VEIL_GRADIENT }}
            />
            <span aria-hidden="true" className="relative mb-5 grid h-8 w-8 place-items-center sm:h-10 sm:w-10">
              <span className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-white/[.18] to-transparent sm:-inset-[30px]" />
              <Icon
                name="droplet"
                className="relative h-8 w-8 text-white drop-shadow-[0_6px_14px_rgba(1,12,30,.45)] sm:h-10 sm:w-10"
                strokeWidth={1.4}
              />
            </span>

            <h1 className="text-balance font-display font-black uppercase text-hero">Plomberie</h1>
            <p className="mt-5 max-w-lg text-title font-bold uppercase text-white">
              Installation, rénovation et dépannage sanitaire
            </p>
            <p className="signature mt-4 text-kicker text-white">{company.expertise}</p>
            <p className="mt-5 max-w-xl text-body text-white/70">
              Installation sanitaire, rénovation de salle de bains, recherche de fuite et dépannage
              plomberie pour les particuliers et professionnels dans tout le Var. Des interventions
              soignées et durables, du premier appel à la mise en service.
            </p>

            <ul className="mt-9 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
              {HERO_HIGHLIGHTS.map((h) => (
                <li key={h.title} className="flex flex-col items-start">
                  <Icon name={h.icon} className="h-8 w-8 text-white" strokeWidth={1.3} />
                  <span className="mt-3 text-label font-bold uppercase">{h.title}</span>
                  <span className="mt-1 text-caption text-white/50">{h.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9">
              <Link to="/contact" className="btn-gold">
                Demande de devis gratuit
                <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
              </Link>
              <a href={company.phoneHref} className="btn-outline-gold">
                <Icon name="phone" className="h-4 w-4" strokeWidth={2} />
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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
  "Filtration et traitement de l'eau",
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
    text: 'Filtration et traitement installés en complément de vos travaux de plomberie.',
    bullets: ['Filtration fine', 'Charbon actif', "Analyse de l'eau"],
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

      <PlomberieHero service={service} />
      <ReassuranceBar />

      <ServiceTwoColumn checklistTitle="Nos services plomberie" checklist={SERVICES_CHECKLIST} card={RENOVATION_CARD} />

      {/* Fonds alternés : ServiceTwoColumn (navy-50) → Expertise (blanc) →
          InfoBlock (navy-50) → ServiceFeatureCards (blanc). */}
      <Expertise data={service.expertise} />

      <InfoBlock info={service.info} />

      <ServiceFeatureCards items={FEATURE_CARDS} />

      <CtaBand />
    </>
  )
}
