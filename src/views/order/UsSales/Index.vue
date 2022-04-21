<template>
  <main class="us-sales">
    <CloserLook :closerLook="fm.closer_look" />
    <WhatsInBox />
    <CompareInBrief :compare="fm.compare" />
    <Faq :faqs="faqs" />
    <Reviews :reviews="fm.reviews" />
    <BottomCta :bottomCta="fm.bottom_cta" />
  </main>
</template>

<script setup>
import { CloserLook, CompareInBrief, WhatsInBox, Reviews } from './sections';
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
