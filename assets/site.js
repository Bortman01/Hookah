(function () {
  var KEY = 'nua_age_ok';
  var gate = document.getElementById('gate');
  if (gate) {
    var ok = false;
    try {
      var raw = localStorage.getItem(KEY);
      ok = raw && Number(raw) > Date.now();
    } catch (e) { ok = false; }
    if (!ok) {
      gate.classList.add('is-on');
      document.body.classList.add('is-locked');
    }
    var yes = document.getElementById('gate-yes');
    if (yes) yes.addEventListener('click', function () {
      try { localStorage.setItem(KEY, String(Date.now() + 30 * 864e5)); } catch (e) {}
      gate.classList.remove('is-on');
      document.body.classList.remove('is-locked');
    });
  }

  var tabs = [].slice.call(document.querySelectorAll('.tabs a'));
  var cats = [].slice.call(document.querySelectorAll('.mcat'));
  if (tabs.length && cats.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        tabs.forEach(function (t) {
          t.classList.toggle('is-on', t.getAttribute('href') === '#' + en.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    cats.forEach(function (c) { io.observe(c); });
  }

  var input = document.getElementById('menu-search');
  if (input) {
    var items = [].slice.call(document.querySelectorAll('.item'));
    var empty = document.getElementById('menu-empty');
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      items.forEach(function (it) {
        var hit = !q || it.textContent.toLowerCase().indexOf(q) > -1;
        it.classList.toggle('is-hidden', !hit);
        if (hit) shown++;
      });
      cats.forEach(function (c) {
        var any = c.querySelector('.item:not(.is-hidden)');
        c.style.display = q && !any ? 'none' : '';
      });
      if (empty) empty.classList.toggle('is-on', !!q && shown === 0);
    });
  }

  // Bolt has no public link with a destination: copy the address, then let the link open the app
  [].slice.call(document.querySelectorAll('[data-copy-go]')).forEach(function (a) {
    a.addEventListener('click', function () {
      var was = a.textContent;
      if (navigator.clipboard) navigator.clipboard.writeText(a.getAttribute('data-copy-go')).catch(function () {});
      a.textContent = a.getAttribute('data-copied') || 'Copied';
      setTimeout(function () { a.textContent = was; }, 2500);
    });
  });

  [].slice.call(document.querySelectorAll('[data-copy]')).forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      var v = b.getAttribute('data-copy');
      var done = b.getAttribute('data-copied') || 'Copied';
      var was = b.textContent;
      if (navigator.clipboard) navigator.clipboard.writeText(v).catch(function () {});
      b.textContent = done;
      setTimeout(function () { b.textContent = was; }, 1800);
    });
  });
})();
