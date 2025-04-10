<template>
  <div class="about">
    <PageTitle :title="$t('page.about')" />
    <div class="about__top flex">
      <img src="../../assets/images/about.png" alt="" class="about__img mr-6">
      <div class="about__descr">
        <div class="flex flex-col text-[36px] mb-14">
          <span>{{ $t('about.titleFirst') }}</span>
          <span v-html="highlightedSecondTitle"></span>
        </div>
        <div class="text-l mb-6">{{ $t('about.text') }}</div>
        <div class="text-l mb-6">{{ $t('about.textFirst') }}</div>
        <div class="text-l mb-6">{{ $t('about.textSec') }}</div>
        <div class="text-l">{{ $t('about.textThree') }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageTitle from '../layout/PageTitle.vue'
import { useI18n } from 'vue-i18n'
import { ref, watch, computed } from 'vue'

const { t, locale } = useI18n()

const titleSecond = ref(t('about.titleSecond'))
const highlight = ref(t('about.highlight'))

watch(() => locale.value, () => {
  titleSecond.value = t('about.titleSecond')
  highlight.value = t('about.highlight')
})

const highlightedSecondTitle = computed(() => {
  return titleSecond.value.replace(
    new RegExp(`(${highlight.value})`, 'iu'),
    `<span style="background-color: #C4E538; padding: 2px 4px;">$1</span>`
  )
})
</script>

<style>
.about__img {
  width: 50%;
}
</style>
