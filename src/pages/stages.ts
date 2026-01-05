// src/pages/stages.ts
// Page détail stage SI

import { Chip } from '../components/ui';
import { stageDocuments } from '../data/stageDocs';
import Icons from '../components/icons';

export default function Stages() {
  return `
<section class="page-hero">
  <h1>Expérience Professionnelle</h1>
  <p>Stage SI — Mairie de Trappes (mai–juillet 2025)</p>
</section>

<section class="page-content glass">
  <h2>📍 Contexte</h2>
  <p><strong>Lieu :</strong> Mairie de Trappes (Yvelines, 78)</p>
  <p><strong>Secteur :</strong> Secteur public municipal</p>
  <p><strong>Durée :</strong> 3 mois (mai–juillet 2025)</p>
  <p>Immersion en département informatique d'une collectivité locale, responsable de l'infra IT d'une commune de ~30k habitants. Environnement professionnel réel avec contraintes de sécurité publique, gestion de domaine Active Directory, systèmes Windows/Linux, et support utilisateurs administratifs.</p>
  ${Chip({ label: 'Collectivité locale' })}
  ${Chip({ label: 'IT municipal' })}
</section>

<section class="page-content glass stage-brief">
  <h2>🎯 Stage en bref</h2>
  <p class="brief-intro">Résumé fidèle des missions effectuées durant le stage à la Mairie de Trappes (DSI).</p>
  <div class="missions-list">
    <div class="mission-item">
      <h3>🗂️ Cartographie et analyse des droits d'accès</h3>
      <p>Cartographie du serveur de fichiers + analyse des droits d'accès (NTFS/ACL). Utilisation de commandes PowerShell (tree, Get-Acl) avec anonymisation des informations sensibles.</p>
    </div>
    
    <div class="mission-item">
      <h3>🎫 GLPI et support utilisateurs</h3>
      <p>Prise en main de GLPI (système de ticketing) + assistance utilisateurs à distance via TeamViewer. Support L1/L2 pour les agents municipaux.</p>
    </div>
    
    <div class="mission-item">
      <h3>🖨️ Gestion du parc informatique</h3>
      <p>Missions annexes : gestion d'imprimantes (installation pilotes), tri et configuration de tablettes, mise à jour de l'inventaire matériel de la commune.</p>
    </div>
    
    <div class="mission-item">
      <h3>🌐 Découverte réseau et VLANs</h3>
      <p>Découverte et manipulation de switchs multilayer + VLANs (segmentation réseau). Configuration et tests de connectivité.</p>
    </div>
    
    <div class="mission-item">
      <h3>💻 Remise à niveau de mini-PC (centre de formation)</h3>
      <p>Remise à niveau de mini-PC pour un centre de formation de la commune : création d'une clé USB bootable via Rufus, boot BIOS/UEFI, installation/migration Windows 11, mises à jour Windows + pilotes, tests finaux.</p>
    </div>
  </div>
  
  <div class="stage-actions">
    <a href="/#/rapport-stage" class="btn btn-primary">📄 Consulter le rapport complet</a>
    <a href="${import.meta.env.BASE_URL}docs/rapport_stage.pdf" download="Rapport_Stage_ABBASSI_DOHA.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">📥 Télécharger le PDF</a>
  </div>
</section>

<section class="page-content glass">
  <h2>⚙️ Environnement technique</h2>
  <div class="environment-grid">
    <div class="env-card">
      <strong>Systèmes</strong>
      <p>Windows Server 2019/2022, Windows 10/11, Linux (Debian/Ubuntu)</p>
    </div>
    <div class="env-card">
      <strong>Réseau</strong>
      <p>Switched infrastructure, VPN, WiFi municipal</p>
    </div>
    <div class="env-card">
      <strong>Services</strong>
      <p>Active Directory, DNS/DHCP, partages réseau, firewalls</p>
    </div>
    <div class="env-card">
      <strong>Outils</strong>
      <p>Ticketing, monitoring (Zabbix/Nagios), RDP, PowerShell</p>
    </div>
    <div class="env-card">
      <strong>Logiciels métier</strong>
      <p>Suite bureautique, logiciels municipaux spécifiques</p>
    </div>
    <div class="env-card">
      <strong>Infrastructure</strong>
      <p>Mairie (100+ utilisateurs), écoles rattachées</p>
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>📊 Résultats et acquis</h2>
  <div class="results-list">
    <div class="result-card">
      <strong>✓ Compétences opérationnelles validées</strong>
      <p>Maîtrise AD/Windows Server, réseau municipal, support utilisateur professionnel.</p>
    </div>
    <div class="result-card">
      <strong>✓ Autonomie accrue</strong>
      <p>Capacité à investiguer et résoudre incidents en contexte réel.</p>
    </div>
    <div class="result-card">
      <strong>✓ Compréhension du métier</strong>
      <p>Enjeux IT d'une collectivité, contraintes RGPD, interactions stakeholders.</p>
    </div>
    <div class="result-card">
      <strong>✓ Soft skills</strong>
      <p>Communication avec utilisateurs non-IT, gestion priorités, travail d'équipe.</p>
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>📋 Preuves et documents</h2>
  
  <!-- Attestation de stage -->
  <div class="accordion" id="stage-proofs">
    <button class="accordion-trigger" data-accordion="stage-proofs">
      ${stageDocuments[0].title}
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p class="doc-description">${stageDocuments[0].description}</p>
      ${stageDocuments[0].status === 'available' ? `
        <div class="doc-info">
          <span class="doc-type-badge">${stageDocuments[0].fileType}</span>
          <span class="doc-note">${stageDocuments[0].additionalInfo}</span>
        </div>
        <div class="stage-doc-actions">
          <a href="${stageDocuments[0].downloadUrl}" class="btn btn-primary" download="ABBASSI_DOHA_Attestation_Stage_Mairie_Trappes_2025.pdf" target="_blank" rel="noopener noreferrer">
            📥 Télécharger
          </a>
          <a href="${stageDocuments[0].viewUrl}" class="link-secondary" target="_blank" rel="noopener noreferrer">
            ${Icons.ExternalLink({ size: 16 })} Consulter en ligne
          </a>
        </div>
      ` : `
        <div class="doc-placeholder">
          <p class="placeholder-note">📌 Document à ajouter prochainement</p>
          <p class="placeholder-info">Format attendu : PDF signé et cacheté par l'organisation</p>
          <button class="btn btn-secondary" disabled style="opacity: 0.6; cursor: not-allowed;">
            ⏳ À ajouter
          </button>
        </div>
      `}
    </div>
  </div>
  
  <!-- Dossier projet stage -->
  <div class="accordion" id="stage-project">
    <button class="accordion-trigger" data-accordion="stage-project">
      ${stageDocuments[1].title}
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p class="doc-description">${stageDocuments[1].description}</p>
      <div class="doc-info">
        <span class="doc-type-badge">${stageDocuments[1].fileType}</span>
        <span class="doc-note">${stageDocuments[1].additionalInfo}</span>
      </div>
      <div class="stage-doc-actions">
        <a href="${stageDocuments[1].downloadUrl}" class="btn btn-primary" download="Rapport_Stage_ABBASSI_DOHA_Mairie_Trappes_2025.pdf" target="_blank" rel="noopener noreferrer">
          📥 Télécharger le PDF
        </a>
        <a href="${stageDocuments[1].viewUrl}" class="link-secondary">
          ${Icons.ExternalLink({ size: 16 })} Consulter la version web
        </a>
      </div>
    </div>
  </div>
  
  <!-- Références professionnelles -->
  <div class="accordion" id="stage-references">
    <button class="accordion-trigger" data-accordion="stage-references">
      ${stageDocuments[2].title}
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p class="doc-description">${stageDocuments[2].description}</p>
      ${stageDocuments[2].additionalInfo}
      <div class="stage-doc-actions">
        <a href="/#/contact" class="btn btn-primary">
          ✉️ Me contacter pour obtenir les références
        </a>
        <a href="mailto:chamsabbassi78@gmail.com?subject=Demande de références professionnelles - Stage Mairie Trappes" class="link-secondary">
          ${Icons.Mail({ size: 16 })} Envoyer un email direct
        </a>
      </div>
    </div>
  </div>
</section>

<section class="page-cta glass">
  <h3>Découvrez mes projets personnels</h3>
  <a href="/#/projects" class="btn btn-primary">Aller aux projets</a>
</section>
  `;
}
