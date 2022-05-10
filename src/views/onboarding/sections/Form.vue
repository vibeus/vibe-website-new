<template>
  <section class="section is-form">
    <div class="container">
      <h3 class="title">
        {{ formContent.title }}
      </h3>
      <div class="body">
        <VForm :form-data="formContent.form" />
      </div>
    </div>
  </section>
</template>
<script setup>
import VForm from '@vcomp/Form.vue';
const props = defineProps({
  formContent: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.section.is-form
  padding: 3rem 1.5rem
  +tablet
    padding-top: 118px
    padding-bottom: 118px
  .title
    font-size: 40px
    line-height: 45px
    margin-bottom: 48px
    text-align: center
    +mobile
      margin-bottom: 0.5rem
      padding-left: 30px
      padding-right: 30px
      font-size: 26px
      line-height: 36px
</style>
