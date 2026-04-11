const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Serve frontend static files from parent directory
const path = require('path');
app.use(express.static(path.join(__dirname, '..')));

// Middleware: check JWT token
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Не авторизовано' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Невірний токен' });
  }
}

// POST /register
app.post('/register', async (req, res) => {
  const { name, email, password, grade } = req.body;
  if (!name || !email || !password || !grade) {
    return res.status(400).json({ error: 'Всі поля обовʼязкові' });
  }
  if (grade < 1 || grade > 11) {
    return res.status(400).json({ error: 'Клас має бути від 1 до 11' });
  }
  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashed, grade: parseInt(grade) }
    });
    const token = jwt.sign({ id: user.id, grade: user.grade, name: user.name }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user.id, name: user.name, grade: user.grade } });
  } catch (e) {
    if (e.code === 'P2002') return res.status(400).json({ error: 'Email вже зареєстровано' });
    res.status(500).json({ error: 'Помилка сервера' });
  }
});

// POST /login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: 'Користувача не знайдено' });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ error: 'Невірний пароль' });
    const token = jwt.sign({ id: user.id, grade: user.grade, name: user.name }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user.id, name: user.name, grade: user.grade } });
  } catch {
    res.status(500).json({ error: 'Помилка сервера' });
  }
});

// GET /me — get current user info
app.get('/me', authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    select: { id: true, name: true, email: true, grade: true }
  });
  res.json(user);
});

// GET /notes — get all notes for current user
app.get('/notes', authMiddleware, async (req, res) => {
  const notes = await prisma.note.findMany({
    where: { userId: req.user.id },
    orderBy: { updatedAt: 'desc' }
  });
  res.json(notes);
});

// POST /notes — create new note
app.post('/notes', authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  if (!title) return res.status(400).json({ error: 'Назва обовʼязкова' });
  const note = await prisma.note.create({
    data: { title, content: content || '', userId: req.user.id }
  });
  res.json(note);
});

// PUT /notes/:id — update note
app.put('/notes/:id', authMiddleware, async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  // check ownership
  const note = await prisma.note.findUnique({ where: { id } });
  if (!note || note.userId !== req.user.id) return res.status(403).json({ error: 'Немає доступу' });
  const updated = await prisma.note.update({
    where: { id },
    data: { title, content }
  });
  res.json(updated);
});

// DELETE /notes/:id — delete note
app.delete('/notes/:id', authMiddleware, async (req, res) => {
  const id = parseInt(req.params.id);
  const note = await prisma.note.findUnique({ where: { id } });
  if (!note || note.userId !== req.user.id) return res.status(403).json({ error: 'Немає доступу' });
  await prisma.note.delete({ where: { id } });
  res.json({ ok: true });
});

// POST /auth/google — verify Google ID token (GSI popup mode)
app.post('/auth/google', async (req, res) => {
  const { credential, grade } = req.body;
  if (!credential) return res.status(400).json({ error: 'Немає токена' });
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { sub: googleId, email, name } = payload;

    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      // New user — need grade selection
      const tempToken = jwt.sign({ googleId, email, name, needsGrade: true }, process.env.JWT_SECRET, { expiresIn: '10m' });
      return res.json({ needsGrade: true, name, tempToken });
    }
    const token = jwt.sign({ id: user.id, grade: user.grade, name: user.name }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user.id, name: user.name, grade: user.grade } });
  } catch (e) {
    console.error('Google auth error:', e.message);
    res.status(400).json({ error: 'Помилка Google входу' });
  }
});

const GOOGLE_REDIRECT_URI = 'https://rostyslavv.vibe.brobots.org.ua/auth/google/callback';

// GET /auth/google/start — redirect to Google login page
app.get('/auth/google/start', (req, res) => {
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  url.searchParams.set('client_id', process.env.GOOGLE_CLIENT_ID);
  url.searchParams.set('redirect_uri', GOOGLE_REDIRECT_URI);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('scope', 'openid email profile');
  url.searchParams.set('access_type', 'online');
  res.redirect(url.toString());
});

// GET /auth/google/callback — Google sends code here
app.get('/auth/google/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.redirect('/?google_error=no_code');
  try {
    // Exchange code for tokens
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: GOOGLE_REDIRECT_URI,
        grant_type: 'authorization_code',
      }),
    });
    const tokens = await tokenRes.json();
    if (!tokens.id_token) throw new Error('No id_token');

    // Verify ID token
    const ticket = await googleClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { sub: googleId, email, name } = payload;

    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      const tempToken = jwt.sign({ googleId, email, name, needsGrade: true }, process.env.JWT_SECRET, { expiresIn: '10m' });
      return res.redirect(`/?google_grade=${encodeURIComponent(tempToken)}`);
    }
    const token = jwt.sign({ id: user.id, grade: user.grade, name: user.name }, process.env.JWT_SECRET);
    res.redirect(`/?google_token=${encodeURIComponent(token)}`);
  } catch (e) {
    console.error('Google callback error:', e.message);
    res.redirect('/?google_error=fail');
  }
});

// POST /auth/google/grade — complete registration after grade selection
app.post('/auth/google/grade', async (req, res) => {
  const { tempToken, grade } = req.body;
  if (!grade || grade < 4 || grade > 11) return res.status(400).json({ error: 'Вибери клас' });
  try {
    const payload = jwt.verify(tempToken, process.env.JWT_SECRET);
    if (!payload.needsGrade) return res.status(400).json({ error: 'Невірний токен' });
    const { googleId, email, name } = payload;
    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      user = await prisma.user.create({
        data: { name, email, password: googleId, grade: parseInt(grade) }
      });
    }
    const token = jwt.sign({ id: user.id, grade: user.grade, name: user.name }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user.id, name: user.name, grade: user.grade } });
  } catch {
    res.status(400).json({ error: 'Токен застарів, спробуй ще раз' });
  }
});

// PUT /me/grade — change user grade
app.put('/me/grade', authMiddleware, async (req, res) => {
  const { grade } = req.body;
  if (!grade || grade < 1 || grade > 11) return res.status(400).json({ error: 'Клас від 1 до 11' });
  const user = await prisma.user.update({
    where: { id: req.user.id },
    data: { grade: parseInt(grade) }
  });
  const token = jwt.sign({ id: user.id, grade: user.grade, name: user.name }, process.env.JWT_SECRET);
  res.json({ token, user: { id: user.id, name: user.name, grade: user.grade } });
});

// DELETE /me — delete current user account
app.delete('/me', authMiddleware, async (req, res) => {
  try {
    await prisma.note.deleteMany({ where: { userId: req.user.id } });
    await prisma.user.delete({ where: { id: req.user.id } });
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: 'Помилка видалення' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, '::', () => console.log(`Server running on port ${PORT}`));
