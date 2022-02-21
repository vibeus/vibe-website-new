<template>
  <main class="home" aria-labelledby="main-title">
    <lazy-img src="./logo.svg" alt="test image" />
    <HomeHero />
    <slot name="hero" />
    <HomeFeatures />
    <slot name="features" />
    <HomeFooter />
    <slot name="footer" />
  </main>
</template>

<script setup>
import HomeHero from '/@vcomp/HomeHero.vue';
import HomeFeatures from '/@vcomp/HomeFeatures.vue';
import HomeFooter from '/@vcomp/HomeFooter.vue';
</script>

<style lang="sass" scoped>
.home
  padding-top: var(--header-height)

.home-content
  max-width: 960px
  margin: 0px auto
  padding: 0 1.5rem
</style>
