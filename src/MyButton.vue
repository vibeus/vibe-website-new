<template>
  <el-button type="primary" class="button">
    <slot></slot>
  </el-button>
  {{a}}
  4657asd
</template>

<script setup>
const a = ref(0);
</script>

<style scoped lang="sass">
.button
  padding: 6px 24px
</style>
