<template>
  <div class="modal customer-card-modal">
    <div class="modal-background" @click="isCardsModal = false"></div>
    <div class="swiper-wrap">
      <div @click="prev" class="navigation prev">
        <svg-icon icon-name="shared-nav-icon"></svg-icon>
      </div>
      <div class="modal-content">
        <swiper
          :navigation="true"
          :modules="[Navigation]"
          :slidesPerView="1"
          :initialSlide="initialSlide"
          :loop="true"
          class="story-swiper"
        >
          <swiper-slide v-for="story in stories" :key="story.title" class="testimonial">
            <div class="container">
              <div class="is-header">
                <lazy-img
                  class="image logo"
                  :src="story.logo.figure"
                  :alt="story.logo.alt"
                />
                <ul class="info-wrap">
                  <li class="info">
                    <p>Industry</p>
                    <p>{{ story.industry }}</p>
                  </li>
                  <li class="info">
                    <p>Employees</p>
                    <p>{{ story.employees }}</p>
                  </li>
                  <li class="info">
                    <p>Region</p>
                    <p>{{ story.region }}</p>
                  </li>
                </ul>
              </div>
              <lazy-img class="image cover" :src="story.cover" />
              <p v-if="story.industry === 'Government'" class="caption">
                Kenmore City Hall
              </p>
              <h2 class="title">{{ story.title }}</h2>
              <h3 class="subtitle">Key Factors</h3>
              <ul class="key-factor-wrap">
                <li class="key-factor" v-for="factor in story.key_factors" :key="factor">
                  <p>{{ factor }}</p>
                </li>
              </ul>
              <div class="testimonial">
                <div class="content">
                  <svg-icon
                    v-if="story.industry === 'Government'"
                    class="quote-mark is-left"
                    icon-name="testimonials-quote-teal"
                  />
                  <svg-icon
                    v-else
                    class="quote-mark is-left"
                    icon-name="testimonials-quote"
                  />
                  <md-format :content="story.testimonial.body" />
                  <svg-icon
                    v-if="story.industry === 'Government'"
                    class="quote-mark is-right"
                    icon-name="testimonials-quote-teal"
                  />
                  <svg-icon
                    v-else
                    class="quote-mark is-right"
                    icon-name="testimonials-quote"
                  />
                </div>
                <div class="author">
                  <div class="logo-name has-name">
                    <md-format class="name" :content="story.testimonial.author.name" />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div @click="next" class="navigation next">
        <svg-icon icon-name="shared-nav-icon"></svg-icon>
      </div>
    </div>
    <div class="modal-close" @click="isCardsModal = false">
      <svg-icon class="icon" icon-name="shared-close" />
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper';
const props = defineProps({
  stories: {
    type: Object,
    required: true,
  },
});
const initialSlide=inject('initialSlide');
const isCardsModal = inject('isCardsModal');
watchEffect(() => {
  if (isCardsModal.value) {
    document.documentElement.classList.add('is-clipped');
  } else {
    document.documentElement.classList.remove('is-clipped');
  }
});
const prev = () => {
  const prevBtn = document.querySelector('.story-swiper .swiper-button-prev');
  console.log(prevBtn);
  prevBtn.click();
};
const next = () => {
  const nextBtn = document.querySelector('.story-swiper .swiper-button-next');
  console.log(nextBtn);
  nextBtn.click();
};
</script>
<style lang="sass" scoped>
@import '@css/base'
.customer-card-modal
  display: flex
  align-items: center
  flex-direction: column
  justify-content: center
  overflow: hidden
  position: fixed
  bottom: 0
  left: 0
  right: 0
  top: 0
  z-index: 9999
  .modal-close
    height: 32px
    width: 32px
    border-radius: 50%
    cursor: pointer
    position: absolute
    z-index:1000
    fill: #fff
    display: flex
    justify-content: center
    align-items: center
    right: 10px
    top: 10px
    .icon
      width: 20px
      height: 20px
    &:hover
      background-color: rgba(10,10,10,.3)
.modal-content
  background-color: #fff
  overflow: auto
  position: relative
  z-index: 10
  border-radius: 4px
  +tablet
    width: calc(100vw - 200px)
    margin: 0 auto
    max-height: calc(100vh - 40px)
  +mobile
    width: 100vw
    max-height: calc(100vh - 150px)

.modal-background
  position: absolute
  bottom: 0
  left: 0
  right: 0
  top: 0
  background: rgba(136,136,136,.69)
  backdrop-filter: blur(10px)
.story-swiper
  font-size: 18px
  +mobile
    font-size: 14px
  .container
    padding: 84px 90px
    +mobile
      padding: 16px 40px
  .image
    &.logo
      height: 80px
      @media (min-width:1024px)
        margin-bottom: 52px
    &.cover
      width: 100%

.swiper-wrap
  display: flex
  align-items: center
  .navigation
    width: 42px
    height: 42px
    border-radius: 50%
    color: $vibe-white
    background-color:$vibe-black
    cursor: pointer
    z-index: 20
    &.prev
      transform: rotate(180deg)
      margin-right:42px
      +mobile
        left: 20px
    &.next
      margin-left: 42px
      +mobile
        right: 20px
    .svg-icon
      width: 42px
      height: 42px
    +mobile
      position: absolute
  .title
    font-size: 46px
    text-align: center
    font-weight: $vibe-bold
    margin: 56px auto 28px
    font-family: $vibe-family-head
    +mobile
      margin-top: 18px
      font-size: 24px
  .subtitle
    text-align: center
    font-size: 24px
    font-weight: $vibe-bold
    font-family: $vibe-family-head
    margin-bottom: 1.5rem
    +mobile
      font-size: 20px
  .is-header
    @media (min-width:1024px)
      display: flex
      justify-content: space-between
      align-items: center
  .info-wrap
    display: flex
    justify-content: space-between
    margin: 24px 12px 52px
    font-family: $vibe-family-head
    +mobile
      margin-bottom: 24px
    .info
      text-align: center
      line-height: 27px
      p:first-child
        font-weight: $vibe-bold
  .key-factor-wrap
    display: flex
    justify-content: space-between
    max-width: 660px
    margin: auto
    .key-factor
      background-color: #f4f4f4
      text-align: center
      border-radius: 50%
      display: flex
      align-items: center
      width: 160px
      height: 160px
      +mobile
        font-size: 14px
        width: 98px
        height: 98px
      p
        max-width: 124px
        margin: auto
  .testimonial
    margin-top: 64px
    .content
      padding: 48px
      margin-bottom: 1.5rem
      position: relative
      +tablet
        font-size: 22px
      +mobile
        font-size: 16px
      .quote-mark
        position: absolute
        width: 32px
        height: 32px
        &.Government
          fill: $vibe-teal
        &.is-left
          left: 0
          top: 0
        &.is-right
          right: 0
          bottom: 0
    .author
      display: flex
      margin-top: 46px
      padding-left: 48px
      justify-content: flex-start
      +tablet
        text-align: center
      .name
        font-size: 18px
        line-height: 32px
        font-family: $vibe-family-body
        +mobile
          font-size: 16px
        :deep(p):first-child
          font-weight: $vibe-bold
          margin-bottom: 8px
  .caption
    font-size: 12px
    margin-top: 10px
    font-family: $vibe-family-body
</style>
