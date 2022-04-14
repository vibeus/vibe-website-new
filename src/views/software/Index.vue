<template>
  <main class="software">
    <Hero :hero="fm.hero" />
    <HeroVideo />
    <Overall class="is-ideas" :overall="fm.feature_ideas" />
    <Collaboration :collaboration="fm.feature_collaboration" />
    <Presentation :presentation="fm.feature_presentation" />
    <Overall class="is-app" :overall="fm.feature_apps"/>
    <Security :security="fm.security" />
    <Testimonial :testimonialSection="fm.testimonial_section" />
    <Video :video="fm.video" />
    <BottomCta :bottomCta="fm.bottom_cta" />
  </main>
</template>
<script setup>
import Hero from './sections/Hero.vue';
import HeroVideo from './sections/HeroVideo.vue';
import Overall from './sections/Overall.vue';
import Collaboration from './sections/Collaboration.vue';
import Presentation from './sections/Presentation.vue';
import Security from './sections/Security.vue';
import Testimonial from './sections/Testimonial.vue';
import Video from './sections/Video.vue';
import BottomCta from '/@vcomp/BottomCta.vue';
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);
</script>
<style lang="sass" scoped>
.is-app
  padding-top: 120px
  padding-bottom: 120px
  background-color: #f4f4f4
</style>
