

<template>
  <main class="warranty">
    <DocHero :docHero="fm.hero" />
  </main>
</template>

<script setup>
import DocHero from '/@/views/documents/components/docHero.vue';

/* Start Data */
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);
/* End Data */
</script>

<style lang="sass">
</style>
