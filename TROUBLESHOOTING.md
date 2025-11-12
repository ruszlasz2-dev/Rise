# Troubleshooting Guide

## Backend Startup Issues

### Issue: `nest` command not found
**Solution:** Dependencies weren't installed. Run:
```bash
cd backend
npm install --legacy-peer-deps
```

### Issue: Prisma Client not generated
**Solution:** Generate Prisma client:
```bash
cd backend
npm run prisma:generate
```

### Issue: Database connection error
**Solution:** 
1. Create `.env` file in `backend/` directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/rise"
JWT_SECRET="your-secret-key-here"
PORT=4000
```

2. Make sure PostgreSQL is running
3. Create the database:
```sql
CREATE DATABASE rise;
```

4. Run migrations:
```bash
cd backend
npm run prisma:migrate
```

### Issue: Module not found errors
**Solution:** Make sure all dependencies are installed:
```bash
# From root
npm install --legacy-peer-deps

# Or from each workspace
cd backend && npm install --legacy-peer-deps
cd ../mobile && npm install --legacy-peer-deps
cd ../web && npm install --legacy-peer-deps
```

### Issue: TypeScript compilation errors
**Solution:** 
1. Check if `shared` package is built:
```bash
cd shared
npm run build
```

2. Check TypeScript configs are correct
3. Run typecheck:
```bash
npm run typecheck
```

## Common Errors

### "Cannot find module '@rise/shared'"
- Build the shared package: `cd shared && npm run build`
- Make sure it's listed in root `package.json` workspaces

### "Prisma Client not found"
- Run: `cd backend && npm run prisma:generate`

### "Database connection refused"
- Check PostgreSQL is running
- Verify DATABASE_URL in `.env`
- Check database exists

### Port already in use
- Change PORT in `.env` file
- Or kill the process using port 4000

## Step-by-Step Setup

1. **Install all dependencies:**
```bash
# Root
npm install --legacy-peer-deps

# Backend
cd backend
npm install --legacy-peer-deps
npm run prisma:generate
```

2. **Set up database:**
```bash
# Create .env file in backend/
# Add DATABASE_URL, JWT_SECRET, PORT

# Run migrations
npm run prisma:migrate

# Seed database
npm run prisma:seed
```

3. **Start backend:**
```bash
npm run start:dev
```

4. **Start mobile (in new terminal):**
```bash
cd mobile
npm install --legacy-peer-deps
npm start
```

## Still Having Issues?

1. Check Node.js version: `node --version` (should be 18+)
2. Check npm version: `npm --version` (should be 9+)
3. Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```
4. Check for TypeScript errors: `npm run typecheck`




