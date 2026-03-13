<template>
  <section class="cta section">
    <div class="container">
      <div v-scroll-reveal="'scale'" class="cta__inner">
        <div class="cta__content">
          <span class="section-label">{{ label || 'Jetzt handeln' }}</span>
          <h2 class="cta__title">{{ title || 'Sie haben ein rechtliches Anliegen?' }}</h2>
          <p class="cta__text">
            {{ text || 'Schildern Sie mir Ihren Fall unverbindlich. Ich melde mich zeitnah bei Ihnen und berate Sie über Ihre Möglichkeiten.' }}
          </p>
          <div class="cta__actions">
            <NuxtLink to="/kontakt" class="btn btn--accent btn--lg">
              Kontakt aufnehmen
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  title?: string
  text?: string
}>()
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.cta {
  background: $color-primary;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: rgba($color-primary-light, 0.08);
  }

  &__inner {
    text-align: center;
    max-width: 650px;
    margin: 0 auto;
    position: relative;
  }

  .section-label {
    color: $color-accent;
  }

  &__title {
    color: $color-white;
    margin-bottom: 1.2rem;
  }

  &__text {
    color: rgba($color-white, 0.8);
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  &__actions {
    display: flex;
    justify-content: center;
  }
}
</style>
