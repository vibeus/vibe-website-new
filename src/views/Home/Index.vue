<template>
  <main class="home" aria-labelledby="main-title">
    {{device}}
    <HomeHero />
    <slot name="hero" />
    <HomeFeatures />
    <slot name="features" />
    <HomeFooter @consoleTest="consoleT" />
    <slot name="footer" />
    <button @click="handleAddtoCart('31815758250035')">Click to add board 55</button>
    <button @click="handleAddtoCart('39355861598259')">Click to add board 75</button>
    <button @click="handleCheckout">GO checkout</button>
  </main>
</template>

<script setup>
import HomeHero from './components/HomeHero.vue';
import HomeFeatures from './components/HomeFeatures.vue';
import HomeFooter from './components/HomeFooter.vue';
import { useAppStore } from '@/store/app';
import { useCartEffect } from '@/store/cart';
import { toRaw } from 'vue';
const cartCheckout = useCartEffect();
const checkout = computed(() => cartCheckout.checkout);
const { handleAddtoCart } = useCartEffect();
const app = useAppStore();
const device = computed(() => app.device);

const testInfo = ref({user: 'abc'});
/* Start Data */
provide('testInfo', testInfo);
/* End Data */

const handleCheckout = () => {
  if(checkout) {
    const checkoutList = toRaw(checkout.value);
    window.location = checkoutList.webUrl;
  }
};

const consoleT = () => {
  console.log(123);
};
</script>

<style lang="sass" scoped>
@import '@css/base'
.home
  padding-top: var(--header-height)

.home-content
  max-width: 960px
  margin: 0px auto
  padding: 0 1.5rem

img
  +mobile
    width: 200px
</style>
