<template>
  <section class="section specs">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-text is-half">
          <h1 class="title">{{ title }}</h1>
          <div class="content">
            {{ body }}
          </div>
          <div class="cta">
            <a class="button" :class="cta.class" :href="cta.url" :target="cta.target">
              {{ cta.title }}
            </a>
          </div>
        </div>
        <div class="column">
          <div class="spec-item" v-for="(item, index) in texts" :key="index">
            <span class="icon">
              <svg-icon class="image" icon-name="common-check-mark" alt=""></svg-icon>
            </span>
            <span class="content">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { frontmatter: fm } = useData();
const { title, body, cta, texts } = fm._value.specs;

</script>

<style lang="sass" scoped>
@import "/@css/base"
.section.specs
  padding: 120px 24px
  background-color: $vibe-black
  +mobile
    padding: 60px 24px
  .container
    display: block
    max-width: 1244px
    +mobile
      width: auto
    .columns
      margin: -12px
      +mobile
        display: block
    .column
      padding: 12px
      &.is-text
        *
          color: white
        .button
          height: 50px
          line-height: 55px
          border-color: $vibe-white
          &:hover
            background-color: $vibe-white
            color: $vibe-black
          +mobile
            height: 47px
            line-height: 50px
            display: inline-block
            padding: 0
    .title
      font-size: 30px
      margin-bottom: 48px
    .content
      max-width: 500px
    .cta
      margin-top: 80px
    .spec-item
      position: relative
      background-color: $vibe-teal
      display: flex
      align-items: center
      padding: 0 20px 0 80px
      +tablet
        min-height: 92px
        font-size: 20px
      +mobile
        padding: 20px 20px 20px 80px
      &:not(:last-child)
        margin-bottom: 8px
      .icon
        position: absolute
        left: 32px
        margin-top: 2px

</style>
