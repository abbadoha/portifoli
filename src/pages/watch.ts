type ToolItem = {
  title: string;
  icon: string;
};

type SimpleCard = {
  title: string;
  text: string;
  icon: string;
};

type SourceCard = {
  title: string;
  url: string;
  logo: string;
  desc: string;
};

const openIcon = '<span class="veille-ext-icon" aria-hidden="true">&#8599;</span>';

const iconRss = `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="18" cy="46" r="6" fill="currentColor" />
    <path d="M14 28C26 28 36 38 36 50" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
    <path d="M14 16C33 16 48 31 48 50" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
  </svg>
`;

const iconBell = `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 12C23.7 12 17 18.7 17 27V36L12 43H52L47 36V27C47 18.7 40.3 12 32 12Z" fill="currentColor" />
    <path d="M26 48C27.3 51.5 29.2 53 32 53C34.8 53 36.7 51.5 38 48" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
  </svg>
`;

const iconOfficial = `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M14 18H50V46H14V18Z" fill="none" stroke="currentColor" stroke-width="5" />
    <path d="M14 24H50" stroke="currentColor" stroke-width="5" />
    <circle cx="20" cy="21" r="2" fill="currentColor" />
    <circle cx="26" cy="21" r="2" fill="currentColor" />
    <path d="M22 34H42" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
    <path d="M22 41H36" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
  </svg>
`;

const iconFunnel = `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M12 16H52L39 31V45L25 52V31L12 16Z" fill="currentColor" />
  </svg>
`;

const iconSearch = `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="27" cy="27" r="14" fill="none" stroke="currentColor" stroke-width="6" />
    <path d="M38 38L50 50" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
    <path d="M21 27H33" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
    <path d="M27 21V33" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
  </svg>
`;

const iconFolder = `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M10 20C10 16.7 12.7 14 16 14H28L34 20H48C51.3 20 54 22.7 54 26V44C54 47.3 51.3 50 48 50H16C12.7 50 10 47.3 10 44V20Z" fill="currentColor" />
    <path d="M18 31H46" stroke="#0E1129" stroke-width="4" stroke-linecap="round" />
    <path d="M18 38H38" stroke="#0E1129" stroke-width="4" stroke-linecap="round" />
  </svg>
`;

const iconShield = `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 10L49 17V30C49 41.5 41.8 50.4 32 54C22.2 50.4 15 41.5 15 30V17L32 10Z" fill="currentColor" />
    <path d="M25 31L30 36L40 25" stroke="#0E1129" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`;

const iconLocks = `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <rect x="17" y="28" width="30" height="22" rx="6" fill="currentColor" />
    <path d="M23 28V22C23 17 27 13 32 13C37 13 41 17 41 22V28" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
    <circle cx="32" cy="39" r="4" fill="#0E1129" />
  </svg>
`;

const iconMonitor = `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <rect x="12" y="14" width="40" height="26" rx="4" fill="currentColor" />
    <path d="M32 40V49" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
    <path d="M22 50H42" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
    <path d="M20 23L27 30L34 24L42 30" stroke="#0E1129" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`;

const iconTriangle = `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 12L52 48H12L32 12Z" fill="currentColor" />
    <path d="M32 24V35" stroke="#0E1129" stroke-width="5" stroke-linecap="round" />
    <circle cx="32" cy="42" r="3" fill="#0E1129" />
  </svg>
`;

const iconNodes = `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="16" cy="32" r="6" fill="currentColor" />
    <circle cx="32" cy="18" r="6" fill="currentColor" opacity="0.92" />
    <circle cx="32" cy="46" r="6" fill="currentColor" opacity="0.86" />
    <circle cx="48" cy="32" r="6" fill="currentColor" opacity="0.8" />
    <path d="M21 29L27 23" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
    <path d="M21 35L27 41" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
    <path d="M37 23L43 29" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
    <path d="M37 41L43 35" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
  </svg>
`;

const tools: ToolItem[] = [
  { title: 'Feedly', icon: iconRss },
  { title: 'Inoreader', icon: iconOfficial },
  { title: 'Google Alerts', icon: iconBell },
  { title: 'Pearltrees', icon: iconNodes },
];

const methodCards: SimpleCard[] = [
  {
    title: 'Collecte',
    text: 'Je regroupe les informations via flux RSS, sites officiels et alertes ciblees.',
    icon: iconRss,
  },
  {
    title: 'Tri',
    text: 'Je selectionne uniquement les contenus utiles a mon sujet de veille et a mon perimetre SISR.',
    icon: iconFunnel,
  },
  {
    title: 'Analyse',
    text: 'Je verifie les risques, les systemes concernes, l impact possible et les recommandations de protection.',
    icon: iconSearch,
  },
  {
    title: 'Synthese',
    text: 'Je classe mes sources dans Pearltrees et j en tire une synthese courte et exploitable.',
    icon: iconFolder,
  },
];

const riskCards: SimpleCard[] = [
  {
    title: 'Multiplication des points d entree',
    text: 'La 5G augmente le nombre d equipements connectes en entreprise : objets mobiles, capteurs, terminaux et services distants. Cette ouverture elargit la surface d attaque si les equipements sont mal configures ou insuffisamment proteges.',
    icon: iconNodes,
  },
  {
    title: 'Virtualisation du reseau',
    text: 'La 5G s appuie davantage sur des fonctions reseau virtualisees et logicielles. Cette souplesse ameliore les usages mais cree aussi de nouveaux risques si les environnements virtualises, les orchestrations ou les interconnexions sont mal securises.',
    icon: iconMonitor,
  },
  {
    title: 'Exposition des usages critiques',
    text: 'La 5G peut transporter des usages sensibles en entreprise : production, acces distant, objets connectes, supervision. Une faille ou une mauvaise segmentation peut alors avoir un impact plus important sur le systeme d information.',
    icon: iconOfficial,
  },
];

const solutionCards: SimpleCard[] = [
  {
    title: 'Cloisonnement et segmentation',
    text: 'La premiere protection consiste a separer les usages, les equipements et les services afin de limiter la propagation d un incident. Une bonne segmentation reduit les mouvements lateraux dans le SI.',
    icon: iconShield,
  },
  {
    title: 'Controle d acces renforce',
    text: 'L authentification forte, la gestion rigoureuse des droits et une logique Zero Trust permettent de mieux securiser les acces aux ressources exposees via des environnements connectes.',
    icon: iconLocks,
  },
  {
    title: 'Supervision et mises a jour',
    text: 'Les journaux, les alertes, la surveillance continue et l application rapide des correctifs sont essentiels pour detecter une anomalie et reduire l exploitation d une vulnerabilite.',
    icon: iconMonitor,
  },
];

const sourceCards: SourceCard[] = [
  {
    title: 'ANSSI',
    url: 'https://www.ssi.gouv.fr/',
    logo: iconOfficial,
    desc: 'Reference francaise pour les guides, recommandations et bonnes pratiques de cybersecurite.',
  },
  {
    title: 'CERT-FR',
    url: 'https://www.cert.ssi.gouv.fr/',
    logo: iconShield,
    desc: 'Source officielle pour les alertes, avis et vulnerabilites affectant les systemes et services exposes.',
  },
  {
    title: 'ENISA',
    url: 'https://www.enisa.europa.eu/',
    logo: iconNodes,
    desc: 'Agence europeenne utile pour les analyses et publications liees a la cybersecurite et aux reseaux 5G.',
  },
  {
    title: 'ARCEP',
    url: 'https://www.arcep.fr/',
    logo: iconRss,
    desc: 'Source utile pour comprendre le cadre, les usages et les enjeux lies a la 5G en France.',
  },
  {
    title: 'CISA',
    url: 'https://www.cisa.gov/',
    logo: iconTriangle,
    desc: 'Source internationale utile pour suivre les vulnerabilites prioritaires et les recommandations de protection.',
  },
];

const renderSimpleCards = (items: SimpleCard[], className = '') =>
  items
    .map(
      item => `
        <article class="veille-mini-card ${className}">
          <span class="veille-icon-shell">${item.icon}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join('');

export default function Watch() {
  return `
    <section class="veille-v2">
      <section class="veille-block veille-hero reveal">
        <div class="veille-hero-content">
          <span class="veille-eyebrow">BTS SIO SISR</span>
          <h1>Veille technologique & cybersecurite</h1>
          <p class="veille-sub">Quels sont les nouveaux risques de cybersecurite lies aux reseaux 5G et comment les entreprises peuvent-elles s en proteger ?</p>
          <p class="veille-intro">Cette veille me permet de suivre les vulnerabilites, les risques lies a la 5G et les solutions de protection utiles en entreprise.</p>
          <div class="veille-badges">
            <span class="veille-chip">Sources officielles</span>
            <span class="veille-chip">Methode simple</span>
            <span class="veille-chip">Organisation Pearltrees</span>
          </div>
        </div>
      </section>

      <section class="veille-block reveal">
          <article class="veille-embed-card">
            <div class="veille-section-head">
              <h2>Pearltrees</h2>
            </div>
            <div class="veille-pearltrees-preview" aria-label="Apercu Pearltrees">
              <div class="veille-pearltrees-frame-head" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <small>pearltrees.com/chamsabbassi</small>
              </div>
              <iframe
                src="https://www.pearltrees.com/chamsabbassi"
                title="Apercu Pearltrees"
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
                class="veille-pearltrees-iframe"
              ></iframe>
            </div>
            <a href="https://www.pearltrees.com/chamsabbassi" target="_blank" rel="noreferrer noopener" class="veille-btn">Ouvrir mon Pearltrees ${openIcon}</a>
          </article>
      </section>

      <section class="veille-block reveal">
        <div class="veille-section-head">
          <h2>Methode simple</h2>
        </div>
        <div class="veille-card-grid veille-card-grid-4">
          ${renderSimpleCards(methodCards)}
        </div>
        <div class="veille-tool-strip">
          <span class="veille-strip-label">Outils utilises</span>
          <div class="veille-tool-icons" aria-label="Outils de veille">
            ${tools
              .map(
                tool => `
                  <article class="veille-tool-pill" title="${tool.title}" aria-label="${tool.title}">
                    <span class="veille-tool-icon">${tool.icon}</span>
                    <strong>${tool.title}</strong>
                  </article>
                `,
              )
              .join('')}
          </div>
        </div>
      </section>

      <section class="veille-block reveal">
        <div class="veille-section-head">
          <h2>Risques 5G</h2>
        </div>
        <div class="veille-card-grid veille-card-grid-3">
          ${renderSimpleCards(riskCards, 'veille-risk-card')}
        </div>
        <p class="veille-section-note">Ma veille montre que les risques 5G ne viennent pas uniquement du reseau mobile, mais aussi de l integration de la 5G dans des infrastructures d entreprise plus ouvertes, connectees et virtualisees.</p>
      </section>

      <section class="veille-block reveal">
        <div class="veille-section-head">
          <h2>Solutions</h2>
        </div>
        <div class="veille-card-grid veille-card-grid-3">
          ${renderSimpleCards(solutionCards, 'veille-solution-card')}
        </div>
        <p class="veille-section-note">Les principales protections retenues dans ma veille sont le cloisonnement reseau, le controle d acces, les mises a jour regulieres et la supervision continue.</p>
      </section>

      <section class="veille-block reveal">
        <div class="veille-section-head">
          <h2>Sources essentielles</h2>
        </div>
        <div class="veille-sources-compact-grid">
          ${sourceCards
            .map(
              source => `
                <article class="veille-source-card-compact">
                  <span class="veille-source-logo">${source.logo}</span>
                  <h3>${source.title}</h3>
                  <p>${source.desc}</p>
                  <a href="${source.url}" target="_blank" rel="noreferrer noopener" class="veille-btn">Acceder ${openIcon}</a>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="veille-block reveal veille-conclusion-block">
        <div class="veille-section-head">
          <h2>Conclusion de ma veille</h2>
        </div>
        <div class="veille-conclusion-grid">
          <p>La 5G apporte de nouvelles possibilites aux entreprises, mais elle augmente aussi les risques de cybersecurite a cause de l augmentation des equipements connectes, de la virtualisation et des echanges reseau plus nombreux.</p>
          <p>Les entreprises doivent renforcer leur protection avec le cloisonnement reseau, le controle des acces, les mises a jour, la supervision et la reduction de l exposition des equipements.</p>
          <p>Cette veille me permet de mieux comprendre ces enjeux actuels et de developper des reflexes utiles dans un profil BTS SIO SISR.</p>
        </div>
      </section>
    </section>
  `;
}
