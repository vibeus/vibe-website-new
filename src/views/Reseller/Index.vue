<template>
  <main class="reseller">
    <Hero :hero="fm.hero"/>
    <FeatureColumns :features="fm.feature_columns" />
    <Benefits :benefits="fm.benefits"/>
    <Faq :faqs="fm.faq"/>
    <BottomCta :bottomCta="fm.bottom_cta"/>
  </main>
</template>

<script setup>
import { 
  Hero, 
  FeatureColumns, 
  Benefits, 
  Faq,
  BottomCta
} from './sections/index';
const { frontmatter: fm } = useData();

</script>

<style lang="sass">
@import '@css/base'

.bottom-cta
  .button.is-contact-sales
    &:hover
      color: #FFF
      background-color: $vibe-black
</style>
