'use strict';


document.addEventListener('DOMContentLoaded', function () {
  const navBurger = document.getElementById('navBurger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('#navMenu .nav-link-custom');

  if (!navBurger || !navMenu) return;

  function closeMenu() {
    navMenu.classList.remove("show");
    navBurger.classList.remove("aktif");
    navBurger.setAttribute('aria-expanded', 'false');
  }

  navBurger.addEventListener('click', function (event) {
    event.stopPropagation();

    const isOpen = navMenu.classList.toggle('show');
    navBurger.classList.toggle('aktif', isOpen);
    navBurger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu)
  });

  document.addEventListener('click', function (event) {
    if (!navMenu.contains(event.target) && !navBurger.contains(event.target)) {
      closeMenu()
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerHeight > 768) {
      closeMenu()
    }
  });
});

/* ══════════════════════════════════════════════════════
   BATIK CANVAS ANIMATION
   Menggambar motif kawung & parang bergerak di canvas
══════════════════════════════════════════════════════ */
(function initBatikCanvas() {
  const canvas = document.getElementById('batikCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, t = 0;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  // Motif kawung: 4 lingkaran menyentuh di titik tengah
  function drawKawung(x, y, r, alpha) {
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = '#C8960C';
    ctx.lineWidth = 0.5;
    const offsets = [[0, -r], [r, 0], [0, r], [-r, 0]];
    offsets.forEach(([dx, dy]) => {
      ctx.beginPath();
      ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
      ctx.stroke();
    });
    // Inner dots
    ctx.fillStyle = '#C8960C';
    ctx.globalAlpha = alpha * 0.4;
    offsets.forEach(([dx, dy]) => {
      ctx.beginPath();
      ctx.arc(x + dx, y + dy, r * 0.18, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  // Motif parang: garis diagonal dengan ornamen
  function drawParang(x, y, size, alpha) {
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = '#C8960C';
    ctx.lineWidth = 0.4;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y + size);
    ctx.stroke();
    // Small oval along the line
    ctx.save();
    ctx.translate(x + size * 0.5, y + size * 0.5);
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.15, size * 0.06, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
    ctx.globalAlpha = 1;
  }

  // Motif ceplok: bintang 8 sudut
  function drawCeplok(x, y, r, alpha, rotation) {
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = '#C8960C';
    ctx.lineWidth = 0.5;
    const pts = 8;
    ctx.beginPath();
    for (let i = 0; i < pts * 2; i++) {
      const angle = (i * Math.PI) / pts + rotation;
      const rad = i % 2 === 0 ? r : r * 0.45;
      const px = x + rad * Math.cos(angle);
      const py = y + rad * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, r * 0.2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    t += 0.003;

    const gridR = 70;

    // Layer 1: Kawung grid
    for (let row = -1; row <= Math.ceil(H / gridR) + 1; row++) {
      for (let col = -1; col <= Math.ceil(W / gridR) + 1; col++) {
        const offsetX = (row % 2) * gridR * 0.5;
        const x = col * gridR + offsetX + (Math.sin(t + row * 0.3) * 1.5);
        const y = row * gridR * 0.86;
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.8 + col * 0.4 + row * 0.6);
        drawKawung(x, y, 14 + pulse * 3, 0.06 + pulse * 0.04);
      }
    }

    // Layer 2: Parang diagonal sweep
    const pGridX = 100, pGridY = 100;
    for (let row = -1; row <= Math.ceil(H / pGridY) + 1; row++) {
      for (let col = -1; col <= Math.ceil(W / pGridX) + 1; col++) {
        const x = col * pGridX + (row % 2) * 50 + Math.sin(t * 0.5 + row) * 2;
        const y = row * pGridY;
        const wave = 0.5 + 0.5 * Math.sin(t * 1.2 + col * 0.5 - row * 0.3);
        drawParang(x, y, 30 + wave * 10, 0.04 + wave * 0.04);
      }
    }

    // Layer 3: Ceplok stars — sparse, larger, slowly rotating
    const cGrid = 160;
    for (let row = 0; row <= Math.ceil(H / cGrid) + 1; row++) {
      for (let col = 0; col <= Math.ceil(W / cGrid) + 1; col++) {
        const x = col * cGrid + (row % 2) * 80;
        const y = row * cGrid;
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.6 + col * 0.7 + row * 0.5);
        const rot = t * 0.2 + col * 0.1 + row * 0.15;
        drawCeplok(x, y, 18 + pulse * 6, 0.05 + pulse * 0.06, rot);
      }
    }

    requestAnimationFrame(render);
  }

  render();
})();

/* ══════════════════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════════════════ */
(function initCursor() {
  const cursor = document.getElementById('cursorGlow');
  if (!cursor) return;

  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animateCursor() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Expand on hoverable elements
  document.querySelectorAll('a, button, .card-cerita, .pill-kategori, .kamus-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });
})();

/* ══════════════════════════════════════════════════════
   FLOATING PARTICLES
══════════════════════════════════════════════════════ */
(function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 24; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = `${Math.random() * 100}%`;
    p.style.bottom = `${Math.random() * 30}%`;
    p.style.setProperty('--dur', `${6 + Math.random() * 10}s`);
    p.style.setProperty('--delay', `${Math.random() * 8}s`);
    // Random size
    const size = 1.5 + Math.random() * 3;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    container.appendChild(p);
  }
})();

/**══════════════════════════════════════════════════════
 * NAVBAR : UNTUK SCROLL SHADOW + ACTIVE SECTION
 ══════════════════════════════════════════════════════*/
const mainNav = document.getElementById('mainNav');
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', window.scrollY > 60);
  scrollTop.classList.toggle('visible', window.scrollY > 400);
});

scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Active nav link detection
const sectionIds = ['pambuka', 'crita', 'kamus'];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-link-custom').forEach(l => l.classList.remove('active-section'));
      const link = document.querySelector(`.nav-link-custom[href="#${entry.target.id}"]`);
      if (link) link.classList.add('active-section');
    }
  });
}, { threshold: 0.35 });

sectionIds.forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});