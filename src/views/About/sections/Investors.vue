<template>
  <section class="section is-investors">
    <div class="container">
      <h1 class="title is-section-title">
        {{ investors.title }}
      </h1>
      <div class="columns is-multiline is-mobile">
        <template
          v-for="(investor, index) in investors.items"
          :key="index"
        >
          <div class="column is-one-quarter-tablet is-half-mobile">
            <figure class="image">
              <lazy-img
                :src="investor"
                :alt="investor"
              />
            </figure>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  investors: {
    type: Object,
    reuqire: true,
    default: () => {}
  }
});
</script>


<style lang="sass" scoped>
@import '@css/base'
.section.is-investors
  padding: 120px 24px
  background-color: $vibe-purple
  +mobile
    padding-top: 60px
    padding-bottom: 60px
  .container
    max-width: 1120px
    .title
      text-align: center
      margin-bottom: 72px
      color: white
    .columns
      margin: -.75rem
      .column
        padding: .75rem
        width: 22%
        +tablet-only
          width: 20%
        +mobile
          width: 40%
    .image
      max-width: 260px
      margin: auto
  
</style>
