<template>
  <header class="header flex justify-between items-center py-5">
    <Logo />
    <NavMenu />
    <div class="switchers flex justify-between items-center">
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
