<template>
  <main class="onboarding">
    <Webinar :webinar="fm.webinar_section" />
  </main>
</template>
<script setup>
import Webinar from '../components/Webinar.vue';
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);
</script>
