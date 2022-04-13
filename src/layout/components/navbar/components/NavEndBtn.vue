<template>
  <div class="nav-end-btn">
    <a class="button is-primary is-rounded is-in-brand" href="/demo/">
      <span>See a Demo</span>
    </a>
    <div class="nav-divider"></div>
    <button class="mgr-8" @click="isCartDialog = true">
      <svg-icon class="nav-icon" icon-name="global-cart-cart" alt="cart icon" />
    </button>
    <button>
      <svg-icon class="nav-icon" icon-name="global-cart-user" alt="user icon" />
    </button>
  </div>
</template>

<script setup>
const { frontmatter: fm } = useData();
const isCartDialog = inject('isCartDialog');
</script>

<style lang="sass" scoped>
@import '/@css/base'
.nav-end-btn
   display: flex
   align-items: center
   padding: 8px 0
   +until(1080px)
      display: none
   .button.is-primary
      background-color: #f66
      border-color: transparent
      color: #fff
      font-weight: 500
   button
      display: block
      position: relative
      padding: 0
      border: none
      background: 0 0
      cursor: pointer
   .nav-icon
      width: 45px
      height: 45px
      color: #f66
   +touch
      .button
         display: none
</style>
