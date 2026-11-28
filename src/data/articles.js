/* -------------------------------------------------------------------------
   Articles de conseils — 5 articles complets accessibles depuis /conseils.
   Même structure que les pages sous-expertise (paragraphes + FAQ), mais
   pensés comme du contenu éditorial : plus court, plus pratique, avec des
   liens vers les pages métier / sous-expertise / locales concernées.
---------------------------------------------------------------------------*/

export const articles = {
  'comment-choisir-pompe-a-chaleur': {
    title: 'Comment choisir sa pompe à chaleur ?',
    metaTitle: "Comment choisir sa pompe à chaleur dans le Var ?",
    metaDescription:
      "Comment choisir sa pompe à chaleur dans le Var : air/air ou air/eau, puissance et COP. Les conseils de PCE, installateur à Lorgues.",
    photo: { tags: 'heating', lock: 801 },
    relatedExpertise: 'installation-pompe-a-chaleur-var',
    relatedService: '/chauffage',
    intro: [
      "Choisir une pompe à chaleur ne se résume pas à comparer des prix catalogue : le type de pompe, sa puissance et son installation pèsent bien plus lourd sur votre confort et votre facture que la marque affichée sur l’appareil. Voici les critères que PCE vérifie systématiquement avant de conseiller un équipement à un habitant du Var.",
    ],
    sections: [
      {
        h2: 'Air/air ou air/eau : le premier choix à faire',
        paragraphs: [
          "La pompe à chaleur air/air (climatisation réversible) chauffe et rafraîchit l’air ambiant : simple à poser, elle convient bien aux logements déjà bien isolés où le chauffage n’est pas le poste principal. La pompe à chaleur air/eau alimente un réseau de chauffage central (radiateurs, plancher chauffant) et peut produire l’eau chaude sanitaire : c’est la solution la plus courante pour remplacer une chaudière fioul ou gaz vieillissante.",
          "Le choix dépend donc moins de vos préférences que de votre système de chauffage existant et de la nature de votre projet : remplacement de chaudière, construction neuve, ou simple besoin de rafraîchissement l’été.",
        ],
      },
      {
        h2: 'Bien dimensionner sa pompe à chaleur',
        paragraphs: [
          "Une pompe à chaleur surdimensionnée démarre et s’arrête en permanence (phénomène de cyclage), ce qui use prématurément le compresseur et dégrade le confort. Sous-dimensionnée, elle tourne en continu sans jamais atteindre la température souhaitée les jours les plus froids.",
          "Le bon dimensionnement repose sur une étude thermique qui prend en compte la surface, l’isolation, l’altitude et l’exposition du logement — pas seulement un ratio kW/m² approximatif. C’est l’étape que PCE ne saute jamais, y compris pour un simple remplacement à l’identique.",
        ],
      },
      {
        h2: 'Le COP, un indicateur à ne pas survaluer seul',
        paragraphs: [
          "Le coefficient de performance (COP) annoncé en catalogue est mesuré en laboratoire, dans des conditions optimales. Sur le terrain, il dépend fortement de la qualité de pose : longueur de tuyauterie, isolation des liaisons frigorifiques, réglage de la régulation. Deux installations avec le même modèle de pompe à chaleur peuvent afficher des performances réelles très différentes selon le soin apporté à la pose.",
        ],
      },
      {
        h2: 'Budget et coût à l’usage',
        paragraphs: [
          "L’installation d’une pompe à chaleur ouvre droit à des aides publiques, contrairement aux chaudières à gaz qui ont perdu cette éligibilité. Ces dispositifs imposent toutefois de passer par une entreprise certifiée RGE : PCE ne l’étant pas, nous n’en montons aucun dossier et nous le disons avant l’étude. Notre apport est ailleurs — un dimensionnement juste et une consommation annoncée avant travaux.",
        ],
      },
    ],
    faq: [
      {
        q: 'Une pompe à chaleur fonctionne-t-elle par grand froid ?',
        a: "Oui, les modèles récents restent performants jusqu’à des températures extérieures négatives, avec un rendement qui diminue progressivement. Dans le Var, les hivers restent suffisamment doux pour que ce point soit rarement limitant, sauf sur les hauteurs les plus exposées.",
      },
      {
        q: 'Faut-il un contrat d’entretien pour une pompe à chaleur ?',
        a: "L’entretien annuel est obligatoire au-delà de 4 kW et conditionne le maintien de la garantie constructeur. PCE propose un contrat incluant contrôle des pressions et vérification de l’étanchéité du circuit frigorifique.",
      },
      {
        q: 'Combien de temps pour amortir une pompe à chaleur par rapport à une chaudière gaz ?',
        a: "Cela dépend du prix de l’énergie, de l’isolation du logement et des aides obtenues, mais le différentiel de coût de fonctionnement se traduit généralement par un amortissement en quelques années, sur une durée de vie de l’équipement de 15 à 20 ans.",
      },
    ],
  },

  'entretien-climatisation-quand-et-pourquoi': {
    title: 'Entretien de la climatisation : quand et pourquoi ?',
    metaDescription:
      "Entretien de climatisation : obligation réglementaire, fréquence recommandée et ce qui est vérifié. Les explications de PCE, installateur dans le Var.",
    photo: { tags: 'aircon', lock: 802 },
    relatedExpertise: 'installation-climatisation-reversible-var',
    relatedService: '/climatisation',
    intro: [
      "Une climatisation qui fonctionne encore n’est pas forcément une climatisation en bon état : filtres encrassés, fluide en légère fuite, pression déréglée sont autant de problèmes invisibles au quotidien mais qui dégradent les performances et la durée de vie de l’appareil. Voici pourquoi et à quel rythme PCE recommande un entretien régulier dans le Var.",
    ],
    sections: [
      {
        h2: 'Pourquoi l’entretien est obligatoire au-delà de 2 kg de fluide',
        paragraphs: [
          "La réglementation impose un contrôle d’étanchéité périodique pour toute climatisation contenant plus de 2 kg de fluide frigorigène, en raison de l’impact environnemental de ces gaz en cas de fuite. La fréquence de ce contrôle dépend de la quantité de fluide présente dans le circuit.",
        ],
      },
      {
        h2: 'À quelle fréquence entretenir sa climatisation ?',
        paragraphs: [
          "Au-delà de l’obligation réglementaire, PCE recommande un entretien annuel avant la saison chaude pour tous les systèmes, mono-split comme gainable. C’est le moment idéal pour nettoyer les filtres, vérifier les pressions et s’assurer que l’appareil est prêt à fonctionner efficacement pendant les pics de chaleur du Var.",
        ],
      },
      {
        h2: 'Ce que comprend un entretien complet',
        paragraphs: [
          "Un entretien PCE comprend le nettoyage des filtres et des unités intérieures, le contrôle des pressions du circuit frigorifique, la vérification de l’écoulement des condensats et le contrôle d’étanchéité réglementaire quand il s’applique. Une climatisation qui fuit lentement perd en performance sans que l’utilisateur s’en rende toujours compte immédiatement — d’où l’intérêt d’un contrôle régulier plutôt que d’attendre une panne.",
        ],
      },
    ],
    faq: [
      {
        q: 'Que se passe-t-il si je n’entretiens jamais ma climatisation ?',
        a: "Les filtres s’encrassent, le rendement baisse progressivement et la consommation électrique augmente pour un résultat de moins en moins satisfaisant. À terme, l’absence d’entretien peut aussi accélérer l’usure du compresseur.",
      },
      {
        q: 'Puis-je nettoyer moi-même les filtres de ma climatisation ?',
        a: "Oui, le nettoyage des filtres accessibles est une opération simple que vous pouvez réaliser tous les 1 à 2 mois en saison d’utilisation intensive. Le contrôle des pressions et de l’étanchéité, en revanche, nécessite l’intervention d’un professionnel équipé.",
      },
      {
        q: "L’entretien est-il différent pour un système gainable ?",
        a: "Le principe reste le même, mais l’accès aux filtres et aux bouches de diffusion demande davantage de temps sur un système gainable. PCE en tient compte dans la durée prévue pour l’intervention.",
      },
    ],
  },

  'quand-refaire-tableau-electrique': {
    title: 'Quand faut-il refaire son tableau électrique ?',
    metaDescription:
      "Quand refaire son tableau électrique : signes d’alerte, norme NF C 15-100 et anticipation des besoins futurs. Les conseils de PCE, électricien dans le Var.",
    photo: { tags: 'electrical-panel', lock: 804 },
    relatedExpertise: 'mise-aux-normes-electriques-var',
    relatedService: '/electricite',
    intro: [
      "Un tableau électrique qui fonctionne au quotidien n’est pas nécessairement un tableau sûr : dans de nombreux logements anciens du Var, l’absence de disjoncteur différentiel ou l’usage de fusibles à cartouche passe inaperçue jusqu’à un incident. Voici les signes qui doivent vous alerter, selon PCE.",
    ],
    sections: [
      {
        h2: 'Les signes qui doivent alerter',
        paragraphs: [
          "Un tableau électrique mérite d’être révisé s’il ne dispose pas de disjoncteur différentiel par circuit, si le disjoncteur général saute fréquemment sans raison apparente, ou s’il ne reste plus d’emplacement disponible pour ajouter un circuit. Ces signes indiquent souvent une installation qui n’a pas suivi l’évolution des usages du logement.",
        ],
      },
      {
        h2: 'Fusibles à cartouche : un signal fort',
        paragraphs: [
          "La présence de fusibles à cartouche à l’ancienne, plutôt que des disjoncteurs modernes, indique généralement une installation qui n’a pas été révisée depuis plusieurs décennies. Ce type de protection est moins réactif face à un défaut électrique qu’un disjoncteur différentiel actuel.",
        ],
      },
      {
        h2: 'Anticiper vos futurs besoins (PAC, borne, clim)',
        paragraphs: [
          "Installer une pompe à chaleur, une borne de recharge ou une climatisation nécessite souvent d’ajouter un circuit dédié au tableau électrique. Plutôt que d’intervenir dans l’urgence à chaque nouveau projet, PCE recommande de dimensionner le tableau avec une réserve de disjoncteurs disponibles dès la première mise aux normes.",
        ],
      },
    ],
    faq: [
      {
        q: 'Combien coûte le remplacement d’un tableau électrique ?',
        a: 'Le coût dépend du nombre de circuits et du niveau de mise aux normes nécessaire. PCE établit un devis détaillé après diagnostic, plutôt qu’un forfait générique qui ne tiendrait pas compte de votre installation existante.',
      },
      {
        q: 'Puis-je rester dans mon logement pendant les travaux ?',
        a: 'Oui, le remplacement d’un tableau électrique se réalise généralement en une journée, avec une coupure de courant limitée à la durée des raccordements. PCE organise l’intervention pour limiter la gêne.',
      },
      {
        q: 'La mise aux normes est-elle obligatoire pour vendre mon bien ?',
        a: 'Le diagnostic électrique est obligatoire pour toute installation de plus de 15 ans lors d’une vente, mais la mise aux normes elle-même n’est pas systématiquement imposée à l’acte de vente. Elle reste cependant fortement recommandée pour la sécurité des occupants.',
      },
    ],
  },

  'preparer-piscine-pour-ete': {
    title: "Préparer sa piscine pour l’été",
    metaTitle: "Préparer sa piscine pour l’été dans le Var",
    metaDescription:
      "Préparer sa piscine pour l’été dans le Var : sortie d’hivernage, équilibrage de l’eau, vérification de la filtration. Les conseils de PCE, pisciniste.",
    photo: { tags: 'pool', lock: 805 },
    relatedExpertise: 'entretien-piscine-var',
    relatedService: '/piscine',
    intro: [
      "Chaque printemps, la remise en route de la piscine conditionne la qualité de l’eau pour toute la saison qui suit. Une sortie d’hivernage bâclée se traduit souvent par une eau verte ou trouble dès les premières chaleurs. Voici les étapes que PCE recommande avant la première baignade.",
    ],
    sections: [
      {
        h2: 'Sortie d’hivernage : les étapes clés',
        paragraphs: [
          "Retirer la bâche ou les flotteurs d’hivernage, nettoyer le bassin des feuilles et débris accumulés pendant l’hiver, puis remettre le niveau d’eau à sa hauteur normale sont les premières étapes. C’est aussi le moment de vérifier visuellement l’état du liner ou du revêtement après plusieurs mois sans surveillance quotidienne.",
        ],
      },
      {
        h2: 'Rééquilibrer l’eau avant la baignade',
        paragraphs: [
          "Après l’hiver, le pH et le taux de désinfectant sont presque toujours à corriger avant de pouvoir se baigner en toute sécurité. PCE recommande de tester l’eau avant tout traitement choc, pour ajuster les doses réellement nécessaires plutôt que de traiter à l’aveugle, ce qui gaspille du produit et peut déséquilibrer l’eau davantage.",
        ],
      },
      {
        h2: 'Vérifier la filtration avant la saison',
        paragraphs: [
          "Un filtre qui a tourné au ralenti tout l’hiver doit être nettoyé ou contre-lavé avant la remise en route à plein régime. PCE vérifie également le bon fonctionnement de la pompe de filtration à ce moment de l’année, car une panne détectée en avril se répare bien plus sereinement qu’en plein pic de fréquentation estivale.",
        ],
      },
    ],
    faq: [
      {
        q: 'Quand faut-il commencer la remise en route de la piscine ?',
        a: "Dans le Var, la sortie d’hivernage se fait généralement fin mars ou en avril, avant les premières chaleurs, pour avoir une eau stabilisée et claire dès les premiers beaux jours.",
      },
      {
        q: 'Mon eau est verte après l’hiver, est-ce grave ?',
        a: "Une eau verte après l’hivernage est fréquente et se corrige avec un traitement choc adapté suivi d’une filtration prolongée. Ce n’est généralement pas le signe d’un problème structurel, sauf si le phénomène persiste après plusieurs jours de traitement.",
      },
      {
        q: 'Faut-il un contrat d’entretien pour la remise en route au printemps ?',
        a: "Ce n’est pas obligatoire, mais cela évite les oublis (vérification de la pompe, dosage précis des produits) qui coûtent souvent plus cher à rattraper en cours de saison qu’un contrat d’entretien annuel.",
      },
    ],
  },

  /* ----------------------------------------------------------------------
     15 articles supplémentaires (extension SEO) — pompe à chaleur,
     climatisation, traitement de l'eau et piscine. Même structure que les
     5 articles historiques, avec une phrase de clôture commune rappelant
     la zone d'intervention élargie (Lorgues, Draguignan, Golfe de
     Saint-Tropez), pour homogénéiser le maillage de cette nouvelle vague
     de contenu éditorial.
  --------------------------------------------------------------------- */

  'comment-fonctionne-pompe-a-chaleur': {
    title: 'Comment fonctionne une pompe à chaleur ?',
    metaDescription:
      "Comment fonctionne une pompe à chaleur air/air ou air/eau : cycle frigorifique, COP et rendement, expliqués par PCE, installateur dans le Var.",
    photo: { tags: 'heating', lock: 1101 },
    relatedExpertise: 'installation-pompe-a-chaleur-var',
    relatedService: '/chauffage',
    intro: [
      "Une pompe à chaleur ne produit pas de chaleur au sens propre : elle la prélève dans l’air extérieur, même par temps froid, pour la restituer à l’intérieur du logement. Ce principe, contre-intuitif au premier abord, explique pourquoi elle consomme trois à quatre fois moins d’énergie qu’un chauffage électrique classique. Voici comment PCE l’explique à ses clients avant chaque installation dans le Var.",
    ],
    sections: [
      {
        h2: 'Le cycle frigorifique, en quatre étapes',
        paragraphs: [
          "Un fluide frigorigène circule en circuit fermé à travers quatre organes : l’évaporateur, le compresseur, le condenseur et le détendeur. À l’évaporateur, le fluide capte les calories de l’air extérieur et se transforme en gaz, même à basse température. Le compresseur augmente ensuite sa pression et sa température, avant que le condenseur ne cède cette chaleur à l’eau du circuit de chauffage ou à l’air intérieur. Le détendeur referme la boucle en ramenant le fluide à sa pression initiale.",
          "Ce cycle tourne en continu, modulant sa puissance selon les besoins réels du logement grâce à un compresseur inverter, qui évite les démarrages et arrêts brutaux responsables d’une usure prématurée.",
        ],
      },
      {
        h2: 'Air/air ou air/eau : deux circuits de restitution',
        paragraphs: [
          "Une pompe à chaleur air/air restitue directement la chaleur dans l’air ambiant, via des unités intérieures identiques à celles d’une climatisation réversible. Une pompe à chaleur air/eau chauffe l’eau d’un circuit de radiateurs ou de plancher chauffant, et peut aussi produire l’eau chaude sanitaire. Le fonctionnement du circuit frigorifique reste le même ; seule la destination finale de la chaleur change.",
        ],
      },
      {
        h2: 'Pourquoi elle fonctionne même en hiver',
        paragraphs: [
          "Même à 0 °C, l’air extérieur contient encore de l’énergie thermique exploitable : c’est la raison pour laquelle une pompe à chaleur continue de fonctionner par temps froid, avec un rendement qui diminue progressivement à mesure que la température baisse. Dans le Var, les hivers doux permettent de conserver un excellent rendement la majeure partie de l’année, sauf sur les points les plus hauts et exposés du département.",
        ],
      },
    ],
    faq: [
      { q: 'Une pompe à chaleur fait-elle du bruit ?', a: "L’unité extérieure émet un bruit modéré, comparable à celui d’un réfrigérateur puissant. Le bon emplacement du groupe et son installation sur plots anti-vibratiles limitent encore cette nuisance, un point que PCE étudie systématiquement avant la pose." },
      { q: "Faut-il isoler son logement avant d’installer une pompe à chaleur ?", a: "Ce n’est pas obligatoire mais fortement recommandé : plus le logement est isolé, plus la pompe à chaleur fonctionne à basse température de départ, ce qui améliore son rendement et réduit sa consommation." },
      { q: "Quelle est la durée de vie d’une pompe à chaleur ?", a: "Comptez généralement 15 à 20 ans, sous réserve d’un entretien annuel régulier incluant le contrôle des pressions et de l’étanchéité du circuit frigorifique." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu’à Sainte-Maxime, Les Issambres et l’ensemble du Golfe de Saint-Tropez.",
  },

  'combien-consomme-pompe-a-chaleur': {
    title: 'Combien consomme une pompe à chaleur ?',
    metaDescription:
      "Combien consomme une pompe à chaleur air/eau ou air/air : COP, facteurs qui influencent la facture et ordres de grandeur. Les repères de PCE dans le Var.",
    photo: { tags: 'heating', lock: 1102 },
    relatedExpertise: 'installation-pompe-a-chaleur-var',
    relatedService: '/chauffage',
    intro: [
      "La consommation d’une pompe à chaleur ne se lit pas sur une fiche technique mais se calcule à partir du besoin réel de chauffage du logement et du rendement de l’appareil sur l’année. Un même modèle peut afficher une facture très différente d’une maison à l’autre. Voici les repères que PCE utilise pour donner une estimation honnête à ses clients.",
    ],
    sections: [
      {
        h2: 'Le COP, indicateur clé mais incomplet',
        paragraphs: [
          "Le coefficient de performance (COP) indique combien de kWh de chaleur sont produits pour 1 kWh d’électricité consommé : un COP de 4 signifie 4 kWh restitués pour 1 kWh payé. Ce chiffre, mesuré en laboratoire dans des conditions fixes, ne reflète que partiellement la réalité du terrain, où la température extérieure varie en permanence — c’est pourquoi les professionnels préfèrent le SCOP (COP saisonnier), plus représentatif sur une année complète.",
        ],
      },
      {
        h2: 'Ce qui fait varier la facture réelle',
        paragraphs: [
          "L’isolation du logement, la température de consigne, la surface chauffée et la température de départ d’eau (plus basse avec un plancher chauffant qu’avec des radiateurs haute température) pèsent davantage sur la facture que le modèle choisi. Une pompe à chaleur surdimensionnée consomme aussi plus qu’annoncé, car elle cycle en permanence au lieu de moduler sa puissance en continu.",
        ],
      },
      {
        h2: 'Des ordres de grandeur, pas une promesse',
        paragraphs: [
          "Pour un logement correctement isolé dans le Var, il est courant d’observer une division par trois de la facture de chauffage par rapport à des convecteurs électriques, et par deux par rapport à une chaudière fioul ancienne. Ces ordres de grandeur doivent toujours être confirmés par une étude thermique du logement, seule capable de tenir compte de vos usages réels — c’est l’étape que PCE réalise avant tout devis.",
        ],
      },
    ],
    faq: [
      { q: "Le prix de l’électricité peut-il annuler l’intérêt d’une pompe à chaleur ?", a: "Non : même avec des tarifs en hausse, le rapport 1 kWh consommé pour 3 à 4 kWh restitués reste très favorable comparé à un chauffage électrique direct ou à une chaudière fioul." },
      { q: "Un contrat d’entretien réduit-il la consommation ?", a: "Indirectement, oui : un circuit frigorifique bien entretenu, sans perte de charge en fluide, conserve son rendement dans le temps. Une pompe à chaleur négligée voit sa consommation dériver progressivement." },
      { q: 'Peut-on suivre sa consommation en temps réel ?', a: "La plupart des modèles récents proposent une application de suivi. PCE peut aussi installer un compteur électrique dédié pour isoler précisément la consommation de la pompe à chaleur du reste du logement." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu’à Sainte-Maxime, Les Issambres et l’ensemble du Golfe de Saint-Tropez.",
  },

  'pompe-a-chaleur-ou-chaudiere-gaz': {
    title: 'Pompe à chaleur ou chaudière gaz : que choisir ?',
    metaDescription:
      "Pompe à chaleur ou chaudière à gaz : comparatif du coût à l’achat, à l’usage et du confort. Les conseils neutres de PCE, qui installe les deux.",
    photo: { tags: 'heating', lock: 1103 },
    relatedExpertise: 'installation-pompe-a-chaleur-var',
    relatedService: '/chauffage',
    intro: [
      "Face au remplacement d’une chaudière, la question revient systématiquement : rester au gaz ou basculer vers une pompe à chaleur ? PCE installe les deux solutions et n’a pas d’intérêt à en privilégier une par principe — voici les critères qui font réellement pencher la balance d’un projet à l’autre.",
    ],
    sections: [
      {
        h2: "Le coût à l’achat et à l’usage",
        paragraphs: [
          "Une chaudière à gaz à condensation coûte moins cher à l’achat qu’une pompe à chaleur air/eau. L’écart se resserre à l’usage : la pompe à chaleur puise une large part de son énergie dans l’air extérieur, là où la chaudière paie chaque kilowattheure. Sur la durée de vie de l’installation, c’est la consommation annuelle, et non le prix d’achat, qui départage les deux solutions.",
        ],
      },
      {
        h2: 'Le coût de fonctionnement',
        paragraphs: [
          "Le kWh électrique reste plus cher que le kWh de gaz, mais une pompe à chaleur restitue 3 à 4 kWh de chaleur par kWh consommé, quand une chaudière gaz à condensation reste plafonnée autour de 1,05 à 1,1 kWh utile par kWh de gaz brûlé. Sur la durée, la pompe à chaleur l’emporte généralement, sauf logement mal isolé où elle doit tourner en continu.",
        ],
      },
      {
        h2: 'Les contraintes techniques et le confort',
        paragraphs: [
          "La chaudière gaz nécessite un raccordement au réseau ou une cuve, et produit une eau de chauffage à haute température bien adaptée aux anciens radiateurs. La pompe à chaleur air/eau fonctionne idéalement avec un plancher chauffant ou des radiateurs basse température, et son unité extérieure demande un emplacement dégagé, à distance raisonnable des limites de propriété pour le confort acoustique du voisinage.",
        ],
      },
    ],
    faq: [
      { q: 'Peut-on garder ses radiateurs existants avec une pompe à chaleur ?', a: "Souvent oui, à condition qu’ils soient correctement dimensionnés pour fonctionner à basse température. PCE vérifie ce point avant de proposer un remplacement de chaudière par une pompe à chaleur." },
      { q: 'Une chaudière gaz reste-t-elle un bon choix en 2026 ?', a: "Elle reste pertinente en relève de chaudière existante ou en solution bi-énergie, mais son avenir réglementaire est incertain et elle a perdu l’essentiel des aides financières, ce qui doit peser dans la décision." },
      { q: 'Existe-t-il une solution hybride ?', a: "Oui, la pompe à chaleur hybride associe un module thermodynamique à une chaudière gaz existante, qui prend le relais lors des pics de froid. C’est une option intéressante en rénovation quand l’isolation ne permet pas un tout pompe à chaleur." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu’à Sainte-Maxime, Les Issambres et l’ensemble du Golfe de Saint-Tropez.",
  },

  'quelle-climatisation-choisir-maison-var': {
    title: 'Quelle climatisation choisir pour sa maison dans le Var ?',
    /* <title> court (48 avec « — PCE ») : le titre y dépassait 60. */
    metaTitle: 'Quelle climatisation choisir dans le Var ?',
    metaDescription:
      "Quelle climatisation choisir dans le Var : mono-split, multi-split ou gainable selon votre logement. Les conseils de PCE, installateur à Lorgues.",
    photo: { tags: 'aircon', lock: 1104 },
    relatedExpertise: 'installation-climatisation-reversible-var',
    relatedService: '/climatisation',
    intro: [
      "Entre les étés de plus en plus chauds du Var et le besoin de ne pas dénaturer une façade en pierre, le choix d’une climatisation adaptée dépend moins d’une préférence de marque que de la configuration réelle du logement. Voici comment PCE oriente ses clients.",
    ],
    sections: [
      {
        h2: 'Une seule pièce à traiter : le mono-split',
        paragraphs: [
          "Pour une chambre, un salon ou un bureau isolé, une climatisation mono-split reste la solution la plus simple et la plus économique : un groupe extérieur pour une unité intérieure. C’est le bon choix quand le besoin de rafraîchissement se concentre sur une seule pièce du logement.",
        ],
      },
      {
        h2: 'Plusieurs pièces : multi-split ou gainable',
        paragraphs: [
          "Le multi-split raccorde deux à cinq unités intérieures à un seul groupe extérieur : une solution qui limite l’impact sur la façade tout en traitant plusieurs pièces, avec un réglage indépendant par unité.",
          "Le système gainable, lui, dissimule l’ensemble du réseau dans les combles ou un faux plafond : seules des grilles de diffusion linéaires restent visibles. C’est l’option la plus discrète, mais elle demande un accès technique suffisant et se prête mieux à une rénovation lourde ou à une construction neuve.",
        ],
      },
      {
        h2: 'Les marques que PCE installe',
        paragraphs: [
          "Nous posons principalement du matériel Daikin, Mitsubishi Electric et Midea, choisis pour leur fiabilité éprouvée sur le terrain, la disponibilité des pièces détachées dans le Var et un bon rapport entre performance énergétique et niveau sonore. Le choix précis du modèle dépend ensuite du dimensionnement calculé pièce par pièce, pas d’une préférence de marque a priori.",
        ],
      },
    ],
    faq: [
      { q: 'Le gainable est-il plus cher que le multi-split ?', a: "Généralement oui, à surface équivalente, en raison du réseau de gaines à poser. Il reste néanmoins compétitif dès lors qu’on comptabilise l’esthétique et l’absence d’unités intérieures visibles." },
      { q: 'Une climatisation réversible peut-elle remplacer un chauffage ?', a: "Elle peut le compléter efficacement en mi-saison et sur les logements bien isolés, mais elle est rarement recommandée comme unique source de chauffage sur tout l’hiver, notamment sur les points les plus frais du Var." },
      { q: "Combien de temps dure l’installation ?", a: 'Comptez une journée pour un mono-split ou un multi-split à deux unités, et deux à trois jours pour un gainable complet, selon l’accessibilité des combles.' },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu’à Sainte-Maxime, Les Issambres et l’ensemble du Golfe de Saint-Tropez.",
  },

  'climatisation-gainable-ou-split': {
    title: 'Climatisation gainable ou split : quelles différences ?',
    /* <title> court (55 avec « — PCE ») : le titre y dépassait 60. */
    metaTitle: 'Climatisation gainable ou split : les différences',
    metaDescription:
      "Climatisation gainable ou split : discrétion, coût, faisabilité. Le comparatif de PCE pour bien choisir votre installation dans le Var.",
    photo: { tags: 'aircon', lock: 1105 },
    relatedExpertise: 'installation-climatisation-reversible-var',
    relatedService: '/climatisation',
    intro: [
      "Gainable ou split : les deux technologies climatisent aussi efficacement l’une que l’autre, mais elles ne répondent pas au même projet. PCE détaille ici les critères qui doivent réellement guider ce choix.",
    ],
    sections: [
      {
        h2: "L’esthétique et la discrétion",
        paragraphs: [
          "Le split laisse une unité murale visible dans chaque pièce traitée. Le gainable, lui, ne montre que des grilles de diffusion linéaires au plafond : c’est l’option à privilégier quand l’aspect intérieur prime, notamment dans les propriétés de caractère du Var où une unité murale dénaturerait une pièce à l’architecture soignée.",
        ],
      },
      {
        h2: 'La faisabilité technique',
        paragraphs: [
          "Le gainable nécessite un espace suffisant en combles ou en faux plafond pour faire courir le réseau de gaines et loger le caisson : une contrainte réelle en rénovation si la hauteur sous plafond est déjà limitée. Le split, plus compact, s’adapte à quasiment toute configuration, ce qui en fait souvent la seule option viable sur une maison de plain-pied sans combles aménageables.",
        ],
      },
      {
        h2: 'Le coût et le délai de pose',
        paragraphs: [
          "À nombre de pièces égal, un système gainable coûte généralement plus cher qu’un multi-split, en raison du temps de pose du réseau de gaines et du calorifugeage nécessaire. En contrepartie, un seul caisson suffit à traiter toute une maison, ce qui simplifie la maintenance par rapport à plusieurs unités intérieures split.",
        ],
      },
    ],
    faq: [
      { q: 'Peut-on mélanger gainable et split dans la même maison ?', a: 'Oui, c’est une solution fréquente : gainable pour les pièces de vie où la discrétion prime, split pour une pièce isolée comme un bureau ou une suite parentale.' },
      { q: 'Le gainable est-il plus difficile à entretenir ?', a: "L’accès aux filtres demande un peu plus de temps qu’un split mural, mais reste une opération standard pour un professionnel équipé. PCE en tient compte dans la durée de ses contrats d’entretien." },
      { q: 'Quelle solution est la plus silencieuse ?', a: 'Le gainable a un léger avantage, le caisson étant déporté dans les combles plutôt que dans la pièce à vivre, ce qui limite le bruit perçu au niveau des grilles de diffusion.' },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu’à Sainte-Maxime, Les Issambres et l’ensemble du Golfe de Saint-Tropez.",
  },

  'comment-filtrer-eau-forage': {
    title: "Comment filtrer l’eau d’un forage ?",
    metaDescription:
      "Comment filtrer l’eau d’un forage : particules, fer, dureté et désinfection. La méthode de PCE pour une eau de forage saine dans le Var.",
    photo: { tags: 'water-softener', lock: 1109 },
    relatedService: '/traitement-de-l-eau',
    intro: [
      "Contrairement à l’eau du réseau public, l’eau d’un forage n’est ni contrôlée ni traitée en amont : sa qualité dépend entièrement de la nature du sous-sol et impose une analyse avant tout usage domestique. Voici la méthode que PCE applique pour traiter une eau de forage dans le Var.",
    ],
    sections: [
      {
        h2: "L’analyse, toujours en premier",
        paragraphs: [
          "Avant de proposer le moindre équipement, PCE fait analyser l’eau du forage : présence de particules (sable, boue, rouille), teneur en fer et manganèse, dureté, pH et, si besoin, présence bactériologique. Cette analyse oriente l’ensemble du traitement à mettre en place, qui varie fortement d’un forage à l’autre.",
        ],
      },
      {
        h2: 'La filtration des particules, en première étape',
        paragraphs: [
          "Un filtre à particules en tête d’installation retient le sable, la boue et la rouille avant qu’ils n’atteignent la robinetterie et les équipements. C’est une étape quasiment systématique sur une eau de forage, même lorsque l’eau paraît claire à l’œil nu.",
        ],
      },
      {
        h2: 'Fer, dureté et désinfection : des traitements ciblés',
        paragraphs: [
          "Un excès de fer se traite par oxydation puis filtration dédiée, sous peine de tacher durablement la robinetterie et le linge. Enfin, en l’absence de désinfection naturelle comme sur le réseau public, un traitement UV ou une chloration ponctuelle sécurise l’eau sur le plan bactériologique, en particulier pour un usage de boisson.",
        ],
      },
    ],
    faq: [
      { q: "L’eau de forage est-elle potable sans traitement ?", a: 'Pas par défaut : seule une analyse bactériologique et physico-chimique récente peut le confirmer. PCE recommande systématiquement cette analyse avant tout usage de boisson.' },
      { q: "Faut-il refaire l’analyse régulièrement ?", a: "Oui, une fois par an au minimum, car la qualité d’un forage peut évoluer avec les saisons, les pluies et le niveau de la nappe." },
      { q: 'Un forage nécessite-t-il toujours plusieurs équipements ?', a: "Le plus souvent oui : filtration de particules en première étape, puis un ou plusieurs traitements ciblés selon les résultats d’analyse. Rarement un seul appareil suffit à tout traiter." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu’à Sainte-Maxime, Les Issambres et l’ensemble du Golfe de Saint-Tropez.",
  },

  'a-quoi-sert-traitement-uv': {
    title: "À quoi sert le traitement UV de l’eau ?",
    metaDescription:
      "Traitement UV de l’eau : principe, efficacité et cas d’usage. Les explications de PCE sur cette désinfection sans produit chimique, installée dans le Var.",
    photo: { tags: 'water-softener', lock: 1110 },
    relatedService: '/traitement-de-l-eau',
    intro: [
      "Le traitement UV désinfecte l’eau sans ajouter le moindre produit chimique, ce qui en fait une solution particulièrement adaptée à certaines situations. Voici comment PCE l’utilise, et dans quels cas il est réellement pertinent.",
    ],
    sections: [
      {
        h2: 'Le principe : une lumière qui neutralise les micro-organismes',
        paragraphs: [
          "Un stérilisateur UV expose l’eau à une lumière ultraviolette de longueur d’onde spécifique, qui détruit l’ADN des bactéries, virus et autres micro-organismes présents, sans modifier le goût, l’odeur ni la composition chimique de l’eau. Le traitement agit en continu, au moment même où l’eau traverse l’appareil.",
        ],
      },
      {
        h2: "Dans quels cas l’installer",
        paragraphs: [
          "Le traitement UV s’installe le plus souvent sur une eau de forage, en complément d’une filtration de particules, pour sécuriser l’eau sur le plan bactériologique sans recourir à une chloration. Il convient aussi aux résidences qui souhaitent une eau de boisson sans traitement chimique ajouté, en complément de l’eau du réseau public.",
        ],
      },
      {
        h2: 'Ses limites à connaître',
        paragraphs: [
          "Le traitement UV désinfecte, mais ne filtre pas les particules ni ne réduit la dureté de l’eau : il doit toujours être installé après une filtration adaptée, sous peine de perdre en efficacité si l’eau est trouble. Il nécessite également une alimentation électrique continue et le remplacement périodique de la lampe UV, généralement une fois par an.",
        ],
      },
    ],
    faq: [
      { q: 'Le traitement UV consomme-t-il beaucoup d’électricité ?', a: 'Non, la puissance d’une lampe UV domestique reste faible, comparable à celle d’une ampoule basse consommation, pour un fonctionnement continu.' },
      { q: 'Faut-il entretenir un stérilisateur UV ?', a: 'Le remplacement annuel de la lampe est la seule opération nécessaire, ainsi qu’un nettoyage occasionnel du fourreau en quartz qui la protège.' },
      { q: 'Le traitement UV remplace-t-il une chloration en cas de contamination avérée ?', a: 'En cas de contamination bactériologique confirmée, une désinfection choc reste parfois nécessaire avant de remettre le traitement UV en service continu. PCE vous oriente selon les résultats d’analyse.' },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu’à Sainte-Maxime, Les Issambres et l’ensemble du Golfe de Saint-Tropez.",
  },

  'charbon-actif-que-filtre-t-il': {
    title: 'Filtration au charbon actif : que filtre-t-elle exactement ?',
    /* <title> court (48 avec « — PCE ») : le titre y dépassait 60. */
    metaTitle: 'Charbon actif : que filtre-t-il vraiment ?',
    metaDescription:
      "Charbon actif : chlore, pesticides, goûts et odeurs de l’eau. Ce que filtre réellement cette technologie, expliqué par PCE dans le Var.",
    photo: { tags: 'water-softener', lock: 1111 },
    relatedService: '/traitement-de-l-eau',
    intro: [
      "Le charbon actif est l’une des filtrations les plus répandues pour améliorer le goût de l’eau du robinet, mais son champ d’action reste précis. Voici ce qu’il filtre réellement, et ce qu’il ne traite pas.",
    ],
    sections: [
      {
        h2: "Le principe de l’adsorption",
        paragraphs: [
          "Le charbon actif retient les molécules organiques par adsorption : celles-ci se fixent à la surface poreuse du charbon plutôt que d’être filtrées mécaniquement comme des particules. Cette surface, considérablement développée par la structure du charbon, lui permet de capter chlore, pesticides et composés responsables de mauvais goûts ou odeurs.",
        ],
      },
      {
        h2: "Ce qu’il filtre efficacement",
        paragraphs: [
          "Le chlore résiduel du traitement de l’eau publique, souvent responsable d’un goût désagréable, est l’un des éléments les mieux retenus par le charbon actif. Il capte également certains pesticides, solvants et composés organiques volatils, ainsi que les composés à l’origine d’odeurs désagréables.",
        ],
      },
      {
        h2: "Ce qu’il ne traite pas",
        paragraphs: [
          "Le charbon actif ne réduit ni le calcaire ni la présence de nitrates ou de métaux lourds : ces éléments nécessitent d’autres technologies, comme l’osmose inverse pour les nitrates et les métaux. C’est pourquoi PCE le propose généralement en complément d’un autre traitement, rarement seul, sauf pour une simple amélioration du goût.",
        ],
      },
    ],
    faq: [
      { q: 'Faut-il changer la cartouche de charbon actif régulièrement ?', a: "Oui, généralement tous les six à douze mois selon l’usage, car le charbon actif se sature progressivement et perd en efficacité une fois sa capacité d’adsorption atteinte." },
      { q: 'Le charbon actif filtre-t-il les bactéries ?', a: "Non, il n’est pas conçu pour cet usage. Une désinfection UV ou une filtration dédiée est nécessaire si un risque bactériologique est identifié." },
      { q: 'Peut-on installer un filtre à charbon actif sous l’évier ?', a: "Oui, c’est l’installation la plus courante pour traiter spécifiquement l’eau de boisson et de cuisson, sans traiter l’ensemble du logement." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu’à Sainte-Maxime, Les Issambres et l’ensemble du Golfe de Saint-Tropez.",
  },

  'pourquoi-piscine-au-sel': {
    title: 'Pourquoi passer sa piscine au sel ?',
    metaDescription:
      "Pourquoi choisir une piscine au sel : confort, économies et fonctionnement de l’électrolyse. Les explications de PCE, pisciniste dans le Var.",
    photo: { tags: 'pool', lock: 1112 },
    relatedExpertise: 'entretien-piscine-var',
    relatedService: '/piscine',
    intro: [
      "Le traitement au sel s’est imposé ces dernières années comme la solution de désinfection la plus demandée par les propriétaires de piscine du Var. PCE explique ici son fonctionnement et ce qu’il change réellement au quotidien.",
    ],
    sections: [
      {
        h2: "Le principe de l’électrolyse au sel",
        paragraphs: [
          "Une cellule d’électrolyse transforme le sel dissous dans l’eau du bassin en chlore naturel, en continu et en quantité automatiquement régulée. Contrairement au traitement au chlore manuel, il n’y a plus de pastilles à doser ni de bidons à manipuler : le système produit le désinfectant nécessaire directement dans l’eau.",
        ],
      },
      {
        h2: 'Le confort au quotidien',
        paragraphs: [
          "L’eau salée d’une piscine au sel reste beaucoup plus douce pour la peau et les yeux qu’une eau traitée au chlore classique, avec une odeur nettement atténuée. Le taux de sel utilisé reste faible, largement inférieur à celui de l’eau de mer, pour un confort de baignade proche de l’eau douce.",
        ],
      },
      {
        h2: 'Les économies sur la saison',
        paragraphs: [
          "Une fois le sel initial dissous dans le bassin, son appoint reste limité d’une saison à l’autre, ce qui réduit sensiblement le budget produits par rapport à un traitement au chlore manuel. PCE installe et règle la cellule d’électrolyse pour qu’elle produise exactement la quantité de chlore nécessaire, sans surdosage ni sous-traitement.",
        ],
      },
    ],
    faq: [
      { q: 'Le sel abîme-t-il le bassin et les équipements ?', a: "À condition que le taux soit maîtrisé et que l’échelle, les projecteurs et le liner soient compatibles avec le sel, aucune dégradation n’est à prévoir. PCE vérifie systématiquement ces points avant d’installer une électrolyse." },
      { q: 'Faut-il quand même surveiller le pH avec une piscine au sel ?', a: "Oui, l’électrolyse au sel a tendance à faire légèrement monter le pH : un contrôle régulier reste nécessaire, éventuellement automatisé par une régulation dédiée." },
      { q: 'Peut-on convertir une piscine au chlore en piscine au sel ?', a: "Oui, dans la grande majorité des cas, en installant une cellule d’électrolyse sur le circuit de filtration existant, sans travaux lourds sur le bassin." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu’à Sainte-Maxime, Les Issambres et l’ensemble du Golfe de Saint-Tropez.",
  },

  'pompe-piscine-vitesse-variable-avantages': {
    title: 'Pompe de piscine à vitesse variable : quels avantages ?',
    /* <title> court (54 avec « — PCE ») : le titre y dépassait 60. */
    metaTitle: 'Pompe de piscine à vitesse variable : les atouts',
    metaDescription:
      "Pompe à vitesse variable pour piscine : économies d’électricité, silence et longévité. Les avantages détaillés par PCE, pisciniste dans le Var.",
    photo: { tags: 'pool', lock: 1113 },
    relatedExpertise: 'entretien-piscine-var',
    relatedService: '/piscine',
    intro: [
      "Remplacer une pompe de filtration classique par un modèle à vitesse variable reste l’un des investissements les plus rentables sur une piscine existante. PCE détaille ici pourquoi, au-delà du seul argument économique.",
    ],
    sections: [
      {
        h2: "Des économies d’électricité importantes",
        paragraphs: [
          "Une pompe à vitesse variable adapte son régime aux besoins réels de filtration, plutôt que de tourner à pleine puissance en permanence comme une pompe monovitesse. Le résultat se traduit couramment par une réduction de 50 à 80 % de la consommation électrique liée à la filtration, l’un des postes les plus lourds de l’entretien d’une piscine.",
        ],
      },
      {
        h2: 'Une filtration plus longue, une eau plus claire',
        paragraphs: [
          "En tournant plus longtemps mais à faible régime, la pompe à vitesse variable filtre l’eau plus finement et plus régulièrement qu’un cycle court à pleine puissance. Le résultat se voit directement sur la clarté de l’eau, avec moins de sollicitations du système de traitement.",
        ],
      },
      {
        h2: 'Silence et longévité du matériel',
        paragraphs: [
          "Un fonctionnement à bas régime réduit considérablement le bruit perçu, un critère de plus en plus recherché sur les terrasses proches du bassin. La pompe elle-même s’use aussi moins vite, les démarrages à pleine puissance étant la principale cause d’usure prématurée d’un moteur de filtration.",
        ],
      },
    ],
    faq: [
      { q: 'Le remplacement de la pompe est-il complexe ?', a: 'Non, une pompe à vitesse variable se raccorde généralement sur la tuyauterie existante, sans reprise du circuit hydraulique. PCE réalise cette intervention en général en une demi-journée.' },
      { q: 'Le surcoût est-il rapidement amorti ?', a: "Oui, l’écart de prix avec une pompe monovitesse est généralement compensé en deux à trois saisons grâce aux économies d’électricité réalisées sur la filtration." },
      { q: 'Peut-on programmer plusieurs vitesses selon les besoins ?', a: 'Oui, la plupart des modèles permettent de programmer différentes vitesses selon le moment de la journée : filtration lente en continu, vitesse plus élevée pour le traitement choc ou le fonctionnement du robot.' },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu’à Sainte-Maxime, Les Issambres et l’ensemble du Golfe de Saint-Tropez.",
  },

  'pourquoi-ph-piscine-varie': {
    title: 'Pourquoi le pH d’une piscine varie-t-il sans arrêt ?',
    metaDescription:
      "Pourquoi le pH d’une piscine bouge : température, pluie, baigneurs et traitement. Les explications de PCE pour stabiliser durablement votre bassin.",
    photo: { tags: 'pool', lock: 1114 },
    relatedExpertise: 'entretien-piscine-var',
    relatedService: '/piscine',
    intro: [
      "Le pH d’une piscine semble parfois évoluer sans raison apparente d’un contrôle à l’autre. En réalité, plusieurs facteurs agissent en permanence sur cet équilibre, souvent combinés. Voici ce que PCE vérifie en priorité pour stabiliser durablement un bassin.",
    ],
    sections: [
      {
        h2: 'Les baigneurs et les produits de traitement',
        paragraphs: [
          "Chaque baignade introduit des résidus (crèmes solaires, sueur, urine) qui font varier le pH, généralement à la hausse. Le chlore lui-même, selon sa forme (galets, liquide, électrolyse au sel), influence le pH différemment : le chlore par électrolyse au sel a par exemple tendance à le faire progressivement monter.",
        ],
      },
      {
        h2: 'La météo et le remplissage',
        paragraphs: [
          "La pluie, généralement légèrement acide, fait baisser le pH après un orage. L’appoint d’eau du réseau, dont la composition varie selon la commune, modifie également l’équilibre du bassin à chaque remplissage significatif, notamment en sortie d’hivernage.",
        ],
      },
      {
        h2: 'Pourquoi un contrôle régulier reste indispensable',
        paragraphs: [
          "Un pH mal maîtrisé, trop haut ou trop bas, réduit fortement l’efficacité du chlore et peut irriter la peau et les yeux des baigneurs, tout en favorisant l’entartrage ou la corrosion des équipements. PCE recommande un contrôle hebdomadaire en saison, ou l’installation d’une régulation automatique du pH pour les bassins très fréquentés.",
        ],
      },
    ],
    faq: [
      { q: 'Quelle est la plage de pH idéale pour une piscine ?', a: 'Entre 7,0 et 7,4, une plage proche du pH naturel de l’œil humain, qui garantit à la fois le confort de baignade et l’efficacité maximale du chlore.' },
      { q: 'Une régulation automatique du pH est-elle fiable ?', a: 'Oui, une fois correctement réglée et étalonnée par un professionnel, elle limite fortement les écarts entre deux contrôles manuels et réduit la consommation de produits correcteurs.' },
      { q: 'Faut-il attendre après un ajustement de pH avant de se baigner ?', a: 'Un délai de trente minutes à une heure, selon le produit utilisé, permet une bonne homogénéisation dans le bassin avant la baignade.' },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu’à Sainte-Maxime, Les Issambres et l’ensemble du Golfe de Saint-Tropez.",
  },

  'a-quoi-sert-le-redox': {
    title: "À quoi sert le redox dans le traitement d’une piscine ?",
    /* <title> court (47 avec « — PCE ») : le titre y dépassait 60. */
    metaTitle: 'À quoi sert le redox pour votre piscine ?',
    metaDescription:
      "Le redox (ORP) en piscine : ce qu’il mesure, pourquoi il est plus fiable que le taux de chlore seul. Les explications de PCE, pisciniste dans le Var.",
    photo: { tags: 'pool', lock: 1115 },
    relatedExpertise: 'entretien-piscine-var',
    relatedService: '/piscine',
    intro: [
      "Moins connu que le pH ou le taux de chlore, le redox (ou ORP, potentiel d’oxydoréduction) est pourtant l’indicateur le plus fiable de l’efficacité réelle de la désinfection d’une piscine. PCE explique pourquoi il équipe de plus en plus de bassins de cette mesure.",
    ],
    sections: [
      {
        h2: 'Ce que mesure le redox',
        paragraphs: [
          "Le redox exprime, en millivolts, le pouvoir désinfectant réel de l’eau à un instant donné — c’est-à-dire sa capacité à détruire les micro-organismes présents. Contrairement au taux de chlore mesuré seul, le redox tient compte de l’effet combiné du chlore, du pH et de la température, pour donner une image plus fidèle de la qualité sanitaire de l’eau.",
        ],
      },
      {
        h2: 'Pourquoi le chlore seul ne suffit pas',
        paragraphs: [
          "Deux piscines peuvent afficher le même taux de chlore avec une efficacité de désinfection très différente, selon leur pH ou leur charge en matières organiques. Un redox supérieur à 650-700 mV signale une eau efficacement désinfectée, quand un chlore élevé associé à un pH trop haut peut, lui, masquer une désinfection insuffisante.",
        ],
      },
      {
        h2: 'Une régulation automatique basée sur le redox',
        paragraphs: [
          "Sur les bassins équipés d’une régulation automatique, la mesure du redox permet d’injecter le chlore uniquement quand c’est nécessaire, plutôt que selon un dosage fixe. PCE installe ce type de régulation sur les piscines à forte fréquentation, où elle garantit une désinfection constante tout en limitant la surconsommation de produits.",
        ],
      },
    ],
    faq: [
      { q: 'Faut-il un appareil spécifique pour mesurer le redox ?', a: 'Oui, une sonde redox dédiée est nécessaire ; les bandelettes de test classiques ne mesurent que le chlore libre et le pH, pas le potentiel d’oxydoréduction.' },
      { q: 'Un redox trop élevé est-il un problème ?', a: 'Un redox excessif peut indiquer un surdosage de chlore, source d’irritation pour les baigneurs. La régulation automatique évite justement ce type d’excès en ajustant l’injection en continu.' },
      { q: 'Le redox remplace-t-il le contrôle du pH ?', a: 'Non, les deux mesures sont complémentaires : le pH conditionne l’efficacité du chlore, le redox en mesure le résultat final sur le pouvoir désinfectant réel de l’eau.' },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu’à Sainte-Maxime, Les Issambres et l’ensemble du Golfe de Saint-Tropez.",
  },

  /* Premier article plomberie (guide SEO client, rubrique blog). Aucun
     délai d’intervention promis : seule l’astreinte 7j/7 est citée. */
  'fuite-d-eau-reperer-que-faire': {
    title: 'Fuite d’eau : comment la repérer et que faire en attendant le plombier ?',
    metaTitle: 'Fuite d’eau : la repérer et que faire en attendant',
    metaDescription:
      "Fuite d’eau : le test du compteur pour la repérer, les bons gestes en attendant le plombier, l’assurance. Les conseils de PCE, plombier dans le Var.",
    photo: { tags: 'plumbing', lock: 1116 },
    relatedExpertise: 'depannage-plomberie-urgence-var',
    relatedService: '/plomberie',
    intro: [
      "Une fuite d’eau ne se voit pas toujours : une partie des fuites se cache dans un mur, sous une dalle ou dans une canalisation enterrée, et ne se révèle que sur la facture. Voici comment en confirmer une avec un simple relevé de compteur, puis les gestes qui limitent les dégâts en attendant l’intervention d’un plombier.",
    ],
    sections: [
      {
        h2: 'Les signes qui doivent alerter',
        paragraphs: [
          "Certains indices sont visibles : tache d’humidité au plafond ou au pied d’un mur, peinture qui cloque, joint de carrelage qui noircit, odeur de moisi dans un placard. D’autres sont plus discrets : bruit d’écoulement alors que rien n’est ouvert, baisse de pression, chasse d’eau qui coule en continu, ou facture d’eau nettement supérieure à celle de la même période l’an passé.",
          "Dans le Var, pensez aussi aux réseaux extérieurs : arrosage enterré, alimentation d’un pool house ou robinet de jardin. Une zone de pelouse anormalement verte ou détrempée en plein été trahit souvent une canalisation enterrée qui fuit.",
        ],
      },
      {
        h2: 'Le test du compteur, pour être fixé',
        paragraphs: [
          "Le soir, une fois tous les usages terminés, notez l’index de votre compteur d’eau (ou prenez-le en photo). N’utilisez plus d’eau de la nuit (pas de lave-linge ni de lave-vaisselle programmé), puis relevez l’index le lendemain matin. S’il a bougé, l’eau s’échappe quelque part entre le compteur et vos robinets.",
          "Pour savoir de quel côté chercher, fermez ensuite les robinets d’arrêt un par un (chasse d’eau, chauffe-eau, arrosage) et observez le compteur. Le petit rouage de contrôle, quand il existe, permet de voir un mouvement en quelques minutes. Pour la chasse d’eau, quelques gouttes de colorant alimentaire dans le réservoir suffisent : si la cuvette se colore sans tirer la chasse, le mécanisme fuit.",
        ],
      },
      {
        h2: 'En attendant le plombier : les bons gestes',
        paragraphs: [
          "Coupez d’abord l’eau : le robinet d’arrêt sous l’évier ou derrière les WC pour une fuite localisée, le robinet général (près du compteur) pour une fuite importante ou dont l’origine est inconnue. Si l’eau approche des prises, d’un tableau électrique ou d’appareils branchés, coupez aussi l’électricité au disjoncteur.",
          "Ouvrez ensuite un robinet bas pour vider la pression restante dans les canalisations, épongez, mettez meubles et objets à l’abri et placez une bassine sous le point de fuite. En appartement, prévenez le voisin du dessous et le syndic : la fuite peut venir d’une partie commune ou d’un autre logement.",
          "Enfin, photographiez les dégâts et l’origine de la fuite avant toute réparation : ces images servent à la déclaration auprès de votre assureur.",
        ],
      },
      {
        h2: 'Assurance et facture d’eau',
        paragraphs: [
          "Un dégât des eaux se déclare à l’assureur dans les cinq jours ouvrés suivant sa découverte. La facture du plombier, qui précise l’origine de la fuite, fait partie des pièces demandées.",
          "Pour une fuite sur une canalisation située après le compteur d’un logement, la loi prévoit un plafonnement de la facture d’eau lorsque la consommation dépasse le double de la moyenne habituelle, à condition de fournir au service des eaux, dans le mois qui suit, une attestation de réparation établie par un plombier. Les fuites d’appareils (chauffe-eau, sanitaires, électroménager) en sont exclues.",
        ],
      },
    ],
    faq: [
      {
        q: 'Peut-on réparer soi-même une fuite d’eau ?',
        a: "Un joint de robinet ou un flexible de raccordement se remplacent sans difficulté. Une fuite sur une canalisation encastrée, une soudure ou un raccord de chauffe-eau demande en revanche un plombier : une réparation de fortune peut céder et aggraver les dégâts.",
      },
      {
        q: 'Que faire si la fuite vient de chez le voisin ?',
        a: "Prévenez-le, ou le syndic s’il est absent, pour qu’il coupe son arrivée d’eau. Déclarez le sinistre à votre propre assureur, qui se charge du recours : en copropriété, un constat amiable dégât des eaux rempli avec le voisin facilite la suite.",
      },
      {
        q: 'PCE intervient-il pour une fuite en dehors des heures de bureau ?',
        a: "Oui : notre bureau répond du lundi au vendredi de 7h30 à 18h00, et les urgences de plomberie sont prises en charge 7j/7, week-end compris, dans tout le Var.",
      },
    ],
    closing:
      "PCE intervient dans tout le Var (83), de Lorgues et Draguignan jusqu’au Golfe de Saint-Tropez, Fréjus, Brignoles, Toulon et Hyères.",
  },

  /* Articles blog du guide SEO client (27/11/2026). Aucun prix, délai,
     aide financière ni certification cités. */
  'deboucher-canalisation-sans-produit-chimique': {
    title: 'Comment déboucher une canalisation sans produit chimique ?',
    metaTitle: 'Déboucher une canalisation sans produit chimique',
    metaDescription:
      "Évier, lavabo ou douche bouchés : ventouse, siphon, furet, eau chaude. Les méthodes sans produit chimique, et quand appeler un plombier dans le Var.",
    photo: { tags: 'plumbing', lock: 1117 },
    relatedExpertise: 'depannage-plomberie-urgence-var',
    relatedService: '/plomberie',
    intro: [
      "Un évier qui se vide mal ou une douche qui stagne se règlent souvent sans déboucheur chimique. Ces produits, très corrosifs, attaquent les joints et les canalisations anciennes, sont dangereux en cas de projection et ne viennent pas toujours à bout d’un bouchon de cheveux ou de graisse. Voici les méthodes à essayer dans l’ordre, du plus simple au plus efficace.",
    ],
    sections: [
      {
        h2: '1. L’eau chaude et le bicarbonate',
        paragraphs: [
          "Pour un écoulement simplement ralenti par la graisse, versez une grande casserole d’eau très chaude dans l’évacuation. Sur des tuyaux en PVC, évitez l’eau bouillante, qui peut déformer les raccords : de l’eau chaude du robinet, en quantité, suffit.",
          "Le mélange bicarbonate de soude et vinaigre blanc, laissé agir une demi-heure puis rincé à l’eau chaude, aide à décoller les dépôts légers. Il ne viendra pas à bout d’un vrai bouchon, mais c’est un bon entretien mensuel pour l’évier de cuisine.",
        ],
      },
      {
        h2: '2. La ventouse',
        paragraphs: [
          "Remplissez le bac de quelques centimètres d’eau pour que la ventouse fasse joint, bouchez le trop-plein avec un chiffon humide, puis actionnez-la franchement une dizaine de fois. Sur un évier double, bouchez le second bac : sans cela, la pression s’échappe par l’autre évacuation.",
        ],
      },
      {
        h2: '3. Le démontage du siphon',
        paragraphs: [
          "Sous un lavabo ou un évier, la plupart des bouchons se forment dans le siphon. Placez une bassine dessous, dévissez les deux écrous à la main, videz et rincez le siphon, puis remontez-le en vérifiant que les joints sont bien en place. C’est souvent la méthode la plus rapide et la plus propre.",
        ],
      },
      {
        h2: '4. Le furet',
        paragraphs: [
          "Si le bouchon est plus loin dans la canalisation, un furet manuel (un câble souple que l’on fait tourner) permet de l’atteindre et de le fragmenter. Introduisez-le sans forcer, tournez dans le sens horaire en avançant, puis rincez abondamment.",
        ],
      },
      {
        h2: 'Quand appeler un plombier',
        paragraphs: [
          "Plusieurs évacuations bouchées en même temps, des remontées d’eau dans la douche quand on tire la chasse, des glouglous ou des odeurs persistantes : le problème se situe en aval, sur la canalisation principale. Un bouchon qui revient tous les mois signale aussi un défaut de pente, un tuyau entartré ou une racine. PCE inspecte alors la canalisation à la caméra pour trouver la cause avant de la traiter.",
        ],
      },
    ],
    faq: [
      {
        q: 'Les déboucheurs chimiques abîment-ils les canalisations ?',
        a: "Utilisés souvent, ils fragilisent les joints et les tuyaux anciens en fonte ou en cuivre, et ils restent dangereux pour la peau et les yeux. Ils sont aussi à proscrire avec une fosse septique, dont ils détruisent les bactéries.",
      },
      {
        q: 'Comment éviter que l’évier se bouche à nouveau ?',
        a: "Ne versez pas d’huile de cuisson dans l’évier, placez une grille sur les évacuations de douche pour retenir les cheveux et passez un peu d’eau chaude après chaque vaisselle grasse. Un démontage du siphon une ou deux fois par an fait le reste.",
      },
      {
        q: 'Que faire si les WC sont bouchés ?',
        a: "Essayez d’abord une ventouse spéciale WC (à collerette), puis un furet adapté à la cuvette. Si l’eau remonte ailleurs dans la maison, le bouchon est sur la canalisation principale : appelez un plombier.",
      },
    ],
    closing:
      "PCE intervient dans tout le Var (83), de Lorgues et Draguignan jusqu’au Golfe de Saint-Tropez, Fréjus, Brignoles, Toulon et Hyères.",
  },

  'choisir-son-chauffe-eau': {
    title: 'Choisir son chauffe-eau : cumulus, thermodynamique ou solaire ?',
    metaTitle: 'Choisir son chauffe-eau : cumulus, thermo ou solaire',
    metaDescription:
      "Cumulus électrique, chauffe-eau thermodynamique ou solaire : fonctionnement, consommation, place et capacité. Le comparatif de PCE, plombier dans le Var.",
    photo: { tags: 'plumbing', lock: 1118 },
    relatedExpertise: 'installation-chauffe-eau-thermodynamique-var',
    relatedService: '/plomberie',
    intro: [
      "Le chauffe-eau est souvent le deuxième poste de consommation d’énergie d’un logement, après le chauffage. Au moment de le remplacer, trois grandes familles se présentent : le cumulus électrique, le chauffe-eau thermodynamique et le chauffe-eau solaire. Chacune a sa logique, selon votre logement, votre famille et l’emplacement disponible.",
    ],
    sections: [
      {
        h2: 'Le cumulus électrique : simple et compact',
        paragraphs: [
          "Une résistance chauffe l’eau stockée dans un ballon, le plus souvent la nuit en heures creuses. C’est l’appareil le plus simple à installer et le moins encombrant, qui trouve sa place dans un placard ou une salle de bains. En contrepartie, c’est aussi celui qui consomme le plus d’électricité pour la même quantité d’eau chaude.",
          "Préférez une résistance stéatite (isolée de l’eau dans un fourreau) à une résistance blindée : elle s’entartre beaucoup moins, un vrai avantage avec l’eau calcaire de nombreuses communes du Var.",
        ],
      },
      {
        h2: 'Le chauffe-eau thermodynamique : la pompe à chaleur de l’eau chaude',
        paragraphs: [
          "Il récupère les calories de l’air ambiant ou extérieur pour chauffer l’eau, et consomme en général deux à trois fois moins d’électricité qu’un cumulus de même capacité. Il demande plus de place : il s’installe idéalement dans un garage, une buanderie ou un cellier d’au moins une dizaine de mètres cubes, ou avec une gaine vers l’extérieur.",
          "Le climat varois lui est favorable : les températures douces une grande partie de l’année maintiennent un bon rendement. Le léger bruit du ventilateur incite à éviter la pose à côté d’une chambre.",
        ],
      },
      {
        h2: 'Le chauffe-eau solaire : l’énergie gratuite, avec une étude préalable',
        paragraphs: [
          "Des capteurs posés en toiture ou au sol chauffent un ballon, avec un appoint électrique ou raccordé à la chaudière pour les jours couverts. Avec l’ensoleillement du Var, il couvre une large part des besoins annuels. Son installation est plus lourde : orientation et inclinaison du toit, place pour le ballon, règles d’urbanisme parfois strictes en secteur protégé.",
        ],
      },
      {
        h2: 'Quelle capacité choisir ?',
        paragraphs: [
          "Comptez en ordre de grandeur 50 litres par personne pour un ballon électrique ou thermodynamique : un 100 litres pour une à deux personnes, un 200 litres pour trois à quatre, un 250 à 300 litres au-delà ou avec une baignoire. Un ballon trop petit oblige à le relancer en journée, un ballon trop grand chauffe de l’eau pour rien.",
        ],
      },
    ],
    faq: [
      {
        q: 'Quelle est la durée de vie d’un chauffe-eau ?',
        a: "Généralement entre 10 et 15 ans pour un cumulus ou un chauffe-eau thermodynamique. Le contrôle de l’anode et la vidange du ballon tous les deux ans environ prolongent nettement sa vie, surtout avec une eau calcaire.",
      },
      {
        q: 'Peut-on remplacer un cumulus par un chauffe-eau thermodynamique au même endroit ?',
        a: "Pas toujours : le thermodynamique est plus haut et a besoin d’un volume d’air suffisant ou d’une gaine vers l’extérieur. PCE vérifie l’emplacement lors de la visite avant de vous proposer un modèle.",
      },
      {
        q: 'Faut-il un groupe de sécurité ?',
        a: "Oui, il est obligatoire sur tout chauffe-eau à accumulation. Il protège le ballon contre la surpression et doit être manœuvré une fois par mois pour éviter qu’il ne s’entartre.",
      },
    ],
    closing:
      "PCE intervient dans tout le Var (83), de Lorgues et Draguignan jusqu’au Golfe de Saint-Tropez, Fréjus, Brignoles, Toulon et Hyères.",
  },

  'economiser-eau-maison': {
    publishAt: '2026-12-04',
    title: 'Économiser l’eau dans sa maison : les bons gestes et les bons équipements',
    metaTitle: 'Économiser l’eau à la maison : gestes et équipements',
    metaDescription:
      "Mousseurs, chasse double commande, réducteur de pression, récupération d’eau de pluie : comment économiser l’eau dans le Var. Les conseils de PCE.",
    photo: { tags: 'plumbing', lock: 1119 },
    relatedExpertise: 'renovation-salle-de-bain-var',
    relatedService: '/plomberie',
    intro: [
      "Dans le Var, les arrêtés sécheresse qui restreignent l’arrosage et le remplissage des piscines sont devenus fréquents en été. Réduire sa consommation d’eau, c’est à la fois alléger sa facture et mieux traverser ces périodes. Bonne nouvelle : les équipements les plus efficaces sont aussi les moins chers.",
    ],
    sections: [
      {
        h2: 'Les petits équipements qui changent tout',
        paragraphs: [
          "Un mousseur (ou aérateur) vissé au bout du robinet mélange de l’air à l’eau et réduit nettement le débit sans perte de confort. Même principe pour la douche avec un pommeau économe. Ce sont les économies les plus rapides à obtenir, pour un investissement minime.",
          "Aux toilettes, une chasse double commande remplace un mécanisme ancien à grand volume unique. Si vous changez de WC, choisissez un modèle à petit réservoir.",
        ],
      },
      {
        h2: 'Surveiller la pression et les fuites',
        paragraphs: [
          "Une pression trop forte augmente le débit de chaque robinet, fatigue les flexibles et provoque des coups de bélier. Au-delà de 3 bars, un réducteur de pression posé après le compteur protège l’installation et limite la consommation.",
          "Une chasse d’eau qui coule en continu ou un robinet qui goutte peuvent représenter des dizaines de mètres cubes par an. Le test du compteur sur une nuit, décrit dans notre article sur les fuites d’eau, permet de vérifier que rien ne s’échappe.",
        ],
      },
      {
        h2: 'Récupérer l’eau de pluie',
        paragraphs: [
          "Une cuve de récupération d’eau de pluie alimente l’arrosage du jardin, et peut aussi servir aux WC et au lavage des sols avec un réseau séparé, clairement identifié et sans aucun lien avec le réseau d’eau potable. Dans le Var, où les pluies se concentrent à l’automne et au printemps, une cuve bien dimensionnée permet de constituer une réserve pour l’été.",
        ],
      },
      {
        h2: 'Les bons gestes au quotidien',
        paragraphs: [
          "Une douche courte consomme bien moins qu’un bain. Faites tourner lave-linge et lave-vaisselle à pleine charge, arrosez le jardin tôt le matin ou le soir pour limiter l’évaporation et couvrez la piscine hors baignade : une bâche réduit fortement l’évaporation du bassin en été.",
        ],
      },
    ],
    faq: [
      {
        q: 'Un mousseur réduit-il le confort au robinet ?',
        a: "Non : l’air mélangé à l’eau donne un jet plus doux et volumineux, avec une sensation de débit proche d’un robinet classique. Il se nettoie simplement en le dévissant pour retirer le calcaire.",
      },
      {
        q: 'Comment connaître la pression de mon installation ?',
        a: "Un manomètre vissé sur un robinet extérieur ou sur la machine à laver donne la valeur en quelques secondes. PCE la contrôle à chaque intervention de plomberie et pose un réducteur si elle dépasse les valeurs recommandées.",
      },
      {
        q: 'Peut-on utiliser l’eau de pluie dans la maison ?',
        a: "Oui, pour les WC et le lavage des sols, avec un réseau totalement séparé du réseau d’eau potable et des robinets signalés. Elle ne doit jamais servir à la boisson, à la cuisine ni à la toilette.",
      },
    ],
    closing:
      "PCE intervient dans tout le Var (83), de Lorgues et Draguignan jusqu’au Golfe de Saint-Tropez, Fréjus, Brignoles, Toulon et Hyères.",
  },

  'piscine-var-problemes-plomberie': {
    publishAt: '2026-12-04',
    title: 'Piscine dans le Var : les problèmes de plomberie les plus courants',
    metaTitle: 'Piscine dans le Var : pannes de plomberie courantes',
    metaDescription:
      "Perte d’eau, prise d’air, pompe qui désamorce, local technique humide : les problèmes de plomberie de piscine les plus fréquents et comment les éviter.",
    photo: { tags: 'pool', lock: 1120 },
    relatedExpertise: 'entretien-piscine-var',
    relatedService: '/piscine',
    intro: [
      "Une piscine, c’est avant tout un réseau hydraulique : skimmers, bonde de fond, pompe, filtre, refoulements et canalisations enterrées. Dans le Var, entre les fortes chaleurs, l’eau calcaire et les mouvements de terrain, certains problèmes reviennent souvent. Voici comment les reconnaître et les prévenir.",
    ],
    sections: [
      {
        h2: 'Le niveau d’eau baisse : évaporation ou fuite ?',
        paragraphs: [
          "En plein été, un bassin non couvert perd naturellement de l’eau par évaporation. Pour faire la différence avec une fuite, faites le test du seau : posez sur une marche un seau rempli à la même hauteur que la piscine, filtration coupée, et comparez les deux niveaux après 24 heures. Si la piscine baisse nettement plus que le seau, il y a une fuite.",
          "Refaites ensuite le test filtration en marche : une perte plus forte pointe vers les canalisations de refoulement, une perte identique vers le liner, une pièce à sceller ou une canalisation d’aspiration. PCE recherche les fuites de bassin et de canalisations enterrées sans casser.",
        ],
      },
      {
        h2: 'La pompe désamorce ou fait des bulles',
        paragraphs: [
          "Des bulles au refoulement ou une pompe qui perd son amorçage signalent une prise d’air côté aspiration : niveau d’eau trop bas dans les skimmers, couvercle du préfiltre mal serré, joint torique sec ou fendu, vanne mal fermée. Commencez par vérifier le niveau et graisser le joint du couvercle avec une graisse silicone.",
        ],
      },
      {
        h2: 'La pression du filtre monte',
        paragraphs: [
          "Un manomètre qui grimpe au-dessus de sa valeur habituelle indique un filtre encrassé : un contre-lavage s’impose. Si la pression reste haute juste après, le média filtrant est colmaté par le calcaire ou les graisses et doit être nettoyé ou remplacé. Une pression anormalement basse, à l’inverse, oriente vers un problème d’aspiration.",
        ],
      },
      {
        h2: 'Le local technique, point faible souvent négligé',
        paragraphs: [
          "Humidité, raccords qui suintent, ventilation absente : le local technique vieillit vite. Une petite fuite sur une vanne ou un raccord collé finit par corroder la pompe, le coffret électrique et l’électrolyseur. Un contrôle visuel régulier et un local ventilé évitent la plupart des pannes coûteuses.",
        ],
      },
    ],
    faq: [
      {
        q: 'Combien d’eau une piscine perd-elle par évaporation dans le Var ?',
        a: "En été, quelques millimètres par jour sont courants, davantage par mistral ou forte chaleur. Une bâche ou une couverture limite fortement cette perte.",
      },
      {
        q: 'Faut-il vidanger les canalisations en hiver ?',
        a: "Dans la majeure partie du Var, un hivernage actif (filtration réduite) suffit. Sur les communes de l’arrière-pays exposées au gel, le hors-gel de la filtration ou la purge des canalisations exposées protège le réseau.",
      },
      {
        q: 'PCE intervient-il sur une piscine construite par un autre professionnel ?',
        a: "Oui : diagnostic, réparation de canalisations, remplacement de pompe ou de filtre et rénovation du local technique, quel que soit le constructeur d’origine.",
      },
    ],
    closing:
      "PCE intervient dans tout le Var (83), de Lorgues et Draguignan jusqu’au Golfe de Saint-Tropez, Fréjus, Brignoles, Toulon et Hyères.",
  },

  /* Série décembre 2026 – janvier 2027 (6 sujets validés le 28/11/2026),
     publication programmée deux par deux via publishAt. */
  'purger-ses-radiateurs': {
    publishAt: '2026-12-11',
    title: 'Purger ses radiateurs : quand et comment le faire ?',
    metaTitle: 'Purger ses radiateurs : quand et comment le faire',
    metaDescription:
      "Radiateur froid en haut, glouglous dans le circuit : comment purger vos radiateurs pas à pas et remettre la chaudière en pression. Les conseils de PCE.",
    photo: { tags: 'heating', lock: 1121 },
    relatedExpertise: 'plancher-chauffant-var',
    relatedService: '/chauffage',
    intro: [
      "Un radiateur tiède en haut et chaud en bas, des bruits de glouglou dans les tuyaux : de l’air s’est accumulé dans votre circuit de chauffage. Purger les radiateurs prend quelques minutes, améliore le confort et évite à la chaudière de tourner pour rien. Voici comment faire, et quand le problème dépasse la simple purge.",
    ],
    sections: [
      {
        h2: 'Quand purger ses radiateurs ?',
        paragraphs: [
          "Le bon moment est le début de la saison de chauffe, à l’automne, puis dès qu’un radiateur chauffe mal dans sa partie haute ou que le circuit fait du bruit. Une purge est aussi nécessaire après toute intervention qui a vidé une partie de l’installation. Seuls les radiateurs à eau, reliés à une chaudière ou à une pompe à chaleur, sont concernés : les radiateurs électriques ne se purgent pas.",
        ],
      },
      {
        h2: 'La purge, pas à pas',
        paragraphs: [
          "Faites d’abord tourner le chauffage une demi-heure pour que l’air remonte vers les points hauts, puis coupez-le et laissez les radiateurs tiédir : l’eau qui sort d’un radiateur brûlant peut ébouillanter. Munissez-vous d’une clé de purge (ou d’un tournevis plat selon le modèle), d’un chiffon et d’un petit récipient.",
          "Commencez par le rez-de-chaussée, en partant du radiateur le plus proche de la chaudière. Ouvrez la vis de purge, en haut du radiateur à l’opposé du robinet, d’un quart de tour : l’air s’échappe avec un sifflement. Refermez dès que l’eau coule de façon continue, sans bulles, puis passez au radiateur suivant, en finissant par l’étage.",
        ],
      },
      {
        h2: 'Contrôler la pression de la chaudière',
        paragraphs: [
          "Chaque purge fait baisser un peu la pression du circuit. Vérifiez le manomètre de la chaudière : à froid, il indique généralement entre 1 et 1,5 bar sur une maison individuelle, selon la notice. Si la pression est trop basse, ouvrez doucement le robinet de remplissage jusqu’à la valeur indiquée, puis refermez-le. Relancez ensuite le chauffage.",
        ],
      },
      {
        h2: 'Quand la purge ne suffit pas',
        paragraphs: [
          "Un radiateur froid en bas et chaud en haut ne souffre pas d’air mais de boues : des dépôts se sont accumulés dans le circuit au fil des années. Un désembouage, réalisé par un chauffagiste, nettoie l’installation. Une pression qui chute sans cesse ou un circuit qu’il faut purger toutes les semaines signalent quant à eux une fuite ou un vase d’expansion défaillant, à faire contrôler.",
        ],
      },
    ],
    faq: [
      {
        q: 'Faut-il couper la chaudière pour purger les radiateurs ?',
        a: "Oui, il est préférable de l’arrêter : le circulateur à l’arrêt laisse l’air se rassembler en haut des radiateurs, et l’eau moins chaude évite les brûlures.",
      },
      {
        q: 'Et pour un plancher chauffant ?',
        a: "Un plancher chauffant se purge au niveau de son collecteur, avec une méthode propre à chaque installation. Mieux vaut confier l’opération à un chauffagiste.",
      },
      {
        q: 'Mes radiateurs ont des purgeurs automatiques, dois-je purger quand même ?',
        a: "Les purgeurs automatiques évacuent l’air sans intervention, mais ils s’entartrent avec le temps. S’ils ne jouent plus leur rôle, ils se remplacent facilement.",
      },
    ],
    closing:
      "PCE intervient dans tout le Var (83), de Lorgues et Draguignan jusqu’au Golfe de Saint-Tropez, Fréjus, Brignoles, Toulon et Hyères.",
  },

  'proteger-canalisations-du-gel': {
    publishAt: '2026-12-11',
    title: 'Protéger ses canalisations du gel : les bons réflexes',
    metaTitle: 'Protéger ses canalisations du gel : les bons réflexes',
    metaDescription:
      "Compteur, robinet extérieur, résidence secondaire : comment protéger vos canalisations du gel dans le Var, et que faire si un tuyau est déjà gelé.",
    photo: { tags: 'plumbing', lock: 1122 },
    relatedExpertise: 'depannage-plomberie-urgence-var',
    relatedService: '/plomberie',
    intro: [
      "Le Var n’est pas épargné par le gel : dans l’arrière-pays, du Haut-Var au pays de Fayence, les nuits sous zéro sont fréquentes en hiver, et même le littoral connaît quelques épisodes de froid. Une canalisation gelée peut éclater et provoquer un dégât des eaux au moment du dégel. Quelques précautions simples suffisent à l’éviter.",
    ],
    sections: [
      {
        h2: 'Repérer les points sensibles',
        paragraphs: [
          "Les canalisations à risque sont celles qui passent dans des endroits non chauffés : garage, cave, vide sanitaire, combles, murs extérieurs, ainsi que le compteur d’eau lorsqu’il est installé dans un regard au jardin. Les robinets extérieurs et l’arrosage enterré sont les premiers touchés.",
        ],
      },
      {
        h2: 'Les précautions avant l’hiver',
        paragraphs: [
          "Calorifugez les tuyaux exposés avec des manchons isolants en mousse, vendus au mètre et faciles à poser. Pour le compteur en regard, une plaque de polystyrène posée sur le compteur protège efficacement ; évitez la paille, la laine de verre ou les chiffons, qui retiennent l’humidité et finissent par geler.",
          "Pour les robinets extérieurs, fermez la vanne d’arrêt intérieure qui les alimente, ouvrez le robinet pour vider la canalisation et laissez-le ouvert tout l’hiver. Purgez aussi le réseau d’arrosage automatique.",
        ],
      },
      {
        h2: 'Résidence secondaire ou absence prolongée',
        paragraphs: [
          "Si le logement reste inoccupé pendant les grands froids, coupez l’eau au robinet général et vidangez l’installation en ouvrant tous les robinets, en commençant par le plus haut. Laissez le chauffage en mode hors-gel : il maintient une température minimale qui protège les canalisations intérieures et, si vous avez un chauffage central, le circuit lui-même.",
        ],
      },
      {
        h2: 'Si une canalisation a déjà gelé',
        paragraphs: [
          "Plus d’eau au robinet par grand froid : coupez l’arrivée d’eau, ouvrez le robinet concerné et réchauffez doucement le tuyau avec un sèche-cheveux ou des linges chauds, en partant du robinet vers la zone gelée. N’utilisez jamais de flamme ni de décapeur thermique, qui peuvent faire éclater le tuyau ou provoquer un incendie.",
          "Au dégel, surveillez l’apparition de fuites. Si le tuyau a fendu, laissez l’eau coupée et faites appel à un plombier.",
        ],
      },
    ],
    faq: [
      {
        q: 'Qui est responsable d’un compteur d’eau gelé ?',
        a: "Le règlement du service des eaux de la plupart des communes met la protection du compteur contre le gel à la charge de l’abonné. Un compteur endommagé faute de protection peut donc vous être facturé.",
      },
      {
        q: 'Faut-il laisser couler un filet d’eau pour éviter le gel ?',
        a: "Un mince filet d’eau limite le risque sur une canalisation exposée lors d’une nuit très froide, mais il consomme de l’eau. Isoler les tuyaux reste la solution durable.",
      },
      {
        q: 'Le mode hors-gel du chauffage suffit-il ?',
        a: "Il protège les pièces chauffées, mais pas les canalisations situées dans un garage, un vide sanitaire ou à l’extérieur. Celles-ci doivent être isolées ou vidangées.",
      },
    ],
    closing:
      "PCE intervient dans tout le Var (83), de Lorgues et Draguignan jusqu’au Golfe de Saint-Tropez, Fréjus, Brignoles, Toulon et Hyères.",
  },

  'entretenir-sa-vmc': {
    publishAt: '2026-12-18',
    title: 'Entretenir sa VMC : les gestes simples pour un air sain',
    metaTitle: 'Entretenir sa VMC : les gestes pour un air sain',
    metaDescription:
      "Bouches encrassées, condensation, mauvaises odeurs : comment entretenir votre VMC simple ou double flux, et quand faire contrôler l’installation.",
    photo: { tags: 'house', lock: 1123 },
    relatedService: '/vmc',
    intro: [
      "La ventilation mécanique contrôlée renouvelle l’air de votre logement en continu, évacue l’humidité de la cuisine et de la salle de bains et limite moisissures et condensation. Une VMC encrassée tourne pourtant souvent à vide pendant des années sans que personne ne s’en aperçoive. Quelques gestes réguliers suffisent à la garder efficace.",
    ],
    sections: [
      {
        h2: 'Vérifier qu’elle fonctionne',
        paragraphs: [
          "Le test le plus simple : approchez une feuille de papier d’une bouche d’extraction, dans la cuisine ou la salle de bains. Elle doit être aspirée et rester plaquée. Si elle tombe, la bouche est bouchée, le moteur est à l’arrêt ou une gaine est écrasée ou débranchée dans les combles.",
          "Buée persistante sur les vitres, odeurs qui stagnent, taches de moisissure dans les angles : ces signes indiquent aussi une ventilation insuffisante.",
        ],
      },
      {
        h2: 'Nettoyer les bouches d’extraction',
        paragraphs: [
          "Les bouches de la cuisine, de la salle de bains et des WC retiennent graisse et poussière. Démontez-les environ tous les trois mois (plus souvent en cuisine), lavez-les à l’eau savonneuse, séchez-les et remettez-les en place. Sur les bouches hygroréglables ou électriques, suivez la notice : certaines parties ne doivent pas être mouillées.",
          "Dans les pièces sèches (séjour, chambres), dépoussiérez aussi les entrées d’air situées en haut des fenêtres. Ne les bouchez jamais : sans elles, la VMC ne peut pas renouveler l’air.",
        ],
      },
      {
        h2: 'Le cas de la VMC double flux',
        paragraphs: [
          "Une VMC double flux insuffle de l’air neuf filtré et réchauffé par l’air extrait. Ses filtres s’encrassent vite : ils se nettoient ou se remplacent plusieurs fois par an, selon le modèle et l’environnement (pollens, poussière, proximité d’une route). Des filtres colmatés font chuter le débit et augmentent la consommation du moteur.",
        ],
      },
      {
        h2: 'Le contrôle par un professionnel',
        paragraphs: [
          "Tous les trois ans environ, faites vérifier l’ensemble de l’installation : nettoyage du caisson et du moteur, état et fixation des gaines, mesure des débits aux bouches. C’est aussi l’occasion de vérifier que le système reste adapté au logement après des travaux, par exemple le changement des fenêtres.",
        ],
      },
    ],
    faq: [
      {
        q: 'Peut-on arrêter la VMC pour économiser de l’électricité ?',
        a: "Non : une VMC est conçue pour fonctionner en continu. L’arrêter favorise l’humidité, la condensation et les moisissures, et dégrade la qualité de l’air. Sa consommation électrique reste faible.",
      },
      {
        q: 'Ma VMC fait du bruit, est-ce normal ?',
        a: "Un léger souffle est normal. Un bruit qui augmente, des vibrations ou un sifflement signalent un moteur fatigué, un caisson mal fixé ou des bouches encrassées.",
      },
      {
        q: 'Faut-il nettoyer les gaines ?',
        a: "Les gaines s’encrassent plus lentement que les bouches. Leur état est vérifié lors du contrôle périodique et un nettoyage ou un remplacement est proposé si nécessaire.",
      },
    ],
    closing:
      "PCE intervient dans tout le Var (83), de Lorgues et Draguignan jusqu’au Golfe de Saint-Tropez, Fréjus, Brignoles, Toulon et Hyères.",
  },

  'disjoncteur-qui-saute': {
    publishAt: '2026-12-18',
    title: 'Le disjoncteur saute : causes et que faire ?',
    metaTitle: 'Le disjoncteur saute : causes et que faire',
    metaDescription:
      "Disjoncteur général, différentiel ou disjoncteur de circuit : comment trouver la cause d’une coupure, réarmer en sécurité et quand appeler un électricien.",
    photo: { tags: 'electrical-panel', lock: 1124 },
    relatedExpertise: 'mise-aux-normes-electriques-var',
    relatedService: '/electricite',
    intro: [
      "Une coupure de courant chez vous alors que les voisins sont éclairés : un dispositif de protection a fait son travail. Avant de le réarmer, il faut comprendre lequel a sauté et pourquoi. Voici comment identifier la cause, avec les précautions qui s’imposent.",
    ],
    sections: [
      {
        h2: 'Identifier ce qui a sauté',
        paragraphs: [
          "Le disjoncteur général, souvent placé près du compteur, coupe toute la maison quand la puissance appelée dépasse celle de votre abonnement. Les interrupteurs différentiels, en haut de chaque rangée du tableau, protègent les personnes contre les fuites de courant. Les disjoncteurs divisionnaires, un par circuit, coupent en cas de surcharge ou de court-circuit sur leur ligne.",
        ],
      },
      {
        h2: 'Le disjoncteur général : une surcharge',
        paragraphs: [
          "Four, plaques, lave-linge et radiateurs électriques en marche en même temps peuvent dépasser la puissance souscrite. Éteignez quelques appareils puis réarmez. Si la coupure se répète aux mêmes heures, décalez certains usages ou étudiez avec votre fournisseur un changement de puissance d’abonnement.",
        ],
      },
      {
        h2: 'Un interrupteur différentiel : une fuite de courant',
        paragraphs: [
          "Baissez tous les disjoncteurs de la rangée concernée, réarmez le différentiel, puis remontez les disjoncteurs un par un. Celui qui fait tout sauter désigne le circuit en cause. Débranchez alors les appareils de ce circuit et rebranchez-les un à un pour trouver le coupable : un électroménager défectueux est souvent en cause.",
          "Une coupure après un orage ou de fortes pluies oriente vers l’humidité : prise ou éclairage extérieur, boîte de dérivation mal protégée, local de piscine.",
        ],
      },
      {
        h2: 'Un disjoncteur de circuit : surcharge ou court-circuit',
        paragraphs: [
          "Trop d’appareils branchés sur la même ligne, une multiprise surchargée ou un appareil en court-circuit font sauter le disjoncteur du circuit. Débranchez les appareils, réarmez, puis rebranchez progressivement.",
        ],
      },
      {
        h2: 'Quand appeler un électricien',
        paragraphs: [
          "Ne forcez jamais un disjoncteur qui refuse de se réarmer, et ne le remplacez pas par un calibre supérieur. Appelez un électricien si les coupures se répètent sans cause identifiée, si vous sentez une odeur de brûlé, si une prise ou le tableau chauffe, ou si votre tableau est ancien. Un diagnostic permet souvent de repérer une installation à remettre aux normes.",
        ],
      },
    ],
    faq: [
      {
        q: 'Est-il dangereux de réarmer un disjoncteur ?',
        a: "Non, c’est prévu pour. Le danger serait de le réarmer en boucle sans chercher la cause, ou de le faire les mains mouillées. Si le dispositif saute aussitôt, arrêtez et cherchez la cause.",
      },
      {
        q: 'Pourquoi le différentiel saute-t-il la nuit ?',
        a: "Un appareil qui démarre seul la nuit peut être en cause : chauffe-eau en heures creuses, congélateur, pompe de piscine, chauffage programmé. Commencez par ces circuits.",
      },
      {
        q: 'Mon tableau n’a pas d’interrupteur différentiel, est-ce grave ?',
        a: "Les différentiels 30 mA sont obligatoires dans une installation aux normes. Sans eux, les occupants ne sont pas protégés contre l’électrocution : une mise aux normes du tableau s’impose.",
      },
    ],
    closing:
      "PCE intervient dans tout le Var (83), de Lorgues et Draguignan jusqu’au Golfe de Saint-Tropez, Fréjus, Brignoles, Toulon et Hyères.",
  },

  'adoucisseur-eau-utile-var': {
    publishAt: '2027-01-08',
    title: 'Adoucisseur d’eau : est-ce utile dans le Var ?',
    metaTitle: 'Adoucisseur d’eau : est-ce utile dans le Var ?',
    metaDescription:
      "Eau calcaire, chauffe-eau entartré, robinets blanchis : quand un adoucisseur se justifie dans le Var, comment il fonctionne et comment l’entretenir.",
    photo: { tags: 'water-softener', lock: 1125 },
    relatedService: '/traitement-de-l-eau',
    intro: [
      "Traces blanches sur la robinetterie, parois de douche ternies, bouilloire entartrée : dans une bonne partie du Var, l’eau du robinet est calcaire. Ce calcaire n’est pas dangereux pour la santé, mais il use les équipements. Un adoucisseur règle le problème, à condition d’être bien choisi et bien réglé.",
    ],
    sections: [
      {
        h2: 'Connaître la dureté de son eau',
        paragraphs: [
          "La dureté de l’eau se mesure en degrés français (°f). En dessous de 15 °f, l’eau est douce ; au-delà d’environ 25 à 30 °f, elle est dure et le calcaire devient gênant. La valeur de votre commune figure sur la fiche qualité de l’eau jointe une fois par an à la facture, et un test en bandelette donne une première idée en quelques secondes.",
        ],
      },
      {
        h2: 'Ce que le calcaire coûte',
        paragraphs: [
          "Le calcaire se dépose dans le chauffe-eau, autour de la résistance et au fond de la cuve, et réduit son rendement. Il encrasse le lave-linge et le lave-vaisselle, bouche les mousseurs et les pommeaux de douche, et oblige à utiliser davantage de lessive et de produits d’entretien.",
        ],
      },
      {
        h2: 'Comment fonctionne un adoucisseur',
        paragraphs: [
          "Installé sur l’arrivée d’eau, après le compteur, l’adoucisseur fait passer l’eau dans des résines qui retiennent le calcium et le magnésium. Les résines se régénèrent automatiquement grâce au sel stocké dans un bac, qu’il suffit de remplir régulièrement.",
          "Un adoucisseur bien réglé ne descend pas à zéro : on conserve une dureté résiduelle d’environ 8 à 15 °f, car une eau trop douce devient agressive pour les canalisations métalliques. Il est aussi conseillé de garder un robinet d’eau non adoucie pour la boisson et la cuisine.",
        ],
      },
      {
        h2: 'L’entretien',
        paragraphs: [
          "Remplissez le bac de sel adapté (pastilles pour adoucisseur), contrôlez la dureté de l’eau adoucie de temps en temps et faites réaliser une désinfection des résines et une vérification des réglages une fois par an. Un adoucisseur négligé peut devenir un nid à bactéries.",
        ],
      },
    ],
    faq: [
      {
        q: 'Les anti-calcaires magnétiques ou électroniques sont-ils efficaces ?',
        a: "Ils ne retirent pas le calcaire de l’eau et leur efficacité est plus discutée. Pour une eau très dure, l’adoucisseur à résines reste la solution de référence.",
      },
      {
        q: 'Peut-on boire l’eau adoucie ?',
        a: "L’eau adoucie contient un peu plus de sodium. Il est recommandé de conserver un robinet d’eau non adoucie pour la boisson, en particulier pour les personnes suivant un régime pauvre en sel et pour la préparation des biberons.",
      },
      {
        q: 'Quelle place faut-il prévoir ?',
        a: "Un adoucisseur domestique occupe à peu près l’encombrement d’un petit meuble, avec une évacuation à proximité pour les eaux de régénération. Il s’installe le plus souvent dans un garage, une buanderie ou un local technique.",
      },
    ],
    closing:
      "PCE intervient dans tout le Var (83), de Lorgues et Draguignan jusqu’au Golfe de Saint-Tropez, Fréjus, Brignoles, Toulon et Hyères.",
  },

  'entretien-annuel-chaudiere-gaz': {
    publishAt: '2027-01-08',
    title: 'Entretien annuel de la chaudière gaz : ce qu’il faut savoir',
    metaTitle: 'Entretien annuel de la chaudière gaz : l’essentiel',
    metaDescription:
      "Entretien de chaudière gaz : obligation annuelle, qui doit le faire, ce que vérifie le technicien, attestation et assurance. Les explications de PCE.",
    photo: { tags: 'heating', lock: 1126 },
    relatedService: '/chauffage',
    intro: [
      "L’entretien annuel d’une chaudière gaz n’est pas une option : c’est une obligation légale, et surtout une question de sécurité. Une chaudière mal réglée consomme davantage et peut produire du monoxyde de carbone, un gaz invisible et inodore. Voici ce que dit la règle et ce que comprend une visite d’entretien.",
    ],
    sections: [
      {
        h2: 'Une obligation chaque année',
        paragraphs: [
          "Depuis 2009, l’entretien annuel est obligatoire pour toutes les chaudières dont la puissance est comprise entre 4 et 400 kW, ce qui couvre la quasi-totalité des chaudières domestiques. Il doit être réalisé par un professionnel qualifié, qui remet ensuite une attestation d’entretien.",
          "Dans un logement loué, l’entretien est en principe à la charge du locataire, sauf clause contraire du bail. Le propriétaire occupant, lui, s’en charge directement.",
        ],
      },
      {
        h2: 'Ce que vérifie le technicien',
        paragraphs: [
          "La visite comprend le nettoyage du corps de chauffe et du brûleur, le contrôle des organes de sécurité, la vérification de l’évacuation des fumées, la mesure du monoxyde de carbone et le réglage de la combustion. Sur une chaudière à condensation, l’évacuation des condensats est également contrôlée.",
          "Le technicien vous donne enfin des conseils sur l’usage de l’installation et, si elle est ancienne, sur l’intérêt éventuel de la remplacer.",
        ],
      },
      {
        h2: 'L’attestation, à conserver',
        paragraphs: [
          "L’attestation d’entretien est remise dans les quinze jours suivant la visite. Conservez-la au moins deux ans : votre assureur peut la demander en cas de sinistre lié à la chaudière, et l’absence d’entretien peut réduire ou compromettre l’indemnisation.",
        ],
      },
      {
        h2: 'Les signes qui n’attendent pas la visite annuelle',
        paragraphs: [
          "Flamme jaune ou orangée au lieu de bleue, traces noires autour de la chaudière, mises en sécurité répétées, odeur de gaz : arrêtez la chaudière et faites-la contrôler sans attendre. En cas d’odeur de gaz, coupez l’arrivée au robinet de gaz, aérez, n’actionnez aucun interrupteur et appelez le numéro d’urgence de votre distributeur.",
        ],
      },
    ],
    faq: [
      {
        q: 'Quel est le meilleur moment pour faire entretenir sa chaudière ?',
        a: "Avant la saison de chauffe, à la fin de l’été ou au début de l’automne : la chaudière est prête pour l’hiver et les plannings des chauffagistes sont plus souples qu’en pleine saison.",
      },
      {
        q: 'Un contrat d’entretien est-il obligatoire ?',
        a: "Non, seul l’entretien annuel l’est. Un contrat permet simplement de ne pas oublier la visite et de regrouper l’entretien et le dépannage auprès du même professionnel.",
      },
      {
        q: 'Un détecteur de monoxyde de carbone est-il utile ?',
        a: "Il n’est pas obligatoire, mais il est recommandé dans les logements équipés d’un appareil à combustion. Il complète l’entretien annuel sans le remplacer.",
      },
    ],
    closing:
      "PCE intervient dans tout le Var (83), de Lorgues et Draguignan jusqu’au Golfe de Saint-Tropez, Fréjus, Brignoles, Toulon et Hyères.",
  },
}

/* Publication programmée : un article portant `publishAt` (AAAA-MM-JJ)
   n’apparaît (liste, plan du site, sitemap, prérendu, route) qu’à partir
   de cette date, au build suivant. Le déploiement du jour est relancé
   par une tâche programmée (workflow_dispatch de deploy.yml). */
const today = new Date().toISOString().slice(0, 10)
export const articleSlugs = Object.keys(articles).filter(
  (slug) => !articles[slug].publishAt || articles[slug].publishAt <= today
)
