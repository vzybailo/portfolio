<template>
  <div class="wrapper">
    <WelcomeHeader :isHomePage v-if="isHomePage" />
    <Header v-else />
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Header from './components/layout/Header.vue'
import WelcomeHeader from './components/layout/WelcomeHeader.vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

<style lang="scss"></style>
