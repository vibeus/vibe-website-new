<template>
  <form class="form" ref="form" :model="formItem">
    <template v-for="(row, idx) in controls" :key="idx">
      <div class="f-row">
        <template v-for="item in row" :key="item.name">
          <div class="form-outline">
            <select class="form-control select-input" v-if="item.dropdown" placeholder="Please select" :required="item.required">
              <option
                v-for="option in item.dropdown"
                :key="option"
                :label="option"
                :value="option"
              />
            </select>
            <input v-else :name="item.name" class="form-control input" :type="item.type" :required="item.required">
            <label class="form-label" style="margin-left: 0px;">{{item.placeholder}}</label>
          </div>
        </template>
      </div>
    </template>
    <div class="is-buttons">
      <template v-for="item in buttons" :key="item.title">
        <a href="" :class="item.class" @click="submitForm">{{item.title}}</a>
      </template>
    </div>
  </form>
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
@import '/@css/base'
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
  .form-outline
    position: relative
    width: 100%
    padding: .75rem 0
    outline: none
  .form-control
    position: relative
    width: 100%
    height: 2.5em
    min-height: auto
    -webkit-transition: all .2s linear
    transition: all .2s linear
    font-family: $family-body
    border: 0
    background: 0 0
    background-color: transparent
    border: none
    border-bottom: 1px solid #111
    border-radius: 0
    box-shadow: none
    outline: none
    ~ .form-label
      position: absolute
      top: 0
      left: 0
      padding-top: 1rem
      -webkit-transform-origin: 0 0
      transform-origin: 0 0
      -webkit-transition: all .2s ease-out
      transition: all .2s ease-out
      pointer-events: none
      font-size: 16px
      color: #111
      opacity: .6
    &:foucs
      -webkit-box-shadow: none
      box-shadow: none
    &:focus ~ .form-label
      color: #1266f1
      webkit-transform: translateY(-1rem) translateY(0.1rem) scale(.8)
      transform: translateY(-1rem) translateY(0.1rem) scale(.8)

  .is-buttons
    margin-top: 1.25rem
</style>
