// src/data/projects.ts
// Projets techniques (TP, personnel, stage)

import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'pfsense-firewall',
    title: 'pfSense Firewall & Routage avancé',
    category: ['Infrastructure', 'Réseaux', 'Sécurité'],
    context: 'TP personnel / Lab infrastructure',
    objective: 'Mise en place d\'un firewall/routeur centralisé avec segmentation réseau et VPN.',
    description: 'Déploiement d\'une instance pfSense avec configuration de règles de filtrage avancées, NAT/PAT, VPN site-to-site (OpenVPN), gestion multi-interfaces (WAN/LAN/DMZ). Mise en application des bonnes pratiques de sécurité réseau et routage statique/dynamique.',
    tech: ['pfSense', 'OpenVPN', 'VLAN', 'ACL', 'Routing statique', 'NAT/PAT'],
    competencesBTS: ['Administration infrastructure', 'Sécurité', 'Réseaux'],
    status: 'completed',
    date: '2024-2025'
  },
  {
    id: 'active-directory-gpo',
    title: 'Active Directory & Group Policy',
    category: ['Services', 'Sécurité', 'Systèmes'],
    context: 'TP scolaire + extension personnelle',
    objective: 'Déploiement d\'un domaine AD avec politiques de groupe et gestion centralisée.',
    description: 'Installation et configuration de forêt Active Directory multi-domaines, création d\'OU hiérarchiques, gestion utilisateurs/groupes/permissions, déploiement GPO de sécurité (politique de mots de passe complexes, verrouillage sessions, restrictions logiciels). Audit d\'accès et logs événements. Modélisation d\'une infrastructure PME multi-sites.',
    tech: ['Windows Server 2019/2022', 'Active Directory', 'Group Policy', 'LDAP', 'Kerberos', 'DNS'],
    competencesBTS: ['Administration systèmes', 'Sécurité', 'Support utilisateurs'],
    status: 'completed',
    date: '2024-2025'
  },
  {
    id: 'linux-hardening',
    title: 'Linux Server Hardening & Sécurité',
    category: ['Infrastructure', 'Sécurité', 'Scripting'],
    context: 'TP personnel + stage Mairie',
    objective: 'Renforcement de sécurité d\'un serveur Debian/Ubuntu en production.',
    description: 'Audit de sécurité baseline CIS, suppression services inutiles, configuration firewall (UFW/iptables), SSH hardening (clés RSA, désactivation root login, fail2ban), gestion fine des permissions (chmod/chown), monitoring logs (rsyslog), automatisation avec scripts Bash. Application des recommandations ANSSI.',
    tech: ['Debian 11/12', 'UFW', 'Fail2ban', 'SSH', 'Auditd', 'rsyslog', 'Bash scripting'],
    competencesBTS: ['Sécurité', 'Administration systèmes', 'Automatisation'],
    status: 'completed',
    date: '2025'
  },
  {
    id: 'glpi-ticketing',
    title: 'GLPI — Plateforme de ticketing & ITSM',
    category: ['Services', 'Support'],
    context: 'Stage Mairie de Trappes',
    objective: 'Déploiement et utilisation GLPI pour gestion incidents et parc IT.',
    description: 'Installation GLPI sur serveur Linux (Apache, PHP, MariaDB), configuration LDAP pour authentification AD, création de profils utilisateurs, gestion tickets support (catégories, SLA, escalades), inventaire parc informatique (PC, imprimantes, licences). Formation utilisateurs sur flux de travail ITIL.',
    tech: ['GLPI', 'PHP', 'MariaDB', 'Apache', 'LDAP', 'ITIL'],
    competencesBTS: ['Support utilisateurs', 'ITSM', 'Documentation'],
    status: 'completed',
    date: '2025'
  },
  {
    id: 'windows-deployment',
    title: 'Déploiement Windows 11 — Automatisation',
    category: ['Systèmes', 'Infrastructure'],
    context: 'Stage Mairie + TP scolaire',
    objective: 'Migration postes Windows 10 → 11 avec outils d\'automatisation.',
    description: 'Création d\'images Windows 11 personnalisées (DISM, Sysprep), déploiement via USB bootable (Rufus), configuration BIOS/UEFI, gestion des pilotes, intégration domaine AD post-install, scripts PowerShell pour configuration automatique (logiciels, paramètres réseau, GPO client).',
    tech: ['Windows 11', 'DISM', 'Sysprep', 'PowerShell', 'Rufus', 'BIOS/UEFI'],
    competencesBTS: ['Administration systèmes', 'Automatisation', 'Support'],
    status: 'completed',
    date: '2025'
  },
  {
    id: 'vlan-segmentation',
    title: 'Segmentation réseau VLAN & Switchs managés',
    category: ['Réseaux', 'Infrastructure', 'Sécurité'],
    context: 'Stage Mairie + TP scolaire',
    objective: 'Mise en place de VLANs pour isoler les flux réseau (bureautique, serveurs, invités).',
    description: 'Configuration de switchs managés (HP ProCurve / Cisco Catalyst), création VLANs par services (VLAN 10 bureautique, VLAN 20 serveurs, VLAN 30 invités), trunk ports inter-switchs, routage inter-VLAN via pfSense, ACL pour restrictions de flux. Documentation topologie réseau et plan d\'adressage IP.',
    tech: ['VLANs', 'Cisco IOS', 'HP ProCurve', 'Trunk/Access ports', 'Routage inter-VLAN', 'ACL'],
    competencesBTS: ['Réseaux', 'Sécurité', 'Infrastructure'],
    status: 'completed',
    date: '2025'
  },
  {
    id: 'backup-restore',
    title: 'Stratégie Sauvegarde 3-2-1 & Restauration',
    category: ['Infrastructure', 'Sécurité'],
    context: 'TP personnel + stage',
    objective: 'Implémentation d\'une stratégie de sauvegarde résiliente selon bonnes pratiques.',
    description: 'Mise en œuvre de la règle 3-2-1 (3 copies, 2 supports différents, 1 hors-site) : sauvegardes incrémentales quotidiennes (rsync/Veeam), sauvegardes complètes hebdomadaires, stockage NAS local + cloud (AWS S3 / Backblaze). Tests de restauration, documentation procédures PRA.',
    tech: ['Veeam Backup', 'rsync', 'NAS Synology', 'AWS S3', 'Backblaze', 'Scripts Bash'],
    competencesBTS: ['Infrastructure', 'Sécurité', 'Documentation'],
    status: 'ongoing',
    date: '2025'
  },
  {
    id: 'wireshark-analysis',
    title: 'Analyse réseau avec Wireshark',
    category: ['Réseaux', 'Sécurité', 'Supervision'],
    context: 'TP réseaux + stage',
    objective: 'Maîtriser l\'analyse de trames réseau pour le troubleshooting et la détection d\'incidents.',
    description: 'Utilisation de Wireshark pour capturer et analyser le trafic réseau : identification de protocoles, filtrage de paquets (display filters), analyse de sessions TCP/IP, détection d\'anomalies (scans de ports, tentatives de connexion suspectes), analyse de performances (latence, retransmissions). Création de profils d\'analyse personnalisés et export de statistiques.',
    tech: ['Wireshark', 'TCPDump', 'Filtres BPF', 'Protocoles TCP/IP', 'DNS/DHCP'],
    competencesBTS: ['Réseaux', 'Sécurité', 'Supervision'],
    status: 'ongoing',
    date: '2025',
    planification: 'À compléter mi-janvier avec TP pratiques et cas réels'
  },
  {
    id: 'vmware-proxmox',
    title: 'Virtualisation VMware ESXi & Proxmox VE',
    category: ['Virtualisation', 'Infrastructure'],
    context: 'Lab technique + stage',
    objective: 'Maîtriser les hyperviseurs de type 1 pour la gestion d\'infrastructures virtualisées.',
    description: 'Installation et configuration de VMware ESXi 7.0 et Proxmox VE 8.x. Création de machines virtuelles, gestion des ressources (CPU, RAM, stockage), configuration réseau (vSwitch, bridges), snapshots et clones, migration à chaud (vMotion), haute disponibilité (HA), gestion centralisée (vCenter/Proxmox Cluster). Comparaison des performances et licences.',
    tech: ['VMware ESXi', 'Proxmox VE', 'vCenter', 'vSphere', 'KVM', 'ZFS', 'Ceph'],
    competencesBTS: ['Infrastructure', 'Virtualisation', 'Documentation'],
    status: 'completed',
    date: 'Novembre 2024',
    livrables: {
      documentation: '/docs/virtualisation-esxi-proxmox.pdf',
      rapport: '/docs/rapport-comparaison-hyperviseurs.pdf',
      screenshots: '/docs/screens-virtualisation.zip'
    }
  },
  {
    id: 'https-certificates',
    title: 'Sécurisation HTTPS & Certificats SSL/TLS',
    category: ['Sécurité', 'Réseaux', 'Services'],
    context: 'TP sécurité + stage',
    objective: 'Comprendre et implémenter PKI, certificats et protocoles de chiffrement web.',
    description: 'Création d\'une autorité de certification (CA) interne, génération de certificats SSL/TLS, déploiement HTTPS sur serveurs web (Apache/Nginx/IIS), configuration Let\'s Encrypt avec renouvellement automatique, gestion du magasin de certificats Windows, déploiement par GPO, analyse SSL Labs, configuration TLS 1.2/1.3, HSTS, et CSP.',
    tech: ['OpenSSL', 'Let\'s Encrypt', 'Certbot', 'Windows PKI', 'Apache/Nginx', 'GPO', 'PowerShell'],
    competencesBTS: ['Sécurité', 'Réseaux', 'Services'],
    status: 'planned',
    date: 'À venir',
    planification: 'Prévu pour février 2025 après TP infrastructures web'
  },
  {
    id: 'supervision-logs',
    title: 'Supervision & Centralisation des logs',
    category: ['Supervision', 'Sécurité', 'Infrastructure'],
    context: 'TP supervision + projet personnel',
    objective: 'Déployer un système de surveillance centralisé avec alertes et tableaux de bord.',
    description: 'Installation et configuration de Zabbix pour la supervision d\'infrastructure (CPU, RAM, disque, réseau, services). Déploiement d\'agents Zabbix sur serveurs Linux/Windows. Configuration de seuils et déclencheurs d\'alertes (email, SMS). Centralisation des logs avec rsyslog/syslog-ng vers serveur ELK ou Graylog. Création de dashboards Grafana pour visualisation temps réel.',
    tech: ['Zabbix', 'Grafana', 'ELK Stack', 'Graylog', 'rsyslog', 'SNMP', 'Telegraf'],
    competencesBTS: ['Supervision', 'Sécurité', 'Infrastructure'],
    status: 'ongoing',
    date: 'Décembre 2024',
    planification: 'Installation Zabbix terminée, configuration ELK en cours'
  },
  {
    id: 'windows-hardening',
    title: 'Durcissement de postes Windows 11',
    category: ['Sécurité', 'Systèmes', 'Conformité'],
    context: 'Stage + recommandations ANSSI',
    objective: 'Renforcer la sécurité des endpoints selon référentiels ANSSI et CIS.',
    description: 'Mise en œuvre du guide ANSSI de configuration sécurisée Windows 11 : désactivation des services inutiles, configuration BitLocker, stratégies de mots de passe robustes, Windows Defender ATP, contrôle d\'applications (AppLocker/WDAC), désactivation SMBv1, configuration pare-feu avancé, audit des événements de sécurité, restrictions USB, configuration LAPS pour comptes administrateurs locaux.',
    tech: ['Windows 11', 'GPO', 'BitLocker', 'AppLocker', 'LAPS', 'PowerShell', 'CIS Benchmarks'],
    competencesBTS: ['Sécurité', 'Systèmes', 'Conformité'],
    status: 'completed',
    date: 'Octobre 2024',
    livrables: {
      documentation: '/docs/durcissement-windows11-anssi.pdf',
      rapport: '/docs/rapport-securite-endpoints.pdf',
      github: 'https://github.com/username/windows-hardening-scripts'
    }
  }
];
