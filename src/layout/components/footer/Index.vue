<template>
  <footer>
    <FootLink
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

const { theme } = useData();
const footer = theme.value.footer;
console.log('footer: ', footer);
</script>

<style lang="sass" scoped>
@import '/@css/base'
.section.is-vibe-foot
  background: $vibe-black
  color: $vibe-white
  padding: 7.25rem 3rem
  +mobile
    padding: 5rem 1.5rem
  +widescreen
    padding: 8.75rem 3rem
  > .container
    max-width: 1200px
  +mobile
    .columns.is-links
      padding-top: 1.5rem
  .image.is-foot-logo
    svg
      width: 80px
      height: auto
      +mobile
        width: 60px
      +widescreen
        width: 100px
    +mobile
      margin-top: 1rem
    .logoHidden
      clip: rect(0px, 0px, 0px, 0px)
      clip-path: inset(50%)
      height: 1px
      overflow: hidden
      position: absolute
      white-space: nowrap
      width: 1px
  .column.is-foot-section
    min-width: 140px
    .foot-link
      margin-bottom: 1.2rem
      +mobile
        font-size: 14px
    h2
      font-family: $vibe-family-heading
      font-weight: $vibe-bold
      margin-bottom: 2rem
      +mobile
        margin-bottom: 1.389rem
    a
      color: $vibe-white
      &:hover
        color: $primary
    .image.is-foot-figure
      max-width: 96px

</style>
