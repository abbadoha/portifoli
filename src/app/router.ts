// src/app/router.ts
// Hash-based SPA router (/#/route)

import Home from '../pages/home';
import Profile from '../pages/profile';
import CV, { setupCVInteractions } from '../pages/cv';
import Parcours from '../pages/parcours';
import Stages from '../pages/stages';
import RapportStage from '../pages/rapport-stage';
import Certifications from '../pages/certifications';
import CertificationAnssi from '../pages/certification-anssi';
import Skills from '../pages/skills';
import Projects from '../pages/projects';
import Watch from '../pages/watch';
import BtsSio from '../pages/bts-sio';
import Programme from '../pages/programme';
import Exams from '../pages/exams';
import Downloads from '../pages/downloads';
import Contact from '../pages/contact';
import Legal from '../pages/legal';
import NotFound from '../pages/notfound';

export interface Route {
  path: string;
  title: string;
  render: () => string;
  setup?: () => void;
}

const routes: Route[] = [
  { path: '/home', title: 'Accueil', render: Home },
  { path: '/profile', title: 'Profil', render: Profile },
  { path: '/cv', title: 'CV', render: CV, setup: setupCVInteractions },
  { path: '/parcours', title: 'Parcours', render: Parcours },
  { path: '/stages', title: 'Stages', render: Stages },
  { path: '/rapport-stage', title: 'Rapport de stage', render: RapportStage },
  { path: '/certifications', title: 'Certifications', render: Certifications },
  { path: '/certifications/anssi', title: 'Certification ANSSI', render: CertificationAnssi },
  { path: '/skills', title: 'Compétences', render: Skills },
  { path: '/projects', title: 'Projets', render: Projects },
  { path: '/watch', title: 'Veille', render: Watch },
  { path: '/bts-sio', title: 'BTS SIO', render: BtsSio },
  { path: '/programme', title: 'Programme & Projets', render: Programme },
  { path: '/exams', title: 'Épreuves', render: Exams },
  { path: '/downloads', title: 'Téléchargements', render: Downloads },
  { path: '/contact', title: 'Contact', render: Contact },
  { path: '/legal', title: 'Mentions légales', render: Legal },
];

const notFound: Route = { path: '/404', title: '404', render: NotFound };

function getRoute(): Route {
  const hash = window.location.hash.replace(/^#/, '');
  const path = hash.startsWith('/') ? hash : '/home';
  return routes.find(r => r.path === path) || notFound;
}

function renderPage() {
  const main = document.getElementById('page');
  
  if (main) {
    const route = getRoute();
    document.title = `Portfolio BTS SIO — SISR | ${route.title}`;
    main.innerHTML = route.render();
    main.style.animation = 'none';
    void main.offsetWidth; // force reflow
    main.style.animation = 'fadeIn 0.4s ease-out';
    window.scrollTo({ top: 0, behavior: 'smooth' });
        // Call page-specific setup function if exists
        if (route.setup) {
          setTimeout(() => {
            route.setup!();
          }, 100);
        }
    
    
    // Update navbar active state
    updateNavbar();
  }
}

export function initRouter() {
  window.addEventListener('hashchange', renderPage);
  window.addEventListener('DOMContentLoaded', renderPage);
  renderPage(); // render initial page
}

export function getRoutes() {
  return routes;
}

export function getActivePath() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash.startsWith('/') ? hash : '/home';
}

function updateNavbar() {
  const activePath = getActivePath();
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkPath = href.replace('/#', '');
    if (linkPath === activePath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
