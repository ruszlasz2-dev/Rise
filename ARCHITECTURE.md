# Rise Architecture Documentation

## System Overview

Rise is a cross-platform self-development RPG built as a monorepo with shared TypeScript codebase. The architecture prioritizes offline-first functionality, elegant UX, and scalable backend services.

## Platform Strategy

### Primary: Android (React Native/Expo)
- Native Material You design language
- Offline-first with conflict-resistant sync
- Gesture-based navigation
- Push notifications via Expo

### Secondary: Web (Next.js)
- Server-side rendering for SEO
- Responsive design matching mobile UX
- Progressive Web App capabilities
- Shared component logic with mobile

### Future: iOS
- Same React Native codebase
- Native iOS design adaptations
- Shared business logic

## Tech Stack

### Frontend
- **Mobile**: React Native (Expo SDK 49), TypeScript, Styled Components
- **Web**: Next.js 13+, TypeScript, Tailwind CSS, Framer Motion
- **State**: React Query (TanStack Query) with offline caching
- **Navigation**: React Navigation (mobile), Next.js Router (web)

### Backend
- **Framework**: NestJS (Node.js)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT + Passport.js
- **API Style**: RESTful with GraphQL-ready structure

### Shared
- **Types**: TypeScript interfaces and types
- **Constants**: XP calculations, skill thresholds
- **Utils**: Level calculation, progress tracking

## Data Flow

```
User Action (Mobile/Web)
    ↓
React Query Hook
    ↓
API Client (tRPC or REST)
    ↓
NestJS Controller
    ↓
Service Layer (Business Logic)
    ↓
Prisma ORM
    ↓
PostgreSQL Database
    ↓
Response → Cache → UI Update
```

## Core Modules

### 1. Authentication Module
- JWT-based authentication
- Google OAuth support (future)
- Password hashing with bcrypt
- Session management

### 2. Users Module
- Profile management
- Rise Score calculation
- Streak tracking
- Achievement system

### 3. Skills Module
- 500+ skills across 12 domains
- Skill tree visualization
- Prerequisite system
- Level progression (1-20)

### 4. Quests Module
- AI-generated daily quests
- Quest acceptance/completion
- Reflection system
- XP calculation

### 5. XP & Progression Module
- XP transaction logging
- Level calculation
- Tier progression (Novice → Expert)
- Rise Score aggregation

## Database Schema

### Core Tables
- `User` - User accounts and profiles
- `Skill` - Skill definitions
- `UserSkill` - User skill progress
- `Quest` - Quest templates
- `UserQuest` - User quest instances
- `XPTransaction` - XP history
- `Achievement` - Achievement definitions
- `UserAchievement` - Unlocked achievements

## Offline-First Architecture

### Strategy
1. **Local Storage**: React Query cache + AsyncStorage (mobile) / IndexedDB (web)
2. **Conflict Resolution**: Last-write-wins with timestamp comparison
3. **Sync Queue**: Queue mutations when offline, sync on reconnect
4. **Optimistic Updates**: Immediate UI feedback, rollback on error

### Implementation
- React Query with `persistQueryClient`
- Custom sync service for conflict resolution
- Background sync on app resume

## Design System

### Colors
- Background: `#f7f7fb` (calm white)
- Text: `#111111` (near black)
- Accent: `#f5b041` (gold)
- Success: `#27ae60`
- Error: `#e74c3c`

### Typography
- Primary: System fonts (Inter/Google Sans)
- Headings: 700 weight, tight letter spacing
- Body: 400 weight, comfortable line height

### Components
- Cards: 20px border radius, subtle shadows
- Buttons: Rounded, gradient accents
- Progress bars: Smooth animations
- Icons: Material Symbols Outlined

## API Design

### REST Endpoints

#### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Sign in
- `POST /api/auth/me` - Get current user

#### Skills
- `GET /api/skills` - List all skills
- `GET /api/skills/domain/:domain` - Skills by domain
- `GET /api/skills/:id` - Skill details

#### Quests
- `GET /api/quests/daily` - Get today's quests
- `GET /api/quests/my` - User's quest history
- `POST /api/quests/:questId/accept` - Accept quest
- `POST /api/quests/:userQuestId/complete` - Complete quest

#### Users
- `GET /api/users/profile` - User profile
- `PATCH /api/users/profile` - Update profile

## Security

- JWT tokens with 7-day expiration
- Password hashing (bcrypt, 10 rounds)
- CORS configuration
- Input validation (class-validator)
- SQL injection prevention (Prisma)

## Performance

- Database indexing on foreign keys
- Query optimization with Prisma
- React Query caching
- Code splitting (Next.js)
- Image optimization (Expo/Next.js)

## Deployment

### Backend
- Platform: Railway or Render
- Database: Supabase or Neon (PostgreSQL)
- Environment: Production `.env` configuration

### Mobile
- Platform: Expo EAS Build
- Distribution: Google Play Store
- Updates: OTA updates via Expo

### Web
- Platform: Vercel
- CDN: Automatic via Vercel
- Domain: Custom domain configuration

## Development Workflow

1. **Local Development**
   - `npm run dev:all` - Start all services
   - Hot reload enabled
   - Mock data for testing

2. **Testing**
   - Unit tests: Jest
   - E2E tests: Detox (mobile), Playwright (web)
   - API tests: Supertest

3. **CI/CD**
   - GitHub Actions
   - Automated testing
   - Deployment on merge to main

## Future Enhancements

- GraphQL API layer
- Real-time quest updates (WebSockets)
- AI quest personalization
- Social features (leaderboards, sharing)
- Enterprise/team features
- Skill marketplace



