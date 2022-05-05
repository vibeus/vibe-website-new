<template>
  <section class="section is-closer-look">
    <div class="container">
      <div class="title is-section-title">
        {{ closerLook.title }}
      </div>
      <div class="grid-container is-hidden-mobile">
        <div
          v-for="gridItem in closerLook.itemList"
          :key="gridItem.id"
          class="grid-item item"
          :class="[`item-${gridItem.id}`, { 'is-white': gridItem.bg_color }]"
        >
          <figure v-if="isBgFigure(gridItem)">
            <lazy-img
              class="bg-figure"
              :src="gridItem.bg_figure"
            />
          </figure>
          <lazy-img
            v-if="gridItem.multiple_img"
            class="left-image"
            :src="gridItem.left_figure"
          />
          <div class="text-box">
            <md-format
              class="item-title"
              :content="gridItem.title"
            ></md-format>
            <p class="item-content">
              {{ gridItem.content }}
            </p>
          </div>
          <lazy-img
            class="image"
            :src="gridItem.figure"
          />
        </div>
      </div>
    </div>
    <swiper
      :speed="1000"
      :slides-per-view="1"
      :space-between="30"
      :pagination="{
        clickable: true,
      }"
      :modules="[Pagination]"
      class="swiper is-hidden-tablet"
    >
      <swiper-slide
        v-for="index in 4"
        :key="index"
      >
        <div
          v-for="gridItem in closerLook.itemList.slice((index - 1) * 2, index * 2)"
          :key="gridItem.id"
          :class="`swiper-item item item-${gridItem.id}`"
        >
          <div class="text-box">
            <md-format
              class="item-title"
              :content="gridItem.title"
            ></md-format>
            <p class="item-content">
              {{ gridItem.content }}
            </p>
          </div>
          <lazy-img
            class="image"
            :src="imgMobilePath(gridItem)"
          />
        </div>
      </swiper-slide>
    </swiper>
    <SectionCta :cta="closerLook.cta" />
  </section>
</template>

<script setup>
import SectionCta from '@vcomp/SectionCta.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper';
const props = defineProps({
  closerLook: {
    type: Object,
    required: true,
  },
});
const imgMobilePath = (item) => {
  return item.figure_mobile ? item.figure_mobile : item.figure;
};
const isBgFigure = (item) => {
  return item.bg_figure ? true : false;
};
</script>

<style lang="sass" scoped>
@import '@css/base'
.section.is-closer-look
  background-color: #fff
  padding: 64px 24px
  +mobile
    padding-bottom: 60px
  .container
    display: block
    .title.is-section-title
      margin-bottom: 56px
      text-align: center
      +mobile
        margin-bottom: 32px
  // global items
  .item
    font-family: $vibe-family-body
    background-color: $vibe-white
    border-radius: 4px
    overflow: hidden
    &.is-white
      background-color: #fafafa
    &-title
      font-weight: $vibe-bold
      font-family: $vibe-family-head
      margin-bottom: 16px
    &-content
      font-size: 14px
      line-height: 20px
    .image
      z-index:1
    .left-image
      mix-blend-mode: multiply
      max-width: 303px
      +tablet-only
        max-width: 280px
    .right-image
      margin-top: 100px
      max-width: 280px
      transform: scale(1.3)
      +tablet-only
        max-width: 200px
.grid-container
  max-width: 1130px
  margin: 0 auto
  display: grid
  grid-template-columns: repeat(6,1fr)
  grid-gap: 12px
  grid-template-rows: repeat(4, 360px)
  .item-title
    font-size: 20px
    +widescreen
      font-size: 24px
  .grid-item
    &.item-1
      grid-area:1 / 1 / 2 / 4
      position: relative
      display: flex
      flex-direction: column
      justify-content: flex-end
      padding: 30px 7px 42px 48px
      .item-title
        max-width: 193px
      .item-content
        max-width: 372px
        margin-top: 16px
      .image
        position: absolute
        width: 60%
        top: 4%
        right: 0
        +mobile
          top: 0
          max-width:250px
    &.item-2
      grid-area:1 / 4 / 2 / 7
      position: relative
      display: flex
      flex-direction: column
      padding: 48px 18px 24px 48px
      .bg-figure
        width: 100%
        position: absolute
        bottom: -2%
        left: 0
      .item-title
        max-width: 265px
        margin-bottom: 16px
      .item-content
        max-width: 350px
        margin-bottom: 20px
      .image
        +desktop
          padding-left: 139px
        img
          max-width: 352px
    &.item-3
      grid-area:2 / 1 / 3 / 5
      position: relative
      padding: 3rem
      .bg-figure
        position: absolute
        top: 0
        left: 0
        max-width: 259px
        max-height: 259px
      .text-box
        margin-left: auto
        max-width: 245px
        text-align: left
        .item-title
          max-width: 200px
          line-height: 31px
          margin-bottom: 16px
        .item-content
          line-height: 20px
      .image
        max-width: 466px
        position: absolute
        bottom: 0
        left: 4.5%
        width: 65%
    &.item-4
      grid-area:2 / 5 / 3 / 7
      padding: 3rem 2.3rem 0 1.3rem
      position: relative
      .text-box
        max-width: 250px
        text-align: left
        margin-left: 12px
        .item-title
          margin-bottom: 16px
      .image
        width: 80%
        max-width: 323px
        position: absolute
        bottom: 0
    &.item-5
      grid-area:3 / 1 / 4 / 4
      display: flex
      flex-direction: column-reverse
      justify-content: space-between
      padding: 2.6rem 2.1rem 2.8rem 3rem
      .text-box
        max-width: 372px
        .item-title
          margin-bottom: 16px
        .item-content
          line-height: 20px
      .image
        max-width: 448px
        img
          height: 100%
    &.item-6
      grid-area:3 / 4 / 4 / 7
      display: flex
      flex-direction: column
      justify-content: space-between
      padding: 3rem 1.8rem 1.5rem 3rem
      .text-box
        max-width: 458px
        .item-title
          margin-bottom: 16px
    &.item-7
      grid-area:4 / 1 / 5 / 7
      height: 360px
      display: flex
      justify-content: space-evenly
      align-items: flex-start
      .text-box
        max-width:276px
        align-self: center
      .left-image
        mix-blend-mode: multiply
        max-width: 303px
        +tablet-only
          max-width: 280px
      .image
        margin-top: 100px
        max-width: 280px
        transform: scale(1.3)
        +tablet-only
          max-width: 200px
.swiper-item
  width: 100%
  height: 268px
  box-sizing: border-box
  padding: 2rem 1rem
  .item-title
    font-weight: 500
    font-size: 20px
    line-height: 25px
    font-family: $vibe-family-head
  &.item-1
    position: relative
    display: flex
    flex-direction: column
    justify-content: flex-end
    .item-title
      max-width: 144px
    .item-content
      max-width: 220px
      margin-top: 16px
    .image
      max-width: 250px
      position: absolute
      width: 60%
      top: 0
      right: 0
  &.item-2
    margin-top: 16px
    display: flex
    flex-direction: column-reverse
    justify-content: space-between
    padding-top: 1rem
    .item-title
      max-width: 230px
      margin-bottom: 16px
    .item-content
      max-width: 260px
    .image
      width: 68%
      height: 100%
      max-height: 86px
      max-width: 210px
      margin-left: auto

  &.item-3
    position: relative
    display: flex
    flex-direction: column
    justify-content: flex-end
    .item-title
      max-width: 161px
      margin-bottom: 16px
    .item-content
      max-width: 240px
    .image
      position: absolute
      width: 58%
      top: 8%
      right: 0
      clip-path: circle(54%)

  &.item-4
    position: relative
    display: flex
    flex-direction: column-reverse
    padding-top: 1rem
    margin-top: 16px
    .item-title
      max-width: 230px
      margin-bottom: 16px
    .item-content
      max-width: 260px
    .image
      max-width: 300px
      position: absolute
      width: 54%
      top: 4%
      right: 4%
  &.item-5
    position: relative
    display: flex
    flex-direction: column
    justify-content: flex-end
    padding-top: 1.5rem
    .item-title
      max-width: 110px
      margin-bottom: 16px
    .item-content
      max-width: 250px
    .image
      position: absolute
      width: 78%
      top: 8%
      right: 0

  &.item-6
    margin-top: 16px
    position: relative
    display: flex
    flex-direction: column
    justify-content: flex-end
    .item-title
      max-width: 100px
      margin-bottom: 16px
    .item-content
      max-width: 240px
    .image
      position: absolute
      width: 76%
      top: 8%
      right: 0
  &.item-7
    height: 552px
    position: relative
    display: flex
    flex-direction: column-reverse
    justify-content: space-between
    align-items: center
    .item-title
      max-width: 110px
      margin-bottom: 16px
    .item-content
      max-width: 260px
    .image
      max-width: 256px
      margin: auto

.swiper
  padding-bottom: 50px
:deep(.swiper-pagination-bullet)
  margin:20px 5px 0
  text-align: center

:deep(.swiper-pagination-bullet-active)
    background-color: $vibe-black
    opacity: .7
</style>
