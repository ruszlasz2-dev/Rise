# Supabase Connection Troubleshooting

## Current Status
✅ Connection string format is correct
❌ Can't connect to Supabase database

## Possible Issues & Solutions

### 1. Check Supabase Project Status

1. Go to https://supabase.com/dashboard
2. Check if your project shows as **"Active"** (not paused)
3. If paused, click **"Restore"** to activate it

### 2. Verify Connection String

In Supabase Dashboard:
- Settings → Database → Connection string
- Make sure you're using the **URI** format
- Copy it exactly as shown

### 3. Check Password

- Make sure the password in `.env` matches your Supabase project password
- If password has special characters, they might need URL encoding:
  - `@` becomes `%40`
  - `#` becomes `%23`
  - `$` becomes `%24`
  - etc.

### 4. Test Connection Directly

Try connecting with a PostgreSQL client:
- Download pgAdmin or DBeaver
- Use the connection string to test if it works

### 5. Check Supabase Network Settings

In Supabase Dashboard:
- Settings → Database → Connection pooling
- Make sure connections are allowed from your IP

### 6. Alternative: Use Connection Pooler

Try using the pooler connection (port 6543):
```
postgresql://postgres.giomwabmivzbykloojwj:SupabaseSzonja0217@aws-0-us-west-1.pooler.supabase.com:6543/postgres
```

## Quick Test

1. Open Supabase Dashboard
2. Go to SQL Editor
3. Try running: `SELECT version();`
4. If this works, your project is active and the issue is with the connection string format

