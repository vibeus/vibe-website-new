<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="bg-logo">
          <svg-icon
            class="image"
            icon-name="security-hero-bg"
            alt="hero bg icon"
          ></svg-icon>
        </div>
        <h1 class="title">
          {{ title }}
        </h1>
        <div
          class="content"
          v-html="body"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { frontmatter: fm } = useData();
const { title, body } = fm._value.hero;

</script>

<style lang="sass" scoped>
@import '@css/base'
.hero
  background-color: $vibe-teal
  overflow: hidden
  &-body
    padding: 120px 24px
  .container
    position: relative
    max-width: 1096px
    margin: 0 auto
    .bg-logo
      position: absolute
      width: 535px
      height: 453px
      top: -100px
      right: -240px
      +mobile
        width: 330px
        height: 286px
        top: -40px
        right: -100px
    .title
      font-size: 64px
      line-height: 78px
      margin-bottom: 24px
      +tablet-only
        font-size: 48px
      +mobile
        font-size: 32px
        line-height: 40px
    .content
      font-size: 18px
      max-width: 600px
      margin-bottom: 16px
</style>
