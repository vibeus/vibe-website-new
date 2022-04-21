<template>
  <section class="section doc-hero" id="doc-hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ docHero.title }}</h1>
        <md-format class="content" :content="docHero.summary"></md-format>
        <lazy-img
          v-if="docHero.hero_imgs"
          class="image image-product-tablet"
          :src="docHero.hero_imgs.img"
          :alt="docHero.hero_imgs.img_alt"
        />
      </div>
    </div>
    <lazy-img
      v-if="docHero.hero_imgs"
      class="image image-product-mobile"
      :src="docHero.hero_imgs.img_mobile"
      :alt="docHero.hero_imgs.img_mobile_alt"
    />
  </section>
</template>
<script setup>
const props = defineProps({
  docHero: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import "@css/base"
.doc-hero
  position: relative
  background-color: $vibe-teal
  +tablet
    font-size:18px
  .container
    flex-direction: column
    max-width: 1100px
  .hero-body
    padding: 3rem 1.5rem
    .title
      +tablet
        font-size: 48px
        max-width: 710px
      +mobile
        text-align: left
        font-size: 30px
    .content
      margin: 1.5rem 0
      max-width: 750px
      font-size: 18px
      +mobile
        font-size: 16px
    :deep(p:not(:last-child))
      margin-bottom: 1em
  .image
    &.image-product-tablet
      position: absolute
      height: 130%
      left: calc(100% - 265px)
      top: -3rem
      bottom: -3rem
      @media screen and (max-width: 1150px)
        display: none
    &.image-product-mobile
      display: none
      width: 100%
      margin-bottom: 40px
      @media screen and (max-width: 1150px)
        display: block
</style>
