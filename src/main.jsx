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
/* 15/10/2026 : seuls les jeux latin et latin-ext sont importés. Les cinq
   autres (cyrillique, grec, vietnamien) ne servaient à aucun caractère du
   site — vérifié sur le texte des 323 pages prérendues — mais ajoutaient
   leurs @font-face au CSS, désormais intégré à chaque page
   (scripts/inline-css.js). Un texte qui en aurait besoin retomberait sur la
   police système pour ces seuls caractères. latin-ext avant latin, comme
   dans les feuilles d'origine : leurs plages se recouvrent sur quelques
   caractères, et c'est la dernière déclarée qui l'emporte. */
import '@fontsource/inter/latin-ext-400.css'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-ext-500.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-ext-600.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/inter/latin-ext-700.css'
import '@fontsource/inter/latin-700.css'
import '@fontsource/inter/latin-ext-800.css'
import '@fontsource/inter/latin-800.css'
import '@fontsource/inter/latin-ext-900.css'
import '@fontsource/inter/latin-900.css'
import '@fontsource/archivo/latin-ext-600.css'
import '@fontsource/archivo/latin-600.css'
import '@fontsource/archivo/latin-ext-700.css'
import '@fontsource/archivo/latin-700.css'
import '@fontsource/archivo/latin-ext-800.css'
import '@fontsource/archivo/latin-800.css'
import '@fontsource/archivo/latin-ext-900.css'
import '@fontsource/archivo/latin-900.css'

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

/* Le code de l'application est dans boot.jsx, chargé par import dynamique.
   Raison : cache-bust.js ajoute `?v=` à l'URL de ce point d'entrée dans le
   HTML, alors que les chunks de page (code splitting, App.jsx) importent
   les modules partagés par leur URL nue. Si React vivait dans ce fichier,
   le navigateur l'exécuterait deux fois — une par URL — et les hooks
   casseraient (erreur React #321). Ce fichier ne garde donc que les feuilles
   de style, pour qu'elles restent dans le HTML (puis intégrées par
   inline-css.js), et tout le reste passe par boot.jsx, que l'entrée et les
   chunks importent à la même URL. */
import('./boot.jsx')
