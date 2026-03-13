<template>
  <a
    href="https://wa.me/4915123456789?text=Guten%20Tag%20Herr%20Schnoor%2C%20ich%20habe%20eine%20rechtliche%20Frage."
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-btn"
    aria-label="WhatsApp Kontakt"
  >
    <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.907 15.907 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.316 22.612c-.39 1.1-1.932 2.014-3.172 2.282-.848.18-1.956.324-5.684-1.222-4.772-1.978-7.838-6.826-8.076-7.142-.228-.316-1.918-2.556-1.918-4.874s1.214-3.458 1.644-3.932c.43-.474.94-.592 1.252-.592.312 0 .624.002.896.016.288.014.674-.11 1.054.804.39.94 1.332 3.238 1.448 3.472.118.234.196.508.04.82-.156.312-.234.508-.468.782-.234.274-.492.612-.702.822-.234.234-.478.488-.206.958s1.21 1.998 2.598 3.236c1.784 1.59 3.288 2.084 3.756 2.318.468.234.742.196 1.016-.118.274-.312 1.176-1.372 1.488-1.842.312-.474.624-.39 1.054-.234.43.156 2.724 1.286 3.192 1.52.468.234.78.352.896.546.118.196.118 1.1-.272 2.2z"/>
    </svg>
    <span class="whatsapp-btn__tooltip">WhatsApp schreiben</span>
  </a>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.whatsapp-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  background: #25d366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
  transition: all $transition-base;
  z-index: 999;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 24px rgba(37, 211, 102, 0.5);
    color: white;
  }

  &:hover .whatsapp-btn__tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  &__tooltip {
    position: absolute;
    right: 100%;
    margin-right: 12px;
    background: $color-primary;
    color: $color-white;
    padding: 0.5rem 1rem;
    border-radius: $radius-sm;
    font-size: 0.85rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transform: translateX(10px);
    transition: all $transition-base;
    box-shadow: $shadow-sm;
  }
}
</style>
