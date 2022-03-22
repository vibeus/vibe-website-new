<template>
  <nav class="navbar">
    <NavBarTitle />

   <!--<div class="flex-grow" />-->

    <div class="nav">
      <NavLinks />
      <NavBtn />
    </div>

    <slot name="search" />
  </nav>
</template>

<script setup>
import NavBarTitle from './NavBarTitle.vue';
import NavLinks from './NavLinks.vue';
import NavBtn from './NavBtn.vue';

defineEmits(['toggle']);
</script>

<style lang="sass" scoped>
.navbar
  display: flex
  align-items: center
  border-bottom: 1px solid var(--c-divider)
  min-height: 66px
  @media (min-width:1080px) 
    position: sticky
    top: 0
    right: 0
    left: 0
    z-index: var(--z-index-navbar)
    justify-content: space-between
    align-items: center
    border-bottom: 1px solid var(--c-divider)
    background-color: var(--c-bg)

@media (min-width: 1080px)
  .navbar
    padding: 0px 40px

.flex-grow
  flex-grow: 1

.nav
  display: none

@media (min-width: 1080px)
  .nav
    display: flex
    align-items: center
    justify-content: space-between
    flex-grow: 1

@media (min-width: 1200px)
  .nav
    margin-left: 16px
</style>
