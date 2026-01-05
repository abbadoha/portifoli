# 🧪 Guide de test - Système de placeholders intelligents

## 🎯 Objectif
Tester le nouveau système de projets avec livrables intelligents sur la page **Programme & Projets**.

---

## 📍 Accéder à la page

1. **Serveur déjà lancé** sur `http://localhost:5174`
2. Naviguer vers : **`http://localhost:5174/#/programme`**
3. Ou cliquer sur le lien **"Programme & Projets"** dans la navbar

---

## ✅ Points à vérifier

### 1️⃣ Badges de statut

Vérifier que les 12 projets affichent bien les badges colorés :

- ✅ **Vert** pour projets complétés (4 projets)
  - pfSense Firewall
  - Active Directory & GPO
  - Virtualisation VMware/Proxmox
  - Durcissement Windows 11

- 🔄 **Orange** pour projets en cours (7 projets)
  - Linux Hardening
  - GLPI Ticketing
  - Déploiement Windows 11
  - Segmentation VLAN
  - Sauvegarde 3-2-1
  - Analyse Wireshark
  - Supervision & Logs

- 📅 **Bleu** pour projet prévu (1 projet)
  - HTTPS & Certificats SSL/TLS

---

### 2️⃣ Projets AVEC livrables (2 nouveaux)

#### **Virtualisation VMware ESXi & Proxmox VE**
✅ **Doit afficher 3 boutons :**
- 📄 Documentation
- 📄 Rapport  
- 📄 Captures

👁️ **Visuellement :**
- Boutons gradient violet (primary → secondary)
- Shadow colorée
- Hover : élévation + shadow plus forte
- Alignés horizontalement (ou verticalement sur mobile)

#### **Durcissement de postes Windows 11**
✅ **Doit afficher 3 boutons :**
- 📄 Documentation
- 📄 Rapport
- 🔗 GitHub

---

### 3️⃣ Projets SANS livrables (nouveaux placeholders)

#### **Analyse réseau avec Wireshark**
✅ **Doit afficher :**
- Badge orange "⏳ 🔄 En cours"
- Texte italique : "À compléter mi-janvier avec TP pratiques et cas réels"
- Bouton "📋 Voir détails"

**Action : Cliquer sur "Voir détails"**
→ Un accordéon doit s'ouvrir avec animation smooth :
- Section **📄 Description complète** : texte sur analyse Wireshark
- Section **🎯 Objectif** : maîtriser l'analyse de trames
- Section **🔧 Technologies prévues** : badges Wireshark, TCPDump, Filtres BPF, etc.

#### **Supervision & Centralisation des logs**
✅ **Doit afficher :**
- Badge orange "⏳ 🔄 En cours"
- Texte italique : "Installation Zabbix terminée, configuration ELK en cours"
- Bouton "📋 Voir détails"

**Action : Cliquer sur "Voir détails"**
→ Accordéon avec détails sur Zabbix, Grafana, ELK Stack

#### **Sécurisation HTTPS & Certificats SSL/TLS**
✅ **Doit afficher :**
- Badge **bleu** "⏳ 📅 Prévu"
- Texte italique : "Prévu pour février 2025 après TP infrastructures web"
- Bouton "📋 Voir détails"

**Action : Cliquer sur "Voir détails"**
→ Accordéon avec détails sur OpenSSL, Let's Encrypt, PKI

---

### 4️⃣ Animations & Interactions

✅ **Hover sur boutons livrables :**
- Transform `translateY(-2px)` → élévation
- Shadow plus forte

✅ **Hover sur bouton "Voir détails" :**
- Background devient légèrement plus opaque
- Border devient violette (primary)
- Texte devient violet

✅ **Ouverture accordéon :**
- Animation smooth avec `max-height` qui s'agrandit
- `opacity` passe de 0 à 1
- Animation `fadeInUp` sur le contenu (translation verticale)

✅ **Badges technologies dans accordéon :**
- Background violet transparent
- Border violet
- Alignés en flex-wrap

---

### 5️⃣ Responsive (mobile)

**Tester sur mobile ou réduire la fenêtre < 768px :**

✅ **Boutons livrables :**
- Passent en `flex-direction: column`
- `width: 100%` → pleine largeur
- Centrés

✅ **Bouton "Voir détails" :**
- `width: 100%` → pleine largeur
- Centré

✅ **Grid projets :**
- Passe à 1 colonne sur mobile
- Cards empilées verticalement

---

## 🐛 Debugging si problème

### Accordéon ne s'ouvre pas
→ Vérifier dans la console : `document.getElementById('details-xxx')` existe bien

### Boutons livrables ne s'affichent pas
→ Vérifier dans `projects.ts` : le projet a bien un objet `livrables` avec au moins une clé

### Badges mal colorés
→ Vérifier dans `main.css` : les classes `.status-completed`, `.status-ongoing`, `.status-planned` sont bien définies

### Animation saccadée
→ Vérifier `prefers-reduced-motion` dans le navigateur (certains users désactivent les animations)

---

## 📊 Résultat attendu

### Vue d'ensemble
- **12 projets** affichés dans une grille responsive
- **4 projets** avec boutons de téléchargement (gradient violet)
- **8 projets** avec badge + bouton détails (glass style)
- Badges colorés selon statut (vert/orange/bleu)
- Accordéons s'ouvrent/ferment avec animations smooth

### UX/UI
- Design cohérent avec le reste du portfolio (glassmorphism)
- Hover states élégants
- Typographie claire et hiérarchisée
- Responsive fluide sur mobile

---

## ✨ Bonus : Accessibilité

✅ **Vérifier :**
- Boutons cliquables au clavier (Tab + Enter)
- Contraste texte/background suffisant (WCAG AA)
- Accordéons bien marqués sémantiquement
- Liens externes avec `rel="noopener"` pour sécurité

---

## 🎓 Conclusion

Le système de placeholders intelligents permet de :
1. ✅ **Valoriser les projets terminés** avec livrables téléchargeables
2. 🔄 **Montrer la progression** sur projets en cours avec détails consultables
3. 📅 **Être transparent** sur projets futurs avec planification visible
4. 🎨 **Garder une UX cohérente** quel que soit le statut du projet

**👉 Parfait pour un portfolio BTS SIO SISR professionnel !**
