// src/pages/programme.ts
// Page Programme & Projets pédagogiques BTS SIO SISR

import { Chip } from '../components/ui';
import { projects } from '../data/projects';
import Icons from '../components/icons';
import { modulesFondamentaux, competencesVisees } from '../data/programme';
import { timelineItems, timelineSummary } from '../data/timeline';

export default function Programme() {
  const renderProjectCard = (project: typeof projects[0]) => {
    const statusLabel = project.status === 'completed' ? '✅ Terminé' : 
                       project.status === 'ongoing' ? '🔄 En cours' : '📅 Prévu';
    const statusClass = project.status === 'completed' ? 'status-completed' : 
                       project.status === 'ongoing' ? 'status-ongoing' : 'status-planned';
    
    // Vérifier si le projet a des livrables
    const hasLivrables = project.livrables && Object.keys(project.livrables).length > 0;
    
    // Boutons conditionnels selon disponibilité des livrables
    let actionButtons = '';
    if (hasLivrables && project.livrables) {
      // Projet avec livrables : afficher boutons de téléchargement
      const livrablesList = Object.entries(project.livrables)
        .map(([key, url]) => {
          const icon = key === 'github' ? '🔗' : '📄';
          const label = key === 'github' ? 'GitHub' : 
                       key === 'documentation' ? 'Documentation' :
                       key === 'rapport' ? 'Rapport' : 'Captures';
          return `<a href="${url}" class="btn-livrable" target="_blank" rel="noopener">${icon} ${label}</a>`;
        }).join('');
      
      actionButtons = `
        <div class="project-actions">
          ${livrablesList}
        </div>
      `;
    } else {
      // Projet sans livrables : afficher badge + bouton détails
      const planningText = project.planification || 'Détails à venir prochainement';
      actionButtons = `
        <div class="project-placeholder">
          <div class="placeholder-info">
            <span class="badge badge-warning">⏳ ${statusLabel}</span>
            <p class="placeholder-text">${planningText}</p>
          </div>
          <button class="btn-details" onclick="document.getElementById('details-${project.id}').classList.toggle('expanded')">
            📋 Voir détails
          </button>
        </div>
        <div id="details-${project.id}" class="project-details-accordion">
          <div class="details-content">
            <h4>📄 Description complète</h4>
            <p>${project.description}</p>
            <h4>🎯 Objectif</h4>
            <p>${project.objective}</p>
            <h4>🔧 Technologies prévues</h4>
            <div class="tech-list">
              ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }
    
    return `
      <div class="project-card">
        <div class="project-header">
          <h3>${project.title}</h3>
          <span class="project-status ${statusClass}">${statusLabel}</span>
        </div>
        <p class="project-context"><strong>Contexte :</strong> ${project.context}</p>
        <p class="project-objective"><strong>Objectif :</strong> ${project.objective}</p>
        
        <div class="project-meta">
          <div class="project-tags">
            <strong>Technologies :</strong>
            ${project.tech.slice(0, 4).map(t => Chip({ label: t })).join('')}
            ${project.tech.length > 4 ? `<span class="more-tags">+${project.tech.length - 4}</span>` : ''}
          </div>
          ${project.competencesBTS ? `
            <div class="project-tags">
              <strong>Compétences BTS :</strong>
              ${project.competencesBTS.map(c => `<span class="badge">${c}</span>`).join('')}
            </div>
          ` : ''}
        </div>
        
        ${actionButtons}
        
        ${project.date ? `<p class="project-date">📅 ${project.date}</p>` : ''}
      </div>
    `;
  };

  return `
<section class="page-hero">
  <div class="icon-hero">${Icons.FolderKanban({ size: 64, color: 'var(--color-primary)' })}</div>
  <h1>Programme & Projets pédagogiques</h1>
  <p>BTS SIO option SISR — Formation complète en infrastructure IT</p>
</section>

<section class="page-content glass reveal">
  <h2>📚 Programme détaillé SISR</h2>
  <p>Le programme BTS SIO option SISR s'articule autour de 6 blocs de compétences techniques et transversales, couvrant l'ensemble des besoins en administration d'infrastructure IT.</p>
  
  <div class="modules-grid">
    <div class="module-card glass reveal">
      <div class="module-icon">🖥️</div>
      <h3>Systèmes d'exploitation</h3>
      <p>Administration Windows Server (AD, GPO, DNS/DHCP) et Linux (Debian, Ubuntu, RHEL). Gestion des services, permissions, utilisateurs, automatisation.</p>
      <ul>
        <li>Windows Server 2019/2022</li>
        <li>Linux (Debian, Ubuntu, CentOS)</li>
        <li>PowerShell & Bash scripting</li>
        <li>Active Directory & LDAP</li>
      </ul>
    </div>

    <div class="module-card glass reveal">
      <div class="module-icon">🌐</div>
      <h3>Réseaux & Télécoms</h3>
      <p>Architecture réseau TCP/IP, routage, VLAN, VPN, services réseau (DNS, DHCP, FTP), sécurité périmétrique, firewall.</p>
      <ul>
        <li>Modèles OSI & TCP/IP</li>
        <li>Routage statique/dynamique</li>
        <li>VLANs & segmentation</li>
        <li>VPN (OpenVPN, IPsec)</li>
      </ul>
    </div>

    <div class="module-card glass reveal">
      <div class="module-icon">🔒</div>
      <h3>Cybersécurité</h3>
      <p>Authentification, chiffrement, pare-feu, durcissement systèmes, audit sécurité, gestion des vulnérabilités, conformité RGPD.</p>
      <ul>
        <li>Pare-feu & filtrage (pfSense, iptables)</li>
        <li>Hardening Windows/Linux</li>
        <li>Audit & logs (SIEM basics)</li>
        <li>Conformité RGPD & ISO 27001</li>
      </ul>
    </div>

    <div class="module-card glass reveal">
      <div class="module-icon">☁️</div>
      <h3>Virtualisation & Cloud</h3>
      <p>Hyperviseurs (VMware, Hyper-V), conteneurs (Docker), orchestration, architectures cloud (IaaS, PaaS), migration vers cloud hybride.</p>
      <ul>
        <li>VMware ESXi / Hyper-V</li>
        <li>Docker & conteneurs</li>
        <li>AWS / Azure basics</li>
        <li>Architectures haute disponibilité</li>
      </ul>
    </div>

    <div class="module-card glass reveal">
      <div class="module-icon">📊</div>
      <h3>Supervision & Monitoring</h3>
      <p>Outils de surveillance (Nagios, Zabbix, PRTG), gestion des logs, alertes, tableaux de bord, métriques performance, incident management.</p>
      <ul>
        <li>Nagios / Zabbix / PRTG</li>
        <li>Logs (rsyslog, ELK basics)</li>
        <li>Métriques & dashboards</li>
        <li>Gestion incidents (ITIL)</li>
      </ul>
    </div>

    <div class="module-card glass reveal">
      <div class="module-icon">📝</div>
      <h3>Documentation & ITSM</h3>
      <p>Gestion de projet IT, méthodologie Agile, documentation technique (wiki, schémas), ticketing (GLPI, Jira), communication avec utilisateurs.</p>
      <ul>
        <li>GLPI / Jira Service Desk</li>
        <li>Documentation technique</li>
        <li>Diagrammes réseau (Visio, draw.io)</li>
        <li>Méthodologie ITIL</li>
      </ul>
    </div>
  </div>
</section>

<section class="page-content glass reveal">
  <h2>� Contenu pédagogique SISR</h2>
  <p class="section-intro">Le BTS SIO option SISR repose sur 3 blocs de compétences professionnelles et des enseignements transversaux, visant à former des techniciens capables d'administrer une infrastructure IT sécurisée.</p>
  
  <!-- Accordéon Modules fondamentaux -->
  <div class="accordion pedagogical-accordion" id="modules-fondamentaux">
    <button class="accordion-trigger" data-accordion="modules-fondamentaux" aria-expanded="false" aria-controls="content-modules-fondamentaux">
      📚 Modules fondamentaux
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content" id="content-modules-fondamentaux" role="region" aria-labelledby="modules-fondamentaux">
      ${modulesFondamentaux.map(bloc => `
        <div class="pedagogical-block">
          <h4>${bloc.icon} ${bloc.title}</h4>
          ${bloc.description ? `<p class="block-description">${bloc.description}</p>` : ''}
          ${bloc.items ? `
            <ul class="pedagogical-list">
              ${bloc.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
      `).join('')}
    </div>
  </div>

  <!-- Accordéon Compétences visées -->
  <div class="accordion pedagogical-accordion" id="competences-visees">
    <button class="accordion-trigger" data-accordion="competences-visees" aria-expanded="false" aria-controls="content-competences-visees">
      🎯 Compétences visées
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content" id="content-competences-visees" role="region" aria-labelledby="competences-visees">
      ${competencesVisees.description ? `<p class="competences-intro">${competencesVisees.description}</p>` : ''}
      ${competencesVisees.blocks ? competencesVisees.blocks.map(block => `
        <div class="competence-block">
          <h4>${block.title}</h4>
          <ul class="competence-list">
            ${block.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `).join('') : ''}
    </div>
  </div>
</section>

<section class="page-content glass reveal">
  <h2>�🛠️ Projets réalisés (TP + Stage + Personnel)</h2>
  <p>Voici les projets techniques que j'ai menés dans le cadre de ma formation BTS SIO SISR, combinant travaux pratiques scolaires, missions de stage et initiatives personnelles.</p>
  
  <div class="projects-grid">
    ${projects.map(project => renderProjectCard(project)).join('')}
  </div>
</section>

<section class="page-content glass reveal" aria-label="Timeline formation 2024-2026">
  <h2>📅 Timeline formation (2024–2026)</h2>
  <p class="timeline-summary">${timelineSummary}</p>
  <div class="timeline-grid">
    ${timelineItems.map(item => `
      <div class="timeline-card ${item.emphasis ? `timeline-card-${item.emphasis}` : ''}">
        <div class="timeline-badge">${item.id}</div>
        <div class="timeline-period">${item.period}</div>
        <h4 class="timeline-title">${item.title}</h4>
        <ul class="timeline-details">
          ${item.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
        <div class="timeline-tags">
          ${item.tags.map(tag => Chip({ label: tag })).join('')}
        </div>
      </div>
    `).join('')}
  </div>
</section>

<section class="page-content glass reveal">
  <h2>🎯 Compétences transversales développées</h2>
  <div class="skills-summary">
    <div class="skill-summary-item">
      <strong>🔧 Techniques</strong>
      <p>Administration systèmes/réseaux, scripting, troubleshooting, sécurité, virtualisation, cloud basics.</p>
    </div>
    <div class="skill-summary-item">
      <strong>📊 Organisationnelles</strong>
      <p>Gestion de projet, documentation technique, méthodologie ITIL/Agile, respect des délais, priorisation.</p>
    </div>
    <div class="skill-summary-item">
      <strong>🤝 Relationnelles</strong>
      <p>Support utilisateurs, communication technique/non-technique, travail en équipe, formation, écoute active.</p>
    </div>
    <div class="skill-summary-item">
      <strong>🧠 Analytiques</strong>
      <p>Résolution de problèmes complexes, diagnostic pannes, analyse logs, audit sécurité, optimisation.</p>
    </div>
  </div>
</section>

<section class="page-cta glass">
  <h3>Découvrez mes réalisations détaillées</h3>
  <div class="cta-buttons">
    <a href="/#/projects" class="btn btn-primary">Tous les projets</a>
    <a href="/#/rapport-stage" class="btn btn-secondary">Rapport de stage</a>
  </div>
</section>
  `;
}
