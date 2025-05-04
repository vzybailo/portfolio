<template>
  <div class="copyright flex max-sm:flex-col"> 
    <span>©{{ currentYear }} {{ $t('name') }}.</span> 
    <span>{{ $t('copyright') }}</span>
  </div>
</template>

<script setup>
let currentYear = new Date().getFullYear()
</script>

<style lang="scss"></style>
