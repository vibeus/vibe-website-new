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
        <!-- <iframe
          v-if="isPlay"
          id="video-section-iframe"
          frameborder="0"
          allowfullscreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="YouTube video player"
          width="100%"
          height="100%"
          :src="`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&widgetid=1`"
        ></iframe> -->
        <div id="video-section-iframe"></div>
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
  // isPlay.value = true;
  if (videoPlayer) {
    videoPlayer.loadVideoById(props.video.id);
    videoPlayer.playVideo();
  } else if (!loadingPlayer.value) {
    const playerId = 'video-section-iframe';
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
