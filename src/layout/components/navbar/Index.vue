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
  position: sticky
  top: 0
  right: 0
  left: 0
  z-index: var(--z-index-navbar)
  display: flex
  justify-content: space-between
  align-items: center
  border-bottom: 1px solid var(--c-divider)
  padding: 0 2rem
  background-color: var(--c-bg)

.flex-grow
  flex-grow: 1

.nav
  display: none

@media (min-width: 720px)
  .nav
    display: flex
    align-items: center
    justify-content: space-between
    flex-grow: 1
  
</style>
