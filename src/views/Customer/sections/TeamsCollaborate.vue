<template>
  <section class="section teams-collaborate">
    <div class="teams-collaborate-body">
      <div class="container">
        <h1 class="title">
          {{ collaborate.title }}
        </h1>
        <div class="content">
          {{ collaborate.body }}
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="glidecontainer">
      <swiper
        :direction="'vertical'"
        :space-between="30"
        :slides-per-view="5"
        :free-mode="true"
        :watch-slides-progress="true"
        :modules="[FreeMode, Thumbs, Pagination]"
        class="thumb-swiper"
        @swiper="setThumbsSwiper"
      >
        <swiper-slide
          v-for="thumb in collaborate.gallerysides"
          :key="thumb.body"
          class="thumb-item"
        >
          <lazy-img
            class="avatar"
            :src="thumb.figure"
            :alt="thumb.body"
          ></lazy-img>
          <div class="container">
            <h1 class="title">
              {{ thumb.title }}
            </h1>
            <div class="content">
              {{ thumb.body }}
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <swiper
        :speed="1000"
        :slides-per-view="1"
        :space-between="30"
        :pagination="{
          clickable: true,
        }"
        :modules="[FreeMode, Thumbs, Pagination]"
        class="blog-cover-swiper image"
        :thumbs="{ swiper: thumbsSwiper }"
      >
        <swiper-slide
          v-for="gallery in collaborate.gallery"
          :key="gallery.body"
        >
          <a
            :href="gallery.url"
            target="_blank"
          >
            <div class="cardboxmob">
              <div class="author">
                <lazy-img
                  class="image"
                  :src="gallery.avator"
                  :alt="gallery.body"
                />
                <div class="contentmob">{{ gallery.name }}</div>
              </div>
              <lazy-img
                class="logo image"
                :src="gallery.logo"
                :alt="gallery.body"
              />
            </div>
            <lazy-img
              class="image"
              :src="gallery.figure"
              :alt="gallery.body"
            />
            <div class="tip">
              <div class="title-wrap">
                <h1 class="title">{{ gallery.title }}</h1>
                <lazy-img
                  class="logo image"
                  :src="gallery.logo"
                  :alt="gallery.logo"
                ></lazy-img>
              </div>
              <div class="content">
                {{ gallery.body }}
              </div>
              <svg-icon
                class="arrow"
                icon-name="shared-arrow"
                alt="arrowdown"
              />
            </div>
            <div class="tipmob">
              <h1 class="title">{{ gallery.title }}</h1>
              <div class="content">
                {{ gallery.body }}
              </div>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { FreeMode, Thumbs, Pagination } from 'swiper';
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
.teams-collaborate
  padding: 120px 24px
  +mobile
    padding: 60px 24px
  .teams-collaborate-body
    .container
      flex-direction: column
      align-items: center
      .title
        max-width: 933px
        margin-bottom: 1.5rem
        position: relative
        text-align: center
        font-size: 50px
        +mobile
          font-size: 32px
      .content
        margin: auto
        text-align: center
        max-width: 808px

.glidecontainer
  display: flex
  margin: 40px auto 0
  max-width: 1053px
.blog-cover-swiper
  width: 747px
  height: 429px
  position: relative
  margin: 0
  @media screen and (max-width: 900px)
    padding-bottom: 40px
    height: auto
  .image
    height: 100%
    width: auto
    @media screen and (max-width: 900px)
      width: 100%
      height: auto
    &.logo
      width: auto
  .cardboxmob
    display: flex
    height: 61px
    align-items: center
    justify-content: space-between
    padding: 0 20px
    background-color: #fff
    @media screen and (min-width: 900px)
      display: none
    .author
      display: flex
      align-items: center
      .image
        height: 40px
        width: 40px
      .contentmob
        margin-left: 12px
        font-family: $vibe-family-head
        font-weight: $vibe-bold
  .tipmob
    background-color: #fff
    padding: 27px 27px 20px
    .title
      font-size: 12px
      font-weight: $vibe-bold
      color: #828282
      line-height: 18px
      text-align: left
      margin-bottom: 8px
    .content
      font-size: 16px
      font-weight: $vibe-bold
      line-height: 24px
      text-align: left
      font-family: $vibe-family-head
    @media screen and (min-width: 900px)
      display: none
  .tip
    width: 526px
    height: 140px
    padding: 15px 24px 0
    background-color: #fff
    position: absolute
    right: 16px
    bottom: 16px
    @media screen and (max-width: 900px)
     display: none
    .title-wrap
      display: flex
      justify-content: space-between
    .title
      width: 166px
      font-size: 14px
      font-weight: $vibe-bold
      color: #828282
      line-height: 18px
      margin-bottom: 8px
    .content
      width: 364px
      font-size: 24px
      font-weight: $vibe-bold
      color: #000
      line-height: 36px
      font-family: $vibe-family-head
    .arrow
      width: 14px
      height: 12px
      position: absolute
      right: 24px
  &:hover .tip
    right: 0

.thumb-swiper
  width: 306px
  height: 429px
  margin: 0
  flex-shrink:0
  @media screen and (max-width: 900px)
    display: none
  .thumb-item
    width: 300px
    position: relative
    left: -8px
    width: 298px
    height: 96px
    cursor: pointer
  .avatar
    z-index: 5
    position: absolute
    left: 8px
    top: 14px
    width: 60px
    height: 60px
  .container
    position: absolute
    left: 32px
    width: 275px
    height: 88px
    background: #fff
    opacity: .8
    border-radius: 4px 0 0 4px
    .title
      position: absolute
      top: 19px
      left: 45px
      font-size: 14px
      color: #828282
    .content
      position: absolute
      top: 45px
      left: 45px
      font-family: $vibe-family-head
      font-weight: $vibe-bold
:deep(.swiper-slide)
  cursor: pointer
:deep(.swiper-slide-thumb-active).thumb-item
  position: relative
  left: 0px
  .content
    color: $vibe-purple
  .container
    box-shadow: -10px 4px 60px rgba(0, 0, 0, 0.01)
    border-radius: 4px
:deep(.swiper-pagination-bullet)
  margin:0 7px !important
  @media screen and (min-width: 900px)
    display: none
:deep(.swiper-pagination-bullet-active)
    background-color: $vibe-black
    opacity: .7
</style>
