<template>
  <section class="hero">
    <figure class="is-hero-bg is-hidden-until-900px">
      <lazy-img :src="hero.bg_figure"></lazy-img>
    </figure>
    <svg-icon
      class="bg-logo"
      icon-name="shared-what-bg"
    />
    <div class="hero-body">
      <div class="container">
        <div class="title-text">
          <h1 class="title">
            {{ hero.title }}
          </h1>
          <p>{{ hero.body }}</p>
        </div>
        <div class="cta">
          <a
            class="link scroll-down-link"
            :href="`#${hero.link.scroll_to_id}`"
            target="_blank"
            data-scroll-to-id="setup"
          >
            <span class="title">{{ hero.link.text }} <span class="text is-hidden-mobile">↓</span></span>
            <span class="link-icon scroll-down is-hidden-tablet">
              <svg-icon
                class="scroll-down"
                icon-name="onboarding-scroll-down-icon"
              />
            </span>
          </a>
        </div>
        <figure class="image is-hidden-from-900px">
          <lazy-img :src="hero.bg_figure_mobile" />
        </figure>
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
  position: relative
  min-height: calc(100vh - 4.125rem)
  display: flex
  align-items: stretch
  flex-direction: column
  justify-content: space-between
  background-color: $vibe-almost-white
  .is-hero-bg
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    img
      width: 100%
      height: 100%
      object-fit: cover
  .hero-body
    align-items: center
    display: flex
    flex-grow: 1
    flex-shrink: 0
    padding: 3rem 1.5rem
    position: relative
    z-index:1
    @media screen and (max-width: 900px)
      padding-bottom: 0
  .bg-logo
    position: absolute
    z-index: 0
    width: 562px
    height: 508px
    left: -228px
    // top: 118px
    top: 18%
    +mobile
      width: 305px
      height: 276px
      top: 66px + 16px
      right: -186px
      left: auto
    @media screen and (min-width: 700px) and (max-width: 900px)
      width: 305px
      height: 276px
      top: 128px
      right: -118px
      left: auto

  .container
    max-width: 1024px
    +tablet
      padding-top: 80px
    +widescreen
      max-width: 1224px
    @media screen and (min-width: 2560px)
      max-width: 1520px
  .title-text
    @media screen and (max-width: 900px)
      text-align: center
      margin-bottom: 32px
      margin-top: 16px
    .title
      color: $vibe-purple
      +mobile
        font-size: 50px
        line-height: 60px
      +tablet
        margin-bottom: 21px
        font-size: 50px
        line-height: 60px
      +desktop
        font-size: 64px
        line-height: 74px
    p
      font-size: 20px
      line-height: 33px
      max-width: 500px
      display: inline-block
      font-family: $vibe-family-body
      +mobile
        font-size: 16px
        line-height: 26px
        max-width: 400px
        margin-top: 16px
      +tablet-only
        font-size: 18px
        line-height: 28px
        max-width: 400px
    .title p
      display: flex
  .cta
    margin-top: 92px
    color: $vibe-purple
    @media screen and (max-width: 900px)
      text-align: center
      margin-top: 40px
    .title, a.link
      font-weight: 500
      font-size: 18px
      line-height: 22px
      color: $vibe-purple
      +mobile
        font-size: 16px
        line-height: 19px
      +tablet-only
        font-size: 17px
        line-height: 19px
    a.link
      .link-icon
        display: block
        width: 100%
        text-align: center
        svg path
          stroke: $vibe-purple
  .image.is-hero
    // +mobile-full-width
    @media screen and (max-width: 900px)
      margin-left: -1.5rem
      margin-right: -1.5rem

@media screen and (max-width: 899px), print
  .is-hidden-until-900px
    display: none !important
@media screen and (min-width: 900px), print
  .is-hidden-from-900px
    display: none !important
</style>
