<template>
  <section class="section is-benefits">
    <div class="container">
      <div class="header">
        <h1 class="title is-section-title">
          {{ benefits.title }}
        </h1>
       
        <div class="body">
          {{ benefits.body }}
        </div>
      </div>
      <div class="benefits-grid">
        <template
          v-for="(item, index) in benefits.features"
          :key="index"
        >
          <div :class="['is-benefit', `is-benefit-${index}`]">
            <figure class="image">
              <lazy-img :src="item.figure"></lazy-img>
            </figure>
            <h2 class="title">
              {{ item.title }}
            </h2>
            <div class="content">
              {{ item.body }}
            </div>
          </div>
        </template>
      </div>
    </div>
    <SectionCta :cta="benefits.cta" />
  </section>
</template>

<script setup>
import SectionCta from '@vcomp/SectionCta.vue';
const props = defineProps({
  benefits: {
    type: Object,
    required: true
  }
});
</script>

<style lang="sass" scoped>
@import '@css/base'
.section.is-benefits
  padding: 120px 24px
  +mobile
    padding-top: 60px
    padding-bottom: 60px 
  .container
    display: block
  .header
    line-height: 1.25
    margin-bottom: 80px
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
    .body
      max-width: 850px
      font-size: 18px
      line-height: 1.25
      text-align: center
      margin: auto
      margin-top: 16px
      +mobile
        font-size: 16px
  .benefits-grid
    display: grid
    grid-template-columns: repeat(22, 1fr)
    grid-auto-rows: minmax(280px, auto)
    row-gap: 48px
    +mobile
      display: block
  .is-benefit
    margin: auto
    margin-top: 0
    display: flex
    flex-direction: column
    align-items: center
    +mobile
      &:not(:first-child)
        margin-top: 36px
    .image
      margin: auto
      margin-bottom: 32px
      width: 78px
      +touch
        margin-bottom: 24px
      +mobile
        margin-bottom: 8px
        width: 60px
    .title
      text-align: center
      font-size: 24px
      line-height: 1.5
      margin-bottom: 16px
      max-width: 300px
      +touch
        font-size: 22px
      +mobile
        font-size: 20px
        margin-bottom: 8px
    .content
      max-width: 340px
      text-align: center
      font-size: 18px
      line-height: 1.5
      +mobile
        font-size: 16px
    +tablet
      +until-widescreen
        .title
          font-size: 20px
        .body
          font-size: 16px
  .is-benefit-0
    grid-column: 1 / 7
    grid-row: 1
  .is-benefit-1
    grid-column: 9 / 15
    grid-row: 1
  .is-benefit-2
    grid-column: 17 / 23
    grid-row: 1
  .is-benefit-3
    grid-column: 4 / 10
    grid-row: 2
  .is-benefit-4
    grid-column: 14 / 20
    grid-row: 2
  .cta.is-section-cta
    padding-top: 40px
    .button
      +tablet
        +until-widescreen
          min-width: 200px
          height: auto
</style>
