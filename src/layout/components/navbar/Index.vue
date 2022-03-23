<template>
  <nav class="navbar">
    <div class="container">
      <NavBarLogo />
      <NavShrink />

      <div class="nav-menu">
        <NavDropdwn />
        <NavEndBtn />
      </div>
    </div>

    <slot name="search" />
  </nav>
</template>

<script setup>
import NavBarLogo from './NavBarLogo.vue';
import NavDropdwn from './NavDropdwn.vue';
import NavEndBtn from './NavEndBtn.vue';
import NavShrink from './NavShrink.vue';

defineEmits(['toggle']);
</script>

<style lang="sass" scoped>
@import '/@css/base'
.navbar
  position: relative
  font-family: $family-head
  font-size: 16px
  box-shadow: 0px -1px 10px rgba(55, 55, 55, 0.1)
  // transition: top .8s cubic-bezier(.215,.61,.355,1)
  // -moz-transition: top .8s cubic-bezier(.215,.61,.355,1)
  // -webkit-transition: top .8s cubic-bezier(.215,.61,.355,1)
  // -o-transition: top .8s cubic-bezier(.215,.61,.355,1)
  .container
    display: flex
    justify-content: space-between
    align-items: center
    height: $navbar-height
    width: 100%
    padding: 0 40px
    +until($navbar-breakpoint)
      padding: 0

.nav-menu
  display: flex
  align-items: center
  justify-content: space-between
  flex-grow: 1
</style>
