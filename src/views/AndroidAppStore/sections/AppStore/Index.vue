<template>
  <section class="section is-app-store">
    <div class="container">
      <Disclaimer />
      <div class="columns">
        <SideBar />
        <div>
          <App />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Disclaimer from './Disclaimer.vue';
import SideBar from './SideBar.vue';
import App from './App.vue';
import { category, apps55, apps75 } from '@/data/app';
</script>

<style lang="sass" scoped>
@import '@css/base'
.is-app-store
  padding-top: 16px
  padding-bottom: 64px
  background-color: #fff
  .container
    display: block
    max-width: 1200px
  .columns
    width: 100%
    justify-content: space-between
    +tablet
      padding-top: .75rem
</style>
