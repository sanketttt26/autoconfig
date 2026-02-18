# Spring Boot Roadmap UI

Interactive React UI for a structured Spring Boot learning roadmap with curated free resources, stage-based progression, and local progress tracking.

## What this project includes

- Landing page with Hero, Features, Roadmap Preview, and FAQ sections
- Dedicated `/roadmap` page with stage and type filters (`beginner`, `intermediate`, `advanced`; `core`, `optional`)
- Dedicated `/resources` page with curated YouTube videos and playlists
- Topic search across titles and descriptions
- Resource search and category filtering
- Resource cards with YouTube thumbnails for videos, playlist thumbnail fallback ("Thumbnail unavailable"), and hidden duration for playlists
- Progress checkboxes and starred topics
- Expand/collapse all modules
- Persistent view state and progress in `localStorage`
- Light and dark theme toggle
- Responsive layout for desktop and mobile

## Tech stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 3
- React Router DOM 6
- Radix UI primitives
- Lucide icons
- `next-themes` for theme switching
- `@vercel/analytics` for client analytics

## Project structure

```text
src/
  components/      Reusable UI and navigation components
  constants/       Resources dataset (videos/playlists)
  data/            Roadmap dataset and helper functions
  hooks/           Shared hooks
  pages/           Route-level pages (Roadmap, Learn, Resources)
  sections/        Landing page sections
  static/          Static assets (logo)
```

## Getting started

### Prerequisites

- Node.js 20+ (recommended for Vite 7)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:5173`.

## Available scripts

- `npm run dev` - start development server
- `npm run build` - type-check and build for production
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## Data and persistence

- Roadmap content lives in `src/data/roadmap.ts`.
- Resource video and playlist content lives in `src/constants/resourceVideos.ts`.
- Progress and view preferences are stored in `localStorage` keys: `autoconfig-site-progress`, `autoconfig-site-starred`, `autoconfig-site-roadmap-view`.

## Build output and deployment

- Production files are generated in `dist/`.
- Vite `base` is set to `./` in `vite.config.ts`, so the build can be hosted on static file hosting with relative asset paths.

## Notes

- This repository is frontend-only.
- The roadmap content is curated and can be updated by editing `src/data/roadmap.ts`.
- Resources content can be updated by editing `src/constants/resourceVideos.ts`.
