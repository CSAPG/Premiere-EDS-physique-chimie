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

function iconModelesOndulatoireParticulaire(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <defs>
        <linearGradient id="hiconGrad-${suffix}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#8b00ff"/>
          <stop offset="8%" stop-color="#4b00ff"/>
          <stop offset="16%" stop-color="#0022ff"/>
          <stop offset="24%" stop-color="#0080ff"/>
          <stop offset="32%" stop-color="#00c8e0"/>
          <stop offset="40%" stop-color="#00d89a"/>
          <stop offset="48%" stop-color="#23d020"/>
          <stop offset="56%" stop-color="#a0e000"/>
          <stop offset="64%" stop-color="#f5e000"/>
          <stop offset="72%" stop-color="#ffb000"/>
          <stop offset="80%" stop-color="#ff6a00"/>
          <stop offset="88%" stop-color="#ff2a00"/>
          <stop offset="96%" stop-color="#b00000"/>
          <stop offset="100%" stop-color="#5a0000"/>
        </linearGradient>
        <style>
          .hicon-lines-${suffix}{animation:hiconLinesFade-${suffix} 8s ease-in-out infinite}
          .hicon-label-cont-${suffix}{animation:hiconContFade-${suffix} 8s ease-in-out infinite}
          .hicon-label-abs-${suffix}{animation:hiconLinesFade-${suffix} 8s ease-in-out infinite}
          @keyframes hiconLinesFade-${suffix}{
            0%,30%{opacity:0} 42%,86%{opacity:1} 98%,100%{opacity:0}
          }
          @keyframes hiconContFade-${suffix}{
            0%,30%{opacity:1} 42%,86%{opacity:0} 98%,100%{opacity:1}
          }
        </style>
      </defs>
      <rect width="200" height="130" rx="10" fill="#101020"/>
      <rect x="14" y="46" width="172" height="38" rx="4" fill="url(#hiconGrad-${suffix})"/>
      <g class="hicon-lines-${suffix}">
        <rect x="31" y="46" width="3.4" height="38" fill="#0a0a0f" opacity=".9"/>
        <rect x="63" y="46" width="2" height="38" fill="#0a0a0f" opacity=".62"/>
        <rect x="82" y="46" width="2.4" height="38" fill="#0a0a0f" opacity=".78"/>
        <rect x="122" y="46" width="3.6" height="38" fill="#0a0a0f" opacity=".92"/>
        <rect x="161" y="46" width="2" height="38" fill="#0a0a0f" opacity=".58"/>
      </g>
      <text class="hicon-label-cont-${suffix}" x="100" y="104" font-family="Nunito, sans-serif" font-size="11" fill="#cfd6e6" text-anchor="middle">spectre continu</text>
      <text class="hicon-label-abs-${suffix}" x="100" y="104" font-family="Nunito, sans-serif" font-size="11" fill="#cfd6e6" text-anchor="middle">raies d'absorption</text>
    </svg>`;
}

const PRE_ICONS = {
  'lumiere-couleurs': iconLumiereCouleurs,
  'modeles-ondulatoire-particulaire': iconModelesOndulatoireParticulaire
};

function getIconPre(name, suffix) {
  const icon = PRE_ICONS[name];
  if (!icon) return '';
  return (typeof icon === 'function') ? icon(suffix || name) : icon;
}
