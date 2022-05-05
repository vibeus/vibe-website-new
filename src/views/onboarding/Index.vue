<template>
  <main class="onboarding">
    <section class="section is-choices-section">
      <div class="vb-container">
        <div class="title">
          {{ onboardingChoices.title }}
        </div>
        <div class="content">
          {{ onboardingChoices.body }}
        </div>
        <div class="f-row onboarding-choices">
          <a
            v-for="choice in onboardingChoices.choices"
            :key="choice.title"
            class="product-box"
            :href="choice.url"
          >
            <div class="title is-hidden-mobile">{{ choice.title }}</div>
            <lazy-img
              class="image"
              :src="choice.figure"
              :alt="choice.name"
            />
            <md-format
              class="title is-hidden-tablet"
              :content="choice.title_mobile"
            />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
/* Start Data */
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);
const onboardingChoices = fm.value.onboarding_choices;
/* End Data */
</script>

<style lang="sass">
@import '@css/base'
.section.is-choices-section
  +tablet
    padding-top: 80px
    padding-bottom: 120px
    background-color:#F7F7F7
  +mobile
    padding-top: 48px
    padding-bottom: 68px
  .vb-container
    margin: 0 auto
    +mobile
      margin: 0 -9px
    +tablet
      width: 81vw
    +fullhd
      max-width: 1170px
    > .title
      +tablet
        margin-bottom: .5rem
        font-size: 40px
        line-height: 50px
      +mobile
        margin-bottom: .25rem
        font-size: 30px
        line-height: 38px
        text-align: center
    > .content
      line-height: 144%
      +tablet
        margin-bottom: 3.5rem
        font-size: 18px
      +mobile
        margin-bottom: 2rem
        font-size: 14px
        text-align: center

    .product-box
      +tablet
        padding: 40px 35px 22px
        border: 1.3px solid #F4F4F4
        border-radius: 8px
        background-color: #fff
      +mobile
        padding: 18px 19px 20px
        border: 1px solid #F4F4F4
        border-radius: 5px
      &:hover
        box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.07)
      &:not(:first-child)
        +tablet
          margin-left: 40px
        +mobile
          margin-left: .5rem
      .title
        text-align: center
        +tablet
          font-size: 18px
          line-height: 23px
        +mobile
          font-size: 12px
          line-height: 15px
          & p:last-child
            margin-top: 2px
            font-size: 14px
            line-height: 18px
      .image
        margin: 0 auto
        +tablet
          width: 210px
          height: 254px
        +mobile
          width: 126px
          height: 152px
          margin-bottom: 11px
</style>
