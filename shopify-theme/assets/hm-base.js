/* DR.MEN · HAIR — JS de las secciones de landing (prefijo hm-).
   Se carga desde cada sección; el guard evita que se ejecute dos veces. */
(function () {
  if (window.HMLanding) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function once(el, key) {
    var flag = 'hm' + key + 'Ready';
    if (el.dataset[flag]) return false;
    el.dataset[flag] = '1';
    return true;
  }

  /* ---------- Carrusel con flechas y barra de progreso ---------- */
  function initSlider(root) {
    if (!once(root, 'Slider')) return;
    var track = root.querySelector('[data-hm-track]');
    if (!track) return;
    var prev = root.querySelector('[data-hm-prev]');
    var next = root.querySelector('[data-hm-next]');
    var bar = root.querySelector('[data-hm-bar]');

    function step() {
      var first = track.children[0];
      if (!first) return track.clientWidth;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return first.getBoundingClientRect().width + gap;
    }
    function update() {
      var max = track.scrollWidth - track.clientWidth;
      var ratio = max > 0 ? track.scrollLeft / max : 0;
      var visible = track.scrollWidth > 0 ? track.clientWidth / track.scrollWidth : 1;
      if (bar) {
        bar.style.width = Math.max(visible * 100, 12) + '%';
        bar.style.transform = 'translateX(' + ratio * (100 / Math.max(visible, .12) - 100) + '%)';
      }
      if (prev) prev.disabled = track.scrollLeft <= 4;
      if (next) next.disabled = track.scrollLeft >= max - 4;
      var nav = root.querySelector('.hm-slider__nav');
      if (nav) nav.hidden = max <= 4;
    }
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    track.addEventListener('scroll', function () { window.requestAnimationFrame(update); }, { passive: true });
    window.addEventListener('resize', update);
    update();

    var autoplay = parseInt(root.dataset.autoplay || '0', 10);
    if (autoplay > 0 && !reduceMotion) {
      var paused = false;
      root.addEventListener('pointerenter', function () { paused = true; });
      root.addEventListener('pointerleave', function () { paused = false; });
      root.addEventListener('touchstart', function () { paused = true; }, { passive: true });
      setInterval(function () {
        if (paused || document.hidden) return;
        var max = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= max - 4) track.scrollTo({ left: 0, behavior: 'smooth' });
        else track.scrollBy({ left: step(), behavior: 'smooth' });
      }, autoplay * 1000);
    }
  }

  /* ---------- Aparición al hacer scroll ---------- */
  var revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); revealObserver.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' }) : null;

  function initReveal(el) {
    if (!once(el, 'Reveal')) return;
    if (!revealObserver || reduceMotion) { el.classList.add('is-in'); return; }
    revealObserver.observe(el);
  }

  /* ---------- Cuenta regresiva ---------- */
  function initCountdown(el) {
    if (!once(el, 'Countdown')) return;
    var mode = el.dataset.mode || 'hoy';
    var end;
    if (mode === 'fecha' && el.dataset.end) {
      end = new Date(el.dataset.end.replace(' ', 'T')).getTime();
    }
    function target() {
      if (mode === 'fecha' && end) return end;
      var d = new Date();
      d.setHours(23, 59, 59, 999);
      return d.getTime();
    }
    var parts = {
      d: el.querySelector('[data-hm-d]'),
      h: el.querySelector('[data-hm-h]'),
      m: el.querySelector('[data-hm-m]'),
      s: el.querySelector('[data-hm-s]')
    };
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    function tick() {
      var diff = Math.max(0, target() - Date.now());
      var s = Math.floor(diff / 1000);
      var days = Math.floor(s / 86400);
      var h = Math.floor((s % 86400) / 3600);
      var m = Math.floor((s % 3600) / 60);
      var sec = s % 60;
      if (parts.d) { parts.d.textContent = pad(days); parts.d.parentElement.hidden = days === 0; }
      if (parts.h) parts.h.textContent = pad(parts.d ? h : h + days * 24);
      if (parts.m) parts.m.textContent = pad(m);
      if (parts.s) parts.s.textContent = pad(sec);
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- Antes / después con deslizador ---------- */
  function initCompare(el) {
    if (!once(el, 'Compare')) return;
    var input = el.querySelector('input[type="range"]');
    if (!input) return;
    function set() { el.style.setProperty('--hm-pos', input.value + '%'); }
    input.addEventListener('input', set);
    set();
  }

  /* ---------- Videos UGC: autoplay en pantalla + sonido al tocar ---------- */
  var videoObserver = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
      else v.pause();
    });
  }, { threshold: .55 }) : null;

  function initVideo(card) {
    if (!once(card, 'Video')) return;
    var video = card.querySelector('video');
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    if (videoObserver && !reduceMotion) videoObserver.observe(video);
    var btn = card.querySelector('[data-hm-sound]');
    function toggle() {
      var allVideos = document.querySelectorAll('[data-hm-video] video');
      var willUnmute = video.muted;
      allVideos.forEach(function (v) { v.muted = true; v.closest('[data-hm-video]').classList.remove('is-sound'); });
      video.muted = !willUnmute;
      if (willUnmute) {
        video.currentTime = 0;
        var p = video.play(); if (p && p.catch) p.catch(function () {});
        card.classList.add('is-sound');
      }
    }
    if (btn) btn.addEventListener('click', toggle);
  }

  /* ---------- Galería del producto ---------- */
  function initGallery(root) {
    if (!once(root, 'Gallery')) return;
    var track = root.querySelector('[data-hm-track]');
    if (!track) return;
    var thumbsWrap = root.querySelector('[data-hm-thumbs]');
    var thumbs = root.querySelectorAll('[data-hm-thumb]');
    var count = root.querySelector('[data-hm-count]');
    var prev = root.querySelector('[data-hm-gprev]');
    var next = root.querySelector('[data-hm-gnext]');
    var total = track.children.length;
    var current = 0;

    function goTo(i, smooth) {
      i = Math.max(0, Math.min(total - 1, i));
      var slide = track.children[i];
      if (!slide) return;
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: smooth === false ? 'auto' : 'smooth' });
      setActive(i);
    }
    function setActive(i) {
      if (i === current && count && count.textContent === String(i + 1)) return;
      current = i;
      if (count) count.textContent = i + 1;
      thumbs.forEach(function (t) {
        var on = parseInt(t.dataset.hmThumb, 10) === i;
        t.classList.toggle('is-active', on);
        if (on && thumbsWrap) {
          /* Mantiene la miniatura activa a la vista sin mover la página */
          var vertical = thumbsWrap.scrollHeight > thumbsWrap.clientHeight + 2;
          if (vertical) thumbsWrap.scrollTo({ top: t.offsetTop - thumbsWrap.clientHeight / 2 + t.clientHeight / 2, behavior: 'smooth' });
          else thumbsWrap.scrollTo({ left: t.offsetLeft - thumbsWrap.clientWidth / 2 + t.clientWidth / 2, behavior: 'smooth' });
        }
      });
    }

    thumbs.forEach(function (t) {
      t.addEventListener('click', function () { goTo(parseInt(t.dataset.hmThumb, 10)); });
    });
    if (prev) prev.addEventListener('click', function () { goTo(current === 0 ? total - 1 : current - 1); });
    if (next) next.addEventListener('click', function () { goTo(current === total - 1 ? 0 : current + 1); });

    var ticking = false;
    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        var i = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));
        if (i !== current) setActive(i);
      });
    }, { passive: true });

    /* Al elegir un pack con foto propia, la galería salta a esa foto */
    var section = root.closest('.hm');
    if (section) section.addEventListener('hm:pack', function (e) {
      var slide = e.detail && e.detail.slide;
      if (slide !== '' && slide !== undefined && !isNaN(parseInt(slide, 10))) goTo(parseInt(slide, 10));
    });
  }

  /* ---------- Caja de compra: packs + agregar al carrito ---------- */
  function initBuybox(root) {
    if (!once(root, 'Buybox')) return;
    var form = root.querySelector('form[data-hm-form], form.hm-buy__form');
    var idInput = root.querySelector('[data-hm-variant-id]');
    var qtyInput = root.querySelector('[data-hm-qty]');
    var packs = root.querySelectorAll('[data-hm-pack]');
    var section = root.closest('.hm') || document;

    function fill(selector, value) {
      section.querySelectorAll(selector).forEach(function (n) {
        if (value) { n.innerHTML = value; n.hidden = false; }
        else n.hidden = true;
      });
    }

    function select(pack, fromUser) {
      if (pack.dataset.available === 'false' && fromUser) return;
      packs.forEach(function (p) {
        var on = p === pack;
        p.classList.toggle('is-selected', on);
        var r = p.querySelector('input[type="radio"]');
        if (r) r.checked = on;
      });
      var d = pack.dataset;
      if (idInput) idInput.value = d.variantId;
      if (qtyInput) qtyInput.value = d.qty || 1;
      fill('[data-hm-price]', d.price);
      fill('[data-hm-compare]', d.compare);
      fill('[data-hm-transfer]', d.transfer);
      fill('[data-hm-cuota]', d.cuota);
      fill('[data-hm-pack-name]', d.name);
      if (fromUser) section.dispatchEvent(new CustomEvent('hm:pack', { detail: { slide: d.slide, index: d.index } }));
      var soldOut = d.available === 'false';
      section.querySelectorAll('[data-hm-submit]').forEach(function (b) {
        b.disabled = soldOut;
        var label = b.querySelector('.hm-btn__label');
        if (label) label.textContent = soldOut ? (b.dataset.soldout || 'Sin stock') : b.dataset.label;
      });
    }

    packs.forEach(function (p) {
      var r = p.querySelector('input[type="radio"]');
      if (r) r.addEventListener('change', function () { if (r.checked) select(p, true); });
    });
    var initial = root.querySelector('[data-hm-pack].is-selected') || packs[0];
    if (initial) select(initial);

    if (!form) return;
    form.addEventListener('submit', function (ev) {
      if (!window.fetch) return;
      ev.preventDefault();
      addToCart(root, form);
    });
    section.querySelectorAll('[data-hm-submit-external]').forEach(function (b) {
      b.addEventListener('click', function () { addToCart(root, form, b); });
    });
  }

  function addToCart(root, form, extraButton) {
    var buttons = [form.querySelector('[data-hm-submit]')];
    if (extraButton) buttons.push(extraButton);
    var error = root.querySelector('[data-hm-error]');
    buttons.forEach(function (b) { if (b) b.setAttribute('aria-busy', 'true'); });
    if (error) error.hidden = true;

    var id = form.querySelector('[data-hm-variant-id]').value;
    var qty = parseInt(form.querySelector('[data-hm-qty]').value || '1', 10);
    var root_url = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
    var after = root.dataset.after || 'checkout';

    fetch(root_url + 'cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ items: [{ id: parseInt(id, 10), quantity: qty }] })
    })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, json: j }; }); })
      .then(function (res) {
        if (!res.ok) throw new Error(res.json.description || res.json.message || 'No pudimos agregar el producto.');
        document.dispatchEvent(new CustomEvent('hm:added', { detail: res.json }));
        if (after === 'checkout') window.location.href = root_url + 'checkout';
        else if (after === 'cart') window.location.href = root_url + 'cart';
        else {
          buttons.forEach(function (b) { if (b) b.removeAttribute('aria-busy'); });
          var ok = root.querySelector('[data-hm-added]');
          if (ok) { ok.hidden = false; setTimeout(function () { ok.hidden = true; }, 4000); }
          refreshCartCount();
        }
      })
      .catch(function (e) {
        buttons.forEach(function (b) { if (b) b.removeAttribute('aria-busy'); });
        if (error) { error.textContent = e.message; error.hidden = false; }
      });
  }

  function refreshCartCount() {
    var root_url = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
    fetch(root_url + 'cart.js').then(function (r) { return r.json(); }).then(function (cart) {
      document.querySelectorAll('.cart-count-bubble span[aria-hidden], [data-cart-count], .cart-count').forEach(function (n) {
        n.textContent = cart.item_count;
      });
    }).catch(function () {});
  }

  /* ---------- Barra fija de compra ---------- */
  function initSticky(bar) {
    if (!once(bar, 'Sticky')) return;
    var target = document.getElementById(bar.dataset.target);
    if (!target) return;
    var visible = false;
    var ticking = false;
    /* Se muestra cuando el botón de compra quedó arriba, fuera de pantalla */
    function check() {
      ticking = false;
      var past = target.getBoundingClientRect().bottom < 0;
      if (past === visible) return;
      visible = past;
      bar.classList.toggle('is-visible', past);
      document.documentElement.classList.toggle('hm-sticky-on', past);
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(check); }
    }, { passive: true });
    window.addEventListener('resize', check);
    check();
  }

  /* ---------- Links internos suaves (#hm-comprar) ---------- */
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a[href^="#"]');
    if (!a || a.getAttribute('href').length < 2) return;
    var t = document.getElementById(a.getAttribute('href').slice(1));
    if (!t || !t.closest('.hm, [id^="hm-"]')) return;
    ev.preventDefault();
    t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  function init(scope) {
    scope = scope || document;
    scope.querySelectorAll('[data-hm-slider]').forEach(initSlider);
    scope.querySelectorAll('.hm-reveal').forEach(initReveal);
    scope.querySelectorAll('[data-hm-countdown]').forEach(initCountdown);
    scope.querySelectorAll('[data-hm-compare]').forEach(initCompare);
    scope.querySelectorAll('[data-hm-video]').forEach(initVideo);
    scope.querySelectorAll('[data-hm-gallery]').forEach(initGallery);
    scope.querySelectorAll('[data-hm-buybox]').forEach(initBuybox);
    scope.querySelectorAll('[data-hm-sticky]').forEach(initSticky);
  }

  window.HMLanding = { init: init };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(); });
  else init();

  /* Editor de temas: re-inicializa al editar una sección */
  document.addEventListener('shopify:section:load', function (e) { init(e.target); });
  document.addEventListener('shopify:block:select', function (e) {
    var slide = e.target;
    var track = slide.parentElement;
    if (track && track.hasAttribute('data-hm-track')) track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  });
})();
