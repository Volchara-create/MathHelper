FROM node:22-alpine
WORKDIR /app

COPY backend/package*.json ./backend/
RUN cd backend && npm install

COPY . .

RUN cd backend && npx prisma generate

EXPOSE 3001
CMD ["sh", "-c", "cd backend && npx prisma migrate deploy && node server.js"]
