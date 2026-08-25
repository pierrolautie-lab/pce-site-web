import { imageManifest } from './imageManifest.js'

/* -------------------------------------------------------------------------
   PHOTOS DU CLIENT
   -------------------------------------------------------------------------
   Chaque emplacement photo du site porte un identifiant unique (le « slot »).
   Tant qu'aucune photo réelle n'est associée, le site affiche une photo
   d'illustration. Dès qu'un chemin est renseigné dans `clientPhotos`, la vraie
   photo prend automatiquement le dessus, partout où le slot est utilisé.

   POUR AJOUTER UNE PHOTO RÉELLE :
     1. Déposer le fichier dans  public/img/
     2. Renseigner la ligne correspondante ci-dessous, par exemple :
            628: '/img/tableau-electrique-draguignan.jpg',

   Formats conseillés : JPEG ou WebP, 1600 px de large minimum,
   cadrage paysage pour les héros et la galerie.
---------------------------------------------------------------------------*/

/** Inventaire lisible des emplacements — sert aussi de table de validation. */
export const PHOTO_SLOTS = {
  /* --- Accueil ------------------------------------------------------- */
  100: { page: 'Accueil', zone: 'Hero — fond', sujet: 'Véhicules PCE devant une villa' },
  101: { page: 'Accueil', zone: 'Hero (repli)', sujet: 'Maison / villa provençale' },
  102: { page: 'Accueil', zone: "Bloc entreprise", sujet: 'Artisan en intervention' },
  103: { page: 'Accueil', zone: 'Bloc entreprise', sujet: 'Bastide, façade en pierre' },
  950: { page: 'Accueil', zone: 'Zone — Lorgues', sujet: 'Village de Lorgues' },
  951: { page: 'Accueil', zone: 'Zone — Dracénie', sujet: 'Paysage de la Dracénie' },
  952: { page: 'Accueil', zone: 'Zone — Golfe', sujet: 'Littoral, Golfe de Saint-Tropez' },

  /* --- Pages métier -------------------------------------------------- */
  231: { page: 'Plomberie', zone: 'Hero', sujet: 'Salle de bains, douche, sanitaire' },
  232: { page: 'Plomberie', zone: 'Expertise', sujet: 'Tuyauterie, réseaux, chauffe-eau' },
  412: { page: 'Chauffage', zone: 'Hero', sujet: 'Pompe à chaleur, groupe extérieur' },
  413: { page: 'Chauffage', zone: 'Expertise', sujet: 'Installation PAC / chaudière' },
  414: { page: 'Chauffage — Chaudière à condensation', zone: 'Hero', sujet: 'Chaudière murale installée' },
  517: { page: 'Climatisation', zone: 'Hero (inutilisé depuis le 19/08/2026, voir 520)', sujet: 'Groupe extérieur, portrait — remplacé, mauvais format pour un héros plein cadre' },
  520: { page: 'Climatisation', zone: 'Hero', sujet: 'Groupe extérieur DAIKIN, jardin/piscine' },
  518: { page: 'Climatisation', zone: 'Expertise', sujet: 'Gainable, grille de plafond (inutilisée depuis le 18/08/2026, voir 519)' },
  519: { page: 'Climatisation', zone: 'Réversible — le confort toute l’année', sujet: 'Split mural DAIKIN, séjour' },
  628: { page: 'Électricité', zone: 'Hero', sujet: 'Tableau électrique' },
  629: { page: 'Électricité', zone: 'Expertise', sujet: 'Électricien au travail, câblage' },
  739: { page: 'Piscine', zone: 'Hero', sujet: 'Bassin, piscine' },
  740: { page: 'Piscine', zone: 'Expertise', sujet: 'Local technique, pompe, filtre' },
  741: { page: 'Piscine', zone: 'Équipements', sujet: 'Filtration' },
  742: { page: 'Piscine', zone: 'Équipements', sujet: 'Pompe à vitesse variable' },
  743: { page: 'Piscine', zone: 'Équipements', sujet: "Traitement de l'eau" },
  744: { page: 'Piscine', zone: 'Équipements', sujet: 'Pompe à chaleur piscine' },
  300: { page: "Traitement de l'eau", zone: 'Hero (superseded, voir 302)', sujet: 'Adoucisseur installé (jamais reçu)' },
  301: { page: "Traitement de l'eau", zone: 'Expertise', sujet: 'Adoucisseur installé (à recevoir)' },
  302: { page: "Traitement de l'eau", zone: 'Hero', sujet: 'Local technique groupé (adoucisseurs, filtres, UV)' },
  521: { page: 'VMC', zone: 'Hero', sujet: 'Caisson double flux, combles' },
  310: { page: "Traitement de l'eau", zone: 'Nos solutions — carte', sujet: 'Adoucisseur (PANTHER FOLEO)' },
  311: { page: "Traitement de l'eau", zone: 'Nos solutions — carte', sujet: 'Filtration fine sous évier' },
  312: { page: "Traitement de l'eau", zone: 'Nos solutions — carte', sujet: 'Filtration eau de forage' },
  313: { page: "Traitement de l'eau", zone: 'Nos solutions — carte', sujet: 'Charbon actif (PCE EAU)' },
  314: { page: "Traitement de l'eau", zone: 'Nos solutions — carte', sujet: 'Traitement UV (PCE EAU)' },
  315: { page: "Traitement de l'eau", zone: 'Nos solutions — carte', sujet: 'Installation complète groupée' },

  /* --- Dépannage ----------------------------------------------------- */
  844: { page: 'Dépannage', zone: 'Hero', sujet: 'Véhicule PCE, intervention' },
  845: { page: 'Dépannage', zone: 'Expertise', sujet: 'Outillage, caisse à outils' },

  /* --- Accueil, cartes des 8 métiers (21/08/2026) --------------------
     Visuels dédiés à cette grille, distincts des héros de chaque page
     métier — auparavant les cartes réutilisaient `service.hero`, ce qui
     empêchait VMC d'avoir une photo (son héros n'existait pas encore) et
     montrait, pour Dépannage, le même véhicule que la page plutôt qu'un
     geste métier. 180-187, plage libre. Électricité (183) volontairement
     absente : le fichier source affiche la marque « Schneider Electric »
     de façon répétée et lisible — en attente d'arbitrage client, la carte
     Électricité continue d'utiliser `service.hero` en attendant. */
  180: { page: 'Accueil', zone: 'Carte métier', sujet: 'Plomberie — vasque et robinetterie' },
  181: { page: 'Accueil', zone: 'Carte métier', sujet: 'Chauffage — radiateur et chaudière murale' },
  182: { page: 'Accueil', zone: 'Carte métier', sujet: 'Climatisation — unité murale intérieure' },
  184: { page: 'Accueil', zone: 'Carte métier', sujet: 'Piscine — bassin et terrasse' },
  185: { page: 'Accueil', zone: 'Carte métier', sujet: "Traitement de l'eau — local technique" },
  186: { page: 'Accueil', zone: 'Carte métier', sujet: 'VMC — caisson double flux et gaines' },
  187: { page: 'Accueil', zone: 'Carte métier', sujet: 'Dépannage — plombier sous évier' },

  /* --- Réalisations -------------------------------------------------- */
  960: { page: 'Réalisations', zone: 'Hero', sujet: 'Chantier en cours' },
  901: { page: 'Réalisations', zone: 'Galerie', sujet: 'Salle de bains — Lorgues' },
  902: { page: 'Réalisations', zone: 'Galerie', sujet: 'PAC air/eau — Taradeau' },
  903: { page: 'Réalisations', zone: 'Galerie', sujet: 'Gainable — Sainte-Maxime' },
  904: { page: 'Réalisations', zone: 'Galerie', sujet: 'Rénovation électrique — Draguignan' },
  905: { page: 'Réalisations', zone: 'Galerie', sujet: 'Traitement au sel — Plan-de-la-Tour' },
  906: { page: 'Réalisations', zone: 'Galerie', sujet: 'Local technique — Grimaud' },
  907: { page: 'Réalisations', zone: 'Galerie', sujet: 'Chauffe-eau — Flayosc' },
  908: { page: 'Réalisations', zone: 'Galerie', sujet: 'Borne de recharge — Vidauban' },
  909: { page: 'Réalisations', zone: 'Galerie', sujet: 'Multisplit — Lorgues' },
  910: { page: 'Réalisations', zone: 'Galerie', sujet: 'Tableau électrique en cours de câblage' },
  911: { page: 'Réalisations', zone: 'Galerie', sujet: 'Tableau électrique fini' },
  912: { page: 'Réalisations', zone: 'Galerie', sujet: 'Borne de recharge posée, véhicule branché' },
  913: { page: 'Réalisations', zone: 'Galerie', sujet: 'Borne de recharge murale' },
  914: { page: 'Réalisations', zone: 'Galerie', sujet: 'Réglettes LED encastrées' },
  915: { page: 'Réalisations', zone: 'Galerie', sujet: 'Coffret réseau / communication (VDI)' },
  920: { page: 'Réalisations', zone: 'Galerie', sujet: 'Climatisation split — chambre' },
  922: { page: 'Réalisations', zone: 'Galerie', sujet: 'Gaines gainable isolées en combles' },
  923: { page: 'Réalisations', zone: 'Galerie', sujet: 'Climatisation, groupe extérieur sur terrasse' },
  930: { page: 'Réalisations', zone: 'Galerie', sujet: 'Regard technique enterré (nature exacte à confirmer)' },
  931: { page: 'Réalisations', zone: 'Galerie', sujet: 'Composant Euroclima (nature exacte à confirmer)' },

  /* --- À propos ------------------------------------------------------ */
  970: { page: 'À propos', zone: 'Hero', sujet: "Équipe / atelier PCE" },
  971: { page: 'À propos', zone: 'Histoire', sujet: 'Lorgues, le village' },

  /* --- Pages sous-expertise (10) --------------------------------------- */
  701: { page: 'Sous-expertise', zone: 'Pompe à chaleur', sujet: 'Chaufferie' },
  702: { page: 'Sous-expertise', zone: 'Climatisation réversible', sujet: 'Split mural' },
  703: { page: 'Sous-expertise', zone: 'Rénovation salle de bain', sujet: 'Carrelage, sanitaire' },
  704: { page: 'Sous-expertise', zone: 'Dépannage plomberie', sujet: 'Canalisation' },
  705: { page: 'Sous-expertise', zone: 'Chauffe-eau thermodynamique', sujet: 'Chauffe-eau Fleck' },
  706: { page: 'Sous-expertise', zone: 'Mise aux normes électriques', sujet: 'Tableau électrique' },
  707: { page: 'Sous-expertise', zone: 'Borne de recharge', sujet: 'Borne murale' },
  708: { page: 'Sous-expertise', zone: 'Entretien piscine', sujet: 'Bassin' },
  710: { page: 'Sous-expertise', zone: 'Plancher chauffant', sujet: 'Plancher chauffant' },

  /* --- Articles de conseils (20) ---------------------------------------- */
  801: { page: 'Conseils', zone: 'Article', sujet: 'Choisir sa pompe à chaleur' },
  802: { page: 'Conseils', zone: 'Article', sujet: 'Entretien climatisation' },
  804: { page: 'Conseils', zone: 'Article', sujet: 'Tableau électrique' },
  805: { page: 'Conseils', zone: 'Article', sujet: 'Piscine — été' },
  1101: { page: 'Conseils', zone: 'Article', sujet: 'Fonctionnement PAC' },
  1102: { page: 'Conseils', zone: 'Article', sujet: 'Consommation PAC' },
  1103: { page: 'Conseils', zone: 'Article', sujet: 'PAC ou chaudière gaz' },
  1104: { page: 'Conseils', zone: 'Article', sujet: 'Choisir sa climatisation' },
  1105: { page: 'Conseils', zone: 'Article', sujet: 'Gainable ou split' },
  1109: { page: 'Conseils', zone: 'Article', sujet: 'Filtration eau de forage' },
  1110: { page: 'Conseils', zone: 'Article', sujet: 'Traitement UV' },
  1111: { page: 'Conseils', zone: 'Article', sujet: 'Charbon actif' },
  1112: { page: 'Conseils', zone: 'Article', sujet: 'Piscine au sel' },
  1113: { page: 'Conseils', zone: 'Article', sujet: 'Pompe à vitesse variable' },
  1114: { page: 'Conseils', zone: 'Article', sujet: 'pH piscine' },
  1115: { page: 'Conseils', zone: 'Article', sujet: 'Redox piscine' },
}

/**
 * Photos réelles du client.
 * Clé = numéro de slot ci-dessus, valeur = chemin depuis public/.
 * Laisser vide pour conserver la photo d'illustration.
 */
export const clientPhotos = {
  /* --- Accueil --- */
  /* 21/08/2026 : le fichier précédent portait un vrai lettrage déformé sur
     deux des trois fourgons (« FLOMBERIE », « CLIMATSATION ») — signalé par
     le client. Remplacé par un autre visuel du même lot (photos/
     accueil-hero-vehicules_1.jpg), le plus propre des trois disponibles
     (« Depuis 2005 » correct, PLOMBERIE/CHAUFFAGE/ÉLECTRICITÉ corrects),
     après une retouche locale du seul mot fautif restant : « PSCINE » ->
     « PISCINE » sur le fourgon de droite (bandeau redessiné en place,
     fond marine échantillonné sur le bandeau lui-même). L'ancien fichier
     reste sur le disque, plus référencé nulle part. */
  100: '/img/accueil-hero-vehicules-retouche.jpg',
  101: '/img/accueil-hero-reseaux.jpg',
  /* savoir-faire-cintrage.jpg écartée pour la même raison que le slot 845 :
     c'est le même fichier que depannage-outillage.jpg (md5 identique). */
  102: '/img/climatisation-expertise-gaines-combles.jpg',
  // netteté (Laplacien) 88 — à remplacer, cf. README.
  103: '/img/douche-pierre-finie.jpg',

  /* --- Pages métier --- */
  /* 21/08/2026 : Plomberie migrée sur le composant de héros partagé
     (PageHero, fullBleed) — voir Plomberie.jsx. Le lock 231 était déclaré
     ici mais jamais utilisé (le héros bespoke chargeait
     /img/hero-plomberie.webp en dur, hors du système de photos). Repointé
     vers une copie .jpg du même fichier (plomberie-hero-salle-de-bains.jpg)
     pour que optimize-images.js génère ses variantes WebP responsives,
     comme pour les 6 autres héros — hero-plomberie.webp lui-même n'était
     jamais traité (le script ne scanne que .jpg/.png en source). */
  231: '/img/plomberie-hero-salle-de-bains.jpg',
  232: '/img/plomberie-cuivre-vase.jpg',
  /* 21/08/2026 : chauffage-hero-chaufferie.jpg montrait un groupe extérieur
     (pompe à chaleur), pas le sujet attendu par la maquette pour ce héros —
     signalé par le client. Remplacé par le visuel fourni dans photos/
     (chauffage.webp) : chaudière murale + ballon d'eau chaude en local
     technique. L'ancien fichier reste sur le disque, plus référencé nulle
     part (aucune autre page ne pointait sur le lock 412). */
  412: '/img/chauffage-hero-local-technique.jpg',
  413: '/img/chauffage-chaudiere-neuve.jpg',
  414: '/img/chauffage-chaudiere-neuve.jpg',
  739: '/img/piscine-hero-bassin.jpg',
  /* Pas encore de seconde photo réelle de local technique piscine (N14
     est en attente d'original sans filigrane, voir plus bas) : on
     réutilise la photo du bassin plutôt que de laisser cet emplacement
     sans photo assignée — voir l'incident documenté sur `photo()` dans
     src/data/site.js. À remplacer dès qu'une vraie photo de local
     technique est disponible. */
  740: '/img/piscine-hero-bassin.jpg',
  741: '/img/equipement-filtration.jpg',
  742: '/img/equipement-pompe-vitesse-variable.jpg',
  743: '/img/equipement-traitement-eau.jpg',
  744: '/img/equipement-pac-piscine.jpg',

  /* Climatisation — chantiers réels du client (gainable en combles et
     grille de diffusion finie). Remplace les visuels issus des flyers,
     désormais gardés en repli (voir plus bas). */
  /* climatisation-hero-gainable-grille.jpg écartée du héros : variance du
     Laplacien à 202 (la plus floue de la bibliothèque climatisation, contre
     1460 pour la meilleure) et sujet — une grille de plafond sur un mur nu —
     illisible comme prestation en pleine largeur. climatisation-prestations
     -groupe.jpg (groupe extérieur posé, cadré net) la remplace en attendant
     qu'un visuel paysage dédié soit fourni par le client : les 7 photos
     climatisation du projet sont toutes en portrait, prises au téléphone en
     contre-plongée, aucune n'est pensée pour un usage en héros. */
  /* 517 : le héros pointe maintenant vers 520 (photo paysage, plein cadre —
     celle-ci est en portrait, cadre mal un héros full-bleed). Le fichier
     reste utilisé par le slot 923 (galerie Réalisations) : pas orphelin. */
  517: '/img/climatisation-prestations-groupe.jpg',
  520: '/img/climatisation-solution-groupe-exterieur.jpg',
  /* 518 (climatisation-expertise-gainable-salon.jpg) : la section
     « Climatisation réversible » qui l'utilisait pointe maintenant vers
     519. Ce fichier n'est référencé par aucun autre slot — orphelin,
     signalé plutôt que supprimé (18/08/2026). */
  518: '/img/climatisation-expertise-gainable-salon.jpg',
  519: '/img/climatisation-reversible-salon.jpg',

  /* Traitement de l'eau — l'ancienne photo (réseau de cuivre au mur)
     montrait de la plomberie, pas du traitement de l'eau : signalée hors
     sujet par le client le 17/08/2026. Retirée du héros (voir PageHero
     dans TraitementEau.jsx, pas de prop `photo` pour l'instant). Slots
     réassignés au nom de fichier attendu pour la photo d'adoucisseur
     installé que le client doit fournir — le fichier n'existe pas encore,
     ces deux lignes ne servent donc à rien tant qu'il n'est pas déposé et
     que `photo={{ ...service.hero }}` n'est pas restauré dans
     TraitementEau.jsx. */
  300: '/img/eau-adoucisseur-installe.jpg',
  /* 302 : héros Traitement de l'eau, déposé le 19/08/2026. Un petit badge
     illisible/déformé subsiste sur l'écran du 3e appareil (~51-60% de la
     largeur) — signalé, pas recadré : à cette échelle et sous le dégradé,
     il n'est pas perceptible sans zoomer fortement, et le retirer par un
     recadrage aurait coupé d'autres appareils de la composition. */
  302: '/img/traitement-eau-hero-local-technique.jpg',
  521: '/img/vmc-hero-combles.jpg',
  301: '/img/eau-adoucisseur-installe.jpg',

  /* Nos solutions de traitement de l'eau — 6 cartes produit, déposées le
     18/08/2026. Détourées, cadrées et mises à l'échelle sur un fond blanc
     commun (voir process-eau-cards.cjs, script ponctuel, pas dans scripts/
     car il ne sert qu'à ce lot précis).
     ⚠️ 310 et 313 : les fichiers sources ne sont PAS sur fond blanc — fond
     noir en dégradé radial. Branchés tels quels à la demande du client,
     mais visuellement en rupture avec les 4 autres cartes (rectangle sombre
     visible sur fond de carte blanc). Signalé, en attente d'arbitrage. */
  310: '/img/eau-solution-adoucisseur.jpg',
  311: '/img/eau-solution-filtration-sous-evier.jpg',
  312: '/img/eau-solution-filtration-forage.jpg',
  313: '/img/eau-solution-charbon-actif.jpg',
  314: '/img/eau-solution-traitement-uv.jpg',
  315: '/img/eau-solution-installation-complete.jpg',

  /* Électricité — armoire et coffret réellement posés par PCE */
  /* 21/08/2026 : electricite-hero-armoire.jpg était en portrait (1200×1600),
     mal cadré pour un héros plein cadre — signalé par le client. Remplacé
     par le visuel fourni dans photos/ (elec.webp), en paysage : tableau
     ouvert, disjoncteurs en rangées, câblage bleu/brun/vert-jaune, mur
     clair. L'ancien fichier reste sur le disque, plus référencé nulle part
     (aucune autre page ne pointait sur le lock 628). */
  628: '/img/electricite-hero-tableau.jpg',
  629: '/img/electricite-expertise-coffret.jpg',

  /* --- Dépannage --- */
  844: '/img/depannage-vehicule-pce.jpg',
  /* depannage-outillage.jpg écartée : photo inexploitable (variance du
     laplacien à 33, la plus floue de la bibliothèque avec son doublon
     savoir-faire-cintrage.jpg, même fichier au bit près). */
  845: '/img/electricite-prestations-reseau.jpg',

  /* --- Accueil, cartes des 8 métiers --- */
  180: '/img/accueil-carte-plomberie.jpg',
  181: '/img/accueil-carte-chauffage.jpg',
  182: '/img/accueil-carte-climatisation.jpg',
  184: '/img/accueil-carte-piscine.jpg',
  185: '/img/accueil-carte-traitement-eau.jpg',
  186: '/img/accueil-carte-vmc.jpg',
  187: '/img/accueil-carte-depannage.jpg',

  /* --- Réalisations --- */
  960: '/img/realisations-hero-radiateur.jpg',
  // netteté (Laplacien) 111 — à remplacer, cf. README.
  901: '/img/real-sdb-complete.jpg',
  // netteté (Laplacien) 137 — à remplacer, cf. README.
  902: '/img/real-ballon-thermo.jpg',
  903: '/img/real-plancher-chauffant.jpg',
  904: '/img/real-collecteurs.jpg',
  // netteté (Laplacien) 79 — à remplacer, cf. README.
  905: '/img/real-canalisation-obstruee.jpg',
  906: '/img/real-local-chaudiere-ballon.jpg',
  // netteté (Laplacien) 51 — à remplacer, cf. README. C'est un carton
  // d'emballage, pas une installation posée.
  907: '/img/real-chauffe-eau-fleck.jpg',
  908: '/img/real-cuisine-equipee.jpg',
  // netteté (Laplacien) 55 — à remplacer, cf. README.
  909: '/img/real-sdb-carrelage-motifs.jpg',

  /* --- À propos --- */
  970: '/img/apropos-hero-chaufferie.jpg',
  971: '/img/apropos-ancienne-tuyauterie.jpg',

  /* --- Accueil, cartes de zones --- */
  950: '/img/zone-lorgues.jpg',
  951: '/img/zone-dracenie.jpg',
  952: '/img/zone-golfe-saint-tropez.jpg',

  /* --- Pages sous-expertise (longue traîne), src/data/expertise.js --- */
  701: '/img/chauffage-hero-chaufferie.jpg', // installation-pompe-a-chaleur-var
  702: '/img/climatisation-hero-split.jpg', // installation-climatisation-reversible-var
  703: '/img/real-sdb-carrelage-motifs.jpg', // renovation-salle-de-bain-var
  704: '/img/real-canalisation-obstruee.jpg', // depannage-plomberie-urgence-var
  705: '/img/real-chauffe-eau-fleck.jpg', // installation-chauffe-eau-thermodynamique-var
  706: '/img/electricite-galerie-tableau-fini.jpg', // mise-aux-normes-electriques-var
  707: '/img/electricite-borne-recharge-1.jpg', // installation-borne-recharge-vehicule-electrique-var
  708: '/img/piscine-hero-bassin.jpg', // entretien-piscine-var
  710: '/img/real-plancher-chauffant.jpg', // plancher-chauffant-var

  /* --- Articles de conseils (5 historiques), src/data/articles.js --- */
  801: '/img/apropos-hero-chaufferie.jpg', // comment-choisir-pompe-a-chaleur
  802: '/img/climatisation-groupe-exterieur.jpg', // entretien-climatisation-quand-et-pourquoi
  804: '/img/electricite-galerie-tableau-cablage.jpg', // quand-refaire-tableau-electrique
  805: '/img/piscine-hero-bassin.jpg', // preparer-piscine-pour-ete

  /* --- Articles de conseils (15 supplémentaires), src/data/articles.js --- */
  1101: '/img/chauffage-hero-chaufferie.jpg', // comment-fonctionne-pompe-a-chaleur
  1102: '/img/chauffage-chaudiere-neuve.jpg', // combien-consomme-pompe-a-chaleur
  1103: '/img/real-local-chaudiere-ballon.jpg', // pompe-a-chaleur-ou-chaudiere-gaz
  1104: '/img/climatisation-hero-split.jpg', // quelle-climatisation-choisir-maison-var
  1105: '/img/climatisation-expertise-gaines-combles.jpg', // climatisation-gainable-ou-split
  1109: '/img/traitement-eau-reseau-cuivre.jpg', // comment-filtrer-eau-forage
  1110: '/img/traitement-eau-reseau-cuivre.jpg', // a-quoi-sert-traitement-uv
  1111: '/img/traitement-eau-reseau-cuivre.jpg', // charbon-actif-que-filtre-t-il
  1112: '/img/piscine-hero-bassin.jpg', // pourquoi-piscine-au-sel
  1113: '/img/piscine-hero-bassin.jpg', // pompe-piscine-vitesse-variable-avantages
  1114: '/img/piscine-hero-bassin.jpg', // pourquoi-ph-piscine-varie
  1115: '/img/piscine-hero-bassin.jpg', // a-quoi-sert-le-redox

  /* --- Nouveaux chantiers Électricité / Climatisation / bornes --- */
  910: '/img/electricite-galerie-tableau-cablage.jpg',
  911: '/img/electricite-galerie-tableau-fini.jpg',
  912: '/img/electricite-galerie-borne-vehicule.jpg',
  913: '/img/electricite-borne-recharge-1.jpg',
  914: '/img/electricite-prestations-eclairage-1.jpg',
  915: '/img/electricite-prestations-reseau.jpg',
  920: '/img/climatisation-galerie-split-chambre.jpg',
  922: '/img/climatisation-expertise-gaines-combles.jpg',
  923: '/img/climatisation-prestations-groupe.jpg',
  930: '/img/realisations-regard-technique.jpg',
  931: '/img/realisations-composant-euroclima.jpg',
}

/* -------------------------------------------------------------------------
   PHOTOS EN ATTENTE (repli uniquement)
   -------------------------------------------------------------------------
   Ces visuels sont validés comme secours mais ne sont volontairement PAS
   utilisés en emplacement principal :
     - climatisation-hero-split.jpg / climatisation-groupe-exterieur.jpg
       (recadrages de flyers marketing — remplacés par de vraies photos
       de chantier ci-dessus, mais gardés pour varier au besoin)
     - 1c2f3ce3-eed0-4fde-808d-197db9c3c81f.JPG (unités gainables neuves,
       en stock — montre le produit, pas une pose)

   PHOTOS EN ATTENTE DE VERSION ORIGINALE (filigrane centré ou texte
   publicitaire intégré — ne pas recadrer de force, en attente du client) :
     N5, N9, N13, N23, N25, N28, N30, N36, N41 (filigrane centré)
     N27, N31 (texte publicitaire intégré)
     N14 (piscine, filigrane centré)

   RETIRÉES DE LA GALERIE RÉALISATIONS (nature du chantier, commune et date
   non confirmées par le client — slots 930/931 encore mappés ci-dessus,
   mais plus référencés dans `projects` de site.js) :
     N18 (regard béton enterré), N22 (composant Euroclima)

   ÉCARTÉES DÉFINITIVEMENT (hors métiers PCE) :
     N44 (volets roulants en stock), N8 (dressing / penderie)
---------------------------------------------------------------------------*/

/** Renvoie la photo réelle associée à un slot, ou null. */
export const clientPhoto = (slot) => clientPhotos[slot] || null

/**
 * Métadonnées d'affichage responsive pour une photo réelle : `srcSet` WebP
 * (400/800/1200 px selon ce qui a été généré par scripts/optimize-images.js
 * pour cette image précise — voir imageManifest.js), `src` de repli (la plus
 * grande variante générée) et dimensions intrinsèques pour les attributs
 * `width`/`height` de l'élément <img>, qui évitent le décalage de mise en
 * page pendant le chargement.
 */
export function clientPhotoMeta(slot) {
  const jpegPath = clientPhotos[slot]
  if (!jpegPath) return null

  const filename = jpegPath.split('/').pop()
  const meta = imageManifest[filename]
  if (!meta) return { src: jpegPath, srcSet: null, width: null, height: null }

  const base = jpegPath.replace(/\.jpe?g$/i, '')
  const srcSet = meta.widths.map((w) => `${base}-${w}w.webp ${w}w`).join(', ')
  const largest = meta.widths[meta.widths.length - 1]

  return {
    src: `${base}-${largest}w.webp`,
    srcSet,
    width: meta.width,
    height: meta.height,
  }
}
