<template>
  <section class="section teams-collaborate">
    <div class="teams-collaborate-body">
      <div class="container"></div>
      <div class="glidecontainer">
        <swiper
          :direction="'vertical'"
          @swiper="setThumbsSwiper"
          :spaceBetween="30"
          :slidesPerView="5"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="[FreeMode, Navigation, Thumbs]"
          class="thumbnails"
        >
          <swiper-slide
            class="thumb"
            v-for="thumb in collaborate.gallerysides"
            :key="thumb.body"
          >
            <div class="cardbox">
              <lazy-img :src="thumb.figure" :alt="thumb.body" ></lazy-img>
              <div class="container">
                <h1 class="title">{{ thumb.title }}</h1>
                <div class="content">{{ thumb.body }}</div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <swiper
          :speed="1000"
          :slidesPerView="1"
          :spaceBetween="30"
          :modules="[FreeMode, Navigation, Thumbs]"
          class="blog-cover image"
          :thumbs="{ swiper: thumbsSwiper }"
        >
          <swiper-slide v-for="gallery in collaborate.gallery" :key="gallery.body">
            <lazy-img class="image" :src="gallery.figure" :alt="gallery.body" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper';
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
.glidecontainer
  display: flex
  justify-content: space-between
  .thumb
    width: 300px
.blog-cover
  width: 747px
  height: 429px
  position: relative
.thumbnails
  width: 306px
  height: 429px

:deep(.swiper-slide)
  cursor: pointer
:deep(.swiper-slide-thumb-active) 
  .content
    color: $vibe-purple
</style>
