import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Photo from '../components/Photo.jsx'
import Seo from '../components/Seo.jsx'
import { ReassuranceBar } from '../components/PageHero.jsx'
import { HeroBackgroundPhoto, HeroTextVeil } from '../components/HeroPhoto.jsx'
import VarMap from '../components/VarMap.jsx'
import ZoneBadge from '../components/ZoneBadge.jsx'
import { company, projects, serviceList } from '../data/site.js'
import { SHOW_GOOGLE_REVIEWS, GOOGLE_REVIEWS, CLIENT_TYPES } from '../data/reviews.js'

/* Photo de fond du héros (slot 100, fourgon PCE de nuit devant une villa) et
   son repli (slot 101, photo d'accueil précédente) si le fichier venait à
   manquer. On ne passe pas par <Photo /> ici : son repli à lui est le logo
   PCE, qui serait illisible étiré en fond de héros.
   Slot partagé avec le héros de Contact — cf. photos.js. */
const HERO_SLOT = 100
const HERO_FALLBACK_SLOT = 101
const HERO_ALT =
  "Le fourgon d'intervention PCE stationné de nuit devant une villa éclairée dans le Var"

/* Les 5 métiers mis en avant sous le titre du héros — même couleur que sur
   la page métier correspondante (icône des héros PageHero), pour que le
   visiteur retrouve le même code couleur d'une page à l'autre. */
const HERO_TRADES = [
  { icon: 'droplet', label: 'Plomberie', to: '/plomberie', iconClass: 'text-azure-400' },
  { icon: 'flame', label: 'Chauffage', to: '/chauffage', iconClass: 'text-gold-500' },
  { icon: 'snowflake', label: 'Climatisation', to: '/climatisation', iconClass: 'text-sky-300' },
  { icon: 'waves', label: 'Piscine', to: '/piscine', iconClass: 'text-cyan-300' },
  { icon: 'bolt', label: 'Électricité', to: '/electricite', iconClass: 'text-gold-400' },
]

/* Ordre des cartes validé par le client : piscine avant électricité, et le
   dépannage en dernier — il n'est pas dans `serviceList`, on l'ajoute à la
   main à partir de son propre objet. */
const CARD_ORDER = ['plomberie', 'chauffage', 'climatisation', 'piscine', 'electricite', 'traitement-de-l-eau', 'vmc']

/* Photos dédiées à cette grille (21/08/2026), distinctes des héros de page —
   auparavant chaque carte réutilisait `service.hero`, ce qui laissait VMC
   sans photo. Électricité volontairement absente : le fichier dédié montre
   la marque « Schneider Electric » de façon répétée et lisible sur les
   disjoncteurs — en attente d'arbitrage client, cette carte continue de
   reprendre `service.hero` (le tableau électrique du héros, sans marque
   visible) en attendant. */
const CARD_PHOTO = {
  plomberie: { lock: 180 },
  chauffage: { lock: 181 },
  climatisation: { lock: 182 },
  piscine: { lock: 184 },
  'traitement-de-l-eau': { lock: 185 },
  vmc: { lock: 186 },
  depannage: { lock: 187 },
}

/* Même logique de couleur que les héros métier, mais en variante plus
   soutenue : la pastille des cartes est sur fond blanc, où les teintes
   claires des héros (sky-300, cyan-300, gold-400/500...) tombent sous le
   seuil de contraste 3:1. */
const CARD_ICON_CLASS = {
  plomberie: 'text-azure-600',
  chauffage: 'text-gold-700',
  climatisation: 'text-sky-600',
  piscine: 'text-cyan-600',
  electricite: 'text-gold-800',
  'traitement-de-l-eau': 'text-azure-700',
  vmc: 'text-mint-600',
  depannage: 'text-navy-800',
}


export default function Accueil() {
  return (
    <>
      <Seo
        standalone
        title="PCE — Plomberie, chauffage, climatisation, électricité et piscine à Lorgues (83)"
        description="PCE, artisan à Lorgues dans le Var depuis 2020, fort de vingt ans de métier : plomberie, chauffage, climatisation, électricité et entretien de piscine. Devis gratuit, intervention rapide dans toute la Dracénie et le Golfe de Saint-Tropez."
        path="/"
      />

      <HomeHero />
      <ReassuranceBar />
      <ServiceCards />
      <ProofRow />
    </>
  )
}

/* ======================================================== HÉROS ========= */
function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div className="container-pce relative py-10 sm:py-8 lg:py-20">
        {/* max-w-3xl et non 2xl : « Climatisation • Piscine » demande 674 px
            à 54 px, soit plus que les 672 px d'un max-w-2xl — le titre
            passait sur une 5e ligne. Archivo étant plus large qu'Inter, la
            colonne doit garder de la marge. */}
        <div className="relative max-w-3xl">
          <HeroTextVeil />

          <h1 className="font-display font-black uppercase leading-[1.06] tracking-[-.025em] text-[6.6vw] sm:text-[31px] lg:text-[40px]">
            <span className="block">Votre expert</span>
            <span className="block">Plomberie • Chauffage</span>
            <span className="block text-azure-400">Climatisation • Piscine</span>
            <span className="block text-gold-500">Électricité</span>
          </h1>

          {/* Filet or */}
          <span aria-hidden="true" className="mt-5 block h-[3px] w-24 bg-gold-500 sm:w-32" />

          <p className="signature mt-4 text-title">Dans tout le Var</p>

          {/* max-w-md entre `sm` et `lg` : à 768 px, un max-w-lg fixe pousse
              le bord droit du chapô au-delà du dégradé directionnel (80 %
              de la largeur du héros) — resserrer la colonne à ce palier
              règle le débordement sans toucher au voile. */}
          <p className="mt-3 max-w-md text-body text-white lg:max-w-lg">
            De Lorgues jusqu'au Golfe de Saint-Tropez et toutes les communes alentours
          </p>

          {/* Pictos métier */}
          <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-5 sm:gap-x-9">
            {HERO_TRADES.map((t) => (
              <li key={t.label}>
                <Link to={t.to} className="group flex flex-col items-center gap-2 text-center">
                  <Icon
                    name={t.icon}
                    className={`h-7 w-7 transition-colors group-hover:text-gold-500 sm:h-8 sm:w-8 ${t.iconClass}`}
                    strokeWidth={1.5}
                  />
                  <span className="text-label font-bold uppercase text-white/85 transition-colors group-hover:text-white">
                    {t.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* Rangée d'actions : les deux boutons à gauche, la pastille de zone
            alignée sur la même ligne à droite. Elle sortait auparavant du
            flux en `absolute`, ce qui la décalait sous les boutons. */}
        <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-4 text-center text-label font-bold uppercase text-navy-900 transition-colors hover:bg-gold-400"
            >
              Demande de devis gratuit
              <Icon name="arrowRight" className="h-4 w-4 shrink-0" strokeWidth={2.4} />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-6 py-4 text-center text-body-sm font-bold tracking-[.04em] text-white transition-colors hover:border-white hover:bg-white hover:text-navy-900"
            >
              <Icon name="phone" className="h-4 w-4 shrink-0" strokeWidth={2} />
              {company.phone}
            </a>
          </div>

          <ZoneBadge className="lg:max-w-sm lg:shrink-0" />
        </div>
      </div>

      <HeroBackgroundPhoto slot={HERO_SLOT} fallbackSlot={HERO_FALLBACK_SLOT} alt={HERO_ALT} />
    </section>
  )
}

/* ================================================ CARTES DES MÉTIERS ==== */
function ServiceCards() {
  const ordered = CARD_ORDER.map((slug) => serviceList.find((s) => s.slug === slug)).filter(Boolean)

  const cards = [
    ...ordered.map((s) => ({
      to: `/${s.slug}`,
      icon: s.icon,
      iconClass: CARD_ICON_CLASS[s.slug],
      title: s.title,
      text: s.card,
      photo: CARD_PHOTO[s.slug] || s.hero,
    })),
    {
      to: '/depannage',
      icon: 'wrench',
      iconClass: CARD_ICON_CLASS.depannage,
      photo: CARD_PHOTO.depannage,
      title: 'Dépannage',
      text: 'Intervention rapide 7j/7 dans tout le Var. Devis immédiat, prix annoncé avant intervention.',
    },
  ]

  return (
    <section className="bg-navy-50 py-10 sm:py-12 lg:py-14">
      <div className="container-pce">
        {/* 7 métiers + Dépannage = 8 : multiple de 2 et de 4, grille classique
            suffit — plus besoin du flex + largeurs calculées qu'imposait
            l'ancien compte de 7 (voir git history). */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                {c.photo ? (
                  <Photo
                    lock={c.photo.lock}
                    alt={c.title}
                    rounded=""
                    className="aspect-[4/3] w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(min-width: 1280px) 15vw, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                ) : (
                  /* Repli défensif : les 8 cartes ont toutes une photo au
                     21/08/2026, mais si l'une venait à manquer, un aplat de
                     couleur + icône reste préférable à un cadre gris
                     répétant le titre. */
                  <div className={`grid aspect-[4/3] w-full place-items-center bg-navy-50 ${c.iconClass}`}>
                    <Icon name={c.icon} className="h-10 w-10" strokeWidth={1.3} />
                  </div>
                )}
                <span className={`absolute -bottom-4 left-3 grid h-9 w-9 place-items-center rounded-full bg-white shadow-card ring-1 ring-navy-100 ${c.iconClass}`}>
                  <Icon name={c.icon} className="h-4 w-4" strokeWidth={1.7} />
                </span>
              </div>

              <div className="flex flex-1 flex-col px-4 pb-4 pt-7">
                <h3 className="font-display text-body-sm font-bold uppercase tracking-[.05em] text-navy-800">
                  {c.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-caption text-navy-500">
                  {c.text}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-label font-bold uppercase text-azure-500">
                  En savoir plus
                  <Icon
                    name="arrowRight"
                    className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2.4}
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Sélection curatée pour la bande d'accueil (19/08/2026) : `projects.slice(0, 5)`
   sortait par accident les 5 premières entrées du tableau, toutes
   plomberie/chauffage — aucune diversité de métier. Un métier par vignette
   quand c'est possible (traitement de l'eau n'a aucune vraie photo de
   chantier, seulement des cartes produit sur fond blanc — hors registre
   ici, donc plomberie doublée à la place). Exclut les visuels signalés
   flous dans le README (901, 902, 905, 907, 909) et le split-chambre
   climatisation (920, gros logo PCE quasi centré qui masque l'appareil) —
   un seul visuel climatisation (923, groupe extérieur) pour éviter la
   quasi-répétition avec un second angle du même type de sujet. */
const FEATURED_REALISATIONS = [904, 906, 923, 911, 908]

/* ============================= AVIS / RÉALISATIONS / ZONE D'INTERVENTION = */
function ProofRow() {
  const featuredProjects = FEATURED_REALISATIONS.map((lock) => projects.find((p) => p.lock === lock)).filter(Boolean)
  /* Sans le bloc avis, les deux blocs restants se répartissent la largeur
     plutôt que de laisser une colonne vide. */
  const gallerySpan = SHOW_GOOGLE_REVIEWS ? 'lg:col-span-5' : 'lg:col-span-7'
  const zoneSpan = SHOW_GOOGLE_REVIEWS ? 'lg:col-span-4' : 'lg:col-span-5'

  return (
    <section className="bg-white pb-12 sm:pb-14 lg:pb-16">
      <div className="container-pce">
        <div className="grid gap-4 lg:grid-cols-12">
          {SHOW_GOOGLE_REVIEWS && (
            <div className="min-w-0 rounded-xl bg-white p-6 shadow-card ring-1 ring-navy-100 lg:col-span-3">
              <h2 className="text-body-sm font-bold uppercase tracking-[.06em] text-navy-800">
                Ils nous font confiance
              </h2>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: GOOGLE_REVIEWS.stars }).map((_, i) => (
                    <Icon key={i} name="star" className="h-5 w-5 text-gold-500" strokeWidth={1.4} fill="currentColor" />
                  ))}
                </span>
                <span className="text-title font-black text-navy-800">
                  {GOOGLE_REVIEWS.rating}
                </span>
              </div>
              <p className="mt-3 text-body-sm text-navy-500">
                sur Google
                <br />
                {GOOGLE_REVIEWS.count}
              </p>
              <Link to={GOOGLE_REVIEWS.href} className="btn-outline mt-5 w-full text-center">
                Voir les avis
              </Link>
            </div>
          )}

          {/* ------------------------------------------------ Réalisations */}
          <div className={`min-w-0 rounded-xl bg-white p-6 shadow-card ring-1 ring-navy-100 ${gallerySpan}`}>
            <h2 className="text-body-sm font-bold uppercase tracking-[.06em] text-navy-800">
              Nos réalisations
            </h2>

            <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-5">
              {featuredProjects.map((p) => (
                <li key={p.title} className="min-w-0">
                  <Photo
                    lock={p.lock}
                    alt={p.title}
                    rounded="rounded-lg"
                    className="aspect-square w-full"
                    sizes="(min-width: 1024px) 10vw, 40vw"
                  />
                </li>
              ))}
            </ul>

            <Link to="/realisations" className="btn-outline mt-5 w-full text-center">
              Voir toutes nos réalisations
              <Icon name="arrowRight" className="h-4 w-4 shrink-0" strokeWidth={2.2} />
            </Link>
          </div>

          {/* --------------------------------------- Zone d'intervention */}
          <div className={`min-w-0 rounded-xl bg-white p-6 shadow-card ring-1 ring-navy-100 ${zoneSpan}`}>
            <h2 className="text-body-sm font-bold uppercase tracking-[.06em] text-navy-800">
              Notre zone d'intervention
            </h2>

            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <p className="text-body-sm text-navy-500">
                  Nous intervenons dans tout le Var, de Lorgues au Golfe de Saint-Tropez et toutes
                  les communes alentours.
                </p>
                <ul className="mt-4 space-y-2">
                  {CLIENT_TYPES.map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <Icon
                        name="check"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-azure-500"
                        strokeWidth={3}
                      />
                      <span className="text-body-sm text-navy-600">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <VarMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

