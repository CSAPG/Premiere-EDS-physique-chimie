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

function iconSeq00(suffix) {
  return `
    <div style="display:inline-block;position:relative;width:48px;height:72px;">
      <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:44px;height:44px;border-radius:50%;background:radial-gradient(circle, rgba(250,199,117,0.55) 0%, transparent 70%);animation:bulb-glow-pulse-${suffix} 2.6s ease-in-out infinite;"></div>
      <svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;position:relative;">
        <style>
          .bulb-glass-${suffix}{fill:#f1f5f9;stroke:#cbd5e1;stroke-width:2;animation:bulb-glass-blink-${suffix} 2.6s ease-in-out infinite}
          @keyframes bulb-glass-blink-${suffix}{0%,100%{fill:#f1f5f9;stroke:#cbd5e1}50%{fill:#FFE9A8;stroke:#FAC775}}
          .bulb-filament-text-${suffix}{font-family:Arial,sans-serif;font-weight:700;font-size:8px;text-anchor:middle;fill:#cbd5e1;animation:bulb-filament-blink-${suffix} 2.6s ease-in-out infinite}
          @keyframes bulb-filament-blink-${suffix}{0%,100%{fill:#cbd5e1}50%{fill:#e8783a}}
          .bulb-rays-${suffix}{stroke:#FAC775;stroke-width:3;stroke-linecap:round;opacity:0;animation:bulb-rays-blink-${suffix} 2.6s ease-in-out infinite}
          @keyframes bulb-rays-blink-${suffix}{0%,35%,100%{opacity:0}50%{opacity:1}}
          @keyframes bulb-glow-pulse-${suffix}{0%,100%{opacity:.15;transform:translateX(-50%) scale(.85)}50%{opacity:1;transform:translateX(-50%) scale(1.15)}}
        </style>
        <g class="bulb-rays-${suffix}">
          <line x1="30" y1="2" x2="30" y2="8"/>
          <line x1="6" y1="10" x2="13" y2="16"/>
          <line x1="54" y1="10" x2="47" y2="16"/>
          <line x1="0" y1="32" x2="8" y2="32"/>
          <line x1="60" y1="32" x2="52" y2="32"/>
        </g>
        <ellipse class="bulb-glass-${suffix}" cx="30" cy="32" rx="19" ry="25"/>
        <text class="bulb-filament-text-${suffix}" x="30" y="35">eureka</text>
        <rect fill="#94a3b8" x="24" y="54" width="12" height="6"/>
        <rect fill="#64748b" x="23" y="60" width="14" height="4"/>
        <rect fill="#64748b" x="23" y="65" width="14" height="4"/>
        <rect fill="#475569" x="24" y="70" width="12" height="6" rx="2"/>
      </svg>
    </div>`;
}

const PRE_ICONS = {
  'seq00': iconSeq00,
  'seq01': iconLumiereCouleurs,
  'seq02': iconModelesOndulatoireParticulaire
};

function getIconPre(name, suffix) {
  const icon = PRE_ICONS[name];
  if (!icon) return '';
  return (typeof icon === 'function') ? icon(suffix || name) : icon;
}
