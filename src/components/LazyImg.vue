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

// const imgModule = import.meta.glob('../assets/img/**/**');

const path = `../assets/img/${props.src}`;
const imageUrl = imageModule[path].default;
// const imageUrl = new URL(`../assets/img/${props.src}`, import.meta.url).href;
</script>

<style lang="sass" scoped>

</style>
