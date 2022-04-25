<template>
  <div class="dialog-content">
    <CartHeader/>
    <CartBody/>
    <CartBottom/>
  </div>
</template>

<script setup>
import CartHeader from './CartHeader.vue';
import CartBody from './CartBody.vue';
import CartBottom from './CartBottom.vue';
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
