<template>
  <form class="form" ref="form" :model="formItem">
    <template v-for="(row, idx) in controls" :key="idx">
      <div class="f-row">
        <template v-for="item in row" :key="item.name">
          <div class="form-outline">
            <select
              v-if="item.dropdown"
              class="form-control select-input"
              placeholder="Please select"
              :required="item.required"
              @change="onFormControlChange($event.target)"
            >
              <option v-for="option in item.dropdown" :label="option" :value="option" :key="option" />
            </select>
            <input
              v-else
              class="form-control input"
              :name="item.name"
              :type="item.type"
              :required="item.required"
              @change="onFormControlChange($event.target)"
            >
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
import { validEmail } from '@/utils/validate';

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

const onFormControlChange = el => {
  el.value ? el.classList.add('is-active'): el.classList.remove('is-active');
};

/* End Data */

const submitForm = () => {
  proxy.$refs.form.validate(async valid => {
    if (valid) {
      let fields = [];
      console.log('formItem.value: ', formItem.value);
      for (const pair of new FormData(formItem.value).entries()) {
        if (pair[0] === 'consent-to-communicate-checkbox') continue;
        fields.push({
          name: pair[0],
          value: pair[1],
        });
      }
      console.log('fields: ', fields);
      fields = [];
      // 特定表单逻辑处理
      // fields = (await dealSpecificForm(action, fields, form)) || fields;

      // const body = getHubspotBody(form, fields);

      // return fetch(form.action, {
      //   method: form.method,
      //   body: JSON.stringify(body),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      //   .then((r) => {
      //     if (r.ok) {
      //       form.parentElement.classList.add('is-submitted');
      //     } else {
      //       form.parentElement.classList.add('is-failed');
      //     }

      //     return r;
      //   })
      //   .catch((ex) => {
      //     form.parentElement.classList.add('is-failed');
      //     throw ex;
      //   });
    } else console.log('invalid');
  });
};

onMounted(() => {
  const form = proxy.$refs.form;
  Array.prototype.forEach.call(form, el => {
    el.value ? el.classList.add('is-active'): el.classList.remove('is-active');
  });
});
</script>

<style lang="sass" scoped>
@import '@css/base'
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
    border-radius: 9999px
    padding-left: calc(1em + 0.25em)
    padding-right: calc(1em + 0.25em)
  .form-outline
    position: relative
    width: 100%
    margin: 0 .75rem
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
    &:focus ~ .form-label, &.is-active ~ .form-label
      color: #1266f1
      webkit-transform: translateY(-1rem) translateY(0.1rem) scale(.8)
      transform: translateY(-1rem) translateY(0.1rem) scale(.8)

  .is-buttons
    margin-top: 1.25rem
</style>
