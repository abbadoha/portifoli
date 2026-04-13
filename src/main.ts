import './main.css'
import { initRouter } from './app/router'
import { renderNavbar, initNavbar } from './components/navbar'
import { renderFooter } from './components/footer'
import { copyToClipboard } from './components/ui'
import { initAllAnimations } from './utils/animations'

// Keep a lightweight hook for the profile page without carousel logic
function initSisrSlider() {
  return;
}

function activateTab(button: HTMLButtonElement) {
  const group = button.dataset.tabs;
  const selectedKey = button.dataset.tabKey;
  if (!group || !selectedKey) return;

  document.querySelectorAll<HTMLButtonElement>(`[data-tabs="${group}"]`).forEach((tabButton) => {
    const isActive = tabButton.dataset.tabKey === selectedKey;
    tabButton.setAttribute('aria-selected', String(isActive));
    tabButton.setAttribute('tabindex', isActive ? '0' : '-1');
    tabButton.classList.toggle('active', isActive);
  });

  document.querySelectorAll<HTMLElement>(`[data-tab-panel="${group}"]`).forEach((panel) => {
    const isActive = panel.dataset.tabKey === selectedKey;
    panel.hidden = !isActive;
    panel.style.display = isActive ? 'block' : 'none';
    panel.classList.toggle('active', isActive);
  });
}

function initTabs() {
  document.querySelectorAll<HTMLElement>('.tabs').forEach((tabsRoot) => {
    const buttons = tabsRoot.querySelectorAll<HTMLButtonElement>('.tab-btn[data-tabs][data-tab-key]');
    if (!buttons.length) return;

    const activeButton = Array.from(buttons).find((button) => button.getAttribute('aria-selected') === 'true') ?? buttons[0];
    activateTab(activeButton);
  });

  if (document.body.dataset.tabsDelegated === 'true') return;
  document.body.dataset.tabsDelegated = 'true';

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    const button = target?.closest<HTMLButtonElement>('.tab-btn[data-tabs][data-tab-key]');
    if (!button) return;

    event.preventDefault();
    activateTab(button);
  });
}

function initProfileInteractions() {
  const profileRoot = document.querySelector<HTMLElement>('.profile-page-redesign');
  if (!profileRoot) return;

  profileRoot.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((card) => {
    if (card.dataset.spotlightReady === 'true') return;
    card.dataset.spotlightReady = 'true';
    card.style.setProperty('--spotlight-x', '50%');
    card.style.setProperty('--spotlight-y', '50%');
    card.style.setProperty('--spotlight-opacity', '0');

    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
      card.style.setProperty('--spotlight-opacity', '1');
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--spotlight-opacity', '0');
    });
  });

  profileRoot.querySelectorAll<HTMLElement>('[data-tilt-card]').forEach((card) => {
    if (card.dataset.tiltReady === 'true') return;
    card.dataset.tiltReady = 'true';
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');

    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 7;
      const rotateX = (0.5 - py) * 7;
      card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });

  const copyButton = profileRoot.querySelector<HTMLButtonElement>('[data-copy-email]');
  if (copyButton && copyButton.dataset.copyReady !== 'true') {
    copyButton.dataset.copyReady = 'true';
    const label = copyButton.querySelector<HTMLElement>('.btn-label');
    const defaultLabel = copyButton.dataset.defaultLabel ?? label?.textContent ?? 'Copier mon email';

    copyButton.addEventListener('click', () => {
      copyToClipboard(copyButton.dataset.copyEmail ?? null);

      if (label) {
        label.textContent = 'Email copié';
        copyButton.classList.add('is-copied');
        window.setTimeout(() => {
          label.textContent = defaultLabel;
          copyButton.classList.remove('is-copied');
        }, 1400);
      }
    });
  }
}

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

  const initPageEnhancements = () => {
    initAccordions();
    initTabs();
    initSisrSlider();
    initAllAnimations();
    initProfileInteractions();
  };

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
  initBackgroundParticles();

  // Run once after initial render and after every route render.
  document.addEventListener('app:page-rendered', () => {
    requestAnimationFrame(initPageEnhancements);
  });

  requestAnimationFrame(initPageEnhancements);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
