<template>
  <div class="cart-line-item">
    <lazy-img
      class="line-item-image"
      :src="item.figure"
      :alt="item.name"
    />
    <div class="line-item-desc">
      <div class="product-title">
        {{ item.title }}
        <CartItemTip
          v-if="item.tip"
          :tip="item.tip"
        />
      </div>
      <CartItemExtend v-if="item.enable_extend" />
      <div class="price-count">
        <div class="discount-price-item">
          <p class="title original-price">
            ${{ item.discount_price ? item.discount_price : item.price }}
          </p>
          <p
            v-if="item.discount_price"
            class="title discount-price"
          >
            ${{ item.price }}
          </p>
        </div>
        <CartCount :cart-item="item" />
      </div>
    </div>
    <svg-icon
      v-if="isLoading"
      class="icon is-loading"
      icon-name="global-cart-loading"
    />
    <svg-icon
      v-else
      class="icon is-delete"
      icon-name="shared-close"
      @click="cart.handleDeleteItem(item.product_id)"
    />
  </div>
</template>

<script setup>
import CartCount from './CartCount.vue';
import CartItemTip from './CartItemTip.vue';
import CartItemExtend from './CartItemExtend.vue';
import { useCartStore } from '@/store/cart';
const cart = useCartStore();
// const cartCount = ref({ class: 'is-medium is-rounded is-black', count: 1 });
const isLoading = ref(false);

const handleItemDelete = () => {
  
};
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>

<style lang="sass" scoped>
@import '@css/base'
.cart-items
  background-color: $vibe-white
  flex: 1
  overflow: auto
  .cart-line-item
    background-color: #fff
    display: flex
    align-items: center
    padding: 16px 32px
    min-height: 198px
    &:not(:last-child)
      border-bottom: 1px solid #dbdbdb
    +mobile
      padding: 16px
    .line-item-image
      margin-right: 16px
      max-width: 180px
      +mobile
        max-width: 96px
    .line-item-desc
      flex: 1
      font-family: $vibe-family-head
      .product-title
        position: relative
        display: flex
        align-items: center
        text-align: left
        margin-bottom: 24px
      .simple-offer
        padding: 5px 6px
        margin-bottom: 24px
        width: fit-content
        border: 1px solid $vibe-purple
        color: $vibe-purple
        font-size: 11px
        border-radius: 4px
        font-weight: bold
        cursor: pointer
        font-family: 'Nunito Sans', Helvetica, sans-serif
        &:hover
          border-color: $vibe-purple
          box-shadow: 0 0 0 1px inset $vibe-purple
          background-color: $vibe-purple
          color: #fff
      .price-count
        display: flex
        align-items: center
        justify-content: space-between
        max-width: 190px
        .discount-price-item
          .original-price
            font-size: 18px
            color: $vibe-purple
          .discount-price
            color: $vibe-purple
            font-size: 14px
            font-weight: 400
            text-decoration-line: line-through
            opacity: .6
    .icon
      width: 24px
      height: 24px
      &.is-delete
        cursor: pointer
</style>
