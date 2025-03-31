<template>
  <div class="project">
    <div class="project__title">
      {{ title }}
    </div>
    <div class="project__description">{{ description }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss"></style>
