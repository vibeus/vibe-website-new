<template>
  <section class="section is-app-store">
    <div class="container">
      <div class="columns">
        <SideBar />
        <div>
          <App />
          <BottomCta class="bottom-cta" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SideBar from "./SideBar.vue";
import App from "./App.vue";
import BottomCta from "./BottomCta.vue";
import { category, apps55, apps75 } from "/@/utils/data";
console.log("category: ", category);
console.log("apps75: ", apps75);
console.log("apps55: ", apps55);
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
  .bottom-cta
    margin-top: 80px

</style>
