<template>
  <el-form
    ref="form"
    :model="formData"
    :rules="rules"
  >
    
    <template v-for="item in buttons" :key="item.title">
      <el-button class="button {{item.class}}" @click="submitForm">
        {{item.title}}
      </el-button>
    </template>
  </el-form>
</template>

<script setup>
import { validEmail } from '/@/utils/validate';

const props = defineProps({
  form: {
    type: Object,
    required: true
  }
});

const { action, buttons, controls } = Object.assign({}, props.form);

/* Start Data */
const formData = ref(null);

(function initFormData() {
  
})();

const rules = {
  email: [{ required: true, trigger: 'blur', validator: validEmail }],
};

/* End Data */

const submitForm = () => {
  proxy.$refs.loginForm.validate(valid => {
    if (valid) {
      console.log('valid: ', valid);
    }
    console.log('invalid');
  });
};
</script>

<style lang="sass" scoped>

</style>
