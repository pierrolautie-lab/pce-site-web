/* -------------------------------------------------------------------------
   AVIS GOOGLE — À CONFIRMER
   -------------------------------------------------------------------------
   ⚠️ ne pas publier sans fiche Google Business réelle. Ces valeurs ont été
   fournies par le client mais n'ont pas été vérifiées : afficher une note et
   un volume d'avis qui ne correspondent à aucune fiche réelle relève de la
   pratique commerciale trompeuse.

   `SHOW_GOOGLE_REVIEWS` pilote l'affichage sur TOUTES les pages qui montrent
   ce bloc (accueil, climatisation). Une seule valeur, pour qu'on ne puisse
   pas publier les avis à un endroit en les croyant masqués ailleurs.

   Remis à `false` avant mise en ligne (2026-08-11) : aucune fiche Google
   Business vérifiée ne confirme cette note ni ce volume d'avis. Ne repasser
   à `true` qu'après confirmation que la fiche existe réellement.
---------------------------------------------------------------------------*/
export const SHOW_GOOGLE_REVIEWS = false

// À CONFIRMER — ne pas publier sans fiche Google Business réelle
export const GOOGLE_REVIEWS = {
  rating: '4,9/5',
  stars: 5,
  count: '+450 clients satisfaits',
  href: '/contact',
}

/** Types de clientèle, affichés à côté de la carte de la zone d'intervention. */
export const CLIENT_TYPES = [
  'Particuliers & Professionnels',
  'Résidences principales & secondaires',
  'Syndics & Copropriétés',
  'Commerces & Entreprises',
]
