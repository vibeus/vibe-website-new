import { defineStore } from 'pinia';
import { products } from '@/data/products';

const getLocalCartList = () => {
  return JSON.parse(localStorage.cartList || '{}');
};

const setLocalCartList = () => {

};
export const useCartEffect = defineStore({
  id: 'cart',
  state: () => ({
    isCartModalOpen: false, //default setting
    shopifyClient: null,
    checkoutIdKey: 'shopify-checkout-id-us',
    checkoutIdValue: null,
    checkout: null,
    cartList: getLocalCartList()
  }),

  actions: {
    handleOpenCartModal() {
      if(this.checkout) {
        this.isCartModalOpen = !this.isCartModalOpen;
      }
    },
    handleSetShopifyClient(payload) {
      if(!this.shopifyClient) {
        this.shopifyClient = payload;
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
            this.checkout = co;
          });
      } else {
        this.shopifyClient.checkout.create().then((co) => {
          this.checkout = co;
          this.checkoutIdValue = co.id;
        });
      }
    }
  }
});

