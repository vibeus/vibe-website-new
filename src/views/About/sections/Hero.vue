<template>
  <section class="hero">
    <div class="bg-logo">
      <svg-icon
        class="image"
        icon-name="common-outline-logo"
        alt=""
      />
    </div>
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ hero.title }}
        </h1>
        <div class="content">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  hero: {
    type: Object,
    require: true,
    default: () => {}
  }
});
</script>

<style lang="sass" scoped>
@import '@css/base'
.hero
  position: relative
  background-color: $vibe-teal
  .hero-body
    padding: 120px 24px
    +mobile
      padding-top: 60px
      padding-bottom: 60px
  .bg-logo
    position: absolute
    left: 50%
    top: -110px
    svg
      width: 995px
      height: 900px
  .container
    max-width: 1096px
    margin: 0 auto
  .title
    font-size: 64px
    line-height: 78px
    max-width: 1015px
    margin: 0
    +mobile
      font-size: 32px
      line-height: 48px
</style>
