<template>
  <div class="navbar-item">
    <a class="item" v-bind="linkProps">
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

const { props: linkProps, isExternal } = useNavLink(propsRefs.menu);
</script>
