<template>
  <main class="customer">
    <CustomerStory :testimonials="fm.testimonials" />
    <Trust :trust="fm.trust" />
    <TeamsCollaborate />
    <Testimonial />
    <BottomCta :bottomCta="fm.bottom_cta" />
  </main>
</template>

<script setup>
import CustomerStory from './sections/CustomerStory.vue';
import Trust from './sections/Trust.vue';
import TeamsCollaborate from './sections/TeamsCollaborate.vue';
import Testimonial from './sections/Testimonial.vue';
import BottomCta from '@vcomp/BottomCta.vue';
const { frontmatter: fm } = useData();
console.log('fm: ', fm);
</script>

<style lang="sass" scoped>
@import '@css/base'
</style>
