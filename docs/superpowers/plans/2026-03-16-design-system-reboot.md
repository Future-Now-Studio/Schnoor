# Design System Reboot — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Systematically overhaul the Schnoor law firm website's design system — animations, icons, cards, layout, buttons, typography — to feel premium and differentiated rather than template-like, while keeping all existing colors, fonts, structure, and functionality.

**Architecture:** Bottom-up approach: start with design tokens and global styles (_variables.scss, main.scss), then update shared infrastructure (scroll-reveal, Phosphor icons), then individual components, then pages that reference them. Each task produces a buildable state.

**Tech Stack:** Nuxt 3.16, Vue 3 Composition API, SCSS with `@use`, Phosphor Icons Vue, SSG prerendering

**Spec:** `docs/superpowers/specs/2026-03-16-design-system-reboot.md`

---

## Chunk 1: Foundation — Design Tokens, Global Styles, Infrastructure

### Task 1: Install Phosphor Icons + Nuxt Config

**Files:**
- Modify: `website/package.json`
- Modify: `website/nuxt.config.ts`

- [ ] **Step 1: Install Phosphor Icons**

Run:
```bash
cd /Users/timo/Desktop/A\ FNS\ Projekte/Schnoor/website && npm install @phosphor-icons/vue
```

- [ ] **Step 2: Add build.transpile to nuxt.config.ts**

In `website/nuxt.config.ts`, add `build` key after the `routeRules` block:

```ts
build: {
  transpile: ['@phosphor-icons/vue'],
},
```

- [ ] **Step 3: Verify build passes**

Run:
```bash
cd /Users/timo/Desktop/A\ FNS\ Projekte/Schnoor/website && npx nuxi build 2>&1 | tail -20
```

Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json nuxt.config.ts
git commit -m "chore: install @phosphor-icons/vue with SSR transpile config"
```

---

### Task 2: Update Design Tokens (_variables.scss)

**Files:**
- Modify: `website/assets/scss/_variables.scss`

- [ ] **Step 1: Update variables**

Apply these changes to `_variables.scss`:

```scss
// Spacing — reduce section padding, tighten container
$section-padding: clamp(4rem, 8vw, 7rem);   // was clamp(5rem, 10vw, 9rem)
$container-width: 1200px;                     // was 1240px

// Transitions — unified easing curve
$transition-fast: 0.2s cubic-bezier(0.22, 1, 0.36, 1);   // was 0.2s ease
$transition-base: 0.3s cubic-bezier(0.22, 1, 0.36, 1);   // was 0.3s ease
$transition-slow: 0.6s cubic-bezier(0.22, 1, 0.36, 1);   // was 0.6s cubic-bezier(0.16, 1, 0.3, 1)
```

All other variables stay unchanged.

- [ ] **Step 2: Commit**

```bash
git add website/assets/scss/_variables.scss
git commit -m "style: update design tokens — tighter spacing, unified easing"
```

---

### Task 3: Overhaul main.scss — Typography, Keyframes, Scroll Reveal, Buttons, Sections, Splash, Transitions

**Files:**
- Modify: `website/assets/scss/main.scss`

This is the largest single file change. Apply all global style updates at once since they're interdependent.

- [ ] **Step 1: Typography updates**

In `main.scss`, change:
- `body` line-height: `1.7` → `1.65`
- `h1` letter-spacing: `-0.02em` → `-0.03em`

- [ ] **Step 2: Section label rework**

Replace the `.section-label` block (lines 123-146) with:

```scss
.section-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: $color-accent;
  margin-bottom: 1.2rem;
}
```

Remove the `&::before` and `&::after` pseudo-elements (decorative lines beside label).

- [ ] **Step 3: Gold line rework**

Replace the `.gold-line` block (lines 148-155) with:

```scss
.gold-line {
  width: 48px;
  height: 1px;
  background: $color-accent;
  margin: 0 auto 1.5rem;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);

  .sr--visible & {
    transform: scaleX(1);
  }
}
```

- [ ] **Step 4: Button rework**

Replace the entire `.btn` block (lines 157-248) with:

```scss
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.875rem 2rem;
  font-family: $font-body;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: $radius-sm;
  cursor: pointer;
  transition: all $transition-base;
  text-decoration: none;

  &--primary {
    background-color: $color-primary;
    color: $color-white;
    border-color: $color-primary;

    &:hover {
      background-color: $color-primary-dark;
      border-color: $color-primary-dark;
      color: $color-white;
    }
  }

  &--outline {
    background-color: transparent;
    color: $color-primary;
    border-color: $color-primary;

    &:hover {
      background-color: $color-primary;
      color: $color-white;
    }
  }

  &--outline-light {
    background-color: transparent;
    color: $color-white;
    border-color: rgba($color-white, 0.6);

    &:hover {
      background-color: $color-white;
      color: $color-primary;
    }
  }

  &--accent {
    background-color: $color-accent;
    color: $color-primary;
    border-color: $color-accent;
    font-weight: 700;

    &:hover {
      background-color: $color-accent-dark;
      border-color: $color-accent-dark;
      color: $color-primary;
    }
  }
}
```

This removes `btn--gold`, `btn--white`, `btn--lg`. Adds `btn--outline-light`. No more `transform: translateY` on hover. `border` from `2px` to `1px`.

- [ ] **Step 5: Remove deprecated keyframes and effects**

Remove these blocks entirely:
- `@keyframes goldShimmer` (lines 308-311)
- `.shimmer-gold` class (lines 319-332)
- The `.wave-divider` class (lines 273-284) — waves are removed

- [ ] **Step 6: Scroll reveal rework**

Replace the entire `.sr` block (lines 337-402) with:

```scss
.sr {
  opacity: 0;
  transition:
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.7s cubic-bezier(0.22, 1, 0.36, 1);

  &--fade-up {
    transform: translateY(24px) scale(0.98);
  }

  &--fade-down {
    transform: translateY(-24px) scale(0.98);
  }

  &--fade-left {
    transform: translateX(40px);
  }

  &--fade-right {
    transform: translateX(-40px);
  }

  &--scale {
    transform: scale(0.95);
  }

  &--blur {
    transform: translateY(20px);
    filter: blur(6px);
  }

  &--visible {
    opacity: 1;
    transform: translateY(0) translateX(0) scale(1);
    filter: blur(0);
  }
}
```

Removed: `sr--tilt-up`, `sr--clip-up`. Reduced translateY from 50px to 24px. Added `scale(0.98)` to fade-up.

- [ ] **Step 7: Page transitions rework**

Replace the page transition block (lines 407-425) with:

```scss
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
```

Removed: `filter: blur(4px)`, removed filter from transition.

- [ ] **Step 8: Splash screen rework**

Replace the entire `.splash` block (lines 430-492) with:

```scss
.splash {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color-primary;

  &__logo {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &--hidden {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }
}
```

Removed: `splashPulse` animation, `__bar` element styles, `splashProgress` keyframe.

- [ ] **Step 9: Reduced motion update**

Replace the reduced-motion block (lines 494-519) with:

```scss
@media (prefers-reduced-motion: reduce) {
  .sr {
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
    transition: none !important;
  }

  .page-enter-active,
  .page-leave-active {
    transition: none !important;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 1 !important;
    transform: none !important;
  }

  .gold-line {
    transform: scaleX(1) !important;
    transition: none !important;
  }
}
```

- [ ] **Step 10: Verify build**

```bash
cd /Users/timo/Desktop/A\ FNS\ Projekte/Schnoor/website && npx nuxi build 2>&1 | tail -20
```

- [ ] **Step 11: Commit**

```bash
git add website/assets/scss/main.scss
git commit -m "style: overhaul global styles — typography, buttons, scroll-reveal, splash, transitions"
```

---

### Task 4: Consolidate Scroll Reveal + Update Plugin

**Files:**
- Delete: `website/composables/useScrollReveal.ts`
- Modify: `website/plugins/scroll-reveal.ts`

- [ ] **Step 1: Update scroll-reveal plugin**

Replace the entire content of `website/plugins/scroll-reveal.ts` with:

```ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-reveal', {
    getSSRProps() {
      return {}
    },

    mounted(el: HTMLElement, binding: { value?: string }) {
      if (typeof window === 'undefined') return

      const animation = binding.value || 'fade-up'
      el.classList.add('sr', `sr--${animation}`)

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (el.dataset.stagger !== undefined) {
                const children = el.querySelectorAll(':scope > *')
                children.forEach((child, i) => {
                  const htmlChild = child as HTMLElement
                  htmlChild.classList.add('sr', 'sr--fade-up')
                  htmlChild.style.transitionDelay = `${i * 0.1}s`
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                      htmlChild.classList.add('sr--visible')
                    })
                  })
                })
              }

              requestAnimationFrame(() => {
                el.classList.add('sr--visible')
              })
              observer.unobserve(el)
            }
          })
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -50px 0px',
        }
      )

      observer.observe(el)
    },
  })
})
```

- [ ] **Step 2: Delete the composable**

```bash
rm /Users/timo/Desktop/A\ FNS\ Projekte/Schnoor/website/composables/useScrollReveal.ts
```

- [ ] **Step 3: Check if composable is imported anywhere**

Search for `useScrollReveal` in the codebase. If found, remove those imports (the plugin registers the directive globally).

- [ ] **Step 4: Verify build**

```bash
cd /Users/timo/Desktop/A\ FNS\ Projekte/Schnoor/website && npx nuxi build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
git add website/plugins/scroll-reveal.ts
git rm website/composables/useScrollReveal.ts
git commit -m "refactor: consolidate scroll-reveal into plugin, remove duplicate composable"
```

---

### Task 5: Splash Screen Simplification (app.vue)

**Files:**
- Modify: `website/app.vue`

- [ ] **Step 1: Update app.vue**

Replace the entire content of `website/app.vue` with:

```vue
<template>
  <div>
    <div v-if="showSplash" class="splash" :class="{ 'splash--hidden': hideSplash }">
      <div class="splash__logo">
        <img src="~/assets/images/Logo.png" alt="Kanzlei Schnoor" />
      </div>
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const showSplash = ref(true)
const hideSplash = ref(false)

onMounted(() => {
  setTimeout(() => {
    hideSplash.value = true
  }, 700)

  setTimeout(() => {
    showSplash.value = false
  }, 1000)
})
</script>
```

Changes: Removed `splash__bar` div. Reduced timings (700ms fade-start, 1000ms removal).

- [ ] **Step 2: Commit**

```bash
git add website/app.vue
git commit -m "style: simplify splash screen — remove progress bar, faster fade"
```

---

## Chunk 2: Section Components — Hero, Stats, PageHero, CTA

### Task 6: HeroSection — Remove Waves, Accent Lines, Add Staggered Reveal

**Files:**
- Modify: `website/components/sections/HeroSection.vue`

- [ ] **Step 1: Update template**

Replace the entire `<template>` with:

```vue
<template>
  <section class="hero" :class="variant ? `hero--${variant}` : ''">
    <div class="hero__bg">
      <div
        ref="parallaxImage"
        class="hero__image"
        :style="backgroundImage ? { backgroundImage: `url(${backgroundImage})`, transform: `translate3d(0, ${parallaxOffset}px, 0)` } : {}"
      ></div>
      <div class="hero__overlay"></div>
      <div class="hero__grain"></div>
    </div>

    <div class="container hero__content">
      <div class="hero__text">
        <span v-if="label" class="hero__label">{{ label }}</span>
        <h1 class="hero__title">
          <slot name="title">{{ title }}</slot>
        </h1>
        <div class="hero__gold-bar"></div>
        <p class="hero__subtitle">{{ subtitle }}</p>
        <div class="hero__actions" v-if="$slots.actions">
          <slot name="actions" />
        </div>
      </div>
    </div>

    <div v-if="variant === 'home'" class="hero__scroll">
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>
```

Removed: `hero__accents` (accent lines), `hero__wave` (wave SVG).

- [ ] **Step 2: Update script — remove waveFill prop**

Replace the `<script setup>` with:

```vue
<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  label?: string
  variant?: 'home' | 'page'
  backgroundImage?: string
}>()

const parallaxImage = ref<HTMLElement>()
const parallaxOffset = ref(0)

function onScroll() {
  if (typeof window === 'undefined') return
  parallaxOffset.value = window.scrollY * 0.4
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
```

Removed: `waveFill` prop.

- [ ] **Step 3: Update styles**

Replace the entire `<style>` block. Key changes:
- Remove `&__accents`, `&__accent-line` blocks
- Remove `&__wave` block
- Replace `fadeInUp` usage with staggered clip-path/opacity reveal
- Remove `lineFloat` keyframe
- Keep `scrollPulse` keyframe
- Update all easing to `cubic-bezier(0.22, 1, 0.36, 1)`
- Hero label: stagger animation delay 0s
- Hero title: clip-path reveal at 0.1s delay
- Gold bar: scaleX reveal at 0.15s delay
- Subtitle: opacity at 0.3s delay
- Actions: opacity at 0.5s delay
- Scroll indicator: opacity at 0.9s delay

Full replacement style block:

```scss
<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 55vh;
  padding: calc(7rem + 80px) 0 6rem;
  overflow: hidden;

  &--home {
    min-height: 100vh;
    padding-bottom: 8rem;

    @media (max-width: $bp-md) {
      min-height: 90vh;
    }

    .hero__title {
      font-size: clamp(3rem, 7vw, 5.5rem);
      font-weight: 900;
    }
  }

  &--page {
    min-height: 50vh;
  }

  &__bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  &__image {
    position: absolute;
    inset: -20px;
    bottom: -80px;
    background-size: cover;
    background-position: center 30%;
    background-repeat: no-repeat;
    background-color: $color-primary;
    will-change: transform;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg,
        rgba($color-primary-dark, 0.7) 0%,
        rgba($color-primary, 0.6) 40%,
        rgba($color-primary-dark, 0.85) 100%
      ),
      linear-gradient(135deg,
        rgba($color-accent, 0.08) 0%,
        transparent 50%
      );
  }

  &__grain {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
    background-size: 128px;
  }

  &__content {
    position: relative;
    z-index: 3;
    width: 100%;
  }

  &__text {
    max-width: 780px;
  }

  &__label {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: $color-accent;
    margin-bottom: 2rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid rgba($color-accent, 0.4);
    opacity: 0;
    animation: heroFadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
  }

  &__title {
    color: $color-white;
    margin-bottom: 0;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.08;
    clip-path: inset(0 100% 0 0);
    animation: heroClipReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;

    :deep(.highlight) {
      color: $color-accent;
      display: block;
    }

    :deep(.highlight-gold) {
      background: linear-gradient(135deg, $color-accent, $color-accent-light, $color-accent);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__gold-bar {
    width: 70px;
    height: 4px;
    background: linear-gradient(90deg, $color-accent, $color-accent-light);
    margin: 2rem 0;
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    animation: heroScaleX 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.45s forwards;
  }

  &__subtitle {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: rgba($color-white, 0.8);
    line-height: 1.8;
    max-width: 600px;
    font-weight: 300;
    opacity: 0;
    transform: translateY(12px);
    animation: heroFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.55s forwards;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 3rem;
    opacity: 0;
    transform: translateY(12px);
    animation: heroFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards;
  }

  &__scroll {
    position: absolute;
    bottom: 7rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    opacity: 0;
    animation: heroFadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) 1s forwards;
  }

  &__scroll-line {
    width: 1px;
    height: 50px;
    background: linear-gradient(180deg, $color-accent, transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }
}

@keyframes heroClipReveal {
  to {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes heroFadeIn {
  to {
    opacity: 1;
  }
}

@keyframes heroFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroScaleX {
  to {
    transform: scaleX(1);
  }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(1.2); }
}

@media (prefers-reduced-motion: reduce) {
  .hero__label,
  .hero__title,
  .hero__gold-bar,
  .hero__subtitle,
  .hero__actions,
  .hero__scroll {
    opacity: 1 !important;
    transform: none !important;
    clip-path: none !important;
    animation: none !important;
  }
}
</style>
```

- [ ] **Step 4: Update index.vue — remove wave-fill prop**

In `website/pages/index.vue`, remove `wave-fill="#f7f5f2"` from the `<SectionsHeroSection>` component call (line 8).

- [ ] **Step 5: Update index.vue — update hero button classes**

In `website/pages/index.vue`, change:
- `class="btn btn--gold btn--lg"` → `class="btn btn--accent"` (line 16)
- `class="btn btn--white btn--lg"` → `class="btn btn--outline-light"` (line 22)

- [ ] **Step 6: Verify build**

```bash
cd /Users/timo/Desktop/A\ FNS\ Projekte/Schnoor/website && npx nuxi build 2>&1 | tail -20
```

- [ ] **Step 7: Commit**

```bash
git add website/components/sections/HeroSection.vue website/pages/index.vue
git commit -m "style: hero — remove waves/accents, add staggered clip-path reveal"
```

---

### Task 7: StatsCounter — Remove Marquee, Add Count-Up Grid

**Files:**
- Modify: `website/components/sections/StatsCounter.vue`

- [ ] **Step 1: Complete rewrite**

Replace the entire file with:

```vue
<template>
  <section ref="sectionRef" class="stats" aria-label="Kanzlei in Zahlen">
    <div class="container stats__grid">
      <div
        v-for="(stat, i) in stats"
        :key="stat.label"
        class="stats__item"
        :style="{ transitionDelay: `${i * 0.15}s` }"
      >
        <span class="stats__number">
          {{ stat.prefix }}{{ animated ? stat.display : '0' }}{{ stat.suffix }}
        </span>
        <span class="stats__label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = reactive([
  { target: 500, display: '0', prefix: '', suffix: '+', label: 'Zufriedene Mandanten' },
  { target: 10, display: '0', prefix: '', suffix: '+', label: 'Jahre Erfahrung' },
  { target: 98, display: '0', prefix: '', suffix: '%', label: 'Erfolgsquote' },
  { target: 4.9, display: '0', prefix: '', suffix: '★', label: 'Google Bewertung', decimal: true },
])

const sectionRef = ref<HTMLElement>()
const animated = ref(false)

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function animateCounters() {
  if (animated.value) return
  animated.value = true

  const duration = 1500

  stats.forEach((stat, index) => {
    const startTime = performance.now() + index * 150

    function update(currentTime: number) {
      const elapsed = currentTime - startTime
      if (elapsed < 0) {
        requestAnimationFrame(update)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)
      const currentValue = easedProgress * stat.target

      if ((stat as any).decimal) {
        stat.display = currentValue.toFixed(1).replace('.', ',')
      } else {
        stat.display = Math.round(currentValue).toString()
      }

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  })
}

onMounted(() => {
  if (!sectionRef.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters()
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )

  observer.observe(sectionRef.value)
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.stats {
  background: $color-primary;
  padding: 3rem 0;

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    text-align: center;

    @media (max-width: $bp-md) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem 1.5rem;
    }
  }
}

.stats__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem 0;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: rgba($color-accent, 0.15);

    @media (max-width: $bp-md) {
      display: none;
    }
  }
}

.stats__number {
  font-family: $font-heading;
  font-size: 2.2rem;
  font-weight: 800;
  color: $color-accent-light;
  letter-spacing: -0.02em;
  line-height: 1;
}

.stats__label {
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba($color-white, 0.6);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

@media (prefers-reduced-motion: reduce) {
  .stats__number {
    // Show final values immediately
  }
}
</style>
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/timo/Desktop/A\ FNS\ Projekte/Schnoor/website && npx nuxi build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
git add website/components/sections/StatsCounter.vue
git commit -m "style: stats counter — replace marquee with grid + count-up animation"
```

---

### Task 8: PageHero — Remove Wave Pattern

**Files:**
- Modify: `website/components/sections/PageHero.vue`

- [ ] **Step 1: Remove wave from template**

Remove the `page-hero__wave` div (lines 5-18) from the template.

- [ ] **Step 2: Remove wave styles**

Remove the `&__wave` block from the styles.

- [ ] **Step 3: Update label letter-spacing**

Change `&__label` letter-spacing from `3px` to `3px` (already correct).

- [ ] **Step 4: Commit**

```bash
git add website/components/sections/PageHero.vue
git commit -m "style: page hero — remove wave pattern"
```

---

### Task 9: CtaSection — Update Button Classes

**Files:**
- Modify: `website/components/sections/CtaSection.vue`

- [ ] **Step 1: Update button class**

In the template, change `class="btn btn--accent btn--lg"` to `class="btn btn--accent"` (remove `btn--lg`).

- [ ] **Step 2: Replace inline arrow SVG with Phosphor**

Add Phosphor import and replace the SVG:

```vue
<script setup lang="ts">
import { PhArrowRight } from '@phosphor-icons/vue'
// ... existing props
</script>
```

Replace the arrow `<svg>` in the button with:
```vue
<PhArrowRight :size="18" weight="light" />
```

- [ ] **Step 3: Commit**

```bash
git add website/components/sections/CtaSection.vue
git commit -m "style: CTA section — update button class, use Phosphor icon"
```

---

## Chunk 3: Card Components — ServiceCard, LeistungCard, TestimonialCard, CaseCard, FAQ

### Task 10: ServiceCard — Complete Redesign

**Files:**
- Modify: `website/components/ui/ServiceCard.vue`

- [ ] **Step 1: Replace entire file**

```vue
<template>
  <NuxtLink :to="to" class="sc">
    <div class="sc__icon-wrap">
      <slot name="icon" />
    </div>
    <h3 class="sc__title">{{ title }}</h3>
    <p class="sc__desc">{{ description }}</p>
    <div class="sc__cta">
      <span class="sc__cta-text">Mehr erfahren</span>
      <PhArrowRight :size="18" weight="light" class="sc__cta-arrow" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { PhArrowRight } from '@phosphor-icons/vue'

defineProps<{
  title: string
  description: string
  to: string
}>()
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.sc {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background: $color-white;
  border: 1px solid rgba($color-primary-light, 0.12);
  border-radius: $radius-lg;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    border-color: $color-accent;
    box-shadow: $shadow-md;

    .sc__icon-wrap {
      background: rgba($color-accent, 0.12);
    }

    .sc__cta-arrow {
      transform: translateX(4px);
    }
  }

  &__icon-wrap {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba($color-accent, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-primary;
    margin-bottom: 1.5rem;
    transition: background 0.4s cubic-bezier(0.22, 1, 0.36, 1);

    :deep(svg) {
      width: 28px;
      height: 28px;
    }
  }

  &__title {
    font-family: $font-heading;
    font-size: 1.3rem;
    font-weight: 700;
    color: $color-primary;
    margin-bottom: 0.75rem;
    letter-spacing: -0.01em;
  }

  &__desc {
    font-size: 0.95rem;
    color: $color-text-light;
    line-height: 1.7;
    flex: 1;
  }

  &__cta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    padding-top: 1.2rem;
    border-top: 1px solid rgba($color-primary-light, 0.08);
  }

  &__cta-text {
    font-size: 0.85rem;
    font-weight: 600;
    color: $color-accent-dark;
    letter-spacing: 0.5px;
  }

  &__cta-arrow {
    color: $color-accent-dark;
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }
}
</style>
```

Removed: `number` prop, watermark, animated border, icon ring/glow, all heavy animations.

- [ ] **Step 2: Update index.vue — remove number props from ServiceCards**

In `website/pages/index.vue`, remove `number="01"`, `number="02"`, `number="03"` from the three `<UiServiceCard>` instances.

- [ ] **Step 3: Replace inline service icons with Phosphor**

In `website/pages/index.vue`, replace the three service card icon slots:

Mietrecht:
```vue
<template #icon>
  <PhBuildings :size="28" weight="light" />
</template>
```

Strafrecht:
```vue
<template #icon>
  <PhShieldChevron :size="28" weight="light" />
</template>
```

Verkehrsrecht:
```vue
<template #icon>
  <PhCar :size="28" weight="light" />
</template>
```

Add imports at the top of `<script setup>`:
```ts
import { PhBuildings, PhShieldChevron, PhCar, PhUserFocus, PhLightning, PhChatText, PhCertificate } from '@phosphor-icons/vue'
```

- [ ] **Step 4: Verify build**

```bash
cd /Users/timo/Desktop/A\ FNS\ Projekte/Schnoor/website && npx nuxi build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
git add website/components/ui/ServiceCard.vue website/pages/index.vue
git commit -m "style: redesign ServiceCard — clean minimal card with Phosphor icons"
```

---

### Task 11: Vorteile Section (index.vue) — Remove SVG Visuals, Use Phosphor Icons

**Files:**
- Modify: `website/pages/index.vue`

- [ ] **Step 1: Replace advantages data**

Replace the `advantages` array in `<script setup>` with:

```ts
const advantages = [
  {
    title: 'Persönliche Betreuung',
    desc: 'Bei mir sind Sie keine Aktennummer. Ich nehme mir Zeit für Ihren Fall und bin persönlich für Sie da.',
  },
  {
    title: 'Schnelle Erreichbarkeit',
    desc: 'Per Telefon, E-Mail oder WhatsApp – ich bin für Sie erreichbar und reagiere zeitnah auf Ihre Anfragen.',
  },
  {
    title: 'Transparente Kosten',
    desc: 'Keine versteckten Gebühren. Ich informiere Sie vorab über die zu erwartenden Kosten und mögliche Kostenübernahmen.',
  },
  {
    title: 'Erfahrung & Kompetenz',
    desc: 'Fundierte juristische Ausbildung und praktische Erfahrung – ich kenne die Strategien, die zum Erfolg führen.',
  },
]
```

Removed: `icon` and `visual` properties.

- [ ] **Step 2: Update advantages template**

Replace the `why__bento` div (lines 103-113) with:

```vue
<div v-scroll-reveal data-stagger class="why__bento">
  <div v-for="(item, i) in advantages" :key="item.title" class="why__card">
    <div class="why__card-icon">
      <PhUserFocus v-if="i === 0" :size="48" weight="light" />
      <PhLightning v-else-if="i === 1" :size="48" weight="light" />
      <PhChatText v-else-if="i === 2" :size="48" weight="light" />
      <PhCertificate v-else :size="48" weight="light" />
    </div>
    <h3 class="why__card-title">{{ item.title }}</h3>
    <p class="why__card-text">{{ item.desc }}</p>
  </div>
</div>
```

- [ ] **Step 3: Update why section styles**

In the `<style>` section of `index.vue`, update the `.why` styles. Remove `&__card-visual` block entirely. Update `&__card-icon`:

```scss
&__card-icon {
  width: 72px;
  height: 72px;
  background: rgba($color-accent, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-accent;
  margin-bottom: 1.5rem;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
```

Remove hover transform on `why__card-visual` from the `&__card:hover` block.

- [ ] **Step 4: Commit**

```bash
git add website/pages/index.vue
git commit -m "style: vorteile section — replace SVG visuals with Phosphor icons"
```

---

### Task 12: LeistungCard — Simplification

**Files:**
- Modify: `website/components/ui/LeistungCard.vue`

- [ ] **Step 1: Replace entire file**

```vue
<template>
  <div class="lk">
    <div class="lk__icon-wrap">
      <div class="lk__icon" v-html="icon"></div>
    </div>
    <h3 class="lk__title">{{ title }}</h3>
    <p class="lk__desc">{{ description }}</p>
    <div class="lk__accent"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  index: number
}>()
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.lk {
  position: relative;
  background: $color-white;
  border-radius: $radius-lg;
  padding: 2.5rem 2rem 2rem;
  border: 1px solid rgba($color-primary-light, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;

  &:hover {
    box-shadow: $shadow-md;

    .lk__icon-wrap {
      background: rgba($color-accent, 0.12);
    }

    .lk__accent {
      transform: scaleX(1);
    }
  }

  &__icon-wrap {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba($color-accent, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-primary;
    margin-bottom: 1.5rem;
    transition: background 0.4s cubic-bezier(0.22, 1, 0.36, 1);

    :deep(svg) {
      width: 28px;
      height: 28px;
    }
  }

  &__title {
    font-family: $font-heading;
    font-size: 1.25rem;
    font-weight: 700;
    color: $color-primary;
    margin-bottom: 0.75rem;
    letter-spacing: -0.01em;
  }

  &__desc {
    font-size: 0.93rem;
    color: $color-text-light;
    line-height: 1.7;
    flex: 1;
  }

  &__accent {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: $color-accent;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }
}
</style>
```

Removed: watermark, glow, icon-ring, divider-dot, bottom-accent bar. Simplified to clean card.

- [ ] **Step 2: Commit**

```bash
git add website/components/ui/LeistungCard.vue
git commit -m "style: simplify LeistungCard — clean card with accent reveal"
```

---

### Task 13: TestimonialCard — Star Color, Quote Mark

**Files:**
- Modify: `website/components/ui/TestimonialCard.vue`

- [ ] **Step 1: Replace template**

```vue
<template>
  <div class="testimonial">
    <div class="testimonial__quote">"</div>
    <div class="testimonial__stars">
      <PhStar v-for="i in 5" :key="i" :size="16" weight="fill" />
    </div>
    <p class="testimonial__text">"{{ text }}"</p>
    <div class="testimonial__author">
      <div class="testimonial__avatar">{{ initials }}</div>
      <div>
        <div class="testimonial__name">{{ name }}</div>
        <div class="testimonial__role">{{ role }}</div>
      </div>
    </div>
  </div>
</template>
```

- [ ] **Step 2: Update script**

```vue
<script setup lang="ts">
import { PhStar } from '@phosphor-icons/vue'

const props = defineProps<{
  text: string
  name: string
  role: string
}>()

const initials = computed(() => {
  return props.name.split(' ').map(w => w[0]).join('').slice(0, 2)
})
</script>
```

- [ ] **Step 3: Update styles — add quote mark, change star color**

Add to the `.testimonial` styles:

```scss
&__quote {
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-family: $font-heading;
  font-size: 4rem;
  color: rgba($color-accent, 0.12);
  line-height: 1;
  pointer-events: none;
}
```

Change `&__stars` to include `color: $color-accent` instead of the inline `fill="#f5a623"`.

Add `position: relative` to the root `.testimonial`.

- [ ] **Step 4: Commit**

```bash
git add website/components/ui/TestimonialCard.vue
git commit -m "style: testimonial card — brand-color stars, typographic quote mark"
```

---

### Task 14: GoogleReviews — Star Color Update

**Files:**
- Modify: `website/components/sections/GoogleReviews.vue`

- [ ] **Step 1: Replace inline star SVGs with Phosphor**

Add import:
```ts
import { PhStar } from '@phosphor-icons/vue'
```

Replace the star SVG loop (line 9):
```vue
<PhStar v-for="i in 5" :key="i" :size="22" weight="fill" class="reviews__star" />
```

- [ ] **Step 2: Add star color style**

Add to styles:
```scss
&__star {
  color: $color-accent;
}
```

- [ ] **Step 3: Replace CTA inline SVG with Phosphor**

Add `PhStar` import (already done above). Replace the star SVG in the CTA button with:
```vue
<PhStar :size="18" weight="light" />
```

- [ ] **Step 4: Commit**

```bash
git add website/components/sections/GoogleReviews.vue
git commit -m "style: Google reviews — brand-color stars with Phosphor"
```

---

### Task 15: CaseCard — Phosphor Icons, Brand Colors

**Files:**
- Modify: `website/components/ui/CaseCard.vue`

- [ ] **Step 1: Add Phosphor imports and replace SVGs**

Add to script:
```ts
import { PhCheck, PhArrowRight } from '@phosphor-icons/vue'
```

Replace result checkmark SVG with `<PhCheck :size="18" weight="light" />`.

Replace CTA arrow SVG with `<PhArrowRight :size="14" weight="light" />`.

- [ ] **Step 2: Update result colors**

Replace the `&__result` styles:
```scss
&__result {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  background: rgba($color-accent, 0.1);
  border-radius: $radius-sm;
  color: $color-primary;
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
}
```

- [ ] **Step 3: Commit**

```bash
git add website/components/ui/CaseCard.vue
git commit -m "style: case card — Phosphor icons, brand-aligned result colors"
```

---

### Task 16: FaqAccordion — Phosphor Chevron

**Files:**
- Modify: `website/components/ui/FaqAccordion.vue`

- [ ] **Step 1: Add Phosphor import**

```ts
import { PhCaretDown } from '@phosphor-icons/vue'
```

- [ ] **Step 2: Replace chevron SVG**

Replace the inline SVG in the `faq__question` button with:
```vue
<PhCaretDown :size="20" weight="light" class="faq__icon" />
```

- [ ] **Step 3: Update styles**

Change `&__item` border-bottom: `rgba($color-gray, 0.3)` → `rgba($color-primary-light, 0.1)`.

Add to `&__item--open`:
```scss
.faq__icon {
  color: $color-accent;
}
```

- [ ] **Step 4: Commit**

```bash
git add website/components/ui/FaqAccordion.vue
git commit -m "style: FAQ accordion — Phosphor chevron, softer borders"
```

---

### Task 17: ContactForm — Focus States

**Files:**
- Modify: `website/components/ui/ContactForm.vue`

- [ ] **Step 1: Update focus styles**

In the `input, select, textarea` focus block, change:
```scss
&:focus {
  outline: none;
  border-color: $color-accent;
  box-shadow: 0 0 0 3px rgba($color-accent, 0.1);
}
```

- [ ] **Step 2: Update submit button class**

Change `class="btn btn--primary btn--lg"` to `class="btn btn--accent"`.

- [ ] **Step 3: Replace arrow SVG with Phosphor**

Add import:
```ts
import { PhArrowRight } from '@phosphor-icons/vue'
```

Replace the arrow SVG with `<PhArrowRight v-if="!submitted" :size="18" weight="light" />`.

- [ ] **Step 4: Commit**

```bash
git add website/components/ui/ContactForm.vue
git commit -m "style: contact form — accent focus states, Phosphor icon"
```

---

## Chunk 4: Header, Footer, Remaining Pages

### Task 18: AppHeader — Navigation Polish

**Files:**
- Modify: `website/components/AppHeader.vue`

- [ ] **Step 1: Update logo gap**

Change `gap: 0.75rem` → `gap: 1rem` in `&__logo` (already done in a previous session — verify).

- [ ] **Step 2: Update nav link styles**

In `&__nav-link`:
- Change `font-weight: 500` → `font-weight: 400`
- Change the `&::after` underline to expand from center:

```scss
&::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: $color-accent;
  transition: all $transition-base;
  transform: translateX(-50%);
}

&:hover,
&.router-link-active {
  color: $color-white;

  &::after {
    width: 100%;
  }
}
```

- [ ] **Step 3: Update scrolled transition**

Change `transition: all $transition-base` → `transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1)` on `.header`.

- [ ] **Step 4: Update mobile menu link size**

In the `@media (max-width: $bp-lg)` block for `&__nav-link`, change `font-size: 1.3rem` → `font-size: 1.5rem`.

- [ ] **Step 5: Commit**

```bash
git add website/components/AppHeader.vue
git commit -m "style: header — center underline, lighter nav weight, smoother scroll transition"
```

---

### Task 19: AppFooter — Refined Styles + Phosphor Icons

**Files:**
- Modify: `website/components/AppFooter.vue`

- [ ] **Step 1: Replace inline SVGs with Phosphor**

Add imports:
```ts
import { PhMapPin, PhPhone, PhEnvelope, PhArrowRight } from '@phosphor-icons/vue'
```

Replace the three contact item SVGs:
- Location → `<PhMapPin :size="16" weight="light" />`
- Phone → `<PhPhone :size="16" weight="light" />`
- Email → `<PhEnvelope :size="16" weight="light" />`

Replace the CTA arrow SVG → `<PhArrowRight :size="16" weight="light" />`

- [ ] **Step 2: Update divider opacity**

Change `&__divider` background: `rgba($color-white, 0.1)` → `rgba($color-white, 0.08)`.

- [ ] **Step 3: Update link hover color**

The link hover already uses `color: $color-accent` — verify this is consistent.

- [ ] **Step 4: Update copyright size**

Change `&__bottom-inner p` font-size to `0.75rem` (from `0.78rem`).

- [ ] **Step 5: Commit**

```bash
git add website/components/AppFooter.vue
git commit -m "style: footer — Phosphor icons, refined dividers and typography"
```

---

### Task 20: index.vue — Replace Remaining Inline SVGs with Phosphor

**Files:**
- Modify: `website/pages/index.vue`

- [ ] **Step 1: Replace contact section inline SVGs**

Add additional Phosphor imports (extend existing import line):
```ts
import { PhBuildings, PhShieldChevron, PhCar, PhUserFocus, PhLightning, PhChatText, PhCertificate, PhPhone, PhEnvelope, PhMapPin, PhClock, PhArrowRight } from '@phosphor-icons/vue'
```

Replace inline SVGs in the about-contact section:
- Phone SVG → `<PhPhone :size="22" weight="light" />`
- Email SVG → `<PhEnvelope :size="22" weight="light" />`
- Location SVG → `<PhMapPin :size="22" weight="light" />`
- Clock SVG → `<PhClock :size="22" weight="light" />`

Keep WhatsApp SVG as custom (brand icon).

- [ ] **Step 2: Replace hero CTA arrow SVG**

In the hero "Erstberatung" button, replace the arrow SVG with:
```vue
<PhArrowRight :size="18" weight="light" />
```

Remove phone SVG from the "Jetzt anrufen" button (or replace with `<PhPhone :size="18" weight="light" />`).

- [ ] **Step 3: Commit**

```bash
git add website/pages/index.vue
git commit -m "style: index page — replace all inline SVGs with Phosphor icons"
```

---

### Task 21: Subpages — Update Leistung Icons + Button Classes

**Files:**
- Modify: `website/pages/mietrecht.vue`
- Modify: `website/pages/strafrecht.vue`
- Modify: `website/pages/verkehrsrecht.vue`

- [ ] **Step 1: Audit and update each subpage**

For each of the 3 pages:
1. Check for `btn--gold`, `btn--white`, `btn--lg` classes → update to `btn--accent`, `btn--outline-light`, remove `btn--lg`
2. Check if inline SVG icons are used in LeistungCard `icon` props → these are passed as HTML strings, so they can stay as inline SVGs for now (Phosphor requires component imports)
3. Verify no broken classes

- [ ] **Step 2: Audit impressum.vue and datenschutz.vue**

Read both files and verify they don't use `btn--gold`, `btn--white`, or `btn--lg`. Fix if found.

- [ ] **Step 3: Commit**

```bash
git add website/pages/
git commit -m "style: subpages — update button classes, audit for breaking changes"
```

---

### Task 22: Final Build + Generate Verification

- [ ] **Step 1: Full build**

```bash
cd /Users/timo/Desktop/A\ FNS\ Projekte/Schnoor/website && npx nuxi build 2>&1 | tail -30
```

Expected: 0 errors, 0 warnings.

- [ ] **Step 2: Generate (SSG prerender)**

```bash
cd /Users/timo/Desktop/A\ FNS\ Projekte/Schnoor/website && npx nuxi generate 2>&1 | tail -30
```

Expected: All routes prerendered successfully.

- [ ] **Step 3: Commit all remaining changes**

```bash
git add -A
git commit -m "chore: design system reboot complete — all components updated"
```
