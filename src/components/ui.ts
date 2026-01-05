// src/components/ui.ts
// Design system premium techno/glass, vanilla, HTML string + data-attributes

export function GlassPanel({ title = '', className = '', content = '' }) {
  return `<section class="glass ${className}">
    ${title ? `<h2 class="glass-title">${title}</h2>` : ''}
    <div class="glass-content">${content}</div>
  </section>`;
}

export function Button({ label, href = '', variant = 'primary', icon = '' }: { label: string; href?: string; variant?: string; icon?: string }) {
  const tag = href ? 'a' : 'button';
  const attrs = href ? `href="${href}"` : 'type="button"';
  return `<${tag} class="btn btn-${variant}" ${attrs} data-action="button" aria-label="${label}">
    ${icon ? `<span class="btn-icon">${icon}</span>` : ''}
    <span class="btn-label">${label}</span>
  </${tag}>`;
}

export function Chip({ label }: { label: string }) {
  return `<span class="chip">${label}</span>`;
}

export function Badge({ label }: { label: string }) {
  return `<span class="badge">${label}</span>`;
}

export function Tabs({ id, tabs }: { id: string; tabs: Array<{ key: string; label: string; content: string }> }) {
  const tabBtns = tabs.map((t: { key: string; label: string }, i: number) =>
    `<button class="tab-btn" data-tabs="${id}" data-tab-key="${t.key}" aria-selected="${i===0}">${t.label}</button>`
  ).join('');
  const tabPanels = tabs.map((t: { key: string; label: string; content: string }, i: number) =>
    `<div class="tab-panel" data-tab-panel="${id}" data-tab-key="${t.key}" style="display:${i===0?'block':'none'}">${t.content}</div>`
  ).join('');
  return `<div class="tabs" id="tabs-${id}">
    <div class="tab-list" role="tablist">${tabBtns}</div>
    ${tabPanels}
  </div>`;
}

export function Accordion({ id, items }: { id: string; items: Array<{ title: string; content: string }> }) {
  return `<div class="accordion" id="acc-${id}">
    ${items.map((item: { title: string; content: string }, i: number) =>
      `<div class="accordion-item">
        <button class="accordion-title" data-accordion="${id}" data-accordion-index="${i}" aria-expanded="false">${item.title}</button>
        <div class="accordion-panel" data-accordion-panel="${id}" data-accordion-index="${i}" style="display:none;">${item.content}</div>
      </div>`
    ).join('')}
  </div>`;
}

let toastTimeout: number | undefined;
export function showToast(msg: string) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.display = 'block';
  toast.classList.add('toast-visible');
  clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast!.classList.remove('toast-visible');
    setTimeout(() => { toast!.style.display = 'none'; }, 400);
  }, 1200);
}

export function copyToClipboard(text: string | null) {
  if (!text) return;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast('Copié !'));
  } else {
    // fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try { document.execCommand('copy'); showToast('Copié !'); } catch {}
    document.body.removeChild(textarea);
  }
}
