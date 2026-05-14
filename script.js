/* ══════════════════════════════════════════════════════
   JAGABAYA — script.js
   Data, Animasi Batik, & Interaktivitas
══════════════════════════════════════════════════════ */
 
'use strict';
 
/* ══════════════════════════════════════════════════════
   DATA KAMUS
══════════════════════════════════════════════════════ */
const KAMUS = {
  "randha":       { arti: "janda; wanita sing wis mati bojone",             asal: "Jawa Kuno" },
  "raseksa":      { arti: "raksasa; makhluk besar jahat dalam dongeng",     asal: "Sanskerta: rākṣasa" },
  "wiji":         { arti: "biji; benih tanaman",                            asal: "Jawa" },
  "pertapa":      { arti: "orang yang bertapa/bersemedi di hutan",          asal: "Sanskerta: tapas" },
  "lendhut":      { arti: "lumpur; tanah becek",                            asal: "Jawa" },
  "sayembara":    { arti: "perlombaan/kompetisi untuk meraih sesuatu",      asal: "Sanskerta: svayaṃvara" },
  "candhi":       { arti: "candi; bangunan suci/pemujaan",                  asal: "Jawa" },
  "makhluk alus": { arti: "makhluk halus; jin, roh, atau setan",            asal: "Melayu-Jawa" },
  "selendang":    { arti: "kain panjang dipakai di bahu sebagai perhiasan", asal: "Melayu" },
  "kayangan":     { arti: "khayangan; surga; tempat tinggal dewa-dewi",     asal: "Sanskerta: svarga" },
  "bidadari":     { arti: "dewi kahyangan yang cantik dan bisa terbang",    asal: "Sanskerta: vidyādharī" },
  "sendhang":     { arti: "sendang; sumber air/kolam alami di hutan",       asal: "Jawa" },
  "pangeran":     { arti: "pangeran; putra mahkota atau bangsawan muda",    asal: "Jawa" },
  "kutuk":        { arti: "kutukan; hukuman gaib dari seseorang",           asal: "Jawa" },
  "reca":         { arti: "arca; patung dari batu atau logam",              asal: "Jawa Kuno" },
  "yuyu":         { arti: "kepiting air tawar",                             asal: "Jawa" },
  "nom-noman":    { arti: "pemuda; orang yang masih muda",                  asal: "Jawa" },
  "omah-omah":    { arti: "menikah; berumah tangga",                        asal: "Jawa" },
  "iri":          { arti: "iri hati; dengki; cemburu",                      asal: "Jawa" },
  "alas":         { arti: "hutan; kawasan pohon lebat",                     asal: "Jawa" },
  "sewengi":      { arti: "semalam; satu malam penuh",                      asal: "Jawa" },
  "pungkasané":   { arti: "pada akhirnya; akhir dari cerita",               asal: "Jawa" },
  "jaman biyen":  { arti: "zaman dahulu; masa lampau",                      asal: "Jawa" },
};
 
/* ══════════════════════════════════════════════════════
   DATA CERITA
══════════════════════════════════════════════════════ */
const LABEL_KAT = {
  petualangan: "⚔ Petualangan",
  "asal-usul": "🏛 Asal-Usul",
  mitologi:    "✨ Mitologi",
};
 
const CERITA = [
  {
    id: 1,
    judul: "Timun Mas",
    kategori: "petualangan",
    emoji: "🥒",
    warna: "#1E3D0A",
    warnaTerang: "#3A6A18",
    ringkasan: "Bocah wadon sing lair saka wiji timun kudu ngadhepi raseksa sing njaluk dheweke kanthi cara sing ora disangka-sangka.",
    isi: `<p><span class="kata-sulit">Jaman biyen<span class="tooltip-kamus">zaman dahulu; masa lampau</span></span> ono <span class="kata-sulit">randha<span class="tooltip-kamus">janda; wanita sing wis mati bojone</span></span>, jenenge mbok Srini.
    Mbok Srini ketemu <span class="kata-sulit">raseksa<span class="tooltip-kamus">raksasa; makhluk besar jahat dalam dongeng</span></span> buto ijo.
    Buto ijo kondha :“Yen kowe gelem nandur <span class="kata-sulit">wiji<span class="tooltip-kamus">biji; benih tanaman</span></span> iki, bakal lair anakmu, nanging yen wis gedhe kudu tak jupuk.” Senajan wedi, mbok Srini gelem amarga kepengin banget nduwe anak.
    Woh timun mau mateng banjur dibelah, terus metu bayi wadon ayu dijenengi Timun Mas.</p>
<p>Nalika Timun Mas wis umur enem taun buto ijo teka arep nagih janji mbok Srini, yaiku njupuk anake.
Mbok Srini menehi Timun Mas patang wungkus yaiku wiji timun dadi alas timun,  <span class="kata-sulit">dom<span class="tooltip-kamus">jarum; alat kecil runcing untuk menjahit</span></span> dadi alas pring,  uyah dadi segara, lan trasi dadi <span class="kata-sulit">lendhut<span class="tooltip-kamus">lumpur; tanah becek</span></span> panas.
<span class="kata-sulit">Pungkasané<span class="tooltip-kamus">pada akhirnya; akhir dari cerita</span></span> buto ijo kalah,  Timun Mas bisa ketemu karo Mbok Srini lan urip tentrem, dene buto ijo gagal njupuk Timun Mas.</p>
`,
  },
  {
    id: 2,
    judul: "Roro Jonggrang",
    kategori: "mitologi",
    emoji: "🛕",
    warna: "#1A1A4E",
    warnaTerang: "#3030A0",
    ringkasan: "Putri sing nolak lamaran raja dikutuk dadi arca kanggo nglengkapi sewu candhi sing meh rampung.",
    isi: `<p>Ing <span class="kata-sulit">jaman biyen<span class="tooltip-kamus">zaman dahulu; masa lampau</span></span>, ana satriya sekti jenenge Bandung Bondowoso sing menang perang nglawan Raja Baka.
    Bareng mlebu kraton, dheweke weruh Roro Jonggrang sing ayu banget.
    Bandung Bondowoso ngomong : “Roro Jonggrang, aku kepengin kowe tak rabeni dadi bojoku.” Roro Jonggrang ora gelem nanging wedi nolak, mula kondha :“Yen pancen tresna tenan, gawekna aku sewu <span class="kata-sulit">candhi<span class="tooltip-kamus">candi; bangunan suci/pemujaan</span></span> wektune <span class="kata-sulit">sewengi<span class="tooltip-kamus">semalam; satu malam penuh</span></span> wae!”.</p>
<p>Bandung Bondowoso kasekten — dheweke njaluk tulung marang <span class="kata-sulit">makhluk alus<span class="tooltip-kamus">makhluk halus; jin, roh, atau setan</span></span>,  nanging sing dadi wis 999.
Roro Jonggrang gugup terus prentah dayange :“Ayo,  lesung-lesung kae di thuthuki sing banter, obongen damen ben padhang kaya esuk!” Bareng krungu rame-rame, jin-jin padha mlayu.
Nalika ngerti yen Roro Jonggrang sing ngapusi, dheweke murka lan ngucapake <span class="kata-sulit">kutuk<span class="tooltip-kamus">kutukan; hukuman gaib dari seseorang</span></span>: Roro Jonggrang dadi <span class="kata-sulit">reca<span class="tooltip-kamus">arca; patung dari batu atau logam</span></span> kanggo nglengkapi candhi kaping sewu.</p>`,
  },
  {
    id: 3,
    judul: "Malin Kundang",
    kategori: "asal-usul",
    emoji: "⛵",
    warna: "#2C4A1E",
    warnaTerang: "#4A7A30",
    ringkasan: "Anak sing ninggalake ibune kanggo golek rejeki. Sawise sugih lan rabi, Malin bali nanging ora ngakoni ibune sing tuwa lan mlarat. Ibune ndonga Malin dikutuk dadi watu.",
    isi: `<p><span class="kata-sulit">Jaman biyen<span class="tooltip-kamus">zaman dahulu; masa lampau</span></span> nang Sumatera Barat ono bocah jenenge Malin Kundang urip karo ibune sing <span class="kata-sulit">mlarat<span class="tooltip-kamus">miskin; tidak punya banyak harta</span></span>,  ibune Malin Kundang jenenge Mande Rubayah.
    Malin ngomong : “Mak, aku arep <span class="kata-sulit">ngumbara<span class="tooltip-kamus">merantau; pergi jauh mencari kehidupan</span></span> ben dadi wong sugih.”</p>
<p>Bareng wis sukses dadi <span class="kata-sulit">saudagar<span class="tooltip-kamus">pedagang kaya; orang yang berdagang besar</span></span>, Malin mulih numpak kapal gedhe karo bojone.
Ibune langsung nyedhak karo nangis lan kondha :“Malin, iki ibu, Le !”Nanging Malin isin terus <span class="kata-sulit">nyentak<span class="tooltip-kamus">membentak; berbicara dengan nada keras</span></span> : “Aku dudu anakmu!”.
Ibune sedih lan ndongake :“Gusti, yen pancen iki anakku, nyuwun tulung anakku dikutuk ben dadio watu.” Ora suwe ombak gedhe teka lan Malin Kundang <span class="kata-sulit">malih dadi watu<span class="tooltip-kamus">berubah menjadi batu; menjadi batu karena kutukan</span></span>.</p>`,
  },
];
 
/* ══════════════════════════════════════════════════════
   QUIZ — DATA LEVEL
══════════════════════════════════════════════════════ */
const LEVEL_DATA = [
  { id:1, nama:'Mudha',     sub:'Pemula',   emoji:'🌱', xpPer:10 },
  { id:2, nama:'Trampil',   sub:'Terampil', emoji:'⚡', xpPer:12 },
  { id:3, nama:'Wasis',     sub:'Mahir',    emoji:'🏛', xpPer:14 },
];

/* ══════════════════════════════════════════════════════
   QUIZ — SOAL (8 per level = 40 total)
══════════════════════════════════════════════════════ */
const SOAL_KUIS = {
  1: [
    { soal:'Apa artine tembung "wiji"?', p:['Benih tanaman','Bunga cantik wangi','Sumber mata air','Putra raja muda'], b:0 },
    { soal:'Apa artine tembung "bidadari"?', p:['Penyihir jahat','Dewi kahyangan sing bisa mabur','Raksasa betina','Putri raja'], b:1 },
    { soal:'Apa artine tembung "lendhut"?', p:['Hutan lebat','Sumber air alami','Tanah becek','Kerajaan besar'], b:2 },
    { soal:'Apa artine tembung "candhi"?', p:['Pantai indah','Pegunungan tinggi','Bangunan suci','Sawah subur'], b:2 },
    { soal:'Apa artine tembung "makhluk alus"?', p:['Pedagang sugih','Jin, roh, atau setan','Prajurit perang','Petani desa'], b:1 },
    { soal:'Apa artine tembung "kutuk"?', p:['Doa keselamatan','Nyanyian merdu','Kutukan; hukuman gaib','Hadiah istimewa'], b:2 },
    { soal:'Apa artine tembung "reca"?', p:['Senjata perang','Patung dari batu atau logam','Mahkota emas','Cincin kerajaan'], b:1 },
    { soal:'Apa artine tembung "randha"?', p:['Gadis muda','Janda; wanita sing wis mati bojone','Nenek tua','Ratu cantik'], b:1 },
  ],
  2: [
    { soal:'Sapa tokoh utama ing crita "Timun Mas"?', p:['Nawang Wulan','Roro Jonggrang','Timun Mas','Purbasari'], b:2 },
    { soal:'Sapa satriya sing ditolak Roro Jonggrang?', p:['Bandung Bondowoso','Jaka Tarub','Lutung Kasarung','Ande-Ande Lumut'], b:0 },
    { soal:'Sapa jenenge ibune Malin Kundang?', p:['Purbasari','Mande Rubayah','Nawang Wulan','Roro Jonggrang'], b:2 },
    { soal:'Pira cacahe candhi sing kudu digawe Bandung Bondowoso?', p:['500','999','1000','777'], b:2 },
    { soal:'Sapa raseksa sing arep jupuk Timun Mas?', p:['Purbararang (kakangé wadon)','Buto ijo','Lutung Kasarung','Ratu kerajaan'], b:1 },
    { soal:'Apa sebabé Malin Kundang dikutuk dadi watu?', p:['Amarga kalah perang','Amarga ngapusi kancane','Amarga durhaka marang ibune','Amarga nyolong bandha kerajaan'], b:3 },
    { soal:'Apa sing digunakake Timun Mas kanggo ngalangi raseksa kaping pisanan?', p:['Uyah','Dom','Wiji timun','Trasi'], b:1 },
    { soal:'Apa sing dilakoni Bandung Bondowoso sawise diapusi?', p:['Menehi maaf','Ngucapke kutukan Roro Jonggrang','Ngajak Jaka Tarub melu','Ngurep selendang'], b:1 },
  ],
  3: [
    { soal:'Aksara “ꦲꦤ ꦧꦸꦏꦸ” diwaca…', p:['Ana buku','Ana meja','Tuku buku','Buku anyar'], b:0 },
    { soal:'Aksara “ꦤꦱꦶ ꦲꦔꦼꦠ꧀” diwaca…', p:['Nasi adhem','Nasi anget','Sega goreng','Mangan nasi'], b:1 },
    { soal:'Aksara “ꦕꦫ ꦭꦫꦶ” diwaca…', p:['Cara mlaku','Cara mangan','Cara lari','Cara turu'], b:2 },
    { soal:'Aksara “ꦗꦏ ꦧꦲꦒꦶꦪ” diwaca…', p:['Jaka bahagia','Jaka lara','Bocah bahagia','Wong bahagia'], b:0 },
    { soal:'Aksara “ꦧꦸꦏꦸ ꦒꦼꦝꦺ” diwaca…', p:['Buku cilik','Buku anyar','Buku gedhe','Buku lawas'], b:2 },
    { soal:'Aksara “ꦭꦫꦶ ꦕꦼꦥꦼꦠ꧀” diwaca…', p:['Lari alon','Lari cepet','Mlaku cepet','Mlumpat dhuwur'], b:1 },
    { soal:'Aksara “ꦥꦱ ꦭꦩ” diwaca…', p:['Pasa lama','Pasa anyar','Pas ep','Pas panas'], b:0 },
    { soal:'Aksara “ꦥꦱ ꦫꦩꦺ” diwaca…', p:['Pasa sepi','Pasa rame','Pas ep','Pas panas'], b:2 },
  ],
};

document.addEventListener('DOMContentLoaded', function () {
    const navBurger = document.getElementById('navBurger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('#navMenu .nav-link-custom');
 
    if (!navBurger || !navMenu) return;
 
    function closeMenu() {
      navMenu.classList.remove('show');
      navBurger.classList.remove('aktif');
      navBurger.setAttribute('aria-expanded', 'false');
    }
 
    navBurger.addEventListener('click', function (event) {
      event.stopPropagation();
 
      const isOpen = navMenu.classList.toggle('show');
      navBurger.classList.toggle('aktif', isOpen);
      navBurger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
 
    navLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
 
    document.addEventListener('click', function (event) {
      if (!navMenu.contains(event.target) && !navBurger.contains(event.target)) {
        closeMenu();
      }
    });
 
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        closeMenu();
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
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
 
  resize();
  window.addEventListener('resize', resize);
 
  // Motif kawung: 4 lingkaran menyentuh di titik tengah
  function drawKawung(x, y, r, alpha) {
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = '#C8960C';
    ctx.lineWidth = 0.5;
    const offsets = [[0,-r],[r,0],[0,r],[-r,0]];
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
    cursor.style.top  = cy + 'px';
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
    p.style.left   = `${Math.random() * 100}%`;
    p.style.bottom = `${Math.random() * 30}%`;
    p.style.setProperty('--dur',   `${6 + Math.random() * 10}s`);
    p.style.setProperty('--delay', `${Math.random() * 8}s`);
    // Random size
    const size = 1.5 + Math.random() * 3;
    p.style.width  = size + 'px';
    p.style.height = size + 'px';
    container.appendChild(p);
  }
})();
 
/* ══════════════════════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
══════════════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
 
document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));
 
/* ══════════════════════════════════════════════════════
   NAVBAR: scroll shadow + active section
══════════════════════════════════════════════════════ */
const mainNav   = document.getElementById('mainNav');
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
 
/* ══════════════════════════════════════════════════════
   SMOOTH SCROLL
══════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
 
/* ══════════════════════════════════════════════════════
   RENDER CARDS CERITA
══════════════════════════════════════════════════════ */
function getIlustrasiCard(c) {
  return `<div class="card-cerita-img-placeholder" style="background:linear-gradient(140deg,${c.warna} 0%,${c.warnaTerang} 100%);">
    <span class="card-emoji">${c.emoji}</span>
  </div>`;
}
 
function getIlustrasiModal(c) {
  return `<div class="modal-img-placeholder" style="background:linear-gradient(140deg,${c.warna} 0%,${c.warnaTerang} 100%);">
    <span class="modal-emoji">${c.emoji}</span>
  </div>`;
}
 
function renderCerita(kat = 'semua') {
  const grid = document.getElementById('ceritaGrid');
  const filtered = kat === 'semua' ? CERITA : CERITA.filter(c => c.kategori === kat);
 
  grid.innerHTML = filtered.map(c => `
    <div class="card-cerita" onclick="bukaCerita(${c.id})" role="button" tabindex="0" aria-label="Baca crita ${c.judul}">
      <div class="card-shimmer"></div>
      ${getIlustrasiCard(c)}
      <div class="card-badge">${LABEL_KAT[c.kategori]}</div>
      <div class="card-body-cerita">
        <div class="card-kategori-tag">${LABEL_KAT[c.kategori]}</div>
        <h3 class="card-judul">${c.judul}</h3>
        <p class="card-ringkasan">${c.ringkasan}</p>
        <div class="card-footer-cerita">
          <span>Crita Rakyat Jawa</span>
          <span class="btn-baca">Waca Crita →</span>
        </div>
      </div>
    </div>
  `).join('') || `<div class="no-results">Ora ana crita ing kategori iki.</div>`;
 
  // Staggered card entrance
  const cards = grid.querySelectorAll('.card-cerita');
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('card-visible'), 80 + i * 100);
  });
 
  // Keyboard accessibility
  cards.forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') card.click();
    });
  });
 
  // Update cursor hover targets
  updateCursorTargets();
}
 
/* ══════════════════════════════════════════════════════
   RENDER KAMUS
══════════════════════════════════════════════════════ */
function renderKamus(filter = '') {
  const grid = document.getElementById('kamusGrid');
  const lower = filter.toLowerCase();
  const entries = Object.entries(KAMUS)
    .filter(([k, v]) => !filter || k.includes(lower) || v.arti.toLowerCase().includes(lower))
    .sort(([a], [b]) => a.localeCompare(b));
 
  if (!entries.length) {
    grid.innerHTML = `<div class="no-results">Tembung "<em>${filter}</em>" ora ditemokake...</div>`;
    return;
  }
 
  grid.innerHTML = entries.map(([kata, data], i) => `
    <div class="kamus-card" style="animation-delay:${i * 0.04}s">
      <div class="kamus-kata">${kata}</div>
      <div class="kamus-arti">${data.arti}</div>
      <div class="kamus-asal">⟡ ${data.asal}</div>
    </div>
  `).join('');
 
  updateCursorTargets();
}
 
document.getElementById('kamusSearch').addEventListener('input', e => renderKamus(e.target.value.trim()));

 /* ══════════════════════════════════════════════════════
   FILTER KATEGORI
══════════════════════════════════════════════════════ */
const filterBar = document.getElementById('filterBar');

if (filterBar) {
  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('.pill-kategori');
    if (!btn) return;

    document.querySelectorAll('.pill-kategori').forEach(b => b.classList.remove('aktif'));
    btn.classList.add('aktif');
    renderCerita(btn.dataset.kat);
  });
}

/* ══════════════════════════════════════════════════════
   MODAL CERITA
══════════════════════════════════════════════════════ */
let activeModal = null;
 
function bukaCerita(id) {
  const c = CERITA.find(x => x.id === id);
  if (!c) return;
 
  document.getElementById('modalKategori').textContent = LABEL_KAT[c.kategori];
  document.getElementById('modalJudul').textContent    = c.judul;
  document.getElementById('modalIlus').innerHTML       = getIlustrasiModal(c);
  document.getElementById('modalIsi').innerHTML        = c.isi;
 
  if (activeModal) activeModal.dispose();
  activeModal = new bootstrap.Modal(document.getElementById('modalCerita'));
  activeModal.show();
}
 
/* ══════════════════════════════════════════════════════
   UPDATE CURSOR TARGETS (after dynamic render)
══════════════════════════════════════════════════════ */
function updateCursorTargets() {
  const cursor = document.getElementById('cursorGlow');
  if (!cursor) return;
  document.querySelectorAll('.card-cerita, .pill-kategori, .kamus-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });
}
 
/* ══════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════ */
renderCerita();
renderKamus();

/* ══════════════════════════════════════════════════════
   QUIZ
══════════════════════════════════════════════════════ */
let QS = {
  level : 1, qIdx: 0, hearts: 3, xp : 0,
  streak : 0, bestStreak: 0, answered: false,
  totalXP: 0, unlockedLevel: 1,
};
function saveQProgress() {
  localStorage.setItem('jagabayaQuiz', JSON.stringify({
    unlockedLevel: QS.unlockedLevel,
    totalXp: QS.totalXp,
    bestStreak: QS.bestStreak
  }));
}
function loadQProgress(){
  try{
    const d = JSON.parse(localStorage.getItem('jagabayaQuiz') || '{}');
    QS.unlockedLevel = d.unlockedLevel || 1;
    QS.totalXp = d.totalXp || 0;
    QS.bestStreak = d.bestStreak || 0;
  } catch(e){}
}

/* ══════════════════════════════════════════════════════
   QUIZ ui teaser
══════════════════════════════════════════════════════ */
function renderLevelCards() {
  const row = document.getElementById('quizLevelRow');
  if (!row) return;
  row.innerHTML = LEVEL_DATA.map(lv => {
    const unlocked = lv.id <= QS.unlockedLevel;
    const current  = lv.id === QS.unlockedLevel;
    const cls = unlocked ? (current ? 'unlocked current' : 'unlocked') : 'locked';
    return `<div class="quiz-level-card ${cls}" data-lvl="${lv.id}" title="${unlocked ? 'Mulai level ' + lv.id : 'Rampungna level sadurunge'}">
      <span class="qlc-emoji">${unlocked ? lv.emoji : '🔒'}</span>
      <span class="qlc-name">${lv.nama}</span>
      <span class="qlc-sub">${lv.sub}</span>
      ${!unlocked ? '<span class="qlc-lock">Kunci</span>' : ''}
    </div>`;
  }).join('');

  row.querySelectorAll('.quiz-level-card.unlocked').forEach(card => {
    card.addEventListener('click', () => {
      const lvl = parseInt(card.dataset.lvl);
      startQuiz(lvl);
    });
  });

  document.getElementById('quizTotalXp').textContent = `✦ ${QS.totalXP} XP`;
}

/* ══════════════════════════════════════════════════════
   QUIZ — START
══════════════════════════════════════════════════════ */
function startQuiz(level) {
  QS.level = level; QS.qIdx = 0; QS.hearts = 3;
  QS.xp = 0; QS.streak = 0; QS.answered = false;

  const overlay = document.getElementById('quizOverlay');
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // hide result screen
  document.getElementById('quizResultScreen').classList.remove('show');
  document.getElementById('quizFeedbackBar').className = 'quiz-feedback-bar';

  renderQHeader();
  loadQuestion();
}

function renderQHeader() {
  // Hearts
  const heartsEl = document.getElementById('quizHearts');
  heartsEl.innerHTML = Array(3).fill(0).map((_, i) =>
    `<span class="quiz-heart" id="heart-${i}">${i < QS.hearts ? '❤️' : '🖤'}</span>`
  ).join('');

  // Level strip
  const lv = LEVEL_DATA[QS.level - 1];
  document.getElementById('quizLevelStrip').innerHTML =
    `Level ${QS.level} — ${lv.emoji}<span>${lv.nama}</span> · ${lv.sub}`;

  updateProgress();
}

function updateProgress() {
  const total = SOAL_KUIS[QS.level].length;
  const pct   = (QS.qIdx / total) * 100;
  document.getElementById('quizProgressFill').style.width = pct + '%';
}

function updateHeartsDisplay() {
  for (let i = 0; i < 3; i++) {
    const h = document.getElementById(`heart-${i}`);
    if (!h) continue;
    if (i < QS.hearts) {
      h.textContent = '❤️'; h.classList.remove('lost');
    } else {
      h.textContent = '🖤'; h.classList.add('lost');
    }
  }
}

/* ══════════════════════════════════════════════════════
   QUIZ — LOAD QUESTION
══════════════════════════════════════════════════════ */
function loadQuestion() {
  QS.answered = false;
  const q    = SOAL_KUIS[QS.level][QS.qIdx];
  const total = SOAL_KUIS[QS.level].length;
  const arena = document.getElementById('quizArena');
 
  // Hide feedback bar
  document.getElementById('quizFeedbackBar').className = 'quiz-feedback-bar';
 
  arena.classList.remove('slide-in');
  arena.classList.add('slide-out');
 
  setTimeout(() => {
    document.getElementById('quizQLabel').textContent =
      `Soal ${QS.qIdx + 1} saka ${total}`;
    document.getElementById('quizQuestionText').textContent = q.soal;
 
    const opts = document.getElementById('quizOptions');
    opts.innerHTML = q.p.map((txt, i) => `
      <button class="quiz-option" id="qopt-${i}" data-i="${i}">
        <span class="quiz-option-letter">${'ABCD'[i]}</span>
        <span>${txt}</span>
      </button>`).join('');
 
    opts.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => checkAnswer(parseInt(btn.dataset.i)));
    });
 
    updateProgress();
    arena.classList.remove('slide-out');
    arena.classList.add('slide-in');
  }, 260);
}
 
/* ══════════════════════════════════════════════════════
   QUIZ — CHECK ANSWER
══════════════════════════════════════════════════════ */
function checkAnswer(idx) {
  if (QS.answered) return;
  QS.answered = true;
 
  const q = SOAL_KUIS[QS.level][QS.qIdx];
  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach(b => b.disabled = true);
 
  const correct = idx === q.b;
 
  if (correct) {
    opts[idx].classList.add('correct');
    QS.streak++;
    const bonus = QS.streak >= 3 ? 5 : 0;
    QS.xp += LEVEL_DATA[QS.level - 1].xpPer + bonus;
    if (QS.streak > QS.bestStreak) QS.bestStreak = QS.streak;
    burstParticles(opts[idx]);
    QAudio.correct();
    if (QS.streak >= 3) setTimeout(() => QAudio.streak(), 280);
    showFeedback(true, q);
  } else {
    opts[idx].classList.add('wrong');
    if (q.b < opts.length) opts[q.b].classList.add('correct');
    QS.hearts = Math.max(0, QS.hearts - 1);
    QS.streak = 0;
    updateHeartsDisplay();
    QAudio.wrong();
    showFeedback(false, q);
  }
}
 
/* ══════════════════════════════════════════════════════
   QUIZ — FEEDBACK BAR
══════════════════════════════════════════════════════ */
function showFeedback(correct, q) {
  const bar     = document.getElementById('quizFeedbackBar');
  const content = document.getElementById('quizFeedbackContent');
 
  const streakHtml = (correct && QS.streak >= 3)
    ? `<span class="streak-badge">🔥 Combo x${QS.streak}! +5 XP</span>` : '';
 
  content.innerHTML = correct
    ? `<div class="quiz-feedback-left">
         <span class="feedback-icon">✓</span>
         <div class="feedback-text"><strong>Bener!</strong>${streakHtml}</div>
       </div>`
    : `<div class="quiz-feedback-left">
         <span class="feedback-icon">✗</span>
         <div class="feedback-text">
           <strong>Salah!</strong>
           <span>Jawaban bener: ${q.p[q.b]}</span>
         </div>
       </div>`;
 
  bar.className = 'quiz-feedback-bar show ' + (correct ? 'correct' : 'wrong');
 
  const nextBtn = document.getElementById('quizNextBtn');
  nextBtn.textContent = 'Lanjut →';
  nextBtn.onclick = handleNext;
}
 
function handleNext() {
  if (QS.hearts <= 0) { showGameOver(); return; }
  QS.qIdx++;
  if (QS.qIdx >= SOAL_KUIS[QS.level].length) {
    showLevelComplete();
  } else {
    loadQuestion();
  }
}
 
/* ══════════════════════════════════════════════════════
   QUIZ — LEVEL COMPLETE
══════════════════════════════════════════════════════ */
function showLevelComplete() {
  const lv = LEVEL_DATA[QS.level - 1];
  const isLast = QS.level === 5;
 
  if (QS.level >= QS.unlockedLevel) {
    QS.unlockedLevel = Math.min(QS.level + 1, 5);
  }
  QS.totalXP += QS.xp;
  saveQProgress();
  renderLevelCards();
 
  goldenRain();
  QAudio.levelUp();
 
  const rs = document.getElementById('quizResultScreen');
  document.getElementById('qrEmoji').textContent       = lv.emoji;
  document.getElementById('quizResultTitle').textContent = isLast
    ? 'Sugeng! Kowe Wicaksana!' : `Level ${QS.level} Rampung!`;
  document.getElementById('quizResultSub').textContent  = isLast
    ? 'Kabeh level wis dirampungake. Kowe bener-bener wasis!'
    : `Apik! Kowe wis rampung nglampahi level "${lv.nama}".`;
 
  document.getElementById('quizResultStats').innerHTML = `
    <div class="qrs-item"><span class="qrs-val">${QS.xp}</span><span class="qrs-label">XP Diolih</span></div>
    <div class="qrs-item"><span class="qrs-val">${QS.bestStreak}</span><span class="qrs-label">Streak Paling Dawa</span></div>
    <div class="qrs-item"><span class="qrs-val">${QS.hearts}</span><span class="qrs-label">Nyawa Sisa</span></div>`;
 
  const acts = document.getElementById('quizResultActions');
  acts.innerHTML = isLast
    ? `<button class="qra-btn primary" onclick="closeQuiz()">✦ Matur Nuwun</button>`
    : `<button class="qra-btn primary" onclick="startQuiz(${QS.level + 1})">Level Sabanjure →</button>
       <button class="qra-btn" onclick="closeQuiz()">Metu</button>`;
 
  rs.classList.add('show');
}
 
/* ══════════════════════════════════════════════════════
   QUIZ — GAME OVER
══════════════════════════════════════════════════════ */
function showGameOver() {
  const rs = document.getElementById('quizResultScreen');
  document.getElementById('qrEmoji').textContent       = '💔';
  document.getElementById('quizResultTitle').textContent = 'Nyawa Entek!';
  document.getElementById('quizResultSub').textContent  =
    `Aja sumelang — coba maneh lan sinau saka kesalahan.`;
 
  document.getElementById('quizResultStats').innerHTML = `
    <div class="qrs-item"><span class="qrs-val">${QS.xp}</span><span class="qrs-label">XP Diolih</span></div>
    <div class="qrs-item"><span class="qrs-val">${QS.qIdx}</span><span class="qrs-label">Soal Dijawab</span></div>
    <div class="qrs-item"><span class="qrs-val">${QS.bestStreak}</span><span class="qrs-label">Streak Terbaik</span></div>`;
 
  document.getElementById('quizResultActions').innerHTML =
    `<button class="qra-btn primary" onclick="startQuiz(${QS.level})">🔄 Coba Maneh</button>
     <button class="qra-btn" onclick="closeQuiz()">Metu</button>`;
 
  rs.classList.add('show');
  QAudio.gameOver();
}
 
/* ══════════════════════════════════════════════════════
   QUIZ — CLOSE
══════════════════════════════════════════════════════ */
function closeQuiz() {
  const overlay = document.getElementById('quizOverlay');
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  clearParticles();
}
 
/* ══════════════════════════════════════════════════════
   QUIZ — PARTICLES
══════════════════════════════════════════════════════ */
function burstParticles(fromEl) {
  const container = document.getElementById('quizParticles');
  const rect = fromEl.getBoundingClientRect();
  const ox = rect.left + rect.width  / 2;
  const oy = rect.top  + rect.height / 2;
  const colors = ['#C8960C','#F0C040','#fff8dc','#e6b800'];
 
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'qp-particle';
    const angle = (Math.PI * 2 / 18) * i;
    const dist  = 50 + Math.random() * 60;
    const size  = 4 + Math.random() * 5;
    p.style.cssText = `
      left:${ox}px; top:${oy}px;
      width:${size}px; height:${size}px;
      background:${colors[i % colors.length]};
      --tx:${Math.cos(angle)*dist}px;
      --ty:${Math.sin(angle)*dist - 40}px;
      --dur:${0.6 + Math.random()*0.5}s;`;
    container.appendChild(p);
    setTimeout(() => p.remove(), 1200);
  }
}
 
function goldenRain() {
  const container = document.getElementById('quizParticles');
  const colors = ['#C8960C','#F0C040','#ffe066','#fff8dc'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'qp-rain';
    const size = 4 + Math.random() * 8;
    p.style.cssText = `
      left:${Math.random()*100}%;
      height:${size}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      border-radius:50%;
      opacity:${0.6 + Math.random()*0.4};
      --dur:${1 + Math.random()*1.5}s;
      --delay:${Math.random()*1}s;`;
    container.appendChild(p);
    setTimeout(() => p.remove(), 3000);
  }
}
 
/* ══════════════════════════════════════════════════════
   QUIZ — SOUND ENGINE (Web Audio API)
   Suara sintetis, tanpa file eksternal
══════════════════════════════════════════════════════ */
const QAudio = (() => {
  let ctx = null;
 
  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
 
  // Play a single tone
  function tone(freq, type, startTime, duration, gain = 0.35) {
    const ac  = getCtx();
    const osc = ac.createOscillator();
    const env = ac.createGain();
    osc.connect(env);
    env.connect(ac.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    env.gain.setValueAtTime(0, startTime);
    env.gain.linearRampToValueAtTime(gain, startTime + 0.01);
    env.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }
 
  return {
    // ✓ Jawaban bener — dua nada naik (seperti Duolingo)
    correct() {
      const ac = getCtx();
      const t  = ac.currentTime;
      tone(880, 'sine', t,        0.12, 0.28);
      tone(1100,'sine', t + 0.12, 0.18, 0.22);
    },
 
    // ✗ Jawaban salah — nada rendah turun
    wrong() {
      const ac = getCtx();
      const t  = ac.currentTime;
      tone(300, 'sawtooth', t,        0.08, 0.18);
      tone(230, 'sawtooth', t + 0.08, 0.15, 0.14);
    },
 
    // 🔥 Streak combo — ting singkat
    streak() {
      const ac = getCtx();
      const t  = ac.currentTime;
      tone(1320,'sine', t,        0.07, 0.15);
      tone(1560,'sine', t + 0.07, 0.07, 0.12);
      tone(1760,'sine', t + 0.14, 0.1,  0.18);
    },
 
    // 🎉 Level complete — fanfare 4 nada
    levelUp() {
      const ac  = getCtx();
      const t   = ac.currentTime;
      const seq = [660, 880, 1100, 1320];
      seq.forEach((f, i) => tone(f, 'sine', t + i * 0.13, 0.18, 0.25));
      // chord finish
      setTimeout(() => {
        const t2 = ac.currentTime;
        [660, 880, 1100].forEach(f => tone(f, 'sine', t2, 0.5, 0.18));
      }, 560);
    },
 
    // 💔 Game over — turun dramatis
    gameOver() {
      const ac = getCtx();
      const t  = ac.currentTime;
      const seq = [440, 370, 311, 261];
      seq.forEach((f, i) => tone(f, 'triangle', t + i * 0.18, 0.22, 0.22));
    },
  };
})();
 
function clearParticles() {
  const c = document.getElementById('quizParticles');
  if (c) c.innerHTML = '';
}
 
 
/* ══════════════════════════════════════════════════════
   QUIZ — EVENT LISTENERS
══════════════════════════════════════════════════════ */
document.getElementById('quizCloseBtn').addEventListener('click', closeQuiz);
 
document.getElementById('quizStartBtn').addEventListener('click', () => {
  startQuiz(QS.unlockedLevel);
});
 
// Close on overlay click (outside arena)
document.getElementById('quizOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeQuiz();
});
 
// Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('quizOverlay').classList.contains('active')) {
    closeQuiz();
  }
});
 
/* ══════════════════════════════════════════════════════
   QUIZ — INIT
══════════════════════════════════════════════════════ */
loadQProgress();
renderLevelCards();

/* ══════════════════════════════════════════════════════
   AKSARA JAWA 
══════════════════════════════════════════════════════ */
(function initAksara() {

  const AKSARA = [
    // baris 0: Ha Na Ca Ra Ka
    { glyph:'ꦲ', latin:'Ha', bunyi:'Vokal /a/ — konsonan glotal, aksara pembuka',
      makna:'Simbol nafas kehidupan, awal dari segala sesuatu',
      contoh:[{ word:'hanacaraka', aksara:'ꦲꦤꦕꦫꦏ' }] },
    { glyph:'ꦤ', latin:'Na', bunyi:'Konsonan nasal /n/ — bergema di rongga hidung',
      makna:'Simbol keberadaan dan eksistensi',
      contoh:[{ word:'naga', aksara:'ꦤꦒ' }] },
    { glyph:'ꦕ', latin:'Ca', bunyi:'Konsonan afrikat /tʃ/ — seperti "ch" dalam Bahasa Inggris',
      makna:'Simbol perubahan dan transformasi',
      contoh:[{ word:'candra', aksara:'ꦕꦤ꧀ꦢꦫ' }] },
    { glyph:'ꦫ', latin:'Ra', bunyi:'Konsonan getar /r/ — bergulir di ujung lidah',
      makna:'Simbol semangat dan pergerakan',
      contoh:[{ word:'ratu', aksara:'ꦫꦠꦸ' }] },
    { glyph:'ꦏ', latin:'Ka', bunyi:'Konsonan velar /k/ — keras di belakang mulut',
      makna:'Simbol kekuatan dan keteguhan',
      contoh:[{ word:'kawula', aksara:'ꦏꦮꦸꦭ' }] },
    // baris 1: Da Ta Sa Wa La
    { glyph:'ꦢ', latin:'Da', bunyi:'Konsonan dental /d/ — lidah menyentuh gigi atas',
      makna:'Simbol keberanian dan ketegasan',
      contoh:[{ word:'dewa', aksara:'ꦢꦺꦮ' }] },
    { glyph:'ꦠ', latin:'Ta', bunyi:'Konsonan dental /t/ — lidah menyentuh langit-langit',
      makna:'Simbol kebenaran dan kejujuran',
      contoh:[{ word:'tapa', aksara:'ꦠꦥ' }] },
    { glyph:'ꦱ', latin:'Sa', bunyi:'Konsonan sibilant /s/ — seperti desis angin',
      makna:'Simbol kesucian dan kebersihan jiwa',
      contoh:[{ word:'surya', aksara:'ꦱꦸꦂꦪ' }] },
    { glyph:'ꦮ', latin:'Wa', bunyi:'Semi-vokal /w/ — antara vokal dan konsonan',
      makna:'Simbol air dan kelenturan',
      contoh:[{ word:'wayang', aksara:'ꦮꦪꦁ' }] },
    { glyph:'ꦭ', latin:'La', bunyi:'Konsonan lateral /l/ — udara mengalir di sisi lidah',
      makna:'Simbol cahaya dan penerangan',
      contoh:[{ word:'langit', aksara:'ꦭꦔꦶꦠ꧀' }] },
    // baris 2: Pa Dha Ja Ya Nya
    { glyph:'ꦥ', latin:'Pa', bunyi:'Konsonan bilabial /p/ — kedua bibir menutup',
      makna:'Simbol perlindungan dan keamanan',
      contoh:[{ word:'pangeran', aksara:'ꦥꦔꦼꦫꦤ꧀' }] },
    { glyph:'ꦝ', latin:'Dha', bunyi:'Konsonan retrofleks /ɖ/ — khas Bahasa Jawa',
      makna:'Simbol kedalaman dan kerohanian',
      contoh:[{ word:'dhawuh', aksara:'ꦝꦮꦸꦃ' }] },
    { glyph:'ꦗ', latin:'Ja', bunyi:'Konsonan afrikat /dʒ/ — seperti "j" Bahasa Indonesia',
      makna:'Simbol kejayaan dan kemenangan',
      contoh:[{ word:'jaya', aksara:'ꦗꦪ' }] },
    { glyph:'ꦪ', latin:'Ya', bunyi:'Semi-vokal /j/ — seperti "y" dalam Bahasa Jawa',
      makna:'Simbol keberuntungan dan harapan',
      contoh:[{ word:'yasa', aksara:'ꦪꦱ' }] },
    { glyph:'ꦚ', latin:'Nya', bunyi:'Konsonan nasal palatal /ɲ/ — seperti "ny" dalam "nyata"',
      makna:'Simbol pengetahuan batin dan intuisi',
      contoh:[{ word:'nyawa', aksara:'ꦚꦮ' }] },
    // baris 3: Ma Ga Ba Tha Nga
    { glyph:'ꦩ', latin:'Ma', bunyi:'Konsonan nasal bilabial /m/ — bibir menutup, hidung bergetar',
      makna:'Simbol ibu, kasih sayang, dan kesuburan',
      contoh:[{ word:'manungsa', aksara:'ꦩꦤꦸꦁꦱ' }] },
    { glyph:'ꦒ', latin:'Ga', bunyi:'Konsonan velar /ɡ/ — bergema di belakang mulut',
      makna:'Simbol pertumbuhan dan kemajuan',
      contoh:[{ word:'gunung', aksara:'ꦒꦸꦤꦸꦁ' }] },
    { glyph:'ꦧ', latin:'Ba', bunyi:'Konsonan bilabial /b/ — kedua bibir bergetar',
      makna:'Simbol bumi dan landasan yang kokoh',
      contoh:[{ word:'bumi', aksara:'ꦧꦸꦩꦶ' }] },
    { glyph:'ꦛ', latin:'Tha', bunyi:'Konsonan retrofleks /ʈ/ — lidah melengkung ke belakang',
      makna:'Simbol ketahanan dan keteguhan hati',
      contoh:[{ word:'thukul', aksara:'ꦛꦸꦏꦸꦭ꧀' }] },
    { glyph:'ꦔ', latin:'Nga', bunyi:'Konsonan nasal velar /ŋ/ — seperti "ng" dalam "nganga"',
      makna:'Simbol penyatuan dan keharmonisan semesta',
      contoh:[{ word:'ngayu', aksara:'ꦔꦪꦸ' }] },
  ];

  const BARIS = [
    { label:'Ha Na Ca Ra Ka', aksara: AKSARA.slice(0,5),
      legenda:'"Hana caraka" — ana utusan. Nyritakake nalika Ajisaka ngutus rong abdiné yaiku Dora lan Sembada.' },
    { label:'Da Ta Sa Wa La', aksara: AKSARA.slice(5,10),
      legenda:'"Datan sawala" — padha ora gelem nyingkiri. Kekalih abdi padha kukuh ngugemi printah sing beda.' },
    { label:'Pa Dha Ja Ya Nya', aksara: AKSARA.slice(10,15),
      legenda:'"Padha jayanya" — padha-padha kasektèné. Dora lan Sembada padha rosa lan pitrayanipun.' },
    { label:'Ma Ga Ba Tha Nga', aksara: AKSARA.slice(15,20),
      legenda:'"Maga bathanga" — kekalih padha dadi bathang. Loro-lorone mati setia ngugemi tugas nganti ajal.' },
  ];

  /* ── SANDHANGAN (tanda vokal) ── */
  const SANDH_MAP = {
    'i':'ꦶ', 'e':'ꦼ', 'u':'ꦸ', 'é':'ꦺ', 'o':'ꦺꦴ',
  };

  /* Peta konsonan latin → aksara carakan */
  const KONSONAN_BASE = {
  'ng':'ꦔ','ny':'ꦚ','dh':'ꦝ','th':'ꦛ',
  'h':'ꦲ','n':'ꦤ','c':'ꦕ','r':'ꦫ','k':'ꦏ',
  'd':'ꦢ','t':'ꦠ','s':'ꦱ','w':'ꦮ','l':'ꦭ',
  'p':'ꦥ','j':'ꦗ','y':'ꦪ','m':'ꦩ','g':'ꦒ','b':'ꦧ',
};

const PANGKON = '꧀';

  let activeBarisIdx = 0;
  let activeAksaraIdx = null;

  const grid        = document.getElementById('aksaraGrid');
  const legendaTeks = document.getElementById('aksaraLegendaTeks');
  const detailPanel = document.getElementById('aksaraDetailPanel');
  const detailGlyph = document.getElementById('aksaraDetailGlyph');
  const detailNama  = document.getElementById('aksaraDetailNama');
  const detailLatin = document.getElementById('aksaraDetailLatin');
  const detailBunyi = document.getElementById('aksaraDetailBunyi');
  const detailContoh= document.getElementById('aksaraDetailContoh');
  const closeBtn    = document.getElementById('aksaraDetailClose');
  const tulisInput  = document.getElementById('aksaraTulisInput');
  const tulisOutput = document.getElementById('aksaraTulisOutput');
  const resetBtn    = document.getElementById('aksaraResetBtn');

  function renderBaris(barisIdx) {
    activeBarisIdx  = barisIdx;
    activeAksaraIdx = null;
    const baris     = BARIS[barisIdx];

    legendaTeks.style.opacity = '0';
    setTimeout(() => { legendaTeks.textContent = baris.legenda; legendaTeks.style.opacity = '1'; }, 200);

    detailPanel.classList.add('d-none');

    grid.innerHTML = baris.aksara.map((a, i) => `
      <div class="aksara-card" data-idx="${i}" style="transition-delay:${i * 0.07}s">
        <span class="aksara-glyph">${a.glyph}</span>
        <span class="aksara-latin">${a.latin}</span>
        <span class="aksara-bunyi-tag">/${a.latin.toLowerCase()}/</span>
      </div>
    `).join('');

    requestAnimationFrame(() => {
      grid.querySelectorAll('.aksara-card').forEach((card, i) => {
        setTimeout(() => card.classList.add('visible'), 60 + i * 80);
        card.addEventListener('click', () => klikAksara(i, card));
      });
    });

    document.querySelectorAll('.aksara-baris-btn').forEach((b, i) => {
      b.classList.toggle('aktif', i === barisIdx);
    });
  }

  function klikAksara(idx, cardEl) {
    const a = BARIS[activeBarisIdx].aksara[idx];
    if (activeAksaraIdx === idx) {
      activeAksaraIdx = null;
      cardEl.classList.remove('aktif-card');
      detailPanel.classList.add('d-none');
      return;
    }
    grid.querySelectorAll('.aksara-card').forEach(c => c.classList.remove('aktif-card'));
    cardEl.classList.add('aktif-card');
    activeAksaraIdx = idx;

    detailGlyph.textContent  = a.glyph;
    detailNama.textContent   = a.latin;
    detailLatin.textContent  = `Konsonan Aksara Jawa — ${a.latin}`;
    detailBunyi.textContent  = a.bunyi + '. ' + a.makna + '.';
    detailContoh.innerHTML   = a.contoh.map(c =>
      `<span class="aksara-contoh-tag"><span class="aksara-contoh-aksara">${c.aksara}</span>${c.word}</span>`
    ).join('');

    detailPanel.classList.remove('d-none');
    setTimeout(() => detailPanel.scrollIntoView({ behavior:'smooth', block:'nearest' }), 50);
  }

  closeBtn.addEventListener('click', () => {
    detailPanel.classList.add('d-none');
    activeAksaraIdx = null;
    grid.querySelectorAll('.aksara-card').forEach(c => c.classList.remove('aktif-card'));
  });

  document.getElementById('aksaraBarisnav').addEventListener('click', e => {
    const btn = e.target.closest('.aksara-baris-btn');
    if (btn) renderBaris(Number(btn.dataset.baris));
  });

  const URUTAN_KUNCI = Object.keys(KONSONAN_BASE).sort((a, b) => b.length - a.length);
const VOKAL_SET = new Set(['a', 'i', 'e', 'é', 'è', 'u', 'o']);

function latinToAksara(teks) {
  const lower = teks
    .toLowerCase()
    .replace(/ee/g, 'é');

  if (!lower.trim()) return [];

  const hasil = [];
  let i = 0;

  while (i < lower.length) {
    let cocok = false;

    for (const key of URUTAN_KUNCI) {
      if (lower.startsWith(key, i)) {
        const baseGlyph = KONSONAN_BASE[key];
        const posSetelah = i + key.length;
        const charBerikut = lower[posSetelah] || '';

        let sandh = PANGKON;
        let latinDisplay = key;
        let skip = 0;

        if (VOKAL_SET.has(charBerikut)) {
          if (charBerikut === 'a') {
            sandh = '';
          } else if (charBerikut === 'è') {
            sandh = SANDH_MAP['é'];
          } else {
            sandh = SANDH_MAP[charBerikut];
          }

          latinDisplay = key + charBerikut;
          skip = 1;
        }

        hasil.push({
          glyph: baseGlyph,
          sandh: sandh,
          latinDisplay: latinDisplay,
          matched: true,
          jenis: 'carakan',
        });

        i = posSetelah + skip;
        cocok = true;
        break;
      }
    }

    if (!cocok) {
      const ch = lower[i];

      if (ch === 'a') {
        hasil.push({ glyph:'ꦲ', sandh:'', latinDisplay:'a', matched:true, jenis:'carakan' });
      } else if (VOKAL_SET.has(ch)) {
        hasil.push({
          glyph:'ꦲ',
          sandh: ch === 'è' ? SANDH_MAP['é'] : SANDH_MAP[ch],
          latinDisplay: ch,
          matched:true,
          jenis:'carakan'
        });
      } else if (ch === ' ') {
        hasil.push({ glyph:' ', sandh:'', latinDisplay:' ', matched:false, jenis:'spasi' });
      } else {
        hasil.push({ glyph:ch, sandh:'', latinDisplay:ch, matched:false, jenis:'unknown' });
      }

      i++;
    }
  }

  return hasil;
}

  function renderTulisOutput(tokens) {
    if (!tokens.length) {
      tulisOutput.innerHTML = '<span class="aksara-tulis-placeholder">Aksara bakal muncul kene…</span>';
      return;
    }
    tulisOutput.innerHTML = tokens.map((t, idx) => {
      if (t.jenis === 'spasi') return `<span style="display:inline-block;width:1rem"></span>`;
      return `
        <span class="aksara-tulis-char ${t.matched ? '' : 'unknown'}"
              style="animation-delay:${idx * 0.055}s">
          <span class="tc-glyph">${t.matched ? (t.glyph + t.sandh) : t.glyph}</span>
          <span class="tc-latin">${t.latinDisplay}</span>
        </span>`;
    }).join('');
  }

  tulisInput.addEventListener('input', () => renderTulisOutput(latinToAksara(tulisInput.value)));
  resetBtn.addEventListener('click', () => {
    tulisInput.value = '';
    tulisOutput.innerHTML = '<span class="aksara-tulis-placeholder">Aksara bakal muncul kene…</span>';
    tulisInput.focus();
  });

  renderBaris(0);

})();