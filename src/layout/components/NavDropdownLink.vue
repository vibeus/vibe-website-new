<script setup>
import { ref, watch } from 'vue';
import NavDropdownLinkItem from './NavDropdownLinkItem.vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const route = useRoute();

const open = ref(false);

watch(
  () => route.path,
  () => {
    open.value = false;
  }
);

function toggle() {
  open.value = !open.value;
}
</script>

<template>
  <div class="nav-dropdown-link" :class="{ open }">
    <button class="button" :aria-label="item.ariaLabel" @click="toggle">
      <span class="button-text">{{ item.text }}</span>
      <span class="button-arrow" :class="open ? 'down' : 'right'" />
    </button>

    <ul class="dialog">
      <li v-for="item in item.items" :key="item.text" class="dialog-item">
        <NavDropdownLinkItem :item="item" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.nav-dropdown-link {
  position: relative;
  height: 36px;
  overflow: hidden;
  cursor: pointer;
}
.button-text {
  font-size: 16px;
}
@media (min-width: 720px) {
  .nav-dropdown-link {
    height: auto;
    overflow: visible;
  }

  .nav-dropdown-link:hover .dialog {
    display: block;
  }
}

.nav-dropdown-link.open {
  height: auto;
}

.nav-dropdown-link .button {
  display: block;
  height: 66px;
  border: 0;
  padding: 8px 40px 8px 12px;
  width: 100%;
  text-align: left;
  line-height: 36px;
  font-family: var(--font-family-base);
  font-size: 1rem;
  white-space: nowrap;
  background-color: transparent;
  cursor: pointer;
}
.nav-dropdown-link .button:hover {
  color: #f66;
}

.button:focus {
  outline: 0;
}

@media (min-width: 720px) {
  .button {
    border-bottom: 2px solid transparent;
    padding: 0;
    line-height: 24px;
    font-size: 0.9rem;
    font-weight: 500;
  }
}

.button-arrow {
  /** display: inline-block;
  margin-top: -1px;

  border-top: 6px solid #ccc;
  border-right: 4px solid transparent;
  border-bottom: 0;
  border-left: 4px solid transparent;
  vertical-align: middle;**/
  border: 3px solid rgba(0, 0, 0, 0);
  border-radius: 2px;
  border-right: 0;
  border-top: 0;
  display: block;
  height: 0.625em;
  margin-top: -0.4375em;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: rotate(-45deg);
  transform-origin: center;
  width: 0.625em;
  border-color: #111;
  margin-top: -0.375em;
  right: 1.125em;
}

.button-arrow.right {
  transform: rotate(-90deg);
}

@media (min-width: 720px) {
  .button-arrow.right {
    /** transform: rotate(0);**/
    transform: rotate(-45deg);
  }
}

.dialog {
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 720px) {
  .dialog {
    display: none;
    position: absolute;
    top: 46px;
    right: -40px;
    border-radius: 6px;
    padding: 12px 0;
    min-width: 128px;
    background-color: var(--c-bg);
    box-shadow: var(--shadow-3);
  }
}
</style>
