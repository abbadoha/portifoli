// src/components/navbar.ts
// Navbar responsive avec burger menu mobile

export function renderNavbar() {
  const navLinks = [
    { path: '/home', label: 'Accueil' },
    { path: '/profile', label: 'Profil' },
    { path: '/cv', label: 'CV' },
    { path: '/parcours', label: 'Parcours' },
    { path: '/stages', label: 'Stages' },
    { path: '/rapport-stage', label: 'Rapport de stage' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/skills', label: 'Compétences' },
    { path: '/projects', label: 'Projets' },
    { path: '/bts-sio', label: 'BTS SIO' },
    { path: '/programme', label: 'Programme' },
    { path: '/watch', label: 'Veille' },
    { path: '/downloads', label: 'Téléchargements' },
    { path: '/contact', label: 'Contact' },
  ];

  const linkHtml = navLinks.map(link =>
    `<a class="nav-link" href="/#${link.path}" aria-label="${link.label}">${link.label}</a>`
  ).join('');

  return `
    <nav class="navbar glass">
      <div class="navbar-brand">
        <a href="/#/home" class="navbar-logo">Portfolio SISR</a>
      </div>
      <div class="navbar-menu" id="navbar-menu">
        <div class="nav-links">${linkHtml}</div>
        <a class="nav-legal" href="/#/legal">Mentions légales</a>
      </div>
      <button class="navbar-burger" id="navbar-burger" aria-label="Menu" aria-expanded="false">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
    </nav>
  `;
}

export function initNavbar() {
  const burger = document.getElementById('navbar-burger');
  const menu = document.getElementById('navbar-menu');
  
  if (!burger || !menu) return;

  // Toggle menu on burger click
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    burger.setAttribute('aria-expanded', String(burger.classList.contains('active')));
  });

  // Close menu on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      menu.classList.remove('active');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  // Update active link on route change
  window.addEventListener('hashchange', updateActiveLink);
  updateActiveLink();
}

function updateActiveLink() {
  const currentHash = window.location.hash.replace('/#', '');
  const currentPath = currentHash || '/home';
  
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const linkPath = href?.replace('/#', '');
    if (linkPath === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
