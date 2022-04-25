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
@import '@css/base'
.column
  padding: 1.25rem
  +mobile
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
    border-radius: 20px
    height: 391px
    margin: auto
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    +tablet
      +tablet-only
        padding: 40px 20px
      +until-widescreen
        padding: 40px 40px
        height: 380px
        &:hover
          margin: -0.75rem
          margin-top: -1.5rem
          height: calc(460px + 1.5rem)
          padding: calc(40px + 0.75rem) 40px
          .title, .content
            width: calc(100% - 1.5rem)
    +widescreen
      padding: 80px 40px
    +mobile
      justify-content: flex-start
      height: auto
      padding: 40px 40px
    .image
      width: 110px
      margin: auto
      margin-bottom: 32px
      +touch
        margin-bottom: 24px
      +mobile
        width: 78px
        margin-bottom: 8px
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
        +mobile
          width: unset
          margin-top: 24px
    &:hover
      .cta .button
        background-color: black
        color: white
</style>
