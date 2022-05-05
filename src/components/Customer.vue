<template>
  <div class="columns is-multiline is-customers is-mobile">
    <template v-for="(item, index) in customers">
      <div
        v-if="index < 8"
        :key="index"
        class="column is-one-quarter-tablet is-half-mobile"
      >
        <figure class="image is-logo">
          <lazy-img
            class="image"
            :src="`security/customer/${item.img}`"
            :alt="`${item.img}-${index}`"
          />
        </figure>
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  customers: {
    type: Array,
    default: () => []
  }
});

</script>

<style lang="sass" scoped>
.columns.is-customers
  max-width: 1040px
  margin: auto
  .image.is-logo
    max-width: 220px

</style>
