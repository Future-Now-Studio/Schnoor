# Design System Reboot — Schnoor Rechtsanwalt Website

**Date:** 2026-03-16
**Status:** Approved
**Approach:** B — Design System Reboot (systematic component overhaul, keep structure/colors/fonts)

## Context

Philipp Schnoor is a Hamburg-based lawyer (Rechtsanwalt & Strafverteidiger) targeting higher-value mandates in Mietrecht and Strafrecht. The brand must convey seriousness without coldness, differentiate from 1,200+ Hamburg lawyers, and feel maritime/premium. Colors from the Brandbook are strict: Navy (#203b5b), Beige/Sand (#dbc5b6), Steel Blue (#6380a2), Medium Blue (#164b7b), Gray (#b4b4b4), White (#ffffff).

The current site works structurally but uses generic animation patterns, inconsistent icons, and over-decorated card components that feel template-like rather than premium.

## 1. Animation System

### Current State
- Everything uses the same `fadeInUp` scroll reveal
- Marquee stats feel like ad banners
- `goldShimmer` on labels is too flashy for a law firm
- Rotating conic-gradient borders on ServiceCards are over-engineered

### Changes

**Global easing:** Replace ALL easing functions — both `ease` (in `$transition-fast`, `$transition-base`) and `cubic-bezier(0.16, 1, 0.3, 1)` (in `$transition-slow`) — with a single unified curve: `cubic-bezier(0.22, 1, 0.36, 1)`. Update the variables in `_variables.scss` accordingly. Max duration 0.8s.

**Scroll reveal rework:**
- Keep the `v-scroll-reveal` directive and Intersection Observer system
- Change default animation from `translateY(50px)` to `translateY(24px) + scale(0.98) + opacity: 0`
- Transition: `0.7s cubic-bezier(0.22, 1, 0.36, 1)`
- Stagger delay: keep 0.1s per child (via `data-stagger`)
- Remove `sr--tilt-up` variant (unprofessional tilt)
- Remove `sr--clip-up` variant (too dramatic)
- Keep: `sr--fade-up` (reworked), `sr--fade-left`, `sr--fade-right`, `sr--scale`, `sr--blur`

**Hero reveal:** Staggered sequence:
1. Title: clip-path wipe from `inset(0 100% 0 0)` to `inset(0)` over 0.8s. Fallback for `prefers-reduced-motion`: simple opacity fade.
2. Gold bar (`.hero__gold-bar`): `scaleX(0)` → `scaleX(1)` at 150ms delay
3. Subtitle: `opacity + translateY(12px)` at 300ms delay
4. CTAs: `opacity + translateY(12px)` at 500ms delay
5. Scroll indicator: `opacity` at 900ms delay

**Section headers:** Decorative line grows from center outward (`scaleX(0)` to `scaleX(1)`, `transform-origin: center`), then text fades in at 200ms delay.

**Stats section:** Remove marquee layout. Convert to a fixed 4-column grid (2-col on mobile). Write new count-up animation logic using `requestAnimationFrame` with ease-out cubic easing, triggered by Intersection Observer on scroll-in. Each stat counts from 0 to its target value over 1.5s with 150ms stagger between stats.

**Remove:**
- `goldShimmer` keyframe
- `splashPulse` keyframe (simplify splash)
- `splashProgress` keyframe (remove progress bar)
- `stats-marquee` keyframe
- `borderRotate` keyframe
- `lineFloat` keyframe (hero accent lines)

**Keep:**
- `scrollPulse` for scroll indicator
- Parallax on hero (working well)
- Page transitions (but simplify — see section 7)

### Files affected
- `assets/scss/main.scss` — keyframes, scroll reveal classes, section header styles
- `components/sections/HeroSection.vue` — hero reveal sequence
- `components/sections/StatsCounter.vue` — remove marquee, use grid
- `composables/useScrollReveal.ts` — update default animation values
- `plugins/scroll-reveal.ts` — sync with composable changes

## 2. Icon System

### Current State
- All icons are hand-coded inline SVGs with varying stroke widths (1.5-2.5px)
- Inconsistent viewBox sizes and visual weights
- Hard to maintain, no visual consistency

### Changes

**Install Phosphor Icons:**
```bash
npm install @phosphor-icons/vue
```

**Nuxt 3 SSR config (required):** Add to `nuxt.config.ts`:
```ts
build: {
  transpile: ['@phosphor-icons/vue']
}
```

**Import pattern (tree-shaking safe):** Always import individual icons, never the full package:
```vue
<script setup lang="ts">
import { PhShield } from '@phosphor-icons/vue'
</script>
<template>
  <PhShield :size="24" weight="light" />
</template>
```

**Standards:**
- Weight: `light` everywhere (1px stroke — elegant, maritime feel)
- Sizes: 20px (buttons/inline), 24px (standard), 32px (card icons), 48px (feature highlights)
- Color: Always `currentColor` (inherited)
- Always import per-component, never register globally (bundle size)

**Icon mapping:**
| Current | Phosphor replacement |
|---------|---------------------|
| Shield SVG (Strafrecht) | `PhShieldChevron` |
| House SVG (Mietrecht) | `PhBuildings` |
| Car SVG (Verkehrsrecht) | `PhCar` |
| Phone | `PhPhone` |
| Email | `PhEnvelope` |
| Location | `PhMapPin` |
| Clock | `PhClock` |
| Check marks | `PhCheck` |
| Chevron (accordion) | `PhCaretDown` |
| Stars (reviews) | `PhStar` weight="fill" |
| WhatsApp | Keep custom SVG (brand icon) |
| Arrow right | `PhArrowRight` |
| User/Avatar | `PhUser` |
| Scale/Justice | `PhScales` |
| Handshake | `PhHandshake` |
| Chat/Message | `PhChatText` |
| Certificate | `PhCertificate` |

**Vorteile icons (index.vue advantages):**
- Persönliche Betreuung → `PhUserFocus` (32px)
- Schnelle Reaktionszeiten → `PhLightning` (32px)
- Transparente Kommunikation → `PhChatText` (32px)
- Erfahrung → `PhCertificate` (32px)

### Files affected
- `package.json` — add dependency
- `nuxt.config.ts` — add `build.transpile: ['@phosphor-icons/vue']`
- All components with inline SVG icons
- `pages/index.vue` — service icons, advantage icons
- `pages/mietrecht.vue`, `strafrecht.vue`, `verkehrsrecht.vue` — leistung icons

## 3. Card Components

### ServiceCard.vue (Rechtsgebiete on homepage)

**Remove:**
- `@property --border-angle` and rotating conic-gradient border
- Watermark numbers (01, 02, 03)
- Icon ring with outer glow
- `borderRotate` animation

**New design:**
```
┌─────────────────────────────┐
│  ┌──┐                      │
│  │🏛│  Icon in subtle       │
│  └──┘  circle bg            │
│                             │
│  Mietrecht                  │  ← Playfair Display, 1.3rem
│                             │
│  Kurze Beschreibung des     │  ← Inter, 0.95rem, $color-text-light
│  Rechtsgebiets...           │
│                             │
│  Mehr erfahren →            │  ← $color-accent, 0.85rem
└─────────────────────────────┘
```

- Background: `$color-white`
- Border: `1px solid rgba($color-primary-light, 0.12)`
- Border-radius: `$radius-lg` (16px)
- Padding: `2rem`
- Icon container: `56px` circle, `background: rgba($color-accent, 0.08)`
- Hover: border-color transitions to `$color-accent`, `box-shadow: $shadow-md`
- No transform/lift on hover — just border + shadow change

### LeistungCard.vue (Unterseiten)

**Remove:**
- Watermark number
- Icon ring with animated border
- Divider with dot
- Bottom accent bar

**New design:**
- Clean vertical card, white background
- Icon (32px Phosphor) in accent-tinted circle at top
- Title below icon
- Short text
- Thin bottom border (`2px solid $color-accent`) — appears on hover via `scaleX(0)` → `scaleX(1)`
- Hover: subtle shadow increase only

### TestimonialCard.vue

**Changes:**
- Stars: Use `$color-accent` instead of `#f5a623`
- Stars size: 16px (from 18-22px) — more subtle
- Add large typographic quote mark: Playfair Display `"`, `4rem`, `rgba($color-accent, 0.12)`, positioned top-left
- Author section: slightly smaller font, initials avatar keeps same style

### Vorteile Section (index.vue)

**Remove:**
- Abstract SVG `visual` property from advantage items
- `why__card-visual` div

**New design per card:**
- Large Phosphor icon (48px) in a `72px` circle with `rgba($color-accent, 0.08)` background
- Title in Playfair Display
- 2-3 line description in Inter
- No decorative noise

### ContactForm.vue

**Changes:**
- Input border: `1px solid rgba($color-primary-light, 0.2)` (from current)
- Focus state: `border-color: $color-accent` + `box-shadow: 0 0 0 3px rgba($color-accent, 0.1)`
- Submit button: Use `btn--accent` variant (the renamed btn--gold)
- "Wie sind Sie auf uns aufmerksam geworden?" field: move to bottom, mark as optional

### GoogleReviews.vue

**Changes:**
- Replace hardcoded star color `fill="#f5a623"` with `$color-accent` (use CSS variable or inline style with SCSS variable)
- Replace inline star SVGs with `PhStar` (weight="fill", size 16px)

### CaseCard.vue

**Changes:**
- Replace inline checkmark SVG with `PhCheck` (24px, light)
- Replace inline arrow SVG with `PhArrowRight` (20px, light)
- Replace hardcoded green colors (`#25d366`, `#1a8d45`) with a subtle brand-aligned success indicator: `$color-accent` background with `$color-primary` text

### FaqAccordion.vue

**Changes:**
- Chevron: Replace inline SVG with `PhCaretDown` (20px, light)
- Active state: chevron color → `$color-accent`
- Border between items: `rgba($color-primary-light, 0.1)`

### Files affected
- `components/ui/ServiceCard.vue` — complete rework
- `components/ui/LeistungCard.vue` — simplification
- `components/ui/TestimonialCard.vue` — star color, quote mark
- `components/ui/ContactForm.vue` — focus states, field order
- `components/ui/FaqAccordion.vue` — icon swap, colors
- `pages/index.vue` — advantages section template

## 4. Header & Navigation

### AppHeader.vue

**Changes:**
- Logo gap: `0.75rem` → `1rem`
- Nav link font-weight: `500` → `400`
- Nav link letter-spacing: reduce if currently elevated
- Hover underline: Change `transform-origin` from `left` to `center` (expands from middle)
- Scrolled state background: Smoother transition timing (`0.4s` instead of `0.3s`)
- Mobile menu links: `font-size: 1.5rem`, increased `gap` between items

### Files affected
- `components/AppHeader.vue`

## 5. Sections & Layout

### Wave dividers
- **Remove** all SVG wave dividers from HeroSection and PageHero
- Replace with CSS gradient fade: `linear-gradient(to bottom, $color-primary, transparent)` as a pseudo-element on the next section

### Section backgrounds
- `body` background stays `$color-white` (preserves card contrast)
- `.section` default: no background (inherits white)
- `.section--light`: `$color-off-white` — use for alternating sections to break visual monotony
- Dark sections (`section--dark`): keep `$color-primary` bg, add subtle top/bottom gradient bleed (8px) via pseudo-elements into adjacent sections

### Section padding
- Reduce from `clamp(5rem, 10vw, 9rem)` to `clamp(4rem, 8vw, 7rem)`

### Container max-width
- `1240px` → `1200px`

### Section header pattern
- Remove gold shimmer animation from labels
- Label style: `color: $color-accent`, `font-size: 0.75rem`, `letter-spacing: 3px` (reduced from current 4px for a tighter feel), `text-transform: uppercase`, `font-weight: 600`
- Decorative line below label: `width: 48px`, `height: 1px`, `background: $color-accent`, animated `scaleX` on reveal

### Files affected
- `assets/scss/main.scss` — section padding, container, section header styles
- `assets/scss/_variables.scss` — update `$section-padding`, `$container-max-width`
- `components/sections/HeroSection.vue` — remove wave SVG
- `components/sections/PageHero.vue` — remove wave pattern
- `pages/index.vue` — section header markup if needed

## 6. Buttons

### Simplification
Keep only 3 variants (from current 5+):

**`.btn--primary`:**
- `background: $color-primary`, `color: white`
- `border-radius: 4px` (from 8px)
- `padding: 0.875rem 2rem`
- Hover: `background: $color-primary-dark`
- No transform/lift on hover

**`.btn--outline`:**
- `border: 1px solid $color-primary`, `background: transparent`, `color: $color-primary`
- Hover: `background: $color-primary`, `color: white`

**`.btn--accent` (CTA):**
- `background: $color-accent`, `color: $color-primary`
- Hover: `background: $color-accent-dark`
- Used ONLY for primary CTA (Erstberatung vereinbaren)

**Migration:**
- `.btn--gold` → rename to `.btn--accent` (same styles, new name). Update all references: `index.vue` hero CTA.
- `.btn--white` → replace with `.btn--outline` on dark backgrounds. The hero phone button (`btn--white btn--lg`) becomes `btn--outline` (which on dark bg needs a `btn--outline-light` variant: white border/text, hover fill white with dark text).
- `.btn--lg` → remove class. All buttons use the standard padding `0.875rem 2rem`. Update all references.

**Add `.btn--outline-light`** (for dark backgrounds):
- `border: 1px solid rgba(white, 0.6)`, `color: white`
- Hover: `background: white`, `color: $color-primary`

### Files affected
- `assets/scss/main.scss` — button styles

## 7. Splash Screen & Page Transitions

### Splash (app.vue)
- Use `Logo.png` image instead of "PS" text
- Remove pulsing animation
- Remove progress bar
- Simple sequence: Logo fades in (0.3s), holds for 400ms, entire splash fades out (0.3s)
- Total splash time: ~1s (from ~1.3s)

### Page transitions (main.scss)
- Remove `blur(4px)` from enter/leave states
- Keep only `opacity` + `translateY(8px)` with 0.3s duration
- Mode stays `out-in`

### Files affected
- `app.vue` — splash simplification
- `assets/scss/main.scss` — page transition CSS

## 8. Typography Fine-tuning

### Changes (in _variables.scss and main.scss)
- H1 `letter-spacing`: `-0.02em` → `-0.03em`
- Body `line-height`: `1.7` → `1.65`
- Section label: Remove `goldShimmer`, use static `$color-accent`

### Files affected
- `assets/scss/_variables.scss`
- `assets/scss/main.scss`

## 9. Footer

### AppFooter.vue

**Changes:**
- Divider lines: `rgba(white, 0.15)` → `rgba(white, 0.08)`
- Link hover color: change to `$color-accent` (from white)
- Copyright font-size: `0.75rem`
- Reduce overall padding slightly

### Files affected
- `components/AppFooter.vue`

## 10. Hero Accent Lines

### HeroSection.vue
- Remove floating accent lines (`lineFloat` animation) entirely. The hero is strong enough with the parallax image, title reveal, and gold bar. Less visual noise = more premium.
- Remove the `waveFill` prop from the component interface (becomes dead code after wave removal).

### Files affected
- `components/sections/HeroSection.vue`

---

## Files Summary (all affected)

| File | Changes |
|------|---------|
| `package.json` | Add `@phosphor-icons/vue` |
| `nuxt.config.ts` | Phosphor transpile if needed |
| `assets/scss/_variables.scss` | Section padding, container width, letter-spacing |
| `assets/scss/main.scss` | Keyframes cleanup, scroll-reveal rework, buttons, section headers, page transitions, typography |
| `app.vue` | Splash screen simplification |
| `components/AppHeader.vue` | Logo gap, nav weight, hover underline origin |
| `components/AppFooter.vue` | Dividers, link hover, copyright size |
| `components/sections/HeroSection.vue` | Remove waves, accent lines; staggered reveal |
| `components/sections/StatsCounter.vue` | Remove marquee, use grid |
| `components/sections/GoogleReviews.vue` | Star color update |
| `components/sections/PageHero.vue` | Remove wave pattern |
| `components/sections/CtaSection.vue` | Button variant update |
| `components/ui/ServiceCard.vue` | Complete redesign (simplified) |
| `components/ui/LeistungCard.vue` | Simplification |
| `components/ui/TestimonialCard.vue` | Star color, quote mark |
| `components/ui/ContactForm.vue` | Focus states, field reorder |
| `components/ui/FaqAccordion.vue` | Icon swap, colors |
| `components/WhatsAppButton.vue` | Minor style alignment |
| `composables/useScrollReveal.ts` | Update animation defaults |
| `plugins/scroll-reveal.ts` | Sync with composable |
| `pages/index.vue` | Advantages section, section headers, icons |
| `pages/mietrecht.vue` | Leistung icons, section styling |
| `pages/strafrecht.vue` | Leistung icons, section styling |
| `pages/verkehrsrecht.vue` | Leistung icons, section styling |
| `pages/kontakt.vue` | Form styling alignment |
| `pages/impressum.vue` | Verify no breaking button/section class usage (audit only) |
| `pages/datenschutz.vue` | Verify no breaking button/section class usage (audit only) |
| `components/ui/CaseCard.vue` | Replace inline SVG icons with Phosphor; replace hardcoded green (#25d366) with brand colors |

## Consolidation

- **Scroll reveal duplication:** `composables/useScrollReveal.ts` and `plugins/scroll-reveal.ts` contain near-identical logic. Consolidate into the plugin only (it registers the directive globally). Remove the composable file.
- **`SeoMeta.vue`**: Confirmed out of scope — no visual changes needed.

## Non-Goals
- No structural page changes (routes, sections order stay the same)
- No content/text changes
- No new pages or components
- Colors stay exactly as defined in `_variables.scss`
- Fonts stay (Playfair Display + Inter)
- No SEO/meta changes
- No functionality changes (form, WhatsApp, scroll reveal triggers)
