<template>
  <section class="section is-setup">
    <div :class="`container progress-${setup.steps.length}-steps`">
      <div
        @click="changePage('prev')"
      >
        <svg-icon
          class="navigation prev is-hidden-mobile"
          :icon-name="isLast?'shared-nav-icon':'shared-nav-icon-white'"
        ></svg-icon>
      </div>
      <div class="swiper-container">
        <swiper
          class="progress-step-swiper"
          :space-between="30"
          :slides-per-view="5"
          :watch-slides-progress="true"
          :modules="[Thumbs, Pagination]"
          @swiper="setThumbsSwiper"
        >
          <swiper-slide
            v-for="step in setup.steps"
            :key="step.order"
            :class="`progress-step-${step.order}`"
          ></swiper-slide>
        </swiper>

        <swiper
          :speed="1000"
          :slides-per-view="1"
          :space-between="30"
          :pagination="{
            clickable: true,
            type: 'progressbar',
          }"
          :navigation="true"
          :modules="[Thumbs, Pagination, Navigation]"
          class="progress-content-swiper"
          :thumbs="{ swiper: thumbsSwiper }"
        >
          <swiper-slide
            v-for="step in setup.steps"
            :key="step.order"
          >
            <StepContent
              v-if="step.component==='StepContent'"
              :step-content="step"
            />
            <EndStep
              v-if="step.component==='EndStep'"
              :step-content="step"
            />
            <VideoStep
              v-if="step.component==='VideoStep'"
              :step-content="step"
            />
            <FormStep
              v-if="step.component==='FormStep'"
              :step-content="step"
            />
          </swiper-slide>
        </swiper>
        <div class="swiper-box"></div>
      </div>
      <div
        @click="changePage('next')"
      >
        <svg-icon
          class="navigation next is-hidden-mobile"
          :icon-name="isFirst?'shared-nav-icon':'shared-nav-icon-white'"
        ></svg-icon>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Thumbs, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import {
  StepContent, EndStep, VideoStep, FormStep
} from './index.js';
const props = defineProps({
  setup: {
    type: Object,
    required: true,
  },
});
const thumbsSwiper = ref(null);
const isFirst = ref(true);
const isLast = ref(true);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
const changePage=(state)=>{
  const prevBtn = document.querySelector('.progress-content-swiper .swiper-button-prev');
  const nextBtn = document.querySelector('.progress-content-swiper .swiper-button-next');
  if(state==='prev'){
    prevBtn.click();
  }else{
    nextBtn.click();
  }
};

</script>
<style lang="sass" scoped>
@import '@css/base'
.section.is-setup
  .container
    display: flex
    justify-content: space-between
    align-items: center
    .navigation
      width: 48px
      height: 48px
      color: #fff
      cursor: pointer
      &.button-disabled
        color: black
      &.prev
        transform: rotate(180deg)
        margin-right:42px
        +mobile
          left: 20px
      &.next
        margin-left: 42px
        +mobile
          right: 20px
        
    .swiper-container
      width: 100%
      position: relative
      max-width: 1060px
    .progress-content-swiper
      height: 600px
      width: 100%
      :deep(.swiper-slide)
        padding: 0 70px
        box-sizing: border-box
    .progress-step-swiper
      width: 100%
      height: 50px
      top: 42px
      z-index: 10
    :deep(.swiper-horizontal>.swiper-pagination-progressbar)
      height: 4px
      top: 30px
      background-color: #ededed
    &.progress-3-steps
      :deep(.progress-step-swiper .swiper-slide)
        &:first-child
          left:0
        &:nth-child(2)
          left:50%
        &:nth-child(3)
          left:98.5%
      :deep(.swiper-horizontal>.swiper-pagination-progressbar)
        width: 150%
        left: -50%
    &.progress-4-steps
      :deep(.progress-step-swiper .swiper-slide)
        &:first-child
          left:0
        &:nth-child(2)
          left:33%
        &:nth-child(3)
          left:66%
        &:nth-child(4)
          left:98.5%
      :deep(.swiper-horizontal>.swiper-pagination-progressbar)
        width: 132%
        left: -32%
.swiper-box
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  margin-top: 120px
  box-shadow: 0 2px 40px 10px rgb(0 0 0 / 5%)

:deep(.swiper-pagination-progressbar .swiper-pagination-progressbar-fill)
  background-color: $vibe-purple
.progress-content-swiper
  :deep(.swiper-wrapper)
    padding-top: 120px
.progress-step-swiper
  :deep(.swiper-wrapper)
    position: relative
    width: 100%
    padding-top: 30px
  :deep(.swiper-slide)
    width: 18px !important
    height: 18px
    border-radius: 50%
    background-color: $vibe-purple
    position: absolute
    cursor: pointer
    &::before
      position: absolute
      top: -30px
      width: 18px
      font-weight: $vibe-bold
      font-size: 20px
      line-height: 28px
      text-align: center
      color: $vibe-purple
    &:first-child::before
      content: '1'
    &:nth-child(2)::before
      content: '2'
    &:nth-child(3)::before
      content: '3'
    &:nth-child(4)::before
      content: '4'
:deep(.swiper-slide-thumb-active)
  background-color: $vibe-purple !important
:deep(.swiper-slide-thumb-active)::before
  color: $vibe-purple !important
:deep(.swiper-slide-thumb-active)~.swiper-slide
  background-color: #dadada !important
:deep(.swiper-slide-thumb-active)~.swiper-slide::before
  color: #dadada !important
:deep(.swiper-button-prev),:deep(.swiper-button-next)
  display: none
</style>
