<template>
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
</template>

<script setup>
const { site, theme, localePath } = useData();
</script>

<style lang="sass" scoped>
.nav-bar-title
  padding: 8px 12px
  font-size: 1.3rem
  font-weight: 600
  color: var(--c-text)
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
