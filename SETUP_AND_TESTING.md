# Complete Setup & Testing Guide

## 🎯 Step-by-Step Setup

### Step 1: Database Setup

#### Option A: Local PostgreSQL

1. **Make sure PostgreSQL is installed and running**
   - Check if it's running: Open Services (Windows) and look for "postgresql"
   - Or start it manually if needed

2. **Create the database**
   ```sql
   -- Open psql or pgAdmin and run:
   CREATE DATABASE rise;
   ```

3. **Create `.env` file in `backend/` directory**
   ```env
   DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/rise"
   JWT_SECRET="rise-secret-key-change-in-production-12345"
   PORT=4000
   NODE_ENV=development
   ```
   ⚠️ **Replace `yourpassword` with your actual PostgreSQL password**

#### Option B: Cloud Database (Easier - Recommended for Testing)

1. **Sign up for Supabase** (free): https://supabase.com
2. **Create a new project**
3. **Go to Settings → Database**
4. **Copy the "Connection string"** (URI format)
5. **Use it in your `.env` file:**
   ```env
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres"
   JWT_SECRET="rise-secret-key-change-in-production-12345"
   PORT=4000
   ```

### Step 2: Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Run database migrations:**
   ```bash
   npm run prisma:migrate
   ```
   When prompted, name the migration: `init`

3. **Seed the database with sample data:**
   ```bash
   npm run prisma:seed
   ```
   This adds sample skills, quests, and achievements.

4. **Start the backend server:**
   ```bash
   npm run start:dev
   ```
   
   ✅ **Success looks like:**
   ```
   Rise backend is running at http://localhost:4000
   ```

   Keep this terminal open - the server needs to keep running.

### Step 3: Mobile App Setup

1. **Open a NEW terminal window** (keep backend running)

2. **Navigate to mobile directory:**
   ```bash
   cd mobile
   ```

3. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

4. **Update API URL for Android** (if using emulator):
   
   Edit `mobile/src/api/client.ts` and change:
   ```typescript
   const API_BASE_URL = __DEV__
     ? 'http://10.0.2.2:4000/api'  // For Android emulator
     : 'https://api.rise.app/api';
   ```
   
   Or if using a physical device, use your computer's IP:
   ```typescript
   const API_BASE_URL = __DEV__
     ? 'http://192.168.1.XXX:4000/api'  // Replace XXX with your IP
     : 'https://api.rise.app/api';
   ```

5. **Start Expo:**
   ```bash
   npm start
   ```

6. **Run on Android:**
   - Press `a` in the terminal, OR
   - Scan QR code with Expo Go app on your phone, OR
   - Open Android Studio emulator first, then press `a`

### Step 4: Testing the App

#### Test 1: User Registration

1. **Open the app** (should show Login screen)
2. **Tap "Don't have an account? Sign up"**
3. **Fill in:**
   - Name: `Test User`
   - Email: `test@example.com`
   - Password: `password123`
4. **Tap "Sign Up"**
5. ✅ **Should automatically log you in and show Home screen**

#### Test 2: View Daily Quests

1. **On Home screen**, you should see "Today's Quests" card
2. ✅ **Should show 3 quests** (from seed data):
   - Analyze a News Article
   - Practice Active Listening
   - 5-Minute Morning Meditation

#### Test 3: Accept a Quest

1. **Tap "Accept"** on any quest
2. ✅ **Quest should change to "accepted" status** (highlighted in gold)
3. ✅ **Button should change to "Complete"**

#### Test 4: Complete a Quest

1. **Tap "Complete"** on an accepted quest
2. **Modal should open** asking for reflection
3. **Type a reflection** (optional but gives bonus XP):
   ```
   This quest helped me practice critical thinking by analyzing biases in news articles.
   ```
4. **Tap "Complete"**
5. ✅ **Should see success alert: "Quest completed! XP earned."**
6. ✅ **Quest should show "Done" badge**
7. ✅ **Rise Score should increase**
8. ✅ **Active Skills card should show the skill you just practiced**

#### Test 5: Check Profile

1. **Navigate to Profile screen** (if you have navigation set up)
2. ✅ **Should show your stats:**
   - Total XP
   - Skills count
   - Achievements

## 🐛 Troubleshooting

### Backend won't start

**Error: "Cannot connect to database"**
- Check `.env` file exists in `backend/` directory
- Verify DATABASE_URL is correct
- Make sure PostgreSQL is running
- Try: `npm run prisma:generate` again

**Error: "Prisma Client not found"**
```bash
cd backend
npm run prisma:generate
```

**Error: "Port 4000 already in use"**
- Change PORT in `.env` to `4001`
- Or kill the process using port 4000

### Mobile app can't connect to backend

**Error: "Network request failed"**
- Make sure backend is running on port 4000
- Check API_BASE_URL in `mobile/src/api/client.ts`
- For Android emulator: Use `http://10.0.2.2:4000/api`
- For physical device: Use your computer's IP address

**How to find your IP address:**
```bash
# Windows
ipconfig
# Look for "IPv4 Address" (usually 192.168.x.x)
```

### No quests showing

**If "Today's Quests" is empty:**
- Make sure you ran: `npm run prisma:seed`
- Check backend logs for errors
- Verify database has quests:
  ```sql
  SELECT * FROM "Quest";
  ```

### TypeScript errors

**"Cannot find module '@rise/shared'"**
```bash
cd shared
npm install
npm run build
```

## ✅ Success Checklist

- [ ] Database created and connected
- [ ] Backend running on http://localhost:4000
- [ ] Database seeded with sample data
- [ ] Mobile app installed and running
- [ ] Can register a new user
- [ ] Can see daily quests
- [ ] Can accept a quest
- [ ] Can complete a quest with reflection
- [ ] XP and Rise Score update correctly
- [ ] Skills appear in Active Skills card

## 🎉 Next Steps After Testing

Once everything works:

1. **Add more skills** - Expand the seed script with more skills from the PRD
2. **Build skill tree** - Visualize all available skills
3. **Add achievements** - Implement achievement unlocking
4. **Add streaks** - Track daily activity
5. **Polish UI** - Add animations, improve UX

## 📞 Quick Commands Reference

```bash
# Backend
cd backend
npm run start:dev          # Start server
npm run prisma:migrate     # Run migrations
npm run prisma:seed       # Seed database
npm run prisma:generate   # Generate Prisma client

# Mobile
cd mobile
npm start                 # Start Expo
npm run android           # Run on Android

# Check if backend is running
curl http://localhost:4000/api/health
```

## 🎯 Expected Flow

```
1. Register → 2. See Quests → 3. Accept Quest → 4. Complete Quest → 
5. Earn XP → 6. Level Up Skill → 7. Rise Score Increases
```

Good luck! 🚀



