<template>
  <section class="section customer-cards">
    <div class="container">
      <div @click="prev" class="navigation prev is-hidden-mobile">
        <svg-icon icon-name="shared-nav-icon"></svg-icon>
      </div>
      <swiper
        :navigation="true"
        :modules="[Navigation, Pagination]"
        :slidesPerView="slidesPerView"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :loop="true"
        class="card-swiper"
      >
        <swiper-slide v-for="(story, index) in stories" :key="story.title">
          <div class="card customer-card" @click="showCardsModal(index)">
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
      <div @click="next" class="navigation is-hidden-mobile">
        <svg-icon icon-name="shared-nav-icon"></svg-icon>
      </div>
    </div>
  </section>
  <CardsModal :stories="stories" v-if="isCardsModal === true" />
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import CardsModal from "./CardsModal.vue";
import { useAppStore } from "@/store/app";

const props = defineProps({
  stories: {
    type: Object,
    required: true,
  },
});
const initialSlide = ref(0);
const isCardsModal = ref(false);
const slidesPerView = ref(3);
const app = useAppStore();
const device = computed(() => app.device);
//CardsModal
provide("initialSlide", initialSlide);
provide("isCardsModal", isCardsModal);
watchEffect(() => {
  if (device.value === "desktop" || device.value === "touch") {
    slidesPerView.value = 2;
  } else if (device.value === "mobile") {
    slidesPerView.value = 1;
  } else {
    slidesPerView.value = 3;
  }
});
const prev = () => {
  const prevBtn = document.querySelector(".card-swiper .swiper-button-prev");
  console.log(prevBtn);
  prevBtn.click();
};
const next = () => {
  const nextBtn = document.querySelector(".card-swiper .swiper-button-next");
  console.log(nextBtn);
  nextBtn.click();
};
const showCardsModal = (index) => {
  initialSlide.value = index;
  isCardsModal.value = true;
};
</script>
<style lang="sass" scoped>
@import '@css/base'
.customer-cards
  padding: 90px 24px 60px
  max-height: 684px
  background-color: #fff
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
  box-sizing: border-box
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
:deep(.swiper-pagination-bullet)
  margin:0 7px !important
  +tablet
    display: none
:deep(.swiper-pagination-bullet-active)
    background-color: $vibe-black
    opacity: .7
    +tablet
      display: none
</style>
