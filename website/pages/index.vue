<template>
  <div>
    <!-- Hero -->
    <SectionsHeroSection
      variant="home"
      label="Rechtsanwalt in Hamburg – klare Linie in streitigen Situationen"
      subtitle="Rechtsanwalt und Strafverteidiger <strong>Philipp Schnoor</strong> – <strong>Kündigung</strong>, <strong>Räumung</strong> oder <strong>strafrechtlicher Vorwurf</strong>? In diesen Situationen kommt es auf die <strong>richtigen Schritte</strong> an. Ich übernehme Ihre Vertretung und sorge für eine <strong>klare Strategie</strong>."
      background-image="/images/Hero-Background.jpeg"
      background-video="/images/hf_20260331_120132_a4a8c9c3-250f-4f7c-ae52-af5044ed39ab.mp4"
    >
      <template #title>
        Ihr Rechtsanwalt<br />
        <span class="highlight">aus Hamburg.</span>
      </template>
      <template #actions>
        <NuxtLink to="/kontakt" class="btn btn--accent">
          Erstberatung vereinbaren
          <PhArrowRight :size="18" weight="light" />
        </NuxtLink>
        <a href="tel:+4915730871236" class="btn btn--outline-light">
          <PhPhone :size="18" weight="light" />
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
          <UiAnchorDivider />
          <p>Ich berate und vertrete Sie kompetent in den folgenden Rechtsgebieten.</p>
        </div>
        <div v-scroll-reveal data-stagger class="services__grid">
          <UiServiceCard
            title="Mietrecht"
            description="Streit im Mietverhältnis, Kündigung oder Zahlungsrückstände: Ich vertrete Mieter und Vermieter in konflikthaften Situationen und sorge für eine klare rechtliche Einordnung."
            to="/mietrecht"
            :image="mietrechtCardImage"
            alt="Rechtsanwalt Mietrecht Hamburg – Kanzlei Schnoor"
          />

          <UiServiceCard
            title="Strafrecht"
            description="Als erfahrener Strafverteidiger stehe ich Ihnen vom Ermittlungsverfahren bis zur Hauptverhandlung konsequent zur Seite."
            to="/strafrecht"
            :image="strafrechtCardImage"
            alt="Strafverteidiger Hamburg – Rechtsanwalt Schnoor"
          />

          <UiServiceCard
            title="Verkehrsrecht"
            description="Bußgeldbescheid, Fahrverbot oder Führerscheinentzug? Ich prüfe Ihren Fall und setze Ihre Rechte durch."
            to="/verkehrsrecht"
            :image="verkehrsrechtImage"
            alt="Rechtsanwalt Verkehrsrecht Hamburg – Kanzlei Schnoor"
          />
        </div>
      </div>
    </section>

    <!-- Warum Kanzlei Schnoor -->
    <section class="why section section--dark">
      <div class="why__bg-pattern"></div>
      <div class="why__compass" aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="currentColor" stroke-width="0.5" opacity="0.08"/>
          <circle cx="200" cy="200" r="140" stroke="currentColor" stroke-width="0.3" opacity="0.06"/>
          <circle cx="200" cy="200" r="100" stroke="currentColor" stroke-width="0.3" opacity="0.04"/>
          <circle cx="200" cy="200" r="60" stroke="currentColor" stroke-width="0.3" opacity="0.03"/>
          <line x1="200" y1="10" x2="200" y2="390" stroke="currentColor" stroke-width="0.5" opacity="0.06"/>
          <line x1="10" y1="200" x2="390" y2="200" stroke="currentColor" stroke-width="0.5" opacity="0.06"/>
          <line x1="55" y1="55" x2="345" y2="345" stroke="currentColor" stroke-width="0.3" opacity="0.04"/>
          <line x1="345" y1="55" x2="55" y2="345" stroke="currentColor" stroke-width="0.3" opacity="0.04"/>
          <polygon points="200,20 210,60 200,45 190,60" fill="currentColor" opacity="0.1"/>
          <text x="200" y="14" text-anchor="middle" fill="currentColor" opacity="0.08" font-size="12" font-weight="600">N</text>
          <text x="200" y="396" text-anchor="middle" fill="currentColor" opacity="0.06" font-size="12" font-weight="600">S</text>
          <text x="394" y="204" text-anchor="middle" fill="currentColor" opacity="0.06" font-size="12" font-weight="600">O</text>
          <text x="8" y="204" text-anchor="middle" fill="currentColor" opacity="0.06" font-size="12" font-weight="600">W</text>
        </svg>
      </div>
      <div class="container">
        <div v-scroll-reveal class="section-header">
          <span class="section-label">Ihre Vorteile</span>
          <h2>Warum Kanzlei Schnoor?</h2>
          <UiAnchorDivider />
        </div>
        <div v-scroll-reveal data-stagger class="why__bento">
          <div v-for="(item, i) in advantages" :key="item.title" class="why__card">
            <div class="why__card-icon">
              <PhUserFocus v-if="i === 0" :size="48" weight="light" />
              <PhLightning v-else-if="i === 1" :size="48" weight="light" />
              <PhChatText v-else-if="i === 2" :size="48" weight="light" />
              <PhCertificate v-else :size="48" weight="light" />
            </div>
            <h3 class="why__card-title">{{ item.title }}</h3>
            <p class="why__card-text">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Reviews -->
    <SectionsGoogleReviews />

    <!-- Über mich & Kontakt -->
    <SectionsAboutContactSection />
  </div>
</template>

<script setup lang="ts">
import { PhUserFocus, PhLightning, PhChatText, PhCertificate, PhPhone, PhArrowRight } from '@phosphor-icons/vue'
import verkehrsrechtImage from '~/assets/images/anthony-maw-XcjVef6uvYA-unsplash.webp'
import mietrechtCardImage from '~/assets/images/mietrecht-card.webp'
import strafrechtCardImage from '~/assets/images/strafrecht-card.webp'

useSeoMeta({
  title: 'Rechtsanwalt Philipp Schnoor | Anwalt Hamburg | Mietrecht, Strafrecht, Verkehrsrecht',
  ogTitle: 'Rechtsanwalt Philipp Schnoor – Anwalt & Strafverteidiger aus Hamburg',
  description: 'Rechtsanwalt Philipp Schnoor aus Hamburg – Ihr Anwalt für Mietrecht, Strafrecht und Verkehrsrecht. Persönliche Beratung, schnelle Erreichbarkeit und kompetente Vertretung.',
  ogDescription: 'Kompetente Rechtsberatung aus Hamburg. Spezialisiert auf Mietrecht und Strafrecht – mit umfangreicher Erfahrung im Verkehrsrecht.',
})

useLocalBusinessSchema()

const advantages = [
  {
    title: 'Persönliche Betreuung',
    desc: 'Bei mir sind Sie kein Aktenzeichen. Ich nehme mir Zeit für Ihren Fall und bin persönlich für Sie da.',
  },
  {
    title: 'Schnelle Erreichbarkeit',
    desc: 'Per Telefon, E-Mail oder WhatsApp – ich bin für Sie erreichbar und reagiere zeitnah auf Ihre Anfragen.',
  },
  {
    title: 'Transparente Kosten',
    desc: 'Keine versteckten Gebühren. Ich informiere Sie vorab über die zu erwartenden Kosten und mögliche Kostenübernahmen.',
  },
  {
    title: 'Erfahrung & Kompetenz',
    desc: 'Fundierte juristische Ausbildung und praktische Erfahrung – ich kenne die Strategien, die zum Erfolg führen.',
  },
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

// Services Grid
.services {
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: $bp-lg) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $bp-sm) {
      grid-template-columns: 1fr;
      max-width: 420px;
      margin: 0 auto;
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

  &__compass {
    position: absolute;
    right: -80px;
    top: 50%;
    transform: translateY(-50%);
    width: 500px;
    height: 500px;
    color: $color-accent;
    pointer-events: none;
    opacity: 0.6;

    svg {
      width: 100%;
      height: 100%;
    }

    @media (max-width: $bp-md) {
      width: 300px;
      height: 300px;
      right: -60px;
      opacity: 0.4;
    }
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
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);

    &:hover {
      border-color: rgba($color-accent, 0.2);
      background: linear-gradient(160deg, rgba(#1a4a6e, 0.3) 0%, rgba($color-primary-deeper, 0.1) 100%);
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);

      .why__card-icon {
        background: rgba($color-accent, 0.15);
        transform: scale(1.05);
      }

      .why__card-title {
        color: $color-accent-light;
      }
    }

    @media (max-width: $bp-sm) {
      padding: 2rem 1.8rem;
    }
  }

  // Icon
  &__card-icon {
    width: 72px;
    height: 72px;
    background: rgba($color-accent, 0.08);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-accent;
    margin-bottom: 1.5rem;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
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
    transition: color 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &__card-text {
    font-size: 0.92rem;
    color: rgba($color-white, 0.7);
    line-height: 1.75;
    position: relative;
    z-index: 1;
    max-width: 420px;
  }
}
</style>
