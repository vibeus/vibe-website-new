<template>
  <div class="default-view">
    <div class="app-list-with-header">
      <div class="level is-list-header is-mobile">Featured Apps</div>
      <ul class="app-wrapper">
        <li v-for="item in currentTab == 'is-55' ? apps55Featured : apps75Featured">
          <div class="app-item">
            <lazy-img
              class="image is-hidden-mobile"
              src="android-app-store/hero.png"
              alt=""
            />
            <div class="app-desc">
              <p class="app-name">{{ item.name }}</p>
              <p class="app-type">{{ item.type }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="app-list-with-header">
      <div class="level is-list-header is-mobile">All Apps</div>
      <ul class="app-wrapper">
        <li v-for="item in currentTab == 'is-55' ? apps55 : apps75">
          <div class="app-item">
            <!-- <lazy-img
              class="image is-hidden-mobile"
              src="android-app-store/icons/com.adobe.psmobile.png"
              alt=""
            /> -->
            <!-- <lazy-img
              class="image is-hidden-mobile"
              src="android-app-store/hero.png"
              alt=""
            /> -->
            <div class="app-desc">
              <p class="app-name">{{ item.name }}</p>
              <p class="app-type">{{ item.type }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="app-list"><ul class="app-wrapper"></ul></div>
  <div class="clear-filter"></div>
</template>
<script setup>
import { apps55, apps75 } from "/@/utils/data";
console.log("apps75: ", apps75);
console.log("apps55: ", apps55);
//test
const currentTab = ref("is-55");
const state = ref({ useCase: undefined, type: "browser" });
const apps55Featured = computed(() => apps55.filter((i) => i.featured));
console.log("apps55Featured: ", apps55Featured.value);
const apps75Featured = computed(() => apps75.filter((i) => i.featured));
</script>
<style lang="sass" scoped>
@import '/@css/base'
.app-wrapper
  display: flex
  flex-wrap: wrap
  li
    width: 33.3333%
    padding:12px
  .app-item
    padding: 16px
    border: 2px solid #e0e0e0
    border-radius: 8px
    display: flex
    align-items: center
</style>
