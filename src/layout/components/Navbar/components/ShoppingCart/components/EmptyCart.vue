<template>
  <div class="cart-items is-empty">
    <div class="empty-notice">
      <div class="title">
        Shopping cart is empty.
      </div>
      <span>Check out <a
        class="redir-product"
        href="/products-overview"
      >this page</a><span> to select the right Vibe board for your team.</span></span>
    </div>
    <hr />
    <div class="featured">
      <div class="title">
        You may want to add
      </div>
      <div class="products">
        <div
          v-for="featured in productsFeatured"
          :key="featured.name"
          class="featured-product"
        >
          <lazy-img
            class="image"
            :src="featured.figure"
            :alt="featured.name"
          />
          <div class="product-desc">
            <p class="title">
              {{ featured.title }}
            </p>
            <p class="title is-price">
              ${{ featured.price }}
            </p>
          </div>
          <div class="separator"></div>
          <div
            class="product-add"
            @click="() => { cart.handleAddtoCart(featured.product_id, 1)}"
          >
            <svg-icon
              class="icon is-add"
              icon-name="global-cart-cart-add-featured"
            />
            <div class="title">
              ADD
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { products } from '@/data/products';
import { useCartStore } from '@/store/cart';
const cart = useCartStore();
const productsFeatured = computed(() => products.filter((i) => i.featured));
</script>

<style lang="sass" scoped>
@import '@css/base'
.is-empty
  display: flex
  flex-direction: column
  flex: 1
  padding: 32px
  background-color: $vibe-white
  +mobile
    padding: 16px
  .title
    font-size: 18px
    margin-bottom:1.5rem
  .empty-notice
    flex: 1
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    +mobile
      max-width: 300px
      margin: auto
      text-align: center
    .redir-product
      text-decoration: underline
      color: $vibe-purple
  .featured-product
    padding: 8px
    background-color: white
    display: flex
    border-radius: 8px
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.03)
    &:not(:last-child)
      margin-bottom: 16px
    .image
      cursor: pointer
      max-width: 140px
      padding: 24px 16px
      +mobile
        padding: 12px 8px
        max-width: 80px
    .title
      font-size: 16px
      margin-bottom: 12px
      &.is-price
        font-size: 24px
        margin-bottom: 0
        +mobile
          font-size: 18px
    .product-desc
      cursor: pointer
      flex: 1
      display: flex
      flex-direction: column
      justify-content: center
    .separator
      width: 1px
      background-color: #F2F2F2
      margin: -8px 8px
    .product-add
      padding: 26px
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      cursor: pointer
      +mobile
        padding: 12px
      .title
        margin: 16px 0 0 0
        color: #6666cc
      &.is-added
        cursor: auto
        .title
          display: none


.svg-icon.icon
  &.is-add
    width:16px
    height:16px
    color: $vibe-purple

hr
  display: block
  height:2px
  margin: 5px 0 16px
  background-color: #e0e0e0
  border: none

</style>
