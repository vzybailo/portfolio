<template>
  <form class="form flex flex-col mb-4" v-on:submit.prevent="sendForm">
    <div class="full__name flex justify-between">
      <label for="firstName" class="flex flex-col mb-4 form__label">
        {{ $t('form.firstName') }}
        <input
          class="form__input"
          id="firstName"
          type="text"
          v-model="formData.firstName"
          @blur="v$.firstName.$touch()"
        />
        <span class="form__error" v-if="v$.firstName.$error">{{
          getErrorMessage('firstName')
        }}</span>
      </label>
      <label for="lastName" class="flex flex-col mb-4 form__label">
        {{ $t('form.lastName') }}
        <input class="form__input" id="lastName" type="text" v-model="formData.lastName" />
      </label>
    </div>
    <label for="email" class="flex flex-col mb-4">
      {{ $t('form.email') }}
      <input
        class="form__input"
        id="email"
        type="email"
        v-model="formData.email"
        @blur="v$.email.$touch()"
      />
      <span class="form__error" v-if="v$.email.$error">{{ getErrorMessage('email') }}</span>
    </label>
    <label for="message" class="flex flex-col mb-4">
      {{ $t('form.message') }}
      <textarea
        class="form__input"
        id="message"
        v-model="formData.message"
        @blur="v$.message.$touch()"
      >
      </textarea>
      <span class="form__error" v-if="v$.message.$error">{{ getErrorMessage('message') }}</span>
    </label>
    <span v-if="isShowStatus" class="mb-2" :class="statusMessage.success ? 'text-green-500' : 'text-red-500'">{{ statusMessage.success || statusMessage.fail }}</span>
    <button class="form__btn text-white transition cursor-pointer uppercase" type="submit">
      {{ $t('form.send') }}
    </button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const formData = ref({
  firstName: '',
  email: '',
  message: '',
})

const rules = {
  firstName: { required, minLength: minLength(3) },
  email: { required, email },
  message: { required, minLength: minLength(10) },
}

const v$ = useVuelidate(rules, formData)

const getErrorMessage = (field) => {
  if (!v$.value[field].$error) return ''

  const error = v$.value[field].$errors[0]
  if (error.$validator === 'required') return t('form.validation.required')
  if (error.$validator === 'minLength')
    return t('form.validation.minLength', { min: error.$params.min })
  if (error.$validator === 'email') return t('form.validation.email')

  return ''
}

const statusMessage = ref({
  success: '',
  fail: ''
})

const sendForm = async () => {
  const isValid = await v$.value.$validate()

  if (!isValid) return

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: formData.value.firstName,
        email: formData.value.email,
        message: formData.value.message
      })
    })

    if (!response.ok) throw new Error('Failed to send email')

    statusMessage.value.success = `✅ ${t('form.status.success')}`
    formData.value = { firstName: '', email: '', message: '' }
    setTimeout(() => (statusMessage.value = ''), 5000)
    statusMessage.value.fail = "" 
  } catch (error) {
    statusMessage.value.fail = `❌ ${t('form.status.fail')} ` + error.message
    statusMessage.value.success = "" 
  }

  v$.value.$reset()
}

const isShowStatus = computed(() => statusMessage.value.success !== "" || statusMessage.value.fail !== "")
</script>

<style lang="scss">
.form__label {
  width: 100%;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
}
.form__input {
  outline: none;
  border: 0;
  padding: 5px;
  margin-top: 5px;
  border: 1px solid $lightGray;
}
.form__error {
  color: $lightRed;
  font-size: 12px;
}
.form__btn {
  color: $black;
  border: 2px solid $orange;
  width: 100px;
  margin: 0 auto;
  transition: 0.3s;
  padding: 5px 10px;

  &:hover {
    background: $orange;
    color: $white;
    transition: 0.3s;
  }
}
</style>
