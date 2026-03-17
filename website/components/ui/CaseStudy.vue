<template>
  <div class="cs">
    <div class="cs__badge">{{ category }}</div>
    <div class="cs__timeline">
      <div class="cs__step" v-for="(step, i) in steps" :key="i">
        <div class="cs__dot" :class="{ 'cs__dot--final': i === steps.length - 1 }"></div>
        <div class="cs__step-content">
          <span class="cs__step-label">{{ step.label }}</span>
          <p class="cs__step-text">{{ step.text }}</p>
        </div>
      </div>
    </div>
    <div class="cs__result">
      <PhCheck :size="18" weight="bold" />
      <span>{{ result }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhCheck } from '@phosphor-icons/vue'

defineProps<{
  category: string
  steps: { label: string; text: string }[]
  result: string
}>()
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.cs {
  background: $color-white;
  border: 1px solid rgba($color-gray, 0.15);
  border-radius: $radius-lg;
  padding: 2rem;
  transition: box-shadow $transition-base;

  &:hover {
    box-shadow: $shadow-md;
  }

  &__badge {
    display: inline-block;
    padding: 0.25rem 0.7rem;
    background: rgba($color-primary, 0.07);
    color: $color-primary;
    font-size: 0.72rem;
    font-weight: 600;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1.2rem;
  }

  &__timeline {
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 1.5rem;

    &::before {
      content: '';
      position: absolute;
      left: 4px;
      top: 8px;
      bottom: 8px;
      width: 1px;
      background: linear-gradient(180deg, $color-accent, rgba($color-accent, 0.2));
    }
  }

  &__step {
    display: flex;
    gap: 0.8rem;
    padding: 0.5rem 0;
    position: relative;
  }

  &__dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: $color-accent;
    flex-shrink: 0;
    margin-top: 5px;
    margin-left: -1.2rem;
    position: relative;
    z-index: 1;

    &--final {
      background: $color-primary;
      box-shadow: 0 0 0 3px rgba($color-primary, 0.15);
    }
  }

  &__step-label {
    display: block;
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: $color-text-light;
    margin-bottom: 0.15rem;
  }

  &__step-text {
    font-size: 0.9rem;
    color: $color-text;
    line-height: 1.5;
  }

  &__result {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: rgba($color-accent, 0.1);
    border-radius: $radius-sm;
    color: $color-primary;
    font-weight: 600;
    font-size: 0.88rem;
  }
}
</style>
