<template>
  <main class="request-quote">
    <Hero :hero="fm.hero" />
    <Contact :contactSection="fm.contact_section" />
    <BottomCta :bottomCta="fm.bottom_cta" />
  </main>
</template>

<script setup>
import Hero from './sections/Hero.vue';
import Contact from './sections/Contact.vue';
console.log('Contact: ', Contact);
import BottomCta from '/@vcomp/BottomCta.vue';

/* Start Data */
const { frontmatter: fm } = useData();

/* End Data */
</script>

<style lang="sass"></style>
