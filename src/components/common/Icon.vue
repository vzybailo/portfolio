<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.icon {
  fill: currentColor;
}
</style>
