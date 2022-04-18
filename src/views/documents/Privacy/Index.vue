
<template>
  <main class="privacy">
    <DocHero :docHero="fm.hero" />
    <Documents :content="fm.content" />
  </main>
</template>

<script setup>
import DocHero from '/@/views/documents/components/DocHero.vue';
import Documents from '/@/views/documents/components/Documents.vue';
/* Start Data */
const { frontmatter: fm } = useData();
/* End Data */
</script>

<style lang="sass">
</style>
