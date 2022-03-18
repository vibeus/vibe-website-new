<script setup>
import { computed } from 'vue';
import { useLanguageLinks } from '/@/composables/nav';
import { useRepo } from '/@/composables/repo';
import NavLink from '/@vcomp/NavLink.vue';
import NavDropdownLink from './NavDropdownLink.vue';

const { theme } = useData();
const localeLinks = useLanguageLinks();
const repo = useRepo();
const show = computed(() => theme.value.nav || repo.value || localeLinks.value);
</script>

<template>
  <nav v-if="show" class="nav-links">
    <template v-if="theme.nav">
      <div v-for="item in theme.nav" :key="item.text" class="item">
        <NavDropdownLink v-if="item.items" :item="item" />
        <NavLink v-else :item="item" />
      </div>
    </template>

    <div v-if="localeLinks" class="item">
      <NavDropdownLink :item="localeLinks" />
    </div>

    <div v-if="repo" class="item">
      <NavLink :item="repo" />
    </div>
  </nav>
</template>

<style scoped>
.nav-links {
  border-bottom: 1px solid var(--c-divider);
}

@media (min-width: 720px) {
  .nav-links {
    display: flex;
    align-items: center;
    border-bottom: 0;
  }

  .item + .item {
    margin-left: 18px;
  }
}
</style>
