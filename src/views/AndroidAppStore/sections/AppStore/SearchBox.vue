<template>
  <div class="control is-search-box has-icons-left">
    <div
      class="select-item has-dropdown is-hidden-tablet"
      @click="showCate=!showCate"
    >
      <span class="select-link">{{ currentCateName }}</span>
      <span class="icon select-icon is-small">
        <svg-icon icon-name="android-app-store-dropdown-icon" />
      </span>
      <div
        v-show="showCate"
        id="dropdown-section"
        class="select-dropdown"
      >
        <a
          class="select-link category-link is-all"
          @click="
            chooseCate({});
            changeCurrentCateName();
          "
        >All Apps</a>
        <template
          v-for="item in category"
          :key="item.name"
        >
          <template
            v-for="i in item.items"
            :key="i.id"
          >
            <a
              v-if="!i.hidden"
              :id="i.id"
              class="select-link category-link"
              :class="`is-${item.id}`"
              href="#"
              @click="
                chooseCate({ key: item.id, value: i.id });
                changeCurrentCateName(i.name);
              "
            >
              {{ i.name }}
              <span
                v-if="currentItem == `${item.id}=${i.id}`"
                class="icon is-right"
              >
                <svg-icon icon-name="android-app-store-mark-icon" />
              </span>
            </a>
          </template>
        </template>
      </div>
    </div>
    <div class="input-box">
      <input
        id="search-box"
        v-model="searchTerm"
        class="input is-rounded"
        type="text"
        placeholder="Search your favorite apps..."
      /><span class="icon is-left"><svg-icon icon-name="android-app-store-magnify" /></span><a
        class="clean-button is-hidden-tablet"
        @click="searchTerm = ''"
      >
        <svg-icon icon-name="android-app-store-clean-input-icon" />
      </a>
    </div>
  </div>
</template>
<script setup>
import { category, apps55, apps75 } from '@/data/app';
const searchTerm = inject('searchTerm');
const apps55Filter = inject('apps55Filter');
const apps75Filter = inject('apps75Filter');
const state = inject('state');
const isSearch = inject('isSearch');
const currentItem = inject('currentItem');
//
const setFilter = inject('setFilter');
const chooseCate = inject('chooseCate');

const currentCateName = ref('Select app category');
const showCate = ref(false);

watchEffect(() => {
  console.log('searchTerm: ', searchTerm.value);
  apps55Filter.value = apps55.filter(
    (i) => i.name.toLowerCase().indexOf(searchTerm.value.toLowerCase()) >= 0
  );
  apps75Filter.value = apps75.filter(
    (i) => i.name.toLowerCase().indexOf(searchTerm.value.toLowerCase()) >= 0
  );
  if (searchTerm.value) {
    isSearch.value = true;
  } else if (state.value.useCase) {
    setFilter('category');
  } else if (state.value.type) {
    setFilter('type');
  } else {
    isSearch.value = false;
  }
});
const changeCurrentCateName = (data) => {
  if (data) {
    currentCateName.value = data;
  } else {
    currentCateName.value = 'Select app category';
  }
};
</script>
<style lang="sass" scoped>
@import '@css/base'
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
      opacity:.6
  .input.is-rounded
    border-radius: 9999px
    padding-left: calc(calc(0.75em - 1px) + 0.375em)
    padding-right: calc(calc(0.75em - 1px) + 0.375em)
.control.is-search-box
  margin-bottom: 3rem
  position: relative
  +mobile
    display: flex
    margin-bottom: 1.5rem
  .input
    +mobile
      max-width: 43px
      height: 43px
      padding: 0
  .select-link
    opacity: .6
  #search-box
    border: 2px solid #e0e0e0
  .select-item
    display: flex
    justify-content: space-between
    align-items: center
    min-height: 43px
    padding-left: 1rem
    flex-grow: 1
    margin-right: 1rem
    border-radius: 53px
    background: #f2f2f2
    border: 1px solid #e0e0e0
    z-index: 1
    .select-icon
      width:34px
      height:34px
  // .select-item:hover
  //   .select-dropdown
  //     display: block
  .select-dropdown
    margin-top: 0.5rem
    background-color: #fff
    border-radius: 8px
    box-shadow: 0 12px 15px rgb(0 0 0 / 8%), 0 -1px 2px rgb(0 0 0 / 5%)
    // display: none
    font-size: .875rem
    left: 8px
    min-width: 72%
    max-height: 288px
    position: absolute
    overflow-y: scroll
    top: 100%
    z-index: 1
    .category-link
      display: flex
      justify-content: space-between
      padding: 10px 24px
      text-decoration: none
    .icon
      color: $vibe-purple

.control.has-icons-left
  .input
    padding-left: 2.5em
  .icon.is-left
    position: absolute
    left: 0
    width: 2.5em
    z-index: 1
    margin-left: 2.5px

.clean-button
  display: none
  align-items: center
  position: absolute
  z-index: 1
  right: 0
  border: unset
  background-color: transparent
  margin-right: 0.5rem
  padding: 0
  svg
    width:24px
    height:24px
+mobile
  .input-box:hover
    position: absolute
    display: flex
    width:100%
    .input
      max-width: 100%
      height: 43px
      padding-left: 2.5rem
      box-shadow: unset
      border-color: #e0e0e0
      color: #111
      z-index: 1
    .clean-button
      display: flex
</style>
