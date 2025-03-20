<template>
  <form class="flex flex-col mb-4" v-on:submit.prevent="sendForm">
    <label for="name" class="flex flex-col  mb-4">
      {{ $t('form.name') }}
      <input class="form__input bg-white" id="name" type="text" v-model="formData.name" @blur="v$.name.$touch()"/>
      <span  class="form__error" v-if="v$.name.$error">{{ getErrorMessage('name') }}</span>
    </label>
    <label for="email" class="flex flex-col  mb-4">
      {{ $t('form.email') }}
      <input class="form__input bg-white" id="email" type="email" v-model="formData.email" @blur="v$.email.$touch()"/>
      <span  class="form__error" v-if="v$.email.$error">{{ getErrorMessage('email') }}</span>
    </label>
    <label for="message" class="flex flex-col  mb-4">
      {{ $t('form.message') }}
      <textarea class="form__input bg-white" id="message" v-model="formData.message" @blur="v$.message.$touch()">
      </textarea>
      <span  class="form__error" v-if="v$.message.$error">{{ getErrorMessage('message') }}</span>
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
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const rules = {
  name: { required, minLength: minLength(3) },
  email: { required, email },
  message: { required, minLength: minLength(10) }
}
const v$ = useVuelidate(rules, formData)
const getErrorMessage = (field) => {
  if (!v$.value[field].$error) return ''

  const error = v$.value[field].$errors[0]
  if (error.$validator === 'required') return t('form.validation.required')
  if (error.$validator === 'minLength') return t('form.validation.minLength', { min: error.$params.min })
  if (error.$validator === 'email') return t('form.validation.email')

  return ''
}

const sendForm = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) {
    console.log('Validation failed')
    return
  }

  // Если всё ок — отправляем данные
  console.log('Form Data:', formData.value)
  alert('Form submitted successfully!')
  formData.value = { name: '', email: '', message: '' }
  v$.value.$reset() // Сбрасываем ошибки
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
.form__error {
  color: #d42f2f;
  font-size: 14px;
}
</style>
