<template>
  <img
    :src="imageUrl"
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
// import img from '/@img/order/status/logo.svg';
// console.log('img: ', img);

const imageUrl = new URL(`../assets/img/${props.src}`, import.meta.url).href;
console.log('imageUrl: ', imageUrl);
</script>

<style lang="sass" scoped>

</style>
