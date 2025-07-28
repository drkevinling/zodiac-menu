# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (opens at http://localhost:3000)
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a Next.js 14 application for the Zodiac Coffee Lounge menu display system. The app uses TypeScript and is styled with Tailwind CSS.

### Key Structure

- **App Router**: Uses Next.js 14 App Router with pages in `src/app/`
- **Menu System**: All menu images are stored as URLs in Supabase storage and defined as constants in `src/constants/menu.ts`
- **Component Architecture**: 
  - `MenuItem` component displays individual menu images
  - `SocialLinks` component handles social media links with app deep-linking for mobile
  - UI components follow shadcn/ui patterns in `src/components/ui/`

### Styling Setup

- Uses shadcn/ui component library with "new-york" style variant
- Tailwind CSS with custom CSS variables for theming
- Path aliases configured: `@/` maps to `src/`
- Dark mode support configured via class-based approach

### Menu Content Management

The menu items are defined as exported constants in `src/constants/menu.ts` pointing to Supabase storage URLs. To add new menu items:
1. Upload image to Supabase storage
2. Add constant with the URL to `menu.ts`
3. Import and add to the `ListOfMenuPics` array in page components

### Social Media Integration

The `SocialLinks` component includes smart deep-linking that attempts to open native apps on mobile devices, falling back to web URLs. Handles Facebook, Instagram, and TikTok with custom app URL schemes.

### Pages

- `/` (root) - Home page with logo, welcome message, social links, and full menu
- `/menu` - Menu-only page without social links