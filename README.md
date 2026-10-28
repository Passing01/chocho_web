# Site Chocho

## Déployer (2 minutes)
1. Installer Vercel : `npm i -g vercel`
2. Dans ce dossier : `vercel --prod` (ou glisser le dossier sur vercel.com/new)

## Publier / mettre à jour l'APK
```
node update-apk.js chemin/vers/app-release.apk 1.1.0 "Nouveautés de la version"
vercel --prod
```
Le script copie l'APK dans `app/chocho.apk` et met à jour `version.json` (version, date, taille) : le site l'affiche automatiquement.

**APK > 100 Mo ?** Hébergez-le sur GitHub Releases et mettez son lien dans le champ `url` de `version.json`.

## QR code
Il est généré automatiquement dans la section Télécharger et pointe vers `https://votre-domaine/#telecharger`. Il reste valable à chaque nouvelle version. Bouton « Enregistrer le QR code » pour l'imprimer (affiches, badges).
