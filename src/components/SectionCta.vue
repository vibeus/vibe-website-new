<template>
  <div class="cta is-section">
    <template v-for="(button, index) in cta.buttons" :key="index">
      <a class="button" :class="button.class" :href="button.link" :target="button.target">
        {{ button.title}}
      </a>
    </template> 
  </div>  
</template>

<script setup>
const props = defineProps({
  cta: {
    type: Object,
    required: true
  }
});
</script>

<style lang="sass">
.cta.is-section
  text-align: center
  padding-top: 60px
  .button
    line-height: 52px
  .is-outlined:hover 
    color: #F4F4F4
    background-color: #111111
</style>
