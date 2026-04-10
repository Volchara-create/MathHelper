const API = '';

// Grade-specific formula data for dashboard
const GRADE_FORMULAS = {
  4: [
    { topic: 'Арифметика', title: 'Периметр прямокутника', expr: 'P = 2·(a + b)' },
    { topic: 'Арифметика', title: 'Площа прямокутника', expr: 'S = a · b' },
    { topic: 'Арифметика', title: 'Площа квадрата', expr: 'S = a²' },
    { topic: 'Арифметика', title: 'Периметр квадрата', expr: 'P = 4 · a' },
  ],
  5: [
    { topic: 'Дроби', title: 'Додавання дробів', expr: 'a/b + c/d = (ad + bc)/(bd)' },
    { topic: 'Дроби', title: 'Множення дробів', expr: '(a/b)·(c/d) = ac/bd' },
    { topic: 'Відсотки', title: 'Відсоток від числа', expr: 'X% від N = N·X/100' },
    { topic: 'Площі', title: 'Площа трикутника', expr: 'S = (a·h) / 2' },
  ],
  6: [
    { topic: 'Відсотки', title: 'Знайти відсоток', expr: 'X% = (частина/ціле)·100' },
    { topic: "Від'ємні числа", title: 'Модуль числа', expr: '|a| = a, якщо a ≥ 0' },
    { topic: 'Координати', title: 'Точка на площині', expr: 'A(x; y)' },
    { topic: 'Рівняння', title: 'Просте рівняння', expr: 'x + a = b → x = b − a' },
  ],
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
      // New Google user — ask for grade
      showGoogleGradeModal(credential, data.name);
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
      ${[4,5,6,7,8,9,10,11].map(g =>
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
  if (!window.google) return;
  const clientId = document.querySelector('meta[name="google-client-id"]')?.content;
  if (!clientId || clientId === 'YOUR_GOOGLE_CLIENT_ID') return;

  google.accounts.id.initialize({
    client_id: clientId,
    ux_mode: 'redirect',
    login_uri: `${window.location.origin}/auth/google/callback`,
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

// Decode JWT payload safely (base64url → base64)
function parseJwt(token) {
  try {
    const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
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
  const gradeBtn = document.querySelector('.grade-btn.selected');
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
  dashLoad(user);
}

// ===== DASHBOARD =====

function dashLoad(user) {
  const grade = user.grade;
  document.getElementById('dash-title').textContent = `Привіт, ${user.name}! 👋`;
  document.getElementById('dash-grade-badge').textContent = `${grade} клас`;

  // Fill grade-specific formulas
  const formulas = GRADE_FORMULAS[grade] || GRADE_FORMULAS[11];
  const grid = document.getElementById('dash-formulas-grid');
  grid.innerHTML = formulas.map(f => `
    <div class="dash-formula-card">
      <div class="dash-formula-topic">${f.topic}</div>
      <div class="dash-formula-title">${f.title}</div>
      <div class="dash-formula-expr">${f.expr}</div>
    </div>
  `).join('');

  // Show NMT section for grades 10-11
  const nmtSection = document.getElementById('dash-nmt');
  if (grade >= 10) {
    nmtSection.style.display = '';
    document.getElementById('dash-nmt-topics').innerHTML = NMT_TOPICS.map(t =>
      `<span class="dash-nmt-topic">${t}</span>`
    ).join('');
  } else {
    nmtSection.style.display = 'none';
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
    allNotes = await res.json();
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
