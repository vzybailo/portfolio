<template>
  <div class="about">
    <PageTitle :title="$t('page.about')" />
    <div class="about__top flex mb-12 max-sm:flex-col">
      <img
        src="@/assets/images/about.png"
        alt=""
        class="w-1/2 mr-6 max-sm:w-full"
        loading="lazy"
      />
      <div class="about__descr pt-10">
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
    <div class="about__stack mb-12">
      <h2 class="about__title mb-6 text-l">{{ $t('about.stack') }}</h2>
      <Stack />
    </div>
    <div class="about__outside mb-10">
      <h2 class="about__title mb-6 text-l">{{ $t('about.outsideTitle') }}</h2>
      <p class="mb-4">{{ $t('about.outsideSubTitle') }}</p>
      <ul>
        <li>{{ $t('about.outsideItemOne') }}</li>
        <li>{{ $t('about.outsideItemTwo') }}</li>
        <li>{{ $t('about.outsideItemThree') }}</li>
        <li>{{ $t('about.outsideItemFour') }}</li>
      </ul>
    </div>
    <div class="mb-12">
      <div class="mb-4 tracking-wider">{{ $t('about.photoTitle') }}</div>
      <div class="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-6xl mx-auto">
        <div v-for="(photo, index) in photos" :key="index" class="break-inside-avoid mb-4">
          <img
            :src="photo.src"
            :alt="photo.alt"
            class="about__photo w-full shadow-md object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageTitle from '../common/PageTitle.vue'
import Stack from '../layout/Stack.vue'
import { useI18n } from 'vue-i18n'
import { ref, watch, computed } from 'vue'

import lake from '@/assets/images/lake.jpg'
import beach from '@/assets/images/beach.jpg'
import sunset from '@/assets/images/sunset.jpg'
import horse from '@/assets/images/horse.jpg'
import field from '@/assets/images/field.jpg'
import tree from '@/assets/images/tree.jpg'

const photos = [
  { src: lake, alt: 'Lake view' },
  { src: beach, alt: 'Beach' },
  { src: sunset, alt: 'Sunset' },
  { src: tree, alt: 'Tree silhouette' },
  { src: horse, alt: 'Horse' },
  { src: field, alt: 'field lights' },
]

const { t, locale } = useI18n()

const titleSecond = ref(t('about.titleSecond'))
const highlight = ref(t('about.highlight'))

watch(
  () => locale.value,
  () => {
    titleSecond.value = t('about.titleSecond')
    highlight.value = t('about.highlight')
  },
)

const highlightedSecondTitle = computed(() => {
  return titleSecond.value.replace(
    new RegExp(`(${highlight.value})`, 'iu'),
    `<span style="background-color: #39D28A; padding: 2px 4px;">$1</span>`,
  )
})
</script>

<style lang="scss">
.about__title {
  width: max-content;
  padding: 2px 4px;
  color: $pinkTitle;
}
.break-inside-avoid {
  break-inside: avoid;
}
.about__photo {
  max-height: 450px;
  filter: grayscale(1);
  transition: 0.3s;

  &:hover {
    filter: grayscale(0);
    transition: 0.3s;
  }
}
</style>
