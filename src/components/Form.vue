<template>
  <form class="form" ref="form" :model="formItem" :rules="rules">
    <template v-for="(row, idx) in controls" :key="idx">
         <template v-for="item in row" :key="item.name">
          <label class="form-label" style="margin-left: 0px;">{{item.placeholder}}</label>
            <select v-if="item.dropdown" placeholder="Please select" :required="item.required">
              <option
                v-for="option in item.dropdown"
                :key="option"
                :label="option"
                :value="option"
              />
            </select>
           <input v-else :name="item.name" class="form-control input" :type="item.type" :required="item.required">
        </template>
    </template>
    <template v-for="item in buttons" :key="item.title">
      <a href="" :class="item.class" @click="submitForm">{{item.title}}</a>
    </template>
  </form>
</template>

<script setup>
import { ElInput, ElRow, ElButton, ElMessage, ElForm, ElFormItem, ElSelect, ElOption } from 'element-plus';
import { validEmail } from '/@/utils/validate';

const props = defineProps({
  formData: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['msgSuccess']);

const { action, buttons, controls } = Object.assign({}, props.formData);
console.log();
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
    } else console.log('invalid');
  });
};
</script>

<style lang="sass" scoped>
@import "/@/assets/css/_common.sass"
.form
  input::-webkit-outer-spin-button, input::-webkit-inner-spin-button
    -webkit-appearance: none
    margin: 0
  input[type=number]
    -moz-appearance: textfield
  .button
    height: 50px
    font-size: 20px
    font-weight: $vibe-bold
    background-color: #0a0a0a
    color: #fff
    text-decoration: none
    font-family: Stratos,BlinkMacSystemFont,-apple-system,microsoft yahei,segoe ui,roboto,oxygen,ubuntu,cantarell,droid sans,helvetica neue,helvetica,arial,sans-serif
  .button.is-rounded 
    border-radius: 290486px
    padding-left: calc(1em + 0.25em)
    padding-right: calc(1em + 0.25em)

</style>
