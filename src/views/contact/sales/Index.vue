<template>
  <main class="request-quote">
    <ContactHero :contactHero="fm.hero" />
    <Contact :contactSection="fm.contact" />
    <BottomCta :bottomCta="fm.bottom_cta" />
  </main>
</template>

<script setup>
import ContactHero from '../components/contactHero.vue';
import Contact from './sections/Contact.vue';
console.log('Contact: ', Contact);
import BottomCta from '/@vcomp/BottomCta.vue';

/* Start Data */
const { frontmatter: fm } = useData();
console.log('fm: ', fm);

/* End Data */
</script>

<style lang="sass" scoped>
</style>
