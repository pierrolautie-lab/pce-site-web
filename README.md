# PCE — Site vitrine

Site vitrine de **PCE**, artisan à Lorgues (Var) depuis 2020 (entreprise
créée en 2005 en région parisienne) : plomberie, chauffage, climatisation,
électricité, piscine et VMC.

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

### Contraste des héros — trois photos à remesurer si elles changent

Depuis le 25/08/2026, le contraste du texte des héros est porté par un **voile
partagé** (`FULL_BLEED_TEXT_VEIL` dans `PageHero.jsx`, `HeroTextVeil` dans
`HeroPhoto.jsx`), et non plus par un coefficient réglé page par page. Sur sept
des dix héros, le texte le plus juste est désormais contraint par le **bouton
azur** — une paire de couleurs fixe : changer leur photo ne peut plus rien
casser.

**Trois héros font exception** : leur texte le plus juste dépend encore de la
photo, et tient son seuil de 3:1 sans grande marge.

| Héros | Minimum mesuré | Texte contraint |
| --- | --- | --- |
| Accueil (slot 100) | 3,51:1 | « Climatisation • Piscine », H1 azure |
| Climatisation (slot 520) | 3,32:1 | « et économies d'énergie », sous-titre azure |
| Contact (slot 100) | 3,30:1 | accroche azure |

> ⚠️ Si l'un de ces trois visuels est remplacé, **remesurer avant de livrer**.
> Le point commun des trois est un texte **azure sur photo** : l'azure est un
> ton moyen, il perd son contraste aussi bien sur un fond qui s'éclaircit que
> sur un fond qui s'assombrit. Accueil et Contact partagent le slot 100 : une
> seule photo, deux pages à vérifier.

La mesure se fait sur le rendu réel, au pixel de glyphe — pas sur la boîte
englobante du texte, qui donne des faux positifs sur le vide à droite des
lignes. Méthode : capturer la page deux fois (rendu normal, puis avec
`section * { color: transparent }`), ne retenir que les pixels où les deux
diffèrent, et comparer la couleur calculée du texte au fond de la seconde
capture.

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

### Deux emplacements sur le serveur — résolu le 2026-08-11

Ce compte Hostinger contient **deux dossiers distincts**, tous deux nommés
`public_html`.

| Chemin FTP | Rôle |
|---|---|
| `/home/u718469912/domains/pcevar.fr/public_html` | **Racine réelle de `pcevar.fr`, confirmée par le support Hostinger le 2026-08-11.** Cible de `deploy.yml`. |
| `/public_html` (racine du compte) | Non utilisé pour `pcevar.fr` (confirmé par le support). Laissé en l'état, non supprimé, au cas où une autre configuration du compte en dépendrait. |

**Historique** : du 4 au 11 août 2026, `deploy.yml` écrivait dans
`/public_html` à la racine, sur la base d'une vérification Hostinger
antérieure qui s'est révélée incorrecte (ou périmée). Le site public est
resté figé sur une version du 8 août malgré des déploiements répétés qui,
eux, réussissaient — sur le mauvais dossier. Un diagnostic FTP en lecture
seule (empreinte des assets JS/CSS servis en production comparée au contenu
de chaque dossier) avait identifié le bon chemin avant même la réponse du
support, qui l'a confirmé mot pour mot.

Le dossier `/domains/pcevar.fr/public_html/` contient un fichier vide
`DO_NOT_UPLOAD_HERE`, daté du 4 août 2026 — son origine reste inconnue, et
le support a confirmé qu'il ne fait pas partie de la configuration du
domaine (pas un fichier de vhost, n'affecte aucun routage). Laissé en place
tel quel.

Pour vérifier sans attendre un déploiement complet (15 min) si la production
sert bien le dernier build local, une fois `npm run build` lancé :

```powershell
powershell -File scripts/check-cache.ps1
```

### Contrôle complet avant livraison au client

`scripts/verify-live.js` vérifie que chaque page réellement déployée sert
bien SON PROPRE contenu — pas une page de repli sur l'accueil. Deux
incidents (voir plus haut) sont passés inaperçus d'un simple coup d'œil :
une coquille SPA vide de 5,5 Ko, puis une page de repli sur l'accueil
prérendue (grande, avec un vrai pied de page) suite à un transfert
interrompu. Le contrôle fiable compare le `<link rel="canonical">` réellement
servi à celui attendu pour chaque route.

Deux usages :

- **En CI, à chaque déploiement** (`deploy.yml`, dernière étape) : tire 10
  pages au hasard dans chacune des 3 familles de routes (pages statiques,
  pages locales, articles), soit 30 vérifications — pensé pour rester rapide
  et ne pas ralentir chaque push.
- **À la demande, avant toute livraison au client** : vérifie les 323 routes
  une par une, sans échantillonnage. À lancer après tout déploiement dont le
  contenu doit être garanti (nouvelles pages, changement de structure) :

  ```bash
  npm run verify:live
  ```

  Une page isolée en échec est probablement un accident de transfert (à
  redéployer). Plusieurs pages en échec qui partagent un point commun
  (même famille, même position alphabétique, envoyées en fin de transfert…)
  indique un problème structurel côté déploiement, pas un accident isolé —
  creuser avant de relancer un simple redéploiement.

---

## Relecture typographique et orthographique

Le site va continuer à recevoir du contenu (communes, articles, pages) :
chaque ajout réintroduit des apostrophes droites et des espaces
insécables manquantes. Deux outils permanents, construits lors de l'audit
du 19-20/08/2026, évitent de refaire ce travail à la main à chaque fois.

**Périmètre des deux outils** (voir `scripts/lib/prose-fields.cjs`, la
référence — ce README résume, ne duplique pas) : uniquement les champs de
prose affichée de `src/data/site.js`, `src/data/articles.js` et
`src/data/local.js`. Une chaîne n'est traitée que si sa clé d'objet figure
dans une **liste blanche** (`title`, `text`, `label`, `q`, `a`,
`paragraphs`, `intro`, `metaDescription`, `h1`, `h2`…) et ne ressemble pas
à un chemin, une URL ou un slug (garde-fou supplémentaire même sous une
clé de la liste blanche). Une **liste noire** de clés structurelles
(`slug`, `path`, `to`, `href`, `icon`, `className`, `lock`, `city`,
`name`, `src`…) est prioritaire et exclut toujours. **Ne jamais ajouter
une clé à la liste blanche « parce qu'elle a l'air de contenir du
texte »** — vérifier le contenu réel de la clé dans le fichier avant
d'ajouter, sinon l'outil finit par corrompre un slug ou une classe CSS un
jour où cette clé sert à autre chose ailleurs. C'est précisément pour
cette raison que les clés `d` et `h` (tableau `hours` de `site.js`) sont
sciemment absentes malgré une prose légitime à cet endroit : `d` est
aussi l'attribut `d` d'un tracé SVG (`Icon.jsx`), trop générique pour une
liste blanche permanente.

### `npm run check:typo`

Signale les défauts typographiques (apostrophe droite, `...`, espace
manquante avant `? ! : ; » %`) sans rien écrire. À lancer après tout
ajout de contenu.

### `npm run fix:typo`

Applique les corrections trouvées par `check:typo`. Remplacement de plage
sur le texte source (pas de régénération de code via un générateur AST) :
le diff produit ne contient que les caractères réellement changés, ce qui
le rend relisible intégralement avant de committer — voir la méthode
complète dans l'historique Git du 19-20/08/2026 (recherche du commit
« Passe typographique mécanique »).

### `npm run check:spell`

Passe la même prose dans `nspell` + `dictionary-fr` (implémentation JS de
l'algorithme Hunspell, dictionnaire fr_FR de LibreOffice — `hunspell` en
tant que binaire n'est pas installé sur les machines de développement
utilisées jusqu'ici). Liste les mots absents du dictionnaire, **sans
jamais corriger** : un correcteur généraliste signale à tort tout le
vocabulaire métier et les noms propres locaux. La séparation
contrôle/correction compte particulièrement ici — une correction
automatique sur un faux positif de vocabulaire introduirait une vraie
faute.

La liste `EXCEPTIONS` dans `scripts/spellcheck.cjs` — vocabulaire métier
(gainable, hygroréglable, adoucisseur, redox, thermodynamique…), marques
(Daikin, Frisquet, MaPrimeRénov'…) et communes du Var (Lorgues,
Entrecasteaux, Figanières, Rayol-Canadel-sur-Mer…) — **est le savoir
réellement accumulé par cet audit**. Sans elle, chaque exécution
future remonterait les mêmes ~40 faux positifs. Quand un nouveau terme
métier ou une nouvelle commune apparaît dans le contenu :

1. Vérifier que le mot est réellement correct (dictionnaire, source
   fiable) — ne jamais ajouter « au cas où » pour faire taire l'outil.
2. L'ajouter à `EXCEPTIONS` (ou `KNOWN_PLACES` pour une commune), en
   minuscules dans le tableau — la comparaison se fait insensible à la
   casse.
3. Relancer `check:spell` pour confirmer que le suspect disparaît.

### Deux limites connues

- **`metaClosings` (`local.js`)** : un tableau de 4 phrases de clôture,
  déclaré au niveau racine du module (`const metaClosings = [...]`), hors
  de toute clé d'objet. La résolution de « clé gouvernante » des deux
  outils ne remonte pas jusqu'à un `const` nommé — ces 4 phrases ne sont
  donc jamais scannées. Vérifié manuellement le 20/08/2026 : aucune ne
  contient de caractère concerné par la typographie ou de mot hors
  dictionnaire, mais à re-vérifier à la main si leur contenu change.
- **Mots d'une seule lettre** (`check:spell`) : ignorés, car aucun mot
  français valide d'une lettre n'existe à vérifier utilement une fois les
  élisions (l'/d'/qu'…) déjà retirées en amont. Un « A » isolé qui
  devrait être « À » ne serait donc pas détecté par `check:spell`. Une
  recherche ciblée sur les capitales sans accent et les lettres isolées a
  été faite à la main le 20/08/2026 sur tout `src/` (pas seulement les 3
  fichiers de données) : aucun cas réel trouvé, uniquement des faux
  positifs (tracés SVG, couleurs hexadécimales, « E-mail », références
  légales, numéros d'autoroute). À refaire ponctuellement plutôt qu'en
  continu si le doute revient — pas d'outil permanent pour ce point précis.

---

## Visuels de réalisations à refaire

Ces six photos sont conservées en attendant un remplacement (décision
client, 2026-08-17) : la netteté mesurée est trop basse (variance du
Laplacien, seuil de qualité fixé à 300) mais le client préfère les garder
en place plutôt que de laisser un emplacement vide. À demander au client,
en format paysage :

| Sujet | Fichier | Netteté (Laplacien) |
|---|---|---|
| Chauffe-eau Fleck (carton d'emballage, pas une installation posée) | `public/img/real-chauffe-eau-fleck.jpg` | 51 |
| Salle de bain, carrelage à motifs | `public/img/real-sdb-carrelage-motifs.jpg` | 55 |
| Canalisation obstruée | `public/img/real-canalisation-obstruee.jpg` | 79 |
| Douche en pierre | `public/img/douche-pierre-finie.jpg` | 88 |
| Salle de bain complète | `public/img/real-sdb-complete.jpg` | 111 |
| Ballon thermodynamique | `public/img/real-ballon-thermo.jpg` | 137 |

Chaque fichier porte un commentaire au même effet dans
`src/data/photos.js`, au-dessus de son slot.
