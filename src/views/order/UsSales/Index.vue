<template>
  <main class="us-sales">
    <CloserLook :closerLook="fm.closer_look"  />
    <CompareInBrief :compare="fm.compare" />
    <WhatsInBox />
    <Faq :faqs="faqs" />
    <Reviews :reviews="fm.reviews" />
    <BottomCta :bottomCta="fm.bottom_cta" />
  </main>
</template>

<script setup>
import CloserLook from './sections/CloserLook.vue';
import CompareInBrief from './sections/CompareInBrief.vue';
import WhatsInBox from './sections/WhatsInBox.vue';
import Reviews from './sections/Reviews.vue';
import BottomCta from '/@vcomp/BottomCta.vue';
import Faq from '/@vcomp/faq/Index.vue';
const { frontmatter: fm } = useData();
console.log('fm: ', fm);
const { faqs } = fm._value;
</script>

<style lang="sass" scoped>
@import '/@css/base'
.section.is-three-faqs
  background-color: $vibe-yellow
</style>
