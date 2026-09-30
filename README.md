# Assistant Dossards — PWA V2

## Fonctionnalités
- Import direct d'un fichier Excel depuis smartphone.
- Recherche par numéro de dossard.
- Détection automatique de la colonne `Dossard` et adaptation aux noms de colonnes courants.
- Mémorisation locale des données avec IndexedDB.
- Historique des derniers dossards.
- Mode speaker avec affichage très lisible.
- Installation comme PWA.
- Utilisable hors connexion après une première ouverture en ligne et mise en cache.

## Publication
Le dossier est une application web statique. Il doit être publié sous HTTPS pour bénéficier de l'installation PWA et du Service Worker.

GitHub Pages est adapté : créer un dépôt, envoyer tous les fichiers du dossier, puis activer Pages sur la branche de publication.

## Important pour l'Excel
L'application traite le fichier localement dans le navigateur. Le fichier Excel n'est pas envoyé à un serveur par l'application.

La version fournie embarque aussi les 35 dossards du fichier de démonstration comme données initiales.
