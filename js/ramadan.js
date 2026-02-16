/* ===== RAMADAN PAGE - Interactive Engine ===== */

/* Star Background */
function createStars() {
  const container = document.getElementById('starsBg');
  if (!container) return;
  const count = Math.floor(window.innerWidth * window.innerHeight / 2000);
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--dur', `${2 + Math.random() * 5}s`);
    star.style.setProperty('--max-opacity', `${0.3 + Math.random() * 0.5}`);
    star.style.animationDelay = `${Math.random() * 6}s`;
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
    const colors = ['#ffd475', '#a47aff', '#ff8ec6'];
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

/* Heartfelt Prayers by Category */
const prayersByCategory = {
  love: [
    'Ya Allah, Premii prays for our love to remain strong, pure, and eternal. Accept her prayers and keep our hearts close forever.',
    'Ya Allah, let Premii’s prayers protect the bond we share and make it unshakable.',
    'Ya Allah, bless our love with Your mercy and acceptance of her heartfelt prayers.'
  ],
  marriage: [
    'Ya Allah, Premii prays for our blessed nikkah. Make it easy and full of Your barakah.',
    'Ya Allah, let her prayers guide us towards a sacred, loving marriage under Your mercy.',
    'Ya Allah, unite us in marriage and bless every step with Your help and forgiveness.'
  ],
  songshar: [
    'Ya Allah, Premii prays for our future home to be filled with warmth, laughter, and Your guidance.',
    'Ya Allah, may her prayers bless our home with peace, love, and Your mercy.',
    'Ya Allah, let her prayers guide our home in every hardship and joy.'
  ],
  child: [
    'Ya Allah, Premii prays for our future child, our love symbol. May You bless this gift abundantly.',
    'Ya Allah, let her prayers shape our child to grow in iman, love, and kindness.',
    'Ya Allah, accept her prayers for our family’s happiness and unity.'
  ],
  jannah: [
    'Ya Allah, Premii prays that we enter Jannatul Ferdous together, hand in hand, never separated.',
    'Ya Allah, accept her prayers for our eternal happiness and love in the afterlife.',
    'Ya Allah, may her prayers guide us to Your highest mercy and forgiveness.'
  ]
};

const categoryLabels = {
  love: '💕 Our Love',
  marriage: '💍 Our Marriage',
  songshar: '🏡 Our Home & Family',
  child: '👶 Our Love Symbol',
  jannah: '🌿 Jannatul Ferdous'
};

const wallDuas = [
  { label: categoryLabels.love, text: 'Ya ALLAH, Premii’s prayers for our love are my greatest blessing. Keep it pure, strong, and eternal.' },
  { label: categoryLabels.marriage, text: 'Ya ALLAH, let Premii pray for our nikkah and bless our union with Your mercy and forgiveness.' },
  { label: categoryLabels.songshar, text: 'Ya ALLAH, Premii’s prayers bless our home with peace, guidance, and Your loving help.' },
  { label: categoryLabels.child, text: 'Ya ALLAH, let Premii pray for our love symbol, our future child, and accept these prayers with mercy.' },
  { label: categoryLabels.jannah, text: 'Ya ALLAH, accept Premii’s prayers and unite us in Jannatul Ferdous, where our love never ends.' },
  { label: '🤲 Always', text: 'Ya ALLAH, Premii’s prayers are the light in our lives. Accept us, forgive us, guide us, and bless us forever.' }
];

const cardsWrap = document.getElementById('duaCards');
const duaText = document.getElementById('duaText');
const customDua = document.getElementById('customDua');
const addDuaBtn = document.getElementById('addDuaBtn');
const categoryBtns = document.querySelectorAll('[data-category]');

function drawCards() {
  if (!cardsWrap) return;
  cardsWrap.innerHTML = '';
  wallDuas.forEach((dua, index) => {
    const card = document.createElement('article');
    card.style.animationDelay = `${index * 0.12}s`;
    card.innerHTML = `<strong>${dua.label}</strong><p>${dua.text}</p>`;
    cardsWrap.appendChild(card);
  });
}

function revealDua(text) {
  if (!duaText) return;
  duaText.style.opacity = '0';
  duaText.style.transform = 'translateY(8px)';
  setTimeout(() => {
    duaText.textContent = text;
    duaText.style.opacity = '1';
    duaText.style.transform = 'translateY(0)';
    duaText.classList.add('revealing');
    setTimeout(() => duaText.classList.remove('revealing'), 600);
  }, 350);
}

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.category;
    const prayers = prayersByCategory[cat];
    if (!prayers) return;
    const random = prayers[Math.floor(Math.random() * prayers.length)];
    revealDua(random);
    categoryBtns.forEach(b => b.classList.remove('active-prayer'));
    btn.classList.add('active-prayer');
  });
});

addDuaBtn?.addEventListener('click', () => {
  const value = customDua.value.trim();
  if (!value) return;
  wallDuas.push({ label: '🤲 My Prayer', text: value });
  customDua.value = '';
  drawCards();
  setTimeout(() => {
    const allCards = cardsWrap.querySelectorAll('article');
    allCards[allCards.length - 1]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
});

customDua?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addDuaBtn?.click();
});

/* Initialize */
createStars();
initSparkleTrail();
initScrollReveal();
drawCards();
