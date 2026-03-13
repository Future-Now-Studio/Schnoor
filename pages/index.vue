<template>
  <div>
    <!-- Hero -->
    <SectionsHeroSection
      variant="home"
      label="Rechtsanwalt in Hamburg"
      subtitle="Rechtsanwalt und Strafverteidiger Philipp Schnoor – kompetente und persönliche Rechtsberatung in Hamburg. Ich setze mich entschlossen für Ihre Interessen ein."
      wave-fill="#f7f5f2"
      background-image="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <template #title>
        Ihr Recht.<br />
        <span class="highlight">Mein Engagement.</span>
      </template>
      <template #actions>
        <NuxtLink to="/kontakt" class="btn btn--gold btn--lg">
          Erstberatung vereinbaren
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </NuxtLink>
        <a href="tel:+4940XXXXXXXX" class="btn btn--white btn--lg">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          Jetzt anrufen
        </a>
      </template>
    </SectionsHeroSection>

    <!-- Kanzlei in Zahlen -->
    <SectionsStatsCounter />

    <!-- Rechtsgebiete -->
    <section class="services section">
      <div class="container">
        <div v-scroll-reveal class="section-header">
          <span class="section-label">Rechtsgebiete</span>
          <h2>Wie kann ich Ihnen helfen?</h2>
          <div class="gold-line"></div>
          <p>Ich berate und vertrete Sie kompetent in den folgenden Rechtsgebieten.</p>
        </div>
        <div v-scroll-reveal data-stagger class="grid grid--3">
          <UiServiceCard
            title="Mietrecht"
            description="Von Mietvertragsprüfung bis Räumungsschutz – ich schütze Ihre Rechte als Mieter oder Vermieter und finde faire Lösungen."
            to="/mietrecht"
            number="01"
          >
            <template #icon>
              <svg viewBox="0 0 32 32" width="38" height="38">
                <path d="M4 13l12-9 12 9v14a3 3 0 01-3 3H7a3 3 0 01-3-3z" fill="currentColor" opacity="0.1" />
                <path d="M4 13l12-9 12 9v14a3 3 0 01-3 3H7a3 3 0 01-3-3z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round" />
                <rect x="12" y="18" width="8" height="12" rx="1" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.5" />
              </svg>
            </template>
          </UiServiceCard>

          <UiServiceCard
            title="Strafrecht"
            description="Als erfahrener Strafverteidiger stehe ich Ihnen vom Ermittlungsverfahren bis zur Hauptverhandlung konsequent zur Seite."
            to="/strafrecht"
            number="02"
          >
            <template #icon>
              <svg viewBox="0 0 32 32" width="38" height="38">
                <path d="M16 29s10-5 10-13V7l-10-4-10 4v9c0 8 10 13 10 13z" fill="currentColor" opacity="0.1" />
                <path d="M16 29s10-5 10-13V7l-10-4-10 4v9c0 8 10 13 10 13z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round" />
                <path d="M12 16l3 3 5-6" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </template>
          </UiServiceCard>

          <UiServiceCard
            title="Verkehrsrecht"
            description="Bußgeldbescheid, Fahrverbot oder Führerscheinentzug? Ich prüfe Ihren Fall und setze Ihre Rechte durch."
            to="/verkehrsrecht"
            number="03"
          >
            <template #icon>
              <svg viewBox="0 0 32 32" width="38" height="38">
                <rect x="2" y="7" width="19" height="13" rx="3" fill="currentColor" opacity="0.1" />
                <rect x="2" y="7" width="19" height="13" rx="3" stroke="currentColor" stroke-width="1.5" fill="none" />
                <polygon points="21 11 26 11 30 15 30 21 21 21 21 11" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                <circle cx="8" cy="24" r="3" stroke="currentColor" stroke-width="1.5" fill="currentColor" opacity="0.15" />
                <circle cx="24" cy="24" r="3" stroke="currentColor" stroke-width="1.5" fill="currentColor" opacity="0.15" />
              </svg>
            </template>
          </UiServiceCard>
        </div>
      </div>
    </section>

    <!-- Warum Kanzlei Schnoor -->
    <section class="why section section--dark">
      <div class="why__bg-pattern"></div>
      <div class="container">
        <div v-scroll-reveal class="section-header">
          <span class="section-label">Ihre Vorteile</span>
          <h2>Warum Kanzlei Schnoor?</h2>
          <div class="gold-line"></div>
        </div>
        <div v-scroll-reveal data-stagger class="why__bento">
          <div v-for="item in advantages" :key="item.title" class="why__card">
            <!-- Abstract visual background -->
            <div class="why__card-visual" v-html="item.visual"></div>
            <!-- Icon -->
            <div class="why__card-icon" v-html="item.icon"></div>
            <!-- Content -->
            <h3 class="why__card-title">{{ item.title }}</h3>
            <p class="why__card-text">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Reviews -->
    <SectionsGoogleReviews />

    <!-- Über mich & Kontakt -->
    <section class="about-contact section section--light">
      <div class="container">
        <div v-scroll-reveal class="section-header">
          <span class="section-label">Ihr Anwalt</span>
          <h2>Persönlich für Sie da</h2>
          <div class="gold-line"></div>
        </div>

        <div class="about-contact__grid">
          <!-- Über mich -->
          <div v-scroll-reveal="'fade-right'" class="about-contact__about">
            <div class="about-contact__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                alt="Rechtsanwalt Philipp Schnoor"
                loading="lazy"
              />
              <div class="about-contact__image-frame"></div>
              <div class="about-contact__badge">
                <span class="about-contact__badge-number">100%</span>
                <span class="about-contact__badge-text">Engagement</span>
              </div>
            </div>
            <div class="about-contact__bio">
              <h3 class="about-contact__name">Philipp Schnoor</h3>
              <p class="about-contact__tagline">Rechtsanwalt &amp; Strafverteidiger mit Leidenschaft für die Interessen seiner Mandanten</p>
              <p>
                Als Rechtsanwalt in Hamburg stehe ich Ihnen mit voller Überzeugung zur Seite. Mein Anspruch ist es,
                für jeden Mandanten die bestmögliche Lösung zu finden – persönlich, engagiert und transparent.
              </p>
              <p>
                Ich nehme mir Zeit für Ihren Fall, erkläre Ihnen jeden Schritt verständlich und kämpfe konsequent
                für Ihr Recht. Ob Mietstreitigkeit, Strafverfahren oder Verkehrsordnungswidrigkeit – bei mir sind
                Sie in guten Händen.
              </p>
            </div>
          </div>

          <!-- Kontakt -->
          <div v-scroll-reveal="'fade-left'" class="about-contact__contact">
            <div class="about-contact__card">
              <h3 class="about-contact__card-title">Kontakt aufnehmen</h3>
              <p class="about-contact__card-text">
                Schildern Sie mir Ihren Fall unverbindlich. Ich melde mich zeitnah bei Ihnen – persönlich und diskret.
              </p>

              <!-- Contact Form -->
              <div class="about-contact__form-wrapper">
                <UiContactForm />
              </div>

              <!-- Contact Details -->
              <div class="about-contact__divider">
                <span>oder kontaktieren Sie mich direkt</span>
              </div>

              <div class="about-contact__items">
                <a href="tel:+4940XXXXXXXX" class="about-contact__item">
                  <div class="about-contact__item-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <span class="about-contact__item-label">Telefon</span>
                    <span class="about-contact__item-value">040 – XXX XXX XX</span>
                  </div>
                </a>

                <a href="mailto:kontakt@schnoor-rechtsanwalt.de" class="about-contact__item">
                  <div class="about-contact__item-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <span class="about-contact__item-label">E-Mail</span>
                    <span class="about-contact__item-value">kontakt@schnoor-rechtsanwalt.de</span>
                  </div>
                </a>

                <div class="about-contact__item">
                  <div class="about-contact__item-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <span class="about-contact__item-label">Adresse</span>
                    <span class="about-contact__item-value">Musterstraße 42, 20095 Hamburg</span>
                  </div>
                </div>

                <div class="about-contact__item">
                  <div class="about-contact__item-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <span class="about-contact__item-label">Bürozeiten</span>
                    <span class="about-contact__item-value">Mo – Fr: 09:00 – 18:00 Uhr</span>
                  </div>
                </div>
              </div>

              <div class="about-contact__actions">
                <a
                  href="https://wa.me/4915123456789?text=Guten%20Tag%20Herr%20Schnoor%2C%20ich%20habe%20eine%20rechtliche%20Frage."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn--outline about-contact__btn"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12.003 0h-.006C5.376 0 0 5.382 0 12c0 2.625.846 5.058 2.285 7.034L.79 23.468l4.589-1.469A11.93 11.93 0 0012.003 24C18.62 24 24 18.617 24 12S18.62 0 12.003 0zm6.987 16.96c-.293.824-1.449 1.51-2.379 1.71-.636.136-1.467.244-4.263-.916-3.579-1.484-5.879-5.12-6.057-5.357-.171-.237-1.439-1.917-1.439-3.656s.911-2.593 1.233-2.949c.323-.356.705-.444.939-.444s.468.001.672.012c.216.011.505-.083.79.603.293.705.999 2.429 1.086 2.604.089.176.147.381.03.615-.117.234-.176.381-.351.586-.176.206-.369.459-.527.616-.176.176-.359.366-.155.718s.908 1.499 1.949 2.427c1.338 1.193 2.466 1.563 2.817 1.739.351.176.557.147.762-.088.206-.234.882-1.029 1.116-1.382.234-.356.468-.293.79-.176.323.117 2.043.965 2.394 1.14.351.176.585.264.672.41.089.147.089.824-.204 1.65z"/>
                  </svg>
                  WhatsApp schreiben
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Rechtsanwalt Philipp Schnoor | Anwalt Hamburg | Mietrecht, Strafrecht, Verkehrsrecht',
  ogTitle: 'Rechtsanwalt Philipp Schnoor – Anwalt & Strafverteidiger in Hamburg',
  description: 'Rechtsanwalt Philipp Schnoor in Hamburg – Ihr Anwalt für Mietrecht, Strafrecht und Verkehrsrecht. Persönliche Beratung, schnelle Erreichbarkeit und kompetente Vertretung.',
  ogDescription: 'Kompetente Rechtsberatung in Hamburg. Spezialisiert auf Mietrecht, Strafrecht und Verkehrsrecht. Jetzt Erstgespräch vereinbaren.',
})

const advantages = [
  {
    icon: '<svg viewBox="0 0 24 24" width="36" height="36"><circle cx="12" cy="7" r="4" fill="currentColor" opacity="0.2"/><circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
    visual: '<svg viewBox="0 0 200 200" fill="none"><circle cx="160" cy="40" r="80" fill="currentColor" opacity="0.03"/><circle cx="160" cy="40" r="40" fill="currentColor" opacity="0.02"/></svg>',
    title: 'Persönliche Betreuung',
    desc: 'Bei mir sind Sie keine Aktennummer. Ich nehme mir Zeit für Ihren Fall und bin persönlich für Sie da.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="36" height="36"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72" fill="currentColor" opacity="0.15"/><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
    visual: '<svg viewBox="0 0 200 200" fill="none"><rect x="120" y="-20" width="120" height="120" rx="30" transform="rotate(15)" fill="currentColor" opacity="0.025"/></svg>',
    title: 'Schnelle Erreichbarkeit',
    desc: 'Per Telefon, E-Mail oder WhatsApp – ich bin für Sie erreichbar und reagiere zeitnah auf Ihre Anfragen.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="36" height="36"><rect x="2" y="4" width="20" height="16" rx="3" fill="currentColor" opacity="0.15"/><rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M2 10h20" stroke="currentColor" stroke-width="1.5"/><circle cx="7" cy="15" r="1.5" fill="currentColor"/><path d="M11 15h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    visual: '<svg viewBox="0 0 200 200" fill="none"><polygon points="180,160 140,80 220,80" fill="currentColor" opacity="0.02"/><polygon points="160,180 120,100 200,100" fill="currentColor" opacity="0.015"/></svg>',
    title: 'Transparente Kosten',
    desc: 'Keine versteckten Gebühren. Ich informiere Sie vorab über die zu erwartenden Kosten und mögliche Kostenübernahmen.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="36" height="36"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" opacity="0.15"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    visual: '<svg viewBox="0 0 200 200" fill="none"><circle cx="30" cy="170" r="100" fill="currentColor" opacity="0.025"/><circle cx="30" cy="170" r="50" fill="currentColor" opacity="0.02"/></svg>',
    title: 'Erfahrung & Kompetenz',
    desc: 'Fundierte juristische Ausbildung und praktische Erfahrung – ich kenne die Strategien, die zum Erfolg führen.',
  },
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

// About & Contact combined section
.about-contact {
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @media (max-width: $bp-lg) {
      gap: 2rem;
    }
  }

  // About side
  &__about {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__image-wrap {
    position: relative;
    max-width: 420px;

    img {
      border-radius: $radius-lg;
      box-shadow: $shadow-lg;
      width: 100%;
      position: relative;
      z-index: 2;
    }
  }

  &__image-frame {
    position: absolute;
    top: 16px;
    left: 16px;
    right: -16px;
    bottom: -16px;
    border: 2px solid $color-accent;
    border-radius: $radius-lg;
    z-index: 1;
  }

  &__badge {
    position: absolute;
    bottom: -10px;
    right: -10px;
    background: linear-gradient(135deg, $color-accent, $color-accent-light);
    color: $color-primary-dark;
    padding: 1rem 1.3rem;
    border-radius: $radius-md;
    z-index: 3;
    box-shadow: $shadow-accent;
    text-align: center;

    &-number {
      display: block;
      font-family: $font-heading;
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1;
    }

    &-text {
      display: block;
      font-size: 0.65rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 0.2rem;
    }
  }

  &__bio {
    p {
      color: $color-text-light;
      line-height: 1.75;
      margin-bottom: 0.8rem;
    }
  }

  &__name {
    font-family: $font-heading;
    font-size: 1.8rem;
    font-weight: 700;
    color: $color-primary;
    margin-bottom: 0.5rem;
  }

  &__tagline {
    font-family: $font-heading;
    font-size: 1.1rem;
    font-style: italic;
    color: $color-accent-dark;
    margin-bottom: 1.2rem;
    line-height: 1.5;
  }

  // Contact side
  &__card {
    background: $color-primary;
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: $shadow-lg;
    position: sticky;
    top: 120px;
  }

  &__card-title {
    font-family: $font-heading;
    font-size: 1.5rem;
    font-weight: 700;
    color: $color-white;
    margin-bottom: 0.6rem;
  }

  &__card-text {
    font-size: 0.92rem;
    color: rgba($color-white, 0.6);
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  // Form wrapper
  &__form-wrapper {
    margin-bottom: 2rem;
  }

  // Divider
  &__divider {
    text-align: center;
    margin: 2rem 0;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px;
      background: rgba($color-white, 0.1);
    }

    span {
      background: $color-primary;
      padding: 0 1rem;
      font-size: 0.85rem;
      color: rgba($color-white, 0.6);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      position: relative;
      z-index: 1;
    }
  }

  // Contact items
  &__items {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 2rem;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
    transition: transform $transition-fast;

    &:hover {
      transform: translateX(4px);
    }
  }

  &__item-icon {
    width: 48px;
    height: 48px;
    background: rgba($color-accent, 0.1);
    border: 1px solid rgba($color-accent, 0.15);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-accent;
    flex-shrink: 0;
    transition: all $transition-base;
  }

  &__item:hover &__item-icon {
    background: rgba($color-accent, 0.18);
    border-color: rgba($color-accent, 0.3);
  }

  &__item-label {
    display: block;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba($color-white, 0.4);
    font-weight: 600;
    margin-bottom: 0.15rem;
  }

  &__item-value {
    display: block;
    font-size: 0.95rem;
    color: $color-white;
    font-weight: 500;
  }

  // Actions
  &__actions {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba($color-white, 0.08);
  }

  &__btn {
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  .btn--outline {
    background: transparent;
    border: 1px solid rgba($color-accent, 0.3);
    color: $color-accent;
    padding: 0.85rem 1.5rem;
    border-radius: $radius-md;
    font-size: 0.9rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    transition: all $transition-base;
    cursor: pointer;

    &:hover {
      background: rgba($color-accent, 0.1);
      border-color: rgba($color-accent, 0.5);
      color: $color-accent-light;
    }
  }
}

// Why Section – Bento Grid
.why {
  overflow: hidden;

  &__bg-pattern {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 10% 20%, rgba($color-accent, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 90% 80%, rgba($color-accent, 0.04) 0%, transparent 50%);
    pointer-events: none;
  }

  .section-header {
    position: relative;
  }

  // Bento Grid
  &__bento {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    position: relative;

    @media (max-width: $bp-md) {
      grid-template-columns: 1fr;
    }
  }

  // Card
  &__card {
    position: relative;
    padding: 2.8rem 2.5rem;
    border-radius: 20px;
    border: 1px solid rgba($color-accent, 0.07);
    background: linear-gradient(160deg, rgba($color-white, 0.05) 0%, rgba($color-white, 0.01) 100%);
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

    // Bottom accent line
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 2rem;
      right: 2rem;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba($color-accent, 0.25), transparent);
      transform: scaleX(0);
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    &:hover {
      border-color: rgba($color-accent, 0.15);
      background: linear-gradient(160deg, rgba($color-white, 0.07) 0%, rgba($color-white, 0.02) 100%);
      transform: translateY(-6px);
      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);

      &::after {
        transform: scaleX(1);
      }

      .why__card-icon {
        background: linear-gradient(135deg, rgba($color-accent, 0.15), rgba($color-accent, 0.08));
        border-color: rgba($color-accent, 0.25);
        transform: scale(1.08);
      }

      .why__card-visual {
        opacity: 1;
        transform: scale(1.1);
      }

      .why__card-title {
        color: $color-accent-light;
      }
    }

    @media (max-width: $bp-sm) {
      padding: 2rem 1.8rem;
    }
  }

  // Abstract visual background
  &__card-visual {
    position: absolute;
    inset: 0;
    color: $color-accent;
    opacity: 0.7;
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;

    :deep(svg) {
      width: 100%;
      height: 100%;
    }
  }

  // Icon
  &__card-icon {
    width: 64px;
    height: 64px;
    background: rgba($color-accent, 0.06);
    border: 1px solid rgba($color-accent, 0.08);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-accent;
    margin-bottom: 1.8rem;
    position: relative;
    z-index: 1;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &__card-title {
    font-family: $font-heading;
    font-size: 1.4rem;
    color: $color-white;
    margin-bottom: 0.7rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    position: relative;
    z-index: 1;
    transition: color 0.4s ease;
  }

  &__card-text {
    font-size: 0.92rem;
    color: rgba($color-white, 0.5);
    line-height: 1.75;
    position: relative;
    z-index: 1;
    max-width: 420px;
  }
}
</style>
