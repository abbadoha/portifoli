// src/pages/exams.ts
// Page guide épreuves examen BTS

export default function Exams() {
  return `
<section class="e5-page">
  <section class="page-hero e5-hero">
    <div class="e5-hero-grid">
      <div class="e5-hero-copy">
        <span class="e5-badge">BTS SIO SISR</span>
        <h1>Épreuve E6</h1>
        <p>Situations professionnelles, projets, compétences mobilisées et preuves associées pendant ma formation BTS SIO SISR.</p>
        <p>Cette page présente les situations professionnelles, projets et compétences que je peux mobiliser dans le cadre de l’épreuve E6.</p>
        <div class="e5-pill-row" aria-label="Axes E6">
          <span>Situations professionnelles</span>
          <span>Compétences mobilisées</span>
          <span>Documents / preuves</span>
        </div>
      </div>
      <div class="e5-hero-visual" aria-hidden="true">
        <img src="/assets/img/documentation.png" alt="Illustration dossier et soutenance E6" loading="lazy" />
      </div>
    </div>
  </section>

  <section class="page-content glass">
    <h2>Comprendre l’épreuve E6</h2>
    <p>L’E6 évalue des situations professionnelles en lien avec l’option SISR. La présentation attend des contextes réels ou cohérents, des actions clairement expliquées, des compétences identifiées et des preuves associées. L’objectif est de rester structuré, concret et justifié devant le jury.</p>
    <div class="e5-mini-grid">
      <article class="e5-card">
        <h3>Situations analysées</h3>
        <p>Contexte, besoin, intervention et résultat observé.</p>
      </article>
      <article class="e5-card">
        <h3>Compétences démontrées</h3>
        <p>Compétences techniques et méthodologiques liées à chaque cas.</p>
      </article>
      <article class="e5-card">
        <h3>Documents justificatifs</h3>
        <p>Preuves claires pour appuyer chaque action présentée.</p>
      </article>
    </div>
  </section>

  <section class="page-content glass">
    <h2>Mes contextes retenus pour l’E6</h2>
    <div class="e5-context-grid">
      <article class="e5-card e5-context-card">
        <header>
          <h3>Stage en DSI — Mairie de Trappes</h3>
          <span class="e5-type">Stage</span>
        </header>
        <p>Support utilisateurs et interventions sur le parc, les comptes et l’infrastructure locale.</p>
        <p><strong>Environnement technique :</strong> Windows, Active Directory, réseau interne, parc mini-PC.</p>
        <p><strong>Compétences mobilisées :</strong> support, droits d’accès, déploiement, suivi des incidents.</p>
        <div class="e5-actions">
          <a href="/#/stages" class="btn btn-primary">Voir le détail</a>
          <a href="/#/documentation" class="e5-btn-secondary">Voir les preuves</a>
        </div>
      </article>

      <article class="e5-card e5-context-card">
        <header>
          <h3>Projet GSB</h3>
          <span class="e5-type">Projet</span>
        </header>
        <p>Mise en place d’une infrastructure structurée avec services et documentation d’exploitation.</p>
        <p><strong>Environnement technique :</strong> serveurs, services réseau, architecture segmentée.</p>
        <p><strong>Compétences mobilisées :</strong> déploiement, configuration, documentation, supervision.</p>
        <div class="e5-actions">
          <a href="/#/projects" class="btn btn-primary">Voir le détail</a>
          <a href="/#/documentation" class="e5-btn-secondary">Voir les preuves</a>
        </div>
      </article>

      <article class="e5-card e5-context-card">
        <header>
          <h3>Projet Soccer78</h3>
          <span class="e5-type">Projet</span>
        </header>
        <p>Conception d’une infrastructure réseau orientée segmentation et sécurité.</p>
        <p><strong>Environnement technique :</strong> pfSense, switch Aruba, plan d’adressage, VLAN.</p>
        <p><strong>Compétences mobilisées :</strong> architecture réseau, sécurité, paramétrage, tests.</p>
        <div class="e5-actions">
          <a href="/#/projects" class="btn btn-primary">Voir le détail</a>
          <a href="/#/documentation" class="e5-btn-secondary">Voir les preuves</a>
        </div>
      </article>

      <article class="e5-card e5-context-card">
        <header>
          <h3>Contexte technique complémentaire</h3>
          <span class="e5-type">Situation</span>
        </header>
        <p>Laboratoire SISR avec administration systèmes et services réseau en environnement de test.</p>
        <p><strong>Environnement technique :</strong> Windows Server, Linux, virtualisation, DNS/DHCP.</p>
        <p><strong>Compétences mobilisées :</strong> administration, sécurisation, diagnostic, documentation.</p>
        <div class="e5-actions">
          <a href="/#/projects" class="btn btn-primary">Voir le détail</a>
          <a href="/#/documentation" class="e5-btn-secondary">Voir les preuves</a>
        </div>
      </article>
    </div>
  </section>

  <section class="page-content glass">
    <h2>Compétences mobilisées</h2>
    <div class="e5-skill-grid">
      <article class="e5-card e5-skill-card">
        <h3>Administrer les systèmes et les réseaux</h3>
        <p>Mise en service, configuration et maintien en condition opérationnelle.</p>
        <div class="e5-tag-row"><span>Windows Server</span><span>Linux</span><span>Réseau</span></div>
        <small>Stage DSI, GSB, Soccer78</small>
      </article>
      <article class="e5-card e5-skill-card">
        <h3>Assister les utilisateurs et traiter les incidents</h3>
        <p>Prise en charge des demandes, diagnostic et résolution avec suivi.</p>
        <div class="e5-tag-row"><span>Support</span><span>Incidents</span><span>Parc</span></div>
        <small>Stage DSI</small>
      </article>
      <article class="e5-card e5-skill-card">
        <h3>Déployer et configurer des équipements / services</h3>
        <p>Déploiement de services et paramétrage des composants techniques.</p>
        <div class="e5-tag-row"><span>Déploiement</span><span>Services</span><span>Configuration</span></div>
        <small>GSB, Contexte complémentaire</small>
      </article>
      <article class="e5-card e5-skill-card">
        <h3>Sécuriser les accès, postes et services</h3>
        <p>Application de mesures de sécurité adaptées au contexte technique.</p>
        <div class="e5-tag-row"><span>Sécurité</span><span>pfSense</span><span>Accès</span></div>
        <small>Soccer78, Stage DSI</small>
      </article>
      <article class="e5-card e5-skill-card">
        <h3>Documenter, suivre et expliquer une intervention</h3>
        <p>Production de preuves, compte-rendus et explications structurées.</p>
        <div class="e5-tag-row"><span>Documentation</span><span>Suivi</span><span>Méthode</span></div>
        <small>Tous les contextes</small>
      </article>
    </div>
  </section>

  <section class="page-content glass">
    <h2>Correspondance entre situations et compétences</h2>
    <div class="e5-table-wrap">
      <table class="e5-table">
        <thead>
          <tr>
            <th>Situation</th>
            <th>Contexte technique</th>
            <th>Actions réalisées</th>
            <th>Compétences mobilisées</th>
            <th>Preuves</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stage DSI</td>
            <td>AD, parc, réseau local</td>
            <td>Support, gestion comptes, interventions poste</td>
            <td>Administration, assistance, documentation</td>
            <td>Rapport, fiches, captures</td>
          </tr>
          <tr>
            <td>GSB</td>
            <td>Infrastructure et services</td>
            <td>Déploiement, configuration, tests</td>
            <td>Déploiement, réseau, suivi</td>
            <td>Schémas, procédures, synthèse</td>
          </tr>
          <tr>
            <td>Soccer78</td>
            <td>pfSense, Aruba, VLAN</td>
            <td>Segmentation, adressage, sécurisation</td>
            <td>Réseau, sécurité, justification</td>
            <td>Plans, config, compte-rendu</td>
          </tr>
          <tr>
            <td>Contexte complémentaire</td>
            <td>Lab Windows/Linux</td>
            <td>Services, scripts, supervision</td>
            <td>Administration, tests, documentation</td>
            <td>Annexes techniques</td>
          </tr>
        </tbody>
      </table>
    </div>

    <article class="e5-card e5-synthesis-card">
      <header>
        <h3>Tableau de synthèse E6</h3>
      </header>
      <p class="e5-synthesis-subtitle">Document obligatoire de l’épreuve</p>
      <div class="e5-doc-preview-wrap" aria-label="Aperçu du tableau de synthèse E6">
        <iframe src="/assets/docs/pro.pdf" title="Aperçu du document pro.pdf" loading="lazy" class="e5-doc-preview-frame"></iframe>
      </div>
      <p>Ce document regroupe les situations professionnelles et les compétences associées.</p>
      <div class="e5-actions">
        <a href="/assets/docs/pro.pdf" target="_blank" rel="noreferrer" class="btn btn-primary">Consulter</a>
        <a href="/assets/docs/pro.pdf" download class="e5-btn-secondary">Télécharger</a>
      </div>
    </article>
  </section>

  <section class="page-content glass">
    <h2>Documents et preuves associés</h2>

    <div class="accordion" id="e5-doc-fiches">
      <button class="accordion-trigger" data-accordion="e5-doc-fiches">
        Fiches / situations professionnelles
        <span class="accordion-icon">+</span>
      </button>
      <div class="accordion-content e5-doc-list">
        <article class="e5-doc-row"><div><strong>Fiche situation – Stage DSI</strong><small>Type : fiche</small></div><div class="e5-doc-actions"><a href="/#/documentation">Consulter</a><a href="/#/documentation">Télécharger</a></div></article>
        <article class="e5-doc-row"><div><strong>Fiche situation – Soccer78</strong><small>Type : fiche</small></div><div class="e5-doc-actions"><a href="/#/documentation">Consulter</a><a href="/#/documentation">Télécharger</a></div></article>
      </div>
    </div>

    <div class="accordion" id="e5-doc-rapports">
      <button class="accordion-trigger" data-accordion="e5-doc-rapports">
        Rapports / comptes rendus
        <span class="accordion-icon">+</span>
      </button>
      <div class="accordion-content e5-doc-list">
        <article class="e5-doc-row"><div><strong>Rapport de stage</strong><small>Type : rapport</small></div><div class="e5-doc-actions"><a href="/#/documentation">Consulter</a><a href="/#/documentation">Télécharger</a></div></article>
        <article class="e5-doc-row"><div><strong>Compte rendu technique GSB</strong><small>Type : compte rendu</small></div><div class="e5-doc-actions"><a href="/#/documentation">Consulter</a><a href="/#/documentation">Télécharger</a></div></article>
      </div>
    </div>

    <div class="accordion" id="e5-doc-conventions">
      <button class="accordion-trigger" data-accordion="e5-doc-conventions">
        Conventions / attestations
        <span class="accordion-icon">+</span>
      </button>
      <div class="accordion-content e5-doc-list">
        <article class="e5-doc-row"><div><strong>Convention de stage</strong><small>Type : administratif</small></div><div class="e5-doc-actions"><a href="/#/documentation">Consulter</a><a href="/#/documentation">Télécharger</a></div></article>
        <article class="e5-doc-row"><div><strong>Attestation de stage</strong><small>Type : administratif</small></div><div class="e5-doc-actions"><a href="/#/documentation">Consulter</a><a href="/#/documentation">Télécharger</a></div></article>
      </div>
    </div>

    <div class="accordion" id="e5-doc-annexes">
      <button class="accordion-trigger" data-accordion="e5-doc-annexes">
        Annexes techniques
        <span class="accordion-icon">+</span>
      </button>
      <div class="accordion-content e5-doc-list">
        <article class="e5-doc-row"><div><strong>Schéma réseau Soccer78</strong><small>Type : annexe</small></div><div class="e5-doc-actions"><a href="/#/documentation">Consulter</a><a href="/#/documentation">Télécharger</a></div></article>
        <article class="e5-doc-row"><div><strong>Procédure de déploiement</strong><small>Type : annexe</small></div><div class="e5-doc-actions"><a href="/#/documentation">Consulter</a><a href="/#/documentation">Télécharger</a></div></article>
      </div>
    </div>

    <div class="accordion" id="e5-doc-grilles">
      <button class="accordion-trigger" data-accordion="e5-doc-grilles">
        Documents E6 / grilles / tableau de synthèse
        <span class="accordion-icon">+</span>
      </button>
      <div class="accordion-content e5-doc-list">
        <article class="e5-doc-row"><div><strong>Grille de compétences E6</strong><small>Type : E6</small></div><div class="e5-doc-actions"><a href="/#/documentation">Consulter</a><a href="/#/documentation">Télécharger</a></div></article>
      </div>
    </div>
  </section>

  <section class="page-cta glass e5-closing">
    <h2>Ce que cette épreuve montre de mon profil</h2>
    <p>Cette épreuve met en valeur ma progression dans des contextes concrets en support, systèmes, réseau et sécurité. Elle montre ma capacité à intervenir avec méthode, à relier la théorie à la pratique et à produire des preuves claires de mon travail.</p>
    <div class="e5-pill-row" aria-label="Points profil">
      <span>Méthode</span>
      <span>Progression</span>
      <span>Contexte réel</span>
    </div>
    <div class="e5-actions e5-closing-actions">
      <a href="/#/skills" class="btn btn-primary">Voir mes compétences</a>
      <a href="/#/projects" class="e5-btn-secondary">Voir mes projets</a>
      <a href="/#/documentation" class="e5-btn-secondary">Voir ma documentation</a>
    </div>
  </section>
</section>
  `;
}
