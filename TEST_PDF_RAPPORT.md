# 🔧 Test du téléchargement du rapport de stage

## ✅ Configuration actuelle

### Emplacement du PDF
- **Fichier source** : `public/docs/rapport_stage.pdf`
- **URL en développement** : `http://localhost:5174/docs/rapport_stage.pdf`
- **URL en production** : `https://votre-domaine.com/docs/rapport_stage.pdf`

### Fichiers modifiés
1. **src/pages/rapport-stage.ts** : Page dédiée avec viewer PDF intégré
2. **src/pages/stages.ts** : Bouton de téléchargement dans la section stage
3. **src/pages/downloads.ts** : Lien de téléchargement dans la page téléchargements

### URLs utilisées
Tous les liens utilisent : `${import.meta.env.BASE_URL}docs/rapport_stage.pdf`

Cette syntaxe garantit :
- ✅ Fonctionnement en développement (`/docs/rapport_stage.pdf`)
- ✅ Fonctionnement avec base path GitHub Pages (`/repo-name/docs/rapport_stage.pdf`)
- ✅ Fonctionnement sur tout hébergement (Vercel, Netlify, etc.)

## 🧪 Tests manuels

### 1. Test en développement

```bash
# Démarrer le serveur de développement
npm run dev

# Le serveur démarre généralement sur http://localhost:5173
# Si le port est occupé, Vite utilisera 5174, 5175, etc.
```

**Tests à effectuer** :

#### A) Accès direct au PDF
1. Ouvrir : `http://localhost:5174/docs/rapport_stage.pdf`
2. ✅ Le PDF doit s'afficher directement dans le navigateur
3. ❌ Si erreur 404 → Vérifier que le fichier existe dans `public/docs/`

#### B) Page rapport de stage
1. Ouvrir : `http://localhost:5174/#/rapport-stage`
2. ✅ Le PDF doit s'afficher dans l'iframe
3. ✅ Cliquer sur "📥 Télécharger le PDF" → Le PDF se télécharge
4. ✅ Cliquer sur "🖥️ Plein écran" → Le PDF s'affiche en plein écran

#### C) Page stages
1. Ouvrir : `http://localhost:5174/#/stages`
2. ✅ Cliquer sur "📄 Consulter le rapport complet" → Redirige vers la page rapport
3. ✅ Cliquer sur "📥 Télécharger le PDF" → Le PDF se télécharge

#### D) Page téléchargements
1. Ouvrir : `http://localhost:5174/#/downloads`
2. ✅ Cliquer sur "Télécharger rapport" → Le PDF se télécharge
3. ✅ Cliquer sur "📄 Consulter en ligne" → Redirige vers la page rapport

### 2. Test après build

```bash
# Construire le projet
npm run build

# Lancer le serveur de preview
npm run preview

# Le serveur de preview démarre sur http://localhost:4173
```

**Tests à effectuer** :

#### A) Vérifier que le PDF est copié
```bash
# Vérifier l'existence du fichier
ls dist/docs/rapport_stage.pdf

# Sous Windows PowerShell
Test-Path "dist/docs/rapport_stage.pdf"
```

✅ Le fichier doit exister → Les fichiers de `public/` sont copiés automatiquement

#### B) Tester les mêmes URLs
1. Ouvrir : `http://localhost:4173/docs/rapport_stage.pdf`
2. Ouvrir : `http://localhost:4173/#/rapport-stage`
3. Tester tous les boutons de téléchargement

### 3. Test automatique

```bash
# Exécuter le script de vérification
npm run check:pdf
```

Le script vérifie :
- ✅ Existence de `public/docs/rapport_stage.pdf`
- ✅ Existence de `dist/docs/rapport_stage.pdf` (après build)
- ℹ️ Affiche les commandes de test manuel

## 🌐 Déploiement avec base path (GitHub Pages)

Si vous déployez sur GitHub Pages avec un repo `username.github.io/portfolio/` :

### Configuration Vite

Modifiez `vite.config.ts` :

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portfolio/', // ← Nom de votre repo
  server: {
    middlewareMode: false,
  },
})
```

### URLs après déploiement

Avec `base: '/portfolio/'` :
- PDF direct : `https://username.github.io/portfolio/docs/rapport_stage.pdf`
- Page rapport : `https://username.github.io/portfolio/#/rapport-stage`

Les liens sont automatiquement préfixés grâce à `import.meta.env.BASE_URL` !

## 🔍 Diagnostic en cas de problème

### Problème : 404 sur le PDF

**Causes possibles** :
1. Le fichier n'existe pas dans `public/docs/rapport_stage.pdf`
2. Le nom du fichier est incorrect (casse, espaces, underscores)
3. Le base path n'est pas configuré correctement

**Solutions** :
```bash
# Vérifier l'existence du fichier
ls public/docs/rapport_stage.pdf

# Vérifier que le fichier est bien copié après build
npm run build
ls dist/docs/rapport_stage.pdf

# Vérifier la configuration Vite
cat vite.config.ts
```

### Problème : Le lien ouvre une page blanche ou une route

**Cause** : Utilisation d'un composant de routing (`<Link>`) au lieu d'un vrai lien HTML

**Solution** : Vérifier que les liens utilisent bien `<a href="...">` et pas `<Link to="...">`

```typescript
// ❌ FAUX (routing interne)
<Link to="/docs/rapport_stage.pdf">Télécharger</Link>

// ✅ CORRECT (lien HTML direct)
<a href="${import.meta.env.BASE_URL}docs/rapport_stage.pdf" download>Télécharger</a>
```

### Problème : Le navigateur ouvre le PDF au lieu de le télécharger

**Cause** : Comportement par défaut des navigateurs modernes

**Solutions** :
1. L'attribut `download="nom.pdf"` est déjà présent → OK
2. Certains navigateurs ouvrent quand même → Comportement normal
3. L'utilisateur peut faire clic droit → "Télécharger"

**C'est normal** ! Les navigateurs modernes préfèrent afficher les PDF plutôt que les télécharger.

## 📋 Checklist de validation finale

Avant de considérer le problème résolu, vérifiez :

- [ ] ✅ `public/docs/rapport_stage.pdf` existe
- [ ] ✅ `http://localhost:5174/docs/rapport_stage.pdf` affiche le PDF en dev
- [ ] ✅ Page rapport-stage affiche le PDF dans l'iframe
- [ ] ✅ Bouton "Télécharger" fonctionne (télécharge ou ouvre selon navigateur)
- [ ] ✅ Après `npm run build`, `dist/docs/rapport_stage.pdf` existe
- [ ] ✅ `npm run preview` + même tests → OK
- [ ] ✅ `npm run check:pdf` → Aucune erreur
- [ ] ✅ Tous les liens utilisent `${import.meta.env.BASE_URL}docs/rapport_stage.pdf`
- [ ] ✅ Aucun lien ne pointe vers `/assets/docs/` ou un autre chemin incorrect
- [ ] ✅ Attributs `download`, `target="_blank"`, `rel="noopener noreferrer"` présents

## 🚀 Résumé technique

**Stack** : Vite 7.3.0 + TypeScript vanilla + Hash-based SPA router

**Stratégie PDF** :
- Fichiers statiques dans `public/` → Copiés à la racine de `dist/`
- URLs construites dynamiquement avec `import.meta.env.BASE_URL`
- Liens HTML directs (`<a>`) au lieu de routing interne
- Attributs de téléchargement et sécurité présents

**Pages impactées** :
1. [`src/pages/rapport-stage.ts`](src/pages/rapport-stage.ts) : Viewer + téléchargement principal
2. [`src/pages/stages.ts`](src/pages/stages.ts) : Bouton dans section stage
3. [`src/pages/downloads.ts`](src/pages/downloads.ts) : Lien dans page téléchargements

**Script de test** :
- [`scripts/check-pdf.js`](scripts/check-pdf.js) : Vérifie l'existence du PDF
- Commande : `npm run check:pdf`

---

**✅ Si tous les tests passent, le téléchargement du rapport de stage fonctionne correctement !**
