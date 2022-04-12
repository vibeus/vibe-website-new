const e = React.createElement;
const { useCallback, useEffect, useLayoutEffect, useRef, useState } = React;

const MIN_ITEM_COUNT = 1;
const MAX_ITEM_COUNT = 99;

let checkoutIdKey = '';
let products = [];
let cartOptions = {};
let setCartActive = null;
let shopifyClient = null;

function countTotalItems(checkout) {
  if (!checkout) {
    return 0;
  }

  return checkout.lineItems.reduce((sum, li) => sum + li.quantity, 0);
}

function getQueryString(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = window.location.search.substr(1).match(reg);
  if (r !== null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}

const snowplowProductProperty = {
  'Vibe Smartboard 55″': 'board55V1',
  'Vibe Portable Stand': 'stand55V1',
  'Vibe Touch Styluses (2)': 'styluses55V1',
  'Vibe Smartboard Pro 75″': 'board75Pro',
  'Portable Stand for Vibe Pro 75″': 'stand75Pro',
};

const LineItemControl = ({
  productId,
  count,
  onSetCount,
  disabled,
  readOnly,
}) => {
  const { minusIconSrc, plusIconSrc } = cartOptions;
  const [localCount, setLocalCount] = useState(count);

  useEffect(() => {
    setLocalCount(count);
  }, [count]);

  const setCountTimeout = useRef(null);
  const debounceSetCount = useCallback(
    (count) => {
      if (disabled || count < MIN_ITEM_COUNT || count > MAX_ITEM_COUNT) {
        return;
      }

      if (setCountTimeout.current) {
        clearTimeout(setCountTimeout.current);
      }

      setCountTimeout.current = setTimeout(() => onSetCount(count), 1000);
      setLocalCount(count);
    },
    [onSetCount, disabled]
  );

  return e(
    'div',
    {
      className: `control is-count has-icons-left has-icons-right${
        disabled ? ' is-disabled' : ''
      }`,
    },
    e('input', {
      className: 'input is-small is-rounded is-black',
      type: 'number',
      value: localCount,
      onChange: (ev) => {
        setLocalCount(parseInt(ev.target.value) || 1);
      },
      onBlur: readOnly ? null : () => onSetCount(localCount),
      readOnly,
      disabled,
    }),
    readOnly
      ? null
      : e(
        'span',
        {
          className: 'icon is-small is-left',
          onClick: () => debounceSetCount(localCount - 1),
        },
        e('img', { src: minusIconSrc })
      ),
    readOnly
      ? null
      : e(
        'span',
        {
          className: 'icon is-small is-right',
          onClick: () => debounceSetCount(localCount + 1),
        },
        e('img', { src: plusIconSrc })
      )
  );
};

const LineItem = ({
  lineItem,
  lineItems,
  checkoutId,
  setCheckout,
  addToCart,
}) => {
  const { moneyFmt, closeIconSrc, loadingIconSrc } = cartOptions;

  const productIdSplit = atob(lineItem.variant.id).split('/');
  const productId = productIdSplit[productIdSplit.length - 1];
  const count = lineItem.quantity;
  const customAttributes = lineItem.customAttributes;
  const isWarrantyInCart = ExtendShopifyBuy.warrantyAlreadyInCheckout(
    productId,
    lineItems
  );

  let product = products.find((x) => x.product_id === productId);

  //Extend - If it's a warranty use the title and image attributes from us-sales.md
  const extendOfferElementId = `extend-cart-offer-${productId}`;
  let isExtend = false;
  let productString = '';
  let termString = '';
  if (
    customAttributes &&
    ExtendShopifyBuy.getCustomAttribute(customAttributes, 'Vendor') === 'Extend'
  ) {
    isExtend = true;
    product = products.find((x) => x.product_id === 'extend-protection-plan');

    const price = ExtendShopifyBuy.getCustomAttribute(
      customAttributes,
      'Price'
    );
    product.price = price;

    productString = ExtendShopifyBuy.getCustomAttribute(
      customAttributes,
      'Product'
    );
    termString = ExtendShopifyBuy.getCustomAttribute(customAttributes, 'Term');
  }

  const extendOffer = useRef(null);
  useEffect(() => {
    if (!product.enable_extend) {
      return;
    }

    if (isExtend || isWarrantyInCart || !addToCart || !extendOffer.current) {
      return;
    }

    Extend.buttons.renderSimpleOffer(extendOffer.current, {
      referenceId: productId,
      onAddToCart: function (options) {
        const product = options.product;
        const plan = options.plan;
        const quantity = count;
        ExtendShopify.getPlanVariant(plan, function (err, planVariant) {
          var term = ExtendShopifyBuy.getTerm(plan);
          addToCart(planVariant.variantId, quantity, [
            { key: 'Ref', value: product.id },
            { key: 'Product', value: product.name },
            { key: 'Term', value: term },
            { key: 'Price', value: ExtendShopifyBuy.insertDecimal(plan.price) },
            { key: 'Vendor', value: 'Extend' },
          ]);
        });
      },
    });
  }, [isExtend, isWarrantyInCart, addToCart]);

  //Extend - End Extend Code

  if (!product) {
    return null;
  }
  
  let ifTipExist, tipicon = null, tipText = null;
  product.tip === null ? ifTipExist = false : ifTipExist = true;
  if(ifTipExist) {
    tipicon = e(
      'span', 
      { className: 'icon tip-icon'},
      e(
        'img',
        { 
          src: product.tipIcon 
        }
      ), 
    );
    tipText = e(
      'span', 
      { className: 'tip-box' },
      product.tip
    );
  }

  let notice = null;
  if (product.sold_out) {
    notice = e(
      'p',
      { className: 'product-notice' },
      product.sold_out.cart_notice
    );
  } else if (product.backorder) {
    notice = e(
      'p',
      { className: 'product-notice' },
      product.backorder.cart_notice
    );
  }

  const lineItemId = lineItem.id;
  const warrantyLineItem = lineItems.find((li) => {
    const ref = li.customAttributes.find((ca) => ca.key === 'Ref');
    return ref && ref.value === productId;
  });

  const [controlDisabled, setControlDisabled] = useState(false);
  const onSetCount = useCallback(
    (count) => {
      const updates = [
        {
          id: lineItemId,
          quantity: count,
        },
      ];

      if (warrantyLineItem) {
        updates.push({
          id: warrantyLineItem.id,
          quantity: count,
        });
      }

      setControlDisabled(true);
      shopifyClient.checkout
        .updateLineItems(checkoutId, updates)
        .then((co) => setCheckout(co))
        .finally(() => setControlDisabled(false));
    },
    [lineItemId, checkoutId, warrantyLineItem]
  );

  const [isRemoving, setIsRemoving] = useState(false);
  const onRemove = useCallback(() => {
    const deletes = [lineItemId];
    if (warrantyLineItem) {
      deletes.push(warrantyLineItem.id);
    }

    setIsRemoving(true);
    shopifyClient.checkout
      .removeLineItems(checkoutId, deletes)
      .then((co) => setCheckout(co))
      .finally(() => setIsRemoving(false));
  }, [lineItemId, checkoutId, warrantyLineItem]);

  return e(
    'div',
    {
      className: 'cart-line-item',
    },
    e(
      'figure',
      {
        className: 'image is-item',
      },
      e('img', {
        src: product.imgSrc,
      })
    ),
    e(
      'div',
      {
        className: 'line-item-desc',
      },
      e(
        'p',
        {
          className: 'product-title',
        },
        product.title,
        tipText,
        tipicon,
      ),
      //Extend - Add Cart Offer Element
      isExtend || isWarrantyInCart ? null : e('div', { ref: extendOffer }),
      //Extend - Add Product Name and Term to Warranty lineItems
      e(
        'p',
        {
          className: 'product-description',
        },
        isExtend ? `Product: ${productString}` : ''
      ),
      e(
        'p',
        {
          className: 'product-description',
        },
        isExtend ? `Term: ${termString}` : ''
      ),
      //Extend - End Extend Code
      notice,
      e(
        'div',
        {
          className: 'price-count',
        },
        e(
          'div',
          {
            className: 'discount-price-item'
          },
          e(
            'p',
            {
              className: 'title original-price',
            },
            moneyFmt.format(
              product.deposit_price || product.price
            )
          ),
        ),
        e(LineItemControl, {
          productId,
          count,
          onSetCount,
          disabled: controlDisabled || isRemoving,
          readOnly: isExtend,
        })
      )
    ),
    e(
      'span',
      {
        className: 'icon is-delete',
        onClick: isRemoving ? null : onRemove,
      },
      e('img', {
        src: isRemoving ? loadingIconSrc : closeIconSrc,
      })
    )
  );
};

const CartItems = ({ checkout, setCheckout, addToCart }) => {
  const checkoutId = checkout.id;
  const lineItems = checkout.lineItems;
  const children = checkout.lineItems.map((lineItem) => {
    return e(LineItem, {
      lineItem,
      lineItems,
      checkoutId,
      setCheckout,
      addToCart,
    });
  });
  
  return e(
    'div',
    {
      className: 'cart-items',
    },
    children
  );
};

const FeaturedProduct = ({ product, addToCart }) => {
  const { addToCartIconSrc, loadingIconSrc, moneyFmt } = cartOptions;
  const [isAdding, setIsAdding] = useState(false);

  const onAddClick = useCallback(() => {
    setIsAdding(true);
    addToCart(product.product_id, 1, []);
  }, [addToCart]);
  /** 产品链接跳转 */
  const viewDetails = (ProductTitle)=>{
    let url='';
    ProductTitle === 'Vibe Smartboard 55″' ? url='/products/vibe-smartboard-55/':url='/products/vibe-smartboard-pro-75';
    return ()=>{
      window.location.href=url;
    };
  };
  return e(
    'div',
    { className: 'featured-product' },
    e(
      'figure',
      { className: 'image is-item' ,
        onClick:viewDetails(product.title)
      },
      e('img', { src: product.imgSrc })
    ),
    e(
      'div',
      { className: 'product-desc' ,
        onClick:viewDetails(product.title)
      },
      e('p', { className: 'title' }, product.title),
      e(
        'p',
        { className: 'title is-price' },
        moneyFmt.format(product.price || product.discount_price)
      )
    ),
    e('div', { className: 'separator' }),
    e(
      'div',
      {
        className: `product-add${isAdding ? ' is-added' : ''}`,
        onClick: isAdding ? null : onAddClick,
      },
      e(
        'div',
        { className: 'icon is-add' },
        e('img', { src: isAdding ? loadingIconSrc : addToCartIconSrc })
      ),
      e('div', { className: 'title' }, 'ADD')
    )
  );
};

const EmptyCart = ({ addToCart }) => {

  const featured = products
    .filter((x) => x.featured)
    .map((product) => e(FeaturedProduct, { product, addToCart }));

  return e(
    'div',
    {
      className: 'cart-items is-empty',
    },
    e(
      'div',
      { className: 'empty-notice' },
      e('div', { className: 'title' }, 'Shopping cart is empty.'),
      e('span', {}, 'Check out ', e('a', { className: 'redir-product', href: '/products-overview'}, 'this page'), e('span', {}, ' to select the right Vibe board for your team.'))
    ),
    e('hr'),
    e(
      'div',
      { className: 'featured' },
      e('div', { className: 'title' }, 'You may want to add'),
      e('div', { className: 'products' }, featured)
    )
  );
};

const ModalHead = ({ checkout, onCloseCart }) => {
  const { chevronRIconSrc } = cartOptions;
  const count = countTotalItems(checkout);
  const countText = count > 1 ? count + ' items' : count + ' item';

  return e(
    'div',
    {
      className: 'level is-cart-head is-mobile',
    },
    e(
      'div',
      {
        className: 'level-left',
      },
      e(
        'div',
        {
          className: 'level-item',
        },
        e(
          'span',
          {
            className: 'icon is-large is-close',
            onClick: onCloseCart,
          },
          e('img', { src: chevronRIconSrc })
        )
      ),
      e(
        'div',
        {
          className: 'level-item',
        },
        e(
          'p',
          {
            className: 'cart-title',
          },
          'My Cart'
        )
      )
    ),
    e(
      'div',
      {
        className: 'level-right',
      },
      e(
        'div',
        {
          className: 'level-item',
        },
        e('p', { className: 'item-count' }, countText)
      )
    )
  );
};

const ModalFoot = ({ checkout, setCheckout }) => {
  const subtotal = parseFloat(checkout.lineItemsSubtotalPrice.amount);
  const count = countTotalItems(checkout);
  const { moneyFmt, region } = cartOptions;
  const referralShareCode= getQueryString('discount_code');
  const onCheckoutClick = useCallback(() => {
    if(referralShareCode) {
      shopifyClient.checkout.addDiscount(checkout.id, referralShareCode).then(co => {
        setCheckout(co);
        window.location = co.webUrl;
      });
    } else {
      window.location = checkout.webUrl;
    }
    const productInfo = {
      currentUrl: `${window.location.href}`,
      clickTarget: 'checkout button'
    };
    if(checkout.lineItems.length) {  
      checkout.lineItems.forEach( item => {
        if(Object.prototype.hasOwnProperty.call(productInfo, 'stand55V1') && item.title === 'Vibe Portable Stand') { 
          // sum up the total quantily of both red stand and white stand 
          productInfo[stand55V1] = productInfo[stand55V1] + item.quantity;
        } else {
          productInfo[snowplowProductProperty[item.title]] = item.quantity;
        }
      });
      const dataLayer = window.dataLayer;
      dataLayer && dataLayer.push({
        event: 'cart_product_event',
        cart_product_info: JSON.stringify({
          schema: 'iglu:us.vibe/website_cart_event/jsonschema/1-0-1',
          data: productInfo, 
        })
      });
    }
    
  }, [checkout, setCheckout]);
  return e(
    'div',
    {
      className: 'cart-bottom',
    },
    e(
      'div',
      {
        className: 'level promo-code-text is-mobile',
      },
      referralShareCode ?
        e(
          'div',
          {
            className: 'promo-code-box-refferal is-hide-holiday-refferal',
          },
          e(
            'p',
            {
              className: 'level-item title',
            },
            'Use code to save $150 off at checkout!'
          )
        )
        : null),
    e(
      'div',
      {
        className: 'level is-cart-total is-mobile',
      },
      e(
        'div',
        {
          className: 'level-left',
        },
        e(
          'div',
          {
            className: 'level-item',
          },
          e('p', { className: 'title' }, 'Subtotal')
        )
      ),
      e(
        'div',
        {
          className: 'level-right',
        },
        e(
          'div',
          {
            className: 'level-item',
          },
          e('p', { className: 'title is-amount' }, moneyFmt.format(subtotal))
        )
      )
    ),
    region === 'us' && subtotal >= 500
      ? e(
        'p',
        { className: 'content' },
        'We provide complimentary shipping in the contiguous U.S.'
      )
      : null,
    e(
      'div',
      { className: 'checkout' },
      e(
        'button',
        {
          className: 'button is-primary is-rounded is-fullwidth is-not-uniform',
          onClick: count > 0 ? onCheckoutClick : null,
          disabled: count <= 0,
        },
        'Checkout'
      )
    )
  );
};

const Modal = ({ checkout, setCheckout, addToCart }) => {
  const [isActive, setIsActive] = useState(false);
  setCartActive = setIsActive;
  
  useEffect(() => {
    if (isActive) {
      document.documentElement.classList.add('is-clipped');
    } else {
      document.documentElement.classList.remove('is-clipped');
    }
  }, [isActive]);

  const onCloseCart = useCallback(() => {
    // Close event tracking
    const productInfo = {
      currentUrl: `${window.location.href}`,
      clickTarget: 'close button'
    };
    if(checkout.lineItems.length) {  
      checkout.lineItems.forEach( item => {
        if(Object.prototype.hasOwnProperty.call(productInfo, 'stand55V1') && item.title === 'Vibe Portable Stand') { 
          // sum up the total quantily of both red stand and white stand 
          productInfo[stand55V1] = productInfo[stand55V1] + item.quantity;
        } else {
          productInfo[snowplowProductProperty[item.title]] = item.quantity;
        }
      });
      const dataLayer = window.dataLayer;
      dataLayer && dataLayer.push({
        event: 'cart_product_event',
        cart_product_info: JSON.stringify({
          schema: 'iglu:us.vibe/website_cart_event/jsonschema/1-0-1',
          data: productInfo, 
        })
      });
    }

    setIsActive(false);
  });
  
  const content = [];
  if (checkout && isActive) {
    content.push(e(ModalHead, { checkout, onCloseCart }));

    if (checkout.lineItems.length) {
      content.push(e(CartItems, { checkout, setCheckout, addToCart }));
      content.push(e(ModalFoot, { checkout, setCheckout }));
    } else {
      content.push(e(EmptyCart, { addToCart }));
    }
  }

  return e(
    'div',
    {
      className: `modal is-cart${isActive ? ' is-active' : ''}`,
    },
    e('div', { className: 'modal-background', onClick: onCloseCart }),
    e('div', { className: 'modal-content' }, content)
  );
};

const App = () => {
  const prevCheckoutId = localStorage.getItem(checkoutIdKey);
  const [checkout, setCheckout] = useState(null);

  useEffect(() => {
    if (prevCheckoutId) {
      shopifyClient.checkout
        .fetch(prevCheckoutId)
        .catch((e) => {
          return shopifyClient.checkout.create();
        })
        .then((co) => {
          if (co) {
            return co;
          } else {
            return shopifyClient.checkout.create();
          }
        })
        .then((co) => {
          setCheckout(co);
        });
    } else {
      shopifyClient.checkout.create().then((co) => {
        setCheckout(co);
      });
    }
  }, []);

  useEffect(() => {
    if (checkout && checkout.id !== prevCheckoutId) {
      localStorage.setItem(checkoutIdKey, checkout.id);
    }
  }, [checkout, prevCheckoutId]);

  const checkoutId = checkout ? checkout.id : '';
  const addToCart = useCallback(
    (productId, count, customAttributes, activateCart) => {
      if (!checkout || !count) {
        return;
      }

      shopifyClient.checkout
        .addLineItems(checkoutId, [
          {
            variantId: btoa(`gid://shopify/ProductVariant/${productId}`),
            quantity: count,
            customAttributes: customAttributes,
          },
        ])
        .then((co) => {
          setCheckout(co);
          if (activateCart) {
            setCartActive(true);
            document.querySelectorAll('button.is-loading').forEach((el) => {
              el.classList.remove('is-loading');
            });
          }
        });
    },
    [checkoutId]
  );

  const onAddToCartClick = useCallback(
    async (e) => {
      const el = e.target.closest('.field.is-add-to-cart');
      if (!el) {
        return;
      }

      const button = el.querySelector('button');
      if (button) {
        button.classList.add('is-loading');
      }

      const productId = el.dataset.productId;
      const input = el.querySelector('input');

      // If checkout already has this product, remove all warranty and add new warranty.
      const pli = checkout.lineItems.find((li) => {
        const ids = atob(li.variant.id).split('/');
        return ids[ids.length - 1] === productId;
      });

      let extraCount = 0;
      if (pli) {
        const wlis = checkout.lineItems
          .filter((li) => {
            const ref = li.customAttributes.find((x) => x.key === 'Ref');
            return ref && ref.value === productId;
          })
          .map((li) => li.id);

        await shopifyClient.checkout.removeLineItems(checkout.id, wlis);
        extraCount = pli.quantity;
      }

      const { renderOffers } = cartOptions;
      if (renderOffers) {
        //Extend - HandleAddToCart to display modal, and add plans to the cart
        const product = products.find((x) => x.product_id === productId);
        handleAddToCart(
          productId,
          product.title,
          (parseInt(input.value) || 0) + extraCount,
          addToCart,
          function (activateCart) {
            addToCart(productId, parseInt(input.value) || 0, [], activateCart);
          }
        );
        //Extend - End Extend Code
      } else {
        addToCart(productId, parseInt(input.value) || 0, [], true);
      }
    },
    [checkout, addToCart]
  );

  useEffect(() => {
    document.querySelectorAll('.field.is-add-to-cart').forEach((el) => {
      const input = el.querySelector('input');
      const adjustInput = (value) => {
        const current = parseInt(input.value) || 0;
        const newValue = Math.min(
          Math.max(MIN_ITEM_COUNT, current + value),
          MAX_ITEM_COUNT
        );
        input.value = newValue.toString();
      };
      el.querySelector('.icon.is-left').addEventListener('click', () =>
        adjustInput(-1)
      );
      el.querySelector('.icon.is-right').addEventListener('click', () =>
        adjustInput(1)
      );
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll('.field.is-add-to-cart').forEach((el) => {
      el.querySelector('.button').addEventListener('click', onAddToCartClick);
    });

    return () => {
      document.querySelectorAll('.field.is-add-to-cart').forEach((el) => {
        el.querySelector('.button').removeEventListener(
          'click',
          onAddToCartClick
        );
      });
    };
  }, [onAddToCartClick]);

  const { renderOffers } = cartOptions;
  useEffect(() => {
    if (renderOffers) {
      Extend.buttons.destroyAll();
      renderProductOffer();
    }
  }, []);

  useEffect(() => {
    const count = countTotalItems(checkout);
    document.querySelectorAll('button.is-nav-cart > span').forEach((el) => {
      if (count > 0) {
        el.classList.remove('is-hidden');
      } else {
        el.classList.add('is-hidden');
      }

      el.textContent = count.toString();
    });
  }, [checkout]);

  return e(Modal, { checkout, setCheckout, addToCart });
};

function renderApp() {
  const root = document.getElementById('nav-cart-app');
  if (!root) {
    return;
  }

  ReactDOM.render(e(App), root);
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

  shopifyClient = ShopifyBuy.buildClient(clientConfig);
}

export function initialize(products_, options) {
  products = products_;
  cartOptions = options;
  checkoutIdKey = `shopify-checkout-id-${options.region}`;
  initShopifySdk();

  renderApp();

  const exports = {
    show: () => {
      if (setCartActive) {
        setCartActive(true);
      }
    },
  };
  
  return Promise.resolve(exports);
}
