<template>
  <div class="copyright">© {{ currentYear }} {{ $t('name') }}. {{ $t('copyright') }}</div>
</template>

<script setup>
let currentYear = new Date().getFullYear()
</script>

<style lang="scss"></style>
