<template>
  <main class="onboarding">
    <Hero :hero="fm.hero" />
    <Setup :setup="fm.setup" />
    <GetStarted :get-started="fm.get_started" />
  </main>
</template>
<script setup>
import Hero from '../sections/Hero.vue';
import Setup from '../sections/Setup/Index.vue';
import GetStarted from '../sections/GetStarted.vue';
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);
</script>
