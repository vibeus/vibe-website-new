<template>
  <section class="hero" id="hero">
    <div class="form-container">
      <div class="title">{{hero.title}}</div>
      <Form
        :form="hero.form"
      />
    </div>
  </section>
</template>

<script setup>
import Form from '/@vcomp/Form.vue';

const props = defineProps({
  hero: {
    type: Object,
    required: true
  }
});

</script>

<style lang="sass" scoped>

</style>
