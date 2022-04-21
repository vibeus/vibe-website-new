<template>
  <main class="customer">
    <Testimonial :testimonials="fm.testimonials" />
    <BottomCta :bottomCta="fm.bottom_cta" />
  </main>
</template>

<script setup>
import Testimonial from './sections/Testimonial.vue';
import BottomCta from '/@vcomp/BottomCta.vue';
const { frontmatter: fm } = useData();
console.log('fm: ', fm);
</script>

<style lang="sass" scoped>
@import '/@css/base'
</style>
