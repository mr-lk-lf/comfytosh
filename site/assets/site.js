/* Comfytosh Theme landing: flavor switch, menu bar, palette copy, port filter, wallpaper visor. */
(function () {
  'use strict';
  var root = document.documentElement;
  var CT = window.Comfytosh;

  /* Octicons (MIT) the design system bundle does not carry. */
  var EXTRA = {
    'mark-github': '<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>',
    'download': '<path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"/><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"/>',
    'copy': '<path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"/><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/>',
    'book': '<path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"/>',
    'issue-opened': '<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/>',
    'arrow-left': '<path d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z"/>'
  };
  function icon(name, size) {
    if (EXTRA[name]) return '<svg class="ct-icon" viewBox="0 0 16 16" width="' + size + '" height="' + size + '" fill="currentColor" aria-hidden="true">' + EXTRA[name] + '</svg>';
    return CT ? CT.icon(name, size) : '';
  }
  document.querySelectorAll('[data-ic]').forEach(function (el) { el.insertAdjacentHTML('afterbegin', icon(el.getAttribute('data-ic'), 16)); });

  function toast(msg, o) { if (CT) CT.toast(msg, o); }
  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (ok, fail) {
      var ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? ok() : fail(); } catch (e) { fail(e); }
      ta.remove();
    });
  }

  /* ── Flavor: the site follows the switch, the preview follows the site (and its own selector) ── */
  var FACTS = {
    screen: { ground: 'crt-gunmetal #282e2b', text: 'crt-mint #d6e8c8' },
    'case': { ground: 'case-bone #e3dac9', text: 'crt-gunmetal #282e2b' }
  };
  var preview = document.getElementById('preview');
  var facts = document.querySelector('.flavor-facts');
  function setPreview(flavor) {
    if (preview) preview.setAttribute('data-flavor', flavor);
    if (facts) {
      facts.setAttribute('data-flavor', flavor);
      facts.querySelectorAll('[data-fact]').forEach(function (el) { el.textContent = FACTS[flavor][el.getAttribute('data-fact')]; });
    }
    document.querySelectorAll('input[name="flavor"]').forEach(function (r) { r.checked = r.value === flavor; r.dispatchEvent(new Event('change')); });
  }
  var sw = document.getElementById('flavor-switch');
  function applySite(theme, save) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'carcasa' ? '#e3dac9' : '#282e2b');
    if (sw && sw.checked !== (theme === 'pantalla')) { sw.checked = theme === 'pantalla'; sw.dispatchEvent(new Event('change')); }
    setPreview(theme === 'carcasa' ? 'case' : 'screen');
    if (save) { try { localStorage.setItem('comfytosh-flavor', theme); } catch (e) {} }
  }
  if (sw) {
    sw.checked = root.getAttribute('data-theme') !== 'carcasa';
    sw.dispatchEvent(new Event('change'));
    sw.addEventListener('change', function () {
      var want = sw.checked ? 'pantalla' : 'carcasa';
      if (root.getAttribute('data-theme') !== want) applySite(want, true);
    });
  }
  document.querySelectorAll('input[name="flavor"]').forEach(function (r) {
    r.addEventListener('change', function () {
      if (!r.checked) return;
      if (preview) preview.setAttribute('data-flavor', r.value);
      if (facts) {
        facts.setAttribute('data-flavor', r.value);
        facts.querySelectorAll('[data-fact]').forEach(function (el) { el.textContent = FACTS[r.value][el.getAttribute('data-fact')]; });
      }
    });
  });
  setPreview(root.getAttribute('data-theme') === 'carcasa' ? 'case' : 'screen');

  /* ── Menu bar: plain air at the top, frosted plastic once anything slides under it ── */
  var bar = document.querySelector('.ct-bar');
  function frost() { if (bar) bar.classList.toggle('is-frosted', window.scrollY > 12); }
  window.addEventListener('scroll', frost, { passive: true }); frost();

  /* ── Palette: press a key to copy its hex; copy the whole palette as CSS or SCSS ── */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var hex = btn.getAttribute('data-copy');
      btn.classList.add('is-down'); setTimeout(function () { btn.classList.remove('is-down'); }, 160);
      copy(hex).then(function () { toast(hex + ' is on your clipboard.', { title: 'Copied', tone: 'success', time: 2200 }); },
        function () { toast('Your browser blocked the clipboard. The hex is ' + hex + '.', { title: 'Could not copy', tone: 'warning' }); });
    });
  });
  var paletteData = null;
  function withPalette(fn) {
    if (paletteData) return fn(paletteData);
    fetch('palette.json').then(function (r) { return r.json(); }).then(function (p) { paletteData = p; fn(p); })
      .catch(function () { toast('palette.json did not load. Try the download instead.', { title: 'Could not copy', tone: 'danger' }); });
  }
  document.querySelectorAll('[data-copy-format]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var fmt = btn.getAttribute('data-copy-format');
      withPalette(function (p) {
        var names = Object.keys(p.primitives);
        var text = fmt === 'scss'
          ? names.map(function (n) { return '$' + n + ': ' + p.primitives[n] + ';'; }).join('\n')
          : ':root {\n' + names.map(function (n) { return '  --' + n + ': ' + p.primitives[n] + ';'; }).join('\n') + '\n}';
        copy(text).then(function () { toast(names.length + ' colours as ' + fmt.toUpperCase() + '.', { title: 'Copied', tone: 'success', time: 2600 }); },
          function () { toast('Your browser blocked the clipboard.', { title: 'Could not copy', tone: 'warning' }); });
      });
    });
  });

  /* ── Ports: search and filter ── */
  var search = document.getElementById('port-search');
  var pills = Array.prototype.slice.call(document.querySelectorAll('[data-filter]'));
  var tiles = Array.prototype.slice.call(document.querySelectorAll('#port-grid .port'));
  var empty = document.getElementById('port-empty');
  var filter = 'all';
  function applyFilter() {
    var q = (search && search.value || '').trim().toLowerCase(), shown = 0;
    tiles.forEach(function (t) {
      var isRequest = t.classList.contains('port--request');
      var ok = isRequest || ((filter === 'all' || t.getAttribute('data-cat') === filter) && (!q || t.getAttribute('data-search').indexOf(q) !== -1));
      t.hidden = !ok; if (ok && !isRequest) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  }
  pills.forEach(function (p) {
    p.addEventListener('click', function () {
      filter = p.getAttribute('data-filter');
      pills.forEach(function (o) {
        var on = o === p; o.setAttribute('aria-pressed', String(on));
        o.classList.toggle('ct-pill--tangerine', on);
      });
      applyFilter();
    });
  });
  if (search) search.addEventListener('input', applyFilter);

  /* ── Wallpapers: one at a time on the screen, two keys below ── */
  var walls = Array.prototype.slice.call(document.querySelectorAll('.wall'));
  var count = document.getElementById('wall-count'), meta = document.getElementById('wall-meta'), dl = document.getElementById('wall-download');
  var at = 0;
  function show(i) {
    at = (i + walls.length) % walls.length;
    walls.forEach(function (w, j) { w.classList.toggle('is-on', j === at); w.setAttribute('aria-hidden', String(j !== at)); });
    var w = walls[at];
    if (count) count.textContent = ('0' + (at + 1)).slice(-2) + ' / ' + ('0' + walls.length).slice(-2);
    if (meta) meta.textContent = w.getAttribute('data-meta');
    if (dl) dl.setAttribute('href', w.getAttribute('data-src'));
  }
  document.querySelectorAll('[data-wall]').forEach(function (b) {
    b.addEventListener('click', function () { show(at + parseInt(b.getAttribute('data-wall'), 10)); });
  });
  var screen = document.getElementById('wall-screen');
  if (screen) {
    screen.tabIndex = 0;
    screen.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { show(at + 1); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { show(at - 1); e.preventDefault(); }
    });
    var x0 = null;
    screen.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    screen.addEventListener('touchend', function (e) {
      if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) show(at + (dx < 0 ? 1 : -1));
    });
  }
  if (walls.length) show(0);
})();
