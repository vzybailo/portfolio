<template>
  <ul class="socials__list flex justify-center items-center">
    <li class="socials__item" v-for="social in socials" :key="social.title">
      <a :href="social.link" target="blank" class="socials__link">
        <Icon :name="social.title" class="socials__icon" />
      </a>
    </li>
  </ul>
</template>

<script setup>
import Icon from '../common/Icon.vue'

const socials = [
  { title: 'linkedin', link: 'https://www.linkedin.com/in/zybailo/' },
  { title: 'github', link: 'https://github.com/vzybailo' },
  { title: 'youtube', link: 'https://www.youtube.com/@zybailo' },
  { title: 'instagram', link: 'https://www.instagram.com/vzybaila' },
]
</script>

<style lang="scss">
.socials__icon {
  width: 26px;
  height: 26px;
  margin-right: 5px;
  transition: 0.3s;

  &:hover {
    fill: $blueBtn;
    transition: 0.3s;
  }
}
.socials__item:last-child {
  .socials__icon {
    margin-right: 0;
  }
}
</style>
