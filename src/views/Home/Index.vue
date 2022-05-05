<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >
    {{ device }}
    <HomeHero />
    <slot name="hero" />
    <HomeFeatures />
    <slot name="features" />
    <HomeFooter @consoleTest="consoleT" />
    <slot name="footer" />
    <button @click="cart.handleAddtoCart('31815758250035', 1)">
      Click to add 1 board 55
    </button>
    <button @click="cart.handleAddtoCart('39355861598259', 1)">
      Click to add 1 board 75
    </button>
  </main>
</template>

<script setup>
import HomeHero from './components/HomeHero.vue';
import HomeFeatures from './components/HomeFeatures.vue';
import HomeFooter from './components/HomeFooter.vue';
import { toRefs } from 'vue';
import { useAppStore, useCartStore } from '@/store';
const cartCheckout = useCartStore();

const cart = useCartStore();
const app = useAppStore();
const device = computed(() => app.device);





const testInfo = ref({user: 'abc'});
/* Start Data */
provide('testInfo', testInfo);
/* End Data */

watchEffect(() => {
  // console.log(cart.getCheckout?.lineItems);
});


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
