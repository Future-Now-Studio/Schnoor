<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled, 'header--open': menuOpen }">
    <div class="container header__inner">
      <NuxtLink to="/" class="header__logo" @click="menuOpen = false">
        <img src="~/assets/images/Schnoor-Neu.png" alt="Kanzlei Schnoor" class="header__logo-mark" />
        <div class="header__logo-text">
          <span class="header__logo-name">Philipp Schnoor</span>
          <span class="header__logo-sub">Rechtsanwalt &amp; Strafverteidiger</span>
        </div>
      </NuxtLink>

      <button
        class="header__burger"
        :class="{ 'header__burger--active': menuOpen }"
        @click="menuOpen = !menuOpen"
        :aria-label="menuOpen ? 'Menü schließen' : 'Menü öffnen'"
        :aria-expanded="menuOpen.toString()"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="header__nav" :class="{ 'header__nav--open': menuOpen }">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="header__nav-link"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink to="/kontakt" class="btn btn--primary btn--nav" @click="menuOpen = false">
          Kontakt aufnehmen
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { to: '/', label: 'Startseite' },
  { to: '/mietrecht', label: 'Mietrecht' },
  { to: '/strafrecht', label: 'Strafrecht' },
  { to: '/verkehrsrecht', label: 'Verkehrsrecht' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(menuOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.2rem 0;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  background-color: transparent;

  &--scrolled {
    background-color: rgba($color-primary, 0.97);
    backdrop-filter: blur(10px);
    padding: 0.8rem 0;
    box-shadow: $shadow-md;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    z-index: 1001;
  }

  &__logo-mark {
    width: 56px;
    height: 56px;
    object-fit: contain;
    border-radius: $radius-sm;
  }

  &__logo-text {
    display: flex;
    flex-direction: column;
  }

  &__logo-name {
    font-family: $font-heading;
    font-size: 1.35rem;
    font-weight: 600;
    color: $color-white;
    line-height: 1.2;

    @media (max-width: $bp-sm) {
      font-size: 1.1rem;
    }
  }

  &__logo-sub {
    font-size: 0.78rem;
    color: $color-accent;
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: nowrap;

    @media (max-width: $bp-sm) {
      font-size: 0.6rem;
      letter-spacing: 0.5px;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: $bp-lg) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 1000;
      background: rgba($color-primary, 0.98);
      backdrop-filter: blur(12px);
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      opacity: 0;
      visibility: hidden;
      transition: all $transition-base;

      &--open {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &__nav-link {
    font-size: 0.9rem;
    font-weight: 400;
    color: rgba($color-white, 0.85);
    text-decoration: none;
    letter-spacing: 0.3px;
    position: relative;
    transition: color $transition-fast;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      width: 0;
      height: 2px;
      background: $color-accent;
      transition: all $transition-base;
      transform: translateX(-50%);
    }

    &:hover,
    &.router-link-active {
      color: $color-white;

      &::after {
        width: 100%;
      }
    }

    @media (max-width: $bp-lg) {
      font-size: 1.5rem;
      font-family: $font-heading;
    }
  }

  .btn--nav {
    padding: 0.7rem 1.5rem;
    font-size: 0.85rem;

    @media (max-width: $bp-lg) {
      font-size: 1rem;
      padding: 1rem 2rem;
      margin-top: 1rem;
    }
  }

  &__burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    z-index: 1001;

    span {
      display: block;
      width: 24px;
      height: 2px;
      background: $color-white;
      transition: all $transition-base;
      border-radius: 2px;
    }

    &--active {
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }

    @media (max-width: $bp-lg) {
      display: flex;
    }
  }
}
</style>
