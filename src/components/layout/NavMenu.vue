<template>
  <nav class="nav">
    <ul class="nav__list flex">
      <li class="nav__item" v-for="route in menuRoutes" :key="route.name">
        <router-link class="nav__link uppercase" :to="route.path" @click="closeMenu">{{
          $t(route.name) || route.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

defineProps({ isOpen: Boolean })

const emit = defineEmits(['update:isOpen'])

const router = useRouter()

const menuRoutes = computed(() =>
  router.options.routes
    .filter((route) => route.name && route.path !== '/')
    .map((route) => ({
      path: route.path,
      name: route.name,
    })),
)

const closeMenu = (() => emit('update:isOpen', false))
</script>

<style lang="scss">
.nav__item {
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
}
a.router-link-active.router-link-exact-active {
  text-decoration: underline;
}
</style>
