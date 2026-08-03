import { Link } from 'react-router-dom'
import { company } from '../data/site.js'

/* -------------------------------------------------------------------------
   Identité PCE — UNE SEULE version du logo pour tout le site.

   Le médaillon reprend fidèlement celui des supports de communication de
   l'entreprise : ovale blanc cerclé de marine, « PCE » en capitales grasses
   italiques dont le C est bleu, et la ligne de métiers en dessous.

   ⚠️ Ne pas créer de variante. Toute évolution du logo se fait ICI, dans
   <Medallion />, pour rester cohérent partout (en-tête, pied de page,
   bandeaux marine, page 404).

   ▸ Dès réception du logo vectoriel d'origine (.svg / .ai / PNG détouré),
     remplacer le contenu de <Medallion /> par ce fichier.
---------------------------------------------------------------------------*/

const NAVY = '#0E2547'
const AZURE = '#1B6FC4'

const SIZES = {
  sm: 'h-[52px] w-[92px]',
  md: 'h-[64px] w-[112px]',
  lg: 'h-[84px] w-[148px]',
}

function Medallion({ className = '' }) {
  return (
    <svg
      viewBox="0 0 260 150"
      className={className}
      role="img"
      aria-label={`${company.name} — ${company.baselineShort}`}
    >
      {/* Ovale */}
      <ellipse cx="130" cy="75" rx="126" ry="71" fill="#FFFFFF" stroke={NAVY} strokeWidth="4" />
      <ellipse
        cx="130"
        cy="75"
        rx="118"
        ry="63.5"
        fill="none"
        stroke={NAVY}
        strokeWidth="1.3"
        opacity=".45"
      />

      {/* Wordmark « PCE » — le C en bleu, comme sur les supports */}
      <text
        x="130"
        y="72"
        textAnchor="middle"
        style={{
          font: 'italic 800 56px/1 Inter, system-ui, sans-serif',
          letterSpacing: '.01em',
        }}
      >
        <tspan fill={NAVY}>P</tspan>
        <tspan fill={AZURE}>C</tspan>
        <tspan fill={NAVY}>E</tspan>
      </text>

      {/* Ligne de métiers */}
      <text
        x="130"
        y="97"
        textAnchor="middle"
        fill={NAVY}
        style={{ font: '700 11.5px/1 Inter, system-ui, sans-serif', letterSpacing: '.05em' }}
      >
        PLOMBERIE · CHAUFFAGE
      </text>
      <text
        x="130"
        y="112"
        textAnchor="middle"
        fill={NAVY}
        style={{ font: '700 11.5px/1 Inter, system-ui, sans-serif', letterSpacing: '.05em' }}
      >
        ÉLECTRICITÉ · PISCINE
      </text>
      <text
        x="130"
        y="127"
        textAnchor="middle"
        fill={NAVY}
        opacity=".75"
        style={{ font: '600 10px/1 Inter, system-ui, sans-serif', letterSpacing: '.08em' }}
      >
        TOUT CORPS D'ÉTAT
      </text>
    </svg>
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
