import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import Photo from './Photo.jsx'
import { Watermark } from './Brand.jsx'
import { company, reassurance } from '../data/site.js'

/* Dégradé à 11 arrêts adoucis, réservé au mode `fullBleed` — même courbe
   que Plomberie/Climatisation/Piscine (19/08/2026). Le coefficient est
   fourni par la page appelante (`gradientCoefficient`) : chaque héros a sa
   propre opacité de départ mesurée. Le masque applique la courbe
   complémentaire directement sur la photo, indépendamment du dégradé —
   deux mécanismes pour un seul défaut (le bord net d'un panneau photo
   étroit), pas un seul. */
const HERO_GRADIENT_STOPS = [
  [0, 1.0], [8, 0.793], [16, 0.612], [24, 0.456], [32, 0.325],
  [40, 0.218], [48, 0.133], [56, 0.071], [64, 0.029], [72, 0.006], [80, 0.0],
]
function fullBleedGradient(coefficient) {
  return `linear-gradient(to right, ${HERO_GRADIENT_STOPS.map(
    ([pos, op]) => `rgb(1 12 30 / ${(op * coefficient).toFixed(4)}) ${pos}%`
  ).join(', ')})`
}
const FULL_BLEED_MASK = `linear-gradient(to right, ${HERO_GRADIENT_STOPS.map(
  ([pos, op]) => `rgba(0,0,0,${(1 - op).toFixed(4)}) ${pos}%`
).join(', ')}, black 100%)`

/**
 * Héros commun à toutes les pages, conforme aux maquettes :
 *   — fond bleu marine, photo fondue sur la droite
 *   — fil d'Ariane, titre blanc en capitales, sous-titre bleu vif,
 *     signature dorée en italique, paragraphe clair
 *   — filigrane « PCE » embossé derrière le texte
 *   — bandeau de réassurance marine juste en dessous
 *
 * `fullBleed` (optionnel, défaut `false`) : la photo occupe tout le héros
 * (fond, pas panneau posé à droite) avec le dégradé à 11 arrêts + masque
 * décrits ci-dessus, au lieu du panneau étroit (`w-[58%]`) historique.
 * Strictement opt-in — tous les appelants existants (articles, pages
 * locales, à propos, dépannage, réalisations...) gardent le rendu
 * d'origine tant qu'ils ne passent pas `fullBleed`. `gradientCoefficient`
 * est obligatoire dans ce mode (pas de valeur par défaut : l'opacité doit
 * être mesurée par page, jamais devinée).
 */
export default function PageHero({
  title,
  icon,
  iconClass = 'text-white',
  haloClass = 'from-white/[.18]',
  titleClassName = 'text-hero',
  subtitle,
  subtitleClassName = 'text-azure-300',
  intro,
  photo,
  breadcrumb,
  highlights,
  actions = true,
  primaryLabel = 'Demande de devis gratuit',
  showReassurance = true,
  photoBadge,
  children,
  fullBleed = false,
  gradientCoefficient,
  highlightsPanel = false,
}) {
  return (
    <>
      <section className={`relative overflow-hidden text-white ${fullBleed ? 'bg-navy-950' : 'bg-navy-800'}`}>
        {photo && fullBleed && (
          <>
            <div
              className="pointer-events-none absolute inset-0 hidden lg:block"
              style={{ WebkitMaskImage: FULL_BLEED_MASK, maskImage: FULL_BLEED_MASK }}
            >
              <Photo tags={photo.tags} lock={photo.lock} alt={photo.alt || title} priority rounded="" className="h-full w-full" />
            </div>
            <div
              className="pointer-events-none absolute inset-0 hidden lg:block"
              style={{ background: fullBleedGradient(gradientCoefficient) }}
            />
            {photoBadge && <div className="pointer-events-none absolute bottom-6 right-6 hidden lg:block">{photoBadge}</div>}
          </>
        )}

        {photo && !fullBleed && (
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
            <Photo tags={photo.tags} lock={photo.lock} alt={photo.alt || title} priority rounded="" className="h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-navy-800/80 to-navy-800/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-800/70 to-transparent" />
            {photoBadge && <div className="absolute bottom-6 right-6">{photoBadge}</div>}
          </div>
        )}

        <Watermark className="left-[-.03em] top-2 text-[36vw] lg:top-6 lg:text-[20rem]" />

        <div className="container-pce relative">
          {/* Fil d'Ariane — accepte une chaîne (dernière étape seule) ou un
              tableau de { label, to? } pour un fil à plusieurs niveaux. */}
          {breadcrumb && (
            <nav aria-label="Fil d'Ariane" className="pt-6">
              <ol className="flex flex-wrap items-center gap-2 text-label font-bold uppercase text-white/45">
                <li>
                  <Link to="/" className="transition-colors hover:text-white">
                    Accueil
                  </Link>
                </li>
                {(Array.isArray(breadcrumb) ? breadcrumb : [{ label: breadcrumb }]).map((step, i, arr) => (
                  <li key={step.label} className="flex items-center gap-2">
                    <span aria-hidden="true">›</span>
                    {step.to && i < arr.length - 1 ? (
                      <Link to={step.to} className="transition-colors hover:text-white">
                        {step.label}
                      </Link>
                    ) : (
                      <span className="text-white/80">{step.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="grid items-center gap-6 pb-8 pt-6 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-10">
            <div className="min-w-0 lg:col-span-7">
              {icon && (
                <span aria-hidden="true" className="relative mb-5 grid h-8 w-8 place-items-center sm:h-10 sm:w-10">
                  {/* Halo radial : éclaire le fond sans le découper, aucune bordure. */}
                  <span
                    className={`pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] to-transparent sm:-inset-[30px] ${haloClass}`}
                  />
                  <Icon
                    name={icon}
                    className={`relative h-8 w-8 drop-shadow-[0_6px_14px_rgba(1,12,30,.45)] sm:h-10 sm:w-10 ${iconClass}`}
                    strokeWidth={1.4}
                  />
                </span>
              )}
              <h1 className={`text-balance font-display font-black uppercase ${titleClassName}`}>
                {title}
              </h1>

              {subtitle && (
                <p className={`mt-5 max-w-lg text-title font-bold uppercase ${subtitleClassName}`}>
                  {subtitle}
                </p>
              )}

              <p className="signature mt-4 text-kicker">{company.expertise}</p>

              {intro && (
                <p className="mt-5 max-w-xl text-body text-white/70">{intro}</p>
              )}

              {/* Rangée d'icônes optionnelle (voir page Piscine). `highlightsPanel`
                  (opt-in) ajoute un fond translucide derrière la rangée — même
                  procédé que `ZoneBadge` sur Climatisation — pour les héros
                  `fullBleed` dont la photo a une zone locale trop claire à cet
                  endroit précis (ex : VMC, fenêtre lumineuse sous « Économies »),
                  sans toucher au dégradé global ni aux autres appelants. */}
              {highlights && (
                <ul
                  className={`mt-9 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4 ${
                    highlightsPanel ? 'rounded-xl bg-navy-950/35 px-5 py-5 backdrop-blur-sm' : ''
                  }`}
                >
                  {highlights.map((h) => (
                    <li key={h.title} className="flex flex-col items-start">
                      <Icon name={h.icon} className="h-8 w-8 text-white" strokeWidth={1.3} />
                      <span className="mt-3 text-label font-bold uppercase">
                        {h.title}
                      </span>
                      <span className="mt-1 text-caption text-white/50">{h.label}</span>
                    </li>
                  ))}
                </ul>
              )}

              {actions && (
                <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9">
                  <Link to="/contact" className="btn-azure">
                    {primaryLabel}
                    <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
                  </Link>
                  <a href={company.phoneHref} className="btn-outline-gold">
                    <Icon name="phone" className="h-4 w-4" strokeWidth={2} />
                    {company.phone}
                  </a>
                </div>
              )}

              {children}
            </div>

            {/* Photo en carte sur mobile / tablette */}
            {photo && (
              <div className="lg:hidden">
                <Photo
                  tags={photo.tags}
                  lock={photo.lock}
                  alt={photo.alt || title}
                  priority
                  className="aspect-[16/9] w-full shadow-photo"
                  rounded="rounded-xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {showReassurance && <ReassuranceBar />}
    </>
  )
}

/** Bandeau marine de réassurance, placé sous le héros. 6 colonnes en
 *  desktop, 3 en tablette, 2 en mobile — la grille suit la longueur de
 *  `reassurance`, sinon les colonnes en trop laissent un vide à droite. */
export function ReassuranceBar() {
  return (
    <section className="border-t border-white/10 bg-navy-900 text-white">
      <div className="container-pce">
        {/* 6 colonnes seulement à partir de xl : à 1024 px, six libellés de
            cette longueur débordaient de leur colonne. */}
        <ul className="grid grid-cols-2 divide-white/10 py-4 sm:grid-cols-3 lg:divide-x lg:py-8 xl:grid-cols-6">
          {reassurance.map((r) => (
            <li key={r.title} className="flex items-start gap-3 px-0 py-3 lg:px-4 lg:py-1">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 lg:h-10 lg:w-10">
                <Icon name={r.icon} className="h-4 w-4 lg:h-[18px] lg:w-[18px]" strokeWidth={1.4} />
              </span>
              <span className="min-w-0">
                <span className="block text-label font-bold uppercase">
                  {r.title}
                </span>
                <span className="mt-1 block text-caption text-white/50">
                  {r.label}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
