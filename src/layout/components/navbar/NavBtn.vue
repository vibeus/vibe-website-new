<template>
   <div class="buttons">
      <a class="button is-primary is-rounded is-in-brand" href="/demo/">
         See a Demo
      </a>
      <div class="nav-divider is-hidden-mobile"></div>
      <a href="" class="nav-cart-icon">
         <svg-icon class="nav-icon" icon-name="global-cart-cart" alt="cart icon" />
      </a>
      <a href="">
         <svg-icon class="nav-icon" icon-name="global-cart-user" alt="user icon" />
      </a>
   </div>

</template>

<script setup>
const { frontmatter: fm } = useData();
console.log('fm: ', fm);
</script>

<style lang="sass" scoped>
a
   text-decoration: none
.buttons
   display: flex
   align-items: center
   padding: 8px 0
   .button.is-primary
      background-color: #f66
      border-color: transparent
      color: #fff
      font-weight: 500
   .nav-cart-icon
      margin-right: .5rem
   .nav-icon
      width: 45px
      height: 45px
      color: #f66
   .nav-divider
      width: 0
      height: 26px
      margin: 0 1.75rem 0 2.5rem
      border: 1px solid #e0e0e0
</style>
