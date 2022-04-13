<template>
  <section class="section is-video">
    <div class="container">
      <div class="video-section" id="video-section">
        <lazy-img
          class="image"
          :src="video.placeholder"
          :alt="video.alt"
          @click="videoPlay"
          :style="{ visibility: isPlay ? 'hidden' : '' }"
        />
        <iframe
          v-if="isPlay"
          id="video-section-iframe"
          frameborder="0"
          allowfullscreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="YouTube video player"
          width="100%"
          height="100%"
          :src="`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&widgetid=1`"
        ></iframe>
      </div>
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
const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
});
const isPlay = ref(false);
const videoPlay = () => {
  isPlay.value = true;
  const videoFrame = document.querySelector('#video-section-iframe');
  console.log('videoFrame: ', videoFrame);
  videoFrame.play();
};
</script>
<style lang="sass" scoped>
@import '/@css/base'
.is-video
  padding: 120px 24px
  .container
    align-items: center
  .video-section
    cursor: pointer
    max-width: 628px
    flex-basis: 0
    flex-grow: 1
    flex-shrink: 1
    position: relative
    .image
      width: 100%
      z-index: 10
    .hiddenImg
      visibility: hidden
    iframe
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
  .is-text
    max-width: 488px
    flex-basis: 0
    flex-grow: 1
    flex-shrink: 1
    .title
      font-size: 48px
      margin-bottom: 1.5rem
    .content
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
