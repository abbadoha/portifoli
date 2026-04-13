// src/pages/bts-sio.ts
// Page BTS SIO formation

import { Chip } from '../components/ui';
import Icons from '../components/icons';

export default function BtsSio() {
  const iconMic = `<svg class="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="11" rx="3"></rect><path d="M5 10a7 7 0 0 0 14 0"></path><line x1="12" y1="17" x2="12" y2="22"></line><line x1="8" y1="22" x2="16" y2="22"></line></svg>`;
  const iconBuilding = `<svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="1"></rect><path d="M9 4v17"></path><path d="M15 4v17"></path><path d="M3 10h18"></path><path d="M3 16h18"></path></svg>`;
  const iconGov = `<svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10h18"></path><path d="M4 10V7l8-4 8 4v3"></path><path d="M6 10v8"></path><path d="M10 10v8"></path><path d="M14 10v8"></path><path d="M18 10v8"></path><path d="M3 18h18"></path></svg>`;
  const iconCloud = `<svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 17.5a4.5 4.5 0 0 0-1.1-8.86 6 6 0 0 0-11.58 1.62A4 4 0 0 0 8 18h12z"></path></svg>`;
  const iconWindows = `<svg class="icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="8" height="7"></rect><rect x="13" y="4" width="8" height="7"></rect><rect x="3" y="13" width="8" height="7"></rect><rect x="13" y="13" width="8" height="7"></rect></svg>`;
  const iconLinux = `<svg class="icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c2.2 0 4 1.8 4 4v2.5c0 1.2.4 2.4 1.2 3.3l1.8 2.1c.7.8.6 2-.2 2.7-.8.7-2 .6-2.7-.2l-1-1.1"></path><path d="M12 3c-2.2 0-4 1.8-4 4v2.5c0 1.2-.4 2.4-1.2 3.3L5 14.9c-.7.8-.6 2 .2 2.7.8.7 2 .6 2.7-.2l1-1.1"></path><circle cx="9" cy="8" r="1"></circle><circle cx="15" cy="8" r="1"></circle><path d="M10 12h4"></path></svg>`;
  const iconNetwork = `<svg class="icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2"></circle><circle cx="19" cy="6" r="2"></circle><circle cx="12" cy="18" r="2"></circle><path d="M7 7.2 10.8 16"></path><path d="M17 7.2 13.2 16"></path><path d="M7 6h10"></path></svg>`;
  const iconSecurity = `<svg class="icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7l-8-4z"></path><path d="m9 12 2 2 4-4"></path></svg>`;
  const iconVirtualization = `<svg class="icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="5" rx="1"></rect><rect x="4" y="10" width="16" height="5" rx="1"></rect><rect x="4" y="16" width="16" height="4" rx="1"></rect></svg>`;

  return `
<section class="bts-sio-page">
<section class="page-hero">
  <div class="bts-hero-layout">
    <div class="bts-hero-copy">
      <div class="icon-hero">${Icons.GraduationCap({ size: 64, color: 'var(--color-primary)' })}</div>
      <h1>BTS SIO SISR</h1>
      <p>Brevet Technicien Supérieur en Services Informatiques aux Organisations</p>
    </div>
    <div class="bts-hero-visual" aria-hidden="true">
      <img src="/assets/img/bts-sio.png" alt="Illustration BTS SIO" loading="lazy" />
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>📚 Qu'est-ce que le BTS SIO ?</h2>
  <p>Le BTS SIO est un diplôme d'État francais (niveau III, bac+2) préparant à des métiers IT opérationnels : administrateur systèmes/réseaux, support utilisateur, technicien infrastructure.</p>
  <p><strong>Durée :</strong> 2 ans (1ère et 2ère année)</p>
  <p><strong>Accès :</strong> Baccalauréat (ou diplôme équivalent)</p>
  <p><strong>Statut :</strong> Scolaire (lycée) ou apprentissage (contrat alternance)</p>
  <p><strong>Ministère tutelle :</strong> Ministère de l'Éducation Nationale</p>
  <div class="logos-row" aria-label="Technologies principales">
    <span class="logo-pill">Windows</span>
    <span class="logo-pill">Linux</span>
    <span class="logo-pill">Cisco</span>
    <span class="logo-pill">Virtualisation</span>
  </div>
</section>

<section class="page-content glass">
  <h2>🎯 Les deux options : SIO/SISR vs SIO/SLAM</h2>
  <div class="options-comparison bts-options-comparison">
    <div class="option-card bts-option-card sisr-card">
      <h3>🖥️ SISR (mon option)</h3>
      <p><strong>Signification :</strong> Solutions d'Infrastructure, Systèmes et Réseaux</p>
      <p><strong>Focus :</strong> Administration réseaux, systèmes, infrastructure IT.</p>
      <p>Profil : Administrateur systèmes, Administrateur réseaux, Technicien support infrastructure, Responsable parc IT.</p>
      <p><strong>Compétences :</strong> Windows/Linux, Active Directory, Réseaux TCP/IP, Firewalls, Virtualisation, Services IT.</p>
    </div>
    <div class="bts-options-bridge" aria-hidden="true">
      <img src="/assets/img/sio2.png" alt="Illustration liaison SISR SLAM" loading="lazy" />
    </div>
    <div class="option-card bts-option-card slam-card">
      <h3>💻 SLAM (autre option)</h3>
      <p><strong>Signification :</strong> Solutions Logicielles et Applications Métier</p>
      <p><strong>Focus :</strong> Développement, intégration logiciels, gestion données.</p>
      <p>Profils : Développeur, Intégrateur, Analyste, Chef projet IT.</p>
      <p><strong>Compétences :</strong> Programmation (Java, PHP, C#), Bases de données, Web, Gestion projets.</p>
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>🎓 Contenu pédagogique SISR</h2>
  
  <div class="accordion" id="bts-core">
    <button class="accordion-trigger bts-accordion-trigger" data-accordion="bts-core">
      <span class="bts-trigger-label">${Icons.Settings({ size: 16, color: 'currentColor' })} Modules fondamentaux</span>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p><strong>Architecture IT :</strong> Modèles OSI, TCP/IP, topologies réseau, documentation système.</p>
      <p><strong>Systèmes d'exploitation :</strong> <span class="bts-topic-icon" aria-hidden="true">${iconWindows}</span>Windows Server, <span class="bts-topic-icon" aria-hidden="true">${iconLinux}</span>Linux (Debian/Ubuntu), permissions, services.</p>
      <p><strong>Réseaux :</strong> <span class="bts-topic-icon" aria-hidden="true">${iconNetwork}</span>IP, routage, VLAN, VPN, DNS/DHCP, services réseau, sécurité.</p>
      <p><strong>Sécurité IT :</strong> <span class="bts-topic-icon" aria-hidden="true">${iconSecurity}</span>Authentification, crypto, firewalls, politique sécurité, RGPD.</p>
      <p><strong>Virtualisation :</strong> <span class="bts-topic-icon" aria-hidden="true">${iconVirtualization}</span>Hyperviseurs (VMware, Hyper-V), architectures cloud.</p>
      ${Chip({ label: 'Systèmes' })} ${Chip({ label: 'Réseaux' })} ${Chip({ label: 'Sécurité' })}
    </div>
  </div>

  <div class="accordion" id="bts-skills">
    <button class="accordion-trigger bts-accordion-trigger" data-accordion="bts-skills">
      <span class="bts-trigger-label">${Icons.Star({ size: 16, color: 'currentColor' })} Compétences visées</span>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p><strong>Bloc 1 - Administration infrastructure :</strong> Déploiement, configuration, maintenance systèmes/réseaux.</p>
      <p><strong>Bloc 2 - Assistance utilisateurs :</strong> Support, formation, gestion incidents.</p>
      <p><strong>Bloc 3 - Sécurité :</strong> Audit, hardening, conformité, plans d'action.</p>
      <p><strong>Bloc 4 - Automatisation :</strong> Scripts PowerShell/Bash, outils déploiement.</p>
      <p><strong>Bloc 5 - Communication :</strong> Documentation, rapports, présentation aux stakeholders.</p>
      ${Chip({ label: 'Administration' })} ${Chip({ label: 'Support' })} ${Chip({ label: 'Scripting' })}
    </div>
  </div>

</section>

<section class="page-content glass">
  <h2>📋 Évaluations et examens</h2>
  <p>Le BTS se valide par :</p>
  <div class="eval-grid">
    <div class="eval-card bts-eval-card">
      <strong><span class="bts-inline-icon">${Icons.FileText({ size: 18, color: 'currentColor' })}</span> Épreuves écrites</strong>
      <p>Culture générale, anglais technique, économie.</p>
    </div>
    <div class="eval-card bts-eval-card">
      <strong><span class="bts-inline-icon">${Icons.Briefcase({ size: 18, color: 'currentColor' })}</span> Épreuve stage</strong>
      <p>Stage obligatoire 3-4 mois + rapport/soutenance.</p>
    </div>
    <div class="eval-card bts-eval-card">
      <strong><span class="bts-inline-icon">${Icons.FolderKanban({ size: 18, color: 'currentColor' })}</span> Projets professionnels</strong>
      <p>SLAM/SISR : projets approfondis par option.</p>
    </div>
    <div class="eval-card bts-eval-card">
      <strong><span class="bts-inline-icon">${iconMic}</span> Oraux/présentations</strong>
      <p>Soutenance stage, études de cas, questions jury.</p>
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>🚀 Débouchés professionnels</h2>
  <p><strong>Secteurs d'embauche :</strong></p>
  <ul class="bts-debouches-list">
    <li><span class="bts-bullet-icon">${iconBuilding}</span><strong>Sociétés de services IT (SSII/ESN) :</strong> Postes en régie client, support infra</li>
    <li><span class="bts-bullet-icon">${iconBuilding}</span><strong>Départements IT d'entreprises :</strong> Équipes infrastructure, support</li>
    <li><span class="bts-bullet-icon">${iconGov}</span><strong>Collectivités/secteur public :</strong> Administration réseaux municipales, académies</li>
    <li><span class="bts-bullet-icon">${iconBuilding}</span><strong>TPE/PME :</strong> Responsable IT unique, administrateur multi-domaines</li>
    <li><span class="bts-bullet-icon">${iconCloud}</span><strong>Sous-traitants infra :</strong> Hébergeurs, cloud providers, data centers</li>
  </ul>
  <p><strong>Salaires indicatifs (France) :</strong></p>
  <ul>
    <li>Débutant : 22–25k€ annuel</li>
    <li>Confirmé (+3-5ans) : 28–35k€ annuel</li>
    <li>Avec certifs (CCNA, Security+, etc.) : +5-10k€</li>
  </ul>
</section>

<section class="page-content glass">
  <h2>🎯 Poursuite d'études</h2>
  <p>Après BTS, possibilités :</p>
  <ul>
    <li><strong>Licences professionnelles :</strong> Sécurité réseaux, Infrastructure cloud, Systèmes embarqués</li>
    <li><strong>Formations certifiantes :</strong> CCNA (Cisco), CompTIA Security+, Microsoft certifications</li>
    <li><strong>Écoles d'ingénieurs :</strong> Admission parallèle (sélectif)</li>
    <li><strong>Alternance senior :</strong> Contrats en apprentissage supérieur (licence+)</li>
    <li><strong>Entrée directe marché du travail :</strong> Gain expérience rapide</li>
  </ul>
  <div class="bts-study-badges" aria-label="Pistes de poursuite">
    <span>Licence pro</span>
    <span>Cybersécurité</span>
    <span>Cloud</span>
    <span>Réseaux</span>
  </div>
</section>

<section class="page-cta glass">
  <h3>Découvrez mes épreuves d'examen</h3>
  <a href="/#/exams" class="btn btn-primary">Guide examen</a>
</section>
 </section>
  `;
}
