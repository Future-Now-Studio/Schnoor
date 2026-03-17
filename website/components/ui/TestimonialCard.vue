<template>
  <div class="testimonial">
    <div class="testimonial__quote">&ldquo;</div>
    <div class="testimonial__stars">
      <PhStar v-for="i in 5" :key="i" :size="16" weight="fill" />
    </div>
    <p class="testimonial__text" :class="{ 'testimonial__text--clamped': !expanded && isLong }">
      "{{ text }}"
    </p>
    <button v-if="isLong" class="testimonial__toggle" @click="expanded = !expanded">
      {{ expanded ? 'Weniger' : 'Mehr lesen' }}
    </button>
    <div class="testimonial__author">
      <img v-if="photo" :src="photo" :alt="name" class="testimonial__photo" loading="lazy" referrerpolicy="no-referrer" />
      <div v-else class="testimonial__avatar">{{ initials }}</div>
      <div>
        <div class="testimonial__name">{{ name }}</div>
        <div class="testimonial__role">{{ role }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhStar } from '@phosphor-icons/vue'

const props = defineProps<{
  text: string
  name: string
  role: string
  photo?: string
}>()

const expanded = ref(false)
const isLong = computed(() => props.text.length > 180)

const initials = computed(() => {
  return props.name.split(' ').map(w => w[0]).join('').slice(0, 2)
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.testimonial {
  position: relative;
  background: $color-white;
  border-radius: $radius-md;
  padding: 2rem;
  box-shadow: $shadow-sm;
  border: 1px solid rgba($color-gray, 0.1);

  &__quote {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    font-family: $font-heading;
    font-size: 4rem;
    color: rgba($color-accent, 0.12);
    line-height: 1;
    pointer-events: none;
  }

  &__stars {
    display: flex;
    gap: 2px;
    margin-bottom: 1rem;
    color: $color-accent;
  }

  &__text {
    font-size: 0.95rem;
    color: $color-text;
    line-height: 1.7;
    font-style: italic;
    margin-bottom: 0.5rem;

    &--clamped {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &__toggle {
    background: none;
    border: none;
    padding: 0;
    font-size: 0.82rem;
    font-weight: 600;
    color: $color-accent;
    cursor: pointer;
    margin-bottom: 1rem;
    font-family: $font-body;

    &:hover {
      color: $color-primary;
    }
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__photo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba($color-accent, 0.3);
  }

  &__avatar {
    width: 40px;
    height: 40px;
    background: $color-primary;
    color: $color-accent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $font-heading;
    font-weight: 600;
    font-size: 0.9rem;
  }

  &__name {
    font-weight: 600;
    font-size: 0.9rem;
    color: $color-primary;
  }

  &__role {
    font-size: 0.8rem;
    color: $color-text-light;
  }
}
</style>
