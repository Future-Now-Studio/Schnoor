<template>
  <section class="ac section section--dark">
    <div class="container">
      <div v-scroll-reveal class="section-header">
        <span class="section-label">Ihr Anwalt</span>
        <h2>Persönlich für Sie da</h2>
        <UiAnchorDivider />
      </div>

      <div class="ac__layout">
        <!-- Left: Portrait + Bio -->
        <div v-scroll-reveal="'fade-right'" class="ac__profile">
          <div class="ac__portrait">
            <img
              src="~/assets/images/Schnoor.webp"
              alt="Rechtsanwalt Philipp Schnoor"
              loading="lazy"
            />
            <div class="ac__portrait-overlay">
              <span class="ac__portrait-name">Philipp Schnoor</span>
              <span class="ac__portrait-role">Rechtsanwalt &amp; Strafverteidiger</span>
            </div>
          </div>

          <div class="ac__bio">
            <p>
              Als Rechtsanwalt in Hamburg stehe ich Ihnen mit voller Überzeugung zur Seite.
              Mein Anspruch: für jeden Mandanten die bestmögliche Lösung – persönlich, engagiert und transparent.
            </p>
            <p>
              Ich nehme mir Zeit für Ihren Fall, erkläre jeden Schritt verständlich und kämpfe
              konsequent für Ihr Recht.
            </p>
          </div>

          <div class="ac__details">
            <a href="tel:+4940XXXXXXXX" class="ac__detail">
              <PhPhone :size="18" weight="light" />
              <span>040 – XXX XXX XX</span>
            </a>
            <a href="mailto:kontakt@schnoor-rechtsanwalt.de" class="ac__detail">
              <PhEnvelope :size="18" weight="light" />
              <span>kontakt@schnoor-rechtsanwalt.de</span>
            </a>
            <div class="ac__detail">
              <PhMapPin :size="18" weight="light" />
              <span>Papenreye 61, Hamburg</span>
            </div>
            <div class="ac__detail">
              <PhClock :size="18" weight="light" />
              <span>Mo – Fr: 09 – 18 Uhr</span>
            </div>
          </div>

          <a
            href="https://wa.me/4915123456789?text=Guten%20Tag%20Herr%20Schnoor%2C%20ich%20habe%20eine%20rechtliche%20Frage."
            target="_blank"
            rel="noopener noreferrer"
            class="ac__whatsapp"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12.003 0h-.006C5.376 0 0 5.382 0 12c0 2.625.846 5.058 2.285 7.034L.79 23.468l4.589-1.469A11.93 11.93 0 0012.003 24C18.62 24 24 18.617 24 12S18.62 0 12.003 0zm6.987 16.96c-.293.824-1.449 1.51-2.379 1.71-.636.136-1.467.244-4.263-.916-3.579-1.484-5.879-5.12-6.057-5.357-.171-.237-1.439-1.917-1.439-3.656s.911-2.593 1.233-2.949c.323-.356.705-.444.939-.444s.468.001.672.012c.216.011.505-.083.79.603.293.705.999 2.429 1.086 2.604.089.176.147.381.03.615-.117.234-.176.381-.351.586-.176.206-.369.459-.527.616-.176.176-.359.366-.155.718s.908 1.499 1.949 2.427c1.338 1.193 2.466 1.563 2.817 1.739.351.176.557.147.762-.088.206-.234.882-1.029 1.116-1.382.234-.356.468-.293.79-.176.323.117 2.043.965 2.394 1.14.351.176.585.264.672.41.089.147.089.824-.204 1.65z"/>
            </svg>
            WhatsApp schreiben
          </a>
        </div>

        <!-- Right: Contact Form -->
        <div v-scroll-reveal="'fade-left'" class="ac__form-side">
          <div class="ac__form-card">
            <h3 class="ac__form-title">Kontakt aufnehmen</h3>
            <p class="ac__form-text">
              Schildern Sie mir Ihren Fall unverbindlich. Ich melde mich zeitnah bei Ihnen.
            </p>
            <UiContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhPhone, PhEnvelope, PhMapPin, PhClock } from '@phosphor-icons/vue'
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.ac {
  position: relative;

  // Dark-section text overrides
  .section-label {
    color: $color-accent;
  }

  h2 {
    color: $color-white;
  }

  &__layout {
    display: grid;
    grid-template-columns: 5fr 7fr;
    gap: 3rem;
    align-items: start;

    @media (max-width: $bp-lg) {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }

  // ── Profile column ──
  &__profile {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__portrait {
    position: relative;
    border-radius: $radius-lg;
    overflow: hidden;
    aspect-ratio: 4 / 5;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__portrait-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.5rem;
    background: linear-gradient(to top, rgba($color-primary-deeper, 0.92) 0%, transparent 100%);
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  &__portrait-name {
    font-family: $font-heading;
    font-size: 1.4rem;
    font-weight: 700;
    color: $color-white;
    letter-spacing: -0.02em;
  }

  &__portrait-role {
    font-size: 0.82rem;
    color: $color-accent;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  &__bio {
    p {
      font-size: 0.92rem;
      color: rgba($color-white, 0.7);
      line-height: 1.7;
      margin-bottom: 0.6rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  // ── Contact details (compact 2x2 grid) ──
  &__details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;

    @media (max-width: $bp-sm) {
      grid-template-columns: 1fr;
    }
  }

  &__detail {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 0.75rem;
    border-radius: $radius-sm;
    background: rgba($color-white, 0.06);
    text-decoration: none;
    color: rgba($color-white, 0.8);
    font-size: 0.82rem;
    font-weight: 500;
    transition: all $transition-fast;

    svg {
      color: $color-accent;
      flex-shrink: 0;
    }

    &:hover {
      background: rgba($color-white, 0.1);
    }

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &__whatsapp {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.65rem 1rem;
    border-radius: $radius-sm;
    background: rgba(#25d366, 0.12);
    color: #5ee89c;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    transition: all $transition-fast;
    align-self: flex-start;

    &:hover {
      background: rgba(#25d366, 0.22);
    }
  }

  // ── Form column ──
  &__form-side {
    @media (min-width: calc($bp-lg + 1px)) {
      position: sticky;
      top: 100px;
    }
  }

  &__form-card {
    background: $color-white;
    border: 1px solid rgba($color-gray, 0.15);
    border-radius: $radius-lg;
    padding: 2rem;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
  }

  &__form-title {
    font-family: $font-heading;
    font-size: 1.3rem;
    font-weight: 700;
    color: $color-primary;
    margin-bottom: 0.4rem;
  }

  &__form-text {
    font-size: 0.88rem;
    color: $color-text-light;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
}
</style>
