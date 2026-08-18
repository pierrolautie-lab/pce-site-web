# PCE — site web

Site vitrine (React 18 + React Router v6 + Vite 5 + Tailwind CSS 3) pour PCE
(TEAM TEX SAS), artisan à Lorgues (83).

## Visuels de réalisations à refaire

Ces six photos sont conservées en attendant un remplacement (décision
client, 2026-08-17) : la netteté mesurée est trop basse (variance du
Laplacien, seuil de qualité fixé à 300) mais le client préfère les garder
en place plutôt que de laisser un emplacement vide. À demander au client,
en format paysage :

| Sujet | Fichier | Netteté (Laplacien) |
|---|---|---|
| Chauffe-eau Fleck (carton d'emballage, pas une installation posée) | `public/img/real-chauffe-eau-fleck.jpg` | 51 |
| Salle de bain, carrelage à motifs | `public/img/real-sdb-carrelage-motifs.jpg` | 55 |
| Canalisation obstruée | `public/img/real-canalisation-obstruee.jpg` | 79 |
| Douche en pierre | `public/img/douche-pierre-finie.jpg` | 88 |
| Salle de bain complète | `public/img/real-sdb-complete.jpg` | 111 |
| Ballon thermodynamique | `public/img/real-ballon-thermo.jpg` | 137 |

Chaque fichier porte un commentaire au même effet dans
`src/data/photos.js`, au-dessus de son slot.
