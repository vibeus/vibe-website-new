<template>
  <main class="about">
    <Hero :hero="fm.hero" />
    <Hello :hello="fm.hello" />
    <TeamGallery :team-info="fm.team_info" />
    <Location :locations="fm.locations" />
    <Investors :investors="fm.investors" />
    <GetInTouch :info="fm.get_in_touch" />
    <BottomCta :bottom-cta="fm.bottom_cta" />
  </main>
</template>

<script setup>
import {
  Hero, 
  Hello, 
  TeamGallery,
  Location,
  Investors,
  GetInTouch,
  BottomCta
} from './sections/index';
const { frontmatter: fm } = useData();
</script>

<style lang="sass" scoped>
@import '@css/base'
.section.bottom-cta
  background-color: #fc0
  :deep(.button)
    &:hover 
      color: $vibe-white
      background-color: $vibe-black
</style>
