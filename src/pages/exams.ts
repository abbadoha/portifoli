// src/pages/exams.ts
// Page guide épreuves examen BTS

export default function Exams() {
  return `
<section class="page-hero">
  <h1>Guide des Épreuves</h1>
  <p>Comment je me présente aux jurys et what I show</p>
</section>

<section class="page-content glass">
  <h2>🎯 Stratégie générale</h2>
  <p>Les épreuves BTS SIO évaluent capacité à :</p>
  <ul>
    <li><strong>Administrer infra IT réelle :</strong> Pas juste théorie, mais cas pratiques scolaires + stage</li>
    <li><strong>Justifier décisions techniques :</strong> Pourquoi Active Directory plutôt que Samba ? Pourquoi pfSense ?</li>
    <li><strong>Communiquer clearly :</strong> Expliquer concept technique à non-IT, documenter processus</li>
    <li><strong>Montrer autonomie :</strong> Résoudre problèmes, rechercher solutions, apprendre tech nouvelle</li>
  </ul>
</section>

<section class="page-content glass">
  <h2>📋 Épreuves principales</h2>
  
  <div class="accordion" id="exam-stage">
    <button class="accordion-trigger" data-accordion="exam-stage">
      🏢 Épreuve Stage (rapport + soutenance)
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p><strong>Durée :</strong> 3–4 mois (mai–juillet 2025 pour moi)</p>
      <p><strong>Évaluation :</strong> Rapport écrit (10–15 pages) + présentation oral (15 min) + questions jury</p>
      <p><strong>Ce que je montre :</strong></p>
      <ul>
        <li>Contexte Mairie (infra, utilisateurs, enjeux)</li>
        <li>Missions effectuées (admin AD, support utilisateurs, infrastructure)</li>
        <li>Problèmes résolus (incident, ticket, amélioration)</li>
        <li>Résultats mesurables (tickets fermés, services opérationnels, temps d'intervention)</li>
        <li>Apprentissages et améliorations possibles</li>
      </ul>
      <p><strong>Points forts jury :</strong> Expérience réelle, autonomie, communication, respect client</p>
    </div>
  </div>

  <div class="accordion" id="exam-sisr-project">
    <button class="accordion-trigger" data-accordion="exam-sisr-project">
      🖥️ Projet SISR (infrastructure)
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p><strong>Format :</strong> Projet appliqué (seul ou équipe) sur 2ème année</p>
      <p><strong>Thèmes possibles :</strong></p>
      <ul>
        <li>Mise en place infrastructure (AD, DNS/DHCP, réseaux, sécurité)</li>
        <li>Audit/sécurisation parc existant (hardening, politiques)</li>
        <li>Virtualisation (lab ESXi/Hyper-V)</li>
        <li>Services : Mail, partages réseau, backup</li>
      </ul>
      <p><strong>Ce que je mets en avant :</strong></p>
      <ul>
        <li>Architecture justifiée (choix tech, schéma réseau)</li>
        <li>Configuration détaillée et fonctionnelle</li>
        <li>Documentation (guides admin, runbooks, escalade)</li>
        <li>Tests (audit post-déploiement, checklist sécurité)</li>
        <li>Réflexion critique (limitations, améliorations, costs)</li>
      </ul>
    </div>
  </div>

  <div class="accordion" id="exam-written">
    <button class="accordion-trigger" data-accordion="exam-written">
      📝 Épreuves écrites
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p><strong>Sujets :</strong> Culture générale, Anglais, Économie–Droit, Épreuve professionnelle</p>
      <p><strong>Épreuve professionnelle :</strong> Cas d'étude infra (lire cahier charges, proposer solution, justifier)</p>
      <p><strong>Comment me préparer :</strong></p>
      <ul>
        <li>Cas pratiques scolaires (exercices TP)</li>
        <li>Lectures specs officielles (3GPP, RFC, Microsoft docs)</li>
        <li>Prise de notes stage (incidents, solutions)</li>
        <li>Révisions concepts fondamentaux (OSI, TCP/IP, sécurité)</li>
      </ul>
      <p><strong>Jury attend :</strong> Analyse réelle du problème, solution pragmatique, compréhension globale</p>
    </div>
  </div>

  <div class="accordion" id="exam-oral">
    <button class="accordion-trigger" data-accordion="exam-oral">
      🎤 Épreuves orales / Présentations
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p><strong>Format :</strong> 15–20 min présentation + 10 min questions jury</p>
      <p><strong>Sujets :</strong> Stage, projet SISR, étude de cas</p>
      <p><strong>Conseils présentation :</strong></p>
      <ul>
        <li>Slides clairs (schéma réseau, architecture, flow diagramme)</li>
        <li>Débuter par contexte (pourquoi cette mission/projet)</li>
        <li>Montrer screenshots (configurations réelles, résultats tests)</li>
        <li>Parler lentement, éviter jargon sans explication</li>
        <li>Finir par apprentissages (ce que j'en ai tiré)</li>
      </ul>
      <p><strong>Jury pose questions pour vérifier :</strong> Comprehension technique, justification choices, capacité troubleshoot, soft skills</p>
      <p><strong>Questions du jury :</strong> "Pourquoi ce design ?" "Qu'auriez-vous fait différemment ?" "Incident difficile ?" "Outils alternatives ?"</p>
    </div>
  </div>

</section>

<section class="page-content glass">
  <h2>💪 Mes points forts à valoriser</h2>
  <div class="strengths-grid">
    <div class="strength-card">
      <strong>🔍 Analyse de problèmes</strong>
      <p>Demander questions, comprendre contexte avant proposer solution.</p>
    </div>
    <div class="strength-card">
      <strong>📚 Apprentissage autonome</strong>
      <p>Formations, documentation, projets personnnels (pfSense, AD, Linux).</p>
    </div>
    <div class="strength-card">
      <strong>🛠️ Pratique terrain</strong>
      <p>Stage réel en Mairie = expérience concrète, utilisateurs réels, contraintes production.</p>
    </div>
    <div class="strength-card">
      <strong>📖 Documentation</strong>
      <p>Rapports clairs, guides admin fonctionnels, communication jury facile.</p>
    </div>
    <div class="strength-card">
      <strong>🔐 Sécurité</strong>
      <p>Cert SecNumAcadémie, hardening projets, respect RGPD stage.</p>
    </div>
    <div class="strength-card">
      <strong>💬 Soft skills</strong>
      <p>Communication utilisateurs, collaboration équipe, autonomie.</p>
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>⚠️ Pièges à éviter</h2>
  <ul>
    <li><strong>Ne pas connaître ses propres projets :</strong> Si jury demande détail technique, être capable de répondre</li>
    <li><strong>Jargon sans explication :</strong> "J'ai déployé une AD DC répliquée en multi-site" doit être clair même pour non-IT</li>
    <li><strong>Absence de justification :</strong> "Pourquoi Windows plutôt que Linux ?" = question courante, avoir réponse prête</li>
    <li><strong>Négliger la sécurité :</strong> Montrer conscience enjeux sécurité même si projet minimaliste</li>
    <li><strong>Manque doc :</strong> Jury veut voir preuves (screenshots, logs, rapports)</li>
  </ul>
</section>

<section class="page-cta glass">
  <h3>Découvrez comment vous pouvez m'aider à réussir</h3>
  <a href="/#/contact" class="btn btn-primary">Me contacter</a>
</section>
  `;
}
