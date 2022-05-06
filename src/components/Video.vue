<template>
  <div
    id="video-section"
    class="video-section"
  >
    <lazy-img
      class="image"
      :src="video.placeholder"
      :alt="video.alt"
      :style="{ visibility: isPlay ? 'hidden' : '' }"
      @click="videoPlay"
    />
    <div class="video-player-wrap">
      <div :id="`${video.id}-iframe`"></div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
});
console.log('video: ', props.video);
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
    videoPlayer.loadVideoById(props.video.id);
    videoPlayer.playVideo();
  } else if (!loadingPlayer.value) {
    const playerId = `${props.video.id}-iframe`;
    let firstTime = true;
    setTimeout(() => {
      setupYTApi().then(() => {
        const player = new window.YT.Player(playerId, {
          height: '100%',
          width: '100%',
          videoId: props.video.id,
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
.video-player
  cursor: pointer
  max-width: 628px
  flex-basis: 0
  flex-grow: 1
  flex-shrink: 1
  position: relative
  .image
    display: block
    width: 100%
    z-index: 10
  .video-player-wrap
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
</style>
