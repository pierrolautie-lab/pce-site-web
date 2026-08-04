import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
