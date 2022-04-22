<template>
  <section class="section hero">
    <div class="hero-inner-wrapper">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ hero.title }}
            <span>{{ hero.title1 }}</span>
            {{ hero.title2 }}
          </h1>
          <div class="content">
            {{ hero.body }}
          </div>
          <div class="hero-bg">
            <svg-icon icon-name="shared-what-bg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  hero: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.hero
  overflow: visible
  background-color: $vibe-white
  .container
    flex-direction: column
    align-items: center
    text-align: center
    max-width: 890px
  .hero-body
    padding-top: 120px
    padding-bottom: 52px
  .title
    font-size: 48px
    font-weight: $vibe-bold
    max-width: 890px
    margin-bottom: 1.5rem
    span
      display: inline-block
      position: relative
      z-index: 5
      &::after
        content: ""
        display: inline-block
        position: absolute
        left: 0
        bottom: 3px
        width: 100%
        height: 30%
        background-color: $vibe-yellow
        z-index: -1
  .hero-bg
    width: 633px
    height: 571px
    position: absolute
    z-index: 5
    right: -538px
    top: -200px
</style>
