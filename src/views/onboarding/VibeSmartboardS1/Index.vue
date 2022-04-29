<template>
  <main class="onboarding">
    <Hero :hero="fm.hero" />
    <Setup />
    <GetStarted :getStarted="fm.get_started" />
  </main>
</template>
<script setup>
import Hero from '../sections/Hero.vue';
import Setup from '../sections/Setup.vue';
import GetStarted from '../sections/GetStarted.vue';
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);
</script>
