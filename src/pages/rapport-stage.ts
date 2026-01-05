// src/pages/rapport-stage.ts
// Page dédiée au rapport de stage avec viewer PDF intégré

import Icons from '../components/icons';

export default function RapportStage() {
  setTimeout(() => {
    setupRapportStage();
  }, 100);

  return `
<section class="page-hero">
  <div class="icon-hero">${Icons.Briefcase({ size: 64, color: 'var(--color-primary)' })}</div>
  <h1>Rapport de stage</h1>
  <p>Stage en collectivité territoriale — Mairie de Trappes (DSI)</p>
  <div class="hero-meta">
    <span>📅 Mai–Juillet 2025</span>
    <span>🏢 Service informatique municipal</span>
    <span>📄 BTS SIO SISR</span>
  </div>
</section>

<section class="page-content glass rapport-stage-section">
  <div class="rapport-header">
    <div class="rapport-info">
      <h2>À propos du stage</h2>
      <p><strong>Organisme d'accueil :</strong> Mairie de Trappes — Direction des Systèmes d'Information (DSI)</p>
      <p><strong>Période :</strong> Mai à juillet 2025 (3 mois)</p>
      <p><strong>Formation :</strong> BTS SIO SISR — Lycée Jean Vilar, Plaisir</p>
      <p><strong>Thématiques :</strong> Administration systèmes et réseaux, Support utilisateurs, Gestion de parc informatique</p>
    </div>
    
    <div class="rapport-actions">
      <a 
        href="${import.meta.env.BASE_URL}docs/rapport_stage.pdf" 
        download="Rapport_Stage_ABBASSI_DOHA.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary"
        aria-label="Télécharger le rapport de stage en PDF"
      >
        📥 Télécharger le PDF
      </a>
      <button 
        id="toggle-fullscreen-btn"
        class="btn btn-secondary"
        aria-label="Afficher le PDF en plein écran"
      >
        🖥️ Plein écran
      </button>
    </div>
  </div>

  <div class="rapport-viewer-container">
    <div class="viewer-wrapper">
      <iframe 
        id="pdf-viewer"
        src="${import.meta.env.BASE_URL}docs/rapport_stage.pdf#toolbar=1&navpanes=1&scrollbar=1"
        title="Rapport de stage - ABBASSI DOHA"
        class="pdf-iframe"
        loading="lazy"
      ></iframe>
      
      <div class="pdf-fallback" style="display: none;">
        <div class="fallback-content">
          <p class="fallback-icon">📄</p>
          <h3>Visualisation PDF non disponible</h3>
          <p>Votre navigateur ne supporte pas l'affichage de PDF intégré.</p>
          <a 
            href="${import.meta.env.BASE_URL}docs/rapport_stage.pdf" 
            download="Rapport_Stage_ABBASSI_DOHA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            📥 Télécharger le rapport
          </a>
          <a 
            href="${import.meta.env.BASE_URL}docs/rapport_stage.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary"
          >
            🔗 Ouvrir dans un nouvel onglet
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="rapport-note">
    <p><strong>Note :</strong> Le rapport détaille l'ensemble des missions effectuées en stage : cartographie serveurs, gestion GLPI, support utilisateurs, configuration matériel, administration réseau et migration de mini-PC.</p>
  </div>
</section>

<section class="page-content glass">
  <h2>📋 Missions principales</h2>
  <div class="missions-highlight">
    <div class="mission-card">
      <div class="mission-icon">🗂️</div>
      <h3>Cartographie et audit</h3>
      <p>Cartographie du serveur de fichiers + analyse des droits d'accès (NTFS/ACL). Utilisation de PowerShell (tree, Get-Acl) avec anonymisation des données sensibles.</p>
    </div>
    
    <div class="mission-card">
      <div class="mission-icon">🎫</div>
      <h3>Ticketing et support</h3>
      <p>Prise en main de GLPI (gestion des tickets) + assistance utilisateurs à distance via TeamViewer. Support L1/L2 pour les agents municipaux.</p>
    </div>
    
    <div class="mission-card">
      <div class="mission-icon">🖨️</div>
      <h3>Gestion du parc</h3>
      <p>Configuration d'imprimantes (installation pilotes), tri et configuration de tablettes, mise à jour de l'inventaire matériel de la commune.</p>
    </div>
    
    <div class="mission-card">
      <div class="mission-icon">🌐</div>
      <h3>Administration réseau</h3>
      <p>Découverte et manipulation de switchs multilayer + VLANs (segmentation réseau). Configuration et tests de connectivité.</p>
    </div>
    
    <div class="mission-card">
      <div class="mission-icon">💻</div>
      <h3>Migration Windows 11</h3>
      <p>Remise à niveau de mini-PC pour centre de formation : création clé USB bootable (Rufus), boot BIOS/UEFI, installation Windows 11, mises à jour et tests.</p>
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>🎓 Compétences mobilisées</h2>
  <div class="competences-grid">
    <div class="competence-item">
      <strong>Systèmes</strong>
      <p>Windows Server, PowerShell, NTFS/ACL, Active Directory</p>
    </div>
    <div class="competence-item">
      <strong>Réseaux</strong>
      <p>VLANs, Switch multilayer, Segmentation, Diagnostic réseau</p>
    </div>
    <div class="competence-item">
      <strong>Support</strong>
      <p>GLPI, TeamViewer, Assistance utilisateurs, Ticketing</p>
    </div>
    <div class="competence-item">
      <strong>Matériel</strong>
      <p>Imprimantes, Tablettes, Mini-PC, Inventaire parc</p>
    </div>
    <div class="competence-item">
      <strong>Outils</strong>
      <p>Rufus, BIOS/UEFI, Windows 11, Mises à jour système</p>
    </div>
    <div class="competence-item">
      <strong>Méthodologie</strong>
      <p>Documentation, Anonymisation, Tests, Validation</p>
    </div>
  </div>
</section>
`;
}

function setupRapportStage() {
  const iframe = document.getElementById('pdf-viewer') as HTMLIFrameElement;
  const fallback = document.querySelector('.pdf-fallback') as HTMLElement;
  const toggleBtn = document.getElementById('toggle-fullscreen-btn');

  // Gestion du fallback si le PDF ne charge pas
  if (iframe) {
    iframe.addEventListener('error', () => {
      if (fallback) {
        iframe.style.display = 'none';
        fallback.style.display = 'flex';
      }
    });

    // Test si le PDF est chargeable (timeout 5s)
    const checkTimeout = setTimeout(() => {
      // Si pas de contenu détecté après 5s, on peut afficher un message alternatif
      // (optionnel - le iframe devrait gérer ça automatiquement)
    }, 5000);

    iframe.addEventListener('load', () => {
      clearTimeout(checkTimeout);
    });
  }

  // Gestion du plein écran
  if (toggleBtn && iframe) {
    toggleBtn.addEventListener('click', () => {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if ((iframe as any).webkitRequestFullscreen) {
        (iframe as any).webkitRequestFullscreen();
      } else if ((iframe as any).msRequestFullscreen) {
        (iframe as any).msRequestFullscreen();
      }
    });
  }
}
