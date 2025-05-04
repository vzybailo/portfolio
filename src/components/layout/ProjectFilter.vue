<template>
  <ul class="filter__list flex mb-4">
    <li
      v-for="(filter, index) in filters"
      :key="index"
      :class="{ active: activeFilter === filter.title }"
      class="filter__item cursor-pointer mr-2 px-2"
    >
      <span @click="selectFilter(filter.title)">{{ filter.title }}</span>
      <span
        v-if="activeFilter === filter.title"
        @click.stop.prevent="clearFilter"
        class="ml-2 text-[#ff073a]"
      >
        x
      </span>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  filters: Array,
  activeFilter: String,
})

const emit = defineEmits(['update-filter'])

const selectFilter = (filter) => {
  emit('update-filter', filter)
}

const clearFilter = () => {
  emit('update-filter', null)
}
</script>

<style lang="scss">
.filter__item {
  border: 1px solid $lightBorder;
  box-shadow: $lightShadow;
}
</style>
