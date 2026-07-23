/* ===== pre-panels.js — Panneaux des séquences Première EDS =====
   Boucle unique pour toutes les séquences (00 à 14) : titre via
   pre-titres.js, icône via pre-icons.js, liens vers seqXX/sequenceXX_cours.html
   et seqXX/sequenceXX_cours.pdf.
*/
document.addEventListener('DOMContentLoaded', () => {

  for (let n = 0; n <= 14; n++) {
    const num = n.toString().padStart(2, '0');
    const panel = document.getElementById('premiere-seq-' + n);
    if (!panel) continue;
    panel.innerHTML = `
      <div class="pre-panel-header">
        <div class="pre-panel-icon">${getIconPre('seq' + num, 'panel' + n)}</div>
        <div>
          <p class="pre-panel-num">Séquence ${num}</p>
          <h2 class="pre-panel-title">${PRE_TITRES[num] || ('Séquence ' + num)}</h2>
          <p class="pre-panel-sub">Cours interactif complet — Première Spécialité Physique-Chimie</p>
        </div>
      </div>
      <a class="pre-resource-link" href="seq${num}/sequence${num}_cours.html" target="_blank" style="margin-bottom:16px;">
        <div class="pre-res-icon">💻</div>
        <div>
          <p class="pre-res-label">Cours interactif</p>
          <p class="pre-res-sub">Version en ligne animée de la Séquence ${num}</p>
        </div>
        <div class="pre-res-cta">↗</div>
      </a>
      <a class="pre-resource-link" href="seq${num}/sequence${num}_cours.pdf" target="_blank" style="margin-bottom:16px;">
        <div class="pre-res-icon">📄</div>
        <div>
          <p class="pre-res-label">Cours en PDF</p>
          <p class="pre-res-sub">Version imprimable de la Séquence ${num}</p>
        </div>
        <div class="pre-res-cta">↓</div>
      </a>
    `;
  }

});
