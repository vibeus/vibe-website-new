
<template>
  <main class="software">
    <Hero />
    <TrustIndustry />
    <Features />
    <Specs />
    <!--  -->
    <FigureContentSection :contentData="privacy" /> 
    <BottomCta />
  </main>
</template>

<script setup>
import { Hero, TrustIndustry, Features, Specs, BottomCta} from './sections';
import FigureContentSection from '@vcomp/FigureContentSection.vue';

const { frontmatter: fm } = useData();
const privacy = fm._value.privacy;
</script>

<style lang="sass" scoped>

</style>
