<template>
  <div class="error-page">
    <div class="error-page__bg-pattern"></div>

    <!-- Maritime compass decoration -->
    <div class="error-page__compass" aria-hidden="true">
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="180" stroke="currentColor" stroke-width="0.5" opacity="0.08"/>
        <circle cx="200" cy="200" r="140" stroke="currentColor" stroke-width="0.3" opacity="0.06"/>
        <circle cx="200" cy="200" r="100" stroke="currentColor" stroke-width="0.3" opacity="0.04"/>
        <line x1="200" y1="10" x2="200" y2="390" stroke="currentColor" stroke-width="0.5" opacity="0.06"/>
        <line x1="10" y1="200" x2="390" y2="200" stroke="currentColor" stroke-width="0.5" opacity="0.06"/>
        <line x1="55" y1="55" x2="345" y2="345" stroke="currentColor" stroke-width="0.3" opacity="0.04"/>
        <line x1="345" y1="55" x2="55" y2="345" stroke="currentColor" stroke-width="0.3" opacity="0.04"/>
        <polygon points="200,20 210,60 200,45 190,60" fill="currentColor" opacity="0.1"/>
        <text x="200" y="14" text-anchor="middle" fill="currentColor" opacity="0.08" font-size="12" font-weight="600">N</text>
      </svg>
    </div>

    <div class="error-page__container">
      <div class="error-page__logo">
        <img
          src="~/assets/images/Schnoorlogoneu.png"
          alt="Kanzlei Schnoor Logo"
          loading="eager"
        />
      </div>

      <div class="error-page__content">
        <span class="error-page__label">Seite nicht gefunden</span>
        <h1 class="error-page__code">404</h1>
        <p class="error-page__text">
          Diese Seite existiert leider nicht oder wurde verschoben.
          Kein Grund zur Sorge – navigieren Sie einfach zurück zur Startseite.
        </p>
        <div class="error-page__actions">
          <NuxtLink to="/" class="btn btn--accent" @click="handleError">
            <PhHouse :size="18" weight="light" />
            Zur Startseite
          </NuxtLink>
          <NuxtLink to="/kontakt" class="btn btn--outline-light" @click="handleError">
            <PhEnvelope :size="18" weight="light" />
            Kontakt aufnehmen
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhHouse, PhEnvelope } from '@phosphor-icons/vue'

defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })

useSeoMeta({
  title: '404 – Seite nicht gefunden | Rechtsanwalt Philipp Schnoor',
  description: 'Diese Seite existiert leider nicht. Zurück zur Startseite von Rechtsanwalt Philipp Schnoor.',
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.error-page {
  min-height: 100vh;
  background: $color-primary;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;

  &__bg-pattern {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 30%, rgba($color-accent, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 70%, rgba($color-accent, 0.04) 0%, transparent 50%);
    pointer-events: none;
  }

  &__compass {
    position: absolute;
    right: -100px;
    bottom: -100px;
    width: 500px;
    height: 500px;
    color: $color-accent;
    pointer-events: none;
    opacity: 0.5;

    @media (max-width: $bp-md) {
      width: 300px;
      height: 300px;
      right: -80px;
      bottom: -80px;
      opacity: 0.3;
    }
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 3rem;
    align-items: center;
    max-width: 900px;
    width: 100%;
    position: relative;
    z-index: 1;

    @media (max-width: $bp-md) {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 180px;
      height: auto;
      filter: brightness(0) invert(1) opacity(0.15);
    }

    @media (max-width: $bp-md) {
      img {
        width: 120px;
      }
    }
  }

  &__label {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: $color-accent;
    margin-bottom: 0.75rem;
  }

  &__code {
    font-family: $font-heading;
    font-size: clamp(4rem, 10vw, 7rem);
    font-weight: 800;
    color: $color-white;
    line-height: 1;
    margin-bottom: 1rem;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, $color-white 0%, rgba($color-accent, 0.7) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__text {
    font-size: 1rem;
    color: rgba($color-white, 0.7);
    line-height: 1.7;
    margin-bottom: 2rem;
    max-width: 400px;

    @media (max-width: $bp-md) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: $bp-md) {
      justify-content: center;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: $radius-md;
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
      transition: all $transition-base;
      cursor: pointer;
      border: none;
    }

    .btn--accent {
      background: $color-accent;
      color: $color-primary;

      &:hover {
        background: $color-accent-light;
        transform: translateY(-2px);
        box-shadow: $shadow-accent;
      }
    }

    .btn--outline-light {
      background: transparent;
      color: rgba($color-white, 0.8);
      border: 1px solid rgba($color-accent, 0.2);

      &:hover {
        border-color: rgba($color-accent, 0.5);
        color: $color-white;
        background: rgba($color-white, 0.05);
        transform: translateY(-2px);
      }
    }
  }
}
</style>
