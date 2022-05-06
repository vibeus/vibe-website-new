<template>
  <div
    id="video-popup-player"
    class="video-popup-player"
  >
    <div
      class="modal-background"
      data-target="video-popup-player"
      @click="showVideoModal = false"
    ></div>
    <div
      class="modal-close"
      @click="showVideoModal = false"
    >
      <svg-icon
        class="icon"
        icon-name="shared-close"
      />
    </div>
    <div class="modal-content">
      <div :id="`${videoId}-iframe`"></div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
});
const showVideoModal = inject('showVideoModal');
let videoPlayer = null;
const loadingPlayer = ref(false);
watchEffect(() => {
  if (showVideoModal.value) {
    document.documentElement.classList.add('is-clipped');
  } else {
    document.documentElement.classList.remove('is-clipped');
  }
});
onMounted(() => {
  videoPlay();
});
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
    videoPlayer.loadVideoById(props.videoId);
    videoPlayer.playVideo();
  } else if (!loadingPlayer.value) {
    const playerId = `${props.videoId}-iframe`;
    let firstTime = true;
    setTimeout(() => {
      setupYTApi().then(() => {
        const player = new window.YT.Player(playerId, {
          height: '100%',
          width: '100%',
          videoId: props.videoId,
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
              // setInterval(() => {
              //   player.getCurrentTime() > 10 && player.seekTo(0);
              // }, 1000);
            },
            onStateChange: (event) => {
              if (event.data === 3 && firstTime) {
                firstTime = false;
                document.documentElement.classList.add('is-clipped');
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
.video-popup-player
  display: flex
  align-items: center
  flex-direction: column
  justify-content: center
  overflow: hidden
  position: fixed
  bottom: 0
  left: 0
  right: 0
  top: 0
  z-index: 9999
  .modal-close
    height: 32px
    width: 32px
    border-radius: 50%
    cursor: pointer
    position: absolute
    z-index:1000
    fill: #fff
    display: flex
    justify-content: center
    align-items: center
    right: 10px
    top: 10px
    .icon
      width: 20px
      height: 20px
    &:hover
      background-color: rgba(10,10,10,.3)
.modal-background
  position: absolute
  bottom: 0
  left: 0
  right: 0
  top: 0
  z-index: 40
  background-color: rgba(10,10,10,.86)
.modal-content
  z-index:1000
  +tablet
    width: 640px
    height: 360px
  +desktop
    width: 800px
    height: 450px
  +mobile
    width: 320px
    height: 180px
</style>
