<template>
  <main class="onboarding">
    <Hero :hero="fm.hero" />
    <Setup :setup="fm.setup" />
    <Webinar :webinar="fm.webinar_section" />
    <GetStarted :get-started="fm.get_started" />
  </main>
</template>
<script setup>
import Hero from '../sections/Hero.vue';
import Setup from '../sections/Setup/Index.vue';
import Webinar from '../sections/Webinar.vue';
import GetStarted from '../sections/GetStarted.vue';
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);
</script>
