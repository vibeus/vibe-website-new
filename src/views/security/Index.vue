
<template>
<main class="software">
  <Hero/>
  <TrustIndustry/>
  <Features/>
  <Specs/>
  <!--  -->
  <FigureContentSection :contentData="privacy"/> 
  <BottomCta/>
</main>
</template>

<script setup>
import Hero from './sections/Hero.vue';
import TrustIndustry from './sections/TrustIndustry.vue';
import Features from './sections/Features.vue';
import Specs from './sections/Specs.vue';
import FigureContentSection from '../../components/FigureContentSection.vue';
import BottomCta from './sections/BottomCta.vue';

const { frontmatter: fm } = useData();
const privacy = fm._value.privacy;
</script>

<style lang="sass" scoped>

</style>
