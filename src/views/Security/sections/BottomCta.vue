<template>
  <section class="section is-bottom-cta">
    <div class="container">
      <div class="bottom-bg">
        <svg-icon class="image" icon-name="common-what-bg" alt=""></svg-icon>
      </div>
      <div>
        <h1 class="title is-section-title">{{ title }}</h1>
        <div class="content">{{ body }}</div>
      </div>
      <div class="cta cta-contact" data-target="contact">
        <a class="button is-rounded is-black is-outlined" :href="cta.url">
         {{ cta.title }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const { frontmatter: fm } = useData();
const { title, body, cta } = fm._value.bottom_cta;
</script>

<style lang="sass" scoped>
@import '@css/base'
.section.is-bottom-cta
  padding: 120px 24px
  text-align: center
  background-color: $vibe-yellow
  +mobile
    padding: 60px 24px
  .container
    max-width: 1096px
    width: unset
    +tablet
      text-align: left
      align-items: center
      justify-content: space-between
    +mobile
      display: block
    .bottom-bg
      position: absolute
      top: -60px
      right: -330px
      svg 
        width: 528px
        height: 477px
    .title
      max-width: 800px
      margin-top: 0
      margin-bottom: 28px
    .content
      font-size: 20px
      +mobile
        margin-bottom: 32px
    .button
      &:hover 
        color: $vibe-white
        background-color: $vibe-black

</style>
