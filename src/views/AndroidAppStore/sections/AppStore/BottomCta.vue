<template>
  <div class="bottom-cta">
    <h2 class="title">
      Want Something Else?
    </h2>
    <div
      v-if="currentTab == 'is-55'"
      class="content is-55-content"
    >
      <p>
        We’re constantly adding new apps, but your favorites may already be compatible.
      </p>
      <p>
        You can try adding Apps through the Google Play store on Vibe. When using Vibe in
        experimental mode, you can enable the Google Play store on your device. Once this
        has been set up on your Vibe, you can then download pretty much any Android
        application that is available in the Google Play store. This includes some of the
        most popular apps like Google Meet, Google Classroom, Google Calendar, etc. Not
        all Android apps are compatible with Vibe, but most should work well.
      </p>
      <p>
        To learn more about setting up the Google Play Store,
        <a
          href="https://knowledge.vibe.us/how-to-use-google-services-on-vibe?__hstc=181257784.7886267f24060b885851a5e645cd9516.1647495764483.1648801529695.1648804688957.29&amp;__hssc=181257784.3.1648804688957&amp;__hsfp=1063740896"
        >please see this article</a>.
      </p>
      <p>
        For more information on using Google Meet,
        <a
          href="https://knowledge.vibe.us/how-to?__hstc=181257784.7886267f24060b885851a5e645cd9516.1647495764483.1648801529695.1648804688957.29&amp;__hssc=181257784.3.1648804688957&amp;__hsfp=1063740896"
        >please see this article</a>.
      </p>
      <p>Let us know if there are other apps that you need!</p>
    </div>
    <div
      v-else
      class="content is-75-content"
    >
      <p>
        We’re constantly adding new apps, but your favorites may already be compatible.
      </p>
      <p>For apps in the Chrome Web Store or online web version apps, you can create a</p>
      <p>
        shortcut for faster access next time. To learn more about adding app shortcuts,
        <a
          href="https://knowledge.vibe.us/add-app-shortcuts-75?__hstc=181257784.7886267f24060b885851a5e645cd9516.1647495764483.1648801529695.1648804688957.29&amp;__hssc=181257784.3.1648804688957&amp;__hsfp=1063740896"
        >please see this article</a>.
      </p>
      <p>Let us know if there are other apps that you need!</p>
    </div>
    <div class="cta">
      <button
        class="button is-black is-rounded is-large"
        href="/contact/"
      >
        Contact Us
      </button>
    </div>
  </div>
</template>
<script setup>
const currentTab = inject('currentTab');
</script>
<style lang="sass" scoped>
@import '@css/base'
a
  text-decoration: none
  &:hover
    color: #66c
.bottom-cta
  color: $vibe-black
  .title
    margin-bottom: 1.5rem
    border: none
    font-size: 24px
    font-family: $vibe-family-head
    font-weight: $vibe-bold
    line-height: 1.125
  .content
    margin-bottom: 32px
    font-family: $vibe-family-body
  .button
    &:hover
      cursor: pointer
    +mobile
      display: block
</style>
