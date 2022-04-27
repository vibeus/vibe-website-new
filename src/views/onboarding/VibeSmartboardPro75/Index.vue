<template>
  <main class="onboarding">
    <Hero :hero="fm.hero" />
    <Webinar :webinar="fm.webinar_section" />
    <GetStarted :getStarted="fm.get_started" />
  </main>
</template>
<script setup>
import Hero from '../sections/Hero.vue';
import Webinar from '../sections/Webinar.vue';
import GetStarted from '../sections/GetStarted.vue';
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);
</script>
