/* -------------------------------------------------------------------------
   Données du site PCE — Lorgues (83)
   Tout le contenu éditorial est centralisé ici : les pages ne sont que des
   gabarits qui consomment ces objets.
---------------------------------------------------------------------------*/

export const company = {
  name: 'PCE',
  signature: 'Depuis 2005',
  /* Signature dorée reprise dans les héros */
  expertise: "L’expertise PCE à votre service",
  /* Baseline du pied de page */
  tagline: 'La qualité au service de votre confort !',
  baseline:
    "Plomberie · Chauffage · Climatisation · Électricité · Piscine · Traitement de l’eau · Dépannage dans tout le Var",
  /* Ligne de métiers reprise dans le logo */
  baselineShort: 'Plomberie · Chauffage · Électricité · Piscine — Tout corps d’état',
  since: 2005,
  phone: '06 60 12 90 52',
  phoneHref: 'tel:+33660129052',
  hoursShort: 'Du lundi au vendredi · 7h30 – 18h00',
  /* Nom de domaine officiel — source unique pour les liens canoniques et
     les métadonnées de partage. L'e-mail est une boîte distincte du domaine. */
  domain: 'pcevar.fr',
  url: 'https://pcevar.fr',
  email: 'teamtex@hotmail.fr',
  /* Carte de visite numérique (Wavecnct) du dirigeant, qui regroupe tous les
     réseaux/contacts en un seul lien. Utilisée par l'icône « Tous nos
     liens » du footer (aucune image QR sur le site). */
  socialHub: 'https://app.wavecnct.com/fr-CA/yves.texier.ryor',
  address: {
    street: '37 Clos de Lorgues',
    street2: 'Rue Saint Honorat',
    zip: '83510',
    city: 'Lorgues',
    region: 'Var, Provence',
  },
  hours: [
    { d: 'Lundi — Vendredi', h: '7h30 – 18h00' },
    { d: 'Samedi', h: 'Sur rendez-vous' },
    { d: 'Dimanche', h: 'Urgences uniquement' },
  ],
  areas: ['Lorgues', 'Dracénie', 'Golfe de Saint-Tropez'],
  certifications: ['Garantie décennale'],
}

/* ----------------------------------------------------------- Informations légales --
   Identité juridique de la société exploitant PCE, pour les mentions
   légales, la politique de confidentialité et les données structurées
   Organization/LocalBusiness. Le siège social (Coubron, 93) est l'adresse
   administrative de la SAS ; l'adresse de Lorgues (83) est le lieu
   d'exploitation où l'activité est réellement exercée — les deux doivent
   apparaître dans les mentions légales.
---------------------------------------------------------------------------*/
export const legal = {
  denomination: 'TEAM TEX',
  nomCommercial: 'PCE',
  formeJuridique: 'SAS, société par actions simplifiée',
  capital: '5 000,00 €',
  siegeSocial: {
    street: '33 Rue des Grands Champs',
    zip: '93470',
    city: 'Coubron',
  },
  siren: '482 121 498',
  siret: '482 121 498 00026',
  rcs: '482 121 498 R.C.S. Bobigny',
  dateImmatriculation: '12/05/2005',
  tva: 'FR28482121498',
  directeurPublication: 'M. Yves Texier, Président',
  activites: 'Plomberie, chauffage, électricité',
  hebergeur: {
    nom: 'Hostinger International Ltd',
    adresse: '61 Lordou Vironos Street, Larnaca 6023, Chypre',
    site: 'https://www.hostinger.fr',
    siteLabel: 'www.hostinger.fr',
  },
}

/* ---------------------------------------------------------------- Photos --
   Il n'existe plus aucun générateur d'image externe dans ce projet : tout
   emplacement photo doit être assigné à une vraie photo du client dans
   src/data/photos.js (`clientPhotos`). Si un emplacement est un jour
   utilisé sans y être assigné, le composant <Photo /> (src/components/
   Photo.jsx) affiche le logo PCE local — jamais une image tierce.

/* ------------------------------------------------------------ Navigation -*/
export const trades = [
  { label: 'Plomberie', to: '/plomberie' },
  { label: 'Chauffage', to: '/chauffage' },
  { label: 'Climatisation', to: '/climatisation' },
  { label: 'Électricité', to: '/electricite' },
  { label: 'Piscine', to: '/piscine' },
  { label: "Traitement de l’eau", to: '/traitement-de-l-eau' },
  { label: 'VMC', to: '/vmc' },
]

/* Navigation à plat, conforme aux maquettes de référence. */
/* En-tête : 5 entrées à plat + les 7 métiers regroupés sous le déclencheur
   « Nos services » (voir Header.jsx). Les 12 entrées à plat ne tenaient à
   aucune largeur d'écran dans le conteneur du site (max-w-[1280px]) — measuré
   à 1665px de large nécessaire, quel que soit le seuil de bascule choisi. */
export const navFlat = [
  { label: 'Accueil', to: '/' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'Conseils', to: '/conseils' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
]

export const navServices = [
  { label: 'Plomberie', to: '/plomberie' },
  { label: 'Chauffage', to: '/chauffage' },
  { label: 'Climatisation', to: '/climatisation' },
  { label: 'Électricité', to: '/electricite' },
  { label: 'Piscine', to: '/piscine' },
  { label: "Traitement de l’eau", to: '/traitement-de-l-eau' },
  { label: 'VMC', to: '/vmc' },
  { label: 'Dépannage', to: '/depannage' },
]

/* Section « Pourquoi choisir PCE ? » de la page d'accueil. */
export const whyChooseUs = [
  { icon: 'award', title: "20 ans d’expérience", text: 'Depuis 2005, PCE intervient à Lorgues et dans tout le Var pour vos travaux de plomberie, chauffage, climatisation, électricité et piscine.' },
  { icon: 'mapPin', title: 'Entreprise locale', text: 'Basée à Lorgues, nous intervenons rapidement dans toute la Dracénie et le Golfe de Saint-Tropez.' },
  { icon: 'clipboard', title: 'Devis gratuit', text: 'Étude personnalisée et devis détaillé, sans engagement.' },
  { icon: 'truck', title: 'Intervention rapide', text: 'Disponibles du lundi au vendredi, 7h30-18h00, nous intervenons dans un rayon de 50 km autour de Lorgues.' },
  { icon: 'wrench', title: 'Matériel professionnel', text: 'Nous travaillons avec des marques reconnues pour garantir la qualité et la durabilité de nos installations.' },
  { icon: 'shieldCheck', title: 'Garantie des travaux', text: 'Tous nos chantiers sont couverts par la garantie décennale.' },
]

/* Bandeau de réassurance affiché sous chaque héros. La grille de
   `ReassuranceBar` suit la longueur de cette liste : y ajouter ou en
   retirer un argument sans ajuster les colonnes laisserait un vide. */
export const reassurance = [
  { icon: 'award', title: '+ de 20 ans d’expérience', label: 'Un savoir-faire reconnu' },
  { icon: 'mapPin', title: 'Entreprise locale & réactive', label: 'Basée à Lorgues, interventions rapides' },
  { icon: 'settings', title: 'Matériel de qualité, marques reconnues', label: 'Produits performants' },
  { icon: 'shieldCheck', title: 'Garantie décennale & assurance RC Pro', label: 'Votre sérénité, notre priorité' },
  { icon: 'headset', title: 'Service après-vente & entretien', label: 'Un suivi durable de toutes vos installations' },
  { icon: 'fileText', title: 'Devis gratuit & sans engagement', label: 'Réponse rapide et personnalisée' },
]

/* --------------------------------------------------- Barre de garanties --*/
export const guarantees = [
  { icon: 'truck', label: 'Intervention rapide dans tout le Var' },
  { icon: 'award', label: 'Travail soigné et durable' },
  { icon: 'fileText', label: 'Devis gratuit et personnalisé' },
  { icon: 'headset', label: 'Service après-vente à votre écoute' },
]

/* ------------------------------------------------------------ TVA 5,5 % --*/
export const tvaCard = {
  title: 'TVA réduite à 5,5 %*',
  text: "Sur les travaux d’amélioration énergétique réalisés dans un logement achevé depuis plus de deux ans, la TVA s’applique au taux réduit de 5,5 % au lieu de 20 %. PCE établit l’attestation, la fait signer et applique le taux réduit directement sur votre devis : vous n’avez aucune démarche à effectuer.",
  note: "* Taux réduit applicable sous conditions (article 278-0 bis A du CGI) : logement à usage d’habitation achevé depuis plus de deux ans, matériel et pose facturés par la même entreprise, attestation simplifiée signée avant le début des travaux. Selon la législation en vigueur.",
}

/* ================================================================ MÉTIERS =*/
export const services = {
  /* ------------------------------------------------------------ PLOMBERIE */
  plomberie: {
    slug: 'plomberie',
    title: 'Plomberie',
    navLabel: 'Plomberie',
    icon: 'droplet',
    tagline: 'Des solutions durables pour votre confort au quotidien.',
    intro:
      "Depuis 2005, PCE prend en charge l’ensemble de vos travaux de plomberie, de la création d’un réseau neuf à la rénovation complète d’une salle de bains. Recherche de fuite non destructive, remplacement de chauffe-eau, traitement de l’eau : un seul interlocuteur, du premier relevé jusqu’à la mise en service.",
    card: "Réseaux neufs, salles de bains, recherche de fuite et traitement de l’eau.",
    metaDescription: "Plombier à Lorgues (83) : réseaux neufs, rénovation de salle de bains, recherche de fuite non destructive et chauffe-eau. Devis gratuit, intervention rapide dans le Var.",
    hero: { tags: 'bathroom', lock: 231 },

    prestations: [
      { icon: 'wrench', title: 'Installation sanitaire', label: 'Réseaux neufs et rénovation' },
      { icon: 'shower', title: 'Salle de bains', label: 'Rénovation clé en main' },
      { icon: 'search', title: 'Recherche de fuite', label: 'Détection non destructive' },
      { icon: 'flame', title: 'Chauffe-eau', label: 'Ballons et thermodynamique' },
      { icon: 'filter', title: "Traitement de l’eau", label: 'Adoucisseur et filtration' },
      { icon: 'gauge', title: 'Débit et pression', label: 'Réglage et mise aux normes' },
    ],

    expertise: {
      eyebrow: 'Notre savoir-faire',
      heading: 'De Paris au bâti varois, vingt ans de plomberie',
      photo: { tags: 'plumbing', lock: 232 },
      paragraphs: [
        "Avant le Var, il y a eu Paris. L’entreprise s’est construite sur une forte expérience du chauffage en région parisienne, puis sur l’apprentissage du métier dans sa forme la plus exigeante : le cuivre cintré et brasé, le zinc, le plomb des réseaux anciens. Ce sont des chantiers de rénovation d’immeubles haussmanniens, menés avec des architectes, qui ont formé notre façon de travailler.",
        "La plomberie est le métier fondateur de PCE. Depuis 2005, nous intervenons sur un bâti local très particulier : bastides en pierre aux murs de soixante centimètres, mas rénovés par tranches successives, villas des années 1980 dont les réseaux en cuivre arrivent en fin de vie, constructions neuves de la plaine de l’Argens. Chaque typologie a ses pièges, et deux décennies de chantiers entre Lorgues et le Golfe nous ont appris à les reconnaître avant même d’ouvrir une saignée.",
        "Notre parti pris est simple : nous ne posons que du matériel que nous saurons réparer dans dix ans. Multicouche à sertir pour les réseaux encastrés, laiton sur les points sensibles, robinetterie de marques distribuées en France dont les pièces détachées restent disponibles. Chaque installation est repérée, chaque vanne d’arrêt reste accessible, et chaque chantier est livré avec un plan de réseau que vous conservez.",
        "L’eau du secteur est parmi les plus calcaires de France : nous relevons couramment plus de 30 °f autour de Lorgues. C’est la première cause de panne sur les chauffe-eau, les mitigeurs thermostatiques et les électroménagers. Nous mesurons donc systématiquement la qualité de votre eau avant de proposer un adoucisseur ou une solution de filtration adaptée à votre consommation réelle.",
      ],
      points: [
        'Réseaux repérés et plan remis en fin de chantier',
        "Vannes d'arrêt toujours laissées accessibles",
        "Dureté de l'eau mesurée sur place, avant devis",
        'Matériel choisi pour être réparable, pas jetable',
      ],
    },

    process: [
      { title: 'Le premier échange', text: "Vous nous décrivez la situation par téléphone. Nous posons les questions utiles et fixons une visite, généralement sous quarante-huit heures." },
      { title: 'La visite technique', text: "Relevé sur place, mesure de la dureté et de la pression, contrôle de l’état des réseaux existants. Gratuite et sans engagement." },
      { title: 'Le devis détaillé', text: "Poste par poste, avec les références exactes du matériel et le taux de TVA applicable. Valable trois mois, sans révision de prix." },
      { title: 'Le chantier', text: "Dates annoncées et tenues, sols protégés, gravats évacués. Nous laissons le chantier propre chaque soir, y compris sur les rénovations lourdes." },
      { title: 'La mise en service', text: "Essais en votre présence, explication des organes de coupe, remise du plan et des notices. Nous restons joignables après la facture." },
    ],

    info: {
      heading: "Pourquoi traiter l’eau de votre logement ?",
      lead: "L’eau de Lorgues et de la Dracénie dépasse fréquemment 30 °f de dureté. Un adoucisseur correctement dimensionné change le quotidien et protège durablement vos équipements.",
      bullets: [
        'Fini les dépôts de calcaire sur la robinetterie, les parois de douche et le carrelage.',
        'Une durée de vie nettement allongée pour le chauffe-eau, le lave-linge et le lave-vaisselle.',
        "Des économies sur les produits d’entretien et les détergents.",
        'Une eau plus douce pour la peau, les cheveux et la tenue du linge.',
        'Un entretien minimal selon la solution retenue.',
      ],
      link: { to: '/traitement-de-l-eau', label: "Découvrir nos adoucisseurs et le traitement de l’eau" },
    },

    faq: [
      { q: 'Intervenez-vous en urgence pour une fuite ?', a: "Oui, sept jours sur sept. Un dégât des eaux ne peut pas attendre le lundi : appelez-nous, nous vous donnons un créneau dès l’appel et nous vous indiquons par téléphone comment couper l’arrivée d’eau en attendant." },
      { q: 'Comment se déroule une recherche de fuite ?', a: "Nous travaillons sans casser : gaz traceur, caméra thermique, corrélation acoustique et inspection par caméra selon la configuration. Le point de fuite est localisé au centimètre, puis nous vous proposons la réparation dans la foulée." },
      { q: 'Quel délai pour une salle de bains complète ?', a: "Comptez de dix à quinze jours ouvrés selon l’ampleur de la dépose et le carrelage retenu. Nous coordonnons nous-mêmes le carreleur et l’électricien, ce qui évite les temps morts entre corps de métier." },
      { q: 'Faut-il traiter son eau dans le Var ?', a: "Dans notre secteur, très souvent oui. Mais nous mesurons toujours la qualité de l’eau avant de vous le dire : sur certains réseaux communaux, un simple filtre en tête d’installation suffit et coûte bien moins cher." },
      { q: 'Vous occupez-vous des démarches de TVA réduite ?', a: "Oui. Nous vérifions votre éligibilité, nous préparons l’attestation simplifiée et nous appliquons directement le taux de 5,5 % sur le devis. Vous n’avez qu’une signature à apposer." },
    ],
  },

  /* ------------------------------------------------------------ CHAUFFAGE */
  chauffage: {
    slug: 'chauffage',
    title: 'Chauffage',
    navLabel: 'Chauffage',
    icon: 'flame',
    tagline: 'Des solutions performantes et économiques.',
    intro:
      "Nous dimensionnons chaque installation en fonction de votre logement, de son isolation et du climat provençal — jamais sur catalogue. Étude préalable, choix du matériel, pose et entretien annuel : PCE vous accompagne sur toute la durée de vie de votre système de chauffage.",
    card: "Pompes à chaleur, chaudières et installations gaz, plancher chauffant et entretien.",
    metaDescription: "Chauffagiste à Lorgues (83) : pompe à chaleur, chaudière à gaz à condensation, plancher chauffant et entretien annuel. Étude thermique et devis gratuit dans le Var.",
    hero: { tags: 'airconditioner', lock: 412 },

    /* Rangée de bénéfices, reprise du support « PCE, votre expert chauffage & gaz » */
    benefits: [
      { icon: 'euro', title: "Économies d’énergie", label: 'Des équipements performants pour réduire vos factures de chauffage.' },
      { icon: 'home', title: 'Confort optimal', label: 'Une chaleur homogène et constante pour votre bien-être au quotidien.' },
      { icon: 'shieldCheck', title: 'Sécurité assurée', label: 'Des installations fiables et conformes aux normes en vigueur.' },
      { icon: 'handshake', title: 'Aides & subventions', label: 'Nous vous accompagnons dans vos démarches pour bénéficier des aides.' },
    ],

    /* Checklist « Nos solutions de chauffage » — pas de chaudière fioul :
       l'installation de nouvelles chaudières fioul est interdite depuis 2022. */
    solutions: [
      'Chaudières gaz à condensation',
      'Pompes à chaleur air/eau et air/air',
      'Planchers chauffants & radiateurs',
      'Régulations & thermostats connectés',
      'Chauffe-eau thermodynamiques et ballons',
      'Entretien annuel & contrats de maintenance',
      'Dépannage toutes marques',
    ],

    /* Marques installées — pas de logo officiel reproduit (droits fabricants) */
    brands: [
      {
        name: 'Frisquet',
        color: 'text-[#E2001A]',
        text: "L’excellence française depuis 1868.",
        bullets: ['Chaudières gaz à haute performance', 'Fiabilité, durabilité et rendement', 'Fabrication française'],
      },
      {
        name: 'elm.leblanc',
        color: 'text-navy-900',
        swatch: 'bg-[#F5A623]',
        text: 'La référence du confort.',
        bullets: ['Chaudières gaz innovantes', 'Technologies performantes et économiques', 'Confort et sécurité au quotidien'],
      },
      {
        name: 'Chappée',
        color: 'text-[#C8102E]',
        text: "L’efficacité au service de votre confort.",
        bullets: ['Chaudières gaz, gammes complètes', 'Solutions adaptées à tous les besoins', 'Robustesse et performance'],
      },
    ],

    /* Chips « aides financières » — MaPrimeRénov' et la CEE ne sont plus
       mobilisables pour une chaudière à gaz depuis 2023-2024 (voir `faq`
       plus bas) : chaque chip porte donc son propre équipement cible, pour
       qu'aucun visiteur ne lise ces aides comme applicables au gaz. */
    aids: [
      { icon: 'euro', label: "MaPrimeRénov’", detail: 'Pompe à chaleur' },
      { icon: 'leaf', label: 'CEE', detail: 'Pompe à chaleur' },
      { icon: 'checkCircle', label: 'TVA 5,5 %', detail: 'Tous travaux' },
    ],

    prestations: [
      { icon: 'leaf', title: 'Pompe à chaleur', label: 'Air/eau et air/air, réversible' },
      { icon: 'flame', title: 'Chaudière à gaz', label: 'Condensation haute performance' },
      { icon: 'pipe', title: 'Installation de gaz', label: 'Création et mise en conformité' },
      { icon: 'tank', title: 'Chauffe-eau et ballons', label: 'Thermodynamiques et gaz' },
      { icon: 'radiator', title: 'Émetteurs', label: 'Radiateurs et plancher chauffant' },
      { icon: 'settings', title: 'Entretien et dépannage', label: 'Contrat et attestation' },
    ],

    expertise: {
      eyebrow: 'Notre savoir-faire',
      heading: 'Le chauffage pensé pour le climat provençal',
      photo: { tags: 'tools', lock: 413 },
      paragraphs: [
        "Chauffer une maison dans le Var n’a rien à voir avec chauffer une maison en Bourgogne. Nos hivers comptent peu de journées sous zéro, mais nos bastides en pierre ont une inertie considérable et nos étés imposent de penser le rafraîchissement dès la conception. C’est cette lecture locale qui guide chacune de nos préconisations depuis 2005.",
        "Concrètement, nous refusons de dimensionner une pompe à chaleur au ratio. Nous relevons les surfaces, l’orientation, la nature des murs, l’état des menuiseries et les émetteurs existants, puis nous calculons la puissance réellement nécessaire. Une machine surdimensionnée coûte plus cher à l’achat, se met en défaut par cycles courts et s’use prématurément : c’est l’erreur que nous voyons le plus souvent sur les installations que nous reprenons.",
        "Nous privilégions les fabricants disposant d’un réseau technique en région PACA, afin qu’une pièce sous garantie arrive en quarante-huit heures et non en trois semaines. Et parce qu’une installation ne vaut que par son suivi, nous assurons nous-mêmes l’entretien annuel, avec relevé des performances et attestation d’entretien remise à chaque passage.",
      ],
      points: [
        'Bilan thermique réalisé avant toute préconisation',
        "Puissance calculée, jamais estimée au ratio",
        'Marques disposant d’un service technique en PACA',
        'Entretien annuel assuré par la même équipe',
      ],
    },

    process: [
      { title: "L’étude du logement", text: "Relevé des surfaces, de l’isolation, de l’orientation et des émetteurs en place. C’est cette étape qui détermine la puissance et le type de machine." },
      { title: 'Le comparatif chiffré', text: "Nous présentons deux à trois solutions avec, pour chacune, le coût d’installation, la consommation annuelle estimée et les aides mobilisables." },
      { title: 'Le montage des aides', text: "Pour une pompe à chaleur : MaPrimeRénov’, certificats d’économie d’énergie, éco-PTZ — nous constituons le dossier avec vous et déduisons ce qui peut l’être du devis. Pour une chaudière à gaz, seule la TVA à 5,5 % et l’éco-PTZ restent mobilisables." },
      { title: "L’installation", text: "Dépose de l’ancien système, pose, raccordements hydrauliques et frigorifiques, mise en service et équilibrage des émetteurs." },
      { title: 'Le suivi dans le temps', text: "Entretien annuel, relevé des performances, attestation remise à chaque passage et intervention prioritaire en cas de panne." },
    ],

    info: {
      heading: 'Pourquoi choisir une pompe à chaleur ?',
      lead: "Sous le climat de la Dracénie, la pompe à chaleur est la solution la plus rentable du marché : les températures extérieures restent favorables à son rendement presque toute l’année.",
      bullets: [
        "Jusqu’à 75 % de l’énergie restituée est puisée gratuitement dans l’air extérieur.",
        "Une réduction immédiate et importante de votre consommation d’énergie.",
        'Chauffage en hiver et rafraîchissement en été avec un seul appareil (selon modèle).',
        'Une valorisation nette de votre logement à la revente comme à la location.',
        'Plus aucune cuve, aucune livraison de combustible, aucun ramonage.',
      ],
    },

    faq: [
      { q: "Une pompe à chaleur fonctionne-t-elle vraiment l’hiver ici ?", a: "Parfaitement. Dans la Dracénie, la température descend rarement sous −3 °C et les machines actuelles conservent un excellent rendement jusqu’à −10 °C. C’est justement l’un des climats les plus favorables de France pour cette technologie." },
      { q: 'Puis-je garder mes radiateurs existants ?', a: "Souvent oui, à condition qu’ils soient suffisamment dimensionnés. Nous le vérifions pendant l’étude. Si un ou deux radiateurs sont trop justes, il est presque toujours moins coûteux de les remplacer que de renoncer à la pompe à chaleur." },
      { q: "L’entretien annuel est-il obligatoire ?", a: "Oui pour les pompes à chaleur de plus de 4 kW et pour les chaudières gaz. Au-delà de l’obligation, c’est ce qui préserve le rendement et la garantie constructeur. Nous proposons un contrat avec passage programmé et intervention prioritaire." },
      { q: 'Le groupe extérieur est-il bruyant ?', a: "Les machines récentes tournent autour de 35 à 45 dB à quelques mètres. L’essentiel se joue à l’implantation : nous étudions la distance aux chambres, aux voisins et aux murs réfléchissants avant de fixer l’emplacement." },
      { q: 'Quelles aides puis-je obtenir ?', a: "Pour une pompe à chaleur, selon vos revenus : MaPrimeRénov’, prime CEE, TVA à 5,5 % et éco-PTZ. Pour une chaudière à gaz, MaPrimeRénov’ et la prime CEE ne sont plus mobilisables depuis 2023-2024 : seules la TVA à 5,5 % et l’éco-PTZ restent disponibles. Nous chiffrons systématiquement le reste à charge réel sur le devis, aides déduites." },
    ],
  },

  /* -------------------------------------------------------- CLIMATISATION */
  climatisation: {
    slug: 'climatisation',
    title: 'Climatisation',
    navLabel: 'Climatisation',
    icon: 'snowflake',
    tagline: "Fraîcheur l’été, confort l’hiver.",
    intro:
      "C’est en nous installant dans le Var que nous avons ajouté la climatisation à nos métiers, pour répondre à une demande que le climat local rend incontournable. Rafraîchir sans faire de bruit ni défigurer une façade, c’est tout l’enjeu d’une bonne installation. Nous étudions l’implantation des unités, l’acoustique et le tracé des liaisons frigorifiques avant de poser, puis nous assurons l’entretien réglementaire de votre équipement.",
    card: 'Mono-split, multi-split, gainable et entretien des unités.',
    metaDescription: "Climatisation à Lorgues (83) : mono-split, multi-split, gainable et entretien réglementaire. Pose discrète et silencieuse, devis gratuit dans tout le Var.",
    hero: { tags: 'airconditioner', lock: 517 },

    /* ------------------------------------------------------------------
       Contenus de la page /climatisation refondue, sur le même principe
       que `piscine.page` : regroupés ici plutôt qu'en dur dans le JSX.
    ------------------------------------------------------------------ */
    page: {
      h1: ['Climatisation', 'Confort, performance', "et économies d'énergie"],
      intro:
        'Installation, entretien et dépannage de systèmes de climatisation pour les particuliers dans tout le Var.',
      heroChecklist: [
        'Confort été comme hiver',
        "Économies d’énergie",
        'Matériel haut de gamme',
        'Installation soignée et durable',
        'Entretien & SAV réactif',
      ],

      /* ⚠️ PCE installe ces marques sans accord de distribution : ne jamais
         écrire « nos partenaires » — libellé validé « marques que nous
         installons et entretenons ». Logos pas encore fournis par le
         client : BrandLogo (mode `plain`, voir ServiceBrandsRow) affiche le
         nom de la marque en attendant les fichiers
         /img/marque-{daikin,mitsubishi,midea}.jpg — même convention que les
         logos piscine (.jpg + variantes .webp générées par
         scripts/optimize-images.js une fois les fichiers déposés). */
      brands: [
        {
          name: 'Daikin',
          src: '/img/marque-daikin.jpg',
          text: "L’inventeur du climatiseur réversible.",
          bullets: ['Fiabilité éprouvée', 'Niveaux sonores parmi les plus bas', 'Réseau de pièces détachées dense'],
        },
        {
          name: 'Mitsubishi Electric',
          src: '/img/marque-mitsubishi.jpg',
          text: 'La référence du silencieux.',
          bullets: ['Unités intérieures très discrètes', 'Rendements élevés à basse température', 'Longévité reconnue'],
        },
        {
          name: 'Midea',
          src: '/img/marque-midea.jpg',
          text: 'Le meilleur rapport performance-prix.',
          bullets: ['Gamme complète du split au gainable', 'Bon niveau d’équipement de série', 'Solution adaptée aux budgets serrés'],
        },
      ],
      /* Plus de bloc `trust` séparé : « + de 20 ans d'expérience »,
         « Garantie décennale » et « SAV réactif & local » font déjà partie
         des 6 arguments de reassurance du site (src/data/site.js,
         `reassurance`) — les répéter ici les aurait affichés deux fois. */

      reversible: {
        heading: ['Climatisation réversible', "Le confort toute l’année"],
        paragraphs: [
          "La climatisation réversible permet de chauffer en hiver et de rafraîchir en été tout en réalisant jusqu’à 70 % d’économies d’énergie par rapport à un système de chauffage classique.",
          "PCE vous accompagne dans le choix, l’installation et l’entretien de votre climatisation pour un confort optimal au quotidien.",
        ],
        photo: { lock: 518 },
        engagements: {
          title: 'Nos engagements',
          items: [
            'Étude personnalisée de vos besoins',
            'Matériel performant et silencieux',
            'Installation dans les règles de l’art',
            'Conseils pour optimiser votre consommation',
            'Entretien pour une durée de vie maximale',
          ],
        },
      },

      solutions: {
        title: 'Nos solutions climatisation',
        items: [
          {
            title: 'Climatisation murale',
            text: 'Solution discrète et esthétique, idéale pour une ou plusieurs pièces.',
            photo: '/img/climatisation-hero-split.jpg',
          },
          {
            title: 'Climatisation gainable',
            text: 'Intégration complète dans les combles ou faux-plafonds pour un confort invisible.',
            photo: '/img/climatisation-hero-gainable-grille.jpg',
          },
          {
            title: 'Console & plafonnier',
            text: 'Parfait pour les pièces à vivre, offrant puissance et diffusion homogène.',
            /* photo: pas de fichier valide pour l'instant (5 candidats
               évalués le 13/08/2026, tous écartés : générés par IA, hors
               sujet, ou marque concurrente visible) — repli sur icône en
               attendant. Voir `icon` sur SolutionPhoto. */
            photo: '/img/climatisation-console-plafonnier.jpg',
            icon: 'snowflake',
          },
          {
            title: 'Multi-split',
            text: 'Une seule unité extérieure pour plusieurs unités intérieures. Confort sur-mesure.',
            photo: '/img/climatisation-groupe-exterieur.jpg',
          },
          {
            title: 'Entretien & dépannage',
            text: 'Entretien complet, nettoyage, vérification des fluides et dépannage rapide.',
            photo: '/img/climatisation-prestations-groupe.jpg',
          },
        ],
      },

      argBand: [
        { icon: 'euro', title: "Économies d’énergie", label: 'Consommation maîtrisée grâce à des équipements performants et économes.' },
        { icon: 'leaf', title: 'Confort optimal', label: 'Température homogène, air sain, régulation précise et silencieuse.' },
        { icon: 'home', title: 'Valorisation de votre bien', label: 'Une climatisation bien installée augmente le confort et la valeur de votre habitation.' },
        { icon: 'snowflake', title: 'Fonction réversible', label: 'Chauffe en hiver, rafraîchit en été : une solution 2-en-1 pour un confort toute l’année.' },
      ],

      /* ⚠️ La pose d'une climatisation seule (PAC air/air) est exclue du
         parcours d'aides MaPrimeRénov'/CEE depuis le 1er janvier 2025 :
         texte volontairement conditionnel, aucun badge d'aide affiché. */
      aids: {
        heading: 'Aides & avantages',
        text: "Le remplacement d’une climatisation seule ne bénéficie plus des aides MaPrimeRénov’ ni des CEE depuis le 1ᵉʳ janvier 2025. Ces dispositifs restent mobilisables lorsque le projet inclut une pompe à chaleur air/eau : nous étudions votre éligibilité au cas par cas.",
      },

      zone: {
        heading: "Notre zone d’intervention",
        text: 'Nous intervenons dans tout le Var, de Lorgues au Golfe de Saint-Tropez et toutes les communes alentour.',
      },
    },

    /* Rangée de bénéfices, reprise des supports de communication PCE */
    benefits: [
      { icon: 'snowflake', title: 'Confort', label: 'Une température idéale été comme hiver' },
      { icon: 'leaf', title: 'Économie', label: 'Matériel performant et économe en énergie' },
      { icon: 'settings', title: 'Silence', label: 'Des appareils discrets et performants' },
      { icon: 'shieldCheck', title: 'Fiabilité', label: 'Matériel de qualité, installé par des pros' },
    ],

    prestations: [
      { icon: 'acUnit', title: 'Climatisation monosplit', label: 'Une pièce à traiter' },
      { icon: 'layers', title: 'Climatisation multisplit', label: 'Plusieurs unités intérieures' },
      { icon: 'settings', title: 'Entretien et maintenance', label: 'Nettoyage et contrôle du fluide' },
      { icon: 'wrench', title: 'Dépannage toutes marques', label: 'Diagnostic et réparation' },
      { icon: 'search', title: 'Conseil et étude', label: 'Dimensionnement sur mesure' },
      { icon: 'snowflake', title: 'Gainable', label: 'Diffusion invisible au plafond' },
    ],

    expertise: {
      eyebrow: 'Notre savoir-faire',
      heading: "La climatisation, un métier né du climat varois",
      photo: { tags: 'livingroom', lock: 518 },
      paragraphs: [
        "La climatisation n’était pas au programme. C’est l’installation dans le Var qui l’a imposée : des étés qui s’allongent, des bastides en pierre qui emmagasinent la chaleur, une clientèle qui demandait à rafraîchir des maisons conçues pour l’inverse. Le chauffage, nous le connaissions déjà — c’est le métier avec lequel l’entreprise s’est construite en région parisienne. La climatisation, nous sommes allés la chercher, ici, parce que le terrain la réclamait.",
        "Détenteurs de l’attestation de capacité à la manipulation des fluides frigorigènes, nous posons des climatisations dans le Var depuis 2011, année où nous avons passé la qualification pour répondre à cette demande, principalement du matériel Daikin, Mitsubishi Electric et Midea, choisi pour sa fiabilité et la disponibilité des pièces détachées dans notre secteur. Avec le temps, nous avons développé une conviction : une bonne installation, c’est celle qu’on oublie. Ni ronronnement dans la chambre, ni groupe extérieur planté au milieu d’une façade en pierre, ni goulotte plastique qui court le long d’un mur.",
        "Cela demande du temps en amont. Nous étudions le tracé des liaisons pour les encastrer ou les dissimuler, nous calculons la distance acoustique aux pièces de nuit et aux limites de propriété, et nous intégrons le groupe extérieur derrière un claustra ou dans un renfoncement chaque fois que c’est possible. Sur les maisons de caractère de Lorgues, c’est souvent ce détail qui fait toute la différence.",
        "Techniquement, nous ne transigeons pas sur la mise sous vide et le contrôle d’étanchéité : ce sont les deux opérations que les poses bâclées suppriment, et la cause quasi systématique des pannes qui surviennent au bout de deux étés. Nous laissons également un accès de maintenance sur chaque unité, pour que l’entretien annuel ne se transforme pas en démontage.",
      ],
      points: [
        'Attestation de capacité fluides frigorigènes',
        'Étude acoustique avant implantation du groupe',
        'Mise sous vide et contrôle d’étanchéité systématiques',
        'Accès de maintenance prévu sur chaque unité',
      ],
    },

    process: [
      { title: 'La visite des pièces', text: "Volumes, orientation, apports solaires, nombre d’occupants : nous calculons les frigories réellement nécessaires, pièce par pièce." },
      { title: "Le choix de l’implantation", text: "Position des unités intérieures, tracé des liaisons, emplacement du groupe extérieur — validé avec vous avant toute commande." },
      { title: 'Le devis et la commande', text: "Matériel nommément désigné (Daikin, Mitsubishi Electric, Midea selon les projets), puissance, classe énergétique et niveau sonore indiqués noir sur blanc." },
      { title: 'La pose', text: "Percements soignés, liaisons encastrées ou dissimulées, tirage au vide, charge en fluide et contrôle d’étanchéité." },
      { title: 'La prise en main', text: "Réglages, explication de la télécommande et de l’application, conseils d’usage pour ne pas surconsommer." },
    ],

    info: {
      heading: 'Bien choisir sa climatisation',
      lead: "Le confort et la facture ne dépendent pas de la marque, mais du dimensionnement et de la qualité de pose. Voici ce que nous vérifions systématiquement.",
      bullets: [
        'Un dimensionnement juste garantit le confort et évite la surconsommation.',
        "Une climatisation moderne consomme trois à quatre fois moins qu’un radiateur électrique.",
        "La qualité de l’air intérieur est améliorée par la filtration des unités.",
        'En mode réversible, elle chauffe efficacement pendant les mi-saisons.',
        'Un entretien régulier conditionne la performance et la longévité.',
      ],
    },

    faq: [
      { q: 'Puis-je faire poser une climatisation moi-même ?', a: "Non : la mise en service implique la manipulation de fluides frigorigènes, réservée par la loi aux détenteurs d’une attestation de capacité. Une pose non conforme annule par ailleurs la garantie du fabricant." },
      { q: 'Quelle différence entre monosplit et multisplit ?', a: "Le monosplit relie un groupe extérieur à une seule unité intérieure. Le multisplit permet d’en raccorder deux à cinq sur un seul groupe : une façade dégagée, un seul point d’alimentation, mais une puissance à répartir avec soin." },
      { q: 'Le gainable est-il envisageable en rénovation ?', a: "Oui dès qu’il existe des combles accessibles ou un faux plafond. Le résultat est très discret : seules des grilles linéaires restent visibles. Nous étudions la faisabilité pendant la visite technique." },
      { q: 'À quelle fréquence entretenir sa climatisation ?', a: "Un nettoyage des filtres tous les deux à trois mois d’usage, et une visite professionnelle annuelle. Le contrôle d’étanchéité est obligatoire dès que la charge en fluide dépasse le seuil réglementaire." },
      { q: 'Peut-on climatiser une maison en pierre ?', a: "Tout à fait, et l’inertie des murs joue même en votre faveur. La difficulté est le passage des liaisons : c’est précisément le genre de configuration sur lequel nous travaillons chaque semaine dans le Var." },
    ],
  },

  /* ---------------------------------------------------------- ÉLECTRICITÉ */
  electricite: {
    slug: 'electricite',
    title: 'Électricité',
    navLabel: 'Électricité',
    icon: 'bolt',
    tagline: 'Sécurité, performance et conformité.',
    intro:
      "Tableau vétuste, disjoncteur qui saute, projet d’extension ou borne de recharge : nous reprenons votre installation électrique dans le respect de la norme NF C 15-100. Chaque chantier est repéré, étiqueté et livré avec un schéma de tableau lisible par n’importe quel électricien après nous.",
    card: 'Tableaux, mise aux normes NF C 15-100, dépannage et bornes de recharge.',
    metaDescription: "Électricien à Lorgues (83) : tableaux électriques, mise aux normes NF C 15-100, bornes de recharge et dépannage. Circuits étiquetés, devis gratuit dans le Var.",
    hero: { tags: 'electricity', lock: 628 },

    prestations: [
      { icon: 'panel', title: 'Tableaux électriques', label: 'Remplacement et repérage' },
      { icon: 'shieldCheck', title: 'Mise aux normes', label: 'NF C 15-100' },
      { icon: 'evCharge', title: 'Bornes de recharge', label: 'Véhicule électrique' },
      { icon: 'lightbulb', title: 'Éclairage', label: 'Intérieur et extérieur' },
      { icon: 'search', title: 'Dépannage électrique', label: 'Recherche de panne' },
      { icon: 'bolt', title: 'Protection', label: 'Différentiels et parafoudre' },
    ],

    expertise: {
      eyebrow: 'Notre savoir-faire',
      heading: 'Une installation lisible, sûre et prête pour vos usages',
      photo: { tags: 'electrician', lock: 629 },
      paragraphs: [
        "Nous avons intégré l’électricité à nos métiers en 2016, pour une raison simple : la moitié de nos chantiers de plomberie et de chauffage y touchait de toute façon. Plutôt que de sous-traiter, nous avons formé l’équipe. Aujourd’hui, une pompe à chaleur, une borne de recharge ou un local technique de piscine sont livrés par PCE de bout en bout, sans coordination hasardeuse entre deux entreprises.",
        "Le patrimoine électrique local est ancien. Beaucoup de villas de la Dracénie fonctionnent encore avec un tableau d’origine, sans différentiel 30 mA, parfois sans terre dans les pièces d’eau. Nous reprenons ces installations progressivement lorsque le budget l’impose, en traitant toujours la sécurité des personnes en priorité absolue.",
        "Notre signature, c’est le repérage. Chaque circuit est étiqueté, chaque tableau est livré avec son schéma sous pochette, chaque modification est reportée. Cela ne coûte rien de plus sur le devis, mais cela vous fait gagner une heure de recherche à chaque intervention future — y compris si un autre professionnel passe après nous.",
      ],
      points: [
        'Norme NF C 15-100 appliquée à la lettre',
        'Circuits étiquetés et schéma de tableau remis',
        'Sécurité des personnes traitée en priorité',
        'Installation dimensionnée pour vos usages futurs',
      ],
    },

    process: [
      { title: "L’état des lieux", text: "Ouverture du tableau, contrôle des protections, de la terre et des sections de conducteurs. Nous vous montrons ce que nous voyons." },
      { title: 'Le rapport et les priorités', text: "Nous distinguons ce qui relève de la sécurité immédiate, de la mise en conformité et du confort. Vous arbitrez en connaissance de cause." },
      { title: 'Le devis chiffré', text: "Chaque poste est détaillé, avec les marques d’appareillage (Schneider Electric, Legrand) et le nombre de points. Aucune ligne « divers »." },
      { title: 'Les travaux', text: "Coupures annoncées à l’avance et limitées, saignées rebouchées, poussières maîtrisées. Vous récupérez le courant chaque soir." },
      { title: 'La remise du dossier', text: "Schéma de tableau, étiquetage, essais des différentiels devant vous et explication du fonctionnement." },
    ],

    info: {
      heading: 'Pourquoi refaire son tableau électrique ?',
      lead: "Une installation antérieure à 1991 concentre l’essentiel des risques domestiques. Nous posons du matériel Schneider Electric et Legrand, reconnu pour sa fiabilité, et la remise à niveau est rapide, le plus souvent sans casser les murs.",
      bullets: [
        'Assurer la sécurité des occupants avec des différentiels 30 mA.',
        'Protéger vos appareils sensibles contre les surtensions et la foudre.',
        'Préparer votre installation aux nouveaux usages : clim, PAC, borne de recharge.',
        'Éviter les coupures et les surcharges liées à un tableau saturé.',
        'Être en conformité avec la norme NF C 15-100 en cas de vente ou de location.',
      ],
    },

    faq: [
      { q: 'Le parafoudre est-il obligatoire ?', a: "Il dépend de la localisation du bâtiment, du niveau d’exposition à la foudre et des exigences de la norme NF C 15-100. Dans le Var, il est très souvent recommandé pour protéger les équipements électroniques et les cartes de régulation." },
      { q: 'Faut-il tout casser pour une mise aux normes ?', a: "Rarement. Dans la majorité des cas, le remplacement du tableau, la création d’une liaison de terre et la reprise des circuits sensibles suffisent. Nous privilégions les passages existants, les plinthes et les combles." },
      { q: 'Combien de temps dure le remplacement d’un tableau ?', a: "Une journée pour un logement standard, deux si la terre est à créer ou si le comptage doit être déplacé. Le courant est rétabli le soir même dans tous les cas." },
      { q: 'Installez-vous les bornes de recharge pour voiture électrique ?', a: "Oui, en 3,7, 7,4 ou 11 kW selon votre véhicule et votre abonnement. Nous créons une ligne dédiée depuis le tableau avec protection différentielle adaptée et, si besoin, pilotage de la puissance pour éviter la disjonction." },
      { q: 'Intervenez-vous sur les pannes urgentes ?', a: "Oui, sept jours sur sept. Coupure générale, disjoncteur qui claque en boucle, odeur de brûlé au tableau : appelez immédiatement, ces symptômes ne doivent jamais attendre." },
    ],
  },

  /* -------------------------------------------------------------- PISCINE */
  piscine: {
    slug: 'piscine',
    title: 'Piscine',
    navLabel: 'Piscine',
    icon: 'waves',
    tagline: 'Profitez d’une eau propre, claire et sans contrainte.',
    intro:
      "Une eau limpide sans y passer ses week-ends, c’est d’abord une affaire de réglages et de bon matériel. PCE assure la mise en route, l’hivernage, la rénovation du local technique et l’automatisation complète de votre bassin, à Lorgues comme sur tout le Golfe de Saint-Tropez.",
    card: 'Filtration, traitement au sel, chauffage du bassin et automatisation.',
    metaDescription: "Piscinier à Lorgues (83) : filtration, traitement au sel, pompe à chaleur et automatisation de bassin. Diagnostic du local technique, devis gratuit dans le Var.",
    hero: { tags: 'swimmingpool', lock: 739 },

    /* ------------------------------------------------------------------
       Contenus de la page /piscine refondue. Regroupés ici plutôt qu'en
       dur dans le composant, pour rester modifiables sans toucher au JSX.
    ------------------------------------------------------------------ */
    page: {
      h1: ['Piscine', "Des bassins d'exception,", 'Un service complet'],
      intro:
        "De la conception à l’entretien, en passant par l’équipement et l’automatisation, PCE vous accompagne pour profiter pleinement de votre piscine tout au long de l’année dans tout le Var.",

      heroHighlights: [
        { icon: 'home', title: 'Construction', label: 'Sur mesure' },
        { icon: 'settings', title: 'Équipements', label: 'Haute performance' },
        { icon: 'waves', title: 'Entretien', label: 'Eau saine et limpide' },
        { icon: 'wrench', title: 'Dépannage', label: 'Intervention rapide' },
      ],

      prestations: {
        title: 'Nos prestations piscine',
        items: [
          'Construction de piscines béton & coque polyester',
          'Rénovation et modernisation de bassins',
          'Systèmes de filtration performants',
          'Pompes à chaleur & réchauffeurs',
          "Traitement de l'eau (sel, chlore, pH, redox…)",
          'Électrolyseurs au sel',
          'Volets roulants & couvertures',
          'Éclairages LED & ambiances',
          'Automatisation & domotique',
          'Entretien régulier & contrats maintenance',
          'Dépannage & recherche de fuites',
        ],
      },

      automatisation: {
        title: ["L’automatisation au service", 'de votre confort'],
        checks: [
          'Pilotage à distance de votre piscine',
          'Régulation automatique du pH et du désinfectant',
          'Gestion intelligente de la filtration',
          "Économies d'eau et d'énergie",
          'Alertes et suivi en temps réel',
        ],
        pictos: [
          { icon: 'gauge', label: ['Pompe', 'à vitesse variable'] },
          { icon: 'testTube', label: ['Régulation', 'pH & redox'] },
          { icon: 'salt', label: ['Électrolyseur', 'au sel'] },
          { icon: 'robot', label: ['Traitement', 'automatique'] },
        ],
      },

      /* Les visuels produit de la maquette sont des photos de catalogue
         fabricant, protégées : on ne les reprend pas. Ces fichiers seront
         fournis par le client à partir de matériel réellement installé —
         en attendant, BrandLogo affiche un cadre neutre. */
      equipements: {
        title: "Des équipements de qualité, pour une eau saine et économe",
        items: [
          {
            title: ['Filtration', 'haute performance'],
            photo: { lock: 741 },
            text: "Des filtres à sable ou à cartouche de dernière génération pour une eau parfaitement limpide.",
          },
          {
            title: ['Pompes', 'à vitesse variable'],
            photo: { lock: 742 },
            text: "Jusqu’à 80 % d’économies d’énergie par rapport à une pompe à vitesse fixe, grâce à une filtration adaptée à vos besoins.",
          },
          {
            title: ["Traitement de l’eau", 'nouvelle génération'],
            photo: { lock: 743 },
            text: "Électrolyse au sel, régulation automatique du pH et du redox pour une eau saine toute l’année.",
          },
          {
            title: ['Pompes', 'à chaleur'],
            photo: { lock: 744 },
            text: "Profitez d’une eau à la température idéale plus longtemps avec nos pompes à chaleur performantes et silencieuses.",
          },
        ],
      },

      entretien: {
        title: ['Entretien & maintenance', 'pour une piscine sans souci'],
        text: "Nous assurons l’entretien régulier de votre piscine pour garantir une eau propre, saine et équilibrée.",
        checks: [
          'Nettoyage',
          "Contrôle et analyse de l'eau",
          'Réglage des équipements',
          'Hivernage & remise en service',
        ],
      },

      accompagnement: {
        title: 'Un accompagnement sur mesure',
        items: [
          { icon: 'clipboard', title: 'Conseil', label: 'Étude personnalisée de votre projet' },
          { icon: 'shieldCheck', title: 'Qualité', label: 'Matériel fiable & durable' },
          { icon: 'headset', title: 'Sérénité', label: 'Service après-vente et suivi' },
          { icon: 'mapPin', title: 'Proximité', label: 'Entreprise locale à votre écoute' },
        ],
      },

      /* ⚠️ PCE installe ces marques sans accord de distribution : ne jamais
         écrire « nos partenaires ». Libellé validé par le client. */
      marques: {
        label: ['Les marques', 'que nous installons', 'et entretenons'],
        items: [
          { name: 'Hayward', src: '/img/marque-hayward.jpg' },
          { name: 'Zodiac', src: '/img/marque-zodiac.jpg' },
          { name: 'Fluidra', src: '/img/marque-fluidra.jpg' },
        ],
      },
    },

    prestations: [
      { icon: 'home', title: 'Création et rénovation', label: 'Bassin et plage technique' },
      { icon: 'panel', title: 'Local technique', label: 'Tuyauterie et coffret' },
      { icon: 'waves', title: 'Filtration et pompes', label: 'Débit variable' },
      { icon: 'thermometer', title: 'Chauffage de piscine', label: 'Pompe à chaleur dédiée' },
      { icon: 'salt', title: "Traitement de l’eau", label: 'Électrolyse au sel et pH' },
      { icon: 'robot', title: 'Automatisation', label: 'Sondes et pilotage à distance' },
    ],

    expertise: {
      eyebrow: 'Notre savoir-faire',
      heading: "Le local technique, c’est là que tout se joue",
      photo: { tags: 'pool', lock: 740 },
      paragraphs: [
        "PCE a ouvert son pôle piscine en 2020, en réponse à une demande devenue constante chez nos clients de Lorgues, du Plan-de-la-Tour et de Grimaud. Notre approche est celle d’un technicien de l’eau et de l’énergie, pas d’un simple revendeur de produits : nous traitons le bassin comme une installation hydraulique et électrique complète.",
        "Dans neuf cas sur dix, une eau qui vire ou une consommation de produits qui explose ne vient pas du bassin mais du local technique. Tuyauterie sous-dimensionnée, filtre saturé, pompe qui tourne trop peu ou trop fort, coffret électrique corrodé par l’humidité : nous commençons toujours par là. Un local repris proprement, avec des vannes repérées et un coffret étanche aux normes, règle la majorité des problèmes de saison.",
        "Nous poussons ensuite vers l’électrolyse au sel, la pompe à débit variable et la régulation automatique du pH — non par effet de mode, mais parce que le calcul est net : sur trois saisons, ces trois équipements se remboursent en électricité et en produits, tout en supprimant l’essentiel des corvées d’entretien.",
      ],
      points: [
        'Diagnostic complet du local technique avant tout devis',
        'Vannes repérées et coffret électrique étanche aux normes',
        'Consommation électrique de filtration mesurée',
        'Mise en route et hivernage assurés chaque saison',
      ],
    },

    process: [
      { title: 'Le diagnostic du bassin', text: "Analyse de l’eau, contrôle du débit, état du filtre, de la pompe et du coffret. Nous chiffrons aussi la consommation électrique actuelle." },
      { title: 'Les préconisations', text: "Traitement, filtration, chauffage, automatisation : nous hiérarchisons ce qui aura le plus d’effet sur votre confort et votre budget." },
      { title: 'Les travaux', text: "Reprise de la tuyauterie, pose des équipements, câblage du coffret et raccordement des sondes, hors saison de préférence." },
      { title: 'Les réglages', text: "Temps de filtration, consignes de pH et de désinfection, courbes de la pompe à vitesse variable, paramétrage de l’application." },
      { title: 'Le suivi de saison', text: "Mise en route au printemps, contrôles en été si vous le souhaitez, hivernage à l’automne. Un seul interlocuteur toute l’année." },
    ],

    columns: [
      {
        icon: 'salt',
        heading: 'Pourquoi passer au traitement au sel ?',
        bullets: [
          'Une eau douce et agréable, sans odeur de chlore.',
          'Plus confortable pour les yeux et pour la peau.',
          'Production automatique du désinfectant, en continu.',
          'Plus de bidons à transporter ni à stocker.',
          "Un coût de traitement sensiblement réduit sur la saison.",
        ],
      },
      {
        icon: 'gauge',
        heading: "Les avantages d’une pompe à débit variable",
        bullets: [
          "Jusqu’à 80 % d’économie d’électricité sur la filtration.",
          'Un fonctionnement nettement plus silencieux.',
          'Une filtration plus longue, donc une eau plus claire.',
          'Une durée de vie prolongée du moteur et du filtre.',
          'Un débit réglable selon vos besoins réels.',
        ],
      },
      {
        icon: 'robot',
        heading: 'Pourquoi automatiser votre piscine ?',
        bullets: [
          'Régulation automatique du pH et du désinfectant.',
          'Pilotage à distance depuis votre téléphone.',
          'Une eau stable et saine, même en votre absence.',
          'Moins de produits chimiques consommés.',
          'Plus de confort au quotidien, zéro corvée.',
        ],
      },
    ],

    faq: [
      { q: 'Quand faut-il hiverner sa piscine dans le Var ?', a: "Généralement de mi-novembre à mi-mars, lorsque l’eau descend durablement sous 12 °C. Dans notre région, l’hivernage actif — filtration réduite plutôt qu’arrêt complet — donne les meilleurs résultats et facilite la remise en route." },
      { q: 'Le sel abîme-t-il le bassin ?', a: "Non, à condition que le taux soit maîtrisé et que les pièces à sceller soient compatibles. Nous vérifions systématiquement l’échelle, les projecteurs et le liner avant de préconiser une électrolyse." },
      { q: 'Combien de temps dois-je filtrer par jour ?', a: "La règle usuelle est de diviser la température de l’eau par deux. Avec une pompe à vitesse variable, on filtre plus longtemps mais à faible régime, ce qui donne une eau plus claire pour moins d’électricité." },
      { q: 'Pouvez-vous chauffer une piscine existante ?', a: "Oui, par pompe à chaleur dédiée raccordée après le filtre. Nous vérifions le débit disponible, la place au local technique et l’alimentation électrique, puis nous dimensionnons selon le volume et l’usage souhaité." },
      { q: 'Faites-vous la recherche de fuite sur bassin ?', a: "Oui, sur le bassin comme sur les canalisations enterrées : test de perte, colorant, écoute électro-acoustique et caméra selon le cas. Nous localisons avant de casser quoi que ce soit." },
    ],
  },

  /* --------------------------------------------------- TRAITEMENT DE L'EAU */
  traitementEau: {
    slug: 'traitement-de-l-eau',
    title: "Traitement de l’eau",
    navLabel: "Traitement de l’eau",
    icon: 'filter',
    tagline: 'Pour un confort sain et durable',
    intro:
      "L’eau du Var est parmi les plus calcaires de France. PCE installe des solutions complètes pour améliorer la qualité de votre eau au quotidien : filtration, purification et désinfection. Protégez votre santé, vos équipements et votre habitat avec du matériel performant et fiable.",
    card: 'Filtration, purification et désinfection de votre eau.',
    metaDescription: "Traitement de l’eau à Lorgues (83) : filtration fine, filtration de forage, charbon actif et traitement UV. Analyse de votre eau et devis gratuit dans le Var.",
    hero: { tags: 'bathroom', lock: 300 },

    prestations: [
      { icon: 'filter', title: 'Filtration fine', label: 'Sous évier, eau de boisson' },
      { icon: 'droplet', title: 'Filtration de forage', label: 'Sable, boue, rouille, particules' },
      { icon: 'testTube', title: 'Charbon actif', label: 'Chlore, pesticides, goûts et odeurs' },
      { icon: 'sparkles', title: 'Traitement UV', label: 'Désinfection sans produit chimique' },
      { icon: 'search', title: 'Analyse et conseil', label: 'Étude personnalisée de votre eau' },
    ],

    /* Bandeau des 5 arguments sous le héros — bespoke à cette page, ne pas
       confondre avec `reassurance` (bandeau générique du site). */
    argBar: [
      { icon: 'droplet', title: 'Eau plus saine', label: 'Améliorez la qualité de votre eau' },
      { icon: 'shieldCheck', title: 'Protection des équipements', label: 'Préserve vos installations et électroménagers' },
      { icon: 'leaf', title: 'Économies', label: 'Moins de calcaire, moins de consommation' },
      { icon: 'checkCircle', title: 'Sécurité & confort', label: 'Une eau maîtrisée pour toute la famille' },
      { icon: 'mapPin', title: 'Expertise locale', label: "Des solutions adaptées à l’eau du Var" },
    ],

    /* Les 6 cartes « Nos solutions de traitement de l'eau ». Aucune photo :
       le client n'en fournit pas pour ces sujets (voir icon ci-dessous, une
       pastille ronde par carte, plutôt qu'un repli sur cadre en attente).
       `ctaTo` pointe vers /contact partout : aucune sous-page dédiée
       n'existe pour ces sujets. */
    solutions: [
      {
        key: 'adoucisseur',
        title: "Adoucisseur d’eau",
        icon: 'droplet',
        bullets: [
          'Protège vos canalisations et équipements',
          'Prolonge la durée de vie de vos installations',
          'Peau plus douce & cheveux plus souples',
          "Moins de calcaire, moins d’entretien",
          'Économies d’énergie & de consommation',
        ],
        ctaLabel: 'En savoir plus sur les adoucisseurs',
        ctaTo: '/contact',
      },
      {
        key: 'filtration-sous-evier',
        title: 'Filtration fine sous évier',
        icon: 'filter',
        bullets: [
          'Eau pure et saine pour la boisson',
          'Filtration des impuretés, chlore, goût et odeurs',
          'Cartouches haute performance',
          'Compact, discret et efficace',
        ],
        ctaLabel: 'En savoir plus',
        ctaTo: '/contact',
      },
      {
        key: 'filtration-forage',
        title: 'Filtration eau de forage',
        icon: 'pipe',
        bullets: [
          'Élimine sable, boue, rouille et particules',
          'Protège vos équipements et installations',
          'Solutions adaptées à chaque forage',
          'Installation sur mesure',
        ],
        ctaLabel: 'En savoir plus',
        ctaTo: '/contact',
      },
      {
        key: 'charbon-actif',
        title: 'Charbon actif — toute la maison',
        icon: 'shieldCheck',
        bullets: [
          'Réduit le chlore, pesticides, mauvais goûts et odeurs',
          'Améliore la qualité de l’eau dans toute la maison',
          'Protège la peau, les cheveux et le linge',
          'Cartouches charbon haute capacité',
        ],
        ctaLabel: 'En savoir plus',
        ctaTo: '/contact',
      },
      {
        key: 'uv',
        title: 'Traitement UV',
        icon: 'bolt',
        /* Formulation à reprendre mot pour mot : le taux d'abattement dépend
           du débit, de la turbidité et de l'entretien de l'appareil — jamais
           d'allégation sanitaire inconditionnelle. */
        bullets: [
          "Réduction jusqu’à 99,9 % des bactéries, virus et micro-organismes, sur une installation correctement dimensionnée et entretenue",
          'Sans produit chimique',
          'Idéal pour forage, puits et eau de réseau',
        ],
        ctaLabel: 'En savoir plus',
        ctaTo: '/contact',
      },
      {
        key: 'complet',
        title: 'Filtration & traitement complet sur mesure',
        icon: 'settings',
        bullets: [
          'Étude personnalisée de votre eau',
          'Solutions complètes et évolutives',
          'Matériel de qualité professionnelle',
          'Installation, entretien et suivi par nos experts',
        ],
        ctaLabel: 'Nous contacter',
        ctaTo: '/contact',
      },
    ],

    whyTreat: {
      heading: 'Pourquoi traiter votre eau ?',
      paragraphs: [
        'Le calcaire, le chlore, les pesticides et les impuretés peuvent avoir un impact sur votre santé, vos installations et votre confort au quotidien.',
        'PCE vous accompagne pour une eau plus saine et plus économique.',
      ],
    },

    treatedBenefits: [
      { icon: 'droplet', title: 'Santé', label: 'Eau saine et sans impuretés' },
      { icon: 'sparkles', title: 'Confort', label: 'Peau, cheveux, linge préservés' },
      { icon: 'shieldCheck', title: 'Durabilité', label: 'Équipements et installations protégés' },
      { icon: 'euro', title: 'Économies', label: 'Moins de produits, moins de dépenses' },
      { icon: 'leaf', title: 'Écologie', label: 'Moins de produits chimiques' },
    ],

    expertise: {
      eyebrow: 'Notre savoir-faire',
      heading: "Traiter l’eau, c’est d’abord la mesurer",
      photo: { tags: 'plumbing', lock: 301 },
      paragraphs: [
        "Le calcaire n’est pas la seule question sur l’eau du secteur de Lorgues et de la Dracénie : chlore, particules, fer selon les réseaux de forage. C’est l’une des premières causes d’intervention que nous constatons depuis 2005.",
        "Notre méthode ne varie pas : nous commençons par mesurer. pH, présence de fer ou de particules, pression et débit disponibles, configuration du local. Un équipement mal dimensionné se fait vite oublier dans le mauvais sens : trop d’entretien pour rien.",
        "Selon les résultats, le traitement retenu diffère : un simple filtre en tête d’installation, une cartouche à charbon actif sur l’eau de boisson ou un stérilisateur UV sur un forage suffisent parfois — et coûtent bien moins cher. Nous préférons vous le dire plutôt que de vendre l’équipement le plus cher du catalogue.",
      ],
      points: [
        'pH et qualité de l’eau mesurés sur place, avant tout devis',
        'Équipement dimensionné sur votre consommation réelle',
        'Solutions alternatives proposées quand elles suffisent',
        'Mise en service, réglages et suivi assurés par nos soins',
      ],
    },

    process: [
      { title: 'Étude personnalisée', text: "Analyse de votre eau, relevé du débit, examen du local technique et de vos usages." },
      { title: 'La préconisation', text: 'Filtration, charbon actif ou UV : nous ne proposons que ce qui est réellement utile chez vous.' },
      { title: 'Installation professionnelle', text: "Pose en tête d’installation, raccordement à l’évacuation et protection du réseau existant." },
      { title: 'Réglages et mise en service', text: 'Paramétrage, contrôle et explication du fonctionnement.' },
      { title: 'Suivi et entretien', text: "Contrôle annuel et vérification des performances de l’équipement dans le temps." },
    ],

    info: {
      heading: "Pourquoi traiter votre eau ?",
      lead: "Le calcaire, le chlore et les particules ont un impact direct sur votre santé, vos installations et votre confort au quotidien.",
      bullets: [
        'Protège vos canalisations, votre chauffe-eau et votre robinetterie.',
        "Prolonge la durée de vie du lave-linge, du lave-vaisselle et des résistances.",
        "Réduit la consommation de produits d’entretien et de lessive.",
        'Préserve la douceur de la peau, des cheveux et la tenue du linge.',
        'Améliore le goût de l’eau de boisson avec une filtration adaptée.',
      ],
    },

    faq: [
      { q: 'Faut-il un traitement même si mon eau semble normale ?', a: "Une analyse rapide sur place permet de le savoir. Nous ne préconisons un équipement que si l’analyse le justifie réellement." },
      { q: 'Quel entretien demande une filtration ?', a: "Peu de choses : remplacement de la cartouche une fois par an en moyenne, selon le débit et l’usage." },
      { q: 'Peut-on traiter une eau de forage ?', a: "Oui. Un forage demande d’abord une filtration des particules (sable, boue, rouille), puis selon l’analyse un traitement du fer, un charbon actif et souvent une désinfection UV." },
      { q: 'Où installe-t-on l’équipement ?', a: "En tête d’installation, au plus près de l’arrivée d’eau : garage, buanderie, cellier ou local technique. Nous validons l’emplacement pendant la visite technique." },
    ],
  },

  /* -------------------------------------------------------------- VMC ---
     Contenu limité à ce que le client a confirmé (17/08/2026) : trois
     produits, deux marchés, une prestation d'entretien. Aucune aide
     financière : le client n'est pas certifié RGE, condition requise pour
     que la VMC double flux ouvre droit à MaPrimeRénov'/CEE. Pas de badge,
     pas de mention, pas de « renseignez-vous ». */
  vmc: {
    slug: 'vmc',
    title: 'VMC',
    navLabel: 'VMC',
    icon: 'fan',
    tagline: 'Un air renouvelé, sans courant d’air froid',
    intro:
      "PCE installe et entretient trois types de VMC : simple flux autoréglable, simple flux hygroréglable et double flux avec récupération de chaleur. En construction neuve comme en rénovation, nous dimensionnons le réseau selon votre logement plutôt que sur catalogue.",
    card: 'VMC simple flux, hygroréglable et double flux, installation et entretien.',
    metaDescription: 'Installation VMC à Lorgues (83) : simple flux autoréglable, hygroréglable et double flux avec récupération de chaleur. Neuf et rénovation, entretien assuré. Devis gratuit dans le Var.',

    prestations: [
      { icon: 'fan', title: 'VMC simple flux autoréglable', label: 'Débit constant, la solution la plus répandue' },
      { icon: 'settings', title: 'VMC simple flux hygroréglable', label: 'Type B, débit piloté par l’humidité' },
      { icon: 'wind', title: 'VMC double flux', label: 'Récupération de chaleur sur l’air extrait' },
      { icon: 'headset', title: 'Entretien', label: 'Bouches, filtres, débits, caisson' },
    ],

    /* Trois cartes seulement : ce sont les trois seules prestations
       confirmées par le client. Aucune photo disponible (comme pour
       Traitement de l'eau) : icône plutôt qu'un repli en attente. */
    solutions: [
      {
        key: 'simple-flux-autoreglable',
        title: 'VMC simple flux autoréglable',
        icon: 'fan',
        bullets: [
          "Débit d’extraction constant, quelle que soit l’humidité",
          'La solution la plus répandue, simple et fiable',
          'Entrées d’air dans les pièces de vie, extraction dans les pièces humides',
          'Adaptée au neuf comme au remplacement en rénovation',
        ],
        ctaLabel: 'En savoir plus',
        ctaTo: '/contact',
      },
      {
        key: 'simple-flux-hygroreglable',
        title: 'VMC simple flux hygroréglable (type B)',
        icon: 'settings',
        bullets: [
          "Débit ajusté automatiquement au taux d’humidité détecté",
          'Entrées d’air et bouches d’extraction pilotées, aussi appelée « double hygrométrie »',
          "Réduit le renouvellement d’air inutile, donc les déperditions de chaleur",
          'Un bon compromis confort/économie pour remplacer une autoréglable vieillissante',
        ],
        ctaLabel: 'En savoir plus',
        ctaTo: '/contact',
      },
      {
        key: 'double-flux',
        title: 'VMC double flux',
        icon: 'wind',
        bullets: [
          "Récupération de chaleur sur l’air extrait avant rejet",
          "Air entrant filtré et préchauffé avant d’entrer dans les pièces de vie",
          'Meilleur confort acoustique, pas de courant d’air froid en hiver',
          'Deux réseaux de gaines : une étude de faisabilité est nécessaire, en neuf comme en rénovation',
        ],
        ctaLabel: 'En savoir plus',
        ctaTo: '/contact',
      },
    ],

    /* Neuf / rénovation : deux logiques commerciales distinctes, demandées
       explicitement par le client plutôt qu'un texte générique. */
    markets: {
      neuf: {
        title: 'Construction neuve',
        text: "Le réseau de VMC se pense dès la conception : tracé des gaines intégré au gros œuvre, débits calculés pièce par pièce, conformité à la réglementation en vigueur sur le logement neuf. Aucune reprise ni percement après coup.",
      },
      renovation: {
        title: 'Rénovation',
        text: "C’est le terrain le plus fréquent dans le bâti varois : remplacement d’une VMC vétuste, passage d’une autoréglable à une hygroréglable pour gagner en confort. Dans les bastides en pierre et les maisons sans faux-plafond, le passage des gaines demande une étude au cas par cas — le même savoir-faire de rénovation du bâti ancien que PCE a développé sur ses autres métiers.",
        link: { label: 'Notre savoir-faire sur le bâti ancien', to: '/a-propos' },
      },
    },

    /* Section entretien : prestation récurrente confirmée par le client,
       traitée à part plutôt que noyée dans les prestations. */
    entretien: {
      heading: 'Un entretien assuré par PCE',
      lead: 'Une VMC mal entretenue perd en efficacité sans que ça se voie. Nous assurons le suivi dans le temps.',
      items: [
        { icon: 'wind', title: 'Nettoyage des bouches', label: 'Extraction et, sur double flux, entrées d’air' },
        { icon: 'filter', title: 'Remplacement des filtres', label: 'Sur les installations double flux' },
        { icon: 'gauge', title: 'Contrôle des débits', label: 'Vérification du bon fonctionnement' },
        { icon: 'settings', title: 'Vérification du caisson', label: 'Moteur, connexions, état général' },
      ],
    },

    faq: [
      { q: 'Quelle est la différence entre VMC autoréglable et hygroréglable ?', a: "L’autoréglable extrait un débit fixe en continu. L’hygroréglable (type B) ajuste ce débit selon le taux d’humidité détecté, pièce par pièce, ce qui limite le renouvellement d’air inutile." },
      { q: 'Faut-il entretenir sa VMC ?', a: "Oui, quel que soit le type. Un caisson encrassé ou des bouches obstruées font chuter le débit sans que ça se remarque au quotidien. Nous proposons un suivi régulier : nettoyage, contrôle des débits et remplacement des filtres sur double flux." },
      { q: 'Peut-on installer une VMC double flux en rénovation ?', a: "Techniquement oui, mais ça demande une étude de faisabilité : la double flux nécessite deux réseaux de gaines, ce qui est plus simple à intégrer en neuf. En rénovation, la configuration du logement détermine si c’est réalisable sans travaux lourds." },
    ],
  },
}

/* Alias : la page /traitement-de-l-eau utilise le slug complet comme clé de
   route, alors que l'objet ci-dessus est indexé sous `traitementEau`. Cet
   alias permet à local.js (`services[trade.serviceKey]`) et à ServicePage.jsx
   (`findLocalTrade`, qui compare au slug) de résoudre le même service sans
   dupliquer son contenu. */
services['traitement-de-l-eau'] = services.traitementEau

/* ---------------------------------------------------------------------
   SOUS-PAGE : CHAUDIÈRE À CONDENSATION
   Approfondit un point du métier « Chauffage ». Accessible via un bouton
   « En savoir plus » depuis la page Chauffage, et sa propre route directe.
------------------------------------------------------------------------*/
export const chaudiereCondensation = {
  slug: 'chauffage/chaudiere-condensation',
  title: 'Chaudière à condensation',
  tagline: 'Une même énergie, beaucoup moins de gaspillage.',
  intro:
    "La chaudière à condensation existe en version gaz, fioul ou bois/granulés. Sur les trois, le principe est identique : au lieu de rejeter la chaleur contenue dans les fumées de combustion, l’appareil la récupère pour préchauffer l’eau qui repart vers vos radiateurs. Résultat, à besoin de chauffage égal, une consommation de combustible nettement plus faible qu’avec une chaudière classique — c’est aujourd’hui la technologie que nous posons par défaut, quelle que soit l’énergie retenue.",
  hero: { tags: 'plumbing', lock: 414 },

  fonctionnement: {
    heading: 'Comment ça fonctionne ?',
    paragraphs: [
      "Dans une chaudière classique, les fumées de combustion repartent chaudes par le conduit d’évacuation — c’est de l’énergie perdue. Dans une chaudière à condensation, ces fumées traversent un second échangeur avant de sortir : la vapeur d’eau qu’elles contiennent s’y condense et cède sa chaleur à l’eau de retour des radiateurs, celle qui rentre dans la chaudière déjà refroidie par son passage dans le circuit de chauffage.",
      "Ce préchauffage réduit d’autant le travail que la chaudière doit fournir pour remonter en température. La condensation n’est cependant efficace que si l’eau de retour arrive suffisamment froide dans l’échangeur — c’est pour cela que la chaudière donne sa pleine performance associée à un plancher chauffant basse température ou à des radiateurs basse température, qui fonctionnent justement avec une eau moins chaude qu’un radiateur classique.",
    ],
  },

  economique: {
    heading: 'Économique',
    icon: 'euro',
    bullets: [
      'Une consommation de combustible sensiblement plus faible pour un même confort, quelle que soit l’énergie (gaz, fioul, bois/granulés).',
      'Une TVA à taux réduit envisageable sur les contrats d’entretien, selon votre situation.',
      "Un financement mobilisable via l’éco-PTZ, sans avance de trésorerie sur le prêt.",
    ],
  },

  ecologique: {
    heading: 'Écologique',
    icon: 'leaf',
    bullets: [
      'Une combustion plus propre, avec moins d’énergie perdue par le conduit d’évacuation.',
      "Des fumées évacuées à une température nettement plus basse qu’une chaudière classique.",
      'Une consommation de combustible réduite, donc moins d’émissions pour un même besoin de chauffage.',
    ],
  },
}

/* ================================================================ CONSEILS =
   Contenu éducatif générique sur les cinq métiers, pensé pour répondre aux
   questions les plus fréquentes avant même le premier appel. Renvoie vers
   les pages métier et la sous-page approfondie chaudière à condensation. */
export const conseils = [
  {
    icon: 'droplet',
    title: 'Plomberie',
    tip: "Une pression d’eau qui chute ou un bruit de coup de bélier dans les canalisations ne se règle presque jamais tout seul : cela vient souvent d’un réducteur de pression mal réglé ou d’une fixation de tuyauterie à reprendre.",
    to: '/plomberie',
  },
  {
    icon: 'flame',
    title: 'Chauffage',
    tip: "Une pompe à chaleur mal dimensionnée coûte plus cher à l’usage qu’une machine plus petite mais bien calculée : méfiez-vous d’un devis qui ne mentionne pas de bilan thermique préalable.",
    to: '/chauffage',
  },
  {
    icon: 'snowflake',
    title: 'Climatisation',
    tip: "Un split qui givre ou qui tourne en continu sans jamais atteindre la consigne signale presque toujours une charge de fluide frigorigène insuffisante — à faire contrôler avant que le compresseur ne s’use prématurément.",
    to: '/climatisation',
  },
  {
    icon: 'bolt',
    title: 'Électricité',
    tip: "Un tableau électrique sans différentiel 30 mA sur chaque circuit, ou sans aucune protection dans les pièces d’eau, doit être considéré comme prioritaire — c’est la première cause d’accident domestique évitable.",
    to: '/electricite',
  },
  {
    icon: 'waves',
    title: 'Piscine',
    tip: "Une eau qui verdit malgré un traitement suivi vient rarement du produit lui-même : vérifiez d’abord le temps de filtration et l’état du filtre avant d’augmenter les doses de traitement.",
    to: '/piscine',
  },
]

export const serviceList = [
  services.plomberie,
  services.chauffage,
  services.climatisation,
  services.electricite,
  services.piscine,
  services.traitementEau,
  services.vmc,
]

/* ============================================================== DÉPANNAGE =*/
export const depannage = {
  title: 'Dépannage / Urgence',
  tagline: 'Une intervention rapide quand vous en avez besoin.',
  intro:
    "Fuite d’eau, panne de chauffage en plein hiver, coupure électrique, climatisation à l’arrêt en pleine canicule, filtration de piscine hors service : nous savons que cela n’attend pas. Un appel suffit pour obtenir un créneau, un diagnostic clair et un prix annoncé avant toute intervention.",
  hero: { tags: 'plumbing', lock: 844 },
  steps: [
    { icon: 'clock', title: 'Intervention rapide 7j/7', label: 'Créneau donné dès votre appel' },
    { icon: 'search', title: 'Diagnostic précis', label: "Origine de la panne identifiée sur place" },
    { icon: 'settings', title: 'Réparation durable', label: 'Pièces de qualité, pas de rustine' },
    { icon: 'clipboard', title: 'Devis avant intervention', label: 'Aucun travail sans votre accord' },
  ],
  domains: [
    { icon: 'droplet', title: 'Plomberie', label: 'Fuite, engorgement, chauffe-eau', to: '/plomberie' },
    { icon: 'thermometer', title: 'Chauffage', label: 'Panne de PAC ou de chaudière', to: '/chauffage' },
    { icon: 'snowflake', title: 'Climatisation', label: 'Arrêt, fuite de fluide, givre', to: '/climatisation' },
    { icon: 'bolt', title: 'Électricité', label: 'Coupure, court-circuit, tableau', to: '/electricite' },
    { icon: 'waves', title: 'Piscine', label: 'Pompe, filtration, local technique', to: '/piscine' },
  ],
  expertise: {
    eyebrow: 'Notre engagement',
    heading: 'Une urgence se juge à la première heure',
    photo: { tags: 'tools', lock: 845 },
    paragraphs: [
      "Depuis 2005, le dépannage représente une part constante de notre activité. C’est aussi la plus exigeante : quand une canalisation lâche un dimanche d’août ou qu’une pompe à chaleur s’arrête en janvier, il n’y a ni deuxième chance ni place pour l’approximation. Nous avons donc structuré notre organisation autour d’un principe unique : donner tout de suite une information fiable.",
      "Concrètement, dès votre appel, nous cherchons à comprendre le symptôme, nous vous guidons sur les gestes conservatoires — couper l’eau, isoler un circuit, arrêter la filtration — et nous vous annonçons un créneau que nous tenons. Nos véhicules embarquent le stock courant des cinq métiers, ce qui permet de résoudre la majorité des interventions en une seule visite.",
      "Enfin, aucun travail n’est engagé sans votre accord sur le prix. Le diagnostic est posé, la solution est expliquée, le montant est annoncé — et si la réparation peut attendre pour être faite correctement plutôt que dans l’urgence, nous vous le disons franchement.",
    ],
    points: [
      'Un créneau annoncé dès le premier appel',
      'Gestes conservatoires expliqués au téléphone',
      'Véhicules équipés pour les cinq métiers',
      'Prix annoncé avant la moindre intervention',
    ],
  },
}

/* =========================================================== RÉALISATIONS =*/
export const projects = [
  {
    title: 'Salle de bains complète en bastide',
    trade: 'Plomberie',
    city: 'Lorgues',
    year: '2025',
    text: "Dépose totale, reprise des réseaux en multicouche, douche à l’italienne et sèche-serviettes. Chantier livré en onze jours ouvrés.",
    tags: 'bathroom',
    lock: 901,
  },
  {
    title: 'Ballon thermodynamique en remplacement',
    trade: 'Chauffage',
    city: 'Taradeau',
    year: '2025',
    text: "Dépose d’un cumulus vétuste et pose d’un ballon thermodynamique, avec reprise du réseau d’eau chaude.",
    tags: 'plumbing',
    lock: 902,
  },
  {
    title: 'Plancher chauffant basse température',
    trade: 'Chauffage',
    city: 'Lorgues',
    year: '2024',
    text: "Pose des boucles sur isolant, calepinage régulier et raccordement au collecteur avant la chape.",
    tags: 'house',
    lock: 903,
  },
  {
    title: 'Collecteurs sanitaires encastrés',
    trade: 'Plomberie',
    city: 'Draguignan',
    year: '2024',
    text: "Nourrices eau chaude et eau froide en multicouche, chaque départ repéré et vanné individuellement.",
    tags: 'plumbing',
    lock: 904,
  },
  {
    title: 'Canalisation entartrée, inspection caméra',
    trade: 'Dépannage',
    city: 'Lorgues',
    year: '2025',
    text: "Diagnostic par endoscopie sur une colonne obstruée : localisation du bouchon avant toute intervention destructive.",
    tags: 'plumbing',
    lock: 905,
  },
  {
    title: 'Local technique chaudière et ballon',
    trade: 'Chauffage',
    city: 'Le Thoronet',
    year: '2024',
    text: 'Chaudière murale, ballon et réseau repris intégralement, tuyauterie alignée et vannes accessibles.',
    tags: 'plumbing',
    lock: 906,
  },
  {
    title: 'Remplacement de chauffe-eau',
    trade: 'Plomberie',
    city: 'Flayosc',
    year: '2025',
    text: "Dépose et pose d’un ballon neuf, groupe de sécurité et raccordements refaits — étiquette PCE apposée.",
    tags: 'plumbing',
    lock: 907,
  },
  {
    title: 'Cuisine équipée, réseaux et évacuations',
    trade: 'Plomberie',
    city: 'Lorgues',
    year: '2025',
    text: "Alimentations et évacuations reprises pour l’îlot, le lave-vaisselle et le lave-linge, plan de travail livré propre.",
    tags: 'kitchen',
    lock: 908,
  },
  {
    title: 'Salle de bains à carrelage décoratif',
    trade: 'Plomberie',
    city: 'Taradeau',
    year: '2024',
    text: 'Baignoire, meuble vasque et faïence décorative posés après reprise complète des réseaux.',
    tags: 'bathroom',
    lock: 909,
  },
  {
    title: 'Tableau électrique en cours de câblage',
    trade: 'Électricité',
    city: 'Lorgues',
    year: '2025',
    text: "Repérage et câblage complet d’un tableau divisionnaire : chaque circuit différencié, chaque départ étiqueté.",
    tags: 'electricity',
    lock: 910,
  },
  {
    title: 'Tableau électrique livré fini',
    trade: 'Électricité',
    city: 'Lorgues',
    year: '2025',
    text: 'Mise aux normes complète : différentiels 30 mA, rangées organisées et repérage définitif.',
    tags: 'electricity',
    lock: 911,
  },
  {
    title: 'Borne de recharge posée et mise en service',
    trade: 'Électricité',
    city: 'Lorgues',
    year: '2025',
    text: "Ligne dédiée depuis le tableau, protection différentielle adaptée, essai réalisé avec le véhicule du client.",
    tags: 'car',
    lock: 912,
  },
  {
    title: 'Borne de recharge murale',
    trade: 'Électricité',
    city: 'Lorgues',
    year: '2024',
    text: 'Implantation en façade, câblage encastré et raccordement propre depuis le tableau existant.',
    tags: 'electricity',
    lock: 913,
  },
  {
    title: 'Éclairage encastré sur mesure',
    trade: 'Électricité',
    city: 'Lorgues',
    year: '2024',
    text: "Réglettes LED encastrées au plafond, alimentation dissimulée et réglage de l’intensité.",
    tags: 'electrician',
    lock: 914,
  },
  {
    title: 'Coffret réseau et communication',
    trade: 'Électricité',
    city: 'Lorgues',
    year: '2025',
    text: "Brassage et repérage d’un coffret de communication (VDI), pour une distribution réseau propre dans tout le logement.",
    tags: 'electrician',
    lock: 915,
  },
  {
    title: 'Climatisation split en chambre',
    trade: 'Climatisation',
    city: 'Lorgues',
    year: '2024',
    text: 'Unité murale posée avec liaison dissimulée, réglée pour un fonctionnement silencieux la nuit.',
    tags: 'airconditioner',
    lock: 920,
  },
  {
    title: 'Gainable : gaines isolées en combles',
    trade: 'Climatisation',
    city: 'Lorgues',
    year: '2025',
    text: 'Gaines calorifugées tirées en combles avant la pose des grilles de diffusion, pour une installation invisible.',
    tags: 'airconditioner',
    lock: 922,
  },
  {
    title: 'Climatisation, groupe extérieur sur terrasse',
    trade: 'Climatisation',
    city: 'Sainte-Maxime',
    year: '2024',
    text: "Groupe extérieur implanté à distance des pièces de vie, sur plot, près de la piscine.",
    tags: 'airconditioner',
    lock: 923,
  },
  /* Deux chantiers retirés de la galerie : la nature exacte, la commune et
     la date de ces deux photos (slots 930/931) ne sont pas confirmées par
     le client — on ne publie pas de commune ou de date approximative. Les
     photos restent disponibles en repli dans src/data/photos.js, à
     réintégrer ici dès que le client confirme les détails du chantier. */
]

/* ============================================================== À PROPOS ==*/
export const milestones = [
  { year: '2005', title: "Création de l’entreprise", text: "PCE s’installe à Lorgues, d’abord centré sur la plomberie et le sanitaire." },
  { year: '2011', title: 'La climatisation', text: "Le climat varois impose une nouvelle compétence : obtention de l’attestation de capacité fluides frigorigènes, premières pompes à chaleur et premiers splits." },
  { year: '2016', title: "L’électricité intégrée", text: "L’équipe s’étoffe pour livrer des chantiers complets, sans passer par la sous-traitance." },
  { year: '2020', title: 'Le pôle piscine', text: "Traitement de l’eau, filtration et automatisation viennent compléter les cinq métiers." },
  { year: '2025', title: 'Vingt ans de chantiers', text: 'Plus de 1 800 interventions réalisées entre Lorgues, la Dracénie et le Golfe.' },
]

export const stats = [
  { value: '20 ans', label: "d’expérience depuis 2005" },
  { value: '1 800+', label: 'chantiers réalisés' },
  { value: '5', label: 'métiers sous le même toit' },
  { value: '10 ans', label: 'de garantie décennale' },
]

export const values = [
  {
    icon: 'handshake',
    title: 'Un seul interlocuteur',
    text: "Du premier appel à la mise en service, c’est la même personne qui suit votre dossier. Aucune sous-traitance en cascade, aucun renvoi de responsabilité entre corps de métier.",
  },
  {
    icon: 'shieldCheck',
    title: 'Garantie décennale',
    text: "Toutes nos installations sont couvertes par notre assurance décennale. L’attestation vous est remise avec le devis, avant même le début des travaux.",
  },
  {
    icon: 'building',
    title: 'Une entreprise locale',
    text: "Installés à Lorgues depuis 2005, nous connaissons le bâti, l’eau et le climat de la région. Nous sommes toujours joignables, et jamais à plus de quarante minutes de chez vous.",
  },
  {
    icon: 'euro',
    title: 'Un prix tenu',
    text: "Le devis est détaillé poste par poste et il fait foi. Pas de supplément découvert en fin de chantier, pas de ligne « divers » qui gonfle la facture.",
  },
]

export const areasDetail = [
  {
    name: 'Lorgues',
    lead: 'Notre commune',
    text: "Siège de l’entreprise depuis 2005. Nous intervenons ici en quelques minutes, sur le centre ancien comme sur les quartiers de villas et les domaines viticoles alentour.",
    towns: ['Lorgues', 'Taradeau', 'Flayosc', 'Les Arcs', 'Vidauban', 'Le Thoronet'],
    tags: 'village',
    lock: 950,
  },
  {
    name: 'Dracénie',
    lead: 'Notre bassin quotidien',
    text: "Draguignan et les communes de la Dracénie constituent le cœur de notre activité : rénovations de villas, mises aux normes électriques et remplacements de systèmes de chauffage.",
    towns: ['Draguignan', 'Trans-en-Provence', 'La Motte', 'Châteaudouble', 'Figanières', 'Salernes'],
    tags: 'landscape',
    lock: 951,
  },
  {
    name: 'Golfe de Saint-Tropez',
    lead: 'Notre littoral',
    text: "Villas avec piscine, résidences secondaires et maisons de caractère : nous y assurons installations, automatisation des bassins et suivi saisonnier, y compris en votre absence.",
    towns: ['Sainte-Maxime', 'Grimaud', 'Cogolin', 'Le Plan-de-la-Tour', 'La Garde-Freinet', 'Saint-Tropez'],
    tags: 'architecture',
    lock: 952,
  },
]
