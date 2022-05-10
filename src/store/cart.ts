import { products } from '@/data/products';

const getVariantId = (lineItem) => {
  // Shopify used to encode line item id to base64, but changed without any notice.
  // Keep base64 decoding logic just in case it changes back...
  const maybeEncoded = lineItem.variant.id;
  if (maybeEncoded.startsWith('gid://')) {
    return maybeEncoded;
  } else {
    return atob(maybeEncoded);
  }
};

const moneyFmt = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const getLocalCartList = () => JSON.parse(localStorage.cartList || '{}');

const getCheckoutIdValue = () => localStorage.getItem('shopify-checkout-id-us') || null;

const setLocalCartList = (cartList) => localStorage.setItem('cartList', JSON.stringify(cartList));

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    isCartModalOpen: false, //default setting
    shopifyClient: null,
    checkoutIdKey: 'shopify-checkout-id-us',
    checkoutIdValue: getCheckoutIdValue(),
    checkout: null,   //return from shopify
    cartList: getLocalCartList(),  // Cart list
  }),
  getters: {
    getCartList(state) {
      return state.cartList;
    },
    getTotalItemCount(state) {
      const cartList = state.cartList;
      let count = 0;
      for (const value of Object.values(cartList)) {
        count+= value.quantity;
      }
      return count;
    },
    getTotalPrice(state) {
      const cartList = state.cartList;
      let totalPrice = 0;
      for(const value of Object.values(cartList)) {
        totalPrice+= value.quantity * value.price; 
      }
      return moneyFmt.format(totalPrice);
    }
  },
  actions: {
    handleDeleteItem(productId) {
      this.$patch(state => { 
        const { [productId]: removedProduct, ...restProduct } = state.cartList;
        state.cartList = restProduct;
        setLocalCartList(state.cartList);
      });
    },
    handleUpdateCartItem(productId, quantity) {
      if(!quantity) return; 

      const cartList = toRaw(this.cartList);
      cartList[productId].quantity += quantity;   //can be +1 or -1
    },  
    handleAddtoCart(productId, quantity = 0, customAttributes = []) {
      if(!this.checkoutIdValue || !quantity) return;
      const product = products.find((x) => x.product_id === productId);
      

      this.$patch(state => {
        const cartList = state.cartList;
        if(!cartList[productId]) {
          cartList[productId] = product;
          cartList[productId].quantity = 0; //initial quantity
        }
        const count = cartList[productId].quantity + quantity;
        if(count > 0)
          cartList[productId].quantity += quantity;

        setLocalCartList(cartList);
      });
    },
    handleSetShopifyClient(payload) {
      if(!this.shopifyClient) {
        this.$patch(state => state.shopifyClient = payload);
      }
      this.initialShopifyCheckout();
    },
    initialShopifyCheckout() {
      if (this.checkoutIdValue) {
        this.shopifyClient.checkout
          .fetch(this.checkoutIdValue)
          .catch((e) => {
            return this.shopifyClient.checkout.create();
          })
          .then((co) => {
            if (co) {
              return co;
            } else {
              return this.shopifyClient.checkout.create();
            }
          })
          .then((co) => {
            this.handleSetCheckout(co);
          });
      } else {
        this.shopifyClient.checkout.create().then((co) => {
          this.handleSetCheckout(co);
          this.handleSetCheckoutValue(co.id);
          localStorage.setItem(this.checkoutIdKey, this.checkoutIdValue);
        });
      }
    },
    handleSetCheckout(checkout) {
      this.$patch(state => state.checkout = checkout);
    },
    handleSetCheckoutValue(value) {
      this.$patch(state => state.checkoutIdValue = value);
    },
    handleOpenCartModal() {
      if(this.checkout) { 
        this.$patch(state => state.isCartModalOpen = !state.isCartModalOpen);
      }
    },
  }
});

