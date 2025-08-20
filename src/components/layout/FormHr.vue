<template>
  <form @submit.prevent="onSubmit">
    <div class="quotes text-xl">"</div>
    <div class="mb-4">{{ $t('contact.formHr.greeting') }}, {{ $t('firstName') }}</div>
    <div class="mb-4">
      <p>
        {{ $t('contact.formHr.myName') }}
        <input v-model="inputHrName" @blur="v$.inputHrName.$touch()" class="form-hr__input" type="text" :placeholder="$t('contact.formHr.hrName')" />
        <span class="form__error" v-if="v$.inputHrName.$error">{{ getErrorMessage('inputHrName')}}</span>
      </p>
      <p>
        {{ $t('contact.formHr.represent') }}
        <input v-model="inputCompany" @blur="v$.inputCompany.$touch()" class="form-hr__input" type="text" :placeholder="$t('contact.formHr.company')"  />
        <span class="form__error" v-if="v$.inputCompany.$error">{{ getErrorMessage('inputCompany')}}</span>
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
      <input v-model="inputHrName" @blur="v$.inputHrName.$touch()" class="form-hr__input" type="text" :placeholder="$t('contact.formHr.hrName')"  />
      <span class="form__error" v-if="v$.inputHrName.$error">{{ getErrorMessage('inputHrName')}}</span>
    </div>
    <div>
      <input v-model="inputCompany" @blur="v$.inputCompany.$touch()" class="form-hr__input" type="text" :placeholder="$t('contact.formHr.company')"  />
      <span class="form__error" v-if="v$.inputCompany.$error">{{ getErrorMessage('inputCompany')}}</span>
    </div>
    <div>
      <input v-model="inputEmail" @blur="v$.inputEmail.$touch()" class="form-hr__input" type="text" :placeholder="$t('contact.formHr.contact')" />
      <span class="form__error" v-if="v$.inputEmail.$error">{{ getErrorMessage('inputEmail')}}</span>
    </div>
    <div class="quotes text-xl text-right">"</div>
    <div>
      <div
        v-if="isShowStatus"
        class="mb-2"
        :class="statusMessage.success ? 'text-green-500' : 'text-red-500'"
        >{{ statusMessage.success || statusMessage.fail }}</div
      >
      <button class="form__btn text-white transition cursor-pointer uppercase" type="submit">
        {{ $t('form.send') }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'

const { t } = useI18n()

const inputHrName = ref('')
const inputCompany = ref('')
const inputEmail = ref('')  
const role = ref('Frontend Developer')
const statusMessage = ref({ success: '', fail: '' })
const loading = ref(false)

const rules = {
  inputHrName: { required, minLength: minLength(3) },
  inputCompany: { required, minLength: minLength(3) },
  inputEmail: { required, email },
}

const v$ = useVuelidate(rules, {inputHrName, inputCompany, inputEmail})

const getErrorMessage = (field) => {
  if (!v$.value[field].$error) return ''

  const error = v$.value[field].$errors[0]
  if (error.$validator === 'required') return t('form.validation.required')
  if (error.$validator === 'minLength')
    return t('form.validation.minLength', { min: error.$params.min })
  if (error.$validator === 'email') return t('form.validation.email')

  return ''
}

const currentStack = computed(() => {
  const item = techMap.find((i) => i.position === role.value)
  return item ? item.stack : ''
})

const clearStatus = () => { statusMessage.value = { success: '', fail: '' } }

const techMap = [
  { position: 'Frontend Developer', stack: 'JS, TS, HTML, CSS, React, Vue, Next.js, Tailwind, SCSS, Redux, GraphQL, REST, Jest' },
  { position: 'FullStack Developer', stack: 'React, Next.js, TS, Node.js, Express, NestJS, SQL, MongoDB, REST, GraphQL, Docker, AWS, CI/CD' },
  { position: 'WordPress Developer', stack: 'WordPress, PHP, MySQL, Custom Themes, Plugins, WooCommerce, JS, Tailwind, REST, WP-CLI' },
]

const letterText = computed(() => {
  const lines = [
    '“',
    `${t('contact.formHr.greeting')}, ${t('firstName')}`,
    `${t('contact.formHr.myName')} ${inputHrName.value}`,
    `${t('contact.formHr.represent')} ${inputCompany.value}`,
    `${t('contact.formHr.look')} ${role.value}`,
    `${t('contact.formHr.experience')} ${currentStack.value} ${t('contact.formHr.bg')}.`,
    t('contact.formHr.happy'),
    t('contact.formHr.regards'),
    inputHrName.value,
    inputCompany.value,
    inputEmail.value ? `${t('contact.formHr.contact')}: ${inputEmail.value}` : '',
    '”',
  ]
  return lines.filter(Boolean).join('\n')
})

const onSubmit = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) return

  loading.value = true
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: inputHrName.value || 'Candidate',
        email: inputEmail.value,
        subject: `[Portfolio] ${role.value} — ${inputCompany.value || 'Company'}`,
        message: letterText.value,
        honeypot: ''
      }),
    })

    const data = await res.json().catch(() => ({}))
    if (!res.ok || !data?.ok) throw new Error(data?.message || 'Failed to send')

    inputHrName.value = ''
    inputCompany.value = ''
    inputEmail.value = ''
    statusMessage.value.success = `✅ ${t('form.status.success')}`
    statusMessage.value.fail = ''
    v$.value.$reset()
    setTimeout(clearStatus, 5000)
  } catch (error) {
    statusMessage.value.fail = `❌ ${t('form.status.fail')} ` + (error?.message || '')
    statusMessage.value.success = ''
    setTimeout(clearStatus, 5000)
  } finally {
    loading.value = false
  }
}

const isShowStatus = computed(
  () => statusMessage.value.success !== '' || statusMessage.value.fail !== '',
)
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
