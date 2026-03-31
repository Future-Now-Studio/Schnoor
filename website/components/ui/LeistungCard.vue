<template>
  <div class="lk">
    <span class="lk__num" aria-hidden="true">{{ String(index).padStart(2, '0') }}</span>
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
  padding: 2rem 2rem 1.75rem;
  border: 1px solid rgba($color-primary-light, 0.08);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;

  &:hover {
    box-shadow: 0 12px 40px rgba($color-primary, 0.1);
    border-color: rgba($color-accent, 0.25);
    transform: translateY(-3px);

    .lk__icon-wrap {
      background: $color-primary;
      transform: rotate(-4deg) scale(1.05);
    }

    .lk__accent {
      transform: scaleX(1);
    }
  }

  &__num {
    position: absolute;
    top: 1rem;
    right: 1.25rem;
    font-family: $font-heading;
    font-size: 2.5rem;
    font-weight: 900;
    color: rgba($color-primary, 0.05);
    line-height: 1;
    letter-spacing: -0.04em;
    pointer-events: none;
    user-select: none;
  }

  &__icon-wrap {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: $color-primary;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-accent;
    margin-bottom: 1.25rem;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    flex-shrink: 0;
    line-height: 0;

    :deep(svg) {
      display: block;
      width: 24px !important;
      height: 24px !important;
      flex-shrink: 0;
    }
  }

  &__title {
    font-family: $font-heading;
    font-size: 1.15rem;
    font-weight: 700;
    color: $color-primary;
    margin-bottom: 0.6rem;
    letter-spacing: -0.01em;
  }

  &__desc {
    font-size: 0.9rem;
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
    background: linear-gradient(90deg, $color-accent, $color-accent-light);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }
}
</style>
