let sidebarPromise = null;

export function loadScript(src, integrity) {
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

export function loadCartScripts() {
  const scriptsArr = [
    'https://sdks.shopifycdn.com/js-buy-sdk/v2/latest/index.umd.min.js',
    'https://sdk.helloextend.com/extend-sdk-client/v1/extend-sdk-client.min.js',
    'https://sdk.helloextend.com/extend-sdk-client-shopify-addon/v1/extend-sdk-client-shopify-addon.min.js',
  ];

  if (!sidebarPromise) {
    sidebarPromise = new Promise((resolve, reject) => {
      const loader = async () => {
        scriptsArr.forEach(async (src) => await loadScript(src));
      };

      loader()
        .then(() => {
          // console.log('Extend: ', Extend);
          // Extend.config({ storeId: '91426846-4d2c-482d-a9e9-1031f0ffb6b0' });
          // return import('/@js/nav-cart-sidebar.js');
        })
        .then(resolve)
        .catch(reject);
    });
  }

  return sidebarPromise;
}
