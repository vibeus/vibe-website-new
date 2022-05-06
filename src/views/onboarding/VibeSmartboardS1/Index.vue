<template>
  <main class="onboarding">
    <Hero :hero="fm.hero" />
    <Setup :setup="fm.setup" />
    <GetStarted :get-started="fm.get_started" />
    <Form :form-content="fm.form_content" />
  </main>
</template>
<script lang="ts" setup>
import Hero from '../sections/Hero.vue';
import Setup from '../sections/Setup/Index.vue';
import GetStarted from '../sections/GetStarted.vue';
import Form from '../sections/Form.vue';
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);
</script>
