<template>
  <div class="tip-box tip-box-product">
    <lazy-img
      class="icon"
      src="global-cart/tip_icon.png"
      alt="tip_icon.png"
    />
    <div class="is-product tip-box-content">
      {{ tip }}
      <div class="mask"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tip: {
    type: String,
    default: ''
  }
});
</script>

<style lang="sass" scoped>
@import '@css/base'
.tip-box
  position: relative
  &:hover .tip-box-content
    display: block
  .icon
    width: 15px
    height: 15px
    margin-left: 8px
    cursor: pointer
  &.tip-box-product
    +mobile
      display: none
  .tip-box-content
    display: none
    position: absolute
    background-color: #fff
    bottom: 164%
    left: -72%
    color: #828282
    font-family: $vibe-family-body
    font-size: 12px
    font-weight: 400
    line-height: 39px
    box-shadow: -1px 3px 10px rgba(0, 0, 0, 0.12)
    border-radius: 4px
    animation-duration: .75s
    animation-fill-mode: both
    animation-name: tipBox
    &:hover
      display: block
  .tip-title
    color: #4F4F4F
    font-weight: $vibe-bold
    font-size: 14px
    margin-bottom: 5px
  .tip-info
    font-weight: 400
  .tip-url
    text-decoration: underline
    font-weight: unset
    color: #828282
    &:hover
      color: $vibe-purple
  &.is-shipping
    width: 176px
    height: 32px
    padding: 12px 18px
    line-height: 15px
    &::after
      content: ''
      height: 14px
      width: 14px
      position: absolute
      left: 12.5%
      top: 81%
      background: #fff
      transform: rotate(45deg)
      +mobile
        left: 12%
  &.is-tax
    width: 385px
    height: 110px
    padding: 16px 18px
    line-height: 18px
    +mobile
      width: 359px
      left: -24px
    .mask
      position: absolute
      width: 80%
      height: 30%
      top: 91%
      left: -5%
    &::after
      content: ''
      height: 14px
      width: 14px
      position: absolute
      left: 6%
      top: 93%
      background: #fff
      transform: rotate(45deg)
      +mobile
        left: 8%
</style>
