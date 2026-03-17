<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div class="contact-form__promise">
      <PhClock :size="18" weight="light" />
      <span>Ich melde mich in der Regel <strong>innerhalb von 24 Stunden</strong> bei Ihnen zurück.</span>
    </div>

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
      <div class="contact-form__float">
        <input id="vorname" v-model="form.vorname" type="text" required placeholder=" " />
        <label for="vorname">Vorname *</label>
      </div>
      <div class="contact-form__float">
        <input id="nachname" v-model="form.nachname" type="text" required placeholder=" " />
        <label for="nachname">Nachname *</label>
      </div>
    </div>

    <div class="contact-form__row contact-form__row--half">
      <div class="contact-form__float">
        <input id="email" v-model="form.email" type="email" required placeholder=" " />
        <label for="email">E-Mail-Adresse *</label>
      </div>
      <div class="contact-form__float">
        <input id="telefon" v-model="form.telefon" type="tel" placeholder=" " />
        <label for="telefon">Telefonnummer <span class="optional">(optional)</span></label>
      </div>
    </div>

    <div class="contact-form__row">
      <div class="contact-form__field">
        <label for="kontaktweg">Bevorzugter Rückmeldeweg *</label>
        <select id="kontaktweg" v-model="form.kontaktweg" required>
          <option value="" disabled>Bitte wählen</option>
          <option value="E-Mail">E-Mail</option>
          <option value="Telefon">Telefon</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>
      </div>
    </div>

    <div class="contact-form__row">
      <div class="contact-form__float contact-form__float--textarea">
        <textarea
          id="nachricht"
          v-model="form.nachricht"
          required
          rows="6"
          placeholder=" "
        ></textarea>
        <label for="nachricht">Ihre Nachricht *</label>
      </div>
    </div>

    <div class="contact-form__row">
      <label class="contact-form__checkbox">
        <input type="checkbox" v-model="form.datenschutz" required />
        <span>Ich habe die <NuxtLink to="/datenschutz">Datenschutzerklärung</NuxtLink> gelesen und stimme der Verarbeitung meiner Daten zu. *</span>
      </label>
    </div>

    <div class="contact-form__row">
      <button type="submit" class="btn btn--accent" :disabled="submitted">
        <PhCheck v-if="submitted" :size="18" weight="bold" />
        <PhArrowRight v-else :size="18" weight="light" />
        {{ submitted ? 'Nachricht gesendet – Ich melde mich!' : 'Nachricht senden' }}
      </button>
    </div>

    <div v-if="submitted" class="contact-form__success">
      <PhCheckCircle :size="20" weight="light" />
      <p>Vielen Dank! Ich habe Ihre Nachricht erhalten und melde mich innerhalb von 24 Stunden bei Ihnen.</p>
    </div>

    <div class="contact-form__trust">
      <div class="contact-form__trust-item">
        <PhShieldCheck :size="16" weight="light" />
        <span>SSL-verschlüsselt</span>
      </div>
      <div class="contact-form__trust-item">
        <PhLock :size="16" weight="light" />
        <span>Vertraulich</span>
      </div>
      <div class="contact-form__trust-item">
        <PhClock :size="16" weight="light" />
        <span>Antwort in 24h</span>
      </div>
    </div>

    <p class="contact-form__hint">* Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.</p>
  </form>
</template>

<script setup lang="ts">
import { PhArrowRight, PhCheck, PhCheckCircle, PhShieldCheck, PhLock, PhClock } from '@phosphor-icons/vue'

const form = reactive({
  anrede: '',
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  kontaktweg: '',
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

  // Floating label fields
  &__float {
    position: relative;

    label {
      position: absolute;
      top: 0.85rem;
      left: 1rem;
      font-size: 0.95rem;
      font-weight: 400;
      color: $color-gray;
      pointer-events: none;
      transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
      transform-origin: left top;

      .optional {
        color: rgba($color-gray, 0.7);
        font-weight: 400;
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 1.4rem 1rem 0.4rem;
      border: 1.5px solid rgba($color-gray, 0.4);
      border-radius: $radius-sm;
      font-family: $font-body;
      font-size: 0.95rem;
      color: $color-text;
      background: $color-white;
      transition: all $transition-fast;

      &:focus {
        outline: none;
        border-color: $color-accent;
        box-shadow: 0 0 0 3px rgba($color-accent, 0.1);
      }

      // Float the label when focused or has content
      &:focus + label,
      &:not(:placeholder-shown) + label {
        top: 0.3rem;
        font-size: 0.72rem;
        font-weight: 600;
        color: $color-primary;
        letter-spacing: 0.3px;
      }

      &:focus + label {
        color: $color-accent-dark;
      }
    }

    textarea {
      resize: vertical;
      min-height: 140px;
    }

    &--textarea label {
      background: $color-white;
      padding: 0 0.25rem;
    }
  }

  // Standard field (for selects)
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
        border-color: $color-accent;
        box-shadow: 0 0 0 3px rgba($color-accent, 0.1);
      }

      &::placeholder {
        color: $color-gray;
      }
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

  &__promise {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.85rem 1.1rem;
    background: rgba($color-accent, 0.08);
    border: 1px solid rgba($color-accent, 0.2);
    border-radius: $radius-sm;
    margin-bottom: 2rem;
    font-size: 0.88rem;
    color: $color-primary;

    svg {
      color: $color-accent;
      flex-shrink: 0;
    }
  }

  &__success {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    padding: 1rem 1.2rem;
    background: rgba(34, 139, 34, 0.06);
    border: 1px solid rgba(34, 139, 34, 0.2);
    border-radius: $radius-sm;
    margin-top: 1rem;

    svg {
      color: #228b22;
      flex-shrink: 0;
      margin-top: 1px;
    }

    p {
      font-size: 0.88rem;
      color: #1a6b1a;
      line-height: 1.5;
    }
  }

  &__trust {
    display: flex;
    gap: 1.5rem;
    margin-top: 1.2rem;
    flex-wrap: wrap;
  }

  &__trust-item {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.78rem;
    color: $color-gray;

    svg {
      color: $color-accent;
    }
  }

  &__hint {
    margin-top: 1rem;
    font-size: 0.8rem;
    color: $color-gray;
  }
}
</style>
