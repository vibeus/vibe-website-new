<template>
  <section
    id="get-started"
    class="section is-get-started"
  >
    <div class="container">
      <h1 class="title is-section-title">
        {{ getStarted.title }}
      </h1>
      <div class="links-wrap">
        <div
          v-for="item in getStarted.items"
          :key="item.title"
          class="links is-one-third"
        >
          <h2 class="item-title">
            {{ item.title }}
          </h2>
          <a
            v-for="link in item.links"
            :key="link.text"
            class="link"
            :href="link.url"
            target="_blank"
          >{{ link.text }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  getStarted: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.section.is-get-started
    padding: 120px 24px
    background-color: #f4f4f4
    +mobile
        padding-top: 60px
        padding-bottom: 60px
    .container
        max-width: 1152px
    .title
        font-size: 48px
        line-height: 60px
        margin-bottom: 82px
        text-align: center
        +mobile
            font-size: 32px
            line-height: 38px
            margin-bottom: 32px
    .links-wrap
        display: flex
        justify-content: space-between
        +mobile
            flex-direction: column
            align-items: center
        .links
            max-width: 350px
            border-radius: 10px
            background-color: #fff
            margin: 12px
            padding: 35px
            display: flex
            flex-direction: column
            justify-content: space-between
            font-family: $vibe-family-body
            +mobile
                max-width: 300px
                font-size: 16px
                text-align: center
            .link
                display: block
                font-size: 18px
                line-height: 50px
                &:hover
                    text-decoration: underline
                    color: $vibe-purple

            .item-title
                word-wrap: normal
                max-width: 300px
                font-size: 24px
                line-height: 34px
                font-family: $vibe-family-head
                font-weight: $vibe-bold
                +tablet
                    margin-bottom: 1.25rem
                +mobile
                    margin-bottom: 1rem
</style> 
