<template>
  <div class="flex items-center max-sm:flex-col">
    <img
      :src="imgUrl"
      alt=""
      class="project__img w-[250px] mr-6 max-sm:w-auto max-sm:mr-0 max-sm:mb-4"
    />
    <div>
      <div class="mb-4 text-base">{{ title }}</div>
      <div class="mb-2">{{ description }}</div>
      <ul class="flex mb-4 flex-wrap">
        <li class="project__stack-item mr-2 max-sm:mb-2" v-for="(st, index) in stack" :key="index">
          #{{ st }}
        </li>
      </ul>
      <div class="project__btns flex justify-between">
        <div class="flex">
          <a
            v-if="linkGithub"
            :href="linkGithub"
            target="blank"
            class="project__btn flex items-center"
          >
            <Icon class="w-[18px] h-[18px] mr-2" name="github-btn" />
            <span>GitHub</span>
          </a>
          <a v-if="linkLive" :href="linkLive" target="blank" class="project__btn flex items-center">
            <Icon class="w-[18px] h-[18px] mr-2" name="play" />
            <span>Live</span>
          </a>
        </div>
        <a v-if="longDescription.length" @click="showHideDescr" class="flex items-center text-sm cursor-pointer underline">
          {{ showHideText }}
          <Icon
            class="w-[14px] h-[14px] ml-2 transition-transform duration-200"
            :class="isRotateArrow"
            name="arrow"
          />
        </a>
      </div>
    </div>
  </div>
  <Transition
    enter-active-class="transition-all duration-200 ease-out"
    enter-from-class="opacity-0 -translate-y-2 max-h-0 overflow-hidden"
    enter-to-class="opacity-100 translate-y-0 max-h-screen"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 max-h-screen"
    leave-to-class="opacity-0 -translate-y-2 max-h-0 overflow-hidden"
  >
    <div class="mt-6" v-if="isShowDescr">
      <div class="mb-4">
        <p class="mb-1" v-for="(text, index) in longDescription.split('\n\n')" :key="index">
          {{ text }}
        </p>
      </div>
      <div class="mb-4">
        <p class="mb-1" v-for="(t, index) in keyAchievemnt.split('\n\n')" :key="index">{{ t }}</p>
      </div>
      <div>
        <div class="image-gallery">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image.src"
            alt="Project image"
            @click="openLightbox(index)"
            class="thumbnail"
          />
        </div>

        <teleport to="body">
          <vue-easy-lightbox
            v-if="isLightboxVisible"
            :visible="isLightboxVisible"
            :imgs="images.map((img) => img.src ?? img)"
            :index="currentImageIndex"
            @hide="closeLightbox"
          />
        </teleport>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue'
import Icon from './Icon.vue'
import { useI18n } from 'vue-i18n'
import VueEasyLightbox from 'vue-easy-lightbox'

const { t } = useI18n()

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  stack: {
    type: Array,
    defailt: [],
  },
  linkGithub: {
    type: String,
    default: '',
  },
  linkLive: {
    type: String,
    default: '',
  },
  longDescription: {
    type: [String, Array],
    default: () => [],
  },
  keyAchievemnt: {
    type: [String, Array],
    default: () => [],
  },
  images: {
    type: Array,
    default: () => [],
  },
})

const isShowDescr = ref(false)
const isLightboxVisible = ref(false)
const currentImageIndex = ref(0)

const showHideDescr = () => (isShowDescr.value = !isShowDescr.value)
const isRotateArrow = computed(() => (isShowDescr.value ? 'rotate-270' : 'rotate-90'))
const showHideText = computed(() =>
  isShowDescr.value ? t('projects.hide') : t('projects.showMore'),
)

const openLightbox = (index) => {
  currentImageIndex.value = index
  isLightboxVisible.value = true
}

const closeLightbox = () => {
  isLightboxVisible.value = false
}
</script>

<style lang="scss">
.project__img {
  filter: grayscale(1);
}
.project__stack-item {
  padding: 0 5px;
  background-color: $limeHighlight;
}
.project__btn {
  @include btn;
  margin-right: 15px;

  span {
    font-size: 12px;
  }
}

.image-gallery {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.thumbnail {
  width: 150px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s;
}

.thumbnail:hover {
  transform: scale(1.05);
}
</style>
