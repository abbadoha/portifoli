// src/pages/contact.ts
// Page contact avec actions rapides

import { Chip, copyToClipboard, showToast } from '../components/ui';

export default function Contact() {
  // Actions rapides pour copier info
  const setupContactActions = () => {
    setTimeout(() => {
      document.querySelectorAll('[data-copy]').forEach(el => {
        el.addEventListener('click', () => {
          const text = el.getAttribute('data-copy');
          if (text) {
            copyToClipboard(text);
            showToast('Copié dans le presse-papier ✓');
          }
        });
      });
    }, 100);
  };

  setupContactActions();

  return `
<section class="page-hero">
  <h1>Me Contacter</h1>
  <p>Prêt à discuter de tes besoins IT</p>
</section>

<section class="page-content glass">
  <h2>📧 Informations directes</h2>
  <div class="contact-cards">
    <div class="contact-card">
      <h3>📧 Email</h3>
      <p>Mon adresse principale pour les candidatures et demandes :</p>
      <p class="contact-value">chamsabbassi78@gmail.com</p>
      <button class="btn btn-ghost" data-copy="chamsabbassi78@gmail.com">
        📋 Copier email
      </button>
    </div>

    <div class="contact-card">
      <h3>📱 Téléphone</h3>
      <p>Me joindre directement par appel ou SMS :</p>
      <p class="contact-value">+33 (0)6 09 69 57 34</p>
      <button class="btn btn-ghost" data-copy="+33 06 09 69 57 34">
        📋 Copier numéro
      </button>
      <p class="contact-note">Disponible lun–ven 9h–18h, réponse rapide</p>
    </div>

    <div class="contact-card">
      <h3>📍 Localisation</h3>
      <p>Basé en Île-de-France :</p>
      <p class="contact-value">Trappes (78)</p>
      <p class="contact-detail">Mobilité : Île-de-France, télétravail possible</p>
    </div>

    <div class="contact-card">
      <h3>🏫 Formation</h3>
      <p>Actuellement en :</p>
      <p class="contact-value">BTS SIO SISR (2024–2026)</p>
      <p class="contact-detail">Lycée Jean Vilar, Plaisir</p>
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>💼 Réseaux professionnels</h2>
  <p>Connectons-nous sur les plateformes suivantes :</p>
  <div class="socials-grid">
    <a href="https://linkedin.com/in/doha-abbassi" class="social-card" target="_blank">
      <strong>🔗 LinkedIn</strong>
      <p>Mon profil professionnel détaillé</p>
      <span class="cta-arrow">Visiter →</span>
    </a>
    <a href="https://github.com/doha-abbassi" class="social-card" target="_blank">
      <strong>💻 GitHub</strong>
      <p>Mes projets personnels et contributions</p>
      <span class="cta-arrow">Visiter →</span>
    </a>
  </div>
</section>

<section class="page-content glass">
  <h2>🎯 Types de demandes (et réponse rapide)</h2>
  <div class="request-types">
    <div class="request-card">
      <h4>📋 Candidature stage/alternance</h4>
      <p>Envoyer CV + lettre motivée par email. Réponse sous 48h.</p>
      ${Chip({ label: 'Email' })} ${Chip({ label: 'Rapide' })}
    </div>
    <div class="request-card">
      <h4>🤝 Partenariat/Collaboration</h4>
      <p>Présentez votre projet. Discuss possibilités IT.</p>
      ${Chip({ label: 'Email' })} ${Chip({ label: 'Projet' })}
    </div>
    <div class="request-card">
      <h4>📚 Questions formation BTS/SISR</h4>
      <p>Conseils pour futurs étudiants BTS. Heureux de partager !</p>
      ${Chip({ label: 'Email/Tel' })} ${Chip({ label: 'Conseil' })}
    </div>
    <div class="request-card">
      <h4>🔐 Audit/Conseil cybersécurité</h4>
      <p>Discussion enjeux sécurité IT. Nous pouvons discuter.</p>
      ${Chip({ label: 'Email' })} ${Chip({ label: 'Technique' })}
    </div>
    <div class="request-card">
      <h4>📰 Interview/Article tech</h4>
      <p>Partager retours d'expérience. J'aime communiquer savoirs.</p>
      ${Chip({ label: 'Email' })} ${Chip({ label: 'Communication' })}
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>✉️ Formulaire rapide (via email)</h2>
  <p>Pas de formulaire en ligne complexe ici – envoyez simplement :</p>
  <div class="email-template">
    <pre>À: chamsabbassi78@gmail.com
Sujet: [CANDIDATURE / CONSEIL / DEMANDE] - Brève description

Corps:
1. Qui êtes-vous / Votre contexte
2. Ce que vous cherchez (stage, conseil, collaboration, etc.)
3. Détails pertinents (industrie, technos, urgence, etc.)
4. Votre contact de réponse

Joindre: CV + tout document pertinent</pre>
  </div>
  <p><strong>📌 Note :</strong> Soyez clair et concis. Plus facile de répondre vite !</p>
</section>

<section class="page-content glass">
  <h2>🕐 Temps de réponse attendu</h2>
  <div class="response-time">
    <div class="time-item">
      <strong>Emails candidatures</strong>
      <p>24–48 heures</p>
    </div>
    <div class="time-item">
      <strong>Questions techniques</strong>
      <p>24–72 heures (si complexe)</p>
    </div>
    <div class="time-item">
      <strong>Téléphone</strong>
      <p>Rappel dans les 24h si absent</p>
    </div>
  </div>
</section>

<section class="page-cta glass">
  <h3>Prêt(e) à discuter ?</h3>
  <a href="mailto:chamsabbassi78@gmail.com" class="btn btn-primary">
    ✉️ Envoyer email
  </a>
</section>
  `;
}
