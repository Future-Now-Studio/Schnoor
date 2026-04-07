<template>
  <div>
    <SectionsHeroSection
      variant="page"
      label="Kontakt"
      title="Kontakt – Rechtsanwalt Hamburg"
      subtitle="Ich berate Sie in <strong>Mietrecht</strong>, <strong>Strafrecht</strong> und <strong>Verkehrsrecht</strong> – sowie in vielen weiteren rechtlichen Fragen. Schildern Sie mir Ihr Anliegen, ich melde mich <strong>zeitnah</strong>, <strong>persönlich</strong> und <strong>vertraulich</strong>."
      :background-image="schnoor"
    />

    <section class="kontakt section">
      <div class="container">
        <!-- Formular -->
        <div v-scroll-reveal class="kontakt__form-block">
          <h2>Schreiben Sie mir</h2>
          <p class="kontakt__intro">
            Schildern Sie kurz Ihr Anliegen und wählen Sie Ihren bevorzugten Rückmeldeweg –
            ich melde mich persönlich bei Ihnen.
          </p>
          <UiContactForm />
        </div>

        <!-- Kontaktinfos kompakt -->
        <div v-scroll-reveal class="kontakt__infos">
          <div class="kontakt__info-item">
            <PhPhone :size="20" weight="light" />
            <a href="tel:+4915730871236">+49 1573 0871236</a>
          </div>

          <div class="kontakt__info-item">
            <PhEnvelope :size="20" weight="light" />
            <a href="mailto:info@schnoorrechtsanwalt.de">info@schnoorrechtsanwalt.de</a>
          </div>

          <a
            href="https://wa.me/4915730871236?text=Guten%20Tag%20Herr%20Schnoor%2C%20ich%20habe%20eine%20rechtliche%20Frage."
            target="_blank"
            rel="noopener noreferrer"
            class="kontakt__whatsapp"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12.003 0h-.006C5.376 0 0 5.382 0 12c0 2.625.846 5.058 2.285 7.034L.79 23.468l4.589-1.469A11.93 11.93 0 0012.003 24C18.62 24 24 18.617 24 12S18.62 0 12.003 0zm6.987 16.96c-.293.824-1.449 1.51-2.379 1.71-.636.136-1.467.244-4.263-.916-3.579-1.484-5.879-5.12-6.057-5.357-.171-.237-1.439-1.917-1.439-3.656s.911-2.593 1.233-2.949c.323-.356.705-.444.939-.444s.468.001.672.012c.216.011.505-.083.79.603.293.705.999 2.429 1.086 2.604.089.176.147.381.03.615-.117.234-.176.381-.351.586-.176.206-.369.459-.527.616-.176.176-.359.366-.155.718s.908 1.499 1.949 2.427c1.338 1.193 2.466 1.563 2.817 1.739.351.176.557.147.762-.088.206-.234.882-1.029 1.116-1.382.234-.356.468-.293.79-.176.323.117 2.043.965 2.394 1.14.351.176.585.264.672.41.089.147.089.824-.204 1.65z"/>
            </svg>
            WhatsApp schreiben
          </a>

          <div class="kontakt__info-item">
            <PhClock :size="20" weight="light" />
            <span>Termine ausschließlich nach Vereinbarung – in Notfällen telefonisch immer erreichbar</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PhPhone, PhEnvelope, PhClock } from '@phosphor-icons/vue'
import schnoor from '~/assets/images/Schnoor-Kontak.webp'

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
  &__form-block {
    max-width: 720px;
    margin: 0 auto 3rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
  }

  &__intro {
    color: $color-text-light;
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  &__infos {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 2.5rem;
    border-top: 1px solid rgba($color-gray, 0.2);
    align-items: center;
  }

  &__info-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: $color-text;

    svg {
      color: $color-primary-light;
      flex-shrink: 0;
    }

    a {
      color: $color-primary-dark;
      text-decoration: none;

      &:hover {
        color: $color-primary-light;
      }
    }

    p {
      margin: 0;
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }

  &__whatsapp {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: $radius-sm;
    background: rgba(#25d366, 0.1);
    color: #128c7e;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    transition: all $transition-fast;

    &:hover {
      background: rgba(#25d366, 0.2);
    }
  }
}
</style>
