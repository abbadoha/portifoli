// src/pages/home.ts
// Page d'accueil premium, complète, interactive

import { Button } from '../components/ui';

export default function Home() {
  return `
<section class="home-hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-container">
    <div class="hero-copy reveal">
      <h1 class="hero-name">ABBASSI DOHA</h1>
      <p class="hero-title">Étudiante BTS SIO — Option SISR</p>
      <p class="hero-subtitle">Réseaux, Systèmes & Cybersécurité</p>
      <p class="hero-description">
        Je conçois et administre des environnements systèmes et réseaux sécurisés, 
        en m’appuyant sur des expériences concrètes en stage et en laboratoire.
      </p>
      <div class="hero-cta">
        ${Button({ label: 'Voir mon profil', href: '/#/profile', variant: 'primary' })}
        ${Button({ label: 'Découvrir mes projets', href: '/#/projects', variant: 'primary' })}
      </div>
      <div class="hero-cta hero-cta-secondary">
        ${Button({ label: 'Veille 5G', href: '/#/watch', variant: 'ghost' })}
        ${Button({ label: 'Documentation et CV', href: '/#/documentation', variant: 'outline' })}
      </div>
    </div>

    <div class="hero-visual reveal">
      <div class="hero-profile-card glass glass-strong">
        <div class="hero-profile-image">
          <img src="/assets/img/avatar.jpg" alt="Doha Abbassi" class="hero-avatar-img">
        </div>
        <div class="hero-profile-body">
          <span class="hero-profile-label">Profil SISR</span>
          <h2>Administratrice systèmes & réseaux</h2>
          <p>Formation BTS SIO option SISR avec expériences terrain en administration, sécurité et virtualisation.</p>
          <div class="hero-profile-stats">
            <div>
              <strong>Windows/Linux</strong>
              <span>Environnements maîtrisés</span>
            </div>
            <div>
              <strong>Réseaux & Sécurité</strong>
              <span>Domaines d'expertise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="badges-section reveal section-surface">
  <h2 class="section-title">Repères clés</h2>
  <p class="section-subtitle">Points forts de mon parcours</p>
  <div class="badges-grid">
    <article class="badge-card glass badge-card-link" onclick="window.location.href='/#/parcours'" style="cursor: pointer;">
      <div class="badge-card-bg" style="background-image: url('/assets/img/network-map.png');"></div>
      <img src="/assets/img/network-map.png" alt="BTS SIO" class="badge-card-icon">
      <strong>BTS SIO SISR — 2024–2026</strong>
      <p>Formation orientée systèmes, réseaux, cybersécurité et virtualisation.</p>
      <span class="badge-card-link-hint">Voir le parcours →</span>
    </article>
    <article class="badge-card glass badge-card-link" onclick="window.location.href='/#/certifications'" style="cursor: pointer;">
      <div class="badge-card-bg" style="background-image: url('/assets/img/shield.png');"></div>
      <img src="/assets/img/shield.png" alt="ANSSI" class="badge-card-icon">
      <strong>SecNumAcadémie ANSSI — 2025</strong>
      <p>Certification renforçant mes bases en cybersécurité.</p>
      <span class="badge-card-link-hint">Voir la certification →</span>
    </article>
    <article class="badge-card glass badge-card-link" onclick="window.location.href='/#/stages'" style="cursor: pointer;">
      <div class="badge-card-bg" style="background-image: url('/assets/img/server-rack.png');"></div>
      <img src="/assets/img/server-rack.png" alt="Stage" class="badge-card-icon">
      <strong>Stage SI — Mairie de Trappes</strong>
      <p>Expérience terrain en support, maintenance et environnement réel.</p>
      <span class="badge-card-link-hint">Voir le stage →</span>
    </article>
  </div>
</section>

<section class="about-section reveal section-surface">
  <div class="about-shell glass glass-strong">
    <div class="about-heading">
      <span class="section-eyebrow">Profil</span>
      <h2 class="section-title">À propos de mon profil</h2>
      <p class="section-subtitle">Mon positionnement en BTS SIO option SISR</p>
    </div>
    <div class="about-content">
      <div class="about-text glass">
        <strong class="about-text-kicker">Approche terrain</strong>
        <p>
          Étudiante en BTS SIO option SISR, j'évolue sur l'administration systèmes, les réseaux et la cybersécurité.
          Mon parcours repose sur des expériences concrètes en support, Windows/Linux, services réseau et virtualisation.
          Ce portfolio présente mes compétences, mes réalisations et ma progression terrain.
        </p>
      </div>
      <div class="about-pillars">
        <div class="pillar-item">
          <img src="/assets/img/server-rack.png" alt="Support" class="pillar-icon">
          <span>Support informatique</span>
        </div>
        <div class="pillar-item">
          <img src="/assets/img/network.png" alt="Réseaux" class="pillar-icon">
          <span>Réseaux</span>
        </div>
        <div class="pillar-item">
          <img src="/assets/img/winserv.png" alt="Systèmes" class="pillar-icon">
          <span>Systèmes</span>
        </div>
        <div class="pillar-item">
          <img src="/assets/img/shield.png" alt="Cybersécurité" class="pillar-icon">
          <span>Cybersécurité</span>
        </div>
        <div class="pillar-item">
          <img src="/assets/img/proxmox.png" alt="Virtualisation" class="pillar-icon">
          <span>Virtualisation</span>
        </div>
        <div class="pillar-item">
          <img src="/assets/img/glpi.png" alt="Documentation" class="pillar-icon">
          <span>Documentation</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="skills-section reveal section-surface">
  <h2 class="section-title">Compétences clés</h2>
  <p class="section-subtitle">Domaines techniques maîtrisés en SISR</p>
  <div class="skills-grid immersive">
    <article class="skill-card glass" style="background-image: url('/assets/img/server-rack.png'); cursor: pointer;" onclick="window.location.href='/#/skills'" role="link" tabindex="0" onkeydown="if(event.key==='Enter' || event.key===' '){event.preventDefault();window.location.href='/#/skills';}" aria-label="Aller a la page Competences">
      <div class="skill-card-overlay"></div>
      <img src="/assets/img/winserv.png" alt="Windows Server" class="skill-card-logo">
      <h3>Windows Server</h3>
      <p>AD DS, DNS, DHCP, GPO, sécurité et maintenance d'infrastructures.</p>
    </article>
    <article class="skill-card glass" style="background-image: url('/assets/img/datacenter.png'); cursor: pointer;" onclick="window.location.href='/#/skills'" role="link" tabindex="0" onkeydown="if(event.key==='Enter' || event.key===' '){event.preventDefault();window.location.href='/#/skills';}" aria-label="Aller a la page Competences">
      <div class="skill-card-overlay"></div>
      <img src="/assets/img/linux.png" alt="Linux" class="skill-card-logo">
      <h3>Linux & services</h3>
      <p>Debian/Ubuntu, SSH, services web, hardening et administration système.</p>
    </article>
    <article class="skill-card glass" style="background-image: url('/assets/img/network-map.png'); cursor: pointer;" onclick="window.location.href='/#/skills'" role="link" tabindex="0" onkeydown="if(event.key==='Enter' || event.key===' '){event.preventDefault();window.location.href='/#/skills';}" aria-label="Aller a la page Competences">
      <div class="skill-card-overlay"></div>
      <img src="/assets/img/network.png" alt="Réseau" class="skill-card-logo">
      <h3>Réseaux</h3>
      <p>VLAN, routage, NAT, segmentation, monitoring et firewalling avancé.</p>
    </article>
    <article class="skill-card glass" style="background-image: url('/assets/img/cyber-lock.png'); cursor: pointer;" onclick="window.location.href='/#/skills'" role="link" tabindex="0" onkeydown="if(event.key==='Enter' || event.key===' '){event.preventDefault();window.location.href='/#/skills';}" aria-label="Aller a la page Competences">
      <div class="skill-card-overlay"></div>
      <img src="/assets/img/shield.png" alt="Sécurité" class="skill-card-logo">
      <h3>Cybersécurité</h3>
      <p>Durcissement, pare-feu, analyse de risques et bonnes pratiques ANSSI.</p>
    </article>
    <article class="skill-card glass" style="background-image: url('/assets/img/cloud-infra.png'); cursor: pointer;" onclick="window.location.href='/#/skills'" role="link" tabindex="0" onkeydown="if(event.key==='Enter' || event.key===' '){event.preventDefault();window.location.href='/#/skills';}" aria-label="Aller a la page Competences">
      <div class="skill-card-overlay"></div>
      <img src="/assets/img/proxmox.png" alt="Virtualisation" class="skill-card-logo">
      <h3>Virtualisation</h3>
      <p>Proxmox, VMware, lab hyperconvergé et déploiement d'environnements isolés.</p>
    </article>
    <article class="skill-card glass" style="background-image: url('/assets/img/security-monitor.png'); cursor: pointer;" onclick="window.location.href='/#/skills'" role="link" tabindex="0" onkeydown="if(event.key==='Enter' || event.key===' '){event.preventDefault();window.location.href='/#/skills';}" aria-label="Aller a la page Competences">
      <div class="skill-card-overlay"></div>
      <img src="/assets/img/glpi.png" alt="ITSM" class="skill-card-logo">
      <h3>ITSM & Documentation</h3>
      <p>GLPI, tickets, procédures et communication métier pour un suivi rigoureux.</p>
    </article>
  </div>
</section>

<section class="projects-section reveal section-surface">
  <h2 class="section-title">Projets mis en avant</h2>
  <p class="section-subtitle">Réalisation concrètes en systèmes et réseaux</p>
  <div class="projects-grid">
    <article class="project-card glass project-immersive">
      <div class="project-media" style="background-image: url('/assets/img/network-diagram.png');"></div>
      <div class="project-card-content">
        <img src="/assets/img/pfsense.png" alt="pfSense" class="project-media-icon">
        <h3>Infrastructure segmentée avec pfSense</h3>
        <p class="project-context"><strong>Contexte :</strong> Besoin d’un réseau segmenté pour isoler les services.</p>
      <p class="project-objective"><strong>Objectif :</strong> Firewall, segmentation VLAN et règles de filtrage centralisées.</p>
      <ul class="project-actions">
        <li>Configuration VLAN et NAT</li>
        <li>Déploiement du firewall pfSense</li>
        <li>Création de règles de filtrage adaptées</li>
      </ul>
      <p class="project-result"><strong>Résultat :</strong> Infrastructure isolée et sécurisée, meilleure gestion du trafic.</p>
        <a href="/#/projects" class="btn btn-outline project-action">Voir le détail</a>
      </div>
    </article>
    <article class="project-card glass project-immersive">
      <div class="project-media" style="background-image: url('/assets/img/server.png');"></div>
      <div class="project-card-content">
        <img src="/assets/img/winserv.png" alt="Windows Server" class="project-media-icon">
        <h3>Active Directory / services Windows</h3>
        <p class="project-context"><strong>Contexte :</strong> Projet de domaine pour centraliser la gestion des utilisateurs.</p>
      <p class="project-objective"><strong>Objectif :</strong> Déployer un domaine AD avec DNS/DHCP internes.</p>
      <ul class="project-actions">
        <li>Installation d’Active Directory</li>
        <li>Configuration de DNS et DHCP</li>
        <li>Structure de comptes et groupes</li>
      </ul>
      <p class="project-result"><strong>Résultat :</strong> Authentification centralisée et gestion simplifiée.</p>
        <a href="/#/projects" class="btn btn-outline project-action">Voir le détail</a>
      </div>
    </article>
    <article class="project-card glass project-immersive">
      <div class="project-media" style="background-image: url('/assets/img/cloud.png');"></div>
      <div class="project-card-content">
        <img src="/assets/img/linux.png" alt="Linux" class="project-media-icon">
        <h3>Services Linux & durcissement</h3>
        <p class="project-context"><strong>Contexte :</strong> Améliorer la sécurité des services Linux exposés.</p>
      <p class="project-objective"><strong>Objectif :</strong> Sécuriser des services SSH et web sur Linux.</p>
      <ul class="project-actions">
        <li>Hardening du serveur Linux</li>
        <li>Configuration SSH et Nginx</li>
        <li>Mise en place de TLS pour les accès</li>
      </ul>
      <p class="project-result"><strong>Résultat :</strong> Serveur durci, accès sécurisé et documentation claire.</p>
        <a href="/#/projects" class="btn btn-outline project-action">Voir le détail</a>
      </div>
    </article>
  </div>
</section>


<section class="watch-section glass reveal section-surface">
  <div class="watch-panel">
    <div class="watch-panel-content">
      <span class="section-eyebrow watch-eyebrow">Veille tech</span>
      <h2 class="section-title">Veille technologique : cybersécurité & 5G</h2>
      <p class="watch-pitch">
        Je surveille la 5G et les risques cyber pour identifier les pratiques utiles aux réseaux professionnels.
        Cette veille guide mes choix techniques et renforce mes projets SISR.
      </p>
      <div class="watch-tags">
        <span class="watch-tag">#Cybersécurité</span>
        <span class="watch-tag">#5G</span>
        <span class="watch-tag">#Infrastructure</span>
      </div>
      <div class="watch-sources glass">
        <strong>Axes suivis</strong>
        <ul>
          <li>ANSSI — bonnes pratiques cybersécurité</li>
          <li>ENISA — risques et contrôles 5G</li>
        </ul>
      </div>
      <div class="watch-cta">
        ${Button({ label: 'Lire ma veille complète', href: '/#/watch', variant: 'primary' })}
      </div>
    </div>
    <aside class="watch-panel-visual-card glass">
      <div class="watch-panel-visual-shell">
        <span class="watch-visual-glow watch-visual-glow-one" aria-hidden="true"></span>
        <span class="watch-visual-glow watch-visual-glow-two" aria-hidden="true"></span>
        <div class="watch-panel-visual" style="background-image: url('/assets/img/cyber-lock.png');"></div>
      </div>
      <div class="watch-visual-note">
        <strong>Objectif</strong>
        <span>Transformer l’actualité cyber en choix techniques concrets pour mes projets SISR.</span>
      </div>
      <div class="watch-mini-grid">
        <div class="watch-mini-item">
          <span>Sources</span>
          <strong>ANSSI • ENISA</strong>
        </div>
        <div class="watch-mini-item">
          <span>Focus</span>
          <strong>Risques 5G & sécurité</strong>
        </div>
      </div>
    </aside>
  </div>
</section>


<section class="timeline-section reveal section-surface">
  <h2 class="section-title">Mon parcours en un coup d'œil</h2>
  <p class="section-subtitle">Les grandes étapes de ma progression, de la formation aux expériences concrètes.</p>
  <div class="timeline-container">
    <div class="parcours-groups">
      <!-- GROUPE 1: FORMATION -->
      <div class="parcours-group">
        <h3 class="group-title">Formation</h3>
        <div class="group-cards">
          <div class="timeline-card glass timeline-card-active" onclick="window.location.href='/#/parcours'">
            <div class="timeline-icon">
              <img src="/assets/img/BTS.png" alt="BTS" class="timeline-icon-img">
            </div>
            <h4>BTS SIO SISR</h4>
            <p class="timeline-description">Lycée Jean Vilar</p>
            <p class="timeline-date">2024–2026</p>
          </div>
          <div class="timeline-card glass" onclick="window.location.href='/#/parcours'">
            <div class="timeline-icon">
              <img src="/assets/img/lycée.png" alt="Bac" class="timeline-icon-img">
            </div>
            <h4>Bac STMG</h4>
            <p class="timeline-description">Lycée La Plaine de Neauphle</p>
            <p class="timeline-date">2024</p>
          </div>
        </div>
      </div>

      <!-- GROUPE 2: EXPÉRIENCES TERRAIN -->
      <div class="parcours-group">
        <h3 class="group-title">Expériences terrain</h3>
        <div class="group-cards">
          <div class="timeline-card glass" onclick="window.location.href='/#/stages'">
            <div class="timeline-icon">
              <img src="/assets/img/stage.png" alt="Stage" class="timeline-icon-img">
            </div>
            <h4>Stage SI — Mairie de Trappes</h4>
            <p class="timeline-description">Approfondissement technique, support, réseau</p>
            <p class="timeline-date">déc 2025 – mars 2026</p>
          </div>
          <div class="timeline-card glass" onclick="window.location.href='/#/stages'">
            <div class="timeline-icon">
              <img src="/assets/img/stage.png" alt="Stage" class="timeline-icon-img">
            </div>
            <h4>Stage SI — Mairie de Trappes</h4>
            <p class="timeline-description">Support, maintenance, découverte environnement pro</p>
            <p class="timeline-date">mai – juillet 2025</p>
          </div>
          <div class="timeline-card glass" onclick="window.location.href='/#/profile'">
            <div class="timeline-icon">
              <img src="/assets/img/work.png" alt="Bénévolat" class="timeline-icon-img">
            </div>
            <h4>Bénévolat informatique</h4>
            <p class="timeline-description">Support utilisateurs, assistance informatique</p>
            <p class="timeline-date">2023–2024</p>
          </div>
        </div>
      </div>

      <!-- GROUPE 3: CERTIFICATIONS & OBJECTIF -->
      <div class="parcours-group">
        <h3 class="group-title">Certifications & projection</h3>
        <div class="group-cards">
          <div class="timeline-card glass" onclick="window.location.href='/#/profile'">
            <div class="timeline-icon">
              <img src="/assets/img/goal.png" alt="Objectif" class="timeline-icon-img">
            </div>
            <h4>Objectif professionnel</h4>
            <p class="timeline-description">Administratrice systèmes & réseaux</p>
            <p class="timeline-date">2026+</p>
          </div>
          <div class="timeline-card glass" onclick="window.location.href='/#/certifications'">
            <div class="timeline-icon">
              <img src="/assets/img/rgpd.png" alt="RGPD" class="timeline-icon-img">
            </div>
            <h4>Certification RGPD</h4>
            <p class="timeline-description">CNIL</p>
            <p class="timeline-date">2026</p>
          </div>
          <div class="timeline-card glass" onclick="window.location.href='/#/certifications'">
            <div class="timeline-icon">
              <img src="/assets/img/anssi.png" alt="SecNumAcadémie" class="timeline-icon-img">
            </div>
            <h4>Certification SecNumAcadémie</h4>
            <p class="timeline-description">ANSSI</p>
            <p class="timeline-date">2025</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="contact-cta reveal section-surface">
  <div class="glass glass-strong contact-card">
    <div class="contact-cta-logo-shell" aria-hidden="true">
      <img src="/assets/img/contact.png" alt="" class="contact-cta-logo" />
    </div>
    <p>Questions sur mon parcours SISR, mes projets ou mes compétences en cybersécurité ?</p>
    ${Button({ label: 'Me contacter', href: '/#/contact', variant: 'primary' })}
  </div>
</section>
  `;
}