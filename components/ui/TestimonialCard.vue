<template>
  <div class="testimonial">
    <div class="testimonial__stars">
      <svg v-for="i in 5" :key="i" viewBox="0 0 20 20" width="18" height="18" fill="#f5a623">
        <path d="M10 1l2.39 4.84L17.82 6.7l-3.91 3.81.92 5.39L10 13.42l-4.83 2.54.92-5.39L2.18 6.7l5.43-.79L10 1z" />
      </svg>
    </div>
    <p class="testimonial__text">"{{ text }}"</p>
    <div class="testimonial__author">
      <div class="testimonial__avatar">{{ initials }}</div>
      <div>
        <div class="testimonial__name">{{ name }}</div>
        <div class="testimonial__role">{{ role }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
  name: string
  role: string
}>()

const initials = computed(() => {
  return props.name.split(' ').map(w => w[0]).join('').slice(0, 2)
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.testimonial {
  background: $color-white;
  border-radius: $radius-md;
  padding: 2rem;
  box-shadow: $shadow-sm;
  border: 1px solid rgba($color-gray, 0.1);

  &__stars {
    display: flex;
    gap: 2px;
    margin-bottom: 1rem;
  }

  &__text {
    font-size: 0.95rem;
    color: $color-text;
    line-height: 1.7;
    font-style: italic;
    margin-bottom: 1.5rem;
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 0.75rem;
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
