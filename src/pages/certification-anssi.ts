// src/pages/certification-anssi.ts
// Page dédiée au certificat ANSSI avec viewer PDF intégré

export default function CertificationAnssi() {
  setTimeout(() => {
    setupCertificationAnssiInteractions();
  }, 100);

  return `
<section class="page-hero">
  <h1>🛡️ Certification ANSSI SecNumacadémie</h1>
  <p>Attestation de suivi — Formation cybersécurité reconnue</p>
  <div class="hero-meta">
    <span>📅 Janvier 2026</span>
    <span>🏢 ANSSI — Agence Nationale Cybersécurité</span>
    <span>✅ 4 modules validés</span>
  </div>
</section>

<section class="page-content glass certification-detail-section">
  <div class="certification-header">
    <div class="certification-info">
      <h2>📋 Détails de l'attestation</h2>
      <p><strong>Organisme :</strong> ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information)</p>
      <p><strong>Formation :</strong> SecNumacadémie — Sensibilisation à la cybersécurité</p>
      <p><strong>Titulaire :</strong> Doha ABBASSI</p>
      <p><strong>Date des évaluations :</strong> 05/01/2026</p>
      <p><strong>Date de l'attestation :</strong> 05/01/2026</p>
      <p><strong>Statut :</strong> <span class="status-badge status-valid">✅ Validée</span></p>
    </div>
    
    <div class="certification-actions">
      <a 
        href="/certifications/anssi-secnumacademie.pdf" 
        download="ABBASSI_DOHA_SecNumAcademie_ANSSI_2026.pdf"
        class="btn btn-primary"
        aria-label="Télécharger l'attestation ANSSI en PDF"
      >
        📥 Télécharger l'attestation
      </a>
      <button 
        id="toggle-fullscreen-cert-btn"
        class="btn btn-secondary"
        aria-label="Afficher l'attestation en plein écran"
      >
        🖥️ Plein écran
      </button>
      <a href="/#/certifications" class="btn btn-outline">
        ← Retour aux certifications
      </a>
    </div>
  </div>

  <div class="modules-scores-section">
    <h3>📊 Résultats par module</h3>
    <div class="scores-grid">
      <div class="score-card score-excellent">
        <div class="score-value">92%</div>
        <div class="score-label">Panorama de la SSI</div>
        <div class="score-desc">Vue d'ensemble sécurité SI, enjeux, acteurs, réglementation</div>
      </div>

      <div class="score-card score-good">
        <div class="score-value">82%</div>
        <div class="score-label">Sécurité de l'authentification</div>
        <div class="score-desc">Mécanismes authentification, gestion identités, IAM</div>
      </div>

      <div class="score-card score-excellent">
        <div class="score-value">94%</div>
        <div class="score-label">Sécurité sur Internet</div>
        <div class="score-desc">Protocoles sécurisés, HTTPS, VPN, menaces web</div>
      </div>

      <div class="score-card score-good">
        <div class="score-value">84%</div>
        <div class="score-label">Sécurité poste de travail & nomadisme</div>
        <div class="score-desc">Hardening postes, télétravail sécurisé, gestion accès distants</div>
      </div>
    </div>

    <div class="average-score">
      <strong>Score moyen :</strong> <span class="score-highlight">88%</span>
    </div>
  </div>

  <div class="certification-viewer-container">
    <div class="viewer-wrapper">
      <iframe 
        id="certification-pdf-viewer"
        src="/certifications/anssi-secnumacademie.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH"
        class="pdf-embed"
        title="Attestation SecNumacadémie ANSSI"
        loading="lazy"
      >
      </iframe>
      
      <div class="pdf-fallback">
        <p>⚠️ Votre navigateur ne peut pas afficher le PDF directement.</p>
        <a 
          href="/certifications/anssi-secnumacademie.pdf" 
          download="ABBASSI_DOHA_SecNumAcademie_ANSSI_2026.pdf"
          class="btn btn-primary"
        >
          📥 Télécharger l'attestation
        </a>
      </div>
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>🎓 À propos de SecNumacadémie</h2>
  <p><strong>SecNumacadémie</strong> est le MOOC (Massive Open Online Course) de sensibilisation à la cybersécurité proposé par l'ANSSI. Il s'adresse aux étudiants, professionnels et citoyens souhaitant comprendre les enjeux de la sécurité numérique et acquérir les bonnes pratiques.</p>
  
  <div class="about-secnum-grid">
    <div class="about-card">
      <h3>🔒 Organisme reconnu</h3>
      <p>L'ANSSI est l'autorité nationale en matière de cybersécurité en France, rattachée aux services du Premier ministre.</p>
    </div>
    
    <div class="about-card">
      <h3>📚 Contenu de qualité</h3>
      <p>Cours élaborés par des experts de la cybersécurité, mêlant théorie et cas pratiques.</p>
    </div>
    
    <div class="about-card">
      <h3>✅ Validation des acquis</h3>
      <p>Chaque module se termine par une évaluation (QCM) permettant de valider la compréhension des notions.</p>
    </div>
    
    <div class="about-card">
      <h3>🌐 Gratuit et accessible</h3>
      <p>Formation 100% en ligne, gratuite et ouverte à tous.</p>
    </div>
  </div>

  <div class="external-links">
    <a href="https://secnumacademie.gouv.fr/" target="_blank" rel="noopener" class="btn btn-outline">
      🔗 Site officiel SecNumacadémie
    </a>
    <a href="https://www.anssi.gouv.fr/" target="_blank" rel="noopener" class="btn btn-outline">
      🔗 Site officiel ANSSI
    </a>
  </div>
</section>
`;
}

function setupCertificationAnssiInteractions() {
  const fullscreenBtn = document.getElementById('toggle-fullscreen-cert-btn');
  const pdfViewer = document.getElementById('certification-pdf-viewer') as HTMLIFrameElement;

  if (fullscreenBtn && pdfViewer) {
    fullscreenBtn.addEventListener('click', () => {
      if (pdfViewer.requestFullscreen) {
        pdfViewer.requestFullscreen();
      } else if ((pdfViewer as any).webkitRequestFullscreen) {
        (pdfViewer as any).webkitRequestFullscreen();
      } else if ((pdfViewer as any).msRequestFullscreen) {
        (pdfViewer as any).msRequestFullscreen();
      }
    });
  }

  // Gestion du fallback si l'iframe ne charge pas
  if (pdfViewer) {
    pdfViewer.addEventListener('error', () => {
      const fallback = document.querySelector('.pdf-fallback') as HTMLElement;
      if (fallback) {
        fallback.style.display = 'block';
      }
      pdfViewer.style.display = 'none';
    });
  }
}
