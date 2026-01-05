// src/pages/cv.ts
// Page CV interactive - Version HTML à jour avec toutes les expériences

import { Chip, Button } from '../components/ui';
// Setup interactions pour l'accordéon "Voir les détails"
export function setupCVInteractions() {
  const accordionToggle = document.querySelector('.cv-details-toggle') as HTMLButtonElement;
  const accordionContent = document.querySelector('.cv-details-content') as HTMLDivElement;

  if (accordionToggle && accordionContent) {
    accordionToggle.addEventListener('click', () => {
      const isExpanded = accordionToggle.getAttribute('aria-expanded') === 'true';
      
      // Toggle état
      accordionToggle.setAttribute('aria-expanded', String(!isExpanded));
      accordionContent.style.display = !isExpanded ? 'block' : 'none';
      
      // Animation icône
      const icon = accordionToggle.querySelector('.accordion-icon');
      if (icon) {
        icon.textContent = !isExpanded ? '▼' : '▶';
      }
    });

    // Fermeture avec Échap
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && accordionToggle.getAttribute('aria-expanded') === 'true') {
        accordionToggle.click();

        // Smooth scroll vers la section expériences
        const detailsLink = document.querySelector('.details-link') as HTMLAnchorElement;
        if (detailsLink) {
          detailsLink.addEventListener('click', (e) => {
            e.preventDefault();
            const experiencesSection = document.getElementById('cv-experiences');
            if (experiencesSection) {
              experiencesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
              // Ajouter un highlight temporaire sur la section
              const highlightItem = experiencesSection.querySelector('.cv-item-highlight');
              if (highlightItem) {
                highlightItem.classList.add('pulse-highlight');
                setTimeout(() => {
                  highlightItem.classList.remove('pulse-highlight');
                }, 2000);
              }
            }
          });
        }
      }
    });
  }
}


export default function CV() {
  return `
<div class="cv-page">
  <!-- Actions en-tête -->
  <section class="cv-actions glass">
    <div class="cv-actions-content">
      <h1>Curriculum Vitae</h1>
      <p class="cv-subtitle">Version à jour • Janvier 2026</p>
      <div class="cv-buttons">
        ${Button({ label: '📥 Télécharger PDF', href: '/assets/docs/ABBASSI_DOHA_CV.pdf', variant: 'primary' })}
        ${Button({ label: '✉️ Me contacter', href: '/#/contact', variant: 'secondary' })}
      </div>

          <!-- Accordéon "Voir les détails" -->
      <div class="cv-details-section">
        <button 
          class="btn btn-secondary cv-details-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="cv-details-versailles"
        >
          <span class="accordion-icon">▶</span>
          <span class="accordion-label">Voir les détails (Dernière expérience)</span>
        </button>
  
        <div 
          id="cv-details-versailles" 
          class="cv-details-content"
          style="display: none;"
        >
          <div class="cv-details-card">
            <h3 class="details-title">Dernière expérience — Agent de sûreté (Château de Versailles)</h3>
            <p class="details-dates">📅 22 décembre 2025 – 4 janvier 2026</p>
            <p class="details-context"><em>Contrat saisonnier • Mission temporaire</em></p>
        
            <ul class="details-list">
              <li>🛡️ <strong>Surveillance et contrôle des accès</strong> : Application des consignes de sécurité dans un site patrimonial de haute fréquentation</li>
              <li>👥 <strong>Accueil et orientation des visiteurs</strong> : Gestion des flux, assistance et information du public</li>
              <li>📢 <strong>Signalement d'incidents</strong> : Coordination avec l'équipe de sécurité sur site et transmission d'informations en temps réel</li>
            </ul>
        
            <div class="details-footer">
              <p><strong>Compétences développées :</strong> Rigueur opérationnelle, travail d'équipe, gestion du stress, communication interpersonnelle</p>
              <a href="#cv-experiences" class="details-link">📄 Voir sur le CV complet</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CV Content -->
  <section id="cv-experiences" class="cv-content glass">
    <div class="cv-layout">
      
      <!-- En-tête CV -->
      <header class="cv-header">
        <h2 class="cv-name">ABBASSI Doha</h2>
        <p class="cv-title">Administratrice Systèmes & Réseaux en devenir</p>
        <div class="cv-contact-info">
          <p>📧 chamsabbassi78@gmail.com</p>
          <p>📱 +33 06 09 69 57 34</p>
          <p>📍 Trappes (78190)</p>
          <p>🔗 Portfolio : <a href="https://doha-abbassi-portfolio.netlify.app" target="_blank">doha-abbassi-portfolio.netlify.app</a></p>
        </div>
      </header>

      <!-- Profil -->
      <section class="cv-section">
        <h3 class="cv-section-title">👤 Profil</h3>
        <div class="cv-section-content">
          <p>Étudiante en BTS SIO option SISR (Solutions d'Infrastructure, Systèmes et Réseaux), passionnée par l'administration système, la sécurité informatique et les infrastructures réseau. Forte d'une expérience de stage en environnement professionnel réel (collectivité territoriale), je recherche activement des opportunités pour approfondir mes compétences techniques et contribuer à des projets d'infrastructure IT.</p>
          <p>Dotée d'une grande capacité d'adaptation, d'un esprit analytique et d'un excellent sens du service utilisateur, je suis prête à m'investir dans un environnement technique exigeant.</p>
        </div>
      </section>

      <!-- Formation -->
      <section class="cv-section">
        <h3 class="cv-section-title">🎓 Formation</h3>
        <div class="cv-section-content">
          
          <div class="cv-item">
            <div class="cv-item-header">
              <h4 class="cv-item-title">BTS Services Informatiques aux Organisations (SIO)</h4>
              <span class="cv-item-date">2024 – 2026</span>
            </div>
            <p class="cv-item-location">Option SISR • Lycée Jean Vilar, Plaisir (78)</p>
            <ul class="cv-item-list">
              <li><strong>Administration systèmes :</strong> Windows Server, Active Directory, GPO, scripting PowerShell</li>
              <li><strong>Réseaux :</strong> TCP/IP, routage, VLANs, commutation, sécurité réseau</li>
              <li><strong>Virtualisation :</strong> VMware, VirtualBox, gestion d'infrastructures virtualisées</li>
              <li><strong>Support & maintenance :</strong> Ticketing (GLPI), assistance utilisateurs, déploiement postes</li>
              <li><strong>Sécurité :</strong> NTFS/ACL, pare-feu, analyse de risques, bonnes pratiques SecOps</li>
            </ul>
            <div class="cv-chips">
              ${Chip({ label: 'Windows Server' })}
              ${Chip({ label: 'Linux' })}
              ${Chip({ label: 'Active Directory' })}
              ${Chip({ label: 'Réseaux' })}
              ${Chip({ label: 'Sécurité' })}
            </div>
          </div>

          <div class="cv-item">
            <div class="cv-item-header">
              <h4 class="cv-item-title">Baccalauréat Général</h4>
              <span class="cv-item-date">2024</span>
            </div>
            <p class="cv-item-location">Spécialités scientifiques • Trappes (78)</p>
          </div>

        </div>
      </section>

      <!-- Expérience Professionnelle -->
      <section class="cv-section">
        <h3 class="cv-section-title">💼 Expérience Professionnelle</h3>
        <div class="cv-section-content">

          <!-- NOUVELLE EXPÉRIENCE : Agent de sûreté Versailles -->
          <div class="cv-item cv-item-highlight">
            <div class="cv-item-header">
              <h4 class="cv-item-title">Agent de sûreté</h4>
              <span class="cv-item-date">22 déc. 2025 – 4 jan. 2026</span>
            </div>
            <p class="cv-item-location">Château de Versailles • Mission temporaire</p>
            <ul class="cv-item-list">
              <li><strong>Surveillance et contrôle des accès :</strong> Application rigoureuse des consignes de sécurité, gestion des flux de visiteurs dans un site patrimonial de haute fréquentation</li>
              <li><strong>Accueil et orientation :</strong> Assistance et information des visiteurs, gestion des situations de tension avec professionnalisme et courtoisie</li>
              <li><strong>Signalement des incidents :</strong> Coordination avec l'équipe de sécurité sur site, transmission d'informations critiques en temps réel</li>
            </ul>
            <p class="cv-item-note"><em>Compétences développées : Rigueur opérationnelle, travail d'équipe, gestion du stress, communication interpersonnelle, sens du service public.</em></p>
            <div class="cv-chips">
              ${Chip({ label: 'Sécurité' })}
              ${Chip({ label: 'Accueil public' })}
              ${Chip({ label: 'Gestion de crise' })}
              ${Chip({ label: 'Travail d\'équipe' })}
            </div>
          </div>

          <!-- Stage IT Mairie de Trappes -->
          <div class="cv-item">
            <div class="cv-item-header">
              <h4 class="cv-item-title">Stagiaire Administrateur Systèmes & Réseaux</h4>
              <span class="cv-item-date">Mai – Juillet 2025</span>
            </div>
            <p class="cv-item-location">Mairie de Trappes • Direction des Systèmes d'Information (DSI)</p>
            <ul class="cv-item-list">
              <li><strong>Cartographie serveur de fichiers :</strong> Analyse complète de l'arborescence (commandes tree, Get-Acl PowerShell), documentation des droits d'accès NTFS/ACL, anonymisation des données sensibles</li>
              <li><strong>Support utilisateurs :</strong> Prise en main de GLPI (ticketing), assistance à distance via TeamViewer, résolution d'incidents niveau 1 (droits, accès, imprimantes)</li>
              <li><strong>Gestion du parc matériel :</strong> Installation de pilotes d'imprimantes, tri et configuration de tablettes, mise à jour de l'inventaire matériel de la commune</li>
              <li><strong>Infrastructure réseau :</strong> Découverte et manipulation de switchs multilayer, segmentation réseau par VLANs, observations de configurations de production</li>
              <li><strong>Remise à niveau de mini-PC (centre de formation) :</strong> Création de clés USB bootables (Rufus), boot BIOS/UEFI, installation/migration Windows 11, mises à jour système et pilotes, tests de validation finale</li>
            </ul>
            <p class="cv-item-note"><em>Environnement professionnel réel avec contraintes de sécurité publique et infrastructure Active Directory.</em></p>
            <div class="cv-chips">
              ${Chip({ label: 'Windows Server' })}
              ${Chip({ label: 'Active Directory' })}
              ${Chip({ label: 'PowerShell' })}
              ${Chip({ label: 'GLPI' })}
              ${Chip({ label: 'TeamViewer' })}
              ${Chip({ label: 'VLANs' })}
              ${Chip({ label: 'Support IT' })}
            </div>
          </div>

        </div>
      </section>

      <!-- Certifications -->
      <section class="cv-section">
        <h3 class="cv-section-title">🏆 Certifications & Formations Complémentaires</h3>
        <div class="cv-section-content">
          
          <div class="cv-item">
            <div class="cv-item-header">
              <h4 class="cv-item-title">SecNumacadémie</h4>
              <span class="cv-item-date">Janvier 2026</span>
            </div>
            <p class="cv-item-location">ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information)</p>
            <p>Formation en ligne sur la cybersécurité : sensibilisation aux menaces, bonnes pratiques de sécurité des systèmes d'information, hygiène informatique. 4 modules validés (score moyen 88%).</p>
            <div class="cv-chips">
              ${Chip({ label: 'Cybersécurité' })}
              ${Chip({ label: 'ANSSI' })}
            </div>
            <div style="margin-top: 1rem;">
              <a href="/#/certifications/anssi" class="btn btn-sm btn-primary" style="margin-right: 0.5rem;">📄 Voir détails</a>
              <a href="/certifications/anssi-secnumacademie.pdf" download class="btn btn-sm btn-secondary">📥 PDF</a>
            </div>
          </div>

        </div>
      </section>

      <!-- Compétences Techniques -->
      <section class="cv-section">
        <h3 class="cv-section-title">⚙️ Compétences Techniques</h3>
        <div class="cv-section-content">
          
          <div class="cv-skills-grid">
            <div class="cv-skill-category">
              <h4>Systèmes d'exploitation</h4>
              <ul>
                <li>Windows Server 2016/2019/2022</li>
                <li>Windows 10/11 (administration)</li>
                <li>Linux (Debian, Ubuntu)</li>
                <li>Active Directory (domaine, GPO, utilisateurs)</li>
              </ul>
            </div>

            <div class="cv-skill-category">
              <h4>Réseaux & Infrastructure</h4>
              <ul>
                <li>TCP/IP, routage, adressage IP/subnetting</li>
                <li>VLANs, segmentation réseau</li>
                <li>Switchs multilayer, configuration de base</li>
                <li>Pare-feu et règles de sécurité réseau</li>
              </ul>
            </div>

            <div class="cv-skill-category">
              <h4>Outils & Technologies</h4>
              <ul>
                <li>PowerShell (scripting, automatisation)</li>
                <li>GLPI (gestion de tickets, inventaire)</li>
                <li>TeamViewer (assistance à distance)</li>
                <li>VMware, VirtualBox (virtualisation)</li>
                <li>Rufus, déploiement de postes</li>
              </ul>
            </div>

            <div class="cv-skill-category">
              <h4>Sécurité & Support</h4>
              <ul>
                <li>Droits NTFS/ACL, gestion des permissions</li>
                <li>Analyse de risques, SecNumacadémie</li>
                <li>Support utilisateurs niveau 1</li>
                <li>Documentation technique</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <!-- Langues -->
      <section class="cv-section">
        <h3 class="cv-section-title">🌍 Langues</h3>
        <div class="cv-section-content">
          <div class="cv-languages">
            <div class="cv-language-item">
              <strong>Français</strong> — Langue maternelle
            </div>
            <div class="cv-language-item">
              <strong>Anglais</strong> — Niveau professionnel (B2)
            </div>
            <div class="cv-language-item">
              <strong>Arabe</strong> — Courant (dialectal + littéraire)
            </div>
          </div>
        </div>
      </section>

      <!-- Centres d'intérêt -->
      <section class="cv-section">
        <h3 class="cv-section-title">🎯 Centres d'intérêt</h3>
        <div class="cv-section-content">
          <div class="cv-interests">
            <div class="cv-interest-item">
              <strong>🥋 Taekwondo (8 ans de pratique)</strong> — Discipline, persévérance, esprit d'équipe
            </div>
            <div class="cv-interest-item">
              <strong>📚 Lecture</strong> — Développement personnel, technologies, science-fiction
            </div>
            <div class="cv-interest-item">
              <strong>✈️ Voyages</strong> — Découverte de cultures, ouverture d'esprit
            </div>
            <div class="cv-interest-item">
              <strong>💻 Veille technologique</strong> — Cybersécurité, nouvelles technologies IT, automatisation
            </div>
          </div>
        </div>
      </section>

      <!-- Footer CV -->
      <footer class="cv-footer">
        <p><em>Références professionnelles disponibles sur demande.</em></p>
        <p><strong>Disponibilité :</strong> Stages, alternances, missions IT (administration système, support, réseau)</p>
      </footer>

    </div>
  </section>
</div>
  `;
}
