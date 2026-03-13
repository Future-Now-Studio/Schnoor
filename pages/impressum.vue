<template>
  <div>
    <SectionsHeroSection variant="page" title="Impressum" wave-fill="#ffffff" />
    <section class="legal section">
      <div class="container legal__content">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>Philipp Schnoor<br />Rechtsanwalt &amp; Strafverteidiger</p>
        <p>Musterstraße 42<br />20095 Hamburg</p>

        <h3>Kontakt</h3>
        <p>Telefon: 040 – XXX XXX XX<br />E-Mail: kontakt@schnoor-rechtsanwalt.de</p>

        <h3>Berufsbezeichnung und berufsrechtliche Regelungen</h3>
        <p>Berufsbezeichnung: Rechtsanwalt<br />Zuständige Kammer: Hanseatische Rechtsanwaltskammer Hamburg<br />Verliehen in: Deutschland</p>
        <p>Es gelten folgende berufsrechtliche Regelungen:</p>
        <ul>
          <li>Bundesrechtsanwaltsordnung (BRAO)</li>
          <li>Berufsordnung für Rechtsanwälte (BORA)</li>
          <li>Fachanwaltsordnung (FAO)</li>
          <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
        </ul>

        <h3>Berufshaftpflichtversicherung</h3>
        <p>[Name und Anschrift der Versicherung]<br />Räumlicher Geltungsbereich: Deutschland</p>

        <h3>Streitschlichtung</h3>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Impressum | Rechtsanwalt Philipp Schnoor Hamburg',
  description: 'Impressum der Kanzlei Philipp Schnoor, Rechtsanwalt & Strafverteidiger in Hamburg.',
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.legal__content {
  max-width: 800px;

  h3 {
    margin-top: 2rem;
  }

  ul {
    list-style: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;

    li {
      margin-bottom: 0.3rem;
      color: $color-text-light;
    }
  }
}
</style>
