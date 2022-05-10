<template>
  <main class="onboarding">
    <Hero :hero="fm.hero" />
    <Setup :setup="fm.setup" />
    <GetStarted :get-started="fm.get_started" />
    <Form :form-content="fm.form_content" />
  </main>
</template>
<script setup>
import {
  Hero, Setup, GetStarted, Form
} from '../sections';
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);
</script>
