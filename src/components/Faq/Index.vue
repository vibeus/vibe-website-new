<template>
<section class="section is-three-faqs" :id="faqs.id">
  <h1 class="title is-section-title">{{ faqs.title }}</h1>
  <div class="container faq-sections">
    <div class="faq-section-title">
      <ul class="faq-section-title-row">
          <li 
            class="title faq-section"
            :class="{ 'is-active': sectionIndex === currentTabIndex }" 
            v-for="(sectionTitle, sectionIndex) in faqs.sections" :key="sectionIndex"
            @click="handleTabClick(sectionIndex)"
          >
            {{ sectionTitle }}
          </li>
      </ul>
      <!-- TODO -->
      <!-- <div class="more"> -->
        <!-- {{ with .see_all }} -->
          <!-- <a href="{{ .url }}" target="_blank">{{ default .title ( T .title ) }}</a> -->
        <!-- {{ end }} -->
      <!-- </div> -->
    </div>
    <ul 
      v-for="(list, faqIndex) in faqs.faqList" :key="faqIndex"
      class="faq-items"
      v-show="faqIndex === currentTabIndex"
    >
      <FaqItem v-for="(item, index) in list.itemList" :key="index"
        :content="item"
      />
    </ul>

    <SectionCta :cta="faqs.cta ? faqs.cta : {}"/>

  </div>
</section>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import FaqItem from './components/FaqItem.vue';
import SectionCta from '../SectionCta.vue';
const props = defineProps({
  faqs: {
    type: Object,
    required: true
  }
});

// set the first tab as default 
const currentTabIndex = ref(0);
const handleTabClick = (index) => {
  currentTabIndex.value = index;
};

const handleOpenItem = () => {

};


</script>

<style lang="sass">
@import '@css/base'
.section.is-three-faqs
  padding: 104px 24px
  background-color: $vibe-white
  .title.is-section-title
    margin-bottom: 72px
    text-align: center
  .container
    display: block
    width: unset
    max-width: 1120px
    +tablet
      font-size: 18px
  .faq-section-title
    display: flex
    align-items: center
    justify-content: space-between
    user-select: none
    .faq-section-title-row
      display: flex
      justify-content: space-between
      min-width: 520px
      font-size: 16px
      +mobile
        min-width: 230px
    .title
      margin-bottom: 14px
      font-size: 22px
      color: #828282
      cursor: pointer
      +mobile
        font-size: 16px
    .more
      height: 38px
      +mobile
        height: 32px
    .faq-section
      padding: 8px 0
      margin-bottom: 0px
      &.is-active
        color: #000
        border-bottom: 2px solid #000
  .faq-items
    border-top: 1px solid $vibe-black
    border-bottom: 1px solid $vibe-black
  .faq-item:not(:last-child)
    border-bottom: 1px solid $vibe-black
  
  .cta.is-section
    .button
      &:hover 
        color: $vibe-white
        background-color: $vibe-black
</style>
