<template>
    <div class="welcome">
        <div class="welcome__switchers flex justify-end">
            <LangSwitcher />
            <DarkLightBtn />
        </div>
        <div class="welcome__block">
        <div class="welcome__wrapper">
            <div class="welcome__me">
                <div class="welcome__about">
                    <img src="" alt="" class="welcome__img">
                    <div class="welcome__name">{{ $t('welcome.name') }}</div>
                    <div class="welcome__position">Frontend Developer</div>
                </div>
                <div class="welcome__socials"></div>
            </div>
            <div class="welcome__nav">
                <NavMenu/>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import NavMenu from './NavMenu.vue';
import DarkLightBtn from './DarkLightBtn.vue'
import LangSwitcher from './LangSwitcher.vue'
</script>

<style lang="scss">
.welcome {
    height: 100vh;
}
.welcome__block {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
}
.welcome__wrapper {
    padding: 20px;
    border: 1px gray solid;
}
.welcome__switchers.flex {
    padding: 20px 0;
}
</style>