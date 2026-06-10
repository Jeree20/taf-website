# Tumaini African Foundation — Website

**Next.js 14 · TypeScript · Tailwind CSS · App Router**

A production-quality homepage for Tumaini African Foundation Community Centre, Kayole Soweto, Nairobi.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```

---

## Project Structure

```
taf-website/
├── app/
│   ├── globals.css          # Tailwind base + custom utilities
│   ├── layout.tsx           # Root layout with metadata + skip-to-content
│   └── page.tsx             # Homepage — composes all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Fixed responsive nav with mobile drawer
│   │   └── Footer.tsx       # Four-column footer with contacts + socials
│   ├── sections/
│   │   ├── HeroSection.tsx       # Full-viewport hero with counters + floating badge
│   │   ├── AboutStrip.tsx        # Sky-blue info strip (CBO status, phone, location)
│   │   ├── MissionSection.tsx    # Mission + three pillars + testimonial blockquote
│   │   ├── StatsSection.tsx      # Animated stats against maroon bg
│   │   ├── ProgramsSection.tsx   # Football Academy featured card + 6 program cards
│   │   ├── FootballSpotlight.tsx # Full-width academy deep-dive with benefits
│   │   ├── OutreachSection.tsx   # 4-column outreach cards (feeding, library, etc.)
│   │   ├── LibraryHighlight.tsx  # Sky section with library stats
│   │   ├── TestimonialsSection.tsx # 3 community testimonials
│   │   ├── PartnersSection.tsx   # Partner logo pills
│   │   └── CTASection.tsx        # Gold CTA banner with M-Pesa details
│   └── ui/
│       ├── TAFLogo.tsx       # SVG logo mark matching real TAF brand colours
│       ├── Button.tsx        # Multi-variant button/link component
│       ├── SectionHeader.tsx # Reusable eyebrow + title + subtitle
│       ├── AnimatedCounter.tsx  # Scroll-triggered counter animation (client)
│       └── FadeUp.tsx        # Scroll-triggered fade-up wrapper (client)
└── tailwind.config.ts        # TAF brand colours + custom fonts + animations
```

---

## Brand Colours

Extracted from the official TAF logo:

| Token | Hex | Use |
|---|---|---|
| `maroon-deep` | `#3D0A0A` | Primary dark backgrounds |
| `maroon` | `#8B1A1A` | Brand accent, stats bg |
| `sky-taf` | `#3AABE0` | Secondary accent, borders |
| `gold-taf` | `#F5C518` | CTA buttons, accents |
| `cream` | `#FAF7F2` | Light section backgrounds |

---

## Accessibility

- WCAG 2.1 AA target throughout
- Skip-to-content link for keyboard users
- All interactive elements have `focus-visible` ring styles
- `aria-label`, `aria-labelledby`, `role` attributes on all sections
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<figure>`, `<blockquote>`, `<address>`, `<dl>`, `<dt>`, `<dd>`
- Animated counters expose static `aria-label` values
- Mobile nav uses `aria-expanded` and `aria-controls`
- External links include `rel="noopener noreferrer"` and tab-target labels

---

## Deployment

**Vercel (recommended):**
```bash
npx vercel --prod
```

**Self-hosted:**
```bash
npm run build
npm run start
```

Add your domain, update M-Pesa Paybill details in `CTASection.tsx` and `Footer.tsx`, and add real image assets in `/public` when available.
