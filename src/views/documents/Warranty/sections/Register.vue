<template>
  <section class="section is-register">
    <div class="container is-form">
      <VForm
        class="form"
        :form-data="register.form"
      />
    </div>
  </section>
</template>

<script setup>
import VForm from '@/components/Form.vue';
const props = defineProps({
  register: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="sass">
@import "@css/base"
.is-register
  padding: 3rem 1.5rem 0
  background-color: #fff
  .container
    max-width: 1100px
  .form
    width: 100%
</style>
