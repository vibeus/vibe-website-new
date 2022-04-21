<template>
  <main class="order-status">
    <Hero :hero="fm.hero" />
    <Resources :resources="fm.resources" />
    <BottomCta :bottomCta="fm.bottom_cta" />
  </main>
</template>

<script setup>
import Hero from './sections/Hero.vue';
import Resources from './sections/Resources.vue';
import BottomCta from '@vcomp/BottomCta.vue';

/* Start Data */
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);

/* End Data */
</script>

<style lang="sass">
main section
  overflow: hidden

.container
  flex-grow: 1
  margin: 0 auto
  position: relative
  width: auto

@media screen and (min-width: 1024px)
.container
    max-width: 960px
@media screen and (min-width: 1216px)
.container
    max-width: 1152px


@media screen and (min-width: 1408px)
.container
    max-width: 1344px
</style>
