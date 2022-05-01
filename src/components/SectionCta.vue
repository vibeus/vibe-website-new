<template>
  <div class="cta is-section">
    <template
      v-for="(button, index) in cta.buttons"
      :key="index"
    >
      <a
        class="button"
        :class="button.class"
        :href="button.link"
        :target="button.target"
      >
        {{ button.title }}
      </a>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  cta: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="sass">
@import '@css/base'
.cta.is-section
  text-align: center
  padding-top: 60px
  .button
    box-sizing: border-box
    display: inline-block
    min-width: 250px
    +mobile
      width:100%
  .is-outlined:hover
    color: #F4F4F4
    background-color: $vibe-black
</style>
