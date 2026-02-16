/* ===== HOME PAGE — Interactive Engine ===== */

/* ── Shared: Star Background ── */
function createStars() {
  const container = document.getElementById('starsBg');
  if (!container) return;
  const count = Math.floor(window.innerWidth * window.innerHeight / 2200);
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--dur', `${2 + Math.random() * 4}s`);
    star.style.setProperty('--max-opacity', `${0.4 + Math.random() * 0.6}`);
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.width = star.style.height = `${1 + Math.random() * 2}px`;
    container.appendChild(star);
  }
}

/* ── Shared: Cursor Sparkle Trail ── */
let lastSparkle = 0;
function initSparkleTrail() {
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSparkle < 60) return;
    lastSparkle = now;
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    const colors = ['#ff8ec6', '#a47aff', '#ffd475', '#ff5ea2'];
    sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  });
}

/* ── Shared: Scroll Reveal Observer ── */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!reveals.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach((el) => observer.observe(el));
}

/* ── Nicknames ── */
const names = [
  'Premii', 'Pakhiii', 'Sweetheart', 'Lili', 'Bou',
  'Valobashaa', 'Valobashiii', 'Sweet', 'Dreamy', 'Beautiful',
  'Happiness', 'Gift', 'Bebs', 'Queen', 'Partner',
  'Shokher Narii', 'Bibijan', 'Wiffey'
];

const nicknameDisplay = document.getElementById('nicknameDisplay');
const nextNameBtn = document.getElementById('nextNameBtn');

let nameIndex = 0;
function nextName() {
  if (!nicknameDisplay) return;
  nicknameDisplay.style.opacity = '0';
  nicknameDisplay.style.transform = 'translateY(10px) scale(0.95)';
  setTimeout(() => {
    nameIndex = (nameIndex + 1) % names.length;
    nicknameDisplay.textContent = names[nameIndex];
    nicknameDisplay.style.opacity = '1';
    nicknameDisplay.style.transform = 'translateY(0) scale(1)';
  }, 300);
}

nextNameBtn?.addEventListener('click', nextName);

/* ── Typing Effect ── */
const typedText = '6 years since I found you... and forever still to go.';
const typeLine = document.getElementById('typeLine');

let charIndex = 0;
function typeWriter() {
  if (!typeLine) return;
  if (charIndex <= typedText.length) {
    const textNode = typedText.slice(0, charIndex);
    typeLine.innerHTML = textNode + '<span class="cursor-blink"></span>';
    charIndex++;
    setTimeout(typeWriter, 55);
  } else {
    setTimeout(() => {
      charIndex = 0;
      typeWriter();
    }, 4000);
  }
}

/* ── Floating Emojis ── */
const emojiField = document.querySelector('.floating-emoji');
const emojis = ['💖', '😘', '✨', '💕', '🌸'];

function spawnEmoji() {
  if (!emojiField) return;
  const particle = document.createElement('span');
  particle.className = 'emoji-particle';
  particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.bottom = '-10px';
  particle.style.animationDuration = `${5 + Math.random() * 4}s`;
  emojiField.appendChild(particle);
  setTimeout(() => particle.remove(), 9000);
}

/* ── Initialize ── */
createStars();
initSparkleTrail();
initScrollReveal();
typeWriter();
setInterval(spawnEmoji, 500);