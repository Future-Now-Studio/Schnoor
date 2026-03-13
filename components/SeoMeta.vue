<template>
  <div />
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
}>()

useHead({
  title: props.title,
})

useSeoMeta({
  title: props.title,
  ogTitle: props.title,
  description: props.description,
  ogDescription: props.description,
  ogType: 'website',
  ogLocale: 'de_DE',
})
</script>
