<template>
  <section class="section is-faq">
    <div class="container">
      <h1 class="title faq-section-title">
        {{ faq.title }}
      </h1>
      <ul class="faq-wrapper">
        <li
          v-for="faqItem in faq.items"
          :key="faqItem.title"
          class="faq-item"
        >
          <h2 class="title faq-title">
            {{ faqItem.title }}
          </h2>
          <md-format
            class="faq-content"
            :content="faqItem.body"
          ></md-format>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  faq: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.section.is-faq
  padding: 120px 1.5rem
  .faq-section-title
    margin-bottom: 32px
    text-align: center
    font-size: 48px
    +mobile
      font-size: 32px

  .faq-wrapper
    .faq-item
      padding: 32px 0
      border-bottom: 1px solid #111
      &:first-child
        border-top: 1px solid #111
    .faq-title
      font-size: 21px
      margin-bottom: 32px
      +mobile
        font-size: 16px
        margin-bottom: 16px
    .faq-content
      font-family: $vibe-family-body
      line-height:27px
      +mobile
        font-size: 16px
      :deep(a)
        text-decoration: underline
        &:hover
          color: $vibe-purple
</style>
