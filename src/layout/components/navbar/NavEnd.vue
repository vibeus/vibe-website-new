<template>
  <div class="navbar-end">
    <a class="button is-primary is-rounded is-in-brand" href="/demo/">
      See a Demo
    </a>
    <div class="nav-divider"></div>
    <button class="nav-cart-icon">
      <svg-icon class="nav-icon" icon-name="global-cart-cart" alt="cart icon" />
    </button>
    <button>
      <svg-icon class="nav-icon" icon-name="global-cart-user" alt="user icon" />
    </button>
  </div>
</template>

<script setup>
const { frontmatter: fm } = useData();
console.log('fm: ', fm);
</script>

<style lang="sass" scoped>
a
   text-decoration: none
.navbar-end
   display: flex
   align-items: center
   padding: 8px 0
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
   .nav-icon
      width: 45px
      height: 45px
      color: #f66
   .nav-cart-icon
      margin-right: .5rem
   .nav-divider
      width: 0
      height: 26px
      margin: 0 1.75rem 0 3rem
      border: 1px solid #e0e0e0
   @media (max-width: 1079px)
      .nav-cart-icon
         display: none
      .button
         display: none


</style>
