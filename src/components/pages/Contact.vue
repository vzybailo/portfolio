<template>
  <div class="contact">
    <PageTitle :title="$t('page.contact')" />
    <div class="contact__block flex justify-between">
      <div class="contact__descr">
        <div class="contact__descr-title">{{ $t('contact.title') }}</div>
        <div class="contact__descr-text">
          <p>{{ $t('contact.text') }}</p>
          <div class="contact__email flex items-center">
            <Icon class="contact__email-icon" name="email" />
            <a href="mailto:vitalizybailo@gmail.com">vitalizybailo@gmail.com</a>
          </div>
          <p>{{ $t('contact.textSecond') }}</p>
        </div>
        <Socials />
      </div>
      <div class="contact__form">
        <Form />
      </div>
    </div>
  </div>
</template>

<script setup>
import Form from '../layout/Form.vue'
import PageTitle from '../layout/PageTitle.vue'
import Socials from '../layout/Socials.vue'
import Icon from '../common/Icon.vue'
</script>

<style lang="scss">
.contact__descr {
  width: 50%;
  margin-right: 30px;
}
.contact__form-title {
  margin-bottom: 30px;
}
.contact__descr-title {
  font-size: 18px;
  margin-bottom: 20px;
}
.contact__descr-text {
  p {
    margin-bottom: 10px;
  }
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
