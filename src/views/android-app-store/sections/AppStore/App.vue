<template>
  <div class="column is-app-root">
    <SearchBox />
    <div v-if="!isFilter && !isSearch" class="default-view">
      <div class="app-list-with-header">
        <div class="level is-list-header is-mobile">Featured Apps</div>
        <ul class="app-wrapper">
          <li
            class="column is-one-third-desktop is-half-tablet is-half-mobile"
            v-for="item in currentTab == 'is-55' ? apps55Featured : apps75Featured"
            :key="item.name"
          >
            <div class="app-item">
              <lazy-img
                class="image is-app-icon"
                :src="`android-app-store/icons/${item.id}.png`"
                alt=""
              />
              <div class="app-desc">
                <p class="app-name">{{ item.name }}</p>
                <p class="app-type">
                  {{ category[1].items.find((x) => x.id === item.type).name }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="app-list-with-header">
        <div class="level is-list-header is-mobile">All Apps</div>
        <ul class="app-wrapper">
          <li
            class="column is-one-third-desktop is-half-tablet is-half-mobile"
            v-for="item in currentTab == 'is-55' ? apps55 : apps75"
            :key="item.name"
          >
            <div class="app-item">
              <lazy-img
                class="image is-app-icon"
                :src="`android-app-store/icons/${item.id}.png`"
                alt=""
              />
              <div class="app-desc">
                <p class="app-name">{{ item.name }}</p>
                <p class="app-type">
                  {{ category[1].items.find((x) => x.id === item.type).name }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="app-list">
      <ul class="app-wrapper">
        <li
          v-for="item in currentTab == 'is-55' ? apps55Filter : apps75Filter"
          :key="item.name"
        >
          <div class="app-item">
            <lazy-img
              class="image is-app-icon"
              :src="`android-app-store/icons/${item.id}.png`"
              alt=""
            />
            <div class="app-desc">
              <p class="app-name">{{ item.name }}</p>
              <p class="app-type">
                {{ category[1].items.find((x) => x.id === item.type).name }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="clear-filter" v-if="isFilter && !isSearch">
      <button class="button is-rounded is-black is-outlined" @click="clearFilter">
        Clear Filter
      </button>
    </div>
    <BottomCta class="bottom-cta" />
  </div>
</template>
<script setup>
import { category, apps55, apps75 } from "/@/utils/data";
import SearchBox from "./SearchBox.vue";
import BottomCta from "./BottomCta.vue";
console.log("category: ", category);
console.log("apps75: ", apps75);
console.log("apps55: ", apps55);

/* Start Data */
const currentTab = inject("currentTab");
const isFilter = inject("isFilter");
const isSearch = inject("isSearch");
const apps55Filter = inject("apps55Filter");
const apps75Filter = inject("apps75Filter");
const setState = inject("setState");
const currentItem = inject("currentItem");
/* End Data */
const apps55Featured = computed(() => apps55.filter((i) => i.featured));
const apps75Featured = computed(() => apps75.filter((i) => i.featured));

const clearFilter = () => {
  setState({});
  currentItem.value = "";
};
</script>
<style lang="sass" scoped>
@import '/@css/base'
*
  margin: 0
  padding: 0
.is-app-root
  color: $vibe-black
  max-width: 868px
  flex-basis: 0
  flex-grow: 1
  flex-shrink: 1
  font-family: $vibe-family-body
  .app-list-with-header:not(:first-child)
    margin-top: 40px
  .is-list-header
    font-size: 24px
    font-family: $vibe-family-head
    font-weight: $vibe-bold
    margin-bottom: 1.5rem
  .app-wrapper
    display: flex
    flex-wrap: wrap
    margin-left: -0.75rem
    li
      padding:12px
      list-style: none
    .app-item
      padding: 16px
      border: 2px solid #e0e0e0
      border-radius: 8px
      display: flex
      align-items: center
      +mobile
        flex-direction: column
        text-align: center
      .app-name
        font-weight: $vibe-bold
        margin-bottom: 8px
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .app-type
        font-size: 14px
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .is-app-icon
        width: 60px
        +tablet
          margin-right: 1rem
        +mobile
          margin-bottom: 0.5rem
  .clear-filter
    text-align: center
  .button.is-black.is-outlined
    cursor: pointer
    &:hover
      background-color: #0a0a0a
      border-color: #0a0a0a
      color: #fff
  .bottom-cta
    margin-top: 80px
</style>
