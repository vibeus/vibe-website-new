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
              class="image is-hidden-mobile"
              :src="testimonial.item.figure.tablet_url"
              @click="playVideo(testimonial.item.video.id)"
            />
            <lazy-img
              class="image is-hidden-tablet"
              :src="testimonial.item.figure.mobile_url"
              @click="playVideo(testimonial.item.video.id)"
            />
          </div>
          <div class="blog-content">
            <div class="is-blog-testimonial">
              <svg-icon class="quote-mark is-left" icon-name="testimonials-quote" />
              {{ testimonial.item.blog_testimonial }}
              <svg-icon class="quote-mark is-right" icon-name="testimonials-quote" />
            </div>
          </div>
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
import VideoPopup from "/@vcomp/VideoPopup.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { useAppStore } from "/@/store/app";
const props = defineProps({
  testimonials: {
    type: Object,
    required: true,
  },
});
console.log("testimonials: ", props.testimonials);
const showVideoModal = ref(false);
const videoId = ref(undefined);
provide("showVideoModal", showVideoModal);

const playVideo = (_videoId) => {
  videoId.value = _videoId;
  showVideoModal.value = true;
};
</script>
<style lang="sass" scoped>
@import '/@css/base'
.container
  width: calc(1100px + 2 * 0.75rem)
  max-width: 1440px
.swiper
  height: 420px
  .testimonial
    display: flex
    
.video-content
  cursor: pointer
  .image
    +widescreen
      width: 756px
      height: 470px
.blog-content
  background-color: #fff
  cursor: pointer
  +widescreen
    width: 352px
    height: 470px
    padding: 50px 36px 32px 39px
  .is-blog-testimonial
    position: relative
    font-family: $vibe-family-head
    padding: 40px 0
    font-weight: $vibe-bold
    .quote-mark
      position: absolute
      width: 24px
      &.is-left
        left: 0
        top: 0
      &.is-right
        right: 0
        bottom: 0


:deep(.swiper-pagination-bullet)
  margin:0 7px
  text-align: center

:deep(.swiper-pagination-bullet-active)
    background-color: $vibe-black
    opacity: .7
</style>
