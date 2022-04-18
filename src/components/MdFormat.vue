<template>
  <div v-html="marked(content)"></div>
</template>

<script setup>
import { marked } from 'marked';
const props = defineProps({
  content: {
    type: String,
    required: true
  }
});
</script>

<style>

</style>
