import { defineStore } from 'pinia';
export const useAndroidStore = defineStore({
  id: 'android',
  state: () => ({
    appState,
  }),

  actions: {
    setState({ useCase, type }) {
      this.appState = { useCase, type };
      let url = '#';
      if (useCase) {
        url = '#category=' + useCase;
      } else if (type) {
        url = '#type=' + type;
      }
      console.log(url);
      console.log(appState);
      history.pushState(appState, null, url);
    }
  }
});
