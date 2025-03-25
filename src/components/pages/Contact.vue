<template>
  <div class="contact">
    <PageTitle :title="$t('page.contact')" />
    <div class="contact__block flex justify-between">
      <div class="contact__descr">
        <Socials />
      </div>
      <div class="contact__form">
        <div class="contact__form-title">
          Drop me a line through the form below and I'll get back to you
        </div>
        <Form />
      </div>
    </div>
  </div>
</template>

<script setup>
import Form from '../layout/Form.vue'
import PageTitle from '../layout/PageTitle.vue'
import Socials from '../layout/Socials.vue'
</script>

<style>
.contact__form-title {
  margin-bottom: 30px;
}
</style>
