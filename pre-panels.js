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
      <iframe class="pre-panel-frame"
        src="sequence01_premiere_lumiere_couleurs.html"
        title="Séquence 01 — La lumière : images et couleurs">
      </iframe>
    `;
  }

});
