# Rise - Level Up Your Real Life

A minimalist, powerful self-development platform that transforms personal growth into an elegant, game-like experience.

## 🏗️ Architecture

This is a monorepo containing:

- **`mobile/`** - React Native (Expo) Android app
- **`web/`** - Next.js web application
- **`backend/`** - NestJS REST API
- **`shared/`** - Shared TypeScript types and utilities

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+
- PostgreSQL database
- Expo CLI (for mobile development)

### Installation

```bash
# Install root dependencies
npm install

# Install workspace dependencies
npm install --workspaces
```

### Development

```bash
# Start all services
npm run dev:all

# Or start individually:
npm run dev:backend  # Backend API on :4000
npm run dev:web      # Web app on :3000
npm run dev:mobile   # Expo dev server
```

### Database Setup

```bash
cd backend
npx prisma generate
npx prisma migrate dev
```

## 📱 Mobile App

Built with React Native (Expo) for Android-first development.

### Features

- Navigation with React Navigation
- Styled Components for theming
- Offline-first architecture
- Material You design principles

### Running on Android

```bash
cd mobile
npm run android
```

## 🌐 Web App

Built with Next.js and Tailwind CSS.

### Features

- Server-side rendering
- Responsive design
- Shared component library
- Type-safe API integration

## 🔧 Backend API

Built with NestJS and PostgreSQL (via Prisma).

### API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/users/profile` - Get user profile
- `GET /api/skills` - List all skills
- `GET /api/quests/daily` - Get daily quests
- `POST /api/quests/:questId/accept` - Accept quest
- `POST /api/quests/:userQuestId/complete` - Complete quest

### Environment Variables

Create `.env` in the `backend/` directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/rise"
JWT_SECRET="your-secret-key"
PORT=4000
```

## 📦 Shared Package

Contains TypeScript types, constants, and utilities shared across all platforms.

## 🎨 Design System

- **Colors**: Calm whites, soft gradients, gold accent (#f5b041)
- **Typography**: System fonts (Inter/Google Sans)
- **Icons**: Material Symbols Outlined
- **Animation**: React Native Reanimated / Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React Native (Expo), Next.js, TypeScript
- **Backend**: NestJS, PostgreSQL, Prisma
- **Styling**: Styled Components, Tailwind CSS
- **State**: React Query, Offline-first sync
- **Auth**: JWT, Passport.js

## 📋 Roadmap

- [x] Project scaffolding
- [x] Backend API structure
- [x] Mobile app navigation
- [x] Core components
- [ ] Authentication flow
- [ ] Quest system integration
- [ ] Skill tree visualization
- [ ] XP & progression system
- [ ] Offline sync
- [ ] AI quest generation

## 📄 License

Private - All rights reserved
"# Rise" 
"# Rise" 
"# Rise_" 
"# Rise_" 
"# Workingshit" 
"# Workingshit" 
"# Rise" 
