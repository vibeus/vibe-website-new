<template>
   <li class="faq-item" :class="{ 'is-active' : showItem }">
    <h2 class="content faq-title" @click="handleItemShow">
      <span>
        {{ content.title }}
      </span>
      <span class="icon is-chevron">
        <svg-icon class="image" icon-name="common-arrow" alt=""></svg-icon>
      </span>
    </h2>
    <div class="content faq-content" v-show="showItem">
      <md-format :content="content.body"/>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
});

const showItem = ref(false);
const handleItemShow = () => {
  showItem.value = !showItem.value; 
};

</script>

<style lang="sass">
@import '/@css/base'
.faq-item
  overflow: hidden
  padding: 32px 0
  &.is-active
    .icon.is-chevron
      transform: rotate(180deg)
    .faq-title
      font-weight: 500
    .content
      a
        text-decoration: none
        border-bottom: 1.5px solid #000000
        &:hover
          border-bottom: 1.5px solid $vibe-purple
  .faq-title
    font-size: 21px
    display: flex
    justify-content: space-between
    align-items: center
    cursor: pointer
    +mobile
      font-size: 16px
  .faq-content
    margin-top: 8px
    p:not(:last-child)
      margin-bottom: 8px
    ul 
      margin-bottom: 10px
      margin-left: 2em
      margin-top: 1em
    li 
      list-style: inside
    a
      &:hover
        color: $vibe-purple
</style>
