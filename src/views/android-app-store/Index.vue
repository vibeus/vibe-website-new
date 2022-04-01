<template>
  <main class="android-app-store">
    <Hero :hero="fm.hero" />
    <TabBar :tabBar="fm.tab_bar" />
    <AppStore />
  </main>
</template>

<script setup>
import Hero from './sections/Hero.vue';
import TabBar from './sections/TabBar.vue';
import AppStore from './sections/AppStore/Index.vue';
/* Start Data */
const currentTab = ref('is-55');
const state = ref({ useCase: undefined, type: 'bowser' });
const searchTerm = ref('');
const isFilter = ref(false);
const apps55Filter = ref({});
const apps75Filter = ref({});
const currentItem = ref('');

const setState = ({ useCase, type }) => {
  state.value = { useCase, type };

  let url = '#';
  isFilter.value = false;
  if (useCase) {
    url = '#category=' + useCase;
    isFilter.value = true;
  } else if (type) {
    url = '#type=' + type;
    isFilter.value = true;
  }
  history.pushState({ useCase, type }, null, url);
};

const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);

provide('setState', setState);
provide('currentTab', currentTab);
provide('state', state);
provide('searchTerm', searchTerm);
provide('isFilter', isFilter);
provide('apps55Filter', apps55Filter);
provide('apps75Filter', apps75Filter);
provide('currentItem', currentItem);
/* End Data */
</script>

<style lang="sass"></style>
