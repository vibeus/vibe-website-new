<template>
  <main class="home" aria-labelledby="main-title">
    <HomeHero />
    <slot name="hero" />
    <HomeFeatures />
    <div class="home-content">
      <Content />
    </div>
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

<style scoped>
.home {
  padding-top: var(--header-height);
}

.home-content {
  max-width: 960px;
  margin: 0px auto;
  padding: 0 1.5rem;
}
</style>
