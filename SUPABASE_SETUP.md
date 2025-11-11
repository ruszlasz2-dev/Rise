# Using Supabase (No Installation Needed!)

## ✅ Good News
You **don't need to install PostgreSQL**! Supabase provides PostgreSQL in the cloud.

## 🔧 Get Your Correct Connection String

1. **Go to your Supabase project:**
   - Visit: https://supabase.com/dashboard
   - Select your project (the one with ID: `giomwabmivzbykloojwj`)

2. **Get the connection string:**
   - Click **Settings** (gear icon) in the left sidebar
   - Click **Database**
   - Scroll down to **Connection string**
   - Select **URI** tab (not Session mode or Transaction mode)
   - Copy the connection string

3. **It should look like one of these:**
   ```
   postgresql://postgres.giomwabmivzbykloojwj:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres
   ```
   OR
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.giomwabmivzbykloojwj.supabase.co:5432/postgres
   ```

4. **Update your `.env` file:**
   - Open `C:\Users\HP\Rise\backend\.env`
   - Replace the `DATABASE_URL` line with the connection string you copied
   - Make sure to replace `[YOUR-PASSWORD]` with your actual Supabase password

## 📝 Important Notes

- **For migrations:** Use the direct connection (port 5432)
- **For app connections:** Can use either direct or pooler
- **Password:** Use your Supabase project password (the one you set when creating the project)

## 🎯 Quick Steps

1. Copy connection string from Supabase dashboard
2. Paste it in `backend\.env` as `DATABASE_URL=...`
3. Run: `npm run prisma:migrate`

That's it! No installation needed! 🎉

