// src/pages/projects.ts
// Page Projets - enhanced visual version (scope limited to this page)

import { Chip, Button } from '../components/ui';
import {
  formationProjects,
  homelabProjects,
  projectResources,
  type FormationProject,
  type HomelabProject,
} from '../data/projects';

const escapeAttr = (v: string) => v.replace(/"/g, '&quot;');

const sectionHeader = (title: string, intro: string) => `
  <div class="proj-heading reveal">
    <h2><span class="proj-title-icon" aria-hidden="true">&bull;</span>${title}</h2>
    <p>${intro}</p>
  </div>
`;

const categoryLabel: Record<string, string> = {
  Systeme: 'Systeme',
  Reseau: 'Reseau',
  Cybersecurite: 'Cybersecurite',
  Supervision: 'Supervision',
};

const projectDocMap: Record<string, string> = {
  'lvm-debian': '/assets/img/cours%20LVM%20prof%20(3).pdf',
  'relay-dhcp': '/assets/img/cours%20relai%20dhcp%20prof.pdf',
  'site-distant-ad': '/assets/img/Atelier%20Haute%20Disponibilit%C3%A9%20AD.pdf',
  'signature-powershell': '/assets/img/TUTORIEL-6-AUTOMATISER-LA-CREATION-DUN-DOSSIER-UTILISATEUR-AVEC-UNE-STRATEGIE-GPO.pdf',
  'corbeille-ad': '/assets/img/Consigne%20atelier4.pdf',
  'openvpn-opnsense': '/assets/img/Consigne%20atelier3.pdf',
  'dhcp-debian': '/assets/img/Consigne%20atelier2%20(3).pdf',
};

const formationImageFallback: Record<string, string> = {
  Systeme: '/assets/img/server.png',
  Reseau: '/assets/img/network.png',
  Cybersecurite: '/assets/img/shield.png',
  Supervision: '/assets/img/security-monitor.png',
};

const homelabVisuals: Record<string, string> = {
  'lab-pfsense': '/assets/img/pfsense.png',
  'lab-ad-gpo': '/assets/img/ad.png',
  'lab-linux-hardening': '/assets/img/linux.png',
  'lab-supervision': '/assets/img/security-monitor.png',
};

const extraResources = [
  { category: 'Systeme', title: 'Proxmox Docs', description: 'Guides officiels pour VM, stockage et cluster.', url: 'https://pve.proxmox.com/wiki/Main_Page', label: 'Ouvrir', source: 'PROXMOX' },
  { category: 'Reseau', title: 'Cisco Networking Academy', description: 'Supports reseau pour adressage, switching et routage.', url: 'https://www.netacad.com/', label: 'Ouvrir', source: 'CISCO' },
  { category: 'Reseau', title: 'pfSense Documentation', description: 'Base technique pour firewall, NAT et VPN.', url: 'https://docs.netgate.com/pfsense/en/latest/', label: 'Ouvrir', source: 'PFSENSE' },
  { category: 'Cybersecurite', title: 'Docker Documentation', description: 'References conteneurisation et securisation des services.', url: 'https://docs.docker.com/', label: 'Ouvrir', source: 'DOCKER' },
  { category: 'Cybersecurite', title: 'GLPI Documentation', description: 'Fonctionnement ticketing et organisation support IT.', url: 'https://glpi-project.org/documentation/', label: 'Ouvrir', source: 'GLPI' },
  { category: 'Supervision', title: 'Zabbix Documentation', description: 'Configuration des hotes, triggers et dashboards.', url: 'https://www.zabbix.com/documentation/current/fr/', label: 'Ouvrir', source: 'ZABBIX' },
];

const practiceCards = [
  {
    id: 'practice-stage',
    image: '/assets/img/stage.png',
    title: 'Stage - Mairie de Trappes',
    text: 'Mise en pratique de l administration systeme, support et organisation des services.',
    badges: ['Windows Server', 'Support', 'Documentation'],
    href: '/#/stages',
    action: 'Voir le contexte',
  },
  {
    id: 'practice-gsb',
    image: '/assets/img/gsb.png',
    title: 'Projet GSB',
    text: 'Contexte metier utile pour relier besoins fonctionnels et choix techniques.',
    badges: ['Contexte', 'Organisation', 'Projet'],
    href: '/#/projects',
    action: 'Voir le projet',
  },
  {
    id: 'practice-soccer78',
    image: '/assets/img/soccer78.png',
    title: 'Projet Soccer78',
    text: 'Travail de structure et de publication autour d un cas concret.',
    badges: ['Web', 'Suivi', 'Services'],
    href: '/#/projects',
    action: 'Voir le projet',
  },
];


const renderFormationCard = (p: FormationProject) => {
  const img = p.logo ?? formationImageFallback[p.category] ?? '/assets/img/server.png';
  const reportUrl = projectDocMap[p.id] ?? '/#/downloads';
  const reportLabel = projectDocMap[p.id] ? 'Compte rendu' : 'Compte rendu (placeholder)';

  return `
  <article class="proj-card reveal" data-category="${p.filterTags.join(' ')}" data-project-id="${p.id}">
    <div class="proj-card-top">
      <span class="proj-card-icon"><img src="${img}" alt="${p.logoAlt ?? p.title}" loading="lazy" /></span>
      <div class="proj-card-meta">
        <span class="proj-cat-badge proj-cat-${p.category}">${categoryLabel[p.category] ?? p.category}</span>
        <h3>${p.title}</h3>
      </div>
    </div>

    <p class="proj-card-summary">${p.summary}</p>
    <div class="proj-card-badges">${p.techBadges.slice(0, 5).map(label => Chip({ label })).join(' ')}</div>

    <div class="proj-card-actions">
      <button type="button" class="proj-btn-detail" data-proj-toggle="${escapeAttr(p.id)}" aria-expanded="false">Voir le detail</button>
      <a class="proj-btn-report" href="${reportUrl}" target="_blank" rel="noreferrer noopener">${reportLabel}</a>
      <a class="proj-btn-resource" href="${p.resourceUrl}" target="_blank" rel="noreferrer noopener">Ressource utile</a>
    </div>

    <div class="proj-detail-panel" data-proj-panel="${escapeAttr(p.id)}" hidden>
      <div class="proj-detail-header">
        <span class="proj-card-icon"><img src="${img}" alt="${p.logoAlt ?? p.title}" loading="lazy" /></span>
        <div>
          <strong>${p.title}</strong>
          <p>${p.summary}</p>
        </div>
      </div>
      <div class="proj-detail-block">
        <span class="proj-detail-label">Objectif</span>
        <p>${p.objective}</p>
      </div>
      <div class="proj-detail-block">
        <span class="proj-detail-label">Ce que j ai manipule</span>
        <p>${p.manipulation}</p>
      </div>
      <div class="proj-detail-block">
        <span class="proj-detail-label">Competences mobilisees</span>
        <div class="proj-detail-skills">${p.skills.map(s => `<span class="proj-skill-tag">${s}</span>`).join('')}</div>
      </div>
      <div class="proj-card-actions proj-card-actions-detail">
        <a class="proj-btn-resource" href="${p.resourceUrl}" target="_blank" rel="noreferrer noopener">Ressource utile</a>
        <a class="proj-btn-report" href="${reportUrl}" target="_blank" rel="noreferrer noopener">Compte rendu</a>
      </div>
    </div>
  </article>
`;
};

const homelabStatusClass: Record<string, string> = {
  'en-cours': 'status-ongoing',
  personnel: 'status-personal',
  approfondissement: 'status-deep',
};

const renderHomelabCard = (p: HomelabProject) => `
  <article class="proj-homelab-card reveal">
    <div class="proj-homelab-top">
      <span class="proj-homelab-status ${homelabStatusClass[p.status] ?? ''}">${p.statusLabel}</span>
      <div class="proj-homelab-title-row">
        <span class="proj-card-icon"><img src="${homelabVisuals[p.id] ?? '/assets/img/server-rack.png'}" alt="${p.title}" loading="lazy" /></span>
        <h3>${p.title}</h3>
      </div>
    </div>
    <p>${p.summary}</p>
    <div class="proj-card-badges">${p.skills.slice(0, 4).map(s => Chip({ label: s })).join(' ')}</div>
    <div class="proj-homelab-idea" data-hl-panel="${escapeAttr(p.id)}" hidden>
      <span class="proj-detail-label">Pourquoi ce projet m interesse</span>
      <p>${p.idea}</p>
    </div>
    <div class="proj-card-actions">
      <button type="button" class="proj-btn-detail" data-hl-toggle="${escapeAttr(p.id)}" aria-expanded="false">Voir l idee</button>
      <a class="proj-btn-resource" href="${p.resourceUrl}" target="_blank" rel="noreferrer noopener">Ressource utile</a>
    </div>
  </article>
`;

const resourceCats: Array<{ key: string; label: string }> = [
  { key: 'Systeme', label: 'Systeme' },
  { key: 'Reseau', label: 'Reseau' },
  { key: 'Cybersecurite', label: 'Cybersecurite' },
  { key: 'Supervision', label: 'Supervision' },
];

const mainDocs = ['lvm-debian', 'relay-dhcp', 'signature-powershell', 'site-distant-ad']
  .map(id => formationProjects.find(p => p.id === id))
  .filter((p): p is FormationProject => Boolean(p));

const renderMainDoc = (p: FormationProject) => {
  const reportUrl = projectDocMap[p.id];
  return `
    <article class="proj-doc-main-card reveal">
      <div class="proj-doc-preview-wrap">
        ${reportUrl ? `
          <object class="proj-doc-preview" data="${reportUrl}#toolbar=0&navpanes=0" type="application/pdf">
            <div class="proj-doc-fallback">
              <span class="proj-doc-pdf">PDF</span>
              <strong>${p.reportPlaceholder}</strong>
              <p>Apercu indisponible. Ouvrir le document.</p>
            </div>
          </object>
        ` : `
          <div class="proj-doc-fallback">
            <span class="proj-doc-pdf">PDF</span>
            <strong>${p.reportPlaceholder}</strong>
            <p>Nom du fichier a relier ulterieurement.</p>
          </div>
        `}
      </div>
      <div class="proj-doc-meta">
        <span class="proj-cat-badge proj-cat-${p.category}">${categoryLabel[p.category]}</span>
        <h4>${p.title}</h4>
        <p>Compte rendu associe</p>
      </div>
      <div class="proj-card-actions">
        <a class="proj-btn-detail" href="${reportUrl ?? '/#/downloads'}" target="_blank" rel="noreferrer noopener">Consulter</a>
        <a class="proj-btn-resource" href="${reportUrl ?? '/#/downloads'}" ${reportUrl ? 'download' : ''} target="_blank" rel="noreferrer noopener">Telecharger</a>
      </div>
    </article>
  `;
};

export default function Projects() {
  const heroTags = ['Systemes', 'Reseau', 'Cybersecurite', 'Supervision', 'Homelab'];

  const filterButtons = [
    { key: 'Systeme', label: 'Systeme' },
    { key: 'Reseau', label: 'Reseau' },
    { key: 'Cybersecurite', label: 'Cybersecurite' },
    { key: 'Supervision', label: 'Supervision' },
  ];

  return `
    <section class="projects-page-v2">
      <section class="proj-panel proj-hero reveal">
        <h1>Projets</h1>
        <p class="proj-hero-sub">Travaux de formation, contextes techniques et realisations personnelles.</p>
        <p class="proj-hero-intro">Cette page regroupe les projets menes pendant la formation, les comptes rendus associes, les competences mobilisees et quelques realisations personnelles en administration systeme, reseau et cybersecurite.</p>
        <div class="proj-hero-tags">${heroTags.map(tag => Chip({ label: tag })).join(' ')}</div>
      </section>

      <section class="proj-panel" id="proj-practice">
        ${sectionHeader('Competences mises en pratique', 'Quelques contextes qui montrent ou ces competences ont ete mobilisees.')}
        <div class="proj-practice-grid">
          ${practiceCards.map(card => `
            <article class="proj-practice-card reveal">
              <div class="proj-practice-media"><img src="${card.image}" alt="${card.title}" loading="lazy" /></div>
              <h3>${card.title}</h3>
              <p>${card.text}</p>
              <div class="proj-card-badges">${card.badges.map(label => Chip({ label })).join(' ')}</div>
              <div class="proj-card-actions">${Button({ label: card.action, href: card.href, variant: 'outline' })}</div>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="proj-panel" id="proj-formation">
        ${sectionHeader('Projets de formation', 'Travaux realises en cours et en atelier pour mettre en pratique les bases SISR.')}
        <div class="proj-filters" role="group" aria-label="Filtrer les projets">
          ${filterButtons.map((f, i) => `<button type="button" class="proj-filter-btn${i === 0 ? ' active' : ''}" data-filter="${f.key}">${f.label}</button>`).join('')}
        </div>
        <div class="proj-grid" id="proj-formation-grid">${formationProjects.map(renderFormationCard).join('')}</div>
        <p class="proj-empty-msg" id="proj-empty" hidden>Aucun projet dans cette categorie.</p>
      </section>

      <section class="proj-panel" id="proj-homelab">
        ${sectionHeader('Projets personnels / homelab', 'Travaux personnels et pistes d approfondissement en dehors des ateliers de cours.')}
        <div class="proj-homelab-grid">${homelabProjects.map(renderHomelabCard).join('')}</div>
      </section>

      <section class="proj-panel" id="proj-resources">
        ${sectionHeader('Ressources utiles', 'Quelques ressources fiables pour revoir les notions utilisees dans les projets.')}
        <div class="proj-resource-tabs" role="tablist" aria-label="Ressources par theme">
          ${resourceCats.map((c, i) => `<button type="button" class="proj-res-tab${i === 0 ? ' active' : ''}" data-res-tab="${c.key}" role="tab" aria-selected="${i === 0 ? 'true' : 'false'}">${c.label}</button>`).join('')}
        </div>
        ${resourceCats.map((c, i) => {
          const allResources = [
            ...projectResources.filter(r => r.category === c.key).map(r => ({ title: r.title, description: r.description, url: r.url, label: 'Ouvrir', source: r.label })),
            ...extraResources.filter(r => r.category === c.key),
          ];
          return `
            <div class="proj-resource-grid" data-res-panel="${c.key}"${i !== 0 ? ' hidden' : ''}>
              ${allResources.map(r => `
                <article class="proj-resource-card reveal">
                  <div class="proj-resource-top"><span class="proj-source-pill">${r.source}</span></div>
                  <strong>${r.title}</strong>
                  <p>${r.description}</p>
                  <a class="proj-btn-resource" href="${r.url}" target="_blank" rel="noreferrer noopener">${r.label}</a>
                </article>
              `).join('')}
            </div>
          `;
        }).join('')}
      </section>

      <section class="proj-panel" id="proj-reports">
        ${sectionHeader('Comptes rendus associes', 'Documents lies aux ateliers et projets presentes sur cette page.')}

        <div class="proj-doc-main-wrap">
          <h3>Documents mis en avant</h3>
          <div class="proj-doc-main-grid">${mainDocs.map(renderMainDoc).join('')}</div>
        </div>
      </section>

      <section class="proj-panel proj-cta reveal">
        <p>Cette page complete la partie competences et permet de voir dans quels contextes ces notions ont ete mobilisees.</p>
        <div class="proj-cta-links">
          ${Button({ label: 'Voir mes competences', href: '/#/skills', variant: 'primary' })}
          ${Button({ label: 'Voir mon stage', href: '/#/stages', variant: 'outline' })}
          ${Button({ label: 'Voir les telechargements', href: '/#/downloads', variant: 'outline' })}
        </div>
      </section>

      <section class="proj-panel proj-reports-compact" id="proj-reports-all">
        <button type="button" class="proj-collapse-head" data-reports-toggle="all" aria-expanded="false">
          <span>Tous les comptes rendus</span>
          <span class="proj-collapse-arrow" aria-hidden="true">▾</span>
        </button>
        <div class="proj-collapse-panel" data-reports-panel="all" hidden>
          <div class="proj-reports-grid compact">
            ${formationProjects.map(p => `
              <div class="proj-report-row compact reveal">
                <div class="proj-report-meta">
                  <span class="proj-doc-pdf tiny">PDF</span>
                  <span class="proj-cat-badge proj-cat-${p.category}">${categoryLabel[p.category] ?? p.category}</span>
                  <span class="proj-report-title">${p.title}</span>
                </div>
                <div class="proj-report-actions">
                  <a class="proj-btn-report" href="/#/downloads">Consulter</a>
                  <a class="proj-btn-report" href="/#/downloads">Telecharger</a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </section>
  `;
}

export function setupProjectsInteractions() {
  const page = document.querySelector<HTMLElement>('.projects-page-v2');
  if (!page) return;

  const filterBtns = page.querySelectorAll<HTMLButtonElement>('[data-filter]');
  const cards = page.querySelectorAll<HTMLElement>('[data-category]');
  const emptyMsg = page.querySelector<HTMLElement>('#proj-empty');

  if (filterBtns.length > 0) {
    const defaultFilter = filterBtns[0].dataset.filter ?? '';
    cards.forEach(card => {
      const cats = (card.dataset.category ?? '').split(' ');
      card.hidden = !cats.includes(defaultFilter);
    });
    if (emptyMsg) {
      const visible = Array.from(cards).filter(card => !card.hidden).length;
      emptyMsg.hidden = visible > 0;
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter ?? '';
      let visible = 0;
      cards.forEach(card => {
        const cats = (card.dataset.category ?? '').split(' ');
        const show = cats.includes(filter);
        card.hidden = !show;
        if (show) visible++;
      });
      if (emptyMsg) emptyMsg.hidden = visible > 0;
    });
  });

  page.querySelectorAll<HTMLButtonElement>('[data-proj-toggle]').forEach(btn => {
    if (btn.dataset.bound === 'true') return;
    btn.dataset.bound = 'true';
    btn.addEventListener('click', () => {
      const id = btn.dataset.projToggle;
      const panel = page.querySelector<HTMLElement>(`[data-proj-panel="${id}"]`);
      if (!panel) return;
      const isOpen = !panel.hidden;
      panel.hidden = isOpen;
      btn.setAttribute('aria-expanded', String(!isOpen));
      btn.textContent = isOpen ? 'Voir le detail' : 'Reduire';
    });
  });

  const resTabs = page.querySelectorAll<HTMLButtonElement>('[data-res-tab]');
  const resPanels = page.querySelectorAll<HTMLElement>('[data-res-panel]');

  resTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.resTab;
      resTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      resPanels.forEach(p => {
        p.hidden = true;
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const target = page.querySelector<HTMLElement>(`[data-res-panel="${key}"]`);
      if (target) target.hidden = false;
    });
  });

  page.querySelectorAll<HTMLButtonElement>('[data-hl-toggle]').forEach(btn => {
    if (btn.dataset.bound === 'true') return;
    btn.dataset.bound = 'true';
    btn.addEventListener('click', () => {
      const id = btn.dataset.hlToggle;
      const panel = page.querySelector<HTMLElement>(`[data-hl-panel="${id}"]`);
      if (!panel) return;
      const isOpen = !panel.hidden;
      panel.hidden = isOpen;
      btn.setAttribute('aria-expanded', String(!isOpen));
      btn.textContent = isOpen ? 'Voir l idee' : 'Reduire';
    });
  });

  const reportsToggle = page.querySelector<HTMLButtonElement>('[data-reports-toggle="all"]');
  const reportsPanel = page.querySelector<HTMLElement>('[data-reports-panel="all"]');
  const reportsArrow = page.querySelector<HTMLElement>('.proj-collapse-arrow');
  if (reportsToggle && reportsPanel) {
    reportsToggle.addEventListener('click', () => {
      const isOpen = !reportsPanel.hidden;
      reportsPanel.hidden = isOpen;
      reportsToggle.setAttribute('aria-expanded', String(!isOpen));
      reportsArrow?.classList.toggle('open', !isOpen);
    });
  }
}
