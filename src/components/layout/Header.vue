<template>
  <header class="flex justify-between items-center py-5 mb-6">
    <Logo />
    <NavMenu v-if="!isMobile"/>
    <div class="flex justify-between items-center">
      <LangSwitcher />
      <DarkLightBtn />
    </div>
  </header>
</template>

<script setup>
import NavMenu from './NavMenu.vue'
import Logo from './Logo.vue'
import DarkLightBtn from './DarkLightBtn.vue'
import LangSwitcher from './LangSwitcher.vue'

import { ref, onMounted } from 'vue'

const isMobile = ref(false)

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.matchMedia('(max-width: 480px)').matches
  }

  checkMobile()
  window.addEventListener('resize', checkMobile)
})


</script>
