<template>
  <section class="section is-closer-look">
    <div class="container">
      <div class="title is-section-title">{{ closerLook.title }}</div>
      <div class="grid-container is-hidden-mobile">
        <div
          :class="`grid-item item-${index + 1}`"
          v-for="(gridItem, index) in closerLook.itemList"
          :key="index"
        >
          <figure class="bg-figure"></figure>
          <div class="text-box">
            <h3 class="item-title">{{ gridItem.title }}</h3>
            <p class="item-content">{{ gridItem.content }}</p>
          </div>
          <!-- <lazy-img class="image" :src="gridItem.figure" /> -->
        </div>
      </div>
      <swiper
        :speed="1000"
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :modules="[Pagination]"
        class="swiper is-hidden-tablet"
      >
        <swiper-slide v-for="index in 4" :key="index">
          <div
            :class="`grid-item item-${index + 1}`"
            v-for="gridItem in closerLook.itemList.slice((index - 1) * 2, index * 2)"
            :key="gridItem.id"
          >
            <figure class="bg-figure"></figure>
            <div class="text-box">
              <h3 class="item-title">{{ gridItem.title }}</h3>
              <p class="item-content">{{ gridItem.content }}</p>
            </div>
            <!-- <lazy-img class="image" :src="gridItem.figure" /> -->
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <SectionCta :cta="closerLook.cta" />
  </section>
</template>

<script setup>
import SectionCta from '/@vcomp/SectionCta.vue';
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
</script>

<style lang="sass" scoped>
@import '/@css/base'
.section.is-closer-look
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
    .grid-container
      display: grid
      grid-template-columns: repeat(6,1fr)
      grid-gap: 20px
      grid-template-rows: repeat(4, 360px)
      .grid-item
        background-color: $vibe-white
        border-radius: 4px
        .image
          width:100px
          height: 100px
      .item-1
        grid-area:1 / 1 / 2 / 4
      .item-2
        grid-area:1 / 4 / 2 / 7
      .item-3
        grid-area:2 / 1 / 3 / 5
      .item-4
        grid-area:2 / 5 / 3 / 7
      .item-5
        grid-area:3 / 1 / 4 / 4
      .item-6
        grid-area:3 / 4 / 4 / 7
      .item-7
        grid-area:4 / 1 / 5 / 7
:deep(.swiper-pagination-bullet)
  margin:0 5px !important
  text-align: center

:deep(.swiper-pagination-bullet-active)
    background-color: $vibe-black
    opacity: .7
</style>
