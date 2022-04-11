<template>
  <section class="section is-video">
    <div class="container">
      <div class="video-section" id="video-section">
        <iframe
          v-if="isPlay"
          id="video-section-iframe"
          frameborder="0"
          allowfullscreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="YouTube video player"
          width="100%"
          height="100%"
          :src="`https://www.youtube.com/embed/${video.id}`"
        ></iframe>
        <lazy-img
          class="image"
          :src="video.placeholder"
          :alt="video.alt"
          @click="isPlay = true"
          :style="isPlay ? (visibility = hidden) : ''"
        />
      </div>
      <div class="is-text">
        <h1 class="title is-section-title">Vibe is more than software</h1>
        <div class="content">
          Vibe is a complete collaboration solution, with hardware and software that work
          together to uplevel your meetings and presentations.
        </div>
        <div class="cta">
          <a href="/hardware/">Check out the vibe board →</a>
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
</script>
<style lang="sass" scoped>
@import '/@css/base'
.is-video
  padding: 120px 24px
  .video-section
    cursor: pointer
    max-width: 628px
    flex-basis: 0
    flex-grow: 1
    flex-shrink: 1
    position: relative
    .image
      width: 100%
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
</style>
