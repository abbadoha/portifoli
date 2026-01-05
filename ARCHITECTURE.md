# 🗺️ Architecture du portfolio BTS SIO SISR

## Diagramme général

```
┌─────────────────────────────────────────────────────────────────┐
│                      Browser (localhost:5174)                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                   Header#main-navbar                      │  │
│  │ [Logo] [Home] [Parcours] [Stages] [Skills] [...] [☰]    │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    Main#page (SPA)                        │  │
│  │                                                           │  │
│  │  [Hero]                                                  │  │
│  │  [Content Glass Cards]                                  │  │
│  │  [Grids / Accordions / Forms]                           │  │
│  │  [CTA Buttons]                                          │  │
│  │                                                           │  │
│  │  Animation: fadeIn 0.4s                                 │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              Footer#main-footer                          │  │
│  │   © 2025 ABBASSI DOHA | [Contact] [Légal]              │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Flux navigation

```
user clicks /#/skills
         ↓
hashchange event
         ↓
getRoute('/skills') finds Skills page
         ↓
renderPage() executes Skills()
         ↓
main#page.innerHTML = page HTML
         ↓
Fade-in animation (0.4s)
         ↓
updateNavbar() highlights .active nav-link
         ↓
window.scrollTo(top)
         ↓
initAccordions() attach click listeners
         ↓
page fully displayed
```

---

## Flux copy to clipboard

```
user clicks [📋 Copier email]
         ↓
onclick: (e) => {
  const text = getAttribute('data-copy')
  if (text) {
    copyToClipboard(text)
    showToast('Copié ✓')
  }
}
         ↓
copyToClipboard(text) {
  navigator.clipboard.writeText(text)
  showToast('Copié !')
}
         ↓
showToast(msg) {
  toast.textContent = msg
  toast.style.display = 'block'
  setTimeout(() => hide, 1200ms)
}
         ↓
Toast visible 1.2s then fade out
Text in clipboard ✓
```

---

## Arborescence fichiers

```
portifoli/
│
├── src/
│   ├── main.ts                    [App init + router setup]
│   ├── main.css                   [~1800 lignes design system]
│   │
│   ├── app/
│   │   ├── router.ts              [Hash router SPA]
│   │   └── state.ts               [Global state user data]
│   │
│   ├── components/
│   │   ├── ui.ts                  [7+ composants réutilisables]
│   │   ├── navbar.ts              [Navigation sticky + burger]
│   │   └── footer.ts              [Footer]
│   │
│   └── pages/                     [12 pages implémentées]
│       ├── home.ts                [Accueil 8 sections]
│       ├── parcours.ts            [Timeline + highlights]
│       ├── stages.ts              [Stage détaillé]
│       ├── skills.ts              [Matrice compétences]
│       ├── projects.ts            [6 projets]
│       ├── watch.ts               [Veille 5G]
│       ├── bts-sio.ts             [Explication BTS]
│       ├── exams.ts               [Guide jury]
│       ├── downloads.ts           [CV + docs]
│       ├── contact.ts             [Contact rapide]
│       ├── legal.ts               [Mentions légales]
│       └── notfound.ts            [404 stylé]
│
├── public/
│   └── assets/
│       ├── docs/                  [CV, rapports, attestations]
│       └── img/                   [Images, screenshots, favicon]
│
├── index.html                     [Minimal entry point]
├── vite.config.ts                 [Build config]
├── tsconfig.json                  [TS strict mode]
├── package.json                   [Dépendances]
│
└── Documentation/
    ├── IMPLEMENTATION_SUMMARY.md   [Détails chaque page]
    ├── MAINTENANCE_GUIDE.md        [Guide entretien]
    ├── DESIGN_OVERVIEW.md          [Aperçu visuel]
    ├── CHECKLIST.md                [Vérification complète]
    └── README_FINAL.md             [Résumé final]
```

---

## Routeur SPA

```
route table:
  /home       → Home page
  /parcours   → Parcours page
  /stages     → Stages page
  /skills     → Skills page
  /projects   → Projects page
  /watch      → Watch/Veille page
  /bts-sio    → BTS SIO page
  /exams      → Exams page
  /downloads  → Downloads page
  /contact    → Contact page
  /legal      → Legal page
  /404        → 404 page (default)

hash listener: window.addEventListener('hashchange', renderPage)

renderPage flow:
  1. read window.location.hash
  2. find matching route
  3. get route.render() function
  4. execute render() → HTML string
  5. set main#page.innerHTML = html
  6. trigger fade-in animation
  7. updateNavbar() active state
  8. scroll top smooth
  9. initAccordions() setup listeners
```

---

## Structure composant réutilisable

```
// Chaque page suit ce pattern:

export default function PageName() {
  return `
    <section class="page-hero">
      <h1>Titre</h1>
      <p>Sous-titre</p>
    </section>
    
    <section class="page-content glass">
      <h2>Section 1</h2>
      <p>Contenu avec chips, cards, grids...</p>
    </section>
    
    <section class="page-content glass">
      <h2>Section 2</h2>
      <div class="grid">
        ${Component({...})}
        ${Component({...})}
      </div>
    </section>
    
    <section class="page-cta glass">
      <h3>Call-to-action</h3>
      <a href="/#/autre-page" class="btn btn-primary">Lien</a>
    </section>
  `;
}

CSS classes:
  .page-hero      → Hero section (titre, sous-titre)
  .page-content   → Contenu glass card
  .glass          → Glassmorphism background + blur
  .btn btn-*      → Button variantes
  .grid           → Grid auto-fit responsive
  .accordion      → Accordéon dépliable
  .chip           → Tag petit
```

---

## Système design CSS

```
:root {
  --color-bg: #1a1333;              /* Fond principal */
  --color-primary: #a259ff;         /* Violet */
  --color-secondary: #5d5fef;       /* Indigo */
  --color-accent: #ff61d2;          /* Rose */
  --color-overlay: rgba(20,16,32,0.7);
  --color-overlay-strong: rgba(20,16,32,0.85);
  --color-text: #f3f3fa;            /* Texte principal */
  --color-text-secondary: #d0d0dd;  /* Texte secondaire */
  --glass-blur: 18px;               /* Glassmorphism blur */
  --transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}

body {
  background: var(--color-bg) url('/ambient.gif') center/cover no-repeat fixed;
  background-attachment: fixed;
}

body::before {
  background: linear-gradient(120deg, var(--color-primary), var(--color-accent));
  opacity: 0.12;  /* Subtle overlay gradient */
}

.glass {
  background: var(--color-overlay);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 1.2rem;
  box-shadow: 0 4px 32px 0 rgba(93,95,239,0.15);
  transition: var(--transition);
}

.glass:hover {
  border-color: rgba(255,255,255,0.15);
  box-shadow: 0 8px 48px var(--color-accent), 0 4px 32px rgba(93,95,239,0.2);
  transform: translateY(-2px);
}
```

---

## Responsive breakpoints

```
Desktop (1920px+)
├── Full width layout
├── 3-4 column grids
├── Navbar horizontal
└── All content visible

Tablet (1024px)
├── 2-3 column grids
├── Navbar horizontal
└── Slightly reduced font sizes

Mobile (768px)
├── 1 column grids (auto-fit)
├── Navbar burger menu (hidden by default)
├── Buttons full width
├── Smaller fonts
└── Reduced padding

Small mobile (375px)
├── Single column
├── Compact spacing
├── Small text
└── Touch-friendly buttons (min 44px)
```

---

## Performance optimization

```
TypeScript:
  ✓ Vanilla TS, no heavy libraries
  ✓ Strict mode (catches errors early)
  ✓ Tree-shakeable imports
  ✓ ~150 lines per page (average)

CSS:
  ✓ CSS variables (easy theming)
  ✓ No @import (single file)
  ✓ Minified on build
  ✓ ~1800 lines clean code

Build:
  ✓ Vite development (HMR, fast reload)
  ✓ Production bundle optimization
  ✓ No external dependencies (zero NPM risk)
  ✓ ~50KB total bundle size

UX:
  ✓ Lazy accordion initialization
  ✓ Smooth scroll-to-top
  ✓ Fade-in page animation (0.4s)
  ✓ No layout shifts (stable dimensions)
```

---

## Data flow

```
User Input
    ↓
Event Listener (click, hashchange, etc.)
    ↓
JavaScript Handler
    ↓
DOM Update (innerHTML, classList, style)
    ↓
CSS Animation (fade-in, hover, etc.)
    ↓
Visual Feedback to User

Example: copy email button
  Input: Click "Copier email"
  → Handler: getAttribute('data-copy')
  → Function: navigator.clipboard.writeText(text)
  → DOM: showToast(msg)
  → CSS: Toast fade-in + auto-hide (1.2s)
  → Result: "Copié! ✓" toast visible 1.2s
```

---

## Accessibilité WCAG AA

```
Colors:
  ✓ Contrast ratio > 4.5:1 (normal text)
  ✓ Violet (#a259ff) vs Dark bg sufficient
  ✓ Rose (#ff61d2) vs Dark bg sufficient

Focus:
  ✓ :focus-visible outline on all buttons
  ✓ Tab navigation working
  ✓ Focus trap (Esc closes burger menu)

ARIA:
  ✓ aria-labels on buttons
  ✓ aria-expanded on accordions (true/false)
  ✓ role="tablist" on tabs
  ✓ Semantic HTML (nav, header, main, footer)

Motion:
  ✓ prefers-reduced-motion respected
  ✓ All animations disable if user preference set
  ✓ Still fully functional without animations

Text:
  ✓ Readable font sizes (>16px mobile)
  ✓ Line height 1.6 (readable spacing)
  ✓ No text-only color (icons + emoji + text)
```

---

**Portfolio architecture claire et optimisée! 🏗️**
