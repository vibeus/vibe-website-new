<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div>
          <h1 class="title">{{ hero.title }}</h1>
          <div class="content">{{ hero.body }}</div>
        </div>
        <lazy-img
          class="image is-hidden-mobile"
          src="android-app-store/hero.png"
          alt=""
        />
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
  align-items: stretch
  display: flex
  flex-direction: column
  justify-content: space-between
  background-color: #F4F4F4
  font-family:$vibe-family-body
  color: $vibe-black
  .hero-body
    flex-grow: 1
    flex-shrink: 0
    padding: 3rem 1.5rem
    +tablet
      padding-top: 4.5rem
      padding-bottom: 4.5rem
  .container
    max-width: 1100px
    flex-grow: 1
    margin: 0 auto
    position: relative
    width: auto
    +tablet
      display: flex
      justify-content: space-between
      align-items: center
  .title
    margin-bottom: 1.5rem
    font-size: 64px
    font-family: $vibe-family-head
    font-weight: $vibe-bold
    line-height: 1.125
    +mobile
      font-size: 32px
  .content
    max-width: 580px
    margin-bottom: 1.5rem
    font-weight: 400
    +tablet
      font-size: 18px
    +mobile
      max-width: 311px
      font-size: 14px
      line-height: 21px
  .image
    max-width: 237px
</style>
