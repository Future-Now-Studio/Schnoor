<template>
  <section ref="sectionRef" class="stats" aria-label="Kanzlei in Zahlen">
    <div class="container stats__grid">
      <div
        v-for="(stat, i) in stats"
        :key="stat.label"
        class="stats__item"
        :class="{ 'stats__item--done': stat.done }"
        :style="{ transitionDelay: `${i * 0.15}s` }"
      >
        <span class="stats__number">
          {{ stat.prefix }}{{ animated ? stat.display : '0' }}{{ stat.suffix }}
        </span>
        <span class="stats__label">{{ stat.label }}</span>
        <div v-if="stat.done" class="stats__particles">
          <span v-for="p in 6" :key="p" class="stats__particle" :style="particleStyle(p)"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = reactive([
  { target: 500, display: '0', prefix: '', suffix: '+', label: 'Zufriedene Mandanten', done: false },
  { target: 10, display: '0', prefix: '', suffix: '+', label: 'Jahre Erfahrung', done: false },
  { target: 98, display: '0', prefix: '', suffix: '%', label: 'Erfolgsquote', done: false },
  { target: 4.9, display: '0', prefix: '', suffix: '★', label: 'Google Bewertung', decimal: true, done: false },
])

const sectionRef = ref<HTMLElement>()
const animated = ref(false)

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function particleStyle(i: number) {
  const angle = (i / 6) * 360
  const delay = i * 0.05
  return {
    '--angle': `${angle}deg`,
    '--delay': `${delay}s`,
  }
}

function animateCounters() {
  if (animated.value) return
  animated.value = true

  const duration = 1500

  stats.forEach((stat, index) => {
    const startTime = performance.now() + index * 150

    function update(currentTime: number) {
      const elapsed = currentTime - startTime
      if (elapsed < 0) {
        requestAnimationFrame(update)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)
      const currentValue = easedProgress * stat.target

      if ((stat as any).decimal) {
        stat.display = currentValue.toFixed(1).replace('.', ',')
      } else {
        stat.display = Math.round(currentValue).toString()
      }

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
  padding: 3rem 0;

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    text-align: center;

    @media (max-width: $bp-md) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem 1.5rem;
    }
  }
}

.stats__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem 0;
  position: relative;

  &--done .stats__number {
    animation: statsBounce 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: rgba($color-accent, 0.15);

    @media (max-width: $bp-md) {
      display: none;
    }
  }
}

.stats__number {
  font-family: $font-heading;
  font-size: 2.2rem;
  font-weight: 800;
  color: $color-accent-light;
  letter-spacing: -0.02em;
  line-height: 1;
  position: relative;
}

.stats__label {
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba($color-white, 0.7);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.stats__particles {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
}

.stats__particle {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: $color-accent;
  opacity: 0;
  animation: particleBurst 0.6s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s) forwards;
}

@keyframes statsBounce {
  0% { transform: scale(1); }
  40% { transform: scale(1.15); }
  70% { transform: scale(0.95); }
  100% { transform: scale(1); }
}

@keyframes particleBurst {
  0% {
    opacity: 0.8;
    transform: rotate(var(--angle)) translateX(0);
  }
  100% {
    opacity: 0;
    transform: rotate(var(--angle)) translateX(28px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .stats__item--done .stats__number {
    animation: none !important;
  }
  .stats__particle {
    animation: none !important;
  }
}
</style>
