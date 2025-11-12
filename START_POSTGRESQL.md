# How to Start PostgreSQL

## Method 1: Using Services (Easiest)

1. **Press Windows Key + R**
2. **Type:** `services.msc` and press Enter
3. **Find PostgreSQL service** (might be named):
   - `postgresql-x64-XX` (where XX is version number)
   - `PostgreSQL`
   - `postgresql-XX`
4. **Right-click** → **Start**
5. **Wait for it to start** (Status should change to "Running")

## Method 2: Using Command Line

```powershell
# Find the service name first
Get-Service | Where-Object { $_.DisplayName -like "*PostgreSQL*" }

# Then start it (replace SERVICE_NAME with actual name)
Start-Service -Name "SERVICE_NAME"
```

## Method 3: Using pgAdmin

1. Open **pgAdmin**
2. If it's installed, PostgreSQL should start automatically
3. Check if you can connect to the server

## After Starting

Once PostgreSQL is running, try the migration again:
```bash
cd C:\Users\HP\Rise\backend
npm run prisma:migrate
```

## If PostgreSQL is Not Installed

If you don't have PostgreSQL installed, you have two options:

### Option A: Install PostgreSQL
1. Download from: https://www.postgresql.org/download/windows/
2. Install it
3. Remember the password you set during installation
4. Update `.env` with that password

### Option B: Use Supabase (Cloud - Recommended)
Since your password suggests Supabase, you might want to use that instead!


