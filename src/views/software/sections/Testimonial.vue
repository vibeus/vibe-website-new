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
        <swiper-slide
          v-for="testimonial in testimonialSection.testimonials"
          :key="testimonial.body"
          class="testimonial"
        >
          <div class="content">
            <svg-icon class="quote-mark is-left" icon-name="testimonials-quote" />
            {{ testimonial.body }}
            <svg-icon class="quote-mark is-right" icon-name="testimonials-quote" />
          </div>
          <div class="author">
            <div class="name-warp">
              <div v-if="testimonial.author.logo" class="logo">
                <lazy-img :src="testimonial.author.logo" alt="" />
              </div>
              <div>
                <p class="name">{{ testimonial.author.name }}</p>
                <p>{{ testimonial.author.desc }}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
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
const props = defineProps({
  testimonialSection: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '/@css/base'
.is-testimonial
  background-color: #fff
  padding: 120px 24px
  .testimonial
    .content
      position: relative
      padding: 40px 80px 60px 120px
      display: flex
      font-family: $vibe-family-head
      +tablet
        font-size: 22px
      .quote-mark
        position: absolute
        width: 62px
        height: 62px
        &.is-left
          left: 0
          top: 0
        &.is-right
          right: 0
          bottom: 0
    .author
      display: flex
      justify-content: center
      .name-warp
        display: flex
        align-items: center
        text-align: center
        font-family: $vibe-family-head
        .logo
          height: 64px
          margin-right: 55px
          img
            height: 100%
        .name
          margin-bottom: 8px
          font-weight: $vibe-bold
</style>
