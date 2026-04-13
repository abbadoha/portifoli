// src/components/icons.ts
// Système d'icônes SVG inline minimaliste et performant

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const defaultProps: Required<IconProps> = {
  size: 24,
  color: 'currentColor',
  className: ''
};

// Helper pour générer SVG
const svg = (content: string, props: IconProps = {}): string => {
  const { size, color, className } = { ...defaultProps, ...props };
  return `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${content}</svg>`;
};

// 👤 User / Profil
export const UserIcon = (props?: IconProps) => svg(
  '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
  props
);

// 🎓 GraduationCap / BTS SIO
export const GraduationCapIcon = (props?: IconProps) => svg(
  '<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>',
  props
);

// 📁 FolderKanban / Programme & Projets
export const FolderKanbanIcon = (props?: IconProps) => svg(
  '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><path d="M9 13v2m3-4v4m3-6v6"></path>',
  props
);

// 💼 Briefcase / Stage
export const BriefcaseIcon = (props?: IconProps) => svg(
  '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
  props
);

// 📄 FileText / Documents (CV, Rapport)
export const FileTextIcon = (props?: IconProps) => svg(
  '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line>',
  props
);

// ✅ BadgeCheck / Certifications
export const BadgeCheckIcon = (props?: IconProps) => svg(
  '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><polyline points="9 12 11 14 15 10"></polyline>',
  props
);

// 📡 Radar / Veille technologique
export const RadarIcon = (props?: IconProps) => svg(
  '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path>',
  props
);

// ✉️ Mail / Contact
export const MailIcon = (props?: IconProps) => svg(
  '<rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>',
  props
);

// 🔗 ExternalLink / Liens externes
export const ExternalLinkIcon = (props?: IconProps) => svg(
  '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
  props
);

// 📥 Download / Téléchargements
export const DownloadIcon = (props?: IconProps) => svg(
  '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
  props
);

// 🌟 Star / Compétences
export const StarIcon = (props?: IconProps) => svg(
  '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
  props
);

// 🔧 Settings / Paramètres
export const SettingsIcon = (props?: IconProps) => svg(
  '<circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6"></path><path d="m4.2 4.2 4.2 4.2m5.6 5.6 4.2 4.2"></path><path d="M1 12h6m6 0h6"></path><path d="m4.2 19.8 4.2-4.2m5.6-5.6 4.2-4.2"></path>',
  props
);

// ➡️ ChevronRight / Navigation
export const ChevronRightIcon = (props?: IconProps) => svg(
  '<polyline points="9 18 15 12 9 6"></polyline>',
  props
);

// 📊 BarChart / Projets/Stats
export const BarChartIcon = (props?: IconProps) => svg(
  '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
  props
);

// 🏆 Award / Certifications alt
export const AwardIcon = (props?: IconProps) => svg(
  '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
  props
);

// 🏠 Home
export const HomeIcon = (props?: IconProps) => svg(
  '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
  props
);

// 📝 Edit / Modifier
export const EditIcon = (props?: IconProps) => svg(
  '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
  props
);

// ✔️ Check / Validé
export const CheckIcon = (props?: IconProps) => svg(
  '<polyline points="20 6 9 17 4 12"></polyline>',
  props
);

// 📚 Book / Documentation
export const BookIcon = (props?: IconProps) => svg(
  '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
  props
);

// 📞 Phone / Téléphone
export const PhoneIcon = (props?: IconProps) => svg(
  '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
  props
);

// 💼 Github / GitHub
export const GithubIcon = (props?: IconProps) => svg(
  '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
  props
);

// 🔗 Linkedin / LinkedIn
export const LinkedinIcon = (props?: IconProps) => svg(
  '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
  props
);

// Export nommé pour tous
export const Icons = {
  User: UserIcon,
  GraduationCap: GraduationCapIcon,
  FolderKanban: FolderKanbanIcon,
  Briefcase: BriefcaseIcon,
  FileText: FileTextIcon,
  BadgeCheck: BadgeCheckIcon,
  Radar: RadarIcon,
  Mail: MailIcon,
  ExternalLink: ExternalLinkIcon,
  Download: DownloadIcon,
  Star: StarIcon,
  Settings: SettingsIcon,
  ChevronRight: ChevronRightIcon,
  BarChart: BarChartIcon,
  Award: AwardIcon,
  Home: HomeIcon,
  Edit: EditIcon,
  Check: CheckIcon,
  Book: BookIcon,
  Phone: PhoneIcon,
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
};

export default Icons;
