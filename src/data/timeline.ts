export interface TimelineItem {
  id: number;
  period: string;
  title: string;
  details: string[];
  tags: string[];
  emphasis?: 'primary' | 'secondary';
}

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    period: 'Septembre 2024',
    title: 'Début BTS SIO — SISR',
    details: [
      'Bases systèmes & réseaux',
      'Premiers TP infrastructure'
    ],
    tags: ['SISR', 'Réseaux', 'Systèmes'],
    emphasis: 'primary'
  },
  {
    id: 2,
    period: 'Décembre 2024',
    title: 'Premiers TP infra avancés',
    details: [
      'Windows Server & Active Directory',
      'Configuration VLAN & services réseau'
    ],
    tags: ['Windows', 'AD', 'VLAN']
  },
  {
    id: 3,
    period: 'Mai – Juillet 2025',
    title: 'Stage SI — Mairie de Trappes',
    details: [
      'Support utilisateurs & infrastructure',
      '10 semaines en environnement professionnel'
    ],
    tags: ['Stage', 'Support', 'Infra'],
    emphasis: 'primary'
  },
  {
    id: 4,
    period: 'Septembre 2025',
    title: 'Certification ANSSI validée',
    details: [
      'SecNumAcadémie — sensibilisation cyber',
      'Certification officielle obtenue'
    ],
    tags: ['Certification', 'Cybersécurité'],
    emphasis: 'primary'
  },
  {
    id: 5,
    period: 'Décembre 2025',
    title: 'Projets avancés & approfondissement',
    details: [
      'pfSense, durcissement systèmes',
      'Documentation technique professionnelle'
    ],
    tags: ['Sécurité', 'Firewall', 'Documentation']
  },
  {
    id: 6,
    period: 'Mai – Juin 2026',
    title: 'Examens BTS & soutenance',
    details: [
      'Épreuves finales BTS SIO',
      'Soutenance projet professionnel'
    ],
    tags: ['Examens', 'Soutenance'],
    emphasis: 'primary'
  }
];

export const timelineSummary = 'Progression 2024–2026 : formation, stage, certification, préparation examens.';
