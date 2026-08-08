import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import Photo from './Photo.jsx'
import { Watermark } from './Brand.jsx'
import { company, reassurance } from '../data/site.js'

/**
 * Héros commun à toutes les pages, conforme aux maquettes :
 *   — fond bleu marine, photo fondue sur la droite
 *   — fil d'Ariane, titre blanc en capitales, sous-titre bleu vif,
 *     signature dorée en italique, paragraphe clair
 *   — filigrane « PCE » embossé derrière le texte
 *   — bandeau de réassurance marine juste en dessous
 */
export default function PageHero({
  title,
  titleClassName = 'text-[10vw] md:text-6xl lg:text-[4.4rem]',
  subtitle,
  subtitleClassName = 'text-azure-300',
  intro,
  photo,
  breadcrumb,
  highlights,
  actions = true,
  primaryLabel = 'Demande de devis gratuit',
  showReassurance = true,
  children,
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-800 text-white">
        {/* Photo de fond, fondue vers la gauche */}
        {photo && (
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
            <Photo
              tags={photo.tags}
              lock={photo.lock}
              alt={photo.alt || title}
              priority
              rounded=""
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-navy-800/80 to-navy-800/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-800/70 to-transparent" />
          </div>
        )}

        <Watermark className="left-[-.03em] top-2 text-[36vw] lg:top-6 lg:text-[20rem]" />

        <div className="container-pce relative">
          {/* Fil d'Ariane — accepte une chaîne (dernière étape seule) ou un
              tableau de { label, to? } pour un fil à plusieurs niveaux. */}
          {breadcrumb && (
            <nav aria-label="Fil d'Ariane" className="pt-6">
              <ol className="flex flex-wrap items-center gap-2 text-[10.5px] font-bold uppercase tracking-[.12em] text-white/45">
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
              <h1 className={`font-black uppercase leading-[1.12] tracking-[-.03em] md:leading-[.94] ${titleClassName}`}>
                {title}
              </h1>

              {subtitle && (
                <p className={`mt-5 max-w-lg text-[18px] font-bold uppercase leading-[1.25] tracking-[.01em] sm:text-[24px] ${subtitleClassName}`}>
                  {subtitle}
                </p>
              )}

              <p className="signature mt-4 text-[17px] sm:text-[19px]">{company.expertise}</p>

              {intro && (
                <p className="mt-5 max-w-xl text-[14.5px] leading-[1.8] text-white/70">{intro}</p>
              )}

              {/* Rangée d'icônes optionnelle (voir page Piscine) */}
              {highlights && (
                <ul className="mt-9 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
                  {highlights.map((h) => (
                    <li key={h.title} className="flex flex-col items-start">
                      <Icon name={h.icon} className="h-8 w-8 text-white" strokeWidth={1.3} />
                      <span className="mt-3 text-[11.5px] font-bold uppercase leading-tight tracking-[.05em]">
                        {h.title}
                      </span>
                      <span className="mt-1 text-[11px] leading-snug text-white/50">{h.label}</span>
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
        <ul className="grid grid-cols-2 divide-white/10 py-4 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:py-8">
          {reassurance.map((r) => (
            <li key={r.title} className="flex items-start gap-3 px-0 py-3 lg:px-4 lg:py-1">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 lg:h-10 lg:w-10">
                <Icon name={r.icon} className="h-4 w-4 lg:h-[18px] lg:w-[18px]" strokeWidth={1.4} />
              </span>
              <span className="min-w-0">
                <span className="block text-[10.5px] font-bold uppercase leading-tight tracking-[.04em]">
                  {r.title}
                </span>
                <span className="mt-1 block text-[10.5px] leading-snug text-white/50">
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
