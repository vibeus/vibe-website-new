<template>
  <div class="navbar-item">
    <span class="navbar-link" :aria-label="menu.ariaLabel" @click="toggle">
      {{ menu.title }}
    </span>
    <div class="navbar-dropdown is-boxed">
      <template v-if="menu.submenu">
        <template v-for="item in menu.submenu" :key="item.title">
          <a class="dropdown-item" :href="item.link">
            {{ item.text }}
          </a>
        </template>
      </template>
      <template v-else>
        <div class="f-row">
          <div class="f-col" v-for="submenu in menu.columnSubmenu" :key="submenu.title">
            <span class="dropdown-item is-column-title">{{submenu.title}}</span>
            <template v-for="item in submenu.items" :key="item.text">
              <a class="dropdown-item" :href="item.link">
                {{ item.text }}
              </a>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
});

const route = useRoute();

</script>

<style lang="sass" scoped>
@import '/@css/base'
.navbar-link
  position: relative
  z-index: 999
  display: flex
  align-items: center
  padding: 0.5rem 0.75rem
  color: #111
  line-height: 1.5
  cursor: pointer
  &:hover
    color: #f66
    text-decoration: none
  &:not(.is-arrowless)
    padding-right: 2.5em
  &::after
    content: " "
    position: absolute
    top: 50%
    display: block
    width: 0.625em
    height: 0.625em
    margin-top: -0.375em
    right: 1.125em
    transform: rotate(-45deg)
    transform-origin: center
    border: 3px solid transparent
    border-top: 0
    border-radius: 2px
    border-right: 0
    border-color: #111
  &:hover + .navbar-dropdown
    display: flex
    flex-direction: column
    opacity: 1

.navbar-dropdown
  position: absolute
  top: 50px
  left: -24px
  z-index: 998
  display: none
  margin-top: -12px
  padding-top: .5rem
  padding-bottom: .5rem
  background-color: #fff
  box-shadow: 0 -1px 10px rgb(55 55 55 / 10%)
  border-radius: 2px
  font-size: 16px
  +widescreen
    border-radius: 6px
    border-top: none
    box-shadow: 0 8px 8px rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 10%)
  &:hover, &:focus
    display: flex
    flex-direction: column
    pointer-events: auto
    transform: translateY(0)
    
  .dropdown-item
    white-space: nowrap
    padding: .75rem 76px .75rem 38px
    &:hover
      color: #f66
      text-decoration: none
    &.is-column-title
      font-weight: 500
      color: #b2b2b2
</style>
