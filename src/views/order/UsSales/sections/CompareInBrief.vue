<template>
  <section class="section is-compare is-compare-in-brief">
    <div class="container">
      <h1 class="title is-section-title">{{ compare.title }}</h1>
      <div class="compare-table">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>
                <p>Brands</p>
                <p>55″</p>
              </th>
              <td v-for="brand in compare.brands" :key="brand.name">
                <!-- icon -->
                <!-- name -->
                <p class="brand-name large-name">{{ brand.name }}</p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(brand, index) in compare.brands" :key="brand.name">
              <td>{{ compare.features[index] }}</td>
              <td v-for="check in brand.features" :key="check">
                <div class="feature-checkmark">
                  <svg
                    v-if="check"
                    width="18"
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
              <td v-for="brand in compare.brands" :key="brand.name">
                <p class="campaign-price">{{ brand.campaign_price }}</p>
                <p class="original-price">{{ brand.price }}</p>
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
import SectionCta from "/@vcomp/SectionCta.vue";
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
  .container
    flex-direction: column
  .title
    font-size: 48px
    text-align: center
    margin-bottom: 100px

.section.is-compare.is-compare-in-brief
  +mobile
    padding: 0.75rem
  .compare-table
    +mobile
      font-size: 0.75rem
    th, td
      +touch
        padding: 4px
    thead
      th, td
        border-bottom: none
      .image
        width: 100px
        margin: auto
        +tablet-only
          width: 80px
        +mobile
          width: 60px
    td:first-child, th:first-child
      vertical-align: middle
      +touch
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
    tfoot td:nth-child(2)
      border-radius: 0 0 8px 8px
    tfoot
      p
        font-size: 18px
        font-weight: 700
      .original-price
        font-size: 16px
        font-weight: 400
        text-decoration-line: line-through
        opacity: .5
      .campaign-price
        font-size: 16px
      svg
        width: 100%
    .icon.is-feature-check
      .image
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

  &.is-education
    .compare-table
      border: 1px solid #dbdbdb
      thead
        .image
          margin: initial
          width: auto
          max-width: 120px
          +mobile
            max-width: 64px
        th, td
          border-bottom: 1px solid #dbdbdb
          vertical-align: top
        td:nth-child(2)
          border-radius: 0
      th, td
        text-align: left
        &:not(:last-child)
          border-right: 1px solid #dbdbdb
        &:nth-child(2)
          background-color: $vibe-white
          svg
            stroke: $vibe-teal
      +tablet
        tr td:first-child
          width: 180px

      .brand-name
        margin-top: 16px

      .feature-checkmark
        display: flex
        align-items: center
        justify-content: space-between
        .feature-icons
          max-width: 100px
          display: flex
          flex-wrap: wrap
          .icon
            margin: 4px 2px
            width: 20px
            height: 20px
            +mobile
              width: 16px
              height: 16px
</style>
