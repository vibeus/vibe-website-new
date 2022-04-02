<template>
  <div class="control is-search-box has-icons-left">
    <div class="select-item has-dropdown is-hidden-tablet">
      <span class="select-link">Select app category</span
      ><span class="icon select-icon is-small"
        ><img src="/img/android-app-store/dropdown-icon.svg"
      /></span>
      <div class="select-dropdown" id="dropdown-section">
        <a class="select-link default-link category-link is-all">All Apps</a>
        <div v-for="item in category" :key="item.name">
          <div v-for="i in item.items" :key="i.id" class="type-item">
            <a
              v-if="!i.hidden"
              class="select-link"
              :class="currentItem == `${item.id}=${i.id}` ? 'is-active' : ''"
              href="#"
              @click="changeSideBar({ key: item.id, value: i.id })"
              >{{ i.name }}</a
            >
          </div>
        </div>
        <a class="select-link category-link is-use-case" id="remote">
          Remote collaboration
          <span class="icon is-right">
            <img src="/img/android-app-store/mark-icon.svg" /> </span
        ></a>
      </div>
    </div>
    <div class="input-box">
      <input
        class="input is-rounded"
        id="search-box"
        type="text"
        placeholder="Search your favorite apps..."
        v-model="searchTerm"
      /><span class="icon is-left"
        ><svg-icon icon-name="android-app-store-magnify" /></span
      ><a class="clean-button is-hidden-tablet">
        <svg-icon icon-name="android-app-store-clean-input-icon" />
      </a>
    </div>
  </div>
</template>
<script setup>
import {  category,apps55, apps75 } from "/@/utils/data";
const searchTerm = inject("searchTerm");
const apps55Filter = inject("apps55Filter");
const apps75Filter = inject("apps75Filter");
const state = inject("state");
const isSearch = inject("isSearch");
//
const setFilter = inject("setFilter");

watchEffect(() => {
  console.log("searchTerm: ", searchTerm.value);
  apps55Filter.value = apps55.filter(
    (i) => i.name.toLowerCase().indexOf(searchTerm.value.toLowerCase()) >= 0
  );
  apps75Filter.value = apps75.filter(
    (i) => i.name.toLowerCase().indexOf(searchTerm.value.toLowerCase()) >= 0
  );
  if (searchTerm.value) {
    isSearch.value = true;
  } else if (state.value.useCase) {
    setFilter("category");
  } else if (state.value.type) {
    setFilter("type");
  } else {
    isSearch.value = false;
  }
  //
});
</script>
<style lang="sass" scoped>
@import '/@css/base'
.input-box
  position: relative
  display: flex
  align-items: center
  .input
    box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%)
    max-width: 100%
    width: 100%
    font-size: 1rem
    height: 2.5em
    padding-bottom: calc(0.5em - 1px)
    padding-top: calc(0.5em - 1px)
    font-family: $vibe-family-body
    &::-webkit-input-placeholder
      color: #B8B8B8

  .input.is-rounded
    border-radius: 290486px
    padding-left: calc(calc(0.75em - 1px) + 0.375em)
    padding-right: calc(calc(0.75em - 1px) + 0.375em)
.control.is-search-box
  margin-bottom: 3rem
  #search-box
    border: 2px solid #e0e0e0

.control.has-icons-left
  .input
    padding-left: 2.5em
  .icon.is-left
    position: absolute
    left: 0
    width: 2.5em
</style>
