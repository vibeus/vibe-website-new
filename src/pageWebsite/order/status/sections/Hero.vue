<template>
  <section class="hero" id="hero">
    <div class="form-container">
      <div class="title">{{hero.title}}</div>
      <Form
        :form="hero.form"
        @msgSuccess="elMsgSuccess"
      />
    </div>
  </section>
</template>

<script setup>
import Form from '/@vcomp/Form.vue';
import { ElMessage } from 'element-plus';

const props = defineProps({
  hero: {
    type: Object,
    required: true
  }
});

const elMsgSuccess = msg => {
  ElMessage.success(msg, 3);
};
</script>

<style lang="sass" scoped>

</style>
