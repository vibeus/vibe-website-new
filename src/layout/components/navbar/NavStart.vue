<template>
  <div v-if="nav" class="navbar-start">
    <template v-for="menu in theme.nav" :key="menu.title">
      <NavDropdownLink v-if="menu.submenu || menu.columnSubmenu" :menu="menu" />
      <NavLink v-else :menu="menu" />
    </template>
  </div>
</template>

<script setup>
import NavLink from './NavLink.vue';
import NavDropdownLink from './NavDropdownLink.vue';

const { theme } = useData();
const nav = computed(() => theme.value.nav);
</script>



<style scoped>
.nav-links {
  height: 66px;
  border-bottom: 1px solid var(--c-divider);
  font-size: 16px;
  color: #111
}

@media (min-width: 720px) {
  .nav-links {
    display: flex;
    align-items: center;
    border-bottom: 0;
    font-size: 16px;
  }
}

@media (min-width: 1200px) {
  .item + .item {
    margin-left: 18px;
  }
}
</style>
