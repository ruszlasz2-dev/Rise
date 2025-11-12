# Getting Started with Rise

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
# Install root and workspace dependencies
npm install
npm install --workspaces
```

### 2. Database Setup

1. Create a PostgreSQL database (local or cloud)
2. Copy `.env.example` to `.env` in the `backend/` directory
3. Update `DATABASE_URL` in `.env`
4. Run migrations:

```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
```

### 3. Start Development Servers

```bash
# Start all services
npm run dev:all

# Or individually:
npm run dev:backend  # http://localhost:4000
npm run dev:web      # http://localhost:3000
npm run dev:mobile   # Expo dev server
```

## 📱 Mobile Development

### Prerequisites
- Node.js 18+
- Expo CLI: `npm install -g expo-cli`
- Android Studio (for Android emulator) or physical device

### Running on Android

```bash
cd mobile
npm run android
```

### Running on iOS (future)

```bash
cd mobile
npm run ios
```

## 🌐 Web Development

The web app runs on Next.js with automatic hot reload.

```bash
cd web
npm run dev
```

Visit `http://localhost:3000`

## 🔧 Backend Development

### API Endpoints

The backend runs on `http://localhost:4000/api`

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/me` - Get current user (requires auth)

#### Skills
- `GET /api/skills` - List all skills
- `GET /api/skills/domain/:domain` - Skills by domain
- `GET /api/skills/:id` - Get skill details

#### Quests
- `GET /api/quests/daily` - Get daily quests (requires auth)
- `GET /api/quests/my` - Get user's quests (requires auth)
- `POST /api/quests/:questId/accept` - Accept quest (requires auth)
- `POST /api/quests/:userQuestId/complete` - Complete quest (requires auth)

### Testing the API

```bash
# Using curl
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'
```

## 📦 Project Structure

```
Rise/
├── mobile/          # React Native (Expo) app
│   ├── src/
│   │   ├── screens/     # Screen components
│   │   ├── components/  # Reusable components
│   │   ├── navigation/  # Navigation setup
│   │   └── theme/       # Design system
│   └── App.tsx
├── web/             # Next.js web app
│   ├── pages/       # Next.js pages
│   ├── src/
│   │   └── components/  # Web components
│   └── styles/      # Global styles
├── backend/         # NestJS API
│   ├── src/
│   │   ├── auth/        # Authentication module
│   │   ├── users/       # User management
│   │   ├── skills/      # Skills module
│   │   ├── quests/      # Quest system
│   │   └── prisma/      # Database client
│   └── prisma/
│       └── schema.prisma
└── shared/          # Shared TypeScript code
    └── src/
        ├── types/       # TypeScript types
        ├── constants/   # Constants
        └── utils/       # Utility functions
```

## 🎨 Design System

### Colors
- Background: `#f7f7fb`
- Text: `#111111`
- Accent: `#f5b041` (gold)
- White: `#ffffff`

### Typography
- Headings: Bold (700), tight letter spacing
- Body: Regular (400), comfortable line height

### Components
- Cards: 20px border radius, subtle shadows
- Buttons: Rounded, gradient accents
- Progress bars: Smooth animations

## 🔐 Environment Variables

### Backend (.env)
```env
DATABASE_URL="postgresql://user:password@localhost:5432/rise"
JWT_SECRET="your-secret-key-here"
PORT=4000
NODE_ENV=development
```

## 📝 Next Steps

1. **Seed Database**: Add initial skills and quests
2. **Connect Frontend**: Wire up API calls from mobile/web
3. **Authentication Flow**: Implement login/register UI
4. **Quest System**: Build quest acceptance and completion flows
5. **Skill Tree**: Visualize skill progression
6. **XP System**: Implement XP calculation and leveling

## 🐛 Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running
- Check `DATABASE_URL` in `.env`
- Run `npx prisma generate` after schema changes

### Mobile Build Issues
- Clear Expo cache: `expo start -c`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### TypeScript Errors
- Run `npm run typecheck` in each workspace
- Ensure `shared` package is built: `cd shared && npm run build`

## 📚 Documentation

- [Architecture Overview](./ARCHITECTURE.md)
- [Product Requirements](./PRD.md) (if available)
- [API Documentation](./API.md) (to be created)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Private - All rights reserved




