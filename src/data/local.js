/* -------------------------------------------------------------------------
   Pages locales SEO — une page par couple (métier × ville).
   65 pages : 5 métiers × 13 villes du Var. Les prestations affichées sont
   reprises telles quelles du métier correspondant dans site.js (une seule
   source de vérité pour le contenu des prestations) ; le titre, l'intro et
   la méta-description sont propres à chaque page. Pour éviter le duplicate
   content, chaque ville a sa PROPRE structure de phrase (pas un gabarit
   unique où l'on remplace juste le nom de la ville) : combinée aux 5
   formulations différentes par métier (verb/detail), les 65 pages ont un
   texte réellement distinct.
---------------------------------------------------------------------------*/

/** Un métier « local » = un slug d'URL + le service complet dont il reprend les prestations. */
export const localTrades = {
  plombier: {
    urlSlug: 'plombier',
    label: 'Plombier',
    serviceKey: 'plomberie',
    verb: 'vos travaux de plomberie',
    detail:
      "installation sanitaire, rénovation de salle de bains, recherche de fuite non destructive et remplacement de chauffe-eau",
    relatedExpertise: 'depannage-plomberie-urgence-var',
  },
  chauffagiste: {
    urlSlug: 'chauffagiste',
    label: 'Chauffagiste',
    serviceKey: 'chauffage',
    verb: 'vos équipements de chauffage',
    detail:
      'pompes à chaleur, chaudières à gaz à condensation, planchers chauffants et entretien annuel',
    relatedExpertise: 'installation-pompe-a-chaleur-var',
  },
  climatisation: {
    urlSlug: 'climatisation',
    label: 'Climatisation',
    serviceKey: 'climatisation',
    verb: 'votre climatisation',
    detail:
      'mono-split, multi-split et gainable, posés avec soin pour rester discrets et silencieux',
    relatedExpertise: 'installation-climatisation-reversible-var',
  },
  electricien: {
    urlSlug: 'electricien',
    label: 'Électricien',
    serviceKey: 'electricite',
    verb: 'votre installation électrique',
    detail: 'tableaux électriques, mise aux normes NF C 15-100, bornes de recharge et dépannage',
    relatedExpertise: 'mise-aux-normes-electriques-var',
  },
  pisciniste: {
    urlSlug: 'pisciniste',
    label: 'Pisciniste',
    serviceKey: 'piscine',
    verb: 'votre piscine',
    detail: 'filtration, traitement au sel, chauffage du bassin et automatisation du local technique',
    relatedExpertise: 'entretien-piscine-var',
  },
}

/* Chaque ville a : sa distance approximative depuis Lorgues (pour un
   phrasé honnête), 2 communes voisines (pour le maillage interne — voir
   `neighbors`), un paragraphe d'intro déjà entièrement rédigé pour cette
   ville (fonction qui reçoit le `trade` et compose la phrase), et une
   clé de rotation pour la méta-description. */
export const localCities = {
  Lorgues: {
    name: 'Lorgues',
    distanceKm: 0,
    neighbors: ['Draguignan', 'Flayosc'],
    intro: (t) =>
      `Basée à Lorgues depuis 2005, PCE intervient pour ${t.verb} directement dans votre commune : ${t.detail}. Devis gratuit et intervention rapide, sans trajet à facturer.`,
  },
  Draguignan: {
    name: 'Draguignan',
    distanceKm: 10,
    neighbors: ['Lorgues', 'Trans-en-Provence'],
    intro: (t) =>
      `Draguignan et son agglomération font partie du cœur de notre zone d'intervention : à une dizaine de minutes de notre atelier de Lorgues, PCE y assure ${t.verb} au quotidien — ${t.detail}. Un devis gratuit, sans surcoût de déplacement.`,
  },
  Vidauban: {
    name: 'Vidauban',
    distanceKm: 15,
    neighbors: ['Le Luc', 'Taradeau'],
    intro: (t) =>
      `À quelques minutes de Lorgues, Vidauban bénéficie du même niveau de service que notre commune d'origine. PCE y intervient pour ${t.verb} : ${t.detail}. Déplacement rapide, devis gratuit.`,
  },
  Flayosc: {
    name: 'Flayosc',
    distanceKm: 7,
    neighbors: ['Lorgues', 'Le Thoronet'],
    intro: (t) =>
      `Village voisin de Lorgues, Flayosc et ses hameaux sont desservis quotidiennement par nos équipes pour ${t.verb} — ${t.detail}. Intervention rapide, sans frais de déplacement additionnels, et devis établi gratuitement.`,
  },
  'Les Arcs': {
    name: 'Les Arcs',
    distanceKm: 9,
    neighbors: ['Vidauban', 'Taradeau'],
    intro: (t) =>
      `À la sortie de Lorgues, sur l'axe vers Les Arcs-sur-Argens, PCE couvre cette commune pour ${t.verb} : ${t.detail}. Nos artisans s'y déplacent aussi vite qu'à Lorgues même, devis gratuit à l'appui.`,
  },
  'Le Thoronet': {
    name: 'Le Thoronet',
    distanceKm: 12,
    neighbors: ['Flayosc', 'Salernes'],
    intro: (t) =>
      `Le Thoronet et ses environs, plus ruraux, demandent souvent une intervention rapide : c'est précisément ce que propose PCE depuis Lorgues pour ${t.verb} — ${t.detail}. Devis gratuit, sans engagement.`,
  },
  Taradeau: {
    name: 'Taradeau',
    distanceKm: 10,
    neighbors: ['Les Arcs', 'Vidauban'],
    intro: (t) =>
      `Entre vignes et collines, Taradeau fait partie des communes que PCE dessert régulièrement depuis Lorgues pour ${t.verb} : ${t.detail}. Un seul appel suffit pour obtenir un devis gratuit et une date d'intervention rapprochée.`,
  },
  Salernes: {
    name: 'Salernes',
    distanceKm: 15,
    neighbors: ['Le Thoronet', 'Lorgues'],
    intro: (t) =>
      `Connue pour ses tomettes, Salernes se situe dans le prolongement de notre zone d'intervention historique. PCE y prend en charge ${t.verb} — ${t.detail} — avec le même sérieux qu'à Lorgues. Devis gratuit sur simple demande.`,
  },
  'Le Luc': {
    name: 'Le Luc',
    distanceKm: 20,
    neighbors: ['Vidauban', 'Les Arcs'],
    intro: (t) =>
      `Sur l'axe Lorgues – Le Luc, nos équipes se déplacent régulièrement pour assurer ${t.verb} aux habitants et professionnels de la commune : ${t.detail}. Devis gratuit, sans engagement, réponse rapide.`,
  },
  'Trans-en-Provence': {
    name: 'Trans-en-Provence',
    distanceKm: 12,
    neighbors: ['Draguignan', 'Lorgues'],
    intro: (t) =>
      `Trans-en-Provence, proche de Draguignan, bénéficie elle aussi de la réactivité de PCE pour ${t.verb} : ${t.detail}. Nos artisans, basés à Lorgues, s'y déplacent sans délai excessif — devis gratuit.`,
  },
  'Sainte-Maxime': {
    name: 'Sainte-Maxime',
    distanceKm: 35,
    neighbors: ['Fréjus', 'Saint-Raphaël'],
    intro: (t) =>
      `Sur le Golfe de Saint-Tropez, Sainte-Maxime fait partie des communes littorales où PCE se déplace pour ${t.verb} : ${t.detail}. Malgré la distance depuis notre atelier de Lorgues, nous maintenons des délais d'intervention raisonnables et un devis toujours gratuit.`,
  },
  Fréjus: {
    name: 'Fréjus',
    distanceKm: 30,
    neighbors: ['Sainte-Maxime', 'Saint-Raphaël'],
    intro: (t) =>
      `Fréjus et son agglomération constituent l'une des zones les plus demandées de notre secteur d'intervention élargi. PCE y assure ${t.verb} — ${t.detail} — avec la même exigence de qualité qu'au plus près de Lorgues. Devis gratuit, sans engagement.`,
  },
  'Saint-Raphaël': {
    name: 'Saint-Raphaël',
    distanceKm: 35,
    neighbors: ['Fréjus', 'Sainte-Maxime'],
    intro: (t) =>
      `Jusqu'à Saint-Raphaël, à l'extrémité de notre zone de chalandise, PCE continue d'assurer ${t.verb} pour les particuliers et professionnels du secteur : ${t.detail}. Un devis gratuit et une intervention planifiée à l'avance, même à cette distance de Lorgues.`,
  },
}

/* 4 clôtures différentes pour les méta-descriptions, choisies en rotation
   par ville (voir `localCopy`) pour que deux villes voisines n'aient pas
   la même phrase de fin. */
const metaClosings = [
  'Devis gratuit avec PCE, artisan basé à Lorgues depuis 2005.',
  'Intervention rapide et devis gratuit avec PCE, entreprise du Var depuis 2005.',
  'PCE se déplace sur place pour un devis gratuit et sans engagement.',
  'Devis gratuit, intervention rapide dans toute la Dracénie et le Golfe de Saint-Tropez.',
]

const cityKeysInOrder = Object.keys(localCities)

/** Génère l'intro et la méta-description d'une page locale, sans dupliquer le texte d'une combinaison à l'autre. */
export function localCopy(tradeKey, cityKey) {
  const trade = localTrades[tradeKey]
  const city = localCities[cityKey]
  const closing = metaClosings[cityKeysInOrder.indexOf(cityKey) % metaClosings.length]
  return {
    intro: city.intro(trade),
    metaDescription: `${trade.label} à ${city.name} (83) : ${trade.detail}. ${closing}`,
  }
}

/** Les 65 combinaisons publiées (5 métiers × 13 villes). */
export const localPages = Object.keys(localTrades).flatMap((tradeKey) =>
  Object.keys(localCities).map((cityKey) => ({ tradeKey, cityKey }))
)

/** Convertit un nom de ville en slug d'URL propre : minuscule, sans accents ni apostrophes. */
function slugifyCity(cityKey) {
  return cityKey
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[\s'-]+/g, '-')
}

/** URL d'une page locale, à partir des clés métier/ville — évite de refaire le calcul de slug partout. */
export function localPath(tradeKey, cityKey) {
  return `/${localTrades[tradeKey].urlSlug}-${slugifyCity(cityKey)}`
}
