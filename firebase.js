// Firebase integration — active only on GitHub Pages
const USE_FIREBASE = window.location.hostname === 'volchara-create.github.io';

const FB_CONFIG = {
  apiKey: "AIzaSyAyRP7a0Si0YtOYROkp7oADbmqD-ldYEcw",
  authDomain: "proba-358ac.firebaseapp.com",
  projectId: "proba-358ac",
  storageBucket: "proba-358ac.firebasestorage.app",
  messagingSenderId: "1063423378287",
  appId: "1:1063423378287:web:4bcfc7d2fb867b90881e9a",
  databaseURL: "https://proba-358ac-default-rtdb.firebaseio.com"
};

let _fbAuth, _fbDb;
let _fbPendingName = '', _fbPendingEmail = '', _fbPendingUid = '';

if (USE_FIREBASE) {
  firebase.initializeApp(FB_CONFIG);
  _fbAuth = firebase.auth();
  _fbDb = firebase.database();
}

// ===== USER HELPERS =====

async function fbGetUserDoc(uid) {
  const snap = await _fbDb.ref('users/' + uid).once('value');
  return snap.exists() ? { id: uid, ...snap.val() } : null;
}

async function fbSaveUser(uid, data) {
  await _fbDb.ref('users/' + uid).update(data);
}

// ===== AUTH =====

async function fbLogin(email, password) {
  const cred = await _fbAuth.signInWithEmailAndPassword(email, password);
  const user = await fbGetUserDoc(cred.user.uid);
  if (!user) throw new Error('Профіль не знайдено');
  return user;
}

async function fbRegister(name, email, password, grade) {
  const cred = await _fbAuth.createUserWithEmailAndPassword(email, password);
  const uid = cred.user.uid;
  const userData = { name, email, grade: parseInt(grade), isPro: false };
  await fbSaveUser(uid, userData);
  return { id: uid, ...userData };
}

async function fbGoogleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const result = await _fbAuth.signInWithPopup(provider);
  const firebaseUser = result.user;
  const uid = firebaseUser.uid;
  const snap = await _fbDb.ref('users/' + uid).once('value');
  if (snap.exists()) {
    return { status: 'ok', user: { id: uid, ...snap.val() } };
  }
  return {
    status: 'needsGrade',
    uid,
    name: firebaseUser.displayName || 'Учень',
    email: firebaseUser.email || ''
  };
}

async function fbCompleteGoogleSignIn(uid, name, email, grade) {
  const userData = { name, email, grade: parseInt(grade), isPro: false };
  await fbSaveUser(uid, userData);
  return { id: uid, ...userData };
}

async function fbLogout() {
  if (_fbAuth) await _fbAuth.signOut();
}

async function fbUpdateGrade(grade) {
  const user = _fbAuth.currentUser;
  if (!user) return null;
  await _fbDb.ref('users/' + user.uid + '/grade').set(parseInt(grade));
  return await fbGetUserDoc(user.uid);
}

async function fbDeleteAccount() {
  const user = _fbAuth.currentUser;
  if (!user) return;
  await _fbDb.ref('users/' + user.uid).remove();
  await user.delete();
}

// ===== NOTES =====

async function fbGetNotes() {
  const user = _fbAuth.currentUser;
  if (!user) return [];
  const snap = await _fbDb.ref('users/' + user.uid + '/notes').once('value');
  if (!snap.exists()) return [];
  const notes = [];
  snap.forEach(child => notes.push({ id: child.key, ...child.val() }));
  return notes.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
}

async function fbCreateNote(title, content) {
  const user = _fbAuth.currentUser;
  if (!user) throw new Error('not authenticated');
  const id = String(Date.now());
  const note = { id, title, content, updatedAt: Date.now(), createdAt: Date.now() };
  await _fbDb.ref('users/' + user.uid + '/notes/' + id).set(note);
  return { ...note, updatedAt: new Date().toISOString() };
}

async function fbUpdateNote(id, title, content) {
  const user = _fbAuth.currentUser;
  if (!user) throw new Error('not authenticated');
  const updatedAt = Date.now();
  await _fbDb.ref('users/' + user.uid + '/notes/' + id).update({ title, content, updatedAt });
  return { id, title, content, updatedAt: new Date().toISOString() };
}

async function fbDeleteNote(id) {
  const user = _fbAuth.currentUser;
  if (!user) throw new Error('not authenticated');
  await _fbDb.ref('users/' + user.uid + '/notes/' + id).remove();
}

// ===== DAILY (localStorage-based for Firebase mode) =====

function fbGetDaily() {
  const today = new Date().toISOString().slice(0, 10);
  const raw = localStorage.getItem('mh_daily_' + today);
  return raw ? JSON.parse(raw) : { quizDone: 0, nmtDone: 0 };
}

function fbTrackDaily(type) {
  const today = new Date().toISOString().slice(0, 10);
  const data = fbGetDaily();
  if (type === 'quiz') data.quizDone = (data.quizDone || 0) + 1;
  if (type === 'nmt') data.nmtDone = (data.nmtDone || 0) + 1;
  localStorage.setItem('mh_daily_' + today, JSON.stringify(data));
  return data;
}

// ===== GOOGLE SIGN-IN HANDLER (Firebase popup) =====

let _googlePopupOpen = false;

async function handleGoogleFirebase() {
  if (_googlePopupOpen) return;
  _googlePopupOpen = true;
  // Cancel any GSI One Tap popup that might conflict
  try { window.google?.accounts?.id?.cancel(); } catch {}
  const errEl = document.getElementById('login-error') || document.getElementById('reg-error');
  try {
    const result = await fbGoogleSignIn();
    if (result.status === 'needsGrade') {
      _fbPendingUid = result.uid;
      _fbPendingName = result.name;
      _fbPendingEmail = result.email;
      showGoogleGradeModal('fb_pending', result.name);
    } else {
      const user = result.user;
      localStorage.setItem('mh_token', 'firebase_' + user.id);
      localStorage.setItem('mh_user', JSON.stringify(user));
      authShowUser(user);
      authClose();
      closeGoogleGradeModal();
      show('dashboard');
    }
  } catch(e) {
    console.error('Firebase Google error:', e.code, e.message);
    if (e.code !== 'auth/cancelled-popup-request') {
      const msg = e.code === 'auth/popup-closed-by-user'
        ? 'Вікно закрито. Спробуй ще раз.'
        : (e.code === 'auth/network-request-failed' ? 'Немає інтернету' : e.message);
      if (errEl) errEl.textContent = msg;
      else showToast('❌ ' + msg);
    }
  } finally {
    _googlePopupOpen = false;
  }
}
