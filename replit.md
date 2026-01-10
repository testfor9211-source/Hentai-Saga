# Hentai Saga - Adult Anime Streaming Platform

## Overview

Hentai Saga is an adult-oriented anime streaming website that aggregates and embeds video content from third-party sources. The platform emphasizes user privacy with a "100% anonymous" approach - no user accounts, no watch history, no tracking. The site serves as a content aggregation and linking service rather than a video hosting platform.

Key features:
- Age verification gate on first visit
- Privacy-focused design with minimal data collection
- Responsive UI with dark theme aesthetic
- Admin authentication system for content management
- Multiple legal/policy pages for compliance

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom plugins for meta images and Replit integration
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom theme configuration
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Fonts**: Inter (body), Orbitron (display/headers), Rajdhani (UI elements)

The frontend follows a component-based architecture with:
- Reusable UI components in `client/src/components/ui/`
- Feature components in `client/src/components/`
- Page components in `client/src/pages/`
- Custom hooks in `client/src/hooks/`

#### Key Page Components
- `client/src/pages/home.tsx`: Main landing page with hero section, recently uploaded horizontal slider, and genre sidebar.
- `client/src/pages/genre-page.tsx`: Dynamic genre browsing page with database integration.
- `client/src/pages/author-page.tsx`: Dynamic author works page with database integration.
- `client/src/pages/tags-page.tsx`: Dynamic tags browsing page with database integration.
- `client/src/pages/login.tsx`: Admin authentication page.

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **Development**: TSX for hot reloading, Vite middleware for frontend
- **Production**: esbuild bundling, static file serving

The server uses a split configuration:
- `server/index-dev.ts` - Development server with Vite HMR
- `server/index-prod.ts` - Production server with static asset serving
- `server/app.ts` - Core Express application setup
- `server/routes.ts` - API route definitions

### Data Storage
- **Primary Database**: MySQL (external, hosted on DigitalOcean with SSL)
- **ORM**: Drizzle ORM configured for PostgreSQL schema definition
- **Connection**: mysql2/promise with connection pooling
- **Session Storage**: In-memory storage for user data (MemStorage class)

Note: The schema is defined using Drizzle for PostgreSQL but the actual database connection uses MySQL. The DATABASE_URL environment variable is expected for Drizzle config, while separate DB_* variables configure the MySQL connection.

### Authentication
- Admin-only authentication system
- Password hashing with bcrypt
- Cookie-based session management (`admin_session` cookie)
- Single admin user validation against database (id = 1)

### Security Features
- Age verification modal with localStorage persistence
- SSL/TLS for database connections (CA certificate in `server/certs/`)
- HTTP-only cookies for admin sessions
- Input validation on login endpoints

## External Dependencies

### Database
- **MySQL Database**: External MySQL instance requiring:
  - `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` environment variables
  - SSL CA certificate at `server/certs/ca-certificate.crt`
  - Connection pool with 10 connection limit

### Third-Party Services
- **Google Fonts**: Inter, Orbitron, Rajdhani font families loaded via CDN
- **Neon Database**: @neondatabase/serverless package included (may be for Drizzle compatibility)

### Key NPM Dependencies
- **UI**: Radix UI primitives, shadcn/ui components, Lucide icons
- **Forms**: React Hook Form with Zod resolvers
- **Data Fetching**: TanStack React Query
- **Date Handling**: date-fns
- **Carousel**: Embla Carousel
- **Drawer**: Vaul

### Replit Integration
- `@replit/vite-plugin-runtime-error-modal` - Error overlay in development
- `@replit/vite-plugin-cartographer` - Dev tooling (conditional)
- `@replit/vite-plugin-dev-banner` - Development banner (conditional)
- Custom `vite-plugin-meta-images` for OpenGraph image handling