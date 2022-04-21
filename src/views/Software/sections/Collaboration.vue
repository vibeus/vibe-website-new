<template>
  <section class="section collaboration">
    <div class="container">
      <h1 class="title">{{ collaboration.title }}</h1>
      <div class="content-wrap">
        <div class="is-image">
          <lazy-img
            class="image"
            :src="collaboration.items.figure.base"
            :alt="collaboration.items.figure.alt_text"
          />
          <lazy-img
            class="image overlay"
            :src="collaboration.items.figure.overlay"
            :alt="collaboration.items.figure.alt"
          />
        </div>
        <div class="is-content">
          <h2 class="title is-subtitle">{{ collaboration.items.subtitle }}</h2>
          <div class="content">
            {{ collaboration.items.body }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  collaboration: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.collaboration
  padding: 120px 24px 100px
  background-color: $vibe-yellow
  +mobile
    padding-top: 60px
    padding-bottom: 50px
  .container
    flex-direction: column
    align-items: center
  .title
    font-size: 48px
    margin-bottom: 84px
    text-align: center
    +mobile
      font-size: 32px
      margin-bottom: 24px
  .content-wrap
    align-items: center
    +tablet
      display: flex
    .is-image
      position: relative
      flex-basis: 0
      flex-grow: 1
      flex-shrink: 1
      .image
        display: block
        width:100%
      .overlay
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
    .is-content
      flex-basis: 0
      flex-grow: 1
      flex-shrink: 1
      +tablet
        margin-left: 24px
      +mobile
        margin-top: 24px
      .is-subtitle
        font-size: 30px
        line-height: 38px
        margin-bottom: 48px
        text-align: unset
        +tablet
          max-width: 500px
          margin-left: auto
        +mobile
          font-size: 20px
          line-height: 1.5
          margin-bottom: 16px
      .content
        +tablet
          max-width: 500px
          margin-left: auto
</style>
