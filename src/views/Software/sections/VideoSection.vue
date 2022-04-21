<template>
  <section class="section is-video">
    <div class="video-wrap">
      <Video :video="video" />
      <div class="is-text">
        <h1 class="title">{{ video.title }}</h1>
        <div class="content">
          {{ video.content }}
        </div>
        <div class="cta">
          <a :href="video.cta.url">{{ video.cta.title }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Video from '@vcomp/Video.vue';
const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.is-video
  background-color: $vibe-white
  +tablet
    padding: 120px 24px
  .video-wrap
    max-width: 1300px
    display: flex
    justify-content: space-between
    margin: 0 auto
    +tablet
      align-items: center
    +mobile
      flex-direction: column
  .is-text
    flex-basis: 0
    flex-grow: 1
    flex-shrink: 1
    padding: 24px
    +tablet
      max-width: 488px
    .title
      font-size: 48px
      margin-bottom: 1.5rem
      +mobile
        font-size: 32px
    .content
      max-width: 464px
      margin-bottom: 1.5rem
    .cta
      font-family: $vibe-family-body
      +tablet
        font-weight: $vibe-bold
      a:not(:hover)
        color: $vibe-purple
      a:hover
        color: $vibe-purple
</style>
