/* ===== pre-icons.js — Icônes des séquences Première EDS =====
   Chaque icône reprend l'illustration animée du header de la fiche
   de cours correspondante (même logique que ter-icons.js).
   Le paramètre "suffix" permet d'avoir plusieurs instances de la
   même icône sur une page sans collision d'animation CSS.
*/

function iconLumiereCouleurs(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <style>
        .hicon-scene-${suffix}{opacity:0;animation:hiconFade-${suffix} 8s ease-in-out infinite}
        .hicon-add-${suffix}{animation-delay:0s}
        .hicon-sub-${suffix}{animation-delay:4s}
        @keyframes hiconFade-${suffix}{
          0%{opacity:1} 45%{opacity:1} 50%{opacity:0} 95%{opacity:0} 100%{opacity:1}
        }
      </style>
      <g class="hicon-scene-${suffix} hicon-add-${suffix}">
        <rect width="200" height="130" rx="10" fill="#0a0a0f"/>
        <circle cx="82" cy="56" r="26" fill="#ff2626" style="mix-blend-mode:screen"/>
        <circle cx="118" cy="56" r="26" fill="#20e050" style="mix-blend-mode:screen"/>
        <circle cx="100" cy="82" r="26" fill="#2050ff" style="mix-blend-mode:screen"/>
      </g>
      <g class="hicon-scene-${suffix} hicon-sub-${suffix}">
        <rect width="200" height="130" rx="10" fill="#f2f2f2"/>
        <circle cx="82" cy="56" r="26" fill="#20c8d8" style="mix-blend-mode:multiply"/>
        <circle cx="118" cy="56" r="26" fill="#e030d0" style="mix-blend-mode:multiply"/>
        <circle cx="100" cy="82" r="26" fill="#f5e02a" style="mix-blend-mode:multiply"/>
      </g>
    </svg>`;
}

const PRE_ICONS = {
  'lumiere-couleurs': iconLumiereCouleurs
};

function getIconPre(name, suffix) {
  const icon = PRE_ICONS[name];
  if (!icon) return '';
  return (typeof icon === 'function') ? icon(suffix || name) : icon;
}
