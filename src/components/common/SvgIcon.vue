<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
  >
    <use
      width="100%"
      height="100%"
      :href="symbolId"
      :fill="color"
    />
  </svg>
</template>

<script setup>

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  iconName: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#333',
  },
}); 

const symbolId = computed(() => `#${props.prefix}-${props.iconName}`);
const svgClass = computed(() => {
  if (props.iconClass) {
    return 'svg-icon ' + props.iconClass;
  } else {
    return 'svg-icon';
  }
});
</script>

<style lang="sass" scoped>
.svg-icon
  width: 100%
  height: 100%
  min-width: 16px
  min-height: 16px
  fill: inherit
  use
    fill: inherit
</style>
