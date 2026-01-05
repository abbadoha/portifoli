# 📄 Intégration du Rapport de Stage - Documentation

## ✅ Modifications effectuées

### 1. Organisation des fichiers

**PDF déplacé :**
- `rapport_stage.pdf` → `public/docs/rapport_stage.pdf`
- Accessible via l'URL : `/docs/rapport_stage.pdf`
- Servi automatiquement par Vite comme fichier statique

### 2. Nouvelle page "Rapport de stage"

**Fichier créé :** [`src/pages/rapport-stage.ts`](src/pages/rapport-stage.ts)

**Contenu de la page :**
- 🎯 Hero avec titre et métadonnées du stage
- 📋 Informations contextuelles (organisme, période, formation)
- 📥 Bouton de téléchargement du PDF
- 🖥️ Bouton plein écran pour le viewer
- 📄 Viewer PDF intégré (iframe responsive 80vh desktop / 70vh mobile)
- ⚠️ Fallback automatique si le PDF ne charge pas
- 📊 Section "Missions principales" (5 cartes interactives)
- 🎓 Section "Compétences mobilisées" (6 catégories)

**Caractéristiques techniques :**
- Iframe avec paramètres : `#toolbar=1&navpanes=1&scrollbar=1`
- Gestion d'erreurs avec fallback (message + liens de secours)
- Fonction `setupRapportStage()` pour initialiser les interactions
- Support plein écran (API Fullscreen + compatibilité navigateurs)
- Lazy loading de l'iframe

### 3. Page Stages mise à jour

**Fichier modifié :** [`src/pages/stages.ts`](src/pages/stages.ts)

**Section "Stage en bref" ajoutée :**
- 🗂️ Cartographie serveur de fichiers + analyse NTFS/ACL (PowerShell)
- 🎫 GLPI (ticketing) + support utilisateurs TeamViewer
- 🖨️ Gestion parc : imprimantes, tablettes, inventaire
- 🌐 Switchs multilayer + VLANs (segmentation réseau)
- 💻 Migration Windows 11 : Rufus, BIOS/UEFI, installation, mises à jour

**Boutons d'action :**
- "📄 Consulter le rapport complet" → lien vers `/#/rapport-stage`
- "📥 Télécharger le PDF" → téléchargement direct

### 4.Routage

**Fichier modifié :** [`src/app/router.ts`](src/app/router.ts)

```typescript
import RapportStage from '../pages/rapport-stage';
// ...
{ path: '/rapport-stage', title: 'Rapport de stage', render: RapportStage },
```

**Route créée :** `/#/rapport-stage`

### 5. Navigation

**Fichier modifié :** [`src/components/navbar.ts`](src/components/navbar.ts)

Ajout du lien dans le menu :
```typescript
{ path: '/rapport-stage', label: 'Rapport de stage' },
```

Le lien apparaît entre "Stages" et "Compétences" dans la navbar (desktop + burger mobile).

### 6. Styles CSS

**Fichier modifié :** [`src/main.css`](src/main.css)

**Nouveaux styles ajoutés (~280 lignes) :**
- `.rapport-stage-section` : conteneur principal
- `.rapport-header` : grid info + actions
- `.rapport-viewer-container` : wrapper du viewer PDF
- `.pdf-iframe` : styles de l'iframe responsive
- `.pdf-fallback` : écran de secours si PDF ne charge pas
- `.missions-highlight` : grid de cartes missions (hover effects)
- `.mission-card` : cartes avec icônes et animations
- `.competences-grid` : grid compétences
- `.stage-brief` : styles section résumé
- Media queries responsive (768px, 480px)

## 🎨 Design

**Cohérence avec le portfolio :**
- ✅ Design glassmorphism maintenu
- ✅ Palette de couleurs respectée (primary, accent, overlay)
- ✅ Animations hover uniformes
- ✅ Grid responsive avec auto-fit minmax
- ✅ Transitions fluides (0.3s ease)

**Accessibilité :**
- ✅ `aria-label` sur boutons de téléchargement
- ✅ `title` sur iframe
- ✅ `rel="noopener noreferrer"` sur liens externes
- ✅ Fallback pour navigateurs sans support PDF
- ✅ Lazy loading de l'iframe

## 📱 Responsivité

**Desktop (>768px) :**
- Rapport header en grid 2 colonnes
- Viewer PDF 80vh
- Missions highlight 3 colonnes
- Compétences 3 colonnes

**Tablette (768px) :**
- Rapport header 1 colonne
- Viewer PDF 70vh
- Missions highlight 2 colonnes
- Compétences 2 colonnes
- Boutons width 100%

**Mobile (<480px) :**
- Viewer PDF 60vh (minimum 400px)
- Toutes grids en 1 colonne
- Boutons empilés verticalement

## 🚀 Commandes à lancer

### Développement
```bash
npm run dev
```
→ Serveur local : http://localhost:5174  
→ HMR actif pour modifications en temps réel

### Build production
```bash
npm run build
```
→ Génère le dossier `dist/` avec assets optimisés  
→ Le PDF sera copié automatiquement dans `dist/docs/`

### Preview build
```bash
npm run preview
```
→ Teste le build en conditions de production

## 🔗 URLs du site

- **Page Rapport de stage :** http://localhost:5174/#/rapport-stage
- **Page Stages (avec résumé) :** http://localhost:5174/#/stages
- **PDF direct :** http://localhost:5174/docs/rapport_stage.pdf

## 📝 Contenu du rapport (résumé)

Le rapport couvre les missions suivantes :

1. **Cartographie et audit**
   - Serveur de fichiers + analyse NTFS/ACL
   - PowerShell (tree, Get-Acl)
   - Anonymisation des données sensibles

2. **Support et ticketing**
   - GLPI (gestion tickets)
   - TeamViewer (assistance distancielle)
   - Support L1/L2 agents municipaux

3. **Gestion de parc**
   - Imprimantes (installation pilotes)
   - Tablettes (tri, configuration)
   - Inventaire matériel

4. **Administration réseau**
   - Switchs multilayer
   - VLANs et segmentation réseau
   - Tests de connectivité

5. **Migration Windows 11**
   - Clé USB bootable (Rufus)
   - Boot BIOS/UEFI
   - Installation/migration Windows 11
   - Mises à jour système + pilotes
   - Tests finaux

## ✨ Fonctionnalités interactives

### Page Rapport de stage
- ✅ Téléchargement PDF (bouton + attribut `download`)
- ✅ Viewer PDF intégré (zoom, navigation, recherche)
- ✅ Plein écran (API Fullscreen)
- ✅ Fallback automatique si erreur de chargement
- ✅ Cartes missions avec hover effects
- ✅ Grids compétences responsives

### Page Stages
- ✅ Section "Stage en bref" avec 5 missions détaillées
- ✅ Bouton vers rapport complet
- ✅ Bouton téléchargement PDF direct

## 🔧 Maintenance

### Remplacer le PDF
1. Remplacer le fichier : `public/docs/rapport_stage.pdf`
2. Conserver le même nom de fichier (ou mettre à jour les chemins dans `rapport-stage.ts` et `stages.ts`)
3. Le changement est immédiat (HMR en dev, rebuild nécessaire en prod)

### Modifier le contenu de la page
- **Fichier à éditer :** `src/pages/rapport-stage.ts`
- **Sections modifiables :** Hero, informations, missions, compétences
- **Styles à modifier :** `src/main.css` (section "RAPPORT DE STAGE PAGE STYLES")

### Ajouter d'autres documents
1. Placer les PDFs dans `public/docs/`
2. Créer une nouvelle page ou ajouter un lien dans `downloads.ts`
3. Suivre le modèle de `rapport-stage.ts` pour le viewer

## 🎯 Checklist de validation

- [x] PDF accessible à `/docs/rapport_stage.pdf`
- [x] Page rapport-stage accessible à `/#/rapport-stage`
- [x] Lien visible dans la navbar (desktop + mobile)
- [x] Viewer PDF fonctionnel (iframe charge le PDF)
- [x] Bouton téléchargement fonctionnel
- [x] Bouton plein écran opérationnel
- [x] Fallback affiché si erreur de chargement
- [x] Section "Stage en bref" sur page Stages
- [x] Design cohérent avec le portfolio
- [x] Responsive (desktop, tablette, mobile)
- [x] Accessibilité (aria-label, title, fallback)
- [x] 0 erreurs TypeScript
- [x] Build production réussi

## 📦 Déploiement

### GitHub Pages
```bash
npm run build
# Pusher le dossier dist/ sur la branche gh-pages
```

### Vercel / Netlify
```bash
npm run build
# Déployer automatiquement (CI/CD configuré)
```

**Important :** Le PDF sera inclus automatiquement dans le build (dossier `public/` copié dans `dist/`).

## 🎉 Résultat final

✅ Portfolio enrichi avec une page rapport de stage complète  
✅ Viewer PDF intégré responsive et accessible  
✅ Section résumé fidèle au rapport sur page Stages  
✅ Navigation intuitive (navbar + boutons)  
✅ Design premium maintenu (glassmorphism)  
✅ Prêt pour production (build optimisé)

---

**Auteur :** ABBASSI DOHA  
**Formation :** BTS SIO SISR (2024-2026)  
**Stage :** Mairie de Trappes — DSI (Mai–Juillet 2025)
