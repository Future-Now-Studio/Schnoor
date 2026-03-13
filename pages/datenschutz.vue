<template>
  <div>
    <SectionsHeroSection variant="page" title="Datenschutzerklärung" wave-fill="#ffffff" />
    <section class="legal section">
      <div class="container legal__content">
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

        <h3>Datenerfassung auf dieser Website</h3>
        <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
        <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber: Philipp Schnoor, Musterstraße 42, 20095 Hamburg.</p>

        <h2>2. Hosting</h2>
        <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3>Datenschutz</h3>
        <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>Philipp Schnoor<br />Musterstraße 42<br />20095 Hamburg<br />E-Mail: kontakt@schnoor-rechtsanwalt.de</p>

        <h2>4. Datenerfassung auf dieser Website</h2>
        <h3>Kontaktformular</h3>
        <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

        <h3>Anfrage per E-Mail oder Telefon</h3>
        <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.</p>

        <p class="legal__note">Stand: März 2026. Diese Datenschutzerklärung wird bei Bedarf aktualisiert.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Datenschutzerklärung | Rechtsanwalt Philipp Schnoor Hamburg',
  description: 'Datenschutzerklärung der Kanzlei Philipp Schnoor, Rechtsanwalt & Strafverteidiger in Hamburg.',
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.legal__content {
  max-width: 800px;

  h3 {
    margin-top: 1.5rem;
  }

  strong {
    color: $color-primary;
  }
}

.legal__note {
  margin-top: 3rem;
  font-style: italic;
  color: $color-gray;
}
</style>
