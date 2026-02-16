/* ===== FOREVER PAGE - Interactive Engine ===== */

/* Star Background */
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
    star.style.setProperty('--max-opacity', `${0.4 + Math.random() * 0.5}`);
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.width = star.style.height = `${1 + Math.random() * 2}px`;
    container.appendChild(star);
  }
}

/* Cursor Sparkle Trail */
let lastSparkle = 0;
function initSparkleTrail() {
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSparkle < 70) return;
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

/* Scroll Reveal Observer */
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

/* Floating Hearts */
function spawnHeart() {
  const container = document.getElementById('floatingHearts');
  if (!container) return;
  const heart = document.createElement('span');
  heart.className = 'heart-float';
  const symbols = ['\u2764', '\u{1F497}', '\u{1F495}', '\u{1F49E}', '\u{1F339}'];
  heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.bottom = '-20px';
  heart.style.animationDuration = `${6 + Math.random() * 5}s`;
  heart.style.fontSize = `${0.8 + Math.random() * 1}rem`;
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 11000);
}

/* Heart Messages */
const revealBtn = document.getElementById('revealBtn');
const heartMsg = document.getElementById('heartMsg');
const heartReveal = document.getElementById('heartReveal');
const ageNow = document.getElementById('ageNow');
const togetherNow = document.getElementById('togetherNow');
const sinceFound = document.getElementById('sinceFound');

const messages = [
  'My Premii, in every Ramadan and every day, I choose you.',
  'You are my queen, my peace, my dua, my forever valobashaa.',
  'From the Boi Mela to forever, this is our magic.',
  'Valobashiii Valobashaa in every heartbeat, every breath.',
  'My Pakhiii, you are my today, my tomorrow, my everything.',
  'Every prayer I make, your name is in it. Always.',
  '6 years since I first saw you, and I would find you again in every lifetime.',
  'Ami kosto korbo, pressure nibo, but sob sesh e tomar kache ashtei hobe.',
  'February gave me you. Ramadan gives me prayers for us. ALLAH gave me everything.'  
];

let lastMsgIndex = -1;
revealBtn?.addEventListener('click', () => {
  let random;
  do {
    random = Math.floor(Math.random() * messages.length);
  } while (random === lastMsgIndex && messages.length > 1);
  lastMsgIndex = random;

  if (heartReveal) {
    heartReveal.classList.add('active');
  }

  if (heartMsg) {
    heartMsg.style.opacity = '0';
    heartMsg.style.transform = 'translateY(10px)';
    setTimeout(() => {
      heartMsg.textContent = messages[random];
      heartMsg.style.opacity = '1';
      heartMsg.style.transform = 'translateY(0)';
      heartMsg.classList.add('revealing');
      setTimeout(() => heartMsg.classList.remove('revealing'), 1000);
    }, 300);
  }
});

/* Age Calculator with detailed output */
function calculateAge() {
  const birthDate = new Date(2002, 4, 15);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} years, ${months} months, ${days} days`;
}

/* Live Dynamic Counters */
function timeSince(startDate) {
  const now = new Date();
  const start = new Date(startDate);
  
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  let hours = now.getHours() - start.getHours();
  let minutes = now.getMinutes() - start.getMinutes();
  let seconds = now.getSeconds() - start.getSeconds();

  if (seconds < 0) { minutes--; seconds += 60; }
  if (minutes < 0) { hours--; minutes += 60; }
  if (hours < 0) { days--; hours += 24; }
  if (days < 0) {
    months--;
    const prev = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prev.getDate();
  }
  if (months < 0) { years--; months += 12; }

  return { years, months, days, hours, minutes, seconds };
}

function formatTogether(t) {
  const parts = [];
  if (t.years > 0) parts.push(`${t.years}y`);
  parts.push(`${t.months}mo`);
  parts.push(`${t.days}d`);
  parts.push(`${String(t.hours).padStart(2,'0')}h ${String(t.minutes).padStart(2,'0')}m ${String(t.seconds).padStart(2,'0')}s`);
  return parts.join(' ');
}

function formatSinceFound(t) {
  return `${t.years}y ${t.months}mo ${t.days}d ${String(t.hours).padStart(2,'0')}:${String(t.minutes).padStart(2,'0')}:${String(t.seconds).padStart(2,'0')}`;
}

function updateCounters() {
  if (togetherNow) {
    togetherNow.textContent = formatTogether(timeSince('2025-06-17T00:00:00'));
  }
  if (sinceFound) {
    sinceFound.textContent = formatSinceFound(timeSince('2020-02-14T00:00:00'));
  }
}

updateCounters();
setInterval(updateCounters, 1000);

/* Initialize */
createStars();
initSparkleTrail();
initScrollReveal();
setInterval(spawnHeart, 800);