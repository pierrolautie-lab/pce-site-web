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
| `/chauffage/chaudiere-condensation` | Chaudière à condensation (sous-page) |
| `/climatisation` | Climatisation |
| `/electricite` | Électricité |
| `/piscine` | Piscine |
| `/traitement-de-l-eau` | Traitement de l'eau |
| `/depannage` | Dépannage / Urgence |
| `/realisations` | Réalisations |
| `/a-propos` | À propos |
| `/contact` | Contact |

---

## Charte graphique

| Rôle | Couleur |
|---|---|
| Bleu marine principal | `#0E2547` (`navy-800`) |
| Bleu vif (titres, liens) | `#1B6FC4` (`azure-500`) |
| Or (appels à l'action) | `#F5B400` (`gold-500`) |
| Fond de page gris-bleu | `#F4F7FA` (`navy-50`) |
| Cartes | Blanc |

Typographie : **Inter**, titres de page en capitales très grasses.

**Identité** : médaillon ovale « PCE » (`src/components/Brand.jsx`, une seule
version dans tout le site), décliné en logo d'en-tête, filigrane de hero,
et repris dans le pied de page.

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

---

## Déploiement automatique sur Hostinger

Le site est un SPA statique (React + Vite) : il n'y a rien à exécuter côté
serveur, seul le dossier `dist/` généré par `npm run build` doit être envoyé
sur l'hébergement, dans `public_html/`.

Le workflow **`.github/workflows/deploy.yml`** automatise cet envoi : à chaque
`git push` sur `main`, GitHub Actions installe les dépendances, construit le
site, puis dépose le contenu de `dist/` sur Hostinger par FTPS.

### Mise en place (à faire une seule fois)

1. **Récupérer les identifiants FTP dans hPanel**
   Hostinger → votre site → *Fichiers* → *Comptes FTP*. Notez :
   - l'hôte FTP (ex. `ftp.pcevar.fr` ou une adresse IP fournie par Hostinger)
   - le nom d'utilisateur FTP
   - le mot de passe (ou réinitialisez-le si vous ne l'avez plus)

2. **Ajouter ces identifiants comme secrets GitHub** — jamais dans le code ni
   dans un message. Sur la page du dépôt :
   `Settings` → `Secrets and variables` → `Actions` → `New repository secret`,
   et créez exactement ces trois secrets :

   | Nom du secret | Valeur |
   |---|---|
   | `HOSTINGER_FTP_SERVER` | l'hôte FTP noté ci-dessus |
   | `HOSTINGER_FTP_USERNAME` | le nom d'utilisateur FTP |
   | `HOSTINGER_FTP_PASSWORD` | le mot de passe FTP |

3. **Vérifier le dossier de destination.** Le workflow envoie vers
   `./public_html/`. Si le site doit vivre dans un sous-dossier (domaine
   additionnel, sous-domaine), ajustez la valeur `server-dir` dans
   `.github/workflows/deploy.yml`.

4. **Déclencher le premier déploiement** : poussez un commit sur `main`, ou
   lancez-le manuellement depuis l'onglet **Actions** du dépôt GitHub
   (bouton *Run workflow* sur « Déploiement Hostinger »).

Le fichier **`public/.htaccess`** est indispensable : il redirige toutes les
URL vers `index.html` pour que le routage React (React Router) fonctionne
aussi quand une page est rechargée directement (ex. `pcevar.fr/chauffage`).

> Si votre offre Hostinger inclut l'accès SSH (vérifiable dans hPanel →
> *Avancé* → *SSH Access*), une alternative plus robuste est de remplacer
> l'étape FTP par un envoi en SFTP/rsync — plus rapide et plus sûr qu'un FTP
> classique. Dites-le-moi si c'est votre cas, j'adapterai le workflow.
