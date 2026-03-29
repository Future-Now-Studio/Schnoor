<template>
  <section ref="sectionRef" class="stats" aria-label="Kanzlei in Zahlen">
    <div class="container stats__row">
      <div
        v-for="(stat, i) in stats"
        :key="stat.label"
        class="stats__item"
        :class="{ 'stats__item--visible': animated }"
        :style="{ '--delay': `${i * 0.15}s` }"
      >
        <span class="stats__value">
          <template v-if="stat.static">{{ stat.staticText }}</template>
          <template v-else>{{ animated ? stat.display : '0' }}{{ stat.suffix }}</template>
        </span>
        <span class="stats__label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = reactive([
  { target: 7, display: '0', suffix: '+', label: 'Jahre Erfahrung', done: false, static: false, staticText: '' },
  { target: 100, display: '0', suffix: '+', label: 'Mandanten vertreten', done: false, static: false, staticText: '' },
  { target: 0, display: '', suffix: '', label: 'Erreichbarkeit bei Notfällen', done: false, static: true, staticText: '24h' },
])

const sectionRef = ref<HTMLElement>()
const animated = ref(false)

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function animateCounters() {
  if (animated.value) return
  animated.value = true

  const duration = 1600

  stats.forEach((stat, index) => {
    if (stat.static) {
      setTimeout(() => { stat.done = true }, index * 150 + duration)
      return
    }

    const startTime = performance.now() + index * 200

    function update(currentTime: number) {
      const elapsed = currentTime - startTime
      if (elapsed < 0) {
        requestAnimationFrame(update)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)
      const currentValue = easedProgress * stat.target

      stat.display = Math.round(currentValue).toString()

      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        stat.done = true
      }
    }

    requestAnimationFrame(update)
  })
}

onMounted(() => {
  if (!sectionRef.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters()
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )

  observer.observe(sectionRef.value)
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.stats {
  background: $color-primary;
  border-top: 1px solid rgba($color-accent, 0.15);

  &__row {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;
    gap: 3rem;

    @media (max-width: $bp-md) {
      gap: 1.5rem;
    }

    @media (max-width: $bp-sm) {
      flex-direction: column;
      gap: 1rem;
      padding: 1.25rem 0;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s),
                transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s);
    position: relative;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: -1.5rem;
      top: 20%;
      height: 60%;
      width: 1px;
      background: rgba($color-accent, 0.2);

      @media (max-width: $bp-md) {
        right: -0.75rem;
      }

      @media (max-width: $bp-sm) {
        display: none;
      }
    }

    &--visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__value {
    font-family: $font-heading;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.01em;
    color: $color-accent;

    @media (max-width: $bp-md) {
      font-size: 1.3rem;
    }
  }

  &__label {
    font-size: 0.7rem;
    font-weight: 500;
    color: rgba($color-white, 0.5);
    text-transform: uppercase;
    letter-spacing: 1.5px;

    @media (max-width: $bp-md) {
      font-size: 0.65rem;
      letter-spacing: 1px;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .stats__item {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>
