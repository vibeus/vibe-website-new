<template>
  <section class="section is-tab-bar">
    <div class="tabs">
      <ul>
        <li
          v-for="item in tabBar"
          :key="item.title"
          :class="currentTab == item.class ? `${item.class} is-active` : item.class"
          @click="changeTab(item.class)"
        >
          <a>{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  tabBar: {
    type: Object,
    required: true,
  },
});
/* Start Data*/
const currentTab = inject('currentTab');
const setState = inject('setState');
const currentItem = inject('currentItem');

const changeTab = (data) => {
  currentItem.value = '';
  currentTab.value = data;
  setState({});
};

/* End Data*/
</script>

<style lang="sass" scoped>
@import '@css/base'
a
  text-decoration: none
.section.is-tab-bar
    max-height: 64px
    padding: 0
    .tabs
      background-color: #fff
      border-bottom: 3px solid #f5f5f5
      
      ul
        padding: 0 1.5rem
        max-width: 1200px
        margin: 0 auto
        display: flex
        flex-grow: 1
        flex-shrink: 0
        justify-content: flex-start
        align-items: center
        +mobile
          padding: 0
          justify-content: space-evenly
      li
        display: flex
        justify-content: center
        align-items: center
        +tablet
          margin-right: 58px
        a
          box-sizing: border-box
          font-family: $vibe-family-head
          +tablet
            padding: 1rem
            font-size: 20px
            line-height: 25.2px

        &:not(.is-active) a
          border: unset
          color: #000000
          opacity: .5
      li.is-active a
        border-bottom: 1px solid #66cccc
        border-width: 6px
        height: 60px
      a
        display: flex
        justify-content: center
        align-items: center
        margin-bottom: -1px
        padding: 0.5em 1em
        vertical-align: top
        color: #111
</style>
