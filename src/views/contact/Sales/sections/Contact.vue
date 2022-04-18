<template>
  <section class="contact">
    <div class="container is-form">
      <VForm :formData="contactSection.form" @msgSuccess="elMsgSuccess" />
    </div>
    <div class="container is-support">
      <h2 class="title">{{contactSection.support.title}}</h2>
      <h2 class="title">{{contactSection.support.subtitle}}</h2>
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

.contact
  color: $vibe-black
  padding-top: 0
  padding: 0 1.5rem 80px
  background: linear-gradient(to bottom,#fc0 220px,#F4F4F4 220px)
  +mobile
    padding-bottom: 40px

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
    font-family: $family-body
    ::v-deep a
      font-weight: 500
      text-decoration: underline
      &:hover
        color: #66c
    .title
      color: $vibe-black
      font-family: $family-head
      font-weight: $vibe-bold
      line-height: 1.125
      text-align: center
      font-size: 24px
      border:0
      &:not(:last-child)
        margin-bottom: 1.5rem
      &:not(.is-spaced)+.title
        margin-top: -1.25rem

  .content 
    text-align: center



</style>
