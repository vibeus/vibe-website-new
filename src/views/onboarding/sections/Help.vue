<template>
  <section class="section is-help">
    <div class="container">
      <div class="help-wrapper">
        <a
          v-for="help in help.items"
          :key="help.title"
          :href="help.url"
          target="_blank"
        >
          <lazy-img
            class="image"
            :src="help.figure"
            :alt="help.figure"
          />
          <h2 class="title">{{ help.title }}</h2>
          <div class="content">
            {{ help.body }}
          </div>
        </a>
      </div>
    </div>
    <div
      class="contact-widget"
      :class="isCollapse?'':'is-active'"
    >
      <span
        class="title"
        @click="isCollapse=false"
      >
        <svg-icon
          class="logo-icon"
          :icon-name="help.contact_widget.logo_icon"
        />
        <span class="text">{{ help.contact_widget.title }}</span>
      </span>
      <span class="content">
        <div
          v-for="contact in help.contact_widget.contact"
          :key="contact.content"
          class="content-container"
        > 
          <svg-icon
            class="large-icon"
            :icon-name="contact.icon"
          />
          <a
            class="link"
            :href="contact.url"
          >{{ contact.content }}</a>
        </div>
        <div class="split-line"></div>
      </span>

      <svg-icon
        class="collapse-icon"
        icon-name="onboarding-contact-widget-collapse-icon"
        @click="isCollapse=true"
      />
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  help: {
    type: Object,
    required: true,
  },
});
const isCollapse=ref(true);
</script>
<style lang="sass" scoped>
@import '@css/base'
.section.is-help
  position: relative
  padding: 3rem 1.5rem
  .container
    max-width: 1152px
    .help-wrapper
      display: flex
      +mobile
        flex-direction: column
      a
        display: flex
        flex-direction: column
        width: 33.3333%
        margin: 12px 20px
        max-width: 350px
        min-height: 364px
        padding: 57px 25px
        justify-content: center
        align-items: center
        text-align: center
        box-sizing: border-box
        +mobile
          width: 300px
          margin: 12px auto
          padding: 12px 25px
          min-height: unset
        &:hover
          box-shadow: 0 2px 10px 5px rgb(0 0 0 / 10%)
          border-radius: 10px
        .title
          max-width: 300px
          font-size: 24px
          line-height: 30px
          font-family: $vibe-family-head
          font-weight: $vibe-bold
          margin-bottom: 16px
        .image
          display: block
          max-width: 130px
          margin-bottom: 27px
  .contact-widget
    outline: none
    background-color: white
    box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.2)
    overflow: hidden
    position: absolute
    margin: auto
    width: 270px
    height: 275px
    border-radius: 5px 5px 0px 0px
    top: auto
    right: 0
    bottom: -275px + 60px
    +widescreen
      width: 370px
      height: 250px
      border-radius: 5px 0px 0px 5px
      right: -370px + 60px
      top: 0
      bottom: 0
    &.is-active
      bottom: 0
      +widescreen
        right: 0
    .collapse-icon
      cursor: pointer
      width: 18px
      height: 17px
      position: absolute
      margin: auto
      transform: rotate(90deg)
      bottom: 12px
      left: 0
      right: 0
      color: $vibe-purple
      +widescreen
        top: 0
        bottom: 0
        right: 20px
        left: auto
        transform: none
      &:hover
        color: $vibe-pink
    .title
      text-align: center
      background-color: $vibe-purple
      float: left
      cursor: pointer
      margin: 0
      width: 100%
      height: 60px
      padding: 14px 20px 10px 20px
      box-sizing: border-box
      +widescreen
        writing-mode: vertical-lr
        width: 60px
        height: 100%
        padding: 16px 14px 16px 10px
        transform: scale(-1)
      .text
        margin-left: 4px
        height: 31px
        color: white
        font-size: 22px
        line-height: 31px
        vertical-align: top
        +widescreen
          margin-left: 0
          margin-top: 10px
          vertical-align: baseline
      .logo-icon
        width: 41px
        height: 36px
        display: inline-block
        font-size: 0
        +widescreen
          transform: rotate(90deg)
    .content
      float: left
      margin: 0
      width: 100%
      height: 215px
      padding: 0px 32px 26px 32px
      display: flex
      flex-direction: column
      box-sizing: border-box
      +widescreen
        width: 370px - 60px
        height: 100%
        padding: 0 60px 0 48px
      .content-container
        width: 100%
        height: 100%
        position: relative
        display: flex
        justify-content: center
        align-items: center
        .large-icon
          width: 48px
          height: 36px
          margin-bottom: 5px
        .link
          font-size: 18px
          line-height: 18px
          font-weight: $vibe-bold
      .split-line
        height: 0.5px
        border-top: 0.5px solid black
        margin: auto
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        +widescreen
          width: 370px - 60px - 48px - 60px

  
  background-color: white
  +mobile
    padding-bottom: 120px
  .column a
    display: block
    &:hover
      color: black
    .item
      max-width: 350px
      min-height: 364px
      margin: auto
      background-color: white
      padding: 57px 25px
      display: flex
      flex-direction: column
      align-items: center
      +mobile
        width: 300px
        padding: 15px 15px
        min-height: 0
        height: auto
      &:hover
        box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.1)
        border-radius: 10px
      .image
        max-width: 130px
        margin-bottom: 27px

      .item-title
        text-align: center
        max-width: 300px
        font-size: 24px
        line-height: 30px
        font-family: $vibe-family-head
        font-weight: $vibe-bold
        margin-bottom: 16px
        +touch
          font-size: 22px
          left: 28px
        +mobile
          font-size: 20px
          line-height: 25px
      .content
        max-width: 300px
        text-align: center
        font-size: 18px
        line-height: 26px
        +mobile
          font-size: 16px
          line-height: 23px

</style>
