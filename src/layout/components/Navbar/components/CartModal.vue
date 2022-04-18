<template>
  <div class="is-cart-dialog">
    <div class="dialog-background" @click="showCartModal = false"></div>
    <div class="dialog-content">
      <div class="cart-head cart-level">
        <div class="cart-level-left">
          <span class="icon" @click="showCartModal = false">
            <svg-icon icon-name="global-cart-chevron-right" />
          </span>
          <p class="cart-title">My Cart</p>
        </div>
        <div class="cart-level-right">
          <p class="item-count">{{ products.length }} items</p>
        </div>
      </div>
      <div v-if="!isEmpty" class="cart-items">
        <!-- v-for item -->
        <div v-for="product in products" :key="product.name" class="cart-line-item">
          <lazy-img class="line-item-image" :src="product.figure" :alt="product.name" />
          <div class="line-item-desc">
            <div class="product-title">
              {{ product.title }}
              <!-- v-if -->
              <div v-if="product.tip" class="tip-box tip-box-product">
                <lazy-img
                  class="icon"
                  src="global-cart/tip_icon.png"
                  alt="tip_icon.png"
                />
                <div class="is-product tip-box-content">{{ product.tip }}</div>
              </div>
            </div>
            <!-- v-if -->
            <div v-if="product.enable_extend" class="button simple-offer">
              Add accident protection for $249
            </div>
            <div class="price-count">
              <div class="discount-price-item">
                <p class="title original-price">
                  ${{ product.discount_price ? product.discount_price : product.price }}
                </p>
                <!-- v-if -->
                <p v-if="product.discount_price" class="title discount-price">
                  ${{ product.price }}
                </p>
              </div>
              <CartCount :cartCount="cartCount" />
            </div>
          </div>
          <svg-icon
            v-if="isLoading"
            class="icon is-loading"
            icon-name="global-cart-loading"
          />
          <svg-icon v-else class="icon is-delete" icon-name="shared-close" />
        </div>
      </div>
      <div v-if="!isEmpty" class="cart-bottom">
        <div class="cart-level cart-bottom-item">
          <div class="cart-level-left">
            <p class="title">Subtotal</p>
          </div>
          <div class="cart-level-right">
            <p class="is-subtotal-amount">$515.00</p>
          </div>
        </div>
        <div class="cart-level cart-bottom-item">
          <div class="cart-level-left">
            <p class="title">Shipping</p>
            <div class="tip-box">
              <lazy-img class="icon" src="global-cart/tip_icon.png" alt="tip_icon.png" />
              <div class="is-shipping tip-box-content">
                We provide free shipping in the continental U.S.
              </div>
            </div>
          </div>
          <div class="cart-level-right">
            <p class="is-subtotal-amount">-</p>
          </div>
        </div>
        <div class="cart-level cart-bottom-item">
          <div class="cart-level-left">
            <p class="title">Tax</p>
            <div class="tip-box">
              <lazy-img class="icon" src="global-cart/tip_icon.png" alt="tip_icon.png" />
              <div class="tip-box-content is-tax">
                <h6 class="tip-title">Tax Notice</h6>
                <span class="tip-info"
                  >Tax is calculated based on the shipping address (not the billing
                  address) and is calculated as a percentage of the order total, including
                  extra warranty costs.<br />If you hold a valid resale certificate or are
                  ordering on behalf of a tax exempt institution, please </span
                ><a class="tip-url" href="/contact-2">contact us.</a>
                <div class="mask"></div>
              </div>
            </div>
          </div>
          <div class="cart-level-right">
            <p class="is-calculated">Calculated at checkout</p>
          </div>
        </div>
        <hr />
        <div class="cart-level cart-bottom-item">
          <div class="cart-level-left">
            <p class="title">Total</p>
          </div>
          <div class="cart-level-right">
            <p class="title is-amount">$515.00</p>
          </div>
        </div>

        <a class="button is-primary is-rounded"> Checkout </a>
      </div>
      <div v-if="isEmpty" class="cart-items is-empty">
        <div class="empty-notice">
          <div class="title">Shopping cart is empty.</div>
          <span
            >Check out <a class="redir-product" href="/products-overview">this page</a
            ><span> to select the right Vibe board for your team.</span></span
          >
        </div>
        <hr />
        <div class="featured">
          <div class="title">You may want to add</div>
          <div class="products">
            <div
              v-for="featured in productsFeatured"
              :key="featured.name"
              class="featured-product"
            >
              <lazy-img class="image" :src="featured.figure" :alt="featured.name" />
              <div class="product-desc">
                <p class="title">{{ featured.title }}</p>
                <p class="title is-price">${{ featured.price }}</p>
              </div>
              <div class="separator"></div>
              <div class="product-add">
                <svg-icon class="icon is-add" icon-name="global-cart-cart-add-featured" />
                <div class="title">ADD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartCount from '/@vcomp/cartCount.vue';
import { products } from '/@/data/products';

const showCartModal = inject('showCartModal');

const isEmpty = ref(false);
const isLoading = ref(false);
const cartCount = ref({ class: 'is-medium is-rounded is-black', count: 1 });
const productsFeatured = computed(() => products.filter((i) => i.featured));

</script>

<style lang="sass" scoped>
@import '/@css/base'
.is-cart-dialog
  position: fixed
  bottom: 0
  left: 0
  right: 0
  top: 0
  z-index: 1000
  .dialog-background
    position: absolute
    bottom: 0
    left: 0
    right: 0
    top: 0
    background: rgba(136,136,136,.69)
    backdrop-filter: blur(10px)
  .dialog-content
    position: relative
    z-index: 1200
    background-color: #fff
    margin: 0 0 0 auto
    max-height: initial
    height: 100vh
    display: flex
    flex-direction: column
    max-width: 560px
    z-index: 2000
    .cart-head
      height: 80px
      box-shadow: 0 -1px 10px rgb(55 55 55 / 10%)
      padding: 0 30px
      margin-bottom: 0
      z-index: 10
      .icon
        height: 2rem
        width: 2rem
        margin-right: 0.75rem
        border: 1px solid $vibe-black
        border-radius: 50%
        cursor: pointer
        &:hover
          border-color: $vibe-pink
        .svg-icon
          width: 24px
          height: 24px
    .cart-items
      background-color: $vibe-white
      flex: 1
      overflow: auto
      .cart-line-item
        background-color: #fff
        display: flex
        align-items: center
        padding: 16px 32px
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
            margin-bottom: 10px
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
        .icon.is-delete
          cursor: pointer
    .cart-bottom
      box-shadow: 0 1px 10px rgb(55 55 55 / 10%)
      padding: 31px 32px 24px
      .cart-bottom-item
        margin-bottom: 11px
        .title
          font-size: 18px
          +mobile
            font-size: 14px
        .is-subtotal-amount
          font-size: 18px
          +mobile
            font-size: 14px
        .is-calculated
          font-family: $vibe-family-body
      hr
        background-color: #f5f5f5
      .button
        margin-top: 22px
        display: block
    .is-empty
      display: flex
      flex-direction: column
      padding: 32px
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
  &.is-loading,&.is-delete
    width: 24px
    height: 24px
hr
  display: block
  height:2px
  margin: 5px 0 16px
  background-color: #e0e0e0
  border: none
.cart-count
  max-width: 75px
  height: 47px
.cart-level
  display: flex
  align-items: center
  justify-content: space-between
  .cart-level-left,.cart-level-right
    display: flex
    align-items: center
.tip-box
  position: relative
  &:hover .tip-box-content
    display: block
  .icon
    width: 15px
    height: 15px
    margin-left: 8px
    cursor: pointer
  &.tip-box-product
    +mobile
      display: none
.tip-box-content
  display: none
  position: absolute
  background-color: #fff
  bottom: 164%
  left: -72%
  color: #828282
  font-family: $vibe-family-body
  font-size: 12px
  font-weight: 400
  line-height: 39px
  box-shadow: -1px 3px 10px rgba(0, 0, 0, 0.12)
  border-radius: 4px
  animation-duration: .75s
  animation-fill-mode: both
  animation-name: tipBox
  &:hover
    display: block
  .tip-title
    color: #4F4F4F
    font-weight: $vibe-bold
    font-size: 14px
    margin-bottom: 5px
  .tip-info
    font-weight: 400
  .tip-url
    text-decoration: underline
    font-weight: unset
    color: #828282
    &:hover
      color: $vibe-purple
  &:hover
    display: block
  &.is-shipping
    width: 176px
    height: 32px
    padding: 12px 18px
    line-height: 15px
    &::after
      content: ''
      height: 14px
      width: 14px
      position: absolute
      left: 12.5%
      top: 81%
      background: #fff
      transform: rotate(45deg)
      +mobile
        left: 12%
  &.is-tax
    width: 385px
    height: 110px
    padding: 16px 18px
    line-height: 18px
    +mobile
      width: 359px
      left: -24px
    .mask
      position: absolute
      width: 80%
      height: 30%
      top: 91%
      left: -5%
    &::after
      content: ''
      height: 14px
      width: 14px
      position: absolute
      left: 6%
      top: 93%
      background: #fff
      transform: rotate(45deg)
      +mobile
        left: 8%
  &.is-product
    display: block
    width: 169px
    height: 39px
    padding: 0 10px
    left: -630%
    &::after
      content: ''
      height: 14px
      width: 14px
      position: absolute
      right: 11%
      top: 76%
      background: #fff
      transform: rotate(45deg)
@keyframes tipBox
  from
    opacity: 0
    transform: translate3d(0, -30%, 0)
  to
    opacity: 1
    transform: translate3d(0, 0, 0)
</style>
