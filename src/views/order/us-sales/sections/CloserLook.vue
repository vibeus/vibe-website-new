<template>
  <section class="section is-closer-look">
    <div class="container">
      <div class="title is-section-title">{{ closer_look.title }}</div>
      <div class="grid-container">
      <template v-for="(gridItem, index) in closer_look.itemList" :key="index">
        <div class="grid-item">
          <figure class="bg-figure">
          </figure>
          <div class="text-box">
            <h3 class="item-title">{{ gridItem.title }}</h3>
            <p class="item-content">{{ gridItem.content }}</p>
          </div>
          <figure class="image">
            <!-- <lazy-img class="image" :src="`${gridItem.figure}`"/> -->
          </figure>
        </div>
      </template>
              <!-- <figure class="bg-figure">
              </figure>
              <div class="text-box">
                <h3 class="item-title">{{ title }}</h3>
                <p class="item-content">{{ content }}</p>
              </div>
              <figure class="image">
              </figure> -->
        <!-- <div class="row-large-box is-hidden-mobile">
          <figure class="image left-image">
            {{ partial "common/srcset" (dict "resource" (resources.Get .left_figure)) }}
          </figure>
          <div class="text-box">
            <h3 class="item-title">{{ .title | markdownify }}</h3>
            <p class="item-content">{{ .content | markdownify }}</p>
          </div>
          <figure class="image right-image">
            {{ partial "common/srcset" (dict "resource" (resources.Get .right_figure)) }}
          </figure>
        </div> -->
      </div>
      <!-- {{ with .cta }}
        {{ partial "common/section-cta" . }}
      {{ end }} -->
    </div>
  </section>
</template>

<script setup>
const { frontmatter: fm } = useData();
const { closer_look } = fm._value
</script>

<style lang="sass" scoped>
@import '/@css/base'
.section.is-closer-look
  padding: 64px 24px
  +mobile
    padding-bottom: 60px
  .container
    display: block
    .title.is-section-title
      margin-bottom: 56px
      text-align: center
      +mobile
        margin-bottom: 32px
    .grid-container
      display: grid
</style>