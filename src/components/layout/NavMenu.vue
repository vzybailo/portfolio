<template>
  <nav class="nav">
    <ul class="nav__list flex">
      <li class="nav__item" v-for="route in menuRoutes" :key="route.name">
        <router-link :to="route.path">{{ $t(route.name) || route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuRoutes = computed(() =>
  router.options.routes
    .filter(route => route.name && route.path !== '/') 
    .map(route => ({
      path: route.path,
      name: route.name
    }))
)
</script>

<style lang="scss">
.nav__item {
  margin-right: 15px;

  a {
    text-transform: uppercase;
  }

  &:last-child {
    margin-right: 0;
  }
}
a.router-link-active.router-link-exact-active {
  text-decoration: underline;
}
</style>
