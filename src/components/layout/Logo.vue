<template>
  <router-link to="/">
    <Icon class="logo" name="logo" />
  </router-link>
</template>

<script setup>
import Icon from '../common/Icon.vue'
</script>

<style lang="scss">
.logo {
  width: 30px;
  height: 30px;
  transform: rotate(180deg);
}
</style>
