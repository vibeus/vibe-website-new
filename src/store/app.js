// TODO: load element by device rather than is-hidden-

import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    device: '',
  }),

  actions: {
    changeDevice() {
      const width = document.body.clientWidth;
      if (width < 700)
        this.device = 'mobile';
      else if (width < 769)
        this.device = 'touch';
      else if (width < 1025)
        this.device = 'desktop';
      else if (width < 1281)
        this.device = 'widescreen';
      else
        this.device = 'fullhd';
    }
  }
});
