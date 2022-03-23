<template>
  <div v-if="nav" class="navbar-start">
    <template v-for="menu in theme.nav" :key="menu.title">
      <NavDropdownLink v-if="menu.submenu || menu.columnSubmenu" :menu="menu" />
      <NavLink v-else :menu="menu" />
    </template>
  </div>
</template>

<script setup>
import NavLink from './components/NavLink.vue';
import NavDropdownLink from './components/NavDropdownLink.vue';

const { theme } = useData();
const nav = computed(() => theme.value.nav);
</script>


<style lang="sass" scoped>
.navbar-start
  display: flex
  justify-content: flex-start
  align-items: stretch
  margin-right: auto
</style>
