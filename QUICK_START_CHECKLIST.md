# 🚀 Quick Start Checklist

Follow these steps in order to get everything running:

## ✅ Pre-Setup (One Time)

- [ ] Node.js 18+ installed (`node --version`)
- [ ] PostgreSQL installed OR Supabase account created
- [ ] Android Studio / Expo Go app installed (for mobile testing)

## 📋 Setup Steps

### 1. Database Setup (5 minutes)

- [ ] **Create `.env` file** in `backend/` directory:
  ```env
  DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/rise"
  JWT_SECRET="rise-secret-key-12345"
  PORT=4000
  ```

- [ ] **Create database:**
  ```sql
  CREATE DATABASE rise;
  ```

- [ ] **OR use Supabase:**
  - Sign up at supabase.com
  - Create project
  - Copy connection string to `.env`

### 2. Backend Setup (2 minutes)

- [ ] **Navigate to backend:**
  ```bash
  cd backend
  ```

- [ ] **Run migrations:**
  ```bash
  npm run prisma:migrate
  ```
  (Name it: `init`)

- [ ] **Seed database:**
  ```bash
  npm run prisma:seed
  ```

- [ ] **Start backend:**
  ```bash
  npm run start:dev
  ```
  
  ✅ **Verify:** Should see "Rise backend is running at http://localhost:4000"

### 3. Mobile App Setup (3 minutes)

- [ ] **Open NEW terminal** (keep backend running)

- [ ] **Navigate to mobile:**
  ```bash
  cd mobile
  ```

- [ ] **Install dependencies:**
  ```bash
  npm install --legacy-peer-deps
  ```

- [ ] **Start Expo:**
  ```bash
  npm start
  ```

- [ ] **Run on Android:**
  - Press `a` in terminal, OR
  - Scan QR with Expo Go app

## 🧪 Testing Checklist

### Test 1: Registration
- [ ] App opens to Login screen
- [ ] Tap "Sign up"
- [ ] Enter: Name, Email, Password
- [ ] Tap "Sign Up"
- [ ] ✅ Automatically logged in, see Home screen

### Test 2: View Quests
- [ ] Home screen shows "Today's Quests"
- [ ] ✅ See 3 quests listed

### Test 3: Accept Quest
- [ ] Tap "Accept" on a quest
- [ ] ✅ Quest highlights in gold
- [ ] ✅ Button changes to "Complete"

### Test 4: Complete Quest
- [ ] Tap "Complete"
- [ ] ✅ Modal opens
- [ ] Enter reflection (optional)
- [ ] Tap "Complete"
- [ ] ✅ Success message appears
- [ ] ✅ Quest shows "Done"
- [ ] ✅ Rise Score increased
- [ ] ✅ Skill appears in Active Skills

## 🐛 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Backend won't start | Check `.env` file exists, database is running |
| "Cannot connect to database" | Verify DATABASE_URL in `.env` is correct |
| Mobile can't connect | Use `10.0.2.2` for Android emulator (already set) |
| No quests showing | Run `npm run prisma:seed` in backend |
| TypeScript errors | Run `cd shared && npm run build` |

## 📝 Quick Commands

```bash
# Backend
cd backend
npm run start:dev          # Start (keep running)
npm run prisma:migrate     # Setup database
npm run prisma:seed        # Add sample data

# Mobile (new terminal)
cd mobile
npm start                  # Start Expo
# Press 'a' for Android
```

## 🎯 What You Should See

**Backend Terminal:**
```
Rise backend is running at http://localhost:4000
```

**Mobile App:**
- Login/Register screen
- After login: Home screen with:
  - Rise Score card (gold gradient)
  - Today's Quests (3 quests)
  - Active Skills (empty until you complete quests)

## ✅ Success!

If you can:
1. ✅ Register a user
2. ✅ See daily quests
3. ✅ Accept and complete a quest
4. ✅ See XP and Rise Score update

**You're all set!** 🎉

## 📚 Next Steps

- Add more skills to seed script
- Build skill tree visualization
- Add achievement system
- Implement streak tracking
- Add animations and polish

---

**Need help?** Check `SETUP_AND_TESTING.md` for detailed instructions.



