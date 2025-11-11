# Next Steps - Continue Setup

## ✅ You've Completed:
- [x] Created `.env` file
- [x] Added database configuration

## 📋 Next Steps:

### Step 1: Create the Database (if not done)

**Option A: Using psql (Command Line)**
```bash
psql -U postgres
```
Then in psql:
```sql
CREATE DATABASE rise;
\q
```

**Option B: Using pgAdmin**
1. Open pgAdmin
2. Right-click "Databases" → Create → Database
3. Name: `rise`
4. Save

**Option C: If using Supabase**
- Database is already created, skip this step

### Step 2: Update .env with Real Password

Open `backend\.env` and replace `yourpassword` with your actual PostgreSQL password.

### Step 3: Run Database Migrations

```bash
cd C:\Users\HP\Rise\backend
npm run prisma:migrate
```

When prompted, name it: `init`

✅ **Success looks like:**
```
✔ Migration `20241111_init` applied successfully
```

### Step 4: Seed the Database

```bash
npm run prisma:seed
```

✅ **Success looks like:**
```
🌱 Seeding database...
📚 Creating skills...
⚔️ Creating quests...
🏆 Creating achievements...
✅ Seeding completed!
```

### Step 5: Start the Backend Server

```bash
npm run start:dev
```

✅ **Success looks like:**
```
Rise backend is running at http://localhost:4000
```

**Keep this terminal open!** The server needs to keep running.

### Step 6: Test Backend (Optional)

Open a new terminal and test:
```bash
curl http://localhost:4000/api/health
```

Or visit in browser: http://localhost:4000/api/health

### Step 7: Set Up Mobile App

**Open a NEW terminal** (keep backend running):

```bash
cd C:\Users\HP\Rise\mobile
npm install --legacy-peer-deps
npm start
```

Then press `a` for Android or scan QR code.

## 🎯 Quick Command Summary

```bash
# 1. Create database (in PostgreSQL)
CREATE DATABASE rise;

# 2. Update .env file with real password

# 3. Run migrations
cd C:\Users\HP\Rise\backend
npm run prisma:migrate

# 4. Seed database
npm run prisma:seed

# 5. Start backend (keep running)
npm run start:dev

# 6. In NEW terminal - Start mobile
cd C:\Users\HP\Rise\mobile
npm install --legacy-peer-deps
npm start
```

## 🐛 Troubleshooting

**"Database does not exist"**
→ Create the database first (Step 1)

**"Password authentication failed"**
→ Check your password in `.env` file

**"Connection refused"**
→ Make sure PostgreSQL is running
→ Check if port 5432 is correct

**"Migration failed"**
→ Make sure database exists
→ Check DATABASE_URL in `.env` is correct

## ✅ Checklist

- [ ] Database `rise` created
- [ ] `.env` file has real password
- [ ] Migrations run successfully
- [ ] Database seeded with sample data
- [ ] Backend server running on port 4000
- [ ] Mobile app dependencies installed
- [ ] Ready to test!
