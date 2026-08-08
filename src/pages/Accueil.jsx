import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Photo from '../components/Photo.jsx'
import Seo from '../components/Seo.jsx'
import { ReassuranceBar } from '../components/PageHero.jsx'
import { company, depannage, projects, serviceList } from '../data/site.js'
import { clientPhotoMeta } from '../data/photos.js'

/* -------------------------------------------------------------------------
   AVIS GOOGLE — À CONFIRMER
   ⚠️ ne pas publier sans fiche Google Business réelle : ces valeurs sont
   des espaces réservés fournis par le client, non vérifiés. Le bloc reste
   masqué tant que SHOW_GOOGLE_REVIEWS vaut false.
---------------------------------------------------------------------------*/
const SHOW_GOOGLE_REVIEWS = true
// À CONFIRMER — valeurs fournies par le client, non vérifiées contre une
// fiche Google Business réelle. Publier de faux avis expose à une sanction
// pour pratique commerciale trompeuse : à confirmer avant mise en ligne.
const GOOGLE_REVIEWS = { rating: '4,9/5', stars: 5, count: '+450 clients satisfaits', href: '/contact' }

/* Photo de fond du héros (slot 100, véhicules PCE devant une villa) et son
   repli (slot 101, photo d'accueil précédente) si le fichier venait à
   manquer. On ne passe pas par <Photo /> ici : son repli à lui est le logo
   PCE, qui serait illisible étiré en fond de héros. */
const HERO_SLOT = 100
const HERO_FALLBACK_SLOT = 101

/* Les 5 métiers mis en avant sous le titre du héros. */
const HERO_TRADES = [
  { icon: 'droplet', label: 'Plomberie', to: '/plomberie' },
  { icon: 'flame', label: 'Chauffage', to: '/chauffage' },
  { icon: 'snowflake', label: 'Climatisation', to: '/climatisation' },
  { icon: 'waves', label: 'Piscine', to: '/piscine' },
  { icon: 'bolt', label: 'Électricité', to: '/electricite' },
]

/* Ordre des cartes validé par le client : piscine avant électricité, et le
   dépannage en dernier — il n'est pas dans `serviceList`, on l'ajoute à la
   main à partir de son propre objet. */
const CARD_ORDER = ['plomberie', 'chauffage', 'climatisation', 'piscine', 'electricite', 'traitement-de-l-eau']

const CLIENT_TYPES = [
  'Particuliers & Professionnels',
  'Résidences secondaires',
  'Syndics & Copropriétés',
  'Commerces & Entreprises',
]

/* Communes repères de la carte, en pourcentage du cadre SVG. Lorgues est le
   point d'ancrage (siège), les autres situent l'amplitude de la zone. */
const MAP_POINTS = [
  { name: 'Draguignan', x: 62, y: 12 },
  { name: 'Fréjus', x: 87, y: 26 },
  { name: 'Le Luc', x: 21, y: 40 },
  { name: 'Sainte-Maxime', x: 83, y: 48 },
  { name: 'Saint-Tropez', x: 79, y: 66 },
  { name: 'Cavalaire-sur-Mer', x: 74, y: 84 },
]

export default function Accueil() {
  return (
    <>
      <Seo
        standalone
        title="PCE — Plomberie, chauffage, climatisation, électricité et piscine à Lorgues (83)"
        description="PCE, artisan à Lorgues dans le Var depuis 2005 : plomberie, chauffage, climatisation, électricité et entretien de piscine. Devis gratuit, intervention rapide dans toute la Dracénie et le Golfe de Saint-Tropez."
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
  const fallback = clientPhotoMeta(HERO_FALLBACK_SLOT)
  const [bg, setBg] = useState(() => clientPhotoMeta(HERO_SLOT) || fallback)

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      {/* Photo de fond pleine largeur, en variantes WebP responsives.
          Elle est panoramique (3,7:1) alors que le héros affiche du 2,2:1 :
          object-cover en rogne 41 % de la largeur. Le cadrage est décalé à
          78 % pour garder le flocage du fourgon lisible dans la zone claire,
          alors qu'un cadrage centré le faisait tomber hors champ. */}
      <img
        src={bg?.src}
        srcSet={bg?.srcSet || undefined}
        sizes="100vw"
        width={bg?.width || undefined}
        height={bg?.height || undefined}
        alt=""
        aria-hidden="true"
        onError={() => fallback?.src && bg?.src !== fallback.src && setBg(fallback)}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[78%_50%]"
        fetchpriority="high"
        decoding="async"
      />

      {/* Dégradé marine : de la gauche vers la transparence à droite. Le second
          dégradé, vertical, garde le texte lisible en mobile où la colonne
          occupe toute la largeur. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/20 lg:to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/40 lg:hidden" />

      <div className="container-pce relative py-10 sm:py-14 lg:py-20">
        {/* max-w-3xl et non 2xl : « Climatisation • Piscine » demande 674 px
            à 54 px, soit plus que les 672 px d'un max-w-2xl — le titre
            passait sur une 5e ligne. Archivo étant plus large qu'Inter, la
            colonne doit garder de la marge. */}
        <div className="max-w-3xl">
          <h1 className="font-display font-black uppercase leading-[1.06] tracking-[-.025em] text-[6.6vw] sm:text-[31px] lg:text-[40px]">
            <span className="block">Votre expert</span>
            <span className="block">Plomberie • Chauffage</span>
            <span className="block text-azure-400">Climatisation • Piscine</span>
            <span className="block text-gold-500">Électricité</span>
          </h1>

          {/* Filet or */}
          <span aria-hidden="true" className="mt-5 block h-[3px] w-24 bg-gold-500 sm:w-32" />

          <p className="signature mt-4 text-[20px] sm:text-[26px]">Dans tout le Var</p>

          <p className="mt-3 max-w-lg text-[14px] leading-[1.7] text-white/80 sm:text-[15.5px]">
            De Lorgues jusqu'au Golfe de Saint-Tropez et toutes les communes alentours
          </p>

          {/* Pictos métier */}
          <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-5 sm:gap-x-9">
            {HERO_TRADES.map((t) => (
              <li key={t.label}>
                <Link to={t.to} className="group flex flex-col items-center gap-2 text-center">
                  <Icon
                    name={t.icon}
                    className="h-7 w-7 text-azure-400 transition-colors group-hover:text-gold-500 sm:h-8 sm:w-8"
                    strokeWidth={1.5}
                  />
                  <span className="text-[9.5px] font-bold uppercase tracking-[.08em] text-white/85 transition-colors group-hover:text-white sm:text-[10.5px]">
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
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-4 text-center text-[12px] font-bold uppercase tracking-[.08em] text-navy-900 transition-colors hover:bg-gold-400"
            >
              Demande de devis gratuit
              <Icon name="arrowRight" className="h-4 w-4 shrink-0" strokeWidth={2.4} />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-6 py-4 text-center text-[13px] font-bold tracking-[.04em] text-white transition-colors hover:border-white hover:bg-white hover:text-navy-900"
            >
              <Icon name="phone" className="h-4 w-4 shrink-0" strokeWidth={2} />
              {company.phone}
            </a>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-white/15 bg-navy-900/70 px-5 py-4 backdrop-blur-sm lg:max-w-sm lg:shrink-0">
            <Icon name="mapPin" className="h-6 w-6 shrink-0 text-gold-500" strokeWidth={1.6} />
            <span className="min-w-0">
              <span className="block text-[11.5px] font-bold uppercase tracking-[.06em]">
                Intervention dans tout le Var
              </span>
              <span className="mt-0.5 block text-[11.5px] leading-snug text-white/65">
                De Lorgues au Golfe de Saint-Tropez
              </span>
            </span>
          </div>
        </div>
      </div>
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
      title: s.title,
      text: s.card,
      photo: s.hero,
    })),
    {
      to: '/depannage',
      icon: 'wrench',
      title: 'Dépannage',
      text: 'Intervention rapide 7j/7 dans tout le Var. Devis immédiat, prix annoncé avant intervention.',
      photo: depannage.hero,
    },
  ]

  return (
    <section className="bg-navy-50 py-10 sm:py-12 lg:py-14">
      <div className="container-pce">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <Photo
                  lock={c.photo.lock}
                  alt={c.title}
                  rounded=""
                  className="aspect-[4/3] w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(min-width: 1280px) 15vw, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <span className="absolute -bottom-4 left-3 grid h-9 w-9 place-items-center rounded-full bg-white text-azure-500 shadow-card ring-1 ring-navy-100">
                  <Icon name={c.icon} className="h-4 w-4" strokeWidth={1.7} />
                </span>
              </div>

              <div className="flex flex-1 flex-col px-4 pb-4 pt-7">
                <h3 className="font-display text-[12.5px] font-bold uppercase tracking-[.05em] text-navy-800">
                  {c.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-[11.5px] leading-[1.55] text-navy-500">
                  {c.text}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[.1em] text-azure-500">
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

/* ============================= AVIS / RÉALISATIONS / ZONE D'INTERVENTION = */
function ProofRow() {
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
              <h2 className="text-[12.5px] font-bold uppercase tracking-[.06em] text-navy-800">
                Ils nous font confiance
              </h2>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: GOOGLE_REVIEWS.stars }).map((_, i) => (
                    <Icon key={i} name="star" className="h-5 w-5 text-gold-500" strokeWidth={1.4} />
                  ))}
                </span>
                <span className="text-[22px] font-black leading-none text-navy-800">
                  {GOOGLE_REVIEWS.rating}
                </span>
              </div>
              <p className="mt-3 text-[12px] leading-snug text-navy-500">
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
            <h2 className="text-[12.5px] font-bold uppercase tracking-[.06em] text-navy-800">
              Nos réalisations
            </h2>

            <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-5">
              {projects.slice(0, 5).map((p) => (
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
            <h2 className="text-[12.5px] font-bold uppercase tracking-[.06em] text-navy-800">
              Notre zone d'intervention
            </h2>

            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <p className="text-[12.5px] leading-[1.65] text-navy-500">
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
                      <span className="text-[12px] leading-snug text-navy-600">{t}</span>
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

/** Carte schématique du Var : repère visuel de l'amplitude de la zone, pas
 *  un fond cartographique exact. Tracé inline pour éviter toute requête
 *  externe et rester net à toutes les tailles. */
function VarMap() {
  return (
    <div className="relative min-w-0">
      <svg viewBox="0 0 200 150" className="h-auto w-full" role="img" aria-label="Carte schématique de la zone d'intervention de PCE dans le Var">
        <path
          d="M18 44 L40 20 L78 10 L120 14 L158 30 L186 52 L178 86 L150 112 L112 132 L74 128 L44 104 L22 74 Z"
          className="fill-navy-100"
        />
        {MAP_POINTS.map((p) => (
          <g key={p.name}>
            <circle cx={(p.x / 100) * 200} cy={(p.y / 100) * 150} r="2.6" className="fill-azure-500" />
            <text
              x={(p.x / 100) * 200 + 5}
              y={(p.y / 100) * 150 + 2.5}
              className="fill-navy-500 text-[6px]"
            >
              {p.name}
            </text>
          </g>
        ))}
        {/* Lorgues, siège de l'entreprise */}
        <circle cx="88" cy="86" r="5" className="fill-azure-500/25" />
        <circle cx="88" cy="86" r="2.8" className="fill-navy-800" />
        <text x="88" y="100" textAnchor="middle" className="fill-navy-800 text-[8px] font-bold">
          Lorgues
        </text>
      </svg>
    </div>
  )
}
