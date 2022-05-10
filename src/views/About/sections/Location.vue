<template>
  <section class="section is-locations">
    <div class="container">
      <h1 class="title is-section-title">
        {{ locations.title }}
      </h1>
      <div class="columns is-multiline is-mobile">
        <template
          v-for="(city, index) in locations.cities"
          :key="index"
        >
          <div class="column is-one-third">
            <div class="title city">
              <figure class="image">
                <lazy-img
                  :src="city.logo"
                  :alt="city.logo"
                />
              </figure>
              <p class="name">
                {{ city.name }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  locations: {
    type: Object,
    require: true,
    default: () => {}
  }
});
</script>

<style lang="sass" scoped>
@import '@css/base'
.section.is-locations
  padding: 120px 24px
  background-color: $vibe-white
  +mobile
    padding-top: 60px
    padding-bottom: 60px
  .container
    max-width: 1010px
  .title
    text-align: center
    margin-bottom: 72px
  .columns
    justify-content: center
    align-items: flex-end
    margin: -12px
    .column
      +mobile
        width: 24.33333%
        padding: 12px
  .city
    text-align: center
    font-size: 24px
    +mobile
      font-size: 16px
    .image
      margin: auto
      max-width: 175px
    .name
      margin-top: 24px
</style>
