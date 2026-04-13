const fs = require('fs');
const path = require('path');
const replacements = [
  ['/fond.gif','/assets/img/fond.gif'],
  ['/fond2.gif','/assets/img/fond2.gif'],
  ['/network-map.png','/assets/img/network-map.png'],
  ['/shield.png','/assets/img/shield.png'],
  ['/server-rack.png','/assets/img/server-rack.png'],
  ['/datacenter.png','/assets/img/datacenter.png'],
  ['/cyber-lock.png','/assets/img/cyber-lock.png'],
  ['/cloud-infra.png','/assets/img/cloud-infra.png'],
  ['/security-monitor.png','/assets/img/security-monitor.png'],
  ['/network-diagram.png','/assets/img/network-diagram.png'],
  ['/pfsense.png','/assets/img/pfsense.png'],
  ['/server.png','/assets/img/server.png'],
  ['/winserv.png','/assets/img/winserv.png'],
  ['/cloud.png','/assets/img/cloud.png'],
  ['/linux.png','/assets/img/linux.png'],
  ['/firewall.png','/assets/img/firewall.png'],
  ['/glpi.png','/assets/img/glpi.png'],
  ['/network.png','/assets/img/network.png'],
  ['/proxmox.png','/assets/img/proxmox.png'],
  ['/avatar.jpg','/assets/img/avatar.jpg'],
  ['/assets/docs/CV.pdf','/assets/docs/ABBASSI_DOHA_CV.pdf'],
  ['/assets/img/ambient.gif','/assets/img/fond.gif']
];
const files = [
  'src/main.css',
  'src/pages/home.ts',
  'src/pages/profile.ts',
  'src/data/skills.ts',
  'src/pages/projects.ts',
  'src/pages/watch.ts',
  'src/style.css',
  'vite.config.ts'
];
for (const file of files) {
  const full = path.join(process.cwd(), file);
  if (!fs.existsSync(full)) {
    console.error('MISSING', file);
    continue;
  }
  let content = fs.readFileSync(full, 'utf8');
  const original = content;
  replacements.forEach(([from,to]) => {
    content = content.split(from).join(to);
  });
  if (content !== original) {
    fs.writeFileSync(full, content, 'utf8');
    console.log('Updated', file);
  }
}
