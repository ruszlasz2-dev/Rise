# Database Setup Guide

## Quick Setup

### 1. Create `.env` file

Copy the example file:
```bash
cd backend
copy .env.example .env
```

Or create `backend/.env` manually with:
```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/rise"
JWT_SECRET="your-secret-key-here-change-in-production"
PORT=4000
```

**Important:** Replace:
- `postgres` with your PostgreSQL username
- `yourpassword` with your PostgreSQL password
- `localhost:5432` if your database is on a different host/port

### 2. Create the Database

**Option A: Using psql (Command Line)**
```bash
psql -U postgres
CREATE DATABASE rise;
\q
```

**Option B: Using pgAdmin**
1. Open pgAdmin
2. Right-click "Databases"
3. Create → Database
4. Name: `rise`
5. Save

**Option C: Using SQL**
```sql
CREATE DATABASE rise;
```

### 3. Run Migrations

```bash
cd backend
npm run prisma:migrate
```

This will:
- Create all tables in the database
- Set up the schema

### 4. Seed the Database (Optional but Recommended)

```bash
npm run prisma:seed
```

This adds:
- Sample skills
- Sample quests
- Sample achievements

### 5. Start the Server

```bash
npm run start:dev
```

You should see:
```
Rise backend is running at http://localhost:4000
```

## Troubleshooting

### "Database does not exist"
- Make sure you created the database (step 2)
- Check the database name in DATABASE_URL matches

### "Connection refused"
- Check PostgreSQL is running
- Verify username/password in DATABASE_URL
- Check if PostgreSQL is on port 5432 (default)

### "Password authentication failed"
- Double-check your password in DATABASE_URL
- Try resetting PostgreSQL password

### "Prisma Client not generated"
```bash
npm run prisma:generate
```

## Using Supabase (Cloud Database)

If you prefer a cloud database:

1. Sign up at https://supabase.com
2. Create a new project
3. Go to Settings → Database
4. Copy the "Connection string"
5. Use it as your DATABASE_URL in `.env`

Example:
```
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

## Using Neon (Cloud Database)

1. Sign up at https://neon.tech
2. Create a new project
3. Copy the connection string
4. Use it as your DATABASE_URL




