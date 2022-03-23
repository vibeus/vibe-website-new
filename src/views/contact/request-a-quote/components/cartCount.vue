
<template>
  <div class="cart-count">
    <input
      id=""
      name=""
      class="input is-medium is-rounded is-black"
      :value="count"
    >
    <span class="icon is-small is-left" @click="minus">
      <svg-icon icon-name="cart-count-minus" />
    </span>
    <span class="icon is-small is-right" @click="plus">
      <svg-icon icon-name="cart-count-plus" />
    </span>
  </div>
</template>

<script setup>
const count = ref(0);
function minus(){
  if(count.value>0){
    count.value--;
  }
}
function plus(){
  count.value++;
}
</script>

<style lang="sass">
.cart-count
  position: relative
  width: 128px
  height: 37px
  .input
    width: 128px
    height: 37px
    padding: 0
    text-align: center
    border: 1px solid #E6E6E6
    border-radius: 8px
    font-size: 16px
    line-height: 134%
  .icon
    position: absolute
    top: 0
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
