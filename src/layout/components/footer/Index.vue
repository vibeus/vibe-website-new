<template>
  <footer>
    <FootLink
      v-if="!foot_contact_bar_only"
      :sections="footer.sections"
    />
    <FootConcact
      :contact="footer.contact"
      :copyright="footer.copyright"
      :socials="footer.socials"
    />
  </footer>
</template>

<script setup>
import FootConcact from './FootConcact.vue';
import FootLink from './FootLink.vue';

const { frontmatter: fm, theme } = useData();
const footer = theme.value.footer;
const foot_contact_bar_only = fm.value.foot_contact_bar_only;
</script>

<style lang="sass" scoped>
@import '/@css/base'


</style>
