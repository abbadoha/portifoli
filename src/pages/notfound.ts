// src/pages/notfound.ts
// Page 404 not found

export default function NotFound() {
  return `
<section class="page-hero">
  <h1 style="font-size: 4rem; font-weight: bold;">404</h1>
  <p style="font-size: 1.5rem; margin-top: 1rem;">Page non trouvée</p>
</section>

<section class="page-content glass" style="text-align: center;">
  <div class="not-found-content">
    <p style="font-size: 1.1rem; margin: 2rem 0;">
      Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
    </p>
    <p style="margin: 1rem 0; color: rgba(255,255,255,0.7);">
      Vérifiez l'URL ou retournez à la page d'accueil.
    </p>
    <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
      <a href="/#/home" class="btn btn-primary">Accueil</a>
      <a href="/#/skills" class="btn btn-outline">Compétences</a>
      <a href="/#/contact" class="btn btn-ghost">Me contacter</a>
    </div>
  </div>
</section>

<section class="page-content glass" style="text-align: center;">
  <h2>Pages disponibles</h2>
  <div class="sitemap-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
    <a href="/#/home" style="text-decoration: none; color: inherit;">
      <div class="glass-panel" style="padding: 1rem; text-align: center; border-radius: 12px;">
        Accueil
      </div>
    </a>
    <a href="/#/parcours" style="text-decoration: none; color: inherit;">
      <div class="glass-panel" style="padding: 1rem; text-align: center; border-radius: 12px;">
        Parcours
      </div>
    </a>
    <a href="/#/stages" style="text-decoration: none; color: inherit;">
      <div class="glass-panel" style="padding: 1rem; text-align: center; border-radius: 12px;">
        Stages
      </div>
    </a>
    <a href="/#/skills" style="text-decoration: none; color: inherit;">
      <div class="glass-panel" style="padding: 1rem; text-align: center; border-radius: 12px;">
        Compétences
      </div>
    </a>
    <a href="/#/projects" style="text-decoration: none; color: inherit;">
      <div class="glass-panel" style="padding: 1rem; text-align: center; border-radius: 12px;">
        Projets
      </div>
    </a>
    <a href="/#/watch" style="text-decoration: none; color: inherit;">
      <div class="glass-panel" style="padding: 1rem; text-align: center; border-radius: 12px;">
        Veille
      </div>
    </a>
    <a href="/#/bts-sio" style="text-decoration: none; color: inherit;">
      <div class="glass-panel" style="padding: 1rem; text-align: center; border-radius: 12px;">
        BTS SIO
      </div>
    </a>
    <a href="/#/exams" style="text-decoration: none; color: inherit;">
      <div class="glass-panel" style="padding: 1rem; text-align: center; border-radius: 12px;">
        Épreuves
      </div>
    </a>
    <a href="/#/downloads" style="text-decoration: none; color: inherit;">
      <div class="glass-panel" style="padding: 1rem; text-align: center; border-radius: 12px;">
        Téléchargements
      </div>
    </a>
    <a href="/#/contact" style="text-decoration: none; color: inherit;">
      <div class="glass-panel" style="padding: 1rem; text-align: center; border-radius: 12px;">
        Contact
      </div>
    </a>
  </div>
</section>
  `;
}
