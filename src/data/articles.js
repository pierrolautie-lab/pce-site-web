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
      "Comment choisir sa pompe à chaleur dans le Var : air/air, air/eau, puissance, COP et aides disponibles. Les conseils de PCE, installateur Qualipac.",
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
}

export const articleSlugs = Object.keys(articles)
