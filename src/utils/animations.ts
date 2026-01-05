// src/utils/animations.ts
// Système d'animations au scroll avec IntersectionObserver - sobre et performant

export interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const defaultOptions: Required<AnimationOptions> = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
  triggerOnce: true
};

/**
 * Initialise les animations au scroll pour les éléments avec classe .reveal ou .fade-in-up
 * Utilise IntersectionObserver pour performances optimales
 */
export function initScrollAnimations(options: AnimationOptions = {}): void {
  const config = { ...defaultOptions, ...options };

  // Vérifie support IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver not supported, animations disabled');
    // Fallback : afficher tous éléments immédiatement
    document.querySelectorAll('.reveal, .fade-in-up').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  // Observer pour détecter éléments entrants dans viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ajoute classe visible pour déclencher animation CSS
        entry.target.classList.add('visible');

        // Si triggerOnce, arrête d'observer cet élément
        if (config.triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else {
        // Si pas triggerOnce, retire classe quand sort du viewport
        if (!config.triggerOnce) {
          entry.target.classList.remove('visible');
        }
      }
    });
  }, {
    threshold: config.threshold,
    rootMargin: config.rootMargin
  });

  // Observer tous éléments avec classes .reveal ou .fade-in-up
  const elementsToAnimate = document.querySelectorAll('.reveal, .fade-in-up, .slide-in-left, .slide-in-right');
  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
}

/**
 * Ajoute animation stagger (décalée) aux enfants d'un container
 * Utile pour grids/listes avec multiple cards
 */
export function applyStaggerAnimation(containerSelector: string, delay: number = 100): void {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const children = container.querySelectorAll('.reveal, .fade-in-up');
  children.forEach((child, index) => {
    (child as HTMLElement).style.transitionDelay = `${index * delay}ms`;
  });
}

/**
 * Animation hover subtile pour cards
 * Ajoute elevation + légère rotation sur hover
 */
export function enhanceCardHovers(): void {
  const cards = document.querySelectorAll('.glass, .project-card, .module-card, .cert-card, .download-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('elevated');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('elevated');
    });
  });
}

/**
 * Animation typing effect pour texte hero
 * Optionnel, à utiliser avec parcimonie
 */
export function typewriterEffect(element: HTMLElement, text: string, speed: number = 50): Promise<void> {
  return new Promise((resolve) => {
    let index = 0;
    element.textContent = '';
    element.style.opacity = '1';

    const interval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

/**
 * Parallax léger au scroll
 * À utiliser avec modération sur hero backgrounds
 */
export function initParallax(selector: string, speed: number = 0.5): void {
  const element = document.querySelector(selector) as HTMLElement;
  if (!element) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
}

/**
 * Counter animation pour statistiques
 * Anime nombres de 0 vers valeur cible
 */
export function animateCounter(element: HTMLElement, target: number, duration: number = 2000): void {
  let start = 0;
  const increment = target / (duration / 16); // 60fps
  const isDecimal = target % 1 !== 0;

  const updateCounter = () => {
    start += increment;
    if (start < target) {
      element.textContent = isDecimal ? start.toFixed(1) : Math.ceil(start).toString();
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = isDecimal ? target.toFixed(1) : target.toString();
    }
  };

  updateCounter();
}

/**
 * Prefers-reduced-motion check
 * Désactive animations si utilisateur préfère mouvement réduit
 */
export function respectMotionPreference(): boolean {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.info('Reduced motion preferred, disabling animations');
    document.documentElement.classList.add('reduce-motion');
    return true;
  }
  return false;
}

/**
 * Init global : lance toutes animations au chargement page
 */
export function initAllAnimations(): void {
  // Check préférence mouvement
  if (respectMotionPreference()) {
    // Fallback : afficher tout immédiatement
    document.querySelectorAll('.reveal, .fade-in-up').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  // Init animations scroll
  initScrollAnimations();

  // Stagger sur grids principales
  setTimeout(() => {
    applyStaggerAnimation('.projects-grid', 80);
    applyStaggerAnimation('.modules-grid', 100);
    applyStaggerAnimation('.downloads-grid', 90);
  }, 100);
}

export default {
  initScrollAnimations,
  applyStaggerAnimation,
  enhanceCardHovers,
  typewriterEffect,
  initParallax,
  animateCounter,
  respectMotionPreference,
  initAllAnimations
};
