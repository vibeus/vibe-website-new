<template>
  <section class="section is-hero-video">
    <div class="bg-logo">
      <svg-icon icon-name="shared-what-bg" />
    </div>
    <div class="container">
      <div class="image video-launcher">
        <lazy-img src="software/hero.png" alt="" />
      </div>
      <div class="preview" id="hero-video">
        <video v-if="!isPlay" autoplay loop muted playsinline>
          <source :src="heroVideo" type="video/mp4" />
        </video>
        <iframe
          v-if="isPlay"
          id="video-section-iframe"
          frameborder="0"
          allowfullscreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="YouTube video player"
          width="100%"
          height="100%"
          :src="`https://www.youtube.com/embed/jCbQM95PA9U?autoplay=1&rel=0&modestbranding=1&widgetid=1`"
        ></iframe>
        <div v-if="!isPlay" @click="isPlay = true" class="mask">
          <svg-icon class="image is-mask-play" icon-name="shared-video-preview-play" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import heroVideo from '/@/assets/video/software/hero-preview.mp4';
const isPlay = ref(false);
</script>
<style lang="sass" scoped>
@import '/@css/base'
.is-hero-video
  background: linear-gradient(to bottom, $vibe-teal 50%, #FFFFFF 50%)
  overflow: visible
  position: relative
  .bg-logo
    position: absolute
    width: 661px
    height: 434px
    right: 66%
    bottom: 50%
    overflow: hidden
    svg
      width: 661px
      height: 596px
  .container
    max-width: 1190px
  .image.video-launcher
    position: relative
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3)
    cursor: pointer
    *:focus
      outline: none
  .preview
    position: absolute
    left: 2.941%
    right: 2.941%
    top: 4.076%
    bottom: 3.965%
    video
      width: 100%
      height: 100%
    video.video-js
      display: none
    .mask
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: rgba(0,0,0,0.25)
      display: flex
      align-items: center
      justify-content: center
      cursor: pointer
    .image.is-mask-play
      width: 108px
      height: 108px
      color: #fff
      +mobile
        width: 64px
        height: 64px
    .is-footnote
        margin-top: 60px
        font-size: 16px
        text-align: center
</style>
