<template>
  <section class="reviews section section--light">
    <div class="container">
      <div v-scroll-reveal class="section-header">
        <span class="section-label">Mandantenstimmen</span>
        <h2>Das sagen unsere Mandanten</h2>
        <div class="reviews__rating">
          <div class="reviews__stars">
            <svg v-for="i in 5" :key="i" viewBox="0 0 20 20" width="22" height="22" fill="#f5a623">
              <path d="M10 1l2.39 4.84L17.82 6.7l-3.91 3.81.92 5.39L10 13.42l-4.83 2.54.92-5.39L2.18 6.7l5.43-.79L10 1z" />
            </svg>
          </div>
          <span class="reviews__score">4.9 / 5.0</span>
          <span class="reviews__count">basierend auf Google-Bewertungen</span>
        </div>
      </div>

      <div v-scroll-reveal data-stagger class="reviews__grid">
        <UiTestimonialCard
          v-for="review in reviews"
          :key="review.name"
          :name="review.name"
          :text="review.text"
          :role="review.role"
        />
      </div>

      <div class="reviews__cta">
        <a
          href="https://g.page/r/PLACEHOLDER/review"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--outline"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Auch auf Google bewerten
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const reviews = [
  {
    name: 'Michael K.',
    text: 'Herr Schnoor hat sich meines Mietrechtsfalls mit großem Engagement angenommen. Innerhalb weniger Wochen konnte eine faire Lösung mit meinem Vermieter erzielt werden. Sehr kompetent und immer erreichbar.',
    role: 'Mandant – Mietrecht',
  },
  {
    name: 'Sarah L.',
    text: 'In einer sehr belastenden Situation im Strafrecht hat Herr Schnoor mir sofort geholfen und das Verfahren wurde eingestellt. Seine ruhige und professionelle Art hat mir viel Sicherheit gegeben. Absolut empfehlenswert!',
    role: 'Mandantin – Strafrecht',
  },
  {
    name: 'Thomas W.',
    text: 'Nach einem Bußgeldbescheid hat Herr Schnoor erfolgreich Einspruch eingelegt. Das Fahrverbot konnte abgewendet werden. Schnelle Kommunikation, transparente Kosten. Ich würde jederzeit wieder zu ihm gehen.',
    role: 'Mandant – Verkehrsrecht',
  },
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.reviews {
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

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;

    @media (max-width: $bp-lg) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $bp-sm) {
      grid-template-columns: 1fr;
    }
  }

  &__cta {
    text-align: center;
  }
}
</style>
