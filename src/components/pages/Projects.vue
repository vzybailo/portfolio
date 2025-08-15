<template>
  <div class="projects">
    <PageTitle :title="$t('page.projects')" />
    <ProjectFilter :filters="filters" :activeFilter="activeFilter" @update-filter="setFilter" />
    <ul class="project__list">
      <li class="project__item" v-for="project in filteredProjects" :key="project.title">
        <Project
          :imgUrl="project.img"
          :title="project.title"
          :description="project.description"
          :stack="project.stack"
          :linkGithub="project.linkGithub"
          :linkLive="project.linkLive"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageTitle from '../common/PageTitle.vue'
import Project from '../common/Project.vue'
import githubFinderImg from '@/assets/images/github-finder.gif'
import skVerhImg from '@/assets/images/skverh.gif'
import portfolioImg from '@/assets/images/portfolio.gif'
import golovkoImg from '@/assets/images/golovko.gif'
import { useI18n } from 'vue-i18n'
import ProjectFilter from '../layout/ProjectFilter.vue'

const { t } = useI18n()

const projects = computed(() => [
  {
    title: 'My portfolio',
    description: t('projects.portfolio'),
    img: portfolioImg,
    stack: ['Vue', 'Tailwind', 'SCSS'],
    linkGithub: 'https://github.com/vzybailo/portfolio',
    category: 'vue',
  },
  {
    title: 'Github finder',
    description: t('projects.githubFinder'),
    img: githubFinderImg,
    stack: ['Vue', 'Axios', 'Github API', 'SCSS'],
    linkGithub: 'https://github.com/vzybailo/github-finder',
    category: 'vue',
  },
  {
    title: 'Lone Magnet',
    description: 'lorem22',
    img: 'src/assets/images/github-finder.png',
    category: 'react, wordpress',
  },
  {
    title: 'Varvara Golovko - interior designer',
    description: t('projects.golovko'),
    img: golovkoImg,
    stack: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'WordPress', 'ACF', 'Custom Posts'],
    linkLive: 'https://varvara-golovko.com/',
    category: 'wordpress',
  },
  {
    title: 'SK-Verh',
    description: t('projects.skVerh'),
    img: skVerhImg,
    stack: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'WordPress', 'ACF', 'Custom Theme'],
    linkLive: 'https://sk-verh.ru/',
    category: 'wordpress',
  },
])

const activeFilter = ref(null)

const filters = [{ title: 'vue' }, { title: 'react' }, { title: 'wordpress' }]

const setFilter = (filter) => {
  activeFilter.value = filter
}

const filteredProjects = computed(() => {
  return activeFilter.value
    ? projects.value.filter((p) => p.category === activeFilter.value)
    : projects.value
})
</script>

<style lang="scss">
.project__item {
  padding: 20px;
  border: 1px solid #d5d5d5;
  margin-bottom: 25px;
  box-shadow: $lightShadow;
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
