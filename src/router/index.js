import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/pages/About.vue'
import Contact from '@/components/pages/Contact.vue'
import Projects from '@/components/pages/Projects.vue'
import Home from '@/components/pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: Home,
    },
    {
      path: '/about',
      name: 'menu.about',
      component: About,
    },
    {
      path: '/projects',
      name: 'menu.projects',
      component: Projects,
    },
    {
      path: '/contact',
      name: 'menu.contact',
      component: Contact,
    },
  ],
})

export default router
