// src/pages/contact.ts
// Page contact redesign — 4 sections épurées

import { copyToClipboard, showToast } from '../components/ui';
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon } from '../components/icons';

const MapPinSvg = `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

export default function Contact() {
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

  return `
<div class="contact-v2-page">
<div class="contact-v2">

  <!-- SECTION 1 : Hero -->
  <section class="contact-v2-hero">
    <h1 class="contact-v2-hero-title">Me contacter</h1>
    <p class="contact-v2-hero-subtitle">Pour une candidature, une demande de stage, une question BTS SIO SISR ou un échange professionnel.</p>
    <div class="contact-v2-hero-badges">
      <span class="contact-v2-badge">Réponse rapide</span>
      <span class="contact-v2-badge">Email direct</span>
      <span class="contact-v2-badge">LinkedIn / GitHub</span>
    </div>
  </section>

  <!-- SECTION 2 : Cartes de contact -->
  <section class="contact-v2-section">
    <div class="contact-v2-cards">

      <!-- Email -->
      <div class="contact-v2-card glass">
        <div class="contact-v2-card-icon">
          ${MailIcon({ size: 26 })}
        </div>
        <div class="contact-v2-card-body">
          <h2>Email</h2>
          <p class="contact-v2-card-value">chamsabbassi78@gmail.com</p>
        </div>
        <div class="contact-v2-card-actions">
          <button class="btn btn-ghost" data-copy="chamsabbassi78@gmail.com">Copier</button>
          <a href="mailto:chamsabbassi78@gmail.com" class="btn btn-primary">Envoyer un email</a>
        </div>
      </div>

      <!-- Téléphone -->
      <div class="contact-v2-card glass">
        <div class="contact-v2-card-icon">
          ${PhoneIcon({ size: 26 })}
        </div>
        <div class="contact-v2-card-body">
          <h2>Téléphone</h2>
          <p class="contact-v2-card-value">+33 6 09 69 57 34</p>
          <p class="contact-v2-card-note">SMS possible</p>
        </div>
        <div class="contact-v2-card-actions">
          <button class="btn btn-ghost" data-copy="+33609695734">Copier</button>
        </div>
      </div>

      <!-- Disponibilité -->
      <div class="contact-v2-card glass">
        <div class="contact-v2-card-icon">
          ${MapPinSvg}
        </div>
        <div class="contact-v2-card-body">
          <h2>Disponibilité</h2>
          <p class="contact-v2-card-value">Île-de-France</p>
          <ul class="contact-v2-card-list">
            <li>Mobilité possible</li>
            <li>BTS SIO SISR en cours</li>
          </ul>
        </div>
        <div class="contact-v2-card-actions"></div>
      </div>

    </div>
  </section>

  <!-- SECTION 3 : Réseaux professionnels -->
  <section class="contact-v2-section">
    <h2 class="contact-v2-section-title">Réseaux professionnels</h2>
    <div class="contact-v2-socials">

      <a href="https://www.linkedin.com/in/doha-abbassi" class="contact-v2-social glass" target="_blank" rel="noopener noreferrer">
        <div class="contact-v2-card-icon contact-v2-icon-linkedin">
          ${LinkedinIcon({ size: 30 })}
        </div>
        <div class="contact-v2-card-body">
          <h3>LinkedIn</h3>
          <p>Mon profil professionnel</p>
        </div>
        <span class="btn btn-outline contact-v2-social-btn">Ouvrir →</span>
      </a>

      <a href="https://github.com/abbadoha" class="contact-v2-social glass" target="_blank" rel="noopener noreferrer">
        <div class="contact-v2-card-icon contact-v2-icon-github">
          ${GithubIcon({ size: 30 })}
        </div>
        <div class="contact-v2-card-body">
          <h3>GitHub</h3>
          <p>Mes projets et scripts techniques</p>
        </div>
        <span class="btn btn-outline contact-v2-social-btn">Ouvrir →</span>
      </a>

    </div>
  </section>

  <!-- SECTION 4 : CTA final -->
  <section class="contact-v2-cta glass">
    <h2>Un échange rapide ?</h2>
    <p>Le plus simple est de me contacter directement par email.</p>
    <div class="contact-v2-cta-actions">
      <a href="mailto:chamsabbassi78@gmail.com" class="btn btn-primary">Envoyer un email</a>
      <a href="https://www.linkedin.com/in/doha-abbassi" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Voir LinkedIn</a>
    </div>
  </section>

</div>
</div>
  `;
}
