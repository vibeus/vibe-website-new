<template>
  <section class="section presentation">
    <div class="container">
      <h1 class="title is-section-title">
        {{ presentation.title }}
      </h1>
      <div
        v-for="(pre, index) in presentation.items"
        :key="pre.title"
        :class="`content-wrap is-index-${index + 1}`"
      >
        <div class="is-image">
          <lazy-img
            class="image"
            :src="pre.figure"
            alt=""
          />
        </div>
        <div class="is-content">
          <h2 class="title is-subtitle">
            {{ pre.title }}
          </h2>
          <div
            class="content"
            v-html="pre.body"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  presentation: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.presentation
  padding: 120px 24px
  background-color: #fff
  +mobile
    padding: 60px 24px
  .container
    flex-direction: column
    .is-section-title
      font-size: 48px
      text-align: center
      margin-bottom: 100px
      +mobile
        font-size: 32px
        margin-bottom: 1.5rem
  .content-wrap
    position: relative
    +tablet
      display: flex
      align-items: center
    .is-subtitle
      font-size: 2rem
      margin-bottom: 1.5rem
      +mobile
        font-size: 20px
        line-height: 1.5
    .is-content
      display: block
      flex-basis: 0
      flex-grow: 1
      flex-shrink: 1
      padding: 0.75rem
      .is-content
        +tablet
          max-width: 500px
    .is-image
      display: block
      flex-basis: 0
      flex-grow: 1
      flex-shrink: 1
      padding: 0.75rem
      .image
        +tablet
          position: absolute
          top: 0
  .is-index-1
    flex-direction: row-reverse
    max-width: 1108px
    min-height: 465px
    .image
      +tablet
        margin-left: 60px
        width: 730px
      +mobile
        width: 100%
  .is-index-2
    max-width: 1220px
    min-height: 412px
    margin-top: 72px
    .is-content
      +tablet
        margin-left: 118px
    .image
      box-shadow: 10px 10px $vibe-purple
      +tablet
        margin-right: 48px
        width: 567px
        right: 50%
      +mobile
        width: 100%
  .is-image
    .image
      display: block
</style>
