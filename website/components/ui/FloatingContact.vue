<template>
  <Transition name="fab">
    <NuxtLink
      v-show="visible"
      to="/kontakt"
      class="fab"
      aria-label="Beratung anfragen"
    >
      <PhChatCircleDots :size="22" weight="light" />
      <span class="fab__label">Beratung anfragen</span>
    </NuxtLink>
  </Transition>
</template>

<script setup lang="ts">
import { PhChatCircleDots } from '@phosphor-icons/vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 600
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.fab {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.8rem;
  background: $color-primary;
  color: $color-accent;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: all $transition-base;

  &:hover {
    background: $color-primary-dark;
    color: $color-accent-light;
    box-shadow: 0 6px 28px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &__label {
    @media (max-width: $bp-sm) {
      display: none;
    }
  }

  @media (max-width: $bp-sm) {
    padding: 0.85rem;
    border-radius: 50%;
  }
}

.fab-enter-active,
.fab-leave-active {
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.fab-enter-from,
.fab-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.9);
}

@media (prefers-reduced-motion: reduce) {
  .fab-enter-active,
  .fab-leave-active {
    transition: none !important;
  }
}
</style>
