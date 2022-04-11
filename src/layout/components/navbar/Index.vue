<template>
  <nav class="navbar">
    <div class="container">
      <NavBarLogo />
      <NavShrink />

      <div id="nav-menu" class="nav-menu">
        <NavDropdown />
        <NavEndBtn />
      </div>
    </div>

    <slot name="search" />
  </nav>
</template>

<script setup>
import { NavDropdown, NavBarLogo, NavEndBtn, NavShrink } from './components';

// function parseBoolean(value) {
//   if (!value) {
//     return false;
//   }

//   return value === '1' || value === 'true';
// }

// const moneyFmt = new Intl.NumberFormat('{{ $numberFormat }}', {
//   style: 'currency',
//   currency: '{{ $currency }}',
// });

// const region = '{{ $region }}';
// const promoCode = '{{ $promoCode }}';
// const shopifyHost = '{{ $shopifyHost }}';
// const renderOffers = parseBoolean('{{ $renderOffers }}');

// let sidebarPromise = null;
// function loadScript(src, integrity) {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.async = true;
//     script.onload = resolve;
//     script.onerror = reject;
//     script.src = src;
//     if (integrity) {
//       script.integrity = integrity;
//     }
//     document.getElementsByTagName('head')[0].appendChild(script);
//   });
// }

// function loadSidebar() {
//   if (!sidebarPromise) {
//     sidebarPromise = new Promise((resolve, reject) => {
//       const loader = async () => {
//         // {{ range $scripts }}
//         await loadScript('{{ .src }}', '{{ default "" .integrity }}');
//         // {{ end }}
//       };

//       loader()
//         .then(() => {
//           Extend.config({ storeId: '91426846-4d2c-482d-a9e9-1031f0ffb6b0' });
//           return import('{{ $sidebarJs.RelPermalink }}');
//         })
//         .then((sidebar) => {
//           const products = JSON.parse(
//             new TextDecoder().decode(
//               base64js.toByteArray('{{ $products | jsonify | base64Encode }}')
//             )
//           );

//           return sidebar.initialize(products, {
//             moneyFmt,
//             promoCode,
//             region,
//             shopifyHost,
//             renderOffers,
//           });
//         })
//         .then(resolve)
//         .catch(reject);
//     });
//   }

//   return sidebarPromise;
// }

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

// // Delay load sidebar after page load. If user clicks cart within the timeout period, this will be a no-op.
// setTimeout(loadSidebar, 500);
</script>

<style lang="sass" scoped>
@import '/@css/base'
.navbar
  position: relative
  font-family: $family-head
  font-size: 16px
  box-shadow: 0px -1px 10px rgba(55, 55, 55, 0.1)
  // transition: top .8s cubic-bezier(.215,.61,.355,1)
  // -moz-transition: top .8s cubic-bezier(.215,.61,.355,1)
  // -webkit-transition: top .8s cubic-bezier(.215,.61,.355,1)
  // -o-transition: top .8s cubic-bezier(.215,.61,.355,1)
  .container
    display: flex
    justify-content: space-between
    align-items: center
    height: $navbar-height
    width: 100%
    padding: 0 40px
    +until($navbar-breakpoint)
      padding: 0

.nav-menu
  display: flex
  align-items: center
  justify-content: space-between
  flex-grow: 1
</style>
