<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ contactHero.title }}
        </h1>
        <div class="content">
          <template
            v-for="item in contactHero.body"
            :key="item"
          >
            <div
              class="single-content-block"
              :class="item.class"
            >
              <svg-icon
                v-if="item.icon"
                class="icon"
                :icon-name="item.icon.class"
              />
              <span
                v-if="item.text"
                class="text"
                :class="item.text.class"
              >{{
                item.text.content
              }}</span>
              <a
                v-if="item.link"
                class="link"
                :href="item.link.url"
              >{{
                item.link.text
              }}</a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  contactHero: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'

.hero
  color: $vibe-black
  background-color: #fc0
  .hero-body
    padding: 80px 1.5rem 56px
    flex-grow: 1
    flex-shrink: 0
    @media screen and (max-width: 699px)
      padding-bottom: 72px
      padding-top: 40px
    .title
      margin-top: 0
      margin-bottom: 1.5rem
      text-align: center
      font-size: 64px
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
    .single-content-block
      .icon
        display: inline-flex
        align-items: center
        justify-content: center
        height: 1.5rem
        width: 1.5rem
        margin-right: 5px
        vertical-align: -2px
      .text
        text-align: center
      .link
        line-height: 1em
        text-decoration-line: underline
        text-decoration-thickness: 2px
        font-weight: 500
        &:hover
          color: #66c
    .spacing-block
      width: 100%
      height: 15px
</style>
