<template>
  <section class="doc-hero" id="doc-hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ docHero.title }}</h1>
        <div class="content"></div>
    
      </div>
    </div>

  </section>
</template>
<script setup>
const props = defineProps({
  docHero: {
    type: Object,
    required: true,
  },
});
console.log('props: ', props.docHero);
</script>
<style lang="sass" scoped>
@import "/@css/base"
</style>
