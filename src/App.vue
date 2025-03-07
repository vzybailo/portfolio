<template>
  <div class="wrapper">
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import Header from './components/layout/Header.vue'

// onMounted(() => {
//   document.body.setAttribute('data-theme', 'light')
// })
</script>

<style lang="scss"></style>
