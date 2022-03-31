<template>
  <SideBar />
  <App />
</template>

<script setup>
import SideBar from './components/SideBar.vue';
import App from './sections/App.vue';
onMounted(() => {
});
</script>

<style lang="sass" scoped>
@import '/@css/base'
*
  margin:0
  padding:0
</style>
