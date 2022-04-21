<script setup>
import { useSideBar } from '@/composables/sideBar';
import { SideBarLink } from './SideBarLink';

const items = useSideBar();
</script>

<template>
  <ul v-if="items.length > 0" class="sidebar-links">
    <SideBarLink v-for="item of items" :item="item" :key="item" />
  </ul>
</template>
