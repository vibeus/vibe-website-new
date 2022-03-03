<template>
  <main class="order-status">
    <Hero
      :hero="fm.hero"
    />
  </main>
</template>

<script setup>
import { useData } from 'vitepress';
import Hero from './sections/Hero.vue';

/* Start Data */
const { frontmatter: fm } = useData();

/* End Data */
</script>

<style lang="sass" scoped>

</style>
