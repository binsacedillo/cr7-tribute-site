# CR7 Tribute Site Implementation Plan

## Summary

Build a cinematic Cristiano Ronaldo tribute site that feels like a digital museum and documentary. The first release should prioritize a polished long-scroll homepage that guides visitors through Ronaldo's life, career, records, trophies, World Cup journey, iconic moments, and legacy.

The site will use static content only. No backend, database, authentication, or CMS is required for the initial version.

## Recommended Project Direction

Use the title **The Last Dance: Cristiano Ronaldo** for the first implementation. It fits the emotional framing of a possible final World Cup while still leaving room to adjust branding later.

The homepage should be the main experience. Additional pages can exist for deeper content, but the first screen users see should be the documentary-style scroll narrative.

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Lucide React
- Lenis for smooth scrolling
- Vercel for deployment

## Visual System

Use a premium museum-like visual direction:

- Background: `#090909`
- Gold: `#D4AF37`
- White: `#F8F8F8`
- Gray: `#A0A0A0`

Typography:

- Display headings: Bebas Neue
- Body text: Inter
- Optional accent font: Satoshi

The design should feel cinematic, dark, elegant, and editorial. Avoid a generic sports blog layout.

## Information Architecture

### Primary Homepage Sections

1. Hero
2. The Boy from Madeira
3. Rise to Stardom
4. The Records
5. Trophy Room
6. Iconic Moments
7. World Cup Journey
8. Legacy
9. Footer

### Optional Supporting Routes

- `/career`
- `/records`
- `/trophies`
- `/world-cups`
- `/gallery`
- `/legacy`

These routes should be added only after the homepage experience is complete or if more detailed content needs dedicated space.

## Core Experience Requirements

### Hero

Create a fullscreen opening section with a Ronaldo silhouette or dramatic image treatment. The text should be large, sparse, and emotional:

```text
CRISTIANO
RONALDO

1985 -

A Legacy That Changed Football Forever
```

Expected motion:

- Stadium-light style fade-in
- Slow background zoom
- Line-by-line title reveal
- Scroll indicator reveal

### Navigation

Add a fixed navigation bar that is transparent at the top and gains contrast after scrolling.

Navigation items:

- Home
- Career
- Records
- Trophies
- World Cups
- Legacy

### Chapter 1: The Boy from Madeira

Tell the origin story:

- Childhood
- Family
- Sporting Lisbon
- Early dreams

Use old-photo styling, Madeira map treatment, and a small timeline. Images should fade in while scrolling.

### Chapter 2: Rise to Stardom

Build a horizontal or responsive timeline:

```text
Sporting -> Manchester United -> Real Madrid -> Juventus -> Manchester United -> Al Nassr
```

Each club item should reveal:

- Years
- Goals
- Assists, if available
- Trophies
- Memorable moments

Clicking a club should open a detail modal.

### Chapter 3: The Records

Use animated counters instead of static numbers.

Record examples:

- Career Goals
- Assists
- International Goals
- Hat Tricks
- Champions League Goals
- Ballon d'Or wins
- UEFA titles

Cards should animate when entering the viewport.

### Chapter 4: Trophy Room

Design this section like a luxury museum exhibit.

Trophy categories:

- Ballon d'Or
- Champions League
- League Titles
- Euro 2016
- Nations League
- Club World Cups

Hover behavior:

- Subtle trophy/card tilt
- Details appear without causing layout shift

### Chapter 5: Iconic Moments

Use large cinematic cards for major career moments:

- Bicycle Kick vs Juventus
- SIUU celebration
- Portugal Euro 2016
- Hat Trick vs Spain
- UCL comebacks
- Manchester United debut
- Real Madrid farewell

Each card should expand into a modal with images, short context, and key statistics.

### Chapter 6: World Cup Journey

Build a vertical or responsive timeline:

```text
2006 -> 2010 -> 2014 -> 2018 -> 2022 -> 2026
```

Each tournament should include:

- Host nation
- Portugal finish
- Ronaldo stats
- Defining moment

The 2026 card should be framed as:

```text
2026

Perhaps...

The Final Chapter.
```

### Chapter 7: Legacy

Focus on impact instead of only statistics:

- Discipline
- Longevity
- Work ethic
- Inspiration
- Influence

End with the quote:

```text
"Dreams are not what you see in your sleep. Dreams are things which do not let you sleep."
```

### Footer

Use a simple dark footer with:

```text
"Legends retire. Legacies don't."

Thank you, Cristiano.

1985 -

Forever.
```

## Interactive Features

### SIUU Counter

Add a button that increments a counter and stores the value in `localStorage`.

Optional audio:

- Store `siuu.mp3` in `public/audio/`
- Play the sound on button press if available
- Keep the feature usable if audio is missing

### Quote Generator

Show a random Ronaldo quote on button click.

Initial quotes:

- "Your love makes me strong."
- "Talent without working hard is nothing."
- "Dreams are not what you see in your sleep."

### Career Timeline

Create clickable club badges or timeline nodes. Hover should show years. Click should open a detail modal.

### Records Wall

Create a grid of achievement cards. Hover or focus should reveal short explanations and context.

### Interactive Map

Highlight countries connected to Ronaldo's career:

- Portugal
- England
- Spain
- Italy
- Saudi Arabia

Clicking a country should show the relevant club, years, and titles.

## Suggested Folder Structure

```text
app/
  layout.tsx
  page.tsx
  career/
  records/
  trophies/
  world-cups/
  gallery/
  legacy/

components/
  layout/
    Navbar.tsx
    Footer.tsx
    ScrollProgress.tsx
  hero/
    Hero.tsx
    HeroBackground.tsx
  career/
    Timeline.tsx
    ClubCard.tsx
    CareerModal.tsx
  records/
    RecordCard.tsx
    Counter.tsx
    RecordsGrid.tsx
  trophies/
    TrophyCard.tsx
    TrophyGrid.tsx
  worldcup/
    WorldCupTimeline.tsx
    TournamentCard.tsx
  legacy/
    QuoteSection.tsx
    LegacyStats.tsx
    Farewell.tsx
  shared/
    SectionTitle.tsx
    AnimatedText.tsx
    FadeIn.tsx

data/
  clubs.ts
  worldCups.ts
  trophies.ts
  records.ts
  quotes.ts
  milestones.ts

public/
  images/
    hero/
    clubs/
    worldcups/
    trophies/
    gallery/
  audio/
    siuu.mp3
  icons/
```

## Data Model Guidance

Keep all content in typed static files. Example data types:

```ts
type Club = {
  id: string;
  name: string;
  country: string;
  years: string;
  goals?: number;
  assists?: number;
  trophies: string[];
  moments: string[];
  image?: string;
};

type RecordItem = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  context: string;
};

type WorldCup = {
  year: number;
  host: string;
  portugalFinish: string;
  ronaldoStats: string;
  definingMoment: string;
};
```

Use these as implementation guidance, not as final locked schemas if better structures become useful during development.

## Accessibility Requirements

- All interactive cards must be keyboard reachable.
- Modals must support escape-to-close and focus management.
- Images must include useful `alt` text.
- Text must maintain readable contrast against image backgrounds.
- Animations should respect reduced-motion preferences.

## Performance Requirements

- Use optimized images through Next.js `Image` where possible.
- Avoid heavy animation on every scroll frame.
- Keep Framer Motion effects focused on entry, reveal, and subtle transforms.
- Lazy-load modal-heavy or image-heavy content if needed.
- Ensure mobile performance remains smooth.

## Implementation Phases

### Phase 1: Foundation

- Scaffold the Next.js app.
- Configure Tailwind and global styles.
- Install animation, UI, icon, and smooth-scroll dependencies.
- Add the basic folder structure.
- Define fonts, colors, spacing, and base layout.

### Phase 2: Static Content

- Create typed data files for clubs, records, trophies, world cups, quotes, and milestones.
- Add placeholder image paths and optional audio paths.
- Make sure all UI sections consume data from these files.

### Phase 3: Homepage Sections

- Build hero, origin chapter, career timeline, records, trophy room, iconic moments, World Cup timeline, legacy, and footer.
- Ensure each section works responsively before adding advanced motion.

### Phase 4: Interactions

- Add modals for club and iconic moment details.
- Add SIUU counter with `localStorage`.
- Add quote generator.
- Add interactive map or country-career selector.

### Phase 5: Motion and Polish

- Add Lenis smooth scrolling.
- Add Framer Motion reveal animations.
- Add animated counters.
- Add subtle parallax and text reveal effects.
- Review the whole page for pacing, readability, and mobile polish.

### Phase 6: Verification and Deployment

- Run lint and build checks.
- Test all interactive features.
- Verify mobile and desktop rendering.
- Deploy to Vercel.

## Test Plan

- Run `npm run lint`.
- Run `npm run build`.
- Test homepage sections at mobile, tablet, and desktop widths.
- Verify navigation anchors scroll to the correct sections.
- Verify club timeline opens and closes modals correctly.
- Verify iconic moment cards open and close modals correctly.
- Verify animated counters trigger only when visible.
- Verify SIUU counter persists after page refresh.
- Verify quote generator changes displayed quotes.
- Verify missing audio does not break the SIUU counter.
- Verify reduced-motion settings do not make the site unusable.

## Acceptance Criteria

- The site opens with a cinematic Ronaldo-focused first viewport.
- The homepage tells a clear chapter-based story from Madeira to legacy.
- All major sections are responsive and readable.
- Interactive elements work with mouse and keyboard.
- Static data files drive the content.
- No backend or database is required.
- The project builds successfully and is ready for Vercel deployment.

## Assumptions

- The current workspace is empty or effectively unscaffolded.
- The initial release will prioritize a single long-scroll homepage.
- Supporting pages are optional and can be added after the homepage is complete.
- Placeholder assets are acceptable until final image and audio files are provided.
- The implementation should avoid copyrighted media unless the user supplies licensed assets.
