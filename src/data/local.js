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
    /* Version courte, réservée à la méta-description : la balise doit
       tenir sous 155 caractères, et `detail` en fait déjà jusqu'à 119. */
    metaDetail: "sanitaire, salle de bains, recherche de fuite et chauffe-eau",
    metaTitle: (loc) => `Plombier ${loc} | Dépannage 7j/7 | PCE`,
    metaDescription: (loc) =>
      `Installation, rénovation, recherche de fuite et dépannage 7j/7 ${loc}. Prix annoncé avant travaux, devis gratuit. PCE, artisan du Var.`,
  },
  chauffagiste: {
    urlSlug: 'chauffagiste',
    label: 'Chauffagiste',
    serviceKey: 'chauffage',
    verb: 'vos équipements de chauffage',
    detail:
      'pompes à chaleur, chaudières à gaz à condensation, planchers chauffants et entretien annuel',
    relatedExpertise: 'installation-pompe-a-chaleur-var',
    /* Version courte, réservée à la méta-description : la balise doit
       tenir sous 155 caractères, et `detail` en fait déjà jusqu'à 119. */
    metaDetail: "pompe à chaleur, chaudière gaz condensation et entretien",
    metaTitle: (loc) => `Chauffagiste ${loc} | Pompe à chaleur | PCE`,
    metaDescription: (loc) =>
      `Pompe à chaleur, chaudière, plancher chauffant et dépannage 7j/7 ${loc}. Prix annoncé avant travaux, devis gratuit. PCE, artisan du Var.`,
  },
  climatisation: {
    urlSlug: 'climatisation',
    label: 'Climatisation',
    serviceKey: 'climatisation',
    verb: 'votre climatisation',
    detail:
      'mono-split, multi-split et gainable, posés avec soin pour rester discrets et silencieux',
    relatedExpertise: 'installation-climatisation-reversible-var',
    /* Version courte, réservée à la méta-description : la balise doit
       tenir sous 155 caractères, et `detail` en fait déjà jusqu'à 119. */
    metaDetail: "mono-split, multi-split et gainable, pose soignée",
    metaTitle: (loc) => `Climatisation ${loc} | Installation | PCE`,
    metaDescription: (loc) =>
      `Climatisation réversible, gainable et multi-split ${loc} : pose, entretien et dépannage 7j/7. Devis gratuit, prix annoncé avant travaux.`,
  },
  electricien: {
    urlSlug: 'electricien',
    label: 'Électricien',
    serviceKey: 'electricite',
    verb: 'votre installation électrique',
    detail: 'tableaux électriques, mise aux normes NF C 15-100, bornes de recharge et dépannage',
    relatedExpertise: 'mise-aux-normes-electriques-var',
    /* Version courte, réservée à la méta-description : la balise doit
       tenir sous 155 caractères, et `detail` en fait déjà jusqu'à 119. */
    metaDetail: "tableaux, mise aux normes NF C 15-100 et bornes de recharge",
    metaTitle: (loc) => `Électricien ${loc} | Mise aux normes | PCE`,
    metaDescription: (loc) =>
      `Tableau électrique, mise aux normes, rénovation et dépannage 7j/7 ${loc}. Prix annoncé avant travaux, devis gratuit. PCE, artisan du Var.`,
  },
  pisciniste: {
    urlSlug: 'pisciniste',
    label: 'Pisciniste',
    serviceKey: 'piscine',
    verb: 'votre piscine',
    detail: 'filtration, traitement au sel, chauffage du bassin et automatisation du local technique',
    relatedExpertise: 'entretien-piscine-var',
    /* Version courte, réservée à la méta-description : la balise doit
       tenir sous 155 caractères, et `detail` en fait déjà jusqu'à 119. */
    metaDetail: "filtration, traitement au sel et local technique",
    metaTitle: (loc) => `Pisciniste ${loc} | Entretien piscine | PCE`,
    metaDescription: (loc) =>
      `Filtration, pompe à chaleur, traitement de l’eau et entretien de piscine ${loc}. Devis gratuit, prix annoncé avant. PCE, artisan du Var.`,
  },
  /* --------------------------- Nouveaux métiers, ouverts aux 20 nouvelles villes */
  'traitement-eau': {
    urlSlug: 'traitement-eau',
    label: "Traitement de l’eau",
    serviceKey: 'traitement-de-l-eau',
    verb: 'le traitement de votre eau',
    detail: 'filtration fine, filtration de forage, charbon actif et traitement UV',
    metaDetail: 'filtration fine, forage, charbon actif et traitement UV',
    metaTitle: (loc, cityName) =>
      [...cityName].length <= 18
        ? `Traitement de l’eau ${loc} | Adoucisseur | PCE`
        : `Traitement de l’eau ${loc} | PCE`,
    metaDescription: (loc) =>
      `Adoucisseur, filtration et traitement UV ${loc}. L’eau du Var est calcaire : protégez vos équipements. Devis gratuit, PCE artisan du Var.`,
  },
  'pompe-a-chaleur': {
    urlSlug: 'pompe-a-chaleur',
    label: 'Pompe à chaleur',
    serviceKey: 'chauffage',
    verb: 'votre pompe à chaleur',
    detail:
      'étude de dimensionnement, installation et entretien de pompes à chaleur air/eau et air/air',
    relatedExpertise: 'installation-pompe-a-chaleur-var',
    metaDetail: 'dimensionnement, pose et entretien air/eau et air/air',
    metaTitle: (loc) => `Pompe à chaleur ${loc} | Installation | PCE`,
    metaDescription: (loc) =>
      `Installation de pompe à chaleur air/eau et air/air ${loc} : étude, pose et entretien. Devis gratuit, prix annoncé avant travaux. PCE, Var.`,
  },
  vmc: {
    urlSlug: 'installateur-vmc',
    label: 'Installateur VMC',
    serviceKey: 'vmc',
    verb: 'votre VMC',
    detail:
      'VMC simple flux autoréglable, hygroréglable ou double flux, en neuf comme en rénovation',
    metaDetail: 'simple flux, hygroréglable ou double flux',
    metaTitle: (loc, cityName) =>
      [...cityName].length <= 15
        ? `Installateur VMC ${loc} | Pose et entretien | PCE`
        : `Installateur VMC ${loc} | PCE`,
    metaDescription: (loc) =>
      `Pose et entretien de VMC simple et double flux ${loc}, en neuf comme en rénovation. Devis gratuit, prix annoncé avant travaux. PCE, Var.`,
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
  /* --- Pilote enrichissement (27/08/2026), 3 communes : Lorgues,
     Saint-Tropez, Ampus. `terrain` porte du contenu réellement propre à
     la commune, rendu par LocalPage dans une section dédiée, uniquement
     pour les métiers listés dans `angles`. Trois règles d'écriture, pour
     ne pas recréer le duplicate content avec plus de mots — c'est
     l'écueil identifié dans la note de décision :
     1. les paragraphes décrivent le bâti, l'eau, l'accès et la
        saisonnalité de CETTE commune, jamais une phrase générique où
        seul le nom changerait ;
     2. `angles[métier]` relie ce terrain au métier, un paragraphe écrit
        par couple commune-métier ;
     3. aucun chiffre officiel invérifié — ce que PCE constate sur ses
        chantiers, formulé comme tel. Les distances suivent `distanceKm`,
        déjà vérifié par recherche routière. */
  Lorgues: {
    name: 'Lorgues',
    distanceKm: 0,
    neighbors: ['Draguignan', 'Flayosc'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Basée à Lorgues depuis 2020 et forte de plus de vingt ans de métier, PCE intervient pour ${t.verb} directement dans votre commune : ${t.detail}. Devis gratuit et intervention rapide, sans trajet à facturer.`,
    terrain: {
      heading: 'Travailler là où l’on vit',
      paragraphs: [
        "Lorgues, c’est notre commune. L’atelier est ici, l’équipe y vit, et une bonne partie de nos chantiers se font à moins de dix minutes du dépôt. Le bâti y est double. D’un côté, le centre ancien et ses maisons de village aux murs épais, dont les réseaux datent parfois de plusieurs générations. De l’autre, les bastides et les maisons de campagne des collines, souvent agrandies par étapes, où chaque époque a laissé sa couche d’installations.",
        "L’eau du secteur est parmi les plus calcaires que nous mesurons dans le Var. C’est la première chose que nous vérifions en arrivant chez un client lorguais, parce qu’elle conditionne la durée de vie de presque tout ce que nous posons.",
      ],
      angles: {
        plombier:
          "En plomberie, ce mélange de bâti ancien et d’eau très dure se lit dans nos journées. Dans le centre, nous reprenons des alimentations posées bien avant les normes actuelles, dans des murs de pierre qui ne pardonnent pas l’improvisation. Dans les campagnes, ce sont les chauffe-eau et les mitigeurs entartrés qui nous appellent le plus. Et être sur place change tout. Un robinet qui lâche le matin peut être remplacé l’après-midi même.",
      },
    },
  },
  Draguignan: {
    name: 'Draguignan',
    distanceKm: 10,
    neighbors: ['Lorgues', 'Trans-en-Provence'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Draguignan et son agglomération font partie du cœur de notre zone d’intervention : à une dizaine de minutes de notre atelier, PCE y assure ${t.verb} au quotidien — ${t.detail}. Un devis gratuit, sans surcoût de déplacement.`,
  },
  Vidauban: {
    name: 'Vidauban',
    distanceKm: 15,
    neighbors: ['Le Luc', 'Taradeau'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `À quelques minutes de notre atelier, Vidauban bénéficie du même niveau de service que notre commune d’origine. PCE y intervient pour ${t.verb} : ${t.detail}. Déplacement rapide, devis gratuit.`,
  },
  Flayosc: {
    name: 'Flayosc',
    distanceKm: 7,
    neighbors: ['Lorgues', 'Le Thoronet'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Village voisin de notre atelier, Flayosc et ses hameaux sont desservis quotidiennement par nos équipes pour ${t.verb} — ${t.detail}. Intervention rapide, sans frais de déplacement additionnels, et devis établi gratuitement.`,
  },
  'Les Arcs': {
    name: 'Les Arcs',
    distanceKm: 9,
    neighbors: ['Vidauban', 'Taradeau'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Sur l’axe de la Dracénie vers Les Arcs-sur-Argens, PCE couvre cette commune pour ${t.verb} : ${t.detail}. Nos artisans s’y déplacent régulièrement, devis gratuit à l’appui.`,
  },
  'Le Thoronet': {
    name: 'Le Thoronet',
    distanceKm: 12,
    neighbors: ['Flayosc', 'Salernes'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Le Thoronet et ses environs, plus ruraux, demandent souvent une intervention rapide : c’est précisément ce que propose PCE, artisan de la Dracénie, pour ${t.verb} — ${t.detail}. Devis gratuit, sans engagement.`,
  },
  Taradeau: {
    name: 'Taradeau',
    distanceKm: 10,
    neighbors: ['Les Arcs', 'Vidauban'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Entre vignes et collines, Taradeau fait partie des communes que PCE dessert régulièrement pour ${t.verb} : ${t.detail}. Un seul appel suffit pour obtenir un devis gratuit et convenir d’une date d’intervention.`,
  },
  Salernes: {
    name: 'Salernes',
    distanceKm: 15,
    neighbors: ['Le Thoronet', 'Lorgues'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Connue pour ses tomettes, Salernes se situe dans le prolongement de notre zone d’intervention historique. PCE y prend en charge ${t.verb} — ${t.detail} — avec le même sérieux que dans toute la Dracénie. Devis gratuit sur simple demande.`,
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
      `Village fortifié dominé par son château, Entrecasteaux fait partie du secteur Salernes–Villecroze où PCE intervient régulièrement pour ${t.verb} : ${t.detail}. Devis gratuit et intervention organisée, comme sur le reste de notre secteur historique.`,
  },
  Villecroze: {
    name: 'Villecroze',
    distanceKm: 13,
    neighbors: ['Salernes', 'Entrecasteaux'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Connue pour ses grottes et sa cascade, Villecroze est desservie par nos équipes au même titre que les communes voisines de Salernes et Entrecasteaux, pour ${t.verb} — ${t.detail}. Intervention organisée par nos équipes de la Dracénie, devis gratuit sur simple demande.`,
  },
  'Le Luc': {
    name: 'Le Luc',
    distanceKm: 20,
    neighbors: ['Vidauban', 'Les Arcs'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Sur l’axe de la plaine des Maures jusqu’au Luc, nos équipes se déplacent régulièrement pour assurer ${t.verb} aux habitants et professionnels de la commune : ${t.detail}. Devis gratuit, sans engagement, réponse rapide.`,
  },
  'Trans-en-Provence': {
    name: 'Trans-en-Provence',
    distanceKm: 12,
    neighbors: ['Draguignan', 'Lorgues'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Trans-en-Provence, proche de Draguignan, bénéficie elle aussi de la réactivité de PCE pour ${t.verb} : ${t.detail}. Nos artisans de la Dracénie s’y déplacent régulièrement — devis gratuit.`,
  },
  'Sainte-Maxime': {
    name: 'Sainte-Maxime',
    distanceKm: 35,
    neighbors: ['Fréjus', 'Saint-Raphaël'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Sur le Golfe de Saint-Tropez, Sainte-Maxime fait partie des communes littorales où PCE se déplace pour ${t.verb} : ${t.detail}. Nous y planifions nos interventions à l’avance, avec un devis toujours gratuit.`,
  },
  Fréjus: {
    name: 'Fréjus',
    distanceKm: 30,
    neighbors: ['Sainte-Maxime', 'Saint-Raphaël'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Fréjus et son agglomération constituent l’une des zones les plus demandées de notre secteur d’intervention élargi. PCE y assure ${t.verb} — ${t.detail} — avec la même exigence de qualité que sur tout notre secteur. Devis gratuit, sans engagement.`,
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
      `Sur le front de mer entre Fréjus et Sainte-Maxime, Saint-Aygulf compte une forte proportion de résidences secondaires et de copropriétés balnéaires : PCE y assure ${t.verb}, y compris les remises en service avant l’arrivée des propriétaires en saison — ${t.detail}. Devis gratuit, intervention planifiée à l’avance pour les séjours estivaux.`,
  },
  'Saint-Raphaël': {
    name: 'Saint-Raphaël',
    distanceKm: 35,
    neighbors: ['Fréjus', 'Sainte-Maxime'],
    trades: ORIGINAL_TRADES,
    intro: (t) =>
      `Jusqu’à Saint-Raphaël, à l’extrémité de notre zone de chalandise, PCE continue d’assurer ${t.verb} pour les particuliers et professionnels du secteur : ${t.detail}. Un devis gratuit et une intervention planifiée à l’avance.`,
  },

  /* --------------------------------------- Secteur Dracénie (6 nouvelles villes) */
  'Le Muy': {
    name: 'Le Muy',
    distanceKm: 20,
    neighbors: ['La Motte', 'Roquebrune-sur-Argens'],
    intro: (t) =>
      `Aux portes de l’autoroute A8, Le Muy fait partie du bassin dracénois où PCE intervient couramment pour ${t.verb} : ${t.detail}. Devis gratuit et intervention organisée, à une vingtaine de minutes de notre atelier.`,
  },
  'La Motte': {
    name: 'La Motte',
    distanceKm: 15,
    neighbors: ['Le Muy', 'Draguignan'],
    intro: (t) =>
      `Au cœur de la Dracénie, près du Muy, La Motte bénéficie d’un accès rapide depuis notre atelier pour ${t.verb} : ${t.detail}. Un artisan de la Dracénie, disponible sur rendez-vous et devis gratuit.`,
  },
  Ampus: {
    name: 'Ampus',
    distanceKm: 15,
    neighbors: ['Draguignan', 'Figanières'],
    intro: (t) =>
      `Village perché du haut Var, Ampus fait partie du territoire dracénois desservi par PCE pour ${t.verb} — ${t.detail}. Malgré son caractère rural, la commune bénéficie des mêmes délais d’intervention et d’un devis gratuit.`,
    terrain: {
      heading: 'Intervenir dans le haut Var',
      paragraphs: [
        "Ampus est un village perché du haut Var, à une vingtaine de minutes de notre atelier par la route de Draguignan. L’habitat y est dispersé, un centre ancien resserré et des hameaux et des fermes éparpillés sur le plateau. On y est sensiblement plus haut que dans la plaine de l’Argens, et cela se sent sur les saisons, les hivers y sont plus francs et les nuits froides s’attardent au printemps.",
        "Ce caractère rural change notre façon de préparer une intervention. Pas question d’un aller-retour pour une pièce manquante, le fourgon part complet, et nous groupons volontiers plusieurs demandes du village sur la même demi-journée.",
      ],
      angles: {
        plombier:
          "Côté plomberie, le gel est ici un vrai sujet, bien plus qu’en bord de mer. Nous isolons les réseaux exposés, vidangeons les alimentations extérieures avant l’hiver et vérifions les abris de compteur. Les maisons anciennes du village posent, elles, les questions classiques des centres anciens varois, des réseaux d’époques mélangées qu’il faut savoir lire avant d’ouvrir un mur.",
      },
    },
  },
  Figanières: {
    name: 'Figanières',
    distanceKm: 10,
    neighbors: ['Draguignan', 'Callas'],
    intro: (t) =>
      `À quelques kilomètres de Draguignan, Figanières est l’une des communes de la Dracénie où PCE se déplace régulièrement pour ${t.verb} : ${t.detail}. Intervention organisée par nos équipes de la Dracénie, devis gratuit sur simple demande.`,
  },
  Callas: {
    name: 'Callas',
    distanceKm: 15,
    neighbors: ['Figanières', 'Draguignan'],
    intro: (t) =>
      `Aux confins du pays de Fayence et de la Dracénie, Callas est desservie par nos équipes de la Dracénie pour ${t.verb} — ${t.detail}. Devis gratuit et rendez-vous rapide, malgré l’éloignement relatif du village.`,
  },
  'Saint-Antonin-du-Var': {
    name: 'Saint-Antonin-du-Var',
    distanceKm: 10,
    neighbors: ['Lorgues', 'Salernes'],
    intro: (t) =>
      `Petite commune viticole de la Dracénie, Saint-Antonin-du-Var profite de la proximité de notre atelier pour ${t.verb} : ${t.detail}. Intervention organisée et devis gratuit, comme pour l’ensemble de la Dracénie.`,
  },

  /* ------------------------------ Secteur Golfe de Saint-Tropez (14 nouvelles villes) */
  'Saint-Tropez': {
    name: 'Saint-Tropez',
    distanceKm: 45,
    neighbors: ['Ramatuelle', 'Gassin'],
    intro: (t) =>
      `Sur la presqu’île, Saint-Tropez fait partie des communes du Golfe de Saint-Tropez où PCE se déplace pour ${t.verb} : ${t.detail}. Nos artisans y interviennent avec la même exigence de qualité, devis gratuit inclus.`,
    terrain: {
      heading: 'Intervenir sur la presqu’île',
      paragraphs: [
        "À Saint-Tropez, nous travaillons surtout pour des résidences secondaires et des copropriétés, et c’est un parc à part. Les logements restent vides une partie de l’année, puis se remplissent d’un coup à la belle saison, et tout doit fonctionner le jour de l’arrivée. Le village ancien ajoute ses propres règles, des ruelles étroites, des accès malaisés, des immeubles où rien ne se décide sans le syndic ou le gardien.",
        "Notre atelier est à environ trois quarts d’heure de route hors saison. Nous regroupons donc nos interventions sur la presqu’île, et nous planifions les gros travaux entre l’automne et le printemps, quand les logements sont libres et la circulation redevenue normale.",
      ],
      angles: {
        plombier:
          "Pour la plomberie, la maison secondaire est un cas d’école. Une installation qui dort plusieurs mois vieillit mal, les joints sèchent, le calcaire fige la robinetterie, et une petite fuite peut couler longtemps avant d’être découverte. Nous préparons les fermetures d’automne, assurons les remises en service au printemps, et faisons le lien avec les gardiens et les syndics pour intervenir hors de votre présence.",
      },
    },
  },
  Grimaud: {
    name: 'Grimaud',
    distanceKm: 40,
    neighbors: ['Cogolin', 'Port-Grimaud'],
    intro: (t) =>
      `Grimaud et son arrière-pays font partie de notre zone d’intervention élargie sur le Golfe de Saint-Tropez. PCE y assure ${t.verb} — ${t.detail} — avec la réactivité d’un artisan varois. Devis gratuit, sans engagement.`,
  },
  Cogolin: {
    name: 'Cogolin',
    distanceKm: 38,
    neighbors: ['Grimaud', 'Gassin'],
    intro: (t) =>
      `Cogolin, porte d’entrée du Golfe de Saint-Tropez, bénéficie des interventions régulières de PCE pour ${t.verb} : ${t.detail}. Un devis gratuit et une intervention planifiée, à environ quarante minutes de notre atelier.`,
  },
  Gassin: {
    name: 'Gassin',
    distanceKm: 43,
    neighbors: ['Saint-Tropez', 'Cogolin'],
    intro: (t) =>
      `Village perché au-dessus du Golfe de Saint-Tropez, Gassin est desservi par PCE pour ${t.verb} — ${t.detail}. Nos équipes s’y déplacent pour un relevé sur site et un devis toujours gratuit.`,
  },
  Ramatuelle: {
    name: 'Ramatuelle',
    distanceKm: 48,
    neighbors: ['Saint-Tropez', 'Gassin'],
    intro: (t) =>
      `Entre vignes et plages, Ramatuelle fait partie des communes du Golfe de Saint-Tropez où PCE intervient pour ${t.verb} : ${t.detail}. Devis gratuit et intervention organisée à l’avance.`,
  },
  'La Croix-Valmer': {
    name: 'La Croix-Valmer',
    distanceKm: 50,
    neighbors: ['Ramatuelle', 'Cavalaire-sur-Mer'],
    intro: (t) =>
      `À l’extrémité sud du Golfe de Saint-Tropez, La Croix-Valmer reste dans notre zone d’intervention pour ${t.verb} — ${t.detail}. PCE y planifie ses interventions à l’avance pour assurer un service soigné, devis gratuit.`,
  },
  'Cavalaire-sur-Mer': {
    name: 'Cavalaire-sur-Mer',
    distanceKm: 50,
    neighbors: ['La Croix-Valmer', 'Rayol-Canadel-sur-Mer'],
    intro: (t) =>
      `Station balnéaire du Golfe de Saint-Tropez, Cavalaire-sur-Mer est desservie par PCE pour ${t.verb} : ${t.detail}. Devis gratuit et rendez-vous programmé à l’avance.`,
  },
  'La Môle': {
    name: 'La Môle',
    distanceKm: 42,
    neighbors: ['Grimaud', 'La Garde-Freinet'],
    intro: (t) =>
      `Nichée entre le massif des Maures et le Golfe de Saint-Tropez, La Môle fait partie des communes rurales que PCE dessert pour ${t.verb} — ${t.detail}. Devis gratuit, intervention planifiée à l’avance.`,
  },
  'Le Plan-de-la-Tour': {
    name: 'Le Plan-de-la-Tour',
    distanceKm: 35,
    neighbors: ['Grimaud', 'La Garde-Freinet'],
    intro: (t) =>
      `Le Plan-de-la-Tour, village du massif des Maures proche du Golfe de Saint-Tropez, bénéficie des interventions de PCE pour ${t.verb} : ${t.detail}. Un devis gratuit et une intervention organisée sans surprise de délai.`,
  },
  'La Garde-Freinet': {
    name: 'La Garde-Freinet',
    distanceKm: 30,
    neighbors: ['Le Plan-de-la-Tour', 'Grimaud'],
    intro: (t) =>
      `Ancien village de charbonniers au cœur des Maures, La Garde-Freinet fait partie du secteur du Golfe de Saint-Tropez desservi par PCE pour ${t.verb} — ${t.detail}. Devis gratuit, sans surcoût de déplacement injustifié.`,
  },
  'Port-Grimaud': {
    name: 'Port-Grimaud',
    distanceKm: 40,
    neighbors: ['Grimaud', 'Sainte-Maxime'],
    intro: (t) =>
      `Cité lacustre du Golfe de Saint-Tropez, Port-Grimaud regroupe de nombreuses résidences où PCE intervient pour ${t.verb} : ${t.detail}. Devis gratuit et interventions organisées avec les résidences secondaires comme avec les habitants à l’année.`,
  },
  'Rayol-Canadel-sur-Mer': {
    name: 'Rayol-Canadel-sur-Mer',
    distanceKm: 55,
    neighbors: ['Cavalaire-sur-Mer', 'La Croix-Valmer'],
    intro: (t) =>
      `Aux confins du Golfe de Saint-Tropez, sur la Corniche des Maures, Rayol-Canadel-sur-Mer reste couverte par PCE pour ${t.verb} — ${t.detail}. Intervention planifiée à l’avance et devis gratuit.`,
  },
  'Puget-sur-Argens': {
    name: 'Puget-sur-Argens',
    distanceKm: 25,
    neighbors: ['Roquebrune-sur-Argens', 'Fréjus'],
    intro: (t) =>
      `Sur l’axe qui relie la Dracénie à Fréjus, Saint-Raphaël puis le Golfe de Saint-Tropez, Puget-sur-Argens marque une étape clé de notre zone d’intervention. PCE y assure ${t.verb} : ${t.detail}. Devis gratuit et intervention rapide, à mi-chemin entre la Dracénie et le littoral.`,
  },
  'La Bouverie': {
    name: 'La Bouverie',
    distanceKm: 27,
    neighbors: ['Puget-sur-Argens', 'Roquebrune-sur-Argens'],
    intro: (t) =>
      `Entre Roquebrune-sur-Argens et Les Issambres, sur la route qui mène de la Dracénie au Golfe de Saint-Tropez, La Bouverie bénéficie elle aussi des interventions de PCE pour ${t.verb} — ${t.detail}. Devis gratuit, intervention organisée jusqu’à Sainte-Maxime et au-delà.`,
  },
  'Roquebrune-sur-Argens': {
    name: 'Roquebrune-sur-Argens',
    distanceKm: 28,
    neighbors: ['Puget-sur-Argens', 'Les Issambres', 'Le Rocher de Roquebrune'],
    intro: (t) =>
      `Au carrefour de la Dracénie et du Golfe de Saint-Tropez, Roquebrune-sur-Argens et son rocher rouge caractéristique font partie de notre zone d’intervention pour ${t.verb} : ${t.detail}. Devis gratuit et intervention planifiée.`,
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
      `Au pied du massif rouge qui domine la plaine de l’Argens, les quartiers du Rocher de Roquebrune mêlent villas récentes et mas restaurés, souvent à l’écart du centre. PCE y assure ${t.verb} : ${t.detail}. Devis gratuit et intervention organisée, y compris sur les accès un peu isolés.`,
  },
  /* --- Extension demandée par le client (27/11/2026, guide SEO du
     25/11) : Brignoles, Toulon, Hyères. Tous les métiers du catalogue.
     ⚠️ `distanceKm` approximatif, NON vérifié par recherche routière :
     il ne sert qu'à trier les liens « villes voisines », il n'est affiché
     nulle part. Toulon et Hyères dépassent le « rayon de 50 km » cité dans
     `whyChooseUs` (site.js) et le GeoCircle d'index.html : à harmoniser. */
  Brignoles: {
    name: 'Brignoles',
    distanceKm: 35,
    neighbors: ['Le Luc', 'Le Thoronet'],
    intro: (t) =>
      `Capitale de la Provence Verte, Brignoles réunit un centre ancien aux maisons de ville serrées et des quartiers pavillonnaires plus récents en périphérie. PCE y prend en charge ${t.verb} : ${t.detail}. Devis gratuit et sans engagement, intervention planifiée sur rendez-vous.`,
  },
  Toulon: {
    name: 'Toulon',
    distanceKm: 80,
    neighbors: ['Hyères', 'Brignoles'],
    intro: (t) =>
      `Préfecture du Var, Toulon concentre appartements en copropriété, maisons de ville et villas des quartiers résidentiels. Pour ${t.verb}, PCE intervient sur rendez-vous : ${t.detail}. Devis gratuit, prix annoncé avant travaux.`,
  },
  'Hyères': {
    name: 'Hyères',
    distanceKm: 85,
    neighbors: ['Toulon', 'La Môle'],
    intro: (t) =>
      `Entre la presqu’île de Giens et la vieille ville, Hyères mêle résidences principales et maisons secondaires occupées une partie de l’année. PCE y assure ${t.verb} — ${t.detail}. Devis gratuit et intervention organisée selon l’occupation du logement.`,
  },
}

/* ----------------------------------------- Réciprocité du voisinage ------
   Les listes `neighbors` ci-dessus sont écrites à la main, commune par
   commune, et elles étaient orientées : une commune pouvait citer ses
   voisines sans jamais être citée en retour. Mesuré le 09/10/2026 sur le
   site déployé — cinq communes n'étaient citées par personne (Villecroze,
   Saint-Aygulf, Ampus, Saint-Antonin-du-Var, La Môle) et leurs 14 pages
   n'avaient qu'UN seul lien entrant, celui du plan du site.

   Plutôt que de retoucher 39 tableaux à la main — qui se seraient
   redésynchronisés au premier ajout de commune — la réciprocité est
   calculée ici une fois pour toutes : si A cite B, B cite A. L'ordre reste
   déterministe (voisines écrites à la main d'abord, puis les réciproques
   par distance croissante depuis Lorgues, puis par nom) : le prérendu doit
   produire exactement le même HTML à chaque build.

   Le filtre par métier reste dans LocalPage.jsx : une voisine n'est liée
   que si la page existe pour CE métier (pompe-a-chaleur et traitement-eau
   ne couvrent que 23 des 39 communes). */
for (const [key, city] of Object.entries(localCities)) {
  for (const neighborKey of city.neighbors) {
    const neighbor = localCities[neighborKey]
    if (!neighbor) continue
    if (!neighbor.neighbors.includes(key)) neighbor.neighbors.push(key)
  }
}
for (const city of Object.values(localCities)) {
  city.neighbors = [...new Set(city.neighbors)].sort((a, b) => {
    const da = localCities[a]?.distanceKm ?? 999
    const db = localCities[b]?.distanceKm ?? 999
    return da - db || a.localeCompare(b, 'fr')
  })
}

/* 4 clôtures différentes pour les méta-descriptions, choisies en rotation
   par ville (voir `localCopy`) pour que deux villes voisines n'aient pas
   la même phrase de fin. */
/* Quatre formules courtes, en rotation d'une ville à l'autre. Les
   précédentes montaient jusqu'à 100 caractères à elles seules et
   poussaient chaque description bien au-delà de la limite d'affichage de
   Google : les 280 pages locales étaient tronquées. */
const metaClosings = [
  'Devis gratuit.',
  'Devis gratuit, intervention rapide.',
  'PCE, artisan à Lorgues.',
  'Devis gratuit, déplacement rapide.',
]

const cityKeysInOrder = Object.keys(localCities)

/**
 * Génère l'intro, le titre et la méta-description d'une page locale.
 *
 * Titre et description viennent des gabarits `metaTitle` / `metaDescription`
 * de chaque métier (27/11/2026) : métier + ville + raison d'appeler, la
 * ville une seule fois. Limites 60 / 157 caractères, contrôlées sur les
 * pages prérendues par `npm run check:meta`. VMC et traitement de l'eau
 * raccourcissent leur titre au-delà de 15 / 18 caractères de nom de
 * commune : seuils mesurés sur les 39 communes réelles (La Croix-Valmer,
 * 15 caractères, tombe pile à 60 en version longue).
 *
 * `metaDetail` et `metaClosings` ne sont plus lus nulle part depuis ce
 * changement (vérifié par grep) ; leur suppression attend validation.
 */
export function localCopy(tradeKey, cityKey) {
  const trade = localTrades[tradeKey]
  const city = localCities[cityKey]
  const loc = inCity(city.name)
  return {
    intro: city.intro(trade),
    metaTitle: trade.metaTitle(loc, city.name),
    metaDescription: trade.metaDescription(loc),
  }
}

/** Toutes les combinaisons publiées : chaque ville expose ses métiers propres
 *  (`city.trades`), ou par défaut l'ensemble des 7 métiers du catalogue. */
export const localPages = Object.keys(localCities).flatMap((cityKey) => {
  const tradeKeys = localCities[cityKey].trades || Object.keys(localTrades)
  return tradeKeys.map((tradeKey) => ({ tradeKey, cityKey }))
})

/**
 * Une page locale existe-t-elle pour ce couple métier × ville ?
 *
 * Même règle que `localPages` ci-dessus, et c'est tout l'intérêt : elle est
 * écrite une seule fois. Les liens « villes voisines » de LocalPage.jsx la
 * dérivaient auparavant de leur côté, en supposant que toute ville portait
 * tous les métiers. C'est faux depuis l'ouverture de `pompe-a-chaleur` et
 * `traitement-eau` aux seules 23 villes historiques : les 16 autres n'ont
 * pas ces deux pages. Résultat, 10 liens pointaient vers des routes
/**
 * FAQ des pages locales (guide SEO du 25/11/2026, section 4b), rendue par
 * LocalPage et reprise en FAQPage JSON-LD. Réponses volontairement sans
 * délai chiffré ni promesse de créneau (CGV : « sans garantie de créneau
 * fixe ») ; urgences 7j/7 et horaires de bureau confirmés par le client.
 * `phone` est passé par l'appelant (company.phone, site.js) pour garder
 * une seule source pour les coordonnées.
 */
export function localFaq(tradeKey, cityKey, phone) {
  const trade = localTrades[tradeKey]
  const loc = inCity(localCities[cityKey].name)
  const detail = trade.detail.charAt(0).toUpperCase() + trade.detail.slice(1)
  return [
    {
      q: `Dans quel délai intervenez-vous ${loc} ?`,
      a: `Le délai dépend de la nature des travaux et de notre planning : nous vous proposons une date dès votre appel. Pour une urgence, nous répondons 7j/7 et intervenons dans les meilleurs délais, sans garantie de créneau fixe.`,
    },
    {
      q: `Proposez-vous un service d’urgence ${loc} ?`,
      a: `Oui. Fuite, panne de chauffage ou de climatisation : appelez le ${phone}. Nous répondons 7j/7, vous donnons les premiers conseils par téléphone et annonçons le prix avant toute intervention.`,
    },
    {
      q: `Que prend en charge PCE pour ${trade.verb} ${loc} ?`,
      a: `${detail}. PCE réunit aussi la plomberie, le chauffage, la climatisation, l’électricité, la piscine, le traitement de l’eau et la VMC : un seul interlocuteur pour tout le logement.`,
    },
    {
      q: `Êtes-vous disponibles le week-end ${loc} ?`,
      a: `Nos horaires de bureau vont du lundi au vendredi, de 7h30 à 18h00. Les urgences sont assurées 7j/7, week-end compris.`,
    },
    {
      q: `Comment obtenir un devis ${loc} ?`,
      a: `Appelez le ${phone} ou remplissez le formulaire de contact. Le devis est gratuit, sans engagement et détaillé poste par poste ; si besoin, nous passons d’abord sur place pour un relevé.`,
    },
  ]
}

 * inexistantes (Draguignan, Sainte-Maxime, Fréjus, Lorgues, Salernes),
 * constaté le 27/08/2026 en croisant les liens internes et les routes
 * réellement générées.
 */
export function hasLocalPage(tradeKey, cityKey) {
  const city = localCities[cityKey]
  if (!city) return false
  return (city.trades || Object.keys(localTrades)).includes(tradeKey)
}

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
