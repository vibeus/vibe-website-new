<template>
  <div class="column is-app-root">
    <div v-if="!isFilter" class="default-view">
      <div class="app-list-with-header">
        <div class="level is-list-header is-mobile">Featured Apps</div>
        <ul class="app-wrapper">
          <li
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
          <li v-for="item in currentTab == 'is-55' ? apps55 : apps75" :key="item.name">
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
    <div class="clear-filter" v-if="isFilter"></div>
  </div>
</template>
<script setup>
import { category, apps55, apps75 } from "/@/utils/data";
console.log("category: ", category);
console.log("apps75: ", apps75);
console.log("apps55: ", apps55);

/* Start Data */
const currentTab = inject("currentTab");

const state = inject("state");

const searchTerm = inject("searchTerm");

const isFilter = inject("isFilter");

/* End Data */
// const isFilter = computed(() => {
//   if (Object.keys(state.value).length === 0) {
//     return false;
//   } else {
//     return true;
//   }
// });
const apps55Featured = computed(() => apps55.filter((i) => i.featured));
const apps75Featured = computed(() => apps75.filter((i) => i.featured));

const apps55Filter = ref([]);
watchEffect(() => {
  console.log('state.value: ', state.value);
  if (searchTerm) {
    return apps55.filter(
      (i) => i.name.toLowerCase().indexOf(searchTerm.value.toLowerCase()) >= 0
    );
  } else if (state.value.useCase) {
    return apps55.filter((i) => i.type === state.value.useCase);
  } else if (state.value.type) {
    return apps55.filter((i) => i.type === state.value.type);
  } else {
    return apps55;
  }
});
console.log("apps55Filter: ", apps55Filter.value);
const apps75Filter = computed(() => {
  if (searchTerm) {
    return apps75.filter(
      (i) => i.name.toLowerCase().indexOf(searchTerm.value.toLowerCase()) >= 0
    );
  } else if (state.value.useCase) {
    return apps75.filter((i) => i.type === state.value.useCase);
  } else if (state.value.type) {
    return apps75.filter((i) => i.type === state.value.type);
  } else {
    return apps75;
  }
});
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
  font-family-body: $vibe-family-body
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
      width: 33.3333%
      padding:12px
      list-style: none
    .app-item
      padding: 16px
      border: 2px solid #e0e0e0
      border-radius: 8px
      display: flex
      align-items: center
      .app-name
        font-weight: $vibe-bold
        margin-bottom: 8px
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .is-app-icon
        width: 60px
        +tablet
          margin-right: 1rem
</style>
