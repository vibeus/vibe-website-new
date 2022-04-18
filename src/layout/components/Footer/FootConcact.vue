<template>
  <div class="section is-vibe-foot-contact">
    <div class="container">
      <div class="level">
        <div v-if="contact" class="level-left">
          <div class="level-item">
            <span class="icon">
              <svg-icon icon-name="footer-email" />
            </span>
            <a :href="contact.url">
              <span>{{ contact.content }}</span>
            </a>
          </div>
        </div>
        <div v-if="copyright" class="level-item is-copyright">
          <div>
            <template v-for="(item, idx) in copyright" :key="idx">
              <span>
                {{ item }}
              </span>
            </template>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item is-social">
            <template v-for="(item, idx) in socials" :key="idx">
              <a :href="item.url" target="_blank">
                <span class="icon">
                  <svg-icon :icon-name="item.icon" />
                </span>
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  contact: {
    type: Object,
  },
  copyright: {
    type: Array,
  },
  socials: {
    type: Array,
  },
});
</script>

<style lang="sass" scoped>
@import '/@css/base'
.section.is-vibe-foot-contact
  border-top: 1px solid #F2F2F2
  padding: 19px 3rem
  color: $vibe-black
  font-family: $family-body 
  > .container
    max-width: 1200px
    width: auto
  .level
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    +mobile
      flex-direction: column
  .level-left
    display: flex
    align-items: center
    justify-content: flex-start
    flex-basis: auto
    flex-grow: 0
    flex-shrink: 0
    .level-item
      align-items: center
      display: flex
      flex-basis: auto
      flex-grow: 0
      flex-shrink: 0
      justify-content: center
    .icon
      width: 20px
      height: 20px
      margin-right: 4px
  .level-item.is-copyright
    span
      font-size: 13px
    +desktop
      span
        padding-left: 8px
        padding-right: 5px
      span:not(:first-child)
        border-left: 1px solid black
    +mobile
      text-align: center
      margin-bottom: 0.75rem
      span
        display: block
  .level-item.is-social
    z-index: 200
    a
      &:not(:last-child)
        margin-right: 12px
    .svg-icon
      width: 16px
      height: 16px
    .icon
      width: 30px
      height: 30px
      background-color: $vibe-black
      border-radius: 15px
      fill: $vibe-white
      &:hover
        background-color: $primary

</style>
