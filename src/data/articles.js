/* -------------------------------------------------------------------------
   Articles de conseils — 5 articles complets accessibles depuis /conseils.
   Même structure que les pages sous-expertise (paragraphes + FAQ), mais
   pensés comme du contenu éditorial : plus court, plus pratique, avec des
   liens vers les pages métier / sous-expertise / locales concernées.
---------------------------------------------------------------------------*/

export const articles = {
  'comment-choisir-pompe-a-chaleur': {
    title: 'Comment choisir sa pompe à chaleur ?',
    metaDescription:
      "Comment choisir sa pompe à chaleur dans le Var : air/air, air/eau, puissance, COP et aides disponibles. Les conseils de PCE, installateur de pompes à chaleur.",
    photo: { tags: 'heating', lock: 801 },
    relatedExpertise: 'installation-pompe-a-chaleur-var',
    relatedService: '/chauffage',
    intro: [
      "Choisir une pompe à chaleur ne se résume pas à comparer des prix catalogue : le type de pompe, sa puissance et son installation pèsent bien plus lourd sur votre confort et votre facture que la marque affichée sur l'appareil. Voici les critères que PCE vérifie systématiquement avant de conseiller un équipement à un habitant du Var.",
    ],
    sections: [
      {
        h2: 'Air/air ou air/eau : le premier choix à faire',
        paragraphs: [
          "La pompe à chaleur air/air (climatisation réversible) chauffe et rafraîchit l'air ambiant : simple à poser, elle convient bien aux logements déjà bien isolés où le chauffage n'est pas le poste principal. La pompe à chaleur air/eau alimente un réseau de chauffage central (radiateurs, plancher chauffant) et peut produire l'eau chaude sanitaire : c'est la solution la plus courante pour remplacer une chaudière fioul ou gaz vieillissante.",
          "Le choix dépend donc moins de vos préférences que de votre système de chauffage existant et de la nature de votre projet : remplacement de chaudière, construction neuve, ou simple besoin de rafraîchissement l'été.",
        ],
      },
      {
        h2: 'Bien dimensionner sa pompe à chaleur',
        paragraphs: [
          "Une pompe à chaleur surdimensionnée démarre et s'arrête en permanence (phénomène de cyclage), ce qui use prématurément le compresseur et dégrade le confort. Sous-dimensionnée, elle tourne en continu sans jamais atteindre la température souhaitée les jours les plus froids.",
          "Le bon dimensionnement repose sur une étude thermique qui prend en compte la surface, l'isolation, l'altitude et l'exposition du logement — pas seulement un ratio kW/m² approximatif. C'est l'étape que PCE ne saute jamais, y compris pour un simple remplacement à l'identique.",
        ],
      },
      {
        h2: 'Le COP, un indicateur à ne pas survaluer seul',
        paragraphs: [
          "Le coefficient de performance (COP) annoncé en catalogue est mesuré en laboratoire, dans des conditions optimales. Sur le terrain, il dépend fortement de la qualité de pose : longueur de tuyauterie, isolation des liaisons frigorifiques, réglage de la régulation. Deux installations avec le même modèle de pompe à chaleur peuvent afficher des performances réelles très différentes selon le soin apporté à la pose.",
        ],
      },
      {
        h2: 'Budget et aides disponibles',
        paragraphs: [
          "L'installation d'une pompe à chaleur reste éligible à MaPrimeRénov' et, selon votre profil, aux certificats d'économie d'énergie (CEE) — contrairement aux chaudières à gaz qui ont perdu cette éligibilité. Ces aides peuvent réduire sensiblement le reste à charge : PCE vous aide à identifier les dispositifs applicables à votre situation.",
        ],
      },
    ],
    faq: [
      {
        q: 'Une pompe à chaleur fonctionne-t-elle par grand froid ?',
        a: "Oui, les modèles récents restent performants jusqu'à des températures extérieures négatives, avec un rendement qui diminue progressivement. Dans le Var, les hivers restent suffisamment doux pour que ce point soit rarement limitant, sauf sur les hauteurs les plus exposées.",
      },
      {
        q: 'Faut-il un contrat d\'entretien pour une pompe à chaleur ?',
        a: "L'entretien annuel est obligatoire au-delà de 4 kW et conditionne le maintien de la garantie constructeur. PCE propose un contrat incluant contrôle des pressions et vérification de l'étanchéité du circuit frigorifique.",
      },
      {
        q: 'Combien de temps pour amortir une pompe à chaleur par rapport à une chaudière gaz ?',
        a: "Cela dépend du prix de l'énergie, de l'isolation du logement et des aides obtenues, mais le différentiel de coût de fonctionnement se traduit généralement par un amortissement en quelques années, sur une durée de vie de l'équipement de 15 à 20 ans.",
      },
    ],
  },

  'entretien-climatisation-quand-et-pourquoi': {
    title: 'Entretien de la climatisation : quand et pourquoi ?',
    metaDescription:
      "Entretien de climatisation : obligation réglementaire, fréquence recommandée et ce qui est vérifié. Les explications de PCE, installateur dans le Var.",
    photo: { tags: 'aircon', lock: 802 },
    relatedExpertise: 'installation-climatisation-reversible-var',
    relatedService: '/climatisation',
    intro: [
      "Une climatisation qui fonctionne encore n'est pas forcément une climatisation en bon état : filtres encrassés, fluide en légère fuite, pression déréglée sont autant de problèmes invisibles au quotidien mais qui dégradent les performances et la durée de vie de l'appareil. Voici pourquoi et à quel rythme PCE recommande un entretien régulier dans le Var.",
    ],
    sections: [
      {
        h2: 'Pourquoi l\'entretien est obligatoire au-delà de 2 kg de fluide',
        paragraphs: [
          "La réglementation impose un contrôle d'étanchéité périodique pour toute climatisation contenant plus de 2 kg de fluide frigorigène, en raison de l'impact environnemental de ces gaz en cas de fuite. La fréquence de ce contrôle dépend de la quantité de fluide présente dans le circuit.",
        ],
      },
      {
        h2: 'À quelle fréquence entretenir sa climatisation ?',
        paragraphs: [
          "Au-delà de l'obligation réglementaire, PCE recommande un entretien annuel avant la saison chaude pour tous les systèmes, mono-split comme gainable. C'est le moment idéal pour nettoyer les filtres, vérifier les pressions et s'assurer que l'appareil est prêt à fonctionner efficacement pendant les pics de chaleur du Var.",
        ],
      },
      {
        h2: 'Ce que comprend un entretien complet',
        paragraphs: [
          "Un entretien PCE comprend le nettoyage des filtres et des unités intérieures, le contrôle des pressions du circuit frigorifique, la vérification de l'écoulement des condensats et le contrôle d'étanchéité réglementaire quand il s'applique. Une climatisation qui fuit lentement perd en performance sans que l'utilisateur s'en rende toujours compte immédiatement — d'où l'intérêt d'un contrôle régulier plutôt que d'attendre une panne.",
        ],
      },
    ],
    faq: [
      {
        q: 'Que se passe-t-il si je n\'entretiens jamais ma climatisation ?',
        a: "Les filtres s'encrassent, le rendement baisse progressivement et la consommation électrique augmente pour un résultat de moins en moins satisfaisant. À terme, l'absence d'entretien peut aussi accélérer l'usure du compresseur.",
      },
      {
        q: 'Puis-je nettoyer moi-même les filtres de ma climatisation ?',
        a: "Oui, le nettoyage des filtres accessibles est une opération simple que vous pouvez réaliser tous les 1 à 2 mois en saison d'utilisation intensive. Le contrôle des pressions et de l'étanchéité, en revanche, nécessite l'intervention d'un professionnel équipé.",
      },
      {
        q: "L'entretien est-il différent pour un système gainable ?",
        a: "Le principe reste le même, mais l'accès aux filtres et aux bouches de diffusion demande davantage de temps sur un système gainable. PCE en tient compte dans la durée prévue pour l'intervention.",
      },
    ],
  },

  'pourquoi-installer-adoucisseur-eau-var': {
    title: "Pourquoi installer un adoucisseur d'eau dans le Var ?",
    metaDescription:
      "Pourquoi installer un adoucisseur d'eau dans le Var : calcaire, protection des canalisations, confort au quotidien. Les conseils de PCE avec Pentair FOLEO.",
    photo: { tags: 'water-softener', lock: 803 },
    relatedExpertise: 'adoucisseur-eau-var',
    relatedService: '/traitement-de-l-eau/adoucisseur',
    intro: [
      "Dépôts blanchâtres sur la robinetterie, chauffe-eau qui s'entartre plus vite que prévu, linge qui devient rêche : la dureté de l'eau du Var laisse des traces bien réelles dans la plupart des foyers. Voici pourquoi PCE recommande régulièrement l'installation d'un adoucisseur, et comment il fonctionne concrètement.",
    ],
    sections: [
      {
        h2: 'Le calcaire, un problème silencieux',
        paragraphs: [
          "Une eau à plus de 25°f (degrés français) de dureté, comme c'est fréquent dans de nombreuses communes du Var, dépose progressivement du tartre dans les canalisations, la robinetterie, les ballons d'eau chaude et les appareils électroménagers. Ce dépôt est rarement visible avant que les premiers dysfonctionnements n'apparaissent : baisse de pression, surconsommation d'énergie pour chauffer l'eau, pannes prématurées.",
        ],
      },
      {
        h2: 'Ce que le calcaire abîme réellement',
        paragraphs: [
          "Un ballon d'eau chaude entartré consomme davantage d'énergie pour chauffer le même volume d'eau, car le tartre isole la résistance de l'eau à chauffer. Lave-linge, lave-vaisselle et robinetterie voient également leur durée de vie réduite. Sur plusieurs années, le coût cumulé de ces dégradations dépasse largement celui d'un adoucisseur.",
        ],
      },
      {
        h2: 'Adoucisseur au sel : comment ça marche',
        paragraphs: [
          "Un adoucisseur remplace les ions calcium et magnésium responsables de la dureté par des ions sodium, via une résine régénérée périodiquement au sel. PCE installe la gamme Pentair FOLEO, garantie 10 ans sur la cuve, avec une régénération programmée selon votre consommation réelle plutôt qu'à intervalle fixe.",
        ],
      },
    ],
    faq: [
      {
        q: 'Un adoucisseur est-il rentable sur le long terme ?',
        a: "Oui : en protégeant le chauffe-eau, la robinetterie et l'électroménager du tartre, l'adoucisseur limite des réparations et remplacements prématurés dont le coût cumulé dépasse généralement celui de l'équipement et de son entretien.",
      },
      {
        q: 'Faut-il un adoucisseur même avec une eau moyennement calcaire ?',
        a: "Cela dépend du seuil : en dessous de 20°f, l'intérêt est plus limité. PCE recommande une analyse de la dureté réelle de votre eau avant de préconiser un adoucisseur, plutôt que de le proposer systématiquement.",
      },
      {
        q: "L'installation d'un adoucisseur nécessite-t-elle de gros travaux ?",
        a: "Non, l'adoucisseur se pose en dérivation sur l'arrivée d'eau froide générale, généralement en une demi-journée, sans reprise des canalisations existantes.",
      },
    ],
  },

  'quand-refaire-tableau-electrique': {
    title: 'Quand faut-il refaire son tableau électrique ?',
    metaDescription:
      "Quand refaire son tableau électrique : signes d'alerte, norme NF C 15-100 et anticipation des besoins futurs. Les conseils de PCE, électricien dans le Var.",
    photo: { tags: 'electrical-panel', lock: 804 },
    relatedExpertise: 'mise-aux-normes-electriques-var',
    relatedService: '/electricite',
    intro: [
      "Un tableau électrique qui fonctionne au quotidien n'est pas nécessairement un tableau sûr : dans de nombreux logements anciens du Var, l'absence de disjoncteur différentiel ou l'usage de fusibles à cartouche passe inaperçue jusqu'à un incident. Voici les signes qui doivent vous alerter, selon PCE.",
    ],
    sections: [
      {
        h2: 'Les signes qui doivent alerter',
        paragraphs: [
          "Un tableau électrique mérite d'être révisé s'il ne dispose pas de disjoncteur différentiel par circuit, si le disjoncteur général saute fréquemment sans raison apparente, ou s'il ne reste plus d'emplacement disponible pour ajouter un circuit. Ces signes indiquent souvent une installation qui n'a pas suivi l'évolution des usages du logement.",
        ],
      },
      {
        h2: 'Fusibles à cartouche : un signal fort',
        paragraphs: [
          "La présence de fusibles à cartouche à l'ancienne, plutôt que des disjoncteurs modernes, indique généralement une installation qui n'a pas été révisée depuis plusieurs décennies. Ce type de protection est moins réactif face à un défaut électrique qu'un disjoncteur différentiel actuel.",
        ],
      },
      {
        h2: 'Anticiper vos futurs besoins (PAC, borne, clim)',
        paragraphs: [
          "Installer une pompe à chaleur, une borne de recharge ou une climatisation nécessite souvent d'ajouter un circuit dédié au tableau électrique. Plutôt que d'intervenir dans l'urgence à chaque nouveau projet, PCE recommande de dimensionner le tableau avec une réserve de disjoncteurs disponibles dès la première mise aux normes.",
        ],
      },
    ],
    faq: [
      {
        q: 'Combien coûte le remplacement d\'un tableau électrique ?',
        a: 'Le coût dépend du nombre de circuits et du niveau de mise aux normes nécessaire. PCE établit un devis détaillé après diagnostic, plutôt qu\'un forfait générique qui ne tiendrait pas compte de votre installation existante.',
      },
      {
        q: 'Puis-je rester dans mon logement pendant les travaux ?',
        a: 'Oui, le remplacement d\'un tableau électrique se réalise généralement en une journée, avec une coupure de courant limitée à la durée des raccordements. PCE organise l\'intervention pour limiter la gêne.',
      },
      {
        q: 'La mise aux normes est-elle obligatoire pour vendre mon bien ?',
        a: 'Le diagnostic électrique est obligatoire pour toute installation de plus de 15 ans lors d\'une vente, mais la mise aux normes elle-même n\'est pas systématiquement imposée à l\'acte de vente. Elle reste cependant fortement recommandée pour la sécurité des occupants.',
      },
    ],
  },

  'preparer-piscine-pour-ete': {
    title: "Préparer sa piscine pour l'été",
    metaDescription:
      "Préparer sa piscine pour l'été dans le Var : sortie d'hivernage, équilibrage de l'eau, vérification de la filtration. Les conseils de PCE, pisciniste.",
    photo: { tags: 'pool', lock: 805 },
    relatedExpertise: 'entretien-piscine-var',
    relatedService: '/piscine',
    intro: [
      "Chaque printemps, la remise en route de la piscine conditionne la qualité de l'eau pour toute la saison qui suit. Une sortie d'hivernage bâclée se traduit souvent par une eau verte ou trouble dès les premières chaleurs. Voici les étapes que PCE recommande avant la première baignade.",
    ],
    sections: [
      {
        h2: 'Sortie d\'hivernage : les étapes clés',
        paragraphs: [
          "Retirer la bâche ou les flotteurs d'hivernage, nettoyer le bassin des feuilles et débris accumulés pendant l'hiver, puis remettre le niveau d'eau à sa hauteur normale sont les premières étapes. C'est aussi le moment de vérifier visuellement l'état du liner ou du revêtement après plusieurs mois sans surveillance quotidienne.",
        ],
      },
      {
        h2: 'Rééquilibrer l\'eau avant la baignade',
        paragraphs: [
          "Après l'hiver, le pH et le taux de désinfectant sont presque toujours à corriger avant de pouvoir se baigner en toute sécurité. PCE recommande de tester l'eau avant tout traitement choc, pour ajuster les doses réellement nécessaires plutôt que de traiter à l'aveugle, ce qui gaspille du produit et peut déséquilibrer l'eau davantage.",
        ],
      },
      {
        h2: 'Vérifier la filtration avant la saison',
        paragraphs: [
          "Un filtre qui a tourné au ralenti tout l'hiver doit être nettoyé ou contre-lavé avant la remise en route à plein régime. PCE vérifie également le bon fonctionnement de la pompe de filtration à ce moment de l'année, car une panne détectée en avril se répare bien plus sereinement qu'en plein pic de fréquentation estivale.",
        ],
      },
    ],
    faq: [
      {
        q: 'Quand faut-il commencer la remise en route de la piscine ?',
        a: "Dans le Var, la sortie d'hivernage se fait généralement fin mars ou en avril, avant les premières chaleurs, pour avoir une eau stabilisée et claire dès les premiers beaux jours.",
      },
      {
        q: 'Mon eau est verte après l\'hiver, est-ce grave ?',
        a: "Une eau verte après l'hivernage est fréquente et se corrige avec un traitement choc adapté suivi d'une filtration prolongée. Ce n'est généralement pas le signe d'un problème structurel, sauf si le phénomène persiste après plusieurs jours de traitement.",
      },
      {
        q: 'Faut-il un contrat d\'entretien pour la remise en route au printemps ?',
        a: "Ce n'est pas obligatoire, mais cela évite les oublis (vérification de la pompe, dosage précis des produits) qui coûtent souvent plus cher à rattraper en cours de saison qu'un contrat d'entretien annuel.",
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
    title: 'Comment fonctionne une pompe à chaleur ?',
    metaDescription:
      "Comment fonctionne une pompe à chaleur air/air ou air/eau : cycle frigorifique, COP et rendement. Les explications de PCE, installateur de pompes à chaleur dans le Var.",
    photo: { tags: 'heating', lock: 1101 },
    relatedExpertise: 'installation-pompe-a-chaleur-var',
    relatedService: '/chauffage',
    intro: [
      "Une pompe à chaleur ne produit pas de chaleur au sens propre : elle la prélève dans l'air extérieur, même par temps froid, pour la restituer à l'intérieur du logement. Ce principe, contre-intuitif au premier abord, explique pourquoi elle consomme trois à quatre fois moins d'énergie qu'un chauffage électrique classique. Voici comment PCE l'explique à ses clients avant chaque installation dans le Var.",
    ],
    sections: [
      {
        h2: 'Le cycle frigorifique, en quatre étapes',
        paragraphs: [
          "Un fluide frigorigène circule en circuit fermé à travers quatre organes : l'évaporateur, le compresseur, le condenseur et le détendeur. À l'évaporateur, le fluide capte les calories de l'air extérieur et se transforme en gaz, même à basse température. Le compresseur augmente ensuite sa pression et sa température, avant que le condenseur ne cède cette chaleur à l'eau du circuit de chauffage ou à l'air intérieur. Le détendeur referme la boucle en ramenant le fluide à sa pression initiale.",
          "Ce cycle tourne en continu, modulant sa puissance selon les besoins réels du logement grâce à un compresseur inverter, qui évite les démarrages et arrêts brutaux responsables d'une usure prématurée.",
        ],
      },
      {
        h2: 'Air/air ou air/eau : deux circuits de restitution',
        paragraphs: [
          "Une pompe à chaleur air/air restitue directement la chaleur dans l'air ambiant, via des unités intérieures identiques à celles d'une climatisation réversible. Une pompe à chaleur air/eau chauffe l'eau d'un circuit de radiateurs ou de plancher chauffant, et peut aussi produire l'eau chaude sanitaire. Le fonctionnement du circuit frigorifique reste le même ; seule la destination finale de la chaleur change.",
        ],
      },
      {
        h2: 'Pourquoi elle fonctionne même en hiver',
        paragraphs: [
          "Même à 0 °C, l'air extérieur contient encore de l'énergie thermique exploitable : c'est la raison pour laquelle une pompe à chaleur continue de fonctionner par temps froid, avec un rendement qui diminue progressivement à mesure que la température baisse. Dans le Var, les hivers doux permettent de conserver un excellent rendement la majeure partie de l'année, sauf sur les points les plus hauts et exposés du département.",
        ],
      },
    ],
    faq: [
      { q: 'Une pompe à chaleur fait-elle du bruit ?', a: "L'unité extérieure émet un bruit modéré, comparable à celui d'un réfrigérateur puissant. Le bon emplacement du groupe et son installation sur plots anti-vibratiles limitent encore cette nuisance, un point que PCE étudie systématiquement avant la pose." },
      { q: "Faut-il isoler son logement avant d'installer une pompe à chaleur ?", a: "Ce n'est pas obligatoire mais fortement recommandé : plus le logement est isolé, plus la pompe à chaleur fonctionne à basse température de départ, ce qui améliore son rendement et réduit sa consommation." },
      { q: "Quelle est la durée de vie d'une pompe à chaleur ?", a: "Comptez généralement 15 à 20 ans, sous réserve d'un entretien annuel régulier incluant le contrôle des pressions et de l'étanchéité du circuit frigorifique." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'combien-consomme-pompe-a-chaleur': {
    title: 'Combien consomme une pompe à chaleur ?',
    metaDescription:
      "Combien consomme une pompe à chaleur air/eau ou air/air : COP, facteurs qui influencent la facture et ordres de grandeur. Les repères de PCE dans le Var.",
    photo: { tags: 'heating', lock: 1102 },
    relatedExpertise: 'installation-pompe-a-chaleur-var',
    relatedService: '/chauffage',
    intro: [
      "La consommation d'une pompe à chaleur ne se lit pas sur une fiche technique mais se calcule à partir du besoin réel de chauffage du logement et du rendement de l'appareil sur l'année. Un même modèle peut afficher une facture très différente d'une maison à l'autre. Voici les repères que PCE utilise pour donner une estimation honnête à ses clients.",
    ],
    sections: [
      {
        h2: 'Le COP, indicateur clé mais incomplet',
        paragraphs: [
          "Le coefficient de performance (COP) indique combien de kWh de chaleur sont produits pour 1 kWh d'électricité consommé : un COP de 4 signifie 4 kWh restitués pour 1 kWh payé. Ce chiffre, mesuré en laboratoire dans des conditions fixes, ne reflète que partiellement la réalité du terrain, où la température extérieure varie en permanence — c'est pourquoi les professionnels préfèrent le SCOP (COP saisonnier), plus représentatif sur une année complète.",
        ],
      },
      {
        h2: 'Ce qui fait varier la facture réelle',
        paragraphs: [
          "L'isolation du logement, la température de consigne, la surface chauffée et la température de départ d'eau (plus basse avec un plancher chauffant qu'avec des radiateurs haute température) pèsent davantage sur la facture que le modèle choisi. Une pompe à chaleur surdimensionnée consomme aussi plus qu'annoncé, car elle cycle en permanence au lieu de moduler sa puissance en continu.",
        ],
      },
      {
        h2: 'Des ordres de grandeur, pas une promesse',
        paragraphs: [
          "Pour un logement correctement isolé dans le Var, il est courant d'observer une division par trois de la facture de chauffage par rapport à des convecteurs électriques, et par deux par rapport à une chaudière fioul ancienne. Ces ordres de grandeur doivent toujours être confirmés par une étude thermique du logement, seule capable de tenir compte de vos usages réels — c'est l'étape que PCE réalise avant tout devis.",
        ],
      },
    ],
    faq: [
      { q: "Le prix de l'électricité peut-il annuler l'intérêt d'une pompe à chaleur ?", a: "Non : même avec des tarifs en hausse, le rapport 1 kWh consommé pour 3 à 4 kWh restitués reste très favorable comparé à un chauffage électrique direct ou à une chaudière fioul." },
      { q: "Un contrat d'entretien réduit-il la consommation ?", a: "Indirectement, oui : un circuit frigorifique bien entretenu, sans perte de charge en fluide, conserve son rendement dans le temps. Une pompe à chaleur négligée voit sa consommation dériver progressivement." },
      { q: 'Peut-on suivre sa consommation en temps réel ?', a: "La plupart des modèles récents proposent une application de suivi. PCE peut aussi installer un compteur électrique dédié pour isoler précisément la consommation de la pompe à chaleur du reste du logement." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'pompe-a-chaleur-ou-chaudiere-gaz': {
    title: 'Pompe à chaleur ou chaudière gaz : que choisir ?',
    metaDescription:
      "Pompe à chaleur ou chaudière à gaz : comparatif coût, aides financières et confort. Les conseils neutres de PCE, installateur des deux solutions dans le Var.",
    photo: { tags: 'heating', lock: 1103 },
    relatedExpertise: 'installation-pompe-a-chaleur-var',
    relatedService: '/chauffage',
    intro: [
      "Face au remplacement d'une chaudière, la question revient systématiquement : rester au gaz ou basculer vers une pompe à chaleur ? PCE installe les deux solutions et n'a pas d'intérêt à en privilégier une par principe — voici les critères qui font réellement pencher la balance d'un projet à l'autre.",
    ],
    sections: [
      {
        h2: "Le coût à l'achat et les aides",
        paragraphs: [
          "Une chaudière à gaz à condensation coûte moins cher à l'achat qu'une pompe à chaleur air/eau, mais elle n'est plus éligible à MaPrimeRénov' ni aux certificats d'économie d'énergie, contrairement à la pompe à chaleur. Sur un projet de rénovation, ces aides peuvent réduire significativement l'écart de prix initial entre les deux solutions.",
        ],
      },
      {
        h2: 'Le coût de fonctionnement',
        paragraphs: [
          "Le kWh électrique reste plus cher que le kWh de gaz, mais une pompe à chaleur restitue 3 à 4 kWh de chaleur par kWh consommé, quand une chaudière gaz à condensation reste plafonnée autour de 1,05 à 1,1 kWh utile par kWh de gaz brûlé. Sur la durée, la pompe à chaleur l'emporte généralement, sauf logement mal isolé où elle doit tourner en continu.",
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
      { q: 'Peut-on garder ses radiateurs existants avec une pompe à chaleur ?', a: "Souvent oui, à condition qu'ils soient correctement dimensionnés pour fonctionner à basse température. PCE vérifie ce point avant de proposer un remplacement de chaudière par une pompe à chaleur." },
      { q: 'Une chaudière gaz reste-t-elle un bon choix en 2026 ?', a: "Elle reste pertinente en relève de chaudière existante ou en solution bi-énergie, mais son avenir réglementaire est incertain et elle a perdu l'essentiel des aides financières, ce qui doit peser dans la décision." },
      { q: 'Existe-t-il une solution hybride ?', a: "Oui, la pompe à chaleur hybride associe un module thermodynamique à une chaudière gaz existante, qui prend le relais lors des pics de froid. C'est une option intéressante en rénovation quand l'isolation ne permet pas un tout pompe à chaleur." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'quelle-climatisation-choisir-maison-var': {
    title: 'Quelle climatisation choisir pour sa maison dans le Var ?',
    metaDescription:
      "Quelle climatisation choisir dans le Var : monosplit, multisplit ou gainable selon votre logement. Les conseils de PCE, installateur climatisation certifié.",
    photo: { tags: 'aircon', lock: 1104 },
    relatedExpertise: 'installation-climatisation-reversible-var',
    relatedService: '/climatisation',
    intro: [
      "Entre les étés de plus en plus chauds du Var et le besoin de ne pas dénaturer une façade en pierre, le choix d'une climatisation adaptée dépend moins d'une préférence de marque que de la configuration réelle du logement. Voici comment PCE oriente ses clients.",
    ],
    sections: [
      {
        h2: 'Une seule pièce à traiter : le monosplit',
        paragraphs: [
          "Pour une chambre, un salon ou un bureau isolé, une climatisation monosplit reste la solution la plus simple et la plus économique : un groupe extérieur pour une unité intérieure. C'est le bon choix quand le besoin de rafraîchissement se concentre sur une seule pièce du logement.",
        ],
      },
      {
        h2: 'Plusieurs pièces : multisplit ou gainable',
        paragraphs: [
          "Le multisplit raccorde deux à cinq unités intérieures à un seul groupe extérieur : une solution qui limite l'impact sur la façade tout en traitant plusieurs pièces, avec un réglage indépendant par unité.",
          "Le système gainable, lui, dissimule l'ensemble du réseau dans les combles ou un faux plafond : seules des grilles de diffusion linéaires restent visibles. C'est l'option la plus discrète, mais elle demande un accès technique suffisant et se prête mieux à une rénovation lourde ou à une construction neuve.",
        ],
      },
      {
        h2: 'Les marques que PCE installe',
        paragraphs: [
          "Nous posons principalement du matériel Daikin, Mitsubishi Electric et Midea, choisis pour leur fiabilité éprouvée sur le terrain, la disponibilité des pièces détachées dans le Var et un bon rapport entre performance énergétique et niveau sonore. Le choix précis du modèle dépend ensuite du dimensionnement calculé pièce par pièce, pas d'une préférence de marque a priori.",
        ],
      },
    ],
    faq: [
      { q: 'Le gainable est-il plus cher que le multisplit ?', a: "Généralement oui, à surface équivalente, en raison du réseau de gaines à poser. Il reste néanmoins compétitif dès lors qu'on comptabilise l'esthétique et l'absence d'unités intérieures visibles." },
      { q: 'Une climatisation réversible peut-elle remplacer un chauffage ?', a: "Elle peut le compléter efficacement en mi-saison et sur les logements bien isolés, mais elle est rarement recommandée comme unique source de chauffage sur tout l'hiver, notamment sur les points les plus frais du Var." },
      { q: "Combien de temps dure l'installation ?", a: 'Comptez une journée pour un monosplit ou un multisplit à deux unités, et deux à trois jours pour un gainable complet, selon l’accessibilité des combles.' },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'climatisation-gainable-ou-split': {
    title: 'Climatisation gainable ou split : quelles différences ?',
    metaDescription:
      "Climatisation gainable ou split : discrétion, coût, faisabilité. Le comparatif de PCE pour bien choisir votre installation dans le Var.",
    photo: { tags: 'aircon', lock: 1105 },
    relatedExpertise: 'installation-climatisation-reversible-var',
    relatedService: '/climatisation',
    intro: [
      "Gainable ou split : les deux technologies climatisent aussi efficacement l'une que l'autre, mais elles ne répondent pas au même projet. PCE détaille ici les critères qui doivent réellement guider ce choix.",
    ],
    sections: [
      {
        h2: "L'esthétique et la discrétion",
        paragraphs: [
          "Le split laisse une unité murale visible dans chaque pièce traitée. Le gainable, lui, ne montre que des grilles de diffusion linéaires au plafond : c'est l'option à privilégier quand l'aspect intérieur prime, notamment dans les propriétés de caractère du Var où une unité murale dénaturerait une pièce à l'architecture soignée.",
        ],
      },
      {
        h2: 'La faisabilité technique',
        paragraphs: [
          "Le gainable nécessite un espace suffisant en combles ou en faux plafond pour faire courir le réseau de gaines et loger le caisson : une contrainte réelle en rénovation si la hauteur sous plafond est déjà limitée. Le split, plus compact, s'adapte à quasiment toute configuration, ce qui en fait souvent la seule option viable sur une maison de plain-pied sans combles aménageables.",
        ],
      },
      {
        h2: 'Le coût et le délai de pose',
        paragraphs: [
          "À nombre de pièces égal, un système gainable coûte généralement plus cher qu'un multisplit, en raison du temps de pose du réseau de gaines et du calorifugeage nécessaire. En contrepartie, un seul caisson suffit à traiter toute une maison, ce qui simplifie la maintenance par rapport à plusieurs unités intérieures split.",
        ],
      },
    ],
    faq: [
      { q: 'Peut-on mélanger gainable et split dans la même maison ?', a: 'Oui, c’est une solution fréquente : gainable pour les pièces de vie où la discrétion prime, split pour une pièce isolée comme un bureau ou une suite parentale.' },
      { q: 'Le gainable est-il plus difficile à entretenir ?', a: "L'accès aux filtres demande un peu plus de temps qu'un split mural, mais reste une opération standard pour un professionnel équipé. PCE en tient compte dans la durée de ses contrats d'entretien." },
      { q: 'Quelle solution est la plus silencieuse ?', a: 'Le gainable a un léger avantage, le caisson étant déporté dans les combles plutôt que dans la pièce à vivre, ce qui limite le bruit perçu au niveau des grilles de diffusion.' },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'avantages-inconvenients-adoucisseur': {
    title: "Adoucisseur d'eau : avantages et inconvénients",
    metaDescription:
      "Adoucisseur d'eau : les vrais avantages (protection des équipements, confort) et les points de vigilance. L'avis neutre de PCE, installateur Pentair Foleo.",
    photo: { tags: 'water-softener', lock: 1106 },
    relatedExpertise: 'adoucisseur-eau-var',
    relatedService: '/traitement-de-l-eau/adoucisseur',
    intro: [
      "Un adoucisseur d'eau change réellement le quotidien dans une région aussi calcaire que le Var, mais ce n'est pas un équipement à installer sans réflexion. Voici, sans parti pris commercial, ce que PCE explique à ses clients avant de préconiser un adoucisseur.",
    ],
    sections: [
      {
        h2: 'Les avantages concrets',
        paragraphs: [
          "Moins de tartre dans les canalisations, le chauffe-eau et l'électroménager, une robinetterie qui reste propre plus longtemps, un linge plus doux et une peau moins agressée après la douche : ce sont les bénéfices que nos clients remarquent en premier. Sur plusieurs années, la protection des équipements contre l'entartrage représente aussi une économie réelle sur les réparations et remplacements prématurés.",
        ],
      },
      {
        h2: 'Les points de vigilance',
        paragraphs: [
          "Un adoucisseur consomme du sel et de l'eau lors de ses cycles de régénération, ce qui représente un coût d'usage à intégrer au calcul de rentabilité. L'eau adoucie est légèrement plus riche en sodium : PCE recommande systématiquement de conserver un point d'eau non adoucie pour la boisson et la cuisine, en particulier pour les régimes pauvres en sel.",
        ],
      },
      {
        h2: "Quand l'adoucisseur n'est pas la priorité",
        paragraphs: [
          "En dessous de 20°f de dureté, l'intérêt d'un adoucisseur reste limité par rapport à son coût d'installation et d'entretien. C'est pourquoi PCE mesure systématiquement la dureté réelle de l'eau avant de le préconiser, plutôt que de le proposer par défaut à chaque visite.",
        ],
      },
    ],
    faq: [
      { q: "Un adoucisseur augmente-t-il la facture d'eau ?", a: "Légèrement, en raison de l'eau utilisée pour les cycles de régénération, mais cette hausse reste généralement bien inférieure aux économies réalisées sur les produits d'entretien et la durée de vie des équipements." },
      { q: 'Faut-il changer la résine régulièrement ?', a: "Non, la résine d'un adoucisseur bien entretenu dure généralement plusieurs dizaines d'années ; seul le sel doit être rechargé périodiquement." },
      { q: "L'adoucisseur convient-il à toutes les maisons ?", a: 'Oui techniquement, mais son intérêt économique dépend de la dureté réelle de votre eau, mesurée avant tout devis par PCE.' },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'comment-savoir-eau-calcaire': {
    title: 'Comment savoir si son eau est calcaire ?',
    metaDescription:
      "Comment savoir si son eau est calcaire : signes visibles, test de dureté et seuils à connaître. Les repères de PCE, spécialiste du traitement de l'eau dans le Var.",
    photo: { tags: 'water-softener', lock: 1107 },
    relatedExpertise: 'adoucisseur-eau-var',
    relatedService: '/traitement-de-l-eau',
    intro: [
      "Avant de préconiser un traitement, PCE mesure toujours la dureté réelle de l'eau plutôt que de se fier aux seules apparences. Voici les signes qui doivent alerter, et comment obtenir une mesure fiable.",
    ],
    sections: [
      {
        h2: 'Les signes visibles au quotidien',
        paragraphs: [
          "Traces blanchâtres autour des robinets et sur la robinetterie, dépôt au fond des verres après lavage, résistance de chauffe-eau qui s'entartre rapidement, linge qui devient rêche avec le temps : ce sont les premiers signaux d'une eau dure. Dans le Var, où de nombreuses communes dépassent 25°f, ces signes apparaissent souvent en quelques mois seulement après un remplacement d'équipement.",
        ],
      },
      {
        h2: 'La dureté se mesure en degrés français (°f)',
        paragraphs: [
          "La dureté de l'eau, ou titre hydrotimétrique, s'exprime en degrés français. En dessous de 15°f, l'eau est considérée comme douce ; entre 15 et 25°f, moyennement dure ; au-delà de 25°f, dure à très dure. Une bandelette de test, disponible en magasin de bricolage, donne une première indication rapide mais approximative.",
        ],
      },
      {
        h2: 'Une mesure fiable avant tout devis',
        paragraphs: [
          "PCE réalise une mesure précise de la dureté directement chez vous, avant toute proposition d'équipement. Cette analyse conditionne le choix du traitement : simple filtration, adoucisseur classique ou solution combinée selon la présence éventuelle de fer ou de particules dans l'eau.",
        ],
      },
    ],
    faq: [
      { q: 'La compagnie des eaux communique-t-elle la dureté ?', a: "Oui, la plupart des services d'eau publient un rapport annuel sur la qualité de l'eau distribuée, incluant la dureté moyenne. Cette valeur reste toutefois une moyenne communale : une mesure sur place donne un résultat plus précis pour votre logement." },
      { q: 'Le calcaire est-il dangereux pour la santé ?', a: "Non, le calcium et le magnésium contenus dans une eau dure ne présentent pas de risque sanitaire ; le problème est avant tout matériel, sur les canalisations et les équipements." },
      { q: 'Peut-on réduire le calcaire sans adoucisseur ?', a: "Un filtre anti-tartre polyphosphates limite les dépôts sans changer la composition de l'eau, mais reste moins efficace qu'un adoucisseur sur une eau très dure comme celle observée dans une grande partie du Var." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'peut-on-boire-eau-adoucisseur': {
    title: "Peut-on boire l'eau d'un adoucisseur ?",
    metaDescription:
      "Peut-on boire l'eau adoucie : teneur en sodium, précautions et bonnes pratiques. Les explications de PCE, installateur d'adoucisseurs dans le Var.",
    photo: { tags: 'water-softener', lock: 1108 },
    relatedExpertise: 'adoucisseur-eau-var',
    relatedService: '/traitement-de-l-eau/adoucisseur',
    intro: [
      "C'est l'une des questions les plus fréquentes posées avant l'installation d'un adoucisseur : l'eau adoucie reste-t-elle bonne à boire ? La réponse est oui dans la grande majorité des cas, avec quelques précautions simples que PCE explique systématiquement.",
    ],
    sections: [
      {
        h2: 'Ce que change réellement l’adoucissement',
        paragraphs: [
          "Un adoucisseur remplace le calcium et le magnésium par du sodium, via une résine régénérée au sel. Cette substitution reste chimiquement sans danger pour la grande majorité des personnes, mais elle augmente légèrement la teneur en sodium de l'eau, proportionnellement à la dureté initiale et au réglage de l'appareil.",
        ],
      },
      {
        h2: 'Pourquoi garder un point d’eau non adoucie',
        paragraphs: [
          "Par précaution, PCE installe systématiquement une dérivation d'eau non adoucie au niveau de l'évier de cuisine, en particulier pour les foyers suivant un régime pauvre en sel, avec un nourrisson, ou simplement par préférence de goût. Cette dérivation ne nécessite aucun entretien particulier et coexiste sans problème avec le circuit adouci du reste du logement.",
        ],
      },
      {
        h2: 'Et pour la cuisson ou l’arrosage ?',
        paragraphs: [
          "L'eau adoucie convient parfaitement à la cuisson des aliments et au nettoyage, mais elle est déconseillée pour l'arrosage des plantes sensibles au sodium sur le long terme : mieux vaut y consacrer un point d'eau brute, généralement conservé sur le circuit extérieur avant l'adoucisseur.",
        ],
      },
    ],
    faq: [
      { q: 'L’eau adoucie a-t-elle un goût différent ?', a: 'Certaines personnes perçoivent une légère différence de goût, plus douce, sans que cela pose de problème sanitaire. C’est une question de préférence personnelle plus que de qualité de l’eau.' },
      { q: 'Les personnes sous régime sans sel peuvent-elles utiliser un adoucisseur ?', a: "Oui, à condition de conserver un point d'eau non adoucie pour la boisson et la préparation des repas, ce que PCE prévoit systématiquement lors de l'installation." },
      { q: "Faut-il un traitement complémentaire pour l'eau de boisson ?", a: "Ce n'est pas obligatoire, mais une filtration à charbon actif sur le point d'eau non adoucie améliore encore le goût en réduisant le chlore résiduel, si vous le souhaitez." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'comment-filtrer-eau-forage': {
    title: "Comment filtrer l'eau d'un forage ?",
    metaDescription:
      "Comment filtrer l'eau d'un forage : particules, fer, dureté et désinfection. La méthode de PCE pour une eau de forage saine dans le Var.",
    photo: { tags: 'water-softener', lock: 1109 },
    relatedExpertise: 'adoucisseur-eau-var',
    relatedService: '/traitement-de-l-eau',
    intro: [
      "Contrairement à l'eau du réseau public, l'eau d'un forage n'est ni contrôlée ni traitée en amont : sa qualité dépend entièrement de la nature du sous-sol et impose une analyse avant tout usage domestique. Voici la méthode que PCE applique pour traiter une eau de forage dans le Var.",
    ],
    sections: [
      {
        h2: "L'analyse, toujours en premier",
        paragraphs: [
          "Avant de proposer le moindre équipement, PCE fait analyser l'eau du forage : présence de particules (sable, boue, rouille), teneur en fer et manganèse, dureté, pH et, si besoin, présence bactériologique. Cette analyse oriente l'ensemble du traitement à mettre en place, qui varie fortement d'un forage à l'autre.",
        ],
      },
      {
        h2: 'La filtration des particules, en première étape',
        paragraphs: [
          "Un filtre à particules en tête d'installation retient le sable, la boue et la rouille avant qu'ils n'atteignent la robinetterie et les équipements. C'est une étape quasiment systématique sur une eau de forage, même lorsque l'eau paraît claire à l'œil nu.",
        ],
      },
      {
        h2: 'Fer, dureté et désinfection : des traitements ciblés',
        paragraphs: [
          "Un excès de fer se traite par oxydation puis filtration dédiée, sous peine de tacher durablement la robinetterie et le linge. La dureté, si elle est élevée, justifie ensuite un adoucisseur classique. Enfin, en l'absence de désinfection naturelle comme sur le réseau public, un traitement UV ou une chloration ponctuelle sécurise l'eau sur le plan bactériologique, en particulier pour un usage de boisson.",
        ],
      },
    ],
    faq: [
      { q: "L'eau de forage est-elle potable sans traitement ?", a: 'Pas par défaut : seule une analyse bactériologique et physico-chimique récente peut le confirmer. PCE recommande systématiquement cette analyse avant tout usage de boisson.' },
      { q: "Faut-il refaire l'analyse régulièrement ?", a: "Oui, une fois par an au minimum, car la qualité d'un forage peut évoluer avec les saisons, les pluies et le niveau de la nappe." },
      { q: 'Un forage nécessite-t-il toujours plusieurs équipements ?', a: "Le plus souvent oui : filtration de particules en première étape, puis un ou plusieurs traitements ciblés selon les résultats d'analyse. Rarement un seul appareil suffit à tout traiter." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'a-quoi-sert-traitement-uv': {
    title: "À quoi sert le traitement UV de l'eau ?",
    metaDescription:
      "Traitement UV de l'eau : principe, efficacité et cas d'usage. Les explications de PCE sur cette désinfection sans produit chimique, installée dans le Var.",
    photo: { tags: 'water-softener', lock: 1110 },
    relatedExpertise: 'adoucisseur-eau-var',
    relatedService: '/traitement-de-l-eau',
    intro: [
      "Le traitement UV désinfecte l'eau sans ajouter le moindre produit chimique, ce qui en fait une solution particulièrement adaptée à certaines situations. Voici comment PCE l'utilise, et dans quels cas il est réellement pertinent.",
    ],
    sections: [
      {
        h2: 'Le principe : une lumière qui neutralise les micro-organismes',
        paragraphs: [
          "Un stérilisateur UV expose l'eau à une lumière ultraviolette de longueur d'onde spécifique, qui détruit l'ADN des bactéries, virus et autres micro-organismes présents, sans modifier le goût, l'odeur ni la composition chimique de l'eau. Le traitement agit en continu, au moment même où l'eau traverse l'appareil.",
        ],
      },
      {
        h2: "Dans quels cas l'installer",
        paragraphs: [
          "Le traitement UV s'installe le plus souvent sur une eau de forage, en complément d'une filtration de particules, pour sécuriser l'eau sur le plan bactériologique sans recourir à une chloration. Il convient aussi aux résidences qui souhaitent une eau de boisson sans traitement chimique ajouté, en complément de l'eau du réseau public.",
        ],
      },
      {
        h2: 'Ses limites à connaître',
        paragraphs: [
          "Le traitement UV désinfecte, mais ne filtre pas les particules ni ne réduit la dureté de l'eau : il doit toujours être installé après une filtration adaptée, sous peine de perdre en efficacité si l'eau est trouble. Il nécessite également une alimentation électrique continue et le remplacement périodique de la lampe UV, généralement une fois par an.",
        ],
      },
    ],
    faq: [
      { q: 'Le traitement UV consomme-t-il beaucoup d’électricité ?', a: 'Non, la puissance d’une lampe UV domestique reste faible, comparable à celle d’une ampoule basse consommation, pour un fonctionnement continu.' },
      { q: 'Faut-il entretenir un stérilisateur UV ?', a: 'Le remplacement annuel de la lampe est la seule opération nécessaire, ainsi qu’un nettoyage occasionnel du fourreau en quartz qui la protège.' },
      { q: 'Le traitement UV remplace-t-il une chloration en cas de contamination avérée ?', a: 'En cas de contamination bactériologique confirmée, une désinfection choc reste parfois nécessaire avant de remettre le traitement UV en service continu. PCE vous oriente selon les résultats d’analyse.' },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'charbon-actif-que-filtre-t-il': {
    title: 'Filtration au charbon actif : que filtre-t-elle exactement ?',
    metaDescription:
      "Charbon actif : chlore, pesticides, goûts et odeurs de l'eau. Ce que filtre réellement cette technologie, expliqué par PCE dans le Var.",
    photo: { tags: 'water-softener', lock: 1111 },
    relatedExpertise: 'adoucisseur-eau-var',
    relatedService: '/traitement-de-l-eau',
    intro: [
      "Le charbon actif est l'une des filtrations les plus répandues pour améliorer le goût de l'eau du robinet, mais son champ d'action reste précis. Voici ce qu'il filtre réellement, et ce qu'il ne traite pas.",
    ],
    sections: [
      {
        h2: "Le principe de l'adsorption",
        paragraphs: [
          "Le charbon actif retient les molécules organiques par adsorption : celles-ci se fixent à la surface poreuse du charbon plutôt que d'être filtrées mécaniquement comme des particules. Cette surface, considérablement développée par la structure du charbon, lui permet de capter chlore, pesticides et composés responsables de mauvais goûts ou odeurs.",
        ],
      },
      {
        h2: "Ce qu'il filtre efficacement",
        paragraphs: [
          "Le chlore résiduel du traitement de l'eau publique, souvent responsable d'un goût désagréable, est l'un des éléments les mieux retenus par le charbon actif. Il capte également certains pesticides, solvants et composés organiques volatils, ainsi que les composés à l'origine d'odeurs désagréables.",
        ],
      },
      {
        h2: "Ce qu'il ne traite pas",
        paragraphs: [
          "Le charbon actif ne réduit ni le calcaire ni la présence de sodium, de nitrates ou de métaux lourds : ces éléments nécessitent d'autres technologies, comme l'adoucisseur pour la dureté ou l'osmose inverse pour les nitrates et métaux. C'est pourquoi PCE le propose généralement en complément d'un autre traitement, rarement seul, sauf pour une simple amélioration du goût.",
        ],
      },
    ],
    faq: [
      { q: 'Faut-il changer la cartouche de charbon actif régulièrement ?', a: "Oui, généralement tous les six à douze mois selon l'usage, car le charbon actif se sature progressivement et perd en efficacité une fois sa capacité d'adsorption atteinte." },
      { q: 'Le charbon actif filtre-t-il les bactéries ?', a: "Non, il n'est pas conçu pour cet usage. Une désinfection UV ou une filtration dédiée est nécessaire si un risque bactériologique est identifié." },
      { q: 'Peut-on installer un filtre à charbon actif sous l’évier ?', a: "Oui, c'est l'installation la plus courante pour traiter spécifiquement l'eau de boisson et de cuisson, sans traiter l'ensemble du logement." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'pourquoi-piscine-au-sel': {
    title: 'Pourquoi passer sa piscine au sel ?',
    metaDescription:
      "Pourquoi choisir une piscine au sel : confort, économies et fonctionnement de l'électrolyse. Les explications de PCE, pisciniste dans le Var.",
    photo: { tags: 'pool', lock: 1112 },
    relatedExpertise: 'entretien-piscine-var',
    relatedService: '/piscine',
    intro: [
      "Le traitement au sel s'est imposé ces dernières années comme la solution de désinfection la plus demandée par les propriétaires de piscine du Var. PCE explique ici son fonctionnement et ce qu'il change réellement au quotidien.",
    ],
    sections: [
      {
        h2: "Le principe de l'électrolyse au sel",
        paragraphs: [
          "Une cellule d'électrolyse transforme le sel dissous dans l'eau du bassin en chlore naturel, en continu et en quantité automatiquement régulée. Contrairement au traitement au chlore manuel, il n'y a plus de pastilles à doser ni de bidons à manipuler : le système produit le désinfectant nécessaire directement dans l'eau.",
        ],
      },
      {
        h2: 'Le confort au quotidien',
        paragraphs: [
          "L'eau salée d'une piscine au sel reste beaucoup plus douce pour la peau et les yeux qu'une eau traitée au chlore classique, avec une odeur nettement atténuée. Le taux de sel utilisé reste faible, largement inférieur à celui de l'eau de mer, pour un confort de baignade proche de l'eau douce.",
        ],
      },
      {
        h2: 'Les économies sur la saison',
        paragraphs: [
          "Une fois le sel initial dissous dans le bassin, son appoint reste limité d'une saison à l'autre, ce qui réduit sensiblement le budget produits par rapport à un traitement au chlore manuel. PCE installe et règle la cellule d'électrolyse pour qu'elle produise exactement la quantité de chlore nécessaire, sans surdosage ni sous-traitement.",
        ],
      },
    ],
    faq: [
      { q: 'Le sel abîme-t-il le bassin et les équipements ?', a: "À condition que le taux soit maîtrisé et que l'échelle, les projecteurs et le liner soient compatibles avec le sel, aucune dégradation n'est à prévoir. PCE vérifie systématiquement ces points avant d'installer une électrolyse." },
      { q: 'Faut-il quand même surveiller le pH avec une piscine au sel ?', a: "Oui, l'électrolyse au sel a tendance à faire légèrement monter le pH : un contrôle régulier reste nécessaire, éventuellement automatisé par une régulation dédiée." },
      { q: 'Peut-on convertir une piscine au chlore en piscine au sel ?', a: "Oui, dans la grande majorité des cas, en installant une cellule d'électrolyse sur le circuit de filtration existant, sans travaux lourds sur le bassin." },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'pompe-piscine-vitesse-variable-avantages': {
    title: 'Pompe de piscine à vitesse variable : quels avantages ?',
    metaDescription:
      "Pompe à vitesse variable pour piscine : économies d'électricité, silence et longévité. Les avantages détaillés par PCE, pisciniste dans le Var.",
    photo: { tags: 'pool', lock: 1113 },
    relatedExpertise: 'entretien-piscine-var',
    relatedService: '/piscine',
    intro: [
      "Remplacer une pompe de filtration classique par un modèle à vitesse variable reste l'un des investissements les plus rentables sur une piscine existante. PCE détaille ici pourquoi, au-delà du seul argument économique.",
    ],
    sections: [
      {
        h2: "Des économies d'électricité importantes",
        paragraphs: [
          "Une pompe à vitesse variable adapte son régime aux besoins réels de filtration, plutôt que de tourner à pleine puissance en permanence comme une pompe monovitesse. Le résultat se traduit couramment par une réduction de 50 à 80 % de la consommation électrique liée à la filtration, l'un des postes les plus lourds de l'entretien d'une piscine.",
        ],
      },
      {
        h2: 'Une filtration plus longue, une eau plus claire',
        paragraphs: [
          "En tournant plus longtemps mais à faible régime, la pompe à vitesse variable filtre l'eau plus finement et plus régulièrement qu'un cycle court à pleine puissance. Le résultat se voit directement sur la clarté de l'eau, avec moins de sollicitations du système de traitement.",
        ],
      },
      {
        h2: 'Silence et longévité du matériel',
        paragraphs: [
          "Un fonctionnement à bas régime réduit considérablement le bruit perçu, un critère de plus en plus recherché sur les terrasses proches du bassin. La pompe elle-même s'use aussi moins vite, les démarrages à pleine puissance étant la principale cause d'usure prématurée d'un moteur de filtration.",
        ],
      },
    ],
    faq: [
      { q: 'Le remplacement de la pompe est-il complexe ?', a: 'Non, une pompe à vitesse variable se raccorde généralement sur la tuyauterie existante, sans reprise du circuit hydraulique. PCE réalise cette intervention en général en une demi-journée.' },
      { q: 'Le surcoût est-il rapidement amorti ?', a: "Oui, l'écart de prix avec une pompe monovitesse est généralement compensé en deux à trois saisons grâce aux économies d'électricité réalisées sur la filtration." },
      { q: 'Peut-on programmer plusieurs vitesses selon les besoins ?', a: 'Oui, la plupart des modèles permettent de programmer différentes vitesses selon le moment de la journée : filtration lente en continu, vitesse plus élevée pour le traitement choc ou le fonctionnement du robot.' },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'pourquoi-ph-piscine-varie': {
    title: 'Pourquoi le pH d’une piscine varie-t-il sans arrêt ?',
    metaDescription:
      "Pourquoi le pH d'une piscine bouge : température, pluie, baigneurs et traitement. Les explications de PCE pour stabiliser durablement votre bassin.",
    photo: { tags: 'pool', lock: 1114 },
    relatedExpertise: 'entretien-piscine-var',
    relatedService: '/piscine',
    intro: [
      "Le pH d'une piscine semble parfois évoluer sans raison apparente d'un contrôle à l'autre. En réalité, plusieurs facteurs agissent en permanence sur cet équilibre, souvent combinés. Voici ce que PCE vérifie en priorité pour stabiliser durablement un bassin.",
    ],
    sections: [
      {
        h2: 'Les baigneurs et les produits de traitement',
        paragraphs: [
          "Chaque baignade introduit des résidus (crèmes solaires, sueur, urine) qui font varier le pH, généralement à la hausse. Le chlore lui-même, selon sa forme (galets, liquide, électrolyse au sel), influence le pH différemment : le chlore par électrolyse au sel a par exemple tendance à le faire progressivement monter.",
        ],
      },
      {
        h2: 'La météo et le remplissage',
        paragraphs: [
          "La pluie, généralement légèrement acide, fait baisser le pH après un orage. L'appoint d'eau du réseau, dont la composition varie selon la commune, modifie également l'équilibre du bassin à chaque remplissage significatif, notamment en sortie d'hivernage.",
        ],
      },
      {
        h2: 'Pourquoi un contrôle régulier reste indispensable',
        paragraphs: [
          "Un pH mal maîtrisé, trop haut ou trop bas, réduit fortement l'efficacité du chlore et peut irriter la peau et les yeux des baigneurs, tout en favorisant l'entartrage ou la corrosion des équipements. PCE recommande un contrôle hebdomadaire en saison, ou l'installation d'une régulation automatique du pH pour les bassins très fréquentés.",
        ],
      },
    ],
    faq: [
      { q: 'Quelle est la plage de pH idéale pour une piscine ?', a: 'Entre 7,0 et 7,4, une plage proche du pH naturel de l’œil humain, qui garantit à la fois le confort de baignade et l’efficacité maximale du chlore.' },
      { q: 'Une régulation automatique du pH est-elle fiable ?', a: 'Oui, une fois correctement réglée et étalonnée par un professionnel, elle limite fortement les écarts entre deux contrôles manuels et réduit la consommation de produits correcteurs.' },
      { q: 'Faut-il attendre après un ajustement de pH avant de se baigner ?', a: 'Un délai de trente minutes à une heure, selon le produit utilisé, permet une bonne homogénéisation dans le bassin avant la baignade.' },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },

  'a-quoi-sert-le-redox': {
    title: "À quoi sert le redox dans le traitement d'une piscine ?",
    metaDescription:
      "Le redox (ORP) en piscine : ce qu'il mesure, pourquoi il est plus fiable que le taux de chlore seul. Les explications de PCE, pisciniste dans le Var.",
    photo: { tags: 'pool', lock: 1115 },
    relatedExpertise: 'entretien-piscine-var',
    relatedService: '/piscine',
    intro: [
      "Moins connu que le pH ou le taux de chlore, le redox (ou ORP, potentiel d'oxydoréduction) est pourtant l'indicateur le plus fiable de l'efficacité réelle de la désinfection d'une piscine. PCE explique pourquoi il équipe de plus en plus de bassins de cette mesure.",
    ],
    sections: [
      {
        h2: 'Ce que mesure le redox',
        paragraphs: [
          "Le redox exprime, en millivolts, le pouvoir désinfectant réel de l'eau à un instant donné — c'est-à-dire sa capacité à détruire les micro-organismes présents. Contrairement au taux de chlore mesuré seul, le redox tient compte de l'effet combiné du chlore, du pH et de la température, pour donner une image plus fidèle de la qualité sanitaire de l'eau.",
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
          "Sur les bassins équipés d'une régulation automatique, la mesure du redox permet d'injecter le chlore uniquement quand c'est nécessaire, plutôt que selon un dosage fixe. PCE installe ce type de régulation sur les piscines à forte fréquentation, où elle garantit une désinfection constante tout en limitant la surconsommation de produits.",
        ],
      },
    ],
    faq: [
      { q: 'Faut-il un appareil spécifique pour mesurer le redox ?', a: 'Oui, une sonde redox dédiée est nécessaire ; les bandelettes de test classiques ne mesurent que le chlore libre et le pH, pas le potentiel d’oxydoréduction.' },
      { q: 'Un redox trop élevé est-il un problème ?', a: 'Un redox excessif peut indiquer un surdosage de chlore, source d’irritation pour les baigneurs. La régulation automatique évite justement ce type d’excès en ajustant l’injection en continu.' },
      { q: 'Le redox remplace-t-il le contrôle du pH ?', a: 'Non, les deux mesures sont complémentaires : le pH conditionne l’efficacité du chlore, le redox en mesure le résultat final sur le pouvoir désinfectant réel de l’eau.' },
    ],
    closing:
      "PCE intervient dans le Var (83), de Lorgues et Draguignan jusqu'à Sainte-Maxime, Les Issambres et l'ensemble du Golfe de Saint-Tropez.",
  },
}

export const articleSlugs = Object.keys(articles)
