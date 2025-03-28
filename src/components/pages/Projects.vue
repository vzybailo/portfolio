<template>
  <div class="projects">
    <PageTitle :title="$t('page.projects')" />
    <ul class="project__list">
      <li class="project__item" v-for="project in projects" :key="project.title">
        <Project   
          :title="project.title"
          :description="project.description"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import PageTitle from '../layout/PageTitle.vue'
import Project from '../common/Project.vue';

const projects = [
  {
    title: 'golovko',
    description: "lorem"
  },
  {
    title: 'build',
    description: "lorem22"
  },
]
</script>

<style lang="scss">
.project__item {
    padding: 20px;
    border: 1px solid #d5d5d5;
    margin-bottom: 25px;
    box-shadow: 4px 4px 0 2px #e9e9e9;
}
</style>
