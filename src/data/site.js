/* -------------------------------------------------------------------------
   Données du site PCE — Lorgues (83)
   Tout le contenu éditorial est centralisé ici : les pages ne sont que des
   gabarits qui consomment ces objets.
---------------------------------------------------------------------------*/

export const company = {
  name: 'PCE',
  signature: 'Depuis 2005',
  /* Signature dorée reprise dans les héros */
  expertise: "L'expertise PCE à votre service",
  /* Baseline du pied de page */
  tagline: 'La qualité au service de votre confort !',
  baseline:
    "Plomberie · Chauffage · Climatisation · Électricité · Piscine · Traitement de l'eau · Dépannage dans tout le Var",
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
  /* Qualifications relevées sur le véhicule de l'entreprise */
  certifications: ['Qualigaz', 'Qualipac', 'Garantie décennale', 'Assurance RC Pro'],
}

/* ---------------------------------------------------------------- Photos --
   Photo d'illustration générique, utilisée UNIQUEMENT tant qu'aucune vraie
   photo client n'est encore assignée pour un emplacement (voir
   `clientPhoto()` dans src/data/photos.js, qui a toujours priorité).
   `lock` fige un rendu identique d'un chargement à l'autre.

   ⚠️ Ne jamais utiliser un service qui choisit la photo par mot-clé
   (type loremflickr) : cela revient à afficher en direct une photo prise
   au hasard sur Internet sans aucun contrôle sur son contenu — un
   emplacement resté sans vraie photo a ainsi affiché une image
   inappropriée sur la page Piscine (slot 740, tag "pool"). picsum.photos
   renvoie une image générique par graine (paysage/texture), sans lien
   avec le mot-clé, donc sans ce risque.

   Pour passer sur vos propres visuels : renseignez le slot dans
   src/data/photos.js — pas besoin de toucher à ce fichier.
---------------------------------------------------------------------------*/
export const photo = (tags, lock, w = 1200, h = 900) =>
  `https://picsum.photos/seed/pce${lock}/${w}/${h}`

/** Repli si la source ci-dessus ne répond pas (voir composant <Photo />). */
export const photoFallback = (lock, w = 1200, h = 900) =>
  `https://picsum.photos/seed/pcefallback${lock}/${w}/${h}`

/* ------------------------------------------------------------ Navigation -*/
export const trades = [
  { label: 'Plomberie', to: '/plomberie' },
  { label: 'Chauffage', to: '/chauffage' },
  { label: 'Climatisation', to: '/climatisation' },
  { label: 'Électricité', to: '/electricite' },
  { label: 'Piscine', to: '/piscine' },
  { label: "Traitement de l'eau", to: '/traitement-de-l-eau' },
]

/* Navigation à plat, conforme aux maquettes de référence. */
export const nav = [
  { label: 'Accueil', to: '/' },
  { label: 'Plomberie', to: '/plomberie' },
  { label: 'Chauffage', to: '/chauffage' },
  { label: 'Climatisation', to: '/climatisation' },
  { label: 'Électricité', to: '/electricite' },
  { label: 'Piscine', to: '/piscine' },
  { label: "Traitement de l'eau", to: '/traitement-de-l-eau' },
  { label: 'Dépannage', to: '/depannage' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'Conseils', to: '/conseils' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
]

/* Bandeau de réassurance affiché sous chaque héros. */
export const reassurance = [
  { icon: 'award', title: '+ de 20 ans', label: "d'expérience et de savoir-faire" },
  { icon: 'mapPin', title: 'Entreprise locale', label: 'Basée à Lorgues, interventions rapides' },
  { icon: 'shieldCheck', title: 'Garantie décennale', label: 'Et assurance RC Pro' },
  { icon: 'clipboard', title: 'Devis gratuit', label: 'Réponse rapide et sans engagement' },
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
  title: 'TVA réduite à 5,5 %*',
  text: "Sur les travaux d'amélioration énergétique réalisés dans un logement achevé depuis plus de deux ans, la TVA s'applique au taux réduit de 5,5 % au lieu de 20 %. PCE établit l'attestation, la fait signer et applique le taux réduit directement sur votre devis : vous n'avez aucune démarche à effectuer.",
  note: "* Taux réduit applicable sous conditions (article 278-0 bis A du CGI) : logement à usage d'habitation achevé depuis plus de deux ans, matériel et pose facturés par la même entreprise, attestation simplifiée signée avant le début des travaux. Selon la législation en vigueur.",
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
      "Depuis 2005, PCE prend en charge l'ensemble de vos travaux de plomberie, de la création d'un réseau neuf à la rénovation complète d'une salle de bains. Recherche de fuite non destructive, remplacement de chauffe-eau, traitement de l'eau : un seul interlocuteur, du premier relevé jusqu'à la mise en service.",
    card: "Réseaux neufs, salles de bains, recherche de fuite et traitement de l'eau.",
    hero: { tags: 'bathroom', lock: 231 },

    prestations: [
      { icon: 'wrench', title: 'Installation sanitaire', label: 'Réseaux neufs et rénovation' },
      { icon: 'shower', title: 'Salle de bains', label: 'Rénovation clé en main' },
      { icon: 'search', title: 'Recherche de fuite', label: 'Détection non destructive' },
      { icon: 'flame', title: 'Chauffe-eau', label: 'Ballons et thermodynamique' },
      { icon: 'filter', title: "Adoucisseurs d'eau", label: 'Traitement et filtration' },
      { icon: 'gauge', title: 'Débit et pression', label: 'Réglage et mise aux normes' },
    ],

    expertise: {
      eyebrow: 'Notre savoir-faire',
      heading: 'Vingt ans de plomberie sur le bâti varois',
      photo: { tags: 'plumbing', lock: 232 },
      paragraphs: [
        "La plomberie est le métier fondateur de PCE. Depuis 2005, nous intervenons sur un bâti local très particulier : bastides en pierre aux murs de soixante centimètres, mas rénovés par tranches successives, villas des années 1980 dont les réseaux en cuivre arrivent en fin de vie, constructions neuves de la plaine de l'Argens. Chaque typologie a ses pièges, et deux décennies de chantiers entre Lorgues et le Golfe nous ont appris à les reconnaître avant même d'ouvrir une saignée.",
        "Notre parti pris est simple : nous ne posons que du matériel que nous saurons réparer dans dix ans. Multicouche à sertir pour les réseaux encastrés, laiton sur les points sensibles, robinetterie de marques distribuées en France dont les pièces détachées restent disponibles. Chaque installation est repérée, chaque vanne d'arrêt reste accessible, et chaque chantier est livré avec un plan de réseau que vous conservez.",
        "L'eau du secteur est parmi les plus calcaires de France : nous relevons couramment plus de 30 °f autour de Lorgues. C'est la première cause de panne sur les chauffe-eau, les mitigeurs thermostatiques et les électroménagers. Nous mesurons donc systématiquement la dureté avant de proposer quoi que ce soit, et nous dimensionnons l'adoucisseur sur votre consommation réelle plutôt que sur un forfait commercial.",
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
      { title: 'La visite technique', text: "Relevé sur place, mesure de la dureté et de la pression, contrôle de l'état des réseaux existants. Gratuite et sans engagement." },
      { title: 'Le devis détaillé', text: "Poste par poste, avec les références exactes du matériel et le taux de TVA applicable. Valable trois mois, sans révision de prix." },
      { title: 'Le chantier', text: "Dates annoncées et tenues, sols protégés, gravats évacués. Nous laissons le chantier propre chaque soir, y compris sur les rénovations lourdes." },
      { title: 'La mise en service', text: "Essais en votre présence, explication des organes de coupe, remise du plan et des notices. Nous restons joignables après la facture." },
    ],

    info: {
      heading: "Pourquoi installer un adoucisseur d'eau ?",
      lead: "L'eau de Lorgues et de la Dracénie dépasse fréquemment 30 °f. Un adoucisseur correctement dimensionné change le quotidien et protège durablement vos équipements.",
      bullets: [
        'Fini les dépôts de calcaire sur la robinetterie, les parois de douche et le carrelage.',
        'Une durée de vie nettement allongée pour le chauffe-eau, le lave-linge et le lave-vaisselle.',
        "Jusqu'à 30 % d'économies sur les produits d'entretien et les détergents.",
        'Une eau plus douce pour la peau, les cheveux et la tenue du linge.',
        'Un entretien minimal : quelques sacs de sel par an suffisent.',
      ],
    },

    faq: [
      { q: 'Intervenez-vous en urgence pour une fuite ?', a: "Oui, sept jours sur sept. Un dégât des eaux ne peut pas attendre le lundi : appelez-nous, nous vous donnons un créneau dès l'appel et nous vous indiquons par téléphone comment couper l'arrivée d'eau en attendant." },
      { q: 'Comment se déroule une recherche de fuite ?', a: "Nous travaillons sans casser : gaz traceur, caméra thermique, corrélation acoustique et inspection par caméra selon la configuration. Le point de fuite est localisé au centimètre, puis nous vous proposons la réparation dans la foulée." },
      { q: 'Quel délai pour une salle de bains complète ?', a: "Comptez de dix à quinze jours ouvrés selon l'ampleur de la dépose et le carrelage retenu. Nous coordonnons nous-mêmes le carreleur et l'électricien, ce qui évite les temps morts entre corps de métier." },
      { q: 'Faut-il vraiment un adoucisseur dans le Var ?', a: "Dans notre secteur, très souvent oui. Mais nous mesurons toujours la dureté avant de vous le dire : sur certains réseaux communaux, un simple filtre anti-calcaire en tête d'installation suffit et coûte bien moins cher." },
      { q: 'Vous occupez-vous des démarches de TVA réduite ?', a: "Oui. Nous vérifions votre éligibilité, nous préparons l'attestation simplifiée et nous appliquons directement le taux de 5,5 % sur le devis. Vous n'avez qu'une signature à apposer." },
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
      "Nous dimensionnons chaque installation en fonction de votre logement, de son isolation et du climat provençal — jamais sur catalogue. Étude préalable, choix du matériel, pose et entretien annuel : PCE vous accompagne sur toute la durée de vie de votre système de chauffage.",
    card: "Pompes à chaleur, chaudières et installations gaz, plancher chauffant et entretien.",
    hero: { tags: 'airconditioner', lock: 412 },

    /* Rangée de bénéfices, reprise du support « PCE, votre expert chauffage & gaz » */
    benefits: [
      { icon: 'euro', title: "Économies d'énergie", label: 'Des équipements à haut rendement' },
      { icon: 'shieldCheck', title: 'Sécurité', label: 'Installations gaz contrôlées' },
      { icon: 'gauge', title: 'Performance', label: 'Matériel dimensionné au juste besoin' },
      { icon: 'checkCircle', title: 'Conformité', label: 'Mise aux normes et attestation' },
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
        "Chauffer une maison dans le Var n'a rien à voir avec chauffer une maison en Bourgogne. Nos hivers comptent peu de journées sous zéro, mais nos bastides en pierre ont une inertie considérable et nos étés imposent de penser le rafraîchissement dès la conception. C'est cette lecture locale qui guide chacune de nos préconisations depuis 2005.",
        "Concrètement, nous refusons de dimensionner une pompe à chaleur au ratio. Nous relevons les surfaces, l'orientation, la nature des murs, l'état des menuiseries et les émetteurs existants, puis nous calculons la puissance réellement nécessaire. Une machine surdimensionnée coûte plus cher à l'achat, se met en défaut par cycles courts et s'use prématurément : c'est l'erreur que nous voyons le plus souvent sur les installations que nous reprenons.",
        "Nous privilégions les fabricants disposant d'un réseau technique en région PACA, afin qu'une pièce sous garantie arrive en quarante-huit heures et non en trois semaines. Et parce qu'une installation ne vaut que par son suivi, nous assurons nous-mêmes l'entretien annuel, avec relevé des performances et attestation d'entretien remise à chaque passage.",
      ],
      points: [
        'Bilan thermique réalisé avant toute préconisation',
        "Puissance calculée, jamais estimée au ratio",
        'Marques disposant d’un service technique en PACA',
        'Entretien annuel assuré par la même équipe',
      ],
    },

    process: [
      { title: "L'étude du logement", text: "Relevé des surfaces, de l'isolation, de l'orientation et des émetteurs en place. C'est cette étape qui détermine la puissance et le type de machine." },
      { title: 'Le comparatif chiffré', text: "Nous présentons deux à trois solutions avec, pour chacune, le coût d'installation, la consommation annuelle estimée et les aides mobilisables." },
      { title: 'Le montage des aides', text: "Pour une pompe à chaleur : MaPrimeRénov', certificats d'économie d'énergie, éco-PTZ — nous constituons le dossier avec vous et déduisons ce qui peut l'être du devis. Pour une chaudière à gaz, seule la TVA à 5,5 % et l'éco-PTZ restent mobilisables." },
      { title: "L'installation", text: "Dépose de l'ancien système, pose, raccordements hydrauliques et frigorifiques, mise en service et équilibrage des émetteurs." },
      { title: 'Le suivi dans le temps', text: "Entretien annuel, relevé des performances, attestation remise à chaque passage et intervention prioritaire en cas de panne." },
    ],

    info: {
      heading: 'Pourquoi choisir une pompe à chaleur ?',
      lead: "Sous le climat de la Dracénie, la pompe à chaleur est la solution la plus rentable du marché : les températures extérieures restent favorables à son rendement presque toute l'année.",
      bullets: [
        "Jusqu'à 75 % de l'énergie restituée est puisée gratuitement dans l'air extérieur.",
        "Une réduction immédiate et importante de votre consommation d'énergie.",
        'Chauffage en hiver et rafraîchissement en été avec un seul appareil (selon modèle).',
        'Une valorisation nette de votre logement à la revente comme à la location.',
        'Plus aucune cuve, aucune livraison de combustible, aucun ramonage.',
      ],
    },

    faq: [
      { q: "Une pompe à chaleur fonctionne-t-elle vraiment l'hiver ici ?", a: "Parfaitement. Dans la Dracénie, la température descend rarement sous −3 °C et les machines actuelles conservent un excellent rendement jusqu'à −10 °C. C'est justement l'un des climats les plus favorables de France pour cette technologie." },
      { q: 'Puis-je garder mes radiateurs existants ?', a: "Souvent oui, à condition qu'ils soient suffisamment dimensionnés. Nous le vérifions pendant l'étude. Si un ou deux radiateurs sont trop justes, il est presque toujours moins coûteux de les remplacer que de renoncer à la pompe à chaleur." },
      { q: "L'entretien annuel est-il obligatoire ?", a: "Oui pour les pompes à chaleur de plus de 4 kW et pour les chaudières gaz. Au-delà de l'obligation, c'est ce qui préserve le rendement et la garantie constructeur. Nous proposons un contrat avec passage programmé et intervention prioritaire." },
      { q: 'Le groupe extérieur est-il bruyant ?', a: "Les machines récentes tournent autour de 35 à 45 dB à quelques mètres. L'essentiel se joue à l'implantation : nous étudions la distance aux chambres, aux voisins et aux murs réfléchissants avant de fixer l'emplacement." },
      { q: 'Quelles aides puis-je obtenir ?', a: "Pour une pompe à chaleur, selon vos revenus : MaPrimeRénov', prime CEE, TVA à 5,5 % et éco-PTZ. Pour une chaudière à gaz, MaPrimeRénov' et la prime CEE ne sont plus mobilisables depuis 2023-2024 : seules la TVA à 5,5 % et l'éco-PTZ restent disponibles. Nous chiffrons systématiquement le reste à charge réel sur le devis, aides déduites." },
    ],
  },

  /* -------------------------------------------------------- CLIMATISATION */
  climatisation: {
    slug: 'climatisation',
    title: 'Climatisation',
    navLabel: 'Climatisation',
    icon: 'snowflake',
    tagline: "Fraîcheur l'été, confort l'hiver.",
    intro:
      "Rafraîchir sans faire de bruit ni défigurer une façade, c'est tout l'enjeu d'une bonne installation. Nous étudions l'implantation des unités, l'acoustique et le tracé des liaisons frigorifiques avant de poser, puis nous assurons l'entretien réglementaire de votre équipement.",
    card: 'Mono-split, multi-split, gainable et entretien des unités.',
    hero: { tags: 'airconditioner', lock: 517 },

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
      heading: "Une climatisation qu'on n'entend pas et qu'on ne voit pas",
      photo: { tags: 'livingroom', lock: 518 },
      paragraphs: [
        "Détenteurs de l'attestation de capacité à la manipulation des fluides frigorigènes, nous posons des climatisations dans le Var depuis 2011. Avec le temps, nous avons développé une conviction : une bonne installation, c'est celle qu'on oublie. Ni ronronnement dans la chambre, ni groupe extérieur planté au milieu d'une façade en pierre, ni goulotte plastique qui court le long d'un mur.",
        "Cela demande du temps en amont. Nous étudions le tracé des liaisons pour les encastrer ou les dissimuler, nous calculons la distance acoustique aux pièces de nuit et aux limites de propriété, et nous intégrons le groupe extérieur derrière un claustra ou dans un renfoncement chaque fois que c'est possible. Sur les maisons de caractère de Lorgues, c'est souvent ce détail qui fait toute la différence.",
        "Techniquement, nous ne transigeons pas sur la mise sous vide et le contrôle d'étanchéité : ce sont les deux opérations que les poses bâclées suppriment, et la cause quasi systématique des pannes qui surviennent au bout de deux étés. Nous laissons également un accès de maintenance sur chaque unité, pour que l'entretien annuel ne se transforme pas en démontage.",
      ],
      points: [
        'Attestation de capacité fluides frigorigènes',
        'Étude acoustique avant implantation du groupe',
        'Mise sous vide et contrôle d’étanchéité systématiques',
        'Accès de maintenance prévu sur chaque unité',
      ],
    },

    process: [
      { title: 'La visite des pièces', text: "Volumes, orientation, apports solaires, nombre d'occupants : nous calculons les frigories réellement nécessaires, pièce par pièce." },
      { title: "Le choix de l'implantation", text: "Position des unités intérieures, tracé des liaisons, emplacement du groupe extérieur — validé avec vous avant toute commande." },
      { title: 'Le devis et la commande', text: "Matériel nommément désigné, puissance, classe énergétique et niveau sonore indiqués noir sur blanc." },
      { title: 'La pose', text: "Percements soignés, liaisons encastrées ou dissimulées, tirage au vide, charge en fluide et contrôle d'étanchéité." },
      { title: 'La prise en main', text: "Réglages, explication de la télécommande et de l'application, conseils d'usage pour ne pas surconsommer." },
    ],

    info: {
      heading: 'Bien choisir sa climatisation',
      lead: "Le confort et la facture ne dépendent pas de la marque, mais du dimensionnement et de la qualité de pose. Voici ce que nous vérifions systématiquement.",
      bullets: [
        'Un dimensionnement juste garantit le confort et évite la surconsommation.',
        "Une climatisation moderne consomme trois à quatre fois moins qu'un radiateur électrique.",
        "La qualité de l'air intérieur est améliorée par la filtration des unités.",
        'En mode réversible, elle chauffe efficacement pendant les mi-saisons.',
        'Un entretien régulier conditionne la performance et la longévité.',
      ],
    },

    faq: [
      { q: 'Puis-je faire poser une climatisation moi-même ?', a: "Non : la mise en service implique la manipulation de fluides frigorigènes, réservée par la loi aux détenteurs d'une attestation de capacité. Une pose non conforme annule par ailleurs la garantie du fabricant." },
      { q: 'Quelle différence entre monosplit et multisplit ?', a: "Le monosplit relie un groupe extérieur à une seule unité intérieure. Le multisplit permet d'en raccorder deux à cinq sur un seul groupe : une façade dégagée, un seul point d'alimentation, mais une puissance à répartir avec soin." },
      { q: 'Le gainable est-il envisageable en rénovation ?', a: "Oui dès qu'il existe des combles accessibles ou un faux plafond. Le résultat est très discret : seules des grilles linéaires restent visibles. Nous étudions la faisabilité pendant la visite technique." },
      { q: 'À quelle fréquence entretenir sa climatisation ?', a: "Un nettoyage des filtres tous les deux à trois mois d'usage, et une visite professionnelle annuelle. Le contrôle d'étanchéité est obligatoire dès que la charge en fluide dépasse le seuil réglementaire." },
      { q: 'Peut-on climatiser une maison en pierre ?', a: "Tout à fait, et l'inertie des murs joue même en votre faveur. La difficulté est le passage des liaisons : c'est précisément le genre de configuration sur lequel nous travaillons chaque semaine dans le Var." },
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
      "Tableau vétuste, disjoncteur qui saute, projet d'extension ou borne de recharge : nous reprenons votre installation électrique dans le respect de la norme NF C 15-100. Chaque chantier est repéré, étiqueté et livré avec un schéma de tableau lisible par n'importe quel électricien après nous.",
    card: 'Tableaux, mise aux normes NF C 15-100, dépannage et bornes de recharge.',
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
        "Nous avons intégré l'électricité à nos métiers en 2016, pour une raison simple : la moitié de nos chantiers de plomberie et de chauffage y touchait de toute façon. Plutôt que de sous-traiter, nous avons formé l'équipe. Aujourd'hui, une pompe à chaleur, une borne de recharge ou un local technique de piscine sont livrés par PCE de bout en bout, sans coordination hasardeuse entre deux entreprises.",
        "Le patrimoine électrique local est ancien. Beaucoup de villas de la Dracénie fonctionnent encore avec un tableau d'origine, sans différentiel 30 mA, parfois sans terre dans les pièces d'eau. Nous reprenons ces installations progressivement lorsque le budget l'impose, en traitant toujours la sécurité des personnes en priorité absolue.",
        "Notre signature, c'est le repérage. Chaque circuit est étiqueté, chaque tableau est livré avec son schéma sous pochette, chaque modification est reportée. Cela ne coûte rien de plus sur le devis, mais cela vous fait gagner une heure de recherche à chaque intervention future — y compris si un autre professionnel passe après nous.",
      ],
      points: [
        'Norme NF C 15-100 appliquée à la lettre',
        'Circuits étiquetés et schéma de tableau remis',
        'Sécurité des personnes traitée en priorité',
        'Installation dimensionnée pour vos usages futurs',
      ],
    },

    process: [
      { title: "L'état des lieux", text: "Ouverture du tableau, contrôle des protections, de la terre et des sections de conducteurs. Nous vous montrons ce que nous voyons." },
      { title: 'Le rapport et les priorités', text: "Nous distinguons ce qui relève de la sécurité immédiate, de la mise en conformité et du confort. Vous arbitrez en connaissance de cause." },
      { title: 'Le devis chiffré', text: "Chaque poste est détaillé, avec les marques d'appareillage et le nombre de points. Aucune ligne « divers »." },
      { title: 'Les travaux', text: "Coupures annoncées à l'avance et limitées, saignées rebouchées, poussières maîtrisées. Vous récupérez le courant chaque soir." },
      { title: 'La remise du dossier', text: "Schéma de tableau, étiquetage, essais des différentiels devant vous et explication du fonctionnement." },
    ],

    info: {
      heading: 'Pourquoi refaire son tableau électrique ?',
      lead: "Une installation antérieure à 1991 concentre l'essentiel des risques domestiques. La remise à niveau est rapide et se fait le plus souvent sans casser les murs.",
      bullets: [
        'Assurer la sécurité des occupants avec des différentiels 30 mA.',
        'Protéger vos appareils sensibles contre les surtensions et la foudre.',
        'Préparer votre installation aux nouveaux usages : clim, PAC, borne de recharge.',
        'Éviter les coupures et les surcharges liées à un tableau saturé.',
        'Être en conformité avec la norme NF C 15-100 en cas de vente ou de location.',
      ],
    },

    faq: [
      { q: 'Le parafoudre est-il obligatoire ?', a: "Il dépend de la localisation du bâtiment, du niveau d'exposition à la foudre et des exigences de la norme NF C 15-100. Dans le Var, il est très souvent recommandé pour protéger les équipements électroniques et les cartes de régulation." },
      { q: 'Faut-il tout casser pour une mise aux normes ?', a: "Rarement. Dans la majorité des cas, le remplacement du tableau, la création d'une liaison de terre et la reprise des circuits sensibles suffisent. Nous privilégions les passages existants, les plinthes et les combles." },
      { q: 'Combien de temps dure le remplacement d’un tableau ?', a: "Une journée pour un logement standard, deux si la terre est à créer ou si le comptage doit être déplacé. Le courant est rétabli le soir même dans tous les cas." },
      { q: 'Installez-vous les bornes de recharge pour voiture électrique ?', a: "Oui, en 3,7, 7,4 ou 11 kW selon votre véhicule et votre abonnement. Nous créons une ligne dédiée depuis le tableau avec protection différentielle adaptée et, si besoin, pilotage de la puissance pour éviter la disjonction." },
      { q: 'Intervenez-vous sur les pannes urgentes ?', a: "Oui, sept jours sur sept. Coupure générale, disjoncteur qui claque en boucle, odeur de brûlé au tableau : appelez immédiatement, ces symptômes ne doivent jamais attendre." },
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
      "Une eau limpide sans y passer ses week-ends, c'est d'abord une affaire de réglages et de bon matériel. PCE assure la mise en route, l'hivernage, la rénovation du local technique et l'automatisation complète de votre bassin, à Lorgues comme sur tout le Golfe de Saint-Tropez.",
    card: 'Filtration, traitement au sel, chauffage du bassin et automatisation.',
    hero: { tags: 'swimmingpool', lock: 739 },

    prestations: [
      { icon: 'home', title: 'Création et rénovation', label: 'Bassin et plage technique' },
      { icon: 'panel', title: 'Local technique', label: 'Tuyauterie et coffret' },
      { icon: 'waves', title: 'Filtration et pompes', label: 'Débit variable' },
      { icon: 'thermometer', title: 'Chauffage de piscine', label: 'Pompe à chaleur dédiée' },
      { icon: 'salt', title: "Traitement de l'eau", label: 'Électrolyse au sel et pH' },
      { icon: 'robot', title: 'Automatisation', label: 'Sondes et pilotage à distance' },
    ],

    expertise: {
      eyebrow: 'Notre savoir-faire',
      heading: "Le local technique, c'est là que tout se joue",
      photo: { tags: 'pool', lock: 740 },
      paragraphs: [
        "PCE a ouvert son pôle piscine en 2020, en réponse à une demande devenue constante chez nos clients de Lorgues, du Plan-de-la-Tour et de Grimaud. Notre approche est celle d'un technicien de l'eau et de l'énergie, pas d'un simple revendeur de produits : nous traitons le bassin comme une installation hydraulique et électrique complète.",
        "Dans neuf cas sur dix, une eau qui vire ou une consommation de produits qui explose ne vient pas du bassin mais du local technique. Tuyauterie sous-dimensionnée, filtre saturé, pompe qui tourne trop peu ou trop fort, coffret électrique corrodé par l'humidité : nous commençons toujours par là. Un local repris proprement, avec des vannes repérées et un coffret étanche aux normes, règle la majorité des problèmes de saison.",
        "Nous poussons ensuite vers l'électrolyse au sel, la pompe à débit variable et la régulation automatique du pH — non par effet de mode, mais parce que le calcul est net : sur trois saisons, ces trois équipements se remboursent en électricité et en produits, tout en supprimant l'essentiel des corvées d'entretien.",
      ],
      points: [
        'Diagnostic complet du local technique avant tout devis',
        'Vannes repérées et coffret électrique étanche aux normes',
        'Consommation électrique de filtration mesurée',
        'Mise en route et hivernage assurés chaque saison',
      ],
    },

    process: [
      { title: 'Le diagnostic du bassin', text: "Analyse de l'eau, contrôle du débit, état du filtre, de la pompe et du coffret. Nous chiffrons aussi la consommation électrique actuelle." },
      { title: 'Les préconisations', text: "Traitement, filtration, chauffage, automatisation : nous hiérarchisons ce qui aura le plus d'effet sur votre confort et votre budget." },
      { title: 'Les travaux', text: "Reprise de la tuyauterie, pose des équipements, câblage du coffret et raccordement des sondes, hors saison de préférence." },
      { title: 'Les réglages', text: "Temps de filtration, consignes de pH et de désinfection, courbes de la pompe à vitesse variable, paramétrage de l'application." },
      { title: 'Le suivi de saison', text: "Mise en route au printemps, contrôles en été si vous le souhaitez, hivernage à l'automne. Un seul interlocuteur toute l'année." },
    ],

    columns: [
      {
        icon: 'salt',
        heading: 'Pourquoi passer au traitement au sel ?',
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
        heading: "Les avantages d'une pompe à débit variable",
        bullets: [
          "Jusqu'à 80 % d'économie d'électricité sur la filtration.",
          'Un fonctionnement nettement plus silencieux.',
          'Une filtration plus longue, donc une eau plus claire.',
          'Une durée de vie prolongée du moteur et du filtre.',
          'Un débit réglable selon vos besoins réels.',
        ],
      },
      {
        icon: 'robot',
        heading: 'Pourquoi automatiser votre piscine ?',
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
      { q: 'Quand faut-il hiverner sa piscine dans le Var ?', a: "Généralement de mi-novembre à mi-mars, lorsque l'eau descend durablement sous 12 °C. Dans notre région, l'hivernage actif — filtration réduite plutôt qu'arrêt complet — donne les meilleurs résultats et facilite la remise en route." },
      { q: 'Le sel abîme-t-il le bassin ?', a: "Non, à condition que le taux soit maîtrisé et que les pièces à sceller soient compatibles. Nous vérifions systématiquement l'échelle, les projecteurs et le liner avant de préconiser une électrolyse." },
      { q: 'Combien de temps dois-je filtrer par jour ?', a: "La règle usuelle est de diviser la température de l'eau par deux. Avec une pompe à vitesse variable, on filtre plus longtemps mais à faible régime, ce qui donne une eau plus claire pour moins d'électricité." },
      { q: 'Pouvez-vous chauffer une piscine existante ?', a: "Oui, par pompe à chaleur dédiée raccordée après le filtre. Nous vérifions le débit disponible, la place au local technique et l'alimentation électrique, puis nous dimensionnons selon le volume et l'usage souhaité." },
      { q: 'Faites-vous la recherche de fuite sur bassin ?', a: "Oui, sur le bassin comme sur les canalisations enterrées : test de perte, colorant, écoute électro-acoustique et caméra selon le cas. Nous localisons avant de casser quoi que ce soit." },
    ],
  },

  /* --------------------------------------------------- TRAITEMENT DE L'EAU */
  traitementEau: {
    slug: 'traitement-de-l-eau',
    title: "Traitement de l'eau",
    navLabel: "Traitement de l'eau",
    icon: 'filter',
    tagline: 'Pour un confort sain et durable',
    intro:
      "L'eau du Var est parmi les plus calcaires de France. PCE installe des solutions complètes pour améliorer la qualité de votre eau au quotidien : adoucissement, filtration, purification et désinfection. Protégez votre santé, vos équipements et votre habitat avec du matériel performant et fiable.",
    card: "Adoucisseurs, filtration, purification et désinfection de votre eau.",
    hero: { tags: 'bathroom', lock: 300 },

    prestations: [
      { icon: 'tank', title: "Adoucisseur d'eau", label: 'Pentair Foleo, haute performance' },
      { icon: 'filter', title: 'Filtration fine', label: 'Sous évier, eau de boisson' },
      { icon: 'droplet', title: 'Filtration de forage', label: 'Sable, boue, rouille, particules' },
      { icon: 'testTube', title: 'Charbon actif', label: 'Chlore, pesticides, goûts et odeurs' },
      { icon: 'sparkles', title: 'Traitement UV', label: 'Désinfection sans produit chimique' },
      { icon: 'search', title: 'Analyse et conseil', label: 'Étude personnalisée de votre eau' },
    ],

    /* Bénéfices repris du support « Adoucisseur Pentair Foleo » */
    benefits: [
      { icon: 'droplet', title: 'Eau plus saine', label: 'Une qualité maîtrisée au quotidien' },
      { icon: 'shieldCheck', title: 'Équipements protégés', label: 'Moins de pannes, moins d’usure' },
      { icon: 'euro', title: 'Économies', label: 'Moins de calcaire, moins de produits' },
      { icon: 'award', title: 'Expertise locale', label: 'Des solutions adaptées à l’eau du Var' },
    ],

    /* Produit phare installé par PCE */
    product: {
      brand: 'Pentair',
      model: 'Foleo',
      heading: "L'adoucisseur Pentair Foleo, notre solution de référence",
      lead: "L'adoucisseur Pentair Foleo élimine le calcaire de votre eau pour un confort au quotidien et des économies durables. C'est l'appareil que nous installons le plus, parce qu'il tient dans la durée.",
      warranty: "Garantie jusqu'à 10 ans sur la cuve",
      photo: { tags: 'bathroom', lock: 300 },
      /* Bienfaits, tels que présentés sur la documentation du fabricant */
      benefits: [
        {
          icon: 'sparkles',
          title: 'Bienfaits pour la peau',
          text: "Une eau douce préserve l'hydratation de la peau et limite les irritations et les démangeaisons.",
        },
        {
          icon: 'settings',
          title: 'Protège vos électroménagers',
          text: 'Moins de calcaire, c’est moins de pannes et une durée de vie prolongée pour le lave-linge, le lave-vaisselle et le chauffe-eau.',
        },
        {
          icon: 'home',
          title: 'Protège votre maison',
          text: "Prévient l'entartrage des canalisations, du chauffe-eau et de la robinetterie : moins d'usure, moins de réparations.",
        },
        {
          icon: 'shower',
          title: 'Confort pour la douche',
          text: 'Une eau douce pour une peau plus douce, une sensation agréable et des parois sans traces de calcaire.',
        },
        {
          icon: 'droplet',
          title: 'Des cheveux plus souples',
          text: "Fini les cheveux secs, ternes et difficiles à coiffer : l'eau douce révèle leur souplesse naturelle.",
        },
      ],
      specs: [
        'Compact et design',
        'Régénération intelligente et économique',
        'Installation rapide et facile',
        'Entretien minimal',
        'Performance longue durée',
      ],
    },

    expertise: {
      eyebrow: 'Notre savoir-faire',
      heading: "Traiter l'eau, c'est d'abord la mesurer",
      photo: { tags: 'plumbing', lock: 301 },
      paragraphs: [
        "Nous relevons couramment plus de 30 °f de dureté sur le secteur de Lorgues et de la Dracénie. À ce niveau, le calcaire n'est plus un désagrément esthétique : il entartre le chauffe-eau, bloque les mitigeurs thermostatiques, réduit le rendement des résistances et abrège la vie des électroménagers. C'est l'une des premières causes d'intervention que nous constatons depuis 2005.",
        "Notre méthode ne varie pas : nous commençons par mesurer. Dureté, pH, présence de fer ou de particules, pression et débit disponibles, configuration du local. Un adoucisseur mal dimensionné régénère trop souvent, consomme du sel pour rien et finit par lasser. Un appareil calibré sur votre consommation réelle se fait oublier.",
        "Selon les résultats, le traitement n'est d'ailleurs pas toujours un adoucisseur : un simple filtre en tête d'installation, une cartouche à charbon actif sur l'eau de boisson ou un stérilisateur UV sur un forage suffisent parfois — et coûtent bien moins cher. Nous préférons vous le dire plutôt que de vendre l'appareil le plus cher du catalogue.",
      ],
      points: [
        'Dureté et pH mesurés sur place, avant tout devis',
        'Appareil dimensionné sur votre consommation réelle',
        'Solutions alternatives proposées quand elles suffisent',
        'Mise en service, réglages et suivi assurés par nos soins',
      ],
    },

    process: [
      { title: 'Étude personnalisée', text: "Analyse de votre eau, relevé de la dureté et du débit, examen du local technique et de vos usages." },
      { title: 'La préconisation', text: "Adoucisseur, filtration, charbon actif ou UV : nous ne proposons que ce qui est réellement utile chez vous." },
      { title: 'Installation professionnelle', text: "Pose en tête d'installation, by-pass, raccordement à l'évacuation et protection du réseau existant." },
      { title: 'Réglages et mise en service', text: "Paramétrage de la régénération, contrôle de la dureté en sortie et explication du fonctionnement." },
      { title: 'Suivi et entretien', text: "Contrôle annuel, réglage du sel et vérification des performances de l'appareil dans le temps." },
    ],

    info: {
      heading: "Pourquoi traiter votre eau ?",
      lead: "Le calcaire, le chlore et les particules ont un impact direct sur votre santé, vos installations et votre confort au quotidien.",
      bullets: [
        'Protège vos canalisations, votre chauffe-eau et votre robinetterie du calcaire.',
        "Prolonge la durée de vie du lave-linge, du lave-vaisselle et des résistances.",
        "Réduit la consommation de produits d'entretien, de lessive et d'adoucissant.",
        'Préserve la douceur de la peau, des cheveux et la tenue du linge.',
        'Améliore le goût de l’eau de boisson avec une filtration adaptée.',
      ],
    },

    faq: [
      { q: "L'eau adoucie est-elle potable ?", a: "Oui. L'adoucisseur échange le calcium et le magnésium contre du sodium, en quantité très faible. Nous laissons systématiquement un point d'eau non adoucie pour la boisson et la cuisine, et nous pouvons y ajouter une filtration à charbon actif." },
      { q: 'Quel entretien pour un adoucisseur ?', a: "Très peu : ajouter du sel quelques fois par an et faire contrôler l'appareil une fois par an. Nous vérifions la dureté en sortie, la régénération et l'état de la cuve et des joints." },
      { q: 'Combien de sel consomme un adoucisseur ?', a: "Cela dépend de la dureté de l'eau et de votre consommation. Sur un foyer de quatre personnes dans notre secteur, comptez généralement quelques sacs par an. Un appareil à régénération intelligente en consomme sensiblement moins qu'un modèle à horloge." },
      { q: 'Peut-on traiter une eau de forage ?', a: "Oui, mais rarement avec un adoucisseur seul. Un forage demande d'abord une filtration des particules (sable, boue, rouille), puis selon l'analyse un traitement du fer, un charbon actif et souvent une désinfection UV avant tout adoucissement." },
      { q: 'Où installe-t-on l’appareil ?', a: "En tête d'installation, au plus près de l'arrivée d'eau : garage, buanderie, cellier ou local technique. Il faut une évacuation à proximité et une prise électrique. Nous validons l'emplacement pendant la visite technique." },
    ],
  },
}

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
    "La chaudière à condensation existe en version gaz, fioul ou bois/granulés. Sur les trois, le principe est identique : au lieu de rejeter la chaleur contenue dans les fumées de combustion, l'appareil la récupère pour préchauffer l'eau qui repart vers vos radiateurs. Résultat, à besoin de chauffage égal, une consommation de combustible nettement plus faible qu'avec une chaudière classique — c'est aujourd'hui la technologie que nous posons par défaut, quelle que soit l'énergie retenue.",
  hero: { tags: 'plumbing', lock: 414 },

  fonctionnement: {
    heading: 'Comment ça fonctionne ?',
    paragraphs: [
      "Dans une chaudière classique, les fumées de combustion repartent chaudes par le conduit d'évacuation — c'est de l'énergie perdue. Dans une chaudière à condensation, ces fumées traversent un second échangeur avant de sortir : la vapeur d'eau qu'elles contiennent s'y condense et cède sa chaleur à l'eau de retour des radiateurs, celle qui rentre dans la chaudière déjà refroidie par son passage dans le circuit de chauffage.",
      "Ce préchauffage réduit d'autant le travail que la chaudière doit fournir pour remonter en température. La condensation n'est cependant efficace que si l'eau de retour arrive suffisamment froide dans l'échangeur — c'est pour cela que la chaudière donne sa pleine performance associée à un plancher chauffant basse température ou à des radiateurs basse température, qui fonctionnent justement avec une eau moins chaude qu'un radiateur classique.",
    ],
  },

  economique: {
    heading: 'Économique',
    icon: 'euro',
    bullets: [
      'Une consommation de combustible sensiblement plus faible pour un même confort, quelle que soit l’énergie (gaz, fioul, bois/granulés).',
      'Une TVA à taux réduit envisageable sur les contrats d’entretien, selon votre situation.',
      "Un financement mobilisable via l'éco-PTZ, sans avance de trésorerie sur le prêt.",
    ],
  },

  ecologique: {
    heading: 'Écologique',
    icon: 'leaf',
    bullets: [
      'Une combustion plus propre, avec moins d’énergie perdue par le conduit d’évacuation.',
      "Des fumées évacuées à une température nettement plus basse qu'une chaudière classique.",
      'Une consommation de combustible réduite, donc moins d’émissions pour un même besoin de chauffage.',
    ],
  },
}

/* ---------------------------------------------------------------------
   SOUS-PAGE : ADOUCISSEUR D'EAU
   Approfondit un point du métier « Traitement de l'eau ». Accessible via
   un bouton « En savoir plus » depuis la page Traitement de l'eau, et sa
   propre route directe.
------------------------------------------------------------------------*/
/* ================================================================ CONSEILS =
   Contenu éducatif générique sur les cinq métiers, pensé pour répondre aux
   questions les plus fréquentes avant même le premier appel. Renvoie vers
   les pages métier et les deux sous-pages approfondies (adoucisseur,
   chaudière à condensation). */
export const conseils = [
  {
    icon: 'droplet',
    title: 'Plomberie',
    tip: "Une pression d'eau qui chute ou un bruit de coup de bélier dans les canalisations ne se règle presque jamais tout seul : cela vient souvent d'un réducteur de pression mal réglé ou d'une fixation de tuyauterie à reprendre.",
    to: '/plomberie',
  },
  {
    icon: 'flame',
    title: 'Chauffage',
    tip: "Une pompe à chaleur mal dimensionnée coûte plus cher à l'usage qu'une machine plus petite mais bien calculée : méfiez-vous d'un devis qui ne mentionne pas de bilan thermique préalable.",
    to: '/chauffage',
  },
  {
    icon: 'snowflake',
    title: 'Climatisation',
    tip: "Un split qui givre ou qui tourne en continu sans jamais atteindre la consigne signale presque toujours une charge de fluide frigorigène insuffisante — à faire contrôler avant que le compresseur ne s'use prématurément.",
    to: '/climatisation',
  },
  {
    icon: 'bolt',
    title: 'Électricité',
    tip: "Un tableau électrique sans différentiel 30 mA sur chaque circuit, ou sans aucune protection dans les pièces d'eau, doit être considéré comme prioritaire — c'est la première cause d'accident domestique évitable.",
    to: '/electricite',
  },
  {
    icon: 'waves',
    title: 'Piscine',
    tip: "Une eau qui verdit malgré un traitement suivi vient rarement du produit lui-même : vérifiez d'abord le temps de filtration et l'état du filtre avant d'augmenter les doses de traitement.",
    to: '/piscine',
  },
]

export const adoucisseur = {
  slug: 'traitement-de-l-eau/adoucisseur',
  title: "L'adoucisseur d'eau",
  tagline: "Une eau plus douce, des équipements protégés, un entretien minimal.",
  intro:
    "L'eau du Var et de la Dracénie dépasse fréquemment 30 °f de dureté. L'adoucisseur reste la solution la plus efficace pour protéger durablement vos canalisations et vos équipements, tout en gagnant en confort au quotidien.",
  hero: { tags: 'bathroom', lock: 300 },

  avantages: {
    heading: 'Les avantages d’une eau adoucie',
    lead: "Au-delà du confort immédiat, l'eau adoucie change la donne sur la durée de vie de vos équipements et sur votre budget d'entretien.",
    bullets: [
      'Fini les dépôts de calcaire sur la robinetterie, les parois de douche et le carrelage.',
      'Une durée de vie nettement allongée pour le chauffe-eau, le lave-linge et le lave-vaisselle.',
      "Jusqu'à 30 % d'économies sur les produits d'entretien et les détergents.",
      'Une eau plus douce pour la peau, les cheveux et la tenue du linge.',
      'Un entretien minimal : quelques sacs de sel par an suffisent.',
    ],
  },

  installation: {
    heading: 'L’installation par PCE',
    lead: "Nous ne posons jamais un adoucisseur au forfait : chaque appareil est dimensionné sur votre eau et votre consommation réelles.",
    steps: [
      { title: 'Étude personnalisée', text: "Analyse de votre eau, relevé de la dureté et du débit, examen du local technique et de vos usages." },
      { title: 'La préconisation', text: "Nous ne proposons un adoucisseur que si c'est réellement la solution la plus adaptée à votre eau." },
      { title: 'Installation professionnelle', text: "Pose en tête d'installation, by-pass, raccordement à l'évacuation et protection du réseau existant." },
      { title: 'Réglages et mise en service', text: "Paramétrage de la régénération, contrôle de la dureté en sortie et explication du fonctionnement." },
      { title: 'Suivi et entretien', text: "Contrôle annuel, réglage du sel et vérification des performances de l'appareil dans le temps." },
    ],
  },

  faq: [
    { q: "L'eau adoucie est-elle potable ?", a: "Oui. L'adoucisseur échange le calcium et le magnésium contre du sodium, en quantité très faible. Nous laissons systématiquement un point d'eau non adoucie pour la boisson et la cuisine, et nous pouvons y ajouter une filtration à charbon actif." },
    { q: 'Quel entretien pour un adoucisseur ?', a: "Très peu : ajouter du sel quelques fois par an et faire contrôler l'appareil une fois par an. Nous vérifions la dureté en sortie, la régénération et l'état de la cuve et des joints." },
    { q: 'Combien de sel consomme un adoucisseur ?', a: "Cela dépend de la dureté de l'eau et de votre consommation. Sur un foyer de quatre personnes dans notre secteur, comptez généralement quelques sacs par an. Un appareil à régénération intelligente en consomme sensiblement moins qu'un modèle à horloge." },
    { q: 'Peut-on traiter une eau de forage ?', a: "Oui, mais rarement avec un adoucisseur seul. Un forage demande d'abord une filtration des particules (sable, boue, rouille), puis selon l'analyse un traitement du fer, un charbon actif et souvent une désinfection UV avant tout adoucissement." },
    { q: 'Où installe-t-on l’appareil ?', a: "En tête d'installation, au plus près de l'arrivée d'eau : garage, buanderie, cellier ou local technique. Il faut une évacuation à proximité et une prise électrique. Nous validons l'emplacement pendant la visite technique." },
  ],
}

export const serviceList = [
  services.plomberie,
  services.chauffage,
  services.climatisation,
  services.electricite,
  services.piscine,
  services.traitementEau,
]

/* ============================================================== DÉPANNAGE =*/
export const depannage = {
  title: 'Dépannage / Urgence',
  tagline: 'Une intervention rapide quand vous en avez besoin.',
  intro:
    "Fuite d'eau, panne de chauffage en plein hiver, coupure électrique, climatisation à l'arrêt en pleine canicule, filtration de piscine hors service : nous savons que cela n'attend pas. Un appel suffit pour obtenir un créneau, un diagnostic clair et un prix annoncé avant toute intervention.",
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
      "Depuis 2005, le dépannage représente une part constante de notre activité. C'est aussi la plus exigeante : quand une canalisation lâche un dimanche d'août ou qu'une pompe à chaleur s'arrête en janvier, il n'y a ni deuxième chance ni place pour l'approximation. Nous avons donc structuré notre organisation autour d'un principe unique : donner tout de suite une information fiable.",
      "Concrètement, dès votre appel, nous cherchons à comprendre le symptôme, nous vous guidons sur les gestes conservatoires — couper l'eau, isoler un circuit, arrêter la filtration — et nous vous annonçons un créneau que nous tenons. Nos véhicules embarquent le stock courant des cinq métiers, ce qui permet de résoudre la majorité des interventions en une seule visite.",
      "Enfin, aucun travail n'est engagé sans votre accord sur le prix. Le diagnostic est posé, la solution est expliquée, le montant est annoncé — et si la réparation peut attendre pour être faite correctement plutôt que dans l'urgence, nous vous le disons franchement.",
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
    text: "Dépose totale, reprise des réseaux en multicouche, douche à l'italienne et sèche-serviettes. Chantier livré en onze jours ouvrés.",
    tags: 'bathroom',
    lock: 901,
  },
  {
    title: 'Ballon thermodynamique en remplacement',
    trade: 'Chauffage',
    city: 'Taradeau',
    year: '2025',
    text: "Dépose d'un cumulus vétuste et pose d'un ballon thermodynamique, avec reprise du réseau d'eau chaude.",
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
    text: "Diagnostic par endoscopie sur une colonne obstruée : localisation du bouchon avant toute intervention destructive.",
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
    text: "Dépose et pose d'un ballon neuf, groupe de sécurité et raccordements refaits — étiquette PCE apposée.",
    tags: 'plumbing',
    lock: 907,
  },
  {
    title: 'Cuisine équipée, réseaux et évacuations',
    trade: 'Plomberie',
    city: 'Lorgues',
    year: '2025',
    text: "Alimentations et évacuations reprises pour l'îlot, le lave-vaisselle et le lave-linge, plan de travail livré propre.",
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
    text: "Repérage et câblage complet d'un tableau divisionnaire : chaque circuit différencié, chaque départ étiqueté.",
    tags: 'electricity',
    lock: 910,
  },
  {
    title: 'Tableau électrique livré fini',
    trade: 'Électricité',
    city: 'Lorgues',
    year: '2025',
    text: 'Mise aux normes complète : différentiels 30 mA, rangées organisées et repérage définitif.',
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
    text: "Réglettes LED encastrées au plafond, alimentation dissimulée et réglage de l'intensité.",
    tags: 'electrician',
    lock: 914,
  },
  {
    title: 'Coffret réseau et communication',
    trade: 'Électricité',
    city: 'Lorgues',
    year: '2025',
    text: "Brassage et repérage d'un coffret de communication (VDI), pour une distribution réseau propre dans tout le logement.",
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
    title: 'Gainable : gaines isolées en combles',
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
  {
    /* Nature exacte du chantier encore à confirmer avec le client. */
    title: 'Regard technique enterré',
    trade: 'Autres travaux',
    city: 'Var',
    year: '2026',
    text: "Pose d'un regard préfabriqué en fond de fouille, avant remblaiement.",
    tags: 'construction',
    lock: 930,
  },
  {
    /* Nature exacte du composant encore à confirmer avec le client. */
    title: 'Réception de matériel avant pose',
    trade: 'Autres travaux',
    city: 'Var',
    year: '2026',
    text: "Contrôle d'un composant technique de marque Euroclima, réceptionné avant installation.",
    tags: 'tools',
    lock: 931,
  },
]

/* ============================================================== À PROPOS ==*/
export const milestones = [
  { year: '2005', title: "Création de l'entreprise", text: "PCE ouvre son atelier à Lorgues, d'abord centré sur la plomberie et le sanitaire." },
  { year: '2011', title: 'Le chauffage et la climatisation', text: "Obtention de l'attestation de capacité fluides frigorigènes et premières pompes à chaleur." },
  { year: '2016', title: "L'électricité intégrée", text: "L'équipe s'étoffe pour livrer des chantiers complets, sans passer par la sous-traitance." },
  { year: '2020', title: 'Le pôle piscine', text: "Traitement de l'eau, filtration et automatisation viennent compléter les cinq métiers." },
  { year: '2025', title: 'Vingt ans de chantiers', text: 'Plus de 1 800 interventions réalisées entre Lorgues, la Dracénie et le Golfe.' },
]

export const stats = [
  { value: '20 ans', label: "d'expérience depuis 2005" },
  { value: '1 800+', label: 'chantiers réalisés' },
  { value: '5', label: 'métiers sous le même toit' },
  { value: '10 ans', label: 'de garantie décennale' },
]

export const values = [
  {
    icon: 'handshake',
    title: 'Un seul interlocuteur',
    text: "Du premier appel à la mise en service, c'est la même personne qui suit votre dossier. Aucune sous-traitance en cascade, aucun renvoi de responsabilité entre corps de métier.",
  },
  {
    icon: 'shieldCheck',
    title: 'Garantie décennale',
    text: "Toutes nos installations sont couvertes par notre assurance décennale. L'attestation vous est remise avec le devis, avant même le début des travaux.",
  },
  {
    icon: 'building',
    title: 'Une entreprise locale',
    text: "Installés à Lorgues depuis 2005, nous connaissons le bâti, l'eau et le climat de la région. Nous sommes toujours joignables, et jamais à plus de quarante minutes de chez vous.",
  },
  {
    icon: 'euro',
    title: 'Un prix tenu',
    text: "Le devis est détaillé poste par poste et il fait foi. Pas de supplément découvert en fin de chantier, pas de ligne « divers » qui gonfle la facture.",
  },
]

export const areasDetail = [
  {
    name: 'Lorgues',
    lead: 'Notre commune',
    text: "Siège de l'entreprise depuis 2005. Nous intervenons ici en quelques minutes, sur le centre ancien comme sur les quartiers de villas et les domaines viticoles alentour.",
    towns: ['Lorgues', 'Taradeau', 'Flayosc', 'Les Arcs', 'Vidauban', 'Le Thoronet'],
    tags: 'village',
    lock: 950,
  },
  {
    name: 'Dracénie',
    lead: 'Notre bassin quotidien',
    text: "Draguignan et les communes de la Dracénie constituent le cœur de notre activité : rénovations de villas, mises aux normes électriques et remplacements de systèmes de chauffage.",
    towns: ['Draguignan', 'Trans-en-Provence', 'La Motte', 'Châteaudouble', 'Figanières', 'Salernes'],
    tags: 'landscape',
    lock: 951,
  },
  {
    name: 'Golfe de Saint-Tropez',
    lead: 'Notre littoral',
    text: "Villas avec piscine, résidences secondaires et maisons de caractère : nous y assurons installations, automatisation des bassins et suivi saisonnier, y compris en votre absence.",
    towns: ['Sainte-Maxime', 'Grimaud', 'Cogolin', 'Le Plan-de-la-Tour', 'La Garde-Freinet', 'Saint-Tropez'],
    tags: 'architecture',
    lock: 952,
  },
]
