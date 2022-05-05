<template>
  <section class="section is-setup">
    <div class="container">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="30"
        :slidesPerView="5"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="[FreeMode, Thumbs, Pagination]"
        class="thumb-swiper"
      >
        <swiper-slide> 1</swiper-slide>
        <swiper-slide> 2</swiper-slide>
        <swiper-slide> 3</swiper-slide>
        <swiper-slide> 4</swiper-slide>
      </swiper>
      <swiper
        :speed="1000"
        :slidesPerView="1"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
          type: 'progressbar',
        }"
        :modules="[FreeMode, Thumbs, Pagination]"
        class="progress"
        :thumbs="{ swiper: thumbsSwiper }"
      >
        <swiper-slide> 1</swiper-slide>
        <swiper-slide> 2</swiper-slide>
        <swiper-slide> 3</swiper-slide>
        <swiper-slide> 4</swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { FreeMode, Thumbs, Pagination } from 'swiper';
import 'swiper/css';
const props = defineProps({
  collaborate: {
    type: Object,
    required: true,
  },
});
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>
<style lang="sass" scoped>
@import '@css/base'
.section.is-setup
  .container
    flex-direction: column
    .thumb-swiper
      width: 100%
      height: 50px
      top: 42px
      z-index: 10
    .progress
      width: 100%
:deep(.swiper-horizontal>.swiper-pagination-progressbar)
  width: 132%
  height: 4px
  left: -32%
  top: 0
  background-color: #ededed
:deep(.swiper-pagination-progressbar .swiper-pagination-progressbar-fill)
  background-color: $vibe-purple
.thumb-swiper
  :deep(.swiper-wrapper)
    position: relative
    width: 100%
  :deep(.swiper-slide)
    width: 18px !important
    height: 18px
    border-radius: 50%
    background-color: #dadada
    position: absolute
    cursor: pointer
    &:first-child
      left:0
    &:nth-child(2)
      left:33%
    &:nth-child(3)
      left:66%
    &:nth-child(4)
      left:98.5%
:deep(.swiper-slide-thumb-active)
  background-color: $vibe-purple !important
</style>
