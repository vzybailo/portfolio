<template>
  <a href="#" class="switcher__lang" @click="switchLanguage">
    {{ newLang }}
  </a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'

const { locale } = useI18n()
const currentLang = ref(localStorage.getItem('lang') || 'en')

const switchLanguage = () => {
  const newLang = locale.value === 'en' ? 'ru' : 'en'
  locale.value = newLang
  currentLang.value = newLang
  localStorage.setItem('lang', newLang)
}

const newLang = computed(() => {
  return currentLang.value === 'en' ? 'ru' : 'en'
})
</script>

<style lang="scss">
.switcher__lang {
  text-transform: uppercase;
  font-weight: 600;
  margin-right: 10px;
}
</style>
