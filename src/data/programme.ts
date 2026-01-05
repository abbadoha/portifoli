// src/data/programme.ts
// Données centralisées pour le contenu pédagogique BTS SIO SISR

export interface ModuleContent {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

export interface PedagogicalContent {
  id: string;
  title: string;
  icon: string;
  description?: string;
  blocks?: {
    title: string;
    items: string[];
  }[];
  items?: string[];
}

// Modules fondamentaux (3 blocs professionnels + transversal)
export const modulesFondamentaux: PedagogicalContent[] = [
  {
    id: 'bloc1',
    title: 'Bloc 1 — Support & mise à disposition de services',
    icon: '🎫',
    description: 'Assurer le support utilisateurs et garantir la disponibilité des services informatiques.',
    items: [
      'Gestion des incidents et demandes utilisateurs (ticketing, traçabilité)',
      'Gestion du patrimoine IT (postes, comptes, imprimantes, licences, services)',
      'Déploiement et mise à disposition de services (postes clients, services réseau)',
      'Documentation, procédures et comptes-rendus (guides utilisateurs, wiki interne)'
    ]
  },
  {
    id: 'bloc2',
    title: 'Bloc 2 — Administration systèmes & réseaux (SISR)',
    icon: '🖥️',
    description: 'Concevoir, déployer et administrer une infrastructure réseau et système.',
    items: [
      'Architecture réseau : adressage IP, VLAN, routage, segmentation (LAN/DMZ)',
      'Services d\'infrastructure : DNS, DHCP, annuaire (Active Directory), partages réseau (SMB/NFS)',
      'Administration systèmes : Windows Server / Linux (gestion utilisateurs, droits, services)',
      'Virtualisation & environnements de test (machines virtuelles, réseaux virtuels, snapshots)',
      'Supervision et diagnostic : analyse de logs, dépannage réseau/système (Wireshark, outils de monitoring)'
    ]
  },
  {
    id: 'bloc3',
    title: 'Bloc 3 — Cybersécurité des services informatiques',
    icon: '🔐',
    description: 'Protéger l\'infrastructure, les systèmes et les données contre les menaces.',
    items: [
      'Durcissement systèmes et postes (bonnes pratiques ANSSI, configuration sécurisée)',
      'Sécurisation réseau : filtrage, pare-feu, VPN (principes et mise en œuvre)',
      'Gestion des mises à jour et correctifs (patching Windows/Linux)',
      'Protection des données : confidentialité, intégrité, RGPD (sensibilisation)',
      'Mesures de sécurité : authentification forte, HTTPS/TLS (principes), sauvegardes (règle 3-2-1)'
    ]
  },
  {
    id: 'transversal',
    title: 'Enseignements transversaux',
    icon: '📚',
    items: [
      'Culture économique, juridique et managériale (CEJM) — Droit du numérique, gestion de projet, économie des SI',
      'Anglais technique — Documentation, communication professionnelle en contexte IT international',
      'Mathématiques pour l\'informatique — Calculs réseaux, binaire/hexadécimal, algèbre de Boole, statistiques'
    ]
  }
];

// Compétences visées (8 compétences clés SISR)
export const competencesVisees: PedagogicalContent = {
  id: 'competences',
  title: 'Compétences professionnelles visées',
  icon: '🎯',
  description: 'Les 8 compétences clés développées durant la formation BTS SIO option SISR.',
  blocks: [
    {
      title: 'Support & assistance',
      items: [
        'Assister les utilisateurs et traiter les incidents/demandes (support L1/L2, ticketing)',
        'Diagnostiquer une panne réseau ou système (analyse logs, outils de diagnostic, méthodologie)'
      ]
    },
    {
      title: 'Infrastructure & services',
      items: [
        'Mettre en place et maintenir des services réseau (DNS, DHCP, Active Directory, partages)',
        'Concevoir et adapter une infrastructure réseau (adressage, VLAN, segmentation, routage) et la documenter',
        'Déployer et maintenir des postes de travail (installation, standardisation, mises à jour)'
      ]
    },
    {
      title: 'Administration & exploitation',
      items: [
        'Administrer des serveurs Windows et Linux (comptes, droits, services, scripts d\'automatisation)',
        'Mettre en œuvre des mesures de sécurité (durcissement, patching, principes TLS/HTTPS, bonnes pratiques ANSSI)'
      ]
    },
    {
      title: 'Disponibilité & continuité',
      items: [
        'Contribuer à la disponibilité et continuité de service (stratégie de sauvegarde, restauration, supervision)'
      ]
    }
  ]
};
