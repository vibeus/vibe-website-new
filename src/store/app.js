// TODO: load element by device rather than is-hidden-

import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    device: 'desktop',
  }),

  actions: {
    changeDevice(payload) {
      this.device = 'mobile';
    }
  }
});
