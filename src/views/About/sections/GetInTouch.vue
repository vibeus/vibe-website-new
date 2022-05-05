<template>
  <section
    id="contact"
    class="section is-get-touch"
  >
    <div class="container">
      <h1 class="title is-section-title">
        {{ info.title }}
      </h1>
      <div class="columns">
        <div class="column is-map">
          <GoogleMap :src="info.map" />
        </div>
        <div class="column is-contact is-one-third-desktop is-two-fifths-tablet">
          <div class="contact">
            <h2 class="title">
              {{ info.city.name }}
            </h2>
            <template
              v-for="(item,index) in info.city.items"
              :key="index"
            >
              <div class="content">
                <span class="icon">
                  <svg-icon
                    :icon-name="item.icon" 
                    alt=""
                  />
                </span>
                <md-format :content="item.text" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import GoogleMap from '@vcomp/GoogleMap.vue';
const props = defineProps({
  info: {
    type: Object,
    require: true,
    default: () => {}
  }
});
</script>

<style lang="sass" scoped>
@import '@css/base'
.section.is-get-touch
  padding: 120px 24px
  +mobile
    padding-top: 60px
    padding-bottom: 60px
  .container
    max-width: 1160px
  .title.is-section-title
    text-align: center
    margin-bottom: 72px
  .columns
    margin: 0
    +mobile
      display: block
  .column
    padding: 0
  .column.is-map
    height: 570px
  .column.is-contact
    background-color: $vibe-white
    padding: 55px 16px 35px 16px
    +widescreen
      padding-left: 60px
    display: flex
    flex-direction: column
    justify-content: space-between
  .contact
    .title
      font-size: 48px
      margin-bottom: 24px
    .content
      margin-bottom: 24px
      p:not(:last-child)
        margin-bottom: 4px
      .icon
        display: block
    .image.is-qr-support
      margin-top: -8px
      max-width: 95px

</style>
