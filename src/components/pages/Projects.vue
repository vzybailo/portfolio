<template>
  <div class="projects">
    <PageTitle :title="$t('page.projects')" />
    <ProjectFilter/>
    <ul class="project__list">
      <li class="project__item" v-for="project in projects" :key="project.title">
        <Project
          :imgUrl="project.img"
          :title="project.title"
          :description="project.description"
          :stack="project.stack"
          :linkGithub="project.linkGithub"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import PageTitle from '../common/PageTitle.vue'
import Project from '../common/Project.vue'
import githubFinderImg from '@/assets/images/github-finder.gif'
import { useI18n } from 'vue-i18n'
import ProjectFilter from '../layout/ProjectFilter.vue'

const { t } = useI18n()

const projects = computed(() => [
  {
    title: 'Github finder',
    description: t('projects.githubFinder'),
    img: githubFinderImg,
    stack: ['Vue', 'Axios', 'Github API', 'SCSS'],
    linkGithub: 'https://github.com/vzybailo/github-finder',
    linklive: '',
  },
  {
    title: 'Build',
    description: 'lorem22',
    img: 'src/assets/images/github-finder.png',
  },
])
</script>

<style lang="scss">
.project__item {
  padding: 20px;
  border: 1px solid #d5d5d5;
  margin-bottom: 25px;
  box-shadow: 4px 4px 0 2px #e9e9e9;
  transition: 0.4s;

  &:hover {
    box-shadow: none;
    transform: translateY(2px);
  }

  &:hover .project__img {
    transition: 0.4s;
    filter: grayscale(0);
  }
}
</style>
