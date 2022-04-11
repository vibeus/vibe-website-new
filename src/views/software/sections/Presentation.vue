<template>
  <section class="section presentation">
    <div class="container">
      <h1 class="title">{{ presentation.title }}</h1>
      <div
        v-for="(pre, index) in presentation.items"
        :key="pre.title"
        :class="`columns is-vcentered is-index-${index + 1}`"
      >
        <div class="column is-image">
          <lazy-img class="image" :src="pre.figure" alt="" />
        </div>
        <div class="column">
          <h2 class="title is-subtitle">{{ pre.title }}</h2>
          <div class="content" v-html="pre.body"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  presentation: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '/@css/base'
.presentation
  padding: 120px 24px
  background-color: #fff
  +mobile
    padding: 60px 24px
  .container
    flex-direction: column
  .is-index-1
    flex-direction: row-reverse
    max-width: 1108px
    min-height: 465px
  .is-index-2
    .is-image
      .image
        box-shadow: 10px 10px $vibe-purple
        margin-right: 10px
        margin-bottom: 10px
        +tablet
          width: 567px
          margin-right: 32px
  .is-image
    .image
      display: block
      width: 100%
</style>
