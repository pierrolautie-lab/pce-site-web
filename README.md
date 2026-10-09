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
| Accueil (slot 104) | 3,26:1 | « Climatisation • Piscine », H1 azure |
| Climatisation (slot 520) | 3,32:1 | « et économies d'énergie », sous-titre azure |
| Contact (slot 100) | 3,93:1 | accroche azure |

> ⚠️ Si l'un de ces trois visuels est remplacé, **remesurer avant de livrer**.
> Le point commun des trois est un texte **azure sur photo** : l'azure est un
> ton moyen, il perd son contraste aussi bien sur un fond qui s'éclaircit que
> sur un fond qui s'assombrit.

La mesure se fait sur le rendu réel, au pixel de glyphe — pas sur la boîte
englobante du texte, qui donne des faux positifs sur le vide à droite des
lignes. Méthode : capturer la page deux fois (rendu normal, puis avec
`section * { color: transparent }`), ne retenir que les pixels où les deux
diffèrent, et comparer la couleur calculée du texte au fond de la seconde
capture.

### Passage de l'accueil à une photo de jour — 09/10/2026

Le client a demandé une scène de jour (« un grand soleil type Côte d'Azur ») à
la place du fourgon de nuit. L'accueil quitte donc le slot 100, que **Contact
garde** : les deux pages ne partagent plus de photo.

Ce que la mesure a montré, et qui n'était pas prévisible à l'œil :

- **Le tiers gauche de la photo de jour est plus sombre que celui de la photo
  de nuit** (luminance relative moyenne 0,021 contre 0,046) — l'ombre de
  cyprès au premier plan fait son travail. Ce n'est donc pas la luminosité
  moyenne qui a posé problème.
- **Le défaut venait de la géométrie du voile, pas de la photo.** Son plateau
  s'arrêtait à 60 % de la largeur du bloc de texte, alors que la ligne la plus
  longue du H1 (« Climatisation • Piscine ») va jusqu'à 80 %. Les 20 %
  restants tombaient dans l'extinction du voile, donc sur la photo nue — du
  ciel et une colline au soleil à partir de 1024 px. Mesuré : **1,57:1 à
  1024 px, 1,92:1 à 1440 px** (seuil 3:1). Le même défaut existait avec la
  photo de nuit, masqué par un fond nocturne : 3,08 et 4,14 — il tenait à la
  photo, pas au réglage.

Deux corrections, les deux sur des mécaniques partagées :

1. **Voile unique pour les deux pages appelantes** — le paramètre `plateau`
   (60 % Accueil / 72 % Contact) est supprimé, c'était le dernier coefficient
   réglé page par page. Plateau à **85 %** (il couvre tout le texte, mesuré :
   aucun pixel de glyphe au-delà), opacité **70 % → 75 %**.
2. **Fond marine translucide sur le bouton téléphone du héros d'accueil.**
   La rangée d'actions est posée *après* le bloc qui porte le voile : c'est le
   seul texte du héros qui n'a jamais été couvert. Sur la photo de nuit le
   défaut ne sortait qu'à 1440 px (2,82:1) ; sur la photo de jour le numéro
   tombe sur du gravier en plein soleil — **1,53:1 à 1024 px**. Le bouton or
   voisin n'a jamais eu le problème : son fond est opaque.

Résultat, 68 mesures sur Accueil et Contact aux quatre paliers
(375/768/1024/1440) : **aucun texte sous son seuil**. Minimum d'accueil
3,26:1 (seuil 3:1, H1 azure), minimum de Contact 3,93:1.

**Ce que le voile coûte en lumière** — la contrepartie à connaître avant d'y
retoucher, luminance relative moyenne du héros rendu :

| Palier | Avant (70 % / plateau 60 %) | Après (75 % / plateau 85 %) | Écart |
| --- | --- | --- | --- |
| 768 px | 0,0936 | 0,0751 | −19,8 % |
| 1024 px | 0,1338 | 0,1193 | −10,9 % |
| 1440 px | 0,1460 | 0,1369 | −6,2 % |

L'écart est le plus fort à 768 px, où le bloc de texte occupe 92 % de la
largeur : à ce palier, voiler le texte revient à voiler l'écran. Une variante
a été mesurée pour récupérer cette lumière — garder le voile à 70 % et éclaircir
la ligne azure du H1 (`azure-400` → `azure-300`) : elle ne rend que 3,7 points
à 768 px, 1,8 à 1024 px, 0,8 à 1440 px. **Changer une couleur de la charte pour
ça ne vaut pas le coup** : l'essentiel du coût vient de l'extension du plateau,
qui est inévitable — le texte doit reposer sur un fond sombre.

À 375 px, rien ne change : la photo est un bandeau au format natif posé sous le
bloc de texte, qui est sur marine plein. La photo est en **16:9 (1672 × 941)**,
exactement le format du bandeau `aspect-video` — elle s'affiche entière, sans
recadrage, le fourgon reste intégralement visible. Aucun `object-position` à
régler pour le mobile.

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

## Performance mobile — passe du 08/09/2026

Point de départ : desktop 98, mobile 84 (PageSpeed, production). Deux
diagnostics à 50 : *Improve image delivery* et *Use efficient cache
lifetimes*. CLS 0 et TBT 80 ms, à ne pas dégrader.

Quatre corrections, aucune ne touchant au rendu des héros (voile, fondus
et contrastes validés client — captures locale et production superposées
avant/après pour le vérifier).

### 1. `sizes` des cartes métiers de l'accueil

Se terminait par `100vw` alors que la grille est en `grid-cols-2` **dès
le plus petit écran**. Les huit cartes tiraient la variante 800w (390 Ko)
là où la 400w suffit (130 Ko).

> Le piège est général : `sizes` doit décrire la grille réelle au palier
> le plus étroit, pas « une colonne par défaut ». Vérifier le
> `grid-cols-*` du conteneur avant d'écrire la dernière valeur.

### 2. Préchargement du héros — pourquoi il porte un `media`

`HeroBackgroundPhoto` pose son `<link rel="preload">` depuis un effet
React. Le prérendu (Puppeteer) exécute cet effet : **la valeur calculée
se retrouve figée dans le HTML servi à tous les visiteurs**, pas
seulement à celui dont le navigateur l'a calculée. L'ancien calcul
(`window.innerWidth × devicePixelRatio`, sans `media`) gravait donc la
variante du viewport de Puppeteer — 800w — et tout appareil dont le
`srcset` résolvait autrement téléchargeait l'image **deux fois**.

Le préchargement est désormais déterministe : plus grande variante, sous
`media="(min-width: 801px)"`. Au-delà de 800 px CSS, `largeur × DPR`
dépasse toujours 800, donc `sizes="100vw"` choisit toujours la plus
grande — le préchargement est exact pour tous ces écrans. Sous 801 px,
volontairement rien : aucune variante unique n'est juste pour tout le
parc mobile (375×2 → 800w, 412×3 → 1200w), et un préchargement erroné
coûte une image entière en double.

> ⚠️ Règle générale : **tout effet React qui écrit dans le `<head>` est
> capturé par le prérendu**. Il ne doit dépendre d'aucune mesure du
> navigateur (`innerWidth`, `devicePixelRatio`, `matchMedia`), sous peine
> de figer la machine de build dans le HTML de production. Si le résultat
> doit varier selon l'appareil, cela passe par un attribut que le
> navigateur évalue lui-même — `media`, `srcset` — jamais par un calcul
> au montage.

### 3. GA4 non chargé tant que l'identifiant est le placeholder

`gtag.js` se téléchargeait en entier (150 Ko, ~350 ms de processeur
mobile) avec l'identifiant factice, sans rien collecter. Le garde
disparaît de lui-même dès que le vrai identifiant est renseigné — c'est
toujours la seule ligne à modifier.

### 4. Polices auto-hébergées (`@fontsource`)

La feuille Google Fonts était la ressource bloquante la plus coûteuse du
premier rendu : une connexion cross-origin complète avant même de
pouvoir la lire (786 ms mesurés en 4G lente, contre 150 ms pour le CSS
du site). Mêmes fichiers WOFF2, mêmes graisses, même `font-display:
swap`, servis depuis `pcevar.fr` et empreintés par Vite. Le CSS passe de
61 à 80 Ko bruts (12 Ko transférés).

> Les imports sont dans `src/main.jsx`, une ligne par graisse réellement
> utilisée. En ajouter une n'a de sens que si un texte l'appelle : une
> graisse importée mais jamais utilisée alourdit le CSS sans jamais
> télécharger son WOFF2.

### Durées de cache — ce que l'incident interdisait vraiment

Les durées courtes du `.htaccess` venaient d'un incident où une réponse
transitoire était restée en cache jusqu'à un mois. Cet incident portait
sur du **HTML** servi par un cache de plateforme : ce qui protège les
déploiements, c'est le `no-cache` strict sur le HTML et le
`CacheDisable` de LiteSpeed — inchangés — pas la durée de vie des
assets. Ceux-ci passent donc à un an, avec `immutable` pour les seules
extensions réellement empreintées (`js`, `css`, `woff2`).

Les images n'ont pas d'empreinte dans leur nom : leur durée d'un an
repose sur la pratique du projet, qui est de **ne jamais réutiliser un
nom de fichier pour un autre visuel**. Si cette pratique change,
redescendre la durée en même temps.

### Ce qui reste, et pourquoi

- **Le CSS du site reste bloquant** (~150 ms). Inévitable sans extraction
  de CSS critique, qui demanderait de générer un critique par gabarit
  pour 323 pages — pour un gain que la connexion déjà ouverte rend
  modeste.
- **Vignettes des réalisations** : affichées à 157 px, elles tirent la
  400w, la plus petite variante générée. Un palier 200w dans
  `optimize-images.js` les couvrirait, mais elles sont en `lazy` et bien
  sous la ligne de flottaison — aucun effet sur le LCP.
- **Le LCP mobile est un bloc de texte**, pas une image : il est borné
  par le TTFB du mutualisé et par le CSS bloquant, pas par le poids des
  images. C'est le plancher de cette architecture.

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
