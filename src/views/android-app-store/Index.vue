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
let state = ref({ useCase: undefined, type: 'bowser' });
const searchTerm = ref('');
const isFilter = ref(false);

const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);

provide('currentTab', currentTab);
provide('state', state);
provide('searchTerm', searchTerm);
provide('isFilter', isFilter);
/* End Data */

const setState = ({ useCase, type }) => {
  state = { useCase, type };
  let url = '#';
  isFilter.value = false;
  if (useCase) {
    url = '#category=' + useCase;
    isFilter.value = true;
  } else if (type) {
    url = '#type=' + type;
    isFilter.value = true;
  }
  history.pushState(state, null, url);
  console.log('state: ', state);
  console.log('isFilter.value: ', isFilter.value);
};
provide('setState', setState);
</script>

<style lang="sass"></style>
