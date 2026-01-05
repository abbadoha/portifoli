// src/data/veille.ts
// Sources de veille technologique et cybersécurité pour BTS SIO SISR

export interface VeilleResource {
  title: string;
  description: string;
  url: string;
  type: 'RSS' | 'PDF' | 'Page Web' | 'API' | 'GitHub';
  category: string;
  updateFrequency?: string;
}

export interface VeilleCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  resources: VeilleResource[];
}

export const veilleCategories: VeilleCategory[] = [
  {
    id: 'cert-fr-anssi',
    title: 'CERT-FR / ANSSI',
    icon: '🇫🇷',
    description: 'Centre gouvernemental de veille, d\'alerte et de réponse aux attaques informatiques français',
    resources: [
      {
        title: 'CERT-FR — Site principal',
        description: 'Portail officiel du CERT-FR avec alertes, avis de sécurité, bulletins d\'actualité et recommandations',
        url: 'https://www.cert.ssi.gouv.fr/',
        type: 'Page Web',
        category: 'cert-fr-anssi'
      },
      {
        title: 'CERT-FR — Flux RSS global',
        description: 'Flux RSS agrégé (alertes + avis + bulletins CTI)',
        url: 'https://www.cert.ssi.gouv.fr/feed/',
        type: 'RSS',
        category: 'cert-fr-anssi',
        updateFrequency: 'Quotidien'
      },
      {
        title: 'CERT-FR — Avis de sécurité',
        description: 'Avis détaillés sur vulnérabilités critiques affectant produits courants',
        url: 'https://www.cert.ssi.gouv.fr/avis/feed/',
        type: 'RSS',
        category: 'cert-fr-anssi',
        updateFrequency: 'Hebdomadaire'
      },
      {
        title: 'CERT-FR — Alertes',
        description: 'Alertes urgentes sur menaces actives nécessitant actions immédiates',
        url: 'https://www.cert.ssi.gouv.fr/alerte/feed/',
        type: 'RSS',
        category: 'cert-fr-anssi',
        updateFrequency: 'Variable'
      },
      {
        title: 'CERT-FR — Cyber Threat Intelligence',
        description: 'Bulletins CTI : analyse menaces, campagnes d\'attaque, indicateurs compromission',
        url: 'https://www.cert.ssi.gouv.fr/cti/feed/',
        type: 'RSS',
        category: 'cert-fr-anssi',
        updateFrequency: 'Mensuel'
      },
      {
        title: 'ANSSI — Guides et recommandations',
        description: 'Guides de durcissement, bonnes pratiques sécurité systèmes/réseaux',
        url: 'https://www.ssi.gouv.fr/entreprise/guide/',
        type: 'Page Web',
        category: 'cert-fr-anssi'
      }
    ]
  },
  {
    id: 'microsoft',
    title: 'Microsoft Security',
    icon: '🪟',
    description: 'Microsoft Security Response Center — vulnérabilités et patchs Windows/Azure/Office',
    resources: [
      {
        title: 'MSRC Update Guide',
        description: 'Portail officiel des bulletins de sécurité Microsoft (CVE, KB, patchs)',
        url: 'https://msrc.microsoft.com/update-guide',
        type: 'Page Web',
        category: 'microsoft',
        updateFrequency: 'Patch Tuesday (2e mardi du mois)'
      },
      {
        title: 'MSRC — Flux RSS',
        description: 'Flux RSS des bulletins de sécurité Microsoft',
        url: 'https://msrc.microsoft.com/update-guide/rss',
        type: 'RSS',
        category: 'microsoft',
        updateFrequency: 'Mensuel'
      },
      {
        title: 'Microsoft Defender Threat Intelligence',
        description: 'Blog officiel Microsoft sur menaces, ransomwares, campagnes APT',
        url: 'https://www.microsoft.com/en-us/security/blog/threat-intelligence/',
        type: 'Page Web',
        category: 'microsoft'
      }
    ]
  },
  {
    id: 'cisa',
    title: 'CISA (US)',
    icon: '🇺🇸',
    description: 'Cybersecurity & Infrastructure Security Agency — agence fédérale américaine',
    resources: [
      {
        title: 'CISA KEV Catalog',
        description: 'Known Exploited Vulnerabilities : CVE exploitées activement (priorité patch)',
        url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog',
        type: 'Page Web',
        category: 'cisa',
        updateFrequency: 'Hebdomadaire'
      },
      {
        title: 'CISA KEV — GitHub Data',
        description: 'Repository GitHub avec données KEV en JSON (automatisation)',
        url: 'https://github.com/cisagov/kev-data',
        type: 'GitHub',
        category: 'cisa',
        updateFrequency: 'Hebdomadaire'
      },
      {
        title: 'CISA Alerts',
        description: 'Alertes de sécurité CISA sur menaces critiques infrastructures',
        url: 'https://www.cisa.gov/news-events/cybersecurity-advisories',
        type: 'Page Web',
        category: 'cisa'
      }
    ]
  },
  {
    id: 'nist',
    title: 'NIST',
    icon: '📚',
    description: 'National Institute of Standards and Technology — référentiels et frameworks',
    resources: [
      {
        title: 'NIST Cybersecurity Framework',
        description: 'Framework CSF pour gestion risques cyber (Identify, Protect, Detect, Respond, Recover)',
        url: 'https://www.nist.gov/cyberframework',
        type: 'Page Web',
        category: 'nist'
      },
      {
        title: 'NVD — National Vulnerability Database',
        description: 'Base de données CVE avec scoring CVSS, références, patchs',
        url: 'https://nvd.nist.gov/',
        type: 'Page Web',
        category: 'nist'
      },
      {
        title: 'NIST SP 800 Series',
        description: 'Publications spéciales NIST : guides sécurité, standards, best practices',
        url: 'https://csrc.nist.gov/publications/sp800',
        type: 'Page Web',
        category: 'nist'
      }
    ]
  },
  {
    id: 'cisco',
    title: 'Cisco Security',
    icon: '🔷',
    description: 'Cisco Product Security Incident Response Team — vulnérabilités équipements réseau',
    resources: [
      {
        title: 'Cisco Security Advisories',
        description: 'Avis de sécurité Cisco : routeurs, switchs, pare-feu, appliances',
        url: 'https://sec.cloudapps.cisco.com/security/center/publicationListing.x',
        type: 'Page Web',
        category: 'cisco',
        updateFrequency: 'Hebdomadaire'
      },
      {
        title: 'Cisco PSIRT — Flux RSS',
        description: 'Flux RSS des bulletins de sécurité Cisco',
        url: 'https://sec.cloudapps.cisco.com/security/center/psirtrss10/CiscoSecurityAdvisory.xml',
        type: 'RSS',
        category: 'cisco',
        updateFrequency: 'Hebdomadaire'
      }
    ]
  },
  {
    id: 'linux-opensource',
    title: 'Linux / Open Source',
    icon: '🐧',
    description: 'Advisories distributions Linux et logiciels open source (Debian, pfSense)',
    resources: [
      {
        title: 'Debian Security Advisories',
        description: 'Bulletins de sécurité officiels Debian (DSA) avec patchs disponibles',
        url: 'https://www.debian.org/security/',
        type: 'Page Web',
        category: 'linux-opensource',
        updateFrequency: 'Hebdomadaire'
      },
      {
        title: 'Debian Security Tracker',
        description: 'Suivi détaillé CVE par paquet Debian (stable, testing, unstable)',
        url: 'https://security-tracker.debian.org/tracker/',
        type: 'Page Web',
        category: 'linux-opensource'
      },
      {
        title: 'pfSense Security Advisories',
        description: 'Avis de sécurité pfSense (pare-feu/routeur open source)',
        url: 'https://docs.netgate.com/advisories/index.html',
        type: 'Page Web',
        category: 'linux-opensource',
        updateFrequency: 'Variable'
      },
      {
        title: 'Ubuntu Security Notices',
        description: 'USN — bulletins de sécurité Ubuntu Server/Desktop',
        url: 'https://ubuntu.com/security/notices',
        type: 'Page Web',
        category: 'linux-opensource'
      }
    ]
  }
];

// Modèle de fiche de veille
export const ficheVeilleTemplate = {
  title: 'Modèle de fiche de veille SISR',
  sections: [
    {
      title: '📋 Informations générales',
      fields: [
        'Date de veille : JJ/MM/AAAA',
        'Auteur : Nom Prénom',
        'Source : (CERT-FR / MSRC / CISA / etc.)',
        'Type de document : (Alerte / Avis / Bulletin / Guide)'
      ]
    },
    {
      title: '🎯 Sujet traité',
      fields: [
        'Titre : [Titre explicite]',
        'Catégorie : (Vulnérabilité / Menace / Bonne pratique / Technologie)',
        'Périmètre SISR : (Windows / Linux / Réseau / Virtualisation / Sauvegarde)',
        'Mots-clés : #mot1 #mot2 #mot3'
      ]
    },
    {
      title: '📝 Résumé (3-5 lignes)',
      content: 'Description concise du sujet : quelle vulnérabilité/menace ? quels systèmes affectés ? quelle criticité ? contexte exploitation.'
    },
    {
      title: '⚠️ Impact & criticité',
      fields: [
        'Niveau de gravité : (Critique / Élevé / Moyen / Faible)',
        'CVSS Score : X.X / 10 (si CVE)',
        'Systèmes concernés : [Windows Server 2022, Cisco IOS, pfSense, etc.]',
        'Impact potentiel : [Prise de contrôle à distance / DoS / Fuite données / Élévation privilèges]'
      ]
    },
    {
      title: '🔧 Actions recommandées',
      content: `
- Action 1 : Appliquer patch KB123456 (Microsoft) ou mise à jour vers version X.X
- Action 2 : Vérifier présence vulnérabilité dans inventaire parc
- Action 3 : Appliquer mesures d'atténuation temporaires (filtrage réseau, désactivation service)
- Action 4 : Tester patch en environnement de test avant production
- Priorité : Urgent (< 48h) / Court terme (< 1 semaine) / Moyen terme
      `
    },
    {
      title: '🔗 Références & preuves',
      fields: [
        'Lien source principale : [URL]',
        'CVE associée : CVE-YYYY-XXXXX',
        'Références complémentaires : [NVD, GitHub POC, articles techniques]',
        'Captures/schémas : (si pertinent, joindre captures écran ou diagrammes)'
      ]
    },
    {
      title: '💡 Enseignements / Notes personnelles',
      content: 'Ce que j\'ai appris, questions ouvertes, liens avec cours BTS SIO, pistes approfondissement.'
    }
  ]
};

export default veilleCategories;
