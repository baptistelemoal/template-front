# Template front

Application web sous React en utilisant le bundler Vite avec Typescript.

### Librairies utilisées

Application :

- `react-router-dom` : Permettre une navigation dans l'application entre différentes pages
- `i18next` : Système de traduction (ici que FR de disponible) pour éviter les textes en dur dans le JSX et pour ajouter facilement de nouvelles langues par la suite.
- `mande` : Surcouche au fetch natif plus facilement manipulable.
- `react-query` : Permet de gérer le cache des requêtes HTTP (stockage, invalidation, etc). Indispensable pour une application en production.
- `tailwindcss` : Framework très populaire pour écrire plus simplement du CSS, pour gérer les palettes et les thèmes. Écriture du CSS mobile-first.
- `clsx` : Faire des conditions et grouper les className, très utile avec Tailwind

Outils de développement :

- `jest` : Tests unitaires
- `eslint` & `prettier` : Formattage du code pour unifier la codebase.
- `husky` : Actions précises sur différents hooks. Dans notre cas, avant le commit on s'assure automatiquement que le lint à été effectué via prettier et que les tests unitaires passent.

Cypress (tests end-to-end) pourrait être ajouté pour pour tester différents parcours mais c'est encore tôt à ce stade.

---

### Lancer le projet

1. Runtime

[Node Version Manager](https://github.com/nvm-sh/nvm) doit être installé localement sur l'ordinateur. Il permet de changer de version de node en une ligne de commande et de s'assurer que tout le monde possède la même version.

Une fois l'installation effectuée, il faut faire un `nvm use`.
La version devrait être Node 18 (voir le fichier .nvmrc).

2. Package manager

Le gestionnaire de paquet utilisé est Yarn v3, il ne faut pas installer le gestionnaire localement sur l'ordinateur, il est fournit par Node.
Pour l'activer il faut faire un `corepack enable`.

3. Start

- Installation des dépendances : `yarn install`
- Start en mode dev : `yarn dev`
