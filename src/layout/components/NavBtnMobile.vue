<template>
  <div class="buttons">
    <a class="button is-primary is-rounded is-in-brand" href="/demo/">
      See a Demo
    </a>
    <button class="nav-cart-icon">
      <svg-icon class="nav-icon" icon-name="global-cart-cart" alt="cart icon" />
    </button>
    <button class="nav-user-icon">
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
console.log('fm: ', fm);

</script>
<style lang="sass" scoped>
.buttons
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
    @media (max-width: 699px)
      display: none
  .nav-user-icon
    @media (max-width: 699px)
      display: none
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
