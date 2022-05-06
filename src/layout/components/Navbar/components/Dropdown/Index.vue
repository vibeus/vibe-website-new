<template>
  <div
    v-if="nav"
    class="nav-dropdown-box"
  >
    <template
      v-for="menu in theme.nav"
      :key="menu.title"
    >
      <Box
        v-if="menu.submenu || menu.columnSubmenu"
        :menu="menu"
      />
      <Link
        v-else
        :menu="menu"
      />
    </template>
  </div>
</template>

<script setup>
import Link from './Link.vue';
import Box from './Box.vue';

const { theme } = useData();
const nav = computed(() => theme.value.nav);
</script>


<style lang="sass" scoped>
@import '@css/base'
.nav-dropdown-box
  display: flex
  justify-content: flex-start
  align-items: stretch
  margin-right: auto
  +until(1080)
    display: block
    width: 100vw
    background-color: #fff
</style>
