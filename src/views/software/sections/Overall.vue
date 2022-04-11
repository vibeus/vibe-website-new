<template>
  <section class="section overall">
    <div class="container">
      <h1 class="overall-title">{{ overall.title }}</h1>
      <ul class="overall-wrapper">
        <li v-for="item in overall.items" :key="item.title" class="overall-item">
          <lazy-img class="image" :src="item.figure" :alt="item.alt_text" />
          <h2 class="item-title">{{ item.title }}</h2>
          <div class="content">
            {{ item.body }}
          </div>
        </li>
      </ul>
      <div v-if="overall.cta" class="cta">
        <a :href="overall.cta.url">{{ overall.cta.title }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  overall: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '/@css/base'
.overall
  padding: 76px 24px 120px
  text-align: center
  background-color: #fff
  .container
    flex-direction: column
    align-items: center
  .overall-title
    font-size:48px
    margin-bottom: 30px
    font-weight: $vibe-bold
    font-family: $vibe-family-head
  .overall-wrapper
    margin-top: 60px
    display: flex
    justify-content: space-between
    width: 100%
    .overall-item
      display: flex
      flex-direction: column
      align-items: center
      .item-title
        max-width: 284px
        font-size: 30px
        line-height: 38px
        font-family: $vibe-family-head
        font-weight: $vibe-bold
        text-align: center
        margin-top: 23px
        margin-bottom: 30px
      .content
        max-width: 300px
      .image
        max-width: 210px
  .cta
    margin-top: 32px
    text-align: center
    font-family: $vibe-family-body
    +tablet
      font-weight: $vibe-bold
    a:not(:hover)
      color: $vibe-purple
</style>
