<template>
  <section class="section collaboration">
    <div class="container">
      <h1 class="title">{{ collaboration.title }}</h1>
      <div class="columns is-vcentered">
        <div class="column is-image">
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
        <div class="column is-content">
          <h2 class="title is-subtitle">{{collaboration.items.subtitle}}</h2>
          <div class="content">
            {{collaboration.items.body}}
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
@import '/@css/base'
.collaboration
  padding: 120px 24px 100px
  background-color: $vibe-yellow 
  .container
    flex-direction: column
    align-items: center
  .title
    font-size: 48px
    +tablet
      margin-bottom: 84px
    +mobile
      font-size: 32px
  .is-vcentered
    align-items: center
    .is-image
      position: relative
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
      .is-subtitle
        font-size: 30px
        line-height: 38px
        margin-bottom: 48px
        +tablet
          max-width: 500px
          margin-left: auto
      .content
        +tablet
          max-width: 500px
          margin-left: auto


</style>
