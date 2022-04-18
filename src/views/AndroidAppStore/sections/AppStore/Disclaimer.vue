<template>
  <div v-if="isDisclaimer" class="disclaimer-container">
    <div v-if="currentTab == 'is-55'" class="info-box left-info-55">
      <div class="support-icons is-hidden-mobile">
        <svg-icon icon-name="android-app-store-vibe-store" />
        <svg-icon icon-name="android-app-store-google-store" />
      </div>
      <span class="content"
        >Vibe may not support third-party apps that require Android 7.1 or later. You can
        also add apps through the Google Play store on Vibe.</span
      >
    </div>
    <div v-else class="info-box left-info-75">
      <div class="support-icons is-hidden-mobile">
        <svg-icon icon-name="android-app-store-vibe-store" />
        <svg-icon icon-name="android-app-store-google-store-75" />
      </div>
      <span class="content"
        >You can also download apps from the Chrome web store on the Vibe Smartboard Pro
        75″.</span
      >
    </div>
    <div class="disclaimer-close-button" @click="isDisclaimer=false">
      <svg-icon icon-name="android-app-store-close-button" />
    </div>
  </div>
</template>
<script setup>
const currentTab = inject('currentTab');
const isDisclaimer = ref('true');
</script>
<style lang="sass" scoped>
@import '/@css/base'
a
  text-decoration: none
.disclaimer-container
  display: flex
  justify-content: space-between
  padding: 1rem
  background-color: #fff
  border: 1px solid #f7f7f7
  border-radius: 4px
  filter: drop-shadow(0 4px 10px rgba(0,0,0,4%))
  +tablet
    padding: 0.75rem 1.5rem
    margin-bottom: 2rem
  +mobile
    margin-bottom: 0.85rem
  .info-box
    display: flex
  .support-icons
    display: flex
    svg
      width:34px
      height:34px
      margin-left: 1rem
  .content
    color: #828282
    font-family: $vibe-family-body
    font-weight: 400
    +tablet
      margin-left: 1.5rem 
      line-height: 34px
      font-size: 14px
    +mobile
      font-size: 12px

  .disclaimer-close-button
    cursor: pointer
    display: flex
    align-items: center
    margin-left: 0.5rem
    color: $vibe-black
    &:hover
      color: $vibe-purple
    svg
      width:24px
      height:24px
</style>
