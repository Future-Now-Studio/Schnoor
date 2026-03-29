<template>
  <section class="ac section section--dark">
    <div class="container">
      <div v-scroll-reveal class="section-header">
        <span class="section-label">Ihr Anwalt</span>
        <h2>Persönlich für Sie da</h2>
        <UiAnchorDivider />
      </div>

      <!-- Main Card: Image left, Form right -->
      <div v-scroll-reveal class="ac__card">
        <div class="ac__card-left">
          <img
            src="~/assets/images/J68A5144.jpg"
            alt="Rechtsanwalt Philipp Schnoor"
            loading="lazy"
          />
          <div class="ac__card-overlay">
            <span class="ac__card-name">Philipp Schnoor</span>
            <span class="ac__card-role">Rechtsanwalt &amp; Strafverteidiger</span>
          </div>
        </div>
        <div class="ac__card-right">
          <p class="ac__bio">
            Als Rechtsanwalt in Hamburg stehe ich Ihnen mit voller Überzeugung zur Seite.
            Mein Anspruch: für jeden Mandanten die bestmögliche Lösung – persönlich, engagiert und transparent.
          </p>
          <h3 class="ac__form-title">Kontakt aufnehmen</h3>
          <UiContactForm />

          <!-- Contact channels inside card -->
          <div class="ac__channels">
            <a href="tel:+4915730871236" class="ac__channel">
              <div class="ac__channel-icon">
                <PhPhone :size="20" weight="light" />
              </div>
              <div class="ac__channel-text">
                <span class="ac__channel-label">Telefon</span>
                <span class="ac__channel-value">+49 1573 0871236</span>
              </div>
            </a>

            <a href="mailto:kontakt@schnoor-rechtsanwalt.de" class="ac__channel">
              <div class="ac__channel-icon">
                <PhEnvelope :size="20" weight="light" />
              </div>
              <div class="ac__channel-text">
                <span class="ac__channel-label">E-Mail</span>
                <span class="ac__channel-value">kontakt@schnoor-rechtsanwalt.de</span>
              </div>
            </a>

            <a
              href="https://wa.me/4915730871236?text=Guten%20Tag%20Herr%20Schnoor%2C%20ich%20habe%20eine%20rechtliche%20Frage."
              target="_blank"
              rel="noopener noreferrer"
              class="ac__channel ac__channel--wa"
            >
              <div class="ac__channel-icon ac__channel-icon--wa">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.003 0h-.006C5.376 0 0 5.382 0 12c0 2.625.846 5.058 2.285 7.034L.79 23.468l4.589-1.469A11.93 11.93 0 0012.003 24C18.62 24 24 18.617 24 12S18.62 0 12.003 0zm6.987 16.96c-.293.824-1.449 1.51-2.379 1.71-.636.136-1.467.244-4.263-.916-3.579-1.484-5.879-5.12-6.057-5.357-.171-.237-1.439-1.917-1.439-3.656s.911-2.593 1.233-2.949c.323-.356.705-.444.939-.444s.468.001.672.012c.216.011.505-.083.79.603.293.705.999 2.429 1.086 2.604.089.176.147.381.03.615-.117.234-.176.381-.351.586-.176.206-.369.459-.527.616-.176.176-.359.366-.155.718s.908 1.499 1.949 2.427c1.338 1.193 2.466 1.563 2.817 1.739.351.176.557.147.762-.088.206-.234.882-1.029 1.116-1.382.234-.356.468-.293.79-.176.323.117 2.043.965 2.394 1.14.351.176.585.264.672.41.089.147.089.824-.204 1.65z"/>
                </svg>
              </div>
              <div class="ac__channel-text">
                <span class="ac__channel-label">WhatsApp</span>
                <span class="ac__channel-value">Direkt schreiben</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhPhone, PhEnvelope } from '@phosphor-icons/vue'
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.ac {
  background: $color-primary;

  .section-label {
    color: $color-accent;
  }

  h2 {
    color: $color-white;
  }

  /* Main card */
  &__card {
    display: grid;
    grid-template-columns: 5fr 7fr;
    background: $color-white;
    border-radius: $radius-lg;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba($color-white, 0.08);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, $color-accent-dark, $color-accent, $color-accent-light, $color-accent-dark);
      z-index: 2;
    }

    @media (max-width: $bp-lg) {
      grid-template-columns: 1fr;
    }
  }

  &__card-left {
    position: relative;
    min-height: 400px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    @media (max-width: $bp-lg) {
      min-height: 300px;
    }
  }

  &__card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem 1.5rem 1.2rem;
    background: linear-gradient(to top, rgba($color-primary-deeper, 0.92) 0%, transparent 100%);
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  &__card-name {
    font-family: $font-heading;
    font-size: 1.4rem;
    font-weight: 700;
    color: $color-white;
  }

  &__card-role {
    font-size: 0.78rem;
    color: $color-accent;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  &__card-right {
    padding: 2.5rem 2.5rem 2rem;
    display: flex;
    flex-direction: column;

    @media (max-width: $bp-sm) {
      padding: 1.5rem;
    }
  }

  &__bio {
    font-size: 0.9rem;
    color: $color-text-light;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba($color-gray, 0.2);
  }

  &__form-title {
    font-family: $font-heading;
    font-size: 1.3rem;
    font-weight: 700;
    color: $color-primary;
    margin-bottom: 0.75rem;
  }

  /* Contact channels inside card */
  &__channels {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba($color-gray, 0.15);

    @media (max-width: $bp-sm) {
      grid-template-columns: 1fr;
    }
  }

  &__channel {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.8rem;
    background: $color-off-white;
    border-radius: $radius-sm;
    border: 1px solid rgba($color-gray, 0.1);
    text-decoration: none;
    transition: all $transition-base;

    &:hover {
      border-color: rgba($color-accent, 0.4);
      box-shadow: $shadow-sm;
    }

    &--wa:hover {
      border-color: rgba(#25d366, 0.4);
    }
  }

  &__channel-icon {
    width: 36px;
    height: 36px;
    border-radius: $radius-sm;
    background: rgba($color-primary, 0.07);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: $color-primary;
    transition: all $transition-base;

    .ac__channel:hover & {
      background: $color-primary;
      color: $color-accent;
    }

    &--wa {
      background: rgba(#25d366, 0.08);
      color: #128c7e;

      .ac__channel:hover & {
        background: #25d366;
        color: $color-white;
      }
    }
  }

  &__channel-text {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    min-width: 0;
  }

  &__channel-label {
    font-size: 0.62rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: $color-gray;
  }

  &__channel-value {
    font-size: 0.78rem;
    font-weight: 500;
    color: $color-text;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
