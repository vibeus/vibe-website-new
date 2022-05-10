<template>
  <section class="section onboarding-webinar">
    <div class="webinar-body">
      <div class="content-box">
        <a
          :href="webinar.content_box.url"
          target="_blank"
        >
          <lazy-img
            class="image"
            :src="webinar.content_box.figure"
            :alt="webinar.content_box.figure"
          />
        </a>
      </div>
      <div class="info-box">
        <p class="content info-cate">
          {{ webinar.info_detail.info_cate }}
        </p>
        <h1 class="info-title">
          {{ webinar.info_detail.info_title }}
        </h1>

        <div class="info-time-wrap">
          <svg-icon
            class="link-icon"
            icon-name="onboarding-time-icon"
          />
          <span class="info-time">{{ webinar.info_detail.info_time.text }}</span>
        </div>
        <md-format
          class="info_content"
          :content="webinar.info_detail.info_content"
        ></md-format>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  webinar: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.section.onboarding-webinar
  background-color: #F1F1FC
  padding: 120px 0
  @media screen and (max-width: 990px)
    background-color: #fff
    padding: 1.5rem 1.2rem 3.5rem 1.2rem
  .webinar-body
    max-width: 1280px
    display: flex
    justify-content: center
    margin: 0 auto
    @media screen and (max-width: 990px)
      flex-direction: column
    .content-box
      border-radius: 10px 0 0 10px
      overflow: hidden
      @media screen and (max-width: 990px)
        border-radius: 10px 10px 0 0
      +mobile
        border-top-left-radius: .5rem
        border-top-right-radius: .5rem
        filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.08))
      .image
        width: 686px
        height: 386px
        @media screen and (max-width: 1299px) and (min-width: 991px)
          width: 570px
          height: 321px
        @media screen and (max-width: 990px)
          max-width: 1000px
          width: 100%
          height: auto
    .info-box
      flex-shrink: 1
      background-color: #fff
      border-radius: 0px 8px 8px 0px
      filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.08))
      box-sizing: border-box
      @media screen and (min-width: 1299px)
        padding: 48px 47px 51px 62px
        width: 515px
        height: 386px
      @media screen and (max-width: 1299px) and (min-width: 991px)
        padding: 32px 25px 51px 48px
        width: 429px
        height: 321px
      @media screen and (max-width: 990px)
        padding: 24px 19px 32px 29px
        border-radius: 0px 0px 8px 8px
      :deep(.info_content ul)
        list-style: disc
        @media screen and (max-width: 990px)
          margin-left: 10px
      .info-cate
        margin-bottom: 8px
        text-transform: capitalize
        font-family: $vibe-family-head
        font-weight: $vibe-bold
        font-size: 16px
        line-height: 20px
        color: #828282
        +mobile
          font-size: 12px
          line-height: 15px
      .info-title
        font-family: $vibe-family-head
        font-weight: $vibe-bold
        letter-spacing: 0px
        text-align: left
        margin-bottom: .5rem
        @media screen and (max-width: 1299px) and (min-width: 991px)
          margin-bottom: .3rem
          font-size: 26px
        +tablet
          font-size: 28px
          line-height: 35px
        +mobile
          font-size: 24px
          line-height: 30px
      .info-time-wrap
        display: flex
        align-items: center
        margin-bottom: 1rem
        max-height: 20px
        .link-icon
          width: 13px
          height: 13px
          vertical-align: middle
        @media screen and (max-width: 1299px) and (min-width: 991px)
          margin-bottom: .5rem
      .info-time
        font-family: $vibe-family-head
        font-size: 14px
        line-height: 144%
        color: #4F4F4F
        margin-left: .5rem
        +mobile
          font-size: 12px
          margin-left: .25rem

      :deep(.info_content li)
        list-style: disc
        font-family: $vibe-family-head
        font-size: 18px
        line-height: 160%
        @media screen and (max-width: 1299px)
          font-size: 16px
</style>
