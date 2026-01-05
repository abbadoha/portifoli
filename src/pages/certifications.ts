// src/pages/certifications.ts
// Page listant toutes les certifications avec liens vers les détails

import { Chip } from '../components/ui';
import Icons from '../components/icons';

export default function Certifications() {
  return `
<section class="page-hero">
  <div class="icon-hero">${Icons.BadgeCheck({ size: 64, color: 'var(--color-primary)' })}</div>
  <h1>🏆 Certifications & Formations</h1>
  <p>Attestations et certifications professionnelles validées</p>
</section>

<section class="page-content glass">
  <h2>Certifications actives</h2>
  <p>Liste des certifications obtenues et validées dans le cadre de ma formation en cybersécurité et administration systèmes.</p>
</section>

<section class="page-content glass certification-card">
  <div class="cert-header">
    <div class="cert-badge">
      <span class="cert-icon">🛡️</span>
    </div>
    <div class="cert-info">
      <h2>ANSSI — SecNumacadémie</h2>
      <p class="cert-subtitle">Attestation de suivi — Cybersécurité</p>
      <div class="cert-meta">
        <span>📅 Janvier 2026</span>
        <span>🏢 ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information)</span>
        <span>✅ Attestation validée</span>
      </div>
    </div>
  </div>

  <div class="cert-content">
    <h3>📊 Modules validés et scores</h3>
    <div class="modules-grid">
      <div class="module-card">
        <div class="module-header">
          <strong>Panorama de la SSI</strong>
          <span class="score score-excellent">92%</span>
        </div>
        <p class="module-desc">Vue d'ensemble de la sécurité des systèmes d'information, enjeux et acteurs.</p>
      </div>

      <div class="module-card">
        <div class="module-header">
          <strong>Sécurité de l'authentification</strong>
          <span class="score score-good">82%</span>
        </div>
        <p class="module-desc">Mécanismes d'authentification, gestion des identités, bonnes pratiques.</p>
      </div>

      <div class="module-card">
        <div class="module-header">
          <strong>Sécurité sur Internet</strong>
          <span class="score score-excellent">94%</span>
        </div>
        <p class="module-desc">Protocoles sécurisés, chiffrement, menaces web, protection des échanges.</p>
      </div>

      <div class="module-card">
        <div class="module-header">
          <strong>Sécurité du poste de travail et nomadisme</strong>
          <span class="score score-good">84%</span>
        </div>
        <p class="module-desc">Hardening postes, télétravail sécurisé, gestion des accès distants.</p>
      </div>
    </div>

    <div class="cert-details">
      <h3>🎯 Compétences validées</h3>
      <div class="competences-list">
        ${Chip({ label: 'Analyse de risques' })}
        ${Chip({ label: 'Authentification forte' })}
        ${Chip({ label: 'Chiffrement' })}
        ${Chip({ label: 'Sécurité réseau' })}
        ${Chip({ label: 'Hardening systèmes' })}
        ${Chip({ label: 'Protocoles sécurisés' })}
        ${Chip({ label: 'Gestion des accès' })}
        ${Chip({ label: 'Nomadisme sécurisé' })}
      </div>
    </div>

    <div class="cert-actions">
      <a href="/#/certifications/anssi" class="btn btn-primary">
        📄 Voir le certificat complet
      </a>
      <a href="/certifications/anssi-secnumacademie.pdf" download="ABBASSI_DOHA_SecNumAcademie_ANSSI_2026.pdf" class="btn btn-secondary">
        📥 Télécharger le PDF
      </a>
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>💡 Pourquoi SecNumacadémie ?</h2>
  <p><strong>SecNumacadémie</strong> est un dispositif de formation en ligne gratuit proposé par l'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information). Il s'adresse aux étudiants et professionnels souhaitant acquérir ou renforcer leurs compétences en cybersécurité.</p>
  
  <div class="info-grid">
    <div class="info-card">
      <strong>🎓 Formation reconnue</strong>
      <p>Dispensée par l'autorité nationale en cybersécurité (ANSSI)</p>
    </div>
    <div class="info-card">
      <strong>📚 Contenu de qualité</strong>
      <p>Modules théoriques et pratiques couvrant les fondamentaux de la SSI</p>
    </div>
    <div class="info-card">
      <strong>✅ Évaluations rigoureuses</strong>
      <p>QCM et exercices pratiques pour valider les acquis</p>
    </div>
    <div class="info-card">
      <strong>🔒 Applicable immédiatement</strong>
      <p>Compétences directement transposables en environnement professionnel</p>
    </div>
  </div>

  <div class="external-link">
    <a href="https://secnumacademie.gouv.fr/" target="_blank" rel="noopener" class="btn btn-outline">
      🔗 Découvrir SecNumacadémie
    </a>
  </div>
</section>

<section class="page-content glass">
  <h2>📌 Autres formations à venir</h2>
  <p>Je continue à me former régulièrement pour maintenir et approfondir mes compétences en cybersécurité, administration systèmes et réseaux.</p>
  
  <div class="future-certifications">
    <div class="future-cert-item">
      <strong>🎯 Objectifs 2026-2027</strong>
      <ul>
        <li>Certification CompTIA Security+ (sécurité SI)</li>
        <li>Cisco CCNA (réseaux)</li>
        <li>Formation Linux LPI (administration Linux)</li>
        <li>RGPD et conformité (DPO)</li>
      </ul>
    </div>
  </div>
</section>
`;
}
