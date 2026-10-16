import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import FloatingCall from './FloatingCall.jsx'
import MobileCallBar, { MOBILE_CALL_BAR_HEIGHT } from './MobileCallBar.jsx'
import Analytics from './Analytics.jsx'

/** Remonte en haut de page à chaque navigation. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

/* Les huit pages où un visiteur en urgence décide en quelques secondes —
   dépannage et les sept pages métier (liste canonique des routes dans
   App.jsx). Sur ces pages seulement, le bouton rond flottant global
   (FloatingCall) cède la place à MobileCallBar, plus visible — les deux
   superposés auraient fait doublon dans le même coin de l'écran. Les
   sous-pages (ex. /chauffage/chaudiere-condensation) et les 280 pages
   locales restent sur le bouton rond : ce ne sont pas les pages
   d'atterrissage d'une recherche d'urgence. */
const MOBILE_CALL_BAR_PATHS = [
  '/plomberie',
  '/chauffage',
  '/climatisation',
  '/electricite',
  '/piscine',
  '/traitement-de-l-eau',
  '/vmc',
  '/depannage',
]

export default function Layout() {
  const { pathname } = useLocation()
  const showMobileCallBar = MOBILE_CALL_BAR_PATHS.includes(pathname)

  return (
    <div className="flex min-h-screen flex-col bg-navy-50">
      <ScrollToTop />
      <Analytics />

      {/* Lien d'évitement (WCAG 2.4.1). Invisible tant qu'il n'a pas le
          focus : le premier Tab de la page le révèle et permet de sauter
          l'en-tête, dont le menu compte une quinzaine de liens à traverser
          sur chaque page avant d'atteindre le contenu. `sr-only` seul ne
          suffit pas — il faut que le lien redevienne visible au focus,
          sinon l'utilisateur au clavier ne sait pas où il se trouve. */}
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50
                   focus:rounded-lg focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-label
                   focus:font-bold focus:uppercase focus:text-white focus:outline focus:outline-2
                   focus:outline-offset-2 focus:outline-gold-500"
      >
        Aller au contenu
      </a>

      <Header />
      <main id="contenu" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Repère <aside> : les boutons d'appel fixes étaient hors de tout
          repère (règle axe « region »). Leur enfant étant en position
          fixe, l'<aside> n'occupe aucune hauteur dans la colonne. */}
      <aside aria-label="Appel rapide">
        {showMobileCallBar ? (
          <>
            {/* Espace réservé, exactement de la hauteur de la barre fixe,
                pour qu'elle ne recouvre jamais le bas du pied de page — posé
                dès le premier rendu (jamais ajouté après coup une fois une
                hauteur mesurée au runtime), donc sans risque de décalage de
                mise en page. */}
            <div aria-hidden="true" style={{ height: MOBILE_CALL_BAR_HEIGHT }} className="sm:hidden" />
            <MobileCallBar />
          </>
        ) : (
          <FloatingCall />
        )}
      </aside>
    </div>
  )
}
