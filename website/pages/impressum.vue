<template>
  <div>
    <SectionsHeroSection variant="page" title="Impressum" />
    <section class="legal section">
      <div class="container legal__content">
        <p>Philipp Schnoor<br />Grootsruhe 4<br />20537 Hamburg</p>

        <h3>Kontakt</h3>
        <p>Telefon: 0157 30871236<br />Telefax: 040 / 36 85 39 41<br />E-Mail: info@schnoorrechtsanwalt.de</p>

        <h3>Umsatzsteuer-ID</h3>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />Folgt</p>

        <h3>Angaben zur Berufshaftpflichtversicherung</h3>
        <p><strong>Name und Sitz des Versicherers:</strong><br />Nürnberger Versicherung<br />Ostendstraße 100<br />90334 Nürnberg<br />Telefon 0911 531-5<br />Fax 0911 531-3206</p>

        <h3>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
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
