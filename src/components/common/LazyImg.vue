<template>
  <img
    :src="getAssetsFile(src)"
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

const getAssetsFile = (url) => {
  return new URL(`../../assets/img/${url}`, import.meta.url).href;
};
</script>

<style lang="sass" scoped>

</style>
