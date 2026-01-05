// src/pages/skills.ts
// Page compétences détaillées avec matrice - Data-driven

import { Chip } from '../components/ui';
import { mainSkillsMatrix, otherSkills, levelLabels, type SkillLevel } from '../data/skills';

export default function Skills() {
  // Grouper les compétences par niveau pour la matrice principale
  const renderSkillColumn = (category: typeof mainSkillsMatrix[0]) => {
    const skillsByLevel: Record<SkillLevel, typeof category.skills> = {
      'notions': [],
      'bonnes-bases': [],
      'en-approfondissement': [],
      'avance': []
    };

    category.skills.forEach(skill => {
      skillsByLevel[skill.level].push(skill);
    });

    const renderSkillChip = (skill: typeof category.skills[0]) => {
      if (skill.clickable && skill.proof) {
        return `<span class="skill-chip-clickable" data-skill="${skill.name}" data-proof="${skill.proof.replace(/"/g, '&quot;')}">${Chip({ label: skill.name })}</span>`;
      }
      return Chip({ label: skill.name });
    };

    return `
      <div class="skills-column">
        <h3>${category.icon} ${category.title}</h3>
        ${skillsByLevel['bonnes-bases'].length > 0 ? `
          ${skillsByLevel['bonnes-bases'].map(renderSkillChip).join(' ')}
          <p class="level-badge">${levelLabels['bonnes-bases'].label}</p>
        ` : ''}
        ${skillsByLevel['en-approfondissement'].length > 0 ? `
          ${skillsByLevel['en-approfondissement'].map(renderSkillChip).join(' ')}
          <p class="level-badge">${levelLabels['en-approfondissement'].label}</p>
        ` : ''}
        ${skillsByLevel['avance'].length > 0 ? `
          ${skillsByLevel['avance'].map(renderSkillChip).join(' ')}
          <p class="level-badge">${levelLabels['avance'].label}</p>
        ` : ''}
        ${skillsByLevel['notions'].length > 0 ? `
          ${skillsByLevel['notions'].map(renderSkillChip).join(' ')}
          <p class="level-badge">${levelLabels['notions'].label}</p>
        ` : ''}
      </div>
    `;
  };

  // Rendu des autres compétences avec niveaux
  const renderOtherSkillCategory = (category: typeof otherSkills[0]) => {
    const renderSkillChip = (skill: typeof category.items[0]) => {
      const chipContent = Chip({ label: skill.name });
      if (skill.clickable && skill.proof) {
        return `<span class="skill-chip-clickable" data-skill="${skill.name}" data-proof="${skill.proof.replace(/"/g, '&quot;')}">${chipContent}</span>`;
      }
      return chipContent;
    };

    return `
      <div class="skill-category">
        <h4>${category.title}</h4>
        <p>${category.items.map(renderSkillChip).join(' ')}</p>
      </div>
    `;
  };

  return `
<section class="page-hero">
  <h1>Compétences Détaillées</h1>
  <p>Réseaux, Systèmes, Sécurité & ITSM</p>
</section>

<section class="page-content glass">
  <h2>📊 Matrice de compétences</h2>
  <p class="matrix-intro">Cliquez sur les badges <span class="badge-clickable-demo">avec bordure</span> pour voir les preuves d'utilisation.</p>
  <div class="skills-matrix">
    ${mainSkillsMatrix.map(renderSkillColumn).join('')}
  </div>
</section>

<section class="page-content glass">
  <h2>📋 Légende des niveaux</h2>
  <div class="legend-grid">
    ${Object.entries(levelLabels).map(([_key, value]) => `
      <div class="legend-item">
        <span class="badge-small">${value.label}</span>
        <p>${value.description}</p>
      </div>
    `).join('')}
  </div>
</section>

<section class="page-content glass">
  <h2>🎓 Autres compétences</h2>
  <div class="other-skills">
    ${otherSkills.map(renderOtherSkillCategory).join('')}
  </div>
</section>

<!-- Modal pour afficher les preuves -->
<div id="skill-proof-modal" class="skill-modal" style="display: none;">
  <div class="skill-modal-overlay"></div>
  <div class="skill-modal-content">
    <button class="skill-modal-close">&times;</button>
    <h3 id="skill-modal-title"></h3>
    <p id="skill-modal-proof"></p>
  </div>
</div>

<section class="page-cta glass">
  <h3>Voyez comment j'ai appliqué ces compétences</h3>
  <a href="/#/projects" class="btn btn-primary">Mes projets</a>
</section>

<script>
  // Gestion des compétences cliquables
  document.addEventListener('DOMContentLoaded', () => {
    const clickableSkills = document.querySelectorAll('.skill-chip-clickable');
    const modal = document.getElementById('skill-proof-modal');
    const modalTitle = document.getElementById('skill-modal-title');
    const modalProof = document.getElementById('skill-modal-proof');
    const closeBtn = document.querySelector('.skill-modal-close');
    const overlay = document.querySelector('.skill-modal-overlay');

    clickableSkills.forEach(chip => {
      chip.style.cursor = 'pointer';
      chip.addEventListener('click', (e) => {
        const skillName = chip.getAttribute('data-skill');
        const proof = chip.getAttribute('data-proof');
        
        modalTitle.textContent = skillName;
        modalProof.textContent = proof;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // Fermer avec Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
      }
    });
  });
</script>
  `;
}
