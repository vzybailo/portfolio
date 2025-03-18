<template>
  <form class="flex flex-col mb-4" v-on:submit.prevent="sendForm">
    <label for="name" class="flex flex-col">
      {{ $t('form.name') }}
      <input class="form__input bg-white mb-4" id="name" type="text" v-model="formData.name" />
    </label>
    <label for="email" class="flex flex-col">
      {{ $t('form.email') }}
      <input class="form__input bg-white mb-4" id="email" type="email" v-model="formData.email" />
    </label>
    <label for="message" class="flex flex-col">
      {{ $t('form.message') }}
      <textarea class="form__input bg-white mb-4" id="message" v-model="formData.message">
      </textarea>
    </label>
    <button
      class="bg-cyan-500 p-2 text-white transition hover:bg-sky-700 cursor-pointer uppercase"
      type="submit"
    >
      {{ $t('form.send') }}
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const sendForm = () => {
  let fromForm = {
    name: formData.value.name,
    email: formData.value.email,
    message: formData.value.message,
  }
  console.log(fromForm)
  formData.value.name = ''
  formData.value.email = ''
  formData.value.message = ''
}
</script>

<style lang="scss">
.form__input {
  outline: none;
  border: 0;
  border-radius: 3px;
  padding: 10px;
  margin-top: 5px;
}
</style>
