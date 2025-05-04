<template>
  <div class="flex flex-col align-center">
    <NavMenu @close="close" />
    <div class="flex align-center justify-center">
      <LangSwitcher class="burger__langswitcher mr-2" />
      <DarkLightBtn class="burger__darklight" />
    </div>
  </div>
</template>

<script setup>
import NavMenu from './NavMenu.vue'
import LangSwitcher from './LangSwitcher.vue'
import DarkLightBtn from './DarkLightBtn.vue'
import { defineProps } from 'vue'

const props = defineProps({
  isOpen: Boolean,
})
const emit = defineEmits(['update:isOpen'])

const close = () => emit('update:isOpen', false)
</script>

<style lang="scss">
.burger__langswitcher {
  font-size: 20px;
}
.burger__darklight .switcher__icon {
  width: 24px;
  height: 24px;
}
</style>
