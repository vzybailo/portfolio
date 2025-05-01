<template>
  <header>
    <div class="py-5 mb-6" :class="openClass">
      <div v-if="isMobile" class="flex justify-between items-center">
        <Logo />
        <div @click="toggleOpen" class="cursor-pointer">
          click
        </div>
      </div>

      <div v-else class="flex justify-between items-center">
        <Logo />
        <NavMenu v-model="isOpen" />
        <div class="flex items-center">
          <LangSwitcher />
          <DarkLightBtn />
        </div>
      </div>

      <Burger v-if="isMobile && isOpenBurger" class="mt-4 w-screen h-screen justify-center" />
    </div>
  </header>
</template>


<script setup>
import NavMenu from './NavMenu.vue'
import Logo from './Logo.vue'
import DarkLightBtn from './DarkLightBtn.vue'
import LangSwitcher from './LangSwitcher.vue'
import Burger from './Burger.vue'

import { ref, onMounted, computed } from 'vue'

const isMobile = ref(false)
const isOpenBurger = ref(false)

const openClass = computed(() => ({'open-burger': isOpenBurger.value}))

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.matchMedia('(max-width: 480px)').matches
  }

  checkMobile()
  window.addEventListener('resize', checkMobile)
})

const toggleOpen = () => isOpenBurger.value = !isOpenBurger.value
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
.open-burger {
  display: flex;
  flex-direction: column;

  .nav__list {
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
  .nav__item {
    margin-right: 0;
    margin-bottom: 20px;
  }
  .nav__link {
    font-size: 26px;
  }
}
</style>
