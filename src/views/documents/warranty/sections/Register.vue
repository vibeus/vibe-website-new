<template>
  <section class="section is-register">
    <div class="container is-form">
      <VForm class="form" :formData="register.form" />
    </div>
  </section>
</template>

<script setup>
import VForm from "/@/components/Form.vue";
const props = defineProps({
  register: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="sass">
@import "/@css/base"
.is-register
  padding: 3rem 1.5rem 0
  .container
    max-width: 1100px
  .form
    width: 100%
</style>
