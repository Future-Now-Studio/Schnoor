<template>
  <NuxtLink :to="to" class="sc">
    <div class="sc__image">
      <img :src="image" :alt="alt || `Rechtsanwalt ${title} Hamburg – Kanzlei Schnoor`" loading="lazy" />
      <div class="sc__overlay"></div>
    </div>
    <div class="sc__body">
      <h3 class="sc__title">{{ title }}</h3>
      <p class="sc__desc">{{ description }}</p>
      <div class="sc__cta">
        <span class="sc__cta-text">Mehr erfahren</span>
        <span class="sc__cta-line"></span>
        <PhArrowRight :size="16" weight="bold" class="sc__cta-arrow" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { PhArrowRight } from '@phosphor-icons/vue'

defineProps<{
  title: string
  description: string
  to: string
  image: string
  alt?: string
}>()
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.sc {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background: $color-white;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba($color-primary-light, 0.08);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba($color-primary, 0.15), 0 8px 24px rgba($color-accent, 0.1);
    border-color: rgba($color-accent, 0.2);

    .sc__image img {
      transform: scale(1.08);
    }

    .sc__overlay {
      background: linear-gradient(180deg, rgba(#1a4a6e, 0.2) 0%, rgba($color-primary-deeper, 0.75) 100%);
    }

    .sc__cta-line {
      width: 24px;
    }

    .sc__cta-arrow {
      opacity: 1;
      transform: translateX(0);
    }

    .sc__cta-text {
      color: $color-primary;
    }
  }

  &__image {
    position: relative;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 30%, rgba($color-primary-deeper, 0.5) 100%);
    transition: background 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &__body {
    padding: 1.8rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__title {
    font-family: $font-heading;
    font-size: 1.4rem;
    font-weight: 700;
    color: $color-primary;
    margin-bottom: 0.75rem;
    letter-spacing: -0.01em;
  }

  &__desc {
    font-size: 0.93rem;
    color: $color-text-light;
    line-height: 1.75;
    flex: 1;
  }

  &__cta {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-top: 1.5rem;
    padding-top: 1.2rem;
    border-top: 1px solid rgba($color-primary-light, 0.08);
  }

  &__cta-text {
    font-size: 0.82rem;
    font-weight: 700;
    color: $color-accent-dark;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    transition: color 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &__cta-line {
    display: block;
    width: 0;
    height: 1.5px;
    background: $color-accent;
    transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &__cta-arrow {
    color: $color-primary;
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }
}
</style>
