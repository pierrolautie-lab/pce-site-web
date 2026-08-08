import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import Photo from './Photo.jsx'
import { Wordmark } from './Brand.jsx'
import { company, guarantees, tvaCard } from '../data/site.js'

/* -------------------------------------------------------------------------
   Blocs de section réutilisés par toutes les pages.
   Charte : marine `navy-800`, bleu vif `azure-500`, or `gold-500`, fond
   gris-bleu `navy-50` — les valeurs font foi dans tailwind.config.js.
---------------------------------------------------------------------------*/

/** Titre de section : bleu vif, capitales, centré par défaut. */
export function SectionTitle({ title, lead, align = 'center', tone = 'light', className = '' }) {
  const dark = tone === 'dark'
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}
    >
      <h2
        className={`text-[19px] font-bold uppercase leading-tight tracking-[.06em] sm:text-[24px] ${
          dark ? 'text-white' : 'text-azure-500'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-[14.5px] leading-[1.8] ${dark ? 'text-white/65' : 'text-navy-500'}`}
        >
          {lead}
        </p>
      )}
    </div>
  )
}

/* ------------------------------------------------------- NOS PRESTATIONS -*/
/* Les métiers n'ont pas tous le même nombre de prestations : la grille suit
   la liste, sinon les colonnes en trop laissent un vide sur la droite.
   Classes écrites en toutes lettres, sinon Tailwind ne les génère pas. */
const PRESTATIONS_LG_COLS = {
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
}

export function Prestations({ items, title = 'Nos prestations', lead }) {
  const lgCols = PRESTATIONS_LG_COLS[items.length] ?? 'lg:grid-cols-6'

  return (
    <section className="section bg-white">
      <div className="container-pce">
        <SectionTitle title={title} lead={lead} />

        <div className={`mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:gap-x-6 ${lgCols}`}>
          {items.map((it) => (
            <div key={it.title} className="group flex flex-col items-center text-center">
              <span
                className="grid h-[68px] w-[68px] place-items-center rounded-full border border-navy-200 text-navy-800
                           transition-all duration-300 group-hover:border-azure-500 group-hover:bg-azure-500 group-hover:text-white"
              >
                <Icon name={it.icon} className="h-7 w-7" strokeWidth={1.4} />
              </span>
              <h3 className="mt-4 text-[12.5px] font-bold uppercase leading-tight tracking-[.05em] text-navy-800">
                {it.title}
              </h3>
              <p className="mt-1.5 text-[11.5px] leading-snug text-navy-500">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------ CARTE TVA 5,5 % --*/
export function TvaCard({ className = '' }) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-xl bg-navy-800 p-8 text-white sm:p-9 ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-6 select-none text-[110px] font-black uppercase leading-none tracking-tighter text-white/[.05]"
      >
        {company.name}
      </span>

      <div className="relative">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-500 text-navy-800">
          <Icon name="euro" className="h-5 w-5" strokeWidth={2} />
        </span>
        <h3 className="mt-5 text-[17px] font-bold uppercase tracking-[.06em] text-gold-400">
          {tvaCard.title}
        </h3>
        <p className="mt-4 text-[13.5px] leading-[1.75] text-white/75">{tvaCard.text}</p>
      </div>

      <p className="relative mt-auto pt-6 text-[10.5px] leading-[1.6] text-white/40">
        {tvaCard.note}
      </p>
    </div>
  )
}

/* --------------------------------------- BLOC 2 COLONNES (bénéfices+TVA) -*/
export function InfoBlock({ info }) {
  return (
    <section className="bg-navy-50 py-14 sm:py-16 lg:py-20">
      <div className="container-pce">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="min-w-0 rounded-xl bg-white p-8 shadow-card ring-1 ring-navy-100 sm:p-10 lg:col-span-3">
            <h2 className="text-[17px] font-bold uppercase leading-snug tracking-[.05em] text-azure-500 sm:text-[19px]">
              {info.heading}
            </h2>
            {info.lead && (
              <p className="mt-4 max-w-xl text-[14px] leading-[1.75] text-navy-500">{info.lead}</p>
            )}

            <ul className="mt-7 space-y-4">
              {info.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3.5">
                  <Icon
                    name="check"
                    className="mt-0.5 h-4 w-4 shrink-0 text-azure-500"
                    strokeWidth={3}
                  />
                  <span className="text-[14px] leading-[1.65] text-navy-700">{b}</span>
                </li>
              ))}
            </ul>

            {/* Renvoi optionnel vers une page métier : rien n'est rendu sur
                les pages dont le bloc `info` ne définit pas de `link`. */}
            {info.link && (
              <Link
                to={info.link.to}
                className="group mt-7 inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[.12em] text-azure-500"
              >
                {info.link.label}
                <Icon
                  name="arrowRight"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.4}
                />
              </Link>
            )}
          </div>

          <TvaCard className="min-w-0 lg:col-span-2" />
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------- BANDEAU TVA PLEINE LARGEUR -*/
export function TvaBanner() {
  return (
    <section className="bg-navy-50 pb-14 sm:pb-16 lg:pb-20">
      <div className="container-pce">
        <div className="relative overflow-hidden rounded-xl bg-navy-800 px-8 py-10 text-center text-white sm:px-12">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid select-none place-items-center text-[140px] font-black uppercase leading-none tracking-tighter text-white/[.04]"
          >
            {company.name}
          </span>

          <div className="relative mx-auto max-w-3xl">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold-500 text-navy-800">
              <Icon name="euro" className="h-5 w-5" strokeWidth={2} />
            </span>
            <h2 className="mt-5 text-[18px] font-bold uppercase tracking-[.06em] text-gold-400 sm:text-[22px]">
              {tvaCard.title} sur la main d'œuvre
            </h2>
            <p className="mt-4 text-[14px] leading-[1.75] text-white/75">{tvaCard.text}</p>
            <p className="mt-6 text-[10.5px] leading-[1.6] text-white/40">{tvaCard.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------- BLOC 3 COLONNES -----*/
export function ThreeColumns({ columns, title, lead }) {
  return (
    <section className="bg-navy-50 py-14 sm:py-16 lg:py-20">
      <div className="container-pce">
        {title && <SectionTitle title={title} lead={lead} />}

        <div className={`grid gap-5 lg:grid-cols-3 ${title ? 'mt-12' : ''}`}>
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col rounded-xl bg-white p-7 shadow-card ring-1 ring-navy-100">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-navy-200 text-azure-500">
                <Icon name={col.icon} className="h-5.5 w-5.5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-[14px] font-bold uppercase leading-snug tracking-[.05em] text-azure-500">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {col.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Icon
                      name="check"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-azure-500"
                      strokeWidth={3.2}
                    />
                    <span className="text-[13px] leading-[1.6] text-navy-600">{b}</span>
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

/* ------------------------------------------ RANGÉE DE BÉNÉFICES (4 items) */
export function Benefits({ items, title }) {
  return (
    <section className="section bg-navy-50">
      <div className="container-pce">
        {title && <SectionTitle title={title} />}

        <div className={`grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8 ${title ? 'mt-12' : ''}`}>
          {items.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-navy-800 text-white">
                <Icon name={b.icon} className="h-7 w-7" strokeWidth={1.5} />
              </span>
              <h3 className="mt-4 text-[14px] font-bold uppercase tracking-[.05em] text-navy-800">
                {b.title}
              </h3>
              <p className="mt-2 max-w-[15rem] text-[12.5px] leading-snug text-navy-500">
                {b.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------- BADGES DE CONFIANCE / LABELS --*/
export function TrustBadges({ tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <section className={dark ? 'bg-navy-900 py-9' : 'border-y border-navy-100 bg-white py-9'}>
      <div className="container-pce">
        <p
          className={`text-center text-[10.5px] font-bold uppercase tracking-[.16em] ${
            dark ? 'text-white/45' : 'text-navy-500'
          }`}
        >
          Nos qualifications et garanties
        </p>

        <ul className="mt-6 flex flex-wrap items-stretch justify-center gap-3 sm:gap-4">
          {company.certifications.map((c) => (
            <li
              key={c}
              className={`flex items-center gap-3 rounded-lg px-5 py-3.5 ${
                dark
                  ? 'border border-white/15 text-white'
                  : 'bg-navy-50 text-navy-800 ring-1 ring-navy-100'
              }`}
            >
              <Icon
                name="shieldCheck"
                className={`h-5 w-5 shrink-0 ${dark ? 'text-gold-500' : 'text-azure-500'}`}
                strokeWidth={1.6}
              />
              <span className="text-[12px] font-bold uppercase tracking-[.06em]">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* --------------------------------------------------- BARRE DE GARANTIES -*/
export function GuaranteeBar() {
  return (
    <section className="border-t border-navy-100 bg-white py-10 sm:py-12">
      <div className="container-pce">
        {/* Une colonne par argument : la grille doit suivre la longueur de
            `guarantees`, sinon les colonnes en trop laissent un vide à droite. */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g) => (
            <div key={g.label} className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-navy-200 text-azure-500">
                <Icon name={g.icon} className="h-5 w-5" strokeWidth={1.4} />
              </span>
              <p className="text-[11px] font-bold uppercase leading-[1.4] tracking-[.05em] text-navy-800">
                {g.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------- BLOC EXPERTISE (long) -*/
export function Expertise({ data }) {
  return (
    <section className="section bg-white">
      <div className="container-pce">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5 lg:sticky lg:top-32">
            <Photo
              tags={data.photo.tags}
              lock={data.photo.lock}
              alt={data.heading}
              className="aspect-[4/5] w-full shadow-photo"
              rounded="rounded-xl"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>

          <div className="min-w-0 lg:col-span-7">
            <SectionTitle title={data.heading} align="left" />

            <div className="mt-6 space-y-5">
              {data.paragraphs.map((p, i) => (
                <p key={i} className="text-[14.5px] leading-[1.85] text-navy-600">
                  {p}
                </p>
              ))}
            </div>

            {data.points && (
              <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                {data.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-3 rounded-lg bg-navy-50 p-4 ring-1 ring-navy-100"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-azure-500"
                      strokeWidth={3}
                    />
                    <span className="text-[12.5px] font-semibold leading-snug text-navy-700">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------ MÉTHODE / ÉTAPES -*/
export function Process({ steps, title = 'Comment nous travaillons', lead, columns = 5 }) {
  const lgCols = columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-5'

  return (
    <section className="section bg-navy-50">
      <div className="container-pce">
        <SectionTitle title={title} lead={lead} />

        <ol className={`mt-12 grid gap-5 sm:grid-cols-2 ${lgCols}`}>
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col rounded-xl bg-white p-6 shadow-card ring-1 ring-navy-100">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-azure-500 text-[13px] font-black text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-[13.5px] font-bold uppercase leading-snug tracking-[.05em] text-navy-800">
                {s.title}
              </h3>
              <p className="mt-3 text-[12.5px] leading-[1.7] text-navy-500">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- FAQ ---*/
export function Faq({ items, title = 'Questions fréquentes', lead }) {
  return (
    <section className="section bg-white">
      <div className="container-pce">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-4">
            <SectionTitle title={title} lead={lead} align="left" />
            <Link to="/contact" className="btn-azure mt-8">
              Poser votre question
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
            </Link>
          </div>

          <div className="min-w-0 lg:col-span-8">
            <div className="divide-y divide-navy-100 overflow-hidden rounded-xl bg-navy-50 ring-1 ring-navy-100">
              {items.map((item) => (
                <details key={item.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 transition-colors hover:bg-white">
                    <h3 className="text-[14px] font-bold leading-snug text-navy-800">{item.q}</h3>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-navy-200 text-navy-700 transition-all duration-300 group-open:rotate-45 group-open:border-gold-500 group-open:bg-gold-500 group-open:text-navy-800">
                      <Icon name="close" className="h-3.5 w-3.5 rotate-45" strokeWidth={2.4} />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-[13.5px] leading-[1.8] text-navy-500">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------- BANDEAU D'APPEL -*/
export function CtaBand({
  title = "Besoin d'un conseil ou d'un devis ? Appelez-nous !",
  compact = true,
}) {
  return (
    <section className="bg-azure-600">
      <div className="container-pce">
        <div
          className={`flex flex-col items-center justify-center gap-5 text-center sm:flex-row sm:gap-8 ${
            compact ? 'py-7' : 'py-12'
          }`}
        >
          <h2 className="text-[15px] font-bold uppercase tracking-[.05em] text-white sm:text-[19px]">
            {title}
          </h2>
          <a href={company.phoneHref} className="btn-gold shrink-0">
            <Icon name="phone" className="h-4 w-4" strokeWidth={2.2} />
            <span className="text-[16px] tracking-tight">{company.phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------- GRAND BLOC D'APPEL (marine) -*/
export function CtaSection({
  title = "Un projet, une panne, une simple question ?",
  text = "Décrivez-nous votre besoin : nous vous rappelons rapidement et nous établissons un devis gratuit, détaillé et sans engagement.",
  primaryLabel = 'Demande de devis gratuit',
}) {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none text-[220px] font-black uppercase leading-none tracking-tighter text-white/[.04]"
      >
        {company.name}
      </span>

      <div className="container-pce relative py-14 sm:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <Wordmark size="sm" />
            <h2 className="mt-6 text-[22px] font-black uppercase leading-[1.1] tracking-[-.01em] sm:text-[34px]">
              {title}
            </h2>
            <p className="signature mt-3 text-[16px]">{company.expertise}</p>
            <p className="mt-5 max-w-xl text-[14.5px] leading-[1.8] text-white/65">{text}</p>
          </div>

          <div className="flex min-w-0 flex-col gap-3 lg:col-span-5 lg:items-end">
            <Link to="/contact" className="btn-gold w-full justify-center lg:w-auto">
              {primaryLabel}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
            </Link>
            <a href={company.phoneHref} className="btn-outline-gold w-full justify-center lg:w-auto">
              <Icon name="phone" className="h-4 w-4" strokeWidth={2} />
              {company.phone}
            </a>
            <p className="mt-1 text-center text-[10.5px] uppercase tracking-[.12em] text-white/40 lg:text-right">
              Devis gratuit · Réponse sous 24 h
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------- MAILLAGE INTERNE (liens ronds) */
export function LinkGrid({ title, lead, links, tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <section className={dark ? 'section bg-navy-900' : 'section bg-navy-50'}>
      <div className="container-pce">
        <SectionTitle title={title} lead={lead} tone={tone} />
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`inline-flex items-center rounded-full px-5 py-3.5 text-[12.5px] font-semibold transition-colors duration-200 ${
                dark
                  ? 'bg-white/10 text-white hover:bg-gold-500 hover:text-navy-800'
                  : 'bg-white text-navy-700 ring-1 ring-navy-100 hover:bg-azure-500 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------- LIENS VERS LES AUTRES PAGES */
export function OtherServices({ current, items }) {
  const others = items.filter((s) => s.slug !== current)
  return (
    <section className="section bg-navy-50">
      <div className="container-pce">
        <SectionTitle title="Nos autres métiers" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {others.map((s) => (
            <Link
              key={s.slug}
              to={`/${s.slug}`}
              className="group flex flex-col rounded-xl bg-white p-6 shadow-card ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-navy-200 text-azure-500 transition-colors group-hover:border-azure-500 group-hover:bg-azure-500 group-hover:text-white">
                <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-[14px] font-bold uppercase tracking-[.06em] text-navy-800">
                {s.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[12.5px] leading-[1.65] text-navy-500">{s.card}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[.12em] text-azure-500">
                En savoir plus
                <Icon
                  name="arrowRight"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.4}
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
