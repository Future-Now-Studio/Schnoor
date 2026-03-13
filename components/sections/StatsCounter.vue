<template>
  <section class="stats section">
    <div class="stats__bg"></div>
    <div class="container">
      <div ref="counterRef" class="stats__grid">
        <div v-for="stat in stats" :key="stat.label" class="stats__item">
          <div class="stats__icon" v-html="stat.icon"></div>
          <div class="stats__value">
            <span class="stats__number">{{ stat.prefix }}{{ animatedValues[stat.label] }}{{ stat.suffix }}</span>
          </div>
          <div class="stats__label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const counterRef = ref<HTMLElement>()
const hasAnimated = ref(false)

const stats = [
  {
    icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
    target: 500,
    prefix: '',
    suffix: '+',
    label: 'Zufriedene Mandanten',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    target: 10,
    prefix: '',
    suffix: '+',
    label: 'Jahre Erfahrung',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    target: 98,
    prefix: '',
    suffix: '%',
    label: 'Erfolgsquote',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    target: 4.9,
    prefix: '',
    suffix: '★',
    label: 'Google Bewertung',
  },
]

// Reactive animated values
const animatedValues = reactive<Record<string, string>>(
  Object.fromEntries(stats.map((s) => [s.label, '0']))
)

function animateCounter(target: number, label: string, duration = 2000) {
  const start = performance.now()
  const isDecimal = target % 1 !== 0

  function update(now: number) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = eased * target

    animatedValues[label] = isDecimal ? current.toFixed(1) : Math.floor(current).toString()

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  if (!counterRef.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true

          stats.forEach((stat, i) => {
            setTimeout(() => {
              animateCounter(stat.target, stat.label)
            }, i * 150)
          })

          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )

  observer.observe(counterRef.value)
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.stats {
  position: relative;
  overflow: hidden;
  background: $color-primary;

  &__bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba($color-accent, 0.08) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 50%, rgba($color-accent, 0.05) 0%, transparent 60%);
    pointer-events: none;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    position: relative;

    @media (max-width: $bp-lg) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $bp-sm) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  &__item {
    text-align: center;
    padding: 2.5rem 1.5rem;
    border-radius: $radius-lg;
    border: 1px solid rgba($color-accent, 0.08);
    background: rgba($color-white, 0.03);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 60%;
      height: 2px;
      background: linear-gradient(90deg, transparent, $color-accent, transparent);
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    &:hover {
      border-color: rgba($color-accent, 0.2);
      background: rgba($color-white, 0.06);
      transform: translateY(-6px);

      &::after {
        transform: translateX(-50%) scaleX(1);
      }

      .stats__icon {
        transform: scale(1.1);
        background: rgba($color-accent, 0.15);
      }

      .stats__number {
        color: $color-accent-light;
      }
    }
  }

  &__icon {
    width: 56px;
    height: 56px;
    margin: 0 auto 1.5rem;
    background: rgba($color-accent, 0.08);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-accent;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &__number {
    font-family: $font-heading;
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 900;
    color: $color-white;
    line-height: 1;
    letter-spacing: -0.02em;
    transition: color 0.3s ease;
  }

  &__label {
    font-size: 0.85rem;
    color: rgba($color-white, 0.5);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 500;
    margin-top: 0.6rem;
  }
}
</style>
