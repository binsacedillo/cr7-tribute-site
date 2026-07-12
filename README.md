# Cristiano Ronaldo (CR7) Tribute Site

A cinematic, single-page tribute website for Cristiano Ronaldo. The experience is styled like a dark-gold digital museum, with chapter-based sections, horizontal exhibit cards, modal details, smooth scrolling, and responsive layouts for mobile, tablet, and desktop.

## Features

- Chapter-based long-scroll homepage covering Madeira, career, records, trophies, iconic moments, World Cup journey, and legacy.
- Responsive Ronaldo hero image with custom CSS focal positioning.
- Fixed navigation that changes styling after scroll.
- Horizontal drag-scroll exhibit cards for career, records, trophies, moments, and World Cup chapters.
- Smaller responsive card sizing using viewport-aware widths.
- Detail modals for club, milestone, and iconic moment content.
- Interactive SIUU counter with local storage.
- Quote generator using static Ronaldo quote data.
- Floating bottom-right back-to-top button that appears after scrolling.
- Custom SVG-style club crests, trophy icons, and World Cup flag badges.

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Lucide React icons
- Lenis smooth scrolling
- Static typed content from `data/site.ts`

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx

components/
  cr7/
    layout.tsx
    modal.tsx
    hooks.ts
    ui.tsx
    sections/
      hero.tsx
      madeira.tsx
      career.tsx
      records.tsx
      trophies.tsx
      moments.tsx
      worldcups.tsx
      legacy.tsx
  cr7-experience.tsx

data/
  site.ts

public/
  images/
  audio/
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Verification

Run lint:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

## Notes

- The site is static and does not require a backend, database, authentication, or CMS.
- Main content is managed in `data/site.ts`.
- Hero image positioning is controlled by `.hero-ronaldo-bg` in `app/globals.css`.
- Card responsiveness is handled directly in the section components with Tailwind viewport-aware widths.
