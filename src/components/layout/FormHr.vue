<template>
  <form action="">
    <div class="quotes text-xl">"</div>
    <div class="mb-4">{{ $t('contact.formHr.greeting') }}, {{ $t('firstName') }}</div>
    <div class="mb-4">
      <p>
        {{ $t('contact.formHr.myName') }}
        <input v-model="inputHrName" class="form-hr__input" type="text" :placeholder="$t('contact.formHr.hrName')" />
      </p>
      <p>
        {{ $t('contact.formHr.represent') }}
        <input v-model="inputCompany" class="form-hr__input" type="text" :placeholder="$t('contact.formHr.company')"  />
      </p>
      {{ $t('contact.formHr.look') }}
      <select v-model="role" class="form-hr__input">
        <option v-for="item in techMap" :key="item.position" :value="item.position">
          {{ item.position }}
        </option>
      </select>
      {{ $t('contact.formHr.experience') }} <span class="form-hr__input">{{ currentStack }}</span>
      {{ $t('contact.formHr.bg') }}.
    </div>
    <div class="mb-4">
      {{ $t('contact.formHr.happy') }}
    </div>
    <div>{{ $t('contact.formHr.regards') }}</div>
    <div>
      <input v-model="inputHrName" class="form-hr__input" type="text" :placeholder="$t('contact.formHr.hrName')"  />
    </div>
    <div>
      <input v-model="inputCompany" class="form-hr__input" type="text" :placeholder="$t('contact.formHr.company')"  />
    </div>
    <div>
      <input class="form-hr__input" type="text" :placeholder="$t('contact.formHr.contact')" />
    </div>
    <div class="quotes text-xl text-right">"</div>
    <button class="form__btn text-white transition cursor-pointer uppercase" type="submit">
      {{ $t('form.send') }}
    </button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'

const inputHrName = ref('')
const inputCompany = ref('')
const role = ref('Frontend Developer')

const currentStack = computed(() => {
  const item = techMap.find((i) => i.position === role.value)
  return item ? item.stack : ''
})

const techMap = [
  {
    position: 'Frontend Developer',
    stack: 'JS, TS, HTML, CSS, React, Vue, Next.js, Tailwind, SCSS, Redux, GraphQL, REST, Jest',
  },
  {
    position: 'FullStack Developer',
    stack:
      'React, Next.js, TS, Node.js, Express, NestJS, SQL, MongoDB, REST, GraphQL, Docker, AWS, CI/CD',
  },
  {
    position: 'WordPress Developer',
    stack: 'WordPress, PHP, MySQL, Custom Themes, Plugins, WooCommerce, JS, Tailwind, REST, WP-CLI',
  },
]
</script>

<style lang="scss">
.form-hr__input {
  color: $limeHighlight;
  outline: none;

  &::placeholder {
    color: $limeHighlight;
  }
}
.quotes {
  font-family: 'PresStart';
  color: $pinkTitle;
}
</style>
