<template>
  <div class="get-in-touch">
    <div class="contact">
      <div
        v-for="item in city.items"
        :key="item.icon"
        class="content"
      >
        <span class="icon">
          <svg-icon
            :icon-name="item.icon"
            :alt="item.alt"
          />
        </span>
        <div v-html="item.text"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = 'Get in touch';
const map =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.8480341567974!2d-122.13209588383444!3d47.629085194416774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906da16976f31b%3A0xbccf64a89abf4f68!2s2018%20156th%20Ave%20NE%20%23165%2C%20Bellevue%2C%20WA%2098007%2C%20USA!5e0!3m2!1sen!2shk!4v1631155255512!5m2!1sen!2shk';
const city = {
  name: 'Bellevue',
  items: [
    {
      icon: 'get-in-touch-phone',
      text: '<a href="tel:+18643352007">+1 (864) 335-2007</a>',
    },

    {
      icon: 'get-in-touch-email',
      text: '<a href="mailto:info@vibe.us">info@vibe.us</a>',
    },
    {
      icon: 'get-in-touch-map-marker',
      text: '2018 156th Ave NE, Office 165,Bellevue, WA 98007',
    },
  ],
};
</script>

<style lang="sass" scoped>
@import '@css/base'
.get-in-touch
  margin: 48px auto 0
  max-width: 680px
  width: 100%
  padding-top: 16px
  border-top: 0.5px solid #b4b4b4
  font-family:$family-body
  .contact
    display: flex
    flex-direction: column
    +tablet
      flex-direction: row
      justify-content: space-between
      align-items: center
    .content
      font-size: 12px
      display: flex
      align-items: center
      margin: 0
      +tablet
        margin: 0 6px
        font-size: 13px
      +mobile
        &:not(:last-of-type) 
          margin-bottom: 8px

.icon
  align-items: center
  display: inline-flex
  justify-content: center
  margin-right: 4px
  height: 1.5rem
  width: 1.5rem
  svg
    width: 20px
    height: 20px
</style>
