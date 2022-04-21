<template>
  <main class="reseller">
    <Hero :hero="fm.hero"/>
    <FeatureColumns :features="fm.feature_columns" />
  </main>
</template>

<script setup>
import { Hero } from './sections/index';
import FeatureColumns from '/@vcomp/FeatureColumns/Index.vue';
const { frontmatter: fm } = useData();

</script>

<style lang="sass" scoped>
@import '/@css/base'

.section.is-feature-columns
  background-color: $vibe-white
  .container
    +fullhd
      max-width: 1200px
  .column
    padding: 1.25rem
  .is-feature
    border-radius: 20px
    height: 551px
    .title, .body
      margin-left: auto
      margin-right: auto
      width: 100%
    .image
      width: 110px
      margin-bottom: 24px
    &:hover
      .cta .button
        background-color: black
        color: white
    +mobile
      justify-content: flex-start
      height: auto
      padding: 40px 40px
      .image
        width: 78px
        margin-bottom: 8px
      .title
        margin-bottom: 16px
      .cta .button
        padding: 12px 28px
        margin-top: 24px
    +tablet
      +until-widescreen
        padding: 40px 40px
        height: 460px
        &:hover
          margin: -0.75rem
          margin-top: -1.5rem
          height: calc(460px + 1.5rem)
          padding: calc(40px + 0.75rem) 40px
          .title, .body
            width: calc(100% - 1.5rem)
        .image
          margin-bottom: 16px
        .title
          font-size: 20px
        .body
          font-size: 16px
      +tablet-only
        padding: 40px 20px
    +widescreen
      padding: 80px 40px
</style>
