<template>
  <div>
    <SectionsHeroSection
      variant="page"
      label="Kontakt"
      title="Kontakt aufnehmen"
      subtitle="Schildern Sie mir Ihr Anliegen. Ich melde mich zeitnah bei Ihnen – persönlich und vertraulich."
      :background-image="schnoor"
    />

    <section class="kontakt section">
      <div class="container">
        <div class="kontakt__grid">
          <!-- Form -->
          <div v-scroll-reveal="'fade-right'" class="kontakt__form-wrapper">
            <h2>Schreiben Sie mir</h2>
            <p class="kontakt__intro">
              Das Kontaktformular ist der schnellste Weg zu mir. Schildern Sie kurz Ihr Anliegen und
              wählen Sie Ihren bevorzugten Rückmeldeweg – ich melde mich persönlich bei Ihnen.
            </p>
            <UiContactForm />
          </div>

          <!-- Info Sidebar -->
          <aside v-scroll-reveal="'fade-left'" class="kontakt__info">
            <div class="kontakt__card">
              <h3>Kanzlei Schnoor</h3>
              <div class="kontakt__detail">
                <PhMapPin :size="20" weight="light" />
                <div>
                  <p>Philipp Schnoor</p>
                  <p>Rechtsanwalt & Strafverteidiger</p>
                  <p class="kontakt__address">Papenreye 61</p>
                  <p>22453 Hamburg</p>
                </div>
              </div>

              <div class="kontakt__detail">
                <PhPhone :size="20" weight="light" />
                <div>
                  <a href="tel:+4940XXXXXXXX">040 – XXX XXX XX</a>
                </div>
              </div>

              <div class="kontakt__detail">
                <PhEnvelope :size="20" weight="light" />
                <div>
                  <a href="mailto:kontakt@schnoor-rechtsanwalt.de">kontakt@schnoor-rechtsanwalt.de</a>
                </div>
              </div>

              <div class="kontakt__detail">
                <PhClock :size="20" weight="light" />
                <div>
                  <p><strong>Bürozeiten:</strong></p>
                  <p>Mo – Fr: 09:00 – 18:00 Uhr</p>
                  <p>Termine nach Vereinbarung</p>
                </div>
              </div>
            </div>

            <div class="kontakt__card kontakt__card--accent">
              <h3>Erstberatung</h3>
              <p>
                Im Erstgespräch schildern Sie mir Ihren Fall und ich gebe Ihnen eine erste Einschätzung 
                der Rechtslage. Wir besprechen gemeinsam die möglichen Schritte und die zu erwartenden Kosten – 
                transparent und verständlich.
              </p>
              <p>
                Eine Erstberatung ist auch kurzfristig telefonisch oder per Video möglich.
              </p>
            </div>

            <div class="kontakt__card kontakt__card--whatsapp">
              <h3>WhatsApp</h3>
              <p>Sie können mich auch unkompliziert per WhatsApp erreichen:</p>
              <a
                href="https://wa.me/4915123456789?text=Guten%20Tag%20Herr%20Schnoor%2C%20ich%20habe%20eine%20rechtliche%20Frage."
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--primary"
              >
                <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.907 15.907 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0z"/>
                </svg>
                WhatsApp öffnen
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Google Maps -->
    <section class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.5!2d9.99!3d53.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDMzJzAwLjAiTiA5wrA1OSczMC4wIkU!5e0!3m2!1sde!2sde!4v1!5m2!1sde!2sde"
        width="100%"
        height="400"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Kanzlei Schnoor Hamburg – Standort"
      ></iframe>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PhMapPin, PhPhone, PhEnvelope, PhClock } from '@phosphor-icons/vue'
import schnoor from '~/assets/images/Schnoor.webp'

useSeoMeta({
  title: 'Kontakt | Rechtsanwalt Philipp Schnoor Hamburg – Termin vereinbaren',
  ogTitle: 'Kontakt – Rechtsanwalt Philipp Schnoor Hamburg',
  description: 'Kontaktieren Sie Rechtsanwalt Philipp Schnoor in Hamburg. Termin für Erstberatung vereinbaren – telefonisch, per E-Mail oder WhatsApp. Mietrecht, Strafrecht, Verkehrsrecht.',
  ogDescription: 'Rechtsanwalt Schnoor in Hamburg kontaktieren. Jetzt Erstberatung vereinbaren.',
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.kontakt {
  &__grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 4rem;
    align-items: flex-start;

    @media (max-width: $bp-lg) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  &__intro {
    color: $color-text-light;
    margin-bottom: 2rem;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__card {
    background: $color-white;
    border: 1px solid rgba($color-gray, 0.15);
    border-radius: $radius-md;
    padding: 2rem;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 0.9rem;
      color: $color-text-light;
      line-height: 1.6;
    }

    &--accent {
      background: $color-off-white;
      border-color: rgba($color-accent, 0.3);
    }

    &--whatsapp {
      background: rgba(37, 211, 102, 0.05);
      border-color: rgba(37, 211, 102, 0.2);

      h3 {
        color: #128c7e;
      }

      .btn {
        margin-top: 1rem;
        background: #25d366;
        border-color: #25d366;

        &:hover {
          background: #1da851;
        }
      }
    }
  }

  &__detail {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    align-items: flex-start;

    &:last-child {
      margin-bottom: 0;
    }

    svg {
      color: $color-primary-light;
      flex-shrink: 0;
      margin-top: 2px;
    }

    p {
      margin-bottom: 0;
      font-size: 0.9rem;
      color: $color-text;
    }

    a {
      font-size: 0.9rem;
      color: $color-primary-dark;
      text-decoration: none;

      &:hover {
        color: $color-primary-light;
      }
    }
  }

  &__address {
    margin-top: 0.5rem;
  }
}

.map {
  iframe {
    display: block;
    width: 100%;
  }
}
</style>
