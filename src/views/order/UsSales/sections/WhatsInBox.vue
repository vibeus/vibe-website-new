<template>
  <section class="section is-what-in-box" id="what-in-box">
    <div class="vb-container">
      <div class="title is-section-title">{{ what_in_box.title }}
      </div>
      <div class="f-row">
        <template v-for="(item, index) in what_in_box.items" :key="index">
          <div class="accessory-box">
            <figure class="image">
              <lazy-img :src="`${item.figure}`"
                        :alt="`${item.figure}-${index}`"
              />
            </figure>
            <h3 class="title">{{ item.title }}</h3>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const { frontmatter: fm } = useData();
const { what_in_box } = fm._value;

</script>

<style lang="sass" scoped>
@import "@css/base"
.section.is-what-in-box
  padding: 120px 24px
  background: rgba(244, 244, 244, .5)
  +mobile
    padding-top: 60px
    padding-bottom: 32px
  .title.is-section-title
    margin-bottom: 56px
    text-align: center
    +mobile
      margin-bottom: 32px
  .vb-container
    margin: 0 auto
    +mobile
      margin: -12px
    +tablet
      max-width: 90vw
    +widescreen
      max-width: 78.4vw
    +fullhd
      max-width: 1130px
    .f-row
      justify-content: space-around
      +mobile 
        flex-wrap: wrap
    .accessory-box
      // height: 235px
      margin-bottom: 1rem
      &:first-child
        max-width: 280px
        flex-shrink: 2
        img
          +mobile
            width: 237px
        +mobile
          width: 327px
          margin-bottom: 1rem
          max-width: unset
      &:not(:first-child)
        width: 200px
        margin-left: .75rem
        +mobile
          width: 160px  
          margin-left: 0
      &:nth-child(2)
        img
          max-width: 134px 
          max-height: 134px     
      &:nth-child(3)
        img
          max-width: 125px 
          max-height: 125px     
      &:nth-child(4)
        img
          +desktop
            max-width: 112px 
            max-height: 112px
      &:nth-child(5)
        img
          max-width: 72px 
          max-height: 100px      
      .image
        height: 196px
        padding: 1rem
        background: #fff
        display: flex
        +tablet-only
          height: 150px
        &:first-child
          +mobile 
            height: 177px
        &:not(:first-child)
          +mobile
            height: 126px
        img
          margin: auto     
      .title
        margin-top: 1rem
        font-size: 16px
        line-height: 23px
        color: #202020
        text-align: center
</style>
