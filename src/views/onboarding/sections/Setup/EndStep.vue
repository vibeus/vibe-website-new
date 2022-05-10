<template>
  <div class="end-step">
    <h3 class="title">
      {{ stepContent.title }}
    </h3>
    <lazy-img
      class="image"
      :src="stepContent.figure"
    />
    <div class="cta">
      <div class="text">
        {{ stepContent.cta.text }}
      </div>
      <a
        class="link-icon scroll-down-link"
        href="javascript;"
        :data-scroll-to-id="stepContent.cta.link.scroll_to_id"
      >
        <svg-icon
          class=""
          :icon-name="stepContent.cta.link.icon"
          :alt="stepContent.cta.link.icon"
        ></svg-icon>
      </a>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  stepContent: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.end-step
  .title
    margin-bottom: 24px
    font-family: $vibe-family-head
    color: $vibe-purple
    font-weight: $vibe-bold
    font-size: 32px
    line-height: 45px
    text-align: center
  .image
    width: 437px
    margin: 0 auto
  .cta
    text-align: center
    .text
      margin: 24px 0 8px
      font-size: 16px
      font-family: $vibe-family-body
    .link-icon
      svg
        width: 14px
        height: 15px
</style>
