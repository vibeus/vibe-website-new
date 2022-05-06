<template>
  <div class="section customer-comments">
    <div class="toppart-body">
      <div class="container">
        <h1 class="title">
          {{ comments.title }}
        </h1>
        <div class="content">
          {{ comments.body }}
        </div>
      </div>
    </div>
    <div class="comments-wrap">
      <div class="left-comments-wrap is-hidden-mobile">
        <a
          v-for="comment in comments.left_column.items"
          :key="comment.name"
          class="comment-card"
          :href="comment.url"
          target="_blank"
        >
          <div class="avatar-container">
            <div class="avatar">
              <lazy-img :src="comment.avatar"></lazy-img>
              <h1 class="name">{{ comment.name }}</h1>
            </div>
            <lazy-img
              class="logo"
              :src="logoPath(comment.type)"
            ></lazy-img>
          </div>
          <div
            v-if="comment.type == 'amazon'"
            class="subtitle"
          >
            {{ comment.subtitle }}
          </div>
          <hr />

          <div class="email">
            <span
              v-for="email in comment.email"
              :key="email.text"
              :class="email.class"
            >{{
              email.text
            }}</span>
          </div>
          <lazy-img
            v-if="comment.name === 'the.vibe.board'"
            class="cover"
            :src="comment.cover"
          ></lazy-img>
          <div class="comment-container">
            <div
              class="content"
              v-html="comment.content"
            ></div>
            <lazy-img
              v-if="comment.type == 'ins'"
              class="ins-icon"
              src="customer/comment/ins-like-icon.png"
            ></lazy-img>
          </div>
          <div class="date">
            {{ comment.date }}
          </div>
        </a>
      </div>
      <div class="right-comments-wrap">
        <a
          v-for="comment in comments.right_column.items"
          :key="comment.name"
          class="comment-card"
          :href="comment.url"
          target="_blank"
        >
          <div
            class="avatar-container"
            :class="comment.type"
          >
            <div class="avatar">
              <lazy-img :src="comment.avatar"></lazy-img>
              <h1 class="name">{{ comment.name }}</h1>
            </div>
            <lazy-img
              class="logo"
              :src="logoPath(comment.type)"
            ></lazy-img>
          </div>
          <div
            v-if="comment.type == 'amazon'"
            class="subtitle"
          >
            {{ comment.subtitle }}
          </div>
          <hr />
          <div class="email">
            <span
              v-for="email in comment.email"
              :key="email.text"
              :class="email.class"
            >{{
              email.text
            }}</span>
          </div>
          <lazy-img
            v-if="comment.type === 'amazon'"
            class="cover"
            :src="comment.cover"
          ></lazy-img>
          <div class="comment-container">
            <div
              class="content"
              v-html="comment.content"
            ></div>
            <lazy-img
              v-if="comment.type == 'ins'"
              class="ins-icon"
              src="customer/comment/ins-like-icon.png"
            ></lazy-img>
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
const logoPath = (type) => {
  if (type === 'ins') {
    return 'customer/logo/ins-logo.png';
  } else if (type === 'twitter') {
    return 'customer/logo/twitter-logo.png';
  } else if (type === 'amazon') {
    return 'customer/logo/amazon-logo.png';
  }
};
</script>
<style lang="sass" scoped>
@import '@css/base'
.customer-comments
  padding: 120px 24px
  +mobile
    padding: 60px 24px
.toppart-body
  .container
   flex-direction: column
   align-items: center
  .title
    max-width: 933px
    text-align: center
    font-size: 48px
    margin-bottom: 1.5rem
    +mobile
      font-size: 32px
  .content
    margin: 0 auto 30px
    font-family: $vibe-family-body
    font-size: 18px
    line-height: 144%
    color: #000
    text-align: center
    max-width: 634px
.comments-wrap
  display: flex
  justify-content: space-between
  margin: auto
  max-width: 1050px
  .left-comments-wrap
    margin-top: 80px
  .comment-card
    box-sizing: border-box
    max-width: 480px
    display: block
    position: relative
    margin: 20px 12px 40px
    background: #fff
    box-shadow: 5px 5px 50px rgb(0 0 0 / 10%)
    border-radius: 8px
    padding: 10px 24px 0 27px
    font-family: $vibe-family-body
    .avatar-container
      display: flex
      align-items: center
      justify-content: space-between
      margin-bottom: 20px
      .avatar
        display: flex
        align-items: center
        img
          padding-top: 9px
        .name
          font-size: 16px
          font-weight: $vibe-bold
          margin-left: 16px
          left: 80px
          top: 27px
          line-height: 1.5
      .logo
        align-self: flex-start
        margin-right: -14px
      &.amazon
        margin-bottom: 0
        .avatar
          display: block
          .name
            margin-left: 0
            font-size: 18px
    .subtitle
      padding-top: 8px
      font-size: 14px
    .email
      font-size: 14px
      color: #4f4f4f
    .cover
      padding-bottom: 8px
    hr
      margin-top: 15px
      margin-bottom: 24px
      border: 1px solid #e0e0e0
    .comment-container
      display: flex
      align-items: flex-start
      margin-top: 8px
      .content
        max-width: 480px
        font-size: 16px
        line-height: 23px
    .ins-icon
      margin-top: 5px
    .date
      padding-top: 56px
      padding-bottom: 24px
      color: #828282
      font-size: 14px
    :deep(.is-at)
      color: $vibe-purple
</style>
