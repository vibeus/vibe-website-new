<template>
  <main class="android-app-store">
    <Hero :hero="fm.hero" />
    <TabBar :tabBar="fm.tab_bar"/>
    <AppStore/>
  </main>
</template>

<script setup>
import Hero from './sections/Hero.vue';
import TabBar from './sections/TabBar.vue';
import AppStore from './sections/AppStore/Index.vue';
/* Start Data */
const { frontmatter: fm } = useData();
console.log('fm: ', fm.value);

/* End Data */
</script>

<style lang="sass"></style>
