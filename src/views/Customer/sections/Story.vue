<template>
  <section class="section is-customer-story-section">
    <div class="container">
      <swiper
        :speed="1000"
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :modules="[Autoplay, Pagination]"
        class="swiper"
      >
        <swiper-slide
          v-for="testimonial in testimonials"
          :key="testimonial.item.name"
          class="testimonial"
        >
          <div class="video-content">
            <lazy-img
              class="image tablet"
              :src="testimonial.item.figure.tablet_url"
              @click="playVideo(testimonial.item.video.id)"
            />
            <lazy-img
              class="image mobile"
              :src="testimonial.item.figure.mobile_url"
              @click="playVideo(testimonial.item.video.id)"
            />
          </div>
          <a :href="testimonial.item.blog_url" target="_blank" class="blog-content">
            <div class="is-blog-testimonial">
              <svg-icon class="quote-mark is-left" icon-name="testimonials-quote" />
              {{ testimonial.item.blog_testimonial }}
              <svg-icon class="quote-mark is-right" icon-name="testimonials-quote" />
            </div>
            <div class="is-author">
              <p class="is-blog-title">{{ testimonial.item.title }}</p>
              <div class="is-blog-name">{{ testimonial.item.name }}</div>
              <div class="is-blog-content">
                {{ testimonial.item.content }}
              </div>
              <div class="content-for-mobile">
                &nbsp;{{ testimonial.item.content_for_mobile }}
              </div>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <VideoPopup v-if="showVideoModal" :videoId="videoId" />
  </section>
</template>
<script setup>
//  :autoplay="{
//         delay: 3000,
//         disableOnInteraction: false,
//       }"
import VideoPopup from '@vcomp/VideoPopup.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';
const props = defineProps({
  testimonials: {
    type: Object,
    required: true,
  },
});
const showVideoModal = ref(false);
const videoId = ref(undefined);
provide('showVideoModal', showVideoModal);

const playVideo = (_videoId) => {
  videoId.value = _videoId;
  showVideoModal.value = true;
};
</script>
<style lang="sass" scoped>
@import '@css/base'
.is-customer-story-section
  padding-top: 60px
  background-image: linear-gradient(180deg,#F4F4F4 33%,#fff 0,#fff 100px)
  @media screen and (max-width: 900px)
    padding-top: 0
  .container
    max-width: 1440px
    +widescreen
      width: calc(1100px + 2 * 0.75rem)
    .swiper
      margin: 0 auto
      padding-bottom: 50px
      @media screen and (max-width: 900px)
        padding: 0 30px 50px
    .video-content
      cursor: pointer
      .image
        +tablet
          width: 604px
          height: 383px
        +widescreen
          width: 756px
          height: 470px
        &.mobile
          width: 100%
          height: auto
          display: none
      @media screen and (max-width: 900px)
        .image
          &.tablet
            display: none
          &.mobile
            display: block
    .blog-content
      display: flex
      flex-direction: column
      justify-content: space-between
      background-color: #fff
      cursor: pointer
      box-sizing: border-box
      box-shadow: 4px 3px 8px rgb(0 0 0 / 10%)
      +tablet
        height: 383px
        width: 287px
        padding: 15px 27px 15px 20px
      +widescreen
        width: 352px
        height: 470px
        padding: 50px 36px 32px 39px
      @media screen and (max-width: 900px)
        height: auto
        width: auto
        padding: 15px 20px
      &:hover .is-blog-testimonial
        text-decoration: underline
      .is-blog-testimonial
        display: block
        position: relative
        font-family: $vibe-family-head
        padding: 40px 0
        font-weight: $vibe-bold
        line-height:1.5
        +tablet
          font-size: 20px
        +widescreen
          font-size: 24px
        @media screen and (max-width: 900px)
          display: none
      .is-blog-title
        font-family: $vibe-family-head
        font-size: 12px
        font-weight: $vibe-bold
        color: #bdbdbd
        margin-bottom: 9px
        line-height:1.5
      .is-blog-name
        font-family: $vibe-family-head
        font-weight: $vibe-bold
        line-height:1.5
        +tablet
          font-size: 14px
        +widescreen
          font-size: 16px
        @media screen and (max-width: 900px)
          display: inline-block
      .is-blog-content
        font-family: $vibe-family-body
        line-height:1.5
        +tablet
          font-size: 14px
        +widescreen
          font-size: 16px
        @media screen and (max-width: 900px)
          display: none
      .content-for-mobile
        display: none
        font-size: 14px
        font-family: $vibe-family-body
        @media screen and (max-width: 900px)
          display: inline-block
      .quote-mark
        position: absolute
        width: 24px
        height: 24px
        &.is-left
          left: 0
          top: 0
        &.is-right
          right: 0
          bottom: 0
:deep(.swiper-slide )
  display: flex
  justify-content: center
  @media screen and (max-width: 900px)
    padding: 0 10px
    box-sizing: border-box
    flex-direction: column
:deep(.swiper-pagination-bullet)
  margin:0 7px !important
:deep(.swiper-pagination-bullet-active)
    background-color: $vibe-black
    opacity: .7
</style>
