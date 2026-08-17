/* -------------------------------------------------------------------------
   Pages « sous-expertise » — 10 pages thématiques longue traîne, une par
   sujet technique très recherché. Chacune est reliée à un métier (pour le
   maillage vers les pages locales et la page métier principale) et porte
   son propre contenu unique (600-800 mots), sa FAQ et son schema.org.
---------------------------------------------------------------------------*/

export const expertisePages = {
  'installation-pompe-a-chaleur-var': {
    tradeKey: 'chauffagiste',
    servicePath: '/chauffage',
    h1: 'Installation de pompe à chaleur dans le Var',
    metaDescription:
      "Installation de pompe à chaleur air/air ou air/eau dans le Var par PCE : étude thermique, dimensionnement, pose et aides MaPrimeRénov'. Devis gratuit.",
    photo: { tags: 'heating', lock: 701 },
    intro: [
      "Remplacer une chaudière au fioul ou au gaz par une pompe à chaleur est aujourd'hui l'un des projets de rénovation énergétique les plus demandés dans le Var. PCE, basé à Lorgues, accompagne particuliers et professionnels de la Dracénie au Golfe de Saint-Tropez dans le choix, le dimensionnement et la pose de leur pompe à chaleur.",
      "Air/air, air/eau, avec ou sans production d'eau chaude sanitaire : chaque logement a ses contraintes, et un mauvais dimensionnement se paie en confort et en facture d'électricité pendant quinze ans. C'est pourquoi PCE réalise systématiquement une étude thermique avant de proposer un modèle et une puissance adaptés à votre maison.",
    ],
    sections: [
      {
        h2: 'Pompe à chaleur air/air ou air/eau : quelle différence ?',
        paragraphs: [
          "La pompe à chaleur air/air, aussi appelée climatisation réversible, chauffe et rafraîchit l'air ambiant via un ou plusieurs splits. Elle est rapide à installer et particulièrement adaptée aux maisons déjà bien isolées du Var, où les besoins de chauffage restent modérés.",
          "La pompe à chaleur air/eau, elle, alimente un circuit de chauffage central existant (radiateurs, plancher chauffant) ou produit de l'eau chaude sanitaire. Elle demande une étude plus poussée mais permet de remplacer une chaudière fioul ou gaz sans changer les émetteurs de chaleur, ce qui en fait la solution la plus courante en rénovation.",
        ],
        points: [
          'Étude thermique et dimensionnement sur mesure',
          'Choix de la marque et du modèle selon votre budget',
          "Pose du groupe extérieur, raccordement et mise en service",
          'Programmation et prise en main de la régulation',
        ],
      },
      {
        h2: 'Un COP élevé, la clé des économies',
        paragraphs: [
          "Le coefficient de performance (COP) mesure l'énergie restituée pour 1 kWh d'électricité consommé : un COP de 4 signifie 4 kWh de chaleur pour 1 kWh payé. PCE sélectionne des équipements avec un COP adapté à votre altitude et à votre exposition, car les performances annoncées en catalogue ne se vérifient sur le terrain qu'avec une pose soignée : longueur de tuyauterie limitée, isolation des liaisons frigorifiques et réglage précis de la régulation.",
        ],
      },
      {
        h2: "MaPrimeRénov' et aides pour votre pompe à chaleur",
        paragraphs: [
          "Contrairement aux chaudières à gaz, l'installation d'une pompe à chaleur reste éligible à MaPrimeRénov' et, selon votre profil, aux certificats d'économie d'énergie (CEE). PCE vous aide à identifier les dispositifs auxquels vous pouvez prétendre et vous fournit les documents nécessaires pour constituer votre dossier.",
        ],
      },
    ],
    faq: [
      {
        q: "Quelle puissance de pompe à chaleur pour une maison de 100 m² dans le Var ?",
        a: "Cela dépend de l'isolation, de l'altitude et de l'exposition du logement : une maison bien isolée dans la plaine dracénoise n'a pas les mêmes besoins qu'une villa plus exposée sur les hauteurs. PCE réalise une étude thermique avant de proposer une puissance, plutôt que d'appliquer un ratio générique au m².",
      },
      {
        q: 'Une pompe à chaleur air/eau peut-elle remplacer ma chaudière sans changer mes radiateurs ?',
        a: 'Dans la plupart des cas oui, à condition que les radiateurs existants soient suffisamment dimensionnés pour fonctionner à basse température. PCE vérifie ce point lors de l\'étude et propose, si besoin, le remplacement ciblé de certains émetteurs.',
      },
      {
        q: "Combien de temps dure l'installation ?",
        a: "Comptez généralement une à deux journées pour une pompe à chaleur air/eau raccordée à un réseau existant, et une demi-journée pour une unité air/air mono-split. Le remplacement complet d'une chaudière fioul avec dépose de la cuve peut nécessiter un jour supplémentaire.",
      },
      {
        q: "PCE intervient-il pour l'entretien annuel de la pompe à chaleur ?",
        a: "Oui, l'entretien annuel est obligatoire pour les pompes à chaleur de plus de 4 kW et conditionne le maintien de la garantie constructeur. PCE propose un contrat d'entretien avec contrôle des pressions, nettoyage des unités et vérification de l'étanchéité du circuit frigorifique.",
      },
    ],
  },

  'installation-climatisation-reversible-var': {
    tradeKey: 'climatisation',
    servicePath: '/climatisation',
    h1: 'Installation de climatisation réversible dans le Var',
    metaDescription:
      'Climatisation réversible dans le Var : mono-split, multi-split, gainable. Bilan thermique, pose soignée et entretien réglementaire. Devis gratuit avec PCE.',
    photo: { tags: 'aircon', lock: 702 },
    intro: [
      "Avec des étés de plus en plus chauds entre Lorgues, la Dracénie et le littoral varois, la climatisation réversible n'est plus un simple confort d'été : c'est aussi une solution de chauffage d'appoint économique en intersaison. PCE installe des systèmes mono-split, multi-split et gainable, dimensionnés pour rafraîchir efficacement sans faire exploser la facture d'électricité.",
      "Chaque projet commence par une visite sur place : orientation des pièces, isolation, présence d'un réseau de gaines existant ou non. Cette étape évite les deux erreurs les plus fréquentes en climatisation : un appareil surdimensionné qui consomme et fait du bruit inutilement, ou sous-dimensionné qui tourne en continu sans jamais atteindre la température souhaitée.",
    ],
    sections: [
      {
        h2: 'Mono-split, multi-split ou gainable : quel système choisir ?',
        paragraphs: [
          "Le mono-split climatise une seule pièce à partir d'une unité extérieure dédiée : solution la plus économique pour un salon ou une chambre. Le multi-split relie plusieurs unités intérieures à un seul groupe extérieur, idéal quand plusieurs pièces doivent être traitées sans multiplier les unités en façade.",
          "Le système gainable, dissimulé dans les combles ou un faux plafond, diffuse l'air via un réseau de gaines et de bouches discrètes : c'est la solution la plus qualitative visuellement, mais elle demande une réflexion en amont, souvent lors d'une construction ou d'une rénovation lourde.",
        ],
        points: [
          'Bilan thermique et choix de la puissance adaptée',
          'Pose de l\'unité extérieure dans le respect des règles de voisinage',
          'Raccordement frigorifique, électrique et mise en service',
          'Attestation de capacité pour la manipulation des fluides frigorigènes',
        ],
      },
      {
        h2: 'Silence et discrétion : deux critères trop souvent négligés',
        paragraphs: [
          "Une climatisation mal choisie ou mal posée devient vite une nuisance sonore, à l'intérieur comme pour le voisinage. PCE sélectionne des unités avec un niveau sonore adapté à la configuration du logement et soigne la pose de l'unité extérieure pour limiter les nuisances sur la durée.",
        ],
      },
      {
        h2: 'Entretien réglementaire de votre climatisation',
        paragraphs: [
          "Toute climatisation contenant plus de 2 kg de fluide frigorigène doit faire l'objet d'un contrôle d'étanchéité périodique. PCE propose un contrat d'entretien annuel incluant nettoyage des filtres et unités, contrôle des pressions et vérification de l'étanchéité du circuit, pour préserver les performances et la durée de vie de votre installation.",
        ],
      },
    ],
    faq: [
      {
        q: 'Quelle puissance de climatisation pour une chambre de 15 m² ?',
        a: "En général, un mono-split de 2,5 kW suffit pour une chambre standard bien isolée. Un logement mal isolé, très exposé au sud ou avec de grandes baies vitrées demandera une puissance supérieure : PCE calcule la puissance nécessaire pièce par pièce plutôt que d'appliquer un ratio générique.",
      },
      {
        q: 'Peut-on installer une climatisation gainable sans faux plafond existant ?',
        a: 'Oui, mais cela implique des travaux de création de faux plafond dans les pièces concernées. Pour une pose plus simple sans gros œuvre, un système multi-split reste souvent plus adapté.',
      },
      {
        q: 'La climatisation réversible peut-elle remplacer mon chauffage principal ?',
        a: "Elle peut assurer un chauffage d'appoint efficace en intersaison, mais PCE recommande de conserver un chauffage principal pour les journées les plus froides de l'hiver varois, notamment sur les hauteurs.",
      },
      {
        q: 'Faut-il une autorisation pour installer une unité extérieure de climatisation ?',
        a: "Selon la commune et la copropriété, une déclaration préalable de travaux ou l'accord de la copropriété peut être nécessaire pour l'unité extérieure. PCE vous informe des démarches applicables à votre situation avant de démarrer le chantier.",
      },
    ],
  },

  'renovation-salle-de-bain-var': {
    tradeKey: 'plombier',
    servicePath: '/plomberie',
    h1: 'Rénovation de salle de bains dans le Var',
    metaDescription:
      'Rénovation de salle de bains dans le Var par PCE : douche italienne, double vasque, accessibilité PMR. Un seul interlocuteur, devis gratuit et détaillé.',
    photo: { tags: 'bathroom', lock: 703 },
    intro: [
      "Douche italienne, double vasque, accessibilité PMR : la rénovation de salle de bains est l'un des chantiers de plomberie les plus fréquents que PCE réalise à Lorgues et dans tout le Var. Contrairement à une simple réparation, ce type de projet touche à la fois la plomberie, l'étanchéité, l'électricité et parfois le carrelage — d'où l'intérêt d'avoir un seul interlocuteur du premier relevé jusqu'à la remise des clés.",
      "PCE prend en charge l'intégralité du chantier : dépose de l'existant, modification des réseaux d'eau et d'évacuation, pose des équipements sanitaires, étanchéité et raccordements électriques, dans le respect des normes en vigueur.",
    ],
    sections: [
      {
        h2: 'Douche italienne : les points techniques à ne pas négliger',
        paragraphs: [
          "Une douche italienne réussie repose sur une pente d'évacuation calculée au millimètre, une étanchéité renforcée et un receveur ou un bac maçonné adapté à la configuration du sol. Une erreur à ce stade se traduit tôt ou tard par une infiltration, parfois invisible pendant plusieurs mois. PCE réalise systématiquement un test d'étanchéité avant la pose du carrelage final.",
        ],
        points: [
          "Dépose complète de l'ancienne salle de bains",
          "Modification des arrivées d'eau et évacuations",
          'Étanchéité renforcée sous carrelage (receveur, douche italienne)',
          'Pose de la robinetterie, du mobilier et des équipements',
          'Raccordements électriques aux normes (éclairage, prises)',
        ],
      },
      {
        h2: 'Accessibilité PMR : anticiper les besoins de demain',
        paragraphs: [
          "Barre d'appui, receveur extra-plat ou affleurant, siège de douche rabattable : de plus en plus de propriétaires du Var anticipent une salle de bains adaptée, que ce soit pour eux-mêmes ou pour un proche. PCE intègre ces équipements dès la conception du projet, ce qui évite des reprises coûteuses par la suite.",
        ],
      },
      {
        h2: 'Un devis détaillé avant tout démarrage',
        paragraphs: [
          "Parce qu'une rénovation de salle de bains touche plusieurs corps de métier, PCE établit un devis détaillé poste par poste avant tout démarrage de chantier, avec un planning clair pour limiter la gêne au quotidien.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps dure la rénovation complète d'une salle de bains ?",
        a: 'Comptez en moyenne une à deux semaines pour une rénovation complète (dépose, plomberie, étanchéité, carrelage, pose des équipements), selon la surface et l\'ampleur des travaux demandés.',
      },
      {
        q: 'Peut-on garder la même implantation des arrivées d\'eau pour réduire le coût ?',
        a: "Oui, conserver l'emplacement des arrivées d'eau et des évacuations existantes limite les travaux de plomberie et donc le coût global. PCE vous conseille sur les arbitrages possibles dès la visite technique.",
      },
      {
        q: 'La TVA à 5,5 % s\'applique-t-elle à une rénovation de salle de bains ?',
        a: 'Sous conditions (logement de plus de deux ans, travaux réalisés par un professionnel), la rénovation de salle de bains bénéficie généralement du taux de TVA réduit à 5,5 % sur la main d\'œuvre et les matériaux fournis par l\'artisan.',
      },
    ],
  },

  'depannage-plomberie-urgence-var': {
    tradeKey: 'plombier',
    servicePath: '/plomberie',
    h1: 'Dépannage plomberie en urgence dans le Var',
    metaDescription:
      "Dépannage plomberie en urgence dans le Var : fuite, dégorgement, chauffe-eau en panne. PCE intervient rapidement depuis Lorgues. Devis gratuit.",
    photo: { tags: 'plumber', lock: 704 },
    intro: [
      "Fuite d'eau qui s'aggrave, chauffe-eau qui ne chauffe plus, canalisation bouchée un dimanche soir : PCE intervient dans le Var pour les urgences de plomberie qui ne peuvent pas attendre. Basée à Lorgues, notre équipe se déplace dans la Dracénie et jusqu'au Golfe de Saint-Tropez pour limiter les dégâts et remettre votre installation en état rapidement.",
    ],
    sections: [
      {
        h2: 'Recherche de fuite non destructive',
        paragraphs: [
          "Une fuite invisible derrière un mur ou sous une dalle peut faire grimper une facture d'eau en quelques semaines. PCE utilise des méthodes de recherche non destructive pour localiser précisément l'origine de la fuite avant toute intervention, plutôt que de casser au hasard.",
        ],
        points: [
          'Détection de fuite sans destruction inutile',
          'Réparation ou remplacement de canalisation',
          'Dégorgement de canalisations bouchées',
          'Dépannage et remplacement de chauffe-eau',
          "Remise en état après dégât des eaux",
        ],
      },
      {
        h2: 'Chauffe-eau en panne : diagnostic avant remplacement',
        paragraphs: [
          "Un chauffe-eau qui ne produit plus d'eau chaude n'a pas toujours besoin d'être remplacé : résistance entartrée, thermostat défaillant ou groupe de sécurité bloqué sont des pannes courantes que PCE diagnostique avant de proposer, si nécessaire, un remplacement complet plutôt qu'une réparation qui ne tiendrait pas dans la durée.",
        ],
      },
      {
        h2: 'Dégorgement de canalisations',
        paragraphs: [
          "Évier qui ne s'évacue plus, WC bouché, odeurs persistantes : PCE dispose du matériel de dégorgement mécanique et haute pression pour traiter la plupart des engorgements, et identifie la cause pour éviter que le problème ne se reproduise.",
        ],
      },
    ],
    faq: [
      {
        q: 'PCE intervient-il le week-end pour une urgence de plomberie ?',
        a: 'Contactez-nous au 06 60 12 90 52 : selon la nature de l\'urgence et notre planning, nous nous efforçons d\'intervenir rapidement, y compris en dehors des horaires habituels, pour les situations qui présentent un risque de dégât des eaux.',
      },
      {
        q: "Faut-il couper l'eau en attendant l'intervention en cas de fuite ?",
        a: "Oui, coupez l'arrivée d'eau générale dès que possible pour limiter les dégâts, et coupez également l'électricité si l'eau approche d'une installation électrique. Ce réflexe simple limite considérablement l'ampleur des dommages en attendant notre intervention.",
      },
      {
        q: 'Comment savoir si mon chauffe-eau doit être réparé ou remplacé ?',
        a: 'Au-delà de 10-12 ans, ou en cas de panne récurrente, le remplacement est souvent plus économique qu\'une réparation. PCE établit un diagnostic clair et vous conseille objectivement.',
      },
    ],
  },

  'installation-chauffe-eau-thermodynamique-var': {
    tradeKey: 'chauffagiste',
    servicePath: '/chauffage',
    h1: 'Installation de chauffe-eau thermodynamique dans le Var',
    metaDescription:
      'Chauffe-eau thermodynamique dans le Var : COP élevé, économies sur la facture, aides à la rénovation énergétique. Installation par PCE, devis gratuit.',
    photo: { tags: 'water-heater', lock: 705 },
    intro: [
      "Le chauffe-eau thermodynamique utilise les calories de l'air ambiant pour chauffer l'eau sanitaire, avec une consommation électrique nettement inférieure à un cumulus classique. PCE installe ce type d'équipement dans le Var, en particulier dans les logements équipés d'un cellier, d'un garage ou d'une buanderie suffisamment ventilé pour alimenter la pompe à chaleur intégrée.",
    ],
    sections: [
      {
        h2: 'Un COP qui divise la facture d\'eau chaude par 2 à 3',
        paragraphs: [
          "Avec un coefficient de performance situé généralement entre 2,5 et 3,5, un chauffe-eau thermodynamique consomme 2 à 3 fois moins d'électricité qu'un cumulus électrique classique pour produire le même volume d'eau chaude.",
        ],
        points: [
          "Étude du volume d'air disponible dans le local d'installation",
          'Choix entre modèle sur air ambiant, gainé ou air extérieur',
          'Pose, raccordement hydraulique et électrique',
          'Réglage de la programmation et mise en service',
        ],
      },
      {
        h2: 'Quel volume d\'air faut-il pour bien fonctionner ?',
        paragraphs: [
          "Un chauffe-eau thermodynamique sur air ambiant a besoin d'un local suffisamment grand et ventilé (généralement à partir de 20 m³) pour puiser les calories nécessaires sans refroidir excessivement la pièce. Quand ce n'est pas possible, PCE propose des modèles gainables qui puisent l'air à l'extérieur ou dans un local technique dédié.",
        ],
      },
      {
        h2: 'Aides financières pour un chauffe-eau thermodynamique',
        paragraphs: [
          "Comme les pompes à chaleur, le chauffe-eau thermodynamique reste éligible à certaines aides à la rénovation énergétique selon votre situation. PCE vous accompagne dans la constitution du dossier et vous remet les justificatifs nécessaires.",
        ],
      },
    ],
    faq: [
      {
        q: 'Un chauffe-eau thermodynamique fait-il du bruit ?',
        a: "Il émet un bruit de fonctionnement comparable à celui d'un réfrigérateur, généralement inaudible depuis les pièces de vie s'il est installé dans un local technique, un garage ou une buanderie.",
      },
      {
        q: 'Peut-on installer un chauffe-eau thermodynamique dans un appartement ?',
        a: "C'est possible avec un modèle gainé qui puise l'air à l'extérieur via des gaines, mais la faisabilité dépend de la configuration du logement et de la copropriété. PCE évalue cette faisabilité lors de la visite technique.",
      },
      {
        q: "Quelle est la durée de vie d'un chauffe-eau thermodynamique ?",
        a: "Avec un entretien régulier, un chauffe-eau thermodynamique a une durée de vie comparable à un cumulus classique, généralement entre 12 et 15 ans.",
      },
    ],
  },

  'mise-aux-normes-electriques-var': {
    tradeKey: 'electricien',
    servicePath: '/electricite',
    h1: 'Mise aux normes électriques dans le Var',
    metaDescription:
      'Mise aux normes électriques NF C 15-100 dans le Var : tableau, disjoncteurs différentiels, mise à la terre. Diagnostic et travaux par PCE, devis gratuit.',
    photo: { tags: 'electrical-panel', lock: 706 },
    intro: [
      "Tableau électrique vétuste, absence de disjoncteur différentiel, prises non reliées à la terre : de nombreux logements anciens du Var ne répondent plus aux exigences de sécurité actuelles. PCE réalise des diagnostics et des mises aux normes électriques conformes à la norme NF C 15-100, que ce soit pour une vente, une location ou simplement votre sécurité au quotidien.",
    ],
    sections: [
      {
        h2: 'La norme NF C 15-100, en résumé',
        paragraphs: [
          "La norme NF C 15-100 encadre les installations électriques des logements : nombre de prises minimum par pièce, présence de disjoncteurs différentiels adaptés à chaque circuit, liaison équipotentielle dans les pièces d'eau. Une installation ancienne, même fonctionnelle, peut présenter des non-conformités invisibles au quotidien mais dangereuses en cas de défaut.",
        ],
        points: [
          "Diagnostic complet de l'installation existante",
          'Remplacement ou mise à niveau du tableau électrique',
          'Ajout de disjoncteurs différentiels par circuit',
          'Mise à la terre et liaison équipotentielle',
          'Attestation de conformité Consuel si nécessaire',
        ],
      },
      {
        h2: 'Tableau électrique : quand faut-il le remplacer ?',
        paragraphs: [
          "Un tableau électrique doit être revu dès lors qu'il manque de disjoncteurs différentiels, qu'il utilise encore des fusibles à cartouche, ou qu'il ne dispose plus de place pour ajouter un nouveau circuit. PCE propose un tableau dimensionné pour vos besoins actuels et une réserve pour vos projets futurs.",
        ],
      },
      {
        h2: 'Vente ou location : le diagnostic électrique obligatoire',
        paragraphs: [
          "Pour toute vente d'un logement dont l'installation électrique a plus de 15 ans, un diagnostic électrique est obligatoire. PCE réalise les travaux de mise en conformité identifiés par ce diagnostic, avec un compte rendu détaillé remis au propriétaire.",
        ],
      },
    ],
    faq: [
      {
        q: 'Mon installation électrique est ancienne mais fonctionne bien, dois-je la refaire entièrement ?',
        a: 'Pas nécessairement. PCE réalise d\'abord un diagnostic pour identifier les points réellement dangereux et propose une mise aux normes ciblée plutôt qu\'une réfection systématique et coûteuse.',
      },
      {
        q: "Combien de temps dure une mise aux normes de tableau électrique ?",
        a: 'Le remplacement d\'un tableau électrique se réalise généralement en une journée, avec une coupure de courant limitée à la durée des raccordements.',
      },
      {
        q: 'Une mise aux normes électrique ouvre-t-elle droit à la TVA réduite ?',
        a: 'Oui, sous conditions, les travaux de mise aux normes électrique bénéficient généralement du taux de TVA réduit à 5,5 % ou 10 % selon la nature exacte des travaux.',
      },
    ],
  },

  'installation-borne-recharge-vehicule-electrique-var': {
    tradeKey: 'electricien',
    servicePath: '/electricite',
    h1: 'Installation de borne de recharge pour véhicule électrique dans le Var',
    metaDescription:
      'Installation de borne de recharge IRVE dans le Var : puissance adaptée, ligne dédiée, aides disponibles. Électricien qualifié PCE, devis gratuit.',
    photo: { tags: 'ev-charger', lock: 707 },
    intro: [
      "Avec l'essor des véhicules électriques et hybrides rechargeables dans le Var, de plus en plus de particuliers et d'entreprises équipent leur garage ou leur parking d'une borne de recharge (IRVE). PCE, électricien basé à Lorgues, installe des bornes adaptées à votre véhicule et à la puissance disponible sur votre installation électrique.",
    ],
    sections: [
      {
        h2: 'Quelle puissance de borne choisir ?',
        paragraphs: [
          "Une borne de 7,4 kW en monophasé permet de recharger une batterie de citadine électrique en une nuit, tandis qu'une borne triphasée de 11 ou 22 kW réduit ce temps pour les véhicules compatibles. PCE vérifie la puissance disponible sur votre compteur avant de recommander une puissance de borne.",
        ],
        points: [
          'Étude de la puissance disponible et du besoin réel',
          "Choix de la borne selon le véhicule et l'usage",
          'Tirage de ligne dédiée et pose du disjoncteur différentiel adapté',
          'Fixation, raccordement et mise en service de la borne',
        ],
      },
      {
        h2: 'IRVE : une qualification obligatoire pour l\'installateur',
        paragraphs: [
          "L'installation d'une borne de recharge de plus de 3,7 kW impose que l'électricien soit qualifié IRVE, condition également requise pour bénéficier de certaines aides. PCE dispose des compétences nécessaires pour réaliser une installation conforme.",
        ],
      },
      {
        h2: 'Aides pour l\'installation d\'une borne de recharge',
        paragraphs: [
          "Selon votre situation, plusieurs aides peuvent réduire le coût d'installation d'une borne de recharge, notamment via le crédit d'impôt ou des dispositifs spécifiques aux copropriétés. PCE vous oriente vers les justificatifs à conserver pour vos démarches.",
        ],
      },
    ],
    faq: [
      {
        q: 'Puis-je installer une borne de recharge sur une prise standard existante ?',
        a: "Ce n'est pas recommandé pour un usage régulier : une prise standard n'est pas dimensionnée pour la charge continue d'un véhicule électrique et présente un risque de surchauffe. Une ligne dédiée avec disjoncteur différentiel adapté est nécessaire.",
      },
      {
        q: 'Faut-il l\'accord de la copropriété pour installer une borne dans un parking collectif ?',
        a: 'Oui, le « droit à la prise » encadre cette démarche : le syndic doit être informé et ne peut s\'opposer au projet que pour des motifs sérieux et légitimes.',
      },
      {
        q: "Combien de temps prend l'installation d'une borne de recharge ?",
        a: "Pour une installation individuelle avec ligne dédiée depuis le tableau électrique, comptez généralement une demi-journée à une journée selon la distance entre le tableau et l'emplacement de la borne.",
      },
    ],
  },

  'entretien-piscine-var': {
    tradeKey: 'pisciniste',
    servicePath: '/piscine',
    h1: 'Entretien de piscine dans le Var',
    metaDescription:
      'Entretien de piscine dans le Var : contrat annuel, traitement au sel ou au chlore, hivernage. PCE assure un suivi régulier de votre bassin, devis gratuit.',
    photo: { tags: 'pool', lock: 708 },
    intro: [
      "Une piscine mal entretenue s'encrasse vite sous le soleil du Var, entre pollen, poussière et forte fréquentation estivale. PCE propose un entretien régulier de votre bassin — filtration, traitement de l'eau, hivernage — pour garder une eau saine toute la saison, avec ou sans contrat annuel selon vos besoins.",
    ],
    sections: [
      {
        h2: 'Contrat d\'entretien : ce qui est inclus',
        paragraphs: [
          "Un contrat d'entretien PCE comprend le contrôle et l'ajustement du traitement de l'eau, le nettoyage du bassin et des paniers de skimmer, le contrôle du système de filtration, et un suivi technique du local technique. La fréquence des passages s'adapte à la saison : plus soutenue en été, réduite en hiver.",
        ],
        points: [
          'Contrôle et ajustement du pH et du taux de désinfectant',
          'Nettoyage du bassin, des paniers et du filtre',
          'Vérification du bon fonctionnement de la pompe de filtration',
          'Hivernage actif ou passif en fin de saison',
          "Remise en route et équilibrage de l'eau au printemps",
        ],
      },
      {
        h2: 'Traitement au sel ou au chlore : lequel choisir ?',
        paragraphs: [
          "L'électrolyse au sel produit son propre chlore par réaction électrochimique, avec une eau généralement plus douce que le chlore traditionnel, au prix d'un investissement initial plus élevé. Le traitement au chlore reste plus simple à mettre en œuvre mais demande un suivi plus régulier. PCE vous aide à choisir selon votre usage et votre budget.",
        ],
      },
      {
        h2: 'Hivernage : protéger votre piscine hors saison',
        paragraphs: [
          "Dans le Var, PCE recommande le plus souvent un hivernage actif, qui maintient la filtration au ralenti pour éviter le développement d'algues, tout en réduisant la consommation électrique par rapport à une filtration estivale complète.",
        ],
      },
    ],
    faq: [
      {
        q: 'À quelle fréquence faut-il faire tourner la filtration de la piscine en été ?',
        a: "En règle générale, comptez une durée de filtration équivalente à la moitié de la température de l'eau, répartie sur les heures les plus chaudes de la journée.",
      },
      {
        q: 'Mon eau est trouble malgré un traitement régulier, que faire ?',
        a: 'Une eau trouble malgré un traitement correct indique souvent un problème de filtration plutôt qu\'un problème chimique. PCE diagnostique l\'origine avant de recommander une solution.',
      },
      {
        q: 'Faut-il vidanger complètement la piscine chaque année ?',
        a: "Non, une vidange complète n'est généralement nécessaire que tous les 5 à 7 ans, ou en cas de problème d'équilibre de l'eau impossible à corriger autrement.",
      },
    ],
  },


  'plancher-chauffant-var': {
    tradeKey: 'chauffagiste',
    servicePath: '/chauffage',
    h1: 'Plancher chauffant dans le Var',
    metaDescription:
      'Plancher chauffant hydraulique dans le Var : construction neuve ou rénovation, compatible pompe à chaleur. Conception et pose par PCE, devis gratuit.',
    photo: { tags: 'floor-heating', lock: 710 },
    intro: [
      "Confort thermique homogène, absence de radiateurs visibles, compatibilité avec une pompe à chaleur basse température : le plancher chauffant hydraulique séduit de plus en plus de propriétaires du Var, en construction comme en rénovation. PCE conçoit et installe des systèmes de plancher chauffant adaptés à votre projet et à votre source de chaleur.",
    ],
    sections: [
      {
        h2: 'Plancher chauffant en construction neuve',
        paragraphs: [
          "En construction neuve, le plancher chauffant hydraulique s'intègre naturellement dans la dalle, avant la pose du revêtement de sol final. Associé à une pompe à chaleur air/eau fonctionnant à basse température, il offre l'un des couples les plus performants énergétiquement pour chauffer une maison du Var.",
        ],
        points: [
          'Étude du réseau hydraulique selon la surface et les pièces',
          'Pose des tubes et raccordement au collecteur',
          'Réglage de la régulation pièce par pièce',
          'Compatibilité vérifiée avec la source de chaleur',
        ],
      },
      {
        h2: 'Plancher chauffant en rénovation : c\'est possible',
        paragraphs: [
          "Contrairement à une idée reçue, le plancher chauffant peut s'installer en rénovation grâce à des systèmes à faible épaisseur, qui limitent la surépaisseur au sol et la perte de hauteur sous plafond. PCE évalue la faisabilité selon la nature du sol existant et le revêtement souhaité.",
        ],
      },
      {
        h2: 'Quels revêtements de sol sont compatibles ?',
        paragraphs: [
          "Carrelage et pierre naturelle offrent la meilleure conductivité thermique. Le parquet et les sols stratifiés sont également compatibles, à condition de choisir des références spécifiquement adaptées à la chaleur au sol, ce que PCE vérifie avant la pose.",
        ],
      },
    ],
    faq: [
      {
        q: 'Un plancher chauffant est-il plus long à chauffer qu\'un radiateur ?',
        a: "Oui, l'inertie du plancher chauffant est plus importante : la montée en température est plus lente, mais la chaleur restituée est plus stable et homogène dans la durée.",
      },
      {
        q: 'Peut-on installer une climatisation réversible avec un plancher chauffant ?',
        a: "Oui, les deux systèmes sont complémentaires : le plancher chauffant assure le chauffage en hiver pendant qu'une climatisation réversible prend le relais pour le rafraîchissement en été.",
      },
      {
        q: 'Quelle est la durée de vie d\'un plancher chauffant hydraulique ?',
        a: "Bien conçu et posé, un plancher chauffant hydraulique a une durée de vie très longue, souvent supérieure à 50 ans, les tubes étant conçus pour rester noyés dans la dalle sans entretien particulier.",
      },
    ],
  },
}

export const expertiseSlugs = Object.keys(expertisePages)
