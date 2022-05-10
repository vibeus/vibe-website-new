<template>
  <section class="section is-hero-video">
    <div class="bg-logo">
      <svg-icon icon-name="shared-what-bg" />
    </div>
    <div class="container">
      <div class="image video-launcher">
        <lazy-img
          src="software/hero.png"
          alt=""
        />
      </div>
      <div
        id="hero-video"
        class="preview"
      >
        <video
          v-if="!isPlay"
          autoplay
          loop
          muted
          playsinline
        >
          <source
            :src="heroVideo"
            type="video/mp4"
          />
        </video>
        <div class="video-section-wrap">
          <div id="jCbQM95PA9U-iframe"></div>
        </div>
        <div
          v-if="!isPlay"
          class="mask"
          @click="videoPlay"
        >
          <svg-icon
            class="image is-mask-play"
            icon-name="shared-video-preview-play"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import heroVideo from '@/assets/video/software/hero-preview.mp4';
const isPlay = ref(false);
let videoPlayer = null;
const loadingPlayer = ref(false);
function setupYTApi() {
  if (window.YTApiReady) {
    return Promise.resolve();
  }

  let loadApi = false;
  if (!window.YTCallback) {
    window.YTCallback = [];
    loadApi = true;
  }

  return new Promise((resolve) => {
    window.YTCallback.push(resolve);
    if (loadApi) {
      const tag = document.createElement('script');

      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        window.YTApiReady = true;
        window.YTCallback.forEach(resolve);
      };
    }
  });
}
const videoPlay = () => {
  if (videoPlayer) {
    videoPlayer.loadVideoById('jCbQM95PA9U');
    videoPlayer.playVideo();
  } else if (!loadingPlayer.value) {
    const playerId = 'jCbQM95PA9U-iframe';
    let firstTime = true;
    setTimeout(() => {
      setupYTApi().then(() => {
        const player = new window.YT.Player(playerId, {
          height: '100%',
          width: '100%',
          videoId: 'jCbQM95PA9U',
          playerVars: {
            enablejsapi: 1,
            start: 0,
            loop: 1,
          },
          events: {
            onReady: () => {
              player.mute();
              videoPlayer = player;
              player.playVideo();
              setInterval(() => {
                player.getCurrentTime() > 10 && player.seekTo(0);
              }, 1000);
            },
            onStateChange: (event) => {
              if (event.data === 3 && firstTime) {
                isPlay.value = true;
                firstTime = false;
              }
            },
          },
        });
      });
    }, 10);
  }
};
</script>
<style lang="sass" scoped>
@import '@css/base'
.is-hero-video
  padding-top: 64px
  padding-bottom: 64px
  background: linear-gradient(to bottom, $vibe-teal 50%, #FFFFFF 50%)
  overflow: visible
  position: relative
  +mobile
    padding-top: 32px
    padding-bottom: 32px
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
    .video-section-wrap
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
</style>
