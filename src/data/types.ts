// src/data/types.ts
// Types communs pour données portfolio

export interface Project {
  id: string;
  title: string;
  category: string[];
  context: string;
  objective: string;
  description: string;
  tech: string[];
  competencesBTS?: string[];
  status: 'completed' | 'ongoing' | 'planned';
  links?: { label: string; url: string }[];
  date?: string;
  livrables?: {
    documentation?: string; // URL vers doc PDF/Markdown
    rapport?: string; // URL vers rapport technique
    screenshots?: string; // URL vers captures écran
    github?: string; // URL repo GitHub si applicable
  };
  planification?: string; // Quand le projet sera réalisé (pour projets "planned")
}

export interface Document {
  id: string;
  title: string;
  description: string;
  category: 'cv' | 'rapport' | 'attestation' | 'certification' | 'autre';
  url: string;
  size?: string;
  format: string;
  date?: string;
}

export interface ModuleBTS {
  id: string;
  title: string;
  icon: string;
  description: string;
  competences: string[];
  heures?: number;
}

export interface ProjetPedagogique {
  id: string;
  title: string;
  context: string;
  objective: string;
  tech: string[];
  competences: string[];
  status: 'completed' | 'ongoing';
  semestre?: string;
}
