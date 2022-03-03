<template>
  <el-form
    ref="form"
    :model="formItem"
    :rules="rules"
  >
    <template v-for="(row, idx) in controls" :key="idx">
      <el-row>
        <template v-for="item in row" :key="item.name">
          <el-form-item :label="item.placeholder">
            <el-select
              v-if="item.dropdown"
              placeholder="Please select"
              :required="item.required"
            >
              <el-option v-for="option in item.dropdown" :key="option" :label="option" :value="option" />
            </el-select>
            <el-input v-else
              v-model="formItem[item.name]"
              :required="item.required"
              :type="item.type"
              :autosize="item.type==='textarea'"
            />
          </el-form-item>
        </template>
      </el-row>
    </template>
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
  formData: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['msgSuccess']);

const { action, buttons, controls } = Object.assign({}, props.formData);

/* Start Data */
const { proxy } = getCurrentInstance();
const formItem = ref({});

(function initFormData() {
  controls.forEach(item => {
    formItem.value[item.name] = null;
  });
})();

const rules = {
  // email: [{ required: true, trigger: 'blur', validator: validEmail }],
};

/* End Data */

const submitForm = () => {
  proxy.$refs.form.validate(valid => {
    if (valid) {
      emit('msgSuccess', 'Submitted successfully');
    } else
      console.log('invalid');
  });
};
</script>

<style lang="sass" scoped>

</style>
