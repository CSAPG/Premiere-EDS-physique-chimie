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
      <a class="pre-resource-link" href="seq01/sequence01_premiere_lumiere_couleurs.html" target="_blank" style="margin-bottom:16px;">
        <div class="pre-res-icon">💻</div>
        <div>
          <p class="pre-res-label">Cours interactif</p>
          <p class="pre-res-sub">Version en ligne animée de la Séquence 01</p>
        </div>
        <div class="pre-res-cta">↗</div>
      </a>
      <a class="pre-resource-link" href="seq01/sequence01_cours.pdf" target="_blank" style="margin-bottom:16px;">
        <div class="pre-res-icon">📄</div>
        <div>
          <p class="pre-res-label">Cours en PDF</p>
          <p class="pre-res-sub">Version imprimable de la Séquence 01</p>
        </div>
        <div class="pre-res-cta">↓</div>
      </a>
    `;
  }

  const panel1 = document.getElementById('premiere-seq-1');
  if (panel1) {
    panel1.innerHTML = `
      <div class="pre-panel-header">
        <div class="pre-panel-icon">${getIconPre('modeles-ondulatoire-particulaire', 'panel1')}</div>
        <div>
          <p class="pre-panel-num">Séquence 02</p>
          <h2 class="pre-panel-title">Modèles ondulatoire et particulaire de la lumière</h2>
          <p class="pre-panel-sub">Cours interactif complet — Première Spécialité Physique-Chimie</p>
        </div>
      </div>
      <a class="pre-resource-link" href="seq02/sequence02_modeles_ondulatoire_particulaire.html" target="_blank" style="margin-bottom:16px;">
        <div class="pre-res-icon">💻</div>
        <div>
          <p class="pre-res-label">Cours interactif</p>
          <p class="pre-res-sub">Version en ligne animée de la Séquence 02</p>
        </div>
        <div class="pre-res-cta">↗</div>
      </a>
    `;
  }

});
