/* -------------------------------------------------------------------------
   Catégories éditoriales des articles /conseils — une couleur distincte par
   métier, utilisée pour les tags, les filtres, les bordures de FAQ et les
   icônes de section dans ArticlePage.jsx. Dérivée de `relatedService`
   (déjà présent sur chaque article) : pas de champ supplémentaire à
   maintenir article par article.
---------------------------------------------------------------------------*/

export const CATEGORIES = [
  {
    key: 'plomberie',
    match: '/plomberie',
    label: 'Plomberie',
    icon: 'pipe',
    text: 'text-navy-800',
    bg: 'bg-navy-100',
    ring: 'ring-navy-200',
    solid: 'bg-navy-800',
    border: 'border-navy-800',
  },
  {
    key: 'chauffage',
    match: '/chauffage',
    label: 'Chauffage',
    icon: 'flame',
    text: 'text-orange-700',
    bg: 'bg-orange-50',
    ring: 'ring-orange-200',
    solid: 'bg-orange-500',
    border: 'border-orange-400',
  },
  {
    key: 'climatisation',
    match: '/climatisation',
    label: 'Climatisation',
    icon: 'snowflake',
    text: 'text-blue-700',
    bg: 'bg-blue-50',
    ring: 'ring-blue-200',
    solid: 'bg-blue-500',
    border: 'border-blue-400',
  },
  {
    key: 'electricite',
    match: '/electricite',
    label: 'Électricité',
    icon: 'bolt',
    text: 'text-yellow-800',
    bg: 'bg-yellow-50',
    ring: 'ring-yellow-200',
    solid: 'bg-yellow-400',
    border: 'border-yellow-400',
  },
  {
    key: 'piscine',
    match: '/piscine',
    label: 'Piscine',
    icon: 'waves',
    text: 'text-teal-700',
    bg: 'bg-teal-50',
    ring: 'ring-teal-200',
    solid: 'bg-teal-500',
    border: 'border-teal-400',
  },
  {
    key: 'traitement-eau',
    match: '/traitement-de-l-eau',
    label: "Traitement de l'eau",
    icon: 'droplet',
    text: 'text-cyan-700',
    bg: 'bg-cyan-50',
    ring: 'ring-cyan-200',
    solid: 'bg-cyan-500',
    border: 'border-cyan-400',
  },
]

/** Retrouve la catégorie d'un article à partir de son `relatedService`. */
export function categoryFor(relatedService = '') {
  return CATEGORIES.find((c) => relatedService.startsWith(c.match)) || CATEGORIES[0]
}
