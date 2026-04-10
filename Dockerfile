FROM node:22-alpine
WORKDIR /app

# Install backend dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Copy all files
COPY . .

# Generate Prisma client
RUN cd backend && npx prisma generate

EXPOSE 3001
CMD ["node", "backend/server.js"]
