<template>
  <div class="contact">
    <PageTitle :title="$t('page.contact')" />
    <div class="contact__block flex justify-between mb-6">
      <div class="contact__descr">
        <div class="contact__descr-title text-base mb-4">{{ $t('contact.title') }}</div>
        <div class="contact__descr-text">
          <p class="mb-4">{{ $t('contact.text') }}</p>
          <div class="contact__email flex items-center">
            <Icon class="contact__email-icon" name="email" />
            <a href="mailto:vitalizybailo@gmail.com">vitalizybailo@gmail.com</a>
          </div>
          <p class="mb-4">{{ $t('contact.textSecond') }}</p>
        </div>
        <Socials />
      </div>
      <div class="contact__form">
        <Form />
      </div>
    </div>
    <div class="contact__hr">
      <div class="contact__hr-title text-base mb-4">{{ $t('contact.hrTitle') }}</div>
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
.contact__descr {
  width: 50%;
  margin-right: 30px;
}
.contact__form-title {
  margin-bottom: 30px;
}
.contact {
  .socials__list {
    justify-content: flex-start;
  }
}
.contact__email-icon {
  width: 26px;
  height: 26px;
  margin-right: 10px;
}
.contact__email {
  margin-bottom: 10px;
}
</style>
