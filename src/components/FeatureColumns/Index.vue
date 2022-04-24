<template>
  <section class="section is-feature-columns">
    <div class="container">
      <div class="header">
        <h1 class="title is-section-title">{{ features.title }}</h1>
        <div class="content">{{ features.body }}</div>
      </div>
      <div class="columns">
        <template v-for="(featuresItem, index) in features.featuresList" :key="index">
          <ColumnsItem :itemContent="featuresItem"/>
        </template>
      </div>

      <!-- {{ with .cta }}
      {{ partial "common/section-cta" . }}
      {{ end }} -->
    </div>
  </section>
</template>

<script setup>
import ColumnsItem from './components/ColumnsItem.vue';
const props = defineProps({
  features: {
    type: Object,
    required: true
  }
});
</script>

<style lang="sass" scoped>
@import '@css/base'
.section.is-feature-columns
  background-color: $vibe-white
  padding: 120px 24px
  +mobile
    padding: 60px 24px
  .container
    display: block
    width: unset
    +fullhd
      max-width: 1200px
  .header
    line-height: 1.25
    margin-bottom: 60px
    +mobile
      margin-bottom: 40px
    .title.is-section-title
      max-width: 850px
      font-size: 50px
      line-height: 1.25
      text-align: center
      margin: auto
      +touch
        font-size: 40px
      +mobile
        font-size: 30px
    .content
      max-width: 850px
      font-size: 18px
      line-height: 1.25
      text-align: center
      margin: auto
      margin-top: 16px
      +mobile
        font-size: 16px
  .columns
    margin: -.75rem
    +mobile
      flex-direction: column
</style>
