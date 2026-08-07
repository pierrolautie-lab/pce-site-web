import { useEffect } from 'react'

/* -------------------------------------------------------------------------
   Google Analytics 4.

   ⚠️ ID de mesure factice — à remplacer par le vrai ID (format "G-XXXXXXX")
   une fois le compte GA4 du client créé. C'est la SEULE ligne à modifier :
   tout le reste (script, événements) fonctionnera automatiquement dès que
   ce placeholder est remplacé.
---------------------------------------------------------------------------*/
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

/**
 * Envoie un événement GA4, sans jamais faire planter le site si le script
 * n'est pas (encore) chargé — utile aussi bien avant le remplacement du
 * placeholder qu'en cas de bloqueur de publicité côté visiteur.
 */
export function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}

/**
 * Injecte le script GA4 une seule fois pour toute la session (monté dans
 * Layout, qui ne se démonte jamais entre deux pages de la SPA), et met en
 * place un suivi d'événements par délégation sur le document entier :
 * ainsi, un nouveau lien tel:/mailto: ajouté n'importe où sur le site est
 * suivi automatiquement, sans avoir à instrumenter chaque composant un par
 * un.
 *
 * Événements suivis :
 *   - phone_click  : clic sur un lien tel:
 *   - email_click  : clic sur un lien mailto:
 *   - cta_devis    : clic sur un lien vers /contact (la page de devis)
 *   - form_submit  : envoi du formulaire de contact (déclenché depuis
 *                    Contact.jsx via trackEvent, pas ici, puisqu'il dépend
 *                    de la validation du formulaire)
 */
export default function Analytics() {
  useEffect(() => {
    if (document.getElementById('ga4-script')) return

    const loader = document.createElement('script')
    loader.id = 'ga4-script'
    loader.async = true
    loader.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(loader)

    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID)
  }, [])

  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href]')
      if (!link) return
      const href = link.getAttribute('href')

      if (href.startsWith('tel:')) {
        trackEvent('phone_click', { link_url: href })
      } else if (href.startsWith('mailto:')) {
        trackEvent('email_click', { link_url: href })
      } else if (href === '/contact' || href.startsWith('/contact?') || href.startsWith('/contact#')) {
        trackEvent('cta_devis', { link_text: link.textContent.trim().slice(0, 60) })
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
