<template>
  <main class="onboarding">
    <Hero :hero="fm.hero" />
    <Setup :setup="fm.setup" />
    <Webinar :webinar="fm.webinar_section" />
    <GetStarted :get-started="fm.get_started" />
    <Help :help="fm.help" />
    <FAQ :faq="fm.faq" />
  </main>
</template>
<script setup>

import {
  Hero, Setup, Webinar, GetStarted, Help,FAQ
} from '../sections';
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);
</script>
