<template>
  <div class="project flex items-center">
    <img :src="imgUrl" alt="" class="project__img mr-6">
    <div class="project__block">
      <div class="project__title mb-4 text-base">{{ title }}</div>
      <div class="project__description mb-2">{{ description }}</div>
      <ul class="project__stack flex mb-4">
        <li class="project__stack-item" v-for="st in stack" :key="index">
          #{{ st }}
        </li>
      </ul>
      <div class="project__btns flex">
        <a :href="linkGithub" target="blank" class="project__btn flex items-center">
          <Icon class="project__btn-icon" name="github-btn"/>
          <span>GitHub</span>
        </a>
        <a :href="linkLive" target="blank" class="project__btn flex items-center">
          <Icon class="project__btn-icon" name="play"/>
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Icon from './Icon.vue';

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
    required: true
  },
  stack: {
    type: Array,
    required: true
  },
  linkGithub: {
    type: String,
    required: true
  },
  linkLive: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
.project__img {
    width: 250px;
    filter: grayscale(1);
}
.project__stack-item {
    padding: 0 5px;
    background-color: #C4E538;
    margin-right: 10px; 
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
