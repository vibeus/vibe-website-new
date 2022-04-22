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
          <a :href="testimonial.item.blog_url" target="_blank" class="blog-content">
            <div class="is-blog-testimonial">
              <svg-icon class="quote-mark is-left" icon-name="testimonials-quote" />
              {{ testimonial.item.blog_testimonial }}
              <svg-icon class="quote-mark is-right" icon-name="testimonials-quote" />
            </div>
            <div class="is-author">
              <p class="is-blog-title">{{ testimonial.item.title }}</p>
              <span class="is-blog-name">{{ testimonial.item.name }}</span>
              <span class="is-blog-content is-hidden-mobile">{{ testimonial.item.content }}</span>
              <span class="content-for-mobile is-hidden-tablet">{{
                testimonial.item.content_for_mobile
              }}</span>
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
  padding-top: 0
  padding-bottom: 0
  background-image: linear-gradient(180deg,#F4F4F4 33%,#fff 0,#fff 100px)
.container
  width: calc(1100px + 2 * 0.75rem)
  max-width: 1440px
.swiper
  height: 535px
  margin: 0 auto
.video-content
  cursor: pointer
  .image
    +tablet
      width: 604px
      height: 383px
    +widescreen
      width: 756px
      height: 470px

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
  +widescreen
    width: 352px
    height: 470px
    padding: 50px 36px 32px 39px

  &:hover .is-blog-testimonial
    text-decoration: underline
  .is-blog-testimonial
    display: block
    position: relative
    font-family: $vibe-family-head
    padding: 40px 0
    font-weight: $vibe-bold
    +widescreen
      font-size: 24px
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
  .is-blog-title
    font-family: $vibe-family-head
    font-size: 12px
    font-weight: $vibe-bold
    color: #bdbdbd
    margin-bottom: 5px
  .is-blog-name
    font-family: $vibe-family-head
    font-size: 14px
    color: black
    font-weight: $vibe-bold
    @media screen and ( min-width: 1200px )
      display: block
  .is-blog-content
    font-family: $vibe-family-head
    font-weight: 400
    color: black
    position: relative
  .content-for-mobile
    color: black
    font-weight: 400
:deep(.swiper-slide )
  display: flex
:deep(.swiper-pagination-bullet)
  margin:0 7px !important
  text-align: center

:deep(.swiper-pagination-bullet-active)
    background-color: $vibe-black
    opacity: .7
</style>
