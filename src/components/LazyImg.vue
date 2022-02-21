<template>
  <img
    :src="src"
    :alt="alt"
  />
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
  },
});
</script>

<style lang="sass" scoped>

</style>
