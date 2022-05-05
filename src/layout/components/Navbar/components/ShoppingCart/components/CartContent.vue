<template>
  <div class="dialog-content">
    <CartHeader />
    <template v-if="cart.getTotalItemCount > 0">
      <CartBody />
      <CartBottom />
    </template>
    <template v-else>
      <EmptyCart />
    </template>
  </div>
</template>

<script setup>
import CartHeader from './CartHeader.vue';
import CartBody from './CartBody.vue';
import CartBottom from './CartBottom.vue';
import EmptyCart from './EmptyCart.vue';
import { useCartStore } from '@/store/cart';
const cart = useCartStore();
</script>

<style lang="sass" scoped>
.dialog-content
  position: relative
  z-index: 1200
  background-color: #fff
  margin: 0 0 0 auto
  max-height: initial
  height: 100vh
  display: flex
  flex-direction: column
  max-width: 560px
  z-index: 2000


</style>
