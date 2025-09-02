<template>
  <div class="projects">
    <PageTitle :title="$t('page.projects')" />
    <ProjectFilter :filters="filters" :activeFilter="activeFilter" @update-filters="setFilter" />
    <ul class="project__list">
      <li class="project__item" v-for="project in filteredProjects" :key="project.title">
        <Project
          :imgUrl="project.img"
          :title="project.title"
          :description="project.description"
          :stack="project.stack"
          :linkGithub="project.linkGithub"
          :linkLive="project.linkLive"
          :longDescription="project.longDescription"
          :keyAchievemnt="project.keyAchievemnt"
          :images="project.images"
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
import { useI18n } from 'vue-i18n'
import ProjectFilter from '../layout/ProjectFilter.vue'

const { t } = useI18n()

const projects = computed(() => [
  {
    title: 'LoneMagnet',
    description: t('projects.loneMagnet.short'),
    img: 'src/assets/images/lonemagnet.png',
    stack: ['WordPress', 'React', 'JavaScript', 'PHP', 'Tailwind'],
    linkGithub: 'https://github.com/vzybailo/lone-magnet',
    linkLive: 'https://lonemagnet.com/',
    category: ['react', 'wordpress'],
    longDescription: t('projects.loneMagnet.long'),
    keyAchievemnt: t('projects.loneMagnet.key'),
    images: [
      { src: 'src/assets/images/lm1.png', alt: 'cropper app' },
      { src: 'src/assets/images/lm2.png', alt: 'thumb in the cart' },
      { src: 'src/assets/images/lm3.png', alt: 'order in admin' },
      { src: 'src/assets/images/lm4.png', alt: 'generation pdf' },
      { src: 'src/assets/images/lm5.png', alt: 'generation pdf' }
    ],
  },
  {
    title: 'My portfolio',
    description: t('projects.portfolio'),
    img: 'src/assets/images/prt0.png',
    stack: ['Vue', 'Tailwind', 'SCSS'],
    linkGithub: 'https://github.com/vzybailo/portfolio',
    category: ['vue'],
  },
  {
    title: 'Github finder',
    description: t('projects.githubFinder'),
    img: githubFinderImg,
    stack: ['Vue', 'Axios', 'Github API', 'SCSS'],
    linkGithub: 'https://github.com/vzybailo/github-finder',
    category: ['vue'],
  },
  {
    title: 'Varvara Golovko - interior designer',
    description: t('projects.golovko'),
    img: 'src/assets/images/g0.png',
    stack: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'WordPress', 'ACF', 'Custom Posts'],
    linkLive: 'https://varvara-golovko.com/',
    category: ['wordpress'],
  },
  {
    title: 'SK-Verh',
    description: t('projects.skVerh'),
    img: 'src/assets/images/sk0.png',
    stack: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'WordPress', 'ACF', 'Custom Theme'],
    linkLive: 'https://sk-verh.ru/',
    category: ['wordpress'],
  },
])

const activeFilter = ref([])

const filters = [{ title: 'vue' }, { title: 'react' }, { title: 'wordpress' }]

const setFilter = (filter) => {
  activeFilter.value = filter
}

const filteredProjects = computed(() => {
  if (!activeFilter.value.length) {
    return projects.value
  }
  return projects.value.filter((p) => activeFilter.value.some((f) => p.category.includes(f)))
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
