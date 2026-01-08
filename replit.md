# Chain Software Group Website

## Overview

This is a marketing website for Chain Software Group, a custom software development company. The application is a full-stack TypeScript project with a React frontend and Express backend. It features a multi-page marketing site with contact form and newsletter subscription functionality, backed by a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for smooth scroll reveals and transitions
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Design**: REST endpoints defined in `shared/routes.ts` with typed contracts
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Validation**: Zod schemas shared between frontend and backend

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components (shadcn/ui)
    pages/        # Route components (Home, Features, Solutions, Pricing, About)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route handlers
  storage.ts      # Database access layer
  db.ts           # Database connection
shared/           # Shared code between frontend and backend
  schema.ts       # Drizzle table definitions and Zod schemas
  routes.ts       # API contract definitions
```

### Data Flow Pattern
1. API contracts are defined in `shared/routes.ts` with input/output schemas
2. Database tables are defined in `shared/schema.ts` using Drizzle
3. Server routes in `server/routes.ts` implement the API contract
4. Storage layer in `server/storage.ts` handles database operations
5. Frontend uses React Query to call APIs via `client/src/lib/queryClient.ts`

### Build Process
- Development: Vite dev server with HMR proxied through Express
- Production: Vite builds to `dist/public`, esbuild bundles server to `dist/index.cjs`
- Database migrations: `drizzle-kit push` syncs schema to database

## External Dependencies

### Database
- **PostgreSQL**: Primary database via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema management and query building
- **connect-pg-simple**: Session storage (available but not currently used)

### Frontend Libraries
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Client-side routing
- **react-hook-form**: Form handling
- **@hookform/resolvers**: Zod integration for form validation
- **shadcn/ui components**: Full suite of Radix UI primitives with Tailwind styling

### Fonts
- **Inter**: Body text font (loaded from Google Fonts)
- **Plus Jakarta Sans**: Heading font (loaded from Google Fonts)

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server bundling for production
- **drizzle-kit**: Database schema migrations
- **TypeScript**: Type checking across the entire codebase