import { Link } from 'react-router-dom'
import { company } from '../data/site.js'

/* -------------------------------------------------------------------------
   Identité PCE — UNE SEULE version du logo pour tout le site.

   Vrai logo du client : ovale chromé cerclé de bleu clair, « PCE » en
   capitales marine. Affiché en PNG à fond transparent
   (public/img/logo-pce-officiel.png) — sans conteneur, cadre ni fond
   additionnel en CSS, y compris dans les sections à fond marine du site.

   La mention « Depuis 2005 » est composée en CSS sous l'ovale, et non
   incrustée dans le PNG : elle reste nette à toutes les tailles, se
   traduit dans le texte de la page, et suit `company.signature` — un
   seul endroit à changer le jour où la formulation évolue. Sa couleur
   est héritée (`text-current`), pour rester lisible aussi bien sur fond
   blanc (en-tête) que sur fond marine (pied de page, bandeaux CTA).

   ⚠️ Historique CDN : un PNG transparent avait déjà été tenté ici par le
   passé et provoquait une erreur "Invalid source image" sur le CDN de
   Hostinger (cause jamais identifiée avec certitude), ce qui avait motivé
   un repli temporaire sur un JPEG aplati sur fond blanc — d'où le
   rectangle blanc visible autour du logo que ce PNG corrige. Le fichier
   JPEG (logo-pce-officiel.jpg) reste présent dans public/img/ comme filet
   de sécurité : si ce PNG échoue à nouveau sur le CDN, il suffit de
   remettre l'extension .jpg ci-dessous pour revenir à l'état précédent.

   ⚠️ Ne pas créer de variante. Toute évolution du logo se fait ICI, dans
   <Medallion />, pour rester cohérent partout (en-tête, pied de page,
   bandeaux marine, page 404).
---------------------------------------------------------------------------*/

const SIZES = {
  sm: 'h-[52px] w-[92px]',
  md: 'h-[64px] w-[112px]',
  lg: 'h-[84px] w-[148px]',
  /* Logo du header : ~35 % plus grand que `sm`, demandé par le client pour
     mieux équilibrer l'en-tête. Scindé de `sm` pour ne pas agrandir le
     logo ailleurs (CtaSection, À propos, 404...) où la taille actuelle
     reste correcte. */
  header: 'h-[70px] w-[124px]',
}

/* Mention « Depuis 2005 » sous l'ovale, en verrou avec le logo.
   Le PNG contient une marge transparente d'environ 17 % de sa hauteur en
   bas : la remontée négative compense ce vide pour que la mention reste
   solidaire de l'ovale au lieu de flotter loin en dessous. */
const SINCE_SIZES = {
  sm: 'text-[7px] tracking-[.08em] -mt-1.5',
  md: 'text-[8.5px] tracking-[.1em] -mt-2',
  lg: 'text-[11px] tracking-[.12em] -mt-2.5',
  header: 'text-[9px] tracking-[.12em] -mt-2',
}

function Medallion({ size = 'md', className = '' }) {
  return (
    <span className={`inline-flex flex-col items-center ${className}`}>
      <img
        src="/img/logo-pce-officiel.png"
        alt={`${company.name} — ${company.baselineShort}`}
        className={`object-contain ${SIZES[size] || SIZES.md}`}
      />
      <span
        className={`font-bold uppercase leading-none text-current
                    ${SINCE_SIZES[size] || SINCE_SIZES.md}`}
      >
        {company.signature}
      </span>
    </span>
  )
}

/** Logo seul, non cliquable. */
export function Wordmark({ size = 'md', className = '' }) {
  return <Medallion size={size} className={className} />
}

/** Logo cliquable renvoyant à l'accueil. */
export function Logo({ size = 'md' }) {
  return (
    <Link
      to="/"
      aria-label={`${company.name} — accueil`}
      className="inline-flex shrink-0 transition-opacity hover:opacity-85"
    >
      <Medallion size={size} />
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
  return <p className={`signature text-kicker ${className}`}>{company.expertise}</p>
}
