<template>
  <div class="theme" :class="pageClasses">
    <NavBar v-if="showNavbar" @toggle="toggleSidebar">
      <template #search>
        <slot name="navbar-search">
          <AlgoliaSearchBox
            v-if="theme.algolia"
            :options="theme.algolia"
            :multilang="isMultiLang"
          />
        </slot>
      </template>
    </NavBar>

    <!-- <SideBar :open="openSideBar">
      <template #sidebar-top>
        <slot name="sidebar-top" />
      </template>
      <template #sidebar-bottom>
        <slot name="sidebar-bottom" />
      </template>
    </SideBar> -->

    <Blog v-if="isBlog">
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Blog>

    <Content v-else />

    <VFooter />
  </div>

  <Debug />
</template>

<script setup>
import { isSideBarEmpty, getSideBarConfig } from './support/sideBar';

// components
import NavBar from './components/navbar/Index.vue';
// import SideBar from './components/SideBar.vue';
import VFooter from './components/footer/Index.vue';
import Blog from './components/Blog.vue';

const NoopComponent = () => null;

const AlgoliaSearchBox = __ALGOLIA__
  ? defineAsyncComponent(() => import('./components/AlgoliaSearchBox.vue'))
  : NoopComponent;

// generic state
const route = useRoute();
const { site, page, theme, frontmatter: fm } = useData();

// TODO: err router Maximum call stack size exceeded
// CustomLayout = import('/@/views/' + fm.value.layout + '/Index.vue');
// ? 
// : defineAsyncComponent(() => import('../pageWebsite/' + fm.value.layout + '/Index.vue'));

// custom layout
const isBlog = computed(() => !!fm.value.isBlog);

// automatic multilang check for AlgoliaSearchBox
const isMultiLang = computed(() => Object.keys(site.value.langs).length > 1);

// navbar
const showNavbar = computed(() => {
  const themeConfig = theme.value;
  if (fm.value.navbar === false || themeConfig.navbar === false) {
    return false;
  }
  return (
    site.value.title || themeConfig.logo || themeConfig.repo || themeConfig.nav
  );
});

// sidebar
// const openSideBar = ref(false);

// const showSidebar = computed(() => {
//   if (fm.value.sidebar !== true)
//     return false;

//   return !isSideBarEmpty(
//     getSideBarConfig(theme.value.sidebar, route.data.relativePath)
//   );
// });

// const toggleSidebar = (to) => {
//   openSideBar.value = typeof to === 'boolean' ? to : !openSideBar.value;
// };

// const hideSidebar = toggleSidebar.bind(null, false);
// close the sidebar when navigating to a different location
// watch(route, hideSidebar);
// TODO: route only changes when the pathname changes
// listening to hashchange does nothing because it's prevented in router

// page classes
const pageClasses = computed(() => {
  return [
    {
      'no-navbar': !showNavbar.value,
      // 'sidebar-open': openSideBar.value,
      // 'no-sidebar': !showSidebar.value
    }
  ];
});
</script>

<style lang="sass">
#ads-container
  margin: 0 auto


@media (min-width: 420px)
  #ads-container
    position: relative
    right: 0
    float: right
    margin: -8px -8px 24px 24px
    width: 146px
  


@media (max-width: 420px)
  #ads-container
    /* Avoid layout shift */
    height: 105px
    margin: 1.75rem 0
  


@media (min-width: 1400px)
  #ads-container
    position: fixed
    right: 8px
    bottom: 8px
  

</style>
