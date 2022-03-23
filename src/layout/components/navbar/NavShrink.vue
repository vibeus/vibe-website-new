<template>
  <div class="nav-shrink buttons">
    <a class="button is-primary is-rounded" href="/demo/">
      <span>See a Demo</span>
    </a>
    <div class="nav-divider is-hidden-mobile" data-v-00cdf7b5=""></div>
    <button class="nav-cart-icon mgl-8">
      <svg-icon class="nav-icon" icon-name="global-cart-cart" alt="cart icon" />
    </button>
    <button class="nav-user-icon is-hidden-mobile">
      <svg-icon class="nav-icon" icon-name="global-cart-user" alt="user icon" />
    </button>
    <a href="" class="navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
</template>
<script setup>
const { frontmatter: fm } = useData();

</script>
<style lang="sass" scoped>
@import '/@css/base'
.nav-shrink.buttons
  display: none
  +until(1080px)
    display: flex
    align-items: center
  button
    display: block
    position: relative
    padding: 0
    border: none
    background: 0 0
  .button.is-primary
    background-color: #f66
    border-color: transparent
    color: #fff
    font-weight: 500
  .nav-icon
    width: 45px
    height: 45px
    color: #f66
.navbar-burger
  display: block
  position: relative
  width: 48px
  height: 48px
  padding: 0.5rem 0.75rem
  color: #111
  cursor: pointer
  span
    background-color: #111
    display: block
    height: 2px
    left: calc(50% - 8px)
    position: absolute
    transform-origin: center
    transition-duration: 86ms
    transition-property: background-color,opacity,transform
    transition-timing-function: ease-out
    width: 16px
  span:nth-child(1) 
    top: calc(50% - 6px)
  span:nth-child(2)
    top: calc(50% - 1px)
  span:nth-child(3)
    top: calc(50% + 4px)
</style>
