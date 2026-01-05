# Veille — fichiers locaux

Ce dossier est destiné à héberger des copies locales des documents de veille (PDF/CSV/JSON) pour un usage offline ou en présentation.

## Comment ajouter les fichiers
1. Téléchargez depuis les liens officiels :
   - Panorama de la cybermenace 2024 (CERT-FR / ANSSI)
   - Guide d’hygiène informatique (42 mesures)
   - Autres guides ANSSI (sauvegarde, journalisation, interconnexion, architecture sécurisée)
   - Référentiels NIST (CSF 2.0, SP 800-53, SP 800-53A)
   - Bulletins CISA (KEV, Top Routinely Exploited Vulnerabilities)
   - Outils/Docs Microsoft (SCT, baselines, MSRC)
2. Placez les fichiers dans ce dossier `public/docs/veille/`.
3. Mettez à jour les liens dans `src/pages/watch.ts` pour pointer vers `/docs/veille/<nom-du-fichier>` si vous voulez servir les versions locales.

## Bonnes pratiques
- Conservez le nom de fichier d’origine quand c’est possible pour identifier rapidement la source.
- Vérifiez les droits/licences de redistribution avant de publier en ligne.
- Après ajout, relancez le serveur (`npm run dev`) et testez les liens sur `/#/watch`.
