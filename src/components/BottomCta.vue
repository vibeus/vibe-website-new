<template>
  <section
    id="bottom-cta"
    class="section bottom-cta"
  >
    <div class="container">
      <div class="bottom-bg">
        <svg-icon icon-name="shared-what-bg" />
      </div>
      <h1 class="title">
        {{ bottomCta.title }}
      </h1>
      <div class="cta">
        <template
          v-for="(item, idx) in bottomCta.cta.buttons"
          :key="idx"
        >
          <a
            :class="'button ' + item.class"
            :href="item.url"
          >
            {{ item.title }}
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  bottomCta: {
    type: Object,
    required: true
  }
});

</script>
<style lang="sass" scoped>
@import "@css/base"
section.bottom-cta
  padding-top: 120px
  padding-bottom: 120px
  background-color: $vibe-teal
  text-align: center
  overflow: hidden
  .container
    position: relative
    flex-direction: column
  .bottom-bg
    position: absolute
    top: -60px
    right: -330px
    svg
      width: 528px
      height: 477px
  .title
    margin-top:0
    margin-bottom: 32px
    color: $vibe-black
    font-family: Stratos,BlinkMacSystemFont,-apple-system,microsoft yahei,segoe ui,roboto,oxygen,ubuntu,cantarell,droid sans,helvetica neue,helvetica,arial,sans-serif
    font-size: 36px
    font-weight: 500
    line-height: 1.4
</style>
