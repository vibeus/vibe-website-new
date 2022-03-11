<template>
  <section class="hero" id="hero">
    <lazy-img :src="hero.background" alt="test"></lazy-img>
    <div class="form-container">
      <div class="title">{{hero.title}}</div>
      <VForm
        :formData="hero.form"
        @msgSuccess="elMsgSuccess"
      />
    </div>
  </section>
</template>

<script setup>
import VForm from '/@/components/Form.vue';
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
