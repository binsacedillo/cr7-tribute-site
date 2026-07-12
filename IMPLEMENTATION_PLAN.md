# CR7 Tribute Site Documentation

## Current Summary

The project is a completed Next.js single-page tribute site for Cristiano Ronaldo. It presents the content as a cinematic digital museum with full-screen chapters, responsive exhibit cards, smooth scrolling, modal details, and interactive legacy features.

The current app is static. It does not use a backend, database, authentication, or CMS.

## Implemented Experience

### Homepage Sections

1. Hero
2. The Boy from Madeira
3. Rise to Stardom
4. The Records
5. Trophy Room
6. Iconic Moments
7. World Cup Journey
8. Legacy
9. Footer

### Interaction Model

- Fixed top navigation links to page sections.
- Header styling changes after scroll.
- Lenis provides smooth scrolling.
- Horizontal drag-scroll carousels are used for exhibit-style card sections.
- Club, milestone, and moment cards open detail modals.
- Escape key closes the active modal.
- SIUU counter persists through `localStorage`.
- Quote generator cycles Ronaldo quote content.
- Floating back-to-top button appears after the user scrolls down.

## Current Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- Lenis
- Static content in `data/site.ts`

Not currently installed:

- Framer Motion
- shadcn/ui

## Visual System

The site uses a premium museum direction:

- Background: `#090909`
- Gold: `#D4AF37`
- White: `#F8F8F8`
- Gray: `#A0A0A0`

Typography:

- Display headings use the configured display font.
- Body text uses the configured Inter font.

The visual tone should remain dark, editorial, cinematic, and minimal. Avoid a generic sports blog layout.

## Responsive Design Notes

### Hero

The Ronaldo hero image is controlled through `.hero-ronaldo-bg` in `app/globals.css`.

The class defines responsive background size and focal-point values:

```css
.hero-ronaldo-bg {
  background-repeat: no-repeat;
  background-size: cover, auto 145%;
  background-position: center, 28% center;
}
```

Additional breakpoints adjust the image crop at `640px`, `1024px`, and `1440px`.

### Cards

Carousel cards use viewport-aware sizing instead of large fixed widths. The main pattern is:

```tsx
w-[min(78vw,18rem)] lg:w-[19.5rem]
```

This keeps cards readable on mobile while preventing oversized cards on desktop.

### Section Width

Most content sections now use `max-w-6xl` so layouts do not stretch too wide on large screens.

## Accessibility Requirements

Maintain these standards when editing:

- Interactive cards and buttons must be keyboard reachable.
- Modals must support escape-to-close.
- Buttons need useful `aria-label` text when icon-only.
- Text must remain readable over images.
- Focus states must remain visible.
- Reduced-motion users should not lose usability.

## Performance Requirements

- Keep the site static and lightweight.
- Avoid heavy animation on every scroll frame.
- Keep image overlays readable and performant.
- Run production build checks before committing.

## Content Source

Primary content lives in:

```text
data/site.ts
```

This includes:

- Madeira milestones
- Clubs
- Records
- Trophies
- Iconic moments
- World Cup entries
- Quotes
- Legacy points

## Verification Checklist

Run:

```bash
npm run lint
npm run build
```

Manual checks:

- Hero image keeps Ronaldo visible across mobile and desktop.
- Section cards are not too wide on mobile or desktop.
- Horizontal drag-scroll sections still scroll correctly.
- Card click actions still open modals.
- Back-to-top button appears after scrolling and returns to the hero.
- Header navigation anchors scroll to the correct sections.
- SIUU counter increments and persists after refresh.
- Quote button cycles quote content.

## Deployment

The app is ready for static deployment through a standard Next.js host such as Vercel.

Use:

```bash
npm run build
```

Then deploy using the configured hosting workflow.

## Maintenance Notes

- Keep documentation aligned with `package.json`; do not list packages that are not installed.
- Keep responsive card sizing consistent across carousel sections.
- If the hero image changes, retune `.hero-ronaldo-bg`.
- Prefer updating `data/site.ts` for content changes instead of hardcoding text inside components.
