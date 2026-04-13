// src/pages/profile.ts
// Refactor complet de la page Profil pour BTS SIO SISR

import { Button, Chip, Tabs } from '../components/ui';
import { Icons } from '../components/icons';

export default function Profile() {
  const sectionHeader = (eyebrow: string, title: string, intro = '') => `
    <div class="section-header-profile">
      <span class="section-eyebrow">${eyebrow}</span>
      <h2 class="section-title-profile">${title}</h2>
      ${intro ? `<p class="profile-section-intro">${intro}</p>` : ''}
    </div>
  `;

  const heroTag = (label: string) => Chip({ label });

  const infoCard = (label: string, value: string) => `
    <div class="hero-info-card glass" data-spotlight data-tilt-card>
      <span class="hero-info-label">${label}</span>
      <span class="hero-info-value">${value}</span>
    </div>
  `;

  const contactCard = (icon: string, title: string, value: string, action: string, href: string) => `
    <a href="${href}" class="contact-card glass reveal" target="_blank" rel="noreferrer noopener" data-spotlight data-tilt-card>
      <div class="contact-card-icon">${icon}</div>
      <div class="contact-card-body">
        <strong>${title}</strong>
        <span class="contact-card-value">${value}</span>
        <span class="contact-card-action">${action}</span>
      </div>
      <span class="contact-card-arrow" aria-hidden="true">${Icons.ChevronRight({ size: 18 })}</span>
    </a>
  `;

  const methodCard = (step: string, icon: string, title: string, description: string) => `
    <article class="method-card glass reveal" data-spotlight>
      <div class="method-card-top">
        <span class="method-step">${step}</span>
        <span class="method-icon method-icon-shell">${icon}</span>
      </div>
      <h3>${title}</h3>
      <p>${description}</p>
      <span class="method-line" aria-hidden="true"></span>
    </article>
  `;

  const profileTabMini = (title: string, description: string) => `
    <div class="profile-tab-mini">
      <strong>${title}</strong>
      <span>${description}</span>
    </div>
  `;

  const profileTechTabs = Tabs({
    id: 'profile-tech',
    tabs: [
      {
        key: 'vision',
        label: 'Vision',
        content: `
          <div class="profile-tab-panel">
            <div class="profile-tab-copy">
              <h3>Des environnements utiles et organisés</h3>
              <p>Je suis attirée par les contextes techniques clairs, structurés et utiles au quotidien.</p>
            </div>
            <div class="profile-tab-cards">
              ${profileTabMini('Clarté', 'Comprendre l’ensemble avant d’agir.')}
              ${profileTabMini('Repère', 'Chercher l’utilité avant la complexité.')}
            </div>
          </div>
        `,
      },
      {
        key: 'methode',
        label: 'Méthode',
        content: `
          <div class="profile-tab-panel">
            <div class="profile-tab-copy">
              <h3>Une méthode simple et rigoureuse</h3>
              <p>Je préfère poser un cadre clair, documenter puis intervenir avec méthode.</p>
            </div>
            <div class="profile-tab-cards">
              ${profileTabMini('Organisation', 'Structurer avant de corriger.')}
              ${profileTabMini('Suivi', 'Laisser une trace utile et lisible.')}
            </div>
          </div>
        `,
      },
      {
        key: 'priorite',
        label: 'Priorité',
        content: `
          <div class="profile-tab-panel">
            <div class="profile-tab-copy">
              <h3>Fiabilité et cohérence</h3>
              <p>J’accorde de l’importance à la stabilité, à la cohérence des accès et à une documentation propre.</p>
            </div>
            <div class="profile-tab-cards">
              ${profileTabMini('Fiabilité', 'Maintenir un cadre stable.')}
              ${profileTabMini('Cohérence', 'Garder une logique technique claire.')}
            </div>
          </div>
        `,
      },
      {
        key: 'objectif',
        label: 'Objectif',
        content: `
          <div class="profile-tab-panel">
            <div class="profile-tab-copy">
              <h3>Progresser sur le terrain</h3>
              <p>Je souhaite évoluer dans des contextes systèmes, réseau et sécurité pour gagner en autonomie.</p>
            </div>
            <div class="profile-tab-cards">
              ${profileTabMini('Alternance', 'Apprendre au contact du terrain.')}
              ${profileTabMini('Cap', 'Construire un profil SISR solide.')}
            </div>
          </div>
        `,
      },
    ],
  });

  const environmentCard = (image: string, alt: string, title: string, description: string, hint: string, href?: string) => {
    const tag = href ? 'a' : 'article';
    const linkAttrs = href ? ` href="${href}"` : '';

    return `
    <${tag} class="environment-focus-card glass reveal" data-spotlight data-tilt-card${linkAttrs}>
      <div class="environment-focus-media">
        <img src="${image}" alt="${alt}" />
      </div>
      <div class="environment-focus-copy">
        <div class="environment-focus-head">
          <h3>${title}</h3>
          <span class="environment-focus-badge">${hint}</span>
        </div>
        <p>${description}</p>
      </div>
    </${tag}>
  `;
  };

  const targetCard = (step: string, image: string, alt: string, title: string, description: string, tone = '') => `
    <article class="target-card glass reveal ${tone}" data-spotlight data-tilt-card>
      <div class="target-media">
        <img src="${image}" alt="${alt}" />
      </div>
      <span class="target-step">${step}</span>
      <h3>${title}</h3>
      <p>${description}</p>
      <div class="target-progress" aria-hidden="true"><span></span></div>
    </article>
  `;

  const balancePillar = (image: string, alt: string, title: string, description: string, tag: string) => `
    <article class="balance-pillar glass reveal" data-spotlight>
      <div class="balance-pillar-media">
        <img src="${image}" alt="${alt}" />
      </div>
      <span class="balance-pillar-tag">${tag}</span>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `;

  return `
<section class="profile-page profile-page-redesign">
  <!-- SECTION 1 — HERO / INTRODUCTION -->
  <section class="profile-section reveal hero-section">
    <div class="profile-section-content">
      <div class="hero-grid hero-grid-premium">
        <span class="hero-grid-glow hero-grid-glow-one" aria-hidden="true"></span>
        <span class="hero-grid-glow hero-grid-glow-two" aria-hidden="true"></span>
        <div class="hero-copy hero-copy-panel glass reveal" data-spotlight data-tilt-card>
          <span class="section-eyebrow">Profil SISR</span>
          <div class="hero-title-wrap">
            <span class="hero-title-aura" aria-hidden="true"></span>
            <h1 class="hero-title">ABBASSI Doha</h1>
          </div>
          <p class="hero-subtitle"><span class="hero-status-dot" aria-hidden="true"></span>Étudiante BTS SIO — option SISR</p>
          <p class="hero-text">Étudiante en BTS SIO option SISR, je m’intéresse particulièrement à l’administration systèmes, aux réseaux et à la sécurité. Je recherche une alternance pour progresser dans des environnements organisés, rigoureux et bien documentés.</p>
          <div class="hero-tag-list hero-chip-list">
            ${heroTag('Administration systèmes')}
            ${heroTag('Réseaux')}
            ${heroTag('Cybersécurité')}
            ${heroTag('Virtualisation')}
          </div>
          <div class="hero-actions">
            ${Button({ label: 'Voir mon parcours', href: '/#/parcours', variant: 'primary' })}
            ${Button({ label: 'Me contacter', href: '/#/contact', variant: 'outline' })}
          </div>
        </div>

        <aside class="hero-panel glass hero-panel-premium reveal" data-spotlight data-tilt-card>
          <div class="hero-avatar-shell" data-tilt-card>
            <img src="/assets/img/avatar.jpg" alt="ABBASSI Doha" class="hero-avatar" />
          </div>
          <p class="hero-panel-note">Disponible pour rejoindre une entreprise en alternance et progresser sur des environnements systèmes, réseau et sécurité.</p>
          <div class="hero-info-grid">
            ${infoCard('Âge', '19 ans')}
            ${infoCard('Localisation', 'Trappes, Île-de-France')}
            ${infoCard('Statut', 'Recherche alternance')}
            ${infoCard('Objectif', 'Administration SISR')}
          </div>
        </aside>
      </div>
    </div>
  </section>

  <!-- SECTION 2 — PROFIL TECHNIQUE -->
  <section class="profile-section reveal about-section">
    <div class="profile-section-content two-column about-split">
      <div class="profile-text-panel about-copy profile-tech-column">
        ${sectionHeader('Profil technique', 'Un profil technique clair et structuré', 'Attirée par des environnements organisés, fiables et concrets.')}
        <div class="profile-tabs-shell glass reveal" data-spotlight>
          <div class="profile-tech-tabs">
            ${profileTechTabs}
          </div>
        </div>
      </div>
      <div class="profile-visual-secondary about-visual-side">
        <div class="profile-visual-card visual-card-premium about-visual-card" data-tilt-card>
          <div class="about-visual-media">
            <span class="about-visual-orbit orbit-one" aria-hidden="true"></span>
            <span class="about-visual-orbit orbit-two" aria-hidden="true"></span>
            <img src="/assets/img/shield.png" alt="Illustration de sécurité et protection" />
          </div>
          <div class="visual-card-caption about-visual-summary">
            <strong>Clarté • méthode • fiabilité</strong>
            <span>Des environnements organisés, bien suivis et pensés pour progresser proprement.</span>
          </div>
          <div class="about-signal-grid" aria-label="Repères du profil">
            <div class="about-signal glass">
              <span class="about-signal-label">Vision</span>
              <strong>Clarté</strong>
            </div>
            <div class="about-signal glass">
              <span class="about-signal-label">Priorité</span>
              <strong>Fiabilité</strong>
            </div>
            <div class="about-signal glass">
              <span class="about-signal-label">Cap</span>
              <strong>Progression</strong>
            </div>
          </div>
          <div class="about-tech-icons" aria-label="Aperçu des domaines techniques">
            <span class="about-tech-icon" title="Linux"><img src="/assets/img/linux.png" alt="Linux" /><em>Linux</em></span>
            <span class="about-tech-icon" title="Réseau"><img src="/assets/img/network.png" alt="Réseau" /><em>Réseau</em></span>
            <span class="about-tech-icon" title="Cloud"><img src="/assets/img/cloud.png" alt="Cloud" /><em>Cloud</em></span>
            <span class="about-tech-icon" title="Cybersécurité"><img src="/assets/img/cybersecurity.png" alt="Cybersécurité" /><em>Sécurité</em></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 3 — POURQUOI LA SPÉCIALITÉ SISR ME CORRESPOND -->
  <section class="profile-section reveal sisr-section">
    <div class="profile-section-content">
      <div class="sisr-heading-shell glass reveal" data-spotlight>
        ${sectionHeader('Spécialité', 'Pourquoi la spécialité SISR me correspond', 'Un choix cohérent pour approfondir les domaines techniques qui me correspondent le mieux au quotidien.')}
      </div>
      <div class="sisr-static-grid interactive">
        <article class="sisr-static-card glass reveal" data-spotlight data-tilt-card>
          <span class="sisr-card-kicker">SISR • systèmes</span>
          <div class="sisr-feature-image">
            <img src="/assets/img/sys.png" alt="Systèmes Windows et Linux" />
          </div>
          <h3>Systèmes</h3>
          <p>L’administration des systèmes m’intéresse pour la logique des services, la gestion des comptes et le maintien d’un environnement stable.</p>
          <span class="sisr-card-footer">Stabilité & administration</span>
        </article>

        <article class="sisr-static-card glass reveal" data-spotlight data-tilt-card>
          <span class="sisr-card-kicker">SISR • réseau</span>
          <div class="sisr-feature-image">
            <img src="/assets/img/rez.png" alt="Architecture réseau" />
          </div>
          <h3>Réseaux</h3>
          <p>Le réseau me plaît pour sa dimension concrète : architecture, segmentation et compréhension de la circulation des flux.</p>
          <span class="sisr-card-footer">Architecture & flux</span>
        </article>

        <article class="sisr-static-card glass reveal" data-spotlight data-tilt-card>
          <span class="sisr-card-kicker">SISR • sécurité</span>
          <div class="sisr-feature-image">
            <img src="/assets/img/cyber.png" alt="Sécurité et cybersécurité" />
          </div>
          <h3>Cybersécurité</h3>
          <p>La sécurité est pour moi une exigence transversale : contrôler les accès, protéger l’existant et renforcer les bonnes pratiques.</p>
          <span class="sisr-card-footer">Protection & contrôle</span>
        </article>
      </div>
    </div>
  </section>

  <!-- SECTION 4 — MA MANIÈRE DE TRAVAILLER -->
  <section class="profile-section reveal methodology-section">
    <div class="profile-section-content methodology-content-full">
      ${sectionHeader('Méthode', 'Ma manière de travailler', 'Une façon de travailler simple, progressive et rigoureuse.')}
      <div class="methods-grid methods-grid-clean interactive">
        ${methodCard('<img src="/assets/img/Structure.jpg" alt="Structure" />', Icons.Check({ size: 22 }), 'Structure', 'Je préfère poser un cadre clair avant d’agir : comprendre, organiser, puis intervenir.')}
        ${methodCard('<img src="/assets/img/adaptation.jpg" alt="Adaptation" />', Icons.Check({ size: 22 }), 'Adaptation', 'Je peux prendre en main un nouvel environnement en observant rapidement son fonctionnement.')}
        ${methodCard('<img src="/assets/img/perseverance.jpg" alt="Persévérance" />', Icons.Check({ size: 22 }), 'Persévérance', 'Quand un problème résiste, je préfère analyser et tester plutôt que contourner trop vite.')}
        ${methodCard('<img src="/assets/img/curiosite-technique.jpg" alt="Curiosité technique" />', Icons.Check({ size: 22 }), 'Curiosité technique', 'J’aime comprendre le pourquoi d’un fonctionnement, pas seulement appliquer une suite d’étapes.')}
      </div>
    </div>
  </section>

  <!-- SECTION 5 — LES ENVIRONNEMENTS QUI M'ATTIRENT LE PLUS -->
  <section class="profile-section reveal environments-section">
    <div class="profile-section-content">
      ${sectionHeader('Environnements', 'Les environnements qui m’attirent le plus', 'Des domaines concrets dans lesquels je souhaite gagner en autonomie et en efficacité.')}
      <div class="environment-focus-grid interactive">
        ${environmentCard('/assets/img/windows-linux.png', 'Windows et Linux', 'Windows / Linux', 'Administration de base, services, comptes, droits et logique de durcissement.', 'Base système')}
        ${environmentCard('/assets/img/network-diagram.png', 'Services réseau', 'Services réseau', 'DNS, DHCP, segmentation et compréhension de la circulation des flux.', 'Services utiles')}
        ${environmentCard('/assets/img/firewall.png', 'Sécurisation des accès', 'Sécurisation', 'Pare-feu, filtrage, contrôle des accès et bonnes pratiques de protection.', 'Accès protégés')}
        ${environmentCard('/assets/img/virtualization.png', 'Virtualisation et machines virtuelles', 'Virtualisation', 'Environnements de test, déploiements et prise en main d’infrastructures virtualisées.', 'Tests & VM')}
        ${environmentCard('/assets/img/documentation.png', 'Documentation technique', 'Documentation', 'Procédures, comptes rendus, schémas et supports utiles pour le suivi.', 'Traçabilité', '/#/documentation')}
        ${environmentCard('/assets/img/troubleshooting.png', 'Résolution de problèmes', 'Résolution de problèmes', 'Analyser une cause, tester, isoler l’erreur et rétablir un fonctionnement stable.', 'Diagnostic')}
      </div>
    </div>
  </section>

  <!-- SECTION 6 — PROJECTION / CE QUE JE VISE -->
  <section class="profile-section reveal projection-section">
    <div class="profile-section-content">
      ${sectionHeader('Projection', 'Ce que je vise', 'Une trajectoire lisible entre consolidation des bases et montée en responsabilité.')}
      <div class="projection-target-grid projection-target-grid-compact interactive">
        ${targetCard('Court terme', '/assets/img/stage.png', 'Alternance et immersion professionnelle', 'Trouver une alternance pour consolider mes bases', 'Consolider mes bases en systèmes et réseaux au contact d’un environnement professionnel.', 'target-card-primary')}
        ${targetCard('Moyen terme', '/assets/img/goal.png', 'Montée en compétence sur des infrastructures', 'Évoluer vers un profil plus complet', 'Développer un profil capable de gérer un environnement plus complet avec une dimension sécurité croissante.', 'target-card-secondary')}
      </div>
    </div>
  </section>

  <!-- SECTION 7 — ÉQUILIBRE PERSONNEL -->
  <section class="profile-section reveal balance-section">
    <div class="profile-section-content">
      ${sectionHeader('Équilibre', 'Ce qui m’équilibre aussi', 'Des activités qui soutiennent la régularité, l’analyse et l’ouverture sans casser la ligne professionnelle.')}
      <div class="balance-pillars">
        ${balancePillar('/assets/img/sport.png', 'Discipline et énergie', 'Discipline & énergie', 'Le sport m’aide à garder régularité, concentration et sens de l’effort dans la durée.', 'Régularité')}
        ${balancePillar('/assets/img/reading.png', 'Réflexion et curiosité', 'Réflexion & curiosité', 'La lecture nourrit ma capacité à prendre du recul, à mieux analyser et à rester curieuse.', 'Analyse')}
        ${balancePillar('/assets/img/travel.png', 'Ouverture et découverte', 'Ouverture & découverte', 'Découvrir d’autres contextes me pousse à rester ouverte, adaptable et attentive.', 'Ouverture')}
      </div>
    </div>
  </section>

  <!-- SECTION 8 — CONTACT + CTA FINAL -->
  <section class="profile-section reveal contact-section">
    <div class="profile-section-content contact-layout contact-layout-merged">
      <div class="profile-text-panel contact-copy glass reveal" data-spotlight data-tilt-card>
        ${sectionHeader('Contact', 'Me contacter')}
        <p class="contact-intro">Disponible pour échanger autour d’une alternance ou d’un projet. Si mon profil correspond à votre besoin, je serai ravie d’en discuter rapidement.</p>
        <div class="contact-quick-actions">
          <button type="button" class="btn btn-primary contact-copy-button" data-copy-email="chamsabbassi78@gmail.com" data-default-label="Copier mon email">
            <span class="btn-label">Copier mon email</span>
          </button>
          <a class="btn btn-outline" href="https://www.linkedin.com/in/doha-abbassi" target="_blank" rel="noreferrer noopener" aria-label="Ouvrir LinkedIn">
            <span class="btn-label">Ouvrir LinkedIn</span>
          </a>
        </div>
      </div>
      <div class="contact-grid interactive">
        ${contactCard('<img src="/assets/img/gmail.png" alt="Email" />', 'Email', 'chamsabbassi78@gmail.com', 'Envoyer un email', 'mailto:chamsabbassi78@gmail.com')}
        ${contactCard('<img src="/assets/img/tel.png" alt="Téléphone" />', 'Téléphone', '+33 6 09 69 57 34', 'Appeler', 'tel:+33609695734')}
        ${contactCard('<img src="/assets/img/linkedin.png" alt="LinkedIn" />', 'LinkedIn', 'linkedin.com/in/doha-abbassi', 'Voir le profil', 'https://www.linkedin.com/in/doha-abbassi')}
        ${contactCard('<img src="/assets/img/github.png" alt="GitHub" />', 'GitHub', 'github.com/abbadoha', 'Voir les projets', 'https://github.com/abbadoha')}
      </div>
      <div class="contact-cta-inline glass reveal" data-spotlight>
        <div class="contact-cta-copy">
          <strong>Poursuivre la visite</strong>
          <span>Retrouver aussi mes projets, mes compétences et ma veille.</span>
        </div>
        <div class="cta-final-actions contact-cta-actions">
          ${Button({ label: 'Voir mes projets', href: '/#/projects', variant: 'primary' })}
          ${Button({ label: 'Voir mes compétences', href: '/#/skills', variant: 'outline' })}
          ${Button({ label: 'Voir ma veille', href: '/#/watch', variant: 'ghost' })}
        </div>
      </div>
    </div>
  </section>
</section>
  `;
}
