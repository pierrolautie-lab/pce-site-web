import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

/* Polices auto-hébergées (@fontsource), en remplacement de la feuille
   Google Fonts qui était référencée dans index.html. Motif : cette feuille
   était la ressource bloquante la plus coûteuse du premier rendu — une
   connexion cross-origin complète (DNS + TCP + TLS) avant même de pouvoir
   la lire, mesurée à ~600-780 ms sur le profil 4G lente de Lighthouse.
   Ici, les mêmes fichiers WOFF2 (mêmes familles, mêmes graisses,
   `font-display: swap` identique — l'italique de la signature reste
   synthétisé par le navigateur, comme avant) sont servis par pcevar.fr :
   les @font-face rejoignent le bundle CSS empreinté, déjà bloquant, et les
   binaires se chargent sans bloquer, sur la connexion déjà ouverte.
   Chaque graisse importée ci-dessous correspond à un usage réel
   (font-normal/medium/semibold/bold/extrabold/black pour Inter ; le
   font-display de tailwind.config.js n'utilise Archivo qu'en 600-900). */
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'
import '@fontsource/archivo/600.css'
import '@fontsource/archivo/700.css'
import '@fontsource/archivo/800.css'
import '@fontsource/archivo/900.css'

/* Redéclare Archivo 700/900 en `font-display: optional` (voir le
   commentaire du fichier) : `swap`, ci-dessus, causait un CLS mobile de
   0,024 en 4G lente — mesuré par PageSpeed après le passage aux polices
   auto-hébergées, et toujours mesuré à l'identique après le préchargement
   de ces deux graisses (scripts/preload-fonts.js). Seules les deux graisses
   réellement utilisées avec `font-display` dans le code (700 et 900 — voir
   ce fichier pour le détail) sont concernées ; 600 et 800, importées
   au-dessus mais jamais utilisées, ne le sont pas. DOIT rester après les
   imports @fontsource/archivo ci-dessus : à combinaison famille/graisse/
   style/plage unicode identique, le navigateur retient la déclaration la
   plus récente dans l'ordre du document. */
import './fonts-archivo-optional.css'

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
