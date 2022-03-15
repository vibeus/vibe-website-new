<template>
  <section class="bottom-cta" id="bottom-cta">
    <div class="container">
    <div class="bottom-bg">
      <svg-icon icon-name="shared-what-bg" />
    </div>
      <h1 class="title">{{bottomcta.title}}</h1>
      <div class="cta">
       <a class="button" :herf="bottomcta.cta.buttons[0].url">{{bottomcta.cta.buttons[0].title}}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  bottomcta: {
    type: Object,
    required: true
  }
});
console.log('resources: ', props.bottomcta);

</script>
<style lang="sass" scoped>
@import "/@/assets/css/_common.sass"
a
  color: $vibe-black
  cursor: pointer
  text-decoration: none
section.bottom-cta
  padding-top: 120px
  padding-bottom: 120px
  background-color: $vibe-teal
  text-align: center
  .container
    position: relative
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
  .button
    display: inline-block
    padding: 12px 40px
    width: auto
    min-width: unset
    height: 50px
    border-width: 2px
    border-color: transparent
    border-radius: 290486px
    background-color: #0a0a0a
    color: #fff
    font-size: 20px
    font-weight: 500
    line-height: 25px
</style>
