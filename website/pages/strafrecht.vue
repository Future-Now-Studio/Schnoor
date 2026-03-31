<template>
  <div>
    <SectionsHeroSection
      variant="page"
      label="Strafverteidiger aus Hamburg"
      title="Strafrecht Hamburg – jetzt zählt jede Entscheidung"
      subtitle="<strong>Vorladung</strong>, <strong>Hausdurchsuchung</strong> oder <strong>Ermittlungsverfahren</strong>: In dieser Situation sollten Sie keine unüberlegten Aussagen machen. Ich übernehme Ihre <strong>Verteidigung</strong> und sorge für eine <strong>klare Strategie</strong>."
      :background-image="strafrechtHeroImage"
    />

    <!-- Einleitung -->
    <section class="intro section">
      <div class="container">
        <div class="intro__grid">
          <div v-scroll-reveal="'fade-right'" class="intro__content">
            <h2>Ihr Strafverteidiger aus Hamburg</h2>
            <p>
              Wenn Sie mit einem strafrechtlichen Vorwurf konfrontiert sind, kommt es auf die ersten
              Schritte an. Unüberlegte Aussagen oder falsche Entscheidungen lassen sich später oft nicht mehr korrigieren.
            </p>
            <p>
              Ich übernehme Ihre Verteidigung von Beginn an, fordere Akteneinsicht und entwickle auf
              dieser Grundlage eine klare Strategie. Ziel ist es, das Verfahren frühzeitig in die richtige
              Richtung zu lenken und ein belastbares Ergebnis zu erreichen.
            </p>
          </div>
          <div v-scroll-reveal="'fade-left'" class="intro__image">
            <img
              src="~/assets/images/J68A5211.webp"
              alt="Strafverteidigung Hamburg – Rechtsanwalt Schnoor"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Was jetzt zu tun ist -->
    <section class="urgent">
      <div class="urgent__bg" aria-hidden="true"></div>
      <div class="container">
        <div v-scroll-reveal="'scale'" class="urgent__card">
          <div class="urgent__badge">
            <PhWarning :size="20" weight="bold" />
            <span>Sofort handeln</span>
          </div>
          <h2 class="urgent__title">Was jetzt zu tun ist</h2>
          <p class="urgent__intro">Wenn Sie Post von Polizei oder Staatsanwaltschaft erhalten haben:</p>
          <div class="urgent__steps">
            <div class="urgent__step">
              <div class="urgent__step-number">1</div>
              <div class="urgent__step-content">
                <strong>Keine Aussage machen</strong>
                <span>Schweigen Sie – ohne anwaltliche Beratung.</span>
              </div>
            </div>
            <div class="urgent__step">
              <div class="urgent__step-number">2</div>
              <div class="urgent__step-content">
                <strong>Nichts erklären</strong>
                <span>Keine vorschnellen Erklärungen gegenüber Dritten.</span>
              </div>
            </div>
            <div class="urgent__step">
              <div class="urgent__step-number">3</div>
              <div class="urgent__step-content">
                <strong>Mich kontaktieren</strong>
                <span>Ich übernehme die Kommunikation und kümmere mich um alles Weitere.</span>
              </div>
            </div>
          </div>
          <div class="urgent__actions">
            <NuxtLink to="/kontakt" class="btn btn--accent btn--lg">
              Jetzt Strafverteidiger kontaktieren
              <PhArrowRight :size="18" weight="light" />
            </NuxtLink>
            <a href="tel:+4915730871236" class="urgent__call">
              <PhPhone :size="18" weight="light" />
              Sofort anrufen
            </a>
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

    <!-- Fallbeispiele -->
    <section class="cases section">
      <div class="container">
        <div v-scroll-reveal class="section-header">
          <span class="section-label">Fallbeispiele</span>
          <h2>So konnte ich helfen</h2>
          <UiAnchorDivider />
        </div>
        <div v-scroll-reveal data-stagger class="cases__grid">
          <UiCaseStudy
            v-for="cs in caseStudies"
            :key="cs.result"
            :category="cs.category"
            :steps="cs.steps"
            :result="cs.result"
          />
        </div>
      </div>
    </section>

    <!-- Ablauf -->
    <section class="ablauf section section--light">
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

    <!-- Weitere Rechtsgebiete -->
    <section class="weitere section">
      <div class="container">
        <div v-scroll-reveal class="section-header">
          <span class="section-label">Rechtsgebiete</span>
          <h2>Weitere Leistungen</h2>
        </div>
        <div v-scroll-reveal class="weitere__grid">
          <NuxtLink to="/mietrecht" class="weitere__card">
            <span class="weitere__label">Mietrecht Hamburg</span>
            <p>Kündigung, Mietminderung oder Räumung – ich vertrete Mieter und Vermieter in Hamburg.</p>
            <span class="weitere__arrow">→</span>
          </NuxtLink>
          <NuxtLink to="/verkehrsrecht" class="weitere__card">
            <span class="weitere__label">Verkehrsrecht Hamburg</span>
            <p>Bußgeldbescheid, Fahrverbot oder Verkehrsunfall – kompetente Vertretung im Verkehrsrecht.</p>
            <span class="weitere__arrow">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <SectionsAboutContactSection />
  </div>
</template>

<script setup lang="ts">
import { PhArrowRight, PhWarning, PhPhone } from '@phosphor-icons/vue'
import strafrechtHeroImage from '~/assets/images/strafrecht-hero.webp'

useSeoMeta({
  title: 'Strafrecht Hamburg | Strafverteidiger Philipp Schnoor – Rechtsanwalt',
  ogTitle: 'Strafverteidiger aus Hamburg – Rechtsanwalt Philipp Schnoor',
  description: 'Strafverteidiger aus Hamburg. Verteidigung im Ermittlungsverfahren, Hauptverhandlung, Berufung & Revision. Rechtsanwalt für Strafrecht. Jetzt kontaktieren.',
  ogDescription: 'Strafverteidiger aus Hamburg. Kompetente Verteidigung vom Ermittlungsverfahren bis zur Hauptverhandlung.',
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

const caseStudies = [
  {
    category: 'Verfahrenseinstellung',
    steps: [
      { label: 'Ausgangslage', text: 'Vorladung wegen Körperverletzung nach einem Vorfall im Nachtleben. Mandant war Erstbeschuldigter.' },
      { label: 'Strategie', text: 'Akteneinsicht ergab Widersprüche in den Zeugenaussagen. Stellungnahme mit entlastenden Beweisen eingereicht.' },
      { label: 'Ergebnis', text: 'Die Staatsanwaltschaft stellte das Verfahren nach § 170 Abs. 2 StPO mangels hinreichendem Tatverdacht ein.' },
    ],
    result: 'Verfahren eingestellt – kein Eintrag im Führungszeugnis',
  },
  {
    category: 'Bewährungsstrafe',
    steps: [
      { label: 'Ausgangslage', text: 'Anklage wegen Betrugs mit einem Schaden von über 15.000 €. Es drohte eine Freiheitsstrafe.' },
      { label: 'Strategie', text: 'Verhandlungsstrategie auf Geständnis mit Schadenswiedergutmachung aufgebaut. Positive Sozialprognose dargelegt.' },
      { label: 'Ergebnis', text: 'Das Gericht verurteilte zu einer Bewährungsstrafe statt einer Freiheitsstrafe ohne Bewährung.' },
    ],
    result: 'Freiheitsstrafe zur Bewährung ausgesetzt',
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

/* Urgent Section */
.urgent {
  position: relative;
  padding: clamp(4rem, 8vw, 7rem) 0;
  background: $color-primary;
  overflow: hidden;

  &__bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba($color-primary-light, 0.1) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba($color-accent, 0.06) 0%, transparent 50%);
    pointer-events: none;
  }

  &__card {
    max-width: 720px;
    margin: 0 auto;
    background: rgba($color-white, 0.05);
    border: 1px solid rgba($color-accent, 0.1);
    border-radius: $radius-lg;
    padding: clamp(2rem, 5vw, 3.5rem);
    backdrop-filter: blur(8px);
    position: relative;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.9rem;
    border-radius: 100px;
    background: rgba($color-accent, 0.15);
    border: 1px solid rgba($color-accent, 0.25);
    color: $color-accent-light;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 1.5rem;
  }

  &__title {
    font-family: $font-heading;
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    font-weight: 800;
    color: $color-white;
    margin-bottom: 0.8rem;
    letter-spacing: -0.02em;
  }

  &__intro {
    font-size: 1rem;
    color: rgba($color-white, 0.7);
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  &__steps {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  &__step {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem 1.2rem;
    border-radius: $radius-md;
    background: rgba($color-white, 0.04);
    border: 1px solid rgba($color-white, 0.06);
    transition: all $transition-fast;

    &:hover {
      background: rgba($color-white, 0.07);
      border-color: rgba($color-accent, 0.15);
    }
  }

  &__step-number {
    width: 36px;
    height: 36px;
    min-width: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, $color-accent, $color-accent-dark);
    color: $color-primary-deeper;
    font-family: $font-heading;
    font-size: 1rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__step-content {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    padding-top: 0.25rem;

    strong {
      color: $color-white;
      font-size: 1rem;
      font-weight: 700;
    }

    span {
      color: rgba($color-white, 0.6);
      font-size: 0.88rem;
      line-height: 1.5;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;

    .btn--lg {
      padding: 1rem 2rem;
      font-size: 0.95rem;
    }
  }

  &__call {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba($color-white, 0.8);
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition: color $transition-fast;

    svg {
      color: $color-accent;
    }

    &:hover {
      color: $color-white;
    }
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


/* Ablauf Steps */
.ablauf {
  &__steps {
    max-width: 820px;
    margin: 0 auto;
    position: relative;

    /* Vertical connecting line */
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

.cases {
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: $bp-sm) {
      grid-template-columns: 1fr;
    }
  }
}

.faq-section .section-header {
  margin-bottom: 2rem;
}

.weitere {
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    @media (max-width: $bp-sm) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.8rem 2rem;
    background: $color-white;
    border: 1px solid rgba($color-primary-light, 0.12);
    border-radius: $radius-lg;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);

    &:hover {
      border-color: rgba($color-accent, 0.4);
      box-shadow: 0 8px 24px rgba($color-primary, 0.08);
      transform: translateY(-3px);

      .weitere__arrow {
        transform: translateX(4px);
        color: $color-accent-dark;
      }
    }
  }

  &__label {
    font-family: $font-heading;
    font-size: 1.1rem;
    font-weight: 700;
    color: $color-primary;
  }

  p {
    font-size: 0.9rem;
    color: $color-text-light;
    line-height: 1.6;
    margin: 0;
    flex: 1;
  }

  &__arrow {
    font-size: 1.1rem;
    color: $color-primary-light;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    margin-top: 0.25rem;
  }
}
</style>
