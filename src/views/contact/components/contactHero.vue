<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{contactHero.title}}</h1>
        <div class="content">
          <span class="text" v-html="contactHero.body"></span>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  contactHero: {
    type: Object,
    required: true
  }
});
</script>
<style lang="sass" scoped>
@import '/@css/base'
.container 
  flex-grow: 1
  margin: 0 auto
  position: relative
  width: auto
  @media screen and (min-width: 576px)
    max-width: 540px
  @media screen and (min-width: 768px)
    max-width: 720px
  @media screen and (min-width: 1024px)
    max-width: 960px
  @media screen and (min-width: 1200px)
    max-width: 1140px
  @media screen and (min-width: 1216px)
    max-width: 1152px
  @media screen and (min-width: 1400px)
    max-width: 1320px
  @media screen and (min-width: 1408px)
    max-width: 1344px

::v-deep .link 
  line-height: 1em
  text-decoration-line: underline
  text-decoration-thickness: 2px
  font-weight: 500
  &:hover
    color: #66c

::v-deep .spacing-block 
    width: 100%
    height: 15px

::v-deep .icon
  display: inline-flex
  align-items: center
  justify-content: center
  height: 1.5rem
  width: 1.5rem
  margin-right: 5px
  vertical-align: -2px

.hero
  // align-items: stretch
  // display: flex
  // flex-direction: column
  // justify-content: space-between
  color: $vibe-black
  background-color: #fc0

  .hero-body
    padding: 80px 0 56px
    @media screen and (max-width: 699px)
      padding-bottom: 72px
      padding-top: 40px
    .title
      margin-top: 0
      margin-bottom: 1.5rem
      text-align: center
      font-size: 48px
      font-family: $family-head
      font-weight: $vibe-bold
      @media screen and (max-width: 699px)
        font-size: 36px
    .content
      max-width: 678px
      margin: 0 auto
      text-align: center
      font-family: $family-body
      @media screen and (max-width: 699px)
        font-size: 14px
        line-height: 152%

  .spacing-block
    width: 100%
    height: 15px

</style>
