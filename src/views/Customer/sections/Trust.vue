<template>
  <section class="section is-trust">
    <div class="container">
      <ul class="logo-wrap">
        <li v-for="logo in trust.figure" :key="logo.name">
          <lazy-img
            class="image is-logo"
            :src="logo.url"
            :alt="logo.name"
          />
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  trust: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.is-trust
  background-color: #fff
  .logo-wrap
    display: flex
    flex-wrap: wrap
    max-width: 1040px
    margin: auto
    li
      box-sizing: border-box
      padding: 12px
      width: 25%
      +mobile
        width: 50%
      .image
        width:100%
      
</style>
