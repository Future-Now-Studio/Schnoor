<template>
  <div>
    <SectionsHeroSection
      variant="page"
      label="Anwalt für Mietrecht aus Hamburg"
      title="Mietrecht"
      subtitle="Ob als <strong>Mieter</strong> oder <strong>Vermieter</strong> – ich schütze Ihre <strong>Rechte</strong> und finde <strong>faire Lösungen</strong> für mietrechtliche Streitigkeiten in Hamburg."
      background-image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80&fit=crop"
    />

    <!-- Einleitung -->
    <section class="intro section">
      <div class="container">
        <div class="intro__grid">
          <div v-scroll-reveal="'fade-right'" class="intro__content">
            <h2>Ihr Anwalt für Mietrecht in Hamburg</h2>
            <p>
              Der Hamburger Wohnungsmarkt ist angespannt – Konflikte zwischen Mietern und Vermietern sind daher
              keine Ausnahme. Zahlungsrückstände, Kündigungen, Mietminderungen oder Streit über Nebenkosten
              können schnell eskalieren und erhebliche Folgen haben.
            </p>
            <p>
              Als Rechtsanwalt für Mietrecht in Hamburg vertrete ich sowohl Mieter als auch Vermieter in
              streitigen Auseinandersetzungen. Ich prüfe Ihren Fall gründlich, gebe Ihnen eine klare
              Einschätzung und setze Ihre Rechte konsequent durch – außergerichtlich und vor Gericht.
            </p>
          </div>
          <div v-scroll-reveal="'fade-left'" class="intro__image">
            <img
              src="~/assets/images/J68A4920.jpg"
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
          <h2>FAQ – Mietrecht</h2>
        </div>
        <UiFaqAccordion v-scroll-reveal="'fade-up'" :items="faqItems" />
      </div>
    </section>

    <SectionsAboutContactSection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Mietrecht Hamburg | Rechtsanwalt Philipp Schnoor – Anwalt für Mieter & Vermieter',
  ogTitle: 'Mietrecht – Rechtsanwalt Philipp Schnoor aus Hamburg',
  description: 'Anwalt für Mietrecht aus Hamburg. Mietvertrag, Mietminderung, Kündigung & Räumung, Zahlungsrückstände. Jetzt beraten lassen.',
  ogDescription: 'Rechtsanwalt für Mietrecht aus Hamburg. Kompetente Vertretung bei Mietstreitigkeiten. Jetzt Erstberatung vereinbaren.',
})

const leistungen = [
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 13h8v1.5H8V13zm0 3.5h8V18H8v-1.5zm0-7h3v1.5H8V9.5z" opacity="0.85"/></svg>',
    title: 'Mietvertrag',
    desc: 'Mietverträge legen die Grundlage jedes Mietverhältnisses. Ich prüfe und gestalte Verträge so, dass Regelungen rechtssicher und im Streitfall belastbar sind.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12"/><path d="M12 6v12M8 10l4-4 4 4M8 14l4 4 4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    title: 'Mietminderung',
    desc: 'Mietminderungen sind häufig Streitpunkt. Ich kläre die rechtliche Situation und bringe Ordnung in Fragen von Berechtigung und Höhe.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" opacity="0.12"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    title: 'Kündigung & Räumung',
    desc: 'Kündigung und Räumung sind oft existenziell. Ich begleite Sie bei der Beendigung von Mietverhältnissen und sorge für eine rechtssichere Umsetzung.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/><path d="M12 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M17 9.5H9.5a2.5 2.5 0 000 5h5a2.5 2.5 0 010 5H7" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
    title: 'Zahlungsrückstände',
    desc: 'Offene Forderungen können schnell eskalieren. Ich unterstütze bei der Klärung und Durchsetzung von Zahlungsansprüchen.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><rect x="2" y="4" width="20" height="16" rx="3" fill="currentColor" opacity="0.12"/><rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M2 10h20" stroke="currentColor" stroke-width="1.5"/><circle cx="7" cy="15" r="1.5" fill="currentColor"/><path d="M11 15h7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    title: 'Streitige Mietverhältnisse',
    desc: 'Wenn ein Mietverhältnis festgefahren ist, braucht es eine klare Struktur. Ich übernehme die rechtliche Einordnung und begleite Sie im weiteren Vorgehen.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" opacity="0.12"/><path d="M7 12h4v5H7v-5z" fill="currentColor" opacity="0.3"/><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
    title: 'Schönheitsreparaturen',
    desc: 'Am Ende des Mietverhältnisses geht es oft um Renovierungspflichten. Ich ordne die vertragliche und rechtliche Situation ein und schaffe eine belastbare Grundlage für das weitere Vorgehen.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="30" height="30"><rect x="3" y="11" width="18" height="11" rx="3" fill="currentColor" opacity="0.12"/><rect x="3" y="11" width="18" height="11" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.5" fill="currentColor"/></svg>',
    title: 'Mietkaution',
    desc: 'Die Mietkaution ist regelmäßig Streitpunkt nach Beendigung des Mietverhältnisses. Ich sorge für eine klare Abwicklung und eine rechtssichere Einordnung der Ansprüche.',
  },
]

const caseStudies = [
  {
    category: 'Mietminderung',
    steps: [
      { label: 'Ausgangslage', text: 'Schimmelbefall in der Wohnung, Vermieter reagierte monatelang nicht auf Mängelanzeigen.' },
      { label: 'Strategie', text: 'Fristgerechte Mängelanzeige dokumentiert, Sachverständigengutachten eingeholt, Mietminderung berechnet.' },
      { label: 'Ergebnis', text: 'Vermieter beseitigte den Mangel innerhalb von 4 Wochen und erstattete die geminderte Miete.' },
    ],
    result: 'Mangel beseitigt + 3.200 € Rückzahlung',
  },
  {
    category: 'Kündigung abgewehrt',
    steps: [
      { label: 'Ausgangslage', text: 'Eigenbedarfskündigung durch den Vermieter – Familie mit zwei Kindern sollte die Wohnung räumen.' },
      { label: 'Strategie', text: 'Prüfung der Kündigung auf formelle Fehler und Plausibilität des Eigenbedarfs.' },
      { label: 'Ergebnis', text: 'Kündigung war formell unwirksam. Die Familie konnte in der Wohnung bleiben.' },
    ],
    result: 'Kündigung unwirksam – Wohnung gesichert',
  },
  {
    category: 'Zahlungsrückstände',
    steps: [
      { label: 'Ausgangslage', text: 'Mieter hatte erhebliche Mietrückstände aufgebaut und stellte Zahlungen vollständig ein.' },
      { label: 'Strategie', text: 'Forderungen strukturiert aufbereitet und konsequent geltend gemacht.' },
      { label: 'Ergebnis', text: 'Ein Großteil der offenen Forderungen wurde ausgeglichen.' },
    ],
    result: 'Forderungen durchgesetzt + Liquidität gesichert',
  },
]

const faqItems: { question: string; answer: string }[] = [
  {
    question: 'Wann ist eine Kündigung rechtlich wirksam?',
    answer: 'Eine Kündigung ist nur wirksam, wenn sie formell und inhaltlich den gesetzlichen Anforderungen entspricht. Entscheidend sind insbesondere die richtige Begründung (z. B. Zahlungsverzug oder Eigenbedarf), die Einhaltung der Kündigungsfristen sowie die ordnungsgemäße Zustellung. In der Praxis scheitern Kündigungen häufig an formellen Fehlern oder unzureichender Begründung. Eine sorgfältige Prüfung ist daher in beide Richtungen sinnvoll – sowohl zur Vorbereitung als auch zur Abwehr.',
  },
  {
    question: 'Wie gehe ich mit Mietrückständen um?',
    answer: 'Bei Mietrückständen kommt es maßgeblich auf die Höhe und Dauer der offenen Forderungen an. Je nach Situation kann bereits ein Zahlungsverzug eine Kündigung rechtfertigen. Typischerweise erfolgt zunächst eine strukturierte Aufarbeitung der Rückstände. Darauf aufbauend wird entschieden, ob außergerichtlich vorgegangen wird oder unmittelbar rechtliche Schritte eingeleitet werden. Fehler im Vorgehen – insbesondere bei Fristen und Kündigungen – können die Durchsetzung erheblich erschweren oder verzögern.',
  },
  {
    question: 'Wann ist eine Mietminderung berechtigt?',
    answer: 'Eine Mietminderung setzt voraus, dass ein erheblicher Mangel vorliegt, der die Gebrauchstauglichkeit der Wohnung beeinträchtigt. Die Höhe der Minderung richtet sich nach Art, Umfang und Dauer des Mangels. In der Praxis sind sowohl die Berechtigung als auch die Höhe häufig streitig. Minderungen werden teilweise zu hoch angesetzt oder ohne ausreichende Grundlage vorgenommen. Eine rechtliche Einordnung des Einzelfalls ist daher entscheidend.',
  },
  {
    question: 'Wie läuft eine Räumung rechtlich ab?',
    answer: 'Eine Räumung erfolgt nicht unmittelbar, sondern in mehreren Schritten. Voraussetzung ist in der Regel eine wirksame Kündigung. Räumt der Mieter die Wohnung nicht freiwillig, muss ein Räumungstitel erwirkt werden. Das Verfahren umfasst typischerweise die Kündigung, die Klage und – nach erfolgreichem Abschluss – die Zwangsräumung. Fehler im Vorfeld, insbesondere bei der Kündigung, können das gesamte Verfahren verzögern oder scheitern lassen.',
  },
  {
    question: 'Was gilt bei Schönheitsreparaturen und Kaution?',
    answer: 'Am Ende des Mietverhältnisses kommt es häufig zu Streit über Renovierungspflichten und die Abrechnung der Mietkaution. Ob und in welchem Umfang Schönheitsreparaturen geschuldet sind, hängt maßgeblich von der konkreten vertraglichen Regelung ab. Viele Klauseln sind unwirksam oder nur eingeschränkt durchsetzbar. Gleiches gilt für die Verwendung der Kaution, die nur unter bestimmten Voraussetzungen einbehalten werden darf. Eine rechtliche Prüfung schafft hier Klarheit.',
  },
  {
    question: 'Übernimmt meine Rechtsschutzversicherung die Kosten?',
    answer: 'Ob die Rechtsschutzversicherung die Kosten übernimmt, hängt vom jeweiligen Versicherungsvertrag ab. In der Regel besteht Versicherungsschutz für mietrechtliche Streitigkeiten, sofern eine entsprechende Police abgeschlossen wurde und die Wartezeit eingehalten ist. Vor Einleitung rechtlicher Schritte empfiehlt sich eine Deckungsanfrage. Diese übernehme ich auf Wunsch, sodass frühzeitig Klarheit über die Kostenübernahme besteht.',
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
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    /* Center last row: 7 items = 4+3, offset item 5 by half a column */
    > :nth-child(5) {
      grid-column-start: 1;
    }

    @media (min-width: calc($bp-lg + 1px)) {
      /* Use 8-col subgrid trick: 4 items = 2 cols each, 3 items centered */
      grid-template-columns: repeat(8, 1fr);

      > * {
        grid-column: span 2;
      }

      > :nth-child(5) {
        grid-column: 2 / span 2;
      }
    }

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

.faq-section {
  .section-header {
    margin-bottom: 2rem;
  }
}
</style>
