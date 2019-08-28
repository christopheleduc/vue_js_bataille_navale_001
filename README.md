# Bataille Navale - Projet Vue.JS
Un jeu de bataille navale à développer avec Vue.JS

![](images/header.jpg)

Ce projet a pour objectif de permettre l’acquisition de compétences avancées en Vue.js, dans la continuité du premier projet de [gestion des fournisseurs de Spiruline](https://github.com/le-campus-numerique/mobile-machines).

Il s'intègre au module `Javascript avancé` et permet l'acquisition des compétences bonus listées sous "Complément VueJS".

⚠️ Faites d'abord un point sur les compétences qui vous manquent. Assurez vous d'avoir validé l'ensemble des compétences obligatoires du module `Javascript avancé`. Si ce n'est pas le cas, faites plutot [ce projet](https://github.com/campus-digital-grenoble/alternance-rattrapage-mobile-js) dans un premier temps. ⚠️

Ce document décrit les attentes fonctionnelles autour de ce projet.
**Il n’a pas vocation à être exhaustif et les fonctionnalités décrites dans ce document peuvent être complétées à votre guise.**

### Sujet
Programmer **un jeu de bataille navale en multijoueur**, sur un seul ordinateur.

Chaque joueur possède une flotte composée de 5 bateaux, qui sont les suivants : 1 porte-avion (5 cases), 1 croiseur (4 cases), 1 contre torpilleur (3 cases), 1 sous-marin (3 cases), 1 torpilleur (2 cases).
Le plateau de jeu est une grille de 10 x 10 cases.

Dans une première phase de jeu, les joueurs positionnent leur bateaux sur le plateau de jeu. 
Dans une seconde phase de jeu, les joueurs s'attaquent en tirant sur la grille de l'adversaire pour trouver ses bateaux. 

Le but est de couler les bateaux adverses, c'est à dire de trouver toutes les cases occupées par la flotte ennemie.

### Modalités de rendu

Tout votre travail doit être fait en utilisant **Git**. Votre avancement devra être présenté dans des commits, sous la forme suivante :
- Un commit minimum par exercice, avec un message reprenant l'intitulé de l'exercice. 
- Chaque commit contient les modifications de code **et** une modification du sujet pour renseigner l'avancement.

Exemple pour le [premier exercice](#mettre-en-place-son-repo-git) :

<img width="956" alt="git-commit" src="https://user-images.githubusercontent.com/632197/42737442-a94e7534-8873-11e8-82fa-75d178493074.png">

*Les fichiers readme sont [au format Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Pour chaque exercice que vous compléterez, cochez la case dans le sujet en rajoutant une croix.* 

Vous travaillerez sur une branche par fonctionnalité, en respectant le [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). 
- Tous les commits doivent etre fait sur une branche dédiée à la fonctionnalité, par ex. `create-grid`, `handle-placement-errors`, `attack-animations`, `ships-images` ...
- Une fois poussés, les commits doivent être présentés dans une Pull Request.
- Chaque Pull Request doit être lue et validée, puis mergée par un **autre membre** de votre ilôt.

## Itération 0 : Préparation du projet
### Mettre en place son repo Git 
- [ ] Forkez ce repo, et clonez votre fork
- [ ] Créez une branche `mise-en-place-git` depuis `master`.
- [ ] [Commitez la complétion](https://user-images.githubusercontent.com/632197/42737442-a94e7534-8873-11e8-82fa-75d178493074.png) des 3 étapes de cet exercice sur `mise-en-place-git`, puis ouvrez une Pull Request vers `master` sur votre repo.

### Étudier les règles du jeu 

- [ ] Comprendre les règles du jeu et formuler le plus précisément possible les mécanismes de l'application que vous allez développer.
*Présentez ici votre application telle que vous l'imaginez, avant de la développer. Dans une second temps, vous pourrez lister précisément ce qui fonctionne vraiment.*

**Algorithme du jeu :** [Complétez ici]

### Définir les tâches à réaliser

- [ ] Créer un backlog avec Github project, utilisant le template de projet ["Basic Kanban"](https://help.github.com/articles/tracking-the-progress-of-your-work-with-project-boards/)

## Itération 1 : Déploiement de la flotte.

- [ ] Initialisez une application vue dans ce repo.
- [ ] Ajouter au readme ( ce fichier ) les informations nécessaires pour utiliser votre projet.

### Créer l'interface de jeu

Ajoutez dans votre application :
    
- [ ] Une grille de taille fixe (10x10), le plateau de jeu.
- [ ] Un listing de vos bateaux
- [ ] Une zone pour afficher les messages

### Ajouter un formulaire qui permet positionner ses bateaux sur la grille en début de partie

- [ ] Chaque bateau peut être positionné sur la grille en rentrant des coordonées dans un formulaire
- [ ] Chaque bateau peut être disposé à l'horizontale ou à la verticale
- [ ] Les bateaux ne peuvent pas dépasser de la grille, se superposer, ou être posés plusieurs fois. 
- [ ] On peut vider la grille pour recommencer le placement

### Afficher les succès et erreurs, et états - visuellement ou avec du texte

- [ ] Afficher les retours nécessaires lors de cette étape de placement de la flotte.

## Itération 2 : Attaque entre deux joueurs.

### Attaque de l'adversaire
- [ ] Le joueur actif ne voit pas la grille de jeu de l'autre
- [ ] Chaque utilisateur joue à son tour
- [ ] La grille présente les cases déja jouées
- [ ] On affiche un retour suite à l'attaque. Touché, coulé ...
- [ ] Ajouter des animations aux attaques

### Scores 
- [ ] Afficher les scores au cours de la partie
- [ ] Ajouter une page dédiée aux scores des parties précédentes

### Le joueur a ses faiblesses
- [ ] Un joueur peut annuler un coup, ou plusieurs.
- [ ] Si la page est rechargée, on peut reprendre la partie en cours 

## Itération 3 

### Presque de l'IA
- [ ] Une option permet de positionner les bateaux sur la grille de façon aléatoire en début de partie

### Bataille TV
- [ ] On peut voir un replay de la partie complète


# Ressources

Ressources : 
    Le projet réalisé pendant le module `Javascript Avancé` :
  * https://github.com/le-campus-numerique/vuejs-suppliers

    Le sujet de rattrapage "pas à pas" :
  * https://github.com/campus-digital-grenoble/alternance-rattrapage-mobile-js  
    eBooks (EN) :
  * [The Vue Handbook](Vue_Handbook.pdf)
  * [The Vue Cheat Sheet](Vue.js_Cheat_Sheet.pdf)

    Flux & Gestion de State
  * https://medium.com/hacking-and-gonzo/flux-vs-mvc-design-patterns-57b28c0f71b7
  * https://vuex.vuejs.org/

# Livrable 
Votre repo git respectant [le workflow](#modalités-de-rendu).
