<template>
  <section class="contact">
    <div class="container is-form">
      <VForm :formData="contactSection.form" @msgSuccess="elMsgSuccess" />
    </div>
    <div class="container is-support">
      <h2 class="title">{{contactSection.support.title}}</h2>
      <h2 class="subtitle">{{contactSection.support.subtitle}}</h2>
      <div class="content" v-html="contactSection.support.body"></div>
    </div>
    <GetInTouch />
  </section>
</template>
<script setup>
import VForm from '/@/components/Form.vue';
import GetInTouch from '/@/components/GetInTouch.vue';
const props = defineProps({
  contactSection: {
    type: Object,
    required: true,
  },
});
console.log('contactSection: ', props.contactSection);
</script>
<style lang="sass" scoped>
@import '/@css/base'
*
  margin: 0
  padding: 0
// p
//   line-height: unset
// .title 
//   color: $vibe-black
//   font-family: $vibe-family-heading
//   font-weight: $vibe-bold
//   line-height: 1.125
// .title:not(:last-child)
//   margin-bottom: 1.5rem
.contact
  color: $vibe-black
  padding-top: 0
  padding-bottom: 80px
  background: linear-gradient(to bottom,#fc0 220px,#F4F4F4 220px)
  .container
    flex-grow: 1
    margin: 0 auto
    position: relative
    width: auto
  .container.is-form 
    background-color: #fff
    max-width: 760px
    padding: 64px 72px
    +mobile
      padding: 8px 20px
  .container.is-support
    margin-top: 40px
  .title
    text-align: center
    font-size: 24px
    border:0
    &:not(:last-child)
      margin-bottom: 1.5rem
  .subtitle
    text-align: center
    font-size: 24px
    border:0
  .title:not(.is-spaced)+.subtitle
    margin-top: -1.25rem
  .content 
    text-align: center



</style>
