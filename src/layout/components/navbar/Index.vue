<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <NavBarTitle />
      </div>

      <div class="nav-menu">
        <NavStart />
        <NavEnd />
      </div>
    </div>

    <slot name="search" />
  </nav>
</template>

<script setup>
import NavBarTitle from './NavBarTitle.vue';
import NavStart from './NavStart.vue';
import NavEnd from './NavEnd.vue';

defineEmits(['toggle']);
</script>

<style lang="sass" scoped>
.flex-grow
  flex-grow: 1

.nav-menu
  display: none

@media (min-width: 1080px)
  .nav-menu
    display: flex
    align-items: center
    justify-content: space-between
    flex-grow: 1

@media (min-width: 1200px)
  .nav-menu
    margin-left: 16px
</style>
