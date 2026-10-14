import React, { startTransition } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App, { preloadRoute } from './App.jsx'

/* L'ancien site (créé avec un website builder, avant celui-ci) a laissé un
   Service Worker enregistré dans le navigateur de certains visiteurs. Tant
   qu'il reste actif, il continue de servir l'ancienne page depuis son cache
   même après la mise en ligne du nouveau site — uniquement en navigation
   normale, jamais en navigation privée, ce qui explique la différence
   observée. On le désenregistre et on vide ses caches dès qu'on en détecte
   un, une seule fois suffit ensuite pour chaque visiteur concerné. */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister())
  })
  if (window.caches) {
    caches.keys().then((keys) => keys.forEach((key) => caches.delete(key)))
  }
}

/* Hydratation du HTML prérendu (15/10/2026), au lieu d'un rendu neuf :
   createRoot remplaçait tout le DOM à l'arrivée du JS, et ce second
   affichage du texte devenait le LCP de la page — mesuré sur l'accueil
   mobile, LCP observé à l'arrivée du bundle plutôt qu'au premier rendu.
   hydrateRoot reprend les nœuds existants : le LCP reste celui du HTML.

   Conditions pour que l'hydratation réussisse, sans quoi React reconstruit
   tout (onRecoverableError les signale en console) :
     — le chunk de la page courante est chargé AVANT (preloadRoute,
       App.jsx), pour que le premier rendu ne suspende pas ;
     — le HTML porte les séparateurs de texte du rendu serveur React,
       insérés par scripts/prerender.js ;
     — un composant ne change pas de structure selon un état acquis après
       le montage (voir le squelette de Photo.jsx).
   Coquille vide (page non prérendue) : rendu client classique.
   `v7_startTransition` : en navigation interne, la page quittée reste
   affichée pendant le chargement du chunk suivant. */
/* En développement, pas de feuille Inter différée (scripts/inline-css.js
   n'intervient qu'au build) : on révèle le filigrane des héros d'emblée. */
if (import.meta.env.DEV) document.documentElement.classList.add('fi')

const container = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL} future={{ v7_startTransition: true }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
preloadRoute(window.location.pathname)
  .catch(() => {})
  .then(() => {
    if (container.hasChildNodes()) {
      ReactDOM.hydrateRoot(container, app, {
        onRecoverableError: (error) => console.warn('HYDRATATION', error?.message),
      })
    } else {
      startTransition(() => ReactDOM.createRoot(container).render(app))
    }
  })
