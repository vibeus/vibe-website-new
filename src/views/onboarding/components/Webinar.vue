<template>
  <section class="section onboarding-webinar">
    <div class="webinar-body">
      <div class="content-box">
        <a class="bg-figure" :href="webinar.content_box.url" target="_blank">
          <lazy-img
            class="image"
            :src="webinar.content_box.figure"
            :alt="webinar.content_box.figure"
          />
        </a>
      </div>
      <div class="info-box">
        <p class="content info-cate">{{ webinar.info_detail.info_cate }}</p>
        <h1 class="info-title">{{ webinar.info_detail.info_title }}</h1>

        <div class="info-time-wrap">
          <svg-icon class="link-icon" icon-name="onboarding-time-icon" />
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
  +tablet
    padding: 120px 0
    position: relative
  @media screen and (max-width: 990px)
    background-color: #fff
    padding: 1.5rem 1.2rem 3.5rem 1.2rem
  .webinar-body
    max-width: 1280px
    display: flex
    justify-content: center
    margin: 0 auto
    +tablet
    @media screen and (max-width: 990px)
      flex-direction: column
    .content-box
      border-radius: 10px 0 0 10px
      overflow: hidden
      @media screen and (max-width: 990px)
        border-radius: 10px 10px 0 0
      +mobile
        position: relative
        flex-direction: column-reverse
        border-top-left-radius: .5rem
        border-top-right-radius: .5rem
        background-color:#6666CC
        filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.08))
        z-index: 0
      .image
        max-width: 686px
        width: 686px
        height: 386px
        @media screen and (max-width: 1299px) and (min-width: 991px)
          width: 570px
          height: 321px
        @media screen and (max-width: 990px)
          max-width: 1000px
          width: 100%
          height: auto
      .content-text
        +tablet
          padding-left: 2.5rem
        +mobile
          position: relative
          padding: 1.5rem 1rem 0 1rem
        p
          font-family: $vibe-family-head
          &:nth-of-type(1), &:nth-of-type(3)
            color:#8A8A8A
            +tablet
              font-size: 18px
              line-height: 25px
            +mobile
              font-size: 16px
              line-height: 20px
          &:nth-of-type(1)
            font-weight: $vibe-bold

          &:nth-of-type(2)
            strong
              font-weight: $vibe-bold
            +tablet
              font-size: 32px
              line-height: 46px
            +mobile
              font-size: 22px
              line-height: 27px
    .info-box
      background-color: #fff
      border-radius: 0px 8px 8px 0px
      filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.08))
      box-sizing: border-box
      @media screen and (min-width: 1299px)
        width: 515px
        height: 386px
      +tablet
        padding: 48px 47px 51px 62px
        flex-shrink: 1
        border-radius: 0px 8px 8px 0px
        filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.08))
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
        display: flex
        align-items: flex-end
        margin-bottom: 8px
        text-transform: capitalize
        font-family: 'Stratos'
        font-style: normal
        font-weight: $vibe-bold
        font-size: 16px
        line-height: 20px
        color: #828282
        +mobile
          font-size: 12px
          line-height: 15px
      .info-title
        font-family: $vibe-family-head
        font-style: normal
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
        // @media screen and (max-width: 471px)
        //   max-width: 346px
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
        font-family: 'Stratos'
        font-style: normal
        font-weight: 400
        font-size: 14px
        line-height: 144%
        color: #4F4F4F
        margin-left: .5rem

        +mobile
          font-size: 12px
          margin-left: .25rem

      :deep(.info_content li)
        list-style: disc
        font-family: 'Stratos'
        font-style: normal
        font-weight: 400
        font-size: 18px
        @media screen and (max-width: 1299px)
          font-size: 16px
        line-height: 160%
        color: #000
        @media screen and (max-width: 990px)
          font-size: 16px
      .select-box.select-webinar
          select
            font-family: $vibe-family-body
            height: 40px
            width: 100%
            border: none
            border-bottom: 1px solid #111
            margin-bottom: 1.25rem
      .form-wrapper
        #onboarding-webinar-form
          .columns
            margin-bottom: .5rem
            &.is-buttons
              +tablet
                margin-top: 36px
        &.is-submitted
          visibility: hidden
          .submitted
            display: flex
            visibility: visible
            background: #fff
            align-items: center
        .form.is-vibe-form
          .form-label
            color: #BDBDBD
          button
            width: 100%
          .privacy
            text-align: center
            font-size: 12px
            color: #A2A2A2
            a
              color: #A2A2A2
              &:hover
                color: $vibe-purple

        .check-info-box
          display: flex
          .check-box
            margin-top: .15rem
          .check-text
            font-family: $vibe-family-body
            font-weight: 400
            line-height: 18px
            color: #575757
            padding-left: .5rem
            +tablet
              font-size: 13px
            +mobile
              font-size: 12px
</style>
