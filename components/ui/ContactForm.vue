<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div class="contact-form__row">
      <div class="contact-form__field">
        <label for="anrede">Anrede *</label>
        <select id="anrede" v-model="form.anrede" required>
          <option value="" disabled>Bitte wählen</option>
          <option value="Herr">Herr</option>
          <option value="Frau">Frau</option>
          <option value="Divers">Divers</option>
        </select>
      </div>
    </div>

    <div class="contact-form__row contact-form__row--half">
      <div class="contact-form__field">
        <label for="vorname">Vorname *</label>
        <input id="vorname" v-model="form.vorname" type="text" required placeholder="Ihr Vorname" />
      </div>
      <div class="contact-form__field">
        <label for="nachname">Nachname *</label>
        <input id="nachname" v-model="form.nachname" type="text" required placeholder="Ihr Nachname" />
      </div>
    </div>

    <div class="contact-form__row contact-form__row--half">
      <div class="contact-form__field">
        <label for="email">E-Mail-Adresse *</label>
        <input id="email" v-model="form.email" type="email" required placeholder="ihre@email.de" />
      </div>
      <div class="contact-form__field">
        <label for="telefon">Telefonnummer <span class="optional">(optional)</span></label>
        <input id="telefon" v-model="form.telefon" type="tel" placeholder="z. B. 040 123456" />
      </div>
    </div>

    <div class="contact-form__row contact-form__row--half">
      <div class="contact-form__field">
        <label for="rechtsgebiet">Rechtsgebiet *</label>
        <select id="rechtsgebiet" v-model="form.rechtsgebiet" required>
          <option value="" disabled>Bitte wählen</option>
          <option value="Mietrecht">Mietrecht</option>
          <option value="Strafrecht">Strafrecht</option>
          <option value="Verkehrsrecht">Verkehrsrecht</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </div>
      <div class="contact-form__field">
        <label for="gefunden">Wie haben Sie uns gefunden? <span class="optional">(optional)</span></label>
        <select id="gefunden" v-model="form.gefunden">
          <option value="" disabled>Bitte wählen</option>
          <option value="Google">Google-Suche</option>
          <option value="Empfehlung">Empfehlung</option>
          <option value="Social Media">Social Media</option>
          <option value="Anwaltsverzeichnis">Anwaltsverzeichnis</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </div>
    </div>

    <div class="contact-form__row">
      <div class="contact-form__field">
        <label for="nachricht">Ihre Nachricht *</label>
        <textarea
          id="nachricht"
          v-model="form.nachricht"
          required
          rows="6"
          placeholder="Bitte schildern Sie Ihr Anliegen kurz. Alle Angaben werden selbstverständlich vertraulich behandelt."
        ></textarea>
      </div>
    </div>

    <div class="contact-form__row">
      <label class="contact-form__checkbox">
        <input type="checkbox" v-model="form.datenschutz" required />
        <span>Ich habe die <NuxtLink to="/datenschutz">Datenschutzerklärung</NuxtLink> gelesen und stimme der Verarbeitung meiner Daten zu. *</span>
      </label>
    </div>

    <div class="contact-form__row">
      <button type="submit" class="btn btn--primary btn--lg" :disabled="submitted">
        {{ submitted ? 'Nachricht gesendet' : 'Nachricht senden' }}
        <svg v-if="!submitted" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <p class="contact-form__hint">* Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.</p>
  </form>
</template>

<script setup lang="ts">
const form = reactive({
  anrede: '',
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  rechtsgebiet: '',
  gefunden: '',
  nachricht: '',
  datenschutz: false,
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.contact-form {
  max-width: 700px;

  &__row {
    margin-bottom: 1.5rem;

    &--half {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;

      @media (max-width: $bp-sm) {
        grid-template-columns: 1fr;
      }
    }
  }

  &__field {
    display: flex;
    flex-direction: column;

    label {
      font-size: 0.9rem;
      font-weight: 500;
      color: $color-primary;
      margin-bottom: 0.5rem;

      .optional {
        color: $color-gray;
        font-weight: 400;
      }
    }

    input,
    select,
    textarea {
      padding: 0.85rem 1rem;
      border: 1.5px solid rgba($color-gray, 0.4);
      border-radius: $radius-sm;
      font-family: $font-body;
      font-size: 0.95rem;
      color: $color-text;
      background: $color-white;
      transition: border-color $transition-fast;

      &:focus {
        outline: none;
        border-color: $color-primary-light;
        box-shadow: 0 0 0 3px rgba($color-primary-light, 0.1);
      }

      &::placeholder {
        color: $color-gray;
      }
    }

    textarea {
      resize: vertical;
      min-height: 140px;
    }

    select {
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 1rem center;
      padding-right: 2.5rem;
    }
  }

  &__checkbox {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    cursor: pointer;

    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      margin-top: 2px;
      accent-color: $color-primary;
    }

    span {
      font-size: 0.85rem;
      color: $color-text-light;
      line-height: 1.5;

      a {
        color: $color-primary-dark;
        text-decoration: underline;
      }
    }
  }

  &__hint {
    margin-top: 1rem;
    font-size: 0.8rem;
    color: $color-gray;
  }
}
</style>
