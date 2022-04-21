<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <figure class="image is-hero-bg">
          <lazy-img class="image" :src="hero.figure" />
        </figure>
        <div class="title-text">
          <h1 class="title">{{ hero.title }}</h1>
          <div class="content">{{ hero.body }}</div>
        </div>
        <SectionCta :cta="hero.cta" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionCta from '/@vcomp/SectionCta.vue';
const props = defineProps({
  hero: {
    type: Object,
    required: true
  },
});

</script>

<style lang="sass" scoped>
@import '/@css/base'
.hero
  overflow: hidden
  .hero-body
    padding: 120px 24px
  .container
    position: relative
    margin: 0 auto
    *
      position: relative
      z-index: 5
    +fullhd
      max-width: 1180px
  .title-text
    .title
      font-weight: $vibe-bold
      margin-bottom: 24px
      +mobile
        font-size: 45px
        max-width: 185px
      +tablet
        font-size: 50px
        max-width: 650px
      +widescreen
        font-size: 64px
    .content
      font-size: 18px
      font-weight: normal
      +mobile
        max-width: 290px
        font-size: 16px
      +tablet
        max-width: 480px
      +widescreen
        max-width: 620px
  .cta
    margin-top: 88px
    padding-top: 0
    text-align: left
    +mobile
      margin-top: 32px
  .image.is-hero-bg
    position: absolute
    z-index: 1
    +mobile
      top: -70px
      right: -157px
      img
        width: 247px
    +tablet
      right: -420px
      top: -160px
      img
        width: 600px
    +desktop
      right: -508px
      top: -292px
      img
        width: 830px
</style>
