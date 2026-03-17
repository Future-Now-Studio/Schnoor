<template>
  <div>
    <div v-if="showSplash" class="splash" :class="{ 'splash--hidden': hideSplash }">
      <div class="splash__inner">
        <div class="splash__logo">
          <img src="~/assets/images/Logo.png" alt="Kanzlei Schnoor" />
        </div>
        <div class="splash__bar">
          <div class="splash__bar-fill"></div>
        </div>
      </div>
    </div>

    <NuxtLoadingIndicator
      color="linear-gradient(90deg, #dbc5b6, #e8d5c4, #dbc5b6)"
      :height="3"
      :duration="2000"
      :throttle="200"
    />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const showSplash = ref(true)
const hideSplash = ref(false)

onMounted(() => {
  setTimeout(() => {
    hideSplash.value = true
  }, 700)

  setTimeout(() => {
    showSplash.value = false
  }, 1000)
})
</script>
