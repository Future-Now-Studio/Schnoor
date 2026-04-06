<script setup lang="ts">
import { PhMapPin, PhPhone, PhEnvelope, PhArrowRight } from '@phosphor-icons/vue'
</script>

<template>
  <footer class="footer">
    <div class="footer__accent-bar"></div>
    <div class="footer__main">
      <div class="container">
        <!-- Upper: Logo + CTA -->
        <div class="footer__top">
          <div class="footer__brand">
            <div class="footer__logo">
              <img src="~/assets/images/Schnoorlogoneu.png" alt="Kanzlei Schnoor" class="footer__logo-mark" />
              <div>
                <div class="footer__logo-name">Philipp Schnoor</div>
                <div class="footer__logo-sub">Rechtsanwalt &amp; Strafverteidiger</div>
              </div>
            </div>
            <p class="footer__desc">
              Kompetente Rechtsberatung in Hamburg. Spezialisiert auf Mietrecht und Strafrecht –
              mit umfangreicher praktischer Erfahrung im Verkehrsrecht.
            </p>
          </div>
          <div class="footer__cta">
            <NuxtLink to="/kontakt" class="btn btn--accent">
              Erstberatung vereinbaren
              <PhArrowRight :size="16" weight="light" />
            </NuxtLink>
          </div>
        </div>

        <div class="footer__divider"></div>

        <!-- Middle: Navigation columns -->
        <div class="footer__grid">
          <div class="footer__col">
            <h4 class="footer__heading">Rechtsgebiete</h4>
            <nav class="footer__links">
              <NuxtLink to="/mietrecht">Mietrecht</NuxtLink>
              <NuxtLink to="/strafrecht">Strafrecht</NuxtLink>
              <NuxtLink to="/verkehrsrecht">Verkehrsrecht</NuxtLink>
            </nav>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">Kanzlei</h4>
            <nav class="footer__links">
              <NuxtLink to="/">Startseite</NuxtLink>
              <NuxtLink to="/kontakt">Kontakt</NuxtLink>
              <NuxtLink to="/impressum">Impressum</NuxtLink>
              <NuxtLink to="/datenschutz">Datenschutz</NuxtLink>
            </nav>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">Kontakt</h4>
            <div class="footer__contact-items">
              <div class="footer__contact-item">
                <PhMapPin :size="16" weight="light" />
                <span>Papenreye 61, 22453 Hamburg</span>
              </div>
              <div class="footer__contact-item">
                <PhPhone :size="16" weight="light" />
                <a href="tel:+4915730871236">+49 1573 0871236</a>
              </div>
              <div class="footer__contact-item">
                <PhEnvelope :size="16" weight="light" />
                <a href="mailto:info@schnoorrechtsanwalt.de">info@schnoorrechtsanwalt.de</a>
              </div>
            </div>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">Termine</h4>
            <p class="footer__hour-note">Termine ausschließlich nach Vereinbarung<br />In Notfällen telefonisch immer erreichbar</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p>&copy; {{ new Date().getFullYear() }} Philipp Schnoor – Rechtsanwalt &amp; Strafverteidiger. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.footer {
  position: relative;

  &__accent-bar {
    height: 2px;
    background: linear-gradient(90deg, transparent 5%, $color-accent 20%, $color-accent-light 50%, $color-accent 80%, transparent 95%);
  }

  &__main {
    background: $color-primary;
    padding: 3.5rem 0 2.5rem;
  }

  // Top section: Brand + CTA
  &__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: $bp-md) {
      flex-direction: column;
    }
  }

  &__brand {
    max-width: 420px;
  }

  &__cta {
    flex-shrink: 0;

    .btn {
      white-space: nowrap;
    }
  }

  &__divider {
    height: 1px;
    background: rgba($color-white, 0.08);
    margin: 2.5rem 0;
  }

  // Logo
  &__logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.2rem;
  }

  &__logo-mark {
    width: 52px;
    height: 52px;
    object-fit: contain;
    border-radius: $radius-sm;
  }

  &__logo-name {
    font-family: $font-heading;
    font-size: 1.3rem;
    font-weight: 700;
    color: $color-white;
  }

  &__logo-sub {
    font-size: 0.68rem;
    color: $color-accent;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 600;
  }

  &__desc {
    font-size: 0.88rem;
    color: rgba($color-white, 0.7);
    line-height: 1.7;
  }

  // Grid
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1.3fr 1fr;
    gap: 3rem;

    @media (max-width: $bp-lg) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: $bp-sm) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  &__heading {
    font-family: $font-heading;
    font-size: 1.05rem;
    font-weight: 700;
    color: $color-white;
    margin-bottom: 1.2rem;
    position: relative;
    padding-bottom: 0.75rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 24px;
      height: 2px;
      background: $color-accent;
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    a {
      font-size: 0.88rem;
      color: rgba($color-white, 0.6);
      text-decoration: none;
      transition: all $transition-fast;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: $color-accent;
        transform: translateX(3px);
      }
    }
  }

  // Contact items with icons
  &__contact-items {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  &__contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    font-size: 0.88rem;
    color: rgba($color-white, 0.6);

    svg {
      color: $color-accent;
      flex-shrink: 0;
      margin-top: 2px;
    }

    a {
      color: rgba($color-white, 0.6);
      text-decoration: none;
      transition: color $transition-fast;

      &:hover {
        color: $color-accent;
      }
    }
  }

  // Hours
  &__hours {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__hour-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.88rem;
    color: rgba($color-white, 0.6);
    gap: 1rem;

    span:first-child {
      color: rgba($color-white, 0.8);
      font-weight: 500;
    }
  }

  &__hour-note {
    margin-top: 0.75rem;
    font-size: 0.8rem;
    color: rgba($color-white, 0.4);
    font-style: italic;
    line-height: 1.5;
  }

  // Bottom bar
  &__bottom {
    background: $color-primary-deeper;
    padding: 1.2rem 0;
  }

  &__bottom-inner {
    text-align: center;

    p {
      font-size: 0.75rem;
      color: rgba($color-white, 0.4);
      letter-spacing: 0.3px;
    }
  }
}
</style>
