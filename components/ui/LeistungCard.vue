<template>
  <div class="lk" :style="{ '--i': index }">
    <!-- Hover glow effect -->
    <div class="lk__glow"></div>

    <!-- Card content -->
    <div class="lk__card">
      <!-- Large background number watermark -->
      <span class="lk__watermark">{{ String(index).padStart(2, '0') }}</span>

      <!-- Icon area -->
      <div class="lk__icon-area">
        <div class="lk__icon-ring">
          <div class="lk__icon" v-html="icon"></div>
        </div>
      </div>

      <!-- Content -->
      <div class="lk__content">
        <h3 class="lk__title">{{ title }}</h3>
        <div class="lk__divider">
          <div class="lk__divider-line"></div>
          <div class="lk__divider-dot"></div>
        </div>
        <p class="lk__desc">{{ description }}</p>
      </div>

      <!-- Bottom accent -->
      <div class="lk__bottom-accent"></div>
    </div>
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
  --i: 1;

  // Outer glow on hover
  &__glow {
    position: absolute;
    inset: -1px;
    border-radius: calc(#{$radius-lg} + 2px);
    background: linear-gradient(
      135deg,
      rgba($color-accent, 0.5),
      rgba($color-primary-light, 0.3),
      rgba($color-accent-light, 0.5)
    );
    opacity: 0;
    transition: opacity 0.6s ease;
    z-index: 0;
    filter: blur(0px);
  }

  &:hover {
    .lk__glow {
      opacity: 1;
    }

    .lk__card {
      transform: translateY(-10px);
      box-shadow:
        0 25px 50px rgba($color-primary, 0.15),
        0 10px 20px rgba($color-accent, 0.08);
    }

    .lk__icon-ring {
      border-color: rgba($color-accent, 0.5);
      background: linear-gradient(135deg, $color-primary, $color-primary-deeper);
      box-shadow: 0 8px 30px rgba($color-primary, 0.3);
    }

    .lk__icon {
      color: $color-accent;
    }

    .lk__watermark {
      opacity: 0.07;
      transform: translateY(-5px) scale(1.05);
    }

    .lk__divider-line {
      width: 50px;
      background: linear-gradient(90deg, $color-accent, $color-accent-light);
    }

    .lk__divider-dot {
      opacity: 1;
      transform: scale(1);
    }

    .lk__bottom-accent {
      transform: scaleX(1);
    }

    .lk__title {
      color: $color-primary-dark;
    }
  }

  // Main card
  &__card {
    position: relative;
    z-index: 1;
    background: $color-white;
    border-radius: $radius-lg;
    padding: 2.5rem 2rem 2rem;
    border: 1px solid rgba($color-gray, 0.1);
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  }

  // Watermark number
  &__watermark {
    position: absolute;
    top: -12px;
    right: 10px;
    font-family: $font-heading;
    font-size: 7rem;
    font-weight: 900;
    color: $color-primary;
    opacity: 0.035;
    line-height: 1;
    pointer-events: none;
    user-select: none;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  // Icon
  &__icon-area {
    margin-bottom: 1.8rem;
  }

  &__icon-ring {
    width: 68px;
    height: 68px;
    border-radius: 20px;
    background: linear-gradient(145deg, rgba($color-primary, 0.06), rgba($color-primary, 0.02));
    border: 1.5px solid rgba($color-primary, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &__icon {
    color: $color-primary;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.4s ease;

    :deep(svg) {
      width: 30px;
      height: 30px;
    }
  }

  // Content
  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: $font-heading;
    font-size: 1.35rem;
    font-weight: 700;
    color: $color-primary;
    margin-bottom: 0.8rem;
    letter-spacing: -0.01em;
    line-height: 1.25;
    transition: color 0.3s ease;
  }

  // Custom divider with dot
  &__divider {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 1rem;
  }

  &__divider-line {
    width: 32px;
    height: 2px;
    background: rgba($color-accent, 0.5);
    border-radius: 2px;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &__divider-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: $color-accent;
    opacity: 0;
    transform: scale(0);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
  }

  // Description
  &__desc {
    font-size: 0.93rem;
    color: $color-text-light;
    line-height: 1.75;
    flex: 1;
  }

  // Bottom accent bar
  &__bottom-accent {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, $color-accent, $color-accent-light, $color-accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 0 0 $radius-lg $radius-lg;
  }
}
</style>
