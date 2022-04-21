<template>
  <div class="column"
       :class="itemContent.class"
  >
    <a class="is-feature-card" 
      :href="itemContent.url"
      :target="itemContent.target"
    >
      <div class="is-feature"
          :style="{ 'background-color': itemContent.background_color }"
      >
        <div>
          <figure class="image">
            <lazy-img :src="itemContent.figure"></lazy-img>
          </figure>
          <h2 class="title">
            <md-format :content="itemContent.title"/>
          </h2>
          <div class="content"
               :class="{ 'is-hidden-mobile': itemContent.body_mobile }">
               {{ itemContent.body }}
          </div>
          <div v-if="itemContent.body_mobile" class="body is-hidden-tablet">
            <md-format :content="itemContent.body_mobile"/>
          </div> 
        </div>
        <div class="cta">
          <span class="button"
                :class="itemContent.cta.class"
          >
            {{ itemContent.cta.title }}
          </span>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  itemContent: {
    type: Object,
    required: true
  }
});
</script>

<style lang="sass">
@import '/@css/base'
.column
  +mobile
    &:not(:first-child)
      margin-top: 24px
  a.is-feature-card
    display: block
    cursor: auto
    height: 100%
    &:hover
      color: black
    &[href]
      cursor: pointer
  .is-feature
    margin: auto
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    .image
      margin: auto
      margin-bottom: 32px
      +touch
        margin-bottom: 24px
      +mobile
        margin-bottom: 16px
    .title
      margin: auto
      text-align: center
      font-size: 24px
      line-height: 1.3
      margin-bottom: 16px
      max-width: 300px
      +touch
        font-size: 22px
      +mobile
        font-size: 20px
    .content
      margin: auto
      max-width: 340px
      text-align: center
      font-size: 18px
      line-height: 1.5
      +mobile
        max-width: 311px
        font-size: 16px
    .cta
      font-weight: $vibe-bold
      .button
        display: inline-block
        text-align: center
</style>
