<template>
  <section class="section is-team">
    <div class="container">
      <h1 class="title is-section-title">
        {{ teamInfo.title }}
      </h1>
      <div class="content">
        {{ teamInfo.body }}
      </div>
      <swiper
        :slides-per-view="1"
        :space-between="15"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class=".swiper"
      >
        <template
          v-for="(team, index) in teamInfo.team_gallery"
          :key="index"
        >
          <swiper-slide>
            <figure class="image">
              <lazy-img 
                :src="team.figure"
              />
            </figure>
            <div class="content caption">
              {{ team.title }}
            </div>
          </swiper-slide>
        </template>
      </swiper>
    </div>
  </section>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const props = defineProps({
  teamInfo: {
    type: Object,
    require: true,
    default: () => {}
  }
});
console.log(props.teamInfo);
const modules = [Pagination, Navigation];
</script>

<style lang="sass" scoped>
@import '@css/base'
.section.is-team
  // bottom padding should start from dots, not from the box shadow.
  // there is no box shadow in mobile so need to adjust.
  padding: 120px 24px
  +mobile
    padding-top: 60px
    padding-bottom: 60px  
  .container
    max-width: 1080px
  .title, .content
    text-align: center
    max-width: 782px
    margin-left: auto
    margin-right: auto
    margin-bottom: 24px
  :deep(.swiper)
    width: 100%
    height: 100%
    max-width: 900px
    margin-left: auto
    margin-right: auto
    overflow: hidden
    .swiper-button-prev, .swiper-button-next
      width: 42px !important
      height: 42px !important
      background-color: #111
      border-radius: 50%
      +mobile
        display: none
      &::after
        position: absolute
        content: '' 
        width: 10px
        height: 10px  
        border: 2px solid #fff
        border-left: none
        border-bottom: none
    .swiper-button-prev
      &::after
        transform: rotate(-135deg)
        left: 40%
    .swiper-button-next
      &::after
        transform: rotate(45deg)
        right: 40%
    .swiper-pagination
      bottom: -2%
      &-bullet-active
        background-color: #111
        opacity: .6
    .swiper-wrapper
      display: flex
      width: fit-content
      .swiper-slide
        width: 900px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        text-align: center
        font-size: 18px
        background: #fff
        img 
          display: block
          width: 100%
          height: 100%
          object-fit: cover
        .caption
          line-height: 42px
</style>
