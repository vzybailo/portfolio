<template>
  <header class="flex justify-between items-center py-5 mb-6">
    <Logo />
    <NavMenu />
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
</script>
