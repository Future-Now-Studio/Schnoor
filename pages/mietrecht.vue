<template>
  <div>
    <SectionsHeroSection
      variant="page"
      label="Mietrecht Hamburg"
      title="Mietrecht"
      subtitle="Ob als Mieter oder Vermieter – ich schütze Ihre Rechte und finde faire Lösungen für mietrechtliche Streitigkeiten in Hamburg."
      wave-fill="#ffffff"
      background-image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80&fit=crop"
    />

    <!-- Einleitung -->
    <section class="intro section">
      <div class="container">
        <div class="intro__grid">
          <div v-scroll-reveal="'fade-right'" class="intro__content">
            <h2>Ihr Anwalt für Mietrecht in Hamburg</h2>
            <p>
              Das Mietrecht betrifft uns alle – ob als Mieter oder Vermieter. Doch gerade in Hamburg, wo der 
              Wohnungsmarkt angespannt ist, kommt es häufig zu Konflikten. Ungerechtfertigte Mieterhöhungen, 
              fehlerhafte Nebenkostenabrechnungen oder drohende Kündigungen können existenzielle Auswirkungen haben.
            </p>
            <p>
              Als Rechtsanwalt für Mietrecht in Hamburg stehe ich Ihnen mit juristischer Kompetenz und 
              persönlichem Engagement zur Seite. Ich prüfe Ihren Fall gründlich, berate Sie über Ihre 
              Möglichkeiten und setze Ihre Rechte konsequent durch – außergerichtlich oder vor Gericht.
            </p>
          </div>
          <div v-scroll-reveal="'fade-left'" class="intro__image">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
              alt="Mietrecht Hamburg – Rechtsanwalt Schnoor"
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
          <h2>Meine Leistungen im Mietrecht</h2>
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

    <!-- FAQ -->
    <section class="faq-section section">
      <div class="container">
        <div v-scroll-reveal class="section-header">
          <span class="section-label">Häufige Fragen</span>
          <h2>FAQ – Mietrecht</h2>
        </div>
        <UiFaqAccordion v-scroll-reveal="'fade-up'" :items="faqItems" />
      </div>
    </section>

    <SectionsCtaSection
      label="Mietrecht Hamburg"
      title="Probleme mit Ihrem Mietverhältnis?"
      text="Schildern Sie mir Ihren Fall unverbindlich. Gemeinsam finden wir die beste Lösung für Ihre mietrechtliche Situation."
    />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Mietrecht Hamburg | Rechtsanwalt Philipp Schnoor – Anwalt für Mieter & Vermieter',
  ogTitle: 'Mietrecht Hamburg – Rechtsanwalt Philipp Schnoor',
  description: 'Anwalt für Mietrecht in Hamburg. Mietvertragsprüfung, Mietminderung, Nebenkostenabrechnung, Kündigung & Räumungsschutz. Jetzt beraten lassen.',
  ogDescription: 'Rechtsanwalt für Mietrecht in Hamburg. Kompetente Vertretung bei Mietstreitigkeiten. Jetzt Erstberatung vereinbaren.',
})

const leistungen = [
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 13h8v1.5H8V13zm0 3.5h8V18H8v-1.5zm0-7h3v1.5H8V9.5z" opacity="0.85"/></svg>',
    title: 'Mietvertragsprüfung',
    desc: 'Ich prüfe Ihren Mietvertrag auf unwirksame Klauseln und berate Sie zu Ihren Rechten und Pflichten.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12"/><path d="M12 6v12M8 10l4-4 4 4M8 14l4 4 4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    title: 'Mietminderung',
    desc: 'Bei Mängeln in der Wohnung haben Sie das Recht auf Mietminderung. Ich berechne die angemessene Höhe und setze Ihren Anspruch durch.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><rect x="2" y="4" width="20" height="16" rx="3" fill="currentColor" opacity="0.12"/><rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M2 10h20" stroke="currentColor" stroke-width="1.5"/><circle cx="7" cy="15" r="1.5" fill="currentColor"/><path d="M11 15h7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    title: 'Nebenkostenabrechnung',
    desc: 'Viele Nebenkostenabrechnungen sind fehlerhaft. Ich prüfe Ihre Abrechnung und mache zu viel gezahlte Beträge geltend.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" opacity="0.12"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    title: 'Kündigung & Räumungsschutz',
    desc: 'Bei einer Kündigung prüfe ich die Wirksamkeit und vertrete Sie im Räumungsprozess zum Schutz Ihres Wohnraums.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" opacity="0.12"/><path d="M7 12h4v5H7v-5z" fill="currentColor" opacity="0.3"/><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
    title: 'Schönheitsreparaturen',
    desc: 'Viele Schönheitsreparaturklauseln sind unwirksam. Ich prüfe, ob Sie tatsächlich renovieren müssen.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><rect x="3" y="11" width="18" height="11" rx="3" fill="currentColor" opacity="0.12"/><rect x="3" y="11" width="18" height="11" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.5" fill="currentColor"/></svg>',
    title: 'Mietkaution',
    desc: 'Ob Kautionsrückforderung oder Streitigkeiten über die Kaution – ich setze Ihre Ansprüche konsequent durch.',
  },
]

const faqItems: { question: string; answer: string }[] = [
  {
    question: 'Wann darf mein Vermieter die Miete erhöhen?',
    answer: 'Eine Mieterhöhung ist nur unter bestimmten Voraussetzungen zulässig. Der Vermieter muss die Kappungsgrenze beachten (in Hamburg max. 15% in drei Jahren) und die ortsübliche Vergleichsmiete darf nicht überschritten werden. Ich prüfe, ob die Mieterhöhung in Ihrem Fall rechtmäßig ist.',
  },
  {
    question: 'Was kann ich bei Mängeln in meiner Wohnung tun?',
    answer: 'Bei Mängeln sollten Sie den Vermieter unverzüglich schriftlich informieren und eine Frist zur Beseitigung setzen. Bei erheblichen Mängeln haben Sie das Recht auf Mietminderung. Ich berate Sie zur richtigen Vorgehensweise und angemessenen Minderungshöhe.',
  },
  {
    question: 'Ist meine Nebenkostenabrechnung korrekt?',
    answer: 'Studien zeigen, dass über 50% aller Nebenkostenabrechnungen fehlerhaft sind. Häufige Fehler sind falsche Verteilerschlüssel, nicht umlagefähige Kosten oder Fristversäumnisse. Ich prüfe Ihre Abrechnung auf alle relevanten Fehlerquellen.',
  },
  {
    question: 'Kann ich gegen eine Kündigung vorgehen?',
    answer: 'Ja, in vielen Fällen ist eine Kündigung unwirksam. Wichtig ist, dass Sie innerhalb der gesetzlichen Fristen Widerspruch einlegen. Ich prüfe die Wirksamkeit der Kündigung und vertrete Sie im Kündigungsschutzverfahren.',
  },
  {
    question: 'Muss ich beim Auszug Schönheitsreparaturen durchführen?',
    answer: 'Viele Schönheitsreparaturklauseln in Mietverträgen sind unwirksam – insbesondere starre Fristenpläne und Endrenovierungsklauseln. Ich prüfe Ihren Mietvertrag und informiere Sie, ob und in welchem Umfang Sie tatsächlich renovieren müssen.',
  },
  {
    question: 'Übernimmt meine Rechtsschutzversicherung die Kosten?',
    answer: 'Die meisten Rechtsschutzversicherungen mit Mietrechtsschutz übernehmen die Anwaltskosten nach einer Wartezeit von üblicherweise drei Monaten. Ich stelle gerne eine Deckungsanfrage bei Ihrer Versicherung.',
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


.faq-section {
  .section-header {
    margin-bottom: 2rem;
  }
}
</style>
