import { Link } from 'react-router-dom'
import { company } from '../data/site.js'

/* -------------------------------------------------------------------------
   Identité PCE — UNE SEULE version du logo pour tout le site.

   Vrai logo du client (public/img/logo-pce.png) : ovale blanc cerclé de
   marine, « PCE » en capitales grasses, « Depuis 2005 » en dessous — repris
   du fichier fourni par le client (photo de l'enseigne lumineuse, détourée).

   Le fond de l'image est transparent : on le pose systématiquement sur un
   fond blanc (le <span> ci-dessous), y compris dans les sections à fond
   marine du site, pour que le médaillon reste fidèle à l'original.

   ⚠️ Ne pas créer de variante. Toute évolution du logo se fait ICI, dans
   <Medallion />, pour rester cohérent partout (en-tête, pied de page,
   bandeaux marine, page 404).
---------------------------------------------------------------------------*/

const SIZES = {
  sm: 'h-[52px] w-[92px]',
  md: 'h-[64px] w-[112px]',
  lg: 'h-[84px] w-[148px]',
}

function Medallion({ className = '' }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-white ${className}`}>
      <img
        src="/img/logo-pce.png"
        alt={`${company.name} — ${company.baselineShort}`}
        className="h-full w-full object-contain"
      />
    </span>
  )
}

/** Logo seul, non cliquable. */
export function Wordmark({ size = 'md', className = '' }) {
  return <Medallion className={`${SIZES[size] || SIZES.md} ${className}`} />
}

/** Logo cliquable renvoyant à l'accueil. */
export function Logo({ size = 'md' }) {
  return (
    <Link
      to="/"
      aria-label={`${company.name} — accueil`}
      className="inline-flex shrink-0 transition-opacity hover:opacity-85"
    >
      <Medallion className={SIZES[size] || SIZES.md} />
    </Link>
  )
}

/** Filigrane « PCE » en très grand, posé derrière le contenu d'un héros. */
export function Watermark({ tone = 'white', className = '' }) {
  const color = tone === 'navy' ? 'text-navy-800/[.05]' : 'text-white/[.05]'
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none font-black uppercase leading-[.78]
                  tracking-[-.045em] ${color} ${className}`}
    >
      {company.name}
    </span>
  )
}

/** Signature dorée en italique, reprise des maquettes. */
export function Signature({ className = '' }) {
  return <p className={`signature text-[17px] sm:text-[19px] ${className}`}>{company.expertise}</p>
}
