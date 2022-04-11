<template>
  <section class="features">
    <div class="container">
      <h1 class="title is-section-title">{{ title }}</h1>
      <div class="columns is-multiline">
        <template v-for="(item, index) in featuresItem" :key="index">
          <div class="column is-half-tablet">
            <figure class="image">
              <lazy-img class="image"
                        :src="`security/${item.img}`"
                        :alt="`${item.img}-${index}`"
                        />
            </figure>
            <div class="content">
              <h2 class="title" v-html="item.title"></h2>
              <!-- Markdown issue: bold text not showing -->
              <p v-html="item.body"></p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const { frontmatter: fm } = useData();
const { title, featuresItem = [] } = fm._value.features;
</script>

<style lang="sass" scoped>
@import '/@css/base'
.features
  background-color: #fff
  padding: 120px 24px
  +touch
    padding: 60px 0px
  .container
    max-width: 1000px
    margin: 0 auto
    .is-section-title
      text-align: center
      +tablet
        font-size: 48px
        margin-bottom: 24px
      +mobile
        font-size: 32px
        margin-botto: 12px
    .columns
      justify-content: space-between
      +mobile
        display: block
        margin-top: 72px
      .column
        margin-top: 60px
        max-width: 412px
        padding: 12px
        +mobile
          margin: 48px auto auto
          text-align: center
        .image
          max-width: 100px
          margin-bottom: 16px
          +mobile
            margin: auto
            margin-bottom: 32px
        .content
          h2
            font-size: 24px
            margin-bottom: 12px
</style>
