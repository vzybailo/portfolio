<template>
  <footer class="footer flex justify-between items-center">
    <Copyright />
    <Socials />
  </footer>
</template>

<script setup>
import Copyright from './Copyright.vue'
import Socials from './Socials.vue'
</script>

<style lang="scss">
.footer {
  padding: 10px 0;

  .socials__icon {
    width: 26px;
  }
}
</style>
