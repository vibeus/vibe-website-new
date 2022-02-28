<template>
  <footer v-if="frontmatter.footer" class="footer">
    <div class="container">
      <p class="text">{{ frontmatter.footer }}</p>
    </div>
  </footer>
  <div @click="consoleTT">
    {{ testInfo.user }}
  </div>
</template>

<script setup>
import { useData } from 'vitepress';

const { frontmatter } = useData();

const emit = defineEmits(['consoleTest']);

/* Start Data */
const testInfo = inject('testInfo');


provide('test', '123');
/* End Data */

const consoleTT = () => {
  emit('consoleTest');
};
</script>

<style scoped>
.footer {
  margin: 0 auto;
  max-width: 960px;
}

@media (min-width: 720px) {
  .footer {
    padding: 0 1.5rem;
  }
}

.container {
  padding: 2rem 1.5rem 2.25rem;
}

.home-hero + .footer .container,
.home-features + .footer .container,
.home-content + .footer .container {
  border-top: 1px solid var(--c-divider);
}

@media (min-width: 420px) {
  .container {
    padding: 3rem 1.5rem 3.25rem;
  }
}

.text {
  margin: 0;
  text-align: center;
  line-height: 1.4;
  font-size: 0.9rem;
  color: var(--c-text-light);
}
</style>
