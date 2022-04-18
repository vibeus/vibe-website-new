<template>
  <section class="hero" id="hero">
    <div class="hero-bg">
      <lazy-img class="hero-image is-hidden-mobile" :src="hero.background" alt="" />
      <lazy-img class="hero-image is-hidden-tablet" :src="hero.background_mobile" alt="" />
    </div>    
    <div class="hero-body">
      <div class="container">
        <div class="form-container">
          <div class="title">{{hero.title}}</div>
          <VForm
            :formData="hero.form"
            @msgSuccess="elMsgSuccess"
          />
          <div class="error-message">The information you provided does not match our records.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import VForm from '/@vcomp/Form.vue';
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
  height: 657px
  overflow: hidden
  position: relative
  .hero-body
    height: 657px
    display: flex
    align-items: center
    flex-grow: 1
    flex-shrink: 0
    padding: 3rem 1.5rem
  .hero-bg
    position: absolute
    .hero-image
      min-height:657px
      width: 100%
      object-fit: cover
      object-position: center top
.form-container
    max-width: 493px
    padding: 16px 24px
    background: rgba(255,255,255,0.9)
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.11)
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
