// src/pages/parcours.ts
// Page parcours détaillé avec timeline + cartes

type JourneyStep = {
  key: string;
  label: string;
  period: string;
  title: string;
  meta: string;
  context: string;
  image: string;
  alt: string;
  did: string[];
  developed: string[];
  link?: string;
  linkLabel?: string;
};

type HighlightEntry = {
  key: string;
  image: string;
  alt: string;
  label: string;
  title: string;
  text: string;
};

export default function Parcours() {
  const steps: JourneyStep[] = [
    {
      key: 'debut-bts',
      label: 'Début BTS',
      period: 'Septembre 2024',
      title: 'Début de formation en BTS SIO SISR',
      meta: 'Lycée Jean Vilar, Plaisir · Premières bases techniques',
      context: 'Je découvre les fondamentaux de la spécialité et je mets en place une méthode de travail régulière.',
      image: '/assets/img/bts_it.png',
      alt: 'Illustration BTS SIO et environnement informatique',
      did: [
        'Découverte des bases systèmes, réseaux et cybersécurité',
        'Premiers TP sur Windows Server, Linux et les services réseau',
        'Organisation du travail: tests, comptes rendus et suivi des exercices'
      ],
      developed: [
        'Comprendre le rôle d’un profil SISR dans un SI',
        'Vérifier une configuration avant validation',
        'Prendre des habitudes de travail plus rigoureuses'
      ]
    },
    {
      key: 'stage',
      label: 'Stage',
      period: 'Mai – Juin 2025',
      title: 'Stage DSI — Mairie de Trappes',
      meta: 'Stage en environnement informatique — support, systèmes et gestion du parc',
      context: 'Stage au sein de la Direction des Systèmes d’Information de la mairie de Trappes. Intervention dans un environnement réel avec des utilisateurs, un parc informatique et des postes à maintenir.',
      image: '/assets/img/stage_it.png',
      alt: 'Illustration de stage en environnement informatique',
      did: [
        'Support utilisateurs (diagnostic, dépannage, assistance)',
        'Gestion des comptes et droits d’accès',
        'Installation et configuration de postes (Windows)',
        'Intervention sur le matériel (mini PC, périphériques)',
        'Suivi du parc informatique et maintenance de base'
      ],
      developed: [
        'Appliquer une méthode de diagnostic simple',
        'Comprendre les besoins utilisateurs',
        'Travailler dans un environnement professionnel structuré',
        'Respecter les procédures et la sécurité des accès',
        'Gagner en autonomie et en rigueur'
      ],
      link: '/#/stages',
      linkLabel: 'Voir le stage détaillé'
    },
    {
      key: 'stage-it',
      label: 'Stage IT',
      period: 'Janvier – Mars 2026',
      title: 'Stage informatique — environnement systèmes et réseau',
      meta: 'Stage orienté administration systèmes, réseau et sécurité',
      context: 'Stage réalisé en environnement informatique avec des missions orientées systèmes, réseau et bonnes pratiques de sécurité. Travail sur des postes, services et configurations techniques.',
      image: '/assets/img/video_it.png',
      alt: 'Illustration stage informatique orienté systèmes et réseau',
      did: [
        'Configuration de postes et services informatiques',
        'Participation à des tâches d’administration systèmes',
        'Manipulation d’environnements réseau simples',
        'Vérification de configurations et tests',
        'Application de bonnes pratiques de sécurité'
      ],
      developed: [
        'Approfondir la configuration des systèmes',
        'Comprendre l’impact des réglages réseau',
        'Appliquer des notions de sécurité concrètes',
        'Structurer une intervention technique',
        'Gagner en autonomie sur des tâches techniques'
      ],
      link: '/#/stages',
      linkLabel: 'Voir le stage détaillé'
    },
    {
      key: 'certification',
      label: 'Certification',
      period: '2025',
      title: 'Certification SecNumacadémie',
      meta: 'ANSSI · Sensibilisation aux risques numériques',
      context: 'Cette étape me sensibilise aux menaces courantes et aux bonnes pratiques de sécurité au quotidien.',
      image: '/assets/img/anci.png',
      alt: 'Illustration cybersécurité et bonnes pratiques ANSSI',
      did: [
        'Suivi complet du parcours de sensibilisation de l’ANSSI',
        'Révision des menaces courantes (phishing, mots de passe, usages)',
        'Mise en pratique de règles simples d’hygiène informatique'
      ],
      developed: [
        'Repérer plus vite les situations à risque',
        'Appliquer des réflexes de prévention au quotidien',
        'Mieux expliquer les bonnes pratiques autour de moi'
      ]
    },
    {
      key: 'projection',
      label: 'Projection',
      period: 'Juin 2026',
      title: 'Bilan de fin de BTS',
      meta: 'Soutenance · Portfolio · Recherche d’alternance',
      context: 'Cette étape correspond à la préparation de la soutenance et à l’organisation de mes preuves.',
      image: '/assets/img/goal.png',
      alt: 'Illustration objectif professionnel et projection BTS SIO',
      did: [
        'Tri et organisation des productions dans le portfolio',
        'Sélection d’exemples pour présenter mes acquis',
        'Préparation du support et de la prise de parole pour la soutenance'
      ],
      developed: [
        'Expliquer mes choix plus simplement à l’oral',
        'Relier mes réalisations aux compétences du BTS',
        'Préciser mon projet d’alternance en systèmes et réseaux'
      ],
      link: '/#/exams',
      linkLabel: 'Voir la préparation de la soutenance'
    }
  ];

  const highlights: HighlightEntry[] = [
    {
      key: 'systemes',
      image: '/assets/img/rack_it.png',
      alt: 'Icône systèmes',
      label: 'Systèmes',
      title: 'Suivi d’un environnement poste/serveur',
      text: 'Je configure plus facilement un poste ou un serveur et je suis mieux leur état au quotidien.'
    },
    {
      key: 'reseaux',
      image: '/assets/img/rez_it.png',
      alt: 'Icône réseau',
      label: 'Réseaux',
      title: 'Lecture d’un réseau',
      text: 'Je comprends mieux l’organisation d’un réseau et le rôle des services principaux.'
    },
    {
      key: 'securite',
      image: '/assets/img/cad_it.png',
      alt: 'Icône sécurité',
      label: 'Sécurité',
      title: 'Réflexes de sécurité',
      text: 'J’applique des gestes simples pour limiter les risques numériques les plus courants.'
    },
    {
      key: 'polyvalence',
      image: '/assets/img/poly_it.png',
      alt: 'Icône expérience systèmes et support',
      label: 'Systèmes / Support / Réseau',
      title: 'Expérience systèmes & support',
      text: 'Suivi d’un environnement poste et utilisateur en conditions réelles. Interventions sur des postes, gestion des accès et support quotidien.'
    }
  ];

  const renderList = (items: string[]) => items.map((item) => `<li>${item}</li>`).join('');

  const renderStepTab = (entry: JourneyStep, index: number) => `
    <button
      class="tab-btn journey-tab ${index === 0 ? 'active' : ''}"
      type="button"
      role="tab"
      aria-selected="${index === 0 ? 'true' : 'false'}"
      data-tabs="parcours-viewer"
      data-tab-key="${entry.key}"
    >
      <span class="journey-tab-label">${entry.label}</span>
      <span class="journey-tab-date">${entry.period}</span>
    </button>
  `;

  const renderStepPanel = (entry: JourneyStep, index: number) => `
    <article
      class="journey-panel ${index === 0 ? 'active' : ''}"
      role="tabpanel"
      data-tab-panel="parcours-viewer"
      data-tab-key="${entry.key}"
      ${index === 0 ? '' : 'hidden'}
    >
      <header class="journey-panel-head">
        <span class="journey-period">${entry.period}</span>
        <h3>${entry.title}</h3>
        <p class="journey-meta">${entry.meta}</p>
      </header>
      <div class="journey-panel-body">
        <figure class="journey-illustration">
          <img src="${entry.image}" alt="${entry.alt}" loading="lazy" />
        </figure>
        <div class="journey-copy">
          <div class="journey-context">
            <span>Contexte</span>
            <p>${entry.context}</p>
          </div>
          <div class="journey-columns">
            <div class="journey-column">
              <h4>Ce que j’ai fait</h4>
              <ul class="journey-list">${renderList(entry.did)}</ul>
            </div>
            <div class="journey-column">
              <h4>Ce que j’ai appris</h4>
              <ul class="journey-list">${renderList(entry.developed)}</ul>
            </div>
          </div>
          ${entry.link && entry.linkLabel ? `<a href="${entry.link}" class="journey-link">${entry.linkLabel}</a>` : ''}
        </div>
      </div>
    </article>
  `;

  const renderHighlightTab = (entry: HighlightEntry, index: number) => `
    <button
      class="tab-btn synthesis-tab ${index === 0 ? 'active' : ''}"
      type="button"
      role="tab"
      aria-selected="${index === 0 ? 'true' : 'false'}"
      data-tabs="parcours-synthesis"
      data-tab-key="${entry.key}"
    >
      ${entry.label}
    </button>
  `;

  const renderHighlightPanel = (entry: HighlightEntry, index: number) => `
    <article
      class="highlight-card synthesis-panel ${index === 0 ? 'active' : ''}"
      role="tabpanel"
      data-tab-panel="parcours-synthesis"
      data-tab-key="${entry.key}"
      ${index === 0 ? '' : 'hidden'}
    >
      <span class="highlight-icon-wrap">
        <img src="${entry.image}" alt="${entry.alt}" class="highlight-icon" loading="lazy" />
      </span>
      <span class="highlight-tag">${entry.label}</span>
      <strong>${entry.title}</strong>
      <p>${entry.text}</p>
      <span class="synthesis-keyline" aria-hidden="true"></span>
    </article>
  `;

  return `
<div class="parcours-page">
  <section class="page-hero parcours-hero reveal">
    <span class="parcours-kicker">BTS SIO SISR · 2024-2026</span>
    <h1>Mon parcours</h1>
    <span class="parcours-hero-line" aria-hidden="true"></span>
    <p class="parcours-hero-subtitle">Cette page présente les étapes principales de ma formation.</p>
    <p class="parcours-hero-note">J’y résume ce que j’ai découvert, pratiqué et appris, jusqu’à la préparation de la soutenance et de l’alternance.</p>
  </section>

  <section class="parcours-main-grid reveal">
    <section class="page-content glass parcours-viewer-section">
      <div class="parcours-section-head">
        <h2>Parcours interactif</h2>
        <p>Utilisez les onglets pour passer d’une étape à l’autre sans allonger la page.</p>
      </div>
      <div class="journey-viewer tabs" role="tablist" aria-label="Navigation des étapes du parcours">
        <div class="journey-tabs-row">
          ${steps.map(renderStepTab).join('')}
        </div>
        <div class="journey-panels-wrap">
          ${steps.map(renderStepPanel).join('')}
        </div>
      </div>
    </section>

    <section class="glass parcours-summary">
      <div class="parcours-section-head">
        <h2>Repères renforcés</h2>
        <p>Quatre points concrets que j’ai travaillés pendant ce parcours.</p>
      </div>
      <div class="synthesis-viewer tabs">
        <div class="synthesis-tabs-row" role="tablist" aria-label="Synthèse des apports">
          ${highlights.map(renderHighlightTab).join('')}
        </div>
        <div class="synthesis-panels-wrap">
          ${highlights.map(renderHighlightPanel).join('')}
        </div>
      </div>
    </section>
  </section>

  <section class="page-cta glass parcours-cta reveal">
    <span class="parcours-cta-kicker">Suite du portfolio</span>
    <h3>Voir les pages liées à ce parcours</h3>
    <p>La suite du site permet de consulter mes compétences, le détail du stage et mes projets.</p>
    <div class="parcours-cta-actions">
      <a href="/#/skills" class="btn btn-primary parcours-cta-btn">Voir mes compétences</a>
      <a href="/#/stages" class="btn btn-outline parcours-cta-btn parcours-cta-btn-secondary">Voir le stage détaillé</a>
    </div>
    <div class="parcours-cta-links" aria-label="Liens utiles">
      <span>Compétences · niveaux, outils et méthodes</span>
      <span>Stage · missions, contexte et réalisations</span>
      <span>Projets · exemples techniques réalisés</span>
    </div>
  </section>
</div>
  `;
}
