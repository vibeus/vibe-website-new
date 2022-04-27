<template>
  <Transition name="down">
    <div class="message" :class="`message-${config.type}`" v-show="visible">
      <svg-icon v-if="config.icon" :icon-name="config.icon" />
      <span class="content" v-text="config.content"></span>
      <svg-icon class="close" v-if="config.close" icon-name="shared-close" @click="close" />
    </div>
  </Transition>
</template>

<script setup>
import SvgIcon from '@vcomp/common/SvgIcon.vue';

const props = defineProps({
  config: { // 消息配置项
    type: Object,
    default: () => {}
  },
  remove: { // 取消挂载回调
    type: Function,
    default: () => {}
  },
});

const visible = ref(false);

// 打开消息
const open = (config) => {
  visible.value = true;

  // 指定时间后移除消息
  if (config.duration !== 0)
    setTimeout(() => close(), config.duration);
};


onMounted(() => {
  open(props.config);
});

// 消息关闭
const close = () => {
  visible.value = false;
  setTimeout(() => {
    props.remove();
  }, 200);
};
</script>

<style lang="sass">
.down
  &-enter
    &-from
      transform: translate3d(0,-75px,0)
      opacity: 0
    &-active
      transition: all 0.5s
    &-to
      transform: none
      opacity: 1

.vb-message
  position: fixed
  z-index: 9999
  top: 25px
  left: 50%
  .message
    display: flex
    align-items: center
    width: 300px
    height: 50px
    margin-left: -150px
    line-height: 50px
    padding: 0 25px
    border: 1px solid #e4e4e4
    background: #f5f5f5
    color: #999
    border-radius: 4px
    &.message-error
      color: #F56C6C
      background-color: rgb(254, 240, 240)
      border-color: rgb(253, 226, 226)
    &.message-warn
      color: #E6A23C
      background-color: rgb(253, 246, 236)
      border-color: rgb(250, 236, 216)
    &.message-info
      background-color: white
      color: #111
    &.message-success
      color: #67C23A
      background-color: rgb(240, 249, 235)
      border-color: rgb(225, 243, 216)

    .svg-icon
      width: 16px
      height: 16px
      margin-right: 8px

</style>
