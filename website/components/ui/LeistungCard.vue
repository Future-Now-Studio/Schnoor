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
    box-shadow: 0 8px 32px rgba($color-accent, 0.12);

    .lk__icon-wrap {
      background: rgba($color-accent, 0.12);
      transform: rotate(-6deg) scale(1.08);
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
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);

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
