const API = window.location.hostname === 'volchara-create.github.io'
  ? 'https://rostyslavv.vibe.brobots.org.ua'
  : '';

// Grade-specific formula data for dashboard (grades 7-11 only)
const GRADE_FORMULAS = {
  7: [
    { topic: 'Алгебра', title: 'Лінійна функція', expr: 'y = kx + b' },
    { topic: 'Алгебра', title: 'Степінь числа', expr: 'aⁿ · aᵐ = aⁿ⁺ᵐ' },
    { topic: 'Геометрія', title: 'Сума кутів трикутника', expr: 'α + β + γ = 180°' },
    { topic: 'Алгебра', title: 'Квадрат суми', expr: '(a+b)² = a² + 2ab + b²' },
  ],
  8: [
    { topic: 'Алгебра', title: 'Квадратне рівняння', expr: 'ax² + bx + c = 0' },
    { topic: 'Алгебра', title: 'Дискримінант', expr: 'D = b² − 4ac' },
    { topic: 'Алгебра', title: 'Корені рівняння', expr: 'x = (−b ± √D) / 2a' },
    { topic: 'Геометрія', title: 'Теорема Піфагора', expr: 'a² + b² = c²' },
  ],
  9: [
    { topic: 'Тригонометрія', title: 'Основна тотожність', expr: 'sin²α + cos²α = 1' },
    { topic: 'Тригонометрія', title: 'Подвійний кут', expr: 'sin 2α = 2·sinα·cosα' },
    { topic: 'Геометрія', title: 'Теорема синусів', expr: 'a/sin A = b/sin B = 2R' },
    { topic: 'Геометрія', title: 'Теорема косинусів', expr: 'c² = a²+b² − 2ab·cosC' },
  ],
  10: [
    { topic: 'Аналіз', title: 'Похідна степені', expr: "(xⁿ)' = n·xⁿ⁻¹" },
    { topic: 'Аналіз', title: 'Похідна добутку', expr: "(uv)' = u'v + uv'" },
    { topic: 'Логарифми', title: 'Логарифм степеня', expr: 'logₐ(bⁿ) = n·logₐ(b)' },
    { topic: 'Геометрія', title: "Об'єм кулі", expr: 'V = (4/3)·π·r³' },
  ],
  11: [
    { topic: 'Аналіз', title: 'Інтеграл степені', expr: '∫xⁿdx = xⁿ⁺¹/(n+1) + C' },
    { topic: 'Аналіз', title: 'Інтеграл sin', expr: '∫sin x dx = −cos x + C' },
    { topic: 'НМТ', title: 'Дискримінант', expr: 'D = b² − 4ac' },
    { topic: 'НМТ', title: 'Сума прогресії', expr: 'Sₙ = n(a₁ + aₙ)/2' },
    { topic: 'НМТ', title: 'Логарифмічне рівняння', expr: 'logₐ(x) = b → x = aᵇ' },
    { topic: 'НМТ', title: 'Показниковий вираз', expr: 'aˣ = aʸ → x = y' },
  ]
};

const NMT_TOPICS = ['Квадратні рівняння', 'Тригонометрія', 'Логарифми', 'Прогресії', 'Похідна', 'Інтеграл', 'Геометрія', 'Стереометрія'];

// Current note being edited
let currentNoteId = null;
let allNotes = [];

// ===== GOOGLE OAUTH =====

// Called by Google GSI library when user signs in
function handleGoogleCredential(response) {
  const credential = response.credential;
  // Check if we need grade for new user
  _googleSignIn(credential, null);
}

async function _googleSignIn(credential, grade) {
  const errEl = document.getElementById('login-error') || document.getElementById('reg-error');
  try {
    const res = await fetch(`${API}/auth/google`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ credential, grade })
    });
    const data = await res.json();

    if (data.needsGrade) {
      // New Google user — ask for grade (pass tempToken, not raw credential)
      showGoogleGradeModal(data.tempToken, data.name);
      return;
    }

    if (!res.ok) {
      if (errEl) errEl.textContent = data.error || 'Помилка Google входу';
      return;
    }

    localStorage.setItem('mh_token', data.token);
    localStorage.setItem('mh_user', JSON.stringify(data.user));
    authShowUser(data.user);
    authClose();
    closeGoogleGradeModal();
    show('dashboard');
  } catch {
    if (errEl) errEl.textContent = 'Помилка підключення до сервера';
  }
}

function showGoogleGradeModal(credential, name) {
  // Build a simple grade picker inside auth modal
  const modal = document.getElementById('auth-modal');
  modal.classList.add('active');

  const loginForm = document.getElementById('auth-login-form');
  const regForm = document.getElementById('auth-register-form');
  loginForm.style.display = 'none';
  regForm.style.display = 'none';

  // Remove old grade picker if exists
  let picker = document.getElementById('google-grade-picker');
  if (!picker) {
    picker = document.createElement('div');
    picker.id = 'google-grade-picker';
    picker.style.cssText = 'padding:24px 0;text-align:center;';
    modal.querySelector('.auth-modal-content').appendChild(picker);
  }

  picker.innerHTML = `
    <h3 style="margin-bottom:8px;">Привіт, ${name}!</h3>
    <p style="color:#666;margin-bottom:20px;">Вибери свій клас щоб продовжити</p>
    <div class="grade-picker-row" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:20px;">
      ${[7,8,9,10,11].map(g =>
        `<button class="grade-btn-g" data-grade="${g}" onclick="selectGoogleGrade(this)">${g}</button>`
      ).join('')}
    </div>
    <button class="btn-primary" onclick="confirmGoogleGrade('${credential}')">Продовжити</button>
    <p id="google-grade-error" style="color:#e53935;margin-top:8px;font-size:13px;"></p>
  `;
  picker.style.display = '';
}

function selectGoogleGrade(btn) {
  document.querySelectorAll('.grade-btn-g').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function closeGoogleGradeModal() {
  const picker = document.getElementById('google-grade-picker');
  if (picker) picker.style.display = 'none';
  document.getElementById('auth-login-form').style.display = '';
  document.getElementById('auth-register-form').style.display = 'none';
}

async function confirmGoogleGrade(tempToken) {
  const picker = document.getElementById('google-grade-picker');
  const selected = picker.querySelector('.grade-btn-g.selected');
  if (!selected) {
    document.getElementById('google-grade-error').textContent = 'Вибери клас!';
    return;
  }
  const grade = parseInt(selected.dataset.grade);
  try {
    const res = await fetch(`${API}/auth/google/grade`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tempToken, grade })
    });
    const data = await res.json();
    if (!res.ok) {
      document.getElementById('google-grade-error').textContent = data.error;
      return;
    }
    localStorage.setItem('mh_token', data.token);
    localStorage.setItem('mh_user', JSON.stringify(data.user));
    authShowUser(data.user);
    authClose();
    closeGoogleGradeModal();
    show('dashboard');
  } catch {
    document.getElementById('google-grade-error').textContent = 'Помилка сервера';
  }
}

function initGoogleAuth() {
  const clientId = document.querySelector('meta[name="google-client-id"]')?.content;
  if (!clientId || clientId === 'YOUR_GOOGLE_CLIENT_ID') return;

  // Fallback button renderer if GSI not loaded
  function renderFallback(el, label) {
    if (!el || el.innerHTML.trim()) return;
    el.innerHTML = `<button onclick="handleGoogleFallback()" style="display:flex;align-items:center;gap:10px;width:100%;padding:10px 16px;border:1px solid #ddd;border-radius:8px;background:#fff;cursor:pointer;font-size:14px;font-weight:500;color:#333;">
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18">${label}</button>`;
  }

  if (!window.google) {
    renderFallback(document.getElementById('google-login-btn'), 'Увійти через Google');
    renderFallback(document.getElementById('google-reg-btn'), 'Зареєструватись через Google');
    return;
  }

  google.accounts.id.initialize({
    client_id: clientId,
    callback: handleGoogleCredential,
  });

  const loginBtn = document.getElementById('google-login-btn');
  if (loginBtn) {
    google.accounts.id.renderButton(loginBtn, {
      theme: 'outline', size: 'large', width: '100%', text: 'signin_with'
    });
  }

  const regBtn = document.getElementById('google-reg-btn');
  if (regBtn) {
    google.accounts.id.renderButton(regBtn, {
      theme: 'outline', size: 'large', width: '100%', text: 'signup_with'
    });
  }
}

function handleGoogleFallback() {
  // Manual popup trigger when GSI button didn't render
  const clientId = document.querySelector('meta[name="google-client-id"]')?.content;
  if (window.google && clientId) {
    google.accounts.id.prompt();
  } else {
    alert('Google авторизація тимчасово недоступна. Використай email/пароль або спробуй оновити сторінку.');
  }
}

// Decode JWT payload safely (base64url + UTF-8 підтримка)
function parseJwt(token) {
  try {
    const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    const json = decodeURIComponent(
      atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
    );
    return JSON.parse(json);
  } catch {
    return null;
  }
}

// Handle redirect back from Google
function handleGoogleRedirect() {
  const params = new URLSearchParams(window.location.search);

  // Successful login
  const token = params.get('google_token');
  if (token) {
    window.history.replaceState({}, '', '/');
    const payload = parseJwt(token);
    if (!payload) { authOpen('login'); return; }
    const user = { id: payload.id, name: payload.name, grade: payload.grade };
    localStorage.setItem('mh_token', token);
    localStorage.setItem('mh_user', JSON.stringify(user));
    authShowUser(user);
    show('dashboard');
    return;
  }

  // New Google user — needs grade
  const gradeToken = params.get('google_grade');
  if (gradeToken) {
    window.history.replaceState({}, '', '/');
    const payload = parseJwt(gradeToken);
    if (!payload) { authOpen('register'); return; }
    showGoogleGradeModal(gradeToken, payload.name);
    return;
  }

  // Error
  const error = params.get('google_error');
  if (error) {
    window.history.replaceState({}, '', '/');
    authOpen('login');
    document.getElementById('login-error').textContent = 'Помилка входу через Google, спробуй ще раз';
  }
}

// ===== INIT =====

window.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('mh_token');
  if (token) {
    const user = JSON.parse(localStorage.getItem('mh_user') || '{}');
    authShowUser(user);
    if (typeof show === 'function') show('dashboard');
    // Refresh user data from server to fix stale grade/name
    fetch(`${API}/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.ok ? r.json() : null)
      .then(fresh => {
        if (!fresh) return;
        localStorage.setItem('mh_user', JSON.stringify(fresh));
        document.getElementById('user-greeting').textContent = `${fresh.name} · ${fresh.grade} кл.`;
      })
      .catch(() => {});
  }

  // Grade picker click handler
  document.querySelectorAll('.grade-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // Handle redirect back from Google
  handleGoogleRedirect();

  // Init Google after GSI loads
  if (window.google) {
    initGoogleAuth();
  } else {
    window.addEventListener('load', initGoogleAuth);
  }

  // Wrap show() to handle dashboard/notes loading
  const _origShow = window.show;
  window.show = function(sec) {
    _origShow(sec);
    if (sec === 'notes') notesInit();
    if (sec === 'dashboard') {
      const user = JSON.parse(localStorage.getItem('mh_user') || 'null');
      if (user) dashLoad(user);
    }
  };
});

// ===== AUTH =====

function authOpen(mode) {
  document.getElementById('auth-modal').classList.add('active');
  authSwitch(mode);
}

function authClose() {
  document.getElementById('auth-modal').classList.remove('active');
}

function authSwitch(mode) {
  document.getElementById('auth-login-form').style.display = mode === 'login' ? '' : 'none';
  document.getElementById('auth-register-form').style.display = mode === 'register' ? '' : 'none';
  document.getElementById('login-error').textContent = '';
  document.getElementById('reg-error').textContent = '';
}

async function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');

  if (!email || !password) { errEl.textContent = 'Заповни всі поля'; return; }

  try {
    const res = await fetch(`${API}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) { errEl.textContent = data.error; return; }

    localStorage.setItem('mh_token', data.token);
    localStorage.setItem('mh_user', JSON.stringify(data.user));
    authShowUser(data.user);
    authClose();
    show('dashboard');
  } catch {
    errEl.textContent = 'Помилка підключення до сервера';
  }
}

async function doRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const gradeBtn = document.querySelector('#auth-modal .grade-btn.selected');
  const errEl = document.getElementById('reg-error');

  if (!name || !email || !password) { errEl.textContent = 'Заповни всі поля'; return; }
  if (!gradeBtn) { errEl.textContent = 'Вибери свій клас'; return; }
  if (password.length < 6) { errEl.textContent = 'Пароль мінімум 6 символів'; return; }

  const grade = parseInt(gradeBtn.dataset.grade);

  try {
    const res = await fetch(`${API}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, grade })
    });
    const data = await res.json();
    if (!res.ok) { errEl.textContent = data.error; return; }

    localStorage.setItem('mh_token', data.token);
    localStorage.setItem('mh_user', JSON.stringify(data.user));
    authShowUser(data.user);
    authClose();
    show('dashboard');
  } catch {
    errEl.textContent = 'Помилка підключення до сервера';
  }
}

function authLogout() {
  localStorage.removeItem('mh_token');
  localStorage.removeItem('mh_user');
  document.getElementById('auth-nav').style.display = '';
  document.getElementById('user-nav').style.display = 'none';
  show('home');
}

function openChangeGrade() {
  const user = JSON.parse(localStorage.getItem('mh_user') || '{}');
  const current = user.grade;
  const grade = prompt(`Твій поточний клас: ${current}\nВведи новий клас (7-11):`);
  if (!grade) return;
  const g = parseInt(grade);
  if (isNaN(g) || g < 7 || g > 11) { alert('Клас має бути від 7 до 11'); return; }
  const token = localStorage.getItem('mh_token');
  fetch(`${API}/me/grade`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ grade: g })
  }).then(r => r.json()).then(data => {
    if (data.error) { alert(data.error); return; }
    localStorage.setItem('mh_token', data.token);
    localStorage.setItem('mh_user', JSON.stringify(data.user));
    authShowUser(data.user);
    alert(`Клас змінено на ${g}! Онови сторінку щоб побачити нові формули.`);
  });
}

async function deleteAccount() {
  if (!confirm('Видалити акаунт назавжди? Всі конспекти теж видаляться!')) return;
  const token = localStorage.getItem('mh_token');
  try {
    await fetch(`${API}/me`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
    authLogout();
  } catch {
    alert('Помилка видалення акаунту');
  }
}

function startTrial() {
  const token = localStorage.getItem('mh_token');
  if (!token) { authOpen('register'); return; }
  alert('Незабаром тут буде оплата! Тримай 7 днів Pro безкоштовно 🎉');
}

function authShowUser(user) {
  document.getElementById('auth-nav').style.display = 'none';
  document.getElementById('user-nav').style.display = '';
  document.getElementById('user-greeting').textContent = `${user.name} · ${user.grade} кл.`;
  document.getElementById('user-badge').textContent = user.isPro ? '⭐ Pro' : '';
  // Hide "Головна" from nav — logged-in users have dashboard instead
  const homeBtn = document.querySelector('nav button[onclick="show(\'home\')"]');
  if (homeBtn) homeBtn.style.display = 'none';
  if (typeof updateNavForGrade === 'function') updateNavForGrade(user.grade);
  // Show quick action menu for logged-in users
  const qm = document.getElementById('quick-menu');
  if (qm) qm.style.display = 'flex';
  checkDailyReward(user);
}

function quickMenuActive(id) { /* visual feedback if needed */ }

// ===== DAILY REWARD + STREAK =====
function checkDailyReward(user) {
  const today = new Date().toISOString().slice(0, 10);
  const lastVisit = localStorage.getItem('mh_last_visit');
  let streak = parseInt(localStorage.getItem('mh_streak') || '0');

  if (lastVisit === today) {
    // Already got reward today — just show streak badge
    showStreakBadge(streak);
    return;
  }

  // Calculate streak
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (lastVisit === yesterday) {
    streak += 1;
  } else {
    streak = 1; // Reset streak if gap
  }

  localStorage.setItem('mh_last_visit', today);
  localStorage.setItem('mh_streak', streak);

  // Give star reward
  let stars = parseInt(localStorage.getItem('mh_stars') || '0');
  const bonusStars = streak >= 7 ? 3 : streak >= 3 ? 2 : 1;
  stars += bonusStars;
  localStorage.setItem('mh_stars', stars);

  showStreakBadge(streak);
  showDailyRewardPopup(streak, bonusStars);
}

function showStreakBadge(streak) {
  const badge = document.getElementById('dash-streak-badge');
  const num = document.getElementById('dash-streak-num');
  if (badge && num && streak >= 2) {
    num.textContent = streak;
    badge.style.display = '';
  }
}

function showDailyRewardPopup(streak, bonusStars) {
  const popup = document.getElementById('daily-reward-popup');
  if (!popup) return;
  const emoji = document.getElementById('daily-reward-emoji');
  const title = document.getElementById('daily-reward-title');
  const msg = document.getElementById('daily-reward-msg');
  const starsEl = document.getElementById('daily-reward-stars');
  const streakWrap = document.getElementById('daily-streak-wrap');
  const streakText = document.getElementById('daily-streak-text');

  // Custom message based on streak
  if (streak >= 7) {
    emoji.textContent = '🏆';
    title.textContent = 'Тиждень підряд!';
    msg.textContent = `Неймовірно! ${streak} днів поспіль — ти справжній чемпіон!`;
  } else if (streak >= 3) {
    emoji.textContent = '🔥';
    title.textContent = `${streak} дні підряд!`;
    msg.textContent = 'Чудова серія! Так тримати!';
  } else {
    emoji.textContent = '🎁';
    title.textContent = 'Щоденна нагорода!';
    msg.textContent = 'Зайшов — молодець! Тримай зірочку!';
  }

  starsEl.textContent = '⭐'.repeat(bonusStars) + ` +${bonusStars}`;

  if (streak >= 2) {
    streakWrap.style.display = '';
    streakText.textContent = ` ${streak} ${streak === 1 ? 'день' : streak < 5 ? 'дні' : 'днів'} підряд!`;
  } else {
    streakWrap.style.display = 'none';
  }

  popup.style.display = 'flex';
}

function closeDailyReward() {
  const popup = document.getElementById('daily-reward-popup');
  if (popup) popup.style.display = 'none';
}

// ===== DASHBOARD =====

function dashLoad(user) {
  const grade = user.grade;
  document.getElementById('dash-title').textContent = `Привіт, ${user.name}! 👋`;
  document.getElementById('dash-grade-badge').textContent = `${grade} клас`;

  // NMT topics
  const nmtSection = document.getElementById('dash-nmt');
  if (nmtSection) {
    nmtSection.style.display = '';
    document.getElementById('dash-nmt-topics').innerHTML = NMT_TOPICS.map(t =>
      `<span class="dash-nmt-topic">${t}</span>`
    ).join('');
  }

  // Load recent notes
  dashLoadRecentNotes();
}

async function dashLoadRecentNotes() {
  const token = localStorage.getItem('mh_token');
  if (!token) return;
  try {
    const res = await fetch(`${API}/notes`, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) return;
    allNotes = await res.json();
    const container = document.getElementById('dash-recent-notes');
    if (!allNotes.length) {
      container.innerHTML = `<p class="dash-empty">Немає конспектів — <a href="#" onclick="show('notes')">створи перший!</a></p>`;
      return;
    }
    container.innerHTML = allNotes.slice(0, 3).map(n => `
      <div class="dash-note-card" onclick="openNoteFromDash(${n.id})">
        <div class="dash-note-title">${n.title}</div>
        <div class="dash-note-preview">${(n.content || 'Порожній конспект').substring(0, 60)}</div>
      </div>
    `).join('');
  } catch { /* silent */ }
}

function openNoteFromDash(id) {
  show('notes');
  setTimeout(() => noteOpen(id), 200);
}

// ===== NOTES =====

async function notesInit() {
  const token = localStorage.getItem('mh_token');
  if (!token) {
    document.getElementById('notes-list').innerHTML =
      `<p class="notes-empty">Увійди щоб бачити конспекти</p>`;
    return;
  }
  try {
    const res = await fetch(`${API}/notes`, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) throw new Error('server error');
    allNotes = await res.json();
    if (!Array.isArray(allNotes)) allNotes = [];
    notesRender(null);
  } catch {
    document.getElementById('notes-list').innerHTML = `<p class="notes-empty">Помилка завантаження</p>`;
  }
}

function notesRender(openId) {
  const list = document.getElementById('notes-list');
  if (!allNotes.length) {
    list.innerHTML = `<p class="notes-empty">Тут будуть твої конспекти</p>`;
    document.getElementById('notes-editor').style.display = 'none';
    return;
  }
  list.innerHTML = allNotes.map(n => `
    <div class="notes-list-item ${n.id === currentNoteId ? 'active' : ''}" onclick="noteOpen(${n.id})">
      <div class="notes-item-title">${n.title}</div>
      <div class="notes-item-date">${new Date(n.updatedAt).toLocaleDateString('uk-UA')}</div>
    </div>
  `).join('');

  if (openId) noteOpen(openId);
}

function noteOpen(id) {
  const note = allNotes.find(n => n.id === id);
  if (!note) return;
  currentNoteId = id;
  document.getElementById('note-title-input').value = note.title;
  document.getElementById('note-content-input').value = note.content;
  document.getElementById('notes-editor').style.display = 'flex';
  // Highlight active in list
  document.querySelectorAll('.notes-list-item').forEach((el, i) => {
    el.classList.toggle('active', allNotes[i]?.id === id);
  });
}

function noteNew() {
  const token = localStorage.getItem('mh_token');
  if (!token) { authOpen('login'); return; }

  // Free limit: max 5 notes
  const user = JSON.parse(localStorage.getItem('mh_user') || '{}');
  if (!user.isPro && allNotes.length >= 5) {
    if (confirm('У безкоштовній версії максимум 5 конспектів.\n\nПерейди на Pro щоб зберігати необмежено!\n\nПереглянути плани?')) {
      show('pricing');
    }
    return;
  }

  currentNoteId = null;
  document.getElementById('note-title-input').value = '';
  document.getElementById('note-content-input').value = '';
  document.getElementById('notes-editor').style.display = 'flex';
  document.querySelectorAll('.notes-list-item').forEach(el => el.classList.remove('active'));
  document.getElementById('note-title-input').focus();
}

function noteClose() {
  currentNoteId = null;
  document.getElementById('notes-editor').style.display = 'none';
}

async function noteSave() {
  const token = localStorage.getItem('mh_token');
  const title = document.getElementById('note-title-input').value.trim();
  const content = document.getElementById('note-content-input').value;
  if (!title) { alert('Введи назву конспекту'); return; }

  try {
    let res, note;
    if (currentNoteId) {
      res = await fetch(`${API}/notes/${currentNoteId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title, content })
      });
    } else {
      res = await fetch(`${API}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title, content })
      });
    }
    note = await res.json();
    if (!res.ok) { alert(note.error); return; }

    if (currentNoteId) {
      allNotes = allNotes.map(n => n.id === currentNoteId ? note : n);
    } else {
      allNotes.unshift(note);
      currentNoteId = note.id;
    }
    notesRender(note.id);
  } catch {
    alert('Помилка збереження');
  }
}

async function noteDelete() {
  if (!currentNoteId) return;
  if (!confirm('Видалити цей конспект?')) return;
  const token = localStorage.getItem('mh_token');
  try {
    await fetch(`${API}/notes/${currentNoteId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    allNotes = allNotes.filter(n => n.id !== currentNoteId);
    currentNoteId = null;
    document.getElementById('notes-editor').style.display = 'none';
    notesRender(null);
  } catch {
    alert('Помилка видалення');
  }
}

// ===== FLOATING NOTES DRAWER =====
let drawerNoteId = null;

async function notesDrawerOpen() {
  const overlay = document.getElementById('notes-drawer-overlay');
  const drawer  = document.getElementById('notes-drawer');
  if (!overlay || !drawer) return; // not on this page
  const token = localStorage.getItem('mh_token');
  drawer.classList.add('open');
  document.body.classList.add('drawer-active');
  document.getElementById('drawer-editor').style.display = 'none';
  drawerNoteId = null;

  const listEl = document.getElementById('drawer-notes-list');
  if (!token) {
    listEl.innerHTML = '<p class="drawer-empty">Увійди щоб бачити конспекти</p>';
    return;
  }
  listEl.innerHTML = '<p class="drawer-empty">Завантаження...</p>';
  try {
    const res = await fetch(`${API}/notes`, { headers: { Authorization: `Bearer ${token}` } });
    allNotes = await res.json();
    drawerRenderList();
  } catch {
    listEl.innerHTML = '<p class="drawer-empty">Помилка завантаження</p>';
  }
}

function notesDrawerClose() {
  document.getElementById('notes-drawer').classList.remove('open');
  document.body.classList.remove('drawer-active');
}

function drawerSetStyle(style) {
  const ta = document.getElementById('drawer-content-input');
  ta.classList.remove('lined', 'grid', 'plain');
  if (style !== 'plain') ta.classList.add(style);
  ['lined','grid','plain'].forEach(s => {
    const btn = document.getElementById('drawer-nb-' + s);
    if (btn) btn.classList.toggle('active', s === style);
  });
  localStorage.setItem('mh_drawer_style', style);
}

function drawerRenderList() {
  const listEl = document.getElementById('drawer-notes-list');
  document.getElementById('drawer-editor').style.display = 'none';
  drawerNoteId = null;
  if (!allNotes.length) {
    listEl.innerHTML = '<p class="drawer-empty">Немає конспектів — створи перший!</p>';
    return;
  }
  listEl.innerHTML = allNotes.map(n => `
    <div class="drawer-note-item" onclick="drawerOpenNote(${n.id})">
      <div class="drawer-note-item-title">${n.title}</div>
      <div class="drawer-note-item-date">${new Date(n.updatedAt).toLocaleDateString('uk-UA')}</div>
    </div>
  `).join('');
  listEl.style.display = '';
}

function drawerOpenNote(id) {
  const note = allNotes.find(n => n.id === id);
  if (!note) return;
  drawerNoteId = id;
  document.getElementById('drawer-title-input').value = note.title;
  document.getElementById('drawer-content-input').value = note.content;
  document.getElementById('drawer-notes-list').style.display = 'none';
  document.getElementById('drawer-editor').style.display = 'flex';
  document.getElementById('drawer-editor').style.flexDirection = 'column';
  // Restore saved paper style
  const style = localStorage.getItem('mh_drawer_style') || 'lined';
  drawerSetStyle(style);
}

function noteDrawerNew() {
  const token = localStorage.getItem('mh_token');
  if (!token) { notesDrawerClose(); authOpen('login'); return; }
  const user = JSON.parse(localStorage.getItem('mh_user') || '{}');
  if (!user.isPro && allNotes.length >= 5) {
    if (confirm('Максимум 5 конспектів у безкоштовній версії.\nПереглянути Pro?')) { notesDrawerClose(); show('pricing'); }
    return;
  }
  drawerNoteId = null;
  document.getElementById('drawer-title-input').value = '';
  document.getElementById('drawer-content-input').value = '';
  document.getElementById('drawer-notes-list').style.display = 'none';
  document.getElementById('drawer-editor').style.display = 'flex';
  document.getElementById('drawer-editor').style.flexDirection = 'column';
  document.getElementById('drawer-title-input').focus();
}

function noteDrawerBack() {
  drawerRenderList();
}

async function noteDrawerSave() {
  const token = localStorage.getItem('mh_token');
  const title = document.getElementById('drawer-title-input').value.trim();
  const content = document.getElementById('drawer-content-input').value;
  if (!title) { alert('Введи назву'); return; }
  try {
    let res, note;
    if (drawerNoteId) {
      res = await fetch(`${API}/notes/${drawerNoteId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title, content })
      });
    } else {
      res = await fetch(`${API}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title, content })
      });
    }
    note = await res.json();
    if (!res.ok) { alert(note.error); return; }
    if (drawerNoteId) {
      allNotes = allNotes.map(n => n.id === drawerNoteId ? note : n);
    } else {
      allNotes.unshift(note);
      drawerNoteId = note.id;
    }
    // Flash saved feedback
    const btn = document.querySelector('.notes-drawer-actions .note-save-btn');
    if (btn) { btn.textContent = '✅ Збережено'; setTimeout(() => btn.textContent = '💾 Зберегти', 1500); }
  } catch { alert('Помилка збереження'); }
}

async function noteDrawerDelete() {
  if (!drawerNoteId) return;
  if (!confirm('Видалити конспект?')) return;
  const token = localStorage.getItem('mh_token');
  try {
    await fetch(`${API}/notes/${drawerNoteId}`, {
      method: 'DELETE', headers: { Authorization: `Bearer ${token}` }
    });
    allNotes = allNotes.filter(n => n.id !== drawerNoteId);
    drawerRenderList();
  } catch { alert('Помилка видалення'); }
}
