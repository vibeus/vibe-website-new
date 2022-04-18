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
    <VideoSection :video="fm.video" />
    <BottomCta :bottomCta="fm.bottom_cta" />
  </main>
</template>
<script setup>
import {
  Hero, HeroVideo, Overall, Collaboration, Presentation,
  Security, Testimonial, VideoSection
} from './sections';
import BottomCta from '/@vcomp/BottomCta.vue';
const { frontmatter: fm } = useData();
</script>
<style lang="sass" scoped>
.is-app
  padding-top: 120px
  padding-bottom: 120px
  background-color: #f4f4f4
</style>
