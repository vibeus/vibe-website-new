<template>
  <main class="warranty">
    <DocHero :docHero="fm.hero" />
    <Register :register="fm.register" />
    <Documents :content="fm.content" />
  </main>
</template>

<script setup>
import DocHero from '/@/views/documents/components/DocHero.vue';
import Register from './sections/Register.vue';
import Documents from '/@/views/documents/components/Documents.vue';
/* Start Data */
const { frontmatter: fm } = useData();
/* End Data */
</script>

<style lang="sass"></style>
