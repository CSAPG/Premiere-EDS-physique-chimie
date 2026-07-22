/* ===== pre-panels.js — Contenu des panneaux séquences Première EDS ===== */
document.addEventListener('DOMContentLoaded', () => {

  const panel0 = document.getElementById('premiere-seq-0');
  if (panel0) {
    panel0.innerHTML = `
      <div class="pre-panel-header">
        <div class="pre-panel-icon">${getIconPre('lumiere-couleurs', 'panel0')}</div>
        <div>
          <p class="pre-panel-num">Séquence 01</p>
          <h2 class="pre-panel-title">La lumière : images et couleurs</h2>
          <p class="pre-panel-sub">Cours interactif complet — Première Spécialité Physique-Chimie</p>
        </div>
      </div>
      <a class="pre-resource-link" href="seq01/sequence01_cours.pdf" target="_blank" style="margin-bottom:16px;">
        <div class="pre-res-icon">📄</div>
        <div>
          <p class="pre-res-label">Cours en PDF</p>
          <p class="pre-res-sub">Version imprimable de la Séquence 01</p>
        </div>
        <div class="pre-res-cta">↓</div>
      </a>
      <iframe class="pre-panel-frame"
        src="seq01/sequence01_premiere_lumiere_couleurs.html"
        title="Séquence 01 — La lumière : images et couleurs">
      </iframe>
    `;
  }

});
