<template>
  <section class="section is-trusted-inductry">
    <div class="container">
      <div class="title">
        {{ title }}
      </div>
      <Customer :customers="customers" />
    </div>
  </section>
</template>

<script setup>
import Customer from '@vcomp/Customer.vue';
const { frontmatter: fm } = useData();
const { title, customers = [] } = fm._value.trust;

</script>
<style lang="sass" scoped>
@import '@css/base'
.is-trusted-inductry
  padding: 120px 103px
  background-color: $vibe-white
  +mobile
    padding: 60px 24px
  .container
    flex-direction: column
  .title
    text-align: center
    margin-bottom: 72px
    +desktop
      font-size: 48px
    +tablet-only
      font-size: 36px
    +mobile
      font-size: 32px
      margin-bottom: 32px
</style>
