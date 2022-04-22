<template>
  <div class="section customer-comments">
    <div class="comments-wrap">
      <div class="left-comments-wrap is-hidden-mobile">
        <a
          class="comment-card"
          v-for="comment in comments.left_column.items"
          :key="comment.name"
          :href="comment.url"
          target="_blank"
        >
          <div class="avatar-container">
            <div class="avatar">
              <lazy-img :src="comment.avatar"></lazy-img>
            </div>
            <h1 class="name">{{ comment.name }}</h1>
            <div class="logo"></div>
          </div>
          <hr />
          <div class="email">
            <span v-for="email in comment.email" :key="email.text" :class="email.class">{{
              email.text
            }}</span>
          </div>
          <div class="comment-container">
            <div class="icon"></div>
            <div class="content" v-html="comment.content"></div>
          </div>
          <div class="date">
            {{ comment.date }}
          </div>
        </a>
      </div>
      <div class="right-comments-wrap">
        <a
          class="comment-card"
          v-for="comment in comments.right_column.items"
          :key="comment.name"
          :href="comment.url"
          target="_blank"
        >
          <div class="avatar-container">
            <div class="avatar">
              <lazy-img :src="comment.avatar"></lazy-img>
            </div>
            <h1 class="name">{{ comment.name }}</h1>
            <div class="logo"></div>
          </div>
          <hr />
          <div class="email">
            <span v-for="email in comment.email" :key="email.text" :class="email.class">{{
              email.text
            }}</span>
          </div>
          <div class="comment-container">
            <div class="icon"></div>
            <div class="content" v-html="comment.content"></div>
          </div>
          <div class="date">
            {{ comment.date }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  comments: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@css/base'
.comments-wrap
  display: flex
  justify-content: space-between
  margin: auto
  max-width: 1050px
  .comment-card
    box-sizing: border-box
    max-width: 480px
    display: block
    position: relative
    margin: 20px 12px
    background: #fff
    box-shadow: 5px 5px 50px rgb(0 0 0 / 10%)
    border-radius: 8px
    padding-left: 27px
    padding-top: 10px
    padding-right:24px
    .avatar-container
      display: flex
      align-items: center
      margin-bottom: 10px
      .name
        font-size: 16px
        font-weight: $vibe-bold
        margin-left: 16px
        left: 80px
        top: 27px
        word-wrap: break-word
        word-break: break-all
    hr
      border: 1px solid #e0e0e0
    .date
      padding-top: 32px

      padding-bottom: 24px
      color: #828282
      font-size: 14px
</style>
