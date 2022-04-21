<template>
  <div class="cart-count">
    <input id="" name="" :class="`input ${cartCount.class}`" :value="count" />
    <span class="icon is-small is-left" @click="minus">
      <svg-icon icon-name="cart-count-minus" />
    </span>
    <span class="icon is-small is-right" @click="plus">
      <svg-icon icon-name="cart-count-plus" />
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  cartCount: {
    type: Object,
    required: true,
  },
});
const count = ref(props.cartCount.count);
function minus() {
  if (count.value > 0) {
    count.value--;
  }
}
function plus() {
  count.value++;
}
</script>

<style lang="sass">
@import '@css/base'
.cart-count
  display: flex
  align-items: center
  position: relative
  width: 128px
  height: 37px
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
