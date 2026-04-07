<template>
  <section v-if="reviews.length" ref="sectionRef" class="reviews section section--light">
    <div class="reviews__rope reviews__rope--tl" aria-hidden="true" :style="{ transform: `translateY(${ropeParallax}px)` }">
      <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <path d="M2 80 V20 Q2 2 20 2 H80" opacity="0.15"/>
        <path d="M8 80 V24 Q8 8 24 8 H80" opacity="0.08"/>
      </svg>
    </div>
    <div class="reviews__rope reviews__rope--tr" aria-hidden="true" :style="{ transform: `translateY(${ropeParallax}px)` }">
      <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <path d="M78 80 V20 Q78 2 60 2 H0" opacity="0.15"/>
        <path d="M72 80 V24 Q72 8 56 8 H0" opacity="0.08"/>
      </svg>
    </div>
    <div class="reviews__rope reviews__rope--bl" aria-hidden="true" :style="{ transform: `translateY(${-ropeParallax}px)` }">
      <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <path d="M2 0 V60 Q2 78 20 78 H80" opacity="0.15"/>
        <path d="M8 0 V56 Q8 72 24 72 H80" opacity="0.08"/>
      </svg>
    </div>
    <div class="reviews__rope reviews__rope--br" aria-hidden="true" :style="{ transform: `translateY(${-ropeParallax}px)` }">
      <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <path d="M78 0 V60 Q78 78 60 78 H0" opacity="0.15"/>
        <path d="M72 0 V56 Q72 72 56 72 H0" opacity="0.08"/>
      </svg>
    </div>
    <div class="container">
      <div v-scroll-reveal class="section-header">
        <span class="section-label">Mandantenstimmen</span>
        <h2>Das sagen meine Mandanten</h2>
        <div class="reviews__rating">
          <div class="reviews__stars">
            <PhStar v-for="i in 5" :key="i" :size="22" weight="fill" class="reviews__star" />
          </div>
          <span class="reviews__score">{{ displayRating }} / 5.0</span>
          <span class="reviews__count">basierend auf {{ displayCount }} Google-Bewertungen</span>
        </div>
      </div>

      <div v-scroll-reveal class="reviews__wrapper">
        <button class="reviews__arrow reviews__arrow--left" aria-label="Vorherige" @click="scrollLeft">
          <PhCaretLeft :size="20" weight="bold" />
        </button>

        <div
          ref="trackRef"
          class="reviews__carousel"
          @mouseenter="paused = true"
          @mouseleave="paused = false"
        >
          <div class="reviews__track" :class="{ 'reviews__track--paused': paused }">
            <UiTestimonialCard
              v-for="(review, i) in doubledReviews"
              :key="i"
              :name="review.name"
              :text="review.text"
              :role="review.role"
              :photo="review.photo"
              class="reviews__slide"
            />
          </div>
        </div>

        <button class="reviews__arrow reviews__arrow--right" aria-label="Nächste" @click="scrollRight">
          <PhCaretRight :size="20" weight="bold" />
        </button>
      </div>

      <div class="reviews__cta">
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJ_w-GhpuPsUcRCJXqI7uqB2g"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--outline"
        >
          <PhStar :size="18" weight="light" />
          Auch auf Google bewerten
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhStar, PhCaretLeft, PhCaretRight } from '@phosphor-icons/vue'

// Fetch live reviews from Google Places API — section hidden if not available
const { data: apiData } = await useAsyncData('google-reviews', () => $fetch('/api/reviews'))

const reviews = computed(() => {
  if (!apiData.value?.reviews?.length) return []
  return apiData.value.reviews.map((r: any) => ({
    name: r.name,
    text: r.text,
    photo: r.photo || '',
    role: `${'★'.repeat(r.rating)} Google-Bewertung`,
  }))
})

const displayRating = computed(() => apiData.value?.rating?.toFixed(1).replace('.', ',') ?? '')
const displayCount = computed(() => apiData.value?.totalReviews ?? 0)

// Repeat enough times so the carousel never shows a gap (min 4 copies)
const doubledReviews = computed(() => {
  const r = reviews.value
  if (!r.length) return []
  const copies = Math.max(4, Math.ceil(8 / r.length))
  return Array.from({ length: copies }, () => r).flat()
})
const paused = ref(false)
const trackRef = ref<HTMLElement>()

const SLIDE_WIDTH = 396 // 380px card + 16px gap
const ropeParallax = ref(0)
const sectionRef = ref<HTMLElement>()

function scrollLeft() {
  if (!trackRef.value) return
  trackRef.value.scrollBy({ left: -SLIDE_WIDTH, behavior: 'smooth' })
}

function scrollRight() {
  if (!trackRef.value) return
  trackRef.value.scrollBy({ left: SLIDE_WIDTH, behavior: 'smooth' })
}

function onScroll() {
  if (!sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  const center = rect.top + rect.height / 2
  const viewCenter = window.innerHeight / 2
  ropeParallax.value = (center - viewCenter) * 0.08
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

.reviews {
  overflow: hidden;
  position: relative;

  &__rope {
    position: absolute;
    width: 60px;
    height: 60px;
    color: $color-accent;
    z-index: 1;

    &--tl { top: 1.5rem; left: 1.5rem; }
    &--tr { top: 1.5rem; right: 1.5rem; }
    &--bl { bottom: 1.5rem; left: 1.5rem; }
    &--br { bottom: 1.5rem; right: 1.5rem; }

    @media (max-width: $bp-sm) {
      display: none;
    }
  }

  &__rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
  }

  &__stars {
    display: flex;
    gap: 3px;
  }

  &__star {
    color: $color-accent;
  }

  &__score {
    font-family: $font-heading;
    font-size: 1.5rem;
    font-weight: 700;
    color: $color-primary;
  }

  &__count {
    font-size: 0.85rem;
    color: $color-text-light;
  }

  &__wrapper {
    position: relative;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba($color-gray, 0.2);
    background: rgba($color-white, 0.95);
    color: $color-primary;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: $shadow-sm;
    transition: all $transition-fast;

    &:hover {
      background: $color-primary;
      color: $color-white;
      border-color: $color-primary;
      box-shadow: $shadow-md;
    }

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }

    @media (max-width: $bp-sm) {
      width: 36px;
      height: 36px;
    }
  }

  &__carousel {
    margin: 0 calc(-1 * $container-padding);
    overflow: hidden;
    mask-image: linear-gradient(90deg, transparent, black 5%, black 95%, transparent);
    -webkit-mask-image: linear-gradient(90deg, transparent, black 5%, black 95%, transparent);
  }

  &__track {
    display: flex;
    gap: 1.5rem;
    width: max-content;
    animation: carouselScroll 30s linear infinite;

    &--paused {
      animation-play-state: paused;
    }
  }

  &__slide {
    flex-shrink: 0;
    width: 380px;

    @media (max-width: $bp-sm) {
      width: 300px;
    }
  }

  &__cta {
    text-align: center;
    margin-top: 2.5rem;
  }
}

@keyframes carouselScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-25%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .reviews__track {
    animation: none !important;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
