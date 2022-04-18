<template>
  <slot name="custom-page" />
  <main class="blog">
    <div class="container">
      <slot name="top" />

      <Content class="content" />
      <BlogFooter />
      <NextAndPrevLinks />

      <slot name="bottom" />
    </div>
  </main>
</template>

<script setup>
import BlogFooter from './BlogFooter.vue';
import NextAndPrevLinks from './NextAndPrevLinks.vue';
</script>

<style scoped>
.blog {
  padding-top: var(--header-height);
}

@media (min-width: 720px) {
  .blog {
    margin-left: 16.4rem;
  }
}

@media (min-width: 960px) {
  .blog {
    margin-left: 20rem;
  }
}

.container {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: 48rem;
}

.content {
  padding-bottom: 1.5rem;
}

@media (max-width: 420px) {
  .content {
    /* fix carbon ads display */
    clear: both;
  }
}
</style>
