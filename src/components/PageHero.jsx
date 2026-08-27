import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import Photo from './Photo.jsx'
import { Watermark } from './Brand.jsx'
import { company, reassurance } from '../data/site.js'
import { SOFT_FADE_STOPS, softFadeMask } from '../lib/fadeMask.js'

/* Dégradé à 11 arrêts adoucis, réservé au mode `fullBleed` — même courbe
   que le masque de la photo, partagée avec les blocs de contenu à photo
   fondue (voir lib/fadeMask.js). Couche désormais optionnelle et éteinte
   par défaut : depuis le 25/08/2026 le contraste du texte est porté par
   FULL_BLEED_TEXT_VEIL ci-dessous, identique sur les huit héros, et plus
   par huit coefficients réglés page par page. */
function fullBleedGradient(coefficient) {
  return `linear-gradient(to right, ${SOFT_FADE_STOPS.map(
    ([pos, op]) => `rgb(1 12 30 / ${(op * coefficient).toFixed(4)}) ${pos}%`
  ).join(', ')})`
}
const FULL_BLEED_MASK = softFadeMask()

/* Voile de texte du mode plein cadre (25/08/2026). Le masque rend déjà la
   photo visible aux deux tiers dès 33 % de la largeur : passé ce point, le
   texte de la colonne se retrouvait sur la photo avec le seul dégradé pour
   le protéger — insuffisant, mesuré jusqu'à 1,45:1 sur le sous-titre de
   Piscine.
   Posé sur toute la section (`inset-0`) et non derrière la colonne de
   texte : un voile ancré à la colonne laisse une arête verticale nette à
   son bord gauche, là où commence la marge du conteneur — constaté en
   zoomant sur Piscine. Couvrir toute la section supprime la question des
   bords, il n'en reste aucun.
   Plateau jusqu'à 50 % puis extinction à 72 % : la colonne de texte finit
   entre 54 % et 57 % de la largeur selon le palier (mesuré de 1024 à
   1920 px), et le texte le plus large à 54 %. `rgb(1 12 30 / 0)` plutôt
   que `transparent` : ce dernier vaut rgba(0,0,0,0), donc un fondu vers du
   noir et non vers du marine. */
const FULL_BLEED_TEXT_VEIL =
  'linear-gradient(to right, rgb(1 12 30 / .70) 0%, rgb(1 12 30 / .70) 50%, rgb(1 12 30 / 0) 72%)'

/**
 * Héros commun à toutes les pages, conforme aux maquettes :
 *   — fond bleu marine, photo fondue sur la droite
 *   — fil d'Ariane, titre blanc en capitales, sous-titre bleu vif,
 *     signature dorée en italique, paragraphe clair
 *   — filigrane « PCE » embossé derrière le texte
 *   — bandeau de réassurance marine juste en dessous
 *
 * `fullBleed` (optionnel, défaut `false`) : la photo occupe tout le héros
 * (fond, pas panneau posé à droite) avec le masque + le voile de texte
 * décrits ci-dessus, au lieu du panneau étroit (`w-[58%]`) historique.
 * Strictement opt-in — tous les appelants existants (articles, pages
 * locales, à propos, réalisations...) gardent le rendu d'origine tant
 * qu'ils ne passent pas `fullBleed`.
 *
 * `gradientCoefficient` (optionnel, défaut 0 — laisser à 0).
 *   À quoi il servait : jusqu'au 25/08/2026, le dégradé à 11 arrêts était
 *     le seul rempart du texte sur la photo, et chaque page portait sa
 *     propre opacité mesurée (0,15 à 0,49).
 *   Pourquoi il ne sert plus : FULL_BLEED_TEXT_VEIL, identique sur les huit
 *     héros, porte désormais le contraste. Vérifié page par page, les huit
 *     tiennent leurs seuils à 0 ; les huit valeurs ont donc été retirées.
 *     Sur sept d'entre eux la contrainte n'est même plus la photo mais le
 *     bouton azur, une paire de couleurs fixe.
 *   Quand le rallumer : jamais pour corriger un contraste — c'est le voile
 *     qu'il faut alors ajuster, une fois, pour tout le monde. Uniquement
 *     comme choix esthétique, si une photo donnée demande un fondu plus
 *     appuyé sur son bord gauche. Toute valeur remise ici doit être mesurée
 *     et justifiée en commentaire sur la page appelante.
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
  objectPosition,
  breadcrumb,
  highlights,
  actions = true,
  primaryLabel = 'Demande de devis gratuit',
  showReassurance = true,
  photoBadge,
  children,
  fullBleed = false,
  gradientCoefficient = 0,
}) {
  /* Style en ligne, jamais une classe Tailwind construite dynamiquement
     (`object-[${...}]`) : une classe assemblée par interpolation n'est pas
     détectable par l'analyse statique de Tailwind au build et se retrouve
     purgée en production alors qu'elle fonctionne en dev — exactement le
     type de défaut invisible en local qui a justifié ce garde-fou. */
  const objectPositionStyle = objectPosition ? { objectPosition } : undefined
  return (
    <>
      <section className={`relative overflow-hidden text-white ${fullBleed ? 'bg-navy-950' : 'bg-navy-800'}`}>
        {photo && fullBleed && (
          <>
            <div
              className="pointer-events-none absolute inset-0 hidden lg:block"
              style={{ WebkitMaskImage: FULL_BLEED_MASK, maskImage: FULL_BLEED_MASK }}
            >
              <Photo
                tags={photo.tags}
                lock={photo.lock}
                alt={photo.alt || title}
                priority
                rounded=""
                className="h-full w-full"
                imgStyle={objectPositionStyle}
              />
            </div>
            {gradientCoefficient > 0 && (
              <div
                className="pointer-events-none absolute inset-0 hidden lg:block"
                style={{ background: fullBleedGradient(gradientCoefficient) }}
              />
            )}
            <div
              className="pointer-events-none absolute inset-0 hidden lg:block"
              style={{ background: FULL_BLEED_TEXT_VEIL }}
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
              {/* /45 -> /60 (25/08/2026). Le blanc à 45 % plafonne à 4,49:1
                  sur navy-950 *pur* : il était sous le seuil de 4,5:1 par
                  construction, avant même qu'une photo n'entre en jeu. Mesuré
                  sur le rendu réel des huit héros, il tombait entre 3,55:1
                  (Climatisation) et 4,36:1 (Plomberie). À 60 %, plus aucun
                  héros ne descend sous le seuil. Même correction que sur le
                  fil de Contact, qui a le même défaut d'origine. */}
              <ol className="flex flex-wrap items-center gap-2 text-label font-bold uppercase text-white/60">
                <li>
                  <Link to="/" className="inline-block py-1.5 transition-colors hover:text-white">
                    Accueil
                  </Link>
                </li>
                {(Array.isArray(breadcrumb) ? breadcrumb : [{ label: breadcrumb }]).map((step, i, arr) => (
                  <li key={step.label} className="flex items-center gap-2">
                    <span aria-hidden="true">›</span>
                    {step.to && i < arr.length - 1 ? (
                      <Link to={step.to} className="inline-block py-1.5 transition-colors hover:text-white">
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

              {/* Rangée d'icônes optionnelle, toujours sur fond translucide :
                  au moins un héros (Piscine, zone claire sous « Dépannage »,
                  contraste mesuré à 1,42 avec le dégradé seul) en a besoin
                  pour rester au-dessus de 4,5:1, et un fond constant partout
                  évite d'avoir à remesurer au cas par cas à chaque nouvelle
                  photo. 55 % d'opacité : la valeur la plus forte des sept
                  héros mesurés, jamais la plus faible qui suffisait ailleurs
                  — remonter, jamais redescendre en cas de doute. */}
              {highlights && (
                <ul className="mt-9 grid max-w-xl grid-cols-2 gap-6 rounded-xl bg-navy-950/55 px-5 py-5 backdrop-blur-sm sm:grid-cols-4">
                  {highlights.map((h) => (
                    <li key={h.title} className="flex flex-col items-start">
                      <Icon name={h.icon} className="h-8 w-8 text-white" strokeWidth={1.3} />
                      <span className="mt-3 text-balance text-label font-bold uppercase">
                        {h.title}
                      </span>
                      {/* /50 -> /70 (25/08/2026) : même défaut d'origine que
                          le fil d'Ariane — le blanc à 50 % plafonnait sous
                          4,5:1 même sur le fond du panneau. */}
                      <span className="mt-1 text-balance text-caption text-white/70">{h.label}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* `children` avant les boutons d'action : un contenu de héros
                  propre à une page (ex. la checklist verticale de
                  Climatisation) prend la place qu'occupait `highlights`
                  ailleurs, jamais après l'appel à l'action. */}
              {children}

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
                  imgStyle={objectPositionStyle}
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
                <span className="block text-balance text-label font-bold uppercase">
                  {r.title}
                </span>
                <span className="mt-1 block text-balance text-caption text-white/50">
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
