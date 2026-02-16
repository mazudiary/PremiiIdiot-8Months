/* ===== OUR STORY PAGE — Interactive Engine ===== */

/* ── Shared: Star Background ── */
function createStars() {
  const container = document.getElementById('starsBg');
  if (!container) return;
  const count = Math.floor(window.innerWidth * window.innerHeight / 2500);
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--dur', `${2 + Math.random() * 4}s`);
    star.style.setProperty('--max-opacity', `${0.3 + Math.random() * 0.5}`);
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
    if (now - lastSparkle < 70) return;
    lastSparkle = now;
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    const colors = ['#ff8ec6', '#a47aff', '#ffd475'];
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

/* ── Memory Slider with Smooth Transition ── */
const memories = [
  {
    title: 'The Golden Afternoon',
    date: '14 Feb 2020 | Ekushey Boi Mela',
    desc: 'Eva called out "Lopa!" in the golden dust of the book fair, and my whole world shifted. Amongst thousands of books and endless paths, fate made sure our orbits finally crossed. That single shout in the afternoon crowd was the start of everything.'
  },
  {
    title: 'Our Love Started',
    date: '17 June 2025 | The Day Everything Changed',
    desc: 'Friendship became love. "Just friends" became us. From that day, every sunrise carried your name, every prayer had your face, and my heart learned what it was always meant for.'
  },
  {
    title: 'First Date',
    date: '1 July 2025 | Our First Real Date',
    desc: 'The first time we went out as "us." Every second was a treasure, every glance was a conversation, every silence was comfortable. The beginning of many forever memories.'
  },
  {
    title: 'The Night You Cried',
    date: '13 Feb 2026 | A Phone Call',
    desc: 'You called me crying because someone had hurt you and made you feel small. It completely touched my heart. I feel all time: I will never cause you pain or pressure, and at the end of everything, I will go to you, hug you, and help you forget all the sadness. But you must stay happy, you must remain joyful.'
  },
  {
    title: '8 Months of Us',
    date: '17 Feb 2026 | Still Counting',
    desc: 'From that golden afternoon to 8 months of love, we survived distance, exams, tears, fights, and everything life threw at us. And this month, Ramadan begins too. February truly is our special month, Premii.'
  }
];


const slider = document.getElementById('memorySlider');
const memoryCard = document.getElementById('memoryCard');

function renderMemory(index) {
  const item = memories[index];
  if (!item || !memoryCard) return;

  memoryCard.classList.add('transitioning');

  setTimeout(() => {
    memoryCard.querySelector('h3').textContent = item.title;
    memoryCard.querySelector('.date').textContent = item.date;
    memoryCard.querySelector('.desc').textContent = item.desc;
    memoryCard.classList.remove('transitioning');
  }, 350);
}

slider?.addEventListener('input', (e) => {
  renderMemory(Number(e.target.value));
});

/* ── Initialize ── */
createStars();
initSparkleTrail();
initScrollReveal();
renderMemory(0);