<template>
  <div class="cart-bottom">
    <div class="cart-level cart-bottom-item">
      <div class="cart-level">
        <p class="title">
          Subtotal
        </p>
      </div>
      <div class="cart-level">
        <p class="is-subtotal-amount">
          {{ cart.getTotalPrice || 0 }}
        </p>
      </div>
    </div>
    <div class="cart-level cart-bottom-item">
      <div class="cart-level">
        <p class="title">
          Shipping
        </p>
        <CartItemTip :tip="'We provide free shipping in the continental U.S.'" />
      </div>
      <div class="cart-level">
        <p class="is-subtotal-amount">
          -
        </p>
      </div>
    </div>
    <div class="cart-level cart-bottom-item">
      <div class="cart-level">
        <p class="title">
          Tax
        </p>
        <CartItemTip :tip="'Tax is calculated based on the shipping address not the billing address and is calculated as a percentage of the order total, including extra warranty costs'" />
      </div>
      <div class="cart-level">
        <p class="is-calculated">
          Calculated at checkout
        </p>
      </div>
    </div>
    <hr />
    <div class="cart-level cart-bottom-item">
      <div class="cart-level">
        <p class="title">
          Total
        </p>
      </div>
      <div class="cart-level">
        <p class="title is-amount">
          {{ cart.getTotalPrice || 0 }}
        </p>
      </div>
    </div>

    <a class="button is-primary is-rounded"> Checkout </a>
  </div>
</template>

<script setup>
import CartItemTip from './CartItemTip.vue';
import { useCartStore } from '@/store/cart';
const cart = useCartStore();

</script>

<style lang="sass" scoped>
@import '@css/base'
.cart-bottom
  box-shadow: 0 1px 10px rgb(55 55 55 / 10%)
  padding: 31px 32px 24px
  .cart-level
    display: flex
    align-items: center
    justify-content: space-between
  .cart-bottom-item
    margin-bottom: 11px
    .title
      font-size: 18px
      +mobile
        font-size: 14px
    .is-subtotal-amount
      font-size: 18px
      +mobile
        font-size: 14px
    .is-calculated
      font-family: $vibe-family-body
  hr
    background-color: #f5f5f5
  .button
    margin-top: 22px
    display: block
</style>
