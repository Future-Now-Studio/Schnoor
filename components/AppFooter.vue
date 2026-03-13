<template>
  <footer class="footer">
    <!-- Top accent bar -->
    <div class="footer__accent-bar"></div>

    <div class="footer__main">
      <div class="container">
        <!-- Upper: Logo + CTA -->
        <div class="footer__top">
          <div class="footer__brand">
            <div class="footer__logo">
              <img src="~/assets/images/Logo.png" alt="Kanzlei Schnoor" class="footer__logo-mark" />
              <div>
                <div class="footer__logo-name">Philipp Schnoor</div>
                <div class="footer__logo-sub">Rechtsanwalt &amp; Strafverteidiger</div>
              </div>
            </div>
            <p class="footer__desc">
              Kompetente Rechtsberatung in Hamburg. Spezialisiert auf Mietrecht,
              Strafrecht und Verkehrsrecht – persönlich, engagiert und lösungsorientiert.
            </p>
          </div>
          <div class="footer__cta">
            <NuxtLink to="/kontakt" class="btn btn--accent">
              Erstberatung vereinbaren
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
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
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Musterstraße 42, 20095 Hamburg</span>
              </div>
              <div class="footer__contact-item">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+4940XXXXXXXX">040 – XXX XXX XX</a>
              </div>
              <div class="footer__contact-item">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:kontakt@schnoor-rechtsanwalt.de">kontakt@schnoor-rechtsanwalt.de</a>
              </div>
            </div>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">Bürozeiten</h4>
            <div class="footer__hours">
              <div class="footer__hour-row">
                <span>Mo – Fr</span>
                <span>09:00 – 18:00</span>
              </div>
              <div class="footer__hour-row">
                <span>Sa – So</span>
                <span>geschlossen</span>
              </div>
              <p class="footer__hour-note">Termine nach Vereinbarung<br />auch außerhalb der Bürozeiten</p>
            </div>
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

  // Gold accent line at top
  &__accent-bar {
    height: 3px;
    background: linear-gradient(90deg, $color-accent, $color-accent-light, $color-accent);
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
    background: rgba($color-white, 0.1);
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
    color: rgba($color-white, 0.6);
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
      font-size: 0.78rem;
      color: rgba($color-white, 0.4);
      letter-spacing: 0.3px;
    }
  }
}
</style>
