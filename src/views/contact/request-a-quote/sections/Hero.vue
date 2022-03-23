<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{hero.title}}</h1>
        <div class="content">
          <span class="text">{{hero.body}}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  hero: {
    type: Object,
    required: true
  }
});
</script>
<style lang="sass" scoped>
@import '/@css/base'
.hero
  // align-items: stretch
  // display: flex
  // flex-direction: column
  // justify-content: space-between
  color: $vibe-black
  background-color: #fc0
  .hero-body
    padding: 80px 0 56px
    .title
      margin-top: 0
      margin-bottom: 1.5rem
      text-align: center
      font-size: 48px
      font-family: $family-head
      font-weight: $vibe-bold
    .content
      max-width: 678px
      margin: 0 auto
      text-align: center
      font-family: $family-body
</style>
