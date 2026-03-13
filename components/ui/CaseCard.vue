<template>
  <div class="case-card">
    <div class="case-card__badge">{{ category }}</div>
    <h3 class="case-card__title">{{ title }}</h3>
    <p class="case-card__desc">{{ description }}</p>
    <div class="case-card__result">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      <span>{{ result }}</span>
    </div>
    <NuxtLink to="/kontakt" class="case-card__cta">
      Ähnliches Anliegen?
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  category: string
  title: string
  description: string
  result: string
}>()
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.case-card {
  background: $color-white;
  border-radius: $radius-md;
  padding: 2rem;
  border: 1px solid rgba($color-gray, 0.15);
  transition: all $transition-base;

  &:hover {
    box-shadow: $shadow-md;
  }

  &__badge {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    background: rgba($color-primary, 0.08);
    color: $color-primary;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }

  &__desc {
    font-size: 0.9rem;
    color: $color-text-light;
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }

  &__result {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1rem;
    background: rgba(#25d366, 0.08);
    border-radius: $radius-sm;
    color: #1a8d45;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.85rem;
    font-weight: 500;
    color: $color-primary-dark;
    text-decoration: none;

    &:hover svg {
      transform: translateX(3px);
    }

    svg {
      transition: transform $transition-base;
    }
  }
}
</style>
