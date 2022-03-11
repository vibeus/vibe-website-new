<template>
  <main class="order-status">
    <Hero
      :hero="fm.hero"
    />
    <Resources
     :resources="fm.resources"
    />
    <BottomCta
     :bottomcta="fm.bottom_cta"
    />
  </main>
</template>

<script setup>
import Hero from './sections/Hero.vue';
import Resources from './sections/Resources.vue';
import BottomCta from './sections/BottomCta.vue';

/* Start Data */
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);

/* End Data */
</script>

<style lang="sass">
.container
  max-width: 1440px
</style>
