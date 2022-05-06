<template>
  <div class="cart-count">
    <input
      id=""
      type="number"
      name="" 
      class="input is-medium is-rounded is-black" 
      :value="cartItem.quantity" 
    />
    <span
      class="icon is-small is-left"
      @click="cart.handleAddtoCart(cartItem.product_id, -1)"
    >
      <svg-icon icon-name="cart-count-minus" />
    </span>
    <span
      class="icon is-small is-right"
      @click="cart.handleAddtoCart(cartItem.product_id, 1)"
    >
      <svg-icon icon-name="cart-count-plus" />
    </span>
  </div>
</template>


<script setup>
import { useCartStore } from '@/store/cart';
const cart = useCartStore();

const MIN_ITEM_COUNT = 1;
const MAX_ITEM_COUNT = 99;


const props = defineProps({
  cartItem: {
    type: Object,
    required: true,
  },
});

// const count = ref(props.cartCount.count);

// const adjustInput = (value) => {
//   const current = parseInt(count.value + value) || 0;
//   const newValue = Math.min(
//     Math.max(MIN_ITEM_COUNT, current + value),
//     MAX_ITEM_COUNT
//   );
//   count.value = newValue.toString();
// };
// function minus() {
//   if (count.value > 0) {
//     count.value--;
//   }
// }
// function plus() {
//   count.value++;
// }
</script>

<style lang="sass">
@import '@css/base'
.cart-count
  display: flex
  align-items: center
  position: relative
  width: 128px
  height: 37px
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
    -webkit-appearance: none
  input[type=number]
    -moz-appearance: textfield
  .input
    width: 100%
    height: 100%
    padding: 0
    text-align: center   
    border-radius: 8px
    font-size: 16px
    line-height: 134%
    &.is-gray
      border: 1px solid #E6E6E6
    &.is-black
      border: 1px solid $vibe-black
  .icon
    position: absolute
    display: flex
    width: 37px
    height: 37px
    cursor: pointer
    svg
      width: 16px
      height: 16px
    &:hover
      fill: #373794
    &.is-left
      left: 0
    &.is-right
      right: 0
</style>
