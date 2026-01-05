// src/pages/bts-sio.ts
// Page BTS SIO formation

import { Chip } from '../components/ui';
import Icons from '../components/icons';

export default function BtsSio() {
  return `
<section class="page-hero">
  <div class="icon-hero">${Icons.GraduationCap({ size: 64, color: 'var(--color-primary)' })}</div>
  <h1>BTS SIO SISR</h1>
  <p>Brevet Technicien Supérieur en Services Informatiques aux Organisations</p>
</section>

<section class="page-content glass">
  <h2>📚 Qu'est-ce que le BTS SIO ?</h2>
  <p>Le BTS SIO est un diplôme d'État francais (niveau III, bac+2) préparant à des métiers IT opérationnels : administrateur systèmes/réseaux, support utilisateur, technicien infrastructure.</p>
  <p><strong>Durée :</strong> 2 ans (1ère et 2ère année)</p>
  <p><strong>Accès :</strong> Baccalauréat (ou diplôme équivalent)</p>
  <p><strong>Statut :</strong> Scolaire (lycée) ou apprentissage (contrat alternance)</p>
  <p><strong>Ministère tutelle :</strong> Ministère de l'Éducation Nationale</p>
</section>

<section class="page-content glass">
  <h2>🎯 Les deux options : SIO/SISR vs SIO/SLAM</h2>
  <div class="options-comparison">
    <div class="option-card">
      <h3>🖥️ SISR (mon option)</h3>
      <p><strong>Signification :</strong> Solutions d'Infrastructure, Systèmes et Réseaux</p>
      <p><strong>Focus :</strong> Administration réseaux, systèmes, infrastructure IT.</p>
      <p>Profil : Administrateur systèmes, Administrateur réseaux, Technicien support infrastructure, Responsable parc IT.</p>
      <p><strong>Compétences :</strong> Windows/Linux, Active Directory, Réseaux TCP/IP, Firewalls, Virtualisation, Services IT.</p>
    </div>
    <div class="option-card">
      <h3>💻 SLAM (autre option)</h3>
      <p><strong>Signification :</strong> Solutions Logicielles et Applications Métier</p>
      <p><strong>Focus :</strong> Développement, intégration logiciels, gestion données.</p>
      <p>Profils : Développeur, Intégrateur, Analyste, Chef projet IT.</p>
      <p><strong>Compétences :</strong> Programmation (Java, PHP, C#), Bases de données, Web, Gestion projets.</p>
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>🎓 Contenu pédagogique SISR</h2>
  
  <div class="accordion" id="bts-core">
    <button class="accordion-trigger" data-accordion="bts-core">
      🔧 Modules fondamentaux
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p><strong>Architecture IT :</strong> Modèles OSI, TCP/IP, topologies réseau, documentation système.</p>
      <p><strong>Systèmes d'exploitation :</strong> Windows Server, Linux (Debian/Ubuntu), permissions, services.</p>
      <p><strong>Réseaux :</strong> IP, routage, VLAN, VPN, DNS/DHCP, services réseau, sécurité.</p>
      <p><strong>Sécurité IT :</strong> Authentification, crypto, firewalls, politique sécurité, RGPD.</p>
      <p><strong>Virtualisation :</strong> Hyperviseurs (VMware, Hyper-V), architectures cloud.</p>
      ${Chip({ label: 'Systèmes' })} ${Chip({ label: 'Réseaux' })} ${Chip({ label: 'Sécurité' })}
    </div>
  </div>

  <div class="accordion" id="bts-skills">
    <button class="accordion-trigger" data-accordion="bts-skills">
      💡 Compétences visées
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p><strong>Bloc 1 - Administration infrastructure :</strong> Déploiement, configuration, maintenance systèmes/réseaux.</p>
      <p><strong>Bloc 2 - Assistance utilisateurs :</strong> Support, formation, gestion incidents.</p>
      <p><strong>Bloc 3 - Sécurité :</strong> Audit, hardening, conformité, plans d'action.</p>
      <p><strong>Bloc 4 - Automatisation :</strong> Scripts PowerShell/Bash, outils déploiement.</p>
      <p><strong>Bloc 5 - Communication :</strong> Documentation, rapports, présentation aux stakeholders.</p>
      ${Chip({ label: 'Administration' })} ${Chip({ label: 'Support' })} ${Chip({ label: 'Scripting' })}
    </div>
  </div>

</section>

<section class="page-content glass">
  <h2>📋 Évaluations et examens</h2>
  <p>Le BTS se valide par :</p>
  <div class="eval-grid">
    <div class="eval-card">
      <strong>📝 Épreuves écrites</strong>
      <p>Culture générale, anglais technique, économie.</p>
    </div>
    <div class="eval-card">
      <strong>🏢 Épreuve stage</strong>
      <p>Stage obligatoire 3-4 mois + rapport/soutenance.</p>
    </div>
    <div class="eval-card">
      <strong>💼 Projets professionnels</strong>
      <p>SLAM/SISR : projets approfondis par option.</p>
    </div>
    <div class="eval-card">
      <strong>🎤 Oraux/présentations</strong>
      <p>Soutenance stage, études de cas, questions jury.</p>
    </div>
  </div>
</section>

<section class="page-content glass">
  <h2>🚀 Débouchés professionnels</h2>
  <p><strong>Secteurs d'embauche :</strong></p>
  <ul>
    <li><strong>Sociétés de services IT (SSII/ESN) :</strong> Postes en régie client, support infra</li>
    <li><strong>Départements IT d'entreprises :</strong> Équipes infrastructure, support</li>
    <li><strong>Collectivités/secteur public :</strong> Administration réseaux municipales, académies</li>
    <li><strong>TPE/PME :</strong> Responsable IT unique, administrateur multi-domaines</li>
    <li><strong>Sous-traitants infra :</strong> Hébergeurs, cloud providers, data centers</li>
  </ul>
  <p><strong>Salaires indicatifs (France) :</strong></p>
  <ul>
    <li>Débutant : 22–25k€ annuel</li>
    <li>Confirmé (+3-5ans) : 28–35k€ annuel</li>
    <li>Avec certifs (CCNA, Security+, etc.) : +5-10k€</li>
  </ul>
</section>

<section class="page-content glass">
  <h2>🎯 Poursuite d'études</h2>
  <p>Après BTS, possibilités :</p>
  <ul>
    <li><strong>Licences professionnelles :</strong> Sécurité réseaux, Infrastructure cloud, Systèmes embarqués</li>
    <li><strong>Formations certifiantes :</strong> CCNA (Cisco), CompTIA Security+, Microsoft certifications</li>
    <li><strong>Écoles d'ingénieurs :</strong> Admission parallèle (sélectif)</li>
    <li><strong>Alternance senior :</strong> Contrats en apprentissage supérieur (licence+)</li>
    <li><strong>Entrée directe marché du travail :</strong> Gain expérience rapide</li>
  </ul>
</section>

<section class="page-cta glass">
  <h3>Découvrez mes épreuves d'examen</h3>
  <a href="/#/exams" class="btn btn-primary">Guide examen</a>
</section>
  `;
}
