// <!-- style=`background-color: {{ background_color}}` -->
<template>
  <section
    class="section is-figure-content-section"
    :class="contentData.class"
  >
    <div class="container">
      <h1 class="title is-section-title">
        {{ contentData.title }}
      </h1>
      <template
        v-for="(item, index) in contentData.items"
        :key="index"
      >
        <div
          class="columns is-figure-content is-vcentered" 
          :class="[item.class, { 'is-reversed': item.reversed ? true : false }]"
        >
          <div
            class="column is-image"
            :class="item.figure.style"
          >
            <figure class="image">
              <lazy-img
                class="image"
                :src="`${item.figure.base}`"
                :alt="`${item.figure.alt}`"
              />
            </figure>
          </div>

          <div class="column is-content">
            <h2 class="title is-content-title">
              {{ item.title }}
            </h2>
            <div class="content">
              <template v-if="item.multiple_text">
                <div
                  v-for="(bodyItem, bodyItemIndex) in item.body"
                  :key="bodyItemIndex" 
                  class="is-single-content"
                >
                  <span class="icon">
                    <svg-icon
                      class="image"
                      icon-name="common-circle-purple"
                      alt=""
                    ></svg-icon>
                  </span>
                  <div
                    class="text"
                    v-html="bodyItem.text"
                  ></div>
                  <!-- TODO mobile text -->
                  <!-- <div class="text {{ if .text_mobile }} is-hidden-mobile {{ end }}">{{ default .text (T .text) }}</div> -->
                  <!-- {{ if .text_mobile }} -->
                  <!-- <div class="text is-hidden-tablet">{{ default .text_mobile (T .text_mobile) }}</div> -->
                  <!-- {{ end }} -->
                </div>
              </template>
              <template v-else>
                <div v-html="item.body"></div>
              </template>
            </div>
            <!-- TODO: global component section-cta. -->
            <!-- {{ with .cta }}
            {{ partial "common/section-cta" . }}
            {{ end }} -->
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
const { frontmatter: fm } = useData();
const props = defineProps({
  contentData: {
    type: Object,
    required: true,
  }
});
</script>

<style lang="sass">
@import '@css/base'
.section.is-figure-content-section
  padding: 100px 24px
  background-color: $vibe-white
  +mobile
    padding: 60px 24px
  .container
    display: block
    width: unset
    +until-fullhd
      max-width: 90vw
    +fullhd
      max-width: 1240px
    .title.is-section-title
      text-align: center
      +tablet
        margin-bottom: 84px
      +mobile
        margin-bottom: 40px
    .columns:not(:last-child)
      +tablet
        margin-bottom: 80px
      +mobile
        margin-bottom: 40px
    .title.is-content-title, .content, .cta
      margin: auto
      +tablet
        max-width: 600px
    .title.is-content-title
      font-size: 30px
      line-height: 38px
      margin-bottom: 48px
      +mobile
        margin-bottom: 16px
    .content
      font-size: 18px
      line-height: 1.5
      +mobile
        font-size: 16px
      .is-content
        padding: 12px
      .is-single-content
        display: flex
        .icon
          margin-right: 16px
        &:not(:first-child)
          margin-top: 24px
      a
        color: $vibe-purple
        &:hover
          text-decoration: underline
    .columns
      margin: -12px
      &.is-reversed
        flex-direction: row-reverse
      &.is-vcentered
        +mobile
          display: block
          padding: 12px
</style>
