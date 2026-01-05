import './main.css'
import { initRouter } from './app/router'
import { renderNavbar, initNavbar } from './components/navbar'
import { renderFooter } from './components/footer'
import { initAllAnimations } from './utils/animations'

// Initialize dynamic background particles
function initBackgroundParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  particlesContainer.setAttribute('aria-hidden', 'true');
  document.body.appendChild(particlesContainer);

  // Create 15 floating particles
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size, position, and animation duration
    const size = Math.random() * 4 + 2; // 2-6px
    const left = Math.random() * 100; // 0-100%
    const animationDuration = Math.random() * 20 + 15; // 15-35s
    const animationDelay = Math.random() * 5; // 0-5s
    const opacity = Math.random() * 0.3 + 0.2; // 0.2-0.5
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      bottom: -10px;
      animation-duration: ${animationDuration}s;
      animation-delay: ${animationDelay}s;
      opacity: ${opacity};
    `;
    
    particlesContainer.appendChild(particle);
  }
}

// Initialize accordions
function initAccordions() {
  setTimeout(() => {
    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!isExpanded));
      });
    });
  }, 100);
}

// Initialize the SPA router
function initApp() {
  const appContainer = document.querySelector<HTMLDivElement>('#app');
  if (!appContainer) return;

  // Create app structure with navbar and footer
  const navbar = document.createElement('header');
  navbar.id = 'main-navbar';
  navbar.innerHTML = renderNavbar();

  const main = document.createElement('main');
  main.id = 'page';

  const footer = document.createElement('footer');
  footer.id = 'main-footer';
  footer.innerHTML = renderFooter();

  appContainer.innerHTML = '';
  appContainer.appendChild(navbar);
  appContainer.appendChild(main);
  appContainer.appendChild(footer);

  // Initialize router and navbar
  initRouter();
  initNavbar();
  initAccordions();
  initBackgroundParticles();
  
  // Initialize animations on first load
  setTimeout(() => {
    initAllAnimations();
  }, 100);
  
  // Re-init accordions and animations after page changes
  document.addEventListener('hashchange', () => {
    setTimeout(() => {
      initAccordions();
      initAllAnimations();
    }, 200);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
