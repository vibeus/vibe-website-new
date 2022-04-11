<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ hero.title }}</h1>
        <div class="content">{{ hero.body }}</div>
        <div class="cta">
          <a :class="`button ${hero.cta.class}`" :href="hero.cta.url" target="_blank">
            {{ hero.cta.title }}
          </a>
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
@import '/@css/base'
.hero
  display: flex
  align-items: stretch
  flex-direction: column
  justify-content: space-between
  background-color: $vibe-teal
  font-family:$vibe-family-body
  color: $vibe-black
  .hero-body
    display: flex
    justify-content: center
    flex-grow: 1
    flex-shrink: 0
    padding: 120px 1.5rem 0
    +mobile
      padding-top: 60px
  .title, .content
    max-width: 874px
    +tablet
      text-align: center
  .title
    margin-top: 0
    margin-bottom: 1.5rem
    font-size: 64px
    font-family: $vibe-family-head
    font-weight: $vibe-bold
    line-height: 1.125
    +mobile
      font-size: 50px
  .content
    margin-bottom: 72px
    +mobile
      margin-bottom: 32px
  .cta
    text-align: center
    .button
      +tablet
        width: 230px
</style>
