// src/pages/watch.ts
// Page Veille technologique & cybersécurité — BTS SIO SISR

import Icons from '../components/icons';
import { veilleCategories, ficheVeilleTemplate, type VeilleResource } from '../data/veille';

// Render resource card
function renderResourceCard(resource: VeilleResource): string {
  const typeColors: Record<string, string> = {
    'RSS': 'background: linear-gradient(135deg, #f59e0b, #d97706); color: white;',
    'PDF': 'background: linear-gradient(135deg, #ef4444, #dc2626); color: white;',
    'Page Web': 'background: linear-gradient(135deg, #3b82f6, #2563eb); color: white;',
    'API': 'background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white;',
    'GitHub': 'background: linear-gradient(135deg, #6366f1, #4f46e5); color: white;'
  };

  return `
    <div class="download-card reveal">
      <div class="resource-type-badge" style="${typeColors[resource.type] || ''}">
        ${resource.type}
      </div>
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      ${resource.updateFrequency ? `<p class="resource-frequency">🔄 ${resource.updateFrequency}</p>` : ''}
      <div class="resource-actions">
        <a href="${resource.url}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
          ${Icons.ExternalLink({ size: 18 })}
          Accéder
        </a>
        <a href="${resource.url}" class="link-secondary" target="_blank" rel="noopener noreferrer">
          ${Icons.ChevronRight({ size: 16 })}
          Consulter en ligne
        </a>
      </div>
    </div>
  `;
}

// Render accordion for fiche modèle
function renderFicheModele(): string {
  return `
    <div class="accordion">
      <button class="accordion-trigger" aria-expanded="false">
        <span>${Icons.FileText({ size: 24, className: 'icon-inline' })} ${ficheVeilleTemplate.title}</span>
        <span class="accordion-icon">+</span>
      </button>
      <div class="accordion-content">
        <div class="fiche-template">
          ${ficheVeilleTemplate.sections.map(section => `
            <div class="fiche-section">
              <h4>${section.title}</h4>
              ${section.fields ? `
                <ul>
                  ${section.fields.map(field => `<li>${field}</li>`).join('')}
                </ul>
              ` : ''}
              ${section.content ? `<p class="fiche-content">${section.content.trim()}</p>` : ''}
            </div>
          `).join('')}
          <div class="fiche-footer">
            <p><strong>💾 Format recommandé :</strong> Document Word/PDF ou fichier Markdown dans dépôt Git personnel</p>
            <p><strong>📊 Fréquence :</strong> 1 à 2 fiches par semaine minimum (objectif BTS SIO)</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export default function Watch() {
  return `
<section class="page-hero">
  <div class="icon-hero">${Icons.Radar({ size: 64, color: 'var(--color-primary)' })}</div>
  <h1>Veille technologique & cybersécurité</h1>
  <p>BTS SIO option SISR — Sources officielles et méthodologie</p>
</section>

<section class="page-content glass reveal">
  <h2>🎯 Objectif & méthode de veille</h2>
  <p>La veille technologique est une compétence transversale essentielle du BTS SIO SISR. Elle consiste à <strong>surveiller activement les évolutions technologiques, vulnérabilités et bonnes pratiques</strong> pour maintenir la sécurité et la performance des infrastructures IT.</p>
  
  <div class="veille-method">
    <div class="method-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>Collecte</strong>
        <p>Surveiller flux RSS, sites officiels (CERT-FR, Microsoft, CISA), newsletters spécialisées</p>
      </div>
    </div>
    <div class="method-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>Tri & Analyse</strong>
        <p>Sélectionner informations pertinentes pour contexte PME/collectivité, évaluer criticité</p>
      </div>
    </div>
    <div class="method-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>Synthèse</strong>
        <p>Rédiger fiche de veille structurée (sujet, impact, actions, références)</p>
      </div>
    </div>
    <div class="method-step">
      <div class="step-number">4</div>
      <div class="step-content">
        <strong>Partage</strong>
        <p>Diffuser veille équipe IT, documenter, archiver pour référence future</p>
      </div>
    </div>
  </div>

  <p><strong>Fréquence recommandée :</strong> 1 à 2 sessions de veille par semaine (30-60 min) · Production : 1-2 fiches/semaine</p>
</section>

<section class="page-content glass reveal">
  <h2>🔍 Périmètre SISR surveillé</h2>
  <div class="perimetre-grid">
    <div class="perimetre-item">
      <div class="perimetre-icon">🪟</div>
      <strong>Systèmes Windows</strong>
      <p>Vulnérabilités Windows Server, Active Directory, GPO, patch management Microsoft</p>
    </div>
    <div class="perimetre-item">
      <div class="perimetre-icon">🐧</div>
      <strong>Systèmes Linux</strong>
      <p>Advisories Debian/Ubuntu, durcissement, services critiques (SSH, Apache, nginx)</p>
    </div>
    <div class="perimetre-item">
      <div class="perimetre-icon">🌐</div>
      <strong>Réseaux & Sécurité</strong>
      <p>Vulnérabilités équipements Cisco, pfSense, VPN, pare-feu, segmentation VLAN</p>
    </div>
    <div class="perimetre-item">
      <div class="perimetre-icon">☁️</div>
      <strong>Virtualisation</strong>
      <p>VMware ESXi, Hyper-V, Docker, orchestration, sécurité hyperviseurs</p>
    </div>
    <div class="perimetre-item">
      <div class="perimetre-icon">📊</div>
      <strong>Supervision</strong>
      <p>Outils monitoring (Nagios, Zabbix), SIEM basics, détection incidents, logs</p>
    </div>
    <div class="perimetre-item">
      <div class="perimetre-icon">💾</div>
      <strong>Sauvegarde & PRA</strong>
      <p>Stratégies 3-2-1, ransomware protection, continuité d'activité, tests restauration</p>
    </div>
  </div>
</section>

<section class="page-content glass reveal">
  <h2>📚 Bibliothèque de sources officielles</h2>
  <p>Sélection de sources <strong>institutionnelles et éditeurs majeurs</strong> couvrant l'ensemble du périmètre SISR. Toutes les sources sont officielles, gratuites et régulièrement mises à jour.</p>
</section>

${veilleCategories.map(category => `
<section class="page-content glass reveal">
  <div class="category-header">
    <span class="category-icon">${category.icon}</span>
    <div>
      <h3>${category.title}</h3>
      <p class="category-description">${category.description}</p>
    </div>
  </div>
  <div class="downloads-grid">
    ${category.resources.map(resource => renderResourceCard(resource)).join('')}
  </div>
</section>
`).join('')}

<section class="page-content glass reveal">
  <h2>📝 Modèle de fiche de veille</h2>
  <p>Template structuré pour produire des fiches de veille conformes aux attentes BTS SIO. Cliquez pour déplier le modèle complet.</p>
  ${renderFicheModele()}
</section>

<section class="page-content glass reveal">
  <h2>💡 Conseils & bonnes pratiques</h2>
  <div class="tips-grid">
    <div class="tip-card">
      <h4>🎯 Prioriser</h4>
      <p>Se concentrer sur vulnérabilités critiques (CVSS > 7.0) et systèmes réellement déployés dans votre environnement</p>
    </div>
    <div class="tip-card">
      <h4>⏱️ Réactivité</h4>
      <p>Les vulnérabilités zero-day ou exploitées activement (CISA KEV) nécessitent une action sous 48-72h</p>
    </div>
    <div class="tip-card">
      <h4>📋 Traçabilité</h4>
      <p>Archiver toutes fiches de veille (dépôt Git, wiki interne) pour historique et audits</p>
    </div>
    <div class="tip-card">
      <h4>🤝 Collaboration</h4>
      <p>Partager veille avec équipe IT, communiquer actions entreprises, documenter décisions</p>
    </div>
    <div class="tip-card">
      <h4>🔄 Automatisation</h4>
      <p>Utiliser agrégateurs RSS (Feedly, Inoreader) ou scripts Python pour centraliser flux</p>
    </div>
    <div class="tip-card">
      <h4>📊 Métriques</h4>
      <p>Suivre indicateurs : nombre fiches/mois, délai patch critique, couverture périmètre</p>
    </div>
  </div>
</section>

<section class="page-content glass reveal">
  <h2>🔗 Ressources complémentaires</h2>
  <div class="complementary-resources">
    <div class="resource-group">
      <strong>🎓 Formations gratuites</strong>
      <ul>
        <li><a href="https://secnumacademie.gouv.fr/" target="_blank" rel="noopener noreferrer" class="link-secondary">${Icons.ExternalLink({ size: 16 })} SecNumAcadémie (ANSSI)</a></li>
        <li><a href="https://www.cisa.gov/resources-tools/resources/free-cybersecurity-services-and-tools" target="_blank" rel="noopener noreferrer" class="link-secondary">${Icons.ExternalLink({ size: 16 })} CISA Free Cyber Tools</a></li>
        <li><a href="https://www.sans.org/blog/" target="_blank" rel="noopener noreferrer" class="link-secondary">${Icons.ExternalLink({ size: 16 })} SANS Cybersecurity Blog</a></li>
      </ul>
    </div>
    <div class="resource-group">
      <strong>🛠️ Outils veille</strong>
      <ul>
        <li><a href="https://feedly.com/" target="_blank" rel="noopener noreferrer" class="link-secondary">${Icons.ExternalLink({ size: 16 })} Feedly (agrégateur RSS)</a></li>
        <li><a href="https://www.inoreader.com/" target="_blank" rel="noopener noreferrer" class="link-secondary">${Icons.ExternalLink({ size: 16 })} Inoreader</a></li>
        <li><a href="https://vulners.com/" target="_blank" rel="noopener noreferrer" class="link-secondary">${Icons.ExternalLink({ size: 16 })} Vulners (moteur recherche CVE)</a></li>
      </ul>
    </div>
    <div class="resource-group">
      <strong>📰 Médias spécialisés</strong>
      <ul>
        <li><a href="https://www.bleepingcomputer.com/" target="_blank" rel="noopener noreferrer" class="link-secondary">${Icons.ExternalLink({ size: 16 })} BleepingComputer</a></li>
        <li><a href="https://thehackernews.com/" target="_blank" rel="noopener noreferrer" class="link-secondary">${Icons.ExternalLink({ size: 16 })} The Hacker News</a></li>
        <li><a href="https://www.lemondeinformatique.fr/securite/" target="_blank" rel="noopener noreferrer" class="link-secondary">${Icons.ExternalLink({ size: 16 })} Le Monde Informatique — Sécurité</a></li>
      </ul>
    </div>
  </div>
</section>

<section class="page-cta glass reveal">
  <h3>Besoin d'aide pour organiser votre veille ?</h3>
  <p>N'hésitez pas à me contacter pour échanger sur méthodologie, outils ou partage d'expérience</p>
  <div class="cta-buttons">
    <a href="/#/contact" class="btn btn-primary">Me contacter</a>
    <a href="/#/downloads" class="btn btn-secondary">Télécharger mes fiches</a>
  </div>
</section>
  `;
}
