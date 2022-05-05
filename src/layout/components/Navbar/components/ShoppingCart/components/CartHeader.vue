<template>
  <div class="cart-head cart-level">
    <div class="cart-level">
      <span
        class="icon"
        @click="cart.handleOpenCartModal"
      >
        <svg-icon icon-name="global-cart-chevron-right" />
      </span>
      <p class="cart-title">
        My Cart
      </p>
    </div>
    <div class="cart-level">
      <p class="item-count">
        {{ cart.getTotalItemCount }} items
      </p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';
const cart = useCartStore();

</script>

<style lang="sass" scoped>
@import '@css/base'
.cart-head
  height: 80px
  padding: 0 30px
  margin-bottom: 0
  box-shadow: 0 -1px 10px rgb(55 55 55 / 10%)
  z-index: 10
  .icon
    height: 2rem
    width: 2rem
    margin-right: 0.75rem
    border: 1px solid $vibe-black
    border-radius: 50%
    cursor: pointer
    &:hover
      border-color: $vibe-pink
    .svg-icon
      width: 24px
      height: 24px
.cart-level
  display: flex
  align-items: center
  justify-content: space-between
</style>
