<template>
  <section class="section is-form">
    <div class="container">
      <h3 class="title">
        {{ stepContent.form_content.title }}
      </h3>
      <md-format
        class="body"
        :content="stepContent.form_content.body"
      />
      <VForm :form-data="stepContent.form_content.form" />
    </div>
  </section>
</template>
<script setup>
import VForm from '@vcomp/Form.vue';
const props = defineProps({
  stepContent: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.section.is-form
  .title
    color: $vibe-purple
    font-weight: $vibe-bold
    font-size: 32px
    line-height: 45px
    margin-bottom: 24px
  .body
    margin-bottom: 24px
    font-size: 16px
    :deep(a)
      color: $vibe-purple
      text-decoration: underline
      font-family: $vibe-family-body

</style>
