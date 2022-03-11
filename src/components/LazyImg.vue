<template>
  <img
    :src="imageUrl"
    :alt="alt"
  />
</template>

<script setup>
import { imageModule } from '/@/utils/global';
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

// const imageUrl = new URL(`../assets/img/${props.src}`, import.meta.url).href;
const path = `../assets/img/${props.src}`;
const imageUrl = imageModule[path].default;
console.log('imageUrl: ', imageUrl);
</script>

<style lang="sass" scoped>

</style>
