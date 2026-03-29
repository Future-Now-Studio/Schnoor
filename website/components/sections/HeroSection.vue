<template>
  <section class="hero" :class="[variant ? `hero--${variant}` : '', { 'hero--ready': ready }]">
    <div class="hero__bg">
      <video
        v-if="backgroundVideo"
        ref="videoRef"
        class="hero__video"
        :style="{ transform: `translate3d(0, ${parallaxOffset}px, 0)` }"
        autoplay
        muted
        playsinline
        :poster="backgroundImage"
        :src="backgroundVideo"
        @ended="onVideoEnded"
      />
      <div
        v-else
        ref="parallaxImage"
        class="hero__image"
        :style="backgroundImage ? { backgroundImage: `url(${backgroundImage})`, transform: `translate3d(0, ${parallaxOffset}px, 0)` } : {}"
      ></div>
      <div class="hero__overlay"></div>
      <div class="hero__grain"></div>
      <div class="hero__compass" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
          <circle cx="100" cy="100" r="70" stroke="currentColor" stroke-width="0.3" opacity="0.1"/>
          <circle cx="100" cy="100" r="50" stroke="currentColor" stroke-width="0.3" opacity="0.08"/>
          <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" stroke-width="0.5" opacity="0.12"/>
          <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" stroke-width="0.5" opacity="0.12"/>
          <line x1="30" y1="30" x2="170" y2="170" stroke="currentColor" stroke-width="0.3" opacity="0.08"/>
          <line x1="170" y1="30" x2="30" y2="170" stroke="currentColor" stroke-width="0.3" opacity="0.08"/>
          <polygon points="100,10 106,40 100,30 94,40" fill="currentColor" opacity="0.2"/>
        </svg>
      </div>
    </div>

    <div class="container hero__content" :style="{ transform: `translate3d(0, ${textParallax}px, 0)` }">
      <div class="hero__text">
        <span v-if="label" class="hero__label">{{ label }}</span>
        <h1 class="hero__title">
          <slot name="title">{{ title }}</slot>
        </h1>
        <div class="hero__gold-bar"></div>
        <p class="hero__subtitle" v-html="subtitle"></p>
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

<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  label?: string
  variant?: 'home' | 'page'
  backgroundImage?: string
  backgroundVideo?: string
}>()

const parallaxImage = ref<HTMLElement>()
const videoRef = ref<HTMLVideoElement>()
const parallaxOffset = ref(0)
const textParallax = ref(0)
const ready = ref(false)

let reverse = false
let videoRaf: number

function tickReverse() {
  const vid = videoRef.value
  if (!vid || vid.currentTime <= 0) {
    reverse = false
    vid?.play()
    return
  }
  vid.currentTime = Math.max(vid.currentTime - (1 / 30), 0)
  videoRaf = requestAnimationFrame(tickReverse)
}

function onVideoEnded() {
  reverse = true
  videoRaf = requestAnimationFrame(tickReverse)
}

function onScroll() {
  if (typeof window === 'undefined') return
  const y = window.scrollY
  parallaxOffset.value = y * 0.4
  textParallax.value = y * 0.15
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  requestAnimationFrame(() => {
    ready.value = true
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (videoRaf) cancelAnimationFrame(videoRaf)
})
</script>

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

  &__video {
    position: absolute;
    inset: -20px;
    bottom: -80px;
    width: calc(100% + 40px);
    height: calc(100% + 100px);
    object-fit: cover;
    object-position: center 30%;
    will-change: transform;

    @media (max-width: $bp-md) {
      object-position: 70% 30%;
    }
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

  &__compass {
    position: absolute;
    right: -60px;
    bottom: -40px;
    width: 320px;
    height: 320px;
    color: $color-accent;
    opacity: 0;
    pointer-events: none;
    z-index: 1;

    svg {
      width: 100%;
      height: 100%;
    }

    @media (max-width: $bp-md) {
      width: 200px;
      height: 200px;
      right: -40px;
      bottom: -20px;
    }
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
  }

  &__title {
    color: $color-white;
    margin-bottom: 0;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.12;
    padding-bottom: 0.05em;
    clip-path: inset(0 100% 0 0);

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
  }

  &__subtitle {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: rgba($color-white, 0.8);
    line-height: 1.8;
    max-width: 600px;
    font-weight: 300;
    opacity: 0;
    transform: translateY(12px);

    :deep(strong) {
      font-weight: 600;
      color: rgba($color-white, 0.95);
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 3rem;
    opacity: 0;
    transform: translateY(12px);
  }

  &__scroll {
    position: absolute;
    bottom: 7rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    opacity: 0;
  }

  &__scroll-line {
    width: 1px;
    height: 50px;
    background: linear-gradient(180deg, $color-accent, transparent);
  }

  // Animations trigger only after hydration
  &--ready {
    .hero__label {
      animation: heroFadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
    }

    .hero__title {
      animation: heroClipReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
    }

    .hero__gold-bar {
      animation: heroScaleX 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.45s forwards;
    }

    .hero__subtitle {
      animation: heroFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.55s forwards;
    }

    .hero__actions {
      animation: heroFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards;
    }

    .hero__scroll {
      animation: heroFadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) 1s forwards;
    }

    .hero__scroll-line {
      animation: scrollPulse 2s ease-in-out infinite;
    }

    .hero__compass {
      animation: compassFadeIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards;
    }
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

@keyframes compassFadeIn {
  to {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__label,
  .hero__title,
  .hero__gold-bar,
  .hero__subtitle,
  .hero__actions,
  .hero__scroll,
  .hero__compass {
    opacity: 1 !important;
    transform: none !important;
    clip-path: none !important;
    animation: none !important;
  }
}
</style>
