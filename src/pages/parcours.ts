// src/pages/parcours.ts
// Page parcours détaillé avec timeline + cartes

import { Chip } from '../components/ui';

export default function Parcours() {
  return `
<section class="page-hero">
  <h1>Mon Parcours</h1>
  <p>Formation, certifications et jalons professionnels</p>
</section>

<section class="page-content glass">
  <h2>Timeline détaillée</h2>
  <div class="timeline-detailed">
    <div class="timeline-card">
      <span class="timeline-year">2024</span>
      <h3>Entrée en BTS SIO</h3>
      <p><strong>Établissement :</strong> Lycée Jean Vilar, Plaisir</p>
      <p><strong>Parcours :</strong> Option SISR (Réseaux, Systèmes & Cybersécurité)</p>
      <p>Début de la formation à 24 mois en administration réseau, systèmes et sécurité.</p>
      ${Chip({ label: 'Formation' })}
      ${Chip({ label: 'BTS SIO' })}
      ${Chip({ label: 'SISR' })}
    </div>
    <div class="timeline-card">
      <span class="timeline-year">2025 (05–07)</span>
      <h3>Stage SI — Mairie de Trappes</h3>
      <p><strong>Durée :</strong> 3 mois (mai–juillet 2025)</p>
      <p><strong>Type :</strong> Stage obligatoire BTS</p>
      <p>Expérience d'administration de systèmes et d'infra IT en environnement municipal réel.</p>
      <a href="/#/stages" class="link-arrow">Voir détails →</a>
      ${Chip({ label: 'Expérience' })}
      ${Chip({ label: 'Mairie' })}
    </div>
    <div class="timeline-card">
      <span class="timeline-year">2025</span>
      <h3>Certification SecNumAcadémie (ANSSI)</h3>
      <p><strong>Organisme :</strong> Agence Nationale de Cybersécurité</p>
      <p><strong>Domaine :</strong> Sensibilisation à la cybersécurité</p>
      <p>Formation reconnue validant les bonnes pratiques de sécurité informatique.</p>
      ${Chip({ label: 'Certification' })}
      ${Chip({ label: 'Cybersécurité' })}
    </div>
    <div class="timeline-card">
      <span class="timeline-year">2025 (12–01)</span>
      <h3>Mission sûreté — Château de Versailles</h3>
      <p><strong>Durée :</strong> 23 déc 2025 → 4 jan 2026 (ponctuelle)</p>
      <p><strong>Rôle :</strong> Agent de sûreté</p>
      <p>Expérience dans le secteur public/sécurité pour élargir les compétences soft skills.</p>
      ${Chip({ label: 'Mission' })}
      ${Chip({ label: 'Versailles' })}
    </div>
    <div class="timeline-card">
      <span class="timeline-year">2026</span>
      <h3>Fin de BTS SIO SISR</h3>
      <p><strong>Prévu :</strong> Fin juin 2026</p>
      <p><strong>Épreuves :</strong> Examens + projets professionnels</p>
      <p>Conclusion de la formation avec examens d'État et présentation jury.</p>
      <a href="/#/exams" class="link-arrow">Voir guide épreuves →</a>
      ${Chip({ label: 'Examen' })}
      ${Chip({ label: 'Diplomation' })}
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>Points clés du parcours</h2>
  <div class="highlights-grid">
    <div class="highlight-card">
      <strong>📚 Formation</strong>
      <p>2 ans en alternance, approfondissement continu en réseaux/systèmes.</p>
    </div>
    <div class="highlight-card">
      <strong>🏢 Expérience</strong>
      <p>Immersion en environnement municipal réel (Mairie de Trappes).</p>
    </div>
    <div class="highlight-card">
      <strong>🔐 Certifications</strong>
      <p>Validation ANSSI en cybersécurité (2025).</p>
    </div>
    <div class="highlight-card">
      <strong>🎯 Polyvalence</strong>
      <p>Exposure à divers domaines (IT, sûreté, secteur public).</p>
    </div>
  </div>
</section>

<section class="page-cta glass">
  <h3>Découvrez mes compétences détaillées</h3>
  <a href="/#/skills" class="btn btn-primary">Aller aux compétences</a>
</section>
  `;
}
