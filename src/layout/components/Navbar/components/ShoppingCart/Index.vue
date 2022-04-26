<template>
  <div class="is-cart-dialog" v-show="isCartModalOpen">
    <div class="dialog-background" @click="handleOpenCartModal"></div>
    <CartContent/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CartContent from './components/CartContent.vue';
import { useCartEffect } from '@/store/cart';
const { handleOpenCartModal } = useCartEffect();

// Data start
const cartData = useCartEffect();
const isCartModalOpen = computed(() => { return cartData.isCartModalOpen });
const checkout = computed(() => { return cartData.checkout });
// Get Data end 

watchEffect(() => {
  // Wait until checkout returned from Shopify
  if(!checkout.value) return; 
  if (isCartModalOpen.value) {
    document.documentElement.classList.add('is-clipped');
  } else {
    document.documentElement.classList.remove('is-clipped');
  }
});

</script>

<style lang="sass" scoped>
.is-cart-dialog
  position: fixed
  bottom: 0
  left: 0
  right: 0
  top: 0
  z-index: 1000
  .dialog-background
    position: absolute
    bottom: 0
    left: 0
    right: 0
    top: 0
    background: rgba(136,136,136,.69)
    backdrop-filter: blur(10px)
</style>
