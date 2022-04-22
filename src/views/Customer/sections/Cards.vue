<template>
  <section class="section customer-cards">
    <div class="container">
      <div @click="prev" class="navigation prev">
        <svg-icon icon-name="shared-nav-icon"></svg-icon>
      </div>

      <swiper
        :navigation="true"
        :modules="[Navigation]"
        :slidesPerView="3"
        :spaceBetween="50"
        :loop="true"
        class="mySwiper"
      >
        <swiper-slide v-for="story in stories" :key="story.title">
          <div class="card customer-card">
            <div class="card-image">
              <lazy-img class="image" :src="story.cover" :alt="story.cover" />
              <div class="logo">
                <div class="image"></div>
              </div>
            </div>
            <div class="card-content">
              <div class="content">{{ story.industry }}</div>
              <div class="card-container">
                <h2 class="title">{{ story.title }}</h2>
                <div class="cta">
                  <span>Learn more</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div @click="next" class="navigation">
        <svg-icon icon-name="shared-nav-icon"></svg-icon>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
const props = defineProps({
  stories: {
    type: Object,
    required: true,
  },
});
const prev = () => {
  const prevBtn = document.querySelector('.swiper-button-prev');
  console.log(prevBtn);
  prevBtn.click();
};
const next = () => {
  const nextBtn = document.querySelector('.swiper-button-next');
  console.log(nextBtn);
  nextBtn.click();
};
</script>
<style lang="sass" scoped>
@import '@css/base'
.container
  position: relative
  margin: auto
  width: auto
  max-width: 1441px
  padding-left: 50px
  padding-right: 50px
  overflow: hidden
  max-height: 562px
  align-items: center
.navigation
  width: 42px
  height: 42px
  border-radius: 50%
  color: $vibe-white
  background-color:$vibe-black
  cursor: pointer
  &.prev
    transform: rotate(180deg)
  .svg-icon
    width: 42px
    height: 42px
.customer-card
  height: 100%
  cursor: pointer
  font-family:$vibe-family-body
  &:hover
    background-color: #fff
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%)
    .card-image
      padding: 0
  .card-image
    padding: 30px 30px 0
    position: relative
    .image
      width:100%
      height: 100%
      display: block
      object-fit: cover
  .card-content
    padding: 16px 30px 30px
    max-width: 100%
    position: relative
    .content
      padding-bottom: 8px
      font-family: $vibe-family-head
      font-size: 14px
      font-weight: $vibe-bold
      line-height: 18px
      color: #828282
      letter-spacing: 0
      text-align: left
    .title
      line-height: 30px
      margin: 0
      max-width: 348px
      padding: 0
      padding-bottom: 36px
    .cta
      font-size: 14px
      text-decoration-line: underline


:deep(.swiper-button-prev),:deep(.swiper-button-next)
  display: none
</style>
