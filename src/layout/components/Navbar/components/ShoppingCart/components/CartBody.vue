<template>
  <div class="cart-items">
    <template
      v-for="(cartItem) in cartList"
      :key="cartItem.product_id"
    >
      <CartItem :item="cartItem" />
    </template>
  </div>
</template>

<script setup>
import CartItem from './CartItem.vue';
import { useCartStore } from '@/store/cart';
const cartData = useCartStore();
const cartList = computed(() => cartData.cartList);


</script>

<style lang="sass" scoped>
@import '@css/base'
.cart-items
  background-color: $vibe-white
  flex: 1
  overflow: auto
</style>
