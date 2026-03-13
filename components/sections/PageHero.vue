<template>
  <section class="page-hero">
    <div class="page-hero__bg">
      <div class="page-hero__overlay"></div>
      <div class="page-hero__wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,100 1350,40 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
            opacity="0.08"
          />
          <path
            d="M0,80 C240,120 480,60 720,80 C960,100 1200,60 1440,80 L1440,120 L0,120 Z"
            fill="#ffffff"
            opacity="0.05"
          />
        </svg>
      </div>
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

  &__wave {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    line-height: 0;

    svg {
      width: 100%;
      height: 80px;
    }
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
