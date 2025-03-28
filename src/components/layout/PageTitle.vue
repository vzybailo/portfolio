<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss">
.title {
  position: relative;
  margin-bottom: 40px;
  font-size: 36px;
  color: $blue;
}
</style>
