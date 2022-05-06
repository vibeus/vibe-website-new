<template>
  <div class="step-content">
    <div class="title-wrapper">
      <h3 class="title">
        {{ stepContent.title }}
      </h3>
      <div class="body">
        <a
          v-for="link in stepContent.links"
          :key="link.text"
          :href="link.url"
          target="_blank"
        >
          <span class="text">{{ link.text }}</span>
          <svg-icon
            v-if="link.icon.class==='download-icon'"
            :class="link.icon.class"
            :icon-name="link.icon.url"
            :alt="link.icon.class"
          ></svg-icon>
          <span :class="link.icon.class" v-if="link.icon.class==='faq-icon'">{{ link.icon.text }}</span>
        </a>
      </div>
    </div>
    <div class="video-wrapper">
      <Video :video="stepContent.video" />
    </div>
  </div>
</template>
<script setup>
import Video from '@vcomp/Video.vue';
const props = defineProps({
  stepContent: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.step-content
  display: flex
  margin-top: 48px
  .title-wrapper
    flex-grow: 1
    +tablet
      margin-right: 24px
      width: 375px
    .title
      color: $vibe-purple
      font-weight: $vibe-bold
      font-family: $vibe-family-head
      font-size: 32px
      line-height: 45px
      margin-bottom: 36px
       
    .body
      a
        display: block
        margin-top: 24px
        font-family: $vibe-family-body
        font-size: 16px
        &:hover
          color: $vibe-purple
        .download-icon
          width: 14px
          height: 19px
          color: $vibe-purple
        .faq-icon
          color: $vibe-purple

</style>
