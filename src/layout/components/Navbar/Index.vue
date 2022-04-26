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
    <CartModal/>
    <div id="extend-offer"></div>
    <slot name="search" />
  </nav>
</template>

<script setup>
import { NavDropdown, NavBarLogo, NavEndBtn, NavShrink, CartModal } from './components';
import { products } from '@/data/products';
import { useCartEffect } from '@/store/cart';

/* Start Data */
const { frontmatter: fm } = useData();
const { 
  handleSetShopifyClient, 
  initialShopifyCheckout 
} = useCartEffect();

const shopifyClient = computed(() => { return useCartEffect().shopifyClient });

let sidebarPromise = null;
const cart = fm.value.navbar?.cart || {};
const renderOffers = !!cart.render_offers;

const cartOptions = {
  currency: 'USD',
  region: 'us',
  promo_code: '',
  shopifyHost: 'order.vibe.us',
  numberFormat: 'en-US',
};

const moneyFmt = new Intl.NumberFormat(cartOptions.numberFormat, {
  style: 'currency',
  currency: cartOptions.currency,
});

/* End Data */

function parseBoolean(value) {
  if (!value) return false;
  return value === '1' || value === 'true';
}


function initShopifySdk() {
  const clientConfig =
    cartOptions.shopifyHost === 'order.vibe.us'
      ? {
        domain: 'order.vibe.us',
        storefrontAccessToken: '353c0f962f13d59441ebe8f392c22745',
      }
      : {
        domain: 'vibe.toyond.de',
        storefrontAccessToken: '59ed50ec21cff74d3a509f4ad142bffb',
      };
  handleSetShopifyClient(ShopifyBuy.buildClient(clientConfig));
}

function loadScript(src, integrity) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    script.src = src;
    if (integrity) {
      script.integrity = integrity;
    }
    document.getElementsByTagName('head')[0].appendChild(script);
  });
}

function loadSidebar() {
  const scriptsArr = [
    'https://sdks.shopifycdn.com/js-buy-sdk/v2/latest/index.umd.min.js',
    'https://sdk.helloextend.com/extend-sdk-client/v1/extend-sdk-client.min.js',
    'https://sdk.helloextend.com/extend-sdk-client-shopify-addon/v1/extend-sdk-client-shopify-addon.min.js',
  ];

  if (!sidebarPromise) {
    sidebarPromise = new Promise((resolve, reject) => {

      const promiseArray = [];
      for(let i = 0; i < scriptsArr.length; i++ )
        promiseArray.push(loadScript(scriptsArr[i]));

      Promise.all(promiseArray)
        .then(() => {
          Extend.config({ storeId: '91426846-4d2c-482d-a9e9-1031f0ffb6b0' });
        })
        .then(() => {
          initShopifySdk();
        })
        .then(resolve)
        .catch(reject);
    });
  }
  return sidebarPromise;
}

// async function onLauncherClick(el) {
//   const sidebar = await loadSidebar();
//   sidebar.show();
// }

// document.querySelectorAll('.button.is-nav-cart').forEach((el) => {
//   el.addEventListener('click', () => onLauncherClick(el));
// });

// document.querySelectorAll('.formatted-price').forEach((priceEl) => {
//   priceEl.textContent = moneyFmt.format(parseFloat(priceEl.textContent));
// });

// Delay load sidebar after page load. If user clicks cart within the timeout period, this will be a no-op.
onMounted(() => {
  import('@js/nav');
  loadSidebar()
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
