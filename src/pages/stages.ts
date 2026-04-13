// src/pages/stages.ts
// Refonte centralisee de la page stage

type StageStep = {
  key: string;
  title: string;
  image: string;
  imageAlt: string;
  badge: string;
  summary: string;
  bullets: string[];
  skill: string;
};

type StageGain = {
  icon: string;
  keyword: string;
  text: string;
};

const renderList = (items: string[]) => items.map((item) => `<li>${item}</li>`).join('');

export default function Stages() {
  const reportPdfUrl = `${import.meta.env.BASE_URL}docs/rapport_stage.pdf`;

  const stageSteps: StageStep[] = [
    {
      key: 'support',
      title: 'Support utilisateurs',
      image: '/assets/img/glpi.png',
      imageAlt: 'Illustration support utilisateurs et ticketing',
      badge: 'Support N1/N2',
      summary: 'J’ai gere les demandes avec un suivi clair et rapide.',
      bullets: [
        'Suivi des tickets dans GLPI',
        'Assistance a distance TeamViewer',
        'Support de niveau 1 et 2'
      ],
      skill: 'Communication et priorisation des incidents'
    },
    {
      key: 'access',
      title: 'Comptes et droits d’acces',
      image: '/assets/img/cad_it.png',
      imageAlt: 'Illustration comptes, droits et acces',
      badge: 'Securite',
      summary: 'J’ai controle les acces pour fiabiliser les permissions.',
      bullets: [
        'Cartographie des dossiers partages',
        'Lecture des droits NTFS/ACL',
        'Verification des acces par profil'
      ],
      skill: 'Lecture des permissions et rigueur de securite'
    },
    {
      key: 'network',
      title: 'Reseau et infrastructure',
      image: '/assets/img/network-map.png',
      imageAlt: 'Illustration reseau et infrastructure',
      badge: 'Infra',
      summary: 'J’ai suivi la structure reseau et les points critiques.',
      bullets: [
        'Lecture de la segmentation VLAN',
        'Observation des switches reseau',
        'Tests de connectivite sur le terrain'
      ],
      skill: 'Diagnostic reseau de premier niveau'
    },
    {
      key: 'fleet-deploy',
      title: 'Parc informatique et deploiement',
      image: '/assets/img/stage_it.png',
      imageAlt: 'Illustration parc informatique et deploiement',
      badge: 'Materiel',
      summary: 'J’ai prepare les postes et suivi le parc jusqu’a la remise en service.',
      bullets: [
        'Preparation des postes utilisateurs',
        'Mise a jour de l’inventaire',
        'Installation de mini-PC et tests finaux'
      ],
      skill: 'Organisation du parc et procedure de deploiement'
    }
  ];

  const stageGains: StageGain[] = [
    {
      icon: '/assets/img/troubleshooting.png',
      keyword: 'Methode',
      text: 'Je travaille avec plus de rigueur et de constance.'
    },
    {
      icon: '/assets/img/network-map.png',
      keyword: 'Vision du SI',
      text: 'Je comprends mieux le lien entre reseau, postes et utilisateurs.'
    },
    {
      icon: '/assets/img/work.png',
      keyword: 'Aisance pro',
      text: 'Je suis plus a l’aise en intervention et en echange terrain.'
    }
  ];

  const conventions = [
    {
      title: 'Convention de stage 2025',
      description: 'Document administratif encadrant la periode de stage realisee a la Mairie de Trappes.',
      period: 'Periode : mai - juillet 2025',
      icon: '/assets/img/anci.png',
      url: '/assets/docs/convention2025.pdf',
      downloadName: 'convention2025.pdf'
    },
    {
      title: 'Convention de stage 2026',
      description: 'Document administratif complementaire associe au parcours.',
      period: 'Periode : 2026',
      icon: '/assets/img/cad_it.png',
      url: '/assets/docs/convention2026.pdf',
      downloadName: 'convention2026.pdf'
    }
  ];

  return `
<div class="stages-page stages-redesign">
  <section class="page-hero stage-hero reveal" id="stage-top">
    <div class="stage-hero-copy">
      <p class="stage-kicker">BTS SIO SISR • Stage 2025</p>
      <h1>Stage en Direction des Systemes d’Information</h1>
      <p class="stage-hero-subtitle">Mairie de Trappes • 3 mois de support, systemes, reseau et environnement reel</p>
      <p class="stage-hero-context">Une immersion terrain en DSI municipale, au contact des utilisateurs, des postes, du reseau et des contraintes du service public.</p>
      <div class="stage-hero-badges" aria-label="Informations cles du stage">
        <span class="stage-badge">Mai - juillet 2025</span>
        <span class="stage-badge">DSI municipale</span>
        <span class="stage-badge">Support utilisateurs</span>
        <span class="stage-badge">Infrastructure reelle</span>
      </div>
      <div class="stage-hero-actions">
        <a href="#stage-report" class="btn btn-primary">Voir le rapport</a>
        <a href="/#/rapport-stage" class="btn btn-outline">Voir les missions</a>
      </div>
    </div>
    <figure class="stage-hero-visual">
      <img src="/assets/img/stage_it.png" alt="Illustration principale de stage" loading="lazy" />
    </figure>
  </section>

  <section class="page-content glass stage-report-window reveal" id="stage-report">
    <div class="stage-report-head">
      <div class="stage-report-title-wrap">
        <img src="/assets/img/documentation.png" alt="Icone document" class="stage-report-icon" loading="lazy" />
        <div>
          <h2>Rapport de stage</h2>
          <p>Document principal presentant le contexte, les missions, l’environnement technique et le bilan du stage.</p>
        </div>
      </div>
      <div class="stage-report-actions">
        <a href="#report-viewer" class="btn btn-secondary">Consulter le rapport</a>
        <a href="${reportPdfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Ouvrir le PDF</a>
        <a href="${reportPdfUrl}" download="rapport_stage.pdf" class="btn btn-primary">Telecharger</a>
      </div>
    </div>

    <details class="stage-report-viewer" id="report-viewer" open>
      <summary>
        <span>Apercu integre du rapport</span>
        <span class="stage-report-summary-hint">Ouvrir / fermer</span>
      </summary>
      <div class="stage-report-frame-wrap">
        <iframe src="${reportPdfUrl}" title="Apercu du rapport de stage" loading="lazy"></iframe>
        <p class="stage-report-note">Le rapport complet detaille le contexte, les missions, les outils observes et les competences developpees pendant le stage.</p>
      </div>
    </details>
  </section>

  <section class="page-content glass stage-overview-section reveal" id="stage-overview">
    <div class="stage-actions-head">
      <p class="stage-actions-kicker">Mon stage en actions</p>
      <h2>Parcours technique en 4 etapes</h2>
      <p class="stage-actions-intro">Une lecture rapide des missions, des actions et des acquis.</p>
    </div>

    <div class="stage-journey-shell tabs reveal" aria-label="Parcours vertical du stage">
      <div class="stage-journey-nav" role="tablist" aria-label="Etapes du stage">
        ${stageSteps
          .map(
            (step, index) => `
          <button
            type="button"
            class="tab-btn stage-journey-step-btn ${index === 0 ? 'active' : ''}"
            role="tab"
            aria-selected="${index === 0 ? 'true' : 'false'}"
            data-tabs="stage-journey"
            data-tab-key="${step.key}"
          >
            <span class="stage-journey-step-index">${String(index + 1).padStart(2, '0')}</span>
            <span class="stage-journey-step-copy">
              <strong>${step.title}</strong>
              <em>${step.badge}</em>
            </span>
          </button>
        `
          )
          .join('')}
      </div>

      <div class="stage-journey-panels">
        ${stageSteps
          .map(
            (step, index) => `
          <article
            class="stage-journey-panel ${index === 0 ? 'active' : ''}"
            role="tabpanel"
            data-tab-panel="stage-journey"
            data-tab-key="${step.key}"
            ${index === 0 ? '' : 'hidden'}
          >
            <span class="stage-journey-panel-orb" aria-hidden="true"></span>
            <figure class="stage-journey-media">
              <img src="${step.image}" alt="${step.imageAlt}" loading="lazy" />
            </figure>

            <div class="stage-journey-content">
              <div class="stage-journey-head">
                <h3>${step.title}</h3>
                <span class="stage-journey-badge">${step.badge}</span>
              </div>
              <p>${step.summary}</p>
              <ul>${renderList(step.bullets)}</ul>
              <div class="stage-journey-skill">
                <strong>Competence developpee</strong>
                <span>${step.skill}</span>
              </div>
            </div>
          </article>
        `
          )
          .join('')}
      </div>
    </div>

    <article class="stage-impact-block reveal">
      <h3>Ce que ce stage m’a apporte</h3>
      <div class="stage-impact-grid">
        ${stageGains
          .map(
            (gain) => `
          <article class="stage-impact-card">
            <img src="${gain.icon}" alt="Illustration ${gain.keyword}" loading="lazy" />
            <strong>${gain.keyword}</strong>
            <p>${gain.text}</p>
          </article>
        `
          )
          .join('')}
      </div>
    </article>
  </section>

  <section class="page-content glass stage-documents reveal" id="stage-proofs">
    <div class="stage-section-head">
      <h2>Documents administratifs</h2>
      <p>Acces rapide au rapport, aux conventions et aux informations d’encadrement.</p>
    </div>

    <article class="stage-doc-link-card">
      <div>
        <span class="doc-type-badge">PDF</span>
        <h3>Rapport de stage</h3>
      </div>
      <div class="stage-doc-actions no-border-top">
        <a href="${reportPdfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Consulter</a>
        <a href="${reportPdfUrl}" download="rapport_stage.pdf" class="btn btn-primary">Telecharger</a>
      </div>
    </article>

    <div class="stage-conventions-grid compact-conventions-grid">
      ${conventions
        .map(
          (convention) => `
        <article class="stage-convention-card">
          <div class="stage-convention-head">
            <img src="${convention.icon}" alt="Icone document" loading="lazy" />
            <span class="doc-type-badge">PDF</span>
          </div>
          <h4>${convention.title}</h4>
          <p>${convention.description}</p>
          <div class="stage-convention-meta">
            <span>${convention.period}</span>
          </div>
          <div class="stage-convention-actions">
            <a href="${convention.url}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Consulter</a>
            <a href="${convention.url}" class="btn btn-primary" download="${convention.downloadName}">Telecharger</a>
          </div>
        </article>
      `
        )
        .join('')}
    </div>

    <article class="stage-encadrement-card">
      <h3>Informations d’encadrement</h3>
      <div class="stage-references-grid compact-references-grid">
        <article class="stage-ref-item">
          <strong>Organisation</strong>
          <p>Mairie de Trappes - Direction des Systemes d’Information</p>
        </article>
        <article class="stage-ref-item">
          <strong>Periode</strong>
          <p>Mai - juillet 2025</p>
        </article>
        <article class="stage-ref-item">
          <strong>Encadrement</strong>
          <p>Disponible sur demande</p>
        </article>
        <article class="stage-ref-item stage-ref-item-wide">
          <strong>Missions principales</strong>
          <ul>
            <li>Support utilisateurs</li>
            <li>Analyse des droits d’acces</li>
            <li>Gestion du parc informatique</li>
            <li>Reseau et infrastructure</li>
            <li>Deploiement de mini-PC</li>
          </ul>
        </article>
        <article class="stage-ref-item stage-ref-item-wide">
          <strong>Competences validees</strong>
          <div class="stage-ref-skills">
            <span>Support utilisateur</span>
            <span>Administration Windows</span>
            <span>Reseau</span>
            <span>Diagnostic</span>
            <span>Communication professionnelle</span>
          </div>
        </article>
      </div>
    </article>
  </section>

  <section class="page-cta glass stage-final-cta reveal" id="stage-next">
    <h3>Poursuivre la decouverte</h3>
    <p>Ce stage complete mon profil en support, systemes et environnement reseau.</p>
    <div class="stage-final-actions">
      <a href="/#/skills" class="btn btn-primary">Voir mes competences</a>
      <a href="/#/parcours" class="btn btn-outline">Voir mon parcours</a>
      <a href="/#/documentation" class="btn btn-outline">Acceder a la documentation</a>
    </div>
  </section>
</div>
  `;
}
