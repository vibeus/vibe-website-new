<template>
  <div class="modal customer-card">
    <div class="modal-background"></div>
    <div class="modal-content">
      <!-- swiper -->
    </div>
    <div class="modal-close" @click="showCardsModal = false">
      <svg-icon class="icon" icon-name="shared-close" />
    </div>
  </div>
</template>
<script setup>
// const props = defineProps({
//   videoId: {
//     type: String,
//     required: true,
//   },
// });
const showCardsModal = inject('showCardsModal');
</script>