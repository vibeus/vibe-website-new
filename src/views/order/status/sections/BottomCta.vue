<template>
  <section class="bottom-cta" id="bottom-cta">
    <div class="container">
      <h1>{{bottomcta.title}}</h1>
      <div class="cta">
       <a :herf="bottomcta.cta.buttons[0].url">{{bottomcta.cta.buttons[0].title}}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImg from '/@img/order/status/hero.jpg';
const props = defineProps({
  bottomcta: {
    type: Object,
    required: true
  }
});
console.log('resources: ', props.bottomcta);

</script>
<style lang="sass" scoped>
// .section.bottom-cta
//   .title
//     margin: auto
//     font-size: 36px
//     line-height: 1.4
//     margin-bottom: 32px
//     +touch
//       font-size: 26px
//       margin-bottom: 40px
//       max-width: 300px
//   +vertical-padding(120px)
//   background-color: $vibe-teal
//   text-align: center
//   .bottom-bg
//     position: absolute
//     top: -60px
//     right: -330px
//     svg
//       width: 528px
//       height: 477px
//   .title
//     margin-bottom: 28px
</style>
