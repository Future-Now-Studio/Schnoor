<template>
  <NuxtLink :to="to" class="sc">
    <!-- Animated gradient border -->
    <div class="sc__border"></div>

    <!-- Inner card -->
    <div class="sc__inner">
      <!-- Number watermark -->
      <span class="sc__number">{{ number }}</span>

      <!-- Icon -->
      <div class="sc__icon-wrap">
        <div class="sc__icon-bg"></div>
        <div class="sc__icon">
          <slot name="icon" />
        </div>
        <div class="sc__icon-ring"></div>
      </div>

      <!-- Content -->
      <h3 class="sc__title">{{ title }}</h3>
      <div class="sc__line"></div>
      <p class="sc__desc">{{ description }}</p>

      <!-- CTA -->
      <div class="sc__cta">
        <span class="sc__cta-text">Mehr erfahren</span>
        <span class="sc__cta-arrow">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  to: string
  number?: string
}>()
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

// Animated angle for conic gradient
@property --border-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.sc {
  position: relative;
  display: block;
  text-decoration: none;
  border-radius: 24px;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-12px);

    .sc__border {
      opacity: 1;
    }

    .sc__inner {
      border-color: transparent;
      box-shadow:
        0 30px 80px rgba($color-primary, 0.12),
        0 12px 30px rgba($color-accent, 0.08);
    }

    .sc__icon-bg {
      transform: scale(1.15) rotate(45deg);
      background: linear-gradient(135deg, $color-primary, $color-primary-deeper);
    }

    .sc__icon {
      color: $color-accent;
      transform: scale(1.05);
    }

    .sc__icon-ring {
      opacity: 1;
      transform: scale(1);
    }

    .sc__number {
      opacity: 0.06;
      transform: translate(-50%, -55%) scale(1.05);
      color: $color-accent-dark;
    }

    .sc__line {
      width: 60px;
      background: linear-gradient(90deg, $color-accent, $color-accent-light);
    }

    .sc__title {
      color: $color-primary-dark;
    }

    .sc__cta-arrow {
      transform: translateX(0);
      opacity: 1;
    }

    .sc__cta-text {
      color: $color-primary;
      letter-spacing: 1.5px;
    }
  }

  // Animated rotating border
  &__border {
    position: absolute;
    inset: -2px;
    border-radius: 26px;
    background: conic-gradient(
      from var(--border-angle),
      transparent 30%,
      rgba($color-accent, 0.6) 50%,
      rgba($color-accent-light, 0.8) 55%,
      rgba($color-accent, 0.6) 60%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.6s ease;
    animation: borderRotate 4s linear infinite;
    z-index: 0;

    // Mask to create border effect
    &::after {
      content: '';
      position: absolute;
      inset: 2px;
      border-radius: 24px;
      background: $color-white;
    }
  }

  // Card inner
  &__inner {
    position: relative;
    z-index: 1;
    background: $color-white;
    border: 1px solid rgba($color-gray, 0.12);
    border-radius: 24px;
    padding: 3rem 2.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
  }

  // Watermark number
  &__number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    font-family: $font-heading;
    font-size: 12rem;
    font-weight: 900;
    color: $color-primary;
    opacity: 0.025;
    line-height: 1;
    pointer-events: none;
    user-select: none;
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 0;
  }

  // Icon
  &__icon-wrap {
    position: relative;
    width: 88px;
    height: 88px;
    margin-bottom: 2rem;
    z-index: 1;
  }

  &__icon-bg {
    position: absolute;
    inset: 0;
    border-radius: 22px;
    background: linear-gradient(145deg, rgba($color-primary, 0.06), rgba($color-primary, 0.02));
    transform: rotate(0deg);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &__icon {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-primary;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);

    :deep(svg) {
      width: 38px;
      height: 38px;
    }
  }

  &__icon-ring {
    position: absolute;
    inset: -8px;
    border-radius: 28px;
    border: 1.5px solid rgba($color-accent, 0.3);
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  // Title
  &__title {
    font-family: $font-heading;
    font-size: 1.6rem;
    font-weight: 700;
    color: $color-primary;
    margin-bottom: 1rem;
    letter-spacing: -0.01em;
    position: relative;
    z-index: 1;
    transition: color 0.4s ease;
  }

  // Animated line
  &__line {
    width: 36px;
    height: 2.5px;
    background: rgba($color-accent, 0.4);
    border-radius: 2px;
    margin-bottom: 1.2rem;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  // Description
  &__desc {
    font-size: 0.95rem;
    color: $color-text-light;
    line-height: 1.75;
    flex: 1;
    position: relative;
    z-index: 1;
    max-width: 320px;
  }

  // CTA
  &__cta {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba($color-gray, 0.08);
    width: 100%;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  &__cta-text {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: $color-accent-dark;
    transition: all 0.4s ease;
  }

  &__cta-arrow {
    display: flex;
    align-items: center;
    color: $color-accent-dark;
    transform: translateX(-8px);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
}

@keyframes borderRotate {
  to {
    --border-angle: 360deg;
  }
}
</style>
