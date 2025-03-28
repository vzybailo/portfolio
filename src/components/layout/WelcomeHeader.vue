<template>
  <div class="welcome flex flex-col justify-between">
    <div class="welcome__switchers flex justify-end items-center py-5">
      <LangSwitcher />
      <DarkLightBtn />
      <Icon v-if="isHomePage" name="login" class="login__icon" />
    </div>
    <div class="welcome__block flex justify-center items-center text-center">
      <div class="welcome__wrapper">
        <div class="welcome__me">
          <div class="welcome__about flex flex-col items-center align-center">
            <img src="./../../assets/images/me.jpeg" alt="" class="welcome__img" />
            <div class="welcome__name">{{ $t('name') }}</div>
            <div class="welcome__position">Frontend Developer</div>
          </div>
          <div class="welcome__socials">
            <Socials />
          </div>
        </div>
        <div class="welcome__nav">
          <NavMenu />
        </div>
      </div>
    </div>
    <div class="welcome__copyright flex justify-center">
      <Copyright />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

import NavMenu from './NavMenu.vue'
import DarkLightBtn from './DarkLightBtn.vue'
import LangSwitcher from './LangSwitcher.vue'
import Icon from '../common/Icon.vue'
import Socials from './Socials.vue'
import Copyright from './Copyright.vue'

defineProps({
  isHomePage: Boolean,
})
</script>

<style lang="scss">
.welcome {
  height: 100vh;
}
.welcome__block {
  height: 100%;
}
.welcome__wrapper {
  border: 1px solid #d5d5d5;
  box-shadow: 4px 4px 0 2px #e9e9e9;
}
.welcome__about {
  padding: 20px;
}
.welcome__name {
  font-size: 24px;
  font-weight: 700;
}
.welcome__nav {
  border-top: 1px #d5d5d5 solid;
}
.welcome__img {
  width: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
  filter: grayscale(1);
}
.welcome__copyright {
  font-size: 14px;
  padding-bottom: 10px;
}
.welcome__nav {
  .nav__item {
    margin-right: 0;

    &:nth-child(2) {
      border-left: 1px #d5d5d5 solid;
      border-right: 1px #d5d5d5 solid;
    }
  }
}
.welcome__nav .nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.welcome__nav .nav__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.welcome__nav .nav__link {
  display: flex;
  padding: 20px;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    background-color: #00AAAA;
    color: #fff;
    transition: 0.3s;
  }
}
.login__icon {
  width: 23px;
  height: 23px;
  margin-left: 8px;
  cursor: pointer;
}
.welcome__socials {
  margin-bottom: 20px;
}
</style>
