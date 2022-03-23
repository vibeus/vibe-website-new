<template>
  <div class="navbar-item">
    <a class="navbar-link" v-bind="linkProps">
      {{ menu.title }}
    </a>
  </div>
</template>

<script setup>
import { useNavLink } from '/@/composables/navLink';

const props = defineProps({
  menu: {
    type: Object,
    required: true
  }
});

const propsRefs = toRefs(props);

const { props: linkProps } = useNavLink(propsRefs.menu);
</script>

<style lang="sass" scoped>
.navbar-link
  position: relative
  z-index: 999
  display: flex
  align-items: center
  padding: 0.5rem 0.75rem
  color: #111
  line-height: 1.5
  cursor: pointer
  &:hover
    color: #f66
    text-decoration: none
</style>
