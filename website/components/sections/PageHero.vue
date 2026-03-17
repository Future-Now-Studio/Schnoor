<template>
  <section class="page-hero">
    <div class="page-hero__bg">
      <div class="page-hero__overlay"></div>
    </div>

    <div class="container page-hero__content">
      <span class="page-hero__label">{{ label }}</span>
      <h1 class="page-hero__title">{{ title }}</h1>
      <p class="page-hero__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  title: string
  subtitle: string
}>()
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.page-hero {
  position: relative;
  padding: calc(6rem + 80px) 0 4rem;
  min-height: 40vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  &__bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, $color-primary 0%, $color-primary-deeper 100%);
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 70% 30%, rgba($color-primary-light, 0.12) 0%, transparent 60%);
  }

  &__content {
    position: relative;
    z-index: 1;
    max-width: 700px;
  }

  &__label {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: $color-accent;
    margin-bottom: 1rem;
  }

  &__title {
    color: $color-white;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }

  &__subtitle {
    font-size: clamp(1rem, 2vw, 1.15rem);
    color: rgba($color-white, 0.8);
    line-height: 1.7;
  }
}
</style>
