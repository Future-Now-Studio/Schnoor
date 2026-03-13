<template>
  <div>
    <!-- Splash Screen -->
    <div v-if="showSplash" class="splash" :class="{ 'splash--hidden': hideSplash }">
      <div class="splash__logo">
        <img src="~/assets/images/Logo.png" alt="Kanzlei Schnoor" />
      </div>
      <div class="splash__bar"></div>
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const showSplash = ref(true)
const hideSplash = ref(false)

onMounted(() => {
  // Start fade-out after content is ready
  setTimeout(() => {
    hideSplash.value = true
  }, 800)

  // Remove from DOM after animation
  setTimeout(() => {
    showSplash.value = false
  }, 1300)
})
</script>
