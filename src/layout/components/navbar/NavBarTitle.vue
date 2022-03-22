<template>
  <div class="navbar-brand">
      <a
      class="nav-bar-title"
      :href="localePath"
      :aria-label="`${site.title}, back to home`"
    >
      <svg-icon
        v-if="theme.logoName"
        class="logo"
        :icon-name="theme.logoName"
        alt="Logo"
      />
    </a>
   <NavBtnMobile class="navbar-brand-buttons" />
  </div>
</template>

<script setup>
import NavBtnMobile from './NavBtnMobile.vue';
const { site, theme, localePath } = useData();
</script>

<style lang="sass" scoped>
.navbar-brand-buttons
  display: flex
  @media (min-width:1080px)
    display: none
.navbar-brand
  width: 100%
  display: flex
  justify-content: space-between
  @media (min-width:1080px)
    margin-left: -0.75rem
    width: auto
    padding: .3rem 0
.nav-bar-title
  margin-right: 16px
  padding: 0.5rem 0.75rem
  display: flex
  justify-content: center
  align-items: center
  svg
    width: 131px
    height: 38px
    margin-right:0

.nav-bar-title:hover
  text-decoration: none

.logo
  margin-right: 0.75rem
  height: 1.3rem
  vertical-align: bottom
</style>
