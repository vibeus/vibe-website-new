<template>
  <iframe
    :src="src" 
    frameborder="0" 
    style="border:0;" 
    allowfullscreen="" 
    aria-hidden="false" 
    tabindex="0"
  >
  </iframe>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    require: true,
    default: ''
  }
});
</script>

<style lang="sass" scoped>
iframe
  width: 100%
  height: 100%
</style>
