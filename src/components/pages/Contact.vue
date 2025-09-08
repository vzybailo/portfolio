<template>
  <div>
    <PageTitle :title="$t('page.contact')" />
    <div class="flex justify-between mb-6 max-sm:flex-col">
      <div class="w-1/2 max-sm:w-full max-sm:mb-8">
        <div class="text-base mb-4">{{ $t('contact.title') }}</div>
        <div>
          <p class="mb-4">{{ $t('contact.text') }}</p>
          <div class="flex items-center mb-4">
            <Icon class="w-[26px] h-[26px] mr-2" name="email" />
            <a href="mailto:vitalizybailo@gmail.com">vitalizybailo@gmail.com</a>
          </div>
          <p class="mb-4">{{ $t('contact.textSecond') }}</p>
        </div>
        <Socials class="justify-start" />
      </div>
      <div>
        <Form class="mt-10 max-sm:mt-4" />
      </div>
    </div>
    <div class="mb-16">
      <div class="contact__hr-title text-base mb-4">
        {{ $t('contact.hrTitleFirst') }}
        <a href="/cv.pdf" class="contact__hr-cv" download>{{ $t('contact.hrTitleSec') }}</a>
      </div>
      <FormHr />
    </div>
  </div>
</template>

<script setup>
import Form from '../layout/Form.vue'
import PageTitle from '../common/PageTitle.vue'
import Socials from '../layout/Socials.vue'
import Icon from '../common/Icon.vue'
import FormHr from '../layout/FormHr.vue'
</script>

<style lang="scss">
.contact__hr-cv {
  background-color: $limeHighlight;
  padding: 2px 4px;
}
</style>
