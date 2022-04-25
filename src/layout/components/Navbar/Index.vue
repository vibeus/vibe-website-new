<template>
  <nav class="navbar is-fixed-top">
    <div class="container">
      <NavBarLogo />
      <NavShrink />

      <div id="nav-menu" class="nav-menu">
        <NavDropdown />
        <NavEndBtn />
      </div>
    </div>
    <CartModal v-if="showCartModal" />
    <slot name="search" />
  </nav>
</template>

<script setup>
import { loadCartScripts } from './util';
import { NavDropdown, NavBarLogo, NavEndBtn, NavShrink, CartModal } from './components';

/* Start Data */
const { frontmatter: fm } = useData();
//cart dialog
const showCartModal = ref(false);
const cart = fm.value.navbar?.cart || {};

const {
  currency = 'USD',
  region = 'us',
  promo_code: promoCode = '',
  shopify_host: shopifyHost = 'order.vibe.us',
  number_format: numberFormat = 'en-US',
} = cart;
const renderOffers = !!cart.render_offers;

provide('showCartModal', showCartModal);
/* End Data */

onMounted(() => {
  loadCartScripts();
});
</script>

<style lang="sass" scoped>
@import '@css/base'
.navbar
  position: relative
  background-color: #FFF
  font-family: $family-head
  font-size: 16px
  box-shadow: 0px -1px 10px rgba(55, 55, 55, 0.1)
  // transition: top .8s cubic-bezier(.215,.61,.355,1)
  // -moz-transition: top .8s cubic-bezier(.215,.61,.355,1)
  // -webkit-transition: top .8s cubic-bezier(.215,.61,.355,1)
  // -o-transition: top .8s cubic-bezier(.215,.61,.355,1)
  &.is-fixed-top
    position: sticky
    top: 0
    z-index: 9999
  .container
    display: flex
    justify-content: center
    align-items: center
    max-width: 1520px
    height: $navbar-height
    padding: 0 40px
    margin: 0 auto
    +until($navbar-breakpoint)
      padding: 0
      justify-content: space-between
.nav-menu
  display: flex
  align-items: center
  justify-content: space-between
  flex-grow: 1
</style>
