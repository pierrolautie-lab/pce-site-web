import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import FloatingCall from './FloatingCall.jsx'
import Analytics from './Analytics.jsx'

/** Remonte en haut de page à chaque navigation. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function Layout() {
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
      <FloatingCall />
    </div>
  )
}
