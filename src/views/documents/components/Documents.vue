<template>
  <section class="section documents">
    <div class="container">
      <div class="content">
        <md-format :content="content" />
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import "/@css/base"
.documents
  padding: 3rem 1.5rem
  font-size: 18px
  background-color: #fff
  +mobile
    font-size:16px
.container
  max-width: 1100px
.content
  max-width: 750px
  :deep(h1)
    font-size: 32px
    line-height: 30px
    margin-top: 40px
    margin-bottom: 24px
    display: inline-block
    box-shadow: inset 0 -10px rgb(102 102 204 / 30%)
    +mobile
      margin-bottom:1rem
      font-size: 1.375rem
  :deep(h2)
    font-size: 32px
    line-height: 30px
    margin-top: 40px
    margin-bottom: 1rem
    +mobile
      font-size: 1.375rem
  :deep(p:not(:last-child))
    margin-bottom: 1em
  :deep(ul)
    list-style: disc outside
    margin:1em 0 1em 2em
  :deep(ol:not([type]))
    list-style: decimal outside
    margin:1em 0 1em 2em
  :deep(li)
    list-style: unset
  :deep(li+li)
    margin-top: 0.25em
  :deep(a)
    text-decoration: underline
    color: $vibe-purple
    word-break: break-all
</style>
