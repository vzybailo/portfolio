<template>
  <ul class="filter__list flex mb-4">
    <li
      v-for="(filter, index) in filters"
      :key="index"
      :class="{ active: activeFilter.includes(filter.title) }"
      class="filter__item cursor-pointer mr-2 px-2"
    >
      <span @click="selectFilter(filter.title)">{{ filter.title }}</span>
      <span
        v-if="activeFilter.includes(filter.title)"
        @click.stop.prevent="clearFilter(filter.title)"
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

const emit = defineEmits(['update-filters'])

const selectFilter = (filter) => {
  if (props.activeFilter.includes(filter)) {
    emit(
      'update-filters',
      props.activeFilter.filter((f) => f !== filter),
    )
  } else {
    emit('update-filters', [...props.activeFilter, filter])
  }
}

const clearFilter = (filter) => {
  emit(
    'update-filters',
    props.activeFilter.filter((f) => f !== filter),
  )
}
</script>

<style lang="scss">
.filter__item {
  border: 1px solid $lightBorder;
  box-shadow: $lightShadow;
}
</style>
