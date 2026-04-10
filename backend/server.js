const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

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
  if (grade < 4 || grade > 11) {
    return res.status(400).json({ error: 'Клас має бути від 4 до 11' });
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, '::', () => console.log(`Server running on port ${PORT}`));
