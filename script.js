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


/* ── 6. INTERACTIVE CARD MOUSE LIGHTING EFFECT ─────────────── */
const cards = document.querySelectorAll('.skill-card, .project-card, .cert-card, .about-content');

cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});