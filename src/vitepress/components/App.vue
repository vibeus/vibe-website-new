<template>
  <div class="App">
    <Navbar />
    <el-button @click="a++" type="primary">test</el-button>
    a: {{a}}
  </div>
</template>

<script setup>
// import { useSidebar } from '../composables/sidebar';
import Navbar from './Navbar.vue';
// import VPLocalNav from './VPLocalNav.vue'
// import VPSidebar from './VPSidebar.vue'
// import VPContent from './VPContent.vue'

const a = ref(0);
// const {
//   isOpen: isSidebarOpen,
//   open: openSidebar,
//   close: closeSidebar
// } = useSidebar();

// A11y: cache the element that opened the Sidebar (the menu button)
//   then focus that button again when Menu is closed with Escape key
const triggerElement = document.activeElement;
// watchEffect(() => {
//   triggerElement = isSidebarOpen.value
//     ? (document.activeElement)
//     : undefined;
// });

const onEsacpe = (e) => {
  if (e.key === 'Escape' && isSidebarOpen.value) {
    closeSidebar();
    triggerElement?.focus();
  }
};

onMounted(() => {
  window.addEventListener('keyup', onEsacpe);
});
onUnmounted(() => {
  window.removeEventListener('keyup', onEsacpe);
});

// provide('close-sidebar', closeSidebar);
</script>



<style lang="sass" scoped>
.App
  display: flex
  flex-direction: column
  min-height: 100vh
  transition: background-color 0.5s


</style>
