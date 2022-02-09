<script setup>
import { withBase, useData } from 'vitepress';
const { site, theme, localePath } = useData();
</script>

<template>
  <a
    class="nav-bar-title"
    :href="localePath"
    :aria-label="`${site.title}, back to home`"
  >
    <svg-icon
      v-if="theme.logoName"
      class="logo"
      :name="theme.logoName"
      alt="Logo"
    />
  </a>
</template>

<style lang="sass" scoped>
.nav-bar-title
  width: 100px
  font-size: 1.3rem
  font-weight: 600
  color: var(--c-text)
  display: flex
  justify-content: center
  align-items: center

.nav-bar-title:hover
  text-decoration: none

.logo
  margin-right: 0.75rem
  height: 1.3rem
  vertical-align: bottom
</style>
