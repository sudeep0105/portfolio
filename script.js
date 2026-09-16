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