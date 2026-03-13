<template>
  <div>
    <SectionsHeroSection
      variant="page"
      label="Strafverteidigung Hamburg"
      title="Strafrecht"
      subtitle="Vom Ermittlungsverfahren bis zur Hauptverhandlung – als Strafverteidiger in Hamburg stehe ich Ihnen konsequent zur Seite und schütze Ihre Rechte."
      wave-fill="#ffffff"
      background-image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80&fit=crop"
    />

    <!-- Einleitung -->
    <section class="intro section">
      <div class="container">
        <div class="intro__grid">
          <div v-scroll-reveal="'fade-right'" class="intro__content">
            <h2>Ihr Strafverteidiger in Hamburg</h2>
            <p>
              Wenn Sie mit dem Strafrecht in Berührung kommen, ist das eine belastende Situation. 
              Ob Beschuldigter, Angeklagter oder Zeuge – in jedem Fall sollten Sie frühzeitig einen 
              erfahrenen Strafverteidiger hinzuziehen. Je früher Sie handeln, desto besser sind Ihre Chancen.
            </p>
            <p>
              Als Strafverteidiger in Hamburg verteidige ich Ihre Rechte engagiert und diskret. 
              Ich analysiere die Ermittlungsakte gründlich, entwickle eine individuelle Verteidigungsstrategie 
              und begleite Sie durch das gesamte Verfahren – mit dem Ziel, das bestmögliche Ergebnis für Sie zu erzielen.
            </p>
          </div>
          <div v-scroll-reveal="'fade-left'" class="intro__image">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop"
              alt="Strafverteidigung Hamburg – Rechtsanwalt Schnoor"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Leistungen -->
    <section class="leistungen section section--light">
      <div class="container">
        <div v-scroll-reveal class="section-header">
          <span class="section-label">Leistungen</span>
          <h2>Meine Leistungen im Strafrecht</h2>
        </div>
        <div v-scroll-reveal data-stagger class="leistungen__grid">
          <UiLeistungCard
            v-for="(item, idx) in leistungen"
            :key="item.title"
            :icon="item.icon"
            :title="item.title"
            :description="item.desc"
            :index="idx + 1"
          />
        </div>
      </div>
    </section>

    <!-- Ablauf -->
    <section class="ablauf section">
      <div class="container">
        <div v-scroll-reveal class="section-header">
          <span class="section-label">Ablauf</span>
          <h2>Wie läuft ein Strafverfahren ab?</h2>
        </div>
        <div v-scroll-reveal data-stagger class="ablauf__steps">
          <div class="ablauf__step" v-for="(step, index) in steps" :key="index">
            <div class="ablauf__number">{{ index + 1 }}</div>
            <div class="ablauf__content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section section section--light">
      <div class="container">
        <div v-scroll-reveal class="section-header">
          <span class="section-label">Häufige Fragen</span>
          <h2>FAQ – Strafrecht</h2>
        </div>
        <UiFaqAccordion v-scroll-reveal="'fade-up'" :items="faqItems" />
      </div>
    </section>

    <SectionsCtaSection
      label="Strafverteidigung Hamburg"
      title="Sie haben eine Vorladung erhalten?"
      text="Handeln Sie jetzt. Je früher Sie einen Strafverteidiger einschalten, desto besser kann ich Ihre Interessen schützen. Kontaktieren Sie mich vertraulich."
    />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Strafrecht Hamburg | Strafverteidiger Philipp Schnoor – Rechtsanwalt',
  ogTitle: 'Strafverteidiger Hamburg – Rechtsanwalt Philipp Schnoor',
  description: 'Strafverteidiger in Hamburg. Verteidigung im Ermittlungsverfahren, Hauptverhandlung, Berufung & Revision. Erfahrener Rechtsanwalt für Strafrecht. Jetzt kontaktieren.',
  ogDescription: 'Erfahrener Strafverteidiger in Hamburg. Kompetente Verteidigung vom Ermittlungsverfahren bis zur Hauptverhandlung.',
})

const leistungen = [
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><circle cx="11" cy="11" r="8" fill="currentColor" opacity="0.12"/><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M11 8v6M8 11h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    title: 'Ermittlungsverfahren',
    desc: 'Frühzeitige Akteneinsicht und strategische Verteidigung bereits im Ermittlungsverfahren – bevor es zu einer Anklage kommt.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><rect x="2" y="3" width="20" height="14" rx="3" fill="currentColor" opacity="0.12"/><rect x="2" y="3" width="20" height="14" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 8h10M7 12h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/></svg>',
    title: 'Hauptverhandlung',
    desc: 'Engagierte Verteidigung vor Gericht. Ich bereite Sie optimal auf die Verhandlung vor und kämpfe für das bestmögliche Ergebnis.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><rect x="1" y="4" width="22" height="16" rx="3" fill="currentColor" opacity="0.08"/><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><polyline points="17 6 23 6 23 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    title: 'Berufung & Revision',
    desc: 'Wenn ein Urteil nicht zufriedenstellend ist, prüfe ich die Erfolgsaussichten von Berufung oder Revision und vertrete Sie in höheren Instanzen.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><circle cx="9" cy="7" r="4" fill="currentColor" opacity="0.15"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M16 3.13a4 4 0 010 7.75M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
    title: 'Jugendstrafrecht',
    desc: 'Besondere Sensibilität und Erfahrung im Umgang mit jugendlichen Beschuldigten. Das Jugendstrafrecht bietet oft besondere Möglichkeiten.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/><path d="M12 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M17 9.5H9.5a2.5 2.5 0 000 5h5a2.5 2.5 0 010 5H7" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
    title: 'Wirtschaftsstrafrecht',
    desc: 'Verteidigung bei Vorwürfen wie Betrug, Untreue, Steuerhinterziehung oder Insolvenzdelikten – auch bei komplexen Sachverhalten.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><rect x="1" y="4" width="15" height="11" rx="2" fill="currentColor" opacity="0.12"/><rect x="1" y="4" width="15" height="11" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" stroke-width="1.5" fill="currentColor" opacity="0.2"/><circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" stroke-width="1.5" fill="currentColor" opacity="0.2"/></svg>',
    title: 'Verkehrsstrafrecht',
    desc: 'Trunkenheit im Verkehr, Fahrerflucht oder fahrlässige Körperverletzung – ich verteidige Sie bei allen Verkehrsstraftaten.',
  },
]

const steps = [
  {
    title: 'Ermittlungsverfahren',
    desc: 'Die Polizei oder Staatsanwaltschaft ermittelt. Sie erhalten eine Vorladung als Beschuldigter. Hier ist schnelles Handeln entscheidend – nehmen Sie sofort Kontakt zu mir auf.',
  },
  {
    title: 'Akteneinsicht & Strategie',
    desc: 'Ich beantrage Akteneinsicht und analysiere die Beweislage. Auf dieser Grundlage entwickle ich eine maßgeschneiderte Verteidigungsstrategie.',
  },
  {
    title: 'Stellungnahme oder Schweigen',
    desc: 'Gemeinsam entscheiden wir, ob eine Stellungnahme abgegeben wird oder das Schweigerecht genutzt wird – je nachdem, was in Ihrem Fall am sinnvollsten ist.',
  },
  {
    title: 'Einstellung oder Anklage',
    desc: 'Im besten Fall wird das Verfahren eingestellt. Kommt es zur Anklage, bereite ich Sie umfassend auf die Hauptverhandlung vor.',
  },
  {
    title: 'Hauptverhandlung',
    desc: 'Vor Gericht verteidige ich Sie engagiert und mit einer klaren Strategie. Mein Ziel ist immer das bestmögliche Ergebnis – ob Freispruch, Einstellung oder milde Strafe.',
  },
]

const faqItems: { question: string; answer: string }[] = [
  {
    question: 'Ich habe eine Vorladung als Beschuldigter erhalten. Was soll ich tun?',
    answer: 'Gehen Sie nicht ohne anwaltliche Beratung zur Polizei! Sie haben das Recht zu schweigen, und davon sollten Sie zunächst Gebrauch machen. Kontaktieren Sie mich, damit ich Akteneinsicht nehmen und die Situation bewerten kann, bevor Sie Aussagen machen.',
  },
  {
    question: 'Wann brauche ich einen Strafverteidiger?',
    answer: 'Sobald Sie erfahren, dass gegen Sie ermittelt wird oder Sie eine Vorladung erhalten, sollten Sie einen Strafverteidiger einschalten. Je früher ich in das Verfahren eingebunden werde, desto besser kann ich Ihre Rechte schützen und auf den Ausgang Einfluss nehmen.',
  },
  {
    question: 'Kann ein Strafverfahren eingestellt werden?',
    answer: 'Ja, es gibt verschiedene Möglichkeiten der Verfahrenseinstellung, zum Beispiel nach § 170 Abs. 2 StPO (mangelnder Tatverdacht), § 153 StPO (Geringfügigkeit) oder § 153a StPO (gegen Auflagen). Ich prüfe, welche Möglichkeit in Ihrem Fall in Betracht kommt.',
  },
  {
    question: 'Was kostet ein Strafverteidiger?',
    answer: 'Die Kosten richten sich nach dem Umfang des Verfahrens. Im Erstgespräch besprechen wir die voraussichtlichen Kosten transparent. Unter bestimmten Voraussetzungen können Sie auch einen Pflichtverteidiger beantragen, dessen Kosten der Staat übernimmt.',
  },
  {
    question: 'Muss ich bei einer polizeilichen Vorladung erscheinen?',
    answer: 'Nein, als Beschuldigter sind Sie nicht verpflichtet, einer polizeilichen Vorladung zu folgen. Anders ist dies bei einer Vorladung durch die Staatsanwaltschaft oder ein Gericht. Ich berate Sie, wie Sie in Ihrer Situation richtig reagieren.',
  },
  {
    question: 'Was passiert bei einer Hausdurchsuchung?',
    answer: 'Fordern Sie den Durchsuchungsbeschluss und kontaktieren Sie sofort einen Strafverteidiger. Sie müssen die Durchsuchung dulden, aber nicht aktiv mitwirken. Ich kann im Notfall auch kurzfristig vor Ort sein, um Ihre Rechte zu wahren.',
  },
]

useFaqSchema(faqItems)
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.intro {
  &__grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: $bp-md) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  &__image img {
    border-radius: $radius-lg;
    box-shadow: $shadow-md;
    width: 100%;
  }
}

.leistungen {
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: $bp-lg) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $bp-sm) {
      grid-template-columns: 1fr;
    }
  }
}


// Ablauf Steps
.ablauf {
  &__steps {
    max-width: 820px;
    margin: 0 auto;
    position: relative;

    // Vertical connecting line
    &::before {
      content: '';
      position: absolute;
      left: 27px;
      top: 40px;
      bottom: 40px;
      width: 2px;
      background: linear-gradient(180deg, $color-accent, rgba($color-accent, 0.15));
      border-radius: 2px;

      @media (max-width: $bp-sm) {
        left: 23px;
      }
    }
  }

  &__step {
    display: flex;
    gap: 2.2rem;
    padding: 1.8rem 0;
    position: relative;
    transition: all 0.3s ease;

    &:hover {
      .ablauf__number {
        background: linear-gradient(135deg, $color-primary, $color-primary-dark);
        transform: scale(1.1);
        box-shadow: 0 4px 20px rgba($color-primary, 0.25);
      }

      .ablauf__content {
        transform: translateX(4px);
      }
    }

    @media (max-width: $bp-sm) {
      gap: 1.5rem;
    }
  }

  &__number {
    width: 56px;
    height: 56px;
    min-width: 56px;
    background: $color-primary;
    color: $color-accent;
    font-family: $font-heading;
    font-size: 1.2rem;
    font-weight: 800;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    border: 2px solid rgba($color-accent, 0.15);

    @media (max-width: $bp-sm) {
      width: 48px;
      height: 48px;
      min-width: 48px;
      font-size: 1rem;
    }
  }

  &__content {
    padding-top: 0.5rem;
    transition: transform 0.3s ease;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    p {
      font-size: 0.95rem;
      color: $color-text-light;
      line-height: 1.7;
    }
  }
}

.faq-section .section-header {
  margin-bottom: 2rem;
}
</style>
