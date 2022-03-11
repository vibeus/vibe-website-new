<template>
  <section class="hero" id="hero">
    <lazy-img class="hero-image" :src="heroImg" alt="" ></lazy-img>
    <div class="hero-body">
      <div class="container">
      <div class="form-container">
        <div class="title">{{hero.title}}</div>
        <VForm
        :formData="hero.form"
        @msgSuccess="elMsgSuccess"
      />
    </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import VForm from '/@/components/Form.vue';
import { ElMessage } from 'element-plus';
import heroImg from '/@img/order/status/hero.jpg';
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
.hero
    align-items: stretch
    display: flex
    flex-direction: column
    justify-content: space-between
.hero-image
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0

.form-container
    max-width: 493px
    padding: 16px 24px
    background: rgba(255,255,255,0.9)
    box-shadow: 4px 4px 20px rgb(0 0 0 / 11%)
    border-radius: 8px
    padding: 48px
    backdrop-filter: blur(6px)
.hero .title 
    font-size: 36px
    color: #111
    font-family: Stratos,BlinkMacSystemFont,-apple-system,"Microsoft YaHei","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif
    font-size: 2rem
    font-weight: 500
    line-height: 1.125
</style>
