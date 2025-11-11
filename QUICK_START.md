# Quick Start Guide

## 🚀 Get Running in 5 Minutes

### 1. Install Dependencies

```bash
npm install
npm install --workspaces
```

### 2. Set Up Database

```bash
# Create .env file in backend/
cd backend
cp .env.example .env
# Edit .env and add your DATABASE_URL

# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Seed database
npm run prisma:seed
```

### 3. Start Backend

```bash
cd backend
npm run start:dev
```

Backend will run on `http://localhost:4000`

### 4. Start Mobile App

```bash
cd mobile
npm install
npm start
# Press 'a' for Android or scan QR code
```

### 5. Start Web App (Optional)

```bash
cd web
npm install
npm run dev
```

Web app will run on `http://localhost:3000`

## ✅ What's Working Now

- ✅ User registration and login
- ✅ JWT authentication
- ✅ API client with token management
- ✅ React Query setup
- ✅ Navigation with auth guards
- ✅ Database with seeded skills and quests

## 🧪 Test It Out

1. **Register a new user** in the mobile app
2. **Login** with your credentials
3. **View the home screen** with Rise Score
4. **See daily quests** (from seed data)

## 📝 Next Steps

See [NEXT_STEPS.md](./NEXT_STEPS.md) for what to build next:
- Connect components to real API data
- Implement quest acceptance/completion
- Add XP calculation and leveling
- Build skill tree visualization

## 🐛 Troubleshooting

**Database connection error?**
- Check PostgreSQL is running
- Verify DATABASE_URL in `.env`
- Run `npm run prisma:generate` again

**Mobile app can't connect to backend?**
- For Android emulator: Use `http://10.0.2.2:4000` instead of `localhost`
- For physical device: Use your computer's IP address
- Update `API_BASE_URL` in `mobile/src/api/client.ts`

**TypeScript errors?**
- Run `npm run typecheck` in each workspace
- Make sure `shared` package is built: `cd shared && npm run build`



