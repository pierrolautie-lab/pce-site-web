/* -------------------------------------------------------------------------
   Pages locales SEO — une page par couple (métier × ville).
   Premier lot : 5 métiers × 3 villes (Lorgues, Draguignan, Vidauban) = 15
   pages. Les prestations affichées sont reprises telles quelles du métier
   correspondant dans site.js (une seule source de vérité pour le contenu
   des prestations) ; seuls le titre, l'intro et la méta-description varient
   réellement d'une page à l'autre, pour éviter le duplicate content.
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
  },
  chauffagiste: {
    urlSlug: 'chauffagiste',
    label: 'Chauffagiste',
    serviceKey: 'chauffage',
    verb: 'vos équipements de chauffage',
    detail:
      'pompes à chaleur, chaudières à gaz à condensation, planchers chauffants et entretien annuel',
  },
  climatisation: {
    urlSlug: 'climatisation',
    label: 'Climatisation',
    serviceKey: 'climatisation',
    verb: 'votre climatisation',
    detail:
      'mono-split, multi-split et gainable, posés avec soin pour rester discrets et silencieux',
  },
  electricien: {
    urlSlug: 'electricien',
    label: 'Électricien',
    serviceKey: 'electricite',
    verb: 'votre installation électrique',
    detail: 'tableaux électriques, mise aux normes NF C 15-100, bornes de recharge et dépannage',
  },
  pisciniste: {
    urlSlug: 'pisciniste',
    label: 'Pisciniste',
    serviceKey: 'piscine',
    verb: 'votre piscine',
    detail: 'filtration, traitement au sel, chauffage du bassin et automatisation du local technique',
  },
}

/** Une ville locale = son nom + une accroche propre (pas de commune fictive). */
export const localCities = {
  Lorgues: {
    name: 'Lorgues',
    lead: 'Basée à Lorgues depuis 2005,',
  },
  Draguignan: {
    name: 'Draguignan',
    lead: 'Depuis notre atelier de Lorgues, à quelques minutes de Draguignan,',
  },
  Vidauban: {
    name: 'Vidauban',
    lead: 'Depuis notre atelier de Lorgues, à quelques minutes de Vidauban,',
  },
}

/** Génère l'intro et la méta-description d'une page locale, sans dupliquer le texte d'une combinaison à l'autre. */
export function localCopy(tradeKey, cityKey) {
  const trade = localTrades[tradeKey]
  const city = localCities[cityKey]
  return {
    intro: `${city.lead} PCE prend en charge ${trade.verb} à ${city.name} : ${trade.detail}. Devis gratuit et sans engagement, intervention rapide.`,
    metaDescription: `${trade.label} à ${city.name} (83) : ${trade.detail}. Devis gratuit avec PCE, artisan basé à Lorgues depuis 2005.`,
  }
}

/** Les 15 combinaisons publiées (premier lot). */
export const localPages = Object.keys(localTrades).flatMap((tradeKey) =>
  Object.keys(localCities).map((cityKey) => ({ tradeKey, cityKey }))
)
