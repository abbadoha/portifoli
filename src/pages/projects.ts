// src/pages/projects.ts
// Page projets personnels et scolaires

import { Chip } from '../components/ui';

export default function Projects() {
  return `
<section class="page-hero">
  <h1>Mes Projets</h1>
  <p>Infrastructure, Sécurité & Services IT</p>
</section>

<section class="page-content glass">
  <h2>📌 Filtres (tags)</h2>
  <div class="filter-tags">
    ${Chip({ label: 'Tous' })} ${Chip({ label: 'Infrastructure' })} ${Chip({ label: 'Sécurité' })} 
    ${Chip({ label: 'Services' })} ${Chip({ label: 'Réseaux' })} ${Chip({ label: 'Scripting' })}
  </div>
</section>

<section class="page-content glass">
  <h2>🖇️ Projets détaillés</h2>
  <div class="projects-grid">
    
    <div class="project-card">
      <div class="project-header">
        <h3>pfSense Firewall & Routing</h3>
        <div class="project-tags">
          ${Chip({ label: 'Infrastructure' })} ${Chip({ label: 'Réseaux' })} ${Chip({ label: 'Sécurité' })}
        </div>
      </div>
      <p class="project-objective"><strong>Objectif :</strong> Mise en place d'un firewall/routeur centralisé pour LAB personnelle.</p>
      <p class="project-description">Déploiement d'une instance pfSense avec configuration de règles de filtrage, NAT, VPN (OpenVPN), gestion des interfaces (WAN/LAN). Introduction aux bonnes pratiques firewall et routage.</p>
      <p class="project-tech"><strong>Tech :</strong> pfSense, OpenVPN, VLAN, ACL, Routing statique</p>
    </div>

    <div class="project-card">
      <div class="project-header">
        <h3>Active Directory & GPO</h3>
        <div class="project-tags">
          ${Chip({ label: 'Services' })} ${Chip({ label: 'Sécurité' })}
        </div>
      </div>
      <p class="project-objective"><strong>Objectif :</strong> Déploiement domaine AD avec politiques de groupe.</p>
      <p class="project-description">Installation et configuration de forêt Active Directory, création d'OU, utilisateurs/groupes, GPO de sécurité (mot de passe, permissions), audit accès. Modélisation d'une infrastructure PME multi-sites.</p>
      <p class="project-tech"><strong>Tech :</strong> Windows Server AD, Group Policy, LDAP, Kerberos</p>
    </div>

    <div class="project-card">
      <div class="project-header">
        <h3>Linux Hardening & Sécurité</h3>
        <div class="project-tags">
          ${Chip({ label: 'Infrastructure' })} ${Chip({ label: 'Sécurité' })} ${Chip({ label: 'Scripting' })}
        </div>
      </div>
      <p class="project-objective"><strong>Objectif :</strong> Renforcement de sécurité d'un serveur Debian/Ubuntu.</p>
      <p class="project-description">Audit de sécurité, suppression services inutiles, configuration firewall (UFW), SSH hardening, monitoring (fail2ban), gestion des permissions. Implémentation de bonnes pratiques CIS Benchmarks.</p>
      <p class="project-tech"><strong>Tech :</strong> Debian, UFW, Fail2ban, SSH, Audit logs</p>
    </div>

    <div class="project-card">
      <div class="project-header">
        <h3>DHCP & DNS Multi-Subnets</h3>
        <div class="project-tags">
          ${Chip({ label: 'Réseaux' })} ${Chip({ label: 'Services' })}
        </div>
      </div>
      <p class="project-objective"><strong>Objectif :</strong> Mise en place DHCP/DNS fédérée sur multiple subnets.</p>
      <p class="project-description">Configuration de serveurs DHCP/DNS avec zones DNS, résolvers récursifs, dynamiques updates, failover. Gestion d'adressage complexe avec VLAN et routeurs.</p>
      <p class="project-tech"><strong>Tech :</strong> ISC DHCP, BIND9, DNS zones, DHCP options</p>
    </div>

    <div class="project-card">
      <div class="project-header">
        <h3>Backup & Disaster Recovery</h3>
        <div class="project-tags">
          ${Chip({ label: 'Infrastructure' })} ${Chip({ label: 'Services' })}
        </div>
      </div>
      <p class="project-objective"><strong>Objectif :</strong> Plan de sauvegarde et récupération d'infra.</p>
      <p class="project-description">Implémentation stratégie backup (3-2-1 rule), tests de restauration, RPO/RTO planning, documentation disaster recovery plan. Outils : Bacula, rsync, snapshots VM.</p>
      <p class="project-tech"><strong>Tech :</strong> Bacula, rsync, VM snapshots, Backup strategy</p>
    </div>

    <div class="project-card">
      <div class="project-header">
        <h3>Monitoring & Alerting (Zabbix)</h3>
      <div class="project-tags">
          ${Chip({ label: 'Infrastructure' })} ${Chip({ label: 'Services' })}
        </div>
      </div>
      <p class="project-objective"><strong>Objectif :</strong> Plateforme de monitoring centralisée.</p>
      <p class="project-description">Déploiement Zabbix, agents sur serveurs, dashboards métriques (CPU/RAM/Disk/Réseau), alertes seuils, intégrations notifications (email).</p>
      <p class="project-tech"><strong>Tech :</strong> Zabbix, Agents, Dashboards, Alerting</p>
    </div>

  </div>
</section>

<section class="page-content glass">
  <h2>🎯 Qu'avez-vous appris ?</h2>
  <p>Ces projets m'ont permis de comprendre :</p>
  <ul>
    <li><strong>Architecture IT globale</strong> : interaction des composants (firewall → routeur → DHCP/DNS → serveurs)</li>
    <li><strong>Sécurité défense en profondeur</strong> : multi-couches (réseau, OS, services)</li>
    <li><strong>Automatisation et scripting</strong> : améliorer efficacité opérationnelle</li>
    <li><strong>Troubleshooting</strong> : diagnostiquer pannes complexes en LAB et reproduire scénarios réels</li>
    <li><strong>Documentation</strong> : importance pour maintenance et transition</li>
  </ul>
</section>

<section class="page-cta glass">
  <h3>Voulez-vous discuter de mes approches ?</h3>
  <a href="/#/contact" class="btn btn-primary">Me contacter</a>
</section>
  `;
}
