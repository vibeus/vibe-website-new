<template>
  <section class="section is-compare is-compare-in-brief">
    <div class="container">
      <h1 class="title is-section-title">{{ compare.title }}</h1>
      <div class="compare-table">
        <table class="table is-fullwidth" cellspacing="0">
          <thead>
            <tr>
              <th>
                <p>Brands</p>
                <p>55″</p>
              </th>
              <td v-for="brand in compare.brands" :key="brand.name" :class="{'is-hidden-mobile': brand.hideMobile}">
                <lazy-img
                  v-if="!brand.hide_icon"
                  class="image"
                  :src="brand.icon"
                  :alt="brand.name"
                />
                <p v-else class="brand-name">{{ brand.name }}</p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(brand, brandIndex) in compare.brands" :key="brand.name">
              <td>{{ compare.features[brandIndex] }}</td>
              <td v-for="(check, checkIndex) in brand.features" :key="check" :class="{'is-hidden-mobile': compare.brands[checkIndex].hideMobile}">
                <div class="feature-checkmark">
                  <svg
                    v-if="compare.brands[checkIndex].features[brandIndex]"
                    height="100%"
                    viewBox="0 0 28 22"
                    stroke="#66CCCC"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 8.92754L10.3333 19.0725L26 2" stroke-width="3" />
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Price</th>
              <td v-for="brand in compare.brands" :key="brand.name" :class="{'is-hidden-mobile': brand.hideMobile}">
                <p :class="{ 'campaign-price': !brand.campaign_price }">
                  {{ brand.campaign_price ? brand.campaign_price : brand.price }}
                </p>
                <p v-if="brand.campaign_price" class="original-price">
                  {{ brand.price }}
                </p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <SectionCta :cta="compare.cta" />
    </div>
  </section>
</template>
<script setup>
import SectionCta from '/@vcomp/SectionCta.vue';
/* Start Data */
const props = defineProps({
  compare: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '/@css/base'
.is-compare
  padding-top: 120px
  padding-bottom: 120px
  background-color: #fff
  .container
    flex-direction: column
    max-width: 978px
    +mobile
      max-width: unset
      width: unset
  .title
    font-size: 48px
    text-align: center
    margin-bottom: 100px

.section.is-compare.is-compare-in-brief
  font-size: .9rem
  font-family: $vibe-family-body
  +mobile
    padding: 0.75rem
  .compare-table
    +mobile
      font-size: 0.75rem
    th, td
      padding: 0.5em 0.75em
      height: 48px
    th
      font-weight: bold
    thead
      th, td
        border-bottom: none
      .image
        width: 100px
        margin: auto
        +mobile
          width: 100%
    td:not([align]),th:not([align])
      text-align: left
    td:first-child, th:first-child
      vertical-align: middle
      +mobile
        max-width: 140px
        width: 140px
    td:not(:first-child)
      text-align: center
      vertical-align: middle
    td:nth-child(2)
      background-color: $vibe-teal
      svg
        stroke: white
    thead td:nth-child(2)
      border-radius: 8px 8px 0 0
    tbody td
      border: 1px solid #dbdbdb
      border-width: 0 0 1px
    tbody tr:last-child
      td
        border-width: 0 0 2px
    tfoot td:nth-child(2)
      border-radius: 0 0 8px 8px
    tfoot
      p
        font-size: 18px
        font-weight: $vibe-bold
        line-height: 1.5
      .original-price
        font-size: 16px
        font-weight: 400
        text-decoration-line: line-through
        opacity: .5
      .campaign-price
        font-size: 16px
      svg
        width: 100%
    .feature-checkmark
      svg
        width: 18px
        +widescreen
          width: 24px
        +mobile
          width: 14px
    .brand-name
      &.large-name
        font-size: 18px
        font-weight: $vibe-bold
        +mobile
          font-size: 12px
</style>
