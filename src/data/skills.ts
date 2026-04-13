// src/data/skills.ts
// Donnees structurees pour la page Competences - BTS SIO SISR

export interface SkillFamily {
  id: string;
  title: string;
  summary: string;
  icon: string;
  iconAlt: string;
  skills: string[];
  proof: string;
  actionLabel: string;
  actionTarget: string;
}

export interface ContextLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface StageContext {
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  imageAlt: string;
  skills: string[];
  outcomes: string[];
  links: ContextLink[];
}

export interface ProjectContext {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  skills: string[];
  detail: string;
  links: ContextLink[];
}

export interface ClassContext {
  title: string;
  summary: string;
  blocks: Array<{
    label: string;
    text: string;
  }>;
  skills: string[];
  links: ContextLink[];
}

export interface ToolTile {
  id: string;
  name: string;
  category: string;
  note: string;
  logo?: string;
  logoAlt?: string;
  monogram?: string;
}

export interface ValidationItem {
  id: string;
  title: string;
  issuer: string;
  image: string;
  imageAlt: string;
  supportLogo?: string;
  supportLogoAlt?: string;
  status: string;
  description: string;
  actionLabel: string;
  actionHref?: string;
  previewLabel?: string;
}

export interface ResourceCard {
  id: string;
  title: string;
  description: string;
  badge: string;
  href?: string;
  external?: boolean;
  logo?: string;
  logoAlt?: string;
  monogram?: string;
}

export const skillHeroTags = [
  'Reseaux',
  'Systemes',
  'Cybersecurite',
  'Support / ITSM',
  'Projets'
];

export const skillFamilies: SkillFamily[] = [
  {
    id: 'reseaux',
    title: 'Reseaux',
    summary: 'Mettre en place et diagnostiquer une infrastructure reseau claire.',
    icon: '/assets/img/network.png',
    iconAlt: 'Illustration reseaux',
    skills: ['VLAN', 'Adressage IP', 'DHCP / DNS', 'Commutation', 'Routage de base', 'Pare-feu'],
    proof: 'Mobilise en TP reseau, sur Soccer78 et en stage.',
    actionLabel: 'Voir en contexte',
    actionTarget: 'skills-contexts'
  },
  {
    id: 'windows',
    title: 'Systemes Windows',
    summary: 'Administrer des postes, des comptes et des services Windows.',
    icon: '/assets/img/winserv.png',
    iconAlt: 'Illustration Windows Server',
    skills: ['Windows 10/11', 'Windows Server', 'Active Directory', 'GPO', 'Partages reseau', 'Droits NTFS / ACL'],
    proof: 'Travaille en stage pour les postes, les acces et les mini-PC.',
    actionLabel: 'Voir le stage',
    actionTarget: 'skills-contexts'
  },
  {
    id: 'linux',
    title: 'Linux',
    summary: 'Installer, configurer et utiliser un environnement Linux utile.',
    icon: '/assets/img/linux.png',
    iconAlt: 'Illustration Linux',
    skills: ['Debian / Ubuntu', 'Permissions', 'Utilisateurs / groupes', 'Bash', 'Services', 'Gestion de paquets'],
    proof: 'Pratiquee en TP et en projet.',
    actionLabel: 'Voir les projets lies',
    actionTarget: 'skills-contexts'
  },
  {
    id: 'security',
    title: 'Cybersecurite',
    summary: 'Appliquer des mesures concretes de protection, de sensibilisation et de durcissement.',
    icon: '/assets/img/shield.png',
    iconAlt: 'Illustration securite',
    skills: ['Bonnes pratiques ANSSI', 'Sensibilisation phishing', 'RGPD', 'Mots de passe robustes', 'Authentification', 'Durcissement de base'],
    proof: 'Reliee aux recommandations ANSSI et aux TP securite.',
    actionLabel: 'Voir les validations',
    actionTarget: 'skills-validations'
  },
  {
    id: 'support',
    title: 'Outils / Support / ITSM',
    summary: 'Suivre, diagnostiquer et traiter des demandes utilisateurs.',
    icon: '/assets/img/glpi.png',
    iconAlt: 'Illustration GLPI',
    skills: ['GLPI', 'TeamViewer', 'Support utilisateurs', 'Diagnostic', 'PowerShell', 'Suivi de tickets'],
    proof: 'Visible en stage dans un environnement municipal reel.',
    actionLabel: 'Voir le contexte stage',
    actionTarget: 'skills-contexts'
  }
];

export const stageContext: StageContext = {
  title: 'Stage en DSI - Mairie de Trappes',
  subtitle: 'Support, administration et environnement municipal reel',
  summary: 'Developpement de competences en support utilisateurs, administration de comptes, reseau, parc informatique et outils de gestion dans un environnement municipal reel.',
  image: '/assets/img/stage_it.png',
  imageAlt: 'Illustration du stage en DSI',
  skills: ['Support utilisateurs', 'Active Directory', 'GLPI', 'Reseau', 'PowerShell', 'Gestion de parc'],
  outcomes: [
    'Support utilisateurs et assistance a distance.',
    'Comptes, acces, imprimantes et postes.',
    'Suivi des tickets dans GLPI.',
    'Preparation et mise a niveau de mini-PC.'
  ],
  links: [
    { label: 'Voir la page Stage', href: '/#/stages' },
    { label: 'Consulter le rapport', href: '/#/rapport-stage' }
  ]
};

export const projectContexts: ProjectContext[] = [
  {
    id: 'gsb',
    title: 'GSB',
    summary: 'Projet de formation mobilisant l architecture reseau, les services systemes, la virtualisation et la logique d infrastructure.',
    image: '/assets/img/gsb.png',
    imageAlt: 'Illustration du projet GSB',
    skills: ['Services reseau', 'Virtualisation', 'Serveurs', 'Segmentation', 'Documentation'],
    detail: 'Projet centre sur une infrastructure organisee, des services coherents et une documentation claire.',
    links: [
      { label: 'Voir la rubrique projets', href: '/#/projects' },
      { label: 'Voir programme et projets', href: '/#/programme' }
    ]
  },
  {
    id: 'soccer78',
    title: 'Soccer78',
    summary: 'Projet oriente reseau et infrastructure autour de VLAN, pfSense, switch Aruba, adressage IP et organisation d un environnement connecte.',
    image: '/assets/img/soccer78.png',
    imageAlt: 'Illustration du projet Soccer78',
    skills: ['VLAN', 'pfSense', 'Switch Aruba', 'Adressage IP', 'Routage', 'Pare-feu'],
    detail: 'Projet reseau concret autour du filtrage, du routage et de l organisation des equipements.',
    links: [
      { label: 'Voir la rubrique projets', href: '/#/projects' },
      { label: 'Voir programme et projets', href: '/#/programme' }
    ]
  }
];

export const classContext: ClassContext = {
  title: 'Travaux et mises en situation en classe',
  summary: 'La progression ne repose pas seulement sur les projets finaux. Elle se construit aussi par des TP, des essais, des schemas et des exercices de diagnostic.',
  blocks: [
    {
      label: 'TP reseau',
      text: 'VLAN, adressage, services reseau, captures et troubleshooting.'
    },
    {
      label: 'Administration',
      text: 'Windows, Linux, comptes, services, droits et deploiements.'
    },
    {
      label: 'Methode',
      text: 'Schemas, documentation, comptes rendus et validation des tests.'
    },
    {
      label: 'Automatisation',
      text: 'Scripts simples en Bash ou PowerShell pour gagner en rigueur.'
    }
  ],
  skills: ['TP reseau', 'Administration Windows / Linux', 'Deploiements', 'Documentation', 'Architecture / schemas', 'Scripts / automatisations'],
  links: [
    { label: 'Voir le programme', href: '/#/programme' },
    { label: 'Voir le BTS SIO', href: '/#/bts-sio' }
  ]
};

export const toolTiles: ToolTile[] = [
  { id: 'glpi', name: 'GLPI', category: 'Support / ITSM', note: 'Tickets, suivi et inventaire', logo: '/assets/img/glpi.png', logoAlt: 'Logo GLPI' },
  { id: 'teamviewer', name: 'TeamViewer', category: 'Support', note: 'Assistance a distance', logo: '/assets/img/viewer.png', logoAlt: 'TeamViewer' },
  { id: 'windows-server', name: 'Windows Server', category: 'Systemes', note: 'Services et administration', logo: '/assets/img/winserv.png', logoAlt: 'Windows Server' },
  { id: 'active-directory', name: 'Active Directory', category: 'Systemes', note: 'Comptes, groupes, OU', logo: '/assets/img/ad.png', logoAlt: 'Active Directory' },
  { id: 'linux', name: 'Debian / Ubuntu', category: 'Linux', note: 'Services, paquets, permissions', logo: '/assets/img/linux.png', logoAlt: 'Linux' },
  { id: 'pfsense', name: 'pfSense', category: 'Reseaux / securite', note: 'Firewall, routage, VLAN', logo: '/assets/img/pfsense.png', logoAlt: 'pfSense' },
  { id: 'powershell', name: 'PowerShell', category: 'Scripting', note: 'Administration et automatisation', logo: '/assets/img/powershell.png', logoAlt: 'PowerShell' },
  { id: 'bash', name: 'Bash', category: 'Scripting', note: 'Commandes et scripts simples', logo: '/assets/img/bash.png', logoAlt: 'Bash' },
  { id: 'vmware', name: 'VMware', category: 'Virtualisation', note: 'Lab et machines virtuelles', logo: '/assets/img/vmware.png', logoAlt: 'VMware' },
  { id: 'proxmox', name: 'Proxmox', category: 'Virtualisation', note: 'Environnements virtualises', logo: '/assets/img/proxmox.png', logoAlt: 'Proxmox' },
  { id: 'github', name: 'GitHub', category: 'Versioning', note: 'Suivi de projets et depot', logo: '/assets/img/github.png', logoAlt: 'GitHub' },
  { id: 'wireshark', name: 'Wireshark', category: 'Reseau', note: 'Analyse de trafic', logo: '/assets/img/wireshark.png', logoAlt: 'Wireshark' },
  { id: 'vscode', name: 'VS Code', category: 'Documentation / scripts', note: 'Edition et organisation', logo: '/assets/img/vscode.png', logoAlt: 'VS Code' },
  { id: 'cisco', name: 'Cisco / Packet Tracer', category: 'Reseau', note: 'Simulations et logique reseau', logo: '/assets/img/network-map.png', logoAlt: 'Reseau et simulation' }
];

export const validationItems: ValidationItem[] = [
  {
    id: 'cisco-intro',
    title: 'Cisco - resultat 1',
    issuer: 'Cisco Networking Academy',
    image: '/assets/img/cisco1.jpg',
    imageAlt: 'Certification Cisco 1',
    supportLogo: '/assets/img/ciscologo.png',
    supportLogoAlt: 'Logo Cisco',
    status: 'Valide',
    description: 'Validation utile pour illustrer la progression sur les fondamentaux reseau.',
    actionLabel: 'Voir',
    actionHref: '/#/certifications',
    previewLabel: 'Agrandir'
  },
  {
    id: 'cisco-switching',
    title: 'Cisco - resultat 2',
    issuer: 'Cisco Networking Academy',
    image: '/assets/img/cisco2.jpg',
    imageAlt: 'Certification Cisco 2',
    supportLogo: '/assets/img/ciscologo.png',
    supportLogoAlt: 'Logo Cisco',
    status: 'Valide',
    description: 'Validation complementaire pour appuyer la progression en reseaux.',
    actionLabel: 'Voir',
    actionHref: '/#/certifications',
    previewLabel: 'Agrandir'
  },
  {
    id: 'anssi-doc',
    title: 'ANSSI - sensibilisation',
    issuer: 'ANSSI',
    image: '/assets/img/doc-anssi.jpg',
    imageAlt: 'Document ANSSI',
    status: 'Reference / validation',
    description: 'Support utile pour la culture cyber et les bonnes pratiques professionnelles.',
    actionLabel: 'Voir',
    actionHref: '/#/certifications/anssi',
    previewLabel: 'Agrandir'
  },
  {
    id: 'rgpd-modules',
    title: 'Modules RGPD',
    issuer: 'MOOC / sensibilisation RGPD',
    image: '/assets/img/moocrgpd.jpg',
    imageAlt: 'Illustration RGPD',
    status: 'Valide',
    description: 'Modules de sensibilisation pour renforcer les reflexes de protection des donnees et la conformite RGPD.',
    actionLabel: 'Voir',
    previewLabel: 'Agrandir'
  }
];

export const profileCards: ResourceCard[] = [
  {
    id: 'rootme',
    title: 'Root-Me',
    description: 'Profil Root-Me pour presenter mes challenges, ma progression et mon interet pour la pratique technique.',
    badge: 'Profil technique',
    href: 'https://www.root-me.org/dohaa?lang=fr#63a0e09eb6f8fa634dc62e30333a113f',
    external: true,
    monogram: 'RM'
  },
  {
    id: 'tryhackme',
    title: 'TryHackMe',
    description: 'Profil TryHackMe pour montrer mon interet pour les labs, l apprentissage en cybersecurite et la pratique.',
    badge: 'Profil technique',
    href: 'https://tryhackme.com/p/chamsabbassi78',
    external: true,
    monogram: 'THM'
  },
  {
    id: 'github-profile',
    title: 'GitHub',
    description: 'Depots, scripts et traces de travail associes au portfolio.',
    badge: 'Profil technique',
    href: 'https://github.com/abbadoha',
    external: true,
    logo: '/assets/img/github.png',
    logoAlt: 'GitHub'
  }
];

export const technicalResourceCards: ResourceCard[] = [
  {
    id: 'it-connect',
    title: 'IT-Connect',
    description: 'Tutoriels et retours pratiques utiles en administration systeme, reseau et securite.',
    badge: 'Ressource terrain',
    href: 'https://www.it-connect.fr/',
    external: true,
    monogram: 'IT'
  },
  {
    id: 'microsoft-learn',
    title: 'Microsoft Learn',
    description: 'Base solide pour revoir Windows, Azure, scripts et bonnes pratiques d administration.',
    badge: 'Documentation',
    href: 'https://learn.microsoft.com/',
    external: true,
    monogram: 'MS'
  },
  {
    id: 'cisco-netacad',
    title: 'Cisco Networking Academy',
    description: 'Reference claire pour les fondamentaux reseau, switching, adressage et diagnostic.',
    badge: 'Reseaux',
    href: 'https://www.netacad.com/',
    external: true,
    monogram: 'CC'
  },
  {
    id: 'debian-doc',
    title: 'Documentation Debian / Ubuntu',
    description: 'Support utile pour les services, paquets, permissions et administration Linux.',
    badge: 'Linux',
    href: 'https://www.debian.org/doc/',
    external: true,
    monogram: 'DEB'
  },
  {
    id: 'anssi-docs',
    title: 'Documentation ANSSI',
    description: 'Guides et recommandations credibles pour la securite, l hygiene numerique et le durcissement.',
    badge: 'Securite',
    href: 'https://cyber.gouv.fr/',
    external: true,
    logo: '/assets/img/anssi.png',
    logoAlt: 'ANSSI'
  },
  {
    id: 'glpi-docs',
    title: 'Documentation GLPI',
    description: 'Reference pour le ticketing, l inventaire et l organisation d un support structure.',
    badge: 'Support / ITSM',
    href: 'https://glpi-project.org/',
    external: true,
    logo: '/assets/img/glpi.png',
    logoAlt: 'GLPI'
  },
  {
    id: 'proxmox-docs',
    title: 'Proxmox Documentation',
    description: 'Support technique pour la virtualisation, les sauvegardes et les environnements de lab.',
    badge: 'Virtualisation',
    href: 'https://pve.proxmox.com/wiki/Main_Page',
    external: true,
    logo: '/assets/img/proxmox.png',
    logoAlt: 'Proxmox'
  },
  {
    id: 'pfsense-docs',
    title: 'pfSense Documentation',
    description: 'Reference pratique pour le filtrage, le routage, les interfaces et les regles firewall.',
    badge: 'Reseaux / securite',
    href: 'https://docs.netgate.com/pfsense/en/latest/',
    external: true,
    logo: '/assets/img/pfsense.png',
    logoAlt: 'pfSense'
  }
];
