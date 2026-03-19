<template>
  <div>
    <SectionsHeroSection
      variant="page"
      label="Anwalt für Verkehrsrecht aus Hamburg"
      title="Verkehrsrecht"
      subtitle="Bußgeldbescheid, Fahrverbot oder Schadensersatz nach Verkehrsunfall? Ich prüfe Ihren Fall und setze Ihre Ansprüche konsequent durch."
      background-image="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&q=80&fit=crop"
    />

    <!-- Einleitung -->
    <section class="intro section">
      <div class="container">
        <div class="intro__grid">
          <div v-scroll-reveal="'fade-right'" class="intro__content">
            <h2>Ihr Anwalt für Verkehrsrecht aus Hamburg</h2>
            <p>
              Ein Bußgeldbescheid, ein drohendes Fahrverbot oder gar der Entzug der Fahrerlaubnis – 
              im Verkehrsrecht steht schnell viel auf dem Spiel. Gerade wenn Ihre Mobilität für den 
              Beruf unverzichtbar ist, sollten Sie nicht vorschnell handeln, sondern sich anwaltlich beraten lassen.
            </p>
            <p>
              Ich prüfe jeden Fall individuell und nutze alle rechtlichen Möglichkeiten, um das beste 
              Ergebnis für Sie zu erzielen. Ob Einspruch gegen einen Bußgeldbescheid, Verteidigung bei 
              Fahrverbot oder Unterstützung bei der MPU-Vorbereitung – ich bin an Ihrer Seite.
            </p>
          </div>
          <div v-scroll-reveal="'fade-left'" class="intro__image">
            <img
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop"
              alt="Verkehrsrecht Hamburg – Rechtsanwalt Schnoor"
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
          <h2>Meine Leistungen im Verkehrsrecht</h2>
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

    <!-- FAQ -->
    <section class="faq-section section section--light">
      <div class="container">
        <div v-scroll-reveal class="section-header">
          <span class="section-label">Häufige Fragen</span>
          <h2>FAQ – Verkehrsrecht</h2>
        </div>
        <UiFaqAccordion v-scroll-reveal="'fade-up'" :items="faqItems" />
      </div>
    </section>

    <SectionsAboutContactSection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Verkehrsrecht Hamburg | Rechtsanwalt Philipp Schnoor – Bußgeld, Fahrverbot, MPU',
  ogTitle: 'Verkehrsrecht – Rechtsanwalt Philipp Schnoor aus Hamburg',
  description: 'Anwalt für Verkehrsrecht aus Hamburg. Einspruch gegen Bußgeldbescheid, Fahrverbot abwenden, Schadensersatz nach Verkehrsunfall. Rechtsanwalt Schnoor hilft Ihnen.',
  ogDescription: 'Rechtsanwalt für Verkehrsrecht aus Hamburg. Bußgeldbescheid, Fahrverbot, Verkehrsunfall – kompetente Vertretung.',
})

const leistungen = [
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" fill="currentColor" opacity="0.12"/><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M14 2v6h6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M9 15l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    title: 'Bußgeldverfahren',
    desc: 'Ich prüfe Ihren Bußgeldbescheid auf Fehler in der Messung, Zustellung und Berechnung und lege bei Bedarf fristgerecht Einspruch ein.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12"/><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M4.93 4.93l14.14 14.14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/></svg>',
    title: 'Fahrverbot',
    desc: 'Ein Fahrverbot kann schwerwiegende Folgen haben. Ich prüfe, ob das Fahrverbot vermieden oder in eine Geldbuße umgewandelt werden kann.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><rect x="3" y="11" width="18" height="11" rx="3" fill="currentColor" opacity="0.12"/><rect x="3" y="11" width="18" height="11" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.5" fill="currentColor"/></svg>',
    title: 'Führerscheinentzug & MPU',
    desc: 'Bei drohendem oder erfolgtem Führerscheinentzug unterstütze ich Sie bei der Verteidigung und berate Sie zur MPU-Vorbereitung.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="currentColor" opacity="0.12"/><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1" fill="currentColor"/></svg>',
    title: 'Verkehrsunfall',
    desc: 'Nach einem Unfall helfe ich Ihnen bei der Durchsetzung Ihrer Ansprüche oder der Abwehr unberechtigter Forderungen.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" opacity="0.12"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 8v4M12 15h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    title: 'Ordnungswidrigkeiten',
    desc: 'Rotlichtverstoß, Handyverstoß oder Abstandsunterschreitung – ich verteidige Sie bei allen Verkehrsordnungswidrigkeiten.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12"/><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    title: 'Verkehrsstrafrecht',
    desc: 'Bei Verkehrsstraftaten wie Trunkenheit am Steuer, Fahrerflucht oder Nötigung im Straßenverkehr verteidige ich Ihre Rechte vor Gericht.',
  },
]

const caseStudies = [
  {
    category: 'Bußgeld',
    steps: [
      { label: 'Ausgangslage', text: 'Bußgeldbescheid über 480 € und 1 Monat Fahrverbot wegen Geschwindigkeitsüberschreitung auf der A7.' },
      { label: 'Strategie', text: 'Messprotokolle und Eichschein angefordert. Fehler in der Aufstellgenehmigung des Messgeräts entdeckt.' },
      { label: 'Ergebnis', text: 'Verfahren vor dem Amtsgericht eingestellt. Kein Bußgeld, kein Fahrverbot.' },
    ],
    result: 'Verfahren eingestellt – Fahrverbot abgewendet',
  },
  {
    category: 'Führerschein',
    steps: [
      { label: 'Ausgangslage', text: 'Führerscheinentzug nach Trunkenheitsfahrt. Mandant ist beruflich auf den Führerschein angewiesen.' },
      { label: 'Strategie', text: 'Sofortige Intervention, Teilnahme an Verkehrspsychologischem Seminar initiiert, positive Prognose vorgelegt.' },
      { label: 'Ergebnis', text: 'Sperrfrist um 3 Monate verkürzt. Führerschein konnte deutlich früher wiedererlangt werden.' },
    ],
    result: 'Sperrfrist verkürzt – 3 Monate früher mobil',
  },
  {
    category: 'Unfall',
    steps: [
      { label: 'Ausgangslage', text: 'Unverschuldeter Auffahrunfall mit HWS-Verletzung. Versicherung bot nur einen Bruchteil des Schadens an.' },
      { label: 'Strategie', text: 'Eigenes Gutachten erstellen lassen, Schmerzensgeld und Nutzungsausfall geltend gemacht.' },
      { label: 'Ergebnis', text: 'Versicherung zahlte den vollen Schaden inklusive Schmerzensgeld und Mietwagenkosten.' },
    ],
    result: 'Voller Schadensersatz + 2.800 € Schmerzensgeld',
  },
]

const faqItems: { question: string; answer: string }[] = [
  {
    question: 'Lohnt sich ein Einspruch gegen einen Bußgeldbescheid?',
    answer: 'In vielen Fällen ja. Studien zeigen, dass ein erheblicher Anteil der Geschwindigkeitsmessungen fehlerhaft ist. Auch Formfehler im Bußgeldbescheid können zur Einstellung des Verfahrens führen. Ich prüfe die Erfolgsaussichten kostenfrei für Sie.',
  },
  {
    question: 'Kann ich mein Fahrverbot verschieben?',
    answer: 'Ja, bei einem erstmaligen Fahrverbot können Sie den Antritt um bis zu 4 Monate verschieben und den günstigsten Zeitraum wählen. In manchen Fällen kann das Fahrverbot auch ganz abgewendet und in eine höhere Geldbuße umgewandelt werden.',
  },
  {
    question: 'Was passiert bei 8 Punkten in Flensburg?',
    answer: 'Bei 8 Punkten im Fahreignungsregister wird die Fahrerlaubnis entzogen. Allerdings gibt es bei 4-5 Punkten ein Fahreignungsseminar (1 Punkt Abzug) und bei 6-7 Punkten eine Verwarnung. Ich berate Sie frühzeitig, um den Punktestand zu reduzieren.',
  },
  {
    question: 'Was ist ein Blitzer-Einspruch und wie funktioniert er?',
    answer: 'Gegen einen Bußgeldbescheid können Sie innerhalb von 2 Wochen nach Zustellung Einspruch einlegen. Ich prüfe dann das Messprotokoll, die Eichung des Geräts, die Beschilderung und weitere Fehlerquellen. Häufig führt dies zur Einstellung oder Reduzierung.',
  },
  {
    question: 'Brauche ich bei einem Verkehrsunfall einen Anwalt?',
    answer: 'Bei einem unverschuldeten Unfall übernimmt die gegnerische Versicherung Ihre Anwaltskosten. Ich sorge dafür, dass Sie alle Ihnen zustehenden Ansprüche – Reparatur, Mietwagen, Schmerzensgeld, Nutzungsausfall – vollständig erhalten.',
  },
  {
    question: 'Was kostet ein Verkehrsrecht-Anwalt?',
    answer: 'Die Kosten richten sich nach dem Streitwert und dem Aufwand. Bei vielen Verkehrsordnungswidrigkeiten übernimmt Ihre Rechtsschutzversicherung die Kosten. Im Erstgespräch informiere ich Sie transparent über die voraussichtlichen Gebühren.',
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


.cases {
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

.faq-section .section-header {
  margin-bottom: 2rem;
}
</style>
