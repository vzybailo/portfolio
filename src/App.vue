<template>
  <div class="wrapper">
    <WelcomeHeader :isHomePage v-if="isHomePage" />
    <Header v-else />
    <main class="content">
      <router-view />
    </main>
    <Footer v-if="!isHomePage" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Header from './components/layout/Header.vue'
import WelcomeHeader from './components/layout/WelcomeHeader.vue'
import Footer from './components/layout/Footer.vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

<style lang="scss">
.content {
  flex: 1;
}
</style>
