<template>
  <section class="bottom-cta" id="bottom-cta">
    <div class="container">
    <div class="bottom-bg">
      <svg-icon icon-name="shared-what-bg" />
    </div>
      <h1>{{bottomcta.title}}</h1>
      <div class="cta">
       <a :herf="bottomcta.cta.buttons[0].url">{{bottomcta.cta.buttons[0].title}}</a>
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
section.bottom-cta
  position: relative
  background-color: $vibe-teal
  text-align: center
  .bottom-bg
    position: absolute
    top: -60px
    right: -330px
    svg
      width: 528px
      height: 477px
  .title
    margin-bottom: 28px


</style>
