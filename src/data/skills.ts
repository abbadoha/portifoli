// src/data/skills.ts
// Données centralisées pour la page Compétences - BTS SIO SISR

export type SkillLevel = 'notions' | 'bonnes-bases' | 'en-approfondissement' | 'avance';

export interface Skill {
  name: string;
  level: SkillLevel;
  proof?: string; // Preuves d'utilisation (stage/projet)
  clickable?: boolean; // Tag cliquable avec modal
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface OtherSkillCategory {
  id: string;
  title: string;
  items: Skill[];
}

// Matrice principale de compétences
export const mainSkillsMatrix: SkillCategory[] = [
  {
    id: 'reseaux',
    title: 'Réseaux',
    icon: '🌐',
    skills: [
      // Bonnes bases
      { name: 'TCP/IP', level: 'bonnes-bases' },
      { name: 'DHCP/DNS', level: 'bonnes-bases' },
      { name: 'VLAN', level: 'bonnes-bases' },
      { name: 'Plan d\'adressage', level: 'bonnes-bases' },
      { name: 'DMZ / Segmentation', level: 'bonnes-bases' },
      
      // En approfondissement
      { 
        name: 'pfSense', 
        level: 'en-approfondissement',
        clickable: true,
        proof: 'Utilisé en projet personnel : configuration firewall, règles de filtrage, NAT, VLAN inter-services, VPN IPsec. Déployé sur lab technique pour segmentation réseau.'
      },
      { name: 'Routage statique', level: 'en-approfondissement' },
      { name: 'Commutation (switchs)', level: 'en-approfondissement' },
      { name: 'Firewalls (règles)', level: 'en-approfondissement' },
      { name: 'DHCP relay', level: 'en-approfondissement' },
      
      // Notions
      { name: 'VPN (IPsec, OpenVPN)', level: 'notions' },
      { name: 'Wi-Fi (802.11)', level: 'notions' },
      { name: 'QoS', level: 'notions' },
      { name: 'Diagnostic réseau', level: 'notions' }
    ]
  },
  {
    id: 'windows',
    title: 'Systèmes Windows',
    icon: '🖥️',
    skills: [
      // Bonnes bases
      { name: 'Windows 10/11', level: 'bonnes-bases' },
      { 
        name: 'Active Directory', 
        level: 'bonnes-bases',
        clickable: true,
        proof: 'Utilisé en stage (Mairie de Trappes) : gestion utilisateurs/groupes, unités organisationnelles, intégration postes au domaine. Projet personnel : création domaine test, structure OU, comptes.'
      },
      { name: 'Windows Server 2019/2022', level: 'bonnes-bases' },
      { name: 'DNS / DHCP Server', level: 'bonnes-bases' },
      { name: 'Partages réseau (SMB)', level: 'bonnes-bases' },
      { name: 'Patching / Windows Update', level: 'bonnes-bases' },
      { name: 'Déploiement Windows 11 (Rufus)', level: 'bonnes-bases' },
      
      // En approfondissement
      { name: 'Group Policy (GPO)', level: 'en-approfondissement' },
      { name: 'PowerShell (admin)', level: 'en-approfondissement' },
      { name: 'Droits NTFS / ACL', level: 'en-approfondissement' },
      { name: 'Services Windows', level: 'en-approfondissement' },
      { name: 'Hyper-V', level: 'en-approfondissement' },
      
      // Notions
      { name: 'WinRM / Remote Management', level: 'notions' },
      { name: 'WSUS', level: 'notions' },
      { name: 'WDS (déploiement)', level: 'notions' }
    ]
  },
  {
    id: 'linux',
    title: 'Systèmes Linux',
    icon: '🐧',
    skills: [
      // Bonnes bases
      { 
        name: 'Debian/Ubuntu', 
        level: 'bonnes-bases',
        clickable: true,
        proof: 'Utilisé en TP et projets : installation serveur Debian 11/12, configuration réseau, gestion paquets (apt), utilisateurs/groupes, permissions, services SSH/Apache.'
      },
      { name: 'Bash (lignes de commande)', level: 'bonnes-bases' },
      { name: 'Utilisateurs/groupes', level: 'bonnes-bases' },
      { name: 'Permissions (chmod/chown)', level: 'bonnes-bases' },
      { name: 'Gestion paquets (apt/yum)', level: 'bonnes-bases' },
      
      // En approfondissement
      { name: 'Shell scripting (Bash)', level: 'en-approfondissement' },
      { name: 'Services (Apache, Nginx, SSH)', level: 'en-approfondissement' },
      { name: 'Sécurisation (sudo, firewall)', level: 'en-approfondissement' },
      { name: 'Cron / Tâches planifiées', level: 'en-approfondissement' },
      { name: 'Logs système (syslog)', level: 'en-approfondissement' },
      
      // Notions
      { name: 'Conteneurisation (Docker basics)', level: 'notions' },
      { name: 'SELinux / AppArmor', level: 'notions' },
      { name: 'Kernel (notions)', level: 'notions' }
    ]
  },
  {
    id: 'securite',
    title: 'Sécurité IT',
    icon: '🔐',
    skills: [
      // Bonnes bases
      { name: 'Bonnes pratiques ANSSI', level: 'bonnes-bases' },
      { name: 'Sensibilisation phishing', level: 'bonnes-bases' },
      { name: 'RGPD (sensibilisation)', level: 'bonnes-bases' },
      { name: 'Mots de passe robustes', level: 'bonnes-bases' },
      { name: 'Sauvegardes (règle 3-2-1)', level: 'bonnes-bases' },
      
      // En approfondissement
      { name: 'Hardening Windows/Linux', level: 'en-approfondissement' },
      { name: 'Certificats SSL/TLS', level: 'en-approfondissement' },
      { name: 'Authentification (AD, LDAP)', level: 'en-approfondissement' },
      { name: 'Pare-feu applicatif', level: 'en-approfondissement' },
      
      // Notions
      { name: 'Pentesting (notions)', level: 'notions' },
      { name: 'Forensics (notions)', level: 'notions' },
      { name: 'Incident response (bases)', level: 'notions' }
    ]
  }
];

// Autres compétences (avec niveaux explicites)
export const otherSkills: OtherSkillCategory[] = [
  {
    id: 'outils',
    title: 'Outils et logiciels',
    items: [
      { name: 'Git / GitHub', level: 'bonnes-bases' },
      { name: 'VS Code', level: 'bonnes-bases' },
      { name: 'PuTTY / SSH', level: 'bonnes-bases' },
      { name: 'RDP (Bureau à distance)', level: 'bonnes-bases' },
      { name: 'TeamViewer (support)', level: 'bonnes-bases' },
      { 
        name: 'GLPI (ticketing)', 
        level: 'bonnes-bases',
        clickable: true,
        proof: 'Utilisé en stage (Mairie de Trappes) : prise en main système de ticketing, création/suivi tickets, gestion demandes utilisateurs, inventaire parc informatique.'
      },
      { 
        name: 'Wireshark', 
        level: 'en-approfondissement',
        clickable: true,
        proof: 'Utilisé en TP réseaux : capture et analyse de trames, identification protocoles, filtrage paquets (display filters), diagnostic connexions TCP/IP, détection anomalies.'
      },
      { name: 'Nmap (scan réseau)', level: 'en-approfondissement' },
      { name: 'Draw.io (schémas)', level: 'en-approfondissement' },
      { name: 'PowerShell ISE / Terminal', level: 'en-approfondissement' },
      { name: 'Inventaire parc (concepts)', level: 'notions' }
    ]
  },
  {
    id: 'virtualisation',
    title: 'Virtualisation',
    items: [
      { name: 'VMware Workstation', level: 'bonnes-bases' },
      { name: 'VirtualBox', level: 'bonnes-bases' },
      { name: 'Snapshots / Clonage VM', level: 'bonnes-bases' },
      { name: 'Réseaux virtuels (NAT/Host-only)', level: 'bonnes-bases' },
      { name: 'VMware ESXi', level: 'en-approfondissement' },
      { name: 'Proxmox VE', level: 'en-approfondissement' },
      { name: 'VLAN en environnement virtualisé', level: 'en-approfondissement' },
      { name: 'Hyper-V', level: 'notions' }
    ]
  },
  {
    id: 'programmation',
    title: 'Programmation / Scripting',
    items: [
      { name: 'PowerShell (scripts admin)', level: 'bonnes-bases' },
      { name: 'Bash (scripts simples)', level: 'bonnes-bases' },
      { name: 'HTML / CSS', level: 'bonnes-bases' },
      { name: 'Python (automatisation)', level: 'en-approfondissement' },
      { name: 'TypeScript', level: 'en-approfondissement' },
      { name: 'API / JSON (consommation)', level: 'notions' },
      { name: 'Regex (notions)', level: 'notions' }
    ]
  },
  {
    id: 'langues',
    title: 'Langues',
    items: [
      { name: 'Français', level: 'avance' }, // Natif
      { name: 'Anglais technique (B1)', level: 'bonnes-bases' },
      { name: 'Lecture documentation EN', level: 'bonnes-bases' }
    ]
  },
  {
    id: 'soft-skills',
    title: 'Soft skills',
    items: [
      { name: 'Communication (support utilisateurs)', level: 'bonnes-bases' },
      { name: 'Travail en équipe', level: 'bonnes-bases' },
      { name: 'Autonomie', level: 'bonnes-bases' },
      { name: 'Organisation / Priorisation', level: 'bonnes-bases' },
      { name: 'Rédaction de procédures', level: 'en-approfondissement' },
      { name: 'Diagnostic / Analyse', level: 'en-approfondissement' },
      { name: 'Gestion d\'incident (junior)', level: 'en-approfondissement' },
      { name: 'Présentation orale', level: 'notions' }
    ]
  }
];

// Labels des niveaux
export const levelLabels: Record<SkillLevel, { label: string; description: string }> = {
  'notions': {
    label: 'Notions',
    description: 'Connaissances théoriques, première exploration.'
  },
  'bonnes-bases': {
    label: 'Bonnes bases',
    description: 'Maîtrise pratique, utilisé en stage/projets, autonomie validée.'
  },
  'en-approfondissement': {
    label: 'En approfondissement',
    description: 'Apprentissage en cours, projet dédié en préparation.'
  },
  'avance': {
    label: 'Avancé',
    description: 'Expertise confirmée, enseignement possible, situations complexes.'
  }
};
