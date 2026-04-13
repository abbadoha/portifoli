import { Chip, Button } from '../components/ui';
import {
  profileCards,
  technicalResourceCards,
  toolTiles,
  validationItems,
  type ContextLink,
  type ResourceCard,
  type ToolTile,
  type ValidationItem,
} from '../data/skills';

const escapeAttr = (value: string) => value.replace(/"/g, '&quot;');

const sectionHeader = (title: string, intro: string, icon = '') => `
  <div class="skills-clean-heading reveal">
    <h2>${icon ? `<span class="skills-clean-title-icon" aria-hidden="true">${icon}</span>` : ''}${title}</h2>
    <p>${intro}</p>
  </div>
`;

const renderLinks = (links: ContextLink[], className = '') => `
  <div class="skills-clean-links ${className}">
    ${links.map((link) => `
      <a class="skills-clean-link" href="${link.href}" ${link.external ? 'target="_blank" rel="noreferrer noopener"' : ''}>${link.label}</a>
    `).join('')}
  </div>
`;

const keywordDefinitionLinks: Record<string, string> = {
  'VLAN': 'https://fr.wikipedia.org/wiki/VLAN',
  'Adressage IP': 'https://fr.wikipedia.org/wiki/Adresse_IP',
  'DHCP / DNS': 'https://fr.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol',
  'Commutation': 'https://fr.wikipedia.org/wiki/Commutateur_r%C3%A9seau',
  'Routage': 'https://fr.wikipedia.org/wiki/Routage',
  'Pare-feu': 'https://fr.wikipedia.org/wiki/Pare-feu_(informatique)',
  'Windows 10/11': 'https://learn.microsoft.com/fr-fr/windows/',
  'Windows Server': 'https://learn.microsoft.com/fr-fr/windows-server/',
  'Active Directory': 'https://fr.wikipedia.org/wiki/Active_Directory',
  'GPO': 'https://learn.microsoft.com/fr-fr/windows-server/identity/ad-ds/manage/group-policy/group-policy-overview',
  'Partages reseau': 'https://fr.wikipedia.org/wiki/Partage_de_fichiers',
  'NTFS / ACL': 'https://fr.wikipedia.org/wiki/NTFS',
  'Debian': 'https://www.debian.org/doc/',
  'Ubuntu': 'https://help.ubuntu.com/',
  'Permissions': 'https://fr.wikipedia.org/wiki/Permission_(informatique)',
  'Utilisateurs': 'https://fr.wikipedia.org/wiki/Gestion_des_identit%C3%A9s_et_des_acc%C3%A8s',
  'Bash': 'https://fr.wikipedia.org/wiki/Bourne-Again_shell',
  'Services': 'https://wiki.debian.org/fr/systemd',
  'ANSSI': 'https://cyber.gouv.fr/',
  'Phishing': 'https://fr.wikipedia.org/wiki/Hame%C3%A7onnage',
  'RGPD': 'https://www.cnil.fr/fr/reglement-europeen-protection-donnees',
  'Mots de passe': 'https://www.cnil.fr/fr/mots-de-passe',
  'Authentification': 'https://fr.wikipedia.org/wiki/Authentification',
  'Durcissement': 'https://fr.wikipedia.org/wiki/Durcissement_(informatique)',
  'GLPI': 'https://glpi-project.org/',
  'TeamViewer': 'https://www.teamviewer.com/fr/',
  'Support': 'https://fr.wikipedia.org/wiki/Support_technique',
  'Diagnostic': 'https://fr.wikipedia.org/wiki/Diagnostic_(informatique)',
  'PowerShell': 'https://learn.microsoft.com/fr-fr/powershell/',
  'Tickets': 'https://fr.wikipedia.org/wiki/Logiciel_de_gestion_des_incidents'
};

const resolveKeywordLink = (label: string) => {
  const direct = keywordDefinitionLinks[label];
  if (direct) return direct;
  return `https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Recherche?search=${encodeURIComponent(label)}`;
};

const renderKeywordChip = (label: string) => `
  <a
    class="skills-clean-chip-link"
    href="${resolveKeywordLink(label)}"
    target="_blank"
    rel="noreferrer noopener"
    title="Voir la definition de ${escapeAttr(label)}"
  >
    ${Chip({ label })}
  </a>
`;

const renderToolVisual = (item: ToolTile | ResourceCard) => {
  if (item.logo) {
    return `<span class="skills-clean-tool-logo"><img src="${item.logo}" alt="${item.logoAlt ?? ('title' in item ? item.title : item.name)}" /></span>`;
  }

  return `<span class="skills-clean-tool-logo monogram">${item.monogram ?? 'IT'}</span>`;
};

const renderCertificationCard = (item: ValidationItem) => `
  <article class="skills-clean-cert-card reveal">
    <div class="card-media">
      <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" />
      <span class="skills-clean-cert-badge">${item.status}</span>
    </div>
    <div class="skills-clean-cert-body">
      ${item.supportLogo ? `<div class="skills-clean-cert-support"><img src="${item.supportLogo}" alt="${item.supportLogoAlt ?? 'Logo'}" loading="lazy" /></div>` : ''}
      <h3>${item.title}</h3>
      <p>${item.issuer}</p>
      <button
        type="button"
        class="skills-clean-link"
        data-preview-title="${escapeAttr(item.title)}"
        data-preview-issuer="${escapeAttr(item.issuer)}"
        data-preview-description="${escapeAttr(item.description)}"
        data-preview-image="${escapeAttr(item.image)}"
        data-preview-alt="${escapeAttr(item.imageAlt)}"
      >
        Voir
      </button>
    </div>
  </article>
`;

const renderResourceCard = (item: ResourceCard) => `
  <article class="skills-clean-resource-card reveal">
    <div class="skills-clean-resource-top">
      ${renderToolVisual(item)}
      <strong>${item.title}</strong>
    </div>
    <p>${item.description}</p>
    ${item.href ? `<a class="skills-clean-link" href="${item.href}" ${item.external ? 'target="_blank" rel="noreferrer noopener"' : ''}>Ouvrir</a>` : '<span class="skills-clean-link muted">A ajouter</span>'}
  </article>
`;

export default function Skills() {
  const heroTags = ['Reseaux', 'Systemes', 'Linux', 'Cybersecurite', 'Support / ITSM'];

  const domainCards = [
    {
      title: 'Reseaux',
      icon: '/assets/img/network.png',
      iconAlt: 'Reseaux',
      text: 'Comprendre, configurer et diagnostiquer une infrastructure reseau simple a intermediaire.',
      badges: ['VLAN', 'Adressage IP', 'DHCP / DNS', 'Commutation', 'Routage', 'Pare-feu']
    },
    {
      title: 'Systemes Windows',
      icon: '/assets/img/winserv.png',
      iconAlt: 'Systemes Windows',
      text: 'Administrer des postes, comptes et services dans un environnement Windows.',
      badges: ['Windows 10/11', 'Windows Server', 'Active Directory', 'GPO', 'Partages reseau', 'NTFS / ACL']
    },
    {
      title: 'Linux',
      icon: '/assets/img/linux.png',
      iconAlt: 'Linux',
      text: 'Utiliser Linux pour l administration de base, les permissions et quelques services.',
      badges: ['Debian', 'Ubuntu', 'Permissions', 'Utilisateurs', 'Bash', 'Services']
    },
    {
      title: 'Cybersecurite',
      icon: '/assets/img/shield.png',
      iconAlt: 'Cybersecurite',
      text: 'Appliquer des reflexes de securite et comprendre les principaux risques d un SI.',
      badges: ['ANSSI', 'Phishing', 'RGPD', 'Mots de passe', 'Authentification', 'Durcissement']
    },
    {
      title: 'Outils / Support / ITSM',
      icon: '/assets/img/glpi.png',
      iconAlt: 'Support ITSM',
      text: 'Suivre des tickets, assister des utilisateurs et intervenir avec methode.',
      badges: ['GLPI', 'TeamViewer', 'Support', 'Diagnostic', 'PowerShell', 'Tickets']
    }
  ];

  const contextCards = [
    {
      title: 'Stage - Mairie de Trappes',
      image: '/assets/img/stage_it.png',
      imageAlt: 'Stage Mairie de Trappes',
      text: 'Support utilisateurs, comptes, parc informatique et premieres observations reseau dans un cadre municipal reel.',
      badges: ['GLPI', 'Active Directory', 'Reseau', 'Support'],
      links: [{ label: 'Voir le contexte', href: '/#/stages' }]
    },
    {
      title: 'Projet GSB',
      image: '/assets/img/gsb.png',
      imageAlt: 'Projet GSB',
      text: 'Projet de deploiement et d organisation de services systemes et reseau, avec logique d infrastructure complete.',
      badges: ['Serveurs', 'Virtualisation', 'Reseau', 'Documentation'],
      links: [{ label: 'Voir le projet', href: '/#/projects' }]
    },
    {
      title: 'Projet Soccer78',
      image: '/assets/img/soccer78.png',
      imageAlt: 'Projet Soccer78',
      text: 'Projet oriente segmentation reseau, pfSense, switch Aruba et organisation d un plan d adressage.',
      badges: ['VLAN', 'pfSense', 'Switch', 'Adressage IP'],
      links: [{ label: 'Voir le projet', href: '/#/projects' }]
    }
  ];

  const toolsOrder = [
    'glpi',
    'teamviewer',
    'windows-server',
    'active-directory',
    'linux',
    'pfsense',
    'powershell',
    'bash',
    'vmware',
    'proxmox',
    'wireshark',
    'vscode'
  ];
  const toolsExtended = toolsOrder
    .map((id) => toolTiles.find((tool) => tool.id === id))
    .filter((tool): tool is ToolTile => Boolean(tool));

  return `
    <section class="skills-page-redesign skills-clean-page">
      <section class="skills-clean-panel skills-clean-hero reveal">
        <div class="skills-clean-hero-grid">
          <div class="skills-clean-hero-copy">
            <h1>Competences</h1>
            <p class="skills-clean-subtitle">Reseaux, systemes, cybersecurite et outils mobilises pendant ma formation.</p>
            <p class="skills-clean-intro">Cette page presente mes competences techniques, les projets qui les illustrent, ainsi que quelques ressources et certifications associees.</p>
            <div class="skills-clean-tags">
              ${heroTags.map((tag) => Chip({ label: tag })).join('')}
            </div>
          </div>
          <aside class="skills-clean-hero-visual" aria-label="Apercu visuel technique">
            <span class="skills-clean-hero-glow" aria-hidden="true"></span>
            ${['/assets/img/network.png', '/assets/img/winserv.png', '/assets/img/linux.png', '/assets/img/shield.png', '/assets/img/glpi.png'].map((src) => `
              <span class="skills-clean-hero-logo"><img src="${src}" alt="" /></span>
            `).join('')}
          </aside>
        </div>
      </section>

      <section class="skills-clean-panel" id="skills-domains">
        ${sectionHeader('Domaines de competences', 'Cinq domaines clairs pour presenter ce que je sais faire.', '◦')}
        <div class="skills-clean-domain-grid">
          ${domainCards.map((card, index) => `
            <article class="skills-clean-domain-card reveal">
              <div class="skills-clean-domain-head">
                <span class="skills-clean-domain-icon"><img src="${card.icon}" alt="${card.iconAlt}" /></span>
                <h3>${card.title}</h3>
              </div>
              <p>${card.text}</p>
              <div class="skills-clean-badges" data-domain-badges>
                ${card.badges.slice(0, 4).map(renderKeywordChip).join('')}
                <div class="skills-clean-badges-extra" data-domain-extra hidden>
                  ${card.badges.slice(4).map(renderKeywordChip).join('')}
                </div>
              </div>
              ${card.badges.length > 4 ? `<button type="button" class="skills-clean-more" data-domain-toggle data-domain-index="${index}" aria-expanded="false">+ voir plus</button>` : ''}
            </article>
          `).join('')}
        </div>
      </section>

      <section class="skills-clean-panel" id="skills-contexts">
        ${sectionHeader('Competences mises en pratique', 'Trois contextes qui montrent ou ces competences ont ete mobilisees.', '◦')}
        <div class="skills-clean-context-grid">
          ${contextCards.map((card) => `
            <article class="skills-clean-context-card reveal">
              <div class="card-media">
                <img src="${card.image}" alt="${card.imageAlt}" loading="lazy" />
              </div>
              <h3>${card.title}</h3>
              <p>${card.text}</p>
              <p class="skills-clean-context-label">Ce contexte m a permis de travailler :</p>
              <div class="skills-clean-badges compact">
                ${card.badges.map(renderKeywordChip).join('')}
              </div>
              ${renderLinks(card.links, 'is-context')}
            </article>
          `).join('')}
        </div>
      </section>

      <section class="skills-clean-panel" id="skills-certs">
        ${sectionHeader('Certifications', 'Certifications et validations presentees en cartes compactes.', '◦')}
        <div class="skills-clean-cert-grid">
          ${validationItems.map(renderCertificationCard).join('')}
        </div>
      </section>

      <section class="skills-clean-panel" id="skills-links">
        ${sectionHeader('Liens, outils et profils', 'Outils utilises, profils techniques et ressources utiles.', '◦')}

        <div class="skills-clean-resource-block">
          <div class="skills-clean-resource-head">
            <span>A.</span>
            <h3>Profils</h3>
          </div>
          <div class="skills-clean-resource-grid compact">
            ${profileCards.map(renderResourceCard).join('')}
          </div>
        </div>

        <div class="skills-clean-resource-block">
          <div class="skills-clean-resource-head">
            <span>B.</span>
            <h3>Outils / logos utilises</h3>
          </div>
          <div class="skills-clean-tools-grid">
            ${toolsExtended.map((tool) => `
              <article class="skills-clean-tool-card reveal">
                ${renderToolVisual(tool)}
                <span>${tool.name}</span>
              </article>
            `).join('')}
          </div>
        </div>

        <div class="skills-clean-resource-block">
          <div class="skills-clean-resource-head">
            <span>C.</span>
            <h3>Ressources utiles</h3>
          </div>
          <div class="skills-clean-resource-grid">
            ${technicalResourceCards.map(renderResourceCard).join('')}
          </div>
        </div>

        <div class="skills-clean-cta">
          <p>Ces competences sont mises en pratique dans mes projets, mon stage et les elements techniques presentes dans le portfolio.</p>
          <div class="skills-clean-links">
            ${Button({ label: 'Voir mes projets', href: '/#/projects', variant: 'primary' })}
            ${Button({ label: 'Voir mon stage', href: '/#/stages', variant: 'outline' })}
            ${Button({ label: 'Voir les telechargements', href: '/#/downloads', variant: 'outline' })}
          </div>
        </div>
      </section>

      <div class="skills-proof-modal" data-skills-modal hidden>
        <div class="skills-proof-overlay" data-skills-modal-close></div>
        <div class="skills-proof-dialog" role="dialog" aria-modal="true" aria-labelledby="skills-proof-title">
          <button type="button" class="skills-proof-close" data-skills-modal-close aria-label="Fermer">×</button>
          <div class="skills-proof-media">
            <img src="" alt="" data-skills-preview-image />
          </div>
          <div class="skills-proof-copy">
            <p class="skills-proof-issuer" data-skills-preview-issuer></p>
            <h3 id="skills-proof-title" data-skills-preview-title></h3>
            <p data-skills-preview-description></p>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function setupSkillsInteractions() {
  const root = document.querySelector<HTMLElement>('.skills-clean-page');
  if (!root) return;

  const modal = root.querySelector<HTMLElement>('[data-skills-modal]');
  const modalImage = root.querySelector<HTMLImageElement>('[data-skills-preview-image]');
  const modalIssuer = root.querySelector<HTMLElement>('[data-skills-preview-issuer]');
  const modalTitle = root.querySelector<HTMLElement>('[data-skills-preview-title]');
  const modalDescription = root.querySelector<HTMLElement>('[data-skills-preview-description]');

  if (!modal || !modalImage || !modalIssuer || !modalTitle || !modalDescription) return;

  document.body.style.overflow = '';
  modal.hidden = true;

  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
  };

  root.querySelectorAll<HTMLElement>('[data-preview-image]').forEach((button) => {
    if (button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';

    button.addEventListener('click', () => {
      modalImage.src = button.dataset.previewImage ?? '';
      modalImage.alt = button.dataset.previewAlt ?? button.dataset.previewTitle ?? 'Preuve';
      modalIssuer.textContent = button.dataset.previewIssuer ?? '';
      modalTitle.textContent = button.dataset.previewTitle ?? '';
      modalDescription.textContent = button.dataset.previewDescription ?? '';
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });

  root.querySelectorAll<HTMLElement>('[data-skills-modal-close]').forEach((element) => {
    if (element.dataset.bound === 'true') return;
    element.dataset.bound = 'true';
    element.addEventListener('click', closeModal);
  });

  if (root.dataset.escapeBound !== 'true') {
    root.dataset.escapeBound = 'true';
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !modal.hidden) {
        closeModal();
      }
    });
  }

  if (root.dataset.hashResetBound !== 'true') {
    root.dataset.hashResetBound = 'true';
    window.addEventListener('hashchange', () => {
      document.body.style.overflow = '';
    });
  }

  root.querySelectorAll<HTMLButtonElement>('[data-domain-toggle]').forEach((button) => {
    if (button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';

    button.addEventListener('click', () => {
      const card = button.closest('.skills-clean-domain-card');
      if (!card) return;

      const extra = card.querySelector<HTMLElement>('[data-domain-extra]');
      if (!extra) return;

      const isOpen = !extra.hidden;
      extra.hidden = isOpen;
      button.setAttribute('aria-expanded', String(!isOpen));
      button.textContent = isOpen ? '+ voir plus' : '− voir moins';
    });
  });
}
