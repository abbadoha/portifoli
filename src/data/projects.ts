// src/data/projects.ts
// Donnees structurees pour la page Projets

import type { Project } from './types';

export type ProjectCategory = 'Systeme' | 'Reseau' | 'Cybersecurite' | 'Supervision';
export type HomelabStatus = 'en-cours' | 'personnel' | 'approfondissement';

export interface FormationProject {
  id: string;
  title: string;
  category: ProjectCategory;
  filterTags: string[];
  logo?: string;
  logoAlt?: string;
  monogram?: string;
  summary: string;
  objective: string;
  manipulation: string;
  skills: string[];
  techBadges: string[];
  resourceUrl: string;
  resourceLabel: string;
  reportPlaceholder: string;
}

export interface HomelabProject {
  id: string;
  title: string;
  status: HomelabStatus;
  statusLabel: string;
  summary: string;
  icon?: string;
  iconAlt?: string;
  targetSkills: string[];
  why: string;
  idea: string;
  skills: string[];
  resourceUrl: string;
  resourceLabel: string;
}

export interface ProjectResource {
  title: string;
  description: string;
  url: string;
  label: string;
  category: ProjectCategory;
}

export const formationProjects: FormationProject[] = [
  // â”€â”€ SYSTÃˆME â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'proxmox',
    title: 'Proxmox',
    category: 'Systeme',
    filterTags: ['Systeme'],
    logo: '/assets/img/proxmox.png',
    logoAlt: 'Proxmox VE',
    summary: 'Decouverte des bases de la virtualisation et organisation d un hote hyperviseur.',
    objective: 'Decouvrir les bases de la virtualisation et l organisation d un hote capable d heberger plusieurs services.',
    manipulation: 'Creation de machines virtuelles, gestion de stockage, configuration reseau de base, logique d hebergement.',
    skills: ['Virtualisation', 'Architecture systeme', 'Logique de service', 'Administration de base'],
    techBadges: ['Proxmox VE', 'KVM'],
    resourceUrl: 'https://pve.proxmox.com/wiki/Main_Page',
    resourceLabel: 'Documentation',
    reportPlaceholder: 'CR_Proxmox.pdf',
  },
  {
    id: 'raid-debian',
    title: 'RAID (Debian)',
    category: 'Systeme',
    filterTags: ['Systeme'],
    logo: '/assets/img/linux.png',
    logoAlt: 'Linux / RAID',
    summary: 'Comprehension de la redondance disque et du RAID logiciel pour la disponibilite des donnees.',
    objective: 'Comprendre la redondance disque et l interet du RAID logiciel pour la disponibilite des donnees.',
    manipulation: 'Creation ou observation d un RAID, logique de synchronisation, tolerance a la panne, verification de l etat des volumes.',
    skills: ['Stockage', 'Fiabilite systeme', 'Lecture de configuration', 'Diagnostic'],
    techBadges: ['mdadm', 'Debian'],
    resourceUrl: 'https://wiki.debian.org/SoftwareRAID',
    resourceLabel: 'Guide Debian',
    reportPlaceholder: 'CR_RAID.pdf',
  },
  {
    id: 'lvm-debian',
    title: 'LVM (Debian)',
    category: 'Systeme',
    filterTags: ['Systeme'],
    logo: '/assets/img/linux.png',
    logoAlt: 'Linux / LVM',
    summary: 'Gestion flexible des volumes logiques sous Linux pour un stockage adaptable.',
    objective: 'Comprendre la gestion flexible des volumes logiques sous Linux.',
    manipulation: 'Creation de groupes de volumes, volumes logiques, extension de capacite, logique d administration de stockage.',
    skills: ['Administration Linux', 'Stockage', 'Partitionnement logique'],
    techBadges: ['LVM', 'Debian'],
    resourceUrl: 'https://wiki.debian.org/LVM',
    resourceLabel: 'Documentation LVM',
    reportPlaceholder: 'CR_LVM.pdf',
  },
  {
    id: 'corbeille-ad',
    title: 'Corbeille Active Directory',
    category: 'Systeme',
    filterTags: ['Systeme'],
    logo: '/assets/img/ad.png',
    logoAlt: 'Active Directory',
    summary: 'Restauration d objets supprimes et mecanismes de securite d un annuaire Windows.',
    objective: 'Comprendre la restauration d objets supprimes et les mecanismes de securite d un annuaire Windows.',
    manipulation: 'Activation de la corbeille AD, restauration d objets, logique d administration Active Directory.',
    skills: ['Active Directory', 'Securite', 'Administration Windows Server'],
    techBadges: ['Windows Server', 'AD DS'],
    resourceUrl: 'https://learn.microsoft.com/fr-fr/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview',
    resourceLabel: 'Microsoft Learn',
    reportPlaceholder: 'CR_CorbeilleAD.pdf',
  },
  {
    id: 'pki-windows',
    title: 'Serveur PKI (Windows Server)',
    category: 'Systeme',
    filterTags: ['Systeme', 'Cybersecurite'],
    logo: '/assets/img/winserv.png',
    logoAlt: 'Windows Server / PKI',
    summary: 'Role d une autorite de certification dans un environnement Windows Server.',
    objective: 'Decouvrir le role d une autorite de certification dans un environnement Windows.',
    manipulation: 'Notions de certificats, chaine de confiance, deploiement ou comprehension d une PKI Windows.',
    skills: ['Securite', 'Certificats SSL/TLS', 'Services Windows Server'],
    techBadges: ['AD CS', 'Windows Server'],
    resourceUrl: 'https://learn.microsoft.com/fr-fr/windows-server/networking/core-network-guide/cncg/server-certs/server-certificate-deployment',
    resourceLabel: 'Microsoft Learn',
    reportPlaceholder: 'CR_PKI.pdf',
  },
  {
    id: 'site-distant-ad',
    title: 'Site distant Active Directory',
    category: 'Systeme',
    filterTags: ['Systeme'],
    logo: '/assets/img/ad.png',
    logoAlt: 'AD multi-sites',
    summary: 'Replication et organisation multi-sites dans un environnement Active Directory.',
    objective: 'Comprendre la logique de replication et d organisation multi-sites dans un environnement AD.',
    manipulation: 'Notions de sites AD, liens inter-sites, replication, structure d annuaire distribue.',
    skills: ['Architecture AD', 'Organisation reseau', 'Administration Windows'],
    techBadges: ['AD Sites', 'Windows Server'],
    resourceUrl: 'https://learn.microsoft.com/fr-fr/windows-server/identity/ad-ds/get-started/replication/active-directory-replication-concepts',
    resourceLabel: 'Microsoft Learn',
    reportPlaceholder: 'CR_SiteDistantAD.pdf',
  },
  // â”€â”€ RÃ‰SEAU â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'openvpn-opnsense',
    title: 'OpenVPN / OPNsense',
    category: 'Reseau',
    filterTags: ['Reseau', 'Cybersecurite'],
    logo: '/assets/img/pfsense.png',
    logoAlt: 'Pare-feu / VPN',
    summary: 'Mise en place d un acces distant securise via un pare-feu OPNsense.',
    objective: 'Comprendre la mise en place d un acces distant securise via un pare-feu.',
    manipulation: 'Logique VPN, regles de pare-feu, acces distant chiffre, notions de tunnel et de certificat.',
    skills: ['Reseau', 'Securite', 'Segmentation', 'Pare-feu'],
    techBadges: ['OPNsense', 'OpenVPN'],
    resourceUrl: 'https://docs.opnsense.org/manual/vpnet.html',
    resourceLabel: 'Documentation OPNsense',
    reportPlaceholder: 'CR_OpenVPN.pdf',
  },
  {
    id: 'dhcp-debian',
    title: 'DHCP (Debian)',
    category: 'Reseau',
    filterTags: ['Reseau'],
    logo: '/assets/img/network.png',
    logoAlt: 'DHCP / Reseau',
    summary: 'Attribution dynamique d adresses IP dans un reseau avec isc-dhcp-server.',
    objective: 'Comprendre l attribution dynamique d adresses IP dans un reseau.',
    manipulation: 'Plages d adresses, options DHCP, reservation eventuelle par MAC, logique d attribution automatique.',
    skills: ['Adressage IP', 'Service reseau', 'Diagnostic'],
    techBadges: ['isc-dhcp-server', 'Debian'],
    resourceUrl: 'https://www.it-connect.fr/dhcp-serveur-debian/',
    resourceLabel: 'Tutoriel IT-Connect',
    reportPlaceholder: 'CR_DHCP.pdf',
  },
  {
    id: 'relay-dhcp',
    title: 'Relay DHCP (Debian)',
    category: 'Reseau',
    filterTags: ['Reseau'],
    logo: '/assets/img/network.png',
    logoAlt: 'Relay DHCP',
    summary: 'Relayer une diffusion DHCP entre plusieurs segments reseau distincts.',
    objective: 'Comprendre comment relayer une diffusion DHCP entre plusieurs segments reseau.',
    manipulation: 'Notion de relais DHCP, passage inter-reseaux, role du routeur comme agent relais, serveur DHCP central.',
    skills: ['Routage', 'Adressage IP', 'Architecture reseau'],
    techBadges: ['isc-dhcp-relay', 'Debian'],
    resourceUrl: 'https://www.it-connect.fr/dhcp-relay-agent-linux/',
    resourceLabel: 'Tutoriel IT-Connect',
    reportPlaceholder: 'CR_RelayDHCP.pdf',
  },
  {
    id: 'traefik',
    title: 'Traefik reverse proxy (Debian)',
    category: 'Reseau',
    filterTags: ['Reseau', 'Systeme'],
    monogram: 'TR',
    summary: 'Role d un reverse proxy dans la publication de services web internes.',
    objective: 'Decouvrir le role d un reverse proxy dans la publication de services web.',
    manipulation: 'Exposition d applications, routage HTTP/HTTPS, point d entree unique, logique de configuration par labels.',
    skills: ['Linux', 'Services web', 'Securite', 'Publication de services'],
    techBadges: ['Traefik', 'Debian'],
    resourceUrl: 'https://doc.traefik.io/traefik/',
    resourceLabel: 'Documentation Traefik',
    reportPlaceholder: 'CR_Traefik.pdf',
  },
  // â”€â”€ CYBERSÃ‰CURITÃ‰ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'keeweb-docker',
    title: 'KeeWeb (Docker)',
    category: 'Cybersecurite',
    filterTags: ['Cybersecurite'],
    monogram: 'KW',
    summary: 'Gestion securisee de mots de passe via une application conteneurisee.',
    objective: 'Manipuler une application conteneurisee orientee gestion securisee de mots de passe.',
    manipulation: 'Deploiement Docker, acces a l application, logique de coffre-fort numerique, fichiers de base de donnees KeePass.',
    skills: ['Cybersecurite', 'Conteneurisation', 'Hygiene numerique'],
    techBadges: ['Docker', 'KeeWeb'],
    resourceUrl: 'https://hub.docker.com/r/antelle/keeweb',
    resourceLabel: 'Docker Hub',
    reportPlaceholder: 'CR_KeeWeb.pdf',
  },
  {
    id: 'desactivation-protocoles',
    title: 'Desactivation de protocoles non securises',
    category: 'Cybersecurite',
    filterTags: ['Cybersecurite'],
    logo: '/assets/img/winserv.png',
    logoAlt: 'Windows Server securite',
    summary: 'Renforcement d un serveur Windows en supprimant les protocoles faibles ou obsoletes.',
    objective: 'Renforcer un serveur Windows en supprimant des protocoles faibles ou obsoletes.',
    manipulation: 'Parametres de securite Windows, desactivation de TLS 1.0/SSL 2.0, bonnes pratiques de durcissement, verification registre.',
    skills: ['Windows Server', 'Cybersecurite', 'Durcissement'],
    techBadges: ['Windows Server', 'Registre'],
    resourceUrl: 'https://learn.microsoft.com/fr-fr/windows-server/security/tls/tls-registry-settings',
    resourceLabel: 'Microsoft Learn',
    reportPlaceholder: 'CR_DesactivationProtocoles.pdf',
  },
  {
    id: 'signature-powershell',
    title: 'Signature de script PowerShell',
    category: 'Cybersecurite',
    filterTags: ['Cybersecurite', 'Systeme'],
    logo: '/assets/img/powershell.png',
    logoAlt: 'PowerShell',
    summary: 'Role de la signature dans l execution controlee de scripts PowerShell.',
    objective: 'Comprendre le role de la signature dans l execution controlee de scripts.',
    manipulation: 'Politique d execution PowerShell, certificat de signature, chaine de confiance, verification d integrite.',
    skills: ['PowerShell', 'Securite', 'Administration Windows'],
    techBadges: ['PowerShell', 'Windows Server'],
    resourceUrl: 'https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_signing',
    resourceLabel: 'Microsoft Learn',
    reportPlaceholder: 'CR_SignaturePS.pdf',
  },
  // â”€â”€ SUPERVISION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'observium',
    title: 'Observium (Debian)',
    category: 'Supervision',
    filterTags: ['Supervision'],
    monogram: 'OB',
    summary: 'Decouverte d une solution de supervision reseau et systeme orientee collecte SNMP.',
    objective: 'Decouvrir une solution de supervision reseau et systeme.',
    manipulation: 'Installation, ajout d hotes, collecte d informations SNMP, visualisation des metriques, logique de monitoring.',
    skills: ['Supervision', 'Reseau', 'Visibilite d infrastructure'],
    techBadges: ['Observium', 'SNMP'],
    resourceUrl: 'https://www.observium.org/docs/',
    resourceLabel: 'Documentation',
    reportPlaceholder: 'CR_Observium.pdf',
  },
  {
    id: 'beszel',
    title: 'Beszel (Debian)',
    category: 'Supervision',
    filterTags: ['Supervision'],
    monogram: 'BZ',
    summary: 'Outil leger de supervision d hotes avec tableau de bord simple et clair.',
    objective: 'Decouvrir un outil leger de supervision et de suivi d hotes.',
    manipulation: 'Installation, tableau de bord, suivi de machines, lecture d etat des ressources, configuration des hotes supervises.',
    skills: ['Supervision', 'Linux', 'Administration'],
    techBadges: ['Beszel', 'Debian'],
    resourceUrl: 'https://beszel.dev/',
    resourceLabel: 'Documentation Beszel',
    reportPlaceholder: 'CR_Beszel.pdf',
  },
  {
    id: 'zabbix',
    title: 'Zabbix (Debian)',
    category: 'Supervision',
    filterTags: ['Supervision'],
    monogram: 'ZX',
    summary: 'Bases d une supervision centralisee avec hotes, metriques et alertes.',
    objective: 'Comprendre les bases d une supervision centralisee.',
    manipulation: 'Installation Zabbix, ajout d hotes, configuration de metriques, seuils d alertes, visualisation, logique de surveillance.',
    skills: ['Supervision', 'Diagnostic', 'Administration systeme et reseau'],
    techBadges: ['Zabbix', 'Debian'],
    resourceUrl: 'https://www.zabbix.com/documentation/current/fr/',
    resourceLabel: 'Documentation Zabbix',
    reportPlaceholder: 'CR_Zabbix.pdf',
  },
];

export const homelabProjects: HomelabProject[] = [
  {
    id: 'lab-pfsense',
    title: 'Lab pfSense / routage / VLAN',
    status: 'en-cours',
    statusLabel: 'En cours',
    summary: 'Travail personnel oriente comprehension du pare-feu, du routage, des VLANs et de la logique WAN/LAN dans un petit lab auto-heberge.',
    icon: '/assets/img/pfsense.png',
    iconAlt: 'pfSense',
    targetSkills: ['Pare-feu', 'Segmentation', 'Routage'],
    why: 'Ce projet m aide a mieux comprendre les flux reseau avant de deployer des services plus complexes.',
    idea: 'Structurer un mini reseau de test avec segments distincts, regles de filtrage claires et validation des flux autorises.',
    skills: ['pfSense', 'VLAN', 'Routage', 'Pare-feu', 'WAN/LAN'],
    resourceUrl: 'https://docs.netgate.com/pfsense/en/latest/',
    resourceLabel: 'Documentation pfSense',
  },
  {
    id: 'lab-ad-gpo',
    title: 'Lab Active Directory / GPO',
    status: 'approfondissement',
    statusLabel: 'Approfondissement',
    summary: 'Approfondissement personnel autour des utilisateurs, groupes, strategies de groupe et organisation d un domaine Windows.',
    icon: '/assets/img/ad.png',
    iconAlt: 'Active Directory',
    targetSkills: ['Organisation AD', 'GPO', 'Administration Windows'],
    why: 'Je veux consolider mes reflexes d administration d un domaine pour etre plus autonome en stage.',
    idea: 'Monter un petit domaine de test avec OU, groupes et GPO de base pour mieux consolider les reflexes d administration.',
    skills: ['Active Directory', 'GPO', 'Windows Server', 'Groupes', 'OU'],
    resourceUrl: 'https://learn.microsoft.com/fr-fr/windows-server/identity/ad-ds/',
    resourceLabel: 'Microsoft Learn',
  },
  {
    id: 'lab-linux-hardening',
    title: 'Linux hardening / services',
    status: 'personnel',
    statusLabel: 'Personnel',
    summary: 'Approche personnelle sur la securisation de services Linux, les permissions et la logique d administration serveur.',
    icon: '/assets/img/linux.png',
    iconAlt: 'Linux',
    targetSkills: ['Durcissement', 'Permissions', 'Services Linux'],
    why: 'La securisation Linux est un point central pour mes futurs projets systeme et cybersecurite.',
    idea: 'Continuer le durcissement d un serveur de test avec checklist simple: SSH, permissions, firewall et journalisation.',
    skills: ['Debian', 'SSH', 'Permissions', 'Services', 'Bash'],
    resourceUrl: 'https://www.it-connect.fr/category/linux/',
    resourceLabel: 'IT-Connect Linux',
  },
  {
    id: 'lab-supervision',
    title: 'Supervision / dashboards',
    status: 'en-cours',
    statusLabel: 'En cours',
    summary: 'Experimentations autour du monitoring de machines et de services dans un petit environnement de test.',
    icon: '/assets/img/security-monitor.png',
    iconAlt: 'Supervision',
    targetSkills: ['Metriques', 'Alertes', 'Diagnostic'],
    why: 'Je veux apprendre a detecter plus vite les incidents et mieux lire l etat d une infrastructure.',
    idea: 'Comparer deux outils de supervision, definir quelques seuils d alertes utiles et suivre la stabilite dans le temps.',
    skills: ['Zabbix', 'Beszel', 'Dashboard', 'Metriques', 'SNMP'],
    resourceUrl: 'https://www.zabbix.com/documentation/current/fr/',
    resourceLabel: 'Documentation Zabbix',
  },
];

export const projectResources: ProjectResource[] = [
  // Systeme
  { title: 'Documentation Proxmox', description: 'Reference officielle pour la virtualisation, les VM et les conteneurs LXC.', url: 'https://pve.proxmox.com/wiki/Main_Page', label: 'Documentation', category: 'Systeme' },
  { title: 'Microsoft Learn - Windows Server', description: 'Base solide pour Active Directory, PKI, GPO et services Windows.', url: 'https://learn.microsoft.com/fr-fr/windows-server/', label: 'Documentation', category: 'Systeme' },
  { title: 'Debian Wiki', description: 'Reference Debian pour LVM, RAID, paquets, permissions et services.', url: 'https://wiki.debian.org/', label: 'Guide', category: 'Systeme' },
  // Reseau
  { title: 'IT-Connect - Reseau', description: 'Tutoriels pratiques sur DHCP, DNS, routing et services reseau sous Linux et Windows.', url: 'https://www.it-connect.fr/category/reseau/', label: 'Tutoriels', category: 'Reseau' },
  { title: 'Documentation OPNsense', description: 'Reference pour le pare-feu, le routage et le VPN avec OPNsense.', url: 'https://docs.opnsense.org/', label: 'Documentation', category: 'Reseau' },
  { title: 'Documentation Traefik', description: 'Guide officiel du reverse proxy Traefik et de sa configuration par labels.', url: 'https://doc.traefik.io/traefik/', label: 'Documentation', category: 'Reseau' },
  // Cybersecurite
  { title: 'Documentation ANSSI', description: 'Guides et recommandations pour la securite, le durcissement et la conformite.', url: 'https://cyber.gouv.fr/', label: 'Guides', category: 'Cybersecurite' },
  { title: 'Microsoft Learn - PowerShell', description: 'Reference pour les scripts, la signature et l administration par ligne de commande.', url: 'https://learn.microsoft.com/fr-fr/powershell/', label: 'Documentation', category: 'Cybersecurite' },
  { title: 'IT-Connect - Securite', description: 'Articles pratiques sur le durcissement, les protocoles et la configuration securisee Windows.', url: 'https://www.it-connect.fr/category/securite/', label: 'Tutoriels', category: 'Cybersecurite' },
  // Supervision
  { title: 'Documentation Zabbix', description: 'Reference officielle pour la supervision, les hotes, les metriques et les alertes.', url: 'https://www.zabbix.com/documentation/current/fr/', label: 'Documentation', category: 'Supervision' },
  { title: 'Documentation Beszel', description: 'Guide pour l installation et la configuration du tableau de bord Beszel.', url: 'https://beszel.dev/', label: 'Documentation', category: 'Supervision' },
  { title: 'Documentation Observium', description: 'Reference pour la collecte SNMP et la supervision reseau avec Observium.', url: 'https://www.observium.org/docs/', label: 'Documentation', category: 'Supervision' },
];

// Compatibility export for programme.ts (uses old Project interface from types.ts)
export const projects: Project[] = formationProjects.map(p => ({
  id: p.id,
  title: p.title,
  category: p.filterTags,
  context: '',
  objective: p.objective,
  description: p.manipulation,
  tech: p.techBadges,
  competencesBTS: p.skills,
  status: 'completed' as const,
  date: '',
}));
