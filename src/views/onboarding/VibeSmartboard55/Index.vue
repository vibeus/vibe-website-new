<template>
  <main class="onboarding">
    <Webinar :webinar="fm.webinar_section" />
    <GetStarted :getStarted="fm.get_started" />
  </main>
</template>
<script setup>
import Webinar from '../sections/Webinar.vue';
import GetStarted from '../sections/GetStarted.vue';
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);
</script>