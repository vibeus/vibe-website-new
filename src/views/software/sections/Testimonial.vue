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
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="[Autoplay, Pagination]"
        class="swiper"
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
  padding: 120px 24px 70px
  .testimonial
    .content
      position: relative
      padding: 32px 0
      font-family: $vibe-family-head
      +tablet
        padding: 40px 80px 60px 120px
        font-size: 22px
      .quote-mark
        position: absolute
        width: 62px
        height: 62px
        +mobile
          width:23px
          height:23px
        &.is-left
          left: 0
          top: 0
        &.is-right
          right: 0
          bottom: 0
    .author
      display: flex
      margin-top: 46px
      +tablet
        justify-content: center
      .name-warp
        display: flex
        font-family: $vibe-family-head
        +tablet
          align-items: center
          text-align: center
        +mobile
          flex-direction: column-reverse  
        .logo
          height: 64px
          margin-right: 55px
          +mobile
            width: 120px
            height: 36px
            margin-top: 32px
          img
            height: 100%
        .name
          margin-bottom: 8px
          font-weight: $vibe-bold
.swiper
  height: 420px

:deep(.swiper-pagination-bullet)
  margin:0 7px !important
  text-align: center

:deep(.swiper-pagination-bullet-active)
    background-color: $vibe-black
    opacity: .7

</style>
