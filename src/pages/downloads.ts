// src/pages/downloads.ts
// Page Documentation (ex-Telechargements)

import Icons from '../components/icons';
import { Chip } from '../components/ui';

type DocCategory = 'Contexte' | 'Compte rendu' | 'Mission' | 'Stage' | 'E5' | 'Officiel' | 'Portfolio';
type ReportTheme = 'Systemes' | 'Reseau' | 'Services' | 'Virtualisation / supervision' | 'Web / securite';

interface DocItem {
  id: string;
  title: string;
  filename: string;
  category: DocCategory;
  description: string;
  badges?: string[];
  theme?: ReportTheme;
}

type TechCategory = 'Systemes' | 'Reseau' | 'Virtualisation' | 'Outils';

interface TechLogo {
  src: string;
  name: string;
  category: TechCategory;
}

const docsBase = '/assets/docs';

const docUrl = (filename: string) => `${docsBase}/${filename}`;

const quickLinks = [
  {
    id: 'doc-contextes',
    label: 'Contextes',
    note: 'Cadres techniques et objectifs',
    icon: Icons.Book({ size: 16 }),
  },
  {
    id: 'doc-comptes-rendus',
    label: 'Comptes rendus',
    note: 'Travaux techniques par theme',
    icon: Icons.FileText({ size: 16 }),
  },
  {
    id: 'doc-missions',
    label: 'Stages / missions',
    note: 'Missions professionnelles',
    icon: Icons.Briefcase({ size: 16 }),
  },
  {
    id: 'doc-e5',
    label: 'Epreuve E6',
    note: 'Supports officiels et synthese',
    icon: Icons.GraduationCap({ size: 16 }),
  },
  {
    id: 'doc-complements',
    label: 'Portfolio / orientation',
    note: 'Documents complementaires',
    icon: Icons.Star({ size: 16 }),
  },
];

const contextDocs: DocItem[] = [
  {
    id: 'ctx-gsb',
    title: 'Contexte GSB',
    filename: 'gsbcontexte.pdf',
    category: 'Contexte',
    description: 'Cadre technique, besoins et architecture de base du projet GSB.',
    badges: ['Contexte'],
  },
  {
    id: 'ctx-gsb-domain',
    title: 'Presentation du contexte GSB et du domaine d etude',
    filename: 'gsb-presentation-domaine-etude.pdf',
    category: 'Contexte',
    description: 'Presentation fonctionnelle et environnement metier du projet.',
    badges: ['Contexte'],
  },
  {
    id: 'ctx-lvm',
    title: 'Contexte de travail LVM',
    filename: 'lvm.pdf',
    category: 'Contexte',
    description: 'Support de contexte pour la gestion des volumes logiques sous Linux.',
    badges: ['Contexte'],
  },
];

const reportDocs: DocItem[] = [
  {
    id: 'cr-raid',
    title: 'Compte rendu RAID',
    filename: 'cr-raid.pdf',
    category: 'Compte rendu',
    theme: 'Systemes',
    description: 'Mise en place et verification de la tolerance de panne par RAID.',
  },
  {
    id: 'cr-lvm',
    title: 'Compte rendu LVM',
    filename: 'cr-lvm.pdf',
    category: 'Compte rendu',
    theme: 'Virtualisation / supervision',
    description: 'Creation, extension et administration des volumes logiques.',
  },
  {
    id: 'cr-dhcp',
    title: 'Compte rendu DHCP',
    filename: 'cr-dhcp.pdf',
    category: 'Compte rendu',
    theme: 'Reseau',
    description: 'Configuration et validation d un service DHCP en atelier.',
  },
  {
    id: 'cr-linux-ha',
    title: 'Compte rendu Linux HA',
    filename: 'cr-linux-ha.pdf',
    category: 'Compte rendu',
    theme: 'Virtualisation / supervision',
    description: 'Tests de haute disponibilite et continuite de service.',
  },
  {
    id: 'cr-wireshark',
    title: 'Compte rendu Wireshark',
    filename: 'cr-wireshark.pdf',
    category: 'Compte rendu',
    theme: 'Reseau',
    description: 'Analyse de trames et diagnostic de flux reseau.',
  },
  {
    id: 'cr-apache',
    title: 'Compte rendu Apache',
    filename: 'cr-apache.pdf',
    category: 'Compte rendu',
    theme: 'Web / securite',
    description: 'Deploiement et durcissement initial d un service web Apache.',
  },
  {
    id: 'cr-nextcloud',
    title: 'Compte rendu Nextcloud',
    filename: 'cr-nextcloud.pdf',
    category: 'Compte rendu',
    theme: 'Services',
    description: 'Installation et configuration d un service collaboratif interne.',
  },
  {
    id: 'cr-dmz',
    title: 'Compte rendu DMZ',
    filename: 'cr-dmz.pdf',
    category: 'Compte rendu',
    theme: 'Web / securite',
    description: 'Mise en place d une DMZ et controles de securite associes.',
  },
  {
    id: 'cr-oral-stage',
    title: 'Compte rendu oral de stage',
    filename: 'cr-oral-stage.pdf',
    category: 'Compte rendu',
    theme: 'Services',
    description: 'Support de preparation et synthese pour la presentation orale.',
  },
  {
    id: 'cr-preli',
    title: 'Compte rendu preliminaire',
    filename: 'cr-preliminaire.pdf',
    category: 'Compte rendu',
    theme: 'Systemes',
    description: 'Synthese initiale de travaux techniques et points de vigilance.',
  },
];

const missionDocs: DocItem[] = [
  {
    id: 'mission-1-2025',
    title: 'Mission 1 - 2025',
    filename: 'mission-1-2025.pdf',
    category: 'Mission',
    description: 'Interventions techniques realisees en contexte professionnel.',
    badges: ['Stage'],
  },
  {
    id: 'mission-2-2025',
    title: 'Mission 2 - 2025',
    filename: 'mission-2-2025.pdf',
    category: 'Mission',
    description: 'Actions de suivi, support et maintenance au sein de la DSI.',
    badges: ['Stage'],
  },
  {
    id: 'mission-3-gsb',
    title: 'GSB - Mission 3 (2025)',
    filename: 'gsb-mission-3-2025.pdf',
    category: 'Mission',
    description: 'Mission orientee services et organisation du projet GSB.',
    badges: ['Stage', 'GSB'],
  },
  {
    id: 'mission-5-gsb',
    title: 'GSB - Mission 5 (2024)',
    filename: 'gsb-mission-5-2024.pdf',
    category: 'Mission',
    description: 'Travaux complementaires de structuration technique du contexte GSB.',
    badges: ['Stage', 'GSB'],
  },
  {
    id: 'rapport-stage',
    title: 'Rapport de stage',
    filename: 'rapport-stage.pdf',
    category: 'Stage',
    description: 'Document complet des missions, methodes et resultats de stage.',
    badges: ['Stage'],
  },
  {
    id: 'convention-2025',
    title: 'Convention de stage 2025',
    filename: 'convention2025.pdf',
    category: 'Stage',
    description: 'Convention administrative relative a la periode de stage 2025.',
    badges: ['Officiel'],
  },
  {
    id: 'convention-2026',
    title: 'Convention de stage 2026',
    filename: 'convention2026.pdf',
    category: 'Stage',
    description: 'Convention administrative relative a la periode de stage 2026.',
    badges: ['Officiel'],
  },
];

const officialE5Docs: DocItem[] = [
  {
    id: 'e5-grille',
    title: 'Grille evaluation E5 portfolio',
    filename: 'grille-evaluation-e5-portfolio.pdf',
    category: 'Officiel',
    description: 'Grille de suivi et d evaluation des competences presentees.',
    badges: ['Officiel'],
  },
  {
    id: 'e5-annexe',
    title: 'Annexe VI.1 - tableau de synthese BTS SIO 2026',
    filename: 'annexe-e5-tableau-synthese-2026.pdf',
    category: 'Officiel',
    description: 'Modele officiel pour la presentation synthetique des realisations.',
    badges: ['Officiel'],
  },
  {
    id: 'attestation-modele',
    title: 'Modele attestation de stage BTS SIO',
    filename: 'bts-sio-annexe9-attestation-stage.pdf',
    category: 'Officiel',
    description: 'Reference officielle pour les attestations de stage.',
    badges: ['Officiel'],
  },
  {
    id: 'fiche-situation-2026',
    title: 'Fiche situation professionnelle 2026 SISR',
    filename: 'fiche-situation-professionnelle-2026-sisr.pdf',
    category: 'E5',
    description: 'Fiche support pour formaliser une situation professionnelle.',
    badges: ['E5'],
  },
  {
    id: 'competences-e6',
    title: 'Competences a couvrir pour E6',
    filename: 'competences-e6.pdf',
    category: 'Officiel',
    description: 'Document de suivi des competences en lien avec les epreuves.',
    badges: ['Officiel'],
  },
];

const complementaryDocs: DocItem[] = [
  {
    id: 'poursuite-etudes',
    title: 'Fiche de poursuite d etudes',
    filename: 'fiche-poursuite-etudes.pdf',
    category: 'Portfolio',
    description: 'Projection post-BTS et pistes d orientation professionnelle.',
    badges: ['Portfolio'],
  },
  {
    id: 'cv',
    title: 'CV - version portfolio',
    filename: 'ABBASSI_DOHA_CV.pdf',
    category: 'Portfolio',
    description: 'Version PDF du CV, utile pour candidature et suivi du parcours.',
    badges: ['Portfolio'],
  },
];

const techLogos: TechLogo[] = [
  { src: '/assets/img/microsoft.png', name: 'Microsoft', category: 'Systemes' },
  { src: '/assets/img/windowslogo.png', name: 'Windows', category: 'Systemes' },
  { src: '/assets/img/windowsserver.png', name: 'Windows Server', category: 'Systemes' },
  { src: '/assets/img/linuxlogo.png', name: 'Linux', category: 'Systemes' },
  { src: '/assets/img/debian.png', name: 'Debian', category: 'Systemes' },
  { src: '/assets/img/cisco.png', name: 'Cisco', category: 'Reseau' },
  { src: '/assets/img/pfsenselogo.png', name: 'pfSense', category: 'Reseau' },
  { src: '/assets/img/wireshark.png', name: 'Wireshark', category: 'Reseau' },
  { src: '/assets/img/proxmoxlogo.png', name: 'Proxmox', category: 'Virtualisation' },
  { src: '/assets/img/vmwarelogo.png', name: 'VMware', category: 'Virtualisation' },
  { src: '/assets/img/powershell.png', name: 'PowerShell', category: 'Outils' },
  { src: '/assets/img/nextcloud.png', name: 'Nextcloud', category: 'Outils' },
  { src: '/assets/img/glpilogo.png', name: 'GLPI', category: 'Outils' },
  { src: '/assets/img/putty.png', name: 'PuTTY', category: 'Outils' },
];

function renderDocCard(doc: DocItem, compact = false) {
  return `
    <article class="doc-card${compact ? ' compact' : ''} reveal">
      <div class="doc-card-head">
        <span class="doc-icon" aria-hidden="true">${Icons.FileText({ size: 18 })}</span>
        <div>
          <h3>${doc.title}</h3>
          <p class="doc-meta">${doc.category}${doc.theme ? ` • ${doc.theme}` : ''}</p>
        </div>
      </div>
      <object class="doc-mini-preview" data="${docUrl(doc.filename)}#toolbar=0&navpanes=0&view=FitH" type="application/pdf" aria-label="Apercu ${doc.title}">
        <div class="doc-mini-fallback">Apercu indisponible</div>
      </object>
      <p class="doc-description">${doc.description}</p>
      <div class="doc-badges">
        ${(doc.badges ?? []).map((b) => Chip({ label: b })).join('')}
      </div>
      <div class="doc-actions">
        <a class="proj-btn-detail" href="${docUrl(doc.filename)}" target="_blank" rel="noreferrer noopener">Consulter</a>
        <a class="proj-btn-resource" href="${docUrl(doc.filename)}" download>Telecharger</a>
      </div>
    </article>
  `;
}

function renderPreviewCard(title: string, subtitle: string, file: string, badge: string) {
  return `
    <article class="doc-preview-card reveal">
      <header>
        <span class="doc-preview-badge">${badge}</span>
        <h3>${title}</h3>
        <p>${subtitle}</p>
      </header>
      <object class="doc-preview-frame" data="${docUrl(file)}#toolbar=0&navpanes=0&view=FitH" type="application/pdf" aria-label="Apercu ${title}">
        <div class="doc-preview-fallback">
          <p>Apercu indisponible, utilisez les boutons ci-dessous pour consulter ou telecharger le document.</p>
        </div>
      </object>
      <div class="doc-actions">
        <a class="proj-btn-detail" href="${docUrl(file)}" target="_blank" rel="noreferrer noopener">Consulter</a>
        <a class="proj-btn-resource" href="${docUrl(file)}" download>Telecharger</a>
      </div>
    </article>
  `;
}

function renderTechLogoCard(tech: TechLogo) {
  return `
    <article class="doc-tech-card reveal" title="${tech.name}">
      <div class="doc-tech-media">
        <img src="${tech.src}" alt="Logo ${tech.name}" loading="lazy" width="72" height="72" />
      </div>
      <strong>${tech.name}</strong>
      <span>${tech.category}</span>
    </article>
  `;
}

export default function Downloads() {
  return `
<section class="documentation-page">
  <section class="doc-panel doc-hero reveal">
    <span class="doc-eyebrow">BTS SIO SISR</span>
    <h1>Documentation</h1>
    <p class="doc-subtitle">Tous mes documents utiles regroupes en un seul endroit : contextes, comptes rendus, documents de stage, dossier E6 et ressources du portfolio.</p>
    <div class="doc-badges-row">
      ${Chip({ label: 'Contextes' })}
      ${Chip({ label: 'Comptes rendus' })}
      ${Chip({ label: 'E6' })}
      ${Chip({ label: 'Stages' })}
      ${Chip({ label: 'Portfolio' })}
    </div>
    <p class="doc-intro-note">Cette page centralise les fichiers qui appuient mes projets, mes realisations professionnelles et ma preparation aux epreuves.</p>
  </section>

  <section class="doc-panel doc-quick reveal" aria-labelledby="doc-quick-title">
    <h2 id="doc-quick-title">Acces rapides</h2>
    <div class="doc-quick-grid">
      ${quickLinks.map((item) => `
        <button type="button" class="doc-quick-btn" data-doc-jump="${item.id}" aria-label="Aller a ${item.label}">
          <span class="doc-quick-icon" aria-hidden="true">${item.icon}</span>
          <strong>${item.label}</strong>
          <small>${item.note}</small>
        </button>
      `).join('')}
    </div>
  </section>

  <section class="doc-panel" id="doc-contextes">
    <div class="doc-section-head reveal">
      <h2>Contextes de projets</h2>
      <p>Documents presentant le cadre technique, les objectifs et l environnement des projets etudies.</p>
    </div>
    <div class="doc-grid doc-grid-3">
      ${contextDocs.map((doc) => renderDocCard(doc)).join('')}
    </div>
  </section>

  <section class="doc-panel" id="doc-comptes-rendus">
    <div class="doc-section-head reveal">
      <h2>Comptes rendus techniques</h2>
      <p>Comptes rendus de travaux realises en formation sur des themes systemes, reseau, virtualisation et services.</p>
      <div class="doc-theme-tags" aria-label="Themes comptes rendus">
        <span>Systemes</span>
        <span>Reseau</span>
        <span>Services</span>
        <span>Virtualisation / supervision</span>
        <span>Web / securite</span>
      </div>
    </div>
    <div class="doc-grid doc-grid-compact">
      ${reportDocs.map((doc) => renderDocCard(doc, true)).join('')}
    </div>
  </section>

  <section class="doc-panel" id="doc-missions">
    <div class="doc-section-head reveal">
      <h2>Missions et documents de stage</h2>
      <p>Documents lies a mes missions professionnelles, a mes realisations en stage et a leur formalisation.</p>
    </div>

    <div class="doc-mini-hierarchy reveal">
      <span>Stage DSI / missions</span>
      <span>Documents associes</span>
      <span>Support de synthese</span>
    </div>

    <div class="doc-grid doc-grid-3">
      ${missionDocs.map((doc) => renderDocCard(doc)).join('')}
    </div>

    <div class="doc-preview-grid">
      ${renderPreviewCard('Fiche de synthese E6', 'Support principal pour relier projets, stages et competences.', 'synthese.pdf', 'Important')}
      ${renderPreviewCard('Dossier pro', 'Document de support pour la soutenance et la structuration de l oral.', 'pro.pdf', 'Stage')}
    </div>
  </section>

  <section class="doc-panel" id="doc-e5">
    <div class="doc-section-head reveal">
      <h2>Epreuve E6 et documents officiels</h2>
      <p>Documents utiles a la preparation de l epreuve, a la synthese des realisations et au suivi du portfolio.</p>
    </div>

    <article class="doc-e5-feature reveal">
      <div class="doc-e5-feature-copy">
        <span class="doc-preview-badge">E6</span>
        <h3>Tableau de synthese / fiche de synthese</h3>
        <p>Le tableau de synthese et le dossier pro constituent le coeur de la preparation de la soutenance E6.</p>
        <div class="doc-actions">
          <a class="proj-btn-detail" href="${docUrl('synthese.pdf')}" target="_blank" rel="noreferrer noopener">Consulter la synthese</a>
          <a class="proj-btn-resource" href="${docUrl('pro.pdf')}" target="_blank" rel="noreferrer noopener">Consulter le dossier pro</a>
        </div>
      </div>
      <object class="doc-e5-feature-preview" data="${docUrl('synthese.pdf')}#toolbar=0&navpanes=0&view=FitH" type="application/pdf" aria-label="Apercu fiche de synthese E6">
        <div class="doc-preview-fallback">
          <p>Apercu indisponible, utilisez les boutons ci-dessus pour consulter ou telecharger le document.</p>
        </div>
      </object>
    </article>

    <div class="doc-grid doc-grid-3">
      ${officialE5Docs.map((doc) => renderDocCard(doc)).join('')}
    </div>
  </section>

  <section class="doc-panel" id="doc-complements">
    <div class="doc-section-head reveal">
      <h2>Documents complementaires</h2>
      <p>Fichiers associes a mon orientation, a la poursuite d etudes et aux annexes du portfolio.</p>
    </div>
    <div class="doc-grid doc-grid-2">
      ${complementaryDocs.map((doc) => renderDocCard(doc)).join('')}
    </div>
  </section>

  <section class="doc-panel" id="doc-technologies">
    <div class="doc-section-head reveal">
      <h2>Technologies utilisees</h2>
      <p>Outils, systemes et technologies utilises durant ma formation et mes projets.</p>
    </div>
    <div class="doc-tech-grid">
      ${techLogos.map(renderTechLogoCard).join('')}
    </div>
  </section>
</section>
  `;
}

export function setupDocumentationInteractions() {
  const page = document.querySelector<HTMLElement>('.documentation-page');
  if (!page) return;

  const sectionIds = quickLinks.map((item) => item.id);
  const quickButtons = Array.from(page.querySelectorAll<HTMLButtonElement>('[data-doc-jump]'));

  quickButtons.forEach((btn) => {
    if (btn.dataset.bound === 'true') return;
    btn.dataset.bound = 'true';

    btn.addEventListener('click', () => {
      const targetId = btn.dataset.docJump;
      if (!targetId) return;
      const target = page.querySelector<HTMLElement>(`#${targetId}`);
      if (!target) return;
      quickButtons.forEach((item) => item.classList.toggle('active', item === btn));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = visible.target.getAttribute('id');
      if (!id) return;
      quickButtons.forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.docJump === id);
      });
    },
    {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0.2, 0.45, 0.7],
    },
  );

  sectionIds.forEach((id) => {
    const section = page.querySelector<HTMLElement>(`#${id}`);
    if (!section) return;
    observer.observe(section);
  });
}
