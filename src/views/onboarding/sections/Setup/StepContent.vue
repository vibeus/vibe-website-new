<template>
  <div class="step-content">
    <div class="title-wrapper">
      <h3 class="title">
        {{ stepContent.title }}
      </h3>
    </div>
    <div class="figure-wrapper">
      <lazy-img
        class="image"
        :src="stepContent.figure"
      />
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
  .title-wrapper
    flex-grow: 1
    .title
      color: $vibe-purple
      font-weight: $vibe-bold
      font-family: $vibe-family-head
      font-size: 32px
      line-height: 45px
      margin-bottom: 36px
      +tablet
        width: 294px
        margin-top: 12px
  .figure-wrapper
    .image
      +tablet
        width: 552px
        height: 413px

</style>
