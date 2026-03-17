<template>
  <div class="faq">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="faq__item"
      :class="{ 'faq__item--open': openIndex === index }"
    >
      <button
        class="faq__question"
        :aria-expanded="(openIndex === index).toString()"
        :aria-controls="'faq-answer-' + index"
        @click="toggle(index)"
      >
        <span>{{ item.question }}</span>
        <PhCaretDown :size="20" weight="light" class="faq__icon" />
      </button>
      <Transition name="faq-expand">
        <div v-show="openIndex === index" :id="'faq-answer-' + index" role="region" class="faq__answer">
          <div class="faq__answer-inner">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhCaretDown } from '@phosphor-icons/vue'

interface FaqItem {
  question: string
  answer: string
}

defineProps<{
  items: FaqItem[]
}>()

const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.faq {
  max-width: 800px;
  margin: 0 auto;

  &__item {
    border-bottom: 1px solid rgba($color-primary-light, 0.1);

    &--open .faq__icon {
      transform: rotate(180deg);
      color: $color-accent;
    }

    &--open .faq__question {
      color: $color-primary-dark;
    }
  }

  &__question {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.3rem 0;
    background: none;
    border: none;
    cursor: pointer;
    font-family: $font-body;
    font-size: 1.05rem;
    font-weight: 500;
    color: $color-primary;
    text-align: left;
    transition: color $transition-fast;

    &:hover {
      color: $color-primary-dark;
    }
  }

  &__icon {
    flex-shrink: 0;
    color: $color-primary-light;
    transition: transform $transition-base;
  }

  &__answer {
    overflow: hidden;
  }

  &__answer-inner {
    padding: 0 0 1.3rem;
    color: $color-text-light;
    line-height: 1.7;
    font-size: 0.95rem;
  }
}

.faq-expand-enter-active,
.faq-expand-leave-active {
  transition: all 0.3s ease;
}

.faq-expand-enter-from,
.faq-expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.faq-expand-enter-to,
.faq-expand-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
