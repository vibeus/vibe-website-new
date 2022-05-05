<template>
  <main class="android-app-store">
    <Hero :hero="fm.hero" />
    <TabBar :tab-bar="fm.tab_bar" />
    <AppStore />
  </main>
</template>

<script setup>
import Hero from './sections/Hero.vue';
import TabBar from './sections/TabBar.vue';
import AppStore from './sections/AppStore/Index.vue';
import { apps55, apps75 } from '@/data/app';
/* Start Data */
const currentTab = ref('is-55');
const state = ref({ useCase: undefined, type: undefined });
const searchTerm = ref('');
const isFilter = ref(false);
const isSearch = ref(false);
const apps55Filter = ref({});
const apps75Filter = ref({});
const currentItem = ref('');

const setState = ({ useCase, type }) => {
  state.value = { useCase, type };
  console.log('state: ', state);

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

const setFilter = (filterKey) => {
  if (currentTab.value === 'is-55') {
    apps55Filter.value =
      filterKey === 'category'
        ? apps55.filter((i) => i.use_case === state.value.useCase)
        : apps55.filter((i) => i.type === state.value.type);
  } else {
    apps75Filter.value =
      filterKey === 'category'
        ? apps75.filter((i) => i.use_case === state.value.useCase)
        : apps75.filter((i) => i.type === state.value.type);
  }
};

const chooseCate = ({ key, value }) => {
  currentItem.value = `${key}=${value}`;
  if (key === 'category') {
    setState({ useCase: value });
    setFilter(key);
  } else if (key === 'type') {
    setState({ type: value });
    setFilter(key);
  } else {
    setState({});
  }
};

const { frontmatter: fm } = useData();

// Sidebar, SearchBox
provide('setFilter', setFilter);
provide('chooseCate', chooseCate);
// Tabbar, Sidebar
provide('setState', setState);

provide('currentTab', currentTab); // TabBar App BottomCta Disclaimer
provide('state', state); // SearchBox
provide('searchTerm', searchTerm); // SearchBox
provide('isFilter', isFilter); // App
provide('isSearch', isSearch); // SearchBox App
provide('apps55Filter', apps55Filter); // Sidebar SearchBox App
provide('apps75Filter', apps75Filter); // Sidebar SearchBox App
provide('currentItem', currentItem); // TabBar Sidebar SearchBox App
/* End Data */
</script>

<style lang="sass"></style>
