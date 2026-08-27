# Note — Les 280 pages locales

*27 août 2026. Note de décision, à lire à froid. Aucun correctif engagé.*

---

## Le constat

Le site compte **306 routes, dont 280 pages locales** — soit **92 %**. Elles suivent
le motif *métier × ville* : six métiers sur 39 communes, plus `pompe-a-chaleur` et
`traitement-eau` sur les 23 communes historiques.

Mesuré sur les pages générées, entre deux pages du même métier :

| Indicateur | Valeur |
| --- | --- |
| Vocabulaire commun (Jaccard) | **85 %** |
| Suites de cinq mots identiques | **75 %** |
| Pire paire mesurée | **90 %** (`climatisation-le-luc` / `climatisation-le-muy`) |
| Mots propres à une page | **19 sur 197** |
| Longueur moyenne | **290 mots** |

Autrement dit : d'une commune à l'autre, **une page sur dix change**. Le reste est
identique, au nom de la ville près.

## Pourquoi c'est un risque

Google nomme ce motif *doorway pages* — des pages créées pour capter une requête
géographique sans apporter de contenu propre. Ses recommandations les visent
explicitement. Trois conséquences possibles, par ordre de gravité :

1. **Filtrage** — les pages restent en ligne mais sortent de l'index. C'est le cas
   le plus courant, et il est silencieux : le trafic n'arrive jamais, sans qu'aucune
   alerte ne le signale.
2. **Dilution** — l'autorité du domaine se répartit sur 280 pages faibles au lieu de
   se concentrer sur les 25 pages métier, qui sont les bonnes.
3. **Action manuelle** — plus rare, mais elle touche le domaine entier, pages
   métier comprises.

Aucun de ces trois cas n'est visible sans surveillance. **Il faut d'abord mesurer
avant de décider** — voir « Ce que je ferais d'abord » plus bas.

---

## Trois options

### A — Enrichir

Donner à chaque page un contenu réellement local : nature du bâti, dureté de l'eau,
contraintes d'accès, chantiers réalisés sur place, délais depuis Lorgues.

*Ce qu'il faut* : environ 250 mots propres par page, non générés — sinon le problème
se déplace sans se résoudre.

| | |
| --- | --- |
| **Effort** | 280 pages × 250 mots ≈ **70 000 mots**. À 8 pages par jour de rédaction sérieuse : **6 à 8 semaines** |
| **Coût** | le poste le plus lourd des trois, et il retombe sur le client — c'est lui qui détient la matière |
| **Bénéfice** | le seul qui transforme le risque en avantage réel |
| **Risque** | l'essoufflement : 280 textes tenus au même niveau, c'est long |

### B — Réduire

Garder les communes où PCE intervient vraiment souvent, supprimer les autres et
rediriger vers la page métier.

*Une piste de cadrage* : conserver Lorgues et sa couronne, Draguignan, et les têtes du
Golfe — de l'ordre de 12 à 15 communes, soit environ **90 pages** au lieu de 280.
Le chiffre exact est un arbitrage commercial, pas technique : c'est au client de dire
où il se déplace réellement.

| | |
| --- | --- |
| **Effort** | **2 à 3 jours** — suppression, redirections 301, sitemap, maillage interne |
| **Coût** | faible |
| **Bénéfice** | risque écarté immédiatement ; l'autorité se concentre |
| **Risque** | on renonce à des requêtes déjà positionnées — **à vérifier avant, pas après** |

### C — Assumer

Ne rien changer, mais surveiller.

| | |
| --- | --- |
| **Effort** | **une demi-journée** pour la mise en place du suivi |
| **Coût** | nul |
| **Bénéfice** | aucun gain ; on achète du temps |
| **Risque** | le risque reste entier, et il se matérialiserait sans prévenir |

---

## Ce que je ferais d'abord

Les trois options se décident bien mieux avec deux chiffres qu'on n'a pas encore :

1. **Combien de ces 280 pages sont réellement indexées ?** La Search Console le dit en
   quelques minutes. Si la majorité est déjà filtrée, l'option B devient évidente et
   l'option A perd son intérêt.
2. **Combien en apportent du trafic ou des appels ?** Si une poignée seulement
   travaille, on connaît la liste à garder.

**Une demi-journée de mesure avant de choisir**, et l'arbitrage se fait sur des faits
plutôt que sur une intuition.

## Mon avis

**B, ou A restreinte aux communes de B.** L'option A appliquée aux 280 pages demande un
effort que le rapport bénéfice/risque ne justifie pas : beaucoup de ces communes ne
généreront jamais d'appel. Concentrer le même travail éditorial sur douze à quinze
pages vraiment utiles produirait un meilleur résultat pour une fraction du coût.

L'option C n'est raisonnable que comme position d'attente, le temps de faire la mesure
ci-dessus — pas comme décision.

---

## À noter

Ce chantier est **indépendant** des correctifs de la veille finale. Les quatre points
traités le 27 août — aides financières, chronologie, liens morts, poids des pages — ne
touchent pas à cette question et peuvent être déployés sans elle.
