<template>
  <div class="disclaimer-container">
    <div v-if="currentTab == 'is-55'" class="info-box left-info-55">
      <div class="support-icons is-hidden-mobile"></div>
      <span class="content"
        >Vibe may not support third-party apps that require Android 7.1 or later. You can
        also add apps through the Google Play store on Vibe.</span
      >
    </div>
    <div v-else class="info-box left-info-75">
      <div class="support-icons is-hidden-mobile"></div>
      <span class="content"
        >You can also download apps from the Chrome web store on the Vibe Smartboard Pro
        75″.</span
      >
    </div>
    <div class="disclaimer-close-button"></div>
  </div>
</template>
<script setup>
const currentTab = inject("currentTab");
</script>
<style lang="sass" scoped>
@import '/@css/base'
*
  margin:0
  padding:0
a
  text-decoration: none
</style>
