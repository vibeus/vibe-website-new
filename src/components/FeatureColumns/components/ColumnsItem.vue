<template>
  <div class="column"
       :class="itemContent.class"
  >
    <a class="is-feature-card" 
      :href="itemContent.url"
      :target="itemContent.target"
    >
      <!-- is-feature-{{ $idx }} -->
      <div class="is-feature"
          :style="{ 'background-color': itemContent.background_color }"
      >
        <div>
          <figure class="image">
            <!-- {{ $bgColor := "#f4f4f4" }}
            {{ if .background_color }}
            {{ $bgColor = .background_color }}
            {{ else if $.card_background_color }}
            {{ $bgColor = $.card_background_color }}
            {{ end }}
            {{ partial "common/srcset" (dict "resource" (resources.Get .figure) "desktop" "540x" "mobile" "420x" "options" "png ") }} -->
            <lazy-img :src="itemContent.figure"></lazy-img>
          </figure>
          <h2 class="title">
            <md-format :content="itemContent.title"/>
          </h2>
          <div class="body"
               :class="{ 'is-hidden-mobile': itemContent.body_mobile }">
               <!-- <MdFormat :content="itemContent.body"/> -->
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
            <!-- <MdFormat :content="itemContent.cta.title"/> -->
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
    .body
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
</style>
