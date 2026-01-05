// src/pages/profile.ts
// Page profil interactive avec accordéon, tabs, toggle téléphone

import { Chip, copyToClipboard, showToast } from '../components/ui';

export default function Profile() {
  // Setup interactivité après rendu
  const setupProfileInteractions = () => {
    setTimeout(() => {
      // Copy email button
      const copyEmailBtn = document.querySelector('[data-copy-email]');
      if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
          copyToClipboard('chamsabbassi78@gmail.com');
          showToast('Email copié ✓');
        });
      }

      // Toggle téléphone révélation
      const revealPhoneBtn = document.querySelector('[data-reveal-phone]');
      const phoneDisplay = document.querySelector('[data-phone-display]');
      if (revealPhoneBtn && phoneDisplay) {
        let isRevealed = false;
        revealPhoneBtn.addEventListener('click', () => {
          isRevealed = !isRevealed;
          if (isRevealed) {
            phoneDisplay.textContent = '+33 06 09 69 57 34';
            revealPhoneBtn.textContent = '🔒 Masquer';
          } else {
            phoneDisplay.textContent = '+33 •• •• •• ••';
            revealPhoneBtn.textContent = '👁️ Révéler numéro';
          }
        });
      }

      // Tabs compétences
      document.querySelectorAll('[data-profile-tab]').forEach(tab => {
        tab.addEventListener('click', (e) => {
          const target = (e.currentTarget as HTMLElement).getAttribute('data-profile-tab');
          
          // Update active tab
          document.querySelectorAll('[data-profile-tab]').forEach(t => t.classList.remove('active'));
          (e.currentTarget as HTMLElement).classList.add('active');
          
          // Show corresponding panel
          document.querySelectorAll('[data-profile-panel]').forEach(panel => {
            const panelId = panel.getAttribute('data-profile-panel');
            if (panelId === target) {
              (panel as HTMLElement).style.display = 'block';
            } else {
              (panel as HTMLElement).style.display = 'none';
            }
          });
        });
      });

      // Accordéon "À propos"
      const accordionTrigger = document.querySelector('[data-profile-accordion]');
      if (accordionTrigger) {
        accordionTrigger.addEventListener('click', () => {
          const isExpanded = accordionTrigger.getAttribute('aria-expanded') === 'true';
          accordionTrigger.setAttribute('aria-expanded', String(!isExpanded));
        });
      }
    }, 100);
  };

  setupProfileInteractions();

  return `
<!-- A) Hero profil compact + badges -->
<section class="page-hero profile-hero">
  <div class="profile-hero-content">
    <h1>Doha ABBASSI</h1>
    <p class="profile-subtitle">Administratrice Systèmes & Réseaux en devenir</p>
    <div class="profile-badges">
      ${Chip({ label: 'BTS SIO SISR' })}
      ${Chip({ label: 'Trappes (78)' })}
      ${Chip({ label: 'Stage IT 2025' })}
    </div>
  </div>
</section>

<!-- B) Carte identité avec avatar placeholder + actions -->
<section class="page-content glass profile-identity-card">
  <div class="identity-card-grid">
    <div class="identity-avatar">
      <div class="avatar-placeholder">
        <span class="avatar-initials">DA</span>
      </div>
      <p class="avatar-note"><!-- 📷 PLACEHOLDER: Remplacer par photo professionnelle --></p>
    </div>
    
    <div class="identity-info">
      <h2>Informations de contact</h2>
      
      <div class="contact-item">
        <strong>📧 Email</strong>
        <p>chamsabbassi78@gmail.com</p>
        <button class="btn btn-ghost btn-sm" data-copy-email>📋 Copier</button>
      </div>
      
      <div class="contact-item">
        <strong>📱 Téléphone</strong>
        <p data-phone-display>+33 •• •• •• ••</p>
        <button class="btn btn-ghost btn-sm" data-reveal-phone>👁️ Révéler numéro</button>
      </div>
      
      <div class="contact-item">
        <strong>📍 Localisation</strong>
        <p>Trappes (78190), Île-de-France</p>
        <p class="text-secondary">Mobilité régionale • Télétravail possible</p>
      </div>
      
      <div class="profile-actions">
        <a href="/assets/docs/CV.pdf" class="btn btn-primary" download>
          📄 Télécharger le CV
        </a>
        <button class="btn btn-outline" disabled title="LinkedIn à ajouter">
          🔗 LinkedIn <small>(à remplacer)</small>
        </button>
        <button class="btn btn-outline" disabled title="GitHub à ajouter">
          💻 GitHub <small>(à remplacer)</small>
        </button>
      </div>
      <p class="placeholder-note"><!-- ⚠️ PLACEHOLDER: Remplacer liens LinkedIn/GitHub dans profile-actions --></p>
    </div>
  </div>
</section>

<!-- C) À propos avec accordéon version courte/longue -->
<section class="page-content glass profile-about">
  <h2>À propos de moi</h2>
  
  <div class="about-summary">
    <p>
      Étudiante en <strong>BTS SIO option SISR</strong> (Solutions d'Infrastructure, Systèmes et Réseaux), 
      je me spécialise dans l'administration de systèmes Windows/Linux, la gestion de réseaux TCP/IP, 
      et la sécurisation d'infrastructures IT.
    </p>
    <p>
      Passionnée par la <strong>cybersécurité</strong> et la <strong>documentation technique</strong>, 
      j'ai obtenu la certification <strong>SecNumAcadémie (ANSSI)</strong> et effectué un stage en environnement 
      municipal réel, où j'ai pu appliquer mes compétences en support utilisateur, administration serveur, 
      et gestion d'incidents.
    </p>
  </div>
  
  <div class="accordion" id="about-accordion">
    <button class="accordion-trigger" data-profile-accordion aria-expanded="false">
      <span>📖 En savoir plus sur mon parcours</span>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <div class="about-extended">
        <h3>Mon approche professionnelle</h3>
        <p>
          Ce qui me définit : <strong>rigueur, curiosité technique, et souci du détail</strong>. 
          En tant qu'administratrice systèmes en formation, je crois fermement que la documentation claire, 
          l'automatisation intelligente, et la sécurité dès la conception sont essentielles pour 
          une infrastructure IT robuste.
        </p>
        
        <h3>Ce que je recherche</h3>
        <p>
          Je suis activement à la recherche d'opportunités pour approfondir mes compétences en :
        </p>
        <ul>
          <li><strong>Administration réseaux</strong> : Routage, VLAN, VPN, firewall avancés</li>
          <li><strong>Virtualisation & Cloud</strong> : VMware, Hyper-V, infrastructure hybride</li>
          <li><strong>Sécurité IT</strong> : Hardening, audit, conformité RGPD, gestion incidents</li>
          <li><strong>Automatisation</strong> : PowerShell, Bash scripting, déploiement à échelle</li>
        </ul>
        
        <h3>Expérience concrète</h3>
        <p>
          Mon stage à la <strong>Mairie de Trappes</strong> (3 mois, mai–juillet 2025) m'a permis 
          de travailler sur une infrastructure réelle avec ~160 postes de travail, plusieurs serveurs 
          Windows Server, et un domaine Active Directory multi-sites. J'ai géré des tickets support L1/L2, 
          effectué des maintenances serveur, et participé à des audits de sécurité.
        </p>
        
        <p>
          En parallèle, j'ai réalisé des projets personnels (pfSense, Active Directory LAB, Linux hardening) 
          qui m'ont permis de renforcer mon autonomie et ma capacité à résoudre des problèmes complexes 
          en consultant documentation officielle et communautés techniques.
        </p>
        
        <h3>Valeurs professionnelles</h3>
        <ul>
          <li>🎯 <strong>Précision</strong> : Chaque configuration compte</li>
          <li>📚 <strong>Documentation</strong> : Partager les savoirs pour faciliter la maintenance</li>
          <li>🔐 <strong>Sécurité</strong> : Intégrer la sécurité dès la conception, pas en post-fix</li>
          <li>🤝 <strong>Communication</strong> : Expliquer clairement concepts techniques aux non-IT</li>
          <li>🚀 <strong>Apprentissage continu</strong> : Veille technologique active (5G, cloud, DevOps)</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- D) Compétences & outils avec tabs -->
<section class="page-content glass profile-skills">
  <h2>Compétences & Outils</h2>
  
  <div class="profile-tabs">
    <div class="profile-tabs-list">
      <button class="profile-tab active" data-profile-tab="reseaux">🌐 Réseaux</button>
      <button class="profile-tab" data-profile-tab="systemes">🖥️ Systèmes</button>
      <button class="profile-tab" data-profile-tab="securite">🔐 Sécurité</button>
      <button class="profile-tab" data-profile-tab="itsm">📋 ITSM</button>
    </div>
    
    <div class="profile-tabs-panels">
      <!-- Panel Réseaux -->
      <div class="profile-panel" data-profile-panel="reseaux" style="display: block;">
        <h3>Réseaux & Infrastructure</h3>
        <div class="skills-list">
          <div class="skill-item">
            <strong>TCP/IP</strong>
            <p>Modèle OSI, adressage IP, subnetting, routage statique/dynamique</p>
            <span class="level-badge">Bonnes bases</span>
          </div>
          <div class="skill-item">
            <strong>Services réseau</strong>
            <p>DNS, DHCP, NAT, VPN (OpenVPN, IPsec), VLAN 802.1Q</p>
            <span class="level-badge">En approfondissement</span>
          </div>
          <div class="skill-item">
            <strong>Firewalls</strong>
            <p>pfSense, iptables, ACL, filtrage par état, IDS/IPS notions</p>
            <span class="level-badge">Bonnes bases</span>
          </div>
          <div class="skill-item">
            <strong>Outils</strong>
            <p>Wireshark, nmap, tcpdump, ping/traceroute, diagnostic réseau</p>
            <span class="level-badge">Notions</span>
          </div>
        </div>
      </div>
      
      <!-- Panel Systèmes -->
      <div class="profile-panel" data-profile-panel="systemes" style="display: none;">
        <h3>Systèmes d'exploitation</h3>
        <div class="skills-list">
          <div class="skill-item">
            <strong>Windows Server</strong>
            <p>Active Directory, Group Policy, DNS/DHCP serveur, partages réseau</p>
            <span class="level-badge">Bonnes bases</span>
          </div>
          <div class="skill-item">
            <strong>Linux</strong>
            <p>Debian/Ubuntu, shell Bash, permissions, services systemd, SSH</p>
            <span class="level-badge">Bonnes bases</span>
          </div>
          <div class="skill-item">
            <strong>Virtualisation</strong>
            <p>VMware ESXi, Hyper-V, VirtualBox, snapshots, clonage</p>
            <span class="level-badge">En approfondissement</span>
          </div>
          <div class="skill-item">
            <strong>Scripting</strong>
            <p>PowerShell (automatisation Windows), Bash (automatisation Linux)</p>
            <span class="level-badge">Notions</span>
          </div>
        </div>
      </div>
      
      <!-- Panel Sécurité -->
      <div class="profile-panel" data-profile-panel="securite" style="display: none;">
        <h3>Sécurité IT</h3>
        <div class="skills-list">
          <div class="skill-item">
            <strong>Hardening</strong>
            <p>Sécurisation OS (Windows/Linux), désactivation services inutiles, firewall</p>
            <span class="level-badge">Bonnes bases</span>
          </div>
          <div class="skill-item">
            <strong>Authentification</strong>
            <p>Active Directory, Kerberos, LDAP, politiques mot de passe robustes</p>
            <span class="level-badge">Bonnes bases</span>
          </div>
          <div class="skill-item">
            <strong>Conformité</strong>
            <p>RGPD (sensibilisation), SecNumAcadémie ANSSI, bonnes pratiques cybersécurité</p>
            <span class="level-badge">Certifié</span>
          </div>
          <div class="skill-item">
            <strong>Outils</strong>
            <p>Fail2ban, UFW, certificats SSL/TLS, audit logs, monitoring sécurité</p>
            <span class="level-badge">Notions</span>
          </div>
        </div>
      </div>
      
      <!-- Panel ITSM -->
      <div class="profile-panel" data-profile-panel="itsm" style="display: none;">
        <h3>ITSM & Support</h3>
        <div class="skills-list">
          <div class="skill-item">
            <strong>Support utilisateur</strong>
            <p>Résolution incidents L1/L2, ticketing, formation utilisateurs</p>
            <span class="level-badge">Bonnes bases</span>
          </div>
          <div class="skill-item">
            <strong>Documentation</strong>
            <p>Rédaction procédures, guides admin, runbooks, documentation technique</p>
            <span class="level-badge">Bonnes bases</span>
          </div>
          <div class="skill-item">
            <strong>Monitoring</strong>
            <p>Zabbix, Nagios notions, alertes, dashboards métriques</p>
            <span class="level-badge">Notions</span>
          </div>
          <div class="skill-item">
            <strong>Outils</strong>
            <p>RDP, SSH/Putty, Git/GitHub, VSCode, ticketing systems</p>
            <span class="level-badge">Bonnes bases</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- E) Parcours timeline verticale -->
<section class="page-content glass profile-timeline">
  <h2>Parcours professionnel & académique</h2>
  
  <div class="timeline-vertical">
    <div class="timeline-item">
      <div class="timeline-marker">📚</div>
      <div class="timeline-content">
        <span class="timeline-date">2024–2026</span>
        <h3>BTS SIO option SISR</h3>
        <p><strong>Lycée Jean Vilar, Plaisir</strong></p>
        <p>Formation systèmes, réseaux, sécurité. Administration infrastructure, support IT, projets professionnels.</p>
      </div>
    </div>
    
    <div class="timeline-item">
      <div class="timeline-marker">🏢</div>
      <div class="timeline-content">
        <span class="timeline-date">Mai–Juillet 2025</span>
        <h3>Stage SI — Mairie de Trappes</h3>
        <p><strong>Département informatique</strong></p>
        <p>Administration serveurs Windows, support L1/L2 (~160 postes), Active Directory, gestion tickets, projets infrastructure.</p>
        <a href="/#/stages" class="link-arrow">Voir détails stage →</a>
      </div>
    </div>
    
    <div class="timeline-item">
      <div class="timeline-marker">🔐</div>
      <div class="timeline-content">
        <span class="timeline-date">2025</span>
        <h3>Certification SecNumAcadémie (ANSSI)</h3>
        <p><strong>Agence Nationale Cybersécurité</strong></p>
        <p>Formation en ligne cybersécurité, bonnes pratiques, sensibilisation menaces, conformité.</p>
      </div>
    </div>
    
    <div class="timeline-item timeline-discreet">
      <div class="timeline-marker">🏛️</div>
      <div class="timeline-content">
        <span class="timeline-date">23 déc 2025–4 jan 2026</span>
        <h3>Mission ponctuelle — Château de Versailles</h3>
        <p><strong>Agent de sûreté (temporaire)</strong></p>
        <p>Mission courte hors IT, compétences soft skills (communication, rigueur, travail d'équipe).</p>
      </div>
    </div>
  </div>
</section>

<!-- F) Langues & centres d'intérêt -->
<section class="page-content glass profile-interests">
  <h2>Langues & Centres d'intérêt</h2>
  
  <div class="interests-grid">
    <div class="interest-card">
      <div class="interest-icon">🌍</div>
      <h3>Langues</h3>
      <div class="languages-list">
        <div class="language-item">
          <strong>Français</strong>
          <span class="lang-level">Langue maternelle</span>
        </div>
        <div class="language-item">
          <strong>Anglais</strong>
          <span class="lang-level">Niveau B1 • Compréhension docs techniques</span>
        </div>
        <div class="language-item">
          <strong>Arabe</strong>
          <span class="lang-level">Dialectal & littéraire • Notions</span>
        </div>
      </div>
    </div>
    
    <div class="interest-card">
      <div class="interest-icon">🥋</div>
      <h3>Taekwondo</h3>
      <p><strong>8 ans de pratique</strong></p>
      <p>Discipline, persévérance, dépassement de soi. Compétitions régionales, ceinture avancée.</p>
      <p class="interest-values">Valeurs : Rigueur • Respect • Concentration</p>
    </div>
    
    <div class="interest-card">
      <div class="interest-icon">📚</div>
      <h3>Lecture</h3>
      <p><strong>Passionnée de livres</strong></p>
      <p>Littérature technique (cybersécurité, réseaux), science-fiction, développement personnel.</p>
      <p class="interest-values">Apprentissage continu • Curiosité intellectuelle</p>
    </div>
    
    <div class="interest-card">
      <div class="interest-icon">✈️</div>
      <h3>Voyages</h3>
      <p><strong>Découverte culturelle</strong></p>
      <p>Voyages en Europe et Maghreb, ouverture d'esprit, adaptation environnements variés.</p>
      <p class="interest-values">Adaptabilité • Communication interculturelle</p>
    </div>
  </div>
</section>

<!-- CTA final -->
<section class="page-cta glass">
  <h3>Intéressé(e) par mon profil ?</h3>
  <p>Discutons de vos besoins en administration systèmes et réseaux</p>
  <a href="/#/contact" class="btn btn-primary">Me contacter</a>
</section>
  `;
}
