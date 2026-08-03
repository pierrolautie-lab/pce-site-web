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
  101: { page: 'Accueil', zone: 'Hero', sujet: 'Maison / villa provençale' },
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
  517: { page: 'Climatisation', zone: 'Hero', sujet: 'Split mural, pièce de vie' },
  518: { page: 'Climatisation', zone: 'Expertise', sujet: 'Gainable, grille de plafond' },
  628: { page: 'Électricité', zone: 'Hero', sujet: 'Tableau électrique' },
  629: { page: 'Électricité', zone: 'Expertise', sujet: 'Électricien au travail, câblage' },
  739: { page: 'Piscine', zone: 'Hero', sujet: 'Bassin, piscine' },
  740: { page: 'Piscine', zone: 'Expertise', sujet: 'Local technique, pompe, filtre' },
  300: { page: "Traitement de l'eau", zone: 'Hero / produit', sujet: 'Adoucisseur Pentair Foleo' },
  301: { page: "Traitement de l'eau", zone: 'Expertise', sujet: "Réseau, arrivée d'eau" },

  /* --- Dépannage ----------------------------------------------------- */
  844: { page: 'Dépannage', zone: 'Hero', sujet: 'Véhicule PCE, intervention' },
  845: { page: 'Dépannage', zone: 'Expertise', sujet: 'Outillage, caisse à outils' },

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
}

/**
 * Photos réelles du client.
 * Clé = numéro de slot ci-dessus, valeur = chemin depuis public/.
 * Laisser vide pour conserver la photo d'illustration.
 */
export const clientPhotos = {
  /* --- Accueil --- */
  101: '/img/accueil-hero-reseaux.jpg',
  102: '/img/savoir-faire-cintrage.jpg',
  103: '/img/douche-pierre-finie.jpg',

  /* --- Pages métier --- */
  231: '/img/plomberie-hero-vasques.jpg',
  232: '/img/plomberie-cuivre-vase.jpg',
  412: '/img/chauffage-hero-chaufferie.jpg',
  413: '/img/chauffage-chaudiere-neuve.jpg',
  414: '/img/chauffage-chaudiere-neuve.jpg',
  739: '/img/piscine-hero-bassin.jpg',

  /* Climatisation — chantiers réels du client (gainable en combles et
     grille de diffusion finie). Remplace les visuels issus des flyers,
     désormais gardés en repli (voir plus bas). */
  517: '/img/climatisation-hero-gainable-grille.jpg',
  518: '/img/climatisation-expertise-gainable-salon.jpg',

  /* Traitement de l'eau */
  300: '/img/traitement-eau-pentair-foleo.jpg',
  301: '/img/traitement-eau-reseau-cuivre.jpg',

  /* Électricité — armoire et coffret réellement posés par PCE */
  628: '/img/electricite-hero-armoire.jpg',
  629: '/img/electricite-expertise-coffret.jpg',

  /* --- Dépannage --- */
  844: '/img/depannage-vehicule-pce.jpg',
  845: '/img/depannage-outillage.jpg',

  /* --- Réalisations --- */
  960: '/img/realisations-hero-radiateur.jpg',
  901: '/img/real-sdb-complete.jpg',
  902: '/img/real-ballon-thermo.jpg',
  903: '/img/real-plancher-chauffant.jpg',
  904: '/img/real-collecteurs.jpg',
  905: '/img/real-canalisation-obstruee.jpg',
  906: '/img/real-local-chaudiere-ballon.jpg',
  907: '/img/real-chauffe-eau-fleck.jpg',
  908: '/img/real-cuisine-equipee.jpg',
  909: '/img/real-sdb-carrelage-motifs.jpg',

  /* --- À propos --- */
  970: '/img/apropos-hero-chaufferie.jpg',
  971: '/img/apropos-ancienne-tuyauterie.jpg',

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

   INTÉGRÉES EN GALERIE SANS MÉTIER PRÉCIS (nature exacte encore à
   confirmer avec le client — slots 930/931, voir `projects` dans site.js) :
     N18 (regard béton enterré), N22 (composant Euroclima)

   ÉCARTÉES DÉFINITIVEMENT (hors métiers PCE) :
     N44 (volets roulants en stock), N8 (dressing / penderie)
---------------------------------------------------------------------------*/

/** Renvoie la photo réelle associée à un slot, ou null. */
export const clientPhoto = (slot) => clientPhotos[slot] || null
