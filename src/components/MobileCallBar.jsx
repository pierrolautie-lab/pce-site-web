import Icon from './Icon.jsx'
import { company } from '../data/site.js'

/** Hauteur de la barre, en pixels — exportée pour que Layout.jsx réserve
 *  exactement le même espace en bas de page sur les routes concernées
 *  (voir MOBILE_CALL_BAR_ROUTES), sans quoi la barre recouvrirait le pied
 *  de page au lieu de se poser dans un espace prévu pour elle. Valeur fixe
 *  plutôt que mesurée au runtime : un espace réservé dès le premier rendu
 *  ne peut pas provoquer de décalage de mise en page, contrairement à un
 *  espace ajouté après coup une fois la hauteur réelle connue. */
export const MOBILE_CALL_BAR_HEIGHT = 56

/**
 * Bouton d'appel fixe, pleine largeur, pour les pages où un visiteur en
 * urgence décide en quelques secondes (dépannage et les huit pages
 * métier) — remplace, sur ces pages seulement, le bouton rond flottant
 * global (voir FloatingCall.jsx et Layout.jsx) : les deux superposés
 * auraient fait doublon dans le même coin de l'écran.
 *
 * `sm:hidden` : au-delà de ce palier, le numéro de l'en-tête suffit — même
 * seuil que FloatingCall.jsx, pour un comportement cohérent d'un bouton
 * d'appel à l'autre.
 */
export default function MobileCallBar() {
  return (
    <a
      href={company.phoneHref}
      aria-label={`Appeler PCE au ${company.phone}`}
      style={{ height: MOBILE_CALL_BAR_HEIGHT }}
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2.5 bg-gold-500 text-navy-800 shadow-gold transition-colors hover:bg-gold-400 sm:hidden"
    >
      <Icon name="phone" className="h-5 w-5" strokeWidth={2.2} />
      <span className="font-display text-[15px] font-bold uppercase tracking-[.03em]">
        Appeler PCE
      </span>
    </a>
  )
}
