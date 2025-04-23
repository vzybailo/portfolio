<template>
  <header >
    <div v-if="!isMobile" class="flex justify-between items-center py-5 mb-6">
      <Logo />
      <NavMenu/>
      <div class="flex justify-between items-center">
        <LangSwitcher />
        <DarkLightBtn />
      </div>
    </div>
    <div v-else>
      <div class="flex justify-between items-center py-5 mb-6">
        <Logo/>
        <div @click="openMenu">
          click
        </div>
      </div>
      <div v-if="isOpen" class="h-screen w-screen flex flex-col justify-center items-center">
        <NavMenu class="mobile-menu mb-10" v-model:isOpen="isOpen"/>
        <div class="flex items-center justify-center w-full">
          <LangSwitcher />
          <DarkLightBtn />
        </div>
      </div>
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
const isOpen = ref(false)

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.matchMedia('(max-width: 480px)').matches
  }

  checkMobile()
  window.addEventListener('resize', checkMobile)
})

const openMenu = (() => isOpen.value = !isOpen.value)
</script>

<style lang="scss">
.mobile-menu .nav__list {
  flex-direction: column;

  .nav__item {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .nav__link {
    font-size: 26px;
  }
}
</style>
