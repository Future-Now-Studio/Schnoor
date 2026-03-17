<template>
  <div class="scroll-progress" :class="{ 'scroll-progress--visible': progress > 0 }">
    <svg class="scroll-progress__wave" viewBox="0 0 1440 8" preserveAspectRatio="none">
      <path
        d="M0 4 Q60 0 120 4 T240 4 T360 4 T480 4 T600 4 T720 4 T840 4 T960 4 T1080 4 T1200 4 T1320 4 T1440 4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="scroll-progress__path"
        :style="{ strokeDashoffset: dashOffset }"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
const progress = ref(0)
const PATH_LENGTH = 1480

const dashOffset = computed(() => PATH_LENGTH - (PATH_LENGTH * progress.value))

function onScroll() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  &--visible {
    opacity: 1;
  }

  &__wave {
    display: block;
    width: 100%;
    height: 100%;
    color: $color-accent;
  }

  &__path {
    stroke-dasharray: 1480;
    stroke-dashoffset: 1480;
    transition: stroke-dashoffset 0.1s ease-out;
  }
}
</style>
