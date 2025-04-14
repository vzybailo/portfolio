<template>
  <ul class="filter__list flex mb-4">
    <li v-for="(filter, index) in filters" :key="index" class="filter__item cursor-pointer mr-4 px-2 border border-[#d5d5d5]">
      <span @click="applyFilter(filter.title)" class="filter__link">{{ filter.title }}</span>
      <span v-if="activeFilter === filter.title" @click.stop.prevent="clearFilter" class="ml-2 text-[#ff5500]">x</span>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

let activeFilter = ref(null)

const filters = [
  { title: "vue" },
  { title: "react" },
  { title: "wordpress" }
]

const applyFilter = (title) => {
  activeFilter.value = title
  console.log("Applied:", title)
}

const clearFilter = () => {
  activeFilter.value = null
  console.log("Filter cleared")
}
</script>

<style lang="scss">

</style>