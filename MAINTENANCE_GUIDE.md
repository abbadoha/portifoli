# 🛠️ Guide de maintenance et extension du portfolio

## Démarrer le serveur

```bash
cd c:\Users\chams\Downloads\portifoli
npm install       # Si première fois
npm run dev       # Démarre serveur Vite (http://localhost:5173 ou 5174)
```

---

## Structure des pages

Chaque page suit ce pattern:

```typescript
// src/pages/example.ts

export default function PageName() {
  return `
<section class="page-hero">
  <h1>Titre page</h1>
  <p>Sous-titre</p>
</section>

<section class="page-content glass">
  <h2>Section 1</h2>
  <p>Contenu</p>
</section>

<section class="page-cta glass">
  <h3>Appel à l'action</h3>
  <a href="/#/route" class="btn btn-primary">Lien</a>
</section>
  `;
}
```

### Importer les composants:

```typescript
import { Button, Chip, Accordion, showToast } from '../components/ui';

// Utilisation dans le HTML string:
${Button({ label: 'Click me', href: '/#/home', variant: 'primary' })}
${Chip({ label: 'Tag' })}
${Accordion({ id: 'acc-1', items: [{ title: 'Q', content: 'R' }] })}
```

---

## Ajouter une nouvelle page

1. **Créer le fichier** : `src/pages/newpage.ts`

```typescript
export default function NewPage() {
  return `
<section class="page-hero">
  <h1>Ma page</h1>
  <p>Description</p>
</section>

<section class="page-content glass">
  <h2>Contenu</h2>
</section>
  `;
}
```

2. **Ajouter la route** : `src/app/router.ts`

```typescript
import NewPage from '../pages/newpage';

// Ajouter dans routes array:
{ path: '/newpage', title: 'Nouvelle Page', render: NewPage },
```

3. **Ajouter le lien navbar** : `src/components/navbar.ts`

```typescript
// Dans renderNavbar(), ajouter dans ul#nav-links:
<li><a href="/#/newpage" class="nav-link">Nouvelle</a></li>
```

4. Redémarrer le serveur (`npm run dev`)

---

## Modifier le style

**Fichier principal** : `src/main.css` (~1800 lignes)

### Couleurs (CSS variables dans `:root`):
```css
--color-bg: #1a1333;              /* Fond sombre */
--color-primary: #a259ff;         /* Violet */
--color-secondary: #5d5fef;       /* Indigo */
--color-accent: #ff61d2;          /* Rose */
--color-overlay: rgba(20,16,32,0.7);
--color-text: #f3f3fa;
--color-text-secondary: #d0d0dd;
--glass-blur: 18px;
```

### Modifier une classe:
```css
.page-content {
  max-width: 900px;
  margin: 2rem auto;
  /* Éditez ici */
}
```

### Ajouter une animation:
```css
@keyframes slideInLeft {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.element {
  animation: slideInLeft 0.6s ease-out;
}
```

---

## Utiliser les composants UI

### Button
```typescript
${Button({ 
  label: 'Cliquer', 
  href: '/#/home',
  variant: 'primary',  // 'primary' | 'ghost' | 'outline'
  icon: '🚀'
})}
```

### Chip (tags)
```typescript
${Chip({ label: 'JavaScript' })}
${Chip({ label: 'TypeScript' })}
```

### Accordion (accordéon dépliable)
```typescript
<div class="accordion" id="accordion-1">
  <button class="accordion-trigger" data-accordion="accordion-1">
    Question?
    <span class="accordion-icon">+</span>
  </button>
  <div class="accordion-content">
    <p>Réponse ici</p>
  </div>
</div>
```

### Toast (notification)
```typescript
import { showToast } from '../components/ui';

showToast('Message de notification');
```

### Copy to Clipboard
```typescript
import { copyToClipboard } from '../components/ui';

<button onclick="copyToClipboard('text-to-copy')">Copier</button>
```

---

## Grid layouts disponibles

Tous les grids utilisent `grid-template-columns: repeat(auto-fit, minmax(Xpx, 1fr))` pour responsive:

- `.projects-grid` : minmax(300px, 1fr)
- `.skills-column` : minmax(200px, 1fr)
- `.contact-cards` : minmax(250px, 1fr)
- `.timeline-detailed` : flex-direction column
- `.download-card` : minmax(280px, 1fr)

---

## Media queries

Breakpoint mobile : **768px**

```css
@media (max-width: 768px) {
  .navbar-menu {
    /* Menu mobile */
  }
  
  .btn {
    width: 100%;  /* Boutons pleine largeur */
  }
}
```

---

## Icônes utilisées

Utiliser des emojis unicode directement dans le texte:
- 📋 Documents
- 🎯 Objectifs
- 🔐 Sécurité
- 💻 Code
- 🌐 Réseaux
- 🖥️ Systèmes
- 📚 Formation
- 🚀 Projets
- etc.

---

## Déployer

### Option 1 : Vercel (recommandé)
```bash
npm install -g vercel
vercel
# Follow prompts
```

### Option 2 : Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option 3 : GitHub Pages
```bash
npm run build
# Commiter et pusher sur main branch
# Activer Pages dans settings repo
```

---

## Build production

```bash
npm run build          # Crée dossier dist/
npm run preview        # Prévisualiser build
```

---

## Débogage

### Erreur CSS "Unexpected }"
**Solution** : Vérifier la syntaxe CSS, les accolades fermeture

### Page blanche après navigation
**Cause** : Erreur JavaScript console
**Solution** : 
```bash
# F12 ouvrir console navigateur, chercher erreur
npm run dev  # Vérifier logs du serveur
```

### Accordéons ne s'ouvrent pas
**Cause** : `initAccordions()` pas appelé après page load
**Solution** : Vérifier `src/main.ts` - setTimeout et hashchange listener

### Boutons "copier" ne fonctionnent pas
**Cause** : `getAttribute('data-copy')` retourne null
**Solution** : Ajouter check null dans la fonction

---

## Checkliste avant déploiement

- [ ] Tous les liens fonctionnent (npm run dev)
- [ ] TypeScript sans erreurs (`npm run build`)
- [ ] Pages responsive (tester mobile @768px)
- [ ] Accordéons ouvrent/ferment
- [ ] Boutons copier fonctionnent
- [ ] Styles cohérents (palette colors OK)
- [ ] Images chargent (`/public/assets/img/`)
- [ ] Contactez infos à jour (email, tel)
- [ ] CV/docs à jour (`/public/assets/docs/`)

---

## Contacts utiles

**Email** : chamsabbassi78@gmail.com  
**Tel** : +33 06 09 69 57 34  
**LinkedIn** : https://linkedin.com/in/doha-abbassi  
**GitHub** : https://github.com/doha-abbassi

---

**Bon développement! 🚀**
