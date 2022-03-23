<template>
  <div class="navbar-item">
    <span class="navbar-link" :aria-label="menu.ariaLabel" @click="toggle">
      {{ menu.title }}
    </span>
    <div class="navbar-dropdown is-boxed">
      <template v-if="menu.submenu">
        <template v-for="item in menu.submenu" :key="item.title">
          <NavDropdownLinkItem :item="item" />
        </template>
      </template>
      <template v-else>
        <div class="f-row">
          <div class="f-col" v-for="submenu in menu.columnSubmenu" :key="submenu.title">
            <span class="dropdown-item is-column-title">{{submenu.title}}</span>
            <template v-for="item in submenu.items" :key="item.text">
              <NavDropdownLinkItem :item="item" />
            </template>
          </div>
        </div>
      </template>

      
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import NavDropdownLinkItem from './NavDropdownLinkItem.vue';

const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
});
console.log(props.menu.columnSubmenu);

const route = useRoute();

</script>

<style scoped>
</style>
