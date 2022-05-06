<template>
  <div class="nav-item">
    <a
      class="nav-link"
      v-bind="linkProps"
    >
      {{ menu.title }}
    </a>
  </div>
</template>

<script setup>
import { useNavLink } from '@/composables/navLink';

const props = defineProps({
  menu: {
    type: Object,
    required: true
  }
});

const propsRefs = toRefs(props);

const { props: linkProps } = useNavLink(propsRefs.menu);
</script>

