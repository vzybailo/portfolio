<template>
  <a href="#" role="button" class="switcher__theme" @click="switchTheme">
    <Icon class="switcher__icon" :class="iconTheme" :name="iconTheme" />
  </a>
</template>

<script setup>
import { onMounted, computed, ref} from 'vue'
import Icon from '../common/Icon.vue'

const currentTheme = ref('light')

const switchTheme = () => {
  const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
  document.body.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
  currentTheme.value = newTheme
}

onMounted(() => {
  let savedTheme = localStorage.getItem('theme') || 'light'
  document.body.setAttribute('data-theme', savedTheme)
  currentTheme.value = savedTheme
})

const iconTheme = computed(() => {
  return currentTheme.value === 'light' ? 'moon' : 'sun'
})
</script>

<style lang="scss">
.switcher__icon {
  width: 20px;
  height: 20px;
  transition: 0.3s ease;

  &:hover {
    transform: rotate(20deg);
  }

  &.sun:hover {
    fill: yellow;
    transition: 0.3s;
  }

  &.moon:hover {
    fill: rgb(67 92 157);
    transition: 0.3s;
  }
}
</style>
