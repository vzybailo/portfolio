<template>
  <div class="flex flex-col align-center">
    <NavMenu/>
    <div class="flex align-center">
      <LangSwitcher/>
      <DarkLightBtn/>
    </div>
  </div>
</template>

<script setup>
import NavMenu from './NavMenu.vue';
import LangSwitcher from './LangSwitcher.vue';
import DarkLightBtn from './DarkLightBtn.vue';
</script>