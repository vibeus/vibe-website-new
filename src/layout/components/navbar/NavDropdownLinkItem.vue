<template>
  <a class="dropdown-item" :href="item.link">
    {{ item.text }}
  </a>
</template>

<script setup>

const props = defineProps({
  item: {
    type: Object,
  }
});
</script>
