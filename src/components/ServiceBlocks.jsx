import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import BrandLogo from './BrandLogo.jsx'
import { company } from '../data/site.js'

/* -------------------------------------------------------------------------
   Blocs partagés par toutes les pages métier « nouvelle génération »
   (Électricité, Plomberie, Chauffage, Climatisation, Piscine, Traitement
   de l'eau) : mêmes composants, données propres à chaque page. Garder
   ces trois blocs synchronisés entre pages plutôt que de dupliquer leur
   JSX est ce qui garantit que les pages restent visuellement identiques
   au fil des évolutions futures.
---------------------------------------------------------------------------*/

/** Colonne checklist blanche + encart navy (sujet approfondi + CTA).
 *
 *  `spacing` : cran de l'échelle verticale partagée (voir index.css).
 *  'standard' par défaut ; 'tight' quand la section suivante partage le
 *  même fond et se lit avec celle-ci comme un seul ensemble — la section
 *  suivante doit alors porter le même cran, sinon l'écart est bâtard.
 *
 *  Remplace l'ancienne prop booléenne `tightBottom`, qui supprimait
 *  purement et simplement le padding bas : les deux blocs se touchaient
 *  (écart mesuré 0 px sur Électricité), une valeur qui n'existe sur aucune
 *  autre page et ne figure dans aucun cran de l'échelle. */
export function ServiceTwoColumn({ checklistTitle, checklist, card, spacing = 'standard' }) {
  return (
    <section className={`section bg-navy-50 ${spacing === 'tight' ? 'section-tight-b' : ''}`}>
      <div className="container-pce">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="min-w-0 rounded-xl bg-white p-8 shadow-card ring-1 ring-navy-100 sm:p-10">
            <h2 className="text-kicker font-bold uppercase tracking-[.05em] text-azure-500">
              {checklistTitle}
            </h2>
            <ul className="mt-7 space-y-4">
              {checklist.map((b) => (
                <li key={b} className="flex items-start gap-3.5">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-azure-500" strokeWidth={3} />
                  <span className="text-body-sm text-navy-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-w-0 overflow-hidden rounded-xl bg-navy-800 p-8 text-white sm:p-10">
            {/* Filigrane décoratif (aria-hidden), hors échelle typographique
                — voir la même exception dans Blocks.jsx. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-6 select-none text-[110px] font-black uppercase leading-none tracking-tighter text-white/[.05]"
            >
              {company.name}
            </span>
            <div className="relative">
              <h2 className="text-kicker font-bold uppercase tracking-[.05em] text-white">
                {card.title}
              </h2>
              {card.kicker && <p className="signature mt-3 text-kicker">{card.kicker}</p>}
              <p className="mt-4 max-w-md text-body text-white/70">{card.text}</p>
              <ul className="mt-6 space-y-3.5">
                {card.checklist.map((b) => (
                  <li key={b} className="flex items-start gap-3.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" strokeWidth={3} />
                    <span className="text-body-sm text-white/85">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={card.ctaTo}
                className="btn-gold mt-7 w-full whitespace-normal text-center sm:w-auto sm:whitespace-nowrap"
              >
                {card.ctaLabel}
                <Icon name="arrowRight" className="h-4 w-4 shrink-0" strokeWidth={2.4} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Grille de 4 cartes : icône, titre, description courte, 3 points. */
export function ServiceFeatureCards({ items }) {
  return (
    <section className="section bg-white">
      <div className="container-pce">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => (
            <div key={c.title} className="flex flex-col rounded-xl bg-navy-50 p-6 ring-1 ring-navy-100">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-navy-200 text-azure-500">
                <Icon name={c.icon} className="h-5.5 w-5.5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-body-sm font-bold uppercase tracking-[.04em] text-navy-800">
                {c.title}
              </h3>
              <p className="mt-3 text-body-sm text-navy-500">{c.text}</p>
              <ul className="mt-4 space-y-2.5">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 h-3 w-3 shrink-0 text-azure-500" strokeWidth={3.2} />
                    <span className="text-body-sm text-navy-600">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Rangée de blocs « marques utilisées » (équipements posés par PCE — pas de logo officiel de partenariat).
 *  Chaque entrée de `brands` affiche soit un vrai logo (`src`, avec repli
 *  typographique tant que le fichier n'est pas fourni), soit le nom stylisé
 *  en couleur (`color`, sans `src`) — les deux formes cohabitent selon les
 *  pages appelantes. */
export function ServiceBrandsRow({ title = 'Marques que nous installons', brands }) {
  return (
    <section className="section bg-navy-50">
      <div className="container-pce">
        <h2 className="section-title">{title}</h2>

        <div className={`mt-12 grid gap-6 ${brands.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
          {brands.map((p) => (
            <div key={p.name} className="rounded-xl bg-white p-8 shadow-card ring-1 ring-navy-100 sm:p-9">
              {p.src ? (
                <BrandLogo name={p.name} src={p.src} plain className="max-h-9 text-title" />
              ) : (
                <div className="flex items-center gap-2.5">
                  {p.swatch && <span className={`h-6 w-6 shrink-0 rounded-sm ${p.swatch}`} aria-hidden="true" />}
                  <span className={`text-title font-black ${p.color}`}>{p.name}</span>
                  {p.suffix && (
                    <span className="text-label font-semibold uppercase text-navy-500">
                      {p.suffix}
                    </span>
                  )}
                </div>
              )}
              <p className="mt-4 text-body-sm text-navy-600">{p.text}</p>
              {p.bullets && (
                <ul className="mt-5 space-y-2.5 border-t border-navy-100 pt-5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-azure-500" strokeWidth={3.2} />
                      <span className="text-body-sm text-navy-600">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
