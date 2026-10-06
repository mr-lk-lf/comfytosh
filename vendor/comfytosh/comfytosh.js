/* Comfytosh — utilidades de interfaz y objetos 3D (three.js r128+, se pasa como argumento). */
(function () {
  'use strict';

  var PRIMS = {
    'case-linen': '#ece7de', 'case-bone': '#e3dac9', 'case-silver': '#c7c4bf', 'case-graphite': '#333333',
    'crt-carbon': '#222623', 'crt-gunmetal': '#282e2b', 'crt-charcoal': '#343b37', 'crt-iron': '#3c4641',
    'crt-ebony': '#555d50', 'crt-olive': '#7e8f85', 'crt-ash': '#bac1b8', 'crt-mint': '#d6e8c8',
    'phosphor-celadon': '#7cd3a2', 'phosphor-soft': '#a9dfbf', 'phosphor-aqua': '#9bf5c5', 'phosphor-lime': '#c5f899',
    'amber-custard': '#e8d595', 'amber-bronze': '#e59f71', 'amber-taupe': '#8a716a',
    'signal-tangerine': '#ff773d', 'signal-scarlet': '#df2935', 'signal-grapefruit': '#ff6b6b'
  };
  /* Iconos: Octicons de GitHub (MIT), versión de 16px. Solo van los pocos que usan los componentes y las vitrinas del sistema; el resto se copia de Octicons. */
  var ICONS = {"check-circle": "<path d=\"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m1.5 0a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0m10.28-1.72-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 .018-1.042.75.75 0 0 1 1.042-.018l1.47 1.47 3.97-3.97a.75.75 0 0 1 1.042.018.75.75 0 0 1 .018 1.042\"/>", "alert": "<path d=\"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0M9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0\"/>", "x-circle": "<path d=\"M2.344 2.343za8 8 0 0 1 11.314 11.314A8.002 8.002 0 0 1 .234 10.089a8 8 0 0 1 2.11-7.746m1.06 10.253a6.5 6.5 0 1 0 9.108-9.275 6.5 6.5 0 0 0-9.108 9.275M6.03 4.97 8 6.94l1.97-1.97a.749.749 0 0 1 1.275.326.75.75 0 0 1-.215.734L9.06 8l1.97 1.97a.749.749 0 0 1-.326 1.275.75.75 0 0 1-.734-.215L8 9.06l-1.97 1.97a.749.749 0 0 1-1.275-.326.75.75 0 0 1 .215-.734L6.94 8 4.97 6.03a.75.75 0 0 1 .018-1.042.75.75 0 0 1 1.042-.018\"/>", "info": "<path d=\"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75M8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2\"/>", "file": "<path d=\"M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914z\"/>", "clock": "<path d=\"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0m7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.75.75 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0\"/>", "star": "<path d=\"M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25m0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41z\"/>", "plus": "<path d=\"M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2\"/>", "play": "<path d=\"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0m4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215\"/>", "file-directory": "<path d=\"M0 2.75C0 1.784.784 1 1.75 1H5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1h6.75c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H7.5c-.55 0-1.07-.26-1.4-.7l-.9-1.2a.25.25 0 0 0-.2-.1Z\"/>", "gear": "<path d=\"M8 0a8 8 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224q.347.171.668.386c.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63q.406.578.704 1.218c.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294q.024.386 0 .772c-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a8 8 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a6 6 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8 8 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a6 6 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8 8 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6 6 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a8 8 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071q.321-.215.668-.386c.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03Q7.646 0 8 0m-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189q-.26.13-.5.29c-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045q-.33.47-.573.99c-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a5 5 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19q.243.52.573.989c.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27q.242.16.501.29c.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189q.26-.13.5-.29c.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045q.33-.47.573-.99c.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a5 5 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.5 6.5 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.4 4.4 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8\"/>", "heart": "<path d=\"m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7 7 0 0 1-.31-.17 22 22 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22 22 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.6 20.6 0 0 0 8 13.393a20.6 20.6 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5\"/>", "unmute": "<path d=\"M7.563 2.069A.75.75 0 0 1 8 2.75v10.5a.751.751 0 0 1-1.238.57L3.472 11H1.75A1.75 1.75 0 0 1 0 9.25v-2.5C0 5.784.784 5 1.75 5h1.723l3.289-2.82a.75.75 0 0 1 .801-.111M6.5 4.38 4.238 6.319a.75.75 0 0 1-.488.181h-2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2c.179 0 .352.064.488.18L6.5 11.62Zm6.096-2.038a.75.75 0 0 1 1.06 0 8 8 0 0 1 0 11.314.75.75 0 0 1-1.042-.018.75.75 0 0 1-.018-1.042 6.5 6.5 0 0 0 0-9.193.75.75 0 0 1 0-1.06Zm-1.06 2.121-.001.001a5 5 0 0 1 0 7.07.749.749 0 0 1-1.275-.326.75.75 0 0 1 .215-.734 3.5 3.5 0 0 0 0-4.95.75.75 0 1 1 1.061-1.061\"/>", "search": "<path d=\"M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.75.75 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7\"/>", "trash": "<path d=\"M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75M4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.75 1.75 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15M6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25\"/>", "plug": "<path d=\"M4 8H2.5a1 1 0 0 0-1 1v5.25a.75.75 0 0 1-1.5 0V9a2.5 2.5 0 0 1 2.5-2.5H4V5.133a1.75 1.75 0 0 1 1.533-1.737l2.831-.353.76-.913c.332-.4.825-.63 1.344-.63h.782c.966 0 1.75.784 1.75 1.75V4h2.25a.75.75 0 0 1 0 1.5H13v4h2.25a.75.75 0 0 1 0 1.5H13v.75a1.75 1.75 0 0 1-1.75 1.75h-.782c-.519 0-1.012-.23-1.344-.63l-.761-.912-2.83-.354A1.75 1.75 0 0 1 4 9.867Zm6.276-4.91-.95 1.14a.75.75 0 0 1-.483.265l-3.124.39a.25.25 0 0 0-.219.248v4.734c0 .126.094.233.219.249l3.124.39a.75.75 0 0 1 .483.264l.95 1.14a.25.25 0 0 0 .192.09h.782a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-.782a.25.25 0 0 0-.192.09\"/>", "arrow-right": "<path d=\"M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.042-.018.75.75 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06\"/>"};

  function cssVar(name) {
    try { return getComputedStyle(document.documentElement).getPropertyValue('--' + name).trim(); } catch (e) { return ''; }
  }
  /* Un nombre de token primitivo ('case-bone') o un hex. */
  function color(v) {
    if (!v) return '#ffffff';
    if (v.charAt(0) === '#') return v;
    var c = cssVar(v);
    if (c && c.charAt(0) === '#') return c;
    var al = c && /^var\(--([A-Za-z0-9_.-]+)\)$/.exec(c); if (al) return color(al[1]);
    return PRIMS[v] || '#ffffff';
  }
  function num(name, fallback) { var n = parseFloat(cssVar(name)); return isNaN(n) ? fallback : n; }
  function reduced() { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function theme() { return document.documentElement.getAttribute('data-theme') || 'pantalla'; }

  function icon(name, size) {
    var p = ICONS[name]; if (!p) return '';
    var n = size || 16;
    return '<svg class="ct-icon" width="' + n + '" height="' + n + '" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">' + p + '</svg>';
  }

  /* Perilla: cualquier .ct-knob con un input range dentro actualiza --v (0–1). */
  function syncKnob(input) {
    var k = input.closest ? input.closest('.ct-knob') : null; if (!k) return;
    var min = parseFloat(input.min || 0), max = parseFloat(input.max || 100);
    k.style.setProperty('--v', String((parseFloat(input.value) - min) / (max - min)));
    var out = k.querySelector('.ct-knob__value'); if (out) out.textContent = input.value;
  }
  document.addEventListener('input', function (e) {
    if (e.target && e.target.classList && e.target.classList.contains('ct-knob__input')) syncKnob(e.target);
  });
  /* Casillas de texto: al marcar, la x se «escribe» con un destello corto (CSS .is-typing). */
  document.addEventListener('change', function (e) {
    var i = e.target;
    if (!i || !i.matches || !i.matches('.ct-check input') || reduced()) return;
    i.classList.add('is-typing'); setTimeout(function () { i.classList.remove('is-typing'); }, 280);
  });

  /* ── Utilidades ── */
  function spring(k, c) {
    return { x: 0, v: 0, target: 0, k: k || 380, c: c || 20,
      step: function (dt) { var a = -this.k * (this.x - this.target) - this.c * this.v; this.v += a * dt; this.x += this.v * dt; return this.x; } };
  }
  function roundRectPath(ctx, x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  /* ── Bots: avatares 2D con volumen horneado ─────────────────
     Cada bot es una forma vectorial inflada como un cojín de plástico
     (mapa de alturas desde la distancia al borde, normales e iluminación
     por píxel, horneado una vez) y una cara que se dibuja en cada frame. */

  var BOT_TYPES = {
    tecla:    { color: 'case-bone',         fy: 54 },
    monitor:  { color: 'case-linen',        fy: 46, face: 'pantalla', antenna: true },
    disquete: { color: 'phosphor-celadon',  fy: 62, decal: 'shutter' },
    guijarro: { color: 'crt-ash',           fy: 54 },
    pastilla: { color: 'phosphor-soft',     fy: 50 },
    nube:     { color: 'crt-mint',          fy: 62 },
    trebol:   { color: 'phosphor-lime',     fy: 52 },
    flor:     { color: 'amber-custard',     fy: 52 },
    estrella: { color: 'phosphor-aqua',      fy: 56 },
    fantasma: { color: 'case-silver',       fy: 48 },
    gota:     { color: 'phosphor-aqua',     fy: 62 },
    hexagono: { color: 'amber-bronze',      fy: 52 },
    gato:     { color: 'amber-taupe',       fy: 60 },
    blob:     { color: 'signal-grapefruit', fy: 52 }
  };
  var STATE_ALIAS = { 'default': 'reposo', reposo: 'reposo', working: 'trabajando', trabajando: 'trabajando', sleeping: 'durmiendo', durmiendo: 'durmiendo' };
  var STATE_LABEL = { reposo: 'en reposo', trabajando: 'trabajando', durmiendo: 'durmiendo' };

  function P2(d) { return new Path2D(d); }
  function circ(x, y, r) { var p = new Path2D(); p.arc(x, y, r, 0, Math.PI * 2); return p; }
  function rrect(x, y, w, h, r) {
    var p = new Path2D(); p.moveTo(x + r, y); p.arcTo(x + w, y, x + w, y + h, r); p.arcTo(x + w, y + h, x, y + h, r);
    p.arcTo(x, y + h, x, y, r); p.arcTo(x, y, x + w, y, r); p.closePath(); return p;
  }
  function polar(fn, cx, cy, n) {
    var p = new Path2D(); n = n || 220; cx = cx == null ? 50 : cx; cy = cy == null ? 50 : cy;
    for (var i = 0; i <= n; i++) {
      var th = -Math.PI / 2 + (i / n) * Math.PI * 2, r = fn(th);
      if (i) p.lineTo(cx + r * Math.cos(th), cy + r * Math.sin(th)); else p.moveTo(cx + r * Math.cos(th), cy + r * Math.sin(th));
    }
    p.closePath(); return p;
  }
  function superellipse(a, b, n) {
    return function (th) { var c = Math.abs(Math.cos(th)) / a, s = Math.abs(Math.sin(th)) / b; return 1 / Math.pow(Math.pow(c, n) + Math.pow(s, n), 1 / n); };
  }
  function rpoly(pts, r) {
    var p = new Path2D(), n = pts.length;
    var m0 = [(pts[n - 1][0] + pts[0][0]) / 2, (pts[n - 1][1] + pts[0][1]) / 2];
    p.moveTo(m0[0], m0[1]);
    for (var i = 0; i < n; i++) { var a = pts[i], b = pts[(i + 1) % n]; p.arcTo(a[0], a[1], (a[0] + b[0]) / 2, (a[1] + b[1]) / 2, r); }
    p.closePath(); return p;
  }
  function botShapes(type) {
    var PI = Math.PI;
    switch (type) {
      case 'monitor': return [rrect(10, 12, 80, 68, 20), rpoly([[38, 76], [62, 76], [66, 90], [34, 90]], 4), rrect(26, 86, 48, 8, 4)];
      case 'disquete': return [rpoly([[12, 12], [76, 12], [88, 24], [88, 88], [12, 88]], 9)];
      case 'guijarro': return [polar(function (t) { return 40 + 3.5 * Math.cos(2 * t + 0.6) + 2.2 * Math.sin(3 * t + 1.2) + 1.2 * Math.cos(5 * t); })];
      case 'pastilla': return [rrect(6, 26, 88, 48, 24)];
      case 'nube': return [circ(30, 60, 22), circ(52, 44, 27), circ(73, 58, 20), circ(50, 64, 24), rrect(12, 58, 76, 28, 14)];
      case 'trebol': return [circ(50, 29, 21), circ(29, 50, 21), circ(71, 50, 21), circ(50, 71, 21), circ(50, 50, 22)];
      case 'flor': return [polar(function (t) { return 33 + 11 * Math.pow(0.5 + 0.5 * Math.cos(6 * t), 1.3); })];
      case 'estrella': return [polar(function (t) { return 28 + 19 * Math.pow(0.5 + 0.5 * Math.cos(5 * (t + PI / 2)), 1.7); }, 50, 53)];
      case 'fantasma': return [P2('M14 50 A36 36 0 0 1 86 50 L86 86 Q77 98 68 88 Q59 98 50 88 Q41 98 32 88 Q23 98 14 86 Z')];
      case 'gota': return [P2('M50 7 C62 24 84 40 84 62 A34 34 0 0 1 16 62 C16 40 38 24 50 7 Z')];
      case 'hexagono': var h = []; for (var i = 0; i < 6; i++) { var a = i * PI / 3; h.push([50 + 45 * Math.cos(a), 50 + 45 * Math.sin(a)]); } return [rpoly(h, 11)];
      case 'gato': return [polar(superellipse(42, 35, 3), 50, 58), rpoly([[13, 46], [20, 10], [46, 28]], 6), rpoly([[87, 46], [80, 10], [54, 28]], 6)];
      case 'blob': return [polar(function (t) { return 38 + 4.5 * Math.sin(3 * t + 1) + 2.5 * Math.cos(5 * t + 0.3) + 1.5 * Math.sin(2 * t); })];
      default: return [polar(superellipse(44, 42, 4.6))];
    }
  }

  function hexRgb(h) { h = h.replace('#', ''); if (h.length === 3) h = h.replace(/./g, '$&$&'); return [parseInt(h.slice(0, 2), 16) / 255, parseInt(h.slice(2, 4), 16) / 255, parseInt(h.slice(4, 6), 16) / 255]; }
  function rgbHex(c) { return '#' + c.map(function (v) { return ('0' + Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16)).slice(-2); }).join(''); }
  function rgbHsl(c) {
    var r = c[0], g = c[1], b = c[2], mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, h = 0, s = 0, d = mx - mn;
    if (d) { s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h /= 6; }
    return [h, s, l];
  }
  function hslRgb(h, s, l) {
    function f(n) { var k = (n + h * 12) % 12, a = s * Math.min(l, 1 - l); return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)); }
    return [f(0), f(8), f(4)];
  }
  function adjust(hex, bright, sat) {
    var hsl = rgbHsl(hexRgb(hex));
    return hslRgb(hsl[0], Math.min(1, hsl[1] * (sat == null ? 1 : sat)), Math.max(0, Math.min(1, hsl[2] * (bright == null ? 1 : bright))));
  }
  function lum(c) { return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }
  function relLum(c) { var f = function (v) { return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]); }
  function contrast(a, b) { var x = relLum(a), y = relLum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
  function shade(c, k) { return rgbHex(c.map(function (v) { return v * k; })); }

  /* Hornea el cuerpo: máscara → distancia al borde → altura de cojín → normales → luz. */
  function bakeBot(shapes, base, o, px) {
    var pad = 6, N = Math.max(32, Math.round((100 + 2 * pad) * px / 100)), u = 100 / px;
    var mc = document.createElement('canvas'); mc.width = mc.height = N;
    var m = mc.getContext('2d'); m.setTransform(px / 100, 0, 0, px / 100, pad * px / 100, pad * px / 100); m.fillStyle = '#fff';
    shapes.forEach(function (s) { m.fill(s); });
    if (shapes.cut) { m.globalCompositeOperation = 'destination-out'; shapes.cut.forEach(function (s) { m.fill(s); }); m.globalCompositeOperation = 'source-over'; }
    var A = m.getImageData(0, 0, N, N).data, n = N * N, D = new Float32Array(n), i, x, y;
    for (i = 0; i < n; i++) D[i] = A[i * 4 + 3] > 127 ? 1e9 : 0;
    /* Distancia euclídea exacta (Felzenszwalb–Huttenlocher), sin bandas. */
    var INF = 1e20, f = new Float64Array(N), dd = new Float64Array(N), vv = new Int32Array(N), zz = new Float64Array(N + 1);
    function edt1(get, put) {
      for (var q = 0; q < N; q++) f[q] = get(q);
      var kk = 0; vv[0] = 0; zz[0] = -INF; zz[1] = INF;
      for (q = 1; q < N; q++) {
        var s0 = ((f[q] + q * q) - (f[vv[kk]] + vv[kk] * vv[kk])) / (2 * q - 2 * vv[kk]);
        while (s0 <= zz[kk]) { kk--; s0 = ((f[q] + q * q) - (f[vv[kk]] + vv[kk] * vv[kk])) / (2 * q - 2 * vv[kk]); }
        kk++; vv[kk] = q; zz[kk] = s0; zz[kk + 1] = INF;
      }
      kk = 0;
      for (q = 0; q < N; q++) { while (zz[kk + 1] < q) kk++; dd[q] = (q - vv[kk]) * (q - vv[kk]) + f[vv[kk]]; }
      for (q = 0; q < N; q++) put(q, dd[q]);
    }
    for (i = 0; i < n; i++) D[i] = D[i] ? INF : 0;
    for (x = 0; x < N; x++) edt1(function (q) { return D[q * N + x]; }, function (q, v) { D[q * N + x] = v; });
    for (y = 0; y < N; y++) edt1(function (q) { return D[y * N + q]; }, function (q, v) { D[y * N + q] = v; });
    for (i = 0; i < n; i++) D[i] = Math.sqrt(D[i]);
    /* Plano: relleno de un solo color; en tono fósforo, contorno brillante y relleno tenue. */
    var out = m.createImageData(N, N), O = out.data, fos = o.tone === 'fosforo', lw = 2.8, cc = hexRgb(fos ? color('phosphor-celadon') : rgbHex(base));
    for (i = 0; i < n; i++) {
      var a = A[i * 4 + 3]; if (!a) continue;
      var j = i * 4, al = a;
      if (fos) { var dd = D[i] * u, edge = clamp01((lw - dd) / (0.9 * u) + 0.5); al = a * (0.16 + 0.84 * edge); }
      O[j] = cc[0] * 255; O[j + 1] = cc[1] * 255; O[j + 2] = cc[2] * 255; O[j + 3] = al;
    }
    m.setTransform(1, 0, 0, 1, 0, 0); m.clearRect(0, 0, N, N); m.putImageData(out, 0, 0);
    var top = 100, bottom = 0, row = Math.round((pad + (o.fy || 52)) * px / 100), left = 100, right = 0;
    for (y = 0; y < N; y++) for (x = 0; x < N; x++) if (A[(y * N + x) * 4 + 3] > 127) { var yy = y * u - pad; if (yy < top) top = yy; if (yy > bottom) bottom = yy; }
    for (x = 0; x < N; x++) if (A[(row * N + x) * 4 + 3] > 127) { var xx = x * u - pad; if (xx < left) left = xx; if (xx > right) right = xx; }
    return { img: mc, pad: pad, top: top, bottom: bottom, left: left, right: right };
  }

  var BOTS = [], loopOn = false, pointer = null;
  function easeOutCubic(p) { return 1 - Math.pow(1 - p, 3); }
  function easeInOut(p) { return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }
  function easeOutBack(p) { var c = 1.7; return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2); }

  function jumpPose(j, t) {
    var tau = t - j.t0, c = j.crouch, a = j.air, s = 0.5, q;
    if (tau < c) { q = easeOutCubic(tau / c) * 0.13 * j.squash; return { y: 0, sx: 1 + q * 0.7, sy: 1 - q, spin: 0, lean: 0, air: 0 }; }
    if (tau < c + a) {
      var p = (tau - c) / a, st = 0.09 * j.stretch * (1 - 4 * p * (1 - p));
      return { y: -j.h * 4 * p * (1 - p), sx: 1 - st * 0.6, sy: 1 + st, spin: j.spin * Math.PI * 2 * easeInOut(p), lean: j.lean * Math.sin(Math.PI * p), air: 4 * p * (1 - p) };
    }
    if (tau < c + a + s) {
      var pp = (tau - c - a) / s, bump = pp < 0.28 ? easeOutCubic(pp / 0.28) : 1 - easeOutBack((pp - 0.28) / 0.72);
      q = 0.17 * j.squash * bump; return { y: 0, sx: 1 + q * 0.7, sy: 1 - q, spin: 0, lean: 0, air: 0 };
    }
    return null;
  }

  function bot(el, opts) {
    if (!el) return null;
    var o = {}, k;
    var api = { el: el, set: set, hop: hop, destroy: destroy };
    var cv = document.createElement('canvas'); cv.className = 'ct-bot__canvas'; cv.setAttribute('aria-hidden', 'true');
    el.classList.add('ct-bot'); el.setAttribute('role', 'img'); el.appendChild(cv);
    var ctx = cv.getContext('2d'), baked = null, shapes = null, visible = true, seed = Math.random();
    var S = { lx: 0, ly: 0, tlx: 0, tly: 0, nextLook: 0, blink: 0, nextBlink: 2, yaw: 0, sleep: 0, jump: null, nextJump: 0, laughUntil: 0, hops: 0, last: 0 };

    function cfg() { return BOT_TYPES[o.type] || BOT_TYPES.tecla; }
    function stateName() { return STATE_ALIAS[o.state] || 'reposo'; }
    function rebuild() {
      var c = cfg(), size = o.size || 64, dpr = Math.min(2, window.devicePixelRatio || 1);
      el.style.width = el.style.height = size + 'px';
      cv.width = Math.round(size * 1.4 * dpr); cv.height = Math.round(size * 1.85 * dpr);
      shapes = o.path ? [new Path2D(o.path)] : botShapes(o.type);
      var base = adjust(color(o.color || c.color), o.brightness, o.saturation);
      o._base = base;
      base = hexRgb(color('phosphor-celadon')); o._fos = true;
      o._base = base;
      o._ink = o._fos ? color('phosphor-celadon') : o.ink ? color(o.ink) : (contrast(base, hexRgb(color('crt-carbon'))) >= contrast(base, hexRgb(color('case-linen'))) ? color('crt-carbon') : color('case-linen'));
      baked = bakeBot(shapes, base, { tone: 'fosforo', fy: c.fy }, Math.min(520, size * dpr * 1.6));
      label();
    }
    function label() { el.setAttribute('aria-label', (o.label || cfg().label || ('Bot ' + (o.type || 'tecla'))) + ', ' + STATE_LABEL[stateName()]); }
    function set(n) {
      var old = JSON.stringify([o.type, o.path, o.color, o.brightness, o.saturation, o.size, o.tone, o.ink]);
      for (k in n) o[k] = n[k];
      if (o.seed != null) seed = o.seed;
      var now = JSON.stringify([o.type, o.path, o.color, o.brightness, o.saturation, o.size, o.tone, o.ink]);
      if (!baked || old !== now) rebuild(); else label();
      draw(performance.now() / 1000);
      return api;
    }
    function hop(spin) {
      var t = performance.now() / 1000;
      S.jump = { t0: t, h: o.jumpHeight || 24, spin: spin == null ? 1 : spin, crouch: 0.11, air: o.jumpTime || 0.62, squash: 1.15, stretch: 1, lean: (Math.random() < 0.5 ? -1 : 1) * 0.1 };
      S.laughUntil = t + 1.1;
      start();
    }
    function destroy() { BOTS.splice(BOTS.indexOf(api), 1); cv.remove(); el.classList.remove('ct-bot'); }

    function themeDark() { var h = el.closest('[data-theme]'); var th = h ? h.getAttribute('data-theme') : document.documentElement.getAttribute('data-theme'); return th !== 'carcasa' && th !== 'light'; }

    function update(t, dt) {
      var st = stateName(), sp = o.speed || 1, still = reduced() || o.paused;
      S.sleep += ((st === 'durmiendo' ? 1 : 0) - S.sleep) * Math.min(1, dt * 3);
      if (still) return;
      var look = null;
      if (pointer && o.interactive !== false && st !== 'durmiendo') {
        var r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        var dx = (pointer.x - cx) / (r.width * 3), dy = (pointer.y - cy) / (r.height * 3), d = Math.hypot(dx, dy);
        if (d < 1.4) look = [Math.max(-1, Math.min(1, dx * 1.6)), Math.max(-1, Math.min(1, dy * 1.6))];
      }
      if (look) { S.tlx = look[0]; S.tly = look[1]; }
      else if (t > S.nextLook) {
        if (st === 'durmiendo') { S.tlx = 0; S.tly = 0.7; }
        else if (st === 'trabajando') { S.tlx = (Math.random() - 0.5) * 1.2; S.tly = 0.3 + Math.random() * 0.4; }
        else { S.tlx = Math.random() < 0.3 ? 0 : (Math.random() * 2 - 1); S.tly = (Math.random() - 0.5) * 1.1; }
        S.nextLook = t + (st === 'trabajando' ? 0.5 + Math.random() * 0.7 : 1.2 + Math.random() * 2.2) / sp;
      }
      var f = Math.min(1, dt * (look ? 10 : 6) * sp);
      S.lx += (S.tlx - S.lx) * f; S.ly += (S.tly - S.ly) * f;
      S.yaw += (S.lx * (o.turn == null ? 1 : o.turn) - S.yaw) * Math.min(1, dt * 4 * sp);
      if (st !== 'durmiendo' && t > S.nextBlink) { S.blinkT = t; S.nextBlink = t + (2.4 + Math.random() * 3) / sp; }
      S.blink = S.blinkT && t - S.blinkT < 0.14 ? Math.sin(Math.PI * (t - S.blinkT) / 0.14) : 0;
      if (!S.jump && st !== 'durmiendo' && t > S.nextJump) {
        if (st === 'trabajando') {
          S.hops++; var big = S.hops % 5 === 0;
          S.jump = { t0: t, h: big ? (o.jumpHeight || 24) : 9, spin: big ? 1 : 0, crouch: 0.09, air: big ? 0.62 : 0.32, squash: big ? 1.15 : 0.7, stretch: 1, lean: 0 };
          if (big) S.laughUntil = t + 1.3;
          S.nextJump = t + (big ? 1.2 : 0.55 + Math.random() * 0.2) / sp;
        } else {
          var every = o.jumpEvery == null ? 8 : o.jumpEvery;
          if (every > 0 && S.nextJump) { S.hops++; S.jump = { t0: t, h: o.jumpHeight || 24, spin: S.hops % 2 ? 0 : 1, crouch: 0.12, air: o.jumpTime || 0.62, squash: 1.15, stretch: 1, lean: 0.08 }; }
          S.nextJump = t + (every > 0 ? every * (0.75 + seed * 0.5) : 1e9) / sp;
        }
      }
    }

    function draw(t) {
      if (!baked) return;
      var c = cfg(), size = o.size || 64, dpr = cv.width / (size * 1.4), K = size * dpr / 100, st = stateName(), still = reduced() || o.paused;
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.setTransform(K, 0, 0, K, 20 * K, 60 * K);
      var j = S.jump ? jumpPose(S.jump, t) : null; if (S.jump && !j) S.jump = null;
      j = j || { y: 0, sx: 1, sy: 1, spin: 0, lean: 0, air: 0 };
      var breath = still ? 0 : Math.sin(t * Math.PI * 2 / (S.sleep > 0.5 ? 3.4 : 2.8) + seed * 6) * (0.008 + 0.018 * S.sleep);
      var sx = j.sx * (1 - breath * 0.5), sy = j.sy * (1 + breath), cosS = Math.cos(j.spin), yaw = S.yaw * (1 - S.sleep);
      var bottom = baked.bottom, gy = bottom + 1;
      ctx.save();
      ctx.translate(50, bottom + j.y);
      ctx.rotate(j.lean + S.sleep * 0.05 * Math.sin(seed * 9));
      ctx.scale(sx * cosS * (1 - 0.05 * Math.abs(yaw)), sy);
      ctx.translate(-50, -bottom);
      var front = cosS > 0, fx = (c.fx || 50) + yaw * 8 * (c.fs || 1), fy = c.fy + S.sleep * 4, base = o._base;
      if (o.antenna != null ? o.antenna : c.antenna) {
        var ax = 50 + yaw * 3, sw = still ? 0 : Math.sin(t * 7 + seed * 5) * 0.05 * (1 + j.air * 4) + j.lean * 2;
        ctx.save(); ctx.translate(ax, baked.top + 2); ctx.rotate(sw);
        ctx.strokeStyle = o._fos ? rgbHex(base) : shade(base, 0.6); ctx.lineWidth = 2.6; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -13); ctx.stroke();
        ctx.fillStyle = o._fos ? rgbHex(base) : color(o.accessoryColor || 'signal-tangerine'); ctx.beginPath(); ctx.arc(0, -15, 4.6, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      }
      ctx.drawImage(baked.img, -baked.pad, -baked.pad, 100 + 2 * baked.pad, 100 + 2 * baked.pad);
      if (front && cfg().decal === 'shutter' && !o.path) {
        ctx.save(); ctx.globalAlpha = Math.min(1, cosS * 2);
        if (o._fos) { ctx.strokeStyle = rgbHex(base); ctx.lineWidth = 2; ctx.stroke(rrect(30 + yaw * 4, 13, 40, 24, 3)); ctx.fillStyle = rgbHex(base); ctx.fill(rrect(54 + yaw * 4, 17, 8, 16, 2)); }
        else { ctx.fillStyle = color('case-silver'); ctx.fill(rrect(30 + yaw * 4, 13, 40, 24, 3)); ctx.fillStyle = color('crt-iron'); ctx.fill(rrect(54 + yaw * 4, 17, 8, 16, 2)); }
        ctx.restore();
      }
      if (o.headphones) {
        var ac = o._fos ? base : hexRgb(color(o.accessoryColor || 'crt-iron')), hw = (baked.right - baked.left) / 2 + 2, hy = fy - 4;
        ctx.strokeStyle = rgbHex(ac); ctx.lineWidth = 4.5; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.ellipse(50 + yaw * 2, hy, hw, Math.max(20, hy - baked.top + 6), 0, Math.PI * 1.04, Math.PI * 1.96); ctx.stroke();
        [-1, 1].forEach(function (side) {
          var cx = 50 + yaw * 2 + side * hw;
          ctx.fillStyle = rgbHex(ac); ctx.fill(rrect(cx - 5, hy - 9, 10, 18, 5));
        });
      }
      if (front && cfg().decal === 'migas' && !o.path) {
        var bob = still ? 0 : Math.sin(t * 2.2 + seed * 4) * 1.2;
        [[83, 20, 4.2], [91, 31, 3], [86, 10, 2.4]].forEach(function (m, ix) {
          ctx.fillStyle = rgbHex(base); ctx.globalAlpha = Math.min(1, cosS * 2);
          ctx.fill(rrect(m[0], m[1] + bob * (ix % 2 ? -1 : 1), m[2], m[2], 0.8));
        });
        ctx.globalAlpha = 1;
      }
      if (front) {
        if (c.fs) { ctx.save(); ctx.translate(fx, fy); ctx.scale(c.fs, c.fs); ctx.translate(-fx, -fy); }
        drawFace(t, fx, fy, cosS, st, still, j);
        if (c.fs) ctx.restore();
      }
      ctx.restore();
      if (S.sleep > 0.4 && !still) {
        ctx.fillStyle = cssVar('ink-muted') || '#bac1b8'; ctx.font = '600 10px "Geist Mono", ui-monospace, monospace';
        for (var z = 0; z < 3; z++) {
          var ph = ((t * 0.35 + z / 3 + seed) % 1);
          ctx.globalAlpha = Math.sin(ph * Math.PI) * S.sleep;
          ctx.fillText('z', 76 + ph * 14 + z * 2, baked.top + 6 - ph * 26);
        }
        ctx.globalAlpha = 1;
      }
    }

    function drawFace(t, fx, fy, cosS, st, still, j) {
      var face = o.type === 'monitor' ? 'pantalla' : (o.face === 'boca' ? 'boca' : 'ojos'), ink = o._ink, laughing = t < S.laughUntil && !still, sleep = S.sleep > 0.5;
      var lx = S.lx * (1 - S.sleep), ly = S.ly * (1 - S.sleep) + S.sleep * 0.4, yaw = S.yaw * (1 - S.sleep);
      ctx.save(); ctx.globalAlpha = Math.min(1, cosS * 2.5);
      var sp = 12.5, ew = 7.2, eh = 11, mcol = ink;
      if (face === 'pantalla') {
        var vw = 50, vh = 30;
        if (o._fos) { ctx.strokeStyle = rgbHex(o._base); ctx.lineWidth = 2; ctx.stroke(rrect(fx - vw / 2, fy - vh / 2, vw, vh, 9)); }
        else { ctx.fillStyle = color('crt-carbon'); ctx.fill(rrect(fx - vw / 2, fy - vh / 2, vw, vh, 9)); }
        ink = color('phosphor-celadon'); mcol = ink; sp = 10; ew = 5.6; eh = 9;
      }
      var ex = lx * (face === 'pantalla' ? 3 : 3.6), ey = ly * (face === 'pantalla' ? 2.4 : 2.8);
      var yawScale = function (side) { return 1 - Math.max(0, side * yaw) * 0.18; };
      ctx.fillStyle = ink; ctx.strokeStyle = ink; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      [-1, 1].forEach(function (side) {
        var cx = fx + side * sp * (1 - Math.abs(yaw) * 0.08) + ex, cy = fy - 3 + ey, w = ew * yawScale(side);
        if (sleep) { ctx.lineWidth = 2.4; ctx.beginPath(); ctx.arc(cx, cy - 1, w * 0.62, Math.PI * 0.15, Math.PI * 0.85); ctx.stroke(); return; }
        if (laughing) { ctx.lineWidth = 2.6; ctx.beginPath(); ctx.arc(cx, cy + 3, w * 0.66, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke(); return; }
        var h = Math.max(1.6, eh * (1 - S.blink * 0.9) * (st === 'trabajando' ? 0.9 : 1));
        ctx.fill(rrect(cx - w / 2, cy - h / 2, w, h, Math.min(w, h) / 2));
        if (face !== 'pantalla' && !o._fos && lum(hexRgb(ink)) < 0.3 && h > 5) {
          ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.beginPath(); ctx.arc(cx - w * 0.18, cy - h * 0.22, 1.3, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = ink;
        }
      });
      if ((o.cheeks !== false) && !o._fos && face !== 'pantalla' && !sleep) {
        ctx.fillStyle = color('signal-grapefruit'); ctx.globalAlpha *= 0.32;
        [-1, 1].forEach(function (side) { ctx.beginPath(); ctx.ellipse(fx + side * (sp + 9) + ex * 0.5, fy + 6, 4.6, 2.6, 0, 0, Math.PI * 2); ctx.fill(); });
        ctx.globalAlpha /= 0.32;
      }
      var mouth = face === 'boca' || face === 'pantalla' || laughing;
      if (mouth) {
        var mx = fx + ex * 0.8, my = fy + 7 + ey * 0.6;
        ctx.fillStyle = mcol; ctx.strokeStyle = mcol; ctx.lineWidth = 2.3;
        if (sleep) { ctx.beginPath(); ctx.moveTo(mx - 2.5, my); ctx.lineTo(mx + 2.5, my); ctx.stroke(); }
        else if (laughing) { ctx.beginPath(); ctx.moveTo(mx - 5.5, my - 1); ctx.arc(mx, my - 1, 5.5, 0, Math.PI); ctx.closePath(); ctx.fill(); }
        else if (st === 'trabajando') { ctx.beginPath(); ctx.ellipse(mx, my, 2.4, 2.8, 0, 0, Math.PI * 2); ctx.fill(); }
        else { ctx.beginPath(); ctx.arc(mx, my - 2.5, 4.5, Math.PI * 0.2, Math.PI * 0.8); ctx.stroke(); }
      }
      ctx.restore();
    }

    api._tick = function (t, dt) { if (!visible) return; update(t, dt); draw(t); };
    el.addEventListener('click', function () { if (o.interactive !== false) hop(1); });
    if (window.IntersectionObserver) new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(el);
    o.type = 'tecla'; o.state = 'reposo';
    BOTS.push(api);
    set(opts || {});
    S.sleep = stateName() === 'durmiendo' ? 1 : 0;
    draw(performance.now() / 1000);
    S.nextJump = performance.now() / 1000 + (o.jumpEvery == null ? 8 : o.jumpEvery) * seed;
    S.nextJump = S.nextJump || 0.001;
    start();
    return api;
  }

  function start() {
    if (loopOn || reduced()) return; loopOn = true;
    var last = performance.now();
    (function frame(now) {
      var dt = Math.min(0.05, (now - last) / 1000); last = now;
      for (var i = 0; i < BOTS.length; i++) BOTS[i]._tick(now / 1000, dt);
      if (BOTS.length) requestAnimationFrame(frame); else loopOn = false;
    })(last);
  }
  window.addEventListener('pointermove', function (e) { pointer = { x: e.clientX, y: e.clientY }; }, { passive: true });
  document.addEventListener('pointerleave', function () { pointer = null; });

  var DATA_NUM = ['size', 'brightness', 'saturation', 'speed', 'seed', 'light', 'depth', 'rim', 'highlight', 'shadow', 'turn', 'jumpHeight', 'jumpEvery', 'jumpTime'];
  function mountBots(root) {
    var list = (root || document).querySelectorAll('[data-ct-bot]:not([data-ct-mounted])');
    var made = [];
    Array.prototype.forEach.call(list, function (el) {
      var d = el.dataset, o = {};
      for (var key in d) {
        if (key === 'ctBot' || key === 'ctMounted') continue;
        var v = d[key];
        o[key] = DATA_NUM.indexOf(key) >= 0 ? parseFloat(v) : (v === 'true' ? true : v === 'false' ? false : v);
      }
      if (d.ctBot) o.type = d.ctBot;
      el.setAttribute('data-ct-mounted', '');
      el._ctBot = bot(el, o); made.push(el._ctBot);
    });
    return made;
  }


  /* ── Keycap 2D: una tecla real horneada píxel a píxel, sin WebGL ──
     Mapa de alturas analítico (faldón cónico, labio redondeado, cuenco cilíndrico
     y leve inclinación hacia el usuario), normales con grano de PBT y luz de estudio.
     El texto de la leyenda queda en el DOM: nítido, seleccionable y accesible. */

  function sdRR(px, py, cx, cy, hw, hh, r) {
    var qx = Math.abs(px - cx) - hw + r, qy = Math.abs(py - cy) - hh + r;
    return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r;
  }
  function hash(x, y) { var s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
  var KC_CACHE = {};
  function bakeKeycap(W, H, o) {
    var key = [W, H, o.color, o.finish, o.dish, o.light].join('|');
    if (KC_CACHE[key]) return KC_CACHE[key];
    var m = H, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    var ctx = cv.getContext('2d'), img = ctx.createImageData(W, H), O = img.data, N = W * H;
    var ro = m * 0.17, sx = m * 0.13, st = m * 0.075, sb = m * 0.2, ri = m * 0.11;
    var ix0 = sx, ix1 = W - sx, iy0 = st, iy1 = H - sb, icx = (ix0 + ix1) / 2, icy = (iy0 + iy1) / 2, ihw = (ix1 - ix0) / 2, ihh = (iy1 - iy0) / 2;
    var Hk = m * 0.55, e = m * 0.06, dd = m * (o.dish === 'plano' ? 0 : 0.045), tilt = m * 0.03;
    var Hf = new Float32Array(N), A = new Float32Array(N), Tt = new Float32Array(N), x, y, i;
    function topH(px, py) {
      var u = Math.max(-1, Math.min(1, (px - icx) / ihw)), v = Math.max(-1, Math.min(1, (py - icy) / ihh));
      var dish = o.dish === 'esferico' ? dd * (1 - Math.min(1, u * u * 0.8 + v * v * 0.8)) : o.dish === 'circulo' ? (function () { var rr = Math.hypot(u * ihw, v * ihh) / (Math.min(ihw, ihh) * 0.84); return rr < 1 ? dd * 2.4 * (1 - rr * rr) + dd * 0.15 : Math.max(0, dd * 0.15 * (1 - (rr - 1) * 6)); })() : dd * (1 - u * u);
      return Hk - dish - tilt * (v + 1) / 2;
    }
    for (y = 0; y < H; y++) for (x = 0; x < W; x++) {
      i = y * W + x; var px = x + 0.5, py = y + 0.5;
      var dOut = -sdRR(px, py, W / 2, H / 2, W / 2, H / 2, ro);
      A[i] = Math.max(0, Math.min(1, dOut + 0.5));
      if (A[i] <= 0) continue;
      var dIn = -sdRR(px, py, icx, icy, ihw, ihh, ri), th = topH(px, py);
      if (dIn >= 0) {
        var rim = dIn < e ? e * (1 - Math.sqrt(Math.max(0, 1 - Math.pow(1 - dIn / e, 2)))) : 0;
        Hf[i] = th - rim * 0.9; Tt[i] = 1;
      } else {
        var t = Math.max(0, dOut) / (Math.max(0, dOut) - dIn);
        var foot = Math.min(1, t / 0.12);
        Hf[i] = (th - e * 0.9) * (t * 0.92 + 0.08 * foot * foot); Tt[i] = t * 0.999;
      }
    }
    var rad = Math.max(1, Math.round(m / 70)), tmp = new Float32Array(N);
    for (var pass = 0; pass < 2; pass++) {
      for (y = 0; y < H; y++) for (x = 0; x < W; x++) { var s = 0, c = 0; for (var k = -rad; k <= rad; k++) { var xx = x + k; if (xx >= 0 && xx < W) { s += Hf[y * W + xx]; c++; } } tmp[y * W + x] = s / c; }
      for (y = 0; y < H; y++) for (x = 0; x < W; x++) { var s2 = 0, c2 = 0; for (var k2 = -rad; k2 <= rad; k2++) { var yy = y + k2; if (yy >= 0 && yy < H) { s2 += tmp[yy * W + x]; c2++; } } Hf[y * W + x] = s2 / c2; }
    }
    var la = (o.light == null ? -22 : o.light) * Math.PI / 180, el = 0.92;
    var L = [Math.sin(la) * Math.cos(el), -Math.cos(la) * Math.cos(el), Math.sin(el)];
    var Hv = [L[0], L[1], L[2] + 1], hn = Math.hypot(Hv[0], Hv[1], Hv[2]); Hv = [Hv[0] / hn, Hv[1] / hn, Hv[2] / hn];
    var glassK = o.finish === 'cristal', base = glassK ? [0.86, 0.88, 0.875] : hexRgb(color(o.color || 'case-bone')), gloss = o.finish === 'abs' || glassK, gr = gloss ? 0.015 : 0.05;
    for (y = 0; y < H; y++) for (x = 0; x < W; x++) {
      i = y * W + x; if (A[i] <= 0) continue;
      var hl = x > 0 ? Hf[i - 1] : Hf[i], hr = x < W - 1 ? Hf[i + 1] : Hf[i], hu = y > 0 ? Hf[i - W] : Hf[i], hd = y < H - 1 ? Hf[i + W] : Hf[i];
      var nx = -(hr - hl) / 2 + (hash(x, y) - 0.5) * gr * 2, ny = -(hd - hu) / 2 + (hash(y, x) - 0.5) * gr * 2, nz = 1, nl = Math.hypot(nx, ny, nz);
      nx /= nl; ny /= nl; nz /= nl;
      var dl = nx * L[0] + ny * L[1] + nz * L[2], wrap = Math.max(0, (dl + 0.35) / 1.35);
      var k3 = 0.6 + 0.48 * wrap;
      if (Tt[i] < 1) k3 *= 0.9 + 0.1 * Math.min(1, Tt[i] / 0.35);
      var nh = Math.max(0, nx * Hv[0] + ny * Hv[1] + nz * Hv[2]);
      var spec = glassK ? Math.pow(nh, 90) * 0.55 + Math.pow(nh, 14) * 0.08 : gloss ? Math.pow(nh, 60) * 0.32 + Math.pow(nh, 12) * 0.06 : Math.pow(nh, 16) * 0.07 + Math.pow(nh, 4) * 0.025;
      var fres = Math.pow(1 - nz, 3) * 0.12 * Math.max(0, -ny);
      var j = i * 4;
      O[j] = Math.min(255, (base[0] * k3 + spec + fres) * 255);
      O[j + 1] = Math.min(255, (base[1] * k3 + spec + fres) * 255);
      O[j + 2] = Math.min(255, (base[2] * k3 + spec + fres) * 255);
      O[j + 3] = A[i] * 255 * (glassK ? (Tt[i] < 1 ? 0.62 + 0.25 * Math.pow(1 - nz, 0.5) : 0.4 + spec * 1.2) : 1);
    }
    ctx.putImageData(img, 0, 0);
    if (glassK) {
      var out = document.createElement('canvas'); out.width = W; out.height = H; var oc = out.getContext('2d');
      var cx = W / 2, cy = icy + m * 0.02, cr = m * 0.2, arm = m * 0.15, aw = m * 0.05;
      oc.fillStyle = 'rgba(70,74,74,0.55)'; oc.beginPath(); oc.arc(cx, cy, cr, 0, Math.PI * 2); oc.fill();
      oc.fillStyle = 'rgba(150,155,155,0.9)'; oc.fillRect(cx - aw, cy - arm, aw * 2, arm * 2); oc.fillRect(cx - arm, cy - aw, arm * 2, aw * 2);
      oc.strokeStyle = 'rgba(255,255,255,0.35)'; oc.lineWidth = Math.max(1, m * 0.012); oc.strokeRect(icx - ihw * 0.92, icy - ihh * 0.92, ihw * 1.84, ihh * 1.84);
      oc.drawImage(cv, 0, 0); cv = out;
    }
    var url = cv.toDataURL();
    KC_CACHE[key] = url;
    return url;
  }

  function mountKeycaps(root) {
    var list = (root || document).querySelectorAll('.ct-keycap:not([data-ct-baked])');
    Array.prototype.forEach.call(list, function (el) {
      el.setAttribute('data-ct-baked', '');
      el.style.setProperty('--kc-color', color(el.getAttribute('data-color') || 'case-bone'));
      var kcBase = hexRgb(color(el.getAttribute('data-color') || 'case-bone')), lightInk = el.getAttribute('data-finish') !== 'cristal' && contrast(kcBase, hexRgb(color('case-linen'))) > contrast(kcBase, hexRgb(color('crt-charcoal')));
      if (!el.style.getPropertyValue('--kc-ink')) el.style.setProperty('--kc-ink', lightInk ? color('case-linen') : color('crt-charcoal'));
      el.style.setProperty('--kc-blend', lightInk || el.getAttribute('data-finish') === 'cristal' ? 'normal' : 'multiply');
      function bake() {
        var r = el.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
        if (!r.width || !r.height) return;
        var W = Math.round(r.width * dpr), H = Math.round(r.height * dpr);
        var url = bakeKeycap(W, H, { color: el.getAttribute('data-color') || 'case-bone', finish: el.getAttribute('data-finish') || 'pbt', dish: el.getAttribute('data-dish') || 'cilindrico' });
        el.style.setProperty('--kc-img', 'url(' + url + ')');
        el.classList.add('is-baked');
      }
      bake();
      if (window.ResizeObserver) { var last = ''; new ResizeObserver(function () { var r = el.getBoundingClientRect(), k = Math.round(r.width) + 'x' + Math.round(r.height); if (k !== last) { last = k; bake(); } }).observe(el); }
    });
  }


  /* ── Relieve: el motor de la keycap, generalizado ───────────
     fn(x, y) describe el objeto píxel a píxel: altura, color, cobertura y material.
     Materiales: 0 plástico PBT mate · 1 ABS brillante · 2 metal · 3 cristal · 4 goma. */
  function bevel(d, e) { if (d >= e) return 1; if (d <= 0) return 0; var t = 1 - d / e; return Math.sqrt(1 - t * t); }
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function sdCircle(px, py, cx, cy, r) { return Math.hypot(px - cx, py - cy) - r; }
  function rgbOf(v) { return hexRgb(color(v)); }
  function mixRgb(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }

  /* Materiales: los acabados originales del motor (los de la keycap). */
  var MATS = { pbt: { m: 0 }, abs: { m: 1 }, metal: { m: 2 }, cristal: { m: 3 }, goma: { m: 4 } };
  function applyMat(s) { var M = MATS[s.mat]; if (M) s.m = M.m; }

    function relief(W, H, fn, o) {
    o = o || {};
    var sc = o.scale || 1;
    var N = W * H, Hf = new Float32Array(N), A = new Float32Array(N), Mt = new Uint8Array(N), Ao = new Float32Array(N), Cr = new Float32Array(N * 3), x, y, i;
    for (y = 0; y < H; y++) for (x = 0; x < W; x++) {
      i = y * W + x; var s = fn(x + 0.5, y + 0.5); if (!s || s.a <= 0) continue;
      if (s.mat) applyMat(s, x, y, sc, W, H);
      Hf[i] = s.h; A[i] = s.a; Mt[i] = s.m || 0; Ao[i] = s.ao == null ? 1 : s.ao; Cr[i * 3] = s.c[0]; Cr[i * 3 + 1] = s.c[1]; Cr[i * 3 + 2] = s.c[2];
    }
    var rad = o.blur == null ? 1 : o.blur, tmp = new Float32Array(N);
    for (var pass = 0; pass < (rad ? 2 : 0); pass++) {
      for (y = 0; y < H; y++) for (x = 0; x < W; x++) { var sm = 0, c = 0; for (var k = -rad; k <= rad; k++) { var xx = x + k; if (xx >= 0 && xx < W) { sm += Hf[y * W + xx]; c++; } } tmp[y * W + x] = sm / c; }
      for (y = 0; y < H; y++) for (x = 0; x < W; x++) { var s2 = 0, c2 = 0; for (var k2 = -rad; k2 <= rad; k2++) { var yy = y + k2; if (yy >= 0 && yy < H) { s2 += tmp[yy * W + x]; c2++; } } Hf[y * W + x] = s2 / c2; }
    }
    var la = (o.light == null ? -22 : o.light) * Math.PI / 180, el = o.elev == null ? 0.92 : o.elev;
    var L = [Math.sin(la) * Math.cos(el), -Math.cos(la) * Math.cos(el), Math.sin(el)];
    var Hv = [L[0], L[1], L[2] + 1], hn = Math.hypot(Hv[0], Hv[1], Hv[2]); Hv = [Hv[0] / hn, Hv[1] / hn, Hv[2] / hn];
    var cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    var ctx = cv.getContext('2d'), img = ctx.createImageData(W, H), O = img.data, GR = [0.05, 0.015, 0.02, 0.004, 0.08, 0.006, 0.01, 0.09, 0.03, 0.002, 0.04];
    for (y = 0; y < H; y++) for (x = 0; x < W; x++) {
      i = y * W + x; if (A[i] <= 0) continue;
      var m = Mt[i], hl = x > 0 && A[i - 1] ? Hf[i - 1] : Hf[i], hr = x < W - 1 && A[i + 1] ? Hf[i + 1] : Hf[i], hu = y > 0 && A[i - W] ? Hf[i - W] : Hf[i], hd = y < H - 1 && A[i + W] ? Hf[i + W] : Hf[i];
      var g = GR[m], nx = -(hr - hl) / 2 + (hash(x, y) - 0.5) * g * 2, ny = -(hd - hu) / 2 + (hash(y, x) - 0.5) * g * 2, nz = 1, nl = Math.hypot(nx, ny, nz);
      nx /= nl; ny /= nl; nz /= nl;
      var dl = nx * L[0] + ny * L[1] + nz * L[2], wrap = Math.max(0, (dl + 0.35) / 1.35), nh = Math.max(0, nx * Hv[0] + ny * Hv[1] + nz * Hv[2]);
      var r = Cr[i * 3], gg = Cr[i * 3 + 1], b = Cr[i * 3 + 2], k3, add = 0, tint = 0;
      if (m === 2) { k3 = 0.38 + 0.42 * wrap; tint = Math.pow(nh, 28) * 0.7 + 0.18 * (0.5 - ny * 0.5); add = Math.pow(nh, 90) * 0.35; }
      else if (m === 3) { k3 = 0.85 + 0.25 * wrap; add = Math.pow(nh, 90) * 0.85 + Math.pow(nh, 12) * 0.06 + Math.pow(1 - nz, 2) * 0.22 * Math.max(0, -ny + 0.2); }
      else if (m === 1) { k3 = 0.58 + 0.5 * wrap; add = Math.pow(nh, 60) * 0.32 + Math.pow(nh, 12) * 0.06; }
      else if (m === 4) { k3 = 0.55 + 0.45 * wrap; add = Math.pow(nh, 6) * 0.03; }
      else if (m === 5) { k3 = 0.64 + 0.44 * wrap; add = Math.pow(nh, 22) * 0.1 + Math.pow(nh, 5) * 0.035; }
      else if (m === 6) { k3 = 0.5 + 0.42 * wrap; tint = Math.pow(nh, 14) * 0.38 + 0.1 * (0.5 - ny * 0.5); add = Math.pow(nh, 70) * 0.18; }
      else if (m === 7) { k3 = 0.6 + 0.46 * wrap; add = Math.pow(nh, 8) * 0.03; }
      else if (m === 8) { k3 = 0.66 + 0.46 * Math.max(0, (dl + 0.6) / 1.6); add = Math.pow(nh, 9) * 0.06; }
      else if (m === 9) { var env = ny < -0.12 ? 0.95 : ny < 0.05 ? 0.95 - (ny + 0.12) / 0.17 * 0.85 : 0.1 + Math.max(0, ny - 0.4) * 0.3, env2 = 0.95 - 0.75 * (y / H) + 0.25 * Math.sin(x / W * 3.1); k3 = 0.18 + 0.1 * wrap; tint = (nz > 0.97 ? env2 : env) * 0.9; add = Math.pow(nh, 160) * 0.9; }
      else if (m === 10) { k3 = 0.5 + 0.48 * wrap; tint = Math.pow(nh, 10) * 0.16; add = Math.pow(nh, 40) * 0.05; }
      else { k3 = 0.6 + 0.48 * wrap; add = Math.pow(nh, 16) * 0.07 + Math.pow(nh, 4) * 0.025; }
      add += Math.pow(1 - nz, 3) * 0.1 * Math.max(0, -ny);
      k3 *= Ao[i];
      var j = i * 4;
      O[j] = Math.min(255, (r * k3 + r * tint + add) * 255);
      O[j + 1] = Math.min(255, (gg * k3 + gg * tint + add) * 255);
      O[j + 2] = Math.min(255, (b * k3 + b * tint + add) * 255);
      O[j + 3] = A[i] * 255;
    }
    ctx.putImageData(img, 0, 0);
    return cv;
  }
    function textMask(W, H, draw) {
    var c = document.createElement('canvas'); c.width = W; c.height = H; var x = c.getContext('2d'); x.fillStyle = '#fff'; draw(x, W, H);
    var d = x.getImageData(0, 0, W, H).data;
    return function (px, py) { var ix = px | 0, iy = py | 0; if (ix < 0 || iy < 0 || ix >= W || iy >= H) return 0; return d[(iy * W + ix) * 4 + 3] / 255; };
  }
  /* Rehornea todo lo registrado cuando cambia el tema o el tamaño. */
  var BAKERS = [];
  function registerBake(el, fn) {
    BAKERS.push(fn); fn();
    if (window.ResizeObserver) { var last = ''; new ResizeObserver(function () { var r = el.getBoundingClientRect(), k = Math.round(r.width) + 'x' + Math.round(r.height); if (k !== last) { last = k; fn(); } }).observe(el); }
  }
  new MutationObserver(function () { BAKERS.forEach(function (f) { f(); }); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  try { if (document.fonts && document.fonts.load) document.fonts.load('600 10px "Geist Mono"').then(function () { BAKERS.forEach(function (f) { f(); }); }); } catch (e) {}
  function dprOf() { return Math.min(2, window.devicePixelRatio || 1); }
  var URLC = {};
  function bakeUrl(key, W, H, fn, o) { if (URLC[key]) return URLC[key]; var u = relief(W, H, fn, o).toDataURL(); URLC[key] = u; return u; }

  /* Perilla: tapa hueso con cuenco, ranura y faldón plateado moleteado. */
    function bakeScreenFrame(W, H, ix, iy, iw, ih, ro, ri, body, sc, gloss) {
    var bc = rgbOf(body);
    return relief(W, H, function (x, y) {
      var dOut = -sdRR(x, y, W / 2, H / 2, W / 2, H / 2, ro); if (dOut < -0.5) return null;
      var dIn = sdRR(x, y, ix + iw / 2, iy + ih / 2, iw / 2, ih / 2, ri);
      if (dIn < 0) return null;
      var top = 14 * sc * bevel(dOut, 10 * sc), ch = 9 * sc;
      var hgt = dIn < ch ? top - (1 - dIn / ch) * 10 * sc : top;
      return { h: hgt, c: dIn < ch ? mixRgb(bc, [0, 0, 0], 0.18 * (1 - dIn / ch)) : bc, a: clamp01(dOut + 0.5) * clamp01(dIn + 0.5), m: gloss ? 1 : 0, ao: dIn < ch ? 0.85 + 0.15 * dIn / ch : 1 };
    }, { blur: Math.max(1, Math.round(sc)) });
  }
  /* Cristal abombado del tubo. Es una capa que se pone encima de la pantalla y solo añade luz y sombra, nunca color de fondo.
     La cúpula es una superelipse: la inclinación de la superficie crece hacia el borde y apunta hacia fuera, sin costuras.
     De ella salen tres cosas: el borde que se oscurece porque el cristal se curva y refleja la penumbra, el reflejo de una
     ventana arriba a la izquierda que se curva con los hombros, y un brillo agudo sobre el hombro. Las pantallas planas
     (LCD, LED) reciben la misma capa con una cúpula casi plana. */
  function glassCanvas(W, H, r, kind) {
    var cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    var ctx = cv.getContext('2d'), img = ctx.createImageData(W, H), O = img.data, crt = kind !== 'flat';
    var M = crt ? 0.7 : 0.2, PW = 2.6, N4 = 3.4, Dmax = crt ? 0.24 : 0.09, Iw = crt ? 0.1 : 0.04, Is = crt ? 0.26 : 0.08;
    var Lx = -0.62, Ly = -0.7, Lz = 0.36, ln = Math.hypot(Lx, Ly, Lz); Lx /= ln; Ly /= ln; Lz /= ln;
    var hx = Lx, hy = Ly, hz = Lz + 1, hn = Math.hypot(hx, hy, hz); hx /= hn; hy /= hn; hz /= hn;
    var sEdge = 1 - 1 / Math.sqrt(1 + M * M);
    function sstep(a, b, v) { var t = clamp01((v - a) / (b - a)); return t * t * (3 - 2 * t); }
    for (var y = 0; y < H; y++) for (var x = 0; x < W; x++) {
      var px = x + 0.5, py = y + 0.5, d = -sdRR(px, py, W / 2, H / 2, W / 2, H / 2, r); if (d < 0) continue;
      var u = (px - W / 2) / (W / 2), v = (py - H / 2) / (H / 2), au = Math.abs(u), av = Math.abs(v);
      var phi = Math.pow(Math.pow(au, N4) + Math.pow(av, N4), 1 / N4), ox = 0, oy = 0, m = 0;
      if (phi > 1e-4) {
        var gx = Math.pow(au, N4 - 1) * (u < 0 ? -1 : 1) / (W / 2), gy = Math.pow(av, N4 - 1) * (v < 0 ? -1 : 1) / (H / 2), gl = Math.hypot(gx, gy) || 1;
        ox = gx / gl; oy = gy / gl; m = M * Math.pow(clamp01(phi), PW);
      }
      var nx = m * ox, ny = m * oy, nl = Math.hypot(nx, ny, 1); nx /= nl; ny /= nl; var nz = 1 / nl;
      var rx = 2 * nz * nx, ry = 2 * nz * ny;                                    /* a dónde mira el reflejo */
      var win = sstep(0.5, 1.05, -(rx * 0.7 + ry * 0.9)) * Iw;
      var nh = Math.max(0, nx * hx + ny * hy + nz * hz), spec = Math.pow(nh, 260) * Is;
      var rad2 = (u * u + v * v) / 2, da = Dmax * Math.pow(clamp01((1 - nz) / sEdge), 1.6) + (crt ? 0.045 * Math.pow(rad2, 1.5) : 0.015 * rad2);
      var wa = clamp01(win + spec), oa = wa + da * (1 - wa), j = (y * W + x) * 4, sh = clamp01(d + 0.5);
      O[j] = O[j + 1] = O[j + 2] = oa > 0 ? 255 * wa / oa : 0; O[j + 3] = 255 * oa * sh;
    }
    ctx.putImageData(img, 0, 0);
    return cv;
  }
  function bakeGlass(W, H, r, kind) {
    var key = 'glass' + W + 'x' + H + 'r' + Math.round(r) + (kind || ''); if (URLC[key]) return URLC[key];
    /* El cristal es una luz suave: se hornea como mucho a 640 de ancho y el CSS lo estira, así no pesa ni tarda en pantallas grandes. */
    var sc = Math.min(1, 640 / W);
    return (URLC[key] = glassCanvas(Math.max(8, Math.round(W * sc)), Math.max(8, Math.round(H * sc)), r * sc, kind).toDataURL());
  }
  function glassKind(scr) { return scr.classList.contains('ct-screen--lcd') || scr.classList.contains('ct-screen--led') ? 'flat' : 'crt'; }
  /* Mejora automática: perillas en vector y pantallas con marco horneado y cristal. */
  function enhanceObjects(root) {
    root = root || document;
    Array.prototype.forEach.call(root.querySelectorAll('.ct-knob__ring-wrap:not([data-ct-svg])'), function (el) { el.setAttribute('data-ct-svg', ''); knobObj(el); });
    Array.prototype.forEach.call(root.querySelectorAll('.ct-screen-frame:not([data-ct-baked])'), function (el) {
      el.setAttribute('data-ct-baked', '');
      var scr = el.querySelector('.ct-screen'); if (!scr) return;
      var glass = document.createElement('span'); glass.className = 'ct-screen__glass'; glass.setAttribute('aria-hidden', 'true'); scr.appendChild(glass);
      registerBake(el, function () {
        var r = el.getBoundingClientRect(), s = scr.getBoundingClientRect(), dp = dprOf(); if (!r.width) return;
        var cs = getComputedStyle(el), ro = parseFloat(cs.borderTopLeftRadius) || 30, ri = parseFloat(getComputedStyle(scr).borderTopLeftRadius) || 22;
        var body = theme() === 'carcasa' ? 'case-linen' : 'crt-iron';
        var f = bakeScreenFrame(Math.round(r.width * dp), Math.round(r.height * dp), (s.left - r.left) * dp, (s.top - r.top) * dp, s.width * dp, s.height * dp, ro * dp, ri * dp, body, dp, el.getAttribute('data-finish') === 'abs');
        el.style.setProperty('--ct-img', 'url(' + f.toDataURL() + ')');
        glass.style.setProperty('--ct-img', 'url(' + bakeGlass(Math.round(s.width * dp), Math.round(s.height * dp), ri * dp, glassKind(scr)) + ')');
        el.classList.add('is-baked');
      });
    });
    Array.prototype.forEach.call(root.querySelectorAll('.ct-case .ct-screen'), function (scr) {
      var glass = scr.querySelector('.ct-screen__glass'); if (!glass || glass.getAttribute('data-ct-baked')) return; glass.setAttribute('data-ct-baked', '');
      registerBake(scr, function () { var s = scr.getBoundingClientRect(), dp = dprOf(); if (!s.width) return; var ri = parseFloat(getComputedStyle(scr).borderTopLeftRadius) || 12; glass.style.setProperty('--ct-img', 'url(' + bakeGlass(Math.round(s.width * dp), Math.round(s.height * dp), ri * dp, glassKind(scr)) + ')'); });
    });
  }

  /* ── Objetos modulares horneados ─────────────────────────────
     Cada pieza es independiente y se combina con las demás: una pantalla vive sola,
     dentro de una ventana o dentro de una carcasa; los cables conectan cualquier par de elementos. */
  function inRect(x, y, x0, y0, x1, y1, r) { return -sdRR(x, y, (x0 + x1) / 2, (y0 + y1) / 2, (x1 - x0) / 2, (y1 - y0) / 2, r); }
  function plate(k, x0, y0, x1, y1, r, h, e, col_, m, extra) {
    return function (x, y) {
      var d = inRect(x / k, y / k, x0, y0, x1, y1, r) * k; if (d < -0.5) return null;
      var s = { h: h * k * bevel(d, e * k), c: col_, a: clamp01(d + 0.5), m: m || 0 };
      return extra ? extra(x / k, y / k, s, d) : s;
    };
  }
  function dpFor(w, h, max) { return Math.max(0.5, Math.min(dprOf(), Math.sqrt((max || 1100000) / Math.max(1, w * h)))); }
  function bgCanvas(el, cls) { var c = document.createElement('canvas'); c.className = cls; c.setAttribute('aria-hidden', 'true'); el.insertBefore(c, el.firstChild); return c; }
  function fire(el, name, detail) { el.dispatchEvent(new CustomEvent(name, { bubbles: true, detail: detail || {} })); }

  /* Cutting mat: goma autorregenerable con cuadrícula, reglas numeradas y guías de 45°. Es una superficie para contenido. */
  function cutmatObj(el) {
    var cv = bgCanvas(el, 'ct-cutmat__bg');
    function bake() {
      var r = el.getBoundingClientRect(); if (!r.width) return;
      var dp = dpFor(r.width, r.height, 900000), W = Math.round(r.width * dp), H = Math.round(r.height * dp), s = dp;
      var base = el.getAttribute('data-color') ? rgbOf(el.getAttribute('data-color')) : mixRgb(rgbOf('phosphor-celadon'), rgbOf('crt-gunmetal'), 0.62);
      var img = relief(W, H, function (x, y) { var d = inRect(x, y, 0.5, 0.5, W - 0.5, H - 0.5, 14 * s); if (d < -0.5) return null; return { h: 5 * s * bevel(d, 4 * s), c: base, a: clamp01(d + 0.5), m: 4 }; }, { blur: 1 });
      cv.width = W; cv.height = H; var c = cv.getContext('2d'); c.drawImage(img, 0, 0);
      var g = 20 * s, ox = 34 * s, oy = 34 * s, line = 'rgba(236,231,222,', y;
      c.save(); roundRectPath(c, 6 * s, 6 * s, W - 12 * s, H - 12 * s, 10 * s); c.clip();
      for (var i = 0, x = ox; x < W - 8 * s; x += g, i++) { c.fillStyle = line + (i % 5 === 0 ? '0.42)' : '0.16)'); c.fillRect(Math.round(x), oy, i % 5 === 0 ? 1.4 * s : 0.8 * s, H - oy - 10 * s); }
      for (i = 0, y = oy; y < H - 8 * s; y += g, i++) { c.fillStyle = line + (i % 5 === 0 ? '0.42)' : '0.16)'); c.fillRect(ox, Math.round(y), W - ox - 10 * s, i % 5 === 0 ? 1.4 * s : 0.8 * s); }
      c.strokeStyle = line + '0.22)'; c.lineWidth = 0.9 * s; c.setLineDash([6 * s, 5 * s]);
      for (var d0 = 0; d0 < W + H; d0 += g * 10) { c.beginPath(); c.moveTo(ox + d0, H - 10 * s); c.lineTo(ox + d0 + (H - oy), oy); c.stroke(); }
      c.setLineDash([]);
      c.strokeStyle = line + '0.3)'; [6, 9].forEach(function (rr) { c.beginPath(); c.arc(ox, H - 10 * s, rr * g, -Math.PI / 2, 0); c.stroke(); });
      c.fillStyle = line + '0.75)'; c.font = '600 ' + (9 * s) + 'px "Geist Mono", ui-monospace, monospace'; c.textAlign = 'center'; c.textBaseline = 'middle';
      for (i = 0, x = ox; x < W - 18 * s; x += g, i++) { c.fillRect(Math.round(x), 8 * s, 0.9 * s, i % 5 === 0 ? 12 * s : (i % 1 === 0 ? 6 * s : 4 * s)); if (i % 5 === 0 && i) c.fillText(String(i), x, 26 * s); }
      for (i = 0, y = oy; y < H - 18 * s; y += g, i++) { c.fillRect(8 * s, Math.round(y), i % 5 === 0 ? 12 * s : 6 * s, 0.9 * s); if (i % 5 === 0 && i) c.fillText(String(i), 26 * s, y); }
      c.restore();
    }
    registerBake(el, bake);
  }



  /* ── Piezas ilustradas en vector ─────────────────────────────
     Superficies lisas, degradados suaves y sombras limpias: la precisión de una
     ilustración de producto, sin texturas. */
  var SVGNS = 'http://www.w3.org/2000/svg';
  var UID = 0;
  function uid(p) { UID++; return 'ct' + p + UID; }
  function hx(v) { return color(v); }
  function tone(v, k) { return shade(hexRgb(color(v)), k); }

  /* ── Perilla ─────────────────────────────────────────────────
     Una sola, negra, inspirada en los pedales de guitarra: goma mate con el borde rodado y una barra blanca. El cuerpo y la marca se
     hornean con el motor de relieve; el cuerpo queda fijo, porque la luz no gira, y solo gira la marca. Debajo, el range invisible
     da arrastre, teclado y lector de pantalla. */
  function bakeKnobBody(D, dp) {
    var S = Math.max(8, Math.round(D * dp)), k = S / D, c0 = D / 2, R = D / 2 - 1.2, black = [0.085, 0.09, 0.09];
    return relief(S, S, function (x, y) {
      var ux = x / k - c0, uy = y / k - c0, r = Math.hypot(ux, uy), d = (R - r) * k; if (d < -0.5) return null;
      var s = { h: 0.27 * R * k * bevel(d, 0.22 * R * k) + 0.035 * R * k * (1 - r * r / (R * R)), c: black, a: clamp01(d + 0.5), m: 0 };
      if (r > 0.86 * R) s.c = [0.135, 0.14, 0.14];                                                  /* anillo de base, un poco más claro */
      return s;
    }, { blur: 1 });
  }
  function bakeKnobMark(D, dp) {
    var S = Math.max(8, Math.round(D * dp)), k = S / D, c0 = D / 2, R = D / 2 - 1.2, r0 = 0.1 * R, r1 = 0.9 * R, wd = 0.17 * R;
    return relief(S, S, function (x, y) {
      var ux = x / k - c0, uy = y / k - c0, d = inRect(ux, uy, -wd / 2, -r1, wd / 2, -r0, Math.min(wd / 2, 1.4)) * k; if (d < -0.5) return null;
      return { h: 0.9 * k * bevel(Math.max(d, 0), 0.45 * k), c: [0.95, 0.95, 0.93], a: clamp01(d + 0.5), m: 1 };
    }, { blur: 1 });
  }
  var KBC = {};
  function knobObj(wrap) {
    var knob = wrap.closest('.ct-knob'); if (!knob) return;
    var input = knob.querySelector('.ct-knob__input');
    Array.prototype.forEach.call(wrap.querySelectorAll('.ct-knob__ring, .ct-knob__dial'), function (n) { n.parentNode.removeChild(n); });
    var body = document.createElement('canvas'), mark = document.createElement('canvas');
    body.className = 'ct-knob__body'; mark.className = 'ct-knob__mark'; body.setAttribute('aria-hidden', 'true'); mark.setAttribute('aria-hidden', 'true');
    wrap.appendChild(body); wrap.appendChild(mark); knob.classList.add('is-baked'); if (input) syncKnob(input);
    var last = '';
    function bake() {
      var d = wrap.offsetWidth; if (!d) return;
      var dp = dprOf(), key = [d, dp].join('|'); if (key === last) return; last = key;
      var B = KBC['b|' + key] || (KBC['b|' + key] = bakeKnobBody(d, dp)), M = KBC['m|' + key] || (KBC['m|' + key] = bakeKnobMark(d, dp));
      body.width = B.width; body.height = B.height; body.getContext('2d').drawImage(B, 0, 0); mark.width = M.width; mark.height = M.height; mark.getContext('2d').drawImage(M, 0, 0);
    }
    registerBake(wrap, bake);
  }

  /* ── Medidores ───────────────────────────────────────────────
     Instrumentos de panel. El cuerpo, negro y con el hueco de la esfera, se hornea con el motor de relieve: la sombra de las paredes
     cae sobre el papel de la esfera, con la luz de arriba a la izquierda. La escala va impresa en SVG, que es texto y líneas nítidas;
     las partes móviles (aguja, marca, pilotos) llevan su sombra, y un cristal con un reflejo diagonal cierra el conjunto. */
  var M_BLACK = [0.09, 0.095, 0.095], M_DIM = { vu: [10, 10, 190, 120, 7, 3.5], vmeter: [5, 5, 55, 205, 4, 2.8] };
  function mPaper() { return mixRgb(rgbOf('case-bone'), [1, 1, 1], 0.22); }
  function mOccl(ux, uy, x0, y0, x1, y1) {
    var occ = 0.58 * Math.exp(-(uy - y0) / 9) + 0.42 * Math.exp(-(ux - x0) / 7) + 0.1 * Math.exp(-(y1 - uy) / 5) + 0.1 * Math.exp(-(x1 - ux) / 5);
    return 1 - Math.min(0.62, occ);
  }
  function mCast(ux, uy, x0, y0, x1, y1, r, reach, amt) {
    var d = -inRect(ux, uy, x0, y0, x1, y1, r); if (d <= 0 || d > reach * 5) return 1;
    var cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, v = ((ux - cx) / ((x1 - x0) / 2)) * 0.4 + ((uy - cy) / ((y1 - y0) / 2)) * 0.9;
    return 1 - amt * Math.exp(-d / reach) * clamp01(0.3 + 0.7 * clamp01(0.5 + v * 0.6));
  }
  function ledbarW(cols) { return cols * 20 + (cols - 1) * 4 + 24; }
  function ledXY(c, r) { return [22 + c * 24, 15 + r * 9.2]; }
  function ledColorName(lvl) { return lvl > 0.82 ? 'signal-grapefruit' : lvl > 0.6 ? 'amber-bronze' : 'amber-custard'; }
  function bakeMeterBody(kind, W, H, o) {
    o = o || {};
    var paper = mPaper(), cols = o.cols || 2, vbW = kind === 'vu' ? 200 : kind === 'gauge' ? 160 : kind === 'vmeter' ? 60 : ledbarW(cols), k = W / vbW;
    if (kind === 'gauge') return relief(W, H, function (x, y) {
      var ux = x / k - 80, uy = y / k - 80, r = Math.hypot(ux, uy), dB = (79 - r) * k; if (dB < -0.5) return null;
      var s = { h: 12 * k * bevel(dB, 8 * k), c: M_BLACK, a: clamp01(dB + 0.5), m: 0 }, ao = 1, dW = 66 - r;
      if (dW > -0.5) {
        s.h -= 9 * k * clamp01(dW / 3.5);
        if (dW > 3.5 - 0.5) {
          var dirW = r > 0.001 ? 0.55 + 0.45 * ((ux * -0.45 + uy * -0.89) / r) : 0.55;
          s.c = mixRgb(M_BLACK, paper, clamp01((dW - 3.5) * k + 0.5));
          ao = (1 - Math.min(0.55, 0.5 * Math.exp(-(62.5 - r) / 8) * dirW)) * (1 - 0.08 * (r / 66));
        }
      }
      s.ao = ao; return s;
    }, { blur: 1 });
    if (kind === 'ledbar') return relief(W, H, function (x, y) {
      var ux = x / k, uy = y / k, dB = inRect(ux, uy, 0, 0, vbW, 150, 7) * k; if (dB < -0.5) return null;
      var s = { h: 10 * k * bevel(dB, 6 * k), c: M_BLACK, a: clamp01(dB + 0.5), m: 0 }, dW = inRect(ux, uy, 6, 6, vbW - 6, 144, 4);
      if (dW > -0.5) {
        s.h -= 8 * k * clamp01(dW / 2.6); s.c = mixRgb(M_BLACK, [0.03, 0.032, 0.03], clamp01((dW - 2.6) * k + 0.5)); s.ao = dW > 2.6 ? mOccl(ux, uy, 8.6, 8.6, vbW - 8.6, 141.4) : 1;
        for (var c = 0; c < cols; c++) for (var r = 0; r < 14; r++) {
          var p = ledXY(c, r), lvl = (13 - r) / 13, dS = inRect(ux, uy, p[0] - 10.4, p[1] - 4.1, p[0] + 10.4, p[1] + 4.1, 3.2) * k;
          if (dS > -0.5) {
            s.h -= 1.4 * k * clamp01(dS / (0.8 * k) + 0.5); s.c = mixRgb(s.c, [0.012, 0.012, 0.012], clamp01(dS + 0.5));
            var dL = inRect(ux, uy, p[0] - 9, p[1] - 3.1, p[0] + 9, p[1] + 3.1, 2.4) * k;
            if (dL > -0.5) { s.h += 2.6 * k * bevel(Math.max(dL, 0), 2.2 * k); s.c = mixRgb(s.c, mixRgb(rgbOf(ledColorName(lvl)), [0, 0, 0], 0.8), clamp01(dL + 0.5)); s.m = 3; s.ao = 1; }
          }
        }
      }
      return s;
    }, { blur: 1 });
    var d = M_DIM[kind], x0 = d[0], y0 = d[1], x1 = d[2], y1 = d[3], wr = d[4], wl = d[5], hh = kind === 'vu' ? 130 : 210, rr = kind === 'vu' ? 14 : 7;
    return relief(W, H, function (x, y) {
      var ux = x / k, uy = y / k, dB = inRect(ux, uy, 0, 0, vbW, hh, rr) * k; if (dB < -0.5) return null;
      var s = { h: 12 * k * bevel(dB, 8 * k), c: M_BLACK, a: clamp01(dB + 0.5), m: 0 }, ao = 1, dW = inRect(ux, uy, x0, y0, x1, y1, wr);
      if (dW > -0.5) {
        s.h -= 9 * k * clamp01(dW / wl);
        if (dW > wl - 0.5) {
          var cxm = (x0 + x1) / 2, cym = (y0 + y1) / 2;
          s.c = mixRgb(M_BLACK, paper, clamp01((dW - wl) * k + 0.5));
          ao = mOccl(ux, uy, x0 + wl, y0 + wl, x1 - wl, y1 - wl) * (1 - 0.08 * Math.hypot((ux - cxm) / ((x1 - x0) / 2), (uy - cym) / ((y1 - y0) / 2)));
        }
        if (kind === 'vu') {                                                                   /* la caja oscura de la que sale la aguja */
          var dE = inRect(ux, uy, 50, 106, 150, 126, 6) * k;
          if (dE > -0.5) { s.h += 3 * k * bevel(Math.max(dE, 0), 2.5 * k); s.c = mixRgb(s.c, M_BLACK, clamp01(dE + 0.5)); ao = 1; }
          else ao *= mCast(ux, uy, 50, 106, 150, 126, 6, 4, 0.3);
        }
      }
      s.ao = ao; return s;
    }, { blur: 1 });
  }
  /* Cristal: solo luz. Un reflejo diagonal arriba a la izquierda y el borde que se oscurece un poco. */
  function bakeMeterGlass(W, H, r, round) {
    var cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    var ctx = cv.getContext('2d'), img = ctx.createImageData(W, H), O = img.data;
    function sstep(a, b, v) { var t = clamp01((v - a) / (b - a)); return t * t * (3 - 2 * t); }
    for (var y = 0; y < H; y++) for (var x = 0; x < W; x++) {
      var px = x + 0.5, py = y + 0.5, d = round ? W / 2 - Math.hypot(px - W / 2, py - H / 2) : -sdRR(px, py, W / 2, H / 2, W / 2, H / 2, r); if (d < 0) continue;
      var u = (px - W / 2) / (W / 2), v = (py - H / 2) / (H / 2), s = u * 0.5 + v;
      var wa = 0.11 * sstep(-0.05, -0.8, s) + 0.07 * sstep(-0.1, -0.16, s) * sstep(-0.95, -0.35, s);
      var da = 0.2 * Math.pow(clamp01(1 - d / (Math.min(W, H) * 0.08)), 2) + 0.09 * sstep(0.05, 1.1, s), oa = wa + da * (1 - wa), j = (y * W + x) * 4;
      O[j] = O[j + 1] = O[j + 2] = oa > 0 ? 255 * wa / oa : 0; O[j + 3] = 255 * oa * clamp01(d + 0.5);
    }
    ctx.putImageData(img, 0, 0); return cv;
  }
  /* El tapón del centro del medidor redondo: una cúpula negra con su brillo. */
  function bakeMeterHub(D, dp) {
    var S = Math.max(8, Math.round(D * dp)), k = S / D, c0 = D / 2, R = D / 2 - 0.6;
    return relief(S, S, function (x, y) {
      var ux = x / k - c0, uy = y / k - c0, r = Math.hypot(ux, uy), d = (R - r) * k; if (d < -0.5) return null;
      return { h: 5 * k * bevel(d, R * 0.7 * k), c: [0.1, 0.105, 0.105], a: clamp01(d + 0.5), m: 1 };
    }, { blur: 1 });
  }
  function bakeMeterLed(w, h, dp, colorName) {
    var W = Math.max(4, Math.round(w * dp)), H = Math.max(4, Math.round(h * dp)), k = W / w, col = rgbOf(colorName);
    return relief(W, H, function (x, y) {
      var ux = x / k, uy = y / k, d = inRect(ux, uy, 0.4, 0.4, w - 0.4, h - 0.4, 2.4) * k; if (d < -0.5) return null;
      return { h: 2.6 * k * bevel(Math.max(d, 0), 2.2 * k), c: mixRgb(col, [1, 1, 1], 0.12), a: clamp01(d + 0.5), m: 3, ao: 1.12 };
    }, { blur: 1 });
  }
  /* La escala impresa y las partes móviles de cada instrumento, en las unidades del cuerpo. */
  function meterPrint(kind, id) {
    var ink = color('crt-gunmetal'), red = color('signal-scarlet'), redInk = color('deep-scarlet'), rad = Math.PI / 180, s = '', i;
    var FONT = 'font-family="M PLUS Rounded 1c, sans-serif"';
    if (kind === 'vu') {
      var marks = [['-20', 0], ['-10', 0.18], ['-7', 0.3], ['-5', 0.4], ['-3', 0.52], ['0', 0.7], ['+3', 1]];
      var ap = function (u, r) { var a = (-48 + 96 * u) * rad; return [100 + Math.sin(a) * r, 150 - Math.cos(a) * r]; };
      var arc = ''; for (i = 0; i <= 60; i++) { var p = ap(i / 60, 104); arc += (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }
      var rz = ''; for (i = 0; i <= 20; i++) { var p2 = ap(0.7 + 0.3 * i / 20, 106); rz += (i ? 'L' : 'M') + p2[0].toFixed(1) + ' ' + p2[1].toFixed(1); }
      s += '<defs><clipPath id="' + id + 'c"><rect x="0" y="0" width="200" height="106"/></clipPath></defs>';
      s += '<path d="' + arc + '" fill="none" stroke="' + ink + '" stroke-width="1.2"/><path d="' + rz + '" fill="none" stroke="' + red + '" stroke-width="5"/>';
      for (i = 0; i <= 30; i++) { var u3 = i / 30, q0 = ap(u3, 104), q1 = ap(u3, i % 5 === 0 ? 96 : 100); s += '<line x1="' + q0[0] + '" y1="' + q0[1] + '" x2="' + q1[0] + '" y2="' + q1[1] + '" stroke="' + (u3 > 0.7 ? red : ink) + '" stroke-width="' + (i % 5 === 0 ? 1.4 : 0.8) + '"/>'; }
      marks.forEach(function (m) { var lp = ap(m[1], 86); s += '<text x="' + lp[0].toFixed(1) + '" y="' + (lp[1] + 3).toFixed(1) + '" text-anchor="middle" font-size="9" ' + FONT + ' font-weight="700" fill="' + (m[1] > 0.69 ? redInk : ink) + '">' + m[0] + '</text>'; });
      s += '<text x="100" y="98" text-anchor="middle" font-size="13" ' + FONT + ' font-weight="800" fill="' + ink + '" letter-spacing="1">VU</text>';
      var nd = 'M-1.3 0 L1.3 0 L0.5 -112 L-0.5 -112 Z';
      s += '<g clip-path="url(#' + id + 'c)"><g transform="translate(1.7 2.7)" opacity=".3" style="filter:blur(.7px)"><path class="ct-meter__rot" d="' + nd + '" fill="#000"/></g><path class="ct-meter__rot" d="' + nd + '" fill="#1b1d1d"/></g>';
    } else if (kind === 'gauge') {
      var gp = function (u, r) { var a = (-120 + 240 * u) * rad; return [80 + Math.sin(a) * r, 80 - Math.cos(a) * r]; };
      var ga = ''; for (i = 0; i <= 60; i++) { var gq = gp(i / 60, 56); ga += (i ? 'L' : 'M') + gq[0].toFixed(1) + ' ' + gq[1].toFixed(1); }
      var gr = ''; for (i = 0; i <= 20; i++) { var gq2 = gp(0.8 + 0.2 * i / 20, 58.5); gr += (i ? 'L' : 'M') + gq2[0].toFixed(1) + ' ' + gq2[1].toFixed(1); }
      s += '<path d="' + ga + '" fill="none" stroke="' + ink + '" stroke-width="1"/><path d="' + gr + '" fill="none" stroke="' + red + '" stroke-width="4"/>';
      for (i = 0; i <= 30; i++) { var gu = i / 30, g0 = gp(gu, 56), g1 = gp(gu, i % 5 === 0 ? 49 : 52.5); s += '<line x1="' + g0[0].toFixed(1) + '" y1="' + g0[1].toFixed(1) + '" x2="' + g1[0].toFixed(1) + '" y2="' + g1[1].toFixed(1) + '" stroke="' + (gu > 0.8 ? red : ink) + '" stroke-width="' + (i % 5 === 0 ? 1.3 : 0.7) + '"/>'; }
      [['0', 0], ['10', 1 / 3], ['20', 2 / 3], ['30', 1]].forEach(function (m) { var lp = gp(m[1], 40); s += '<text x="' + lp[0].toFixed(1) + '" y="' + (lp[1] + 3.4).toFixed(1) + '" text-anchor="middle" font-size="10" ' + FONT + ' font-weight="700" font-style="italic" fill="' + (m[1] > 0.79 ? redInk : ink) + '">' + m[0] + '</text>'; });
      var gn = 'M-1.5 13 L1.5 13 L0.6 -54 L-0.6 -54 Z';
      s += '<g transform="translate(1.6 2.6)" opacity=".3" style="filter:blur(.7px)"><path class="ct-meter__rot" d="' + gn + '" fill="#000"/></g><path class="ct-meter__rot" d="' + gn + '" fill="#1b1d1d"/>';
    } else if (kind === 'vmeter') {
      s += '<text x="30" y="19" text-anchor="middle" font-size="9" ' + FONT + ' font-weight="700" fill="' + ink + '">VU</text><text x="30" y="200" text-anchor="middle" font-size="9" ' + FONT + ' font-weight="700" fill="' + ink + '">dB</text>';
      [['3', 0], ['2', 0.07], ['1', 0.14], ['0', 0.22], ['-1', 0.3], ['-2', 0.36], ['-3', 0.42], ['-5', 0.52], ['-7', 0.62], ['-10', 0.74], ['-20', 1]].forEach(function (m) {
        var y = 30 + m[1] * 150; s += '<line x1="20" y1="' + y + '" x2="27" y2="' + y + '" stroke="' + ink + '" stroke-width=".9"/><text x="44" y="' + (y + 3) + '" text-anchor="middle" font-size="7.5" ' + FONT + ' font-weight="700" fill="' + (m[1] < 0.22 ? redInk : ink) + '">' + m[0] + '</text>';
      });
      s += '<line x1="23" y1="30" x2="23" y2="180" stroke="' + ink + '" stroke-width=".8"/>';
      s += '<g class="ct-meter__mark"><rect x="9" y="-0.4" width="42" height="2.4" fill="#000" opacity=".3" style="filter:blur(.6px)" transform="translate(1.2 1.8)"/><rect x="9" y="-1.2" width="42" height="2.4" fill="' + red + '"/></g>';
    }
    return s;
  }
  var MBC = {};
  function meterObj(el) {
    var kind = el.classList.contains('ct-vu') ? 'vu' : el.classList.contains('ct-gauge') ? 'gauge' : el.classList.contains('ct-vmeter') ? 'vmeter' : 'ledbar';
    var cols = Math.max(1, Math.min(4, parseInt(el.getAttribute('data-columns') || '2', 10) || 2)), rows = 14, rad = Math.PI / 180, id = uid('v');
    var vbW = kind === 'vu' ? 200 : kind === 'gauge' ? 160 : kind === 'vmeter' ? 60 : ledbarW(cols), vbH = kind === 'vu' ? 130 : kind === 'gauge' ? 160 : kind === 'vmeter' ? 210 : 150;
    var win = kind === 'vu' ? [10, 10, 190, 120, 7] : kind === 'vmeter' ? [5, 5, 55, 205, 4] : kind === 'ledbar' ? [6, 6, vbW - 6, 144, 4] : [14, 14, 146, 146, 66];
    el.setAttribute('role', 'meter'); el.setAttribute('aria-valuemin', '0'); el.setAttribute('aria-valuemax', '100');
    if (!el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')) el.setAttribute('aria-label', { vu: 'Nivel VU', gauge: 'Medidor', vmeter: 'Nivel', ledbar: 'Nivel' }[kind]);
    el.style.aspectRatio = vbW + ' / ' + vbH;
    var body = document.createElement('canvas'), glass = document.createElement('canvas'), svg = null, hub = null, leds = [];
    body.className = 'ct-meter__body'; glass.className = 'ct-meter__glass'; body.setAttribute('aria-hidden', 'true'); glass.setAttribute('aria-hidden', 'true');
    glass.style.cssText = 'left:' + (win[0] / vbW * 100) + '%;top:' + (win[1] / vbH * 100) + '%;width:' + ((win[2] - win[0]) / vbW * 100) + '%;height:' + ((win[3] - win[1]) / vbH * 100) + '%';
    el.insertBefore(body, el.firstChild);
    if (kind !== 'ledbar') {
      svg = document.createElementNS(SVGNS, 'svg'); svg.setAttribute('viewBox', '0 0 ' + vbW + ' ' + vbH); svg.setAttribute('class', 'ct-meter__print'); svg.setAttribute('aria-hidden', 'true'); svg.innerHTML = meterPrint(kind, id); el.appendChild(svg);
      if (kind === 'gauge') { hub = document.createElement('canvas'); hub.className = 'ct-meter__hub'; hub.setAttribute('aria-hidden', 'true'); hub.style.cssText = 'left:' + (72 / 160 * 100) + '%;top:' + (72 / 160 * 100) + '%;width:' + (16 / 160 * 100) + '%;height:' + (16 / 160 * 100) + '%'; el.appendChild(hub); }
    } else {
      for (var c = 0; c < cols; c++) for (var r = 0; r < rows; r++) {
        var lvl = (rows - 1 - r) / (rows - 1), p = ledXY(c, r), d = document.createElement('i');
        d.className = 'ct-meter__led ct-meter__led--' + (lvl > 0.82 ? 'c' : lvl > 0.6 ? 'b' : 'a'); d.setAttribute('data-c', c); d.setAttribute('data-l', lvl.toFixed(3));
        d.style.cssText = 'left:' + ((p[0] - 9) / vbW * 100) + '%;top:' + ((p[1] - 3.1) / vbH * 100) + '%;width:' + (18 / vbW * 100) + '%;height:' + (6.2 / vbH * 100) + '%';
        el.appendChild(d); leds.push(d);
      }
    }
    el.appendChild(glass);
    var last = '';
    function bake() {
      var w = el.offsetWidth; if (!w) return;
      var dp = dprOf(), W = Math.round(w * dp), H = Math.round(W * vbH / vbW), key = [kind, cols, W, H].join('|'); if (key === last) return; last = key;
      var B = MBC['b|' + key] || (MBC['b|' + key] = bakeMeterBody(kind, W, H, { cols: cols }));
      body.width = B.width; body.height = B.height; body.getContext('2d').drawImage(B, 0, 0);
      var k = W / vbW, gw = Math.max(8, Math.round((win[2] - win[0]) * k)), gh = Math.max(8, Math.round((win[3] - win[1]) * k)), gr = MBC['g|' + [gw, gh, kind].join('|')] || (MBC['g|' + [gw, gh, kind].join('|')] = bakeMeterGlass(gw, gh, win[4] * k, kind === 'gauge'));
      glass.width = gr.width; glass.height = gr.height; glass.getContext('2d').drawImage(gr, 0, 0);
      if (hub) { var hd = Math.round(16 * k), hr = MBC['h|' + hd] || (MBC['h|' + hd] = bakeMeterHub(16, k)); hub.width = hr.width; hub.height = hr.height; hub.getContext('2d').drawImage(hr, 0, 0); }
      leds.forEach(function (d) {
        var cn = ledColorName(+d.getAttribute('data-l')), lk = 'l|' + cn + '|' + W, sp = MBC[lk] || (MBC[lk] = bakeMeterLed(18, 6.2, k, cn).toDataURL());
        d.style.backgroundImage = 'url(' + sp + ')';
      });
    }
    registerBake(el, bake);
    var sp = spring(kind === 'vu' ? 120 : 200, kind === 'vu' ? 9 : 16), extra = [0, 0], raf = 0, lastT = 0;
    sp.x = sp.target = parseFloat(el.getAttribute('data-value') || '0');
    function render() {
      var v = clamp01(sp.x);
      el.setAttribute('aria-valuenow', Math.round(v * 100));
      if (kind === 'vu') svg.querySelectorAll('.ct-meter__rot').forEach(function (n) { n.setAttribute('transform', 'translate(100 150) rotate(' + (-48 + 96 * v) + ')'); });
      else if (kind === 'gauge') svg.querySelectorAll('.ct-meter__rot').forEach(function (n) { n.setAttribute('transform', 'translate(80 80) rotate(' + (-120 + 240 * v) + ')'); });
      else if (kind === 'vmeter') svg.querySelector('.ct-meter__mark').setAttribute('transform', 'translate(0 ' + (180 - v * 150) + ')');
      else leds.forEach(function (d) { var cv = clamp01(v + extra[+d.getAttribute('data-c') % 2]); d.classList.toggle('is-on', +d.getAttribute('data-l') <= cv); });
    }
    function loop(now) {
      var dt = Math.min(0.05, (now - (lastT || now)) / 1000); lastT = now;
      if (el.getAttribute('data-demo') === 'true' && !reduced()) { var t = now / 1000; sp.target = clamp01(0.45 + 0.28 * Math.sin(t * 2.1) * Math.sin(t * 0.7 + 1) + 0.18 * (Math.sin(t * 9.3) * 0.5 + 0.5) * Math.random()); extra = [(Math.random() - 0.5) * 0.08, (Math.random() - 0.5) * 0.08]; }
      sp.step(dt); render();
      raf = requestAnimationFrame(loop);
    }
    new MutationObserver(function () { sp.target = parseFloat(el.getAttribute('data-value') || '0'); if (reduced()) { sp.x = sp.target; render(); } }).observe(el, { attributes: true, attributeFilter: ['data-value'] });
    render(); if (!reduced()) raf = requestAnimationFrame(loop);
  }

  /* ── Botones físicos que se quedan pulsados ── */
  function toggleObj(el) {
    el.addEventListener('click', function () { var on = el.getAttribute('aria-pressed') !== 'true'; el.setAttribute('aria-pressed', String(on)); fire(el, 'ct-toggle', { on: on }); });
  }

  /* ── Interfaz serena: menús y avisos ── */
  function calmBehaviors(root) {
    Array.prototype.forEach.call(root.querySelectorAll('.ct-menu > button:not([data-ct-ui])'), function (b) {
      b.setAttribute('data-ct-ui', ''); b.setAttribute('aria-haspopup', 'menu'); b.setAttribute('aria-expanded', 'false');
      b.addEventListener('click', function (e) { e.stopPropagation(); var m = b.parentElement, open = !m.classList.contains('is-open'); closeMenus(); if (open) { m.classList.add('is-open'); b.setAttribute('aria-expanded', 'true'); var f = m.querySelector('.ct-menu__item'); if (f) f.focus(); } });
    });
    Array.prototype.forEach.call(root.querySelectorAll('.ct-menu__list:not([data-ct-ui])'), function (l) {
      l.setAttribute('data-ct-ui', ''); l.setAttribute('role', 'menu');
      l.addEventListener('keydown', function (e) {
        var items = Array.prototype.slice.call(l.querySelectorAll('.ct-menu__item:not([disabled])')), i = items.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
        if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
      });
      l.querySelectorAll('.ct-menu__item').forEach(function (it) { if (!it.getAttribute('role')) it.setAttribute('role', it.hasAttribute('aria-checked') ? 'menuitemcheckbox' : 'menuitem'); it.addEventListener('click', function () { if (it.hasAttribute('aria-checked')) it.setAttribute('aria-checked', String(it.getAttribute('aria-checked') !== 'true')); closeMenus(); }); });
    });
  }
  function closeMenus() { document.querySelectorAll('.ct-menu.is-open').forEach(function (m) { m.classList.remove('is-open'); var b = m.querySelector(':scope > button'); if (b) b.setAttribute('aria-expanded', 'false'); }); }
  document.addEventListener('click', function (e) { if (!e.target.closest || !e.target.closest('.ct-menu__list')) closeMenus(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { var open = document.querySelector('.ct-menu.is-open > button'); closeMenus(); if (open) open.focus(); } });
  function toast(msg, o) {
    o = o || {}; var host = document.querySelector('.ct-toasts');
    if (!host) { host = document.createElement('div'); host.className = 'ct-toasts ct-root'; host.setAttribute('aria-live', 'polite'); document.body.appendChild(host); }
    var t = document.createElement('div'), time = o.time || 4000; t.className = 'ct-toast' + (o.tone ? ' ct-toast--' + o.tone : ''); t.setAttribute('role', o.tone === 'danger' ? 'alert' : 'status');
    t.innerHTML = '<span class="ct-toast__icon" aria-hidden="true">' + icon({ success: 'check-circle', warning: 'alert', danger: 'x-circle' }[o.tone] || 'info', 16) + '</span><div><span class="ct-toast__title"></span><span class="ct-toast__msg"></span></div><button class="ct-toast__close" aria-label="Cerrar aviso">×</button>';
    t.querySelector('.ct-toast__title').textContent = o.title || ''; if (!o.title) t.querySelector('.ct-toast__title').remove();
    t.querySelector('.ct-toast__msg').textContent = msg;
    function close() { if (t.classList.contains('is-out')) return; t.classList.add('is-out'); setTimeout(function () { t.remove(); }, reduced() ? 0 : 200); }
    t.querySelector('.ct-toast__close').addEventListener('click', close);
    host.appendChild(t); if (time > 0) setTimeout(close, time);
    return { close: close };
  }

  /* ── Macintosh horneada con el mismo relieve que el marco de pantalla ──
     bakeCase es pura (ancho, alto, opciones → canvas) para poder probarla; caseObj solo la coloca en el DOM. */
  function bakeCase(W, H, o) {
    o = o || {};
    var k = W / 1000, bc = rgbOf(o.color || 'case-bone'), dark = [0.075, 0.08, 0.08], diskC = o.disk, bm = o.finish === 'abs' ? 1 : 0;
    var dc = diskC && diskC !== 'none' ? rgbOf(diskC) : null, TOP = 70;
    /* Oclusión direccional: la luz viene de arriba a la izquierda, así que dentro de un hueco la pared de arriba y la
       de la izquierda dan sombra al suelo; las de abajo y la derecha, poca. */
    function occl(ux, uy, x0, y0, x1, y1) {
      var occ = 0.46 * Math.exp(-(uy - y0) / 16) + 0.34 * Math.exp(-(ux - x0) / 11) + 0.1 * Math.exp(-(y1 - uy) / 9) + 0.1 * Math.exp(-(x1 - ux) / 9);
      return 1 - Math.min(0.62, occ);
    }
    /* Sombra que una pieza elevada deja sobre lo que tiene alrededor, más fuerte abajo y a la derecha. */
    function cast(ux, uy, x0, y0, x1, y1, r, reach, amt) {
      var d = -inRect(ux, uy, x0, y0, x1, y1, r); if (d <= 0 || d > reach * 5) return 1;
      var cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, v = ((ux - cx) / ((x1 - x0) / 2)) * 0.4 + ((uy - cy) / ((y1 - y0) / 2)) * 0.9;
      return 1 - amt * Math.exp(-d / reach) * clamp01(0.3 + 0.7 * clamp01(0.5 + v * 0.6));
    }
    return relief(W, H, function (x, y) {
      var ux = x / k, uy = y / k, s;
      var dB = inRect(ux, uy, 0, 0, 1000, 1112, 52) * k;
      if (dB < -0.5) {
        /* Base: bloque más estrecho bajo el caparazón, con rueda moleteada, dos botones, un puerto y patas. */
        var dBase = inRect(ux, uy, 34, 1090, 966, 1272, 14) * k;
        if (dBase > -0.5) {
          var s0 = { h: 16 * k * bevel(dBase, 10 * k), c: mixRgb(bc, [0, 0, 0], 0.1), a: clamp01(dBase + 0.5), m: bm, ao: uy < 1160 ? 0.42 + 0.58 * clamp01((uy - 1112) / 48) : 1 };
          if (ux > 160 && ux < 304 && uy < 1150) { var rib = ((ux - 168) / 7.6) % 1; s0.h += (rib < 0.5 ? 5 : 0) * k; s0.c = mixRgb(bc, [0, 0, 0], rib < 0.5 ? 0.14 : 0.3); s0.ao = Math.min(s0.ao, 0.9); }
          [[470, 1110, 562, 1140], [574, 1110, 666, 1140]].forEach(function (b) { var db = inRect(ux, uy, b[0], b[1], b[2], b[3], 6) * k; if (db > 0) { s0.h += 4 * k * bevel(db, 3 * k); s0.c = mixRgb(bc, [0, 0, 0], 0.16); s0.ao = Math.min(s0.ao, 0.95); } });
          var dp2 = inRect(ux, uy, 740, 1170, 844, 1236, 10) * k; if (dp2 > -0.5) { s0.h -= 6 * k * clamp01(dp2 / (3 * k) + 0.5); s0.ao = Math.min(s0.ao, 0.55 + 0.4 * clamp01(dp2 / (10 * k))); }
          return s0;
        }
        var dFoot = Math.max(inRect(ux, uy, 80, 1260, 170, 1290, 6), inRect(ux, uy, 830, 1260, 920, 1290, 6)) * k;
        if (dFoot > -0.5) return { h: 6 * k, c: mixRgb(bc, [0, 0, 0], 0.4), a: clamp01(dFoot + 0.5), m: 4 };
        return null;
      }
      /* Caparazón: borde generoso que rueda hacia atrás, como en la pieza real. */
      var g = 1.0 - 0.1 * clamp01(uy / 1112) - 0.035 * clamp01(ux / 1000);
      s = { h: TOP * k * bevel(dB, 66 * k), c: bc, a: clamp01(dB + 0.5), m: bm };
      var ao = g;
      /* Hueco del visor: más hondo y con la pared inclinada; el zócalo de abajo es más ancho que el borde de arriba. */
      var dR = inRect(ux, uy, 96, 84, 904, 672, 26);
      if (dR > -2) {
        var t = clamp01((dR + 2) / 32); s.h -= 36 * k * t; s.c = mixRgb(bc, [0, 0, 0], 0.07 + 0.08 * (uy < 330 ? 1 - (uy - 84) / 246 : 0) * t);
        ao = g * (1 - t + t * occl(ux, uy, 96, 84, 904, 672));
      }
      /* Marco negro del tubo: brillante, con la cara interior inclinada hacia el cristal. */
      var dK = inRect(ux, uy, 146, 128, 854, 610, 46) * k;
      if (dK > -0.5) {
        s.h = (TOP - 36) * k + 22 * k * bevel(dK, 16 * k);
        s.c = dark; s.m = bm; ao = 1;
        var dIn = -inRect(ux, uy, 168, 150, 832, 585, 34) * k;
        if (dIn < 14 * k) s.h -= 14 * k * (1 - dIn / (14 * k));
      } else if (dR > 0) { ao *= cast(ux, uy, 146, 128, 854, 610, 46, 12, 0.42); }
      /* Disquetera: placa elevada con su ranura, el botón de expulsar y la lengüeta del disquete. */
      var dL = inRect(ux, uy, 520, 784, 876, 856, 10) * k;
      if (dL > -0.5) {
        s.h += 12 * k * bevel(dL, 6 * k); s.c = mixRgb(bc, [1, 1, 1], 0.03); ao = g;
        var dN = inRect(ux, uy, 752, 794, 864, 846, 7) * k; if (dN > -0.5) { s.h += 6 * k * bevel(dN, 3 * k); s.c = mixRgb(bc, [0, 0, 0], 0.04); }
        var dS = inRect(ux, uy, 544, 812, 852, 827, 5) * k; if (dS > -0.5) { s.h -= 22 * k * clamp01(dS / (2 * k) + 0.5); s.c = [0.04, 0.04, 0.04]; s.m = 4; ao = 0.5; }
        if (dc && inRect(ux, uy, 796, 830, 840, 839, 2) > 0) { s.h += 6 * k; s.c = dc; s.m = 1; ao = 1; }
      } else { ao *= cast(ux, uy, 520, 784, 876, 856, 10, 9, 0.3); }
      s.ao = ao;
      if (inRect(ux, uy, 168, 150, 832, 585, 34) > 0.5) return null;
      return s;
    }, { blur: Math.max(1, Math.round(k * 1.4)) });
  }
  function caseObj(el) {
    var scr = el.querySelector('.ct-screen'), cv = bgCanvas(el, 'ct-case__bg');
    if (scr && !scr.querySelector('.ct-screen__glass')) { var gl = document.createElement('span'); gl.className = 'ct-screen__glass'; gl.setAttribute('aria-hidden', 'true'); scr.appendChild(gl); }
    var last = '';
    function bake() {
      var w = el.offsetWidth; if (!w) return;
      var dp = dpFor(w, w * 1.3, 1000000), W = Math.round(w * dp), H = Math.round(W * 1.3);
      var o = { color: el.getAttribute('data-color'), disk: el.getAttribute('data-disk'), finish: el.getAttribute('data-finish') };
      var key = [W, o.color, o.disk, o.finish].join('|'); if (key === last) return; last = key;   /* el observador de tamaño dispara una vez al inicio: no hornear dos veces */
      var img = bakeCase(W, H, o);
      cv.width = W; cv.height = H; cv.getContext('2d').drawImage(img, 0, 0); el.classList.add('is-drawn');
    }
    registerBake(el, bake);
  }

  /* Disquete de 3,5": horneado con el motor de relieve, el mismo de la keycap, la Macintosh y el cutting mat.
     Dos capas: el cuerpo (plástico con grano, escalón de la persiana, hueco de la etiqueta con su hoja de papel,
     flecha en relieve y casillas hundidas) y la persiana, aparte para poder deslizarse. La etiqueta queda en el DOM,
     nítida y accesible, como la leyenda de la keycap. Unidades de diseño: 100 de ancho por 104 de alto. */
  function sdPoly(px, py, pts) {
    var d = 1e9, inside = false, n = pts.length;
    for (var i = 0, j = n - 1; i < n; j = i++) {
      var ax = pts[j][0], ay = pts[j][1], bx = pts[i][0], by = pts[i][1], ex = bx - ax, ey = by - ay;
      var t = clamp01(((px - ax) * ex + (py - ay) * ey) / (ex * ex + ey * ey));
      d = Math.min(d, Math.hypot(px - ax - ex * t, py - ay - ey * t));
      if ((ay > py) !== (by > py) && px < (bx - ax) * (py - ay) / (by - ay) + ax) inside = !inside;
    }
    return inside ? -d : d;
  }
  function bakeFloppy(W, H, o) {
    o = o || {};
    var k = W / 100, bc = rgbOf(o.color || 'case-linen'), mc = rgbOf(o.metal || 'crt-gunmetal'), band = rgbOf(o.band || 'signal-tangerine');
    var paper = mixRgb(rgbOf('case-linen'), [1, 1, 1], 0.2), bm = o.finish === 'abs' ? 1 : 0, dark = lum(mc) < 0.35;
    var ARROW = [[6.4, 8.8], [9.1, 12.6], [7.6, 12.6], [7.6, 16.4], [5.2, 16.4], [5.2, 12.6], [3.7, 12.6]];
    /* Silueta: rectángulo redondeado, esquina superior derecha cortada y escalón entre los dos hombros. */
    function bodySD(ux, uy) {
      var d = inRect(ux, uy, 2, 2, 98, 102, 1.8);
      d = Math.min(d, (89 - (ux - uy)) / 1.4142);
      return Math.min(d, -inRect(ux, uy, 11, -20, 89, 3.2, 0.5));
    }
    var body = relief(W, H, function (x, y) {
      var ux = x / k, uy = y / k, dB = bodySD(ux, uy) * k;
      if (dB < -0.5) return null;
      var s = { h: 4.2 * k * bevel(dB, 1.7 * k), c: bc, a: clamp01(dB + 0.5), m: bm }, ao = 1;
      var dW = inRect(ux, uy, 11, -20, 89, 36.5, 1) * k;                      /* escalón donde vive la persiana */
      if (dW > 0) { s.h -= 1.2 * k * clamp01(dW / (0.7 * k)); ao = 0.84 + 0.16 * clamp01(dW / (2.4 * k)); }
      var dP = inRect(ux, uy, 11.5, 44, 88, 100.2, 2.4) * k;                  /* hueco de la etiqueta */
      if (dP > 0) {
        s.h -= 1.2 * k * clamp01(dP / (0.6 * k)); ao = Math.min(ao, 0.78 + 0.22 * clamp01(dP / (1.8 * k)));
        s.c = mixRgb(bc, [0, 0, 0], 0.05);
        var dL = inRect(ux, uy, 12.3, 44.9, 87.2, 99.5, 1.7) * k;               /* hoja de papel con su franja de color */
        if (dL > -0.5) {
          var ink = mixRgb(paper, band, clamp01((uy - 96.1) * k + 0.5));
          s.h += 0.95 * k * bevel(Math.max(dL, 0), 0.4 * k); s.c = mixRgb(s.c, ink, clamp01(dL + 0.5)); ao = 1;
        }
      }
      [[4.5, 90.3, 9.9, 95.1], [90.2, 90.3, 95.4, 95.1]].forEach(function (p) {   /* casillas hundidas de abajo */
        var dq = inRect(ux, uy, p[0], p[1], p[2], p[3], 0.5) * k;
        if (dq > 0) { s.h -= 1.5 * k * clamp01(dq / (0.5 * k)); s.c = mixRgb(bc, [0, 0, 0], 0.1); ao = Math.min(ao, 0.78 + 0.22 * clamp01(dq / (1.3 * k))); }
      });
      if (ux < 12 && uy < 20) { var e = clamp01((0.5 - Math.abs(sdPoly(ux, uy, ARROW))) * k + 0.5); if (e > 0) s.h += 1.1 * k * e; }   /* flecha en relieve */
      s.ao = ao; return s;
    }, { blur: 1 });
    var shutter = relief(W, H, function (x, y) {
      var ux = x / k, uy = y / k, dS = inRect(ux, uy, 24.5, 1.6, 75.6, 36.3, 1) * k;
      if (dS < -0.5) return null;
      var dWn = inRect(ux, uy, 54.8, 7.3, 67.6, 33.9, 1.5) * k;                /* ventana */
      var dSl = Math.max(inRect(ux, uy, 27.2, 1.2, 33, 3.9, 0.4), inRect(ux, uy, 55.4, 1.2, 60.8, 3.9, 0.4)) * k;   /* ranuras del borde */
      var hole = Math.max(dWn, dSl); if (hole > 0.5) return null;
      return { h: 1.4 * k * Math.min(bevel(dS, 0.5 * k), bevel(-hole, 0.45 * k)), c: mc, a: clamp01(dS + 0.5) * clamp01(0.5 - hole), m: dark ? 0 : 2, ao: 1 };
    }, { blur: 1 });
    return { body: body, shutter: shutter };
  }
  var FLC = {};
  function floppyObj(el) {
    var body = bgCanvas(el, 'ct-floppy__body'), shut = document.createElement('canvas');
    shut.className = 'ct-floppy__shutter'; shut.setAttribute('aria-hidden', 'true'); el.insertBefore(shut, body.nextSibling);
    var label = el.querySelector('.ct-floppy__label');
    if (!label && el.getAttribute('data-label')) { label = document.createElement('span'); label.className = 'ct-floppy__label'; label.textContent = el.getAttribute('data-label'); el.appendChild(label); }
    if (el.getAttribute('data-sub') && !el.querySelector('.ct-floppy__sub')) { var sub = document.createElement('span'); sub.className = 'ct-floppy__sub'; sub.textContent = el.getAttribute('data-sub'); el.appendChild(sub); }
    el.setAttribute('role', 'img'); if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', 'Disquete' + (label ? ': ' + label.textContent : ''));
    var last = '';
    function bake() {
      var w = el.offsetWidth; if (!w) return;
      var dp = dpFor(w, w * 1.04, 800000), W = Math.round(w * dp), H = Math.round(W * 1.04);
      var o = { color: el.getAttribute('data-color'), metal: el.getAttribute('data-metal'), band: el.getAttribute('data-band'), finish: el.getAttribute('data-finish') };
      var key = [W, o.color, o.metal, o.band, o.finish].join('|'); if (key === last) return; last = key;   /* el observador de tamaño dispara una vez al inicio: no hornear dos veces */
      var L = FLC[key] || (FLC[key] = bakeFloppy(W, H, o));
      [[body, L.body], [shut, L.shutter]].forEach(function (p) { p[0].width = W; p[0].height = H; p[0].getContext('2d').drawImage(p[1], 0, 0); });
    }
    registerBake(el, bake);
  }

  /* ── Fader de consola ───────────────────────────────────────
     Un <input type="range"> real, invisible, da el teclado, el lector de pantalla y el arrastre; encima se dibujan una ranura
     horneada con paredes y sombra y un mando horneado con el motor de relieve (goma satinada, cresta central y línea de índice
     de metal). El mando sigue el valor con --v. En vertical se gira un range horizontal, así se comporta igual en todos los
     navegadores. Las marcas y la leyenda son texto y líneas nítidas, no píxeles horneados. */
  function bakeFaderLane(sw, sh, dp, vert, cb, ca) {
    var W = Math.round(sw * dp), H = Math.round(sh * dp), k = dp, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    var ctx = cv.getContext('2d'), img = ctx.createImageData(W, H), O = img.data;
    var sl = Math.max(6, Math.round(cb * 0.115)), len = vert ? sh : sw, A0 = ca / 2 - 6, A1 = len - ca / 2 + 6, cx = (vert ? sw : sh) / 2, D = 3.4, c = 2.6;
    var Lx = -0.2267, Ly = -0.561, Lz = 0.796;
    function sd(px, py) { var a = vert ? py : px, b = vert ? px : py, da = Math.max(A0 + sl / 2, Math.min(A1 - sl / 2, a)); return sl / 2 - Math.hypot(a - da, b - cx); }
    function hg(px, py) { var d = sd(px, py); if (d >= 0) return -D; if (d <= -c) return 0; var t = 1 + d / c; return -D * t * t * (3 - 2 * t); }
    var e = 0.3;
    for (var y = 0; y < H; y++) for (var x = 0; x < W; x++) {
      var px = (x + 0.5) / k, py = (y + 0.5) / k, d = sd(px, py), j = (y * W + x) * 4;
      if (d >= 0) {                                                       /* el fondo de la ranura, casi negro */
        var a = vert ? py : px, along = clamp01((a - A0) / Math.max(1, A1 - A0)), g = 0.045 + 0.02 * along;
        O[j] = g * 255; O[j + 1] = (g + 0.004) * 255; O[j + 2] = g * 255; O[j + 3] = 255 * clamp01(d * k + 0.5);
      } else if (d > -c) {                                                /* el chaflán: la pared de abajo recoge luz, la de arriba da sombra */
        var gx = (hg(px + e, py) - hg(px - e, py)) / (2 * e), gy = (hg(px, py + e) - hg(px, py - e)) / (2 * e), nl = Math.hypot(gx, gy, 1);
        var delta = (-gx * Lx - gy * Ly + Lz) / nl - Lz, wa = delta > 0 ? Math.min(0.5, delta * 3.2) : 0, ba = delta < 0 ? Math.min(0.62, -delta * 3.6) : 0;
        var oa = wa + ba * (1 - wa); O[j] = O[j + 1] = O[j + 2] = oa > 0 ? 255 * wa / oa : 0; O[j + 3] = 255 * oa;
      }
    }
    ctx.putImageData(img, 0, 0); return cv;
  }
  function bakeFaderCap(cb, ca, dp, vert, o) {
    o = o || {};
    var w = vert ? cb : ca, h = vert ? ca : cb, W = Math.round(w * dp), H = Math.round(h * dp), k = dp, base = rgbOf(o.color || 'crt-charcoal');
    var inlay = lum(base) > 0.5 ? rgbOf('crt-gunmetal') : [0.93, 0.93, 0.9], rc = Math.min(w, h) * 0.2, eb = Math.min(w, h) * 0.16, pad = 0.75;
    var ac = (vert ? h : w) / 2, mB = cb * 0.12, rr = (vert ? 0.075 : 0.13) * cb;
    function R(ux, uy, a0, a1, b0, b1, r) { return vert ? inRect(ux, uy, b0, a0, b1, a1, r) : inRect(ux, uy, a0, b0, a1, b1, r); }
    return relief(W, H, function (x, y) {
      var ux = x / k, uy = y / k, d = inRect(ux, uy, pad, pad, w - pad, h - pad, rc) * k; if (d < -0.5) return null;
      var a = vert ? uy : ux, t = (a - ac) / (ac - pad);
      var s = { h: 6 * k * bevel(d, eb * k), c: base, a: clamp01(d + 0.5), m: 0 };
      s.h += rr * k * (1 - Math.min(1, Math.abs(t))) * clamp01(d / (eb * k));                     /* cresta: la mitad de arriba recoge luz, la de abajo no */
      var dL = R(ux, uy, ac - 1.1, ac + 1.1, mB, cb - mB, 1.1) * k;                              /* línea de índice, de metal */
      if (dL > -0.5) { s.h += 1.4 * k * bevel(Math.max(dL, 0), 0.7 * k); s.c = mixRgb(s.c, inlay, clamp01(dL + 0.5)); s.m = 1; }
      var dG = R(ux, uy, ac + 1.9, ac + 3.5, mB, cb - mB, 0.8) * k;                              /* y su ranura oscura debajo */
      if (dG > -0.5) { s.h -= 1.2 * k * clamp01(dG / (0.5 * k) + 0.5); s.c = mixRgb(s.c, [0, 0, 0], 0.5 * clamp01(dG + 0.5)); s.ao = 0.7; }
      return s;
    }, { blur: 1 });
  }
  var FDL = {}, FDC = {};
  function faderObj(input) {
    var vert = input.classList.contains('ct-fader--v'), lg = input.classList.contains('ct-fader--lg');
    var unit = document.createElement('div'), stage = document.createElement('div'), lane = document.createElement('canvas'), cap = document.createElement('canvas');
    unit.className = 'ct-fader-unit ' + (vert ? 'is-v' : 'is-h') + (lg ? ' is-lg' : ''); stage.className = 'ct-fader__stage';
    lane.className = 'ct-fader__lane'; cap.className = 'ct-fader__cap'; lane.setAttribute('aria-hidden', 'true'); cap.setAttribute('aria-hidden', 'true');
    var len = input.getAttribute('data-len') || input.style.getPropertyValue('--len');
    if (len) unit.style.setProperty('--len', /^[\d.]+$/.test(len.trim()) ? len.trim() + 'px' : len);
    input.parentNode.insertBefore(unit, input);
    var label = input.getAttribute('data-label');
    if (label) {
      var lg2 = document.createElement('span'); lg2.className = 'ct-fader__legend'; lg2.textContent = label; lg2.setAttribute('aria-hidden', 'true'); unit.appendChild(lg2);
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) input.setAttribute('aria-label', label);
    }
    unit.appendChild(stage); stage.appendChild(lane);
    var n = parseInt(input.getAttribute('data-ticks') || (lg ? 9 : 7), 10) || 0;
    ['a', 'b'].forEach(function (side) {
      var tk = document.createElement('span'); tk.className = 'ct-fader__ticks ct-fader__ticks--' + side; tk.setAttribute('aria-hidden', 'true');
      for (var i = 0; i < n; i++) { var m = document.createElement('i'); m.style.setProperty('--p', n > 1 ? String(i / (n - 1)) : '.5'); if (i === 0 || i === n - 1 || i === (n - 1) / 2) m.className = 'is-major'; tk.appendChild(m); }
      if (n) stage.appendChild(tk);
    });
    stage.appendChild(cap); stage.appendChild(input);
    if (vert) input.setAttribute('aria-orientation', 'vertical');
    function sync() { var mn = parseFloat(input.min || 0), mx = parseFloat(input.max || 100); unit.style.setProperty('--v', String(clamp01((parseFloat(input.value) - mn) / ((mx - mn) || 1)))); }
    input.addEventListener('input', sync); input.addEventListener('change', sync); sync();
    var timer = 0;
    function release() { clearTimeout(timer); unit.classList.remove('is-grab', 'is-drag'); document.removeEventListener('pointerup', release); document.removeEventListener('pointercancel', release); }
    input.addEventListener('pointerdown', function (e) {
      var r = cap.getBoundingClientRect(), on = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      unit.classList.add('is-grab'); clearTimeout(timer);
      if (on) unit.classList.add('is-drag'); else timer = setTimeout(function () { unit.classList.add('is-drag'); }, 340);   /* clic en la ranura: salta con resorte; luego, arrastre sin retraso */
      document.addEventListener('pointerup', release); document.addEventListener('pointercancel', release);
    });
    var last = '';
    function bake() {
      var sw = stage.offsetWidth, sh = stage.offsetHeight; if (!sw || !sh) return;
      var cs = getComputedStyle(unit), cb = parseFloat(cs.getPropertyValue('--cb')) || 44, ca = parseFloat(cs.getPropertyValue('--ca')) || 28, dp = dprOf();
      var cn = input.getAttribute('data-cap') || 'negro', col = { negro: 'crt-charcoal', grafito: 'crt-charcoal', crema: 'case-bone', tangerine: 'signal-tangerine', redondo: 'crt-charcoal', textura: 'crt-charcoal', metal: 'crt-charcoal' }[cn] || cn;
      var key = [vert, sw, sh, cb, ca, dp, col].join('|'); if (key === last) return; last = key;
      var lk = ['l', vert, sw, sh, cb, ca, dp].join('|'), ck = ['c', vert, cb, ca, dp, col].join('|');
      var L = FDL[lk] || (FDL[lk] = bakeFaderLane(sw, sh, dp, vert, cb, ca)), C = FDC[ck] || (FDC[ck] = bakeFaderCap(cb, ca, dp, vert, { color: col }));
      lane.width = L.width; lane.height = L.height; lane.getContext('2d').drawImage(L, 0, 0);
      cap.width = C.width; cap.height = C.height; cap.getContext('2d').drawImage(C, 0, 0);
    }
    registerBake(stage, bake);
  }

  /* ── Interruptor deslizante ──────────────────────────────────
     Un interruptor de corredera de aparato de verdad: un bisel claro de plástico satinado con una ranura en píldora y, dentro, un pomo
     blanco moleteado en diamantes que se desliza. La ranura es oscura; al correr el pomo asoma, por detrás, el naranja de encendido.
     Se hornean solo dos piezas con el motor de relieve (el bisel con su ranura, y el pomo), una vez por tamaño; el pomo se mueve
     con un resorte y el naranja, la sombra del pomo y el brillo que se escapa al panel los pone el CSS. Unidades: el bisel mide 100×70. */
  function bakeSlideBezel(S, dp) {
    var k = S * dp / 100, W = Math.round(112 * k), H = Math.round(82 * k), white = rgbOf('case-linen'), BLK = [0, 0, 0];
    function sm(t) { t = clamp01(t); return t * t * (3 - 2 * t); }
    function dOut(ux, uy) { return inRect(ux, uy, 0, 0, 100, 70, 35); }
    function dSlot(ux, uy) { return inRect(ux, uy, 7, 7, 93, 63, 28); }
    /* Tres capas que se cruzan en dos bordes (el exterior y la ranura). Cada borde se mezcla por cobertura, no por píxel entero:
       así el contorno sale suavizado y no en dientes de sierra. */
    function mix(t, A, B) {
      var a = t * A.a + (1 - t) * B.a, c = a > 0 ? [(A.c[0] * t * A.a + B.c[0] * (1 - t) * B.a) / a, (A.c[1] * t * A.a + B.c[1] * (1 - t) * B.a) / a, (A.c[2] * t * A.a + B.c[2] * (1 - t) * B.a) / a] : B.c;
      return { h: t * A.h + (1 - t) * B.h, c: c, a: a, m: 0, ao: 1 };
    }
    function lit(dist, ux, uy) { var g1 = dist(ux + 0.4, uy) - dist(ux - 0.4, uy), g2 = dist(ux, uy + 0.4) - dist(ux, uy - 0.4), gl = Math.hypot(g1, g2) || 1; return Math.max(0, (g1 * 0.37 + g2 * 0.93) / gl); }
    function rim(ux, uy, dB, dW) {                                                                  /* el aro: redondeado fuera, un chaflán y la pared a la ranura */
      var zr = 6, zo = 6 * bevel(Math.max(dB, 0) * k, 3.2 * k);
      if (dW > -3.2) zr = 6 - 1.0 * sm((dW + 3.2) / 1.8);
      if (dW > -1.4) zr = 5 - 4 * sm((dW + 1.4) / 1.4);
      var c = mixRgb(white, [0.82, 0.82, 0.8], clamp01((ux + uy - 60) / 120));
      if (dW > -3.5 && dW < -3.0) c = mixRgb(c, [0.62, 0.62, 0.6], 0.4);                           /* la juntura del chaflán */
      return { h: Math.min(zo, zr) * k, c: c, a: 1 };
    }
    function slot(ux, uy, dW) {                                                                     /* la ranura: solo la sombra de sus paredes, el suelo se ve por debajo */
      return { h: 1 * k, c: BLK, a: Math.min(0.62, 0.58 * Math.exp(-Math.max(dW, 0) / 3.2) * (0.3 + 0.7 * lit(dSlot, ux, uy))) };
    }
    function outer(ux, uy, dB) {                                                                    /* el panel alrededor: más sombra en el lado de la luz */
      var out = Math.max(-dB, 0); if (out > 8) return { h: 0, c: BLK, a: 0 };
      return { h: 0, c: BLK, a: 0.42 * Math.exp(-out / 2.3) * (0.5 + 0.5 * lit(dOut, ux, uy)) * clamp01((8 - out) / 2) };
    }
    return relief(W, H, function (x, y) {
      var ux = x / k - 6, uy = y / k - 6, dB = dOut(ux, uy), dW = dSlot(ux, uy), tO = clamp01(dB * k + 0.5), tS = clamp01(-dW * k + 0.5), inner = null, O;
      if (tO > 0) {
        if (tS >= 1) inner = rim(ux, uy, dB, dW); else if (tS <= 0) inner = slot(ux, uy, dW); else inner = mix(tS, rim(ux, uy, dB, dW), slot(ux, uy, dW));
        if (tO >= 1) return Object.assign({ m: 0, ao: 1 }, inner);
      }
      O = outer(ux, uy, dB);
      if (!inner) return O.a > 0 ? Object.assign({ m: 0 }, O) : null;
      return mix(tO, Object.assign({ m: 0 }, inner), O);
    }, { blur: 1 });
  }
  function bakeSlideKnob(S, dp) {
    var k = S * dp / 100, P = 2, W = Math.round((60 + 2 * P) * k), H = Math.round((55 + 2 * P) * k), base = rgbOf('case-linen');
    var pitch = Math.max(5.2, 5.6 / k), amp = 0.2 * pitch;
    function sm(t) { t = clamp01(t); return t * t * (3 - 2 * t); }
    function tri(t) { t -= Math.floor(t); return 1 - Math.abs(2 * t - 1); }
    return relief(W, H, function (x, y) {
      var ux = x / k - P, uy = y / k - P, d = inRect(ux, uy, 0, 0, 60, 55, 27.5);
      if (d < -0.5 / k) return null;
      var z = 9 * bevel(d * k, 5 * k), tx = sm((d - 2.6) / 2.2);
      if (tx > 0) z += amp * tx * Math.min(tri((ux + uy) / pitch), tri((ux - uy) / pitch));       /* el moleteado: pirámides en diamante */
      return { h: z * k, c: mixRgb(base, [0.78, 0.78, 0.76], clamp01((ux + uy - 40) / 70) * 0.8), a: clamp01(d * k + 0.5), m: 0, ao: 1 };
    }, { blur: 0 });
  }
  var SLC = {}, SLA = [], SLR = 0, SLT = 0;
  function slideLoop(now) {
    var dt = Math.min(0.033, (now - (SLT || now)) / 1000), busy = false; SLT = now;
    SLA.forEach(function (o) { if (o.step(dt)) busy = true; });
    if (busy) SLR = requestAnimationFrame(slideLoop); else { SLR = 0; SLT = 0; }
  }
  function switchObj(track) {
    var input = track.parentNode && track.parentNode.querySelector('.ct-switch__input'); if (!input) return;
    Array.prototype.slice.call(track.children).forEach(function (n) { track.removeChild(n); });
    var glow = document.createElement('span'), well = document.createElement('span'), fill = document.createElement('span'), thumb = document.createElement('canvas'), cv = document.createElement('canvas'), ring = document.createElement('span');
    glow.className = 'ct-switch__glow'; well.className = 'ct-switch__well'; fill.className = 'ct-switch__fill'; thumb.className = 'ct-switch__thumb'; cv.className = 'ct-switch__body'; ring.className = 'ct-switch__ring';
    [glow, well, thumb, cv, ring].forEach(function (n) { n.setAttribute('aria-hidden', 'true'); });
    well.appendChild(fill); well.appendChild(thumb); track.appendChild(glow); track.appendChild(well); track.appendChild(cv); track.appendChild(ring); input.setAttribute('role', 'switch');
    var sp = spring(620, 38), last = '';
    sp.x = sp.target = input.checked ? 1 : -1;
    function paint() { var v = Math.max(-1.02, Math.min(1.02, sp.x)), p = (v + 1) / 2; track.style.setProperty('--p', p.toFixed(4)); track.style.setProperty('--lit', String(clamp01(p))); }
    var api = { step: function (dt) {
      var n = Math.max(1, Math.ceil(dt / 0.008)); for (var i = 0; i < n; i++) sp.step(dt / n);
      var moving = Math.abs(sp.x - sp.target) > 0.003 || Math.abs(sp.v) > 0.04; if (!moving) { sp.x = sp.target; sp.v = 0; }
      paint(); return moving;
    } };
    function bake() {
      var S = track.offsetWidth; if (!S) return;
      var dp = dprOf(), key = [Math.round(S * 10), dp].join('|'); if (key === last) return; last = key;
      var set = SLC[key] || (SLC[key] = { bezel: bakeSlideBezel(S, dp), knob: bakeSlideKnob(S, dp) });
      cv.width = set.bezel.width; cv.height = set.bezel.height; cv.getContext('2d').drawImage(set.bezel, 0, 0);
      thumb.width = set.knob.width; thumb.height = set.knob.height; thumb.getContext('2d').drawImage(set.knob, 0, 0);
    }
    input.addEventListener('change', function () {
      sp.target = input.checked ? 1 : -1;
      if (reduced()) { sp.x = sp.target; sp.v = 0; paint(); return; }
      if (SLA.indexOf(api) < 0) SLA.push(api); if (!SLR) SLR = requestAnimationFrame(slideLoop);
    });
    paint(); registerBake(track, bake);
  }

  /* ── Stickers ─────────────────────────────────────────────────
     Las pegatinas de vinilo que se pegaban a los ordenadores y los aparatos: casi no tienen grosor, así que no se hornean. Son un SVG
     con el borde crema troquelado siguiendo la silueta (un trazo grueso de punta redonda debajo de la cara), colores planos de la paleta
     y, opcionalmente, un brillo de vinilo. La sombra, la inclinación y la escala los pone el CSS. Todas comparten escala (--su, px por
     unidad de dibujo), así que los textos pequeños se leen igual en todas. Cada una es un dibujo con aria-label, o decoración (aria-hidden). */
  var STK_B = 7, STK_M = 9, SID = 0;
  function stkFace(f) { return 'style="fill:var(--' + f + ')"'; }
  var STK = {
    inspeccionado: { w: 100, h: 100, label: 'Inspeccionado',
      shape: function (a) { return '<circle cx="50" cy="50" r="50" ' + a + '/>'; },
      art: function (sh) { return sh(stkFace('phosphor-soft')) +
        '<circle cx="50" cy="50" r="42" style="fill:none;stroke:var(--crt-gunmetal);stroke-width:1.6;stroke-dasharray:2 3"/>' +
        '<path d="M29,40 L43,54 L71,22" style="fill:none;stroke:var(--crt-gunmetal);stroke-width:9;stroke-linecap:round;stroke-linejoin:round"/>' +
        '<text x="21" y="76" textLength="58" lengthAdjust="spacingAndGlyphs" style="fill:var(--crt-gunmetal);font:600 7.5px var(--font-mono)">inspeccionado</text>'; } },
    notapar: { w: 140, h: 70, label: 'No tapar la ventilación',
      shape: function (a) { return '<rect x="0" y="0" width="140" height="70" rx="10" ' + a + '/>'; },
      art: function (sh) { return sh(stkFace('amber-custard')) +
        '<path d="M32,13 L51,50 H13 Z" style="fill:var(--crt-gunmetal);stroke:var(--crt-gunmetal);stroke-width:5;stroke-linejoin:round"/>' +
        '<text x="32" y="45" text-anchor="middle" style="fill:var(--amber-custard);font:800 22px var(--font-sans)">!</text>' +
        '<text x="62" y="35" textLength="66" lengthAdjust="spacingAndGlyphs" style="fill:var(--crt-gunmetal);font:800 16px var(--font-sans)">no tapar</text>' +
        '<path d="M62,41 H128" style="fill:none;stroke:var(--crt-gunmetal);stroke-width:1.4"/>' +
        '<text x="62" y="55" textLength="54" lengthAdjust="spacingAndGlyphs" style="fill:var(--crt-gunmetal);font:500 8px var(--font-mono)">ventilación</text>'; } },
    destello: { w: 90, h: 90, label: 'Destello',
      shape: function (a) { return '<path d="M40,0 H50 V20 H60 V40 H90 V50 H60 V70 H50 V90 H40 V70 H30 V50 H0 V40 H30 V20 H40 Z M8,8 H18 V18 H8 Z M72,72 H82 V82 H72 Z" ' + a + '/>'; },
      art: function (sh) { return sh(stkFace('phosphor-aqua')) + '<rect x="30" y="30" width="30" height="30" style="fill:var(--phosphor-celadon)"/><rect x="34" y="34" width="8" height="8" style="fill:var(--case-linen)"/>'; } },
    disquete: { w: 90, h: 90, label: 'Disquete contento',
      shape: function (a) { return '<path d="M8,0 H72 L90,18 V82 Q90,90 82,90 H8 Q0,90 0,82 V8 Q0,0 8,0 Z" ' + a + '/>'; },
      art: function (sh) { return sh(stkFace('phosphor-celadon')) +
        '<rect x="22" y="0" width="40" height="24" style="fill:var(--crt-mint)"/><rect x="46" y="5" width="10" height="14" rx="2" style="fill:var(--crt-gunmetal)"/>' +
        '<rect x="12" y="44" width="66" height="38" rx="3" style="fill:var(--case-linen)"/>' +
        '<circle cx="35" cy="60" r="3.2" style="fill:var(--crt-gunmetal)"/><circle cx="55" cy="60" r="3.2" style="fill:var(--crt-gunmetal)"/>' +
        '<path d="M34,69 Q45,78 56,69" style="fill:none;stroke:var(--crt-gunmetal);stroke-width:3;stroke-linecap:round"/>'; } },
    cursor: { w: 62, h: 98, label: 'Cursor',
      shape: function (a) { return '<path d="M0,0 L0,86 L20,68 L34,98 L48,92 L35,63 L62,63 Z" ' + a + '/>'; },
      art: function (sh) { return sh(stkFace('phosphor-lime')) + sh('style="fill:none;stroke:var(--crt-gunmetal);stroke-width:4;stroke-linejoin:round"'); } }
  };
  function stickerSvg(name) {
    var d = STK[name]; if (!d) return '';
    var id = 'ct-stk-' + (++SID), sh = function (a) { return d.shape(a); };
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + (-STK_M) + ' ' + (-STK_M) + ' ' + (d.w + 2 * STK_M) + ' ' + (d.h + 2 * STK_M) + '" focusable="false" aria-hidden="true">' +
      '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".4" stop-color="#fff" stop-opacity="0"/><stop offset=".62" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".16"/></linearGradient></defs>' +
      sh('style="fill:var(--st-edge);stroke:var(--st-edge);stroke-width:' + (2 * STK_B) + ';stroke-linejoin:round"') + d.art(sh) +
      sh('class="ct-sticker__sheen" fill="url(#' + id + ')"') + '</svg>';
  }
  function stickerObj(el) {
    var n = el.getAttribute('data-ct-sticker'), d = STK[n]; if (!d) return;
    el.classList.add('ct-sticker'); el.innerHTML = stickerSvg(n); el.style.setProperty('--sw', String(d.w + 2 * STK_M));
    if (el.getAttribute('aria-label')) el.setAttribute('role', 'img'); else el.setAttribute('aria-hidden', 'true');
  }
  function sticker(host, name) { if (name) host.setAttribute('data-ct-sticker', name); host.removeAttribute('data-ct-obj'); host.setAttribute('data-ct-obj', ''); stickerObj(host); return host; }

  /* ── Cuaderno ─────────────────────────────────────────────────
     Un cuaderno de notas de bolsillo con tapa de cartón, de los de grapa. La textura del cartón se hornea una sola vez con el motor de relieve,
     como un mosaico gris neutro que repite sin costuras (ruido periódico: fibras cortas, grano fino y un moteado suave) y muy ligero. Como es neutro,
     el CSS lo mezcla en modo "overlay" sobre cualquier color de tapa: un solo mosaico sirve para todos los colores. Es una pieza de hardware:
     igual en Pantalla y en Carcasa. El tamaño del mosaico es fijo; el cuaderno solo lo repite. */
  function bakeBoardTile(S, dp, raw) {
    var N = Math.max(8, Math.round(S * dp)), base = [0.5, 0.5, 0.5], M = N + 2;
    function lat(ix, iy, n, seed) { return hash(((ix % n) + n) % n + seed * 131.7, ((iy % n) + n) % n + seed * 17.3); }
    function vn(u, v, nx, ny, seed) {                                                              /* ruido de valores periódico: nx × ny celdas por mosaico */
      var x = u * nx, y = v * ny, ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
      fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
      var a = lat(ix, iy, nx, seed), b = lat(ix + 1, iy, nx, seed), c = lat(ix, iy + 1, nx, seed), d = lat(ix + 1, iy + 1, nx, seed);
      return (a + (b - a) * fx) * (1 - fy) + (c + (d - c) * fx) * fy;
    }
    var cv = relief(M, M, function (x, y) {                                                        /* se hornea 1px de más por lado: así el recorte no tiene bordes a medias */
      var u = (((Math.floor(x) - 1) % N + N) % N) / N, v = (((Math.floor(y) - 1) % N + N) % N) / N;
      var fib = vn(u, v, Math.round(N * 0.42), Math.round(N * 0.09), 1) * 0.5 + vn(u, v, Math.round(N * 0.12), Math.round(N * 0.38), 2) * 0.5;   /* fibras cortas y sueltas, sin un tejido */
      var fine = vn(u, v, Math.round(N * 0.7), Math.round(N * 0.7), 3), mot = vn(u, v, 9, 9, 4) * 0.6 + vn(u, v, 19, 19, 5) * 0.4;
      return { h: ((fib - 0.5) * 0.26 + (fine - 0.5) * 0.3) * dp, c: mixRgb(base, [0.46, 0.46, 0.46], (mot - 0.5) * 0.5), a: 1, m: 0, ao: 0.985 + 0.02 * mot };
    }, { blur: 0 });
    var cx = cv.getContext('2d'), im = cx.getImageData(0, 0, M, M), px = im.data, i, sum = 0, n = px.length / 4;                  /* se centra en gris medio y se aplana: así el overlay solo acaricia el color de la tapa */
    for (i = 0; i < px.length; i += 4) sum += px[i];
    var kk = 127.5 / (sum / n);
    for (i = 0; i < px.length; i += 4) { var v = 127.5 + (px[i] * kk - 127.5) * 0.6; px[i] = px[i + 1] = px[i + 2] = Math.max(0, Math.min(255, v)); }
    cx.putImageData(im, 0, 0);
    if (raw) return cv;
    var out = document.createElement('canvas'); out.width = N; out.height = N; out.getContext('2d').drawImage(cv, -1, -1);
    return out;
  }
  var NBT = null;
  function notebookObj(el) {
    var S = 160, dp = dprOf(), key = S + '|' + dp;
    if (!NBT || NBT.key !== key) NBT = { key: key, url: bakeBoardTile(S, dp).toDataURL() };
    el.style.setProperty('--nb-tex', 'url(' + NBT.url + ')'); el.style.setProperty('--nb-tex-size', S + 'px');
  }

  /* ── CD y claqueta ───────────────────────────────────────────
     Dos objetos de hardware más, horneados con el mismo motor de relieve que el disquete: alturas, materiales, bisel y oclusión por píxel.
     El texto queda en el DOM (nítido y accesible), como la etiqueta del disquete. Unidades de diseño: 100 × 100 el CD, 100 × 94 la claqueta.
     CD: cuatro capas (disco metálico con surcos e iris, hoja del inserto, texto, y por delante la caja de cristal con bisagra, bandeja,
     dientes del eje y rayones). Claqueta: el cuerpo (tira fija a rayas y tablero acrílico con líneas de tiza), la tablilla aparte para
     poder abrirse y cerrarse, y el pasador de metal. */
  function segD(px, py, ax, ay, bx, by) {
    var ex = bx - ax, ey = by - ay, t = clamp01(((px - ax) * ex + (py - ay) * ey) / (ex * ex + ey * ey));
    return Math.hypot(px - ax - ex * t, py - ay - ey * t);
  }
  function bakeCD(W, H) {
    var k = W / 100, tang = rgbOf('signal-tangerine'), silver = [0.8, 0.82, 0.84], CX = 53, CY = 60, R = 38, RH = 5.8;
    var disc = relief(W, H, function (x, y) {
      var ux = x / k, uy = y / k, dx = ux - CX, dy = uy - CY, r = Math.hypot(dx, dy);
      var a = clamp01((R - r) * k + 0.5) * clamp01((r - RH) * k + 0.5); if (a <= 0) return null;
      if (r < 13.4) return { h: 0.4 * k, c: [0.9, 0.93, 0.95], a: a * 0.55, m: 3, ao: 1 };           /* el anillo transparente del eje */
      var ang = Math.atan2(dy, dx), wedge = Math.pow(Math.max(0, Math.sin(ang * 2 + 0.9)), 3), ph = ang / 6.2832 + r * 0.006;
      var rb = [0.5 + 0.5 * Math.cos(6.2832 * ph), 0.5 + 0.5 * Math.cos(6.2832 * (ph + 0.33)), 0.5 + 0.5 * Math.cos(6.2832 * (ph + 0.67))];
      var c = mixRgb(silver, rb, 0.03 + 0.15 * wedge), base = r < 14.4 ? 1.5 : r < 15.8 ? 1.0 : 0.85;
      if (r >= 14.4 && r < 15.8) c = mixRgb(c, [1, 1, 1], 0.4);                                    /* banda espejo */
      var groove = r >= 15.8 ? 0.07 * Math.sin(r * 5.3) : 0;                                      /* surcos */
      return { h: (base + groove) * k * bevel((R - r) * k, 1.0 * k), c: c, a: a, m: 2, ao: 1 };
    }, { blur: 1 });
    var paper = relief(W, H, function (x, y) {
      var ux = x / k, uy = y / k, d = inRect(ux, uy, 8.5, 5, 96, 43, 0.8) * k; if (d < -0.5) return null;
      var fib = hash(x * 0.31, y * 6.7) - 0.5, fine = hash(x, y) - 0.5;
      return { h: 1.0 * k * bevel(d, 0.5 * k) + (fib * 0.05 + fine * 0.04) * k, c: mixRgb(tang, [0.5, 0.5, 0.5], fib * 0.04), a: clamp01(d + 0.5), m: 0, ao: 0.985 + 0.02 * hash(y, x) };
    }, { blur: 0 });
    var SCR = [[22, 12, 62, 22], [48, 8, 88, 40], [14, 60, 40, 94], [60, 72, 90, 84]];
    var glass = relief(W, H, function (x, y) {
      var ux = x / k, uy = y / k, d = inRect(ux, uy, 0.8, 0.8, 99.2, 99.2, 3) * k; if (d < -0.5) return null;
      var edge = 1 - clamp01(d / (2.4 * k)), s = { h: 3 * k * bevel(d, 2.0 * k), c: [0.95, 0.97, 0.98], a: clamp01(d + 0.5) * (0.06 + 0.55 * edge * edge), m: 3, ao: 1 }, i;
      var dh = inRect(ux, uy, 4.6, 0.8, 9.4, 99.2, 0.8) * k;                                       /* la bisagra */
      if (dh > 0) { s.h += 1.1 * k * bevel(dh, 0.7 * k); s.a = Math.max(s.a, 0.3 * clamp01(dh + 0.5)); }
      var dr = Math.abs(inRect(ux, uy, 12, 3.6, 96.4, 96.4, 1.6)) * k;                              /* el borde de la bandeja */
      if (dr < 0.5 * k) { var q = 1 - dr / (0.5 * k); s.h += 0.6 * k * q; s.a = Math.max(s.a, 0.34 * q); }
      var rr = Math.hypot(ux - CX, uy - CY);                                                        /* los dientes del eje */
      if (rr > 6.2 && rr < 9.6 && Math.sin(Math.atan2(uy - CY, ux - CX) * 6) > 0.1) { s.h += 0.7 * k; s.a = Math.max(s.a, 0.3); }
      for (i = 0; i < SCR.length; i++) if (segD(ux, uy, SCR[i][0], SCR[i][1], SCR[i][2], SCR[i][3]) < 0.16) { s.h -= 0.2 * k; s.a = Math.max(s.a, 0.2); }   /* rayones */
      var st = (ux * 0.8 + uy * 0.6 - 66) / 6;                                                      /* un reflejo suave en diagonal */
      s.a = Math.max(s.a, 0.1 * Math.exp(-st * st) * clamp01(d / k));
      return s;
    }, { blur: 1 });
    return { disc: disc, paper: paper, glass: glass };
  }
  var CDC = {};
  function cdObj(el) {
    var disc = bgCanvas(el, 'ct-cd__disc'), paper = document.createElement('canvas'), glass = document.createElement('canvas');
    paper.className = 'ct-cd__paper'; glass.className = 'ct-cd__case'; paper.setAttribute('aria-hidden', 'true'); glass.setAttribute('aria-hidden', 'true');
    el.insertBefore(paper, disc.nextSibling); el.appendChild(glass);
    var last = '';
    function bake() {
      var w = el.offsetWidth; if (!w) return;
      var dp = dpFor(w, w, 700000), W = Math.round(w * dp), key = String(W); if (key === last) return; last = key;
      var L = CDC[key] || (CDC[key] = bakeCD(W, W));
      [[disc, L.disc], [paper, L.paper], [glass, L.glass]].forEach(function (p) { p[0].width = W; p[0].height = W; p[0].getContext('2d').drawImage(p[1], 0, 0); });
      el.classList.add('is-baked');
    }
    registerBake(el, bake);
  }

  function bakeClap(W, H) {
    var k = W / 100, ink = mixRgb(rgbOf('crt-carbon'), [0, 0, 0], 0.25), lin = rgbOf('case-linen'), board = mixRgb(rgbOf('crt-carbon'), [0, 0, 0], 0.35), silver = rgbOf('case-silver');
    function stripes(ux, uy, cs, sn) {
      var v = (ux * cs + uy * sn) / 9.2, f = v - Math.floor(v), db = Math.min(f, Math.abs(f - 0.5), 1 - f) * 9.2;
      return mixRgb(ink, lin, clamp01(0.5 + (f < 0.5 ? db : -db) * k));
    }
    var body = relief(W, H, function (x, y) {
      var ux = x / k, uy = y / k, dBar = inRect(ux, uy, 0.2, 15.4, 99.8, 26.2, 0.8) * k;
      if (dBar > 0) return { h: 1.7 * k * bevel(dBar, 0.8 * k), c: stripes(ux, uy, 0.47, 0.88), a: 1, m: 1, ao: 1 };   /* la tira fija a rayas */
      var dB = inRect(ux, uy, 0.2, 25, 99.8, 93.8, 3.4) * k; if (dB < -0.5) return null;
      var cov = -9, fr = Math.abs(inRect(ux, uy, 2.6, 28.6, 97.4, 91.2, 1.2));                         /* el marco y las filas, a tiza */
      cov = Math.max(cov, 0.34 - fr);
      [41, 56, 76].forEach(function (yy) { if (ux > 2.6 && ux < 97.4) cov = Math.max(cov, 0.34 - Math.abs(uy - yy)); });
      if (uy > 56 && uy < 76) cov = Math.max(cov, 0.34 - Math.abs(ux - 50));
      cov = clamp01(cov * k + 0.5);
      return { h: 2.6 * k * bevel(dB, 1.2 * k) + 0.15 * k * cov, c: mixRgb(board, lin, 0.8 * cov * (0.78 + 0.22 * hash(x * 0.7, y * 0.7))), a: clamp01(dB + 0.5), m: 1, ao: 0.7 + 0.3 * clamp01((uy - 25.6) / 4.5) };
    }, { blur: 1 });
    var stick = relief(W, H, function (x, y) {
      var ux = x / k, uy = y / k, d = inRect(ux, uy, 0.2, 0.2, 99.8, 14.2, 0.9) * k; if (d < -0.5) return null;
      return { h: 1.8 * k * bevel(d, 0.8 * k), c: stripes(ux, uy, -0.47, 0.88), a: clamp01(d + 0.5), m: 1, ao: 1 };
    }, { blur: 1 });
    var hinge = relief(W, H, function (x, y) {
      var ux = x / k, uy = y / k, d = (2.3 - Math.hypot(ux - 4.6, uy - 14.8)) * k; if (d < -0.5) return null;
      return { h: 2.4 * k * bevel(d, 1.6 * k), c: silver, a: clamp01(d + 0.5), m: 2, ao: 1 };
    }, { blur: 1 });
    return { body: body, stick: stick, hinge: hinge };
  }
  var CKC = {};
  function clapObj(el) {
    var body = bgCanvas(el, 'ct-clap__body'), stick = document.createElement('canvas'), hinge = document.createElement('canvas');
    stick.className = 'ct-clap__stick'; hinge.className = 'ct-clap__hinge'; stick.setAttribute('aria-hidden', 'true'); hinge.setAttribute('aria-hidden', 'true');
    el.appendChild(stick); el.appendChild(hinge);
    var last = '';
    function bake() {
      var w = el.offsetWidth; if (!w) return;
      var dp = dpFor(w, w * 0.94, 700000), W = Math.round(w * dp), H = Math.round(W * 0.94), key = String(W); if (key === last) return; last = key;
      var L = CKC[key] || (CKC[key] = bakeClap(W, H));
      [[body, L.body], [stick, L.stick], [hinge, L.hinge]].forEach(function (p) { p[0].width = W; p[0].height = H; p[0].getContext('2d').drawImage(p[1], 0, 0); });
      el.classList.add('is-baked');
    }
    registerBake(el, bake);
  }

  var MOUNTERS = [['.ct-case', caseObj], ['.ct-floppy', floppyObj], ['.ct-cd', cdObj], ['.ct-clap', clapObj], ['.ct-switch__track', switchObj], ['input.ct-fader', faderObj], ['.ct-cutmat', cutmatObj], ['.ct-vu, .ct-gauge, .ct-vmeter, .ct-ledbar', meterObj], ['[data-toggle]', toggleObj], ['[data-ct-sticker]', stickerObj], ['.ct-notebook', notebookObj]];
  function mountAll(root) {
    root = root || document;
    MOUNTERS.forEach(function (m) { Array.prototype.forEach.call(root.querySelectorAll(m[0] + ':not([data-ct-obj])'), function (el) { el.setAttribute('data-ct-obj', ''); m[1](el); }); });
    enhanceObjects(root); mountKeycaps(root); mountBots(root); calmBehaviors(root);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { mountAll(); });
  else setTimeout(function () { mountAll(); }, 0);

  window.Comfytosh = {
    version: '2.2.0',
    color: color,
    icon: icon,
    icons: Object.keys(ICONS),
    bot: bot,
    sticker: sticker,
    stickers: Object.keys(STK),
    stickerSvg: stickerSvg,
    stickerLabels: Object.keys(STK).reduce(function (o, n) { o[n] = STK[n].label; return o; }, {}),
    botTypes: Object.keys(BOT_TYPES),
    relief: relief,
    bakeKeycap: bakeKeycap,
    bakeFloppy: bakeFloppy,
    bakeFaderCap: bakeFaderCap,
    bakeBoardTile: bakeBoardTile,
    bakeSlideBezel: bakeSlideBezel,
    bakeSlideKnob: bakeSlideKnob,
    bakeMeterBody: bakeMeterBody,
    bakeMeterGlass: bakeMeterGlass,
    bakeMeterHub: bakeMeterHub,
    bakeMeterLed: bakeMeterLed,
    meterPrint: meterPrint,
    bakeKnobBody: bakeKnobBody,
    bakeKnobMark: bakeKnobMark,
    bakeFaderLane: bakeFaderLane,
    bakeCase: bakeCase,
    bakeCD: bakeCD,
    bakeClap: bakeClap,
    glassCanvas: glassCanvas,
    mount: mountAll,
    toast: toast
  };
})();
