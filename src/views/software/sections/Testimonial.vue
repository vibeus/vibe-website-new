<template>
  <section class="section is-testimonial">
    <div class="container">
      <swiper
        :speed="1000"
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :modules="[Autoplay, Pagination]"
        class="mySwiper"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper';
const { frontmatter: fm } = useData();
const { title, body } = fm._value.hero;
</script>
<style lang="sass" scoped>
@import '/@css/base'
.mySwiper
  height:200px
</style>
