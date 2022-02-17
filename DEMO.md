# Démo

## Clone du projet
- Montrer le dossier `.git` (accès depuis l'explorateur de fichier windows) : contient tout ce qui définit nos repos (local & distants)
- Parler rapidement du dossier hooks et de ce qu'il contient
- Parler du fichier de config
- Revenir au projet déjà configurer (workshop-git)

## Nouvelle feature

- Demander à Clarisse ou Maxime de m'affecter une issue
- Lire l'issue et récupérer le numéro de l'issue et laisser un commentaire
- Créer une branche avec le numéro de l'issue
- Faire le développement
- Mettre en désordre l'indentation et ajouter des imports non utilisés pour démontrer les Git hooks
- Casser un test volontairement

## Git hooks
- Essayer de faire un commit (git pre-commit hook va bloquer le commit)
- Montrer que le code a été re-indenter correctement
- Fixer les imports non utilisés
- Faire le commit & push

## PR & validations
- Faire une PR
- Le reviewers demande un changement
- Le temps que les tests tourne montrer rapidement le contenu de la définition du Github Action
- Montrer que le test n'est pas passé
- Fixer le test & faire les changements demandés par le reviewers, commit, et push.
- Le reviewers valide la PR

## Déploiement
- Merger la PR
- Montrer le déclenchement du déploiement en env DEV
- Merger la branche develop dans main, monter le déploiement en PROD