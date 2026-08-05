import Icon from './Icon.jsx'
import { company } from '../data/site.js'

/**
 * Bouton d'appel flottant, toujours accessible sur mobile (là où composer un
 * numéro d'un geste compte le plus). Discret sur desktop : le bouton du
 * header suffit largement à cette taille d'écran.
 */
export default function FloatingCall() {
  return (
    <a
      href={company.phoneHref}
      aria-label={`Appeler PCE au ${company.phone}`}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gold-500 text-white shadow-gold ring-4 ring-white/40 transition-transform hover:scale-105 active:scale-95 sm:hidden"
    >
      <Icon name="phone" className="h-6 w-6" strokeWidth={2.2} />
    </a>
  )
}
