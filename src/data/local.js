/* -------------------------------------------------------------------------
   Pages locales SEO — une page par couple (métier × ville).

   Deux générations cohabitent dans ce fichier :
   - les 13 villes historiques, couvertes par les 5 métiers d'origine
     (plombier, chauffagiste, climatisation, électricien, pisciniste) → 65 pages ;
   - 20 nouvelles villes (secteur Dracénie + Golfe de Saint-Tropez), couvertes
     par les 5 métiers d'origine PLUS 2 nouveaux (traitement de l'eau, pompe
     à chaleur) → 140 pages.
   Soit 205 pages locales au total. Les prestations affichées sont reprises
   telles quelles du métier correspondant dans site.js (une seule source de
   vérité pour le contenu des prestations) ; le titre, l'intro et la
   méta-description sont propres à chaque page. Pour éviter le duplicate
   content, chaque ville a sa PROPRE structure de phrase (pas un gabarit
   unique où l'on remplace juste le nom de la ville) : combinée aux
   formulations différentes par métier (verb/detail), les pages ont un texte
   réellement distinct.
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
  /* --------------------------- Nouveaux métiers, ouverts aux 20 nouvelles villes */
  'traitement-eau': {
    urlSlug: 'traitement-eau',
    label: "Traitement de l'eau",
    serviceKey: 'traitement-de-l-eau',
    verb: 'le traitement de votre eau',
    detail: 'filtration fine, filtration de forage, charbon actif et traitement UV',
  },
  'pompe-a-chaleur': {
    urlSlug: 'pompe-a-chaleur',
    label: 'Pompe à chaleur',
    serviceKey: 'chauffage',
    verb: 'votre pompe à chaleur',
    detail:
      'étude de dimensionnement, installation et entretien de pompes à chaleur air/eau et air/air',
    relatedExpertise: 'installation-pompe-a-chaleur-var',
  },
  vmc: {
    urlSlug: 'installateur-vmc',
    label: 'Installateur VMC',
    serviceKey: 'vmc',
    verb: 'votre VMC',
    detail:
      'VMC simple flux autoréglable, hygroréglable ou double flux, en neuf comme en rénovation',
  },
}

/** Les métiers ouverts à toutes les communes (les 5 d'origine, plus la VMC —
 *  au même niveau que les métiers fondateurs, pas restreinte comme
 *  Traitement de l'eau et Pompe à chaleur qui n'existent que sur les 23
 *  communes non restreintes ci-dessous). */
const ORIGINAL_TRADES = ['plombier', 'chauffagiste', 'climatisation', 'electricien', 'pisciniste', 'vmc']

/* Chaque ville a : sa distance approximative depuis Lorgues (pour un
   phrasé honnête), 2 communes voisines (pour le maillage interne — voir
   `neighbors`), un paragraphe d'intro déjà entièrement rédigé pour cette
   ville (fonction qui reçoit le `trade` et compose la phrase), et une
   clé de rotation pour la méta-description. Les villes historiques portent
   en plus un champ `trades` qui restreint les métiers disponibles (sinon,
   toute ville hérite par défaut des 7 métiers — voir `localPages`). */
export const localCities = {
  Lorgues: {
    name: 'Lorgues',
    distanceKm: 0,
    neighbors: ['Draguignan', 'Flayosc'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Basée à Lorgues depuis 2020 et forte de vingt ans de métier, PCE intervient pour ${t.verb} directement dans votre commune : ${t.detail}. Devis gratuit et intervention rapide, sans trajet à facturer.`,
  },
  Draguignan: {
    name: 'Draguignan',
    distanceKm: 10,
    neighbors: ['Lorgues', 'Trans-en-Provence'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Draguignan et son agglomération font partie du cœur de notre zone d'intervention : à une dizaine de minutes de notre atelier de Lorgues, PCE y assure ${t.verb} au quotidien — ${t.detail}. Un devis gratuit, sans surcoût de déplacement.`,
  },
  Vidauban: {
    name: 'Vidauban',
    distanceKm: 15,
    neighbors: ['Le Luc', 'Taradeau'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `À quelques minutes de Lorgues, Vidauban bénéficie du même niveau de service que notre commune d'origine. PCE y intervient pour ${t.verb} : ${t.detail}. Déplacement rapide, devis gratuit.`,
  },
  Flayosc: {
    name: 'Flayosc',
    distanceKm: 7,
    neighbors: ['Lorgues', 'Le Thoronet'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Village voisin de Lorgues, Flayosc et ses hameaux sont desservis quotidiennement par nos équipes pour ${t.verb} — ${t.detail}. Intervention rapide, sans frais de déplacement additionnels, et devis établi gratuitement.`,
  },
  'Les Arcs': {
    name: 'Les Arcs',
    distanceKm: 9,
    neighbors: ['Vidauban', 'Taradeau'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `À la sortie de Lorgues, sur l'axe vers Les Arcs-sur-Argens, PCE couvre cette commune pour ${t.verb} : ${t.detail}. Nos artisans s'y déplacent aussi vite qu'à Lorgues même, devis gratuit à l'appui.`,
  },
  'Le Thoronet': {
    name: 'Le Thoronet',
    distanceKm: 12,
    neighbors: ['Flayosc', 'Salernes'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Le Thoronet et ses environs, plus ruraux, demandent souvent une intervention rapide : c'est précisément ce que propose PCE depuis Lorgues pour ${t.verb} — ${t.detail}. Devis gratuit, sans engagement.`,
  },
  Taradeau: {
    name: 'Taradeau',
    distanceKm: 10,
    neighbors: ['Les Arcs', 'Vidauban'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Entre vignes et collines, Taradeau fait partie des communes que PCE dessert régulièrement depuis Lorgues pour ${t.verb} : ${t.detail}. Un seul appel suffit pour obtenir un devis gratuit et une date d'intervention rapprochée.`,
  },
  Salernes: {
    name: 'Salernes',
    distanceKm: 15,
    neighbors: ['Le Thoronet', 'Lorgues'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Connue pour ses tomettes, Salernes se situe dans le prolongement de notre zone d'intervention historique. PCE y prend en charge ${t.verb} — ${t.detail} — avec le même sérieux qu'à Lorgues. Devis gratuit sur simple demande.`,
  },
  /* Ajoutées après coup, avec la même restriction aux 5 métiers d'origine
     que les villes historiques ci-dessus (choix explicite, pas un oubli) —
     distances vérifiées par recherche routière réelle, pas estimées. */
  Entrecasteaux: {
    name: 'Entrecasteaux',
    distanceKm: 14,
    neighbors: ['Lorgues', 'Salernes'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Village fortifié dominé par son château, Entrecasteaux fait partie du triangle Lorgues–Salernes–Villecroze où PCE intervient régulièrement pour ${t.verb} : ${t.detail}. Devis gratuit et délai d'intervention court, comme sur le reste de notre secteur historique.`,
  },
  Villecroze: {
    name: 'Villecroze',
    distanceKm: 13,
    neighbors: ['Salernes', 'Entrecasteaux'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Connue pour ses grottes et sa cascade, Villecroze est desservie par nos équipes au même titre que les communes voisines de Salernes et Entrecasteaux, pour ${t.verb} — ${t.detail}. Intervention rapide depuis Lorgues, devis gratuit sur simple demande.`,
  },
  'Le Luc': {
    name: 'Le Luc',
    distanceKm: 20,
    neighbors: ['Vidauban', 'Les Arcs'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Sur l'axe Lorgues – Le Luc, nos équipes se déplacent régulièrement pour assurer ${t.verb} aux habitants et professionnels de la commune : ${t.detail}. Devis gratuit, sans engagement, réponse rapide.`,
  },
  'Trans-en-Provence': {
    name: 'Trans-en-Provence',
    distanceKm: 12,
    neighbors: ['Draguignan', 'Lorgues'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Trans-en-Provence, proche de Draguignan, bénéficie elle aussi de la réactivité de PCE pour ${t.verb} : ${t.detail}. Nos artisans, basés à Lorgues, s'y déplacent sans délai excessif — devis gratuit.`,
  },
  'Sainte-Maxime': {
    name: 'Sainte-Maxime',
    distanceKm: 35,
    neighbors: ['Fréjus', 'Saint-Raphaël'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Sur le Golfe de Saint-Tropez, Sainte-Maxime fait partie des communes littorales où PCE se déplace pour ${t.verb} : ${t.detail}. Malgré la distance depuis notre atelier de Lorgues, nous maintenons des délais d'intervention raisonnables et un devis toujours gratuit.`,
  },
  Fréjus: {
    name: 'Fréjus',
    distanceKm: 30,
    neighbors: ['Sainte-Maxime', 'Saint-Raphaël'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Fréjus et son agglomération constituent l'une des zones les plus demandées de notre secteur d'intervention élargi. PCE y assure ${t.verb} — ${t.detail} — avec la même exigence de qualité qu'au plus près de Lorgues. Devis gratuit, sans engagement.`,
  },
  /* Quartier balnéaire de Fréjus, traité à part avec un texte volontairement
     différent (résidences secondaires, remises en service saisonnières) pour
     ne pas dupliquer l'intro de Fréjus ci-dessus. */
  'Saint-Aygulf': {
    name: 'Saint-Aygulf',
    distanceKm: 45,
    neighbors: ['Fréjus', 'Sainte-Maxime'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Sur le front de mer entre Fréjus et Sainte-Maxime, Saint-Aygulf compte une forte proportion de résidences secondaires et de copropriétés balnéaires : PCE y assure ${t.verb}, y compris les remises en service avant l'arrivée des propriétaires en saison — ${t.detail}. Devis gratuit, intervention planifiée à l'avance pour les séjours estivaux.`,
  },
  'Saint-Raphaël': {
    name: 'Saint-Raphaël',
    distanceKm: 35,
    neighbors: ['Fréjus', 'Sainte-Maxime'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Jusqu'à Saint-Raphaël, à l'extrémité de notre zone de chalandise, PCE continue d'assurer ${t.verb} pour les particuliers et professionnels du secteur : ${t.detail}. Un devis gratuit et une intervention planifiée à l'avance, même à cette distance de Lorgues.`,
  },

  /* --------------------------------------- Secteur Dracénie (6 nouvelles villes) */
  'Le Muy': {
    name: 'Le Muy',
    distanceKm: 20,
    neighbors: ['La Motte', 'Roquebrune-sur-Argens'],
    intro: (t) =>
      `Aux portes de l'autoroute A8, Le Muy fait partie du bassin dracénois où PCE intervient couramment depuis Lorgues pour ${t.verb} : ${t.detail}. Devis gratuit et délai d'intervention maîtrisé, à une vingtaine de minutes de notre atelier.`,
  },
  'La Motte': {
    name: 'La Motte',
    distanceKm: 15,
    neighbors: ['Le Muy', 'Draguignan'],
    intro: (t) =>
      `Entre Lorgues et Le Muy, La Motte bénéficie d'un accès rapide depuis notre atelier pour ${t.verb} : ${t.detail}. Un artisan de la Dracénie, disponible sur rendez-vous et devis gratuit.`,
  },
  Ampus: {
    name: 'Ampus',
    distanceKm: 15,
    neighbors: ['Draguignan', 'Figanières'],
    intro: (t) =>
      `Village perché du haut Var, Ampus fait partie du territoire dracénois desservi par PCE pour ${t.verb} — ${t.detail}. Malgré son caractère rural, la commune bénéficie des mêmes délais d'intervention et d'un devis gratuit.`,
  },
  Figanières: {
    name: 'Figanières',
    distanceKm: 10,
    neighbors: ['Draguignan', 'Callas'],
    intro: (t) =>
      `À quelques kilomètres de Draguignan, Figanières est l'une des communes de la Dracénie où PCE se déplace régulièrement pour ${t.verb} : ${t.detail}. Intervention rapide depuis Lorgues, devis gratuit sur simple demande.`,
  },
  Callas: {
    name: 'Callas',
    distanceKm: 15,
    neighbors: ['Figanières', 'Draguignan'],
    intro: (t) =>
      `Aux confins du pays de Fayence et de la Dracénie, Callas est desservie par nos équipes basées à Lorgues pour ${t.verb} — ${t.detail}. Devis gratuit et rendez-vous rapide, malgré l'éloignement relatif du village.`,
  },
  'Saint-Antonin-du-Var': {
    name: 'Saint-Antonin-du-Var',
    distanceKm: 10,
    neighbors: ['Lorgues', 'Salernes'],
    intro: (t) =>
      `Petite commune viticole voisine de Lorgues, Saint-Antonin-du-Var profite de la proximité de notre atelier pour ${t.verb} : ${t.detail}. Intervention quasi immédiate et devis gratuit, comme pour l'ensemble de la Dracénie.`,
  },

  /* ------------------------------ Secteur Golfe de Saint-Tropez (14 nouvelles villes) */
  'Saint-Tropez': {
    name: 'Saint-Tropez',
    distanceKm: 45,
    neighbors: ['Ramatuelle', 'Gassin'],
    intro: (t) =>
      `Sur la presqu'île, Saint-Tropez fait partie des communes du Golfe de Saint-Tropez où PCE se déplace pour ${t.verb} : ${t.detail}. Malgré la distance depuis Lorgues, nos artisans y interviennent avec la même exigence de qualité, devis gratuit inclus.`,
  },
  Grimaud: {
    name: 'Grimaud',
    distanceKm: 40,
    neighbors: ['Cogolin', 'Port-Grimaud'],
    intro: (t) =>
      `Grimaud et son arrière-pays font partie de notre zone d'intervention élargie sur le Golfe de Saint-Tropez. PCE y assure ${t.verb} — ${t.detail} — avec la réactivité d'un artisan basé à Lorgues. Devis gratuit, sans engagement.`,
  },
  Cogolin: {
    name: 'Cogolin',
    distanceKm: 38,
    neighbors: ['Grimaud', 'Gassin'],
    intro: (t) =>
      `Cogolin, porte d'entrée du Golfe de Saint-Tropez, bénéficie des interventions régulières de PCE pour ${t.verb} : ${t.detail}. Un devis gratuit et une intervention planifiée, à environ quarante minutes de Lorgues.`,
  },
  Gassin: {
    name: 'Gassin',
    distanceKm: 43,
    neighbors: ['Saint-Tropez', 'Cogolin'],
    intro: (t) =>
      `Village perché au-dessus du Golfe de Saint-Tropez, Gassin est desservi par PCE pour ${t.verb} — ${t.detail}. Nos équipes s'y déplacent depuis Lorgues pour un relevé sur site et un devis toujours gratuit.`,
  },
  Ramatuelle: {
    name: 'Ramatuelle',
    distanceKm: 48,
    neighbors: ['Saint-Tropez', 'Gassin'],
    intro: (t) =>
      `Entre vignes et plages, Ramatuelle fait partie des communes du Golfe de Saint-Tropez où PCE intervient pour ${t.verb} : ${t.detail}. Devis gratuit et intervention organisée à l'avance, malgré la distance depuis notre atelier de Lorgues.`,
  },
  'La Croix-Valmer': {
    name: 'La Croix-Valmer',
    distanceKm: 50,
    neighbors: ['Ramatuelle', 'Cavalaire-sur-Mer'],
    intro: (t) =>
      `À l'extrémité sud du Golfe de Saint-Tropez, La Croix-Valmer reste dans notre zone d'intervention pour ${t.verb} — ${t.detail}. PCE y planifie ses interventions à l'avance pour garantir un service aussi réactif qu'au plus près de Lorgues.`,
  },
  'Cavalaire-sur-Mer': {
    name: 'Cavalaire-sur-Mer',
    distanceKm: 50,
    neighbors: ['La Croix-Valmer', 'Rayol-Canadel-sur-Mer'],
    intro: (t) =>
      `Station balnéaire du Golfe de Saint-Tropez, Cavalaire-sur-Mer est desservie par PCE pour ${t.verb} : ${t.detail}. Devis gratuit et rendez-vous programmé, malgré l'éloignement de cette partie du littoral varois depuis Lorgues.`,
  },
  'La Môle': {
    name: 'La Môle',
    distanceKm: 42,
    neighbors: ['Grimaud', 'La Garde-Freinet'],
    intro: (t) =>
      `Nichée entre le massif des Maures et le Golfe de Saint-Tropez, La Môle fait partie des communes rurales que PCE dessert pour ${t.verb} — ${t.detail}. Devis gratuit, intervention planifiée depuis notre atelier de Lorgues.`,
  },
  'Le Plan-de-la-Tour': {
    name: 'Le Plan-de-la-Tour',
    distanceKm: 35,
    neighbors: ['Grimaud', 'La Garde-Freinet'],
    intro: (t) =>
      `Le Plan-de-la-Tour, village du massif des Maures proche du Golfe de Saint-Tropez, bénéficie des interventions de PCE pour ${t.verb} : ${t.detail}. Un devis gratuit et une intervention organisée sans surprise de délai.`,
  },
  'La Garde-Freinet': {
    name: 'La Garde-Freinet',
    distanceKm: 30,
    neighbors: ['Le Plan-de-la-Tour', 'Grimaud'],
    intro: (t) =>
      `Ancien village de charbonniers au cœur des Maures, La Garde-Freinet fait partie du secteur du Golfe de Saint-Tropez desservi par PCE pour ${t.verb} — ${t.detail}. Devis gratuit, intervention depuis Lorgues sans surcoût de déplacement injustifié.`,
  },
  'Port-Grimaud': {
    name: 'Port-Grimaud',
    distanceKm: 40,
    neighbors: ['Grimaud', 'Sainte-Maxime'],
    intro: (t) =>
      `Cité lacustre du Golfe de Saint-Tropez, Port-Grimaud regroupe de nombreuses résidences où PCE intervient pour ${t.verb} : ${t.detail}. Devis gratuit et créneaux adaptés aux résidences secondaires comme aux habitants à l'année.`,
  },
  'Rayol-Canadel-sur-Mer': {
    name: 'Rayol-Canadel-sur-Mer',
    distanceKm: 55,
    neighbors: ['Cavalaire-sur-Mer', 'La Croix-Valmer'],
    intro: (t) =>
      `Aux confins du Golfe de Saint-Tropez, sur la Corniche des Maures, Rayol-Canadel-sur-Mer reste couverte par PCE pour ${t.verb} — ${t.detail}. Intervention planifiée à l'avance et devis gratuit, malgré la distance depuis Lorgues.`,
  },
  'Puget-sur-Argens': {
    name: 'Puget-sur-Argens',
    distanceKm: 25,
    neighbors: ['Roquebrune-sur-Argens', 'Fréjus'],
    intro: (t) =>
      `Sur l'axe qui relie Lorgues et Draguignan à Fréjus, Saint-Raphaël puis le Golfe de Saint-Tropez, Puget-sur-Argens marque une étape clé de notre zone d'intervention. PCE y assure ${t.verb} : ${t.detail}. Devis gratuit et intervention rapide, à mi-chemin entre la Dracénie et le littoral.`,
  },
  'La Bouverie': {
    name: 'La Bouverie',
    distanceKm: 27,
    neighbors: ['Puget-sur-Argens', 'Roquebrune-sur-Argens'],
    intro: (t) =>
      `Entre Roquebrune-sur-Argens et Les Issambres, sur la route qui mène de Lorgues au Golfe de Saint-Tropez, La Bouverie bénéficie elle aussi des interventions de PCE pour ${t.verb} — ${t.detail}. Devis gratuit, intervention organisée depuis notre atelier de Lorgues jusqu'à Sainte-Maxime et au-delà.`,
  },
  'Roquebrune-sur-Argens': {
    name: 'Roquebrune-sur-Argens',
    distanceKm: 28,
    neighbors: ['Puget-sur-Argens', 'Les Issambres', 'Le Rocher de Roquebrune'],
    intro: (t) =>
      `Au carrefour de la Dracénie et du Golfe de Saint-Tropez, Roquebrune-sur-Argens et son rocher rouge caractéristique font partie de notre zone d'intervention pour ${t.verb} : ${t.detail}. Devis gratuit et délai d'intervention raisonnable depuis Lorgues.`,
  },
  'Les Issambres': {
    name: 'Les Issambres',
    distanceKm: 38,
    neighbors: ['Sainte-Maxime', 'Roquebrune-sur-Argens'],
    intro: (t) =>
      `Station balnéaire de la commune de Roquebrune-sur-Argens, Les Issambres fait partie du littoral du Golfe de Saint-Tropez où PCE se déplace pour ${t.verb} — ${t.detail}. Devis gratuit, intervention organisée pour les résidents comme pour les propriétaires de résidences secondaires.`,
  },
  'Le Rocher de Roquebrune': {
    name: 'Le Rocher de Roquebrune',
    distanceKm: 28,
    neighbors: ['Roquebrune-sur-Argens', 'La Bouverie'],
    intro: (t) =>
      `Au pied du massif rouge qui domine la plaine de l'Argens, les quartiers du Rocher de Roquebrune mêlent villas récentes et mas restaurés, souvent à l'écart du centre. PCE y assure ${t.verb} : ${t.detail}. Devis gratuit et intervention organisée depuis Lorgues, y compris sur les accès un peu isolés.`,
  },
}

/* 4 clôtures différentes pour les méta-descriptions, choisies en rotation
   par ville (voir `localCopy`) pour que deux villes voisines n'aient pas
   la même phrase de fin. */
const metaClosings = [
  'Devis gratuit avec PCE, artisan basé à Lorgues depuis 2020, fort de vingt ans de métier.',
  'Intervention rapide et devis gratuit avec PCE, dans le Var depuis 2020, vingt ans de métier.',
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
    metaDescription: `${trade.label} ${inCity(city.name)} (83) : ${trade.detail}. ${closing}`,
  }
}

/** Toutes les combinaisons publiées : chaque ville expose ses métiers propres
 *  (`city.trades`), ou par défaut l'ensemble des 7 métiers du catalogue. */
export const localPages = Object.keys(localCities).flatMap((cityKey) => {
  const tradeKeys = localCities[cityKey].trades || Object.keys(localTrades)
  return tradeKeys.map((tradeKey) => ({ tradeKey, cityKey }))
})

/**
 * « à » + nom de ville, avec la contraction française obligatoire :
 * à + Le → au, à + Les → aux. Sans ça on écrit « Plombier à Le Muy »
 * ou « à Les Arcs » dans les titres et les méta-descriptions.
 * Les noms en « La » ne se contractent pas (« à La Motte » est correct).
 */
export function inCity(cityName) {
  if (cityName.startsWith('Le ')) return `au ${cityName.slice(3)}`
  if (cityName.startsWith('Les ')) return `aux ${cityName.slice(4)}`
  return `à ${cityName}`
}

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
