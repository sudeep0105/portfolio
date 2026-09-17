/* ============================================================
   K Venkata Sudeep — Portfolio Scripts
   Dark Cyber / Neon Tech Theme
   ============================================================ */

/* ── 1. SCROLL REVEAL ──────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.section').forEach((section) => {
  revealObserver.observe(section);
});


/* ── 2. SMOOTH SCROLL ──────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


/* ── 3. ACTIVE NAV HIGHLIGHT ───────────────────────────────── */
const allSections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = '';

  allSections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav(); // run once on load


/* ── 4. HEADER SCROLLED GLASS EFFECT ───────────────────────── */
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
}, { passive: true });


/* ── 5. TYPEWRITER HERO ROLE ANIMATION ─────────────────────── */
const roleTextElement = document.getElementById('role-text');
const roles = [
  'Full Stack Java Developer',
  'Spring Boot & React Specialist',
  'Software Development Engineer'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  if (!roleTextElement) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    roleTextElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    roleTextElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 35 : 75;

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2200; // Pause at end of word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 400; // Pause before typing next word
  }

  setTimeout(typeRole, typeSpeed);
}

// Initialize typewriter animation after hero reveal delay
setTimeout(typeRole, 800);


/* ── 6. INTERACTIVE CARD MOUSE LIGHTING + 3D TILT EFFECT ───── */
const cards = document.querySelectorAll('.skill-card, .project-card, .cert-card, .about-content');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    if (!reduceMotion) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.setProperty('--rotate-x', `${rotateX}deg`);
      card.style.setProperty('--rotate-y', `${rotateY}deg`);
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  });
});


/* ── 7. SCROLL PROGRESS BAR ────────────────────────────────── */
const scrollProgressBar = document.getElementById('scroll-progress-bar');

function updateScrollProgress() {
  if (!scrollProgressBar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgressBar.style.width = `${percent}%`;
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();


/* ── 8. CUSTOM CURSOR GLOW ─────────────────────────────────── */
const cursorGlow = document.getElementById('cursor-glow');

if (cursorGlow && !reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    cursorGlow.classList.add('active');
    cursorGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  });

  document.addEventListener('mouseleave', () => {
    cursorGlow.classList.remove('active');
  });
}


/* ── 9. MAGNETIC BUTTONS ───────────────────────────────────── */
const magneticButtons = document.querySelectorAll('.btn');

if (!reduceMotion) {
  magneticButtons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.setProperty('--mx', `${x * 0.25}px`);
      btn.style.setProperty('--my', `${y * 0.25}px`);
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.setProperty('--mx', '0px');
      btn.style.setProperty('--my', '0px');
    });
  });
}


/* ── 10. MOBILE NAV TOGGLE ─────────────────────────────────── */
const navToggle = document.getElementById('nav-toggle');
const navLinksMenu = document.getElementById('nav-links');

if (navToggle && navLinksMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinksMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinksMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinksMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}


/* ── 11. COPY EMAIL TO CLIPBOARD ───────────────────────────── */
const copyEmailBtn = document.getElementById('copy-email-btn');

if (copyEmailBtn) {
  const tooltip = copyEmailBtn.querySelector('.copy-email-tooltip');
  const defaultLabel = tooltip ? tooltip.textContent : 'Copy email';

  copyEmailBtn.addEventListener('click', async () => {
    const email = copyEmailBtn.getAttribute('data-email') || '';
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      // Fallback for browsers without Clipboard API support
      const helper = document.createElement('textarea');
      helper.value = email;
      helper.style.position = 'fixed';
      helper.style.opacity = '0';
      document.body.appendChild(helper);
      helper.select();
      document.execCommand('copy');
      document.body.removeChild(helper);
    }

    copyEmailBtn.classList.add('copied');
    if (tooltip) tooltip.textContent = 'Copied!';

    setTimeout(() => {
      copyEmailBtn.classList.remove('copied');
      if (tooltip) tooltip.textContent = defaultLabel;
    }, 1800);
  });
}


/* ── 12. BACK TO TOP BUTTON ────────────────────────────────── */
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ── 13. INTERACTIVE NETWORK BACKGROUND (Canvas Particles) ──
   A field of drifting nodes connected by faint lines. Nodes near
   the pointer are gently pushed aside and light up their links,
   turning the ambient backdrop into something that responds to
   the visitor instead of just sitting there.
   ──────────────────────────────────────────────────────────── */
(() => {
  const canvas = document.getElementById('bg-network');
  if (!canvas || reduceMotion) return; // `reduceMotion` declared in section 6 above

  const ctx = canvas.getContext('2d');
  const NODE_COLORS = ['0, 242, 254', '168, 85, 247', '56, 189, 248']; // cyan / violet / cyan-bright
  const LINK_DIST = 135;
  const MOUSE_RADIUS = 150;

  let vw = window.innerWidth;
  let vh = window.innerHeight;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let particles = [];
  let rafId = null;

  const pointer = { x: null, y: null };

  function particleCount() {
    const area = vw * vh;
    return Math.min(95, Math.max(30, Math.round(area / 17000)));
  }

  function makeParticles() {
    const count = particleCount();
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * vw,
      y: Math.random() * vh,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.8,
      color: NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)]
    }));
  }

  function resize() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = vw * dpr;
    canvas.height = vh * dpr;
    canvas.style.width = vw + 'px';
    canvas.style.height = vh + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    makeParticles();
  }

  function draw() {
    ctx.clearRect(0, 0, vw, vh);

    // update + draw nodes
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x <= 0 || p.x >= vw) p.vx *= -1;
      if (p.y <= 0 || p.y >= vh) p.vy *= -1;
      p.x = Math.min(Math.max(p.x, 0), vw);
      p.y = Math.min(Math.max(p.y, 0), vh);

      if (pointer.x !== null) {
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < MOUSE_RADIUS) {
          const push = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 1.1;
          p.x += (dx / dist) * push;
          p.y += (dy / dist) * push;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, 0.85)`;
      ctx.fill();
    }

    // node-to-node links
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < LINK_DIST) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / LINK_DIST) * 0.22})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // node-to-pointer links
      if (pointer.x !== null) {
        const a = particles[i];
        const dist = Math.hypot(a.x - pointer.x, a.y - pointer.y);
        if (dist < MOUSE_RADIUS) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - dist / MOUSE_RADIUS) * 0.45})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
    }

    rafId = requestAnimationFrame(draw);
  }

  function setPointer(x, y) {
    pointer.x = x;
    pointer.y = y;
  }

  function clearPointer() {
    pointer.x = null;
    pointer.y = null;
  }

  window.addEventListener('mousemove', (e) => setPointer(e.clientX, e.clientY), { passive: true });
  window.addEventListener('mouseleave', clearPointer);
  window.addEventListener('touchmove', (e) => {
    if (e.touches[0]) setPointer(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  window.addEventListener('touchend', clearPointer);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      if (!rafId) draw();
    } else {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  });

  resize();
  draw();
})();