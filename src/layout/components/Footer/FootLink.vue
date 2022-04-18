<template>
  <div class="section is-vibe-foot">
    <div class="container about">
      <div class="columns">
        <div class="column is-one-quarter">
          <figure class="image is-foot-logo">
            <svg-icon icon-name="footer-foot-icon" />
            <span class="logoHidden">Vibe logo</span>
          </figure>
        </div>
        <div class="column">
          <div class="columns is-links is-mobile is-multiline">
            <template v-for="(item, idx) in sections" :key="idx">
              <div :class="'column is-half-touch is-foot-section ' + item.class || ''">
                <h2 class="is-vibe-heading">{{ item.heading }}</h2>
                <template v-for="(link, idx) in item.links" :key="idx">
                  <div class="foot-link">
                    <a
                      :href="link.url + '?from=foot'"
                      :target="link.target"
                      :class="link.class || ''"
                      :rel="item.nofollow ? 'nofollow' : ''"
                    >
                      {{ link.title }}
                    </a>
                  </div>
                </template>
                
                <template v-for="(figure, idx) in item.figures" :key="idx">
                  <figure class="image is-foot-figure">
                    <img :src="figure.url" :alt="figure.alt" />
                  </figure>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sections: {
    type: Array,
  }
});
</script>

<style lang="sass" scoped>
@import '/@css/base'
.section.is-vibe-foot
  background: $vibe-black
  color: $vibe-white
  padding: 7.25rem 3rem
  .columns
    width: 100%
    +mobile
      display: block
  +mobile
    padding: 5rem 1.5rem
  +widescreen
    padding: 8.75rem 3rem
  > .container
    max-width: 1200px
    width: auto
  +mobile
    .columns.is-links
      padding-top: 1.5rem
      display: flex
      
  .image.is-foot-logo
    svg
      width: 80px
      height: 73px
      +mobile
        width: 60px
      +widescreen
        width: 100px
    +mobile
      margin-top: 1rem
    .logoHidden
      clip: rect(0px, 0px, 0px, 0px)
      clip-path: inset(50%)
      height: 1px
      overflow: hidden
      position: absolute
      white-space: nowrap
      width: 1px
  .column.is-foot-section
    min-width: 140px
    padding:0 12px
    .foot-link
      width: 180px
      margin-bottom: 1.2rem
      +mobile
        width: 150px
        font-size: 14px
      a
        color: $vibe-white
    h2
      font-family: $family-head
      font-weight: $vibe-bold
      margin-bottom: 2rem
      +mobile
        margin-bottom: 1.389rem
    a
      color: $vibe-white
      &:hover
        color: $primary
    .image.is-foot-figure
      max-width: 96px
</style>
