<template v-if="isCartDialog">
  <div class="is-cart-dialog">
    <div class="dialog-background" @click="isCartDialog = false"></div>
    <div class="dialog-content">
      <div class="cart-head cart-level">
        <div class="cart-level-left">
          <span class="icon" @click="isCartDialog = false">
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0ibWRpLWNoZXZyb24tcmlnaHQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC41OSwxNi41OEwxMy4xNywxMkw4LjU5LDcuNDFMMTAsNkwxNiwxMkwxMCwxOEw4LjU5LDE2LjU4WiIgLz48L3N2Zz4="
          /></span>
          <p class="cart-title">My Cart</p>
        </div>
        <div class="cart-level-right">
          <p class="item-count">2 items</p>
        </div>
      </div>
      <div v-if="!isEmpty" class="cart-items">
        <!-- v-for item -->
        <div class="cart-line-item">
          <lazy-img
            class="line-item-image"
            src="global-cart/vibe_stylus_55.png"
            alt="vibe_stylus_55.png"
          />
          <div class="line-item-desc">
            <div class="product-title">
              Additional 55″ Board Styluses (2)
              <!-- v-if -->
              <div class="tip-box">
                <lazy-img
                  class="icon"
                  src="global-cart/tip_icon.png"
                  alt="tip_icon.png"
                />
                <div class="is-product tip-box-content">For Vibe Smartboard 55″ only</div>
              </div>
            </div>
            <div class="price-count">
              <div class="discount-price-item">
                <p class="title original-price">$15.00</p>
              </div>
              <CartCount :cartCount="cartCount" />
            </div>
          </div>
          <span class="icon is-delete"
            ><img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0ibWRpLWNsb3NlIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5LDYuNDFMMTcuNTksNUwxMiwxMC41OUw2LjQxLDVMNSw2LjQxTDEwLjU5LDEyTDUsMTcuNTlMNi40MSwxOUwxMiwxMy40MUwxNy41OSwxOUwxOSwxNy41OUwxMy40MSwxMkwxOSw2LjQxWiIgLz48L3N2Zz4="
          /></span>
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
            <div class="featured-product">
              <lazy-img
                class="image"
                src="global-cart/vibe_board_55.png"
                alt="vibe_board_55.png"
              />
              <div class="product-desc">
                <p class="title">Vibe Smartboard 55″</p>
                <p class="title is-price">$2,999.00</p>
              </div>
              <div class="separator"></div>
              <div class="product-add">
                <div class="icon is-add">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4IDE2IiBzdHJva2U9IiM2NjY2Q0MiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTYgOEwtMi45ODAyM2UtMDcgOCIgc3Ryb2tlPSIjNjY2NkNDIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg=="
                  />
                </div>
                <div class="title">ADD</div>
              </div>
            </div>
            <div class="featured-product">
              <lazy-img
                class="image"
                src="global-cart/vibe_board_75.png"
                alt="vibe_board_75.png"
              />
              <div class="product-desc">
                <p class="title">Vibe Smartboard Pro 75″</p>
                <p class="title is-price">$6,999.00</p>
              </div>
              <div class="separator"></div>
              <div class="product-add">
                <div class="icon is-add">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4IDE2IiBzdHJva2U9IiM2NjY2Q0MiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTYgOEwtMi45ODAyM2UtMDcgOCIgc3Ryb2tlPSIjNjY2NkNDIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg=="
                  />
                </div>
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
import CartCount from "/@/components/cartCount.vue";
const isCartDialog = inject("isCartDialog");
const isEmpty = ref(true);
const cartCount = ref({ class: "is-medium is-rounded is-black", count: 1 });
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
        .line-item-image
          margin-right: 16px
          max-width: 180px
        .line-item-desc
          flex: 1
          font-family: $vibe-family-head
          .product-title
            position: relative
            display: flex
            align-items: center
            text-align: left
            margin-bottom: 24px
          .price-count
            display: flex
            align-items: center
            justify-content: space-between
            max-width: 190px
            .discount-price-item
              .original-price
                font-size: 18px
                color: $vibe-purple
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
      +mobile
        left: 8%
@keyframes tipBox
  from
    opacity: 0
    transform: translate3d(0, -30%, 0)
  to
    opacity: 1
    transform: translate3d(0, 0, 0)
</style>
