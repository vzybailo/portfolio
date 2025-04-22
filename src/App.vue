<template>
  <div class="wrapper max-sm:px-4">
    <WelcomeHeader :isHomePage v-if="isHomePage" />
    <Header v-else />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer v-if="!isHomePage" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import Header from './components/layout/Header.vue'
import WelcomeHeader from './components/layout/WelcomeHeader.vue'
import Footer from './components/layout/Footer.vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

<style lang="scss">
</style>
