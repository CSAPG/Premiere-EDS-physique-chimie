/* ===== navigation.js — Première EDS (version pastilles) ===== */

/* ── Afficher une séquence depuis la grille ── */
function showPremiereSeq(n, pushHistory = true) {
  document.getElementById('bloc-bienvenue').style.display = 'none';
  document.querySelectorAll('.pre-panel').forEach(p => p.classList.remove('active'));

  const panel = document.getElementById('premiere-seq-' + n);
  if (panel) panel.classList.add('active');

  document.getElementById('btn-retour').style.display = 'inline-block';

  if (pushHistory) {
    try { history.pushState({ seq: n }, '', '#seq-' + n); } catch (e) {}
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Retour à l'accueil ── */
function afficherAccueil() {
  document.getElementById('bloc-bienvenue').style.display = '';
  document.querySelectorAll('.pre-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('btn-retour').style.display = 'none';
}

/* ── Menu Ressources ── */
function toggleRessourcesMenu() {
  const dd = document.getElementById('res-dropdown');
  dd.style.display = (dd.style.display === 'none' || dd.style.display === '') ? 'block' : 'none';
}

/* ── Fermer les menus au clic extérieur ── */
document.addEventListener('click', function (e) {
  const resWrapper = document.getElementById('res-wrapper');
  if (resWrapper && !resWrapper.contains(e.target)) {
    const dd = document.getElementById('res-dropdown');
    if (dd) dd.style.display = 'none';
  }
});

/* ── Historique navigateur ── */
window.addEventListener('popstate', function (e) {
  if (e.state && e.state.seq) {
    showPremiereSeq(e.state.seq, false);
  } else {
    afficherAccueil();
  }
});

try { history.replaceState({ accueil: true }, '', window.location.pathname); } catch (e) {}
