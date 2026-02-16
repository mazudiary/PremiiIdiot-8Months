/* ===== Lock Page — Password Gate JS ===== */

(function () {
  'use strict';

  var PASSWORD = '20025';

  /* ── Stars ── */
  var starsBg = document.querySelector('.stars-bg');
  for (var i = 0; i < 90; i++) {
    var s = document.createElement('span');
    s.className = 'star';
    var size = Math.random() * 2.5 + 1;
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.top = Math.random() * 100 + '%';
    s.style.left = Math.random() * 100 + '%';
    s.style.setProperty('--dur', (Math.random() * 4 + 2) + 's');
    s.style.setProperty('--max-opacity', (Math.random() * 0.5 + 0.3).toString());
    s.style.animationDelay = Math.random() * 5 + 's';
    starsBg.appendChild(s);
  }

  /* ── Floating Hearts ── */
  var heartBox = document.querySelector('.float-hearts');
  var heartSymbols = ['💖', '💗', '💕', '💘', '✨'];

  function spawnHeart() {
    var h = document.createElement('span');
    h.className = 'fh';
    h.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    h.style.left = Math.random() * 100 + '%';
    h.style.bottom = '-2rem';
    h.style.animationDuration = (Math.random() * 5 + 7) + 's';
    h.style.fontSize = (Math.random() * 0.8 + 0.9) + 'rem';
    heartBox.appendChild(h);
    setTimeout(function () { h.remove(); }, 12000);
  }

  setInterval(spawnHeart, 1400);

  /* ── Sparkle Cursor ── */
  var sparkleColors = ['#ff5ea2', '#a47aff', '#ffd475', '#ff8ec6', '#c4a0ff'];

  document.addEventListener('mousemove', function (e) {
    var dot = document.createElement('span');
    dot.className = 'sparkle';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.style.background = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
    document.body.appendChild(dot);
    setTimeout(function () { dot.remove(); }, 600);
  });

  /* ── Password Logic ── */
  var pwInput = document.getElementById('pw');
  var unlockBtn = document.getElementById('unlock-btn');
  var errorMsg = document.getElementById('error-msg');
  var lockCard = document.querySelector('.lock-card');

  function tryUnlock() {
    if (pwInput.value.trim() === PASSWORD) {
      lockCard.classList.add('success');
      unlockBtn.textContent = 'Welcome, Premii! 💖';
      pwInput.disabled = true;
      unlockBtn.disabled = true;
      setTimeout(function () {
        window.location.href = 'home.html';
      }, 1200);
    } else {
      errorMsg.textContent = '💔 Wrong password, try again jaan!';
      errorMsg.classList.add('visible');
      pwInput.value = '';
      setTimeout(function () {
        errorMsg.classList.remove('visible');
      }, 3000);
    }
  }

  unlockBtn.addEventListener('click', tryUnlock);
  pwInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') tryUnlock();
  });

})();
