<template>
  <header>
    <div class="py-5 mb-6" :class="openClass">
      <div v-if="isMobile" class="flex justify-between items-center">
        <Logo />
        <div
          @click="toggleOpen"
          :class="{ 'is-active': isOpenBurger }"
          class="burger cursor-pointer"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div v-else class="flex justify-between items-center">
        <Logo />
        <NavMenu v-model:isOpen="isOpenBurger" />
        <div class="flex items-center">
          <LangSwitcher />
          <DarkLightBtn />
        </div>
      </div>

      <Burger
        v-if="isMobile && isOpenBurger"
        v-model:isOpen="isOpenBurger"
        class="w-screen h-screen justify-center"
      />
    </div>
  </header>
</template>

<script setup>
import NavMenu from './NavMenu.vue'
import Logo from './Logo.vue'
import DarkLightBtn from './DarkLightBtn.vue'
import LangSwitcher from './LangSwitcher.vue'
import Burger from './Burger.vue'

import { ref, onMounted, computed, watch, nextTick } from 'vue'

const isMobile = ref(false)
const isOpenBurger = ref(false)

const openClass = computed(() => ({ 'open-burger': isOpenBurger.value }))

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.matchMedia('(max-width: 480px)').matches
  }

  checkMobile()
  window.addEventListener('resize', checkMobile)
})

watch(isOpenBurger, (newVal) => {
  if(newVal) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})

const toggleOpen = () => (isOpenBurger.value = !isOpenBurger.value)
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
.burger span {
  display: block;
  background-color: currentColor;
  height: 1.5px;
  width: 28px;

  &:nth-child(2) {
    margin: 8px 0;
  }
}
.burger.is-active {
  position: relative;

  span:nth-child(2) {
    display: none;
  }
  span:first-child {
    transform: rotate(45deg);
    position: absolute;
    top: 0px;
  }
  span:last-child {
    transform: rotate(-45deg);
  }
}
.overflow-hidden {
  overflow: hidden;
}
</style>
