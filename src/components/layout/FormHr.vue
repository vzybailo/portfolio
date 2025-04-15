<template>
  <form action="" class="form-hr">
    <div class="quotes text-xl">"</div>
    <div class="form-hr__hello mb-4">Hello, {{ $t('firstName') }}</div>
    <div class="form-hr__text mb-4">
      My name is
      <input v-model="inputText" class="form-hr__input" type="text" placeholder="[HR Name]" />, and
      I represent <input class="form-hr__input" type="text" placeholder="[Company]" />. We are
      looking for a [Position] with experience in [Technologies/tools], and your background caught
      our attention.
    </div>
    <div class="form-hr__text mb-4">
      I’d be happy to discuss the opportunities and learn more about your goals. If you’re
      interested, let’s schedule an interview.
    </div>
    <div class="form-hr__text">Best regards,</div>
    <div class="form-hr__text">
      <input v-model="inputText" class="form-hr__input" type="text" placeholder="[HR Name]" />
    </div>
    <div class="form-hr__text">
      Company <input class="form-hr__input" type="text" placeholder="[Company]" />
    </div>
    <div class="form-hr__text">
      Contact: <input class="form-hr__input" type="text" placeholder="[Email/phone]" />
    </div>
    <div class="quotes text-xl text-right">"</div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const inputText = ref('')
</script>

<style lang="scss">
.form-hr {
  color: $cianSubTitle;
}
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
