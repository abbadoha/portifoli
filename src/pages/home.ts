// src/pages/home.ts
// Page d'accueil premium, complète, interactive

import { Button, Chip } from '../components/ui';

export default function Home() {
  return `
<!-- SECTION A: HERO -->
<section class="home-hero">
  <div class="hero-bg" style="background: url('/assets/img/hero.gif') center/cover; opacity: 0.4;"></div>
  <div class="hero-overlay"></div>
  <div class="hero-card glass glass-strong reveal">
    <h1 class="hero-title">ABBASSI DOHA</h1>
    <p class="hero-subtitle">Étudiante BTS SIO — Option SISR</p>
    <p class="hero-line">Réseaux, Systèmes & Cybersécurité</p>
    <div class="hero-chips">
      ${Chip({ label: 'Réseaux' })}
      ${Chip({ label: 'Systèmes' })}
      ${Chip({ label: 'Cybersécurité' })}
    </div>
    <p class="hero-pitch">
      Étudiante passionnée par les infrastructures réseaux sécurisées, l'administration Windows Server et Linux, 
      et le durcissement de systèmes. Habituée aux outils enterprise (AD DS, pfSense, Proxmox) et à la veille 
      en cybersécurité, notamment sur les enjeux 5G et la segmentation réseau.
    </p>
    <p class="hero-location">📍 Trappes (78190), France</p>
    <div class="hero-cta">
      ${Button({ label: 'Voir mon profil', href: '/#/profile', variant: 'primary' })}
      ${Button({ label: 'Découvrir mes projets', href: '/#/projects', variant: 'primary' })}
      ${Button({ label: 'Veille 5G', href: '/#/watch', variant: 'ghost' })}
    </div>
    <div class="hero-secondary">
      ${Button({ label: 'Télécharger mon CV', href: '/#/downloads', variant: 'outline' })}
    </div>
  </div>
</section>

<!-- SECTION B: BADGES PREUVES RAPIDES -->
<section class="badges-section reveal">
  <h2 class="section-title">Preuves rapides</h2>
  <div class="badges-grid">
    <div class="badge-card glass" title="Formation actuelle (2024–2026)">
      <strong>BTS SIO SISR — 2024–2026</strong>
      <span class="badge-subtext">Lycée Jean Vilar, Plaisir</span>
    </div>
    <div class="badge-card glass" title="Certification de cybersécurité (ANSSI)">
      <strong>SecNumAcadémie (ANSSI) — 2025</strong>
      <span class="badge-subtext">Certification reconnue</span>
    </div>
    <div class="badge-card glass" title="Expérience professionnelle (2025)">
      <strong>Stage SI — Mairie de Trappes</strong>
      <span class="badge-subtext">05–07/2025 (3 mois)</span>
    </div>
  </div>
</section>

<!-- SECTION C: À PROPOS (COMPÉTENCES TECHNIQUES) -->
<section class="about-section glass reveal">
  <h2 class="section-title">À propos de mes compétences</h2>
  <p class="about-intro">Domaines couverts au fil de ma formation et mes projets :</p>
  <div class="about-grid">
    <div class="about-item">
      <span class="about-icon">🖥️</span>
      <strong>Systèmes Windows Server</strong>
      <p>AD DS, DNS, DHCP, GPO, durcissement basique, authentification.</p>
    </div>
    <div class="about-item">
      <span class="about-icon">🌐</span>
      <strong>Réseaux & Segmentation</strong>
      <p>VLAN, routage, NAT, firewalling, Wireshark, administration pfSense.</p>
    </div>
    <div class="about-item">
      <span class="about-icon">🐧</span>
      <strong>Systèmes Linux</strong>
      <p>Debian/Ubuntu, SSH, services web (Apache/Nginx), hardening.</p>
    </div>
    <div class="about-item">
      <span class="about-icon">🔐</span>
      <strong>Sécurité & Durcissement</strong>
      <p>Règles firewall, HTTPS/TLS, audit de sécurité, veille menaces.</p>
    </div>
    <div class="about-item">
      <span class="about-icon">⚙️</span>
      <strong>Virtualisation & Lab</strong>
      <p>VMware ESXi, Proxmox, création d'environnements de test isolés.</p>
    </div>
    <div class="about-item">
      <span class="about-icon">📋</span>
      <strong>ITSM & Documentation</strong>
      <p>GLPI (ticketing), procédures, runbooks, communication technique.</p>
    </div>
  </div>
</section>

<!-- SECTION D: COMPÉTENCES CLÉS (6 CARDS) -->
<section class="skills-section reveal">
  <h2 class="section-title">Compétences clés</h2>
  <div class="skills-grid">
    <div class="skill-card glass" data-skill="networks">
      <h3>Réseaux & Segmentation</h3>
      <p>VLAN, routage avancé, segmentation de trafic, administration pfSense.</p>
    </div>
    <div class="skill-card glass" data-skill="windows">
      <h3>Systèmes Windows</h3>
      <p>Active Directory, DNS, DHCP, GPO, maintenance et sécurisation.</p>
    </div>
    <div class="skill-card glass" data-skill="linux">
      <h3>Systèmes Linux</h3>
      <p>Debian/Ubuntu, services web, SSH, firewall, hardening basique.</p>
    </div>
    <div class="skill-card glass" data-skill="security">
      <h3>Sécurité & Durcissement</h3>
      <p>Règles firewall, HTTPS/TLS, audit de configuration, veille menaces.</p>
    </div>
    <div class="skill-card glass" data-skill="virt">
      <h3>Virtualisation & Lab</h3>
      <p>VMware ESXi, Proxmox, création d'environnements isolés et reproductibles.</p>
    </div>
    <div class="skill-card glass" data-skill="itsm">
      <h3>ITSM & Documentation</h3>
      <p>Ticketing (GLPI), procédures, documentation technique, communication.</p>
    </div>
  </div>
</section>

<!-- SECTION E: PROJETS MIS EN AVANT -->
<section class="projects-section reveal">
  <h2 class="section-title">Projets mis en avant</h2>
  <div class="projects-grid">
    <div class="project-card glass">
      <h3>Infrastructure segmentée avec pfSense</h3>
      <p class="project-objective">Déploiement d'une infrastructure réseau sécurisée avec segmentation VLAN et règles firewall avancées.</p>
      <div class="project-techs">
        ${Chip({ label: 'pfSense' })}
        ${Chip({ label: 'VLAN' })}
        ${Chip({ label: 'Firewall' })}
      </div>
      <p class="project-result"><strong>Résultat :</strong> À compléter avec preuves (captures d'écran, rapide de config).</p>
      <a href="/#/projects" class="project-link">Voir détails →</a>
    </div>
    <div class="project-card glass">
      <h3>Annuaire & services Windows (AD DS/DNS/DHCP)</h3>
      <p class="project-objective">Mise en place complète d'Active Directory, DNS interne et DHCP sur infra virtualisée.</p>
      <div class="project-techs">
        ${Chip({ label: 'Active Directory' })}
        ${Chip({ label: 'DNS' })}
        ${Chip({ label: 'DHCP' })}
      </div>
      <p class="project-result"><strong>Résultat :</strong> À compléter avec architecture et tests.</p>
      <a href="/#/projects" class="project-link">Voir détails →</a>
    </div>
    <div class="project-card glass">
      <h3>Services Linux & durcissement (SSH/Web)</h3>
      <p class="project-objective">Déploiement de services Linux sécurisés (SSH hardening, Nginx, certificats TLS).</p>
      <div class="project-techs">
        ${Chip({ label: 'Linux' })}
        ${Chip({ label: 'Nginx' })}
        ${Chip({ label: 'TLS/SSL' })}
      </div>
      <p class="project-result"><strong>Résultat :</strong> À compléter avec configurations commentées.</p>
      <a href="/#/projects" class="project-link">Voir détails →</a>
    </div>
  </div>
</section>

<!-- SECTION F: VEILLE 5G -->
<section class="watch-section glass reveal">
  <h2 class="section-title">Veille : Cybersécurité & 5G</h2>
  <div class="watch-content">
    <p class="watch-pitch">
      La 5G introduit des défis de sécurité majeurs : <strong>network slicing</strong> pour isoler les services critiques, 
      <strong>MEC (Multi-access Edge Computing)</strong> rapprochant les données du réseau, explosion des <strong>IoT</strong> connectés, 
      et nouvelles surfaces d'attaque via les <strong>APIs ouvertes</strong>. Cette veille explore ces risques et les meilleures pratiques.
    </p>
    <div class="watch-tags">
      <span class="watch-tag">#NetworkSlicing</span>
      <span class="watch-tag">#MEC-Edge</span>
      <span class="watch-tag">#SécuritéAPI</span>
    </div>
    <div class="watch-sources">
      <p><strong>Sources de référence :</strong></p>
      <ul>
        <li><a href="https://www.anssi.gouv.fr/" target="_blank" rel="noopener">ANSSI — Agence Nationale Cybersécurité</a></li>
        <li><a href="https://www.enisa.europa.eu/" target="_blank" rel="noopener">ENISA — Cybersecurity Authority (EU)</a></li>
      </ul>
    </div>
    <div class="watch-cta">
      ${Button({ label: 'Lire ma veille complète', href: '/#/watch', variant: 'primary' })}
    </div>
  </div>
</section>

<!-- SECTION G: MINI TIMELINE -->
<section class="timeline-section reveal">
  <h2 class="section-title">Mon parcours en un coup d'œil</h2>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content glass">
        <strong>2024–2026</strong>
        <p>BTS SIO Option SISR — Lycée Jean Vilar, Plaisir</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content glass">
        <strong>05–07/2025</strong>
        <p>Stage SI — Mairie de Trappes (3 mois)</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content glass">
        <strong>2025</strong>
        <p>Certification SecNumAcadémie (ANSSI)</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content glass">
        <strong>12/2025–01/2026</strong>
        <p>Mission ponctuelle: Agent de sûreté — Château de Versailles</p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION H: FOOTER CTA CONTACT -->
<section class="contact-cta reveal">
  <div class="glass glass-strong contact-card">
    <h2>Besoin de me contacter ?</h2>
    <p>Des questions sur mon parcours, mes projets ou mes compétences ?</p>
    ${Button({ label: 'Envoyer un message', href: '/#/contact', variant: 'primary' })}
  </div>
</section>
  `;
}
