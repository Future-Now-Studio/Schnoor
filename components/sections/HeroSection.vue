<template>
  <section class="hero" :class="variant ? `hero--${variant}` : ''">
    <!-- Background Image with Parallax -->
    <div class="hero__bg">
      <div
        ref="parallaxImage"
        class="hero__image"
        :style="backgroundImage ? { backgroundImage: `url(${backgroundImage})`, transform: `translate3d(0, ${parallaxOffset}px, 0)` } : {}"
      ></div>
      <div class="hero__overlay"></div>
      <div class="hero__grain"></div>
    </div>

    <!-- Animated gold line accents -->
    <div class="hero__accents">
      <div class="hero__accent-line hero__accent-line--1"></div>
      <div class="hero__accent-line hero__accent-line--2"></div>
    </div>

    <!-- Wave bottom -->
    <div class="hero__wave">
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,80 C180,140 360,40 540,80 C720,120 900,30 1080,80 C1260,130 1380,60 1440,80 L1440,140 L0,140 Z"
          :fill="waveFill || '#ffffff'"
        />
      </svg>
    </div>

    <!-- Content -->
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

    <!-- Scroll indicator (home only) -->
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
  waveFill?: string
  backgroundImage?: string
}>()

const parallaxImage = ref<HTMLElement>()
const parallaxOffset = ref(0)

function onScroll() {
  if (typeof window === 'undefined') return
  const scrollY = window.scrollY
  // Parallax: image moves at 40% of scroll speed
  parallaxOffset.value = scrollY * 0.4
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
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

  // Background
  &__bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  &__image {
    position: absolute;
    inset: -20px;
    bottom: -80px; // Extra space for parallax travel
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

  // Subtle film grain texture
  &__grain {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
    background-size: 128px;
  }

  // Gold accent lines
  &__accents {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }

  &__accent-line {
    position: absolute;
    background: linear-gradient(180deg, transparent, rgba($color-accent, 0.15), transparent);

    &--1 {
      width: 1px;
      height: 40%;
      right: 15%;
      top: 10%;
      animation: lineFloat 6s ease-in-out infinite;
    }

    &--2 {
      width: 1px;
      height: 30%;
      right: 25%;
      bottom: 20%;
      animation: lineFloat 8s ease-in-out infinite reverse;
    }
  }

  // Wave
  &__wave {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    line-height: 0;
    z-index: 2;

    svg {
      width: 100%;
      height: 100px;

      @media (max-width: $bp-md) {
        height: 60px;
      }
    }
  }

  // Content
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
    letter-spacing: 4px;
    text-transform: uppercase;
    color: $color-accent;
    margin-bottom: 2rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid rgba($color-accent, 0.4);
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
  }

  &__title {
    color: $color-white;
    margin-bottom: 0;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.08;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;

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
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
  }

  &__subtitle {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: rgba($color-white, 0.8);
    line-height: 1.8;
    max-width: 600px;
    font-weight: 300;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 3rem;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
  }

  // Scroll indicator
  &__scroll {
    position: absolute;
    bottom: 7rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both;
  }

  &__scroll-line {
    width: 1px;
    height: 50px;
    background: linear-gradient(180deg, $color-accent, transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes lineFloat {
  0%, 100% { opacity: 0.3; transform: translateY(0); }
  50% { opacity: 0.8; transform: translateY(-20px); }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(1.2); }
}
</style>
