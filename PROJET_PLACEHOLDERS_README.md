# 🎯 Système de Placeholders Intelligents - Projets BTS SIO SISR

## 📊 Vue d'ensemble

Le portfolio contient maintenant **12 projets techniques** répartis intelligemment selon leur avancement :

- ✅ **4 projets complétés** avec livrables (documentation, rapports, GitHub)
- 🔄 **7 projets en cours** avec informations détaillées
- 📅 **1 projet planifié** pour février 2025

---

## 🗂️ Liste complète des projets

### ✅ Projets terminés (avec livrables)

1. **pfSense Firewall & Règles de filtrage**
   - Statut: Complété
   - Technologies: pfSense, VLAN, NAT, VPN IPsec, OpenVPN
   - Livrables: *(à configurer dans projects.ts si nécessaire)*

2. **Active Directory & GPO d'entreprise**
   - Statut: Complété
   - Technologies: Windows Server 2022, AD DS, GPO, DNS/DHCP, PowerShell
   - Livrables: *(à configurer dans projects.ts si nécessaire)*

3. **Virtualisation VMware ESXi & Proxmox VE** 🆕
   - Statut: ✅ Complété (Nov 2024)
   - Technologies: VMware ESXi, Proxmox VE, vCenter, KVM, ZFS, Ceph
   - Livrables:
     - 📄 Documentation complète: `/docs/virtualisation-esxi-proxmox.pdf`
     - 📄 Rapport comparatif: `/docs/rapport-comparaison-hyperviseurs.pdf`
     - 📸 Screenshots: `/docs/screens-virtualisation.zip`

4. **Durcissement de postes Windows 11** 🆕
   - Statut: ✅ Complété (Oct 2024)
   - Technologies: Windows 11, GPO, BitLocker, AppLocker, LAPS, PowerShell
   - Conformité: ANSSI + CIS Benchmarks
   - Livrables:
     - 📄 Documentation ANSSI: `/docs/durcissement-windows11-anssi.pdf`
     - 📄 Rapport sécurité: `/docs/rapport-securite-endpoints.pdf`
     - 🔗 Scripts GitHub: `https://github.com/username/windows-hardening-scripts`

---

### 🔄 Projets en cours (sans livrables - affichage intelligent)

5. **Linux Hardening SSH & Firewall**
   - Statut: 🔄 En cours
   - Badge: ⏳ En cours
   - Action: Bouton "📋 Voir détails" → Accordéon avec description complète

6. **GLPI Ticketing & Gestion de parc**
   - Statut: 🔄 En cours
   - Badge: ⏳ En cours
   - Action: Bouton "📋 Voir détails"

7. **Déploiement Windows 11 automatisé**
   - Statut: 🔄 En cours
   - Badge: ⏳ En cours
   - Action: Bouton "📋 Voir détails"

8. **Segmentation réseau VLAN inter-services**
   - Statut: 🔄 En cours
   - Badge: ⏳ En cours
   - Action: Bouton "📋 Voir détails"

9. **Stratégie Sauvegarde 3-2-1 & Restauration**
   - Statut: 🔄 En cours
   - Badge: ⏳ En cours
   - Action: Bouton "📋 Voir détails"

10. **Analyse réseau avec Wireshark** 🆕
    - Statut: 🔄 En cours
    - Technologies: Wireshark, TCPDump, Filtres BPF, TCP/IP
    - Badge: ⏳ En cours
    - Planification: "À compléter mi-janvier avec TP pratiques et cas réels"
    - Action: Bouton "📋 Voir détails"

11. **Supervision & Centralisation des logs** 🆕
    - Statut: 🔄 En cours
    - Technologies: Zabbix, Grafana, ELK Stack, Graylog, rsyslog
    - Badge: ⏳ En cours
    - Planification: "Installation Zabbix terminée, configuration ELK en cours"
    - Action: Bouton "📋 Voir détails"

---

### 📅 Projets planifiés (futurs)

12. **Sécurisation HTTPS & Certificats SSL/TLS** 🆕
    - Statut: 📅 Prévu (Fév 2025)
    - Technologies: OpenSSL, Let's Encrypt, Certbot, Windows PKI, Apache/Nginx
    - Badge: ⏳ Prévu
    - Planification: "Prévu pour février 2025 après TP infrastructures web"
    - Action: Bouton "📋 Voir détails"

---

## 🎨 Rendu intelligent selon statut

### ✅ Projet AVEC livrables

```html
<div class="project-actions">
  <a href="/docs/..." class="btn-livrable">📄 Documentation</a>
  <a href="/docs/..." class="btn-livrable">📄 Rapport</a>
  <a href="https://github.com/..." class="btn-livrable">🔗 GitHub</a>
</div>
```

**Design :**
- Boutons gradient violet (primary → secondary)
- Effet hover avec élévation
- Shadow colorée
- Icônes claires (📄 docs, 🔗 GitHub, 📸 screenshots)

---

### 🔄 Projet SANS livrables

```html
<div class="project-placeholder">
  <div class="placeholder-info">
    <span class="badge badge-warning">⏳ En cours</span>
    <p class="placeholder-text">Installation Zabbix terminée, configuration ELK en cours</p>
  </div>
  <button class="btn-details">📋 Voir détails</button>
</div>
<div id="details-xxx" class="project-details-accordion">
  <div class="details-content">
    <h4>📄 Description complète</h4>
    <p>...</p>
    <h4>🎯 Objectif</h4>
    <p>...</p>
    <h4>🔧 Technologies prévues</h4>
    <div class="tech-list">
      <span class="tech-badge">Zabbix</span>
      <span class="tech-badge">Grafana</span>
      ...
    </div>
  </div>
</div>
```

**Design :**
- Badge orange gradient (warning style)
- Texte italique avec info planification
- Bouton glass avec border
- Accordéon animé (max-height + opacity)
- Contenu riche avec sections structurées

---

## 🎨 Badges de statut

### ✅ Complété
- **Couleur :** Vert gradient `#10b981 → #059669`
- **Label :** "✅ Terminé"
- **Class :** `.status-completed`

### 🔄 En cours
- **Couleur :** Orange gradient `#f59e0b → #d97706`
- **Label :** "🔄 En cours"
- **Class :** `.status-ongoing`

### 📅 Prévu
- **Couleur :** Bleu gradient `#3b82f6 → #2563eb`
- **Label :** "📅 Prévu"
- **Class :** `.status-planned`

---

## 📂 Structure de données (TypeScript)

### Interface Project mise à jour

```typescript
export interface Project {
  id: string;
  title: string;
  category: string[];
  context: string;
  objective: string;
  description: string;
  tech: string[];
  competencesBTS?: string[];
  status: 'completed' | 'ongoing' | 'planned';
  links?: { label: string; url: string }[];
  date?: string;
  livrables?: {
    documentation?: string;
    rapport?: string;
    screenshots?: string;
    github?: string;
  };
  planification?: string; // Pour projets ongoing/planned
}
```

### Exemple projet AVEC livrables

```typescript
{
  id: 'vmware-proxmox',
  title: 'Virtualisation VMware ESXi & Proxmox VE',
  category: ['Virtualisation', 'Infrastructure'],
  status: 'completed',
  date: 'Novembre 2024',
  livrables: {
    documentation: '/docs/virtualisation-esxi-proxmox.pdf',
    rapport: '/docs/rapport-comparaison-hyperviseurs.pdf',
    screenshots: '/docs/screens-virtualisation.zip'
  }
}
```

### Exemple projet SANS livrables

```typescript
{
  id: 'wireshark-analysis',
  title: 'Analyse réseau avec Wireshark',
  category: ['Réseaux', 'Sécurité', 'Supervision'],
  status: 'ongoing',
  date: 'Janvier 2025',
  planification: 'À compléter mi-janvier avec TP pratiques et cas réels'
}
```

---

## 🎯 Fonctionnalités implémentées

### ✅ Système de livrables intelligents
- Détection automatique de `project.livrables`
- Boutons générés dynamiquement selon type (doc, rapport, GitHub, screenshots)
- Icônes contextuelles (📄 PDF, 🔗 GitHub, 📸 images)
- Liens externes avec `target="_blank"` et `rel="noopener"`

### ✅ Placeholders professionnels
- Badge de statut coloré selon état
- Texte de planification contextuel
- Bouton "Voir détails" qui ouvre accordéon
- Accordéon avec animation smooth (max-height + opacity)

### ✅ Accordéon de détails
- Sections structurées :
  - 📄 Description complète
  - 🎯 Objectif
  - 🔧 Technologies prévues (badges stylisés)
- Animation `fadeInUp` à l'ouverture
- Background subtil glass effect
- Typographie hiérarchisée

### ✅ Responsive design
- Grid adaptatif pour liste projets
- Boutons full-width sur mobile
- Accordéon optimisé tactile

---

## 🚀 Utilisation

### Ajouter un nouveau projet COMPLÉTÉ

```typescript
{
  id: 'nouveau-projet',
  title: 'Nouveau projet terminé',
  category: ['Catégorie'],
  status: 'completed',
  date: 'Décembre 2024',
  livrables: {
    documentation: '/docs/nouveau-projet.pdf',
    github: 'https://github.com/username/nouveau-projet'
  }
}
```

→ Affichera automatiquement 2 boutons "📄 Documentation" et "🔗 GitHub"

### Ajouter un nouveau projet EN COURS

```typescript
{
  id: 'nouveau-en-cours',
  title: 'Nouveau projet en cours',
  category: ['Catégorie'],
  status: 'ongoing',
  date: 'Janvier 2025',
  planification: 'À finaliser début février avec soutenance'
}
```

→ Affichera badge "🔄 En cours" + bouton "Voir détails" + accordéon

---

## 📝 Notes techniques

### CSS ajouté
- **280 lignes** de styles pour badges, boutons, accordéons
- Gradients pour badges de statut (vert/orange/bleu)
- Animations keyframes `fadeInUp`
- Transitions smooth (max-height, opacity, transform)
- Responsive queries mobile

### JavaScript
- Toggle class `.expanded` sur accordéon via `onclick`
- ID dynamique `details-${project.id}` pour ciblage unique
- Détection `hasLivrables` via `Object.keys(project.livrables).length`

### Performance
- Pas de bibliothèque externe nécessaire
- CSS pur sans JavaScript lourd
- Animations GPU-accelerated (transform + opacity)

---

## ✨ Résultat final

Le portfolio affiche maintenant **12 projets techniques réalistes** :
- Projets complétés → Livrables téléchargeables
- Projets en cours → Détails consultables + planification visible
- Projets prévus → Information transparente sur timeline

**🎓 Idéal pour valoriser une formation BTS SIO SISR complète !**
