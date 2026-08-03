# PCE — Site vitrine

Site vitrine de **PCE**, artisan à Lorgues (Var) depuis 2005 :
plomberie, chauffage, climatisation, électricité et piscine.

React 18 · Vite 5 · Tailwind CSS 3 · React Router 6

---

## Démarrer

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:5173

```bash
npm run build     # génère dist/
npm run preview   # prévisualise le build
```

> Sur ce poste, Node est installé dans `C:\Program Files\nodejs` mais absent du
> PATH. Si `npm` n'est pas reconnu, ouvrez le terminal avec :
> `$env:Path = "C:\Program Files\nodejs;$env:Path"`

---

## Pages

| Route | Page |
|---|---|
| `/` | Accueil |
| `/plomberie` | Plomberie |
| `/chauffage` | Chauffage |
| `/climatisation` | Climatisation |
| `/electricite` | Électricité |
| `/piscine` | Piscine |
| `/depannage` | Dépannage / Urgence |
| `/realisations` | Réalisations |
| `/a-propos` | À propos |
| `/contact` | Contact |

---

## Charte graphique

| Rôle | Couleur |
|---|---|
| Bleu marine principal | `#13293D` (`navy-800`) |
| Bleu acier secondaire | `#2C4A63` (`navy-600`) |
| Fond de page gris-bleu | `#F5F7F9` (`navy-50`) |
| Cartes | Blanc |

Typographie : **Inter**, titres de page en capitales très grasses.
Aucune teinte orange ni jaune.

**Identité** : goutte d'eau + wordmark « PCE » (`src/components/Brand.jsx`),
décliné en logo d'en-tête, filigrane de hero, sceau « depuis 2005 » et
filigrane de pied de page.

---

## Structure des pages métier

L'ossature est définie une seule fois dans `src/components/ServicePage.jsx` :

1. En-tête collant : logo, navigation, bouton **Contact**
2. **Hero** — titre en capitales, accroche en gras, paragraphe gris, photo à
   droite, filigrane « PCE » en fond
3. **Nos prestations** — 6 items, icônes circulaires marine
4. **Bloc deux colonnes** — checklist de bénéfices + encart TVA 5,5 % marine
5. **Bandeau de garanties** — 4 items, icônes cerclées fines
6. Contenu rédactionnel : expertise, méthode, FAQ, autres métiers, appel à l'action

**Variantes**
- *Piscine* : le bloc deux colonnes est remplacé par trois colonnes de conseils,
  suivies d'un bandeau TVA pleine largeur.
- *Dépannage* : hero sur fond marine, rangée de 4 engagements, rangée de
  5 domaines d'intervention, bandeau marine avec numéro de téléphone en grand.

---

## Contenu

Tout le contenu éditorial est centralisé dans **`src/data/site.js`** :
coordonnées, navigation, textes des cinq métiers, réalisations, zone
d'intervention, chiffres clés. Les pages ne sont que des gabarits.

Pour modifier un texte, une prestation ou une FAQ : éditer ce fichier, pas les
composants.

---

## Photos

### Photos d'illustration (par défaut)

Les visuels proviennent de [loremflickr](https://loremflickr.com) (vraies
photographies, figées par un numéro `lock`), avec repli automatique sur
[picsum.photos](https://picsum.photos) en cas d'erreur.

> ⚠️ loremflickr ne répond que sur certains mots-clés, et jamais sur les listes
> séparées par des virgules. Les 30 mots-clés utilisés ont été vérifiés un par
> un. En ajouter un nouveau demande de le tester d'abord.

### Photos réelles du client

Le fichier **`src/data/photos.js`** pilote la bascule :

1. Déposer les fichiers dans `public/img/`
2. Renseigner l'objet `clientPhotos`, en associant le numéro de slot au chemin :

```js
export const clientPhotos = {
  231: '/img/salle-de-bains-lorgues.jpg',
  628: '/img/tableau-electrique.jpg',
}
```

L'objet `PHOTO_SLOTS` du même fichier liste les 30 emplacements disponibles
avec, pour chacun, la page, la zone et le sujet attendu. Aucune modification de
composant n'est nécessaire : la vraie photo remplace l'illustration partout où
le slot est utilisé.

---

## Formulaire de contact

Le formulaire (`src/pages/Contact.jsx`) valide les champs et affiche une
confirmation, **mais n'envoie encore rien** : il n'y a pas de backend.

Pour le mettre en service, remplacer le `setSent(true)` de la fonction `submit`
par un appel vers votre backend, un service type Formspree / EmailJS, ou une
fonction serverless.
