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
      <div class="project__btns flex">
        <a
          v-if="linkGithub"
          :href="linkGithub"
          target="blank"
          class="project__btn flex items-center"
        >
          <Icon class="project__btn-icon" name="github-btn" />
          <span>GitHub</span>
        </a>
        <a v-if="linkLive" :href="linkLive" target="blank" class="project__btn flex items-center">
          <Icon class="project__btn-icon" name="play" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Icon from './Icon.vue'

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
})
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
.project__btn-icon {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}
</style>
