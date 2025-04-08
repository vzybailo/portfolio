<template>
  <div class="about">
    <PageTitle :title="$t('page.about')" />
    <div class="about__top flex">
      <img src="../../assets/images/about-img.jpg" alt="" class="about__img">
      <div class="about__descr">
        <h2 class="about__title">I'm Vitali. I'm a frontend developer.</h2>
        <div class="about__text"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageTitle from '../layout/PageTitle.vue'
</script>

<style>
.about__img {
  width: 50%;
  filter: opacity(0.5);
}
</style>
