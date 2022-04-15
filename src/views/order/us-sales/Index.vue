<template>
  <main class="us-sales">
    <CloserLook/>
    <WhatsInBox/>
    <Faq :faqs="faqs"/>  
  </main>
</template>

<script setup>
import CloserLook from './sections/CloserLook.vue';
import WhatsInBox from './sections/WhatsInBox.vue';
import Faq from '/@/components/faq/Index.vue';
const { frontmatter: fm } = useData();
const { faqs } = fm._value;
</script>

<style lang="sass" scoped>
@import '/@css/base'
.section.is-three-faqs
  background-color: $vibe-yellow
</style>
