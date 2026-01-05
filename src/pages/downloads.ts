// src/pages/downloads.ts
// Page téléchargements

import Icons from '../components/icons';

export default function Downloads() {
  return `
<section class="page-hero">
  <div class="icon-hero">${Icons.Download({ size: 64, color: 'var(--color-primary)' })}</div>
  <h1>Téléchargements</h1>
  <p>CV, rapports, attestations</p>
</section>

<section class="page-content glass">
  <h2>📄 CV et documents principaux</h2>
  <div class="downloads-grid">
    <div class="download-card">
      <div class="download-icon">📋</div>
      <h3>CV — Format PDF</h3>
      <p>Curriculum vitae complet, mis à jour 2025.</p>
      <p><strong>Contient :</strong> Formation BTS SIO SISR, expérience stage, certifications, compétences, contact.</p>
      <a href="/assets/docs/ABBASSI_DOHA_CV.pdf" class="btn btn-primary" download>
        Télécharger CV
      </a>
      <button 
        class="btn btn-secondary cv-inline-toggle" 
        type="button" 
        aria-expanded="false" 
        aria-controls="cv-download-details"
      >
        📄 Voir les détails
      </button>
      <div id="cv-download-details" class="download-inline-details" style="display: none;">
        <p class="details-title">Dernière expérience — Agent de sûreté (Château de Versailles)</p>
        <p class="details-dates">22 décembre 2025 – 4 janvier 2026</p>
        <ul>
          <li>Surveillance et contrôle des accès ; application des consignes de sécurité.</li>
          <li>Accueil, orientation des visiteurs et gestion des flux.</li>
          <li>Signalement d'incidents et coordination avec l'équipe sur site.</li>
        </ul>
      </div>
      <p class="file-meta">Taille: ~150 KB | PDF</p>
    </div>

    <div class="download-card">
      <div class="download-icon">📊</div>
      <h3>Rapport de stage</h3>
      <p>Dossier stage SI — Mairie de Trappes (mai–juillet 2025).</p>
      <p><strong>Contient :</strong> Contexte, missions détaillées, environnement tech, résultats, bilan apprentissages.</p>
      <a href="${import.meta.env.BASE_URL}docs/rapport_stage.pdf" download="Rapport_Stage_ABBASSI_DOHA.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        Télécharger rapport
      </a>
      <a href="/#/rapport-stage" class="btn btn-secondary">
        📄 Consulter en ligne
      </a>
      <p class="file-meta">Taille: ~2.5 MB | PDF</p>
    </div>

    <div class="download-card">
      <div class="download-icon">🏆</div>
      <h3>Attestation stage</h3>
      <p>Certificat signé par la Mairie de Trappes attestant ma participation stage.</p>
      <p><strong>Informations :</strong> Période, signatures tuteurs, recommandations.</p>
      <a href="/assets/docs/ABBASSI_Attestation_Stage_Mairie_2025.pdf" class="btn btn-primary" download>
        Télécharger attestation
      </a>
      <p class="file-meta">Taille: ~500 KB | PDF</p>
    </div>

    <div class="download-card">
      <div class="download-icon">🔐</div>
      <h3>Certificat SecNumAcadémie</h3>
      <p>Attestation formation cybersécurité ANSSI (janvier 2026).</p>
      <p><strong>Domaine :</strong> Sensibilisation cybersécurité, bonnes pratiques. 4 modules validés (score moyen 88%).</p>
      <a href="/certifications/anssi-secnumacademie.pdf" class="btn btn-primary" download>
        Télécharger certificat
      </a>
      <a href="/#/certifications/anssi" class="btn btn-secondary">
        📄 Voir les détails
      </a>
      <p class="file-meta">Taille: ~300 KB | PDF</p>
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>📁 Lettres de motivation (optionnel)</h2>
  <div class="optional-section">
    <p>Modèles de lettres de motivation personnalisables disponibles sur demande :</p>
    <ul>
      <li>Candidature stage IT (collectivité/PME/SSII)</li>
      <li>Candidature CDI administrateur système</li>
      <li>Candidature master/licence professionnelle IT</li>
    </ul>
    <p><strong>📧 Pour demander :</strong> <a href="mailto:chamsabbassi78@gmail.com">chamsabbassi78@gmail.com</a></p>
  </div>
</section>

<section class="page-content glass">
  <h2>🎯 Comment les utiliser</h2>
  <div class="tips-grid">
    <div class="tip-card">
      <h4>Pour candidatures</h4>
      <p>CV + lettre motivée = base. Ajuster selon offre (insister points pertinents).</p>
    </div>
    <div class="tip-card">
      <h4>Pour entretien</h4>
      <p>Apporter imprimé CV. Avoir en tête contenu rapport stage (questions jury fréquentes).</p>
    </div>
    <div class="tip-card">
      <h4>Pour formation</h4>
      <p>CV + attestations (stage, certifications) pour dossiers candidature (Master, alternance).</p>
    </div>
    <div class="tip-card">
      <h4>Pour portfolio</h4>
      <p>Références et preuves d'expérience (utilisées en présentation jury/portfolio online).</p>
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>📞 Contact et demandes spéciales</h2>
  <p>Besoin d'une version personnalisée du CV ? Recommandations professionnelles ? N'hésitez pas :</p>
  <div class="contact-methods">
    <div class="method">
      <strong>📧 Email</strong>
      <p><a href="mailto:chamsabbassi78@gmail.com">chamsabbassi78@gmail.com</a></p>
    </div>
    <div class="method">
      <strong>📱 Téléphone</strong>
      <p><a href="tel:+33060996957">+33 (0)6 09 69 57 34</a></p>
    </div>
    <div class="method">
      <strong>📍 Localisation</strong>
      <p>Trappes (78), Île-de-France, France</p>
    </div>
  </div>
</section>

<section class="page-cta glass">
  <h3>Avez-vous des questions ?</h3>
  <a href="/#/contact" class="btn btn-primary">Contactez-moi</a>
</section>
<script>
  (() => {
    const toggle = document.querySelector<HTMLButtonElement>('.cv-inline-toggle');
    const details = document.getElementById('cv-download-details');
    if (!toggle || !details) return;

    const update = (expanded: boolean) => {
      toggle.setAttribute('aria-expanded', String(expanded));
      details.style.display = expanded ? 'block' : 'none';
    };

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      update(!expanded);
    });

    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle.click();
      }
    });
  })();
</script>
  `;
}
