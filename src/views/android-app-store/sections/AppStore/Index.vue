<template>
  <section class="section is-app-store">
    <div class="container">
      <div class="columns">
        <SideBar />
        <App />
      </div>
    </div>
  </section>
</template>

<script setup>
import SideBar from './components/SideBar.vue';
import App from './components/App.vue';
</script>

<style lang="sass" scoped>
@import '/@css/base'
*
  margin:0
  padding:0
.is-app-store
  padding-top: 16px
  padding-bottom: 64px
  .columns
    width: 100%
    justify-content: space-between
</style>
