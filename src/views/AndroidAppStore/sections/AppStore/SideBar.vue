<template>
  <div class="is-side-bar is-hidden-mobile">
    <h2 class="title">
      Marketplace
    </h2>
    <div
      v-for="item in category"
      :key="item.name"
    >
      <h3 class="subtitle">
        <a
          class="side-bar-link is-all"
          href="#"
          @click="chooseCate({})"
        >{{
          item.name
        }}</a>
      </h3>
      <div
        v-for="i in item.items"
        :key="i.id"
        class="type-item"
      >
        <a
          v-if="!i.hidden"
          class="side-bar-link"
          :class="currentItem == `${item.id}=${i.id}` ? 'is-active' : ''"
          href="#"
          @click="chooseCate({ key: item.id, value: i.id })"
        >{{ i.name }}</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { category, apps55, apps75 } from '@/data/app';

// const currentTab = inject('currentTab');
// const apps55Filter = inject('apps55Filter');
// const apps75Filter = inject('apps75Filter');
// const state = inject('state');
const currentItem = inject('currentItem');
// const setState = inject('setState');
// const setFilter = inject('setFilter');
const chooseCate = inject('chooseCate');


</script>
<style lang="sass" scoped>
@import '@css/base'
a
  text-decoration: none
.is-side-bar
  min-width: 210px
  flex: 0
  color: $vibe-black
  font-family:$vibe-family-body
  .title
    font-size: 24px
    padding-top: 3px
    border: none
    font-family: $vibe-family-head
    line-height: 1.125
    font-weight: $vibe-bold
  .subtitle
    margin-top: 58px
    margin-bottom: 35px
    color: $vibe-purple
    font-family: $vibe-family-head
    font-size: 1.25rem
    font-weight: $vibe-bold
    line-height: 1.25
    a
      color: $vibe-purple
  .side-bar-link.is-active
      color: $vibe-purple
      font-weight: $vibe-bold
  .type-item
    margin-bottom: 24px
    a:hover
      color: $vibe-purple
</style>
